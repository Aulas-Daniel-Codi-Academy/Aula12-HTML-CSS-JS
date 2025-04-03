# 🎬 Aula Prática - Buscador de Filmes com OMDb API

## 📄 Descrição

Nesta aula prática, vamos construir um **Buscador de Filmes** utilizando **HTML, CSS e JavaScript** consumindo a API gratuita do **OMDb API**.

O aluno aprenderá na prática como fazer requisições a uma API pública e exibir os dados dinamicamente na página.

---

## 🚀 Objetivos da Aula

✅ Praticar integração com API externa  
✅ Utilizar `fetch` e `async/await` para consumo de dados  
✅ Manipular o DOM com JavaScript  
✅ Trabalhar com feedback visual (loading)  
✅ Estilizar com CSS e aplicar boas práticas de organização

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- [OMDb API](https://www.omdbapi.com/)

---

## 📌 Funcionalidades

- Busca de informações de filmes digitando o nome
- Exibição do título, ano, nota IMDB e pôster do filme
- Mensagem de erro caso o filme não seja encontrado
- Animação de **Loading** durante a busca

---

## ▶️ Como Executar

1. Faça o download ou clone o repositório:

\`\`\`
git clone https://github.com/seuusuario/buscador-filmes.git
\`\`\`

2. Abra o arquivo `index.html` no navegador.

3. Digite o nome de um filme no campo de busca e clique em **Buscar**.

---

## 🔑 Sobre a API

Para que a busca funcione, você precisa de uma **API Key gratuita** da OMDb API:

1. Acesse: https://www.omdbapi.com/apikey.aspx
2. Escolha o plano **Free**
3. Use sua chave na variável `apiKey` dentro do arquivo `script.js`

Exemplo:
\`\`\`javascript
const apiKey = "SUA_CHAVE_AQUI";
\`\`\`

---

## 💡 Possíveis Melhorias

- Adicionar favoritos
- Histórico de filmes buscados
- Mostrar mais informações (atores, sinopse, etc.)
- Melhorar o layout para mobile

---

## 📚 Conteúdos Trabalhados

- Manipulação de elementos do DOM
- Funções assíncronas com `async/await`
- Tratamento de erros
- Estilização de interfaces
- Requisições HTTP com `fetch`
