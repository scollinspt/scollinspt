const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#site-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

const publicationSearch = document.querySelector("#publication-search");
const publicationEntries = [...document.querySelectorAll(".bibliography-list li")];
const resultCount = document.querySelector("#publication-result-count");

publicationSearch?.addEventListener("input", () => {
  const query = publicationSearch.value.trim().toLowerCase();
  let visible = 0;

  publicationEntries.forEach((entry) => {
    const matches = entry.textContent.toLowerCase().includes(query);
    entry.hidden = !matches;
    if (matches) visible += 1;
  });

  document.querySelectorAll(".bibliography-section").forEach((section) => {
    section.hidden = !section.querySelector("li:not([hidden])");
  });

  if (resultCount) {
    resultCount.textContent = query
      ? `${visible} ${visible === 1 ? "entry" : "entries"} found`
      : `${publicationEntries.length} entries`;
  }
});
