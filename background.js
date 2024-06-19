// background.js
"use strict";
/**
 * Can load either "background" or "content_scripts" by pressing button
 */
function openTab(){
    var newTab = browser.tabs.create({ 
      url: "/bugreport.html",
      active:true
    }).then(() => {
      browser.tabs.executeScript({
        code: `console.log('Add-on:', 'bugreport');`,
      });
    });
}
browser.browserAction.onClicked.addListener(openTab)
