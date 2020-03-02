// ==UserScript==
// @name AutoTaskCalStripper
// @namespace JoeCW
// @description Remove unneeded items from the calendar to display on the TV
// @include https://ww3.autotask.net/Autotask/Views/DispatcherWorkshop/DispatcherWorkshopView.aspx
// @version 0.0.1
// ==/UserScript==

//document.getElementsByClassName('BOTTOM')[0].remove()
window.addEventListener('load', function() {
    //These were used on the original calendar view. The URL above is MUCH easier to display
    //as it has most of the items stripped out already
    //Set the calendar to 1 day view.
    //var Bottomframe = document.getElementById("BOTTOM");
    //Bottomframe.parentNode.removeChild(Bottomframe);
    //var Topframe = document.getElementById("TOP");
    //var badelement = Topframe.contentWindow.document.getElementById("Form1");
    //badelement.style.display ="none"
    var topbar = document.getElementById("Form1")
    topbar.style.display = "none"
}, false);
