var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var data = require('./output.json');
//var data = require('./output-2.json');
var input = require('./input.json');

const getWords = () => {
    const url = 'https://www.ezglot.com/words-ending-with.php?l=lat&w=io';
	return new Promise(function(resolve, reject) {
        request(url, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);

			const parent = $('.relations');
			const array = parent.find('ul').children();
            const result = [];

            array.each(function(index, el) {
                const a = $(this).children().first().children().first().text();
                result.push(a);
            });
            resolve(result);
		}
	})})
}


app.get('/sort', function(req, res) {
    res.send(input.sort((a, b) => {
        return a.length - b.length;
    }))
});

app.get('/scrape', function(req, res){
    const out = [];
    const promises = data.slice(1000,2000).map(item => {
        return new Promise((resolve, reject) => {
            const url = 'https://domainr.com/?q=';
            request(url + item, function(error, response, html){
                if(!error){
                    var $ = cheerio.load(html);
                    var domain, status;
                    var json = { domain: '', available: false };
                    $('.search-results').filter(function(){
                        var data = $(this);
                        available = data.children().first().children().last().text().toLowerCase().indexOf('available') > -1;
                        domain = data.children().first().data('result');
                        if (available) {
                            json.available = available;
                            json.domain = domain;
                            resolve(json);
                            return json;
                        } else {
                            json.domain = domain;
                            resolve(json);
                        }
                    })
                } else {
                    reject();
                }
            });
         });
    });
    Promise.all(promises).then((value) => {
        const result = value.filter(a => {
            return a.available;
        })
        res.send(result.map(x => x.domain));
    })

})

app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;
