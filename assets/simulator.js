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
      '<button id="dps_country_br" class="dps-sim__segbtn" type="button">Brasil</button>',
      '</div>',
      '<div class="dps-sim__note">Portugal: ced\u00eancia de posi\u00e7\u00e3o (ex.: Lake Towers).<br>Brasil: espa\u00e7o para adicionar outros simuladores e im\u00f3veis.</div>',
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

      // BRASIL
      '<div id="dps_br_section" class="dps-sim__card" style="display:none;">',
      '<div class="dps-sim__title">Simulador Brasil \u2014 Parcelas + Anuidades + Cess\u00e3o</div>',
      // Valor do im\u00f3vel
      '<label class="dps-sim__label">Valor do Im\u00f3vel (R$)</label>',
      '<input id="dps_br_valor" class="dps-sim__input" type="number" value="370000" min="1"/>',
      // Entrada
      '<label class="dps-sim__label">Entrada (m\u00ednimo 10%)</label>',
      '<input id="dps_br_entrada" class="dps-sim__input" type="number" value="37000" min="1"/>',
      // Chaves (readonly)
      '<label class="dps-sim__label">Chaves (10% do valor total \u2014 autom\u00e1tico)</label>',
      '<input id="dps_br_chaves" class="dps-sim__input" type="number" value="37000" readonly style="opacity:0.75;"/>',
      // Parcelas
      '<label class="dps-sim__label">N\u00famero de parcelas mensais</label>',
      '<select id="dps_br_parcelas" class="dps-sim__input"><option value="100">100</option><option value="120">120</option><option value="140" selected>140</option></select>',
      // Anuidade
      '<div class="dps-sim__row2">',
      '<div><label class="dps-sim__label">Valor da Anuidade (R$)</label><input id="dps_br_anuidade" class="dps-sim__input" type="number" value="7333.33" min="0" step="0.01"/></div>',
      '<div><label class="dps-sim__label">N\u00famero de Anuidades</label><input id="dps_br_num_anuidades" class="dps-sim__input" type="number" value="12" min="0" max="60"/></div>',
      '</div>',
      '<hr style="border:0;border-top:1.5px solid #e2e8f0;margin:16px 0;"/>',
      // Valoriza\u00e7\u00e3o e m\u00eas de cess\u00e3o
      '<div class="dps-sim__row2">',
      '<div><label class="dps-sim__label">Valoriza\u00e7\u00e3o ao ano (%)</label><input id="dps_br_valorizacao" class="dps-sim__input" type="number" value="18" min="0" step="0.01"/></div>',
      '<div><label class="dps-sim__label">M\u00eas em que pretende ceder posi\u00e7\u00e3o</label><input id="dps_br_mes_venda" class="dps-sim__input" type="number" value="24" min="0" max="140"/></div>',
      '</div>',
      // C\u00e2mbio
      '<label class="dps-sim__label">Taxa de C\u00e2mbio R$ \u2192 \u20ac (opcional)</label>',
      '<input id="dps_br_cambio" class="dps-sim__input" type="number" placeholder="Ex: 6.50" step="0.01" min="0"/>',
      // Bot\u00f5es
      '<button id="dps_br_calc" class="dps-sim__btn" type="button" style="margin-top:16px;">Calcular</button>',
      '<button id="dps_br_wa" class="dps-sim__btn dps-sim__btn--ghost" type="button" style="margin-top:8px;">&#128232; Enviar por WhatsApp</button>',
      // Resultado
      '<div id="dps_br_resultado" style="margin-top:16px;display:none;">',
      '<hr style="border:0;border-top:1.5px solid #e2e8f0;margin:16px 0;"/>',
      '<div class="dps-sim__title" style="margin-bottom:12px;">Resultado da Simula\u00e7\u00e3o</div>',
      '<div id="dps_br_resultado_html"></div>',
      '</div>',
      '</div>',

      // WhatsApp modal
      '<div id="dps_modal" class="dps-modal" aria-hidden="true">',
      '<div class="dps-modal__backdrop" id="dps_modal_close"></div>',
      '<div class="dps-modal__panel" role="dialog" aria-modal="true">',
      '<div class="dps-modal__top">',
      '<div><div id="dps_modal_title" class="dps-modal__title">Enviar pedido por WhatsApp</div><div class="dps-modal__sub">Preencha os dados e envie-nos a simula\u00e7\u00e3o completa.</div></div>',
      '<button class="dps-modal__x" id="dps_modal_x" type="button" aria-label="Fechar">&#x2715;</button>',
      '</div>',
      '<div class="dps-modal__form">',
      '<label class="dps-sim__label">Nome</label>',
      '<input id="dps_name" class="dps-sim__input" type="text" placeholder="O seu nome"/>',
      '<label class="dps-sim__label">WhatsApp</label>',
      '<input id="dps_user_wa" class="dps-sim__input" type="tel" placeholder="+351 9XX XXX XXX"/>',
      '<label class="dps-sim__label">Pr\u00e9-visualiza\u00e7\u00e3o da mensagem</label>',
      '<div id="dps_msg_preview" class="dps-modal__preview">\u2014</div>',
      '<button id="dps_send_wa" class="dps-modal__send" type="button">Enviar via WhatsApp</button>',
      '</div>',
      '</div>',
      '</div>',

      '</div>', // end dps-sim
      '</div>'  // end wrapper
    ].join('');

    document.body.appendChild(overlay);

    // ── JS ───────────────────────────────────────────────────────────────────
    var WA_TARGET = '351925708456';
    var perspFactor = 1.0; // 1.0 = otimista, 0.8 = conservadora, 0.6 = ultra

    var ptProperties = {
      lake_towers: {
        name: 'Lake Towers',
        upliftPct: 20,
        schedule: [
          { pct: 15, label: '15% \u2014 na assinatura do CPCV (09/01/2026)', date: '2026-01-09' },
          { pct: 5,  label: '5% \u2014 at\u00e9 30/04/2026', date: '2026-04-30' },
          { pct: 10, label: '10% \u2014 infraestruturas (prev. 3\u00ba trim 2026)', date: '2026-09-30' },
          { pct: 10, label: '10% \u2014 laje Piso 5 (prev. 2\u00ba trim 2027)', date: '2027-06-30' },
          { pct: 10, label: '10% \u2014 estrutura bet\u00e3o (prev. 4\u00ba trim 2027)', date: '2027-12-31' },
          { pct: 50, label: '50% \u2014 escritura (data prevista)', date: '2029-01-09' }
        ]
      }
    };

    var euro = new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' });
    var fmtDate = new Intl.DateTimeFormat('pt-PT', { year: 'numeric', month: '2-digit', day: '2-digit' });

    var state = {
      country: 'PT', propertyName: 'Lake Towers',
      buyPrice: 0, annualPct: 0, months: 0,
      simDate: null, saleDate: null,
      baseSale: 0, saleValue: 0, profit: 0,
      investedBySale: 0, roi: 0, paidToday: 0,
      paidPctToday: 0, paidPctSale: 0
    };

    function el(id) { return document.getElementById(id); }

    function parseISO(d) {
      var p = d.split('-').map(Number);
      return new Date(Date.UTC(p[0], p[1] - 1, p[2], 12, 0, 0));
    }
    function todayUTC() {
      var n = new Date();
      return new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), 12, 0, 0));
    }
    function addMonths(date, months) {
      var y = date.getUTCFullYear(), m = date.getUTCMonth(), day = date.getUTCDate();
      var t = new Date(Date.UTC(y, m + months, 1, 12, 0, 0));
      var last = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth() + 1, 0, 12, 0, 0)).getUTCDate();
      t.setUTCDate(Math.min(day, last));
      return t;
    }
    function sumPaidPctUntil(schedule, untilDate) {
      var pct = 0;
      schedule.forEach(function(item) {
        if (parseISO(item.date).getTime() <= untilDate.getTime()) pct += item.pct;
      });
      return pct;
    }

    function setHeader() {
      if (state.country === 'PT') {
        el('dps_header_badge').textContent = 'Portugal';
        el('dps_header_title').textContent = state.propertyName;
        el('dps_header_sub').textContent = 'Ced\u00eancia de posi\u00e7\u00e3o com valoriza\u00e7\u00e3o e plano de pagamentos do im\u00f3vel.';
        el('dps_results_property').textContent = state.propertyName + ' (Portugal)';
      } else {
        el('dps_header_badge').textContent = 'Brasil';
        el('dps_header_title').textContent = 'Simulador Brasil';
        el('dps_header_sub').textContent = 'Parcelas + Anuidades + Cess\u00e3o de posi\u00e7\u00e3o contratual.';
        el('dps_results_property').textContent = 'Brasil';
      }
    }

    function setPerspetiva(factor, btnId) {
      perspFactor = factor;
      var btns = ['dps_persp_opt', 'dps_persp_con', 'dps_persp_ult'];
      var classes = ['is-active-opt', 'is-active-con', 'is-active-ult'];
      var labels = ['Otimista', 'Conservadora', 'Ultra Conservadora'];
      var badgeClasses = ['dps-persp-badge--opt', 'dps-persp-badge--con', 'dps-persp-badge--ult'];
      btns.forEach(function(id, i) {
        var btn = el(id);
        btn.classList.remove('is-active-opt', 'is-active-con', 'is-active-ult');
        if (id === btnId) btn.classList.add(classes[i]);
      });
      var badge = el('dps_persp_badge');
      badge.className = 'dps-persp-badge ' + badgeClasses[btns.indexOf(btnId)];
      badge.textContent = labels[btns.indexOf(btnId)];
      calc();
    }

    function switchCountry(country) {
      state.country = country;
      if (country === 'PT') {
        el('dps_country_pt').classList.add('is-active');
        el('dps_country_br').classList.remove('is-active');
        el('dps_pt_section').style.display = '';
        el('dps_br_section').style.display = 'none';
        var propKey = el('dps_property_pt').value;
        state.propertyName = ptProperties[propKey].name;
        setHeader(); calc();
      } else {
        el('dps_country_br').classList.add('is-active');
        el('dps_country_pt').classList.remove('is-active');
        el('dps_pt_section').style.display = 'none';
        el('dps_br_section').style.display = '';
        setHeader();
      }
    }

    function buildMessage(name, userWa) {
      var lines = [
        'Pedido de simula\u00e7\u00e3o (DPS Imobili\u00e1rio)', '',
        'Pa\u00eds: ' + (state.country === 'PT' ? 'Portugal' : 'Brasil'),
        'Im\u00f3vel: ' + state.propertyName, '',
        'Nome: ' + (name || '-'),
        'WhatsApp: ' + (userWa || '-'), '',
        'Data simula\u00e7\u00e3o: ' + fmtDate.format(state.simDate),
        'Venda em: ' + state.months + ' meses (' + fmtDate.format(state.saleDate) + ')', '',
        'Compra: ' + euro.format(state.buyPrice),
        'Base venda (+20%): ' + euro.format(state.baseSale),
        'Venda estimada: ' + euro.format(state.saleValue),
        'Ganho estimado: ' + euro.format(state.profit),
        'Investido at\u00e9 \u00e0 venda: ' + euro.format(state.investedBySale),
        'ROI: ' + (state.investedBySale > 0 ? (state.roi * 100).toFixed(1) + '%' : '\u2014'), '',
        'J\u00e1 pago at\u00e9 hoje: ' + euro.format(state.paidToday) + ' (' + state.paidPctToday.toFixed(0) + '%)', '',
        'Valores estimados. N\u00e3o constitui proposta contratual.'
      ];
      return lines.join('\n');
    }

    function openModal() {
      var modal = el('dps_modal');
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      el('dps_msg_preview').textContent = buildMessage(el('dps_name').value.trim(), el('dps_user_wa').value.trim());
    }
    function closeModal() {
      var modal = el('dps_modal');
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
    }

    function exportResultsAsImage() {
      var area = el('dps_results_card');
      if (!area) return;
      if (typeof html2canvas === 'undefined') { alert('Biblioteca n\u00e3o carregou.'); return; }
      var prevBg = area.style.background;
      area.style.background = '#ffffff';
      html2canvas(area, { scale: 2, backgroundColor: '#ffffff', useCORS: true }).then(function(canvas) {
        area.style.background = prevBg;
        var link = document.createElement('a');
        var now = new Date();
        var stamp = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
        link.download = 'simulacao-dps-' + stamp + '.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      }).catch(function() { area.style.background = prevBg; alert('N\u00e3o foi poss\u00edvel exportar.'); });
    }

    function calc() {
      if (state.country !== 'PT') return;
      var key = el('dps_property_pt').value;
      var prop = ptProperties[key];
      var buyPrice = Math.max(0, Number(el('dps_buy_price').value || 0));
      var annualPct = Math.max(0, Number(el('dps_growth').value || 0));
      var months = Math.max(0, Math.floor(Number(el('dps_months').value || 0)));
      var simDate = todayUTC();
      var saleDate = addMonths(simDate, months);
      var uplift = (prop.upliftPct || 0) / 100;
      var baseSaleRaw = buyPrice * (1 + uplift);
      var monthlyRate = (annualPct / 100) / 12;
      var saleValueRaw = baseSaleRaw * (1 + monthlyRate * months);
      var profitRaw = saleValueRaw - buyPrice;
      var paidPctSale = sumPaidPctUntil(prop.schedule, saleDate);
      var investedBySale = buyPrice * (paidPctSale / 100);
      var roiRaw = investedBySale > 0 ? (profitRaw / investedBySale) : 0;
      var paidPctToday = sumPaidPctUntil(prop.schedule, simDate);
      var paidToday = buyPrice * (paidPctToday / 100);

      // Aplicar perspetiva (só nos valores estimados, não no preço de compra nem pagamentos)
      var baseSale = baseSaleRaw * perspFactor + buyPrice * (1 - perspFactor);
      var saleValue = buyPrice + (saleValueRaw - buyPrice) * perspFactor;
      var profit = saleValue - buyPrice;
      var roi = investedBySale > 0 ? (profit / investedBySale) : 0;

      el('dps_today').textContent = fmtDate.format(simDate);
      el('dps_sale_date').textContent = fmtDate.format(saleDate);
      el('dps_buy_out').textContent = euro.format(buyPrice);
      el('dps_base_sale').textContent = euro.format(baseSale);
      el('dps_sale_value').textContent = euro.format(saleValue);
      var profitEl = el('dps_profit');
      profitEl.textContent = euro.format(profit);
      profitEl.style.color = profit >= 0 ? '#0a7a2f' : '#b00020';
      el('dps_roi').textContent = investedBySale > 0 ? (roi * 100).toFixed(1) + '%' : '\u2014';
      el('dps_paid_today').textContent = euro.format(paidToday) + ' (' + paidPctToday.toFixed(0) + '%)';
      el('dps_invested_by_sale').textContent = euro.format(investedBySale) + ' (' + paidPctSale.toFixed(0) + '%)';

      var done = [], next = [];
      prop.schedule.forEach(function(item) {
        var due = parseISO(item.date);
        var amount = buyPrice * (item.pct / 100);
        var line = '<li><b>' + item.pct + '%</b> \u2014 ' + item.label + ' (<span>' + fmtDate.format(due) + '</span>) \u2014 <b>' + euro.format(amount) + '</b></li>';
        if (due.getTime() <= simDate.getTime()) done.push(line); else next.push(line);
      });
      el('dps_schedule').innerHTML =
        '<div style="font-weight:900;font-size:12.5px;opacity:.75;">Pagamentos que j\u00e1 deveriam estar pagos (at\u00e9 hoje)</div>' +
        (done.length ? '<ul>' + done.join('') + '</ul>' : '<div style="opacity:.75;margin-top:6px;">Nenhum pagamento contado at\u00e9 hoje.</div>') +
        '<div style="margin-top:10px;font-weight:900;font-size:12.5px;opacity:.75;">Pr\u00f3ximos pagamentos (ap\u00f3s hoje)</div>' +
        (next.length ? '<ul>' + next.join('') + '</ul>' : '<div style="opacity:.75;margin-top:6px;">Sem pagamentos futuros.</div>');

      state.propertyName = prop.name; state.buyPrice = buyPrice; state.annualPct = annualPct;
      state.months = months; state.simDate = simDate; state.saleDate = saleDate;
      state.baseSale = baseSale; state.saleValue = saleValue; state.profit = profit;
      state.investedBySale = investedBySale; state.roi = roi; state.paidToday = paidToday;
      state.paidPctToday = paidPctToday; state.paidPctSale = paidPctSale;
      setHeader();
      var modal = el('dps_modal');
      if (modal && modal.classList.contains('is-open')) {
        el('dps_msg_preview').textContent = buildMessage(el('dps_name').value.trim(), el('dps_user_wa').value.trim());
      }
    }

    // ── Lógica Brasil ─────────────────────────────────────────────────────────
    var brl = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    function moedaBR(v, isEuro) {
      return (isEuro ? '€ ' : 'R$ ') + brl.format(Number(v) || 0);
    }
    function clampBR(n, min, max) { return Math.max(min, Math.min(max, n)); }
    function syncChavesBR() {
      var val = parseFloat(el('dps_br_valor').value) || 0;
      el('dps_br_chaves').value = (val * 0.10).toFixed(2);
    }
    function calcularBR() {
      syncChavesBR();
      var valorImovel = parseFloat(el('dps_br_valor').value) || 0;
      var entrada = parseFloat(el('dps_br_entrada').value) || 0;
      var chaves = valorImovel * 0.10;
      var parcelas = parseInt(el('dps_br_parcelas').value, 10) || 140;
      var anuidade = parseFloat(el('dps_br_anuidade').value) || 0;
      var numAnuidades = parseInt(el('dps_br_num_anuidades').value, 10) || 0;
      var valorizacaoAno = parseFloat(el('dps_br_valorizacao').value) || 0;
      var mesVenda = clampBR(parseInt(el('dps_br_mes_venda').value, 10) || 0, 0, parcelas);
      var cambio = parseFloat(el('dps_br_cambio').value);
      var isEuro = !isNaN(cambio) && cambio > 0;
      var conv = function(v) { return isEuro ? (v / cambio) : v; };

      if (valorImovel <= 0) return;
      if (entrada < valorImovel * 0.10) {
        alert('A entrada deve ser no m\u00ednimo 10% do valor do im\u00f3vel.');
        return;
      }

      var mensalidade = (valorImovel - entrada - chaves) / parcelas;
      var anuidadesPagas = clampBR(Math.floor(mesVenda / 12), 0, numAnuidades);
      var totalAnuidadesPagas = anuidadesPagas * anuidade;
      var mensalidadesPagas = mesVenda * mensalidade;
      var chavesPagas = (mesVenda >= parcelas) ? chaves : 0;
      var investidoAte = entrada + mensalidadesPagas + totalAnuidadesPagas + chavesPagas;
      var taxaMensal = (valorizacaoAno / 100) / 12;
      var valorEstimado = valorImovel * (1 + taxaMensal * mesVenda);
      var lucro = valorEstimado - investidoAte;
      var mesesRestantes = Math.max(parcelas - mesVenda, 0);
      var mensalidadesRestantes = mesesRestantes * mensalidade;
      var anuidadesRestantes = Math.max(numAnuidades - anuidadesPagas, 0);
      var totalAnuidadesRestantes = anuidadesRestantes * anuidade;
      var chavesRestantes = (mesVenda < parcelas) ? chaves : 0;
      var saldoRestante = mensalidadesRestantes + totalAnuidadesRestantes + chavesRestantes;

      // Guardar para WhatsApp
      el('dps_br_resultado')._brState = {
        valorImovel: valorImovel, entrada: entrada, chaves: chaves,
        parcelas: parcelas, mensalidade: mensalidade,
        anuidade: anuidade, numAnuidades: numAnuidades,
        anuidadesPagas: anuidadesPagas, totalAnuidadesPagas: totalAnuidadesPagas,
        mesVenda: mesVenda, valorizacaoAno: valorizacaoAno,
        investidoAte: investidoAte, valorEstimado: valorEstimado, lucro: lucro,
        saldoRestante: saldoRestante, isEuro: isEuro, cambio: cambio,
        mensalidadesRestantes: mensalidadesRestantes,
        anuidadesRestantes: anuidadesRestantes, totalAnuidadesRestantes: totalAnuidadesRestantes,
        chavesRestantes: chavesRestantes
      };

      var html = '<table style="width:100%;border-collapse:collapse;font-size:14px;">' +
        '<tr><td style="padding:6px 0;color:#64748b;">Valor do Im\u00f3vel</td><td style="text-align:right;font-weight:700;">' + moedaBR(conv(valorImovel), isEuro) + '</td></tr>' +
        '<tr><td style="padding:6px 0;color:#64748b;">Entrada</td><td style="text-align:right;font-weight:700;">' + moedaBR(conv(entrada), isEuro) + '</td></tr>' +
        '<tr><td style="padding:6px 0;color:#64748b;">Chaves (10%)</td><td style="text-align:right;font-weight:700;">' + moedaBR(conv(chaves), isEuro) + '</td></tr>' +
        '<tr><td style="padding:6px 0;color:#64748b;">Mensalidade calculada</td><td style="text-align:right;font-weight:700;">' + moedaBR(conv(mensalidade), isEuro) + '</td></tr>' +
        '<tr><td style="padding:6px 0;color:#64748b;">Anuidades pagas at\u00e9 m\u00eas ' + mesVenda + ' (' + anuidadesPagas + ')</td><td style="text-align:right;font-weight:700;">' + moedaBR(conv(totalAnuidadesPagas), isEuro) + '</td></tr>' +
        '<tr style="border-top:2px solid #e2e8f0;"><td style="padding:8px 0;font-weight:800;">Investido at\u00e9 ao m\u00eas ' + mesVenda + '</td><td style="text-align:right;font-weight:800;font-size:16px;">' + moedaBR(conv(investidoAte), isEuro) + '</td></tr>' +
        '<tr><td style="padding:6px 0;color:#64748b;">Valoriza\u00e7\u00e3o ao ano</td><td style="text-align:right;font-weight:700;">' + valorizacaoAno.toFixed(2) + '%</td></tr>' +
        '<tr><td style="padding:6px 0;color:#64748b;">Valor estimado no m\u00eas ' + mesVenda + '</td><td style="text-align:right;font-weight:700;">' + moedaBR(conv(valorEstimado), isEuro) + '</td></tr>' +
        '<tr style="border-top:2px solid #0f172a;background:#f0fdf4;"><td style="padding:8px 0;font-weight:800;color:#16a34a;">Lucro estimado na cess\u00e3o</td><td style="text-align:right;font-weight:800;font-size:18px;color:#16a34a;">' + moedaBR(conv(lucro), isEuro) + '</td></tr>' +
        '</table>' +
        '<div style="margin-top:14px;padding:12px;background:#f8fafc;border-radius:8px;font-size:13px;">' +
        '<strong>O novo comprador paga ao investidor:</strong><br>' +
        moedaBR(conv(investidoAte), isEuro) + ' (reembolso) + ' + moedaBR(conv(lucro), isEuro) + ' (valoriza\u00e7\u00e3o) = <strong>' + moedaBR(conv(valorEstimado), isEuro) + '</strong><br><br>' +
        '<strong>O novo comprador assume o saldo restante:</strong><br>' +
        '\u2022 Mensalidades restantes (' + mesesRestantes + '): ' + moedaBR(conv(mensalidadesRestantes), isEuro) + '<br>' +
        '\u2022 Anuidades restantes (' + anuidadesRestantes + '): ' + moedaBR(conv(totalAnuidadesRestantes), isEuro) + '<br>' +
        '\u2022 Chaves restantes: ' + moedaBR(conv(chavesRestantes), isEuro) + '<br>' +
        '<strong>Saldo restante total: ' + moedaBR(conv(saldoRestante), isEuro) + '</strong>' +
        '</div>';

      el('dps_br_resultado_html').innerHTML = html;
      el('dps_br_resultado').style.display = '';
    }
    function enviarWhatsAppBR() {
      var res = el('dps_br_resultado');
      if (!res._brState) { calcularBR(); }
      var s = res._brState;
      if (!s) return;
      var msg = 'Simula\u00e7\u00e3o Brasil \u2014 DPS Imobili\u00e1rio\n\n' +
        'Im\u00f3vel: R$ ' + s.valorImovel.toLocaleString('pt-BR') + '\n' +
        'Entrada: R$ ' + s.entrada.toLocaleString('pt-BR') + '\n' +
        'Chaves (10%): R$ ' + s.chaves.toLocaleString('pt-BR') + '\n' +
        'Parcelas: ' + s.parcelas + '\n' +
        'Mensalidade calculada: R$ ' + s.mensalidade.toLocaleString('pt-BR', {minimumFractionDigits:2,maximumFractionDigits:2}) + '\n\n' +
        'Anuidade: R$ ' + s.anuidade.toLocaleString('pt-BR', {minimumFractionDigits:2,maximumFractionDigits:2}) + '\n' +
        'N\u00ba Anuidades: ' + s.numAnuidades + '\n' +
        'Anuidades pagas at\u00e9 m\u00eas ' + s.mesVenda + ': ' + s.anuidadesPagas + ' (R$ ' + s.totalAnuidadesPagas.toLocaleString('pt-BR') + ')\n\n' +
        'Ceder posi\u00e7\u00e3o no m\u00eas: ' + s.mesVenda + '\n' +
        'Valoriza\u00e7\u00e3o/ano: ' + s.valorizacaoAno.toFixed(2) + '%\n' +
        'Investido at\u00e9 ao m\u00eas ' + s.mesVenda + ': R$ ' + s.investidoAte.toLocaleString('pt-BR') + '\n' +
        'Valor estimado no m\u00eas ' + s.mesVenda + ': R$ ' + s.valorEstimado.toLocaleString('pt-BR') + '\n' +
        'Lucro estimado: R$ ' + s.lucro.toLocaleString('pt-BR') + '\n\n' +
        'Quero mais informa\u00e7\u00f5es.';
      var url = 'https://wa.me/351925708456?text=' + encodeURIComponent(msg);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    // ── Event Listeners ───────────────────────────────────────────────────────
    el('dps_close_btn').addEventListener('click', function() { el('dps-sim-overlay').style.display = 'none'; });
    el('dps_country_pt').addEventListener('click', function() { switchCountry('PT'); });
    el('dps_country_br').addEventListener('click', function() { switchCountry('BR'); });
    // Brasil listeners
    el('dps_br_valor').addEventListener('input', function() { syncChavesBR(); calcularBR(); });
    el('dps_br_entrada').addEventListener('input', calcularBR);
    el('dps_br_parcelas').addEventListener('change', calcularBR);
    el('dps_br_anuidade').addEventListener('input', calcularBR);
    el('dps_br_num_anuidades').addEventListener('input', calcularBR);
    el('dps_br_valorizacao').addEventListener('input', calcularBR);
    el('dps_br_mes_venda').addEventListener('input', calcularBR);
    el('dps_br_cambio').addEventListener('input', calcularBR);
    el('dps_br_calc').addEventListener('click', calcularBR);
    el('dps_br_wa').addEventListener('click', enviarWhatsAppBR);
    el('dps_calc').addEventListener('click', calc);
    ['dps_property_pt', 'dps_buy_price', 'dps_growth', 'dps_months'].forEach(function(id) {
      el(id).addEventListener('input', calc);
      el(id).addEventListener('change', calc);
    });
    el('dps_persp_opt').addEventListener('click', function() { setPerspetiva(1.0, 'dps_persp_opt'); });
    el('dps_persp_con').addEventListener('click', function() { setPerspetiva(0.8, 'dps_persp_con'); });
    el('dps_persp_ult').addEventListener('click', function() { setPerspetiva(0.6, 'dps_persp_ult'); });
    el('dps_request').addEventListener('click', openModal);
    el('dps_modal_close').addEventListener('click', closeModal);
    el('dps_modal_x').addEventListener('click', closeModal);
    el('dps_name').addEventListener('input', function() {
      var modal = el('dps_modal');
      if (modal && modal.classList.contains('is-open'))
        el('dps_msg_preview').textContent = buildMessage(el('dps_name').value.trim(), el('dps_user_wa').value.trim());
    });
    el('dps_user_wa').addEventListener('input', function() {
      var modal = el('dps_modal');
      if (modal && modal.classList.contains('is-open'))
        el('dps_msg_preview').textContent = buildMessage(el('dps_name').value.trim(), el('dps_user_wa').value.trim());
    });
    el('dps_send_wa').addEventListener('click', function() {
      var name = el('dps_name').value.trim();
      var userWa = el('dps_user_wa').value.trim();
      if (!name) { alert('Por favor, indique o seu nome.'); return; }
      if (!userWa) { alert('Por favor, indique o seu WhatsApp.'); return; }
      var msg = buildMessage(name, userWa);
      var url = 'https://wa.me/' + WA_TARGET + '?text=' + encodeURIComponent(msg);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
    el('dps_export').addEventListener('click', exportResultsAsImage);

    // Init
    switchCountry('PT');
  }

  // ── Aguardar React ──────────────────────────────────────────────────────────
  function _waitForReact() {
    var root = document.getElementById('root');
    if (root && root.children.length > 0) {
      setTimeout(_initSimulator, 300);
      return;
    }
    var obs = new MutationObserver(function(m, o) {
      var r = document.getElementById('root');
      if (r && r.children.length > 0) {
        o.disconnect();
        setTimeout(_initSimulator, 300);
      }
    });
    obs.observe(document.body, { childList: true, subtree: true });
    setTimeout(function() { obs.disconnect(); _initSimulator(); }, 6000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _waitForReact);
  } else {
    _waitForReact();
  }

  // ── Interceptar clique no botão de simulação (fallback global) ────────────
  // Funciona mesmo que o onClick do React não dispare no mobile
  document.addEventListener('click', function(e) {
    var t = e.target;
    // Subir na árvore DOM até 5 níveis para encontrar o link/botão
    for (var i = 0; i < 5; i++) {
      if (!t) break;
      var txt = (t.textContent || '').trim();
      var href = (t.getAttribute && t.getAttribute('href')) || '';
      // Detetar pelo texto ou pelo href antigo (inclui brasil.grupo-dps.com e #simulador)
      if (
        txt.indexOf('simula') !== -1 && txt.indexOf('ced') !== -1 ||
        href.indexOf('simulator') !== -1 ||
        href.indexOf('brasil.grupo-dps.com') !== -1 ||
        href.indexOf('#simulador') !== -1
      ) {
        e.preventDefault();
        e.stopPropagation();
        var overlay = document.getElementById('dps-sim-overlay');
        if (overlay) {
          overlay.style.display = 'flex';
        } else {
          // Modal ainda não foi injetado — injetar agora e abrir
          _initSimulator();
          setTimeout(function() {
            var o = document.getElementById('dps-sim-overlay');
            if (o) o.style.display = 'flex';
          }, 100);
        }
        return;
      }
      t = t.parentElement;
    }
  }, true); // capture=true para interceptar antes do React
})();
