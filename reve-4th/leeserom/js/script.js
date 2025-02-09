//inspiration from http://www.insymbiosis.com/

const nav = document.querySelector('.nav');
const navPath = document.querySelector('.navPath');

function wobble(el, elTrigger, toSpeed, fromSpeed) {
  const s = Snap(el);
  const path = s.select('path');

  const pathConfig = {
    toSpeed,
    fromSpeed,
    from: path.attr('d'),
    to: el.getAttribute('data-morph-active') };


  elTrigger.addEventListener('mouseenter', () => {
    path.animate({ 'path': pathConfig.to }, pathConfig.toSpeed, mina.easein);

    setTimeout(() => {
      path.animate({ 'path': pathConfig.from }, pathConfig.fromSpeed, mina.elastic);
    }, pathConfig.toSpeed);

  });
}

/* wobble(button, button, 150, 1500); */
wobble(nav, navPath, 150, 2500);

