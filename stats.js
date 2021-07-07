function go() {
    function getCPU() {
        $('#cpu').html("CPU: " + navigator.hardwareConcurrency + "xCore | ");
    }
    getCPU();

    function getScreen() {
        var rh = window.innerHeight;
        var rw = window.innerWidth;
        $('#screen').html("Screen" + rw + "x" + rh + " | ");
    }
    getScreen();

    function getAgent() {
        $('#agent').html(navigator.appCodeName + ":" + navigator['platform']);
    }
    getAgent();

    /* cookies */
    function checkCookie() {
        var cookieEnabled = navigator.cookieEnabled;
        if (!cookieEnabled) {
            document.cookie = "testcookie";
            cookieEnabled = document.cookie.indexOf("testcookie") != -1;
        }
        $('#cookies').html(" | Cookies: povoleno");
        return cookieEnabled || showCookieFail();
    }

    function showCookieFail() {
        $('#cookies').html(" | Cookies: zakázáno");
    }
    checkCookie();

    var x = document.getElementById("myLinks");

    function myFunction() {
        if (x.style.visibility === "visible") {
            x.style.visibility = "hidden";
            x.style.height = "0vh";
        } else {
            x.style.visibility = "visible";
            x.style.height = "100vh";
        }
    }
}

var x = document.getElementById("myLinks");
var y = document.getElementsByClassName("topnav")[0];
function myFunction() {
    if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
        x.style.display = "none;"
        y.style.background = "none";
        y.style.height = "0";
    } else {
        x.style.visibility = "visible";
        x.style.display = "flex";
        y.style.background = "#161616";
        y.style.height = "100vh";
    }



}
