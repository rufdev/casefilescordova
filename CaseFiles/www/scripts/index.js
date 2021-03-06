﻿//// For an introduction to the Blank template, see the following documentation:
//// http://go.microsoft.com/fwlink/?LinkID=397704
//// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
//// and then run "window.location.reload()" in the JavaScript Console.
//(function () {
//    "use strict";

//    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

//    function onDeviceReady() {
//        // Handle the Cordova pause and resume events
//        //document.addEventListener( 'pause', onPause.bind( this ), false );
//        //document.addEventListener( 'resume', onResume.bind( this ), false );
        
//        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
//        //var parentElement = document.getElementById('deviceready');
//        //var listeningElement = parentElement.querySelector('.listening');
//        //var receivedElement = parentElement.querySelector('.received');
//        //listeningElement.setAttribute('style', 'display:none;');
//        //receivedElement.setAttribute('style', 'display:block;');

//        //$('#get-cases').click(function () {
//        //    $("#case-list").show();
//        //    $.get("http://mangtaswebapi.dev/api/cases", function (data) {
//        //        var cases = [];
//        //        $.each(data.cases, function (k, v) {
//        //            cases.push('<li data-role="list-divider" id="title" class="ui-li-divider ui-bar-a">'+v.caseno+'</li>');
//        //            cases.push('<li>Case Title: <span>' + v.title + '</span></li>');
//        //        });
//        //        $("#case-list").html(cases.join(""));
                
//        //    });
//        //    return false;
//        //});
//        //if (navigator.connection.type == Connection.NONE) {
//        //    navigator.notification.alert('An internet connection is required to continue');
//        //} else {
//            window.location = "http://mangtaswebapi-aguilarufino790764.codeanyapp.com";
//        //}
//    };
   
//    function onPause() {
//        // TODO: This application has been suspended. Save application state here.
//    };

//    function onResume() {
//        // TODO: This application has been reactivated. Restore application state here.
//    };
//} )();

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');

        // Here, we redirect to the web site.
        var targetUrl = "http://mangtaswebapi-aguilarufino790764.codeanyapp.com";
        var bkpLink = document.getElementById("bkpLink");
        bkpLink.setAttribute("href", targetUrl);
        bkpLink.text = targetUrl;
        window.location.replace(targetUrl);
    },
    // Note: This code is taken from the Cordova CLI template.
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();