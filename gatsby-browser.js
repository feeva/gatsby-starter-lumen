'use strict';

require('./src/assets/scss/init.scss');
require('./static/css/prismjs/prism-dracula.css');
require('prismjs/plugins/line-numbers/prism-line-numbers.css');
require('./static/css/custom.css');

exports.onClientEntry = () => {
  // Zoom images inside image-grid
  document.body.addEventListener('click', zoomImage);
};

const zoomImage = (e) => {
  const img = e.target;
  const matches = img.matches || img.matchesSelector
                || img.msMatchesSelector || img.webkitMatchesSelector;

  if (!matches.call(img, '.gatsby-resp-image-wrapper picture img') || matches.call(img, 'a img')) {
    return;
  }

  const loader = new Image();
  loader.src = img.src;
  const bounds = img.getBoundingClientRect();
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;
  const scale = winWidth / winHeight > bounds.width / bounds.height
    ? winHeight / bounds.height : winHeight / bounds.height;
  const width = winWidth / scale;
  const height = winHeight / scale;
  const left = bounds.x - (width - bounds.width) * 0.5;
  const top = bounds.y - (height - bounds.height) * 0.5;

  // gatsby-image seems to delegate image click events.
  // source image generates clicks even after detached.
  // so here we create a new image.
  const zoomer = document.createElement('img');
  zoomer.src = img.currentSrc;
  zoomer.className = 'zoomer';
  zoomer.style.cssText = `left: ${left}px; top: ${top}px; width: ${width}px; height: ${height}px;`;
  document.body.appendChild(zoomer);

  setTimeout(() => {
    zoomer.style.cssText = `left: 0; top: 0; width: ${width}px; height: ${height}px;
      transform:scale(${scale}); background-color: rgba(0,0,0,.7); opacity: 1;`;
  }, 0);
  zoomer.addEventListener('transitionend', () => { zoomer.src = loader.src; });

  function remover() {
    window.removeEventListener('scroll', remover);
    document.body.removeChild(zoomer);
  }
  zoomer.onclick = remover;
  window.addEventListener('scroll', remover);
};
