# Portal do Professor — Computação Desplugada (8º ano)

Site estático com os três jogos de computação desplugada do Grupo 3, para turmas de 8º ano do Ensino Fundamental.
Referencial: BNCC Computação (Complemento à BNCC), eixo Cultura Digital.

**Grupo 3:** Carlos Henrique Castro, Raquel Batista e Suyara Rodrigues.

## Jogos

1. Rede (Des)Conectada: disseminação de informação e fake news
2. Pegadas Digitais: privacidade e proteção de dados pessoais
3. Tribunal do Comentário: ética, respeito e convivência online

## Estrutura

```
portal-professor/
├── index.html          estrutura da página e carregamento dos arquivos
├── css/
│   └── style.css       cores, tipografia, layout e alto contraste
├── js/
│   ├── data.js         conteúdo dos jogos (editar textos aqui)
│   └── app.js          rotas, renderização e acessibilidade
├── assets/
│   └── cartoes/        PDFs dos cartões imprimíveis
└── README.md
```

## Como rodar

Não precisa instalar nada. Abra o `index.html` no navegador.

## Como editar

- **Textos dos jogos:** `js/data.js`.
- **Aparência:** `css/style.css`. As cores ficam no início, em variáveis (`--brand`, `--coral`, `--yellow`).
- **Comportamento:** `js/app.js`.

## Como adicionar os PDFs dos cartões

1. Coloque o PDF em `assets/cartoes/`, por exemplo `rede-desconectada.pdf`.
2. Em `js/data.js`, preencha o campo `pdf` do jogo: `pdf:"assets/cartoes/rede-desconectada.pdf"`.
3. O botão "Baixar PDF" é ativado sozinho.

## Publicar no GitHub Pages

1. Envie esta pasta para um repositório no GitHub.
2. Vá em Settings > Pages.
3. Em Source, escolha a branch `main` e a pasta `/ (root)`.
4. O site ficará em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Acessibilidade

Alto contraste, ajuste do tamanho do texto, navegação por teclado, layout para celular e modo escuro automático.

## Pendências

- Cartões imprimíveis em PDF.
- Conferir e acrescentar os códigos das habilidades da BNCC Computação.
- Validar passos, tempos e perguntas no teste-piloto.
