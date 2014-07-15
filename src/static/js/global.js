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


    function loadStyleSheet(src){

        $("head").append($("<link rel='stylesheet' href='"+src+"' media='screen' >"));
    }

    loadStyleSheet('{{ site.url }}/static/css/global.css');

  });

}(jQuery));

{% include js/jquery.svgfallback.js %}
