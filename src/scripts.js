const inputFilme = document.getElementById("filme");
const botaoBuscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");
const loading = document.getElementById("loading");

botaoBuscar.addEventListener("click", async () => {
  const filme = inputFilme.value.trim();
  resultado.innerHTML = "";
  loading.style.display = "block";

  if (filme === "") {
    loading.style.display = "none";
    resultado.innerHTML = "<p>Digite o nome de um filme.</p>";
    return;
  }

  const apiKey = "2b836933";
  const url = `https://www.omdbapi.com/?t=${encodeURIComponent(
    filme
  )}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    loading.style.display = "none";

    if (data.Response === "False") {
      resultado.innerHTML = `<p>Filme não encontrado.</p>`;
    } else {
      resultado.innerHTML = `
        <h2>${data.Title} (${data.Year})</h2>
        <p>Nota IMDB: ${data.imdbRating}</p>
        <img src="${data.Poster}" alt="Poster do Filme">
      `;
    }
  } catch (error) {
    loading.style.display = "none";
    resultado.innerHTML = `<p>Erro ao buscar o filme.</p>`;
  }
});
