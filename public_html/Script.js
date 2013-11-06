            
YUI().use('node', 'yql','json-parse', function(Y) { 
 var JSONObject = {
                     "0":{

                             "class":"<i class='climacon tornado'></i>"
                          },

                     "1":{

                             "class":"<i class='climacon lightning'></i>"
                          },

                     "2":{

                             "class":"<i class='climacon tornado'></i>"
                          },
                      "3":{

                             "class":"<i class='climacon lightning'></i>"
                          },

                     "4":{

                             "class":"<i class='climacon lightning'></i>"
                          },

                     "5":{

                             "class":"<i class='climacon snow'></i>"
                          },
                     "6":{

                             "class":"<i class='climacon hail'></i>"
                          },

                     "7":{

                             "class":"<i class='climacon sleet'></i>"
                          },

                     "8":{

                             "class":"<i class='climacon snow'></i>"
                          },

                     "9":{

                             "class":"<i class='climacon drizzle'></i>"
                          },

                     "10":{

                             "class":"<i class='climacon rain'></i>"
                          },

                     "11":{

                             "class":"<i class='climacon showers'></i>"
                          },

                     "12":{

                             "class":"<i class='climacon showers'></i>"
                          },

                     "13":{

                             "class":"<i class='climacon flurries'></i>"
                          },

                     "14":{

                             "class":"<i class='climacon showers'></i>"
                          },

                     "15":{

                             "class":"<i class='climacon snow'></i>"
                          },

                     "16":{

                             "class":"<i class='climacon snow'></i>"
                          },

                     "17":{

                             "class":"<i class='climacon hail'></i>"
                          },
                     "18":{

                             "class":"<i class='climacon sleet'></i>"
                          },

                     "19":{

                             "class":"<i class='climacon fog'></i>"
                          },

                     "20":{

                             "class":"<i class='climacon fog'></i>"
                          },
                     "21":{

                             "class":"<i class='climacon haze'></i>"
                          },

                     "22":{

                             "class":"<i class='climacon haze'></i>"
                          },

                     "23":{

                             "class":"<i class='climacon haze'></i>"
                          },
                     "24":{

                             "class":"<i class='climacon wind cloud'></i>"
                          },

                     "25":{

                             "class":"<i class='climacon snow'></i>"
                          },

                     "26":{

                             "class":"<i class='climacon cloud'></i>"
                          },
                     "27":{

                             "class":"<i class='climacon cloud moon'></i>"
                          },

                     "28":{

                             "class":"<i class='climacon cloud sun'></i>"
                          },

                     "29":{

                             "class":"<i class='climacon cloud moon'></i>"
                          },
                     "30":{

                             "class":"<i class='climacon cloud sun'></i>"
                          },

                     "31":{

                             "class":"<i class='climacon moon'></i>"
                          },

                     "32":{

                             "class":"<i class='climacon sun'></i>"
                          },

                     "33":{

                             "class":"<i class='climacon moon'></i>"
                          },

                     "34":{

                             "class":"<i class='climacon sun'></i>"
                          },
                     "35":{

                             "class":"<i class='climacon hail'></i>"
                          },

                     "36":{

                             "class":"<i class='climacon sun'></i>"
                          },

                     "37":{

                             "class":"<i class='climacon lightning'></i>"
                          },
                     "38":{

                             "class":"<i class='climacon lightning'></i>"
                          },

                     "39":{

                             "class":"<i class='climacon lightning'></i>"
                          },

                     "40":{

                             "class":"<i class='climacon showers'></i>"
                          },
                      "41":{

                             "class":"<i class='climacon snow'></i>"
                          },

                     "42":{

                             "class":"<i class='climacon snow'></i>"
                          },

                     "43":{

                             "class":"<i class='climacon snow'></i>"
                          },



                     "44":{

                             "class":"<i class='climacon cloud'></i>"
                          },
                     "45":{

                             "class":"<i class='climacon lightning'></i>"
                          },

                     "46":{

                             "class":"<i class='climacon snow'></i>"
                          },

                     "47":{

                             "class":"<i class='climacon lightning'></i>"
                          }

                 };
                    
    var res = Y.one('#present'),
        res1=Y.one('#locationid'),
        res2=Y.one('#dayplace'),
        res3=Y.one('#day1'),
        res4=Y.one('#day2'),
        res5=Y.one('#day3'),
        res6=Y.one('#day4'),
        res7=Y.one('#day5'),
        zip = '2295420';
    
    Y.YQL('select * from weather.forecast where woeid=' + zip+ " and u='c'", function(r) {
        var e2=Y.Node.create('<div class="mod1"></div>');
        var date=r.query.results.channel.item.condition.date;
        var time=date.substring(17,25);
        var day=date.substring(0,7);
        
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
        }
        
        //days
        
        var day1=r.query.results.channel.item.forecast[0].day;
        var day2=r.query.results.channel.item.forecast[1].day;
        var day3=r.query.results.channel.item.forecast[2].day;
        var day4=r.query.results.channel.item.forecast[3].day;
        var day5=r.query.results.channel.item.forecast[4].day;
        //temperatures..... high
        var temp1=r.query.results.channel.item.forecast[0].high;
        var temp2=r.query.results.channel.item.forecast[1].high;
        var temp3=r.query.results.channel.item.forecast[2].high;
        var temp4=r.query.results.channel.item.forecast[3].high;
        var temp5=r.query.results.channel.item.forecast[4].high;
        //temperatures.....low
        var low1=r.query.results.channel.item.forecast[0].low;
        var low2=r.query.results.channel.item.forecast[0].low;
        var low3=r.query.results.channel.item.forecast[0].low;
        var low4=r.query.results.channel.item.forecast[0].low;
        var low5=r.query.results.channel.item.forecast[0].low;
        //text(cloudy or sunny ...)
        var text1=r.query.results.channel.item.forecast[0].text;
        var text2=r.query.results.channel.item.forecast[1].text;
        var text3=r.query.results.channel.item.forecast[2].text;
        var text4=r.query.results.channel.item.forecast[3].text;
        var text5=r.query.results.channel.item.forecast[4].text;
        //weather condition codes..
        var code1=r.query.results.channel.item.forecast[0].code;
        var code2=r.query.results.channel.item.forecast[1].code;
        var code3=r.query.results.channel.item.forecast[2].code;
        var code4=r.query.results.channel.item.forecast[3].code;
        var code5=r.query.results.channel.item.forecast[4].code;
        
       // mapping codes..
     if(JSONObject[code1])
        {
           var conicon1=JSONObject[code1].class;
        }
        if(JSONObject[code2])
        {
           var conicon2=JSONObject[code2].class;
        }
        if(JSONObject[code3])
        {
           var conicon3=JSONObject[code3].class;
        }
        if(JSONObject[code4])
        {
           var conicon4=JSONObject[code4].class;
        }
        if(JSONObject[code5])
        {
           var conicon5=JSONObject[code5].class;
        }

           
        e2.set('innerHTML','<i class="climacon compass" id="loccompass"></i><br><h7>'+city+','+country+'<br>'+time);
        res1.setHTML(e2);
        
        var e1 = Y.Node.create('<div class="mod"></div>');
       e1.set('innerHTML', '<div id="temptext1"><div id="temptext"> ' + temp+ '<sup>&deg</div><div id="textcond" title="'+textpr+'">'+textprs+'</div></div><div id="dateandspd"><div id="tempdaytext">' +day+'</div><div id="spdwndkmph"> <span id="spdicon" class="climacon wind"></span><span id="spdmtr">'+windspeed+' kmph</span></div></h7></div></div>');
        res.setHTML(e1);
        
         var e3 = Y.Node.create('<div id="dayid1" class="dayid-1"></div>');
          e3.set('innerHTML', '<div id="prday"> ' +day1+'</div><div id="prtext" title="'+text1+'">' +conicon1+'</div><div id="prspd">'+temp1+'<sup>&deg</sup>/'+low1+'<sup>&deg</div>');
        res3.setHTML(e3);
        
        var e4 = Y.Node.create('<div id="dayid2" class="dayid-1"></div>');
          e4.set('innerHTML', '<div id="prday"> ' +day2+'</div><div id="prtext" title="'+text2+'">' +conicon2+'</div><div id="prspd">'+temp2+'<sup>&deg</sup>/'+low2+'<sup>&deg</div>');
        res4.setHTML(e4);
        
        var e5 = Y.Node.create('<div id="dayid3" class="dayid-1"></div>');
          e5.set('innerHTML', '<div id="prday"> ' +day3+'</div><div id="prtext" title="'+text3+'">' +conicon3+'</div><div id="prspd">'+temp3+'<sup>&deg</sup>/'+low3+'<sup>&deg</div>');
        res5.setHTML(e5);
        
        var e6 = Y.Node.create('<div id="dayid4" class="dayid-1"></div>');
          e6.set('innerHTML', '<div id="prday"> ' +day4+'</div><div id="prtext" title="'+text4+'">' +conicon4+'</div><div id="prspd">'+temp4+'<sup>&deg</sup>/'+low4+'<sup>&deg</div>');
        res6.setHTML(e6);
        
        var e7 = Y.Node.create('<div id="dayid5" class="dayid-1"></div>');
          e7.set('innerHTML', '<div id="prday"> ' +day5+'</div><div id="prtext" title="'+text5+'">' +conicon5+'</div><div id="prspd">'+temp5+'<sup>&deg</sup>/'+low5+'<sup>&deg</div>');
        res7.setHTML(e7);
    });
});
