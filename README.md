# English System — Estrutura do Projeto

## Pastas

```
english-system-site/
├── index.html              ← estrutura da página (não precisa editar pra mudar conteúdo)
├── css/
│   └── styles.css          ← todo o visual (cores, layout, espaçamento)
├── js/
│   ├── app.js               ← lógica da aplicação: busca, progresso, renderização. Não contém conteúdo de gramática.
│   └── data/
│       ├── group-1.js       ← Sistema Verbal (12 tempos verbais) — 13 tópicos
│       ├── group-2.js       ← Conditionals & Passive Voice — 6 tópicos
│       ├── group-3.js       ← Modal Verbs — 5 tópicos
│       ├── group-4.js       ← Estruturas de Frase — 6 tópicos
│       ├── group-5.js       ← Conectores e Discurso — 5 tópicos
│       ├── group-6.js       ← Artigos, Quantificadores e Pronomes — 4 tópicos
│       └── practice-data.js ← Rotina diária, recursos de listening/reading, guia IELTS/Duolingo
```

## Como editar conteúdo

Pra mudar/adicionar um tópico de gramática, edite o arquivo do grupo correspondente em `js/data/`. Cada tópico segue este formato:

```js
{
  id: "present-simple",              // identificador único, usado em links e busca
  title: "Present Simple",           // título exibido
  tag: "Simple · Present",           // etiqueta pequena ao lado do título
  logic_en: "...",                   // explicação da lógica, em inglês
  logic_pt: "...",                   // mesma explicação, em português
  when_en: "...",                    // quando usar, em inglês
  when_pt: "...",                    // quando usar, em português
  formulas: [{tag:"afirm", val:"..."}, ...],   // fórmulas (afirmativa/negativa/interrogativa)
  examples: [{en:"...", pt:"..."}, ...],       // exemplos bilíngues
  compare: {en:"...", pt:"..."},     // comparação de lógica EN×PT
  warn_en: "...",                    // erro comum, em inglês
  warn_pt: "..."                     // erro comum, em português
}
```

Pra adicionar um tópico novo, copie um bloco existente dentro do array `topics: [...]` do grupo certo, edite os campos, e adicione uma vírgula entre os blocos.

## Como editar visual

Tudo em `css/styles.css`. As cores principais estão nas variáveis no topo do arquivo (`:root { --accent: ...; --bg: ...; }`) — mudar ali já reflete em todo o site.

## Como publicar

Esses 3 arquivos/pastas (`index.html`, `css/`, `js/`) são um site estático — sem backend, sem build step. Pode subir direto em:

- **Netlify / Vercel**: arraste a pasta inteira no painel, ou conecte um repositório Git
- **GitHub Pages**: suba pra um repositório e ative Pages nas configurações
- **Qualquer hospedagem estática**: basta copiar a pasta toda, mantendo a estrutura de subpastas intacta

Não precisa de Node, build, nem servidor — é HTML/CSS/JS puro.

## Importante

O progresso (✓ marcados) fica só na memória do navegador durante a sessão — não persiste se você fechar a aba ou voltar depois. Se quiser progresso persistente entre visitas, isso exigiria adicionar `localStorage` (fácil de adicionar em `js/app.js`, na função `toggleDone`) ou um backend simples — me avise se quiser isso implementado.
