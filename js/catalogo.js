/*
 * Catálogo Esdra Cosméticos: monta a página a partir de window.CAMPANHA
 * (definida em campanhas/atual.js). Não precisa editar este arquivo para
 * abrir uma campanha nova: basta trocar o arquivo da campanha.
 *
 * Modo campanha: há kits, ativa !== false e hoje está entre inicio e fim.
 * Modo neutro:   qualquer outro caso (página-ponte para a loja e o WhatsApp).
 * Prévia:        index.html?campanha=2026-06-namorados carrega
 *                campanhas/2026-06-namorados.js ignorando datas e "ativa".
 */
(function () {
  'use strict';

  var PADRAO = {
    loja: 'Esdra Cosméticos',
    cidade: 'Valparaíso/SP',
    whatsapp: '5518991459429',
    lojaOnline: 'https://www.esdracosmeticos.com.br'
  };

  var ICONE_WHATS = '<svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  var GENEROS = {
    f: 'feminino', feminino: 'feminino',
    m: 'masculino', masculino: 'masculino',
    u: 'unissex', unissex: 'unissex'
  };
  var ROTULO_FILTRO = { feminino: 'Femininos', masculino: 'Masculinos', unissex: 'Unissex' };

  // ---------- utilidades ----------
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function reais(v) {
    if (v == null || v === '') return '';
    if (typeof v === 'number') return 'R$ ' + v.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    var t = String(v).trim();
    return /^R\$/.test(t) ? t : 'R$ ' + t;
  }
  function hojeISO() {
    var d = new Date();
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }
  function dataBR(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
    return m ? m[3] + '/' + m[2] + '/' + m[1] : (iso || '');
  }
  function linkWhats(numero, msg) {
    return 'https://wa.me/' + numero + (msg ? '?text=' + encodeURIComponent(msg) : '');
  }
  function hexParaRgba(hex, a) {
    var m = /^#?([0-9a-f]{6})$/i.exec(hex || '');
    if (!m) return null;
    var n = parseInt(m[1], 16);
    return 'rgba(' + (n >> 16) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
  }

  // ---------- decisão do modo ----------
  function motivoNeutro(c, previa) {
    if (!c) return 'sem arquivo de campanha';
    if (!c.kits || !c.kits.length) return 'campanha sem kits';
    if (previa) return null;
    if (c.ativa === false) return 'campanha desligada (ativa: false)';
    var hoje = hojeISO();
    if (c.inicio && hoje < c.inicio) return 'campanha ainda não começou';
    if (c.fim && hoje > c.fim) return 'campanha encerrada em ' + dataBR(c.fim);
    return null;
  }

  function normalizaKit(k, c) {
    var genero = GENEROS[String(k.genero || '').toLowerCase()] || 'unissex';
    var status = String(k.status || 'pronta').toLowerCase();
    if (status === 'pronta-entrega') status = 'pronta';
    var preco = reais(k.preco);
    var msg = k.mensagem;
    if (!msg) {
      var cod = k.id ? ' (cód. ' + k.id + ')' : '';
      if (status === 'esgotado') {
        msg = 'Olá Esdra! Vi no catálogo o produto *' + k.nome + '*' + cod + ', que está esgotado. Pode me avisar quando chegar ou indicar uma opção parecida?';
      } else {
        msg = 'Olá Esdra! Tenho interesse no produto: *' + k.nome + '*' + cod + '\nPreço: ' + preco +
          '\n' + (status === 'encomenda' ? '📦 Sob encomenda' : '✅ Pronta entrega') + '\n\nPode me passar mais informações?';
      }
    }
    return {
      id: k.id || '', nome: k.nome, marca: k.marca || '', genero: genero, status: status,
      preco: preco, precoDe: reais(k.precoDe), imagem: k.imagem, desc: k.descricao || '',
      selo: k.selo === undefined ? (c.selo || '') : k.selo,
      link: linkWhats(c.whatsapp, msg)
    };
  }

  // ---------- montagem ----------
  function htmlCard(k) {
    var esg = k.status === 'esgotado';
    var statusTxt = esg ? 'Esgotado' : (k.status === 'encomenda' ? 'Sob encomenda' : '✓ Pronta entrega');
    return '' +
      '<article class="cli-card' + (esg ? ' cli-card--esgotado' : '') + '" data-genero="' + k.genero + '"' + (esg ? ' data-esgotado="true"' : '') + '>' +
        (k.selo && !esg ? '<div class="cli-selo">' + esc(k.selo) + '</div>' : '') +
        '<div class="cli-foto"><img src="' + esc(k.imagem) + '" alt="' + esc(k.nome) + '" loading="lazy" decoding="async">' +
          (k.id ? '<div class="cli-num">' + esc(k.id) + '</div>' : '') +
          (esg ? '<div class="cli-selo-esgotado">ESGOTADO</div>' : '') + '</div>' +
        '<div class="cli-info">' +
          (k.marca ? '<div class="cli-marca">' + esc(k.marca) + '</div>' : '') +
          '<h2 class="cli-nome">' + esc(k.nome) + '</h2>' +
          (k.desc ? '<p class="cli-desc">' + esc(k.desc) + '</p>' : '') +
          '<div class="cli-precos">' +
            (k.precoDe ? '<s class="cli-preco-cheio"><span class="sr-only">De </span>' + esc(k.precoDe) + '</s>' : '') +
            '<span class="cli-preco' + (esg ? ' cli-preco--esgotado' : '') + '">' + (k.precoDe ? '<span class="sr-only">por </span>' : '') + esc(k.preco) + '</span>' +
          '</div>' +
          '<span class="cli-status cli-status--' + k.status + '">' + statusTxt + '</span>' +
          '<a href="' + esc(k.link) + '" target="_blank" rel="noopener" class="cli-btn' + (esg ? ' cli-btn--secundario' : '') + '"' +
            ' aria-label="' + esc((esg ? 'Avisar quando chegar: ' : 'Pedir no WhatsApp: ') + k.nome) + '">' +
            ICONE_WHATS + (esg ? 'Avisar quando chegar' : 'Pedir no WhatsApp') +
          '</a>' +
        '</div>' +
      '</article>';
  }

  function htmlRodape(c, titulo, texto, data) {
    return '' +
      '<footer class="cli-rodape">' +
        '<h2>' + esc(titulo) + '</h2>' +
        '<p>' + esc(texto) + '</p>' +
        '<div class="cli-rodape-acoes">' +
          '<a href="' + esc(linkWhats(c.whatsapp, 'Olá Esdra! Vi seu catálogo e gostaria de saber mais.')) + '" target="_blank" rel="noopener" class="cli-rodape-btn">' + ICONE_WHATS + 'Falar com a Esdra</a>' +
          '<a href="' + esc(c.lojaOnline) + '" target="_blank" rel="noopener" class="cli-rodape-btn cli-rodape-btn--loja">Ver a loja online</a>' +
        '</div>' +
        '<div class="cli-rodape-meta">' + esc(c.loja) + ' · ' + esc(c.cidade) + (data ? ' · Atualizado em ' + esc(dataBR(data)) : '') + '</div>' +
      '</footer>';
  }

  function aplicaTema(c) {
    var raiz = document.documentElement.style;
    var t = c.tema || {};
    if (t.primaria) {
      raiz.setProperty('--primaria', t.primaria);
      var o1 = hexParaRgba(t.primaria, 0.82); if (o1) raiz.setProperty('--capa-o1', o1);
    }
    if (t.primariaEscura) raiz.setProperty('--primaria-escura', t.primariaEscura);
    if (t.acento) {
      raiz.setProperty('--acento-quente', t.acento);
      var o2 = hexParaRgba(t.acento, 0.75); if (o2) raiz.setProperty('--capa-o2', o2);
    }
    // Endereço absoluto: url() dentro de variável CSS seria resolvido a partir da pasta css/
    if (c.capa) raiz.setProperty('--capa-img', 'url("' + new URL(String(c.capa).replace(/["\\]/g, ''), document.baseURI).href + '")');
  }

  function montaNeutro(app, c, motivo) {
    var n = c.neutro || {};
    document.title = 'Kits de presente | ' + c.loja;
    app.innerHTML = '' +
      '<header class="cli-capa">' +
        '<h1 class="cli-marca-loja">' + esc(c.loja) + '</h1>' +
        '<div class="cli-tagline">Kits de presente</div>' +
      '</header>' +
      '<main class="cli-neutro" data-modo="neutro" data-motivo="' + esc(motivo) + '">' +
        '<div class="cli-neutro-selo">Nova campanha em breve</div>' +
        '<h2>' + esc(n.titulo || 'Kits de presente da Esdra: nova campanha em breve') + '</h2>' +
        '<p>' + esc(n.texto || 'Estamos preparando os próximos kits. Enquanto isso, veja a loja online completa ou fale com a Esdra pelo WhatsApp: ela monta o presente do seu jeito.') + '</p>' +
        '<div class="cli-neutro-acoes">' +
          '<a class="cli-btn cli-btn--loja" href="' + esc(c.lojaOnline) + '" target="_blank" rel="noopener">Ver a loja online</a>' +
          '<a class="cli-btn" href="' + esc(linkWhats(c.whatsapp, 'Olá Esdra! Vi seu catálogo e gostaria de saber sobre os kits de presente.')) + '" target="_blank" rel="noopener">' + ICONE_WHATS + 'Falar no WhatsApp</a>' +
        '</div>' +
      '</main>' +
      htmlRodape(c, 'Presentes do seu jeito', 'Perfumes, kits e cestas das melhores marcas, com entrega em ' + c.cidade + ' e região.', c.atualizadoEm);
  }

  function montaCampanha(app, c, previa) {
    var kits = c.kits.map(function (k) { return normalizaKit(k, c); });
    // Esgotados sempre no fim, mantendo a ordem original dentro de cada grupo
    kits = kits.filter(function (k) { return k.status !== 'esgotado'; })
      .concat(kits.filter(function (k) { return k.status === 'esgotado'; }));
    var disponiveis = kits.filter(function (k) { return k.status !== 'esgotado'; }).length;
    var generos = {};
    kits.forEach(function (k) { generos[k.genero] = true; });
    var listaGeneros = ['feminino', 'masculino', 'unissex'].filter(function (g) { return generos[g]; });
    // Filtros só aparecem se houver mais de um público. Kit unissex aparece também em Femininos e Masculinos.
    var mostraFiltros = listaGeneros.length > 1;

    document.title = (c.titulo || 'Catálogo') + ' | ' + c.loja;
    aplicaTema(c);

    var aviso = '';
    if (previa) {
      var motivoReal = motivoNeutro(c, false);
      aviso = '<div class="cli-previa-aviso" role="note">Prévia da campanha "' + esc(c.id || previa) + '"' +
        (motivoReal ? ' (' + esc(motivoReal) + '; no ar ela não apareceria)' : '') + '</div>';
    }

    var chips = ['<li>' + disponiveis + (disponiveis === 1 ? ' kit disponível' : ' kits disponíveis') + '</li>'];
    if (c.destaque) chips.push('<li>' + esc(c.destaque) + '</li>');
    chips.push('<li>Atendimento via WhatsApp</li>');

    var filtros = '';
    if (mostraFiltros) {
      filtros = '<div class="cli-filtros" id="cli-filtros" role="group" aria-label="Filtrar por público">' +
        '<button type="button" class="cli-filtro cli-filtro--ativo" data-filtro="todos" aria-pressed="true">Todos</button>' +
        listaGeneros.map(function (g) {
            return '<button type="button" class="cli-filtro" data-filtro="' + g + '" aria-pressed="false">' + ROTULO_FILTRO[g] + '</button>';
          }).join('') +
        '</div>';
    }

    app.innerHTML = aviso +
      '<header class="cli-capa">' +
        '<h1 class="cli-marca-loja">' + esc(c.loja) + '</h1>' +
        '<div class="cli-tagline">' + esc(c.titulo || '') + '</div>' +
        (c.subtitulo ? '<p class="cli-subtitulo">' + esc(c.subtitulo) + '</p>' : '') +
        '<ul class="cli-stats">' + chips.join('') + '</ul>' +
      '</header>' +
      '<div class="cli-busca-wrap">' +
        '<label for="cli-busca" class="sr-only">Buscar produto ou marca</label>' +
        '<input type="search" class="cli-busca" id="cli-busca" placeholder="Buscar produto, marca…" autocomplete="off">' +
        filtros +
      '</div>' +
      '<main class="cli-grade" id="cli-grade" data-modo="campanha">' +
        kits.map(htmlCard).join('') +
        '<p class="cli-vazio" id="cli-vazio" style="display:none">Nenhum produto encontrado. Tente outra busca ou fale com a Esdra no WhatsApp.</p>' +
      '</main>' +
      '<p class="sr-only" id="cli-contagem" aria-live="polite"></p>' +
      htmlRodape(c, c.rodapeTitulo || 'Encontrou o que procurava?',
        c.rodapeTexto || 'Clique no produto que quiser e fale direto comigo no WhatsApp.', c.atualizadoEm);

    ligaFiltros(app);
  }

  function ligaFiltros(app) {
    var busca = app.querySelector('#cli-busca');
    var cards = app.querySelectorAll('.cli-card');
    var vazio = app.querySelector('#cli-vazio');
    var contagem = app.querySelector('#cli-contagem');
    var botoes = app.querySelectorAll('.cli-filtro');
    var ativo = 'todos';

    function filtrar() {
      var t = busca.value.trim().toLowerCase();
      var v = 0;
      Array.prototype.forEach.call(cards, function (card) {
        var g = card.getAttribute('data-genero');
        var passaFiltro = ativo === 'todos' || g === ativo || (g === 'unissex' && ativo !== 'unissex');
        var mostra = passaFiltro && (!t || card.textContent.toLowerCase().indexOf(t) !== -1);
        card.classList.toggle('oculto', !mostra);
        if (mostra) v++;
      });
      vazio.style.display = v === 0 ? 'block' : 'none';
      contagem.textContent = v + (v === 1 ? ' produto exibido' : ' produtos exibidos');
    }
    busca.addEventListener('input', filtrar);
    Array.prototype.forEach.call(botoes, function (b) {
      b.addEventListener('click', function () {
        Array.prototype.forEach.call(botoes, function (x) {
          x.classList.remove('cli-filtro--ativo'); x.setAttribute('aria-pressed', 'false');
        });
        b.classList.add('cli-filtro--ativo'); b.setAttribute('aria-pressed', 'true');
        ativo = b.getAttribute('data-filtro');
        filtrar();
      });
    });
  }

  function monta(bruta, previa) {
    var app = document.getElementById('cli-app');
    var c = {};
    var k;
    for (k in PADRAO) c[k] = PADRAO[k];
    if (bruta) for (k in bruta) if (bruta[k] != null) c[k] = bruta[k];
    c.whatsapp = String(c.whatsapp).replace(/\D/g, '');
    var motivo = motivoNeutro(bruta, previa);
    if (motivo) montaNeutro(app, c, motivo);
    else montaCampanha(app, c, previa);
  }

  // ---------- início ----------
  var param = /[?&]campanha=([a-z0-9-]+)/i.exec(window.location.search);
  if (param) {
    var nome = param[1];
    var s = document.createElement('script');
    s.src = 'campanhas/' + nome + '.js';
    s.onload = function () { monta(window.CAMPANHA, nome); };
    s.onerror = function () { monta(window.CAMPANHA, null); };
    document.body.appendChild(s);
  } else {
    monta(window.CAMPANHA, null);
  }
})();
