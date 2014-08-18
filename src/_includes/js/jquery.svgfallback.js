/*! SVG Fallback for unsupported browsers */
if(!Modernizr.svg){$('img').each(function(){$(this).attr('src',$(this).data('fallback'));});}
