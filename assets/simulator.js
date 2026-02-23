// Simulador DPS - Lake Towers
// Ficheiro independente — não interfere com o React
(function () {
  'use strict';

  function _initSimulator() {
    if (document.getElementById('dps-sim-overlay')) return;

    // ── CSS ──────────────────────────────────────────────────────────────────
    var style = document.createElement('style');
    style.textContent = [
      '.dps-sim{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#0f172a;max-width:1060px;margin:0 auto;display:flex;flex-direction:column;gap:16px;}',
      '.dps-sim__card{background:#fff;border-radius:16px;padding:24px;box-shadow:0 2px 16px rgba(0,0,0,.08);}',
      '.dps-sim__card--results{background:#f8fafc;}',
      '.dps-sim__header{background:linear-gradient(135deg,#0f172a,#1e3a5f);color:#fff;border-radius:16px;padding:24px;display:flex;align-items:center;justify-content:space-between;gap:16px;}',
      '.dps-sim__brand{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.7;margin-bottom:4px;}',
      '.dps-sim__headline{font-size:22px;font-weight:800;}',
      '.dps-sim__sub{font-size:13px;opacity:.75;margin-top:4px;}',
      '.dps-sim__badge{background:rgba(255,255,255,.15);border-radius:8px;padding:8px 16px;font-size:13px;font-weight:700;white-space:nowrap;}',
      '.dps-sim__title{font-size:15px;font-weight:800;margin-bottom:14px;color:#0f172a;}',
      '.dps-sim__label{display:block;font-size:12px;font-weight:600;color:#64748b;margin-bottom:4px;margin-top:12px;}',
      '.dps-sim__input{width:100%;box-sizing:border-box;padding:10px 12px;border:1.5px solid #e2e8f0;border-radius:10px;font-size:14px;color:#0f172a;background:#fff;outline:none;transition:border .2s;}',
      '.dps-sim__input:focus{border-color:#3b82f6;}',
      '.dps-sim__seg{display:flex;gap:8px;flex-wrap:wrap;}',
      '.dps-sim__segbtn{padding:8px 18px;border-radius:8px;border:1.5px solid #e2e8f0;background:#fff;font-size:13px;font-weight:600;cursor:pointer;transition:all .2s;}',
      '.dps-sim__segbtn.is-active{background:#0f172a;color:#fff;border-color:#0f172a;}',
      '.dps-sim__btn{width:100%;padding:13px;border-radius:12px;background:#0f172a;color:#fff;font-size:15px;font-weight:700;border:none;cursor:pointer;margin-top:16px;transition:background .2s;}',
      '.dps-sim__btn:hover{background:#1e293b;}',
      '.dps-sim__btn--ghost{background:#fff;color:#0f172a;border:1.5px solid #0f172a;}',
      '.dps-sim__btn--ghost:hover{background:#f1f5f9;}',
      '.dps-sim__hint{font-size:11.5px;color:#64748b;margin-top:10px;line-height:1.6;}',
      '.dps-sim__grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}',
      '@media(max-width:680px){.dps-sim__grid{grid-template-columns:1fr;}}',
      '.dps-sim__row2{display:grid;grid-template-columns:1fr 1fr;gap:12px;}',
      '.dps-sim__note{font-size:13px;color:#64748b;line-height:1.6;}',
      '.dps-sim__resultsHead{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;padding-bottom:12px;border-bottom:1.5px solid #e2e8f0;}',
      '.dps-sim__resultsBrand{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#64748b;}',
      '.dps-sim__resultsTitle{font-size:14px;font-weight:700;color:#0f172a;}',
      '.dps-sim__pillrow{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px;}',
      '.dps-sim__pill{background:#f1f5f9;border-radius:8px;padding:8px 12px;flex:1;min-width:120px;}',
      '.dps-sim__pillk{font-size:11px;color:#64748b;font-weight:600;}',
      '.dps-sim__pillv{font-size:13px;font-weight:700;color:#0f172a;margin-top:2px;}',
      '.dps-sim__kpi{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:10px;}',
      '.dps-sim__kpi2{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;}',
      '.dps-sim__kpiItem{background:#f8fafc;border-radius:10px;padding:12px;}',
      '.dps-sim__kpiItem--primary{background:#0f172a;color:#fff;}',
      '.dps-sim__kpiItem2{background:#f8fafc;border-radius:10px;padding:12px;}',
      '.dps-sim__kpiLabel{font-size:11px;font-weight:600;opacity:.7;margin-bottom:4px;}',
      '.dps-sim__kpiValue{font-size:14px;font-weight:700;}',
      '.dps-sim__kpiValue--big{font-size:17px;}',
      '.dps-sim__divider{height:1.5px;background:#e2e8f0;margin:14px 0;}',
      '.dps-sim__paybox{}',
      '.dps-sim__paytitle{font-size:13px;font-weight:700;margin-bottom:10px;}',
      '.dps-sim__paygrid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;}',
      '.dps-sim__payitem{background:#f1f5f9;border-radius:8px;padding:10px 12px;}',
      '.dps-sim__payk{font-size:11px;color:#64748b;font-weight:600;}',
      '.dps-sim__payv{font-size:14px;font-weight:700;color:#0f172a;margin-top:2px;}',
      '.dps-sim__schedule{font-size:12.5px;line-height:1.7;color:#334155;}',
      '.dps-sim__schedule ul{margin:6px 0 0 16px;padding:0;}',
      '.dps-sim__schedule li{margin-bottom:3px;}',
      '.dps-sim__actions{display:flex;gap:10px;margin-top:16px;}',
      '.dps-sim__actions--2{display:grid;grid-template-columns:1fr 1fr;}',
      '.dps-sim__disclaimer{font-size:11px;color:#94a3b8;margin-top:12px;text-align:center;}',
      '.dps-modal{display:none;position:fixed;inset:0;z-index:99999;align-items:center;justify-content:center;}',
      '.dps-modal.is-open{display:flex;}',
      '.dps-modal__backdrop{position:absolute;inset:0;background:rgba(2,6,23,.6);}',
      '.dps-modal__panel{position:relative;z-index:1;background:#fff;border-radius:16px;padding:28px;width:min(480px,92vw);max-height:90vh;overflow-y:auto;box-shadow:0 8px 40px rgba(0,0,0,.2);}',
      '.dps-modal__top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:18px;}',
      '.dps-modal__title{font-size:17px;font-weight:800;color:#0f172a;}',
      '.dps-modal__sub{font-size:13px;color:#64748b;margin-top:3px;}',
      '.dps-modal__x{background:none;border:none;font-size:20px;cursor:pointer;color:#64748b;padding:0 4px;}',
      '.dps-modal__form{display:flex;flex-direction:column;gap:4px;}',
      '.dps-modal__preview{background:#f8fafc;border-radius:10px;padding:12px;font-size:12px;color:#334155;white-space:pre-wrap;line-height:1.6;max-height:180px;overflow-y:auto;margin-top:8px;}',
      '.dps-modal__send{width:100%;padding:13px;border-radius:12px;background:#25d366;color:#fff;font-size:15px;font-weight:700;border:none;cursor:pointer;margin-top:16px;}',
      '.dps-persp-bar{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;}',
      '.dps-persp-btn{flex:1;min-width:100px;padding:10px 8px;border-radius:10px;border:1.5px solid #e2e8f0;background:#fff;font-size:12px;font-weight:700;cursor:pointer;text-align:center;transition:all .2s;line-height:1.3;}',
      '.dps-persp-btn.is-active-opt{background:#0a7a2f;color:#fff;border-color:#0a7a2f;}',
      '.dps-persp-btn.is-active-con{background:#b45309;color:#fff;border-color:#b45309;}',
      '.dps-persp-btn.is-active-ult{background:#b00020;color:#fff;border-color:#b00020;}',
      '.dps-persp-badge{display:inline-block;padding:3px 10px;border-radius:6px;font-size:11px;font-weight:700;margin-left:8px;vertical-align:middle;}',
      '.dps-persp-badge--opt{background:#d1fae5;color:#065f46;}',
      '.dps-persp-badge--con{background:#fef3c7;color:#92400e;}',
      '.dps-persp-badge--ult{background:#fee2e2;color:#991b1b;}'
    ].join('');
    document.head.appendChild(style);

    // ── HTML ─────────────────────────────────────────────────────────────────
    var overlay = document.createElement('div');
    overlay.id = 'dps-sim-overlay';
    overlay.setAttribute('style', 'display:none;position:fixed;inset:0;z-index:99998;background:rgba(2,6,23,0.75);overflow-y:auto;padding:20px 12px;align-items:flex-start;justify-content:center;');

    overlay.innerHTML = [
      '<div style="position:relative;width:min(1060px,100%);margin:0 auto;">',
      '<button id="dps_close_btn" style="position:absolute;top:-10px;right:0;z-index:99999;background:#fff;border:1px solid rgba(15,23,42,.2);border-radius:50%;width:38px;height:38px;font-size:18px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;">&#x2715;</button>',
      '<div id="dps-sim" class="dps-sim">',

      // HEADER
      '<div class="dps-sim__header">',
      '<div>',
      '<div class="dps-sim__brand">Simula\u00e7\u00e3o DPS Imobili\u00e1rio</div>',
      '<div class="dps-sim__headline" id="dps_header_title">\u2014</div>',
      '<div class="dps-sim__sub" id="dps_header_sub">Selecione a simula\u00e7\u00e3o pretendida para come\u00e7ar.</div>',
      '</div>',
      '<div class="dps-sim__badge" id="dps_header_badge">\u2014</div>',
      '</div>',

      // STEP 1
      '<div class="dps-sim__card">',
      '<div class="dps-sim__title">Simula\u00e7\u00e3o pretendida</div>',
      '<label class="dps-sim__label">Escolher pa\u00eds</label>',
      '<div class="dps-sim__seg">',
      '<button id="dps_country_pt" class="dps-sim__segbtn is-active" type="button">Portugal</button>',
      '</div>',
      '</div>',

      // PORTUGAL GRID
      '<div id="dps_pt_section" class="dps-sim__grid">',

      // Inputs card
      '<div class="dps-sim__card">',
      '<div class="dps-sim__title">Dados da simula\u00e7\u00e3o (Portugal)</div>',
      '<label class="dps-sim__label">Escolher im\u00f3vel</label>',
      '<select id="dps_property_pt" class="dps-sim__input"><option value="lake_towers">Lake Towers</option></select>',
      '<label class="dps-sim__label">Valor de compra do im\u00f3vel</label>',
      '<input id="dps_buy_price" class="dps-sim__input" type="number" min="0" step="1000" value="200000"/>',
      '<div class="dps-sim__row2">',
      '<div><label class="dps-sim__label">% de crescimento ao ano</label><input id="dps_growth" class="dps-sim__input" type="number" min="0" step="0.1" value="8"/></div>',
      '<div><label class="dps-sim__label">Meses at\u00e9 vender</label><input id="dps_months" class="dps-sim__input" type="number" min="0" step="1" value="14"/></div>',
      '</div>',

      // Perspetiva bar
      '<div style="margin-top:16px;"><div class="dps-sim__label" style="margin-top:0;">Perspetiva de valoriza\u00e7\u00e3o</div>',
      '<div class="dps-persp-bar">',
      '<button id="dps_persp_opt" class="dps-persp-btn is-active-opt" type="button">\u2728 Otimista<br><span style="font-weight:400;font-size:11px;">Valores base</span></button>',
      '<button id="dps_persp_con" class="dps-persp-btn" type="button">\ud83d\udcc9 Conservadora<br><span style="font-weight:400;font-size:11px;">-20% sobre otimista</span></button>',
      '<button id="dps_persp_ult" class="dps-persp-btn" type="button">\ud83d\udee1\ufe0f Ultra Conservadora<br><span style="font-weight:400;font-size:11px;">-40% sobre otimista</span></button>',
      '</div></div>',

      '<button id="dps_calc" class="dps-sim__btn" type="button">Calcular</button>',
      '<div class="dps-sim__hint"><b>Venda estimada</b> = (Compra + <b>20%</b>) \u00d7 (1 + (anual/12) \u00d7 meses).<br><b>Ganho</b> = Venda \u2212 Compra.<br><b>ROI</b> = Ganho / <b>Investimento realizado</b> (pagamentos \u2264 data da venda).</div>',
      '</div>',

      // Results card
      '<div class="dps-sim__card dps-sim__card--results" id="dps_results_card">',
      '<div class="dps-sim__resultsHead">',
      '<div class="dps-sim__resultsBrand">Simula\u00e7\u00e3o DPS Imobili\u00e1rio</div>',
      '<div class="dps-sim__resultsTitle" id="dps_results_property">\u2014</div>',
      '</div>',
      '<div class="dps-sim__title">Resultados <span id="dps_persp_badge" class="dps-persp-badge dps-persp-badge--opt">Otimista</span></div>',
      '<div class="dps-sim__pillrow">',
      '<div class="dps-sim__pill"><div class="dps-sim__pillk">Data da simula\u00e7\u00e3o</div><div class="dps-sim__pillv" id="dps_today">\u2014</div></div>',
      '<div class="dps-sim__pill"><div class="dps-sim__pillk">Data estimada da venda</div><div class="dps-sim__pillv" id="dps_sale_date">\u2014</div></div>',
      '</div>',
      '<div class="dps-sim__kpi">',
      '<div class="dps-sim__kpiItem"><div class="dps-sim__kpiLabel">Compra</div><div class="dps-sim__kpiValue" id="dps_buy_out">\u2014</div></div>',
      '<div class="dps-sim__kpiItem"><div class="dps-sim__kpiLabel">Base venda (+20%)</div><div class="dps-sim__kpiValue" id="dps_base_sale">\u2014</div></div>',
      '<div class="dps-sim__kpiItem dps-sim__kpiItem--primary"><div class="dps-sim__kpiLabel">Venda estimada</div><div class="dps-sim__kpiValue dps-sim__kpiValue--big" id="dps_sale_value">\u2014</div></div>',
      '</div>',
      '<div class="dps-sim__kpi2">',
      '<div class="dps-sim__kpiItem2"><div class="dps-sim__kpiLabel">Ganho estimado</div><div class="dps-sim__kpiValue dps-sim__kpiValue--big" id="dps_profit">\u2014</div></div>',
      '<div class="dps-sim__kpiItem2"><div class="dps-sim__kpiLabel">ROI (ganho / investido)</div><div class="dps-sim__kpiValue dps-sim__kpiValue--big" id="dps_roi">\u2014</div></div>',
      '</div>',
      '<div class="dps-sim__divider"></div>',
      '<div class="dps-sim__paybox">',
      '<div class="dps-sim__paytitle">Pagamentos (plano do im\u00f3vel)</div>',
      '<div class="dps-sim__paygrid">',
      '<div class="dps-sim__payitem"><div class="dps-sim__payk">J\u00e1 pago at\u00e9 hoje</div><div class="dps-sim__payv" id="dps_paid_today">\u2014</div></div>',
      '<div class="dps-sim__payitem"><div class="dps-sim__payk">Investimento realizado at\u00e9 vender</div><div class="dps-sim__payv" id="dps_invested_by_sale">\u2014</div></div>',
      '</div>',
      '<div id="dps_schedule" class="dps-sim__schedule">\u2014</div>',
      '</div>',
      '<div class="dps-sim__actions dps-sim__actions--2">',
      '<button id="dps_request" class="dps-sim__btn dps-sim__btn--ghost" type="button">Fazer pedido</button>',
      '<button id="dps_export" class="dps-sim__btn" type="button">Exportar imagem</button>',
      '</div>',
      '<div class="dps-sim__disclaimer">Valores estimados de acordo com os dados colocados no simulador. N\u00e3o constitui proposta contratual.</div>',
      '</div>',

      '</div>', // end grid

