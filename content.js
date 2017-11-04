// content.js
alert("Hello from Shopaholic!")

/*chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
            switch (request.type){
                case "openModal":
                    $('#myModal').modal({
                       backdrop: 'static',
                       keyboard: false
                    });
                    break;
});

var iframe = document.createElement('iframe');
iframe.src = chrome.extension.getURL("window. html");
iframe.frameBorder = 0;
iframe.id = "myFrame";
$(iframe).hide();//necessary otherwise frame will be visible
$(iframe).appendTo("body");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);
    }
  }
);
