// ==UserScript==
// @name       Kill nrcQ restrictions
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  When browsing nrcq with more than 10 views you need to sign in to view the content, this plugin disables the lay-over.
// @match      http://www.nrcq.nl/*
// @copyright  2015+, You
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// ==/UserScript==

// Load the jquery library.
this.$ = this.jQuery = jQuery.noConflict(true);

$(document).ready(function()
  {
    // change the class from opened to closed
    $(document.body).removeClass("boxy-opened").addClass("boxy-closed");

    // Remove the overlays.
    $('div.boxy-overlay').remove();
    $('div.boxy').remove();
  }
);
