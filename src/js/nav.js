/**
 * Nav.
 *
 * @since 1.0.0
 * @author Blockshot
 */
 (function () {
    'use strict';

    var currentUrl = window.location.pathname;

    if(currentUrl.indexOf("index") > -1 ) { $('#index').addClass('is-active');} else { $('#index').removeClass('is-active');}
    if(currentUrl.indexOf("gebouwbeheer") > -1 ) { $('#gebouwbeheer').addClass('is-active');} else { $('#gebouwbeheer').removeClass('is-active');}
    if(currentUrl.indexOf("interim-advies") > -1 ) { $('#interim-advies').addClass('is-active');} else { $('#interim-advies').removeClass('is-active');}
    if(currentUrl.indexOf("ons-verhaal") > -1 ) { $('#ons-verhaal').addClass('is-active');} else { $('#ons-verhaal').removeClass('is-active');}
    if(currentUrl.indexOf("onze-mensen") > -1 ) { $('#onze-mensen').addClass('is-active');} else { $('#onze-mensen').removeClass('is-active');}
    if(currentUrl.indexOf("vacature") > -1 ) { $('#vacature').addClass('is-active');} else { $('#vacature').removeClass('is-active');}
    if(currentUrl.indexOf("contact") > -1 ) { $('#contact').addClass('is-active');} else { $('#contact').removeClass('is-active');}

    //console.log($('#main').offset().top);

    //console.log($('#header').height());

 }());
