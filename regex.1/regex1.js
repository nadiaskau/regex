
let str = '<p href="missme" class="test"><a href="www.dkexit.eu/asdfasdfas" onclick="">delete</a></p>'

function getTagAndUrl(page){

    let urlw = /<a href="(.*?)"/g;
    let url = /(.*?)<\/a>/g;
    while(match=url.exec(str)){
      debugger;

    	console.log(match[1]);
    }
/*
    while(match2=txt.exec(str)){

    	console.log(match2[1]);
    }

    console.log(txt);*/
}



getTagAndUrl(str);
