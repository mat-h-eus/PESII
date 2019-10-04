/*
var pdf_table_extractor = require("pdf-table-extractor");
 
//PDF parsed
function success(result)
{
   console.log(JSON.stringify(result));
}
 
//Error
function error(err)
{
   console.error('Error: ' + err);
}
 
//pdf_table_extractor("via_upa.pdf",success,error);
*/

const rp = require('request-promise');
const $ = require('cheerio');
const fs = require("fs");
const request = require("request");
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

function download(uri, filename, callback) {
   request.head(uri, function(err, res, body) {
     request(uri)
     .pipe(fs.createWriteStream(filename))
     .on("close", callback);
  });
 }

rp(url)
  .then(function(html){
    //success!
   const urlss = [];
   const htmls = $('.image > img', html);
    
    for(let i = 0; i < 45; i++){
         let urlA = htmls[i].attribs.src;
         download("http:"+urlA, "./saveHere/pres"+i+".png", function(){
            console.log(i+" imagem baixada");
         })
    }

    console.log(urlss);
    console.log($('big > a', html).length);
  })
  .catch(function(err){
    //handle error
    console.log("erro")
    console.log(err)
  });



