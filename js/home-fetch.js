//info cards
const mediaZone = document.querySelector(".article-block");

let random = parseInt(Math.random() * 10);

fetch(
  `https://gnews.io/api/v4/search?q=africa%20AND%20investment&page=${random}&token=061ecf3ca67a9a953ca6e69439135033`
)
  .then((data) => {
    return data.json();
  })
  .then((res) => {
    console.log(res);
    if (res.articles == undefined) throw new Error("Expired request");
    res.articles = res.articles.slice(0, 9);
    res.articles.forEach((article) => {
      let newArticle = document.createElement("div");
      newArticle.classList.add("col", "s12", "m3", "card-panel");
      newArticle.innerHTML = `<img src=${article.image} alt="info">
      <div class="card-body">
          <h6 class="grey-text text-darken-1 title">${article.title}</h6>
          <a class="blue-text source" href=${article.url}>${
        article.source.name
      }</a>
          <p>${article.description.slice(0, 110) + "..."}</p>
          <a class="right more" href=${article.url}>Read more >></a>
      </div>`;
      document.querySelector(".news-spinner").style.display = "none";
      mediaZone.appendChild(newArticle);
    });
  });
