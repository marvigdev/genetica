const btn = $("#popover-racas-btn");
const fechar = $("#racas-content-fechar");
const content = $("#popover-racas-content");

content.hide();

let carousel;
btn.click(() => {
  content.fadeIn(250);
    
  if (!carousel) {
    carousel = new Glide(".racas-carousel", {
      type: "carousel",
      perView: 3,
      rewind: false,
      breakpoints: {
        600: { perView: 1 },
      },
    });
    carousel.mount()
  } else {
    carousel.update();
  }
});

fechar.click(() => {
  content.fadeOut(250);
});

// Inicializa slider de tópicos
new Glide(".topics", {
  type: "slider",
  perView: 2,
  rewind: false,
  breakpoints: {
    600: { perView: 1 },
    800: { perView: 2 },
  },
}).mount();
