
let str = '<p href="missme" class="test"><a href="/CustomContentProcess.aspx?CCID=13524&amp;OID=3936923&amp;A=Delete" onclick="">delete</a></p>'
    
function getTagAndUrl(page){
    
    var patt = /<a href="(.*)"/g;
    while(match=patt.exec(str)){
        
    	console.log(match[1]);
    }
}



getTagAndUrl(str);