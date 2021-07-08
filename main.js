function go() {
    function getCPU() {
        $('#cpu').html("CPU: " + navigator.hardwareConcurrency + "xCore | ");
    }
    getCPU();

    function getIP() {
        $.getJSON('https://api.ipify.org?format=json', function (data) {
            $('#ip').html("IP: " + data.ip + " | ");
        });
    }
    getIP();

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
}

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        height: "100%",
        top: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        top: "100%",
        ease: "Expo.easeInOut",
    });
    tl.set(".loading-screen", {
        top: "-100%"
    });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        delay: 0.2
    });

}

$(function () {

    barba.init({
        sync: true,
        transitions: [{
            async leave(data) {
                const done = this.async();
                pageTransition();
                await delay(1000);
                done();
            },

            async enter(data) {
                contentAnimation();
            },

            async once(data) {
                contentAnimation();
            },
        }, ],
    });
    go();
    
});





