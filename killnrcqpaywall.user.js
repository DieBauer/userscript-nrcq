// ==UserScript==
// @name       Kill nrcQ restrictions
// @namespace  http://use.i.E.your.homepage/
// @version    0.2
// @description  When browsing nrcq with more than 10 views you need to sign in to view the content, this plugin disables the lay-over.
// @match      http://www.nrcq.nl/*
// @copyright  2015+, You
// @run-at document-start
// @grant       none
// ==/UserScript==

// initialize the objects
window.nmt = window.nmt || {};
nmt.q = nmt.q || {};

// The observer function.
var observer = function(changes) {
  changes.forEach(function(change) {
    // Any time boxy is added to nmt.q
    if (change.name == 'boxy') {
      // mock the boxy inDom func.
      nmt.q.boxy = function(x) {
        this.inDom = false;
      }
      // destroy the observer
      doUnobserve(nmt.q);
    };
  });
};

// Use experimental feature.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe#Browser_compatibility
Object.observe(nmt.q, observer, ["add"]);

function doUnobserve(obj) {
  Object.unobserve(obj, observer);
}
