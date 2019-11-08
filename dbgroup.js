// A carousel can display `perView` logos at once. The number of logos that we
// decide to show depends on the size of the screen. If the screen is big, we
// can show a lot. If the screen is small, we can only show a few.
// `perViewFromWidth` takes in width of each logo and spits out a number of
// logos that looks good on the given screen size.
function perViewFromWidth(logo_width) {
  // The .center element is 700px wide.
  const width = Math.min(window.screen.width, 700);
  return Math.max(1, Math.floor(width / logo_width) - 1);
}

function setup_carousel(id, logo_width) {
  const glide = new Glide(id, {
    type: 'carousel',
    perView: perViewFromWidth(logo_width),
    autoplay: 2000,
    hoverpause: true,
    keyboard: false,
  });

  glide.on('resize', function() {
    glide.update({perView: perViewFromWidth(logo_width)});
  });

  glide.mount();
}

function main() {
  setup_carousel('#university-logos', 75);
  setup_carousel('#company-logos', 150);
  setup_carousel('#startup-logos', 150);
}

window.onload = main;
