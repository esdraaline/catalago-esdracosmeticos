> Este repositório é público e cuida só do código de publicação. Assuntos operacionais,
> pendências e decisões internas são tratados no espaço de trabalho privado.

## Contexto do projeto
- Catálogo de campanhas da Esdra Cosméticos (kits de presente enviados pelo WhatsApp), HTML+CSS+JS puro, sem build, no GitHub Pages: https://esdraaline.github.io/catalago-esdracosmeticos/
- Repositório PÚBLICO (conta esdraaline). Nada de planilha, foto bruta ou dado de cliente.
- Dados separados da apresentação: a campanha publicada é `campanhas/atual.js` (`window.CAMPANHA`); `js/catalogo.js` e `css/catalogo.css` montam a página. Não escreva cards no HTML.
- Sem kits, `ativa:false` ou data `fim` vencida = modo neutro (página-ponte para a loja e o WhatsApp). Campanhas antigas ficam em `campanhas/AAAA-MM-nome.js`; prévia: `index.html?campanha=AAAA-MM-nome`.
- Todo kit tem `genero` ('F', 'M' ou 'U') e `id` com o sufixo igual (N1F, N2M). Esgotado: `status:'esgotado'` (o JS joga para o fim e troca o botão por "Avisar quando chegar").
- Imagem sempre como arquivo em `img/` (minúsculas, sem acento, `tipo-produto-marca.jpg`), NUNCA base64 no HTML.
- A cada campanha, no `index.html` só muda o bloco "PRÉVIA DO WHATSAPP" do `<head>` (og:/twitter:, com width/height reais da imagem).
- Nunca `git add .`. Use: `git add img/ campanhas/ index.html js/ css/ README.md`, commit e `git push origin main` (Pages publica em 1 a 2 min).
- Passo a passo completo no README.md. Fotos novas: skill `foto-catalogo`; publicação: skill `publicar-site`.

<!-- GESTAO-PJP:START v1 -->
## Gestão PJP

Este projeto é o `PJP-043` do portfólio e é governado pela Gestão PJP, em `C:\projetos\Gestão PJP`. O Mentor de Projetos foi aposentado em 16/11/2026: não use o comando `mentor` e não escreva em `.project-mentor/`, que ficou só como histórico.

- **Ao começar:** leia `STATUS.md` deste projeto. É ali que está onde paramos.
- **Ao terminar:** atualize `STATUS.md` com o que foi feito e com o que ficou pendente, depois commit e push.
- **Pendência:** uma linha `- [ ] texto` na seção "Pendências". Com prazo: `- [ ] texto (prazo AAAA-MM-DD)`. Feita: `- [x] texto`.
- **Bloqueio:** `- [ ] BLOQUEIO: o que trava e do que depende`.
- **Assunto de outro projeto, risco ou prioridade do portfólio:** acrescente uma linha em `C:\projetos\Gestão PJP\16-BACKLOG-MESTRE\ENTRADA.md`. Não crie controle paralelo.
<!-- GESTAO-PJP:END -->
