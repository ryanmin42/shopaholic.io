var rightClick = {
  "id": "searchWeb",
  "title": "Find deals with Shopaholic",
  "contexts": ["selection"],
};
chrome.contextMenus.create(rightClick);
chrome.contextMenus.onClicked.addListener(shop);
function shop(info) {
  var product = info.selectionText;
  var markets = ["https://www.amazon.ca/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=" + product, "https://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&CatId=&SearchText=" + product, "http://www.ebay.com/sch/" + product];
  for (var i = 0; i < markets.length; i++) {
    chrome.tabs.create({
      url: markets[i]
    });
  }
}
