//  import lottieWeb from 'https://cdn.skypack.dev/lottie-web';
// const container = document.getElementById('gay');

// var animation = lottieWeb.loadAnimation({
//   container:container ,
//   path: 'https://assets4.lottiefiles.com/packages/lf20_ht6o1bdu.json',
//   renderer: 'svg',
//   loop: false,
//   autoplay: false,
//   name: "Demo Animation",
// });

// container.addEventListener('click', () => {
//   animation.playSegments([0, 50], true);
// });
$(document).ready(function(){
    $(".btn1").click(function(){
      $("p").hide();
    });
    $(".btn2").click(function(){
      $("p").show();
    });
  });