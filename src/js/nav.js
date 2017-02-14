/**
 * Nav.
 *
 * @since 1.0.0
 * @author Blockshot
 */
 (function () {
    'use strict';

    var currentUrl = window.location.pathname.slice(6);
    //console.log(currentUrl);

    switch(currentUrl) {
        case "/gebouwbeheer.html":
            $('#gebouwbeheer').addClass('is-active');
            break;
        case "/interim-advies.html":
            $('#interim-advies').addClass('is-active');
            break;
        case "/projecten.html":
            $('#projecten').addClass('is-active');
            break;
        case "/ons-verhaal.html":
            $('#ons-verhaal').addClass('is-active');
            break;
        case "/onze-mensen.html":
            $('#onze-mensen').addClass('is-active');
            break;
        case "/vacatures.html":
            $('#vacatures').addClass('is-active');
            break;
        case "/contact.html":
            $('#contact').addClass('is-active');
            break;
        default:
            $('#index').addClass('is-active');
            break;
    }
    //console.log(currentUrl);

    //console.log($('#header').height());

 }());
