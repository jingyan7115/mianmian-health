/* Recognition runs on this device. CDN requests download software, never documents. */
window.ReportOCR = (() => {
  const CDN = 'https://cdn.jsdelivr.net/npm/';
  let engine;
  function loadTesseract() {
    if (window.Tesseract) return Promise.resolve(window.Tesseract);
    if (!engine) engine = new Promise((resolve,reject) => {
      const script = document.createElement('script');
      script.src = './vendor/tesseract.min.js';
      script.onload = () => resolve(window.Tesseract);
      script.onerror = () => {engine = null;script.remove();reject(Error('识别引擎未加载，请重试或粘贴报告原文。'));};
      document.head.append(script);
    });
    return engine;
  }
  async function recognize(files, progress, signal) {
    let worker, pdfjs, parts=[];
    const check = () => {if(signal?.aborted) throw new DOMException('识别已取消','AbortError');};
    const abort = () => {void worker?.terminate();};
    signal?.addEventListener('abort',abort,{once:true});
    async function imageText(input) {
      check();
      if (!worker) {
        progress('准备中文识别，首次使用需要下载语言包…');
        const T = await loadTesseract();
        check();
        worker = await T.createWorker('chi_sim+eng',1,{
          workerPath:new URL('./vendor/worker.min.js',document.baseURI).href,
          corePath:CDN+'tesseract.js-core@7.0.0',
          logger:m=>{if(m.status==='recognizing text') progress(`正在识别文字 ${Math.round((m.progress || 0)*100)}%…`);},
        });
      }
      check();
      return (await worker.recognize(input)).data.text;
    }
    try {
      for (let index=0;index<files.length;index++) {
        const file=files[index]; check();
        progress(`读取 ${index+1}/${files.length}：${file.name}…`);
        if (file.type === 'application/pdf' || /\.pdf$/i.test(file.name)) {
          pdfjs ||= await import(CDN+'pdfjs-dist@5.4.624/build/pdf.mjs');
          pdfjs.GlobalWorkerOptions.workerSrc=CDN+'pdfjs-dist@5.4.624/build/pdf.worker.mjs';
          const pdf = await pdfjs.getDocument({data:new Uint8Array(await file.arrayBuffer()),isEvalSupported:false}).promise;
          try {
            for (let pageIndex=1;pageIndex<=pdf.numPages;pageIndex++) {
              check(); progress(`${file.name} · 第 ${pageIndex}/${pdf.numPages} 页`);
              const page=await pdf.getPage(pageIndex), content=await page.getTextContent();
              let text=content.items.map(item=>item.str+(item.hasEOL?'\n':' ')).join('');
              if (text.replace(/\s/g,'').length<30) {
                const base=page.getViewport({scale:1});
                const viewport=page.getViewport({scale:Math.min(2.5,2400/Math.max(base.width,base.height))});
                const canvas=document.createElement('canvas');canvas.width=viewport.width;canvas.height=viewport.height;
                await page.render({canvasContext:canvas.getContext('2d'),viewport}).promise;
                text=await imageText(canvas);canvas.width=canvas.height=1;
              }
              parts.push(`[${file.name} · 第 ${pageIndex} 页]\n${text}`);page.cleanup();
            }
          } finally {await pdf.destroy();}
        } else parts.push(`[${file.name}]\n${await imageText(file)}`);
      }
      check();return parts.join('\n\n');
    } finally {signal?.removeEventListener('abort',abort);await worker?.terminate();}
  }
  return {recognize};
})();
