/* EACHRights SRHR Portal — Education Budget section (FY2025/26 vs FY2026/27)
   Built from Education_Budget_Tracker_updated.xlsx (researched 4 November 2026). Load AFTER data/budget.js on county.html:
     <script src="data/education-budget.js"></script>
   National figures are KSh billion; county figures are KSh million. Changes are calculated here, not typed.
   To add a county: add an entry to EDU_COUNTY below (same shape as 'kilifi').
   conf: 'ok' = figure and source agree | 'check' = needs verifying | 'approx' = proposal / not like for like */

window.EDU_NATIONAL = {
  total: { a: 702.7, b: 784.5, srcA: 'Parliament of Kenya, 13 Jun 2025, para 6', srcB: 'National Treasury, Budget Statement FY2026/27, para 222, p. 136' },
  voteHeads: [
    { label: 'Teachers Service Commission (TSC)', a: 387.2, b: 424.3, conf: 'ok',
      note: 'Largest item in both years. The 2025/26 figure is the Treasury speech figure and matches the Controller of Budget gross estimate (387.18); the committee report gives 387.7.' },
    { label: 'Higher Education', a: 144.7, b: 163.9, conf: 'approx',
      note: '2025/26 is a National Assembly committee proposal (Daily Nation, 27 May 2025), not the final budget. The Controller of Budget gross estimate for 2025/26 is 143.7 (nine-month report, Table 2.10, p. 17), which supports it. Treat the change as approximate.' },
    { label: 'Basic Education', a: 126.1, b: 136.6, conf: 'approx',
      note: '2025/26 is a committee proposal (Daily Nation, 27 May 2025). The Controller of Budget gross estimate is 127.9 (Table 2.10, p. 17). Not like for like with the 2026/27 vote head.' },
    { label: 'TVET', a: 42.0, b: 58.5, conf: 'approx',
      note: '2025/26 is a committee proposal (Daily Nation, 27 May 2025). The Controller of Budget gross estimate is 43.2 (Table 2.10, p. 18). The 2026/27 figure matches the 58.49 approved by Parliament.' },
    { label: 'Science, Innovation and Research', a: 0.993, b: 1.3, conf: 'ok',
      note: 'The 2025/26 speech figure is KSh 993m; the committee report quotes 943m.' }
  ],
  programmes: [
    { label: 'HELB (student loans)', a: 41.5, b: 56.3, conf: 'ok', src: 'Budget Statement para 226, p. 138' },
    { label: 'Free Day Secondary Education', a: 51.9, b: 54.6, conf: 'ok', src: 'Budget Statement para 223, p. 137' },
    { label: 'University scholarships', a: 16.9, b: 30.9, conf: 'ok', src: 'Budget Statement para 226, p. 138' },
    { label: 'Junior Secondary capitation', a: 28.9, b: 30.7, conf: 'check', src: 'Budget Statement para 223, p. 137',
      note: 'The Star calls 2026/27 "unchanged at 30.7", but the 2025/26 Budget Statement gave 28.9. This page uses 28.9.' },
    { label: 'National examinations administration', a: 5.9, b: 9.9, conf: 'ok', src: 'Budget Statement para 223, p. 137' },
    { label: 'TVET scholarships', a: 7.7, b: 9.2, conf: 'ok', src: 'Budget Statement para 226, p. 138' },
    { label: 'Intern teacher programme', a: 7.2, b: 8.2, conf: 'check', src: 'Budget Statement para 224, p. 137',
      note: 'The 2025/26 figure sits inside the TSC allocation, while 2026/27 lists it separately, so the two years may not be like for like.' },
    { label: 'Kenya Primary Education Equity in Learning (KPEEL)', a: 13.3, b: 7.1, conf: 'ok', src: 'Budget Statement para 225, p. 138',
      note: 'The largest programme cut, and the only one among these lines that falls.' },
    { label: 'Free Primary Education', a: 7.0, b: 7.0, conf: 'check', src: 'Budget Statement para 223, pp. 136-137',
      note: 'Headline capitation line. The Basic Education brief below shows a larger Free Primary programme (KSh 17.9bn to 16.5bn), which has a wider scope.' },
    { label: 'Secondary Education Quality Improvement (SEEQIP)', a: 2.3, b: 4.7, conf: 'ok', src: 'Budget Statement para 225, p. 138' },
    { label: 'School infrastructure (primary and secondary)', a: 1.7, b: 4.1, conf: 'ok', src: 'Budget Statement para 225, pp. 137-138' },
    { label: 'School feeding programme', a: 3.0, b: 3.0, conf: 'ok', src: 'Budget Statement para 223, p. 137' },
    { label: 'TVET centres: construction and equipping', a: 1.4, b: 2.1, conf: 'ok', src: 'Budget Statement para 225, p. 138' }
  ],
  // Basic Education sub-sector brief (KSh billion, converted from full KSh). Source: Kenya Basic Education Sub-Sector Budget Brief FY2026-27, pp. 6-7
  basicBrief: [
    { label: 'Primary education programme (total)', a: 25.555916931, b: 22.68353275, src: 'Budget Brief p. 6',
      note: 'Sum of the lines shown in the brief. The brief\u2019s printed 2026/27 total is 22.625, which leaves out the adult and continuing education line (0.059), so the printed total gives \u221211.5% against \u221211.2% here.' },
    { label: 'Secondary education programme (total)', a: 86.590429964, b: 94.459999883, src: 'Budget Brief p. 6' },
    { label: 'Quality assurance and standards (total)', a: 14.524676992, b: 14.297731341, src: 'Budget Brief p. 6' },
    { label: 'General administration, planning and support (total)', a: 6.001016747, b: 5.172643037, src: 'Budget Brief p. 6',
      note: 'The workbook shows this as +13.8%. The amounts fall, so the change is shown here as a decrease.' }
  ],
  basicFocus: [
    { label: 'Primary: Special Needs Education', a: 1.0472328, b: 1.354721767, src: 'Budget Brief p. 6' },
    { label: 'Primary: Expanding Education Opportunities in ASALs', a: 0.785, b: 0.9802, src: 'Budget Brief p. 6' },
    { label: 'Primary: School Health, Nutrition and Meals', a: 4.9, b: 3.0, src: 'Budget Brief p. 6' },
    { label: 'Secondary: Special Needs Education', a: 0.28, b: 0.2716, src: 'Budget Brief p. 6' }
  ],
  // TSC sub-programmes (Vote 2091), KSh billion converted from full KSh. Source: GI-ESCR submission citing the FY2026/27 PBB; not checked against the PBB
  tscSub: [
    { label: '0509010 Teacher Management: Primary', a: 225.935374337, b: 267.900304712, src: 'GI-ESCR submission (cites FY2026/27 PBB, Vote 2091); page not given',
      note: '99.8% of the 2026/27 amount is compensation to employees. Includes the KPEEL capital line (KSh 0.423bn to 0.330bn).' },
    { label: '0509020 Teacher Management: Secondary', a: 173.416294286, b: 138.442569792, src: 'GI-ESCR submission (cites FY2026/27 PBB, Vote 2091); page not given',
      note: '99.7% of the 2026/27 amount is compensation. Includes the SEEQIP capital line (KSh 0.206bn to 0.350bn).' }
  ],
  tscSubNote: 'The two sub-programmes add to KSh 399.4bn in 2025/26, which is more than the KSh 387.2bn TSC total used above, so the bases probably differ (for example supplementary estimates or reclassification). The figures have not been checked against the Programme Based Budget.',
  // Releases and spending FY2025/26, KSh billion. Released = nine months to 31 Mar 2026 (exchequer issues). Source: Controller of Budget nine-month report; spending from Mzalendo vote pages (not checked against the CoB annexes)
  spending: [
    { label: 'Teachers Service Commission', approved: 387.18, released: 296.63, spent: 300.41, src: 'CoB 9M report Table 2.10 p. 19; Tables 2.5 p. 9, 2.7 p. 12' },
    { label: 'Basic Education', approved: 127.91, released: 90.72, spent: 94.54, src: 'CoB 9M report Table 2.10 p. 17; Tables 2.5 p. 8, 2.7 p. 12' },
    { label: 'Higher Education', approved: 143.74, released: 78.66, spent: 128.36, src: 'CoB 9M report Table 2.10 p. 17; Tables 2.5 p. 8, 2.7 p. 12',
      note: 'Spent exceeds released because institutions also spend funds they raise themselves.' },
    { label: 'TVET', approved: 43.24, released: 19.03, spent: null, src: 'CoB 9M report Table 2.10 p. 18; Tables 2.5 p. 8, 2.7 p. 12', note: 'Spending not found.' },
    { label: 'Science, Innovation and Research', approved: null, released: 0.53, spent: null, src: 'CoB 9M report Table 2.7 p. 12 (recurrent only)', note: 'No gross estimate or spending found.' }
  ],
  spendingNote: 'Released against gross estimates runs lower than against net estimates: the sector had received KSh 485.6bn of its KSh 624.7bn net estimate (77.7%) by 31 March 2026, against a 75% benchmark. Treasury reports whole-sector absorption falling from 97.6% (2023/24) to 90.9% to 79.6% (2025/26), and pending bills due to lack of exchequer rising from KSh 65.6bn to 70.1bn to 85.2bn (Education Sector Report, MTEF 2027/28 to 2029/30, Executive Summary p. 6). StatsKenya reports KSh 745.4bn spent in the full year against KSh 703.1bn approved; the bases differ, so these figures are not combined.',
  verify: [
    'Find the Treasury FY2025/26 Budget Statement to replace the Daily Nation committee proposals for Higher Education, Basic Education and TVET. The Controller of Budget gross estimates (143.7, 127.9 and 43.2) are within about 3% of them.',
    'Confirm which Free Primary Education figure to quote: KSh 7.0bn (headline capitation) or the KSh 17.9bn to 16.5bn programme in the Basic Education brief.',
    'Confirm the junior secondary capitation figure for 2025/26 (28.9 in the Budget Statement vs 30.7 in The Star).',
    'The education share of the budget is reported as 26.4% (The Star) and 26.5% (Capital FM). Quote it as "about 26.5%" until checked.',
    'Treasury\u2019s "49% increase" compares with 2021/22. Year on year the rise is 11.6%.',
    'Check the TSC sub-programme figures against the FY2026/27 Programme Based Budget (Vote 2091), and read the Controller of Budget annexes for spending by vote instead of Mzalendo.',
    'In the workbook, correct Education sub-programmes cell B8 (Higher Education 2025/26): it holds 56.3, but the Controller of Budget estimate is 143.7.'
  ]
};

window.EDU_COUNTY = {
  'kilifi': {
    unit: 'KSh million',
    // Same-line comparison where both years exist
    compare: [
      { label: 'Ward scholarships / bursaries (secondary, college, university)', a: 500, b: 400, conf: 'check',
        note: 'The workbook cell for 2025/26 shows 142.84, but its source reference and the sheet summary both say KSh 500,000,000, so 500 is used here. With 142.84 the line would rise 180% instead of falling 20%, so confirm against the county document before quoting the change. A further KSh 400M development line may exist and is not included.',
        srcA: 'Kilifi Draft Budget Estimates FY2025/26, Vote 3140, Programme 3, item 2640101', srcB: 'Kilifi FY2026/27 Budget Estimates (abridged), p. 12' },
      { label: 'ECDE capitation', a: 50, b: 50, conf: 'check',
        note: 'Same amount, but the 2025/26 line is a development estimate and the 2026/27 line is recurrent. Confirm they are the same item.',
        srcA: 'Kilifi Programme Based Budget FY2025/26, p. 43', srcB: 'Kilifi FY2026/27 Budget Estimates (abridged), p. 12' },
      { label: 'County Division for Early Childhood Education (total)', a: 1549.407, b: 1598.762, conf: 'check',
        note: '2025/26 is the single Vote 3141 summary figure (early childhood education and vocational training), seen in a search extract only, and may not cover the same scope as the 2026/27 division. 2026/27 includes personal emoluments of 885.2 and operations and maintenance of 480.0 within recurrent. Scholarships, feeding and capitation are separate lines, so do not add them to this total without checking for overlap.',
        srcA: 'Kilifi Programme Based Budget FY2025/26 (adopted at CEC level), Vote 3141 summary, page not confirmed', srcB: 'Kilifi FY2026/27 Budget Estimates (abridged), pp. 4 and 9 (Scribd copy)' }
    ],
    // Lines with a figure in one year only: shown, but no change is calculated
    oneYear: [
      { fy: 'FY2025/26', label: 'ECDE teaching and learning materials', v: 29.41, conf: 'check', src: 'kilifiassembly.go.ke (page not verified)' },
      { fy: 'FY2025/26', label: 'Completion of stalled ECDE projects (development line)', v: 59.91, conf: 'check', src: 'Kilifi Programme Based Budget FY2025/26 (seen in a search extract; page not verified)' },
      { fy: 'FY2025/26', label: 'Supply of Tayari tablets (ECDE digital learning)', v: 10, conf: 'check', src: 'Kilifi Programme Based Budget FY2025/26 (page not verified)' },
      { fy: 'FY2025/26', label: 'Education, Training and Research', v: 6.2, conf: 'check', src: 'kilifiassembly.go.ke, p. 74, Sub-Programme 2.3 (document not named in the workbook)' },
      { fy: 'FY2025/26', label: 'Completion of 2nd generation ECDE at Tezo', v: 1.8, conf: 'check',
        note: 'Listed as a stalled project at 30 June 2026, so it may not be new 2025/26 spending.',
        src: 'Controller of Budget, county review report FY2025/26, Table 3.234, pp. 322-323 (check in the PDF; p. 289 is Kiambu\u2019s table)' },
      { fy: 'FY2026/27', label: 'School feeding programme', v: 100, dev: 100, conf: 'check', note: 'No 2025/26 feeding line was found, so no change is calculated.',
        src: 'Kilifi FY2026/27 Budget Estimates (abridged), p. 12 (Scribd copy)', url: 'https://www.scribd.com/document/1035638775/Abridged-Version-of-Fy-202627-Budget-Estimates' }
    ],
    // Stalled ECDE projects reported to the Controller of Budget, as of 30 June 2026 (KSh million). Amounts paid are cumulative, not FY2025/26 spending
    stalled: [
      { label: 'Proposed completion of 2nd generation ECDE at Tezo', value: 1.8, paid: 1.8 },
      { label: 'Proposed renovation of Tangini kwa Kagumba ECDE and completion of toilets', value: 4, paid: 4 },
      { label: 'Construction of pit latrines at Zowerani VDC pre-school, Tezo ward', value: 2.3, paid: 2.3 }
    ],
    stalledSrc: 'Controller of Budget, County Governments Budget Implementation Review Report FY2025/26, Table 3.234, pp. 322-323 as read by a public code project (secondary source; check in the PDF). Kilifi reported nine stalled projects; these three are the ECDE ones.',
    spendNote: 'No released or actual-expenditure figure was found for any Kilifi ECDE or vocational training line. They should be in the Kilifi chapter of the Controller of Budget county report for FY2025/26, whose download links did not work. County-wide, Kilifi spent about KSh 6.3bn of a KSh 7.4bn development budget in 2025/26 (Nation; absorption 84.52% per Business Daily), which is not specific to education. For scale only: the Education department\u2019s earlier-year allocation and spending were KSh 762.4m and KSh 520.2m (68.2%) in the Kilifi Annual Development Plan FY2024/25, in a year the extract does not state, so do not read it as 2025/26.',
    context: 'Kilifi\u2019s wider finances are tight: total revenue was about KSh 14.3 billion in 2024/25 (equitable share 12.8bn plus own-source 1.5bn), and pending bills reached KSh 10.7 billion by September 2026 (Jumuiya News, 22 Sep 2026). By 31 March 2026 Kilifi had received 66.5% of its 2025/26 equitable share, below the 75% pro-rata benchmark (Controller of Budget nine-month report, Table 2.9, p. 15), and its development absorption for the year was 84.5% across all departments (The Standard, reporting the Controller of Budget county report). Neither figure is specific to education. These pressures may affect how fully allocations are paid out.',
    verify: [
      'No published education department total was found for 2025/26 or 2026/27. The lines above are individual lines, not the whole department.',
      'Check the 2025/26 ward scholarship figure (the workbook cell says 142.84; the source reference says 500).',
      'Confirm the 2025/26 division total (KSh 1,549.4m) covers the same scope as the 2026/27 division. The PDF was not opened.',
      'The FY2026/27 figures come from a Scribd copy of the abridged estimates. Confirm them against the Kilifi Assembly\u2019s approved Programme Based Budget.',
      'Page numbers for the 2025/26 ECDE materials and tablets lines are not verified.',
      'No Kilifi education releases or spending figures were found. The Controller of Budget county report for 2025/26 should have them.',
      'Check the pages for the stalled ECDE projects (Table 3.234, pp. 322-323) in the Controller of Budget PDF; the workbook\u2019s earlier p. 289 is Kiambu\u2019s table.'
    ]
  }
};

(async function () {
  const id = new URLSearchParams(location.search).get('id') || 'homa-bay';
  const main = document.querySelector('.county-main');
  const N = window.EDU_NATIONAL;
  if (!main || !N) return;

  const E = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const U = u => (typeof u === 'string' && /^https?:\/\//i.test(u)) ? u : null;
  const num = (v, d) => v == null ? '—' : Number(v).toLocaleString('en-KE', { minimumFractionDigits: d || 0, maximumFractionDigits: d == null ? 1 : d });
  const chg = (a, b) => (a ? (b / a - 1) * 100 : null);
  const pct = p => p == null ? '—' : (p > 0.05 ? '+' : p < -0.05 ? '\u2212' : '') + Math.abs(p).toFixed(1) + '%';
  const cls = p => p == null ? '' : p > 0.05 ? 'up' : p < -0.05 ? 'down' : 'flat';
  const county = id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const ST = {
    ok:    { t: 'Consistent',  pill: '#32A03722', ink: '#174F30', c: '#174F30' },
    check: { t: 'Needs check', pill: '#F2781C22', ink: '#A84A06', c: '#F2781C' },
    approx:{ t: 'Approximate', pill: '#8a8a9926', ink: '#4f4f5e', c: '#8a8a99' }
  };

  const css = document.createElement('style');
  css.textContent = `
  .eb-lede{font-size:15px;color:var(--ink-mid);line-height:1.65;max-width:72ch;margin:0 0 16px}
  .eb-lede strong{color:var(--ink)}
  .eb-top{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:14px;margin-bottom:18px}
  .eb-card{background:var(--white);border-radius:8px;box-shadow:var(--shadow);padding:18px 20px}
  .eb-card .k{font-size:12px;color:var(--ink-lt);line-height:1.35;margin-bottom:8px}
  .eb-card .v{font-family:'Source Serif 4',serif;font-size:30px;font-weight:600;color:var(--green-dk);line-height:1.05}
  .eb-card .v small{font-family:'Source Sans 3',sans-serif;font-size:12px;font-weight:400;color:var(--ink-lt);margin-left:4px}
  .eb-card .s{font-size:12.5px;color:var(--ink-mid);line-height:1.5;margin-top:8px}
  .eb-card.hero{background:var(--sidebar);color:#fff}
  .eb-card.hero .k,.eb-card.hero .s{color:rgba(255,255,255,.75)}
  .eb-card.hero .v{font-size:44px;color:var(--lime)}
  .eb-card.hero .v small{color:rgba(255,255,255,.65)}
  .eb-panel{background:var(--white);border-radius:8px;box-shadow:var(--shadow);padding:18px 20px;margin-bottom:18px}
  .eb-panel h3{font-family:'Source Serif 4',serif;font-size:16px;font-weight:600;color:var(--ink);margin:0 0 2px}
  .eb-panel .cap{font-size:12.5px;color:var(--ink-lt);margin:0 0 14px;max-width:80ch}
  .eb-sub{font-size:13px;font-weight:700;color:var(--green-dk);margin:20px 0 8px}
  .eb-rows{display:flex;flex-direction:column;gap:12px}
  .eb-row{display:grid;grid-template-columns:minmax(150px,32%) 1fr 70px;gap:14px;align-items:center}
  .eb-rl{font-size:13px;color:var(--ink);line-height:1.35}
  .eb-bars{display:flex;flex-direction:column;gap:3px}
  .eb-bar{height:10px;border-radius:2px;min-width:2px}
  .eb-bar.a{background:#b9c4bd}
  .eb-bar.b{background:var(--green)}
  .eb-rv{font-size:13px;font-weight:700;text-align:right;font-variant-numeric:tabular-nums}
  .eb-rv.up{color:#174F30}.eb-rv.down{color:#C0161C}.eb-rv.flat{color:var(--ink-lt)}
  .eb-key{display:flex;flex-wrap:wrap;gap:4px 16px;font-size:12px;color:var(--ink-mid);margin-top:14px;padding-top:12px;border-top:1px solid var(--rule)}
  .eb-key b{display:inline-block;width:9px;height:9px;border-radius:2px;margin-right:6px}
  .eb-table{width:100%;border-collapse:collapse;font-size:13px;min-width:720px}
  .eb-table th{background:var(--green);color:#fff;padding:10px 14px;text-align:left;font-weight:600;font-size:12px;letter-spacing:.04em;white-space:nowrap}
  .eb-table th.num,.eb-table td.num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
  .eb-table td{padding:11px 14px;border-bottom:1px solid var(--rule);vertical-align:top}
  .eb-table tr.row:hover td{background:var(--green-lt)}
  .eb-table tr.grp td{background:var(--paper);font-family:'Source Serif 4',serif;font-weight:600;color:var(--green-dk);padding:7px 14px}
  .eb-line{font-weight:600;color:var(--ink);line-height:1.35}
  .eb-note{font-size:12px;color:var(--ink-mid);margin-top:4px;line-height:1.5;max-width:52ch}
  .eb-src{font-size:12px;color:var(--ink-mid);line-height:1.5;max-width:260px}
  .eb-table td.up{color:#174F30;font-weight:700}.eb-table td.down{color:#C0161C;font-weight:700}
  .eb-verify{background:var(--lime-lt);border-left:3px solid var(--lime);border-radius:0 8px 8px 0;padding:14px 18px;margin-top:18px}
  .eb-verify h4{font-size:14px;color:var(--green-dk);margin:0 0 8px}
  .eb-verify ul{list-style:none;margin:0;padding:0}
  .eb-verify li{font-size:13px;color:var(--ink-mid);line-height:1.5;padding:4px 0 4px 24px;position:relative}
  .eb-verify li::before{content:'';position:absolute;left:0;top:8px;width:12px;height:12px;border:1.5px solid var(--green);border-radius:3px;background:#fff}
  @media(max-width:860px){.eb-top{grid-template-columns:1fr}.eb-row{grid-template-columns:1fr 64px;gap:4px 10px}.eb-rl{grid-column:1/-1}}
  @media print{.eb-card.hero,.eb-table th,.eb-bar{-webkit-print-color-adjust:exact;print-color-adjust:exact}}`;
  document.head.appendChild(css);

  const pill = k => { const s = ST[k] || ST.check; return `<span class="pill" style="background:${s.pill};color:${s.ink}">${s.t}</span>`; };

  function barBlock(rows, unit) {
    const max = Math.max(...rows.map(r => Math.max(r.a, r.b)));
    return `<div class="eb-rows">${rows.map(r => {
      const p = chg(r.a, r.b);
      return `<div class="eb-row" role="img" aria-label="${E(r.label)}: ${num(r.a, 2)} to ${num(r.b, 2)} ${unit}, ${pct(p)}">
        <div class="eb-rl">${E(r.label)}</div>
        <div class="eb-bars"><div class="eb-bar a" style="width:${Math.max(0.8, r.a / max * 100)}%"></div><div class="eb-bar b" style="width:${Math.max(0.8, r.b / max * 100)}%"></div></div>
        <div class="eb-rv ${cls(p)}">${pct(p)}</div></div>`;
    }).join('')}</div>`;
  }

  function natTable(rows, withSrc) {
    return `<div style="overflow-x:auto;border-radius:8px;box-shadow:var(--shadow);background:var(--white);margin-top:12px;">
      <table class="eb-table"><thead><tr><th>Item</th><th class="num">FY2025/26</th><th class="num">FY2026/27</th><th class="num">Change</th><th class="num">% change</th>${withSrc ? '<th>Status</th><th>Source</th>' : '<th>Source</th>'}</tr></thead><tbody>
      ${rows.map(r => {
        const p = chg(r.a, r.b), d = r.b - r.a;
        return `<tr class="row"><td><div class="eb-line">${E(r.label)}</div>${r.note ? `<div class="eb-note">${E(r.note)}</div>` : ''}</td>
          <td class="num">${num(r.a, 2)}</td><td class="num">${num(r.b, 2)}</td>
          <td class="num ${cls(p)}">${(d > 0.0005 ? '+' : d < -0.0005 ? '\u2212' : '') + num(Math.abs(d), 2)}</td><td class="num ${cls(p)}">${pct(p)}</td>
          ${withSrc ? `<td>${pill(r.conf)}</td>` : ''}<td><div class="eb-src">${E(r.src || '')}</div></td></tr>`;
      }).join('')}</tbody></table></div>`;
  }

  function spendTable(rows) {
    return `<div style="overflow-x:auto;border-radius:8px;box-shadow:var(--shadow);background:var(--white);margin-top:12px;">
      <table class="eb-table"><thead><tr><th>Vote</th><th class="num">Approved (gross)</th><th class="num">Released</th><th class="num">Released ÷ approved</th><th class="num">Spent</th><th>Source</th></tr></thead><tbody>
      ${rows.map(r => {
        const rr = r.approved ? r.released / r.approved * 100 : null;
        return `<tr class="row"><td><div class="eb-line">${E(r.label)}</div>${r.note ? `<div class="eb-note">${E(r.note)}</div>` : ''}</td>
          <td class="num">${num(r.approved, 2)}</td><td class="num">${num(r.released, 2)}</td>
          <td class="num ${rr == null ? '' : rr < 75 ? 'down' : 'up'}">${rr == null ? '—' : rr.toFixed(1) + '%'}</td><td class="num">${num(r.spent, 2)}</td>
          <td><div class="eb-src">${E(r.src)}</div></td></tr>`;
      }).join('')}</tbody></table></div>`;
  }

  // ---------- National block ----------
  const tot = N.total, totChg = tot.b - tot.a, totPct = chg(tot.a, tot.b);
  const tsc = N.voteHeads[0], tscShare = tsc.b / tot.b * 100;
  const kpeel = N.programmes.find(p => /KPEEL/.test(p.label));
  const natHtml = `
    <p class="eb-lede">The national education allocation rises from <strong>KSh ${num(tot.a)} billion</strong> in FY2025/26 to <strong>KSh ${num(tot.b)} billion</strong> in FY2026/27, an increase of KSh ${num(totChg)} billion (${pct(totPct)}). The Teachers Service Commission takes about ${tscShare.toFixed(0)}% of the total, so much of the growth is teacher pay. Higher education support (HELB loans and university scholarships) grows fastest among programmes, while KPEEL is the only programme line that falls.</p>
    <div class="eb-top">
      <div class="eb-card hero"><div class="k">National education sector · FY2026/27</div><div class="v">${num(tot.b)}<small>KSh billion</small></div><div class="s">${pct(totPct)} on FY2025/26 (KSh ${num(tot.a)}bn). Treasury\u2019s "49% increase" is measured against 2021/22, not last year.</div></div>
      <div class="eb-card"><div class="k">Teachers Service Commission · FY2026/27</div><div class="v">${num(tsc.b)}<small>KSh bn</small></div><div class="s">${pct(chg(tsc.a, tsc.b))} on last year; ${tscShare.toFixed(1)}% of the sector total.</div></div>
      <div class="eb-card"><div class="k">${E(kpeel.label)}</div><div class="v">${pct(chg(kpeel.a, kpeel.b))}</div><div class="s">KSh ${num(kpeel.a)}bn to ${num(kpeel.b)}bn. Relevant for advocacy on primary-school equity.</div></div>
    </div>
    <div class="eb-panel">
      <h3>Vote heads</h3><p class="cap">KSh billion. Grey bar = FY2025/26, green bar = FY2026/27, bars start at zero. Three of the five 2025/26 figures are committee proposals, so read those changes as approximate.</p>
      ${barBlock(N.voteHeads, 'KSh billion')}
      <div class="eb-key"><span><b style="background:#b9c4bd"></b>FY2025/26</span><span><b style="background:var(--green)"></b>FY2026/27</span></div>
      ${natTable(N.voteHeads, true)}
      <div class="eb-sub">Programmes and lines with a figure in both years</div>
      ${barBlock(N.programmes, 'KSh billion')}
      ${natTable(N.programmes, true)}
      <div class="eb-sub">Basic Education sub-sector budget brief (KSh billion)</div>
      <p class="cap" style="margin-bottom:0">Programme totals from the Kenya Basic Education Sub-Sector Budget Brief FY2026-27 (pp. 6-7). Primary and administration fall; secondary rises. Lines of particular interest for inclusion and equity are listed after the totals.</p>
      ${natTable(N.basicBrief, false)}
      ${natTable(N.basicFocus, false)}
      <div class="eb-sub">TSC sub-programmes (KSh billion)</div>
      <p class="cap" style="margin-bottom:0">${E(N.tscSubNote)}</p>
      ${natTable(N.tscSub, false)}
      <div class="eb-sub">Releases and spending, FY2025/26 (KSh billion)</div>
      <p class="cap" style="margin-bottom:0">Released = exchequer issues in the nine months to 31 March 2026. Release rates below 75% are in red. "—" means not found.</p>
      ${spendTable(N.spending)}
      <p class="cap" style="margin:12px 0 0">${E(N.spendingNote)}</p>
    </div>`;

  // ---------- County block ----------
  const C = (window.EDU_COUNTY || {})[id];
  let cHtml = '';
  if (C) {
    const cmp = C.compare.map(r => {
      const p = chg(r.a, r.b);
      return `<tr class="row"><td><div class="eb-line">${E(r.label)}</div>${r.note ? `<div class="eb-note">${E(r.note)}</div>` : ''}</td>
        <td class="num">${num(r.a, 2)}</td><td class="num">${num(r.b, 2)}</td><td class="num ${cls(p)}">${pct(p)}</td><td>${pill(r.conf)}</td>
        <td><div class="eb-src">2025/26: ${E(r.srcA)}<br>2026/27: ${E(r.srcB)}</div></td></tr>`;
    }).join('');
    const one = C.oneYear.map(r => {
      const link = U(r.url) ? `<br><a class="doc-link" href="${E(r.url)}" target="_blank" rel="noopener noreferrer">Open source ↗</a>` : '';
      return `<tr class="row"><td><div class="eb-line">${E(r.label)}</div><div class="eb-note">${E(r.fy)} only. ${E(r.note || 'No figure for the other year in the sources checked.')}</div></td>
        <td class="num">${r.fy === 'FY2025/26' ? num(r.v, 2) : '—'}</td><td class="num">${r.fy === 'FY2026/27' ? num(r.v, 2) : '—'}</td><td class="num">—</td><td>${pill(r.conf)}</td>
        <td><div class="eb-src">${E(r.src)}${link}</div></td></tr>`;
    }).join('');
    const st = C.stalled || [];
    const stTot = st.reduce((s, r) => ({ v: s.v + r.value, p: s.p + r.paid }), { v: 0, p: 0 });
    const stalledHtml = st.length ? `
        <div class="eb-sub">Releases and spending, and stalled ECDE projects</div>
        <p class="cap" style="margin-bottom:0">${E(C.spendNote)}</p>
        <div style="overflow-x:auto;border-radius:8px;box-shadow:var(--shadow);background:var(--white);margin-top:12px;"><table class="eb-table"><thead><tr><th>Stalled ECDE project (as of 30 June 2026)</th><th class="num">Estimated value</th><th class="num">Paid to date</th><th class="num">Balance</th></tr></thead><tbody>
        ${st.map(r => `<tr class="row"><td><div class="eb-line">${E(r.label)}</div></td><td class="num">${num(r.value, 2)}</td><td class="num">${num(r.paid, 2)}</td><td class="num">${num(r.value - r.paid, 2)}</td></tr>`).join('')}
        <tr class="grp"><td>Total</td><td class="num">${num(stTot.v, 2)}</td><td class="num">${num(stTot.p, 2)}</td><td class="num">${num(stTot.v - stTot.p, 2)}</td></tr></tbody></table></div>
        <p class="cap" style="margin:10px 0 0">${E(C.stalledSrc)} Amounts paid are cumulative, not FY2025/26 spending.</p>` : '';
    cHtml = `
      <div class="eb-panel">
        <h3>${E(county)} County education lines</h3>
        <p class="cap">${E(C.unit)}. Counties mainly fund early childhood education (ECDE) and vocational training; teachers in primary and secondary schools are paid nationally through the TSC. These are individual lines, not the full department budget.</p>
        <div style="overflow-x:auto;"><table class="eb-table"><thead><tr><th>Budget line</th><th class="num">FY2025/26</th><th class="num">FY2026/27</th><th class="num">% change</th><th>Status</th><th>Source</th></tr></thead>
        <tbody><tr class="grp"><td colspan="6">Lines with a figure in both years</td></tr>${cmp}
        <tr class="grp"><td colspan="6">Lines with a figure in one year only (no change calculated)</td></tr>${one}</tbody></table></div>
        ${stalledHtml}
        <p class="cap" style="margin:14px 0 0">${E(C.context)}</p>
        <div class="eb-verify"><h4>To confirm before publishing (${E(county)})</h4><ul>${C.verify.map(v => `<li>${E(v)}</li>`).join('')}</ul></div>
      </div>`;
  }

  const sec = document.createElement('div');
  sec.className = 'section';
  sec.id = 'education-budget';
  sec.style.padding = '0 0 28px';
  sec.innerHTML = `<div class="section-hd"><h2>Education Budget</h2><span class="meta">National ${C ? '+ ' + E(county) + ' ' : ''}· FY2025/26 vs FY2026/27</span></div>
    ${cHtml}
    ${natHtml}
    <div class="eb-verify"><h4>To confirm before publishing (national)</h4><ul>${N.verify.map(v => `<li>${E(v)}</li>`).join('')}</ul></div>`;

  // Place after the Budget Analysis section (injected by budget.js); wait briefly for it, else fall back
  function place() {
    const ba = document.getElementById('budget-analysis');
    if (ba) { ba.parentNode.insertBefore(sec, ba.nextSibling); return true; }
    return false;
  }
  if (!place()) {
    let tries = 0;
    const t = setInterval(() => {
      if (place() || ++tries > 30) {
        clearInterval(t);
        if (!sec.parentNode) { const f = main.querySelector('.section'); f && f.nextSibling ? main.insertBefore(sec, f.nextSibling) : main.appendChild(sec); }
      }
    }, 200);
  }
})();