$(function () {
  container = document.getElementById('.info-title');

  var text = new Blotter.Text('', {
    family: 'serif',
    size: 150,
    fill: '#000',
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 80,
    paddingBottom: 80,
  });

  var material = new Blotter.ChannelSplitMaterial();
  material.uniforms.uOffset.value = 0.05;
  material.uniforms.uRotation.value = 50;
  material.uniforms.uApplyBlur.value = 1;
  material.uniforms.uAnimateNoise.value = 0.3;

  var blotter = new Blotter(material, {
    texts: text,
  });

  var scope = blotter.forText(text);

  scope.appendTo(container);

  //   Add mousemove effect

  document.onmousemove = moveIt;
  function moveIt(event) {
    material.uniforms.uRotation.value = event.clientX * 0.1;
    material.uniforms.uOffset.value = event.clientX * 0.0001;
  }
});
