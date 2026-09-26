/*
 * CAMPANHA PUBLICADA NO SITE
 * O index.html carrega sempre ESTE arquivo.
 *
 * Agora: MODO NEUTRO (sem campanha ativa). A página mostra
 * "Kits de presente da Esdra: nova campanha em breve", com botões
 * para a loja online e para o WhatsApp.
 *
 * Para abrir uma campanha: copie por cima deste arquivo o conteúdo de
 * uma campanha (modelo: campanhas/2026-06-namorados.js), ajuste id,
 * textos, datas e kits, e troque o bloco "PRÉVIA DO WHATSAPP" do
 * index.html. Passo a passo no README.md.
 *
 * O site volta sozinho ao modo neutro quando:
 *   - kits está vazio, ou
 *   - ativa: false, ou
 *   - a data de hoje passou do "fim" (ou ainda não chegou no "inicio").
 */
window.CAMPANHA = {
  id: 'neutro',
  ativa: false,
  atualizadoEm: '2026-09-25',
  whatsapp: '5518991459429',
  lojaOnline: 'https://www.esdracosmeticos.com.br',

  // Textos da página-ponte (opcionais; sem eles vale o texto padrão)
  neutro: {
    titulo: 'Kits de presente da Esdra: nova campanha em breve',
    texto: 'Estamos preparando os próximos kits. Enquanto isso, veja a loja online completa ou fale com a Esdra pelo WhatsApp: ela monta o presente do seu jeito.'
  },

  kits: []
};
