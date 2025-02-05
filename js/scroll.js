const links = document.querySelectorAll(".menu-list__link");
const mainBtn = document.querySelector(".main__button");
const mainScroll = document.querySelector(".main__scroll");

const allLinks = [...links, mainBtn, mainScroll];

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const id = link.getAttribute("href").substring(1);
    const section = document.getElementById(id);

    if (section) {
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  });
});
