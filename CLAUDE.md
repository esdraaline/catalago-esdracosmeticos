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

<!-- PROJECT-MENTOR:START v1 -->
## Mentor de Projetos (protocolo v1)

Este projeto é acompanhado pelo Mentor de Projetos. Slug: `catalago-esdracosmeticos`. O estado executivo vive em `.project-mentor/project.yaml` e o histórico em `.project-mentor/sessions/`. **Nunca edite esses arquivos à mão**: toda escrita passa pelo CLI `mentor`.

Como achar o CLI (Windows): `%PROJECT_MENTOR_HOME%\bin\mentor.cmd`. Se a variável `PROJECT_MENTOR_HOME` não existir, procure a pasta `mentor-de-projetos` ao lado deste projeto e use `bin\mentor.cmd` de lá. Se ainda assim não conseguir executar comandos, siga a seção "Sem terminal".

### Início da sessão
1. Peça ao usuário para confirmar que fez `git pull` se ele trocou de computador.
2. Rode `mentor project catalago-esdracosmeticos --brief` e leia a última sessão em `.project-mentor/sessions/`.
3. Apresente em até 8 linhas: onde paramos, última entrega, pendências, bloqueios, próxima ação. Não invente nada que não esteja no estado.
4. Pergunte o objetivo só se não estiver claro. Depois rode `mentor start catalago-esdracosmeticos --objective "..." --agent <claude-code|codex|antigravity|copilot>`.

### Durante
- Nunca marque ação como concluída só porque um arquivo foi criado. Distinga **implementado** (código escrito), **testado** (teste executado com resultado) e **validado** (o usuário confirmou). Agente nunca marca "validado".
- Ação nova: `mentor action add catalago-esdracosmeticos --title "..."`. Concluir: `mentor action done catalago-esdracosmeticos <act-id> --level implemented|tested`. Bloqueio: `mentor blocker add catalago-esdracosmeticos --description "..."`.
- Não altere estágio (`mentor stage`) sem o usuário pedir.

### Encerramento
Quando o usuário disser "encerrar", "fechar sessão", "terminei" ou invocar a skill de encerramento:
1. Escreva um rascunho em arquivo temporário (fora do repositório) com as seções: Resumo executivo · Concluído (prefixo `[implementado]`, `[testado]` ou `[validado]`, e `(act-NNN)` no fim quando for ação cadastrada) · Arquivos/áreas alteradas · Testes e resultados · Decisões · Pendências · Bloqueios · Riscos · Próxima ação recomendada. Máximo 60 linhas. Sem raciocínio interno, transcrição, segredos, dados pessoais de terceiros ou conteúdo de documentos policiais.
2. Rode `mentor close catalago-esdracosmeticos --from <rascunho.md>` e mostre o resultado da validação. Se falhar, mostre o erro e **não** finja sucesso.
3. Avise se há arquivos de `.project-mentor/` a commitar e mostre o comando sugerido pelo CLI. Não execute commit/push sem autorização explícita nesta sessão.

### Sem terminal
Se você não puder executar comandos, gere o rascunho da sessão em `.project-mentor/pending-close.md` no formato do protocolo (mesmas seções acima, com frontmatter `agent:` e `objective:`) e peça ao usuário para rodar `mentor sync`. O `sync` importa o rascunho, grava a sessão e atualiza o estado; se o rascunho for inválido, nada é descartado e o erro aparece para correção.
<!-- PROJECT-MENTOR:END -->
