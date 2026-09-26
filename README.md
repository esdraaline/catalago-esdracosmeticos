# Catálogo de campanhas: Esdra Cosméticos

Vitrine de kits de presente para mandar pelo WhatsApp (Dia das Mães, Namorados, Pais, Black Friday, Natal...). Um modelo só, reaproveitado a cada campanha.

**No ar:** https://esdraaline.github.io/catalago-esdracosmeticos/
**Loja online completa:** https://www.esdracosmeticos.com.br

Organização dos projetos da Esdra e responsabilidade de cada sistema: ver central-ec (repositório privado).

## Como funciona

HTML, CSS e JavaScript puros, sem build. Abre também com dois cliques no `index.html` (sem servidor).

| Arquivo | Para que serve | Mexe a cada campanha? |
|---|---|---|
| `campanhas/atual.js` | **a campanha publicada**: textos, datas, cores, kits | sim |
| `campanhas/AAAA-MM-nome.js` | campanhas antigas guardadas (exemplo: `2026-06-namorados.js`) | não, só copia |
| `img/` | fotos dos kits e imagens de capa/prévia | sim (fotos novas) |
| `index.html` | só o bloco **PRÉVIA DO WHATSAPP** no `<head>` | sim, só esse bloco |
| `js/catalogo.js` | monta a página a partir da campanha | não |
| `css/catalogo.css` | visual (cores e letras da marca) | não |

O JavaScript monta sozinho: capa, contadores (só conta kits disponíveis), filtros Todos/Femininos/Masculinos (só aparecem se houver os dois públicos), cards, botão do WhatsApp com a mensagem pronta (nome, código e preço do kit), esgotados sempre no fim e a data "Atualizado em" do rodapé.

### Modo neutro (página-ponte)

Quando não há campanha ativa, a página mostra "Kits de presente da Esdra: nova campanha em breve", com botão para a loja online e botão do WhatsApp. Isso acontece sozinho quando, no `campanhas/atual.js`:

- a lista `kits` está vazia, **ou**
- `ativa: false`, **ou**
- a data de hoje passou do `fim` (ou ainda não chegou no `inicio`).

Ou seja: campanha vencida não fica mais no ar com preço velho.

## Abrir uma campanha nova em 5 passos

1. **Copiar o arquivo de campanha.** Copie `campanhas/2026-06-namorados.js` para `campanhas/AAAA-MM-nome.js` (ex.: `2026-12-natal.js`) e edite: `id`, `titulo`, `destaque`, `selo`, `capa`, `inicio`, `fim` (último dia no ar), `atualizadoEm` e a lista `kits`. Para cada kit: `id` (N1F, N2M... com F, M ou U no fim), `nome`, `marca`, `genero` (`'F'`, `'M'` ou `'U'`, obrigatório), `preco`, `precoDe` (opcional), `imagem`, `status` (`'pronta'`, `'encomenda'` ou `'esgotado'`) e `descricao`. A mensagem do WhatsApp é gerada sozinha. Kit de campanha antiga pode ser reaproveitado copiando a linha dele (confira preço e estoque).
2. **Fotos em `img/`.** Nome em minúsculas, sem acento, com hífens, no padrão `tipo-produto-marca.jpg` (ex.: `kit-egeo-bomb-black-o-boticario.jpg`, `cesta-morango-irresistivel-eudora.jpg`). Sempre arquivo `.jpg`, **nunca base64** dentro do HTML. A skill `foto-catalogo` faz esse passo e gera as linhas dos kits.
3. **Publicar a campanha no site:** copie o conteúdo do seu arquivo novo por cima de `campanhas/atual.js`. Depois edite o bloco **PRÉVIA DO WHATSAPP** no `<head>` do `index.html` (é o único trecho do HTML que muda): `<title>`, `og:title`, `og:description`, `og:image` (endereço completo `https://esdraaline.github.io/catalago-esdracosmeticos/img/...`), `og:image:width` e `og:image:height` com o **tamanho real** da imagem, e os `twitter:` iguais. O robô do WhatsApp não roda JavaScript, por isso esse bloco é fixo.
4. **Conferir.** Abra `index.html` no navegador (ou `python -m http.server` na pasta e acesse `http://localhost:8000`). No celular (ou tela estreita): capa, contador, filtros, esgotados no fim, e toque em 2 ou 3 botões do WhatsApp para ver a mensagem. Para ver qualquer campanha guardada sem publicar: `index.html?campanha=AAAA-MM-nome` (mostra uma faixa amarela "Prévia").
5. **Publicar.** Nunca `git add .`:
   ```
   git add img/ campanhas/ index.html js/ css/ README.md
   git commit -m "campanha: Natal 2026"
   git push origin main
   ```
   O GitHub Pages atualiza em 1 a 2 minutos. Mande o link para você mesmo no WhatsApp para conferir a prévia (o WhatsApp guarda prévia antiga por um tempo; se precisar, acrescente `?v=2` no link).

## Voltar ao modo neutro

Não precisa fazer nada: depois da data `fim` a página vira neutra sozinha. Para tirar antes, ponha `ativa: false` no `campanhas/atual.js` (ou restaure a versão neutra: `kits: []`). Depois volte o bloco PRÉVIA DO WHATSAPP do `index.html` para o texto neutro:

```html
<title>Kits de presente | Esdra Cosméticos</title>
og:title / twitter:title = Kits de presente | Esdra Cosméticos
og:description / twitter:description = Nova campanha em breve. Enquanto isso, veja a loja online ou peça pelo WhatsApp.
og:image / twitter:image = https://esdraaline.github.io/catalago-esdracosmeticos/img/og-esdra-kits.jpg  (1200 x 630)
```

Publique com o mesmo `git add` do passo 5.

## Cuidados

- Repositório **público**: nada de planilha de preço de custo, foto bruta ou dado de cliente. `Fotos add/`, `*.xlsx` e `.playwright-mcp/` estão no `.gitignore`.
- O telefone do WhatsApp é o comercial da loja (intencional).
- O nome "catalago" (com erro) fica: está na URL já enviada aos clientes.

## Relação com os outros projetos da Esdra

| Projeto | O que é |
|---|---|
| **este** | catálogo estático de campanhas |
| `esdracosmeticos` | loja virtual completa (carrinho, checkout, admin) |
| `agendaEC` | gestão do dia a dia (vendas, entregas, agendamentos, caixa, estoque) |
| `financeiroje` | finanças pessoais e do MEI |
| `central-ec` | entrada e decisões do negócio (repositório privado) |
