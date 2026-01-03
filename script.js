const news = [
  {
    title: "AI chips are transforming computing",
    description: "New AI accelerators promise faster and more efficient processing.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    link: "https://www.theverge.com/2024/ai"
  },
  {
    title: "Quantum computing reaches new milestone",
    description: "Researchers achieve higher qubit stability in quantum systems.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
    link: "https://www.nature.com/quantum"
  },
  {
    title: "Electric vehicles adoption rises globally",
    description: "EV sales grow as battery technology improves.",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c0f8eaf92?w=800",
    link: "https://www.bbc.com/news/topics/electric-cars"
  }
];

const container = document.getElementById("news-container");

news.forEach(item => {
  const card = document.createElement("div");
  card.className = "news-card";

  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <div class="news-card-content">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank" rel="noopener">
        Read more →
      </a>
    </div>
  `;

  container.appendChild(card);
});

