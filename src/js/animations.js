const animations=()=>{

/*

    Loading Page Animation Tasks:
    1. Fade in #js-company-name: 5s
    2. Fade out #js-company-name: 5s with 1 delay of start
    3. loading page display none

    Landing Page Animation Tasks:
    1. Grow Landing Bg Image from the bottom: 0vh -> 100vh: 3s

*/

  //-------------------------- Variables ---------------------------------//

  $body = $('body');

  //Loading Page:
  let $jsCompanyName = $('#js-company-name'),
      $jsLoadingPage = $('#js-loader');

  //Landing Page:
    let $jsLandingPage = $('#js-landing-page'),
        $jsBgEffect = $('#js-bg-effect');



//-------------------------- Initialize ---------------------------------//


  (function init(){

      //Loading:
      TweenMax.set($jsCompanyName, {opacity: 0, autoAlpha: 0});

      //Landing:
      TweenMax.set($body, {overflow: 'hidden'});
      TweenMax.set($jsBgEffect, {bottom: '100vh', scale: 1});

  })();

//-------------------------- Function Calls ---------------------------------//

  gsapAnimations();


//-------------------------- Function Creation ---------------------------------//

  //gsapAnimations function
  function gsapAnimations(){

    //Loading page timeline + animations
    let loadingTimeline = new TimelineMax({delay: .8, onComplete: function(){
            TweenLite.set($jsLoadingPage, {opacity: 0, autoAlpha: 0, display: 'none'})
       }
     });

    loadingTimeline
      .to($jsCompanyName, 3, {opacity: 1, autoAlpha: 1, ease: Power4.easeOut})
      .to($jsCompanyName, .8, {opacity: 0, autoAlpha: 0})


    //Landing Page timeline + animations
    let landingTimeline = new TimelineMax({onComplete: function(){
            // $jsScrollIndicator.addClass('scroll-line-animation');
          }
       });

    landingTimeline
        .to($jsBgEffect, 1.7, {bottom: '0vh', ease: Power4.easeOut})



    //master timeline
    let masterTimeline = new TimelineLite();
    masterTimeline
      .add(loadingTimeline)
      .add(landingTimeline, '-=.4')

  }

//-------------------------- Click Function Creation ---------------------------------//

// landing page btn
// $body.click(function(){
//
//   let landingTransitionTimeline = new TimelineLite();
//
//   landingTransitionTimeline
//     .to($testFrame, 4, {left: '50%', bottom: '0'})
//     // .to($jsBgGrow, 4, {x: '50%', backgroundPositionX: '-30%', ease: Power4.easeOut})
//     // .to($jsFrameBgGrow, .7, {width: '60%', height: '100%', ease: Power4.linear})
//     // .to($jsBgGrow, .7, {width: '80%', height: '100%', ease: Power4.linear}, '0')
//     // .addLabel('height-shrink')
//     //.to($jsBgGrow, 5.5, {height: '400px', width: '400px', ease: Power4.easeInOut})
//     // .to($jsBgGrow, .7, {height: '70%', width: '70%', ease: Power4.linear}, 'height-shrink')
// });




};
//END OF ANIMATION FUNCTION
