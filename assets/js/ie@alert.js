// ie function
function _ie(){
    
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    // other browser
    return false;
    
}

function _ieAlert(){
    // Get IE or Edge browser version
    var version = _ie();

    if (version) {
        document.getElementById('_IE-Alert').innerHTML = '<div class="_IE-alert"></div>';
        $("body").css('overflow','hidden');
    }
}

// ready ie
_ie();
_ieAlert();
