$(document).ready(function() {
  // Sticky Footer initial page load
  var bodyHeight = $('body').height();
  var navbarHeight = $('.navbar-static-top').height();
  var bannerHeight = $('.bannerwrapper').height();
  var footerHeight = $('.footer').height();
  var calcContentHeight = bodyHeight - navbarHeight - bannerHeight - footerHeight - 131; //change last value to compensate for padding.

  if (calcContentHeight > 0) {
      $('.content').css({'min-height': calcContentHeight});
  }

  // Sticky Footer on browser resize
  $(window).resize(function(){
      var bodyHeight = $('body').height();
      var navbarHeight = $('.navbar-static-top').height();
      var bannerHeight = $('.bannerwrapper').height();
      var footerHeight = $('.footer').height();
      var calcContentHeight = bodyHeight - navbarHeight - bannerHeight - footerHeight - 131; //change last value to compensate for padding.

      if (calcContentHeight > 0) {
          $('.content').css({'min-height': calcContentHeight});
      }

  });
});
