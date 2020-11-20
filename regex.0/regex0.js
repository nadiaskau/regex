
let testUrl = "http://dksxit.eu/webdev/=site/ch13s06.html";

function getDomain(url){

let result;
let match;

if(match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^:\/\n\?\=]+)/im)) //den sidste del: stopper når der kommer et ? eller =
{
    debugger;
    result = match[1];

}
console.log(result);
return result;

}

getDomain(testUrl);
