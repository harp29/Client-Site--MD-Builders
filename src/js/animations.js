const animations=()=>{

  //Universal Variables
  const $body = $('body');

  // Loading Variables
  const $jsContentContainer = $('#js-content-container');
  const $jsLoaderPage = $('#js-loader-page');
  const $wordBreakElement = $('#js-caption-wordbreak');
  const $jsLogoContainer = $('#js-logo-container');
  const $jsDiscoverCta = $('#js-discover-cta');
  const tlLoad = new TimelineLite();

  // Landing Variables
  const $scaleDown = $('#js-scale-down');
  const tlLand = new TimelineLite();

//Loading effects:
  tlLoad
   .set($body, {overflow: 'hidden'})
   .call(wordBreak($wordBreakElement))
   .to($jsLogoContainer, 1.5, {opacity:'1', autoAlpha:'1', ease:Power4.easeInOut}, '+=3')
   .to($jsDiscoverCta, 1.5, {opacity:'1', autoAlpha:'1', ease:Power4.easeInOut}, '-=1.2');


//Landing Page effects onclick
  $jsDiscoverCta.click(function(){

    tlLand
     .to($jsLoaderPage, .7, {opacity: '0', autoAlpha: '0', ease: Power2.easeOut})
     .set($jsLoaderPage, {display:'none'})
     .to($scaleDown, .6, {opacity: '1', autoAlpha: '1', scale: '1', ease: Power4.easeOut}, '-=.2')

  });


}
