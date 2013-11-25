


var recloc;
function recloc(event){
  document.getElementById('locationlist').style.display="block";
  document.getElementById('reclocations').style.display="none";
  document.getElementById('locsearch').style.opacity="0";
}
var locout;
function locout(x){
  document.getElementById('locationlist').style.display="none";
  document.getElementById('reclocations').style.display="block";
  document.getElementById('add1').style.display="none"; 
  document.getElementById('locsearch').style.opacity="1";
}
var addloc;
function addloc(event){
  document.getElementById('locationlist').style.display="block";

  
}

var addlocations;
var varaible1;
function addlocations(event){
varaible1=document.getElementById('addlocsearch').value;

}





var tb;
var add;
function add(event){

  var targ = event.srcElement||event.target;
  if(targ.tagName=="LI"){
    
    var tb=targ.innerHTML;
    
  }else{
    tb=document.getElementById('addlocsearch').value;
  }
         
  YUI().use('node', 'yql','json-parse', function(Y) { 
  var JSONObject = {
                     "0":{
                              "tags":"rainy",
                             "class":"<i class='climacon tornado'></i>"
                          },

                     "1":{
                              "tags":"rainy",
                             "class":"<i class='climacon lightning'></i>"
                          },

                     "2":{
                              "tags":"rainy",
                             "class":"<i class='climacon tornado'></i>"
                          },
                      "3":{
                              "tags":"rainy",
                             "class":"<i class='climacon lightning'></i>"
                          },

                     "4":{
                              "tags":"rainy",
                             "class":"<i class='climacon lightning'></i>"
                          },

                     "5":{
                              "tags":"snow",
                             "class":"<i class='climacon snow'></i>"
                          },
                     "6":{
                              "tags":"cloudy",
                             "class":"<i class='climacon hail'></i>"
                          },

                     "7":{
                              "tags":"cloudy",
                             "class":"<i class='climacon sleet'></i>"
                          },

                     "8":{
                              "tags":"snow",
                             "class":"<i class='climacon snow'></i>"
                          },

                     "9":{
                              "tags":"rainy",
                             "class":"<i class='climacon drizzle'></i>"
                          },

                     "10":{
                              "tags":"rainy",
                             "class":"<i class='climacon rain'></i>"
                          },

                     "11":{
                              "tags":"rainy",
                             "class":"<i class='climacon showers'></i>"
                          },

                     "12":{
                              "tags":"rainy",
                             "class":"<i class='climacon showers'></i>"
                          },

                     "13":{
                              "tags":"rainy",
                             "class":"<i class='climacon flurries'></i>"
                          },

                     "14":{
                              "tags":"rainy",
                             "class":"<i class='climacon showers'></i>"
                          },

                     "15":{
                              "tags":"cloudy",
                             "class":"<i class='climacon snow'></i>"
                          },

                     "16":{
                              "tags":"cloudy",
                             "class":"<i class='climacon snow'></i>"
                          },

                     "17":{
                              "tags":"clear",
                             "class":"<i class='climacon hail'></i>"
                          },
                     "18":{
                              "tags":"clear",
                             "class":"<i class='climacon sleet'></i>"
                          },

                     "19":{
                              "tags":"cloudy",
                             "class":"<i class='climacon fog'></i>"
                          },

                     "20":{
                              "tags":"cloudy",
                             "class":"<i class='climacon fog'></i>"
                          },
                     "21":{
                              "tags":"clear",
                             "class":"<i class='climacon haze'></i>"
                          },

                     "22":{
                              "tags":"clear",
                             "class":"<i class='climacon haze'></i>"
                          },

                     "23":{
                              "tags":"clear",
                             "class":"<i class='climacon haze'></i>"
                          },
                     "24":{
                              "tags":"cloudy",
                             "class":"<i class='climacon wind cloud'></i>"
                          },

                     "25":{
                              "tags":"snow",
                             "class":"<i class='climacon snow'></i>"
                          },

                     "26":{
                              "tags":"cloudy",
                             "class":"<i class='climacon cloud'></i>"
                          },
                     "27":{
                              "tags":"cloudy,night",
                             "class":"<i class='climacon cloud moon'></i>"
                          },

                     "28":{
                              "tags":"cloudy,sunny",
                             "class":"<i class='climacon cloud sun'></i>"
                          },

                     "29":{
                              "tags":"night",
                             "class":"<i class='climacon cloud moon'></i>"
                          },
                     "30":{
                              "tags":"cloudy,sunny",
                             "class":"<i class='climacon cloud sun'></i>"
                          },

                     "31":{
                              "tags":"night",
                             "class":"<i class='climacon moon'></i>"
                          },

                     "32":{
                              "tags":"sunny",
                             "class":"<i class='climacon sun'></i>"
                          },

                     "33":{
                              "tags":"night",
                             "class":"<i class='climacon moon'></i>"
                          },

                     "34":{
                              "tags":"day",
                             "class":"<i class='climacon sun'></i>"
                          },
                     "35":{
                              "tags":"clear",
                             "class":"<i class='climacon hail'></i>"
                          },

                     "36":{
                              "tags":"day",
                             "class":"<i class='climacon sun'></i>"
                          },

                     "37":{
                              "tags":"rainy",
                             "class":"<i class='climacon lightning'></i>"
                          },
                     "38":{
                              "tags":"rainy",
                             "class":"<i class='climacon lightning'></i>"
                          },

                     "39":{
                              "tags":"rainy",
                             "class":"<i class='climacon lightning'></i>"
                          },

                     "40":{
                              "tags":"rainy",
                             "class":"<i class='climacon showers'></i>"
                          },
                      "41":{
                              "tags":"snow",
                             "class":"<i class='climacon snow'></i>"
                          },

                     "42":{
                              "tags":"cloudy",
                             "class":"<i class='climacon snow'></i>"
                          },

                     "43":{
                              "tags":"cloudy",
                             "class":"<i class='climacon snow'></i>"
                          },

                     "44":{
                              "tags":"cloudy",
                             "class":"<i class='climacon cloud'></i>"
                          },
                     "45":{
                              "tags":"cloudy",
                             "class":"<i class='climacon lightning'></i>"
                          },

                     "46":{
                              "tags":"cloudy",
                             "class":"<i class='climacon snow'></i>"
                          },

                     "47":{
                              "tags":"rainy",
                             "class":"<i class='climacon lightning'></i>"
                          },

                    "3200":{
                             "tags":"clear",
                             "class":"<i class='climacon cloud'></i>"
                          }

                 };


                    
    var res = Y.one('#present'),
        res1=Y.one('#locationid'),
        res2=Y.one('#dayplace'),
        res3=Y.one('#day1'),
        res4=Y.one('#day2'),
        res5=Y.one('#day3'),
        res6=Y.one('#day4'),
        res7=Y.one('#day5');
        

Y.YQL('select * from geo.places where text="'+tb+'"',function(r){
  var woeid;
  var content;
  if (r.query.results==null) {
      document.getElementById('locationlist').style.display="block";
      document.getElementById('errorloc').style.display="block";
      document.getElementById('reclocations').style.display="none";

      document.getElementById('addlocsearch').value="search";
      window.setTimeout(function(){
      document.getElementById('errorloc').style.display="none";},3000);
    }else
    {
      document.getElementById('locationlist').style.display="none";
      document.getElementById('reclocations').style.display="block";
      document.getElementById('locsearch').style.opacity="1";
    }

if(r.query.results.place[0])
{
  woeid = r.query.results.place[0].woeid;
  if(r.query.results.place[0].admin2!=null)
  {
    content=r.query.results.place[0].admin2.content;
  }
  else if (r.query.results.place[0].admin1!=null)
  {
    content=r.query.results.place[0].admin1.content;
  }else
  {
    woeid = r.query.results.place[0].country.woeid;
    content = r.query.results.place[0].content;
  }
}
else {
  woeid = r.query.results.place.woeid;
}
  
        
Y.YQL('select * from weather.forecast where woeid=' + woeid+ " and u='c'", function(r) {
    var e2=Y.Node.create('<div class="mod1"></div>');
    var date=r.query.results.channel.item.condition.date;
    var time=date.substring(17,25);
    var day=date.substring(0,7);
    var citys=r.query.results.channel.location.city;
    
    var city=r.query.results.channel.location.region;
    var country=r.query.results.channel.location.country;
    var temp=r.query.results.channel.item.condition.temp;
    var windspeed=r.query.results.channel.wind.speed;
    //var text=r.query.results.channel.item.condition.text;
    var textpr=r.query.results.channel.item.condition.text;
    var codepr=r.query.results.channel.item.condition.code;
    if(JSONObject[codepr])
    {
       var textprs=JSONObject[codepr].class;
       var textcon=JSONObject[codepr].tags;
    }
    
var i;
var img=[];
var lis =[]; 
lis=document.getElementsByClassName("listitems");

for(i=0;i<lis.length;i++)
{
    img.push(lis[i].innerHTML);
    var abc=img.push(lis[i].innerHTML);
    

}

var recurloc= img.indexOf(citys);
if(recurloc=='-1'){
 document.getElementById()
        document.getElementById('locsearch').value=citys;
        var divnode=document.createElement("div");
        divnode.setAttribute("id","divloc");
        var node=document.createElement("LI");
        var doc=document.getElementById('listofloc');
        var docs=doc.childNodes.length;
        node.setAttribute("id","li"+docs);
        node.setAttribute("class","listitems");
        var node1=document.createElement("span");
        node1.innerHTML="x";
        node1.setAttribute("id","closeloc");
        node1.setAttribute("class","close-loc");
        
        node1.setAttribute("onclick","closeloc(event);")
        node.setAttribute("onclick","add(event)");
        var a;        
        divnode.appendChild(node1);
        var textnode=document.createTextNode(citys);
        node.appendChild(textnode);
        document.getElementById("listofloc").appendChild(divnode);
        divnode.appendChild(node);
}else{
document.getElementById('errorloc').innerHTML="already added";
document.getElementById('locationlist').style.display="block";
      document.getElementById('errorloc').style.display="block";
      document.getElementById('reclocations').style.display="none";

      document.getElementById('addlocsearch').value="search";
      window.setTimeout(function(){
      document.getElementById('errorloc').style.display="none";},3000);
      window.setTimeout(function(){
      document.getElementById('errorloc').innerHTML="No weather data for this location";},6000);
      document.getElementById('locsearch').value=citys;
      document.getElementById('locsearch').style.opacity="0";
      

}


/*
for(i=0;i<img.length;i++)
{
      if(img[i]==citys)
      {
        alert("XXXXXXXXXXXXXXX");
        break;
      }else{
        document.getElementById()
        document.getElementById('locsearch').value=citys;
        var divnode=document.createElement("div");
        divnode.setAttribute("id","divloc");
        var node=document.createElement("LI");
        var doc=document.getElementById('listofloc');
        var docs=doc.childNodes.length;
        node.setAttribute("id","li"+docs);
        node.setAttribute("class","listitems");
        var node1=document.createElement("span");
        node1.innerHTML="x";
        node1.setAttribute("id","closeloc");
        node1.setAttribute("class","close-loc");
        
        node1.setAttribute("onclick","closeloc(event);")
        node.setAttribute("onclick","add(event)");
        var a;        
        divnode.appendChild(node1);
        var textnode=document.createTextNode(citys);
        node.appendChild(textnode);
        document.getElementById("listofloc").appendChild(divnode);
        divnode.appendChild(node);
        alert("helloo");
        
      }

}*/
         Y.YQL('select source,photo_id from flickr.photos.sizes where photo_id in (select id from flickr.photos.search where has_geo="true" and tags="'+textcon+'" and woe_id='+woeid+' and api_key="8a976c10ca749ae611e2a3ca9f0e7c9c" and group_id ="1463451@N25") and api_key="8a976c10ca749ae611e2a3ca9f0e7c9c"', function(r) {    
                if(r.query.results!=null){                    
             var img=r.query.results.size[07].source;
             
             Y.one('.mainbody').setStyle('background-image','url('+img+')');
             Y.one('#wallpaper').setStyle('background-image','url('+img+')');
           }else
           {
               Y.YQL('select source,photo_id from flickr.photos.sizes where photo_id in (select id from flickr.photos.search where has_geo="true" and tags="'+textcon+'" and text="'+content+'" and api_key="8a976c10ca749ae611e2a3ca9f0e7c9c" and group_id ="1463451@N25") and api_key="8a976c10ca749ae611e2a3ca9f0e7c9c"', function(r) {    
                 var img=r.query.results.size[07].source;
             
             Y.one('.mainbody').setStyle('background-image','url('+img+')');
             Y.one('#wallpaper').setStyle('background-image','url('+img+')');
               }); 
           }
    });




         //days
        var i;
        var days=[];
        var temps=[];
        var lows=[];
        var texts=[];
        var codes=[];
        var conicons=[];
        
        

        for(i=0;i<5;i++){
            
            days.push(r.query.results.channel.item.forecast[i].day);
            
            
        }
        
        for(i=0;i<5;i++){
            

            temps.push(r.query.results.channel.item.forecast[i].high);
            
        }
        
        for(i=0;i<5;i++){
            

            lows.push(r.query.results.channel.item.forecast[i].low);
            
        }
        
        for(i=0;i<5;i++){
            
            texts.push(r.query.results.channel.item.forecast[i].text);
            
        }
        for(i=0;i<5;i++){
            
            codes.push(r.query.results.channel.item.forecast[i].code);
            
        }

        
       
       // mapping codes..
       for(var i=0;i<5;i++)
       {
          if(JSONObject[codes[i]])
        {
           conicons.push(JSONObject[codes[i]].class);
        }
       }



           
        e2.set('innerHTML','<i class="climacon compass" id="loccompass"></i><br><h7>'+city+' '+country+'<br>'+time);
        res1.setHTML(e2);
        




        var e1 = Y.Node.create('<div class="mod"></div>');
       e1.set('innerHTML', '<div id="temptext1"><div id="temptext"> ' + temp+ '<sup>&deg</div><div id="textcond" title="'+textpr+'">'+textprs+'</div></div><div id="dateandspd"><div id="tempdaytext">' +day+'</div><div id="spdwndkmph"> <span id="spdicon" class="climacon wind"></span><span id="spdmtr">'+windspeed+' kmph</span></div></h7></div></div>');
        res.setHTML(e1);
        
         var e3 = Y.Node.create('<div id="dayid1" class="dayid-1"></div>');
          e3.set('innerHTML', '<div id="prday"> ' +days[0]+'</div><div id="prtext" title="'+texts[0]+'">' +conicons[0]+'</div><div id="prspd">'+temps[0]+'<sup>&deg</sup>/'+lows[0]+'<sup>&deg</div>');
        res3.setHTML(e3);
        
        var e4 = Y.Node.create('<div id="dayid2" class="dayid-1"></div>');
          e4.set('innerHTML', '<div id="prday"> ' +days[1]+'</div><div id="prtext" title="'+texts[1]+'">' +conicons[1]+'</div><div id="prspd">'+temps[1]+'<sup>&deg</sup>/'+lows[1]+'<sup>&deg</div>');
        res4.setHTML(e4);
        
        var e5 = Y.Node.create('<div id="dayid3" class="dayid-1"></div>');
          e5.set('innerHTML', '<div id="prday"> ' +days[2]+'</div><div id="prtext" title="'+texts[2]+'">' +conicons[2]+'</div><div id="prspd">'+temps[2]+'<sup>&deg</sup>/'+lows[2]+'<sup>&deg</div>');
        res5.setHTML(e5);
        
        var e6 = Y.Node.create('<div id="dayid4" class="dayid-1"></div>');
          e6.set('innerHTML', '<div id="prday"> ' +days[3]+'</div><div id="prtext" title="'+texts[3]+'">' +conicons[3]+'</div><div id="prspd">'+temps[3]+'<sup>&deg</sup>/'+lows[3]+'<sup>&deg</div>');
        res6.setHTML(e6);
        
        var e7 = Y.Node.create('<div id="dayid5" class="dayid-1"></div>');
          e7.set('innerHTML', '<div id="prday"> ' +days[4]+'</div><div id="prtext" title="'+texts[4]+'">' +conicons[4]+'</div><div id="prspd">'+temps[4]+'<sup>&deg</sup>/'+lows[4]+'<sup>&deg</div>');
        res7.setHTML(e7);
  
             });
             }); 

});


    
}


var addlocations;
function addlocations(event)
{
document.getElementById('add1').style.display="block";  
}


var closeloc;
function closeloc(eveny)
{
  var targ = event.srcElement||event.target;
  var mytarget;
  while(targ.tagName.toLowerCase()!="div")
  {
    targ=targ.parentNode;
  }
  mytarget=targ;
  mytarget.parentNode.removeChild(mytarget);

}

