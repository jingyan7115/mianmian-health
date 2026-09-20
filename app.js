(() => {
  "use strict";

  const INITIAL = {metrics: [], records: [], uploads: [], labReports: [], moduleEntries: [], timeline: [], kidneyMeasurements: []};
  const REPO_OWNER = "jingyan7115";
  const REPO_NAME = "mianmian-health";
  const BRANCH = "main";
  const DATA_PATH = "data.json";
  const API_ROOT = "https://api.github.com";
  const API_VERSION = "2022-11-28";
  const TOKEN_KEY = "mianmian-github-owner-token-v1";
  const CACHE_KEY = "mianmian-cloud-cache-v1";
  const LEGACY_KEY = "mianmian-portable-v2";
  const LEGACY_MIGRATED_KEY = "mianmian-legacy-migrated-v1";
  const MAX_UPLOAD_BYTES = 20 * 1024 * 1024;

  const GUIDANCE_SOURCES = Object.freeze({
    iris: {
      label: "IRIS CKD 分期系统",
      url: "https://www.iris-kidney.com/iris-staging-system",
    },
    isfmCkd: {
      label: "ISFM 猫CKD诊疗共识",
      url: "https://journals.sagepub.com/doi/10.1177/1098612X16631234",
    },
    wsavaNutrition: {
      label: "WSAVA 全球营养指南",
      url: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
    },
    phosphorusReview: {
      label: "JFMS 2024 猫磷与肾病综述",
      url: "https://journals.sagepub.com/doi/full/10.1177/1098612X241283355",
    },
    hydrationReview: {
      label: "JAS 2025 猫摄水证据综述",
      url: "https://academic.oup.com/jas/article/doi/10.1093/jas/skaf434/8379605",
    },
    mctStudy: {
      label: "Vet Pathol 猫皮肤MCT研究",
      url: "https://journals.sagepub.com/doi/10.1177/0300985818800028",
    },
    prednisoloneSafety: {
      label: "JFMS 猫泼尼松龙安全性研究",
      url: "https://journals.sagepub.com/doi/10.1177/1098612X20943522",
    },
    felineSteroidTaper: {
      label: "PubMed 猫糖皮质激素减量研究",
      url: "https://pubmed.ncbi.nlm.nih.gov/21640626/",
    },
  });

  const CATEGORIES = [
    ["lab", "实验室", "CBC · 生化 · 炎症指标", "◈", "blue"],
    ["renal", "肾脏管理", "CREA · SDMA · 尿检 · 血压", "◌", "mint"],
    ["mct", "MCT 病灶", "病灶地图 · 病理 · 处理", "✧", "peach"],
    ["imaging", "影像检查", "腹超 · 心超 · DR", "▧", "violet"],
    ["treatment", "用药与治疗", "剂量 · 疗效 · 不良反应", "☾", "amber"],
    ["nutrition", "营养与水合", "饮食 · 摄水 · 体重", "◡", "mint"],
    ["qol", "生活质量", "活动 · 食欲 · 疼痛 · QOL", "♡", "blue"],
    ["timeline", "病程时间轴", "全部检查与治疗事件", "⌛", "violet"],
  ];

  const MODULE_LABEL = {
    mct: "MCT 病灶",
    imaging: "影像检查",
    treatment: "用药与治疗",
    nutrition: "营养与水合",
    qol: "生活质量",
  };

  const METRIC_LABEL = {
    WEIGHT: "体重",
    CREA: "肌酐 CREA",
    SDMA: "SDMA",
    PHOS: "血磷 PHOS",
    BUN: "尿素 BUN",
    ALT: "ALT",
    WBC: "白细胞 WBC",
    HCT: "红细胞压积 HCT",
    HGB: "血红蛋白 HGB",
    PLT: "血小板 PLT",
    MPV: "平均血小板体积 MPV",
    USG: "尿比重 USG",
    UPC: "UPC",
    SBP: "收缩压 SBP",
  };

  const FIELDS = {
    mct: [
      ["lesionId", "病灶编号"],
      ["location", "位置"],
      ["side", "侧别"],
      ["size", "大小"],
      ["diagnosis", "确认方式 / FNA", "textarea"],
      ["pathology", "病理结果", "textarea"],
      ["grade", "分级"],
      ["margin", "切缘"],
      ["treatment", "处理方式", "textarea"],
      ["response", "疗效 / 变化", "textarea"],
      ["recurrence", "复发记录", "textarea"],
      ["status", "当前状态"],
      ["notes", "备注", "textarea"],
    ],
    imaging: [
      ["modality", "影像类型"],
      ["facility", "检查机构"],
      ["leftKidneyCm", "左肾长度（cm）", "number"],
      ["rightKidneyCm", "右肾长度（cm）", "number"],
      ["reportNumber", "报告编号"],
      ["notes", "补充备注", "textarea"],
    ],
    treatment: [
      ["treatmentClass", "类别"],
      ["indication", "适应证 / 关联问题"],
      ["dose", "剂量"],
      ["frequency", "频率"],
      ["route", "给药途径"],
      ["cycle", "疗程"],
      ["durationValue", "疗程长度", "number"],
      ["durationUnit", "疗程单位", "select"],
      ["endDate", "结束 / 换量日期（可自动计算）", "date"],
      ["reminderTime", "到期提醒时间", "time"],
      ["reminderAction", "到期动作", "select"],
      ["reminderNote", "到期提醒备注", "textarea"],
      ["monitoring", "监测要求", "textarea"],
      ["adverseEffects", "不良反应", "textarea"],
      ["response", "疗效", "textarea"],
      ["status", "状态"],
      ["notes", "备注", "textarea"],
    ],
    nutrition: [
      ["dryFoodG", "干粮（g）", "number"],
      ["cannedFoodG", "罐头 / 湿粮（g）", "number"],
      ["addedWaterMl", "加水（ml）", "number"],
      ["drinkingWaterMl", "直接饮水（ml）", "number"],
      ["totalWaterMl", "总摄水（ml）", "number"],
      ["waterMlKgDay", "摄水量（ml/kg/日）", "number"],
      ["caloriesKcal", "热量（kcal）", "number"],
      ["protein", "蛋白质"],
      ["fat", "脂肪"],
      ["phosphorus", "磷"],
      ["epaDha", "EPA + DHA"],
      ["treats", "零食"],
      ["appetite", "食欲"],
      ["giResponse", "胃肠反应", "textarea"],
      ["notes", "备注", "textarea"],
    ],
    qol: [
      ["appetiteScore", "食欲（0–5）", "number"],
      ["hydrationScore", "水合（0–5）", "number"],
      ["activityScore", "活动（0–5）", "number"],
      ["playScore", "玩耍（0–5）", "number"],
      ["interactionScore", "互动（0–5）", "number"],
      ["sleepScore", "睡眠（0–5）", "number"],
      ["groomingScore", "梳理（0–5）", "number"],
      ["eliminationScore", "排泄（0–5）", "number"],
      ["painScore", "疼痛舒适度（0–5）", "number"],
      ["nauseaScore", "恶心控制（0–5）", "number"],
      ["stressScore", "压力状态（0–5）", "number"],
      ["mobilityScore", "行动能力（0–5）", "number"],
      ["goodBadDay", "今天整体", "select"],
      ["notes", "具体观察", "textarea"],
    ],
  };

  const clone = (value) => JSON.parse(JSON.stringify(value));
  const main = document.querySelector("#main");
  const overlay = document.querySelector("#overlay");
  const statusButton = document.querySelector("[data-owner-status]");
  const statusLabel = document.querySelector("[data-owner-label]");

  let state = clone(INITIAL);
  let route = { name: "home", id: null, highlight: null };
  let selectedMetric = "CREA";
  let ownerToken = storageGet(TOKEN_KEY) || "";
  let ownerMode = Boolean(ownerToken);
  let cloudStatus = "loading";
  let cloudNote = "正在读取最新线上数据";
  let lastCloudRefreshAt = 0;
  let medicationAlertShown = false;
  let legacyState = readStoredJson(LEGACY_KEY);
  let legacyAvailable = Boolean(
    legacyState && !storageGet(LEGACY_MIGRATED_KEY),
  );

  class GitHubApiError extends Error {
    constructor(status, message) {
      super(message);
      this.name = "GitHubApiError";
      this.status = status;
    }
  }

  function storageGet(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function storageSet(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  }

  function storageRemove(key) {
    try {
      localStorage.removeItem(key);
    } catch {
      // Storage can be unavailable in private browsing; cloud data still works.
    }
  }

  function readStoredJson(key) {
    try {
      const raw = storageGet(key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function cacheState() {
    storageSet(CACHE_KEY, JSON.stringify(state));
  }

  function esc(value) {
    return String(value ?? "").replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        })[char],
    );
  }

  function date(value) {
    return /^\d{4}-\d{2}-\d{2}$/.test(value || "")
      ? value.replaceAll("-", ".")
      : esc(value || "—");
  }

  function today() {
    const now = new Date(Date.now() - new Date().getTimezoneOffset() * 60_000);
    return now.toISOString().slice(0, 10);
  }

  function parseDateOnly(value) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ""));
    if (!match) return null;
    const parsed = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  function isoDateOnly(value) {
    return value ? value.toISOString().slice(0, 10) : "";
  }

  function calculateCourseEnd(startDate, durationValue, durationUnit) {
    const start = parseDateOnly(startDate);
    const amount = Number(durationValue);
    if (!start || !Number.isFinite(amount) || amount <= 0 || !durationUnit) return "";
    if (durationUnit === "天") start.setUTCDate(start.getUTCDate() + amount);
    else if (durationUnit === "周") start.setUTCDate(start.getUTCDate() + amount * 7);
    else if (durationUnit === "月") {
      const day = start.getUTCDate();
      start.setUTCDate(1);
      start.setUTCMonth(start.getUTCMonth() + amount);
      const lastDay = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + 1, 0)).getUTCDate();
      start.setUTCDate(Math.min(day, lastDay));
    } else return "";
    return isoDateOnly(start);
  }

  function fieldSelectOptions(module, key) {
    if (module === "qol" && key === "goodBadDay") return ["好日", "一般", "坏日"];
    if (module === "treatment" && key === "durationUnit") return ["天", "周", "月"];
    if (module === "treatment" && key === "reminderAction") {
      return ["联系医生确认停药或换量", "按既定医嘱停止", "按既定医嘱更换剂量", "复诊 / 复查"];
    }
    return [];
  }

  function formatCloudTime(value) {
    if (!value) return "尚无更新时间";
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return esc(value);
    return parsed.toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }

  function toast(message, duration = 2600) {
    const element = document.createElement("div");
    element.className = "toast";
    element.textContent = message;
    document.body.append(element);
    setTimeout(() => element.remove(), duration);
  }

  function validateHealthData(value) {
    return Boolean(
      value &&
        typeof value === "object" &&
        Array.isArray(value.metrics) &&
        Array.isArray(value.labReports) &&
        Array.isArray(value.moduleEntries),
    );
  }

  function setCloudStatus(status, note = "") {
    cloudStatus = status;
    cloudNote = note;
    updateStatusPill();
  }

  function updateStatusPill() {
    if (!statusLabel || !statusButton) return;
    let label = "正在连接云端";
    if (cloudStatus === "saving") label = "主人模式 · 正在同步";
    else if (ownerMode && cloudStatus === "online") label = "主人模式 · 云端已同步";
    else if (ownerMode && cloudStatus === "error") label = "主人模式 · 同步需处理";
    else if (ownerMode) label = "主人模式 · 云端管理";
    else if (cloudStatus === "online") label = "公开查看 · 最新线上数据";
    else if (cloudStatus === "cache") label = "离线缓存 · 可能非最新";
    else if (cloudStatus === "error") label = "云端连接失败";
    statusLabel.textContent = label;
    statusButton.dataset.state = cloudStatus;
    statusButton.title = cloudNote || label;
  }

  function encodePath(path) {
    return path.split("/").map(encodeURIComponent).join("/");
  }

  function utf8ToBase64(text) {
    const bytes = new TextEncoder().encode(text);
    let binary = "";
    const size = 0x8000;
    for (let index = 0; index < bytes.length; index += size) {
      binary += String.fromCharCode(...bytes.subarray(index, index + size));
    }
    return btoa(binary);
  }

  function base64ToUtf8(base64) {
    const binary = atob(String(base64 || "").replace(/\s/g, ""));
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return new TextDecoder().decode(bytes);
  }

  function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
      reader.onerror = () => reject(reader.error || new Error("读取文件失败"));
      reader.readAsDataURL(blob);
    });
  }

  async function sha256Blob(blob) {
    if (!crypto?.subtle) throw new Error("当前浏览器不支持报告重复检测，请升级浏览器后重试");
    const digest = await crypto.subtle.digest("SHA-256", await blob.arrayBuffer());
    return [...new Uint8Array(digest)]
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  function normalizeResultPiece(value) {
    return String(value ?? "").normalize("NFKC").toLowerCase().replace(/\s+/g, "").replace(/[，,]/g, ",");
  }

  function resultSignature(results) {
    const pieces = (results || []).map((result) => {
      const metric = normalizeResultPiece(result.metric || result.label);
      const value = normalizeResultPiece(`${result.value ?? ""}${result.unit ?? ""}`);
      return metric && value ? `${metric}:${value}` : "";
    }).filter(Boolean).sort();
    return pieces.length ? pieces.join("|") : "";
  }

  function duplicateCatalog() {
    const catalog = [];
    for (const report of state.labReports || []) {
      for (const page of report.reportPages || []) {
        if (page.sha256) catalog.push({ sha256: page.sha256, date: report.recordedAt, title: report.title, kind: "实验室报告" });
      }
      const signature = resultSignature(report.results);
      if (signature) catalog.push({ signature, resultCount: (report.results || []).length, date: report.recordedAt, title: report.title, kind: "实验室数据" });
    }
    for (const entry of state.moduleEntries || []) {
      for (const file of entry.imageFiles || []) {
        if (file.sha256) catalog.push({ sha256: file.sha256, date: entry.recordedAt, title: entry.title, kind: "影像报告" });
      }
    }
    for (const upload of state.uploads || []) {
      if (upload.sha256) catalog.push({ sha256: upload.sha256, date: upload.recordedAt || "日期未记录", title: upload.title || upload.originalName || "已上传报告", kind: "历史上传" });
    }
    return catalog;
  }

  function confirmDuplicate(match, fileName, reason = "文件内容完全相同") {
    return confirm(`检测到重复报告：\n“${fileName}”与 ${match.date} 的“${match.title}”${reason}。\n\n为避免重复数据，建议取消上传。\n\n仍要继续上传吗？`);
  }

  async function inspectFilesForDuplicates(files) {
    const catalog = duplicateCatalog();
    const batch = new Map();
    const inspected = [];
    for (const file of files) {
      const sha256 = await sha256Blob(file);
      const match = catalog.find((item) => item.sha256 === sha256) || batch.get(sha256);
      inspected.push({ file, sha256, match });
      if (!batch.has(sha256)) batch.set(sha256, { sha256, date: "本次选择", title: file.name || "同一文件", kind: "本次选择" });
    }
    return inspected;
  }

  function githubHeaders(token = "") {
    const headers = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": API_VERSION,
    };
    if (token) headers.Authorization = `Bearer ${token}`;
    return headers;
  }

  async function githubRequest(path, options = {}, token = "") {
    let response;
    try {
      response = await fetch(`${API_ROOT}${path}`, {
        ...options,
        cache: "no-store",
        headers: {
          ...githubHeaders(token),
          ...(options.headers || {}),
        },
      });
    } catch {
      throw new GitHubApiError(0, "无法连接 GitHub 云端，请检查网络后重试");
    }

    if (!response.ok) {
      let message = "GitHub 云端请求失败";
      if (response.status === 401) message = "主人凭证无效或已过期，请重新设置";
      else if (response.status === 403) message = "主人凭证缺少写入权限，或请求次数暂时受限";
      else if (response.status === 404) message = "未找到线上健康库文件或仓库权限不足";
      else if (response.status === 409) message = "线上数据刚被更新，请重新载入后再编辑";
      else if (response.status === 422) message = "提交内容未被 GitHub 接受，请检查后重试";
      throw new GitHubApiError(response.status, message);
    }

    if (response.status === 204) return null;
    return response.json();
  }

  function githubContentPath(path, cacheBust = false) {
    const query = new URLSearchParams({ ref: BRANCH });
    if (cacheBust) query.set("v", String(Date.now()));
    return `/repos/${REPO_OWNER}/${REPO_NAME}/contents/${encodePath(path)}?${query}`;
  }

  async function getGitHubContent(path, token = "") {
    const file = await githubRequest(githubContentPath(path, true), {}, token);
    if (!file || file.type !== "file" || !file.content) {
      throw new GitHubApiError(404, "线上健康库文件格式不正确");
    }
    return {
      ...file,
      text: base64ToUtf8(file.content),
    };
  }

  async function putGitHubContent(path, content, message, sha = null) {
    const body = {
      message,
      content,
      branch: BRANCH,
    };
    if (sha) body.sha = sha;
    return githubRequest(
      `/repos/${REPO_OWNER}/${REPO_NAME}/contents/${encodePath(path)}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
      ownerToken,
    );
  }

  async function verifyOwnerToken(token) {
    const normalized = String(token || "").trim();
    if (!normalized) throw new Error("请输入 GitHub 主人凭证");
    const [user, repo, dataFile] = await Promise.all([
      githubRequest("/user", {}, normalized),
      githubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}`, {}, normalized),
      getGitHubContent(DATA_PATH, normalized),
    ]);
    if (String(user?.login || "").toLowerCase() !== REPO_OWNER.toLowerCase()) {
      throw new Error(`此凭证不属于 GitHub 账号 ${REPO_OWNER}`);
    }
    if (repo?.permissions?.push === false) {
      throw new Error("此凭证缺少仓库 Contents 的读写权限");
    }
    const remote = JSON.parse(dataFile.text);
    if (!validateHealthData(remote)) throw new Error("线上健康库数据格式异常");
    return normalized;
  }

  async function loadCloudData({ notify = false, quiet = false } = {}) {
    if (!quiet) setCloudStatus("loading", "正在读取最新线上数据");
    let apiError = null;

    try {
      let file;
      try {
        file = await getGitHubContent(DATA_PATH, ownerToken);
      } catch (error) {
        apiError = error;
        if (!ownerToken) throw error;
        if (error instanceof GitHubApiError && error.status === 401) {
          ownerToken = "";
          ownerMode = false;
          storageRemove(TOKEN_KEY);
        }
        file = await getGitHubContent(DATA_PATH, "");
      }
      const remote = JSON.parse(file.text);
      if (!validateHealthData(remote)) throw new Error("线上数据格式异常");
      state = remote;
      cacheState();
      lastCloudRefreshAt = Date.now();
      setCloudStatus(
        "online",
        `线上数据更新时间：${formatCloudTime(state._cloud?.updatedAt)}`,
      );
      render();
      if (notify) toast("已载入最新线上数据");
      return;
    } catch (error) {
      apiError ||= error;
    }

    try {
      const response = await fetch(`./data.json?v=${Date.now()}`, {
        cache: "no-store",
      });
      if (!response.ok) throw new Error("同站数据文件读取失败");
      const remote = await response.json();
      if (!validateHealthData(remote)) throw new Error("同站数据格式异常");
      state = remote;
      cacheState();
      lastCloudRefreshAt = Date.now();
      setCloudStatus(
        "online",
        `已读取公开站点数据；更新时间：${formatCloudTime(state._cloud?.updatedAt)}`,
      );
      render();
      if (notify) toast("已载入公开站点的最新数据");
      return;
    } catch {
      if (quiet) return;
      const cached = readStoredJson(CACHE_KEY);
      if (validateHealthData(cached)) {
        state = cached;
        setCloudStatus("cache", "当前显示设备缓存，网络恢复后请重新载入");
        render();
        if (notify) toast("网络不可用，当前显示设备缓存", 3600);
        return;
      }
    }

    state = clone(INITIAL);
    setCloudStatus(
      "error",
      apiError?.message || "无法读取线上数据，请连接网络重新载入资料",
    );
    render();
    if (notify) toast("无法读取线上数据，请重试", 3600);
  }

  function safeUploadName(file) {
    const original = String(file.name || "report");
    const extension = original.match(/\.([a-zA-Z0-9]{1,8})$/)?.[1]?.toLowerCase() || "bin";
    const base = original
      .replace(/\.[^.]+$/, "")
      .normalize("NFKD")
      .replace(/[^a-zA-Z0-9_-]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 48) || "report";
    const stamp = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
    const unique = crypto.randomUUID().slice(0, 8);
    return `${stamp}-${unique}-${base}.${extension}`;
  }

  async function uploadCloudAsset(file) {
    if (!ownerMode || !ownerToken) throw new Error("请先进入主人模式");
    if (!(file instanceof Blob) || !file.size) throw new Error("没有可上传的文件");
    if (file.size > MAX_UPLOAD_BYTES) {
      throw new Error("单个文件不能超过 20 MB；请压缩扫描件后再上传");
    }
    const name = safeUploadName(file);
    const path = `uploads/${name}`;
    await putGitHubContent(
      path,
      await blobToBase64(file),
      `Upload health report ${name}`,
    );
    return `./${path}`;
  }

  async function openDb() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("mianmian-portable-files", 1);
      request.onupgradeneeded = () =>
        request.result.createObjectStore("files", { keyPath: "id" });
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function putLocalFile(file, id = crypto.randomUUID()) {
    const db = await openDb();
    await new Promise((resolve, reject) => {
      const transaction = db.transaction("files", "readwrite");
      transaction.objectStore("files").put({
        id,
        name: file.name,
        type: file.type,
        blob: file,
        createdAt: new Date().toISOString(),
      });
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
    db.close();
    return id;
  }

  async function getLocalFile(id) {
    const db = await openDb();
    const item = await new Promise((resolve, reject) => {
      const request = db.transaction("files").objectStore("files").get(id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    db.close();
    return item;
  }

  async function allLocalFiles() {
    const db = await openDb();
    const items = await new Promise((resolve, reject) => {
      const request = db.transaction("files").objectStore("files").getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    db.close();
    return items;
  }

  async function clearLocalFiles() {
    const db = await openDb();
    await new Promise((resolve, reject) => {
      const transaction = db.transaction("files", "readwrite");
      transaction.objectStore("files").clear();
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
    db.close();
  }

  async function materializeLocalAssets(value, uploaded = new Map()) {
    if (typeof value === "string" && value.startsWith("local:")) {
      const id = value.slice(6);
      if (uploaded.has(id)) return uploaded.get(id);
      let item = null;
      try {
        item = await getLocalFile(id);
      } catch {
        return value;
      }
      if (!item?.blob) return value;
      const file = new File([item.blob], item.name || "report", {
        type: item.type || item.blob.type,
      });
      const onlineUrl = await uploadCloudAsset(file);
      uploaded.set(id, onlineUrl);
      return onlineUrl;
    }
    if (Array.isArray(value)) {
      return Promise.all(value.map((item) => materializeLocalAssets(item, uploaded)));
    }
    if (value && typeof value === "object") {
      const result = {};
      for (const [key, item] of Object.entries(value)) {
        result[key] = await materializeLocalAssets(item, uploaded);
      }
      return result;
    }
    return value;
  }

  async function saveCloud(nextState, message = "Update Mianmian health data") {
    if (!ownerMode || !ownerToken) {
      openOwnerModal("保存线上数据前，需要先进入主人模式。");
      throw new Error("请先进入主人模式");
    }

    setCloudStatus("saving", "正在核对线上版本并提交更新");
    try {
      const remoteFile = await getGitHubContent(DATA_PATH, ownerToken);
      const remoteState = JSON.parse(remoteFile.text);
      if (!validateHealthData(remoteState)) throw new Error("线上健康库数据格式异常");

      const localRevision = Number(state._cloud?.revision || 0);
      const remoteRevision = Number(remoteState._cloud?.revision || 0);
      if (localRevision !== remoteRevision) {
        throw new GitHubApiError(
          409,
          "线上数据已被另一台设备更新。请先重新载入，再重复本次修改。",
        );
      }

      const prepared = await materializeLocalAssets(
        synchronizeDerivedData(nextState),
      );
      prepared._cloud = {
        revision: remoteRevision + 1,
        updatedAt: new Date().toISOString(),
        updatedBy: REPO_OWNER,
      };
      const json = `${JSON.stringify(prepared, null, 2)}\n`;
      await putGitHubContent(
        DATA_PATH,
        utf8ToBase64(json),
        message,
        remoteFile.sha,
      );

      state = prepared;
      cacheState();
      setCloudStatus(
        "online",
        `已提交云端；公开页面正在发布。更新时间：${formatCloudTime(
          prepared._cloud.updatedAt,
        )}`,
      );
      render();
      toast("已保存到线上，公开页面正在更新", 3400);
      return prepared;
    } catch (error) {
      setCloudStatus("error", error?.message || "云端保存失败");
      updateStatusPill();
      toast(error?.message || "云端保存失败", 4800);
      throw error;
    }
  }

  function requireOwner(reason = "此操作需要主人权限。") {
    if (ownerMode && ownerToken) return true;
    openOwnerModal(reason);
    return false;
  }

  function openOwnerModal(reason = "") {
    if (ownerMode && ownerToken) {
      overlay.innerHTML = `
        <div class="modal">
          <section class="modal-card">
            <header class="modal-head">
              <h2>主人模式已启用</h2>
              <button class="close" data-close>×</button>
            </header>
            <div class="modal-body">
              <div class="privacy"><strong>当前设备可以修改线上健康库。</strong><br>凭证只保存在这台设备的浏览器中，不会写入公开仓库，也不会包含在备份文件里。</div>
              <div style="height:14px"></div>
              <p style="color:var(--muted);line-height:1.7">线上版本：${esc(state._cloud?.revision || "—")} · 最近更新：${esc(formatCloudTime(state._cloud?.updatedAt))}</p>
              <div class="modal-foot">
                <button type="button" class="secondary" data-close>关闭</button>
                <button type="button" class="secondary danger" data-owner-exit>退出主人模式</button>
              </div>
            </div>
          </section>
        </div>`;
      overlay.querySelectorAll("[data-close]").forEach((button) => {
        button.onclick = () => (overlay.innerHTML = "");
      });
      overlay.querySelector("[data-owner-exit]").onclick = () => {
        exitOwnerMode();
        overlay.innerHTML = "";
      };
      return;
    }

    overlay.innerHTML = `
      <div class="modal">
        <section class="modal-card">
          <header class="modal-head">
            <h2>进入主人模式</h2>
            <button class="close" data-close>×</button>
          </header>
          <form class="modal-body" id="owner-form">
            ${reason ? `<div class="privacy">${esc(reason)}</div><div style="height:14px"></div>` : ""}
            <p style="color:var(--muted);line-height:1.7;margin-top:0">公开访客无需登录，只能查看。你只需在自己的手机上设置一次 GitHub 精细访问令牌，之后编辑内容会写入同一个线上健康库。</p>
            <div class="privacy">
              <strong>令牌权限请严格限制：</strong><br>
              ① Repository access 选 <strong>Only select repositories</strong>，只选 <strong>${REPO_NAME}</strong><br>
              ② Repository permissions 只把 <strong>Contents</strong> 设为 <strong>Read and write</strong><br>
              ③ 不要把令牌发到聊天、微信或公开仓库
            </div>
            <div style="height:14px"></div>
            <div class="field">
              <label>GitHub 主人凭证</label>
              <input name="token" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="github_pat_…" required>
            </div>
            <p style="font-size:13px;line-height:1.6"><a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener noreferrer" style="color:var(--green2);font-weight:750">打开 GitHub 创建精细访问令牌 ↗</a></p>
            <div class="modal-foot">
              <button type="button" class="secondary" data-close>取消</button>
              <button class="primary" data-owner-submit>验证并启用</button>
            </div>
          </form>
        </section>
      </div>`;

    overlay.querySelectorAll("[data-close]").forEach((button) => {
      button.onclick = () => (overlay.innerHTML = "");
    });
    overlay.querySelector("#owner-form").onsubmit = async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const submit = form.querySelector("[data-owner-submit]");
      submit.disabled = true;
      submit.textContent = "正在验证…";
      try {
        const token = await verifyOwnerToken(new FormData(form).get("token"));
        ownerToken = token;
        ownerMode = true;
        storageSet(TOKEN_KEY, token);
        overlay.innerHTML = "";
        await loadCloudData();
        toast("主人模式已启用");
      } catch (error) {
        submit.disabled = false;
        submit.textContent = "验证并启用";
        toast(error?.message || "主人凭证验证失败", 4800);
      }
    };
  }

  function exitOwnerMode() {
    ownerToken = "";
    ownerMode = false;
    storageRemove(TOKEN_KEY);
    setCloudStatus(
      cloudStatus === "saving" ? "online" : cloudStatus,
      "当前为公开只读模式",
    );
    render();
    toast("已退出主人模式；线上数据不会被删除");
  }

  function latest(metric) {
    return [...(state.metrics || [])]
      .filter((item) => item.metric === metric)
      .sort((a, b) => b.recordedAt.localeCompare(a.recordedAt))[0];
  }

  function stat(metric) {
    const item = latest(metric);
    return `<button class="stat" data-trend-link="${esc(metric)}" aria-label="查看${esc(METRIC_LABEL[metric] || metric)}长期趋势">
      <small>${esc(METRIC_LABEL[metric] || metric)}</small>
      <strong>${item ? esc(item.value) : "—"}</strong>
      <em>${item ? esc(item.unit) : ""}</em>
      <div class="status">${
        item
          ? `${date(item.recordedAt)} · ${esc(item.status || "已记录")}`
          : "暂无记录"
      }</div>
      <span class="stat-link">查看趋势 ↗</span>
    </button>`;
  }

  function hero() {
    const weight = latest("WEIGHT");
    const syncText =
      cloudStatus === "cache"
        ? "当前为离线缓存；联网后请重新载入云端数据。"
        : cloudStatus === "error"
          ? "云端暂时无法连接；当前内容可能不是最新版本。"
          : `最新健康资料来自线上同步库（版本 ${esc(state._cloud?.revision || "—")}）。`;
    return `<section class="hero">
      <div class="hero-grid">
        <div class="avatar" aria-hidden="true"><span class="cat-sigil">☾</span><span class="sigil-star">✧</span></div>
        <div>
          <span class="eyebrow">MIANMIAN · HEALTH JOURNAL</span><h1>${esc(state.pet?.name || "面面")}的健康手记</h1>
          <p>${esc(state.pet?.age || "8岁")} · ${esc(state.pet?.sex || "母猫")} · 当前体重 ${weight ? esc(weight.value) : "—"} kg<br>${syncText}</p>
        </div>
        ${ownerMode ? '<button class="primary" data-action="upload">＋ 上传并同步</button>' : ""}
      </div>
    </section>`;
  }

  function searchBar() {
    return `<form class="search" id="search-form">
      <span>⌕</span>
      <input id="search-input" aria-label="检索面面的长期健康库" placeholder="搜索日期、报告、药物或指标…">
      <button>检索</button>
    </form>`;
  }

  function categoryGrid(ids = CATEGORIES.map(item => item[0])) {
    return `<div class="category-grid">${CATEGORIES.filter(item => ids.includes(item[0])).map(
      (category) => `<button class="category tone-${category[4]}" data-category="${category[0]}">
        <span class="icon">${category[3]}</span>
        <span><h3>${category[1]}</h3><p>${category[2]}</p></span><span class="category-arrow" aria-hidden="true">↗</span>
      </button>`,
    ).join("")}</div>`;
  }

  function updatedTimestamp(entry) {
    const value = String(entry?.updatedAt || entry?.createdAt || entry?.recordedAt || "");
    const time = Date.parse(value.replace(" ", "T"));
    return Number.isFinite(time) ? time : 0;
  }

  function latestEditedEntry(module = null) {
    return [...(state.moduleEntries || [])]
      .filter((entry) => !module || entry.module === module)
      .sort((a, b) => updatedTimestamp(b) - updatedTimestamp(a))[0] || null;
  }

  function entryCurrentText(entry) {
    if (!entry) return "";
    return String(
      entry.data?.status ||
      entry.data?.response ||
      entry.data?.notes ||
      entry.summary ||
      "已更新记录",
    ).trim();
  }

  function liveRenalNotice() {
    const missing = ["USG", "UPC", "SBP"].filter((metric) => !latest(metric));
    const crea = latest("CREA");
    const sdma = latest("SDMA");
    if (missing.length) {
      return {
        title: `肾脏评估待补全 · ${missing.length} 项`,
        detail: `${crea ? `CREA ${crea.value} ${crea.unit || ""}` : "CREA未记录"}；${sdma ? `SDMA ${sdma.value} ${sdma.unit || ""}` : "SDMA未记录"}。待补：${missing.map((metric) => METRIC_LABEL[metric]).join("、")}；目前不能只凭单次血液指标完成CKD确诊或分期。`,
      };
    }
    return {
      title: "肾脏评估项目已补齐",
      detail: "USG、UPC与收缩压均已有线上记录；请结合检查日期、尿沉渣、稳定期CREA/SDMA及临床状态由医生综合判断。",
    };
  }

  function liveMctFollowUp() {
    const entry = latestEditedEntry("mct");
    if (!entry) {
      return {
        title: state.mctFollowUp?.title || "MCT随访",
        detail: state.mctFollowUp?.detail || "尚无可联动的MCT记录。",
      };
    }
    const lesion = entry.data?.lesionId || entry.title || "MCT病灶";
    const location = entry.data?.location ? ` · ${entry.data.location}` : "";
    return {
      title: `${lesion}${location}`,
      detail: `${entryCurrentText(entry)}（病程日期 ${date(entry.recordedAt)}；按最近手动编辑内容更新）`,
    };
  }

  function liveNutritionSnapshot(weight) {
    const entry = latestEditedEntry("nutrition");
    const data = entry?.data || {};
    const directTotal = Number(data.totalWaterMl);
    const added = Number(data.addedWaterMl);
    const drinking = Number(data.drinkingWaterMl);
    const calculatedTotal =
      Number.isFinite(added) || Number.isFinite(drinking)
        ? (Number.isFinite(added) ? added : 0) + (Number.isFinite(drinking) ? drinking : 0)
        : NaN;
    const fallback = Number(state.nutritionSummary?.averageWaterMlPerDay);
    const waterMl = Number.isFinite(directTotal)
      ? directTotal
      : Number.isFinite(calculatedTotal)
        ? calculatedTotal
        : fallback;
    const recordedPerKg = Number(data.waterMlKgDay);
    const weightKg = Number(weight?.value);
    const waterPerKg = Number.isFinite(recordedPerKg)
      ? recordedPerKg
      : Number.isFinite(waterMl) && Number.isFinite(weightKg) && weightKg > 0
        ? waterMl / weightKg
        : null;
    return { entry, data, waterMl, waterPerKg };
  }

  function recentManualNotice() {
    const entry = latestEditedEntry();
    if (!entry) return null;
    return {
      title: `最近手动更新 · ${MODULE_LABEL[entry.module] || entry.module}`,
      detail: `${entry.title}：${entryCurrentText(entry)}（${date(entry.recordedAt)}）`,
    };
  }

  function isGlucocorticoidEntry(entry) {
    const text = [entry?.title, entry?.summary, ...Object.values(entry?.data || {})].join(" ");
    return /泼尼松|prednis(?:olone|one)/i.test(text);
  }

  function medicationReminderFor(entry) {
    if (entry?.module !== "treatment" || entry.data?.reminderCompletedAt) return null;
    if (/已结束|已完成|停止|停药/.test(String(entry.data?.status || ""))) return null;
    const dueDate = entry.data?.endDate || calculateCourseEnd(
      entry.recordedAt,
      entry.data?.durationValue,
      entry.data?.durationUnit,
    );
    const due = parseDateOnly(dueDate);
    const current = parseDateOnly(today());
    if (!due || !current) return null;
    const days = Math.round((due.getTime() - current.getTime()) / 86_400_000);
    return {
      entry,
      dueDate,
      days,
      glucocorticoid: isGlucocorticoidEntry(entry),
      action: entry.data?.reminderAction || "联系医生确认停药或换量",
    };
  }

  function medicationReminders() {
    return (state.moduleEntries || [])
      .map(medicationReminderFor)
      .filter(Boolean)
      .sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  }

  function reminderStatus(reminder) {
    if (reminder.days < 0) return { tone: "overdue", text: `已到期 ${Math.abs(reminder.days)} 天` };
    if (reminder.days === 0) return { tone: "today", text: "今天到期" };
    if (reminder.days <= 7) return { tone: "soon", text: `${reminder.days} 天后到期` };
    return { tone: "later", text: `${reminder.days} 天后` };
  }

  function medicationReminderSection() {
    const reminders = medicationReminders();
    const cards = reminders.length
      ? reminders.map((reminder) => {
          const status = reminderStatus(reminder);
          const data = reminder.entry.data || {};
          return `<article class="med-reminder-card tone-${status.tone}">
            <div class="med-reminder-head"><div><span class="med-status">${esc(status.text)}</span><h3>${esc(reminder.entry.title)}</h3></div><time>${date(reminder.dueDate)}${data.reminderTime ? ` ${esc(data.reminderTime)}` : ""}</time></div>
            <p>${[data.dose && `剂量：${data.dose}`, data.frequency && `频率：${data.frequency}`, `开始：${date(reminder.entry.recordedAt)}`].filter(Boolean).map(esc).join(" · ")}</p>
            <div class="med-action"><strong>到期动作：</strong>${esc(reminder.action)}${data.reminderNote ? `<br><span>${esc(data.reminderNote)}</span>` : ""}</div>
            ${reminder.glucocorticoid ? '<div class="med-warning"><strong>激素用药提示：</strong>疗程计时到期不等于可以自行骤停。请按开药医生既定减量方案确认停药或换量；没有适用于所有猫的统一减量日程。</div>' : ""}
            <div class="entry-actions">${recordLink("treatment", reminder.entry.id, "查看疗程原记录")}<button data-med-calendar="${esc(reminder.entry.id)}">添加到手机日历</button>${ownerMode ? `<button data-med-complete="${esc(reminder.entry.id)}">标记已处理</button>` : ""}</div>
          </article>`;
        }).join("")
      : '<div class="empty">目前没有未处理的用药疗程提醒。可在“用药与治疗”中填写开始日期和疗程长度。</div>';
    return `<section class="medication-reminder-section" id="medication-reminder-details" tabindex="-1" aria-labelledby="medication-reminder-title">
      <div class="section-head"><div><h2 id="medication-reminder-title">用药疗程详情</h2><p>按开始日期和疗程自动计算 · 可添加到手机日历</p></div></div>
      <div class="guidance-note"><strong>安全边界：</strong>提醒用于执行已经确定的医嘱，不会自动替你决定停药。尤其是泼尼松龙等糖皮质激素，到期后应按开药医生给出的减量或换量方案处理。</div>
      <div class="med-reminder-grid">${cards}</div>
      <div class="evidence-links med-evidence">${evidenceLinks(["prednisoloneSafety", "felineSteroidTaper"])}</div>
    </section>`;
  }

  function medicationReminderPeek() {
    const reminders = medicationReminders();
    if (!reminders.length) {
      return `<section class="med-calendar-peek" aria-label="用药提醒">
        <button class="med-calendar-note is-empty" data-category="treatment">
          <span class="calendar-sheet" aria-hidden="true"><small>用药</small><strong>＋</strong></span>
          <span class="calendar-copy"><span class="calendar-eyebrow">用药疗程提醒</span><strong>目前没有未处理的提醒</strong><small>点击进入“用药与治疗”添加疗程</small></span>
          <span class="calendar-arrow">去添加 <b>›</b></span>
        </button>
      </section>`;
    }
    const reminder = reminders[0];
    const status = reminderStatus(reminder);
    const due = parseDateOnly(reminder.dueDate);
    const data = reminder.entry.data || {};
    const month = due ? due.getUTCMonth() + 1 : "—";
    const day = due ? String(due.getUTCDate()).padStart(2, "0") : "—";
    const more = reminders.length > 1 ? ` · 另有 ${reminders.length - 1} 条` : "";
    return `<section class="med-calendar-peek" aria-label="最近用药提醒">
      <button class="med-calendar-note tone-${esc(status.tone)}" data-med-jump="#medication-reminder-details" aria-label="查看${esc(reminder.entry.title)}的完整疗程提醒">
        <span class="calendar-sheet" aria-hidden="true"><small>${esc(month)}月</small><strong>${esc(day)}</strong></span>
        <span class="calendar-copy"><span class="calendar-eyebrow">最近用药提醒 · ${esc(status.text)}${esc(more)}</span><strong>${esc(reminder.entry.title)}</strong><small>${date(reminder.dueDate)}${data.reminderTime ? ` ${esc(data.reminderTime)}` : ""} · ${esc(reminder.action)}</small></span>
        <span class="calendar-arrow">查看详情 <b>›</b></span>
      </button>
    </section>`;
  }

  function calendarEscape(value) {
    return String(value || "").replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
  }

  function downloadMedicationCalendar(id) {
    const entry = (state.moduleEntries || []).find((item) => String(item.id) === String(id));
    const reminder = medicationReminderFor(entry);
    if (!reminder) return toast("这条记录目前没有可用的到期日期");
    const end = parseDateOnly(reminder.dueDate);
    end.setUTCDate(end.getUTCDate() + 1);
    const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const uid = `mianmian-${String(entry.id).replace(/[^a-zA-Z0-9-]/g, "")}-${reminder.dueDate}@mianmian-health`;
    const description = [
      `到期动作：${reminder.action}`,
      entry.data?.reminderNote || "",
      reminder.glucocorticoid ? "激素疗程到期不代表可以自行骤停，请按开药医生既定方案确认。" : "",
    ].filter(Boolean).join("\\n");
    const time = /^\d{2}:\d{2}$/.test(entry.data?.reminderTime || "") ? entry.data.reminderTime : "";
    const eventStart = time
      ? `DTSTART;TZID=Asia/Shanghai:${reminder.dueDate.replaceAll("-", "")}T${time.replace(":", "")}00`
      : `DTSTART;VALUE=DATE:${reminder.dueDate.replaceAll("-", "")}`;
    const eventEnd = time ? "" : `DTEND;VALUE=DATE:${isoDateOnly(end).replaceAll("-", "")}`;
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Mianmian Health//Medication Reminder//ZH-CN", "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT", `UID:${uid}`, `DTSTAMP:${stamp}`, eventStart, eventEnd,
      `SUMMARY:${calendarEscape(`面面用药到期：${entry.title}`)}`,
      `DESCRIPTION:${calendarEscape(description)}`, "BEGIN:VALARM", "ACTION:DISPLAY", "TRIGGER:-P1D",
      `DESCRIPTION:${calendarEscape(`面面用药提醒：${entry.title}明日到期`)}`, "END:VALARM", "END:VEVENT", "END:VCALENDAR", "",
    ].join("\r\n");
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `面面-${reminder.dueDate}-${entry.title}.ics`.replace(/[\\/:*?\"<>|]/g, "-");
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast("日历提醒已生成，请在手机上确认添加");
  }

  async function completeMedicationReminder(id) {
    if (!requireOwner("标记疗程提醒需要主人权限。")) return;
    const entry = (state.moduleEntries || []).find((item) => String(item.id) === String(id));
    if (!entry) return;
    const nextState = clone(state);
    const target = (nextState.moduleEntries || []).find((item) => String(item.id) === String(id));
    target.data ||= {};
    target.data.reminderCompletedAt = new Date().toISOString();
    target.updatedAt = new Date().toISOString();
    await saveCloud(nextState, `Complete medication reminder ${target.recordedAt}`);
    toast("该疗程提醒已标记为处理完成");
  }

  function evidenceLinks(keys) {
    return keys
      .map((key) => GUIDANCE_SOURCES[key])
      .filter(Boolean)
      .map(
        (source) =>
          `<a class="evidence-link" href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.label)} ↗</a>`,
      )
      .join("");
  }

  function guidanceCard({ tone, level, title, observation, advice, sources }) {
    return `<article class="guidance-card tone-${esc(tone)}">
      <div class="guidance-card-head"><span class="evidence-level">${esc(level)}</span><h3>${esc(title)}</h3></div>
      <p class="guidance-observation"><strong>当前依据：</strong>${esc(observation)}</p>
      <p><strong>建议：</strong>${esc(advice)}</p>
      <div class="evidence-links" aria-label="科学来源">${evidenceLinks(sources)}</div>
      <div class="guidance-actions">${sources.includes("mctStudy") ? moduleLink("mct","核对病灶记录") + moduleLink("treatment","查看治疗") : sources.includes("wsavaNutrition") ? moduleLink("nutrition","查看营养记录") : sources.includes("phosphorusReview") ? moduleLink("lab","核对检查结果") + moduleLink("nutrition","查看饮食") : moduleLink("renal","核对肾脏指标")}</div>
    </article>`;
  }

  function medicalGuidance() {
    const crea = latest("CREA");
    const sdma = latest("SDMA");
    const phos = latest("PHOS");
    const weight = latest("WEIGHT");
    const missingRenal = ["USG", "UPC", "SBP"].filter((metric) => !latest(metric));
    const kidneySnapshot = [
      crea ? `CREA ${crea.value} ${crea.unit || ""}（${date(crea.recordedAt)}）` : "CREA 未记录",
      sdma ? `SDMA ${sdma.value} ${sdma.unit || ""}（${date(sdma.recordedAt)}）` : "SDMA 未记录",
    ].join("；");
    const renalAdvice = missingRenal.length
      ? `现有数据不足以单独确诊或进行IRIS分期。建议结合临床状态，在稳定水合条件下复查CREA/SDMA，并补充${missingRenal.map((metric) => METRIC_LABEL[metric]).join("、")}；如需分期，应先确认肾脏异常持续存在并排除肾前性和肾后性原因。`
      : "尿比重、UPC和收缩压已有记录；仍应由医生结合稳定期CREA/SDMA、尿沉渣、影像及临床状态确认是否存在CKD并决定复查频率。";

    const phosValue = Number(phos?.value);
    const phosphorusLow =
      Number.isFinite(phosValue) &&
      (phosValue < 1 || /低|偏低|下限/.test(String(phos?.status || "")));
    const phosphorusObservation = phos
      ? `最新PHOS为 ${phos.value} ${phos.unit || ""}，记录状态为“${phos.status || "未标注"}”。`
      : "目前没有可用的血磷记录。";
    const phosphorusAdvice = !phos
      ? "在决定是否限磷前先补充血磷，并结合肾脏诊断、完整饮食史和实验室参考区间评估。"
      : phosphorusLow
        ? "目前不支持自行进一步限磷或使用磷结合剂。磷是必需营养素；建议先复查血磷，并核对主食是否完整均衡、实际摄入热量及钙磷信息，再由医生决定是否需要饮食调整。"
        : "不要仅凭单次CREA自行切换处方肾脏饮食。若医生确认CKD，再依据IRIS阶段、血磷趋势、体况和肌肉量制定适度限磷方案。";

    const nutrition = liveNutritionSnapshot(weight);
    const waterMl = nutrition.waterMl;
    const waterPerKg = nutrition.waterPerKg;
    const nutritionObservation = [
      weight ? `体重 ${weight.value} ${weight.unit || "kg"}（${date(weight.recordedAt)}）` : "体重未记录",
      Number.isFinite(waterMl)
        ? `${nutrition.entry ? `${date(nutrition.entry.recordedAt)} 手动记录` : "资料中的日均记录"}总摄水约 ${waterMl} ml${Number.isFinite(waterPerKg) ? `（约 ${waterPerKg.toFixed(0)} ml/kg/日）` : ""}`
        : "尚无可核对的总摄水记录",
      nutrition.entry?.data?.appetite ? `食欲：${nutrition.entry.data.appetite}` : "",
    ].filter(Boolean).join("；");

    const mctLive = liveMctFollowUp();
    const latestTreatment = latestEditedEntry("treatment");
    const mctObservation = [
      `${mctLive.title}：${mctLive.detail}`,
      latestTreatment ? `近期治疗记录：${latestTreatment.title}——${entryCurrentText(latestTreatment)}` : "",
    ].filter(Boolean).join("；");

    const cards = [
      guidanceCard({
        tone: "mint",
        level: "临床指南",
        title: "肾脏：先确认诊断，再进行分期",
        observation: kidneySnapshot,
        advice: renalAdvice,
        sources: ["iris", "isfmCkd"],
      }),
      guidanceCard({
        tone: phosphorusLow ? "amber" : "blue",
        level: "指南＋综述",
        title: phosphorusLow ? "喂养：当前不宜继续机械限磷" : "喂养：依据确诊状态制定限磷方案",
        observation: phosphorusObservation,
        advice: phosphorusAdvice,
        sources: ["phosphorusReview", "isfmCkd"],
      }),
      guidanceCard({
        tone: "blue",
        level: "营养指南＋综述",
        title: "营养与水合：监测体况，而非只看体重",
        observation: nutritionObservation,
        advice: "维持可长期完整均衡的主食，并在每次复诊记录体重、BCS和MCS。湿粮或提高膳食含水量通常能增加总水摄入，但摄水记录不能替代尿比重和临床水合评估；不建议在没有医生评估时强行设定补液量。",
        sources: ["wsavaNutrition", "hydrationReview"],
      }),
      guidanceCard({
        tone: "peach",
        level: "同行评议研究",
        title: "MCT：持续记录新病灶与原位变化",
        observation: mctObservation,
        advice: "建议用同一角度照片、尺标和日期记录病灶；若出现增大、破溃、反复舔咬或新结节，应尽快由医生复查并决定是否FNA或活检。研究显示猫皮肤MCT可发生局部复发或远处新发病灶，因此长期随访具有依据，但个体风险仍需结合病理。",
        sources: ["mctStudy"],
      }),
    ];

    return `<section class="guidance-section" aria-labelledby="medical-guidance-title">
      <div class="section-head"><div><span class="eyebrow">03 / EVIDENCE & CARE</span><h2 id="medical-guidance-title">循证医疗与喂养建议</h2><p>根据当前线上指标动态生成 · 每条建议均附可点击来源</p></div></div>
      <div class="guidance-note"><strong>使用边界：</strong>这是基于现有记录的决策提示，不代替兽医诊断、处方或面对面检查。若数据更新，建议内容会随最新指标重新计算。</div>
      <div class="guidance-grid">${cards.join("")}</div>
    </section>`;
  }

  const CARE_MODULES = ["treatment", "nutrition", "qol"];
  function pageHeading(kicker, title, description) {
    return `<div class="page-heading"><span class="eyebrow">${kicker}</span><h1>${title}</h1><p>${description}</p></div>`;
  }
  function moduleLink(id, label) {
    return `<button class="text-link" data-category="${esc(id)}">${esc(label)} <span aria-hidden="true">↗</span></button>`;
  }
  function recordLink(type, id, label) {
    return `<button class="text-link" data-search-type="${esc(type)}" data-search-id="${esc(id)}">${esc(label)} ↗</button>`;
  }
  function sameDayLinks(day, excludeId) {
    const labs = (state.labReports || []).filter(x => x.recordedAt === day && String(x.id) !== String(excludeId));
    const imaging = (state.moduleEntries || []).filter(x => x.module === "imaging" && x.recordedAt === day && String(x.id) !== String(excludeId));
    const links = [...labs.map(x => recordLink("lab", x.id, "同日实验室报告")), ...imaging.map(x => recordLink("imaging", x.id, x.title))];
    return links.length ? `<div class="related-records"><span>同日记录</span>${links.join("")}</div>` : "";
  }
  function relatedModules(id) {
    const map = {
      lab: [["renal","肾脏评估"],["imaging","影像报告"]],
      renal: [["lab","实验室报告"],["imaging","肾脏超声"],["nutrition","饮食与摄水"]],
      mct: [["treatment","用药与治疗"],["qol","生活质量"]],
      imaging: [["renal","肾脏评估"],["lab","实验室报告"]],
      treatment: [["mct","病灶随访"],["qol","生活质量"]],
      nutrition: [["renal","肾脏评估"],["qol","生活质量"]],
      qol: [["nutrition","饮食与摄水"],["treatment","用药与治疗"]],
      timeline: [["lab","实验室报告"],["treatment","治疗记录"]]
    };
    return `<div class="related-strip"><span>关联查看</span>${(map[id] || []).map(([key,label]) => moduleLink(key,label)).join("")}${["lab","renal","imaging","nutrition"].includes(id) ? `<button class="text-link" data-trend-link="${id === "nutrition" ? "WEIGHT" : "CREA"}" ${["renal","imaging"].includes(id) ? 'data-trend-section="kidney-size"' : ''}>${["renal","imaging"].includes(id) ? "双肾大小趋势" : "指标趋势"} ↗</button>` : ""}</div>`;
  }
  function home() {
    const renalNotice = liveRenalNotice();
    const mctNotice = liveMctFollowUp();
    const manualNotice = recentManualNotice();
    return `<div class="view home-view">
      ${medicationReminderPeek()}
      ${hero()}
      ${searchBar()}
      <div class="section-head"><div><span class="eyebrow">01 / AT A GLANCE</span><h2>面面的近况</h2><p>每项显示自己的检查日期 · 点击查看历史变化</p></div><button class="text-link" data-nav="trends">全部趋势 ↗</button></div>
      <div class="stats">${["WEIGHT", "CREA", "SDMA", "PHOS"].map(stat).join("")}</div>
      <div class="quick-paths">${moduleLink("lab","查检查报告")}${moduleLink("mct","看病灶变化")}${moduleLink("treatment","管理用药疗程")}${moduleLink("nutrition","记录饮食摄水")}</div>
      <div class="section-head"><div><span class="eyebrow">02 / FOLLOW-UP</span><h2>随访提醒</h2></div>${moduleLink("timeline","完整病程")}</div>
      <div class="notice-grid">
        <article class="notice"><h3>${esc(renalNotice.title)}</h3><p>${esc(renalNotice.detail)}</p>${moduleLink("renal","查看肾脏监测")}</article>
        <article class="notice"><h3>${esc(mctNotice.title)}</h3><p>${esc(mctNotice.detail)}</p>${moduleLink("mct","查看病灶记录")}</article>
      </div>
      ${manualNotice ? `<div class="latest-update"><span>最近手动更新</span><p>${esc(manualNotice.detail)}</p>${moduleLink("timeline","查看记录")}</div>` : ""}
      ${medicalGuidance()}
    </div>`;
  }
  function library() {
    return `<div class="view">${pageHeading("THE ARCHIVE / 健康档案", "每一份记录，都有来处。", "按检查、专病与病程查阅；日常喂养和用药统一放在「照护记录」。")}
      ${searchBar()}
      <section class="archive-group"><div class="section-head"><div><span class="eyebrow">01 / EXAMINATIONS</span><h2>检查与报告</h2><p>从原始检查开始，追溯每一项指标</p></div>${ownerMode ? '<button class="primary" data-action="upload">＋ 上传报告</button>' : ''}</div>${categoryGrid(["lab","imaging"])}</section>
      <section class="archive-group"><div class="section-head"><div><span class="eyebrow">02 / HEALTH TOPICS</span><h2>专病随访</h2><p>围绕同一个健康问题，关联检查和治疗</p></div></div>${categoryGrid(["renal","mct"])}</section>
      <div class="archive-footer"><div><span class="eyebrow">THE CHRONICLE</span><h2>把时间连起来</h2><p>沿着日期回看检查、病灶与治疗经过。</p></div>${moduleLink("timeline","打开病程时间轴")}</div>
    </div>`;
  }
  function care() {
    return `<div class="view">${pageHeading("DAILY RITUALS / 照护记录", "把照顾，落在每一天。", "用药、饮食与生活质量各有归处；疗程提醒直接关联原记录。")}
      ${categoryGrid(CARE_MODULES)}
      ${medicationReminderSection()}
      <div class="archive-footer"><div><h2>今天的记录，成为下次就诊的依据</h2><p>首页的随访提醒与循证建议会随保存后的记录更新。</p></div><button class="text-link" data-nav="home">查看今日照护 ↗</button></div>
    </div>`;
  }

  function chart(metric) {
    const points = [...(state.metrics || [])]
      .filter((item) => item.metric === metric)
      .sort((a, b) => a.recordedAt.localeCompare(b.recordedAt));
    if (!points.length) {
      return `<div class="empty">暂无 ${esc(METRIC_LABEL[metric] || metric)} 数据</div>`;
    }

    const values = points.map((item) => Number(item.value)).filter(Number.isFinite);
    if (!values.length) return '<div class="empty">暂无可绘制的数值数据</div>';
    const minimum = Math.min(...values);
    const maximum = Math.max(...values);
    const padding = (maximum - minimum || 1) * 0.18;
    const low = minimum - padding;
    const high = maximum + padding;
    const width = 760;
    const height = 220;
    const left = 48;
    const right = 18;
    const top = 18;
    const bottom = 35;
    const xy = points.map((point, index) => ({
      x:
        left +
        (points.length === 1 ? 0.5 : index / (points.length - 1)) *
          (width - left - right),
      y:
        top +
        ((high - Number(point.value)) / (high - low)) *
          (height - top - bottom),
      ...point,
    }));
    const path = xy
      .map(
        (point, index) =>
          `${index ? "L" : "M"}${point.x.toFixed(1)},${point.y.toFixed(1)}`,
      )
      .join(" ");

    return `<div class="chart-wrap">
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(METRIC_LABEL[metric] || metric)}趋势图">
        ${[0, 0.25, 0.5, 0.75, 1]
          .map(
            (factor) =>
              `<line class="chart-grid" x1="${left}" x2="${width - right}" y1="${top + factor * (height - top - bottom)}" y2="${top + factor * (height - top - bottom)}"/>`,
          )
          .join("")}
        <path class="chart-line" d="${path}"/>
        ${xy
          .map(
            (point) =>
              `<circle class="chart-dot" cx="${point.x}" cy="${point.y}" r="4"/>
               <text class="chart-label" x="${point.x}" y="${point.y - 10}" text-anchor="middle">${esc(point.value)}</text>
               <text class="chart-label" x="${point.x}" y="${height - 10}" text-anchor="middle">${esc(point.recordedAt.slice(2))}</text>`,
          )
          .join("")}
      </svg>
    </div>
    <details class="trend-history"><summary>查看 ${points.length} 次历史数值与来源</summary><div class="entry-list">${[...points]
      .reverse()
      .map(
        (point) => `<div class="entry">
          <div class="entry-top"><h3>${date(point.recordedAt)}</h3><span class="date">${esc(point.status || "已记录")}</span></div>
          <p><strong>${esc(point.value)} ${esc(point.unit)}</strong> · ${esc(point.status || "已记录")}</p>${sameDayLinks(point.recordedAt, null)}
        </div>`,
      )
      .join("")}</div></details>`;
  }

  function kidneyMeasurementSeries(source = state) {
    const byDate = new Map();
    for (const item of source.kidneyMeasurements || []) {
      if (!item?.date) continue;
      const left = Number(item.left);
      const right = Number(item.right);
      byDate.set(item.date, {
        recordedAt: item.date,
        left: Number.isFinite(left) ? left : null,
        right: Number.isFinite(right) ? right : null,
      });
    }

    for (const entry of source.moduleEntries || []) {
      if (entry.module !== "imaging" || !entry.recordedAt) continue;
      const hasLeft = Object.hasOwn(entry.data || {}, "leftKidneyCm");
      const hasRight = Object.hasOwn(entry.data || {}, "rightKidneyCm");
      if (!hasLeft && !hasRight) continue;
      const current = byDate.get(entry.recordedAt) || {
        recordedAt: entry.recordedAt,
        left: null,
        right: null,
      };
      const left = Number(entry.data?.leftKidneyCm);
      const right = Number(entry.data?.rightKidneyCm);
      if (hasLeft) current.left = Number.isFinite(left) ? left : null;
      if (hasRight) current.right = Number.isFinite(right) ? right : null;
      byDate.set(entry.recordedAt, current);
    }

    return [...byDate.values()]
      .filter((item) => Number.isFinite(item.left) || Number.isFinite(item.right))
      .sort((a, b) => a.recordedAt.localeCompare(b.recordedAt));
  }

  function synchronizeDerivedData(source) {
    const next = clone(source);
    const hasImagingEntries = (next.moduleEntries || []).some(
      (entry) => entry.module === "imaging",
    );
    if (hasImagingEntries) {
      next.kidneyMeasurements = kidneyMeasurementSeries(next).map((item) => ({
        date: item.recordedAt,
        left: item.left,
        right: item.right,
      }));
    }
    return next;
  }

  function formatCm(value) {
    if (!Number.isFinite(value)) return "—";
    return Number(value).toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
  }

  function kidneyChart() {
    const points = kidneyMeasurementSeries();
    if (!points.length) {
      return '<div class="empty">暂无可核对的双肾长度记录。</div>';
    }

    const values = points
      .flatMap((point) => [point.left, point.right])
      .filter(Number.isFinite);
    const minimum = Math.min(...values);
    const maximum = Math.max(...values);
    const padding = Math.max((maximum - minimum) * 0.18, 0.12);
    const low = minimum - padding;
    const high = maximum + padding;
    const width = 760;
    const height = 245;
    const left = 50;
    const right = 18;
    const top = 24;
    const bottom = 40;
    const xAt = (index) =>
      left +
      (points.length === 1 ? 0.5 : index / (points.length - 1)) *
        (width - left - right);
    const yAt = (value) =>
      top + ((high - value) / (high - low)) * (height - top - bottom);
    const leftPoints = points
      .map((point, index) => ({ ...point, index, value: point.left }))
      .filter((point) => Number.isFinite(point.value));
    const rightPoints = points
      .map((point, index) => ({ ...point, index, value: point.right }))
      .filter((point) => Number.isFinite(point.value));
    const pathFor = (series) =>
      series
        .map(
          (point, index) =>
            `${index ? "L" : "M"}${xAt(point.index).toFixed(1)},${yAt(point.value).toFixed(1)}`,
        )
        .join(" ");

    return `<div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin:4px 0 2px;color:var(--muted);font-size:13px;font-weight:700">
        <span><i style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#2f806d;margin-right:6px"></i>左肾长径</span>
        <span><i style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#7b66b3;margin-right:6px"></i>右肾长径</span>
        <span>单位：cm</span>
      </div>
      <div class="chart-wrap">
        <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="面面左右肾长径趋势图">
          ${[0, 0.25, 0.5, 0.75, 1]
            .map((factor) => {
              const y = top + factor * (height - top - bottom);
              const label = high - factor * (high - low);
              return `<line class="chart-grid" x1="${left}" x2="${width - right}" y1="${y}" y2="${y}"/>
                <text class="chart-label" x="${left - 8}" y="${y + 3}" text-anchor="end">${label.toFixed(1)}</text>`;
            })
            .join("")}
          <path d="${pathFor(leftPoints)}" fill="none" stroke="#2f806d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="${pathFor(rightPoints)}" fill="none" stroke="#7b66b3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          ${leftPoints
            .map(
              (point) => `<circle cx="${xAt(point.index)}" cy="${yAt(point.value)}" r="4" fill="#fff" stroke="#2f806d" stroke-width="2.5"/>
                <text class="chart-label" x="${xAt(point.index)}" y="${yAt(point.value) - 10}" text-anchor="middle" style="fill:#2f806d">${formatCm(point.value)}</text>`,
            )
            .join("")}
          ${rightPoints
            .map(
              (point) => `<circle cx="${xAt(point.index)}" cy="${yAt(point.value)}" r="4" fill="#fff" stroke="#7b66b3" stroke-width="2.5"/>
                <text class="chart-label" x="${xAt(point.index)}" y="${yAt(point.value) - 10}" text-anchor="middle" style="fill:#7b66b3">${formatCm(point.value)}</text>`,
            )
            .join("")}
          ${points
            .map(
              (point, index) => `<text class="chart-label" x="${xAt(index)}" y="${height - 10}" text-anchor="middle">${esc(point.recordedAt.slice(2).replaceAll("-", "."))}</text>`,
            )
            .join("")}
        </svg>
      </div>
      <table class="result-table">
        <thead><tr><th>超声日期</th><th>左肾长径</th><th>右肾长径</th><th>来源</th></tr></thead>
        <tbody>${[...points]
          .reverse()
          .map(
            (point) => `<tr><td>${date(point.recordedAt)}</td><td>${formatCm(point.left)} cm</td><td>${formatCm(point.right)} cm</td><td>${sameDayLinks(point.recordedAt, null) || "历史超声记录"}</td></tr>`,
          )
          .join("")}</tbody>
      </table>`;
  }

  function trends() {
    const metrics = ["WEIGHT", "CREA", "SDMA", "PHOS", "BUN", "ALT", "USG", "UPC", "SBP"];
    return `<div class="view">
      ${pageHeading("THE CONSTELLATIONS / 长期趋势", "让变化，有迹可循。", "指标与双肾大小集中查看；从每次记录可返回同日原始报告。")}<div class="related-strip"><a class="text-link" href="#kidney-size">查看双肾大小 ↓</a>${moduleLink("lab","实验室报告")}${moduleLink("imaging","影像报告")}</div>
      <div class="chart-card">
        <div class="metric-tabs">${metrics
          .map(
            (metric) =>
              `<button class="${selectedMetric === metric ? "active" : ""}" data-metric="${metric}">${esc(METRIC_LABEL[metric])}</button>`,
          )
          .join("")}</div>
        ${chart(selectedMetric)}
      </div>
      <div style="height:14px"></div>
      <div class="chart-card" id="kidney-size" tabindex="-1">
        <div class="section-head" style="margin:0 0 13px"><div><h2>双肾大小趋势</h2><p>来自历次腹部超声报告的左右肾长径</p></div></div>
        ${kidneyChart()}
        <div class="privacy" style="margin-top:14px">超声长径会受检查切面、操作者和设备影响，应结合肾脏形态、尿检、UPC、血压及肾功能指标综合判断；本图不单独用于 CKD 诊断或分期。</div>
      </div>
    </div>`;
  }

  function moduleShell(id, body, editable = false) {
    const category = CATEGORIES.find((item) => item[0] === id);
    return `<div class="view">
      <div class="toolbar">
        <button class="back" data-nav="${CARE_MODULES.includes(id) ? "care" : "library"}">← ${CARE_MODULES.includes(id) ? "照护记录" : "健康档案"}</button>
        ${editable && ownerMode ? `<button class="primary" data-add="${id}">＋ 新增记录</button>` : ""}
      </div>
      <div class="module-title"><span class="eyebrow">${CARE_MODULES.includes(id) ? "DAILY RITUALS" : "HEALTH ARCHIVE"}</span><h1>${category?.[1] || id}</h1><p>${category?.[2] || ""}</p></div>${relatedModules(id)}
      <div style="height:14px"></div>
      ${body}
    </div>`;
  }

  function lab() {
    const rows = [...(state.labReports || [])].sort((a, b) =>
      b.recordedAt.localeCompare(a.recordedAt),
    );
    const body = rows.length
      ? `<div class="entry-list">${rows
          .map(
            (report) => `<article class="entry" id="item-lab-${esc(report.id)}">
              <div class="entry-top">
                <div><h3>${esc(report.title)}</h3><small>${esc((report.panels || []).join(" · "))}</small></div>
                <span class="date">${date(report.recordedAt)}</span>
              </div>
              <p>${esc(report.summary || "")}</p>${sameDayLinks(report.recordedAt, report.id)}
              ${
                (report.results || []).length
                  ? `<details class="record-details"><summary>展开 ${(report.results || []).length} 项检查结果</summary><table class="result-table"><thead><tr><th>项目</th><th>结果</th><th>单位</th><th>状态</th></tr></thead><tbody>${report.results
                      .map(
                        (result) => `<tr>
                          <td>${esc(result.label || result.metric)}</td>
                          <td>${esc(result.value)}</td>
                          <td>${esc(result.unit || "")}</td>
                          <td>${esc(result.status || result.flag || "")}</td>
                        </tr>`,
                      )
                      .join("")}</tbody></table></details>`
                  : ""
              }
              <div class="entry-actions">${(report.reportPages || [])
                .map(
                  (page, index) =>
                    `<button class="report-button" data-view-report="${esc(report.id)}" data-page="${index}">▧ ${esc(page.label || `报告第 ${index + 1} 页`)}</button>`,
                )
                .join("")}</div>
            </article>`,
          )
          .join("")}</div>`
      : '<div class="empty">暂无实验室检查记录。</div>';
    return moduleShell("lab", body);
  }

  function renal() {
    const metrics = ["CREA", "SDMA", "PHOS", "BUN", "USG", "UPC", "SBP"];
    const body = `<div class="stats">${["CREA", "SDMA", "PHOS", "BUN"].map(stat).join("")}</div>
      <div style="height:13px"></div>
      <div class="chart-card">
        <div class="metric-tabs">${metrics
          .map(
            (metric) =>
              `<button class="${selectedMetric === metric ? "active" : ""}" data-renal-metric="${metric}">${esc(METRIC_LABEL[metric] || metric)}</button>`,
          )
          .join("")}</div>
        ${chart(selectedMetric)}
      </div>
      <div style="height:13px"></div>
      <div class="notice"><h3>${esc(liveRenalNotice().title)}</h3><p>${esc(liveRenalNotice().detail)}</p></div>`;
    return moduleShell("renal", body);
  }

  function entryCard(entry) {
    const data = Object.entries(entry.data || {}).filter(
      ([, value]) => value !== "" && value != null,
    );
    const reportButtons = (entry.imageUrls || [])
      .map(
        (_url, index) =>
          `<button data-entry-image="${esc(entry.id)}" data-page="${index}">▧ 查看报告 ${index + 1}</button>`,
      )
      .join("");
    const editButtons = ownerMode
      ? `<button data-edit="${esc(entry.id)}">✎ 修改</button><button class="danger" data-delete="${esc(entry.id)}">删除</button>`
      : "";
    return `<article class="entry" id="item-module-${esc(entry.id)}">
      <div class="entry-top">
        <div><h3>${esc(entry.title)}</h3><small>${esc(MODULE_LABEL[entry.module] || entry.module)}</small></div>
        <span class="date">${date(entry.recordedAt)}</span>
      </div>
      <p>${esc(entry.summary || "已录入结构化记录。")}</p>
      ${
        data.length
          ? `<div class="kv">${data
              .map(
                ([key, value]) => `<div>
                  <small>${esc((FIELDS[entry.module] || []).find((field) => field[0] === key)?.[1] || key)}</small>
                  <strong>${esc(value)}</strong>
                </div>`,
              )
              .join("")}</div>`
          : ""
      }
      ${entry.module === "imaging" ? sameDayLinks(entry.recordedAt, entry.id) : ""}${entry.module === "treatment" && medicationReminderFor(entry) ? `<div class="entry-actions"><button data-med-jump="#medication-reminder-details">查看到期提醒 ↗</button></div>` : ""}${reportButtons || editButtons ? `<div class="entry-actions">${reportButtons}${editButtons}</div>` : ""}
    </article>`;
  }

  function editableModule(id) {
    const rows = [...(state.moduleEntries || [])]
      .filter((entry) => entry.module === id)
      .sort((a, b) => b.recordedAt.localeCompare(a.recordedAt));
    const empty = ownerMode
      ? "暂无记录，可以点击右上角新增。"
      : "暂无线上记录。";
    return moduleShell(
      id,
      rows.length
        ? `<div class="entry-list">${rows.map(entryCard).join("")}</div>`
        : `<div class="empty">${empty}</div>`,
      true,
    );
  }

  function timelineEvents() {
    const live = [
      ...(state.labReports || []).map(item => ({ date: item.recordedAt, type: "实验室", title: item.title, detail: item.summary, target: "lab", id: item.id })),
      ...(state.moduleEntries || []).map(item => ({ date: item.recordedAt, type: MODULE_LABEL[item.module] || item.module, title: item.title, detail: entryCurrentText(item), target: item.module, id: item.id }))
    ];
    const all = [...live, ...(state.timeline || []).map(item => ({date:item.date,type:item.type,title:item.title,detail:item.detail}))];
    const seen = new Set();
    return all
      .filter((item) => {
        const key = `${item.date}|${item.title}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .sort((a, b) => b.date.localeCompare(a.date));
  }

  function timeline() {
    const body = `<div class="entry-list">${timelineEvents()
      .map(
        (item, index) => `<article class="entry" id="item-time-${index}">
          <div class="entry-top"><div><h3>${esc(item.title)}</h3><small>${esc(item.type)}</small></div><span class="date">${date(item.date)}</span></div>
          <p>${esc(item.detail || "")}</p>${item.target ? recordLink(item.target,item.id,"打开原始记录") : sameDayLinks(item.date,null)}
        </article>`,
      )
      .join("")}</div>`;
    return moduleShell("timeline", body);
  }

  function allSearch(query) {
    const normalized = query.trim().toLowerCase();
    const includes = (...values) =>
      values.join(" ").toLowerCase().includes(normalized);
    if (!normalized) return [];
    const output = [];

    (state.labReports || []).forEach((item) => {
      if (
        includes(
          item.recordedAt,
          item.title,
          item.summary,
          (item.panels || []).join(" "),
          JSON.stringify(item.results),
        )
      ) {
        output.push({
          type: "lab",
          id: item.id,
          title: item.title,
          meta: `实验室 · ${date(item.recordedAt)}`,
          detail: item.summary,
        });
      }
    });

    (state.moduleEntries || []).forEach((item) => {
      if (
        includes(
          item.recordedAt,
          item.title,
          item.summary,
          MODULE_LABEL[item.module],
          JSON.stringify(item.data),
        )
      ) {
        output.push({
          type: item.module,
          id: item.id,
          title: item.title,
          meta: `${MODULE_LABEL[item.module]} · ${date(item.recordedAt)}`,
          detail: item.summary,
        });
      }
    });

    (state.metrics || []).forEach((item) => {
      if (
        includes(
          item.recordedAt,
          item.metric,
          METRIC_LABEL[item.metric],
          item.value,
          item.status,
          item.source,
        )
      ) {
        output.push({
          type: "metric",
          id: item.metric,
          title: `${METRIC_LABEL[item.metric] || item.metric} ${item.value} ${item.unit}`,
          meta: `指标 · ${date(item.recordedAt)}`,
          detail: item.status,
        });
      }
    });
    return output.slice(0, 80);
  }

  function searchResults(query) {
    const rows = allSearch(query);
    return `<div class="view">
      <div class="toolbar"><button class="back" data-nav="home">← 返回首页</button></div>
      <div class="module-title"><h1>“${esc(query)}”的检索结果</h1><p>找到 ${rows.length} 条相关记录</p></div>
      <div style="height:14px"></div>
      ${
        rows.length
          ? `<div class="search-results">${rows
              .map(
                (item) => `<button class="search-result" data-search-type="${esc(item.type)}" data-search-id="${esc(item.id ?? "")}">
                  <small>${item.meta}</small><strong>${esc(item.title)}</strong><p>${esc(item.detail || "")}</p>
                </button>`,
              )
              .join("")}</div>`
          : '<div class="empty">没有找到对应内容，请尝试日期、检查名称、药物或指标缩写。</div>'
      }
    </div>`;
  }

  async function resolveAsset(url) {
    if (url?.startsWith("/reports/")) return `.${url}`;
    if (url?.startsWith("local:")) {
      const item = await getLocalFile(url.slice(6));
      return item ? URL.createObjectURL(item.blob) : "";
    }
    return url || "";
  }

  async function showViewer(urls, index = 0, title = "检查报告") {
    const available = (urls || []).filter(Boolean);
    if (!available.length) {
      toast("这条记录尚未关联报告图像");
      return;
    }
    let current = Math.max(0, Math.min(index, available.length - 1));
    overlay.innerHTML = `<div class="modal">
      <section class="viewer-card">
        <header class="modal-head viewer-head"><h2>${esc(title)}</h2><button class="close" data-close>×</button></header>
        <div class="viewer-body" id="viewer-body"></div>
        ${available.length > 1 ? '<div class="viewer-nav"><button data-prev>上一页</button><button data-next>下一页</button></div>' : ""}
      </section>
    </div>`;

    async function draw() {
      const original = available[current];
      const source = await resolveAsset(original);
      const local = original?.startsWith("local:")
        ? await getLocalFile(original.slice(6))
        : null;
      const isPdf =
        local?.type === "application/pdf" || /\.pdf(?:$|[?#])/i.test(original);
      const body = overlay.querySelector("#viewer-body");
      if (!source) {
        body.innerHTML = '<div style="color:white;padding:30px">报告文件未找到</div>';
      } else {
        body.innerHTML = isPdf
          ? `<iframe src="${esc(source)}" title="${esc(title)} 第 ${current + 1} 页"></iframe>`
          : `<img src="${esc(source)}" alt="${esc(title)} 第 ${current + 1} 页">`;
      }
    }

    await draw();
    overlay.querySelector("[data-close]").onclick = () => (overlay.innerHTML = "");
    overlay.querySelector("[data-prev]")?.addEventListener("click", () => {
      current = (current - 1 + available.length) % available.length;
      void draw();
    });
    overlay.querySelector("[data-next]")?.addEventListener("click", () => {
      current = (current + 1) % available.length;
      void draw();
    });
  }

  function editor(module, id = null) {
    if (!requireOwner("新增或修改健康记录需要主人权限。")) return;
    const entry =
      id != null
        ? (state.moduleEntries || []).find(
            (item) => String(item.id) === String(id),
          )
        : null;
    const definitions = FIELDS[module] || [];
    overlay.innerHTML = `<div class="modal">
      <section class="modal-card">
        <header class="modal-head"><h2>${entry ? "修改" : "新增"}${esc(MODULE_LABEL[module])}</h2><button class="close" data-close>×</button></header>
        <form class="modal-body" id="editor-form">
          <div class="privacy">保存后会写入线上健康库，并同步到同一个公开链接。上传影像报告时会先核对文件指纹，发现重复会提示原记录日期和名称。</div>
          <div style="height:14px"></div>
          <div class="form-grid">
            <div class="field"><label>记录日期</label><input name="recordedAt" type="date" required value="${esc(entry?.recordedAt || today())}"></div>
            <div class="field"><label>记录名称</label><input name="title" required value="${esc(entry?.title || "")}"></div>
            <div class="field wide"><label>摘要</label><textarea name="summary">${esc(entry?.summary || "")}</textarea></div>
            ${definitions
              .map(([key, label, type = "text"]) => {
                if (type === "textarea") {
                  return `<div class="field wide"><label>${esc(label)}</label><textarea name="d_${key}">${esc(entry?.data?.[key] ?? "")}</textarea></div>`;
                }
                if (type === "select") {
                  return `<div class="field"><label>${esc(label)}</label><select name="d_${key}"><option value="">请选择</option>${fieldSelectOptions(module, key)
                    .map(
                      (value) =>
                        `<option value="${esc(value)}" ${entry?.data?.[key] === value ? "selected" : ""}>${esc(value)}</option>`,
                    )
                    .join("")}</select></div>`;
                }
                const numberAttributes =
                  type === "number" && module === "qol"
                    ? 'min="0" max="5" step="1"'
                    : type === "number" && module === "treatment" && key === "durationValue"
                      ? 'min="1" step="1"'
                    : type === "number"
                      ? 'step="0.1"'
                      : "";
                return `<div class="field"><label>${esc(label)}</label><input name="d_${key}" type="${type}" ${numberAttributes} value="${esc(entry?.data?.[key] ?? "")}"></div>`;
              })
              .join("")}
            ${
              module === "treatment"
                ? `<div class="field wide course-preview" data-course-preview>填写“记录日期＋疗程长度＋单位”后，将自动计算结束 / 换量日期。${entry?.data?.reminderCompletedAt ? '<label class="reopen-reminder"><input name="reminderReopen" type="checkbox"> 重新启用这条已处理的提醒</label>' : ""}</div>`
                : ""
            }
            ${
              module === "imaging"
                ? '<div class="field wide"><label>增加报告图片或 PDF（将上传到线上）</label><input name="files" type="file" accept="image/*,application/pdf" multiple></div>'
                : ""
            }
          </div>
          <div class="modal-foot"><button type="button" class="secondary" data-close>取消</button><button class="primary" data-submit>保存并同步</button></div>
        </form>
      </section>
    </div>`;

    overlay.querySelectorAll("[data-close]").forEach((button) => {
      button.onclick = () => (overlay.innerHTML = "");
    });
    if (module === "treatment") {
      const form = overlay.querySelector("#editor-form");
      const recordedAtInput = form.elements.recordedAt;
      const durationInput = form.elements.d_durationValue;
      const unitInput = form.elements.d_durationUnit;
      const endInput = form.elements.d_endDate;
      const preview = form.querySelector("[data-course-preview]");
      let autoManagedEndDate = !endInput.value || endInput.value === calculateCourseEnd(recordedAtInput.value, durationInput.value, unitInput.value);
      const updateCoursePreview = () => {
        const calculated = calculateCourseEnd(recordedAtInput.value, durationInput.value, unitInput.value);
        if (autoManagedEndDate) endInput.value = calculated;
        const shown = endInput.value || calculated;
        const reopen = entry?.data?.reminderCompletedAt ? '<label class="reopen-reminder"><input name="reminderReopen" type="checkbox"> 重新启用这条已处理的提醒</label>' : "";
        preview.innerHTML = shown
          ? `<strong>提醒日期：${date(shown)}</strong><span>日期到达时，首页会显示到期状态；你也可以提前添加到手机日历。</span>${reopen}`
          : `填写“记录日期＋疗程长度＋单位”后，将自动计算结束 / 换量日期。${reopen}`;
      };
      [recordedAtInput, durationInput, unitInput].forEach((input) => input?.addEventListener("input", () => {
        autoManagedEndDate = true;
        updateCoursePreview();
      }));
      endInput?.addEventListener("input", () => {
        autoManagedEndDate = !endInput.value;
        updateCoursePreview();
      });
      updateCoursePreview();
    }
    overlay.querySelector("#editor-form").onsubmit = async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const submit = form.querySelector("[data-submit]");
      submit.disabled = true;
      submit.textContent = "正在同步…";
      try {
        const formData = new FormData(form);
        const data = { ...(entry?.data || {}) };
        definitions.forEach(([key, _label, type]) => {
          const value = String(formData.get(`d_${key}`) || "").trim();
          if (value !== "") data[key] = type === "number" ? Number(value) : value;
          else delete data[key];
        });
        if (module === "treatment" && !data.endDate) {
          data.endDate = calculateCourseEnd(
            String(formData.get("recordedAt")),
            data.durationValue,
            data.durationUnit,
          );
          if (!data.endDate) delete data.endDate;
        }
        if (formData.get("reminderReopen")) delete data.reminderCompletedAt;
        const oldDueDate = entry?.data?.endDate || calculateCourseEnd(entry?.recordedAt, entry?.data?.durationValue, entry?.data?.durationUnit);
        const newDueDate = data.endDate || calculateCourseEnd(String(formData.get("recordedAt")), data.durationValue, data.durationUnit);
        if (oldDueDate && newDueDate && oldDueDate !== newDueDate) delete data.reminderCompletedAt;

        const imageUrls = [...(entry?.imageUrls || [])];
        const imageFiles = [...(entry?.imageFiles || [])];
        const newFiles = (formData.getAll("files") || []).filter((file) => file instanceof File && file.size);
        submit.textContent = newFiles.length ? "正在检测重复报告…" : "正在同步…";
        const inspected = await inspectFilesForDuplicates(newFiles);
        for (const item of inspected) {
          if (item.match && !confirmDuplicate(item.match, item.file.name)) {
            submit.disabled = false;
            submit.textContent = "保存并同步";
            return;
          }
        }
        for (const item of inspected) {
          submit.textContent = `正在上传 ${item.file.name}…`;
          const url = await uploadCloudAsset(item.file);
          imageUrls.push(url);
          imageFiles.push({ url, name: item.file.name, mimeType: item.file.type, size: item.file.size, sha256: item.sha256 });
        }

        const now = new Date().toISOString();
        const nextEntry = {
          id: entry?.id ?? `user-${crypto.randomUUID()}`,
          module,
          recordedAt: String(formData.get("recordedAt")),
          title: String(formData.get("title") || "").trim(),
          summary: String(formData.get("summary") || "").trim(),
          data,
          imageUrls,
          imageFiles,
          sourceKey: entry?.sourceKey || `user:${crypto.randomUUID()}`,
          createdAt: entry?.createdAt || now,
          updatedAt: now,
        };
        const nextState = clone(state);
        if (entry) {
          nextState.moduleEntries = (nextState.moduleEntries || []).map((item) =>
            String(item.id) === String(entry.id) ? nextEntry : item,
          );
        } else {
          nextState.moduleEntries = [nextEntry, ...(nextState.moduleEntries || [])];
        }
        route = { name: "module", id: module, highlight: null };
        await saveCloud(
          nextState,
          `${entry ? "Update" : "Add"} ${MODULE_LABEL[module]} record ${nextEntry.recordedAt}`,
        );
        overlay.innerHTML = "";
      } catch {
        submit.disabled = false;
        submit.textContent = "保存并同步";
      }
    };
  }

  function uploadModal() {
    if (!requireOwner("上传检查结果需要主人权限。")) return;
    overlay.innerHTML = `<div class="modal">
      <section class="modal-card">
        <header class="modal-head"><h2>上传检查结果并同步</h2><button class="close" data-close>×</button></header>
        <form class="modal-body" id="upload-form">
          <div class="privacy">扫描件和你核对后的指标会保存到线上。上传前会自动核对文件指纹和完整指标组合；发现重复时会提示原报告日期和名称。请按照原报告逐项核对数值、单位和异常状态。</div>
          <div style="height:14px"></div>
          <div class="form-grid">
            <div class="field wide"><label>扫描件图片或 PDF（可多选）</label><input type="file" name="files" accept="image/*,application/pdf" multiple required></div>
            <div class="field"><label>检查日期</label><input type="date" name="recordedAt" value="${today()}" required></div>
            <div class="field"><label>记录名称</label><input name="title" value="扫描检查报告" required></div>
            <div class="field wide"><label>指标（每行：代码, 数值, 单位, 状态）</label><textarea name="metrics" placeholder="CREA, 151, µmol/L, 本次报告范围内&#10;SDMA, 9, µg/dL, 报告范围内"></textarea></div>
          </div>
          <div class="modal-foot"><button type="button" class="secondary" data-close>取消</button><button class="primary" data-submit>上传并同步</button></div>
        </form>
      </section>
    </div>`;

    overlay.querySelectorAll("[data-close]").forEach((button) => {
      button.onclick = () => (overlay.innerHTML = "");
    });
    overlay.querySelector("#upload-form").onsubmit = async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const submit = form.querySelector("[data-submit]");
      submit.disabled = true;
      try {
        const formData = new FormData(form);
        const files = (formData.getAll("files") || []).filter(
          (file) => file instanceof File && file.size,
        );
        if (!files.length) throw new Error("请选择扫描件图片或 PDF");

        const recordedAt = String(formData.get("recordedAt"));
        const title = String(formData.get("title") || "").trim();
        const lines = String(formData.get("metrics") || "")
          .split(/\n+/)
          .map((line) => line.split(/[,，]/).map((value) => value.trim()))
          .filter((line) => line[0] && Number.isFinite(Number(line[1])));
        const proposedResults = lines.map((line) => ({ metric: line[0].toUpperCase(), value: Number(line[1]), unit: line[2] || "" }));

        submit.textContent = "正在检测重复报告…";
        const inspected = await inspectFilesForDuplicates(files);
        for (const item of inspected) {
          if (item.match && !confirmDuplicate(item.match, item.file.name)) {
            submit.disabled = false;
            submit.textContent = "上传并同步";
            return;
          }
        }
        if (proposedResults.length >= 3) {
          const signature = resultSignature(proposedResults);
          const dataMatch = duplicateCatalog().find((item) => item.signature === signature && item.resultCount === proposedResults.length);
          if (dataMatch && !confirmDuplicate(dataMatch, title, "的完整指标数据相同")) {
            submit.disabled = false;
            submit.textContent = "上传并同步";
            return;
          }
        }

        const uploaded = [];
        for (let index = 0; index < inspected.length; index += 1) {
          const item = inspected[index];
          submit.textContent = `正在上传 ${index + 1}/${inspected.length}…`;
          uploaded.push({ file: item.file, sha256: item.sha256, url: await uploadCloudAsset(item.file) });
        }

        const now = new Date().toISOString();
        const reportId = `user-lab-${crypto.randomUUID()}`;
        const metrics = lines.map((line) => ({
          id: `user-metric-${crypto.randomUUID()}`,
          recordedAt,
          metric: line[0].toUpperCase(),
          value: Number(line[1]),
          unit: line[2] || "",
          status: line[3] || "已由用户核对",
          source: title,
          sourceUploadId: uploaded[0]?.url || null,
          createdAt: now,
        }));
        const summary = metrics.length
          ? metrics
              .map((item) => `${item.metric} ${item.value} ${item.unit}`.trim())
              .join("；")
          : `已上传 ${uploaded.length} 页扫描报告；结构化指标待人工录入。`;
        const report = {
          id: reportId,
          recordedAt,
          title,
          summary,
          panels: ["用户上传报告"],
          results: metrics.map((item) => ({
            metric: item.metric,
            label: METRIC_LABEL[item.metric] || item.metric,
            value: item.value,
            unit: item.unit,
            status: item.status,
          })),
          reportPages: uploaded.map((item, index) => ({
            label: item.file.name || `报告第 ${index + 1} 页`,
            imageUrl: item.url,
            sha256: item.sha256,
          })),
          createdAt: now,
          updatedAt: now,
        };

        const nextState = clone(state);
        nextState.metrics = [...(nextState.metrics || []), ...metrics];
        nextState.labReports = [report, ...(nextState.labReports || [])];
        nextState.records = [
          {
            id: `user-record-${crypto.randomUUID()}`,
            recordedAt,
            category: "检查报告",
            title,
            summary,
            sourceUploadId: uploaded[0]?.url || null,
            createdAt: now,
          },
          ...(nextState.records || []),
        ];
        nextState.uploads = [
          ...uploaded.map((item) => ({
            id: `user-upload-${crypto.randomUUID()}`,
            originalName: item.file.name,
            url: item.url,
            mimeType: item.file.type,
            size: item.file.size,
            sha256: item.sha256,
            recordedAt,
            title,
            createdAt: now,
          })),
          ...(nextState.uploads || []),
        ];
        route = { name: "module", id: "lab", highlight: `#item-lab-${reportId}` };
        submit.textContent = "正在提交健康数据…";
        await saveCloud(nextState, `Add laboratory report ${recordedAt}`);
        overlay.innerHTML = "";
      } catch (error) {
        submit.disabled = false;
        submit.textContent = "上传并同步";
        if (!(error instanceof GitHubApiError)) {
          toast(error?.message || "上传失败", 4800);
        }
      }
    };
  }

  function more() {
    const updated = formatCloudTime(state._cloud?.updatedAt);
    const ownerCard = ownerMode
      ? `<article class="backup-card">
          <h3>主人模式 · 已启用</h3>
          <p>这台设备可以新增、修改、删除并上传扫描件。凭证只保存在当前浏览器。</p>
          <button class="secondary danger" data-owner-exit>退出主人模式</button>
        </article>`
      : `<article class="backup-card">
          <h3>主人管理</h3>
          <p>公开访客只能查看。你可在自己的手机上启用主人模式，将修改同步到线上。</p>
          <button class="primary" data-owner-open>进入主人模式</button>
        </article>`;
    const legacyCard = legacyAvailable
      ? `<article class="backup-card">
          <h3>发现旧版本机记录</h3>
          <p>这台设备曾用旧版“本机保存”。可把旧记录和本机扫描件迁移到线上；迁移前会再次确认。</p>
          <button class="secondary" data-migrate>迁移旧记录到线上</button>
        </article>`
      : "";
    const importControl = ownerMode
      ? '<label class="secondary" style="display:inline-block">选择备份文件<input class="hidden" type="file" accept="application/json" data-import></label>'
      : '<button class="secondary" data-owner-open>先进入主人模式</button>';

    return `<div class="view">
      <div class="module-title"><h1>线上同步与备份</h1><p>所有访客通过同一公开链接读取最新健康库</p></div>
      <div style="height:14px"></div>
      <div class="privacy"><strong>当前线上版本：${esc(state._cloud?.revision || "—")}</strong><br>最近更新：${esc(updated)}。健康资料和报告文件公开可读；只有持有主人凭证的设备可以修改。提交后通常需要短暂发布时间。</div>
      <div style="height:14px"></div>
      <div class="backup-grid">
        ${ownerCard}
        <article class="backup-card">
          <h3>重新载入线上数据</h3>
          <p>编辑前若其他设备刚更新过，先重新载入可避免版本冲突。</p>
          <button class="secondary" data-reload>立即重新载入</button>
        </article>
        <article class="backup-card">
          <h3>导出完整备份</h3>
          <p>导出当前结构化数据；主人凭证绝不会写入备份文件。</p>
          <button class="primary" data-export>导出备份文件</button>
        </article>
        <article class="backup-card">
          <h3>导入并发布备份</h3>
          <p>导入旧备份后会先上传其中的本机扫描件，再发布为新的线上版本。</p>
          ${importControl}
        </article>
        ${legacyCard}
        <article class="backup-card">
          <h3>添加到手机桌面</h3>
          <p>在浏览器分享菜单中选择“添加到主屏幕”，即可像 App 一样打开。</p>
        </article>
      </div>
    </div>`;
  }

  const dataUrl = (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });

  async function exportBackup() {
    let files = [];
    try {
      files = await allLocalFiles();
    } catch {
      files = [];
    }
    const payload = {
      version: 3,
      exportedAt: new Date().toISOString(),
      state,
      files: await Promise.all(
        files.map(async (item) => ({
          id: item.id,
          name: item.name,
          type: item.type,
          createdAt: item.createdAt,
          data: await dataUrl(item.blob),
        })),
      ),
    };
    const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
    const anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(blob);
    anchor.download = `面面健康工作台备份_${today()}.json`;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(anchor.href), 1000);
    toast("备份文件已生成；其中不含主人凭证");
  }

  function dataUrlToBlob(url) {
    const [head, body] = String(url).split(",");
    const type = head.match(/data:(.*?);/)?.[1] || "application/octet-stream";
    const binary = atob(body);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return new Blob([bytes], { type });
  }

  async function importBackup(file) {
    if (!requireOwner("导入备份会发布新的线上版本，需要主人权限。")) return;
    const payload = JSON.parse(await file.text());
    if (!payload?.state || !validateHealthData(payload.state)) {
      throw new Error("不是有效的面面健康工作台备份");
    }
    if (!confirm("确定用这个备份创建新的线上版本吗？当前线上版本不会立即删除，但内容会被新版本替代。")) {
      return;
    }
    for (const item of payload.files || []) {
      const blob = dataUrlToBlob(item.data);
      const restored = new File([blob], item.name || "report", {
        type: item.type || blob.type,
      });
      await putLocalFile(restored, item.id);
    }
    const imported = clone(payload.state);
    imported._cloud = clone(state._cloud || {});
    route = { name: "home", id: null, highlight: null };
    await saveCloud(imported, `Import health backup ${today()}`);
    toast("备份已导入并发布到线上");
  }

  async function migrateLegacyData() {
    if (!legacyAvailable || !legacyState) {
      toast("没有发现可迁移的旧版本机记录");
      return;
    }
    if (!requireOwner("迁移旧版本机记录需要主人权限。")) return;
    if (!validateHealthData(legacyState)) {
      toast("旧版本机数据格式不完整，建议改用备份导入", 4200);
      return;
    }
    if (!confirm("确定把这台设备的旧版本机记录发布为新的线上版本吗？请确认旧记录比当前线上内容更新。")) {
      return;
    }
    const imported = clone(legacyState);
    imported._cloud = clone(state._cloud || {});
    route = { name: "home", id: null, highlight: null };
    await saveCloud(imported, `Migrate legacy local health data ${today()}`);
    storageSet(LEGACY_MIGRATED_KEY, "1");
    legacyAvailable = false;
    render();
    toast("旧版本机记录已迁移到线上");
  }

  let restoringNavigation = false;
  let navigationKey = "";
  function render() {
    const key = [route.name, route.id || "", selectedMetric].join("|");
    if (navigationKey && key !== navigationKey && !restoringNavigation) {
      history.pushState({mianmianRoute: {...route, highlight: null}, metric: selectedMetric}, "");
    } else if (!navigationKey) {
      history.replaceState({mianmianRoute: {...route, highlight: null}, metric: selectedMetric}, "");
    }
    navigationKey = key;
    document.querySelectorAll("[data-nav]").forEach((button) => {
      const activeRoute = route.name === "module" ? (CARE_MODULES.includes(route.id) ? "care" : "library") : route.name;
      button.classList.toggle("active", button.dataset.nav === activeRoute);
      if (button.dataset.nav === activeRoute) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current");
    });
    if (!(state.metrics?.length || state.labReports?.length || state.moduleEntries?.length) && ["loading", "error"].includes(cloudStatus)) {
      main.innerHTML = `<div class="empty"><h2>${cloudStatus === "loading" ? "正在打开面面的健康手记…" : "暂时无法读取健康资料"}</h2><p>资料尚未载入，不据此生成健康判断。</p><button class="secondary" data-reload>重新载入</button></div>`;
      bind(); updateStatusPill(); return;
    }
    if (route.name === "home") main.innerHTML = home();
    else if (route.name === "library") main.innerHTML = library();
    else if (route.name === "trends") main.innerHTML = trends();
    else if (route.name === "care") main.innerHTML = care();
    else if (route.name === "more") main.innerHTML = more();
    else if (route.name === "search") main.innerHTML = searchResults(route.id);
    else if (route.name === "module") {
      if (route.id === "lab") main.innerHTML = lab();
      else if (route.id === "renal") main.innerHTML = renal();
      else if (route.id === "timeline") main.innerHTML = timeline();
      else main.innerHTML = editableModule(route.id);
    } else {
      route = { name: "home", id: null, highlight: null };
      main.innerHTML = home();
    }
    bind();
    updateStatusPill();
    if (route.name === "home" && !medicationAlertShown) {
      const dueReminder = medicationReminders().find((item) => item.days <= 0);
      if (dueReminder) {
        medicationAlertShown = true;
        setTimeout(() => toast(`用药提醒：${dueReminder.entry.title}${dueReminder.days < 0 ? "已到期" : "今天到期"}，请查看首页提醒卡。`, 5200), 250);
      }
    }
    if (route.highlight) {
      const selector = route.highlight;
      setTimeout(() => {
        const element = document.querySelector(selector);
        element?.classList.add("highlight");
        element?.scrollIntoView({ behavior: "smooth", block: "center" });
        route.highlight = null;
      }, 80);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function bind() {
    document.querySelectorAll("[data-trend-link]").forEach(button => {
      button.onclick = () => { selectedMetric = button.dataset.trendLink; route = {name:"trends",id:null,highlight:button.dataset.trendSection ? "#" + button.dataset.trendSection : null}; render(); };
    });
    document.querySelectorAll("[data-nav]").forEach((button) => {
      button.onclick = () => {
        route = { name: button.dataset.nav, id: null, highlight: null };
        render();
      };
    });
    document.querySelectorAll("[data-category]").forEach((button) => {
      button.onclick = () => {
        route = {
          name: "module",
          id: button.dataset.category,
          highlight: null,
        };
        if (
          route.id === "renal" &&
          !["CREA", "SDMA", "PHOS", "BUN", "USG", "UPC", "SBP"].includes(
            selectedMetric,
          )
        ) {
          selectedMetric = "CREA";
        }
        render();
      };
    });
    document.querySelector("#search-form")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = document.querySelector("#search-input").value.trim();
      if (query) {
        route = { name: "search", id: query, highlight: null };
        render();
      }
    });
    document.querySelectorAll("[data-metric]").forEach((button) => {
      button.onclick = () => {
        selectedMetric = button.dataset.metric;
        render();
      };
    });
    document.querySelectorAll("[data-renal-metric]").forEach((button) => {
      button.onclick = () => {
        selectedMetric = button.dataset.renalMetric;
        render();
      };
    });
    document.querySelectorAll("[data-add]").forEach((button) => {
      button.onclick = () => editor(button.dataset.add);
    });
    document.querySelectorAll("[data-edit]").forEach((button) => {
      button.onclick = () => {
        if (!requireOwner("修改健康记录需要主人权限。")) return;
        const entry = (state.moduleEntries || []).find(
          (item) => String(item.id) === button.dataset.edit,
        );
        if (entry) editor(entry.module, entry.id);
      };
    });
    document.querySelectorAll("[data-delete]").forEach((button) => {
      button.onclick = async () => {
        if (!requireOwner("删除健康记录需要主人权限。")) return;
        const entry = (state.moduleEntries || []).find(
          (item) => String(item.id) === button.dataset.delete,
        );
        if (!entry || !confirm(`确定删除“${entry.title}”并同步到线上吗？`)) return;
        const nextState = clone(state);
        nextState.moduleEntries = (nextState.moduleEntries || []).filter(
          (item) => String(item.id) !== String(entry.id),
        );
        try {
          await saveCloud(
            nextState,
            `Delete ${MODULE_LABEL[entry.module] || entry.module} record ${entry.recordedAt}`,
          );
        } catch {
          // saveCloud already presents the actionable error.
        }
      };
    });
    document.querySelectorAll("[data-view-report]").forEach((button) => {
      button.onclick = () => {
        const report = (state.labReports || []).find(
          (item) => String(item.id) === button.dataset.viewReport,
        );
        if (report) {
          void showViewer(
            (report.reportPages || []).map((page) => page.imageUrl || page.url),
            Number(button.dataset.page),
            `${report.recordedAt} · ${report.title}`,
          );
        }
      };
    });
    document.querySelectorAll("[data-entry-image]").forEach((button) => {
      button.onclick = () => {
        const entry = (state.moduleEntries || []).find(
          (item) => String(item.id) === button.dataset.entryImage,
        );
        if (entry) {
          void showViewer(
            entry.imageUrls || [],
            Number(button.dataset.page),
            `${entry.recordedAt} · ${entry.title}`,
          );
        }
      };
    });
    document.querySelectorAll("[data-med-calendar]").forEach((button) => {
      button.onclick = () => downloadMedicationCalendar(button.dataset.medCalendar);
    });
    document.querySelectorAll("[data-med-jump]").forEach((button) => {
      button.onclick = () => {
        if (route.name !== "care") {
          route = { name: "care", id: null, highlight: button.dataset.medJump };
          render();
          return;
        }
        const target = document.querySelector(button.dataset.medJump);
        if (!target) return;
        target.scrollIntoView({ block: "start" });
        target.focus({ preventScroll: true });
      };
    });
    document.querySelectorAll("[data-med-complete]").forEach((button) => {
      button.onclick = async () => {
        button.disabled = true;
        try {
          await completeMedicationReminder(button.dataset.medComplete);
        } catch {
          button.disabled = false;
        }
      };
    });
    document.querySelectorAll("[data-search-type]").forEach((button) => {
      button.onclick = () => {
        const type = button.dataset.searchType;
        const id = button.dataset.searchId;
        if (type === "metric") { selectedMetric = id; route = {name:"trends",id:null,highlight:null}; render(); return; }
        const escapedId = window.CSS?.escape
          ? window.CSS.escape(id)
          : id.replace(/[^a-zA-Z0-9_-]/g, "");
        route = {
          name: "module",
          id: type,
          highlight: id
            ? type === "lab"
              ? `#item-lab-${escapedId}`
              : `#item-module-${escapedId}`
            : null,
        };
        render();
      };
    });
    document.querySelectorAll("[data-action='upload']").forEach((button) => {
      button.onclick = uploadModal;
    });
    document.querySelectorAll("[data-owner-open]").forEach((button) => {
      button.onclick = () => openOwnerModal();
    });
    document.querySelectorAll("[data-owner-exit]").forEach((button) => {
      button.onclick = exitOwnerMode;
    });
    document.querySelector("[data-export]")?.addEventListener("click", () => {
      void exportBackup();
    });
    document.querySelector("[data-import]")?.addEventListener("change", async (event) => {
      try {
        if (event.target.files?.[0]) await importBackup(event.target.files[0]);
      } catch (error) {
        toast(error?.message || "导入失败", 4800);
      }
    });
    document.querySelector("[data-reload]")?.addEventListener("click", () => {
      void loadCloudData({ notify: true });
    });
    document.querySelector("[data-migrate]")?.addEventListener("click", () => {
      void migrateLegacyData();
    });
  }

  window.addEventListener("popstate", event => {
    if (!event.state?.mianmianRoute) return;
    route = event.state.mianmianRoute;
    selectedMetric = event.state.metric || "CREA";
    restoringNavigation = true;
    render();
    restoringNavigation = false;
  });
  statusButton?.addEventListener("click", () => openOwnerModal());
  async function refreshCloudIfStale() {
    if (cloudStatus === "saving" || Date.now() - lastCloudRefreshAt < 60000) return;
    await loadCloudData({ quiet: true });
  }
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") void refreshCloudIfStale();
  });
  window.addEventListener("focus", () => void refreshCloudIfStale());
  window.setInterval(() => void refreshCloudIfStale(), 5 * 60 * 1000);
  render();
  void loadCloudData();
})();

