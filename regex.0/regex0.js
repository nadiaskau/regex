
let testUrl = "http://dkexit.eu/webdev/site/ch13s06.html";

function getDomain(url){

let result;
let match;

if(match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im))
{
    debugger;
    result = match[1];
    
}
console.log(result);
return result;

}

getDomain(testUrl);

