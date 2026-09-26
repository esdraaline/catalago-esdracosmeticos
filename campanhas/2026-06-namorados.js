/*
 * Campanha: Dia dos Namorados 2026 (12/06/2026)
 * Arquivo de ARQUIVO/EXEMPLO. Não é carregado pelo site, a não ser em prévia:
 *   index.html?campanha=2026-06-namorados
 * Para reaproveitar um kit numa campanha nova, copie a linha dele para
 * campanhas/atual.js e confira preço, estoque e o selo.
 *
 * Prévia do WhatsApp usada nesta campanha (bloco do <head> do index.html):
 *   título:    Catálogo Dia dos Namorados | Esdra Cosméticos
 *   descrição: Presentes especiais para o Dia dos Namorados! Kits selecionados. Surpreenda quem você ama.
 *   imagem:    capa-namorados.jpg (1024 x 1536, retrato)
 */
window.CAMPANHA = {
  id: '2026-06-namorados',
  ativa: true,
  titulo: 'Surpreenda quem você ama 💕',
  subtitulo: '',
  destaque: '💕 Dia dos Namorados',
  selo: '💕 Namorados',
  capa: 'capa-namorados.jpg',
  tema: { primaria: '#8B0046', primariaEscura: '#5C002F', acento: '#C9184A' },
  inicio: '2026-06-01',
  fim: '2026-06-12',
  atualizadoEm: '2026-06-10',
  whatsapp: '5518991459429',
  lojaOnline: 'https://www.esdracosmeticos.com.br',
  rodapeTitulo: 'Encontrou o que procurava?',
  rodapeTexto: 'Clique no produto que quiser e fale direto comigo no WhatsApp.',

  // genero: 'F' | 'M' | 'U' (unissex)   status: 'pronta' | 'encomenda' | 'esgotado'
  // precoDe é opcional. mensagem é opcional (gerada automaticamente se faltar).
  kits: [
    { id: "N1M", nome: "Kit Masculino Celebre Agora", marca: "O Boticário", genero: "M", preco: 129.90, precoDe: 174.50, imagem: "img/kit-masculino-celebre-agora.jpg",
      status: "pronta", descricao: "Celebre Agora Desodorante Colônia 100ml + O Boticário MEN Creme Pré e Pós-Barba 150g. Embalagem especial para presente." },
    { id: "N2F", nome: "Kit Kiss Me", marca: "Eudora", genero: "F", preco: 134.90, precoDe: 144.90, imagem: "img/kit-kiss-me.jpg",
      status: "pronta", descricao: "Kiss Me Now Desodorante Colônia 50ml + Kiss Me Lápis 3 em 1 Cherry 1,2g + Kiss Me Gloss Labial Cherry 5,5ml. Embalagem especial para presente." },
    { id: "N3M", nome: "Kit Biografia Masculino", marca: "Natura", genero: "M", preco: 209.90, precoDe: 304.80, imagem: "img/kit-biografia-masculino.jpg",
      status: "pronta", descricao: "Biografia Desodorante Colônia 100ml + Sabonete Líquido para o Corpo 100ml + Desodorante Corporal em Spray 100ml. Embalagem especial para presente." },
    { id: "N4F", nome: "Kit Nativa SPA Ameixa Negra", marca: "O Boticário", genero: "F", preco: 145.90, precoDe: 179.80, imagem: "img/kit-nativa-spa-ameixa-negra.jpg",
      status: "esgotado", descricao: "Nativa SPA Ameixa Negra Body Splash 200ml + Loção Hidratante Desodorante de Ameixa Negra 200ml. Embalagem especial para presente." },
    { id: "N5F", nome: "Cesta Glamour Diva", marca: "O Boticário", genero: "F", preco: 139.90, precoDe: 252.90, imagem: "img/cesta-glamour-diva.jpg",
      status: "pronta", descricao: "Cesta decorada com caneca personalizada, pelúcia de coração, Perfume Glamour Diva e fio de fada decorativo." },
    { id: "N6M", nome: "Kit Club 6 — Eudora", marca: "Eudora", genero: "M", preco: 149.90, precoDe: 189.90, imagem: "img/kit-club-6-eudora.jpg",
      status: "pronta", descricao: "Colônia Club 6 Eudora 95ml + Body Spray Desodorante Club 6 Eudora 100ml. Embalagem especial para presente." },
    { id: "N7M", nome: "Kit Club 6 — Eudora", marca: "Eudora", genero: "M", preco: 64.90, imagem: "img/kit-club-6-eudora-2.jpg", status: "pronta",
      descricao: "Body Spray Desodorante Club 6 Eudora 100ml + Loção Hidratante Desodorante Corporal Club 6 Eudora 200ml. Embalagem especial para presente." },
    { id: "N8M", nome: "Kit Egeo Bomb Black — O Boticário", marca: "O Boticário", genero: "M", preco: 159.90, precoDe: 197.40, imagem: "img/kit-egeo-bomb-black-o-boticario.jpg",
      status: "pronta", descricao: "Kit Egeo Bomb Black com Perfume 90ml e Shower Gel 2 em 1 Cabelo e Corpo 100g. Embalagem especial com sacola." },
    { id: "N9M", nome: "Kit Arbo — O Boticário", marca: "O Boticário", genero: "M", preco: 199.90, precoDe: 279.90, imagem: "img/kit-arbo-o-boticario.jpg",
      status: "esgotado", descricao: "Kit Arbo com Perfume 100ml, Body Spray 100ml e Loção Hidratante 75ml. Embalagem especial para presente." },
    { id: "N10F", nome: "Kit Flor de Carambola", marca: "L'Occitane au Brésil", genero: "F", preco: 179.90, precoDe: 244.90, imagem: "img/kit-flor-de-carambola.jpg",
      status: "pronta", descricao: "Perfume Flor de Carambola 100ml + Sabonete Perfumado 75g + Grageado Crocante Cacau Show 70g. Caixa presenteável premium." },
    { id: "N11F", nome: "Caixa Presente Eudora Instance Maracujá", marca: "Eudora", genero: "F", preco: 99.90, precoDe: 144.90, imagem: "img/caixa-presente-eudora-instance-maracuja.jpg",
      status: "pronta", descricao: "Caixa presenteável com Hidratante Maracujá 180ml, Body Splash 200ml, Hidratante Maracujá e Waffle Trento de mousse de maracujá." },
    { id: "N12F", nome: "Kit Rebeca Abravanel — Jequiti", marca: "Jequiti", genero: "F", preco: 54.90, precoDe: 99.90, imagem: "img/kit-rebeca-abravanel-jequiti.jpg",
      status: "pronta", descricao: "Perfume Rebeca Abravanel Jequiti 25ml + Sabonete Jequiti 70g. Embalagem especial em formato de coração para presentear." },
    { id: "N13F", nome: "Cesta Linda Irresistível", marca: "O Boticário", genero: "F", preco: 309.90, precoDe: 384.90, imagem: "img/cesta-linda-irresistivel.jpg",
      status: "pronta", descricao: "Urso do Stitch, caixa de chocolate Cacau Show 200g com 15 bombons, Perfume Linda Irresistível 100ml O Boticário, rímel Eudora Turbo Volumasso e kit de presilha com 3 presilhas (1 grande e 2 pequenas). Cesta decorada com fios de fada, embalada em saco celofane." },
    { id: "N14M", nome: "Cesta Arbo + Sprite — O Boticário", marca: "O Boticário", genero: "M", preco: 179.90, precoDe: 229.90, imagem: "img/cesta-arbo-sprite-o-boticario.jpg",
      status: "pronta", descricao: "Perfume Arbo 100ml, lata de Sprite Zero 350ml e BYTES Pipoca grajeada coberta com chocolate da Cacau Show 50g. Vai embalada no saco celofane." },
    { id: "N15F", nome: "Caixa Floratta Red Passion — O Boticário", marca: "O Boticário", genero: "F", preco: 254.90, precoDe: 299.90, imagem: "img/caixa-floratta-red-passion-o-boticario.jpg",
      status: "pronta", descricao: "Tablet de chocolate Te Amo Cacau Show 40g, urso de pelúcia, Perfume Floratta Red Passion 75ml, tablete de Kit Kat 11,6g, balão de coração e cachepô decorado." },
    { id: "N16F", nome: "Cesta Floratta Red — O Boticário", marca: "O Boticário", genero: "F", preco: 229.90, precoDe: 269.90, imagem: "img/cesta-floratta-red-o-boticario.jpg",
      status: "pronta", descricao: "Urso de pelúcia, mini balão de coração, batata Pringles 104g, drageado crocante de chocolate da Cacau Show 70g, lata de Coca-Cola Zero 350ml e Perfume Floratta Red 100ml. Cesta decorada com fios de fada." },
    { id: "N17F", nome: "Caixa Egeo Choc — O Boticário", marca: "O Boticário", genero: "F", preco: 299.90, precoDe: 349.90, imagem: "img/caixa-egeo-choc-o-boticario.jpg",
      status: "pronta", descricao: "Cachepô decorado, balão de coração, urso do Stitch, barra Eu Te Amo Cacau Show 40g, gloss Niina Secrets, máscara para cílios Super Bond Niina Secrets, Perfume Egeo Choc 100ml e piranha de flor." },
    { id: "N18F", nome: "Cesta Morango Irresistível — Eudora", marca: "Eudora", genero: "F", preco: 154.90, precoDe: 189.90, imagem: "img/cesta-morango-irresistivel-eudora.jpg",
      status: "pronta", descricao: "Cesta decorada com caneca exclusiva, pelúcia de coração, Hidratante Morango Irresistível 400ml, Body Splash Morango Irresistível 200ml e fios de fada." },
    { id: "N19F", nome: "Kit Eudora Pulse Intense", marca: "Eudora", genero: "F", preco: 99.90, precoDe: 119.89, imagem: "img/kit-eudora-pulse-intense.jpg",
      status: "pronta", descricao: "Perfume Pulse Intense 100ml com fragrância marcante e Shower Gel 3 em 1 de 100g. O presente que traduz sentimentos e deixa marcante cada momento." },
    { id: "N20M", nome: "Kit Malbec", marca: "O Boticário", genero: "M", preco: 219.90, precoDe: 241.80, imagem: "img/kit-malbec.jpg",
      status: "pronta", descricao: "Colônia Malbec 100ml com fragrância sofisticada e inconfundível, acompanhada de caixa de sabonete em barra perfumado Malbec com 2 unidades de 90g cada." },
    { id: "N21M", nome: "Kit Clash", marca: "O Boticário", genero: "M", preco: 109.90, precoDe: 145.70, imagem: "img/kit-clash.jpg",
      status: "pronta", descricao: "Body Spray Clash 100ml, Creme Pré e Pós-Barba 50g e caixa de sabonete em barra Clash com 2 unidades de 80g cada. Um presente marcante para celebrar o amor." }
  ]
};
