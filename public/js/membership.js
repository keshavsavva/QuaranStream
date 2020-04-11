document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
  });

  $(document).ready(function(){
    $('.slider').slider();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });

        

const images = [
    {id: 'f0heeiu-Ec0', caption: 'Flower #1'},
    {id: '5lRxNLHfZOY', caption: 'Flower #2'},
    {id: 'aolmXcUxr7Y', caption: 'Flower #3'},
    {id: 'TORI6YW1fHE', caption: 'Flower #4'},
    {id: '7NBO76G5JsE', caption: 'Flower #5'},
  ];

  const build = () => {
    const url = 'https://source.unsplash.com';
    const [width, height] = [200, 200];
    return images.reduce((html, image) => {
      image.thumb = `${url}/${image.id}/${width}x${height}`;
      image.url = `${url}/${image.id}`;  
      return html += (
        `<a href="#" class="carousel-item">`+
          `<img `+
            `src="${image.thumb}" `+
            `class="materialboxed" `+
            `width="${width}" `+
            `data-caption="${image.caption}" `+
          `/>`+
        `</a>`
      );
    }, '');
  };

  const carouselOptions = {
    duration: 100,
    dist: -50,
    spacing: 2,
  };

  const materialBoxOptions = {
    inDuration: 150,
    outDuration: 150,
  };

  jQuery(document).ready(() => {
    jQuery('#the-carousel').html(build());
    jQuery('#the-carousel').carousel(carouselOptions);
    jQuery('.materialboxed').materialbox(materialBoxOptions);

    $('.carousel').carousel({
        dist:0,
        shift:0,
        padding:20,

  });
  });
});