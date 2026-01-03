const news = [
  {
    title: "AI chips are transforming computing",
    description: "New AI accelerators promise faster and more efficient processing.",
    image: "https://source.unsplash.com/600x400/?ai,technology",
    link: "#"
  },
  {
    title: "Quantum computing reaches new milestone",
    description: "Researchers achieve higher qubit stability in quantum systems.",
    image: "https://source.unsplash.com/600x400/?quantum,computer",
    link: "#"
  },
  {
    title: "Electric vehicles adoption rises globally",
    description: "EV sales continue to grow as battery technology improves.",
    image: "https://source.unsplash.com/600x400/?electric,car",
    link: "#"
  }
];

const container = document.getElementById("news-container");

news.forEach(item => {
  const card = document.createElement("div");
  card.className = "news-card";

  card.innerHTML = `
    <img src="${item.image}">
    <div class="news-card-content">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.link}">Read more →</a>
    </div>
  `;

  container.appendChild(card);
});
