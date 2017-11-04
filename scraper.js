let cheerio = require("/cheerio-master/package.json");
let $ = cheerio.load('https://www.ebay.ca/sch/gtx+1070');

var productsList = [];

// For each .item, we add all the structure of a product to the productsList array
// Don't try to understand what follows because we will do it differently.
$('.li').each(function(index, element){
	productsList[index] = {};
	var name =$(element).find('.vip').text();
	productsList[index]['price'] = $(element).find('.prc .bold').text();
	productsList[index]['url'] = $(element).find('.vip').getAttribute('href');
	productsList[index]['availability'] = $(element).find('.lvformat span').text();
	productsList[index]['shipping'] = $(element).find('.lvshipping').text();
	productsList[index]['location'] = $(element).find('.timeleft + li').text();
	//productsList[index]['image'] = $(element).find('.img').text();
});

console.log(productsList); // Output the data in the terminal
alert(productsList);
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);
    }
  }
);
