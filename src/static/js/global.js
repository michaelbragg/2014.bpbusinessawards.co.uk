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

{% include bower_components/mb-comingsoon/jquery.mb-comingsoon.min.js %}

(function ( $ ) {

  $(document).ready(function() {

    $('#js-countdown').mbComingsoon({
            // For fun reason we need to -1 the number of the month
            expiryDate: new Date(2014, 8, 26, 17),
            localization: {
              days: "days",
              hours: "hours",
              minutes: "minutes",
              seconds: "seconds"
            }
        });

  });

}(jQuery));
