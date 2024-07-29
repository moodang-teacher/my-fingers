function rotateAndMorphBlob() {
  const blobs = {
    pathA:
      'M68.1,-22.7C73.8,-4.5,54.1,21.3,33,33.9C11.9,46.5,-10.5,45.9,-28.7,34C-47,22,-61.1,-1.2,-55.6,-19C-50.2,-36.8,-25.1,-49.1,3.1,-50.1C31.2,-51.1,62.4,-40.8,68.1,-22.7Z',
    pathB:
      'M66.7,-22.9C74.8,3.1,61.5,34.8,40.3,48.5C19.1,62.3,-10.1,58.2,-32.2,42.5C-54.3,26.9,-69.4,-0.3,-62.9,-24.2C-56.3,-48.1,-28.2,-68.7,0.6,-68.9C29.3,-69.1,58.7,-48.8,66.7,-22.9Z',
    pathC:
      'M38.8,-15.7C45,6.6,41.3,29.1,26.4,41.1C11.5,53,-14.5,54.4,-30.4,42.7C-46.2,31,-51.9,6.1,-45.2,-17C-38.4,-40,-19.2,-61.3,-1.5,-60.9C16.3,-60.4,32.5,-38.1,38.8,-15.7Z',
  };

  anime({
    targets: 'div',
    autoplay: true,
    loop: true,
    duration: 6000,
    rotate: '1turn',
    easing: 'linear',
  });

  anime({
    targets: 'svg path',
    d: [{ value: blobs.pathA }, { value: blobs.pathB }, { value: blobs.pathC }],
    autoplay: true,
    loop: true,
    duration: 3000,
    direction: 'alternate',
    easing: 'linear',
  });
}

rotateAndMorphBlob();
