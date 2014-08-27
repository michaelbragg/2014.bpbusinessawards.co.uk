---
---

{% include bower_components/jquery/dist/jquery.min.js %}

/**
 * Responsive Navigation
 */
(function ( $ ) {

  $(document).ready(function() {


    $("#js-menu__icon").click(function () {
      $("#js-nav__main").toggleClass("is-active");
    });

  });

}(jQuery));

{% include js/jquery.svgfallback.js %}

{% include bower_components/FitVids/jquery.fitvids.js %}

{% include bower_components/FlipClock/compiled/flipclock.min.js %}

(function ( $ ) {

  $(document).ready(function() {

    // Grab the current date
    var currentDate = new Date(),
    // Set the closing date
        futureDate  = new Date('2014-09-26T15:00:00'),
    // Calculate the difference in seconds between the future and current date
        diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    // Instantiate a coutdown FlipClock
        clock = $('#js-countdown').FlipClock(diff, {
          clockFace: 'DailyCounter',
          countdown: true,
          showSeconds: false
        });

  });

}(jQuery));
