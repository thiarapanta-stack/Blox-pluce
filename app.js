// Banco de dados leve e rápido para conexões móveis
const robloxGamesDatabase = [
    {
        id: 1,
        name: "Blox Fruits",
        category: "RPG",
        version: "Update 22",
        date: "Há 5 min",
        summary: "Adicionada a nova fruta mística, balanceamento de espadas no Terceiro Mar e evento de Raid Boss lendário por tempo limitado.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=70"
    },
    {
        id: 2,
        name: "Brookhaven RP",
        category: "Social",
        version: "v1.84",
        date: "Há 42 min",
        summary: "Nova mansão moderna de luxo adicionada, novos veículos elétricos na concessionária e animações inéditas de roleplay.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=70"
    },
    {
        id: 3,
        name: "Grow a Garden",
        category: "Simulador",
        version: "Patch 2.1",
        date: "Há 1 hora",
        summary: "Sistema de regadores automáticos adicionado, 4 sementes híbridas novas e correções de bugs na expansão dos terrenos.",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=70"
    },
    {
        id: 4,
        name: "Adopt Me!",
        category: "Social",
        version: "Event Up",
        date: "Há 2 horas",
        summary: "Início do evento das Ilhas Flutuantes. 3 novos pets míticos raros disponíveis por tempo limitado no mapa.",
        image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&q=70"
    },
    {
        id: 5,
        name: "Blue Lock Rivals",
        category: "Esporte",
        version: "S3",
        date: "Há 3 horas",
        summary: "Nova temporada competitiva! Chute 'Direct Shot' liberado, reformulação na barra de stamina e novos uniformes.",
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&q=70"
    }
];

let currentCategory = 'todos';

document.addEventListener("DOMContentLoaded", () => {
    renderCards(robloxGamesDatabase);
});

function renderCards(data) {
    const grid = document.getElementById("updatesGrid");
    const noResults = document.getElementById("noResults");
    
    const oldCards = grid.querySelectorAll(".card");
    oldCards.forEach(card => card.remove());

    if (data.length === 0) {
        noResults.style.display = "block";
        return;
    } else {
        noResults.style.display = "none";
    }

    data.forEach(game => {
        const cardHTML = `
            <article class="card">
                <div class="card-img-container">
                    <img src="${game.image}" alt="${game.name}" loading="lazy">
                    <span class="category-badge">${game.category}</span>
                </div>
                <div class="card-content">
                    <div class="card-meta">
                        <span><i class="fa-regular fa-clock"></i> ${game.date}</span>
                    </div>
                    <h3 class="card-title">${game.name}</h3>
                    <p class="card-summary">${game.summary}</p>
                    <div class="card-footer">
                        <span class="version-tag">${game.version}</span>
                        <button class="btn-logs" onclick="alert('Novidades completas enviadas para o console mobile.')">Ver Mais <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </article>
        `;
        grid.insertAdjacentHTML("beforeend", cardHTML);
    });
}

function filterGames() {
    const searchInputValue = document.getElementById("searchInput").value.toLowerCase();
    
    const filteredData = robloxGamesDatabase.filter(game => {
        const matchesSearch = game.name.toLowerCase().includes(searchInputValue);
        const matchesCategory = currentCategory === 'todos' || game.category === currentCategory;
        return matchesSearch && matchesCategory;
    });

    renderCards(filteredData);
}

function filterCategory(category, buttonElement) {
    const buttons = document.querySelectorAll(".category-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    buttonElement.classList.add("active");

    currentCategory = category;
    filterGames();
      }
                     
