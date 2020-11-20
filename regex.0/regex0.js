
let testUrl = "http://dkexit.eu/webdev/=site/ch13s06.html";

function getDomain(url){

  let result;
  let match;

  if(match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/\n\?\=]+)/)) //den sidste del: stopper når der kommer et ? eller =
  //+ gør at domænet kommer med, ellers er output bare d
  {
      debugger;
      result = match[0];

  }
  console.log(result);
  return result;

}

getDomain(testUrl);
