/*! SVG Fallback for unsupported browsers */
(function($){if(!Modernizr.svg){$('img').each(function(){$(this).attr('src',$(this).data('fallback'));});}}(jQuery));
