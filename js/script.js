const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("show");
  });
}

const searchInput = document.getElementById("characterSearch");
const characterCards = document.querySelectorAll(".character-card");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    characterCards.forEach((card) => {
      const name = card.dataset.name.toLowerCase();
      const role = card.dataset.role.toLowerCase();
      const symbol = card.dataset.symbol.toLowerCase();

      const matches =
        name.includes(query) || role.includes(query) || symbol.includes(query);

      card.style.display = matches ? "block" : "none";
    });
  });
}
