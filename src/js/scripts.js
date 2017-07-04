
var jQuery = $ = require('jquery');
require('gsap');

$(document).ready(function(){

  animations();

  $("#js-glitch-img").noisy({
    _w: 300,
    _h: 600,
    img: "img/developer-test.jpg",
    delay: 2000
  });

  $(window).resize(function(){
    setHeight();
  })


});
