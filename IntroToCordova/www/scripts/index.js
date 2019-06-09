﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    document.addEventListener('deviceready', function () {


        cordova.plugins.notification.local.hasPermission(function (granted) { });

        cordova.plugins.notification.local.schedule({
            id: 1,
            title: '¿Le importaria realizar una encuesta?',
            actions: [
                { id: 'yes', title: 'Si' },
                { id: 'no', title: 'No' },
                { id: 'other', title: 'En otro momento' },
            ],
            firstAt: next_monday,
            trigger: { every: 'week', count: 3 }
        });

        cordova.plugins.notification.local.on('yes', function (notification) {
            if (notification.id = 1) {
                window.location.href = "index.html#!/selectencuesta";
                localStorage.setItem('notificationYes', 'Yes');
            }
        });

        if (localStorage.getItem('signedIn') == 'Yes' || localStorage.getItem('notificationSetting') == 'No' ) {
            cordova.plugins.notification.local.cancel(1, function () { }, scope);
        }


    });


    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        
        


        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

        
    };




    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };




} )();