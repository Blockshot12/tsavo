/**
 * Nav.
 *
 * @since 1.0.0
 * @author Blockshot
 */
 (function () {
    'use strict';

    if(window.location.pathname.substring(0,6) == "/tsavo") {
        var currentUrl = window.location.pathname.slice(6);
    } else {
        var currentUrl = window.location.pathname;
    }

    //console.log(currentUrl);

    switch(currentUrl) {
        case "/vastgoedbeheer.html":
            $('#vastgoedbeheer').addClass('is-active');
            break;
        case "/interim-advies.html":
            $('#interim-advies').addClass('is-active');
            break;
        case "/klanten.html":
            $('#klanten').addClass('is-active');
            break;
        case "/ons-verhaal.html":
            $('#ons-verhaal').addClass('is-active');
            break;
        case "/mensen.html":
            $('#mensen').addClass('is-active');
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
