(() => {
  "use strict";

  const INITIAL = {"metrics":[{"id":1,"ownerId":"mianmian-vault-v1","recordedAt":"2020-02-16","metric":"WEIGHT","value":3.6,"unit":"kg","status":"历史记录","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:29"},{"id":2,"ownerId":"mianmian-vault-v1","recordedAt":"2020-02-16","metric":"CREA","value":175,"unit":"µmol/L","status":"历史记录","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:29"},{"id":3,"ownerId":"mianmian-vault-v1","recordedAt":"2020-02-16","metric":"BUN","value":6.53,"unit":"mmol/L","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:29"},{"id":4,"ownerId":"mianmian-vault-v1","recordedAt":"2020-02-16","metric":"PHOS","value":1.27,"unit":"mmol/L","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:29"},{"id":5,"ownerId":"mianmian-vault-v1","recordedAt":"2020-02-16","metric":"ALT","value":69,"unit":"U/L","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:29"},{"id":6,"ownerId":"mianmian-vault-v1","recordedAt":"2021-04-01","metric":"WEIGHT","value":3.59,"unit":"kg","status":"历史记录","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:29"},{"id":7,"ownerId":"mianmian-vault-v1","recordedAt":"2021-04-01","metric":"CREA","value":176.8,"unit":"µmol/L","status":"单位已换算","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:29"},{"id":8,"ownerId":"mianmian-vault-v1","recordedAt":"2021-04-01","metric":"BUN","value":10.35,"unit":"mmol/L","status":"单位已换算","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:29"},{"id":9,"ownerId":"mianmian-vault-v1","recordedAt":"2021-04-01","metric":"PHOS","value":1.16,"unit":"mmol/L","status":"单位已换算","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":10,"ownerId":"mianmian-vault-v1","recordedAt":"2021-04-01","metric":"ALT","value":57,"unit":"U/L","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":11,"ownerId":"mianmian-vault-v1","recordedAt":"2023-02-22","metric":"CREA","value":152,"unit":"µmol/L","status":"脂血样本","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":12,"ownerId":"mianmian-vault-v1","recordedAt":"2023-02-22","metric":"BUN","value":13.3,"unit":"mmol/L","status":"高于报告范围","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":13,"ownerId":"mianmian-vault-v1","recordedAt":"2023-02-22","metric":"PHOS","value":1.07,"unit":"mmol/L","status":"接近下限","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":14,"ownerId":"mianmian-vault-v1","recordedAt":"2023-02-22","metric":"ALT","value":61,"unit":"U/L","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":15,"ownerId":"mianmian-vault-v1","recordedAt":"2025-07-05","metric":"WEIGHT","value":3.59,"unit":"kg","status":"心超报告","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":16,"ownerId":"mianmian-vault-v1","recordedAt":"2026-06-21","metric":"WEIGHT","value":3.58,"unit":"kg","status":"稳定","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":17,"ownerId":"mianmian-vault-v1","recordedAt":"2026-06-21","metric":"CREA","value":192.9,"unit":"µmol/L","status":"方法学差异","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":18,"ownerId":"mianmian-vault-v1","recordedAt":"2026-06-21","metric":"SDMA","value":12.47,"unit":"µg/dL","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":19,"ownerId":"mianmian-vault-v1","recordedAt":"2026-06-21","metric":"BUN","value":9.86,"unit":"mmol/L","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":20,"ownerId":"mianmian-vault-v1","recordedAt":"2026-06-21","metric":"PHOS","value":1.14,"unit":"mmol/L","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":21,"ownerId":"mianmian-vault-v1","recordedAt":"2026-06-21","metric":"ALT","value":99,"unit":"U/L","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":22,"ownerId":"mianmian-vault-v1","recordedAt":"2026-06-28","metric":"WEIGHT","value":3.58,"unit":"kg","status":"复查报告","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":23,"ownerId":"mianmian-vault-v1","recordedAt":"2026-07-04","metric":"WEIGHT","value":3.46,"unit":"kg","status":"记录值","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":24,"ownerId":"mianmian-vault-v1","recordedAt":"2026-07-04","metric":"CREA","value":151,"unit":"µmol/L","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":25,"ownerId":"mianmian-vault-v1","recordedAt":"2026-07-04","metric":"BUN","value":10.3,"unit":"mmol/L","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":26,"ownerId":"mianmian-vault-v1","recordedAt":"2026-07-04","metric":"PHOS","value":0.73,"unit":"mmol/L","status":"低于参考","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":27,"ownerId":"mianmian-vault-v1","recordedAt":"2026-07-04","metric":"ALT","value":16,"unit":"U/L","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":28,"ownerId":"mianmian-vault-v1","recordedAt":"2026-07-18","metric":"WEIGHT","value":3.63,"unit":"kg","status":"CBC报告","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":29,"ownerId":"mianmian-vault-v1","recordedAt":"2026-08-15","metric":"WEIGHT","value":3.64,"unit":"kg","status":"稳定","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":30,"ownerId":"mianmian-vault-v1","recordedAt":"2026-08-15","metric":"CREA","value":151,"unit":"µmol/L","status":"本次报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":31,"ownerId":"mianmian-vault-v1","recordedAt":"2026-08-15","metric":"SDMA","value":9,"unit":"µg/dL","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":32,"ownerId":"mianmian-vault-v1","recordedAt":"2026-08-15","metric":"BUN","value":10,"unit":"mmol/L","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":33,"ownerId":"mianmian-vault-v1","recordedAt":"2026-08-15","metric":"PHOS","value":0.8,"unit":"mmol/L","status":"低于参考","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":34,"ownerId":"mianmian-vault-v1","recordedAt":"2026-08-15","metric":"ALT","value":22,"unit":"U/L","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":35,"ownerId":"mianmian-vault-v1","recordedAt":"2026-08-15","metric":"WBC","value":8.02,"unit":"10^9/L","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":36,"ownerId":"mianmian-vault-v1","recordedAt":"2026-08-15","metric":"HCT","value":40.7,"unit":"%","status":"无贫血证据","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":37,"ownerId":"mianmian-vault-v1","recordedAt":"2026-08-15","metric":"HGB","value":138,"unit":"g/L","status":"无贫血证据","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":38,"ownerId":"mianmian-vault-v1","recordedAt":"2026-08-15","metric":"PLT","value":174,"unit":"10^9/L","status":"报告范围内","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"},{"id":39,"ownerId":"mianmian-vault-v1","recordedAt":"2026-08-15","metric":"MPV","value":19.3,"unit":"fL","status":"高于参考","source":"baseline:0815(2)","sourceUploadId":null,"createdAt":"2026-08-15 07:23:30"}],"records":[{"id":1,"ownerId":"mianmian-vault-v1","recordedAt":"2026-08-15","category":"综合复查","title":"CBC + IDEXX 生化 + 全腹超声","summary":"CREA 151、SDMA 9、UREA 10.0；PHOS 0.80 低。CBC 无贫血、白细胞减少或血小板减少。左肾 3.03 cm，右肾 3.83 cm。","sourceUploadId":"baseline","createdAt":"2026-08-15 07:23:30"},{"id":3,"ownerId":"mianmian-vault-v1","recordedAt":"2026-07-18","category":"肿瘤","title":"左前爪掌垫 MCT 冷冻","summary":"冷冻笔处理后进入恢复观察期；病灶位置已统一更正为左前爪掌垫。","sourceUploadId":"baseline","createdAt":"2026-08-15 07:23:30"},{"id":2,"ownerId":"mianmian-vault-v1","recordedAt":"2026-07-18","category":"CBC","title":"血常规复查","summary":"CBC 总体稳定；LYM% 轻度相对升高但绝对值正常，MPV 高而 PLT 正常。报告性别误记为雄性。","sourceUploadId":"baseline","createdAt":"2026-08-15 07:23:30"},{"id":4,"ownerId":"mianmian-vault-v1","recordedAt":"2026-07-04","category":"综合检查","title":"生化与全腹超声","summary":"CREA 151、PHOS 0.73；脾脏多发小结节，胰腺慢性改变，建议动态随访。","sourceUploadId":"baseline","createdAt":"2026-08-15 07:23:30"},{"id":5,"ownerId":"mianmian-vault-v1","recordedAt":"2026-06-21","category":"年度体检","title":"多系统综合检查","summary":"SDMA 与 CysC 在报告范围内；CREA 192.9 存在方法学差异，需结合稳定状态复测、尿检和血压。","sourceUploadId":"baseline","createdAt":"2026-08-15 07:23:30"}],"uploads":[],"labReports":[{"id":"lab-2020-02-16","recordedAt":"2020-02-16","title":"血液生化检查","summary":"生化：CREA 175 µmol/L、BUN 6.53 mmol/L、PHOS 1.27 mmol/L；ALT 69 U/L、GLU 8.08 mmol/L。原报告采用 SI 单位。","panels":["血液生化"],"results":[{"label":"体重","value":"3.60 kg"},{"label":"CREA","value":"175 µmol/L"},{"label":"BUN","value":"6.53 mmol/L"},{"label":"PHOS","value":"1.27 mmol/L"},{"label":"Ca","value":"2.30 mmol/L"},{"label":"ALT","value":"69 U/L"},{"label":"ALP","value":"40 U/L"},{"label":"TBIL","value":"3.76 µmol/L"},{"label":"ALB","value":"35.7 g/L"},{"label":"TP","value":"77.8 g/L"},{"label":"GLOB","value":"42.1 g/L"},{"label":"GLU","value":"8.08 mmol/L"},{"label":"AMYL","value":"2314 U/L"},{"label":"CHOL","value":"3.34 mmol/L"},{"label":"CK","value":"101 U/L"},{"label":"A/G","value":"0.80"}],"reportPages":[{"label":"生化报告","url":"/reports/2020-02-16-chemistry-1.jpg","sha256":"1df0f17a3867e18830d3605cf11fb909a9805ec15bca781fdf43304ce12b784d"}]},{"id":"lab-2021-04-01","recordedAt":"2021-04-01","title":"血液生化检查","summary":"生化：CREA 176.8 µmol/L、BUN 10.35 mmol/L、PHOS 1.16 mmol/L、GLU 10.99 mmol/L。原报告常规单位已换算为 SI。","panels":["血液生化"],"results":[{"label":"体重","value":"3.59 kg"},{"label":"CREA","value":"176.8 µmol/L"},{"label":"BUN","value":"10.35 mmol/L"},{"label":"PHOS","value":"1.16 mmol/L"},{"label":"Ca","value":"2.64 mmol/L"},{"label":"ALT","value":"57 U/L"},{"label":"ALP","value":"46 U/L"},{"label":"GGT","value":"0 U/L"},{"label":"TBIL","value":"3.42 µmol/L"},{"label":"ALB","value":"24 g/L"},{"label":"TP","value":"79 g/L"},{"label":"GLOB","value":"45 g/L"},{"label":"GLU","value":"10.99 mmol/L"},{"label":"AMYL","value":"654 U/L"},{"label":"LIPA","value":"779 U/L"},{"label":"CHOL","value":"189 mg/dL"}],"note":"换算依据保留在长期库：CREA 2.00 mg/dL、BUN 29 mg/dL、GLU 198 mg/dL、PHOS 3.60 mg/dL、Ca 10.60 mg/dL、TBIL 0.20 mg/dL。","reportPages":[{"label":"生化报告","url":"/reports/2021-04-01-chemistry-1.jpg","sha256":"420aff9bbe65ba24dac444de81718a1260c50a226bf420e3d6ae0537dac6f94f"}]},{"id":"lab-2023-02-22","recordedAt":"2023-02-22","title":"血液生化检查","summary":"生化：CREA 152 µmol/L、BUN 13.3 mmol/L、PHOS 1.07 mmol/L；样本脂血，BUN 与 CHOL 高于该报告参考范围。","panels":["血液生化"],"results":[{"label":"CREA","value":"152 µmol/L"},{"label":"BUN","value":"13.3 mmol/L","flag":"high"},{"label":"PHOS","value":"1.07 mmol/L"},{"label":"Ca","value":"2.36 mmol/L"},{"label":"ALT","value":"61 U/L"},{"label":"ALP","value":"27 U/L"},{"label":"TBIL","value":"8.46 µmol/L"},{"label":"ALB","value":"33.1 g/L"},{"label":"TP","value":"71.8 g/L"},{"label":"GLOB","value":"38.7 g/L"},{"label":"GLU","value":"7.78 mmol/L"},{"label":"AMYL","value":"1392 U/L"},{"label":"CHOL","value":"6.09 mmol/L","flag":"high"},{"label":"CK","value":"113 U/L"},{"label":"A/G","value":"0.90"}],"note":"原报告注明样本脂血；异常标记仅按该次报告的参考范围呈现。","reportPages":[{"label":"生化报告","url":"/reports/2023-02-22-chemistry-1.jpg","sha256":"a6aca3db451e5772923c9c3663e27796920be0dce1ba3f626fb17a3558976ee2"}]},{"id":"lab-2026-06-21","recordedAt":"2026-06-21","title":"综合实验室检查","summary":"同日完成 CBC、血气、电解质、生化、肾脏荧光指标、SAA、心肌/凝血筛查及抗体滴度，共关联 7 份原始报告。","panels":["CBC","生化","肾脏荧光","SAA","静脉血气","心肌/凝血筛查","抗体滴度"],"results":[{"label":"体重","value":"3.58 kg"},{"label":"CREA（生化）","value":"192.9 µmol/L"},{"label":"CREA（荧光）","value":"0.97 mg/dL","flag":"note"},{"label":"SDMA","value":"12.47 µg/dL"},{"label":"CysC","value":"0.25 mg/L"},{"label":"BUN","value":"9.86 mmol/L"},{"label":"PHOS","value":"1.14 mmol/L"},{"label":"Ca","value":"2.49 mmol/L"},{"label":"Na（生化）","value":"140 mmol/L"},{"label":"K（生化）","value":"4.15 mmol/L"},{"label":"ALT","value":"99 U/L"},{"label":"AST","value":"42 U/L"},{"label":"ALP","value":"40 U/L"},{"label":"GGT","value":"2 U/L"},{"label":"TBIL","value":"1.3 µmol/L"},{"label":"ALB","value":"34.8 g/L"},{"label":"TP","value":"79.1 g/L"},{"label":"GLOB","value":"44.3 g/L"},{"label":"GLU","value":"9.85 mmol/L"},{"label":"HCT","value":"36.0 %"},{"label":"HGB","value":"129 g/L"},{"label":"WBC","value":"8.07 ×10^9/L"},{"label":"NEU#","value":"3.479 ×10^9/L"},{"label":"LYM#","value":"3.436 ×10^9/L"},{"label":"EOS#","value":"0.873 ×10^9/L"},{"label":"PLT","value":"193 ×10^9/L"},{"label":"MPV","value":"19.8 fL","flag":"high"},{"label":"SAA","value":"3.7 mg/L"},{"label":"BNP","value":"<50 pmol/L"},{"label":"feline-cTnI","value":"<0.10 ng/mL"},{"label":"D-dimer","value":"0.26 mg/L"},{"label":"FHW","value":"<5（阴性）"},{"label":"FDP","value":"<1（阴性）"},{"label":"静脉血气 pH","value":"7.35"},{"label":"HCO3","value":"18.1 mmol/L","flag":"low"},{"label":"PCO2","value":"37 mmHg"},{"label":"阴离子间隙","value":"26 mmol/L"},{"label":"tCO2","value":"19.1 mmol/L","flag":"low"},{"label":"Na（血气）","value":"162 mmol/L","flag":"note"},{"label":"K（血气）","value":"3.5 mmol/L","flag":"note"},{"label":"Cl（血气）","value":"121 mmol/L","flag":"note"},{"label":"猫瘟抗体","value":"S4"},{"label":"杯状病毒抗体","value":"S4"},{"label":"疱疹病毒抗体","value":"S5"}],"note":"同日不同检测平台的 CREA 与电解质结果不可直接合并；这里按原报告分别保留。抗体滴度仅记录原始等级，不据此推断保护力。","reportPages":[{"label":"肾功能荧光","url":"/reports/2026-06-21-renal-fluorescence-1.jpg","sha256":"f9725e7a9c84bb98f98a219a07ac60b9b7721244594c8c037fd855083a2ae390"},{"label":"心肌/凝血筛查","url":"/reports/2026-06-21-cardiac-coagulation-1.jpg","sha256":"aeb0068fc188bd0c617a5973843ccf19de04a7a2654f5454f471e6c634709218"},{"label":"血常规","url":"/reports/2026-06-21-cbc-1.jpg","sha256":"703942bc66d8275d697f554d6932c7830154cb4dffae4485955e125bdd1b0393"},{"label":"SAA","url":"/reports/2026-06-21-saa-1.jpg","sha256":"a4db68968ab0e71fa22168b1ab4809abfdddfff22acfa3079b72352970604ca1"},{"label":"血液生化","url":"/reports/2026-06-21-chemistry-1.jpg","sha256":"32cc4ed614665c645fd826285b1d34decbbf5b3665fc190de067ab9e4d14d880"},{"label":"静脉血气/电解质","url":"/reports/2026-06-21-blood-gas-1.jpg","sha256":"11630ea80a49bbcc0d7626fcf0a55248ccdc48381f6d214a178cf4d8497ea67f"},{"label":"抗体滴度","url":"/reports/2026-06-21-antibody-titers-1.jpg","sha256":"acce2a1f38fc022e2201bef7b62c15efb1ea0b0e1865215e2a1adf6dc42c26ea"}]},{"id":"lab-2026-06-28","recordedAt":"2026-06-28","title":"血常规与 SAA","summary":"CBC：HCT 35.0%、HGB 124 g/L、WBC 9.34×10^9/L、PLT 264×10^9/L；LYM% 45.99% 轻度高、RDW-CV 14.7% 轻度低、MPV 21.1 fL 高。SAA 4.8 mg/L。","panels":["CBC","SAA"],"results":[{"label":"体重","value":"3.58 kg"},{"label":"WBC","value":"9.34 ×10^9/L"},{"label":"LYM%","value":"45.99 %","flag":"high"},{"label":"LYM#","value":"4.295 ×10^9/L"},{"label":"NEU#","value":"4.048 ×10^9/L"},{"label":"EOS#","value":"0.731 ×10^9/L"},{"label":"HGB","value":"124 g/L"},{"label":"HCT","value":"35.0 %"},{"label":"RDW-CV","value":"14.7 %","flag":"low"},{"label":"PLT","value":"264 ×10^9/L"},{"label":"MPV","value":"21.1 fL","flag":"high"},{"label":"SAA","value":"4.8 mg/L"}],"note":"异常标记按该次原报告参考范围保留；SAA 位于报告显示的 0–8 mg/L 区间内。","reportPages":[{"label":"血常规","url":"/reports/2026-06-28-cbc-1.jpg","sha256":"dec87903839e984483f290082764cfce2f39a45d066ab3a635aff59997617d5c"},{"label":"SAA","url":"/reports/2026-06-28-saa-1.jpg","sha256":"775413f61d5a752a8d4769944c0308016803cb129b2ede8d8c4a431a8af75ef9"}]},{"id":"lab-2026-07-04","recordedAt":"2026-07-04","title":"IDEXX Catalyst One 生化检查","summary":"CREA 151 µmol/L、UREA 10.3 mmol/L、PHOS 0.73 mmol/L；PHOS 低于该报告参考范围。已关联当天生化报告原图。","panels":["IDEXX Catalyst One 生化"],"results":[{"label":"体重","value":"3.46 kg"},{"label":"GLU","value":"7.10 mmol/L"},{"label":"CREA","value":"151 µmol/L"},{"label":"UREA","value":"10.3 mmol/L"},{"label":"BUN/CREA","value":"17"},{"label":"PHOS","value":"0.73 mmol/L","flag":"low"},{"label":"Ca","value":"2.41 mmol/L"},{"label":"TP","value":"81 g/L"},{"label":"ALB","value":"34 g/L"},{"label":"GLOB","value":"47 g/L"},{"label":"A/G","value":"0.7"},{"label":"ALT","value":"16 U/L"},{"label":"ALKP","value":"30 U/L"},{"label":"GGT","value":"0 U/L"},{"label":"TBIL","value":"<2 µmol/L"},{"label":"CHOL","value":"3.65 mmol/L"},{"label":"AMYL","value":"867 U/L"},{"label":"LIPA","value":"675 U/L"}],"reportPages":[{"label":"生化报告","url":"/reports/2026-07-04-chemistry-1.jpg","sha256":"fe8bd85da0a1d801bbb69e40272aac4cb085e4036c9a93cbf2a6f0d4fbff717d"}]},{"id":"lab-2026-07-18","recordedAt":"2026-07-18","title":"血常规五分类","summary":"HCT 37.7%、HGB 127 g/L、WBC 10.14×10^9/L、PLT 197×10^9/L；LYM% 47.59% 轻度高但绝对值在报告区间内，MPV 19.0 fL 高。","panels":["CBC 五分类"],"results":[{"label":"WBC","value":"10.14 ×10^9/L"},{"label":"LYM%","value":"47.59 %","flag":"high"},{"label":"MON%","value":"4.04 %"},{"label":"NEU%","value":"43.65 %"},{"label":"EOS%","value":"4.50 %"},{"label":"BASO%","value":"0.22 %"},{"label":"LYM#","value":"4.825 ×10^9/L"},{"label":"MON#","value":"0.409 ×10^9/L"},{"label":"NEU#","value":"4.428 ×10^9/L"},{"label":"EOS#","value":"0.456 ×10^9/L"},{"label":"BASO#","value":"0.022 ×10^9/L"},{"label":"NRBC%","value":"0.88 %"},{"label":"NRBC#","value":"0.08 ×10^9/L"},{"label":"RBC","value":"7.91 ×10^12/L"},{"label":"HGB","value":"127 g/L"},{"label":"HCT","value":"37.7 %"},{"label":"MCV","value":"47.7 fL"},{"label":"MCH","value":"16.0 pg"},{"label":"MCHC","value":"336 g/L"},{"label":"RDW-CV","value":"17.1 %"},{"label":"PLT","value":"197 ×10^9/L"},{"label":"MPV","value":"19.0 fL","flag":"high"},{"label":"ALY%","value":"1.08 %"},{"label":"ALY#","value":"0.109 ×10^9/L"},{"label":"LIC%","value":"0.38 %"},{"label":"LIC#","value":"0.038 ×10^9/L"}],"note":"报告抬头登记为雄性，与长期档案中的雌性记录不一致；这里保留该资料冲突，待后续核对。","reportPages":[{"label":"CBC 数值","url":"/reports/2026-07-18-cbc-1.jpg","sha256":"b2a6eb6b8f64dee884549cd26f03e4a065b3014f6031bdca092203dc9eceb8b0"},{"label":"CBC 图谱与提示","url":"/reports/2026-07-18-cbc-2.jpg","sha256":"9fcc3166921f58c78579e63b5fceaa872b7a6bcbd7da35a5b9d042dae5c68906"}]},{"id":"lab-2026-08-15","recordedAt":"2026-08-15","title":"CBC + IDEXX 生化 / SDMA","summary":"CREA 151 µmol/L、SDMA 9 µg/dL、UREA 10.0 mmol/L；PHOS 0.80 mmol/L 低。CBC 中 LYM% 轻度高但绝对值在报告区间内，MPV 19.3 fL 高、PLT 正常。","panels":["CBC 五分类","IDEXX Catalyst One 生化","SDMA"],"results":[{"label":"体重（长期库）","value":"3.64 kg","flag":"note"},{"label":"体重（报告抬头）","value":"3.46 kg","flag":"note"},{"label":"GLU","value":"6.79 mmol/L"},{"label":"SDMA","value":"9 µg/dL"},{"label":"CREA","value":"151 µmol/L"},{"label":"UREA","value":"10.0 mmol/L"},{"label":"BUN/CREA","value":"16"},{"label":"PHOS","value":"0.80 mmol/L","flag":"low"},{"label":"Ca","value":"2.52 mmol/L"},{"label":"TP","value":"78 g/L"},{"label":"ALB","value":"36 g/L"},{"label":"GLOB","value":"42 g/L"},{"label":"A/G","value":"0.9"},{"label":"ALT","value":"22 U/L"},{"label":"ALKP","value":"30 U/L"},{"label":"GGT","value":"0 U/L"},{"label":"TBIL","value":"<2 µmol/L"},{"label":"CHOL","value":"3.60 mmol/L"},{"label":"AMYL","value":"858 U/L"},{"label":"LIPA","value":"686 U/L"},{"label":"WBC","value":"8.02 ×10^9/L"},{"label":"LYM%","value":"48.18 %","flag":"high"},{"label":"MON%","value":"3.50 %"},{"label":"NEU%","value":"42.72 %"},{"label":"EOS%","value":"5.44 %"},{"label":"BASO%","value":"0.16 %"},{"label":"LYM#","value":"3.864 ×10^9/L"},{"label":"MON#","value":"0.280 ×10^9/L"},{"label":"NEU#","value":"3.428 ×10^9/L"},{"label":"EOS#","value":"0.436 ×10^9/L"},{"label":"BASO#","value":"0.012 ×10^9/L"},{"label":"NRBC%","value":"0.83 %"},{"label":"NRBC#","value":"0.06 ×10^9/L"},{"label":"RBC","value":"8.50 ×10^12/L"},{"label":"HGB","value":"138 g/L"},{"label":"HCT","value":"40.7 %"},{"label":"MCV","value":"47.9 fL"},{"label":"MCH","value":"16.2 pg"},{"label":"MCHC","value":"339 g/L"},{"label":"RDW-CV","value":"17.0 %"},{"label":"PLT","value":"174 ×10^9/L"},{"label":"MPV","value":"19.3 fL","flag":"high"},{"label":"ALY%","value":"1.38 %"},{"label":"ALY#","value":"0.110 ×10^9/L"},{"label":"LIC%","value":"0.26 %"},{"label":"LIC#","value":"0.020 ×10^9/L"}],"note":"生化报告抬头体重为 3.46 kg，而 0815 长期数据库记录为 3.64 kg；两项均保留，待核对原始就诊记录。异常标记按各自报告参考范围呈现。","reportPages":[{"label":"生化 / SDMA","url":"/reports/2026-08-15-chemistry-1.jpg","sha256":"ed361717d96d92b03b7b31c2ba6b60974979ef219f1eb26d81129f283c715454"},{"label":"CBC 数值","url":"/reports/2026-08-15-cbc-1.jpg","sha256":"6ebc46a86dc6d2849e1c53c6bfad8dac9baddd79cf97659fc9c38da7a1dc3ea0"},{"label":"CBC 图谱与提示","url":"/reports/2026-08-15-cbc-2.jpg","sha256":"2b0a64840a7f8469c73e7e7da89b9f43faead3c67ebd98e10a15471c8eb0e988"}]}],"moduleEntries":[{"id":"user-eb3a33a6-a719-4b70-ab94-a65344a8aee8","module":"treatment","recordedAt":"2026-08-15","title":"疑似左后爪掌垫MCT处理+泼尼松龙持续","summary":"左后爪中央掌垫处边缘，疑似有一个小包，上周有破溃结痂。这周未进行细胞学确认，直接处理掉了。","data":{"treatmentClass":"局部治疗+药物治疗","indication":"MCT-005（疑似）","dose":"泼尼松龙按照8.8剂量继续给药","frequency":"泼尼松龙每晚一次","route":"胶囊喂食","cycle":"冷冻当日结束，泼尼松龙还有三周","monitoring":"戴脖圈，禁止爪部舔舐。","notes":"该MCT因为过小，细胞学没有采到有用细胞，所以未确诊。只是出于疑似的角度，反正也是长出的异物，就进行了冷冻处理。"},"imageUrls":[],"sourceKey":"user:2bd4e0e7-2924-4362-8d69-52550bacf6ab","createdAt":"2026-08-15T12:48:02.616Z","updatedAt":"2026-08-15T12:52:58.387Z"},{"id":"user-722fcd5a-21c3-4fe4-be22-dabc72b9763e","module":"treatment","recordedAt":"2026-08-08","title":"泼尼松龙","summary":"泼尼松龙减量给药","data":{"treatmentClass":"激素药","indication":"肥大细胞瘤","dose":"0.5mg/kg","frequency":"每晚一次","route":"胶囊喂食","cycle":"持续进行中，预计一个月。","adverseEffects":"无"},"imageUrls":[],"sourceKey":"user:950d0fd2-3faa-485e-b0ee-b19a9a9f9ca8","createdAt":"2026-08-15T12:40:43.362Z","updatedAt":"2026-08-15T12:40:43.362Z"},{"id":17,"module":"imaging","recordedAt":"2026-08-15","title":"全腹超声","summary":"脾脏小结节及血管钙化；左肾 3.03 cm，右肾 3.83 cm；胰腺厚约 0.69 cm。","data":{"modality":"全腹超声","leftKidneyCm":3.03,"rightKidneyCm":3.83,"pancreasCm":0.69,"largestSplenicNodule":"0.22 × 0.14 cm"},"imageUrls":["/reports/2026-08-15-abdominal-us-1.jpg"],"sourceKey":"baseline:imaging:2026-08-15-abdominal","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04","imageFiles":[{"url":"/reports/2026-08-15-abdominal-us-1.jpg","name":"2026-08-15-abdominal-us-1.jpg","sha256":"e555ad4cf89fd8376bc019d53e673dfc8523e0830a579ed410599e5749059b82"}]},{"id":20,"module":"treatment","recordedAt":"2026-07-18","title":"左前爪掌垫 MCT 冷冻处理","summary":"局部冷冻处理后经过一个月恢复，原位目前已看不出肿瘤。","data":{"treatmentClass":"局部治疗","indication":"MCT-004","route":"局部","response":"已恢复，原位肉眼看不出肿瘤。","status":"已完成"},"imageUrls":[],"imageFiles":[],"sourceKey":"baseline:treatment:2026-07-18-cryo","createdAt":"2026-08-15 08:55:05","updatedAt":"2026-08-17T13:26:03.497Z"},{"id":16,"module":"imaging","recordedAt":"2026-07-04","title":"全腹超声","summary":"脾脏多发小结节及血管钙化、胰腺慢性改变；左肾 3.18 cm，右肾 3.85 cm。","data":{"modality":"全腹超声","leftKidneyCm":3.18,"rightKidneyCm":3.85},"imageUrls":["/reports/2026-07-04-abdominal-us-1.jpg"],"sourceKey":"baseline:imaging:2026-07-04-abdominal","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04","imageFiles":[{"url":"/reports/2026-07-04-abdominal-us-1.jpg","name":"2026-07-04-abdominal-us-1.jpg","sha256":"bc58bae26d3964163aeeca6139b050947e864829737b6946ed7fdfbfaf9eb4ee"}]},{"id":15,"module":"imaging","recordedAt":"2026-06-28","title":"胰腺与小肠复查超声","summary":"轻度胰腺与小肠改变；胰管约 0.15 cm，胰腺体部约 0.97 cm。","data":{"modality":"局部复查超声","pancreaticDuctCm":0.15,"pancreasBodyCm":0.97},"imageUrls":["/reports/2026-06-28-pancreas-us-1.jpg"],"sourceKey":"baseline:imaging:2026-06-28-pancreas","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04","imageFiles":[{"url":"/reports/2026-06-28-pancreas-us-1.jpg","name":"2026-06-28-pancreas-us-1.jpg","sha256":"553504c9a32bfe79b3652897513c6540ed39937080d5a58821333c2a515aa05a"}]},{"id":14,"module":"imaging","recordedAt":"2026-06-28","title":"全腹超声","summary":"脾脏结节及血管钙化、胰腺慢性改变、胃内异物样内容；左肾 3.13 cm，右肾 3.94 cm。","data":{"modality":"全腹超声","leftKidneyCm":3.13,"rightKidneyCm":3.94},"imageUrls":["/reports/2026-06-28-abdominal-us-1.jpg","/reports/2026-06-28-abdominal-us-2.jpg"],"sourceKey":"baseline:imaging:2026-06-28-abdominal","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04","imageFiles":[{"url":"/reports/2026-06-28-abdominal-us-1.jpg","name":"2026-06-28-abdominal-us-1.jpg","sha256":"cb5d063f118fb66b89137fad76961f8b9a72041be156c1ff11486efd9fa8712a"},{"url":"/reports/2026-06-28-abdominal-us-2.jpg","name":"2026-06-28-abdominal-us-2.jpg","sha256":"53c30735f7fb9e3bd247593ab74569e813969a3f85c397cf9afd5e4b31a18569"}]},{"id":19,"module":"treatment","recordedAt":"2026-06-21","title":"泼尼松龙 + 法莫替丁","summary":"泼尼松龙控制肿瘤发展，法莫替丁抑制胃酸","data":{"treatmentClass":"药物治疗","indication":"MCT-004","endDate":"2026-08-08","dose":"泼尼松龙一1mg/kg，法莫替丁0.5mg/kg","frequency":"泼尼松龙每晚一次；法莫替丁由早晚各一次，逐渐减量至每天一次。","route":"胶囊喂食","response":"泼尼松龙效果不是很明显，肿瘤并没有减小，倒是也没有快速增大。但是这个肿瘤本来就稳定。不好说有多大的作用。","status":"一切正常。"},"imageUrls":[],"sourceKey":"baseline:treatment:2026-06-21-pred-famotidine","createdAt":"2026-08-15 08:55:05","updatedAt":"2026-08-15T12:44:39.608Z"},{"id":13,"module":"imaging","recordedAt":"2026-06-21","title":"心脏超声","summary":"LA/AO 1.34，EF 97.57%，FS 73.56%；见主观返流血流，未描述明确形态异常。","data":{"modality":"心脏超声","laAo":1.34,"ef":"97.57%","fs":"73.56%"},"imageUrls":["/reports/2026-06-21-cardiac-us-1.jpg"],"sourceKey":"baseline:imaging:2026-06-21-cardiac","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04","imageFiles":[{"url":"/reports/2026-06-21-cardiac-us-1.jpg","name":"2026-06-21-cardiac-us-1.jpg","sha256":"9a4a61c6dce2b854caa9fd0def2952573ab8f5709f1961d688db1ceda1610cf4"}]},{"id":12,"module":"imaging","recordedAt":"2026-06-21","title":"腹部超声 + 胸腹部 DR","summary":"轻度胃肠动力改变；DR 见 T10–11 骨赘/脊椎病改变；左肾 3.24 cm，右肾 3.63 cm。","data":{"modality":"腹部超声 + DR","leftKidneyCm":3.24,"rightKidneyCm":3.63},"imageUrls":["/reports/2026-06-21-dr-1.jpg","/reports/2026-06-21-abdominal-us-1.jpg","/reports/2026-06-21-abdominal-us-2.jpg"],"sourceKey":"baseline:imaging:2026-06-21-abdominal-dr","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04","imageFiles":[{"url":"/reports/2026-06-21-dr-1.jpg","name":"2026-06-21-dr-1.jpg","sha256":"da32c44f86c1e1ed44f18c9e4e4df9a4e622e401295d51b58537b6c7389c82db"},{"url":"/reports/2026-06-21-abdominal-us-1.jpg","name":"2026-06-21-abdominal-us-1.jpg","sha256":"e7653650b3d5e32b64c2f69022b489c37f1cbb32ac9e4200f1bf4639f51c83a6"},{"url":"/reports/2026-06-21-abdominal-us-2.jpg","name":"2026-06-21-abdominal-us-2.jpg","sha256":"69ed9be9e6860131f0151b7a6db128869ca69eeed3a8d4178857a660b30f1fad"}]},{"id":18,"module":"treatment","recordedAt":"2025-07-19","title":"泼尼松龙 + 法莫替丁","summary":"用于左前爪掌垫 MCT，原始资料记录至 2025 年 8 月 22 日；约半月未见明显缩小。","data":{"treatmentClass":"药物治疗","indication":"MCT-004","endDate":"2025-08-22","response":"约半月未见明显缩小","status":"已结束","dose":"原始健康库未录入剂量"},"imageUrls":[],"sourceKey":"baseline:treatment:2025-07-19-pred-famotidine","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04"},{"id":4,"module":"mct","recordedAt":"2025-07-19","title":"MCT-004 · 左前爪掌垫病灶","summary":"细针穿刺确认后曾接受泼尼松龙与法莫替丁，2026 年 7 月 18 日完成冷冻处理。","data":{"lesionId":"MCT-004","location":"左前爪掌垫","side":"左侧","diagnosis":"细针穿刺（FNA）","treatment":"药物治疗；2026-07-18 冷冻处理","response":"2025 年短期药物治疗约半月未见明显缩小","status":"冷冻后历时3周已恢复正常，肉眼看不出肿瘤"},"imageUrls":[],"imageFiles":[],"sourceKey":"baseline:mct-004","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-17T13:32:06.702Z"},{"id":11,"module":"imaging","recordedAt":"2025-07-05","title":"心脏超声","summary":"LA/AO 1.44，EF 99.6%，FS 86%；左心房内见主观返流血流，未描述主要结构异常。","data":{"modality":"心脏超声","laAo":1.44,"ef":"99.6%","fs":"86%"},"imageUrls":["/reports/2025-07-05-cardiac-us-1.jpg"],"sourceKey":"baseline:imaging:2025-07-05-cardiac","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04","imageFiles":[{"url":"/reports/2025-07-05-cardiac-us-1.jpg","name":"2025-07-05-cardiac-us-1.jpg","sha256":"d07199c2553e9d1d091c4b10c45fc8c83283aad8aefee52f81df28ea7253c46f"}]},{"id":10,"module":"imaging","recordedAt":"2025-07-05","title":"腹部超声","summary":"报告描述十二指肠炎性改变及左肾偏小；左肾 2.95 cm，右肾 3.52 cm。","data":{"modality":"腹部超声","leftKidneyCm":2.95,"rightKidneyCm":3.52},"imageUrls":["/reports/2025-07-05-abdominal-us-1.jpg"],"sourceKey":"baseline:imaging:2025-07-05-abdominal","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04","imageFiles":[{"url":"/reports/2025-07-05-abdominal-us-1.jpg","name":"2025-07-05-abdominal-us-1.jpg","sha256":"e0a724db1be38d8e6f4e9c2f148320ef78898c426afc53096204b1b95454179b"}]},{"id":3,"module":"mct","recordedAt":"2024-07-01","title":"MCT-003 · 左前爪掌垫病灶","summary":"2024 年 7 月细针穿刺确认，7 月 14 日切除；病理记录提示切缘可见肥大细胞。","data":{"lesionId":"MCT-003","location":"左前爪掌垫","side":"左侧","diagnosis":"细针穿刺 + 组织病理","pathology":"切缘可见肥大细胞","treatment":"2024-07-14 手术切除","status":"切缘阳性记录，持续观察"},"imageUrls":[],"sourceKey":"baseline:mct-003","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04"},{"id":9,"module":"imaging","recordedAt":"2023-02-22","title":"心脏超声","summary":"LA/AO 1.30，EF 87%，FS 53%；报告未描述明显异常。","data":{"modality":"心脏超声","laAo":1.3,"ef":"87%","fs":"53%"},"imageUrls":["/reports/2023-02-22-cardiac-us-1.jpg"],"sourceKey":"baseline:imaging:2023-02-22-cardiac","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04","imageFiles":[{"url":"/reports/2023-02-22-cardiac-us-1.jpg","name":"2023-02-22-cardiac-us-1.jpg","sha256":"917da3e918bdd6fb21122842563cb2f2bdfe30c6dd47a353762da4a79b451f35"}]},{"id":8,"module":"imaging","recordedAt":"2023-02-22","title":"全腹超声","summary":"左肾体积偏小并伴回声改变；左肾 3.07 cm，右肾 3.73 cm。","data":{"modality":"全腹超声","leftKidneyCm":3.07,"rightKidneyCm":3.73},"imageUrls":["/reports/2023-02-22-abdominal-us-1.jpg","/reports/2023-02-22-abdominal-us-2.jpg"],"sourceKey":"baseline:imaging:2023-02-22-abdominal","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04","imageFiles":[{"url":"/reports/2023-02-22-abdominal-us-1.jpg","name":"2023-02-22-abdominal-us-1.jpg","sha256":"9fe238d62f4b42a7330a50e7fc499e55a39f4d346de8f4fe67f54aef0b69b10a"},{"url":"/reports/2023-02-22-abdominal-us-2.jpg","name":"2023-02-22-abdominal-us-2.jpg","sha256":"b947db875e3e8aad422b0a0852f66e13c2eccf79903a2f2f2b0dd810c391ba8d"}]},{"id":2,"module":"mct","recordedAt":"2021-08-01","title":"MCT-002 · 耳尖病灶","summary":"2024 年 7 月 14 日切除并完成病理检查，报告为致密型低级肥大细胞瘤。","data":{"lesionId":"MCT-002","location":"耳尖","diagnosis":"组织病理","pathology":"致密型低级肥大细胞瘤","treatment":"2024-07-14 手术切除","status":"术后随访"},"imageUrls":[],"sourceKey":"baseline:mct-002","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04"},{"id":1,"module":"mct","recordedAt":"2021-08-01","title":"MCT-001 · 前胸病灶","summary":"2021 年 8 月细针穿刺提示肥大细胞瘤，2023 年 3 月完成手术处理。","data":{"lesionId":"MCT-001","location":"前胸","diagnosis":"细针穿刺（FNA）","pathology":"原始健康库未见病理分级记录","treatment":"2023-03 手术","status":"历史病灶，持续随访"},"imageUrls":[],"sourceKey":"baseline:mct-001","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04"},{"id":7,"module":"imaging","recordedAt":"2021-07-23","title":"心脏超声","summary":"LA/AO 1.30，EF 95%，FS 67%；报告未描述明显异常。","data":{"modality":"心脏超声","laAo":1.3,"ef":"95%","fs":"67%"},"imageUrls":["/reports/2021-07-23-cardiac-us-1.jpg","/reports/2021-07-23-cardiac-us-2.jpg"],"sourceKey":"baseline:imaging:2021-07-23-cardiac","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04","imageFiles":[{"url":"/reports/2021-07-23-cardiac-us-1.jpg","name":"2021-07-23-cardiac-us-1.jpg","sha256":"1124705edb312cda9f060d2c1ec42eb27268c10749554af4cdb208c015fab897"},{"url":"/reports/2021-07-23-cardiac-us-2.jpg","name":"2021-07-23-cardiac-us-2.jpg","sha256":"784cc709fea101c1bfb498ab15074f4d9ff5c408aa0b3ba1eab03aef83f2c75b"}]},{"id":6,"module":"imaging","recordedAt":"2021-04-01","title":"腹部超声复查","summary":"报告未见明显异常；肝脏与十二指肠较 2020 年检查描述正常。","data":{"modality":"腹部超声"},"imageUrls":["/reports/2021-04-01-abdominal-us-1.jpg"],"sourceKey":"baseline:imaging:2021-04-01-abdominal","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04","imageFiles":[{"url":"/reports/2021-04-01-abdominal-us-1.jpg","name":"2021-04-01-abdominal-us-1.jpg","sha256":"6f6b9572a4039bd8ecacb40e2e29e79ef74ea9c63d6bfa082807a39d1931b635"}]},{"id":5,"module":"imaging","recordedAt":"2020-12-15","title":"腹部超声","summary":"十二指肠横切面附近见局灶性肝实质回声增强，十二指肠蠕动偏慢；左肾 3.00 cm，右肾 3.80 cm。","data":{"modality":"腹部超声","leftKidneyCm":3,"rightKidneyCm":3.8},"imageUrls":["/reports/2020-12-15-abdominal-us-1.jpg"],"sourceKey":"baseline:imaging:2020-12-15-abdominal","createdAt":"2026-08-15 08:55:04","updatedAt":"2026-08-15 08:55:04","imageFiles":[{"url":"/reports/2020-12-15-abdominal-us-1.jpg","name":"2020-12-15-abdominal-us-1.jpg","sha256":"38f621205748ff995a1e8d9ba0302a1a93be0909930d018380b297c340114a87"}]}],"source":"面面_长期健康管理数据库0815版(2).xlsx","pet":{"name":"面面","age":"8岁","sex":"雌性","status":"长期随访中"},"renalNotice":{"title":"肾脏评估仍待补全","detail":"需补充 USG、尿沉渣、UPC 与收缩压；目前不能仅凭 CREA 完成 CKD 确诊或分期。","pendingCount":4},"reminders":[{"badgeTop":"待安排","badgeMain":"尿检","title":"完整尿液分析","detail":"USG · 尿沉渣 · UPC","priority":"重要","tone":"amber"},{"badgeTop":"待安排","badgeMain":"血压","title":"收缩压 SBP","detail":"用于肾脏风险亚分级","priority":"重要","tone":"blue"},{"badgeTop":"09月","badgeMain":"14","title":"月度家庭记录","detail":"体重 · BCS/MCS · MCT 自检","priority":"常规","tone":"mint"}],"mctFollowUp":{"title":"肥大细胞瘤随访","detail":"左前爪掌垫冷冻后观察中；双前肢腕垫两处疑似病灶待确认。"},"nutritionSummary":{"averageWaterMlPerDay":200,"label":"原始资料中的月均总摄水","note":"营养明细表尚无可核对的逐日记录，可从现在开始手动补录。"},"completeness":[{"label":"血常规与生化","state":"done","stateLabel":"已录入"},{"label":"腹部与心脏影像","state":"done","stateLabel":"已录入"},{"label":"MCT 病灶与病理","state":"done","stateLabel":"已录入"},{"label":"USG · 尿沉渣 · UPC","state":"pending","stateLabel":"待补"},{"label":"收缩压 SBP","state":"pending","stateLabel":"待补"}],"timeline":[{"date":"2026-08-15","type":"综合复查","title":"CBC + IDEXX 生化 + 全腹超声","detail":"CREA 151 · SDMA 9 · PHOS 0.80；双肾轮廓规则，皮髓分界清晰。"},{"date":"2026-07-18","type":"肿瘤治疗","title":"左前爪掌垫 MCT 冷冻","detail":"冷冻笔处理后恢复观察中；病灶位置已统一更正为左前爪。"},{"date":"2026-07-18","type":"实验室","title":"CBC 复查","detail":"无贫血或血小板减少；LYM% 轻度相对升高、MPV 高，绝对 LYM 与 PLT 正常。"},{"date":"2026-07-11","type":"病灶观察","title":"双前肢腕垫发现疑似病灶","detail":"两处疑似 MCT，计划细针穿刺确认。"},{"date":"2026-07-04","type":"影像与生化","title":"全腹超声与大生化","detail":"脾脏多发小结节、胰腺慢性改变；CREA 151，PHOS 0.73。"},{"date":"2026-06-21","type":"年度体检","title":"多系统综合检查","detail":"SDMA 12.47、CysC 正常；CREA 192.9 存在方法学差异。"},{"date":"2025-07-19","type":"肿瘤","title":"左前爪掌垫病灶 FNA 确认 MCT","detail":"泼尼松龙约半月无明显缩小，后转为观察。"},{"date":"2024-07-14","type":"手术与病理","title":"耳尖与脚蹼病灶切除","detail":"致密型低级肥大细胞瘤；脚蹼病灶切缘见肥大细胞。"}],"kidneyMeasurements":[{"date":"2020-12-15","left":3,"right":3.8},{"date":"2023-02-22","left":3.07,"right":3.73},{"date":"2025-07-05","left":2.95,"right":3.52},{"date":"2026-06-21","left":3.24,"right":3.63},{"date":"2026-06-28","left":3.13,"right":3.94},{"date":"2026-07-04","left":3.18,"right":3.85},{"date":"2026-08-15","left":3.03,"right":3.83}],"_cloud":{"revision":9,"updatedAt":"2026-08-17T13:32:12.753Z","updatedBy":"jingyan7115"}};
  const REPORTS = {"/reports/2020-02-16-chemistry-1.jpg":"./reports/2020-02-16-chemistry-1.jpg","/reports/2020-12-15-abdominal-us-1.jpg":"./reports/2020-12-15-abdominal-us-1.jpg","/reports/2021-04-01-abdominal-us-1.jpg":"./reports/2021-04-01-abdominal-us-1.jpg","/reports/2021-04-01-chemistry-1.jpg":"./reports/2021-04-01-chemistry-1.jpg","/reports/2021-07-23-cardiac-us-1.jpg":"./reports/2021-07-23-cardiac-us-1.jpg","/reports/2021-07-23-cardiac-us-2.jpg":"./reports/2021-07-23-cardiac-us-2.jpg","/reports/2023-02-22-abdominal-us-1.jpg":"./reports/2023-02-22-abdominal-us-1.jpg","/reports/2023-02-22-abdominal-us-2.jpg":"./reports/2023-02-22-abdominal-us-2.jpg","/reports/2023-02-22-cardiac-us-1.jpg":"./reports/2023-02-22-cardiac-us-1.jpg","/reports/2023-02-22-chemistry-1.jpg":"./reports/2023-02-22-chemistry-1.jpg","/reports/2025-07-05-abdominal-us-1.jpg":"./reports/2025-07-05-abdominal-us-1.jpg","/reports/2025-07-05-cardiac-us-1.jpg":"./reports/2025-07-05-cardiac-us-1.jpg","/reports/2026-06-21-abdominal-us-1.jpg":"./reports/2026-06-21-abdominal-us-1.jpg","/reports/2026-06-21-abdominal-us-2.jpg":"./reports/2026-06-21-abdominal-us-2.jpg","/reports/2026-06-21-antibody-titers-1.jpg":"./reports/2026-06-21-antibody-titers-1.jpg","/reports/2026-06-21-blood-gas-1.jpg":"./reports/2026-06-21-blood-gas-1.jpg","/reports/2026-06-21-cardiac-coagulation-1.jpg":"./reports/2026-06-21-cardiac-coagulation-1.jpg","/reports/2026-06-21-cardiac-us-1.jpg":"./reports/2026-06-21-cardiac-us-1.jpg","/reports/2026-06-21-cbc-1.jpg":"./reports/2026-06-21-cbc-1.jpg","/reports/2026-06-21-chemistry-1.jpg":"./reports/2026-06-21-chemistry-1.jpg","/reports/2026-06-21-dr-1.jpg":"./reports/2026-06-21-dr-1.jpg","/reports/2026-06-21-renal-fluorescence-1.jpg":"./reports/2026-06-21-renal-fluorescence-1.jpg","/reports/2026-06-21-saa-1.jpg":"./reports/2026-06-21-saa-1.jpg","/reports/2026-06-28-abdominal-us-1.jpg":"./reports/2026-06-28-abdominal-us-1.jpg","/reports/2026-06-28-abdominal-us-2.jpg":"./reports/2026-06-28-abdominal-us-2.jpg","/reports/2026-06-28-cbc-1.jpg":"./reports/2026-06-28-cbc-1.jpg","/reports/2026-06-28-pancreas-us-1.jpg":"./reports/2026-06-28-pancreas-us-1.jpg","/reports/2026-06-28-saa-1.jpg":"./reports/2026-06-28-saa-1.jpg","/reports/2026-07-04-abdominal-us-1.jpg":"./reports/2026-07-04-abdominal-us-1.jpg","/reports/2026-07-04-chemistry-1.jpg":"./reports/2026-07-04-chemistry-1.jpg","/reports/2026-07-18-cbc-1.jpg":"./reports/2026-07-18-cbc-1.jpg","/reports/2026-07-18-cbc-2.jpg":"./reports/2026-07-18-cbc-2.jpg","/reports/2026-08-15-abdominal-us-1.jpg":"./reports/2026-08-15-abdominal-us-1.jpg","/reports/2026-08-15-cbc-1.jpg":"./reports/2026-08-15-cbc-1.jpg","/reports/2026-08-15-cbc-2.jpg":"./reports/2026-08-15-cbc-2.jpg","/reports/2026-08-15-chemistry-1.jpg":"./reports/2026-08-15-chemistry-1.jpg"};
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
  });

  const CATEGORIES = [
    ["lab", "实验室", "CBC · 生化 · 炎症指标", "🔬", "blue"],
    ["renal", "肾脏管理", "CREA · SDMA · 尿检 · 血压", "💧", "mint"],
    ["mct", "MCT 病灶", "病灶地图 · 病理 · 处理", "🧬", "peach"],
    ["imaging", "影像检查", "腹超 · 心超 · DR", "🩻", "violet"],
    ["treatment", "用药与治疗", "剂量 · 疗效 · 不良反应", "💊", "amber"],
    ["nutrition", "营养与水合", "饮食 · 摄水 · 体重", "🥣", "mint"],
    ["qol", "生活质量", "活动 · 食欲 · 疼痛 · QOL", "💚", "blue"],
    ["timeline", "病程时间轴", "全部检查与治疗事件", "🗓️", "violet"],
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
      ["endDate", "结束日期", "date"],
      ["dose", "剂量"],
      ["frequency", "频率"],
      ["route", "给药途径"],
      ["cycle", "疗程"],
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
      apiError?.message || "无法读取线上数据，当前显示发布时内置版本",
    );
    render();
    if (notify) toast("无法读取线上数据，当前显示内置版本", 3600);
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
    return `<div class="stat">
      <small>${esc(METRIC_LABEL[metric] || metric)}</small>
      <strong>${item ? esc(item.value) : "—"}</strong>
      <em>${item ? esc(item.unit) : ""}</em>
      <div class="status">${
        item
          ? `${date(item.recordedAt)} · ${esc(item.status || "已记录")}`
          : "暂无记录"
      }</div>
    </div>`;
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
        <div class="avatar">🐈</div>
        <div>
          <h1>${esc(state.pet?.name || "面面")}</h1>
          <p>${esc(state.pet?.age || "8岁")} · ${esc(state.pet?.sex || "母猫")} · 当前体重 ${weight ? esc(weight.value) : "—"} kg<br>${syncText}</p>
        </div>
        ${ownerMode ? '<button class="primary" data-action="upload">＋ 上传并同步</button>' : ""}
      </div>
    </section>`;
  }

  function searchBar() {
    return `<form class="search" id="search-form">
      <span>⌕</span>
      <input id="search-input" aria-label="检索面面的长期健康库" placeholder="输入日期、检查、病灶、药物或指标，按 Enter 跳转">
      <button>检索</button>
    </form>`;
  }

  function categoryGrid() {
    return `<div class="category-grid">${CATEGORIES.map(
      (category) => `<button class="category tone-${category[4]}" data-category="${category[0]}">
        <span class="icon">${category[3]}</span>
        <span><h3>${category[1]}</h3><p>${category[2]}</p></span>
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
      <div class="section-head"><div><h2 id="medical-guidance-title">循证医疗与喂养建议</h2><p>根据当前线上指标动态生成 · 每条建议均附可点击来源</p></div></div>
      <div class="guidance-note"><strong>使用边界：</strong>这是基于现有记录的决策提示，不代替兽医诊断、处方或面对面检查。若数据更新，建议内容会随最新指标重新计算。</div>
      <div class="guidance-grid">${cards.join("")}</div>
    </section>`;
  }

  function home() {
    const renalNotice = liveRenalNotice();
    const mctNotice = liveMctFollowUp();
    const manualNotice = recentManualNotice();
    return `<div class="view">
      ${hero()}
      ${searchBar()}
      <div class="section-head"><div><h2>关键指标</h2><p>最新一次已确认记录</p></div></div>
      <div class="stats">${["WEIGHT", "CREA", "SDMA", "PHOS"].map(stat).join("")}</div>
      <div class="section-head"><div><h2>数据分类</h2><p>点击进入完整内容</p></div></div>
      ${categoryGrid()}
      <div class="section-head"><div><h2>随访提醒</h2></div></div>
      <div class="notice-grid">
        <article class="notice"><h3>${esc(renalNotice.title)}</h3><p>${esc(renalNotice.detail)}</p></article>
        <article class="notice"><h3>${esc(mctNotice.title)}</h3><p>${esc(mctNotice.detail)}</p></article>
        ${manualNotice ? `<article class="notice"><h3>${esc(manualNotice.title)}</h3><p>${esc(manualNotice.detail)}</p></article>` : ""}
      </div>
      ${medicalGuidance()}
    </div>`;
  }

  function library() {
    const description = ownerMode
      ? "8 个模块均可打开；修改后会保存到线上并同步给所有访客"
      : "8 个模块均可打开；当前为公开只读视图";
    return `<div class="view">
      ${hero()}
      ${searchBar()}
      <div class="section-head"><div><h2>面面的长期健康库</h2><p>${description}</p></div></div>
      ${categoryGrid()}
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
    <div class="entry-list">${[...points]
      .reverse()
      .map(
        (point) => `<div class="entry">
          <div class="entry-top"><h3>${date(point.recordedAt)}</h3><span class="date">${esc(point.status || "已记录")}</span></div>
          <p><strong>${esc(point.value)} ${esc(point.unit)}</strong> · ${esc(point.source || "")}</p>
        </div>`,
      )
      .join("")}</div>`;
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
        <thead><tr><th>超声日期</th><th>左肾长径</th><th>右肾长径</th></tr></thead>
        <tbody>${[...points]
          .reverse()
          .map(
            (point) => `<tr><td>${date(point.recordedAt)}</td><td>${formatCm(point.left)} cm</td><td>${formatCm(point.right)} cm</td></tr>`,
          )
          .join("")}</tbody>
      </table>`;
  }

  function trends() {
    const metrics = ["WEIGHT", "CREA", "SDMA", "PHOS", "BUN", "ALT"];
    return `<div class="view">
      <div class="toolbar"><div class="module-title"><h1>长期趋势</h1><p>线上数据更新后，图表会使用最新记录重新绘制</p></div></div>
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
      <div class="chart-card">
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
        <button class="back" data-nav="library">← 返回健康库</button>
        ${editable && ownerMode ? `<button class="primary" data-add="${id}">＋ 新增记录</button>` : ""}
      </div>
      <div class="module-title"><h1>${category?.[3] || ""} ${category?.[1] || id}</h1><p>${category?.[2] || ""}</p></div>
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
              <p>${esc(report.summary || "")}</p>
              ${
                (report.results || []).length
                  ? `<table class="result-table"><thead><tr><th>项目</th><th>结果</th><th>单位</th><th>状态</th></tr></thead><tbody>${report.results
                      .map(
                        (result) => `<tr>
                          <td>${esc(result.label || result.metric)}</td>
                          <td>${esc(result.value)}</td>
                          <td>${esc(result.unit || "")}</td>
                          <td>${esc(result.status || result.flag || "")}</td>
                        </tr>`,
                      )
                      .join("")}</tbody></table>`
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
      <div class="notice"><h3>${esc(state.renalNotice?.title || "待完成监测")}</h3><p>${esc(state.renalNotice?.detail || "建议结合尿检、UPC 与血压评估，不只依据单次肌酐判断。")}</p></div>`;
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
      ${reportButtons || editButtons ? `<div class="entry-actions">${reportButtons}${editButtons}</div>` : ""}
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
    const all = [
      ...(state.timeline || []).map((item) => ({
        date: item.date,
        type: item.type,
        title: item.title,
        detail: item.detail,
      })),
      ...(state.labReports || []).map((item) => ({
        date: item.recordedAt,
        type: "实验室",
        title: item.title,
        detail: item.summary,
      })),
      ...(state.moduleEntries || []).map((item) => ({
        date: item.recordedAt,
        type: MODULE_LABEL[item.module] || item.module,
        title: item.title,
        detail: item.summary,
      })),
    ];
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
          <p>${esc(item.detail || "")}</p>
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
          type: "renal",
          id: null,
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
    if (REPORTS[url]) return REPORTS[url];
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
                  return `<div class="field"><label>${esc(label)}</label><select name="d_${key}"><option value="">请选择</option>${["好日", "一般", "坏日"]
                    .map(
                      (value) =>
                        `<option ${entry?.data?.[key] === value ? "selected" : ""}>${value}</option>`,
                    )
                    .join("")}</select></div>`;
                }
                const numberAttributes =
                  type === "number" && module === "qol"
                    ? 'min="0" max="5" step="1"'
                    : type === "number"
                      ? 'step="0.1"'
                      : "";
                return `<div class="field"><label>${esc(label)}</label><input name="d_${key}" type="${type}" ${numberAttributes} value="${esc(entry?.data?.[key] ?? "")}"></div>`;
              })
              .join("")}
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
    overlay.querySelector("#editor-form").onsubmit = async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const submit = form.querySelector("[data-submit]");
      submit.disabled = true;
      submit.textContent = "正在同步…";
      try {
        const formData = new FormData(form);
        const data = {};
        definitions.forEach(([key, _label, type]) => {
          const value = String(formData.get(`d_${key}`) || "").trim();
          if (value !== "") data[key] = type === "number" ? Number(value) : value;
        });

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

  function render() {
    document.querySelectorAll("[data-nav]").forEach((button) => {
      button.classList.toggle("active", button.dataset.nav === route.name);
    });
    if (route.name === "home") main.innerHTML = home();
    else if (route.name === "library") main.innerHTML = library();
    else if (route.name === "trends") main.innerHTML = trends();
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
    document.querySelectorAll("[data-search-type]").forEach((button) => {
      button.onclick = () => {
        const type = button.dataset.searchType;
        const id = button.dataset.searchId;
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
