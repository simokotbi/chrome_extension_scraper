



  chrome.action.onClicked.addListener(async(tab) => {
    if(!tab.url.includes("chrome://")) {
     await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["app.js"]
      });
      
    }
  });