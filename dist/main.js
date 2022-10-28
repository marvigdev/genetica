const btn = $("#popover-racas-btn");
const fechar = $("#racas-content-fechar");
const content = $("#popover-racas-content");

content.hide();

btn.click(() => {
  content.fadeIn(250);
});

fechar.click(() => {
  content.fadeOut(250);
});

// Inicializa slider de tópicos
new Glide(".topics", {
  type: "slider",
  perView: 3,
  rewind: false,
  breakpoints: {
    600: { perView: 1 },
    800: { perView: 2 },
  },
}).mount();

// Inicializa slider de tópicos
new Glide(".racas-carousel", {
  type: "carousel",
  perView: 3,
  rewind: false,
  breakpoints: {
    600: { perView: 1 },
    800: { perView: 2 },
  },
}).mount();
