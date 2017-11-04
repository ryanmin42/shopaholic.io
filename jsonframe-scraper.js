let cheerio = require("/cheerio-master/package.json");
let jsonframe = require("/jsonframe-cheerio-master/package.json");

let $ = cheerio.load('https://www.ebay.ca/sch/gtx+1070');
jsonframe($); // initializes the plugin

var frame = {
	"product": {           // setting the parent item as "companies"
		"selector": ".li",    // defines the elements to search for
		"data": [{              // "data": [{}] defines a list of items
			"name": ".vip",          // inline selector defining "name" so "company"."name"
			"price": ".prc .bold", // inline selector defining "description" as "company"."description"
			"url": {                                    // defining "url" by an attribute with "attr" and "selector" in an object
				"selector": ".vip",      // is actually the same as the inline selector
				"attr": "href"                              // the attribute name to retrieve
			},
			"availability": ".lvformat span",
			"shipping": ".lvshipping",
			"location": ".timeleft +li",
		}]
	}

};

var companiesList = $('.ul').scrape(frame);
console.log(companiesList); // Output the data in the terminal
