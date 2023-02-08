(function () {
    /**

     * Icarus 夜间模式 by iMaeGoo
     * https://www.imaegoo.com/
        */

    var isNight = localStorage.getItem('night');
    var nightNav;

    function applyNight(value) {
        if (value.toString() === 'true') {
            document.body.classList.remove('light');
            document.body.classList.add('night');
        } else {
            document.body.classList.remove('night');
            document.body.classList.add('light');
        }
    }

    // Auto night toggle based on local time
    let hour = new Date().getHours();
    console.log("Local hour: " + hour)

    if (hour >= 18 || hour <= 6) {
        applyNight('true')
        console.log("Auto night")
    } else {
        applyNight('true')
        console.log("Auto day")
    }

    // function findNightNav() {
    //     nightNav = document.getElementById('night-nav');
    //     if (!nightNav) {
    //         setTimeout(findNightNav, 100);
    //     } else {
    //         nightNav.addEventListener('click', switchNight);
    //     }
    // }

    // function switchNight() {
    //     isNight = isNight ? isNight.toString() !== 'true' : true;
    //     applyNight(isNight);
    //     localStorage.setItem('night', isNight);
    // }

    // findNightNav();
    // isNight && applyNight(isNight);
  }());
