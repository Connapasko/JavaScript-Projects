let index = 0;
function changeColors() {
  let colors = [
    "red",
    "blue",
    "purple",
    "indigo",
    "violet",
    "cyan",
    "magenta",
    "turquoise",
    "springgreen",
    "fuchsia",
  ];

  document.querySelector("body").style.background = colors[index++];

  if (index > colors.length - 1) {
    index = 0;
  }
}
