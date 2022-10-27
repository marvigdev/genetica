new Glide(".topics", {
  type: "slider",
  perView: 3,
  rewind: false,
  breakpoints: {
    600: { perView: 1 },
    800: { perView: 2 },
  },
}).mount();
