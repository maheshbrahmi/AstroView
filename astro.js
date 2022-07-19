
// Stackoverflow- 22943186
//To convert point to pixel size you simply use system DPI / 72:
//80 pt * (96 / 72) = 107 pixels @ 96 DPI.
var   fontBase = 300;                   // selected default width for canvas
var   fontSize = 6;                     // default size for font 20

/*************************SMITH CHART********************************************************************************/
var sprite = new Image();
sprite.src = "img/sphere.png"; 
const AXIS_RANGE = 1000;
var resize_done = false;  // this is to avoid half shape canvas draw sometime when an attempt is made to draw with out scaling first
var chart= {"width": 300, "height" : 300,  "currentDevicePixelRatio" : 1, "devicePixelRatio" : 1 };
var isMobile = false; //initiate as false
const signsArray = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces']; //rashis
const planetsArray = ['ascendant','sun','moon','mars','mercury','jupiter','venus','saturn','rahu','ketu']; //rashis
const planetsColor=  ['black','#E75F35','#E7AA35','#C21313','#888888','#C1694F','#EEEA90','#7F9DCB','#E7AA35','#E7AA35']; 
//const pl5_exportformat =['First_last_name' ,'Gender','Ankavalue','City','State','Country','Birthdate','Time','Birthdate_time_Julian','Timezone', 'DST','Longitude' ,'Latitude','Longitudes_Sun','Moon','Mars','Mercury','Jupiter','Venus','Saturn','Rahu','Ketu','Dhuma','Vyatipata','Parivesha','Indrachapa','Upaketu','Gulika','Prana Pada','Uranus','Neptune','Pluto','Ascendant'];

//console.log(signs.indexOf('taurus'));
//console.log(signs.indexOf('cancer', 1)); // start from index 1
// var outputObj = {
//   "ascendant": {
// const signObj = {  // RASI
// "aries":      {"position": "1",  "ruledby": "mars",    "exaltation": "sun",       "debilitation": "saturn"      },
// "taurus":     {"position": "2",  "ruledby": "venus",   "exaltation": "moon",      "debilitation": "rahu/ketu"   },
// "gemini":     {"position": "3",  "ruledby": "mercury", "exaltation": "none",      "debilitation": "none"        },
// "cancer":     {"position": "4",  "ruledby": "moon",    "exaltation": "jupiter",   "debilitation": "mars"        },
// "leo":        {"position": "5",  "ruledby": "sun",     "exaltation": "none",      "debilitation": "none"        },
// "virgo":      {"position": "6",  "ruledby": "mercury", "exaltation": "mercury",   "debilitation": "venus"       },
// "libra":      {"position": "7",  "ruledby": "venus",   "exaltation": "saturn",    "debilitation": "sun"         },
// "scorpio":    {"position": "8",  "ruledby": "mars",    "exaltation": "rahu/ketu", "debilitation": "moon"        },
// "sagittarius":{"position": "9",  "ruledby": "jupiter", "exaltation": "none",      "debilitation": "none"        },
// "capricon":   {"position": "10", "ruledby": "saturn",  "exaltation": "mars",      "debilitation": "jupiter"     },
// "aquarius":   {"position": "11", "ruledby": "saturn",  "exaltation": "none",      "debilitation": "none"        },
// "pisces":     {"position": "12", "ruledby": "jupiter", "exaltation": "venus",     "debilitation": "mercury"     }
// }
var signObj =   // RASI
        [
            {"position": "1",       "name": "aries",      "ruledby": "mars",    "exaltation": "sun",        "element": "fire",    "debilitation": "saturn",    "x": 0, "y": 0},
            {"position": "2",       "name": "taurus",     "ruledby": "venus",   "exaltation": "moon",       "element": "earth",   "debilitation": "rahu/ketu", "x": 0, "y": 0},
            {"position": "3",       "name": "gemini",     "ruledby": "mercury", "exaltation": "none",       "element": "air",     "debilitation": "none",      "x": 0, "y": 0},
            {"position": "4",       "name": "cancer",     "ruledby": "moon",    "exaltation": "jupiter",    "element": "water",   "debilitation": "mars",      "x": 0, "y": 0},
            {"position": "5",       "name": "leo",        "ruledby": "sun",     "exaltation": "none",       "element": "fire",    "debilitation": "none",      "x": 0, "y": 0},
            {"position": "6",       "name": "virgo",      "ruledby": "mercury", "exaltation": "mercury",    "element": "earth",   "debilitation": "venus",     "x": 0, "y": 0},
            {"position": "7",       "name": "libra",      "ruledby": "venus",   "exaltation": "saturn",     "element": "air",     "debilitation": "sun",       "x": 0, "y": 0},
            {"position": "8",       "name": "scorpio",    "ruledby": "mars",    "exaltation": "rahu/ketu",  "element": "water",   "debilitation": "moon",      "x": 0, "y": 0},
            {"position": "9",       "name": "sagittarius","ruledby": "jupiter", "exaltation": "none",       "element": "fire",    "debilitation": "none" ,     "x": 0, "y": 0},
            {"position": "10",      "name": "capricorn",   "ruledby": "saturn", "exaltation": "mars",       "element": "earth",   "debilitation": "jupiter",   "x": 0, "y": 0},
            {"position": "11",      "name": "aquarius",   "ruledby": "saturn",  "exaltation": "none",       "element": "air",     "debilitation": "none",      "x": 0, "y": 0},
            {"position": "12",      "name": "pisces",     "ruledby": "jupiter", "exaltation": "venus",      "element": "water",   "debilitation": "mercury",   "x": 0, "y": 0}
        ];


// schObj is used to save schematic - for load file to work it needs to be less the 1024 bytes and the first key should be "ver"
//Input
var inputObj = {
  "ver":1.0,  //if you change this then change the file load verify function- this is used as a check - need a better way to do this
  "type":"astroFile", // to check if the right file is imported
  "name": "John Doe",  //First and Last name
  "city": "Mumbai", // 
  "state": "Maharashtra",  // 
  "country": "India",   // 
  "date": "11/05/1966", // 
  "time": "13:40:00",  // 
  "longitude": 72.8166667, //
  "latitude": 18.9666667,  //  
  "graha": {
  "ascendant":  298.7014879, 
  "sun":  199.07001545248,
  "moon": 101.505673940617,
  "mercury": 219.718216555607,
  "venus": 198.142409860512,
  "mars": 140.559019472223,
  "jupiter": 100.669422850587,
  "saturn": 329.920879549186,
  "rahu": 22.800941440735,
  "ketu": 202.800941440735
  }
};

//var outputObj = {
  var outputObj = {
    "ascendant": {
          "longitude": 298.7014879,
          "position": 10,
          "sign": "capricorn",
          "ruledby":"saturn",
          "house": 1,
          "degree": 28.7014879,
          "mins":42,
          "secs":5,
          "is_ownsign":false,
          "is_retrograde": false,
          "is_combust": false,
          "is_exhalted":false,
          "is_debilitated":false,
          "is_digbala":false,
          "is_enemysign" : false,
          "is_friendsign":false,
          "is_neutralsign":false,
          "aspect":"none",
          "x": 0,
          "y": 0
      },
      "sun":{
          "longitude": 199.07001545248,
          "position": 7,
          "sign":"libra",
          "ruledby":"venus",
          "house": 10,
          "degree": 19.07001545,
          "mins":4,
          "secs":12,
          "is_ownsign":false,
          "is_retrograde": false,
          "is_combust": false,
          "is_exhalted":false,
          "is_debilitated":false,
          "is_digbala":false,
          "is_enemysign" : false,
          "is_friendsign":false,
          "is_neutralsign":false,
          "aspect":[7],
          "x": 0,
          "y": 0
      },
      "moon":{
          "longitude": 101.505673940617,
          "position": 4,
          "sign":"cancer",
          "ruledby":"moon",
          "house": 7,
          "degree": 11.50567394,
          "mins":30,
          "secs":20,
          "is_ownsign":false,
          "is_retrograde": false,
          "is_combust": false,
          "is_exhalted":false,
          "is_debilitated":false,
          "is_digbala":false,
          "is_enemysign" : false,
          "is_friendsign":false,
          "is_neutralsign":false,
          "aspect":[7],
          "x": 0,
          "y": 0
      },
      "mercury":{
        "name": "mercury",
        "longitude": 219.718216555607,
        "position": 8,
        "sign": "scorpio",
        "ruledby":"mars",
        "house": 11,
        "degree": 9.718216556,
        "mins":43,
        "secs":5,
        "is_ownsign":false,
        "is_retrograde": false,
        "is_combust": false,
        "is_exhalted":false,
        "is_debilitated":false,
        "is_digbala":false,
        "is_enemysign" : false,
        "is_friendsign":false,
        "is_neutralsign":false,
        "aspect":[7],
        "x": 0,
        "y": 0
      },
      "venus": {
        "longitude": 198.142409860512,
        "position": 7,
        "sign":"libra",
        "ruledby":"venus1",
        "house": 10,
        "degree":18.14240986,
        "mins":8,
        "secs":32,
        "is_ownsign":false,
        "is_retrograde": false,
        "is_combust": false,
        "is_exhalted":false,
        "is_debilitated":false,
        "is_digbala":false,
        "is_enemysign" : false,
        "is_friendsign":false,
        "is_neutralsign":false,
        "aspect":[7],
        "x": 0,
        "y": 0
    },
    "mars": {
      "longitude": 140.559019472223,
      "position": 5,
      "sign":"leo",
      "ruledby":"sun",
      "house": 8,
      "degree": 20.55901947,
      "mins":33,
      "secs":32,
      "is_ownsign":false,
      "is_retrograde": false,
      "is_combust": false,
      "is_exhalted":false,
      "is_debilitated":false,
      "is_digbala":false,
      "is_enemysign" : false,
      "is_friendsign":false,
      "is_neutralsign":false,
      "aspect":[7,4,8],
      "x": 0,
      "y": 0
    },
    "jupiter": {
      "longitude": 100.669422850587,
      "position": 4,
      "sign":"cancer",
      "ruledby":"moon",
      "house": 7,
      "degree": 10.66942285,
      "mins":40,
      "secs":9,
      "is_ownsign":false,
      "is_retrograde": false,
      "is_combust": false,
      "is_exhalted":false,
      "is_debilitated":false,
      "is_digbala":false,
      "is_enemysign" : false,
      "is_friendsign":false,
      "is_neutralsign":false,
      "aspect":[7,5,9],
      "x": 0,
      "y": 0
    },
    "saturn": {
        "longitude": 329.920879549186,
        "position": 11,
        "sign":"aquarius",
        "ruledby":"saturn",
        "house": 2,
        "degree": 29.92087955,
        "mins":55,
        "secs":15,
        "is_ownsign":false,
        "is_retrograde": false,
        "is_combust": false,
        "is_exhalted":false,
        "is_debilitated":false,
        "is_digbala":false,
        "is_enemysign" : false,
        "is_friendsign":false,
        "is_neutralsign":false,
        "aspect":[7,3,10],
        "x": 0,
        "y": 0
      },
      "rahu": {
          "longitude": 22.800941440735,
          "position": 1,
          "sign":"aries",
          "ruledby":"mars",
          "house": 4,
          "degree": 22.80094144,
          "mins":48,
          "secs":3,
          "is_ownsign":false,
          "is_retrograde": false,
          "is_combust": false,
          "is_exhalted":false,
          "is_debilitated":false,
          "is_digbala":false,
          "is_enemysign" : false,
          "is_friendsign":false,
          "is_neutralsign":false,
          "aspect":[7],
          "x": 0,
          "y": 0
      },
      "ketu": {
          "longitude": 202.800941440735,
          "position": 7,
          "sign":"libra",
          "ruledby":"venus",
          "house": 10,
          "degree": 22.80094144,
          "mins":48,
          "secs":3,
          "is_ownsign":false,
          "is_retrograde": false,
          "is_combust": false,
          "is_exhalted":false,
          "is_debilitated":false,
          "is_digbala":false,
          "is_enemysign" : false,
          "is_friendsign":false,
          "is_neutralsign":false,
          "aspect":[7],
          "x": 0,
          "y": 0
      }
    };
 // update: function() { updateChart (this);}
//}

var astroObj = {
              "ctx" : null,
              "hitCtx" : null,
              "title": '',
              resetAll: function() { resetAll (this);}, // Resets all properties to its default values
              redrawAstro: redrawAstro, // repaints astroChart with the current values
              colorsHash: {},
              houses : [{
                num: '1', signnum: '10', color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)', centerx : 0, centery : 356, rarray : [], qarray: []
                }, {
                num: '2', signnum: '11',  color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)', centerx : -356, centery : 593, rarray : [], qarray: []
                }, {
                num: '3', signnum: '12', color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)' , centerx : -593, centery : 356, rarray : [], qarray: []
                }, {
                num: '4', signnum: '1', color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)' , centerx : -356, centery : 0, rarray : [], qarray: []
                }, {
                num: '5', signnum: '2', color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)' , centerx : -593, centery : -356, rarray : [], qarray: []
                }, {
                num: '6', signnum: '3', color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)' , centerx : -356, centery : -593, rarray : [], qarray: []
                }, {
                num: '7', signnum: '4', color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)' , centerx : 0, centery : -356, rarray : [], qarray: []
                }, {
                num: '8', signnum: '5', color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)' , centerx : 356, centery : -593, rarray : [], qarray: []
                }, {
                num: '9', signnum: '6', color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)' , centerx : 593, centery : -356, rarray : [], qarray: []
                }, {
                num: '10', signnum: '7', color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)' , centerx : 356, centery : 0, rarray : [], qarray: []
                }, {
                num: '11', signnum: '8', color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)' , centerx : 593, centery : 356, rarray : [], qarray: []
                }, {
                num: '12', signnum: '9', color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)' , centerx : 356, centery : 593, rarray : [], qarray: []
                }
                ],
               showAspect: false,
               showNakshatra:false,
               showLords:false,
               drawAstro: function() { drawAstro(this);},
               drawAspect: function() { drawAspect(this);},
               drawLords: function() { drawLords(this);},
               drawNakshatra: function() { drawNakshatra(this);},
               updateOutput: function() { updateOutput(this);},
               test: function() { test(this);},
               //updateSigns: function() { updateSigns (this,ascendant_position );}, // Resets all properties to its default values
               input:inputObj,
               output:outputObj,
               sign:signObj
          };
var matchTipShown = false; 
astroObj.ctx = document.getElementById("astroMain").getContext('2d');
astroObj.hitCtx = document.getElementById("astroMainHit").getContext('2d');

astroObj.ctx.canvas.addEventListener("mousemove", onMouseMove, false);
astroObj.ctx.canvas.addEventListener("dblclick", onMouseDblClick, false);
$(astroObj.ctx.canvas).on('taphold', function(e){
  alert('X: ' + holdCords.holdX + ' Y: ' + holdCords.holdY ); 
});

//window.addEventListener('load', astroObj.redrawAstro, false);  //  not necessary duplicates $('document').ready(function () at the top
window.addEventListener('resize',astroObj.redrawAstro, false); // resize,clear and redraw
document.getElementById('file-input1').addEventListener('change', handleFileImport, false);//file Import
document.getElementById('file-input').addEventListener('change', handleFileOpen, false);

function updateSigns(me, ascendant_position){
  // get asendent and increment by 1 if >12 then reset it to 0
  var current_pos =  ascendant_position ; //me.output[0].position
  me.houses[0].signnum = current_pos;
  for (let i = 1; i < 12; i++) {
    current_pos = current_pos + 1
    if (current_pos >= 13 ) current_pos = 1;
    me.houses[i].signnum = current_pos;
  }

}

function drawNakshatra(me) {
  if(me.showNakshatra == true) me.showNakshatra = false; 
  else me.showNakshatra = true;
  //var ctx = me.ctx;
  console.log("Draw Nakshatra");
  drawAstro(me);
}

function drawLords(me) {
  if(me.showLords == true) me.showLords = false; 
  else me.showLords = true;
  //var ctx = me.ctx;
  console.log("Draw Lords");
  drawAstro(me);
}

function drawAspect(me) {
  if(me.showAspect == true) me.showAspect = false; 
  else me.showAspect = true;
  //var ctx = me.ctx;
  drawAstro(me);
}
//calculate chart
// $('#code').keyup(function() {
//   var discountcode = this.value;
//   console.log(discountcode);
// });\
// if this is for an ascendant then give the ascendant name if not 
function logitudeToPositions(longitude){
let position = 1;
//let house = 0;
let degree = 0;
let mins = 0;
let secs = 0;
//console.log("longitude = " +longitude);
while(longitude>30){position++; longitude = longitude -30;}
degree = Number(longitude).toFixed(2);;
//console.log("position = " +position);
//console.log("degree = " +degree);
mins = parseInt((longitude-parseInt(longitude))*60);
//console.log("mins = " +mins);
secs = parseInt(((longitude-parseInt(longitude))*60 - mins)*60);
//console.log("secs = " +secs);
// //let signNum = parseInt(signsArray.indexOf(outputObj[0].sign));
// let signNum = 10;
// signNum = signNum+1;
// //console.log("signNum " +  signNum);
// //console.log("sign " +  outputObj[0].sign);
// var pos_dist = position - signNum; 
// //console.log("pos_dist = " +pos_dist);
// if(pos_dist < 0) house = pos_dist+13
// else house = pos_dist+1
//console.log("house = " +house);
//=IF((D16-$D$35)<0,(D16 -$D$35)+12+1,D16-$D$35+1)
return [position,degree,mins,secs];
}

function updateGraha(graha_name){  // calculate postiions from Logitude
  let degree = 0;
  let mins = 42;
  let secs = 5;
  let position=0;
  let ascendant_position = 0;
  if(graha_name == "ascendant") ascendant_position = 0;
  else ascendant_position = outputObj[ "ascendant"].position;
  let house = 0;
  [position,degree,mins,secs] = logitudeToPositions(inputObj.graha[graha_name]);
  
  //let ascendant = signsArray[ascendant_position-1]; // this is ascendant name a great starting point 
  // then update house signnum (SignPositions) in astroObj given ascendant position
  if(graha_name == "ascendant") {
    updateSigns(astroObj,position);
    //console.log("graha_name = " +graha_name);
    house = 1;
  }
  else {
    const pos_dist = position - ascendant_position; 
    if(pos_dist < 0) house = pos_dist+13; else house = pos_dist+1;
  }
  //console.log("graha_name: "+graha_name+ " Ascendent position = " +ascendant_position +  " position = " +position + " house = " +house + " degree = " +degree + " mins = " +mins + " secs = " +secs);
  // next update outputObj
  //Ascendant
  outputObj[graha_name].longitude = inputObj.graha["ascendant"];
  outputObj[graha_name].position = position;
  outputObj[graha_name].sign = signsArray[position-1];
  outputObj[graha_name].house = house;
  outputObj[graha_name].degree = degree;
  outputObj[graha_name].mins = mins;
  outputObj[graha_name].secs = secs;
  //"aries":      {"position": "1",  "ruledby": "mars",    "exaltation": "sun",       "debilitation": "saturn"      },
  outputObj[graha_name].ruledby = signObj[position-1].ruledby;
  if(graha_name != "ascendant") {
    //console.log(" I AM HERE");
    if( graha_name ==  signObj[position-1].ruledby) outputObj[graha_name].is_ownsign = true;
    else outputObj[graha_name].is_ownsign = false;
    if( graha_name == signObj[position-1].exaltation) outputObj[graha_name].is_exhalted = true;
    else outputObj[graha_name].is_exhalted = false;
    if( graha_name == signObj[position-1].debilitation) outputObj[graha_name].is_debilitated = true;
    else outputObj[graha_name].is_debilitated = false;

 
    // Digbala(Directional Strength), is another thing to look to know if a particular planet has extra strength.
    // 1) Jupiter or  Mercury in first house is a source Digbala
    // 2) Moon or Venus in Fourth House is a source of Digbala
    // 3) Saturn in the seventh house is a source of Digbala
    // 4) Mars or Sun in 10 house is a source of Digbala
    if((graha_name == "jupiter" ||  graha_name == "mercury") &&  house == 1)outputObj[graha_name].is_digbala = true;
    else if ( (graha_name == "moon" ||  graha_name == "venus") &&  house == 4)outputObj[graha_name].is_digbala = true;
    else if ( (graha_name == "saturn") &&  house == 7)outputObj[graha_name].is_digbala = true;
    else if ( (graha_name == "mars" ||  graha_name == "sun") &&  house == 10)outputObj[graha_name].is_digbala = true;
    else outputObj[graha_name].is_digbala = false;

    outputObj[graha_name].is_retrograde = false;
    // if in the same house as the SUN and withing 6 degrees from the sun
    if((graha_name != "sun"  &&  outputObj["sun"].house == house) && (parseInt(outputObj["sun"].degree)- parseInt(degree)) <=6  ) outputObj[graha_name].is_combust = true;
    else outputObj[graha_name].is_combust = false;
    const planet_ruledby = signObj[position-1].ruledby;
    //console.log(graha_name + " Planet RULED BY: " + planet_ruledby);
    if((graha_name == "sun" &&  (planet_ruledby == "moon" || planet_ruledby == "mars"|| planet_ruledby == "jupiter" )))outputObj[graha_name].is_friendsign = true;
    if((graha_name == "sun" &&  (planet_ruledby == "mercury")))outputObj[graha_name].is_neutralsign = true;
    if((graha_name == "sun" &&  (planet_ruledby == "venus" || planet_ruledby == "saturn" )))outputObj[graha_name].is_enemysign = true;

    if((graha_name == "moon" &&  (planet_ruledby == "sun" || planet_ruledby == "mercury")))outputObj[graha_name].is_friendsign = true;
    if((graha_name == "moon" &&  (planet_ruledby == "mars" || planet_ruledby == "jupiter" || planet_ruledby == "venus" || planet_ruledby == "saturn")))outputObj[graha_name].is_neutralsign = true;
    //if((graha_name == "moon" &&  (planet_ruledby == "venus" || planet_ruledby == "saturn" )))outputObj[graha_name].is_enemysign = true;
    
    if((graha_name == "mars" &&  (planet_ruledby == "sun" || planet_ruledby == "moon"|| planet_ruledby == "jupiter" )))outputObj[graha_name].is_friendsign = true;
    if((graha_name == "mars" &&  (planet_ruledby == "venus" || planet_ruledby == "saturn")))outputObj[graha_name].is_neutralsign = true;
    if((graha_name == "mars" &&  (planet_ruledby == "mercury")))outputObj[graha_name].is_enemysign = true;

    if((graha_name == "mercury" &&  (planet_ruledby == "sun" || planet_ruledby == "venus")))outputObj[graha_name].is_friendsign = true;
    if((graha_name == "mercury" &&  (planet_ruledby == "mars" || planet_ruledby == "jupiter" || planet_ruledby == "saturn")))outputObj[graha_name].is_neutralsign = true;
    if((graha_name == "mercury" &&  (planet_ruledby == "moon")))outputObj[graha_name].is_enemysign = true;
    
    if((graha_name == "jupiter" &&  (planet_ruledby == "sun" || planet_ruledby == "moon"|| planet_ruledby == "mars" )))outputObj[graha_name].is_friendsign = true;
    if((graha_name == "jupiter" &&  (planet_ruledby == "saturn")))outputObj[graha_name].is_neutralsign = true;
    if((graha_name == "jupiter" &&  (planet_ruledby == "mercury" || planet_ruledby == "venus" )))outputObj[graha_name].is_enemysign = true;
    
    if((graha_name == "venus" &&  (planet_ruledby == "mercury" || planet_ruledby == "saturn")))outputObj[graha_name].is_friendsign = true;
    if((graha_name == "venus" &&  (planet_ruledby == "mars" || planet_ruledby == "jupiter" )))outputObj[graha_name].is_neutralsign = true;
    if((graha_name == "venus" &&  (planet_ruledby == "sun" || planet_ruledby == "moon" )))outputObj[graha_name].is_enemysign = true;

    if((graha_name == "saturn" &&  (planet_ruledby == "mercury" || planet_ruledby == "venus" )))outputObj[graha_name].is_friendsign = true;
    if((graha_name == "saturn" &&  (planet_ruledby == "jupiter")))outputObj[graha_name].is_neutralsign = true;
    if((graha_name == "saturn" &&  (planet_ruledby == "sun" || planet_ruledby == "moon" || planet_ruledby == "mars" )))outputObj[graha_name].is_enemysign = true;
    // if(graha_name != "sun" ) outputObj[graha_name].is_combust = true;
    // outputObj[graha_name].is_combust = false;
  }
}

function addTextarea(id,text){
  const val = $(id).val();
  //const rownum =  $(id).attr('rows');
  //console.log("Current text = " + val + "Current id = " + id + "rownum = " + rownum);
  //if(rownum!=1) $(id).attr('rows', parseInt($(id).attr('rows'))+(parseInt(1))); // increase row size by one
  if (val == "")  $(id).val(text);
  else{ 
    $(id).attr('rows', parseInt($(id).attr('rows'))+(parseInt(1))); // increase row size by one
    $(id).val(val+'\n'+ text); 
  }
  //console.log("New text = " + text);
}

function clearOutput(){
  var id ;
  for(let i=1; i <=12; i++){
  id = "#house"+i;
  //console.log("house = ", id);
  $(id).attr('rows', 1);
  $(id).val("");
  }
}

function updateOutput(me){
    clearOutput(); // creat the output form
    //update outputObj, start with ascendant  
    
    for (let graha in outputObj) {
      //console.log(graha, outputObj[graha].house);
      house = outputObj[graha].house;
      updateGraha(graha);
    }
    //update positions in singobj
    //var signObj =   // RASI
    // for(let i=0; i <12; i++){

    //   //signObj[i].position =  astroObj.houses[i].signnum
    //   //console.log("Position= " + signObj[i].position + " New Positon " + astroObj.houses[i].signnum )
    // }
    //get zodiac signs
    for(let i=0; i <12; i++){
      let id = "#sign"+(i+1);
      var signnum = astroObj.houses[i].signnum;
      //var signnum1 = signnum-1;
      //console.log("SIGNNUM: " + signnum + "SIGNNAME: " +  signObj[signnum].name)
      var element;
      let index = signObj.findIndex(
        element => element.name === signsArray[signnum-1]
      );
      //console.log("INDEX: " + index + " signnum "+ signnum+ " Name: " + signsArray[signnum-1]);

      //console.log("INDEX: " + index + " signnum "+ signnum+ " Name: " + signObj[index].name + " Position: " + signObj[index].position + " Ruledby: " + signObj[index].ruledby );
      
      // var index = signObj.findIndex("name" => "name".value === "cancer");
      // 
      var str = toTitleCase(signsArray[signnum-1] + '(' + signnum +')') + "Ruler:" + toTitleCase(signObj[index].ruledby);
      let len = str.length;
      //28 is the maximum length
      for (let k=len; k<28; k++)str = str + '\u00A0';
      //str =str+ str.length;
      $(id).text(str);
    }
    //Updates planets in the output form
    var house, degree;
    for (let graha in outputObj){
        house = outputObj[graha].house;
        degree = parseInt(outputObj[graha].degree);
        if(graha == "ascendant"){
          house1_str = "Ascendant" +' ('+degree +'\xB0'+outputObj[graha].mins+'\u2032'+outputObj[graha].secs+'\u2033'+')' ;
        }
        else {
          house1_str = toTitleCase(graha)+' ('+degree +'\xB0'+outputObj[graha].mins+'\u2032'+outputObj[graha].secs+'\u2033'+')' ;
          if(outputObj[graha].is_ownsign) house1_str = house1_str + " Ownsign";
          if(outputObj[graha].is_retrograde) house1_str = house1_str + " Retrogate";
          if(outputObj[graha].is_combust) house1_str = house1_str + " Combust";
          if(outputObj[graha].is_exhalted) house1_str = house1_str + " Exhalted";
          if(outputObj[graha].is_debilitated) house1_str = house1_str + " Debilitated";
          if(outputObj[graha].is_digbala) house1_str = house1_str + " Digbala";
          if(outputObj[graha].is_friendsign) house1_str = house1_str + " Friend";
          if(outputObj[graha].is_neutralsign) house1_str = house1_str + " Neutral";
          if(outputObj[graha].is_enemysign) house1_str = house1_str + " Enemy";

        }
        let id = "#house"+house;
        addTextarea(id,house1_str); // write to the output form
    }
  }


function updateChart(me){
  var value;
  value = $("#name").val();if( inputObj.name != value) inputObj.name = value;
  value = $("#city").val();if( inputObj.city != value) inputObj.city = value;
  value = $("#state").val();if( inputObj.state != value) inputObj.state = value;
  value = $("#country").val();if( inputObj.country != value) inputObj.country = value;
  value = $("#date").val();if( inputObj.date != value) inputObj.date = value;
  value = $("#time").val();if( inputObj.time != value) inputObj.time = value;
  value = $("#latitude").val();if( inputObj.latitude != value) inputObj.latitude = value;
  value = $("#longitude").val();if( inputObj.longitude != value) inputObj.longitude = value;
  value = $("#ascendant").val();if( inputObj.graha["ascendant"] != value) inputObj.graha["ascendant"] = value;
  value = $("#sun").val();if( inputObj.graha["sun"] != value) inputObj.graha["sun"] = value;
  value = $("#moon").val();if( inputObj.graha["moon"] != value) inputObj.graha["moon"] = value;
  value = $("#mercury").val();if(inputObj.graha["mecury"] != value) inputObj.graha["mercury"] = value;
  value = $("#venus").val();if( inputObj.graha["venus"] != value) inputObj.graha["venus"] = value;
  value = $("#mars").val();if( inputObj.graha["mars"] != value) inputObj.graha["mars"] = value;
  value = $("#jupiter").val();if( inputObj.graha["jupiter"] != value) inputObj.graha["jupiter"] = value;
  value = $("#saturn").val();if( inputObj.graha["saturn"] != value) inputObj.graha["saturn"] = value;
  value = $("#rahu").val();if( inputObj.graha["rahu"] != value) inputObj.graha["rahu"] = value;
  value = $("#ketu").val();if( inputObj.graha["ketu"] != value) inputObj.graha["ketu"] = value;
  //alert("Form Updated");
  console.log(" Form Updated");
  redrawAstro();

}

function test(context){
  // context.vswrCircle = '3.0';
  // context.drawVSWRCircles;
  // console.log(context.Z0);
 }
 //var defaultObj;
// onload start
 $('document').ready(function () {
        //alert (" ready 873");
        console.log("init")
        window.name = "parent";
        //defaultObj = astroObj;
        //chart.currentDevicePixelRatio = window.devicePixelRatio || 1 ||  window.window.devicePixelRatio;
    $('input[type=text]').bind('copy paste', function (e) {
        e.preventDefault();
    });   // this prenvents the copy/paste menu popping up in IOS when you touch the step box
    resize(astroObj.ctx.canvas)// Astro chart drawn here
    get(); // restore the last session if saved earlier
    //updateUI();
    //$(E1).trigger("touchspin.updatesettings", { step: 0.1 }); // make load element(RX(R)/G(Mag)) step size 0.1
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
})

function getRandomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}
    // called by redrawAstro function
function resize(canvas) {
    //alert (" resize 1031");
    // Our canvas must cover full height of screen
    // regardless of the resolution
    // var ht = window.innerHeight;
    // var wd = window.innerWidth ;
     var ht =  getMaximumHeight (canvas);
     var wd =  getMaximumWidth (canvas);
     const aspectRatio = true;
     //var width = Math.max(0, Math.floor(window.innerWidth));
     //var height = Math.max(0, Math.floor(aspectRatio ? width / aspectRatio : window.innerHeight));
     var width = Math.max(0, Math.floor(wd));
     var height = Math.max(0, Math.floor(aspectRatio ? width / aspectRatio : ht));
      console.log( "NewWidth = " + width);
      console.log( "NewHeight = " + height);
      astroObj.ctx.canvas.width =chart.width= width;
      astroObj.ctx.canvas.height =chart.height = height;
      astroObj.ctx.canvas.style.width = width+'px';
      astroObj.ctx.canvas.style.height = height+'px';
      astroObj.hitCtx.canvas.width =chart.width= width;
      astroObj.hitCtx.canvas.height =chart.height = height;
      astroObj.hitCtx.canvas.style.width = width+'px';
      astroObj.hitCtx.canvas.style.height = height+'px';
      //retinaScale(chart, astroObj);  
      resize_done = true;
  }
  
  function redrawAstro () {
      console.log("Redrawing astro1 Begin");
      var ctx = astroObj.ctx;
      if(ctx ==null) return;
     
      resize(ctx.canvas)
      console.log("Redrawing astro2 End");
      astroObj.drawAstro(); // clears canvas too
  }


function drawAstro(me) {
 // str = JSON.stringify(me, null, 4); // (Optional) beautiful indented output.
 // console.log("Astro Object= " + str); // Logs output to dev tools console.
  if(resize_done == false) return;
  //alert (" drawAstro 16");
  var ctx = me.ctx;
  var hitCtx = me.hitCtx;
 
  ctx.clearRect(0,0,chart.width,chart.height);
  var  r =  AXIS_RANGE;
 //var  r =  chart.height;
  var  wby2 = chart.width/2;
  var  hby2 = chart.height/2;
  colorsHash = {};
  const propOwn = Object.keys(me.houses);
  //console.log("House Object length= " + propOwn.length); // 1

  for (let i = 0; i < propOwn.length; ++i) {
    //console.log(houses[i].color);
    const colorKey = getRandomColor();
      if (!me.colorsHash[colorKey]) {
        me.houses[i].colorKey = colorKey;
          me.colorsHash[colorKey] = me.houses[i].colorKey;
    }
    //console.log(me.houses[i].colorKey);
    //console.log(me.colorsHash[colorKey]);
  } // end for

  //str = JSON.stringify(me.colorsHash, null, 4); // (Optional) beautiful indented output.
  //console.log("colorHash Object= " + str); // Logs output to dev tools console.
  //str = JSON.stringify(me.houses, null, 4); // (Optional) beautiful indented output.
  //console.log("houses Object= " + str); // Logs output to dev tools console.
  
  $("#name").val(inputObj.name);
  $("#city").val(inputObj.city);
  $("#state").val(inputObj.state);
  $("#country").val(inputObj.country);
  $("#date").val(inputObj.date);
  $("#time").val(inputObj.time);
  $("#latitude").val(inputObj.latitude);
  $("#longitude").val(inputObj.longitude);
  $("#ascendant").val(inputObj.graha["ascendant"]);
  $("#sun").val(inputObj.graha["sun"]);
  $("#moon").val(inputObj.graha["moon"]);
  $("#mercury").val(inputObj.graha["mercury"]);
  $("#venus").val(inputObj.graha["venus"]);
  $("#mars").val(inputObj.graha["mars"]);
  $("#jupiter").val(inputObj.graha["jupiter"]);
  $("#saturn").val(inputObj.graha["saturn"]);
  $("#rahu").val(inputObj.graha["rahu"]);
  $("#ketu").val(inputObj.graha["ketu"]);
  me.updateOutput();
  
  drawCircle(ctx,0,0,r,"lightgray");  
  drawRectangle(ctx,0,0,r,0,"black");
  drawLine(ctx,1,135,1,135+180,"black");
  drawLine(ctx,1,45,1,180+45,"black");
  drawLine(ctx,1/Math.sqrt(2),90,1/Math.sqrt(2),180,"black");
  drawLine(ctx,1/Math.sqrt(2),180,1/Math.sqrt(2),270,"black");
  drawLine(ctx,1/Math.sqrt(2),270,1/Math.sqrt(2),360,"black");
  drawLine(ctx,1/Math.sqrt(2),0,1/Math.sqrt(2),90,"black");

  //ctx.beginPath();
  // House1
  var rarray = [0, 0.5, 1/Math.SQRT2, 0.5, 0];
  var qarray = [0, 45,  90,           135, 0];
  me.houses[0].rarray = rarray;  me.houses[0].qarray = qarray;
  drawPath(ctx, [...rarray],[...qarray],me.houses[0].color,me.houses[0].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[0].colorKey,me.houses[0].colorKey); // line color, fill color
  // House2
  rarray = [0.5,  1/Math.SQRT2, 1,   0.5];
  qarray = [135,  90,           135, 135];
  me.houses[1].rarray = rarray;  me.houses[1].qarray = qarray;
  drawPath(ctx, [...rarray],[...qarray],me.houses[1].color,me.houses[1].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[1].colorKey,me.houses[1].colorKey); // line color, fill color
  // House3
  rarray = [0.5, 1,   1/Math.SQRT2, 0.5];
  qarray = [135, 135, 180,          135];
  me.houses[2].rarray = rarray;  me.houses[2].qarray = qarray;
  drawPath(ctx, [...rarray],[...qarray],me.houses[2].color,me.houses[2].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[2].colorKey,me.houses[2].colorKey); // line color, fill color
  // House4
  rarray = [0, 0.5, 1/Math.SQRT2, 0.5,  0];
  qarray = [0, 135, 180,          225,  0];
  me.houses[3].rarray = rarray;  me.houses[3].qarray = qarray;
  drawPath(ctx, [...rarray],[...qarray],me.houses[3].color,me.houses[3].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[3].colorKey,me.houses[3].colorKey); // line color, fill color
  // House5
  rarray = [0.5, 1/Math.SQRT2, 1,   0.5];
  qarray = [225, 180,          225, 225];
  me.houses[4].rarray = rarray;  me.houses[4].qarray = qarray;
  drawPath(ctx, [...rarray],[...qarray],me.houses[4].color,me.houses[4].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[4].colorKey,me.houses[4].colorKey); // line color, fill color
  // House6
  rarray = [0.5,  1,   1/Math.SQRT2,   0.5];
  qarray = [225,  225, 270, 225];
  me.houses[5].rarray = rarray;  me.houses[5].qarray = qarray;
  drawPath(ctx, [...rarray],[...qarray],me.houses[5].color,me.houses[5].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[5].colorKey,me.houses[5].colorKey); // line color, fill color  
  // House7
  rarray = [0, 0.5, 1/Math.SQRT2, 0.5, 0];
  qarray = [0, 225, 270,          315, 0];
  me.houses[6].rarray = rarray;  me.houses[6].qarray = qarray;
  drawPath(ctx, [...rarray],[...qarray],me.houses[6].color,me.houses[6].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[6].colorKey,me.houses[6].colorKey); // line color, fill color
  //House8
  rarray = [0.5, 1/Math.SQRT2, 1,   0.5];
  qarray = [315, 270,          315, 315];
  me.houses[7].rarray = rarray;  me.houses[7].qarray = qarray;
  drawPath(ctx, [...rarray],[...qarray],me.houses[7].color,me.houses[7].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[7].colorKey,me.houses[7].colorKey); // line color, fill color
  // House9
  rarray = [0.5, 1,   1/Math.SQRT2,  0.5];
  qarray = [315, 315, 0,           315];
  me.houses[8].rarray = rarray;  me.houses[8].qarray = qarray;
  drawPath(ctx, [...rarray],[...qarray],me.houses[8].color,me.houses[8].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[8].colorKey,me.houses[8].colorKey); // line color, fill color
  // House10
  rarray = [0, 0.5, 1/Math.SQRT2, 0.5, 0];
  qarray = [0, 315, 0,            45,  0];
  me.houses[9].rarray = rarray;  me.houses[9].qarray = qarray;
  drawPath(ctx, [...rarray],[...qarray],me.houses[9].color,me.houses[9].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[9].colorKey,me.houses[9].colorKey); // line color, fill color  
  //House11
  rarray = [0.5, 1/Math.SQRT2, 1,  0.5];
  qarray = [45,  0,          45, 45];
  me.houses[10].rarray = rarray;  me.houses[10].qarray = qarray;
  drawPath(ctx, [...rarray],[...qarray],me.houses[10].color,me.houses[10].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[10].colorKey,me.houses[10].colorKey); // line color, fill color
  // House12
  rarray = [0.5, 1, 1/Math.SQRT2, 0.5];
  qarray = [45, 45, 90,           45];
  me.houses[11].rarray = rarray;  me.houses[11].qarray = qarray;
  drawPath(ctx, [...rarray],[...qarray],me.houses[11].color,me.houses[11].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[11].colorKey,me.houses[11].colorKey); // line color, fill color
  //ctx.closePath();
  // //drawSprite(ctx,0,0);
  //drawFilledCircle(ctx,0,0)
  //me.updateSigns();
   
  placeText(ctx,0,50,me.houses[0].signnum ,"center","middle");
  placeText(ctx,MQtoX(0.5,135)+0,MQtoY(0.5,135)+50, me.houses[1].signnum,"center","middle");
  placeText(ctx,MQtoX(0.5,135)-50,MQtoY(0.5,135)+0, me.houses[2].signnum,"center","middle");
  placeText(ctx,-50,0,me.houses[3].signnum,"center","middle");
  placeText(ctx,MQtoX(0.5,225)-50,MQtoY(0.5,225)+0, me.houses[4].signnum,"center","middle");
  placeText(ctx,MQtoX(0.5,225)+0,MQtoY(0.5,225)-50, me.houses[5].signnum,"center","middle");
  placeText(ctx,0,-50,me.houses[6].signnum,"center","middle");
  placeText(ctx,MQtoX(0.5,315)+0,MQtoY(0.5,315)-50, me.houses[7].signnum,"center","middle");
  placeText(ctx,MQtoX(0.5,315)+50,MQtoY(0.5,315)+0, me.houses[8].signnum,"center","middle");
  placeText(ctx,50,0,me.houses[9].signnum,"center","middle");
  placeText(ctx,MQtoX(0.5,45)+50,MQtoY(0.5,45)+0, me.houses[10].signnum,"center","middle");
  placeText(ctx,MQtoX(0.5,45)+0,MQtoY(0.5,45)+50, me.houses[11].signnum,"center","middle");
  DrawImage(ctx,0,0,0.02*AXIS_RANGE,"earth_img1");
  //place East, West, North, South
  DrawImage(ctx,MQtoX(1/Math.SQRT2,90),MQtoY(1/Math.SQRT2,80)+120,0.022*AXIS_RANGE,"east");
  DrawImage(ctx,MQtoX(1/Math.SQRT2,270),MQtoY(1/Math.SQRT2,270)-110,0.022*AXIS_RANGE,"west");
  DrawImage(ctx,MQtoX(1/Math.SQRT2,180)-100,MQtoY(1/Math.SQRT2,180),0.022*AXIS_RANGE,"north");
  DrawImage(ctx,MQtoX(1/Math.SQRT2,0)+100,MQtoY(1/Math.SQRT2,0),0.022*AXIS_RANGE,"south");
  DrawAllSigns(ctx);
  DrawAllGrahas(ctx);
  if(astroObj.showAspect == true)
  {
    //var ctx = me.ctx;
    var planet, x, y, aspect,house,final_aspect;
    for(let i=1; i <planetsArray.length; i++){
      planet = planetsArray[i];
      if(inputObj.graha[planet]=="") break;
      house = outputObj[planet].house;
      x = outputObj[planet].x;
      y = outputObj[planet].y;
      aspect = outputObj[planet].aspect;
      aspect.forEach(function(aspecting) {
        console.log(planet+' house: '+house+' '+x+' '+y+" => aspecting " + aspecting + " " + " "+ astroObj.houses[aspecting].centerx  + " "+ astroObj.houses[aspecting].centery);
        final_aspect  = house + aspecting - 1;
        if(final_aspect >12) final_aspect = final_aspect - 12;
        console.log("final aspect : " + final_aspect);
        DrawLinewithArrow(ctx,x,y,astroObj.houses[final_aspect-1].centerx,astroObj.houses[final_aspect-1].centery,planetsColor[i] );
      });
    }
    console.log("show Aspect")
  }
  if(astroObj.showNakshatra == true)
  {
    nakshatraObj.ctx = ctx;
    nakshatraObj.drawNakshatra_();
   // nakshatraObj.print_();
    nakshatraObj.update_();
    //var ctx = me.ctx;
    //var planet, x, y, aspect,house,final_aspect;
    // DrawTriangle(ctx,0,0,0.5,135,0.55,160,"red","red");
    // DrawTriangle(ctx,0,0,0.55,160,0.71,180,"red","red");
    // DrawTriangle(ctx,0,0,0.71,180,0.55,200,"red","red");
    // DrawTriangle(ctx,0,0,0.55,200,0.5,225,"red","red");
    //DrawTriangle(ctx,0,0,0.5,135,0.55,160,"red","red");
    // for(let i=1; i <planetsArray.length; i++){
    //   planet = planetsArray[i];
    //   if(inputObj.graha[planet]=="") break;
    //   house = outputObj[planet].house;
    //   x = outputObj[planet].x;
    //   y = outputObj[planet].y;
    //   aspect = outputObj[planet].aspect;
    //   aspect.forEach(function(aspecting) {
    //     console.log(planet+' house: '+house+' '+x+' '+y+" => aspecting " + aspecting + " " + " "+ astroObj.houses[aspecting].centerx  + " "+ astroObj.houses[aspecting].centery);
    //     final_aspect  = house + aspecting - 1;
    //     if(final_aspect >12) final_aspect = final_aspect - 12;
    //     console.log("final aspect : " + final_aspect);
    //     DrawLinewithArrow(ctx,x,y,astroObj.houses[final_aspect-1].centerx,astroObj.houses[final_aspect-1].centery,planetsColor[i] );
    //   });
    //}
    console.log("show Nakshatra1")
  }
  
  if(astroObj.showLords == true)
  {
    var ctx = me.ctx;
    var signnum, x, y, aspect,ruler,house_num;
    //get zodiac signs
    for(let i=0; i <12; i++)
    {
      let id = "#sign"+(i+1);
      signnum = astroObj.houses[i].signnum;
      let index = signObj.findIndex(
        element => element.name === signsArray[signnum-1]
      );
      //console.log("HOUSE: " + (i+1) + " INDEX: " + index + " signnum "+ signnum+ " Name: " + signObj[index].name + " Position: " + signObj[index].position + " Ruledby: " + signObj[index].ruledby +" x: " + signObj[index].x + " y: " + signObj[index].y );
      // var index = signObj.findIndex("name" => "name".value === "cancer");
      x = signObj[index].x;
      y = signObj[index].y;
      ruler = signObj[index].ruledby;
      //which house is this lord(ruler) placed in
      house_num = outputObj[ruler].house;
      //console.log("ruler: " + ruler + " HOUSE: " +house_num)  ;
      DrawLinewithArrow(ctx,x,y,astroObj.houses[house_num-1].centerx,astroObj.houses[house_num-1].centery,'rgb(0,0,255)' );
    }

  }

  console.log("drawAstro done");

//   let ascendant_degree = parseFloat(outputObj[ "ascendant"].degree);
//   ascendant_degree = 15;
//   var x1, y1;
//   var i=1
//   var radius = 0.1;
//   //for(let i=0; i <12; i++){
//     //let id = "#sign"+(i+1);
//     var signnum = astroObj.houses[i].signnum;
//     var element;
//     let index = signObj.findIndex( element => element.name === signsArray[signnum-1]);
//     let housenum = astroObj.houses[i].num;
//     console.log("INDEX: " + index + " HOUSENUM: " + housenum +  " signnum "+ signnum+ " Name: " + signsArray[signnum-1] + " Position: " + signObj[index].position);
//     // if(ascendant_degree>= 24.00) ascendant_degree = 24.00; // avoid hitting the boudaries
//     // if(ascendant_degree<= 5.00) ascendant_degree = 5.00;
//     [x1,y1] = degreeToXY(i+1,radius,ascendant_degree);
//     //console.log(" deg x= " + x1+ "  deg y = " + y1);
//     DrawSign(ctx,x1,y1,0.2*AXIS_RANGE, 'saturn_img');

//   //var scaled1 = scale(356,356,1);
//   //alert(scaled1.X);
//  // DrawSign(ctx,0+scaled1.X,0+scaled1.Y,0.018*AXIS_RANGE,"capricorn");
  // str = JSON.stringify(me, null, 4); // (Optional) beautiful indented output.
  // console.log("Astro Object= " + str); // Logs output to dev tools console.
  // str = JSON.stringify(me, null, 4); // (Optional) beautiful indented output.
  // console.log("Astro Object= " + str); // Logs output to dev tools console.
}



function DrawLinewithArrow(ctx, x1,y1,x2,y2,color) {
  var headlen = 10; // length of head in pixels
  // var x1 = AXIS_RANGE*r1*Math.cos(d1*Math.PI/180);
  // var y1 = AXIS_RANGE*r1*Math.sin(d1*Math.PI/180);
  // var x2 = AXIS_RANGE*r2*Math.cos(d2*Math.PI/180);
  // var y2 = AXIS_RANGE*r2*Math.sin(d2*Math.PI/180);
  var scaled1 = scale(x1,y1,1);
  var scaled2 = scale(x2,y2,1);
  fromx = scaled1.X;
  fromy = scaled1.Y;
  tox = scaled2.X;
  toy = scaled2.Y;
  var dx = tox - fromx;
  var dy = toy - fromy;
  var angle = Math.atan2(dy, dx);
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = color;
  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);
  ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
  ctx.moveTo(tox, toy);
  ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
 
}

function sun_click(){
  console.log(" Sun was clicked");
}

function mercury_click(){
  console.log(" Mercury was clicked");
}

function DrawAllSigns(ctx){
  //astroObj.houses[0].signnum 
  //get assendant degree
  if(inputObj.graha["ascendant"]=="") return;
  let ascendant_degree = parseFloat(outputObj[ "ascendant"].degree);
  var x1, y1;
  for(let i=0; i <12; i++){
    //let id = "#sign"+(i+1);
    var signnum = astroObj.houses[i].signnum;
    var element;
    //method returns the index (position) of the first element that passes a test.
    let index = signObj.findIndex( element => element.name === signsArray[signnum-1]);
    //let housenum = signObj.findIndex( element => element.num === signsArray[signnum-1]);
    let housenum = astroObj.houses[i].num;
    //console.log("INDEX: " + index + " HOUSENUM: " + housenum +  " signnum "+ signnum+ " Name: " + signsArray[signnum-1] + " Position: " + signObj[index].position);
    if(ascendant_degree>= 26.00) ascendant_degree = 26.00; // avoid hitting the boudaries
    if(ascendant_degree<= 4.00) ascendant_degree = 4.00;
    [x1,y1] = degreeToXY(i+1,0.11,ascendant_degree);
    if(housenum == 1){
      outputObj["ascendant"].x = x1;
      outputObj["ascendant"].y = y1;
    }
    signObj[index].x = x1; 
    signObj[index].y = y1;
    //console.log(" deg x= "
    //console.log(" deg x= " + x1+ "  deg y = " + y1);
    DrawSign(ctx,x1,y1,0.15*AXIS_RANGE, signsArray[signnum-1]);
    //console.log("INDEX: " + index + " signnum "+ signnum+ " Name: " + signObj[index].name + " Position: " + signObj[index].position + " Ruledby: " + signObj[index].ruledby );
  }
}
// SUN 0.65, JUPITER 0.6 SATURN 0.55 VENUS 0.5 MOON 0.4 MARS 0.4  RAHU/KETHU 0.4 MERCURY 0.3 
// SUN 0.55, JUPITER 0.5 SATURN 0.45 VENUS 0.45 MOON 0.4  RAHU/KETHU 0.4 MARS 0.35 MERCURY 0.35
function DrawAllGrahas(ctx){
  //let ascendant_degree = parseFloat(outputObj[ "ascendant"].degree);
  var x1, y1, degree, planet, house, distance, size,alpha,multiplier;
 // planetsArray
  for(let i=1; i <planetsArray.length; i++){
    
    degree = parseFloat(outputObj[ planetsArray[i]].degree);
    planet = planetsArray[i];
    if(inputObj.graha[planet]=="") break;
    house = outputObj[ planetsArray[i]].house;
    alpha=1;
    multiplier = 0.5;
    //console.log("PLANETS " + planet, "DEGREE " + degree, "HOUSE " + house);
    if(planet=="sun")
    {
      distance = 0.25;
      size = 0.55*multiplier;
      alpha=0.9;
      
    }
    else if (planet=="moon"){
      distance = 0.12;
      size = 0.4*multiplier;
      alpha=0.8;
      
    }
    else if (planet=="mercury"){
      distance = 0.15;
      size = 0.35*multiplier;
      alpha=0.6;
    }
    else if (planet=="venus"){
      distance = 0.175;
      size = 0.45*multiplier;
      alpha=0.6;
    }
    else if (planet=="mars"){
      distance = 0.125;
      size = 0.35*multiplier;
      alpha=0.6;
    }
    else if (planet=="jupiter"){
      distance = 0.20;
      size = 0.5*multiplier;
      alpha=0.7;
    }
    else if (planet=="saturn"){
      distance = 0.270;
      size = 0.45*multiplier;
      alpha=0.6;
    }
    else if (planet=="rahu" || planet =="ketu"){
      distance = 0.16;
      size = 0.4*multiplier;
      alpha=0.5;
    }
    else {
      distance = 0.3;
      size = 0.2*multiplier;
      alpha = 1;
    }

    // const degree = parseFloat(outputObj.planetsArray[1].degree);
    // const house = parseInt(outputObj.planetsArray[i].house);
     if(degree>= 26.00) degree = 26.00; // avoid hitting the boudaries
     if(degree<= 4.00) degree = 4.00;
     //degree = 15;
     //house = 1;
     if(house == 1 || house == 4 || house == 7 || house == 10) distance = distance *2;
     [x1,y1] = degreeToXY(house,distance,degree);
     //console.log(" x= " + x1 + " y = " + y1 );
     outputObj[planet].x = x1;
     outputObj[planet].y = y1;
    //  planet = "moon";
     planet = planet+"_img";
     DrawSign(ctx,x1,y1,size*AXIS_RANGE, planet,alpha);
     if(outputObj[ planetsArray[i]].is_exhalted) DrawSign(ctx,x1,y1,size*AXIS_RANGE, "exhalted",alpha);
     else if (outputObj[ planetsArray[i]].is_debilitated) DrawSign(ctx,x1,y1,size*AXIS_RANGE, "debilitated",alpha);
     else if (outputObj[ planetsArray[i]].is_enemysign) DrawSign(ctx,x1,y1,size*AXIS_RANGE, "enemy",alpha);
     else if (outputObj[ planetsArray[i]].is_ownsign) DrawSign(ctx,x1,y1,size*AXIS_RANGE, "ownhouse",alpha);
     else if (outputObj[ planetsArray[i]].is_friendsign) DrawSign(ctx,x1,y1,size*AXIS_RANGE, "friend",alpha);
     else if (outputObj[ planetsArray[i]].is_neutralsign) DrawSign(ctx,x1,y1,size*AXIS_RANGE, "neutral",alpha);
     if(outputObj[ planetsArray[i]].is_combust && planetsArray[i] != "rahu" && planetsArray[i] != "ketu") DrawSign(ctx,x1,y1,size*AXIS_RANGE, "combust",alpha);
  }

}


function DrawSign(ctx,x,y,r,image,alpha) {
  ctx.save();
  var img = document.getElementById(image);
  var scaled = scale(x,y,r);
  if(scaled.R <2) scaled.R = 2;
  //console.log(" x= " + scaled.X + " y = " + scaled.Y + " r =  " + scaled.R);
  //console.log(" img.width= " + img.width + "  img.height = " +  img.height);
  //console.log(" chart.width= " + chart.width+ "  chart.height = " +  chart.width);
  var img_width = img.width * (scaled.R/60);
  var img_height = img.height * (scaled.R/60);
  ctx.globalAlpha  = alpha;
  //ctx.drawImage(img, scaled.X, scaled.Y - img_height / 2,  img_width, img_height ); // top left
  ctx.drawImage(img, scaled.X - img_width / 2, scaled.Y - img_height / 2,  img_width, img_height ); // center point
  //ctx.arc(scaled.X, scaled.Y, scaled.R, (Math.PI/180)*0, (Math.PI/180)*360, false);
  ctx.restore();

}

function drawPath(ctx, [...rarray],[...qarray],color,fillcolor){
  ctx.save();
  ctx.beginPath();
  var x1 = AXIS_RANGE*rarray[0]*Math.cos(qarray[0]*Math.PI/180);
  var y1 = AXIS_RANGE*rarray[0]*Math.sin(qarray[0]*Math.PI/180);
  var r1 =0.02*AXIS_RANGE;
  var scaled1 = scale(x1,y1,r1);
  ctx.moveTo(scaled1.X, scaled1.Y);
  for(let i = 1; i < rarray.length; i++) {
    let x1 = AXIS_RANGE*rarray[i]*Math.cos(qarray[i]*Math.PI/180);
    let y1 = AXIS_RANGE*rarray[i]*Math.sin(qarray[i]*Math.PI/180);
    let scaled2 = scale(x1,y1,r1);
    ctx.lineTo(scaled2.X, scaled2.Y);
  }
  ctx.closePath();
  ctx.lineWidth = "1";
  ctx.strokeStyle = color; // Green path
  ctx.fillStyle = fillcolor;
  ctx.stroke(); // Draw it
  ctx.fill();
  ctx.restore();
}

function DrawImage(ctx,x,y,r,image) {
  ctx.save();
  var img = document.getElementById(image);
  var scaled = scale(x,y,r);
  if(scaled.R <2) scaled.R = 2;
  //console.log(" x= " + scaled.X + " y = " + scaled.Y + " r =  " + scaled.R);
  //console.log(" img.width= " + img.width + "  img.height = " +  img.height);
  //console.log(" chart.width= " + chart.width+ "  chart.height = " +  chart.width);
  var img_width = img.width * (scaled.R/10);
  var img_height = img.height * (scaled.R/10);
  
  ctx.drawImage(img, scaled.X - img_width / 2, scaled.Y - img_height / 2,  img_width, img_height );
  //ctx.arc(scaled.X, scaled.Y, scaled.R, (Math.PI/180)*0, (Math.PI/180)*360, false);
  ctx.restore();

}

function drawSprite(ctx,x,y) {
  //ctx.globalAlpha = 0.5;  // default value 1
  var r = 0.06 * chart.width/2 ;

  var scaled = scale(x,y,0);
	ctx.drawImage(sprite, scaled.X - sprite.width / 2, scaled.Y - sprite.height / 2, r, r);
}

function drawdataSprite(me) {
  var ctx = me.ctx;
  var x = me.dataM * AXIS_RANGE * Math.cos(Math.PI * me.dataQ/180);
  var y = me.dataM * AXIS_RANGE * Math.sin(Math.PI * me.dataQ/180);
  drawFilledCircle(ctx,x,y);
}

function drawRectangle(ctx,x,y,r,rotate,color) {
  //console.log(" x= " + x + " y = " + y + " r =  " + r);
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  var scaled = scale(x,y,r);
  var a = AXIS_RANGE / (2*Math.sqrt(2));

  ctx.translate(-scaled.R/Math.sqrt(2),-scaled.R/Math.sqrt(2))
  ctx.rotate(rotate*Math.PI/180);
  ctx.rect(scaled.X,scaled.Y,2*scaled.R/Math.sqrt(2),2*scaled.R/Math.sqrt(2));
  
  //console.log(" Sx= " + scaled.X + " Sy = " + scaled.Y + " Sr =  " + scaled.R + " A =  " + a);
  ctx.stroke();
  ctx.restore(); // now the default solid line is restored
  ctx.closePath();
}

function drawLine(ctx,r1,d1,r2,d2,color) {
 var x1 = AXIS_RANGE*r1*Math.cos(d1*Math.PI/180);
 var y1 = AXIS_RANGE*r1*Math.sin(d1*Math.PI/180);
 var x2 = AXIS_RANGE*r2*Math.cos(d2*Math.PI/180);
 var y2 = AXIS_RANGE*r2*Math.sin(d2*Math.PI/180);
 var scaled1 = scale(x1,y1,r1);
 var scaled2 = scale(x2,y2,r2);
 ctx.beginPath();
 ctx.lineWidth = 1;
 ctx.strokeStyle = color;
 ctx.moveTo(scaled1.X, scaled1.Y);
 ctx.lineTo(scaled2.X, scaled2.Y);
 ctx.stroke();
 ctx.closePath();
}

function drawMarker(me){
      var ctx = me.ctx;
      var r4 = parseFloat(me.markerM);
      var q1 = parseFloat(me.markerQ);
      var x = AXIS_RANGE*r4*Math.cos(q1*Math.PI/180);
      var y = AXIS_RANGE*r4*Math.sin(q1*Math.PI/180);
      //var R =0.065*chart.width/2  ;
      var R =0.02*AXIS_RANGE;
      drawCircle(ctx,x,y,R,"black");
      var scaled = scale(x,y,R);
      if(scaled.R <4) scaled.R = 4;
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "black";
      ctx.moveTo(scaled.X,scaled.Y-scaled.R);
      ctx.lineTo(scaled.X,scaled.Y+scaled.R);
      ctx.moveTo(scaled.X-scaled.R,scaled.Y);
      ctx.lineTo(scaled.X+scaled.R,scaled.Y);
      ctx.stroke();
      ctx.closePath();	
}


function drawFilledCircle(ctx,x,y) {
     var r=0.02*AXIS_RANGE;
     ctx.beginPath();
	   ctx.save();
     ctx.fillStyle = 'blue';
     ctx.shadowOffsetX = 1;
     ctx.shadowOffsetY = 1;
     ctx.shadowColor = 'rgb(100,100,100)';
     ctx.shadowBlur = 1;
     var scaled = scale(x,y,r);
     if(scaled.R <5) scaled.R = 5;
     ctx.arc(scaled.X, scaled.Y, scaled.R, (Math.PI/180)*0, (Math.PI/180)*360, false);
     ctx.fill();
	   ctx.restore();
     ctx.closePath();
}


//---------------------------------------------------------------------------
// Return TRUE if the given coordinates are inside of the Astro Chart
//---------------------------------------------------------------------------
function InAstro(x,y)
{
    var r;
    r = AXIS_RANGE; 
    return ((x * x)   + (y * y) <= (r*r));
}

function InCircleR(x,y,r)
{ 
    return ((x * x)  + (y * y) <= (r*r));
}
                             4
function getRegion(x,y){
}

function scale(x,y,r) {
  var  wby2 = chart.width/2;
  var  hby2 = chart.height/2;
  if (r !== null && r !== undefined && !isNaN(r)) 
  		r = Math.round(r * parseFloat(wby2/AXIS_RANGE));
  else  r = 0;
  if (x !== null && x !== undefined && !isNaN(x)) 
  		x = Math.round(x * parseFloat(wby2/AXIS_RANGE));
  else  x = 0;
  if (y !== null && y !== undefined && !isNaN(y)) 
  		y = Math.round(y * parseFloat(hby2/AXIS_RANGE));
  else  y = 0;
  x = x + Math.round(wby2);
  y=-y;
  y = y + Math.round(hby2);
  return {
        X: x,
        Y: y,
		    R: r
    };
}

function scalexy(x,y) {
  var  wby2 = chart.width/2;
  var  hby2 = chart.height/2;
  // if (r !== null && r !== undefined && !isNaN(r)) 
  // 		r = Math.round(r * parseFloat(wby2/AXIS_RANGE));
  // else  r = 0;
  if (x !== null && x !== undefined && !isNaN(x)) 
  		x = Math.round(x * parseFloat(wby2/AXIS_RANGE));
  else  x = 0;
  if (y !== null && y !== undefined && !isNaN(y)) 
  		y = Math.round(y * parseFloat(hby2/AXIS_RANGE));
  else  y = 0;
  x = x + Math.round(wby2);
  y=-y;
  y = y + Math.round(hby2);
  return {
        X: x,
        Y: y,
    };
}

function descale(x,y) {
  var  wby2 = chart.width/2;
  var  hby2 = chart.height/2;
  var y1 = y - Math.round(hby2);
  y1=-y1;
  y1= Math.round(y1/parseFloat(hby2/AXIS_RANGE));
  var x1 = x - Math.round(wby2);
  x1= Math.round(x1/parseFloat(wby2/AXIS_RANGE));
  return {
        X: x1,
        Y: y1
    };
}


function drawCircle(ctx,x,y,r,color) {
  //console.log(" x= " + x + " y = " + y + " r =  " + r);
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  var scaled = scale(x,y,r);
  ctx.arc(scaled.X,scaled.Y,scaled.R, 0, Math.PI*2, false);
  ctx.stroke();
  ctx.restore(); // now the default solid line is restored
  ctx.closePath();
}

function DrawArc(ctx,x,y,r,A1,A2,color) {
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  var scaled = scale(x,y,r);
  ctx.arc(scaled.X,scaled.Y,scaled.R,(Math.PI/180)*A1, (Math.PI/180)*A2, false);
  ctx.stroke();
  ctx.restore(); // now the default solid line is restored
  ctx.closePath();
}

function DrawArcA(ctx,x,y,r,A1,A2) {
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = "#000080";
  ctx.setLineDash([1,4]);
  ctx.lineWidth = 1;
  var scaled = scale(x,y,r);
  ctx.arc(scaled.X,scaled.Y,scaled.R,(Math.PI/180)*A1, (Math.PI/180)*A2, false);
  ctx.stroke();
  ctx.restore(); // now the default solid line is restored
  ctx.closePath();
}

function placeText(ctx,x,y,txt,textAlign,textBaseline){
    //console.log(" x= " + x + " y = " + y );
	  ctx.beginPath();
	  var ratio = fontSize / fontBase;   // calc ratio
    var size = chart.width * ratio;   // get font size based on current width 
  	ctx.font = 'bold ' + (size|0) + 'px System';
    //ctx.font = 'bold' +  ' 12pt' +  ' Courier';
  	ctx.fillStyle = "black";
    ctx.textAlign = textAlign;  
	  ctx.textBaseline = textBaseline;
	  var scaled = scale(x,y,0);
	  ctx.fillText(txt, scaled.X,scaled.Y); 
	  ctx.closePath();
}

function drawData(ctx,dataM,dataQ,color){
    if(dataM.length > 0)
	{  
      var i,ilen,radius,ptx,pty;
      ptx = AXIS_RANGE * dataM[0] * Math.cos(dataQ[0]*Math.PI/180);
      pty = AXIS_RANGE * dataM[0] * Math.sin(dataQ[0]*Math.PI/180);
      var scaled = scale(ptx,pty,0);
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;
      ctx.moveTo(scaled.X,scaled.Y);
      for (i = 1, ilen = dataM.length; i < ilen; ++i)
        {
          ptx = AXIS_RANGE * dataM[i] * Math.cos(dataQ[i]*Math.PI/180);
          pty = AXIS_RANGE * dataM[i] * Math.sin(dataQ[i]*Math.PI/180);
          scaled = scale(ptx,pty,0);
          ctx.lineTo(scaled.X,scaled.Y);
        }
      ctx.stroke();
      ctx.closePath();
    }
}


function getMaximumWidth (domNode) {
		var container = domNode.parentNode;
		var paddingLeft = parseInt(getStyle(container, 'padding-left'), 10);
		var paddingRight = parseInt(getStyle(container, 'padding-right'), 10);
		var w = container.clientWidth - paddingLeft - paddingRight;
		var cw = getConstraintWidth(domNode);
		return isNaN(cw)? w : Math.min(w, cw);
	}
	function getMaximumHeight (domNode) {
		var container = domNode.parentNode;
		var paddingTop = parseInt(getStyle(container, 'padding-top'), 10);
		var paddingBottom = parseInt(getStyle(container, 'padding-bottom'), 10);
		var h = container.clientHeight - paddingTop - paddingBottom;
		var ch = getConstraintHeight(domNode);
        //console.log("CH ="+ ch);
        //console.log("h ="+ h);
		return isNaN(ch)? h : Math.min(h, ch);
	}

  function getStyle (el, property) {
		return el.currentStyle ?
			el.currentStyle[property] :
			document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
	}

	// returns Number or undefined if no constraint
	function getConstraintWidth (domNode) {
		return getConstraintDimension(domNode, 'max-width', 'clientWidth');
	}
	// returns Number or undefined if no constraint
	function getConstraintHeight (domNode) {
		return getConstraintDimension(domNode, 'max-height', 'clientHeight');
	}
	/**
	 * Returns if the given value contains an effective constraint.
	 * @private
	 */
	function isConstrainedValue(value) {
		return value !== undefined && value !== null && value !== 'none';
	}
	function getConstraintDimension(domNode, maxStyle, percentageProperty) {
		var view = document.defaultView;
		var parentNode = domNode.parentNode;
		var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
		var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
		var hasCNode = isConstrainedValue(constrainedNode);
		var hasCContainer = isConstrainedValue(constrainedContainer);
		var infinity = Number.POSITIVE_INFINITY;

		if (hasCNode || hasCContainer) {
			return Math.min(
				hasCNode? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
				hasCContainer? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
		}

		return 'none';
  }
  //    retinaScale(chart, astroObject); 
	function retinaScale(chart,astroObject) {
    //var pixelRatio = chart.currentDevicePixelRatio = chart.devicePixelRatio || window.devicePixelRatio || 1;
     var pixelRatio = chart.currentDevicePixelRatio = window.devicePixelRatio ;
    //console.log (" pixelRatio = "+pixelRatio );
		if (pixelRatio === 1) {
			return;
		}
    
    
		var height = chart.height;
		var width = chart.width;

		astroObject.ctx.canvas.height = height * pixelRatio;
		astroObject.ctx.canvas.width = width * pixelRatio;
		astroObject.ctx.scale(pixelRatio, pixelRatio);
	  astroObject.ctx.canvas.style.height = height + 'px';
		astroObject.ctx.canvas.style.width = width + 'px';

    astroObject.hitCtx.canvas.height = height * pixelRatio;
		astroObject.hitCtx.canvas.width = width * pixelRatio;
		astroObject.hitCtx.scale(pixelRatio, pixelRatio);
	  astroObject.hitCtx.canvas.style.height = height + 'px';
		astroObject.hitCtx.canvas.style.width = width + 'px';
  }
  
  	// Private helper function to convert max-width/max-height values that may be percentages into a number
	function parseMaxStyle(styleValue, node, parentProperty) {
		var valueInPixels;
		if (typeof(styleValue) === 'string') {
			valueInPixels = parseInt(styleValue, 10);

			if (styleValue.indexOf('%') !== -1) {
				// percentage * size in dimension
				valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
			}
		} else {
			valueInPixels = styleValue;
		}

		return valueInPixels;
  }
  
  function getMousePosition(evt, chart) {
      var mouseX, mouseY;
      var e = evt.originalEvent || evt,
        canvas = evt.currentTarget || evt.srcElement,
        boundingRect = canvas.getBoundingClientRect();

      var touches = e.touches;
      if (touches && touches.length > 0) {
        mouseX = touches[0].clientX;
        mouseY = touches[0].clientY;

      } else {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }

      // Scale mouse coordinates into canvas coordinates
      // by following the pattern laid out by 'jerryj' in the comments of
      // http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
      var paddingLeft =0;
      var paddingTop = 0;
      var paddingRight =0;
      var paddingBottom =0;
      var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
      var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;

      // We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
      // the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
      mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
      mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);

      return {
        x: mouseX,
        y: mouseY
      };

    };

function degreeToXY(house,m,degree)
{
  var q1; var m1; var x1; var y1;
  switch (parseInt(house)) {
    case 1:
      q1 = (degree +15)*3;
      m1 = m;
      [x1,y1] = MQtoXY(m1,q1,AXIS_RANGE);
      //console.log( "x =" + x1 + " y =" + y1  );
      var scaled = scalexy(x1,y1);
      //console.log( "Back scaled x =" + scaled.X + " scaled y =" + scaled.Y  );
      break;
    case 2:
      q1 = (degree +15)*3;
      m1 = m;
      [x1,y1] = MQtoXY(m1,q1,AXIS_RANGE);
      x1 = x1 - 356;
      y1 = y1 + 356;
      break;  
    case 3:
      // signnum = astroObj.houses[house-1].signnum;
      // [R,Q] = XYtoMQ( x + 356, y - 356, AXIS_RANGE,true);
      // Q=Q/3;
      // degree = Number(Q-45).toFixed(2);
      q1 = (degree +45)*3;
      m1 = m;
      [x1,y1] = MQtoXY(m1,q1,AXIS_RANGE);
      x1 = x1 - 356;
      y1 = y1 + 356;
      break;
    case 4:
      //degree = Number(q/3-45).toFixed(2);
      q1 = (degree +45)*3;
      var m1 = m;
      [x1,y1] = MQtoXY(m1,q1,AXIS_RANGE);
      break;
    case 5:
      // signnum = astroObj.houses[house-1].signnum;
      // [R,Q] = XYtoMQ( x + 356, y + 356, AXIS_RANGE,true);
      // Q=Q/3;
      // degree = Number(Q-45).toFixed(2);
      q1 = (degree +45)*3;
      m1 = m;
      [x1,y1] = MQtoXY(m1,q1,AXIS_RANGE);
      x1 = x1 - 356;
      y1 = y1 - 356;
      break;  
    case 6:
      // signnum = astroObj.houses[house-1].signnum;
      // [R,Q] = XYtoMQ( x + 356, y + 356, AXIS_RANGE,true);
      // Q=Q/3;
      // degree = Number((Q-75)).toFixed(2);
      q1 = (degree +75)*3;
      m1 = m;
      [x1,y1] = MQtoXY(m1,q1,AXIS_RANGE);
      x1 = x1 - 356;
      y1 = y1 - 356;
      break;
    case 7:
      q1 = (degree +75)*3;
      var m1 = m;
      [x1,y1] = MQtoXY(m1,q1,AXIS_RANGE);
      break;
    case 8:
      // signnum = astroObj.houses[house-1].signnum;
      // [R,Q] = XYtoMQ( x - 356, y + 356, AXIS_RANGE,true);
      // Q=Q/3;
      // degree = Number(Q-75).toFixed(2);
      q1 = (degree +75)*3;
      m1 = m;
      [x1,y1] = MQtoXY(m1,q1,AXIS_RANGE);
      x1 = x1 + 356;
      y1 = y1 - 356;
      break;
    case 9:
      // signnum = astroObj.houses[house-1].signnum;
      // [R,Q] = XYtoMQ( x - 356, y + 356, AXIS_RANGE,false);
      // Q=Q/3;
      // degree = Number(Q+15).toFixed(2);
      q1 = (degree - 15)*3;
      m1 = m;
      [x1,y1] = MQtoXY(m1,q1,AXIS_RANGE);
      x1 = x1 + 356;
      y1 = y1 - 356;
      break;
    case 10:
      q1 = (degree -15)*3;
      var m1 = m;
      [x1,y1] = MQtoXY(m1,q1,AXIS_RANGE);
      break;
    case 11:
      // signnum = astroObj.houses[house-1].signnum;
      // [R,Q] = XYtoMQ( x - 356, y - 356, AXIS_RANGE,false);
      // Q=Q/3;
      // degree = Number(Q+15).toFixed(2);
      q1 = (degree - 15 )*3;
      m1 = m;
      [x1,y1] = MQtoXY(m1,q1,AXIS_RANGE);
      x1 = x1 + 356;
      y1 = y1 + 356;
      break;
    case 12:
      // signnum = astroObj.houses[house-1].signnum;
      // [R,Q] = XYtoMQ( x - 356, y - 356, AXIS_RANGE,false);
      // Q=Q/3;
      // degree = Number(Q-15).toFixed(2);
      q1 = (degree + 15)*3;
      m1 = m;
      [x1,y1] = MQtoXY(m1,q1,AXIS_RANGE);
      x1 = x1 + 356;
      y1 = y1 + 356;
      break;
    default:
      
      //console.log(`Sorry, we are out of ${house}.`);
  }
  return [x1,y1];
}


function onMouseMove(evt) {
   // var e = evt.originalEvent || evt;
     //var mouseX = e.clientX-astroObj.ctx.canvas.offsetLeft;  // this works
     //var mouseY = e.clientY-astroObj.ctx.canvas.offsetTop ;  // this is off by about 80px in this version but works with the stand alone component ?
     // var mouseX = e.layerX; // this seems like working // does not work well with firefox
     // var mouseY = e.layerY; // layerX returns the horizontal coordinate of the event relative to the current layer.
    var m = getMousePosition(evt,chart);
    var mouseX = m.x;
    var mouseY  = m.y;
    var house = getHouse(mouseX,mouseY);
    //console.log( "mouseX =" + mouseX + " mouseY =" + mouseY  );
    var descaled = descale(mouseX,mouseY);
    var x= descaled.X;
    var y=descaled.Y;
    var inAstro = InAstro(x,y)
    var signnum ;
    var degree;
    var longitude;
    
    if (inAstro) {
        // var r1 = math.sqrt(((x*x)+(y*y))); // convert to polar form
        // var q;
        // if(r1==0) q=0 ; else q= 180*math.asin(y/r1)/Math.PI;
        // if(x < 0 && y >=0) q= 180-q; if(x<0 && y<0) q= -180-q;  // Adjust for the second and third quadrant
        // var m= r1/AXIS_RANGE; 
        // if(q<0) q = q+ 360; // make it show 360 degree
        //console.log( "x =" + x + " y =" + y  );
        const [m,q] = XYtoMQ(x, y, AXIS_RANGE,true);
        //console.log( "m =" + m + " q =" + q  );
        //const [x1,y1] = MQtoXY(m,q,AXIS_RANGE);
        //console.log( "x =" + x1 + " y =" + y1  );
        var [R,Q] = [0,0];
        var [M1,Q1] = [0,0];
        //document.getElementById("Z1").value ="Z:" +Number(ZR).toFixed(2)+getSign(ZI)+Number(Math.abs(ZI)).toFixed(2)+"i";
        document.getElementById("Z1").value ="H:" + house +' ' +Number(m).toFixed(2) + '\u2220'+ Number(q).toFixed(2)+'\u00B0'+ "  X:" +Number(x).toFixed(0)+' Y:'+Number(y).toFixed(0) ;
        switch (house) {
          case '1':
            signnum = astroObj.houses[house-1].signnum;
            var d = q/3-15;
            degree = Number(q/3-15).toFixed(2);
            longitude = Number(q/3-15+270).toFixed(2);
            document.getElementById("L1").value = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" +longitude+'\u00B0 '  + "Ruler " + toTitleCase(signObj[signnum-1].ruledby);
            var q1 = (d +15)*3;
            var m1 = m;
            const [x1,y1] = MQtoXY(m1,q1,AXIS_RANGE);
            //console.log( "x =" + x1 + " y =" + y1  );
            var scaled = scalexy(x1,y1);
            //console.log( "Back scaled x =" + scaled.X + " scaled y =" + scaled.Y  );

            break;
          case '2':
            signnum = astroObj.houses[house-1].signnum;
            [R,Q] = XYtoMQ( x + 356, y - 356, AXIS_RANGE,true);
            Q=Q/3;
            degree = Number(Q-15).toFixed(2);
            longitude = Number(Q-15+300).toFixed(2);
            document.getElementById("L1").value = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" +longitude+'\u00B0 '  + "Ruler " + toTitleCase(signObj[signnum-1].ruledby); //+" XY:" + X + ' ' +Y +" RQ:" + Number(R).toFixed(2)+ ' ' + Number(Q).toFixed(2);
            break;  
          case '3':
            signnum = astroObj.houses[house-1].signnum;
            [R,Q] = XYtoMQ( x + 356, y - 356, AXIS_RANGE,true);
            Q=Q/3;
            degree = Number(Q-45).toFixed(2);
            longitude = Number(Q-45+330).toFixed(2);
            document.getElementById("L1").value = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" +longitude+'\u00B0 ' + "Ruler " + toTitleCase(signObj[signnum-1].ruledby); 
            break;
          case '4':
            signnum = astroObj.houses[house-1].signnum;
            degree = Number(q/3-45).toFixed(2);
            longitude = Number(q/3-45).toFixed(2);
            document.getElementById("L1").value = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" +longitude+'\u00B0 ' + "Ruler " + toTitleCase(signObj[signnum-1].ruledby);
            break;
          case '5':
            signnum = astroObj.houses[house-1].signnum;
            [R,Q] = XYtoMQ( x + 356, y + 356, AXIS_RANGE,true);
            Q=Q/3;
            degree = Number(Q-45).toFixed(2);
            longitude = Number(Q-45+30).toFixed(2);
            document.getElementById("L1").value = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" +longitude+'\u00B0 ' + "Ruler " + toTitleCase(signObj[signnum-1].ruledby); //+" XY:" + X + ' ' +Y +" RQ:" + Number(R).toFixed(2)+ ' ' + Number(Q).toFixed(2);
            break;  
          case '6':
            signnum = astroObj.houses[house-1].signnum;
            [R,Q] = XYtoMQ( x + 356, y + 356, AXIS_RANGE,true);
            Q=Q/3;
            degree = Number((Q-75)).toFixed(2);
            longitude = Number(Q-75+ 60.00).toFixed(2);
            document.getElementById("L1").value = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" + longitude+'\u00B0 '  + "Ruler " + toTitleCase(signObj[signnum-1].ruledby); //+" XY:" + X + ' ' +Y +" RQ:" + Number(R).toFixed(2)+ ' ' + Number(Q).toFixed(2);
            break;
          case '7':
            signnum = astroObj.houses[house-1].signnum;
            degree = Number((q/3)-75).toFixed(2);
            longitude = Number((q/3)+15).toFixed(2);
            document.getElementById("L1").value = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" + longitude+'\u00B0 ' + "Ruler " + toTitleCase(signObj[signnum-1].ruledby);
            break;
          case '8':
            signnum = astroObj.houses[house-1].signnum;
            [R,Q] = XYtoMQ( x - 356, y + 356, AXIS_RANGE,true);
            Q=Q/3;
            degree = Number(Q-75).toFixed(2);
            longitude = Number((Q-75)+ 120.00).toFixed(2);
            document.getElementById("L1").value = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" + longitude+'\u00B0 '  + "Ruler " + toTitleCase(signObj[signnum-1].ruledby); //+" XY:" + X + ' ' +Y +" RQ:" + Number(R).toFixed(2)+ ' ' + Number(Q).toFixed(2);
            break;
          case '9':
            signnum = astroObj.houses[house-1].signnum;
            [R,Q] = XYtoMQ( x - 356, y + 356, AXIS_RANGE,false);
            Q=Q/3;
            degree = Number(Q+15).toFixed(2);
            longitude = Number(Q+15+150).toFixed(2);
            document.getElementById("L1").value = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" + longitude+'\u00B0 ' + "Ruler " + toTitleCase(signObj[signnum-1].ruledby); //+" XY:" + X + ' ' +Y +" RQ:" + Number(R).toFixed(2)+ ' ' + Number(Q).toFixed(2);
            break;
          case '10':
            [M1,Q1] = XYtoMQ(x, y, AXIS_RANGE,false);
            signnum = astroObj.houses[house-1].signnum;
            Q1=Q1/3;
            degree = Number(Q1+15).toFixed(2);
            longitude = Number(Q1+15+180).toFixed(2);
            document.getElementById("L1").value = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" +longitude+'\u00B0 ' + "Ruler " + toTitleCase(signObj[signnum-1].ruledby);
            break;
          case '11':
            signnum = astroObj.houses[house-1].signnum;
            [R,Q] = XYtoMQ( x - 356, y - 356, AXIS_RANGE,false);
            Q=Q/3;
            degree = Number(Q+15).toFixed(2);
            longitude = Number(Q+15+210).toFixed(2);
            document.getElementById("L1").value = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" + longitude+'\u00B0 ' + "Ruler " + toTitleCase(signObj[signnum-1].ruledby); //+" XY:" + X + ' ' +Y +" RQ:" + Number(R).toFixed(2)+ ' ' + Number(Q).toFixed(2);
            break;
          case '12':
            signnum = astroObj.houses[house-1].signnum;
            [R,Q] = XYtoMQ( x - 356, y - 356, AXIS_RANGE,false);
            Q=Q/3;
            degree = Number(Q-15).toFixed(2);
            longitude = Number(Q-15+240).toFixed(2);
            document.getElementById("L1").value = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" +longitude+'\u00B0 ' + "Ruler " + toTitleCase(signObj[signnum-1].ruledby); //+" XY:" + X + ' ' +Y +" RQ:" + Number(R).toFixed(2)+ ' ' + Number(Q).toFixed(2);
            break;
          default:
            //console.log(`Sorry, we are out of ${house}.`);
        }
      }
    else  {
      document.getElementById("Z1").value ="Z:";
      document.getElementById("L1").value ="LONG:";
    }
    
    if( isMobile ) return;    
}

function getHouse(x,y){
    const pixel = astroObj.hitCtx.getImageData(x, y, 1, 1).data;
    const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
    //console.log("color = " + color);
    const shape = astroObj.colorsHash[color];
    //console.log("shape = " + shape);
    var retvalue = 0;
    astroObj.houses.forEach(house => {
        if (shape === house.colorKey) {
            //console.log('click on house: ' + house.num);
            retvalue = house.num;
        }
    });
    return retvalue;
}

// $(document).on('vmousedown', function(event){
//   holdCords.holdX = event.pageX;
//   holdCords.holdY = event.pageY;
// });

// $(document).on('taphold', function(e){
//   alert('X: ' + holdCords.holdX + ' Y: ' + holdCords.holdY ); 
// });

// var holdCords = {
//   holdX : 0,
//   holdY : 0
// }


function onMouseDblClick(e) {
  //  if( isMobile ) return;
    // var mouseX = e.layerX; // this seems like working
    // var mouseY = e.layerY; // layerX returns the horizontal coordinate of the event relative to the current layer.
    var m = getMousePosition(e,chart);
    var mouseX = m.x;
    var mouseY  = m.y;
    var house = getHouse(mouseX,mouseY);
    //console.log('house number: ' + house);
    const signnum = astroObj.houses[house-1].signnum;
    var msg1 = "House Num: " + house + "\n" + "House Sign: " + toTitleCase(signsArray[signnum-1]+'('+signnum+')')+ "\n" + "Ruler: " + toTitleCase(signObj[signnum-1].ruledby);
    var msg2; 
    var msg3 = "Element: " + signObj[signnum-1].element
    switch (house) {
      case '1':
        msg2 = "Self, physical body, complexion, appearance, head, intelligence, strength, energy, fame, success, nature of birth, caste"
        break;
      case '2':
        msg2 = "Food, nourishment, money, family, face, fashion, wealth, assets, speech, eyes, mouth, face, voice, food"
        break;
      case '3':
        msg2 = "Arts, skills, hands, physics, courage, publishing, computers, younger co-borns, confidants, courage, mental strength, communication skills, creativity, throat, ears, arms, fathers death (7th from 9th), expenditure on vehicles and house (12th from 4th), travels"
        break;
      case '4':
        msg2 = "Home, mother, education, immovable property, psychology, vehicles, house, lands, immovable property, motherland, childhood, wealth from real estate, education, relatives, happiness, comforts, pleasures, peace, state of mind, heart"
        break;
      case '5':
        msg2 = "Children, creativity, advisor, art, intelect, poorvapunya (good deeds of previous lives), intelligence, knowledge & scholarship, devotion, mantras (prayers), stomach, digestive system, authority/power, fame, love, affection, emotions, judgment, speculation"
        break;
      case '6':
        msg2 = "Service, disease/health, competition, debt, adoption, enemies, acute disease, divorce, debt, servants, relatives, mental tension, injuries, health, diseases, agriculture, accidents, mental affliction, mother’s younger brother, hips"
        break;
      case '7':
        msg2 = "Relationships, the 'other',independence, business, Spouse, marriage, marital life, life partner, sex, passion (and related happiness),long journeys, partners, business, death, the portion of the body below the navel."
        break;
      case '8':
        msg2 = "Death, sex organs, losses, scandal, bankruptcy, occult, yoga, ayurveda, longevity, debts, disease, ill-fame, inheritance, loss of friends, occult studies, evils, gifts, unearned wealth, windfall, disgrace, secrets, genitals"
        break;
      case '9':
        msg2 = "Travel, higher education, guru, father, teacher, boss, fortune, religiousness, spirituality, God, higher studies & high knowledge, fortune in a foreign land, foreign trips, diksha (joining a grandchildren), principles, dharma, intuition, compassion, sympathy, leadership, charity, thighs."
        break;
      case '10':
        msg2 = "Career, growth, profession, career, karma (action), conduct in society, fame, honors, awards, self-respect, dignity, knees"
        break;
      case '11':
        msg2 = "Gain, investement, social-life/friends, wish-fulfillment, elder co-borns, income, gains, realization of hopes, friends, ankles "
        break;
      case '12':
        msg2 = "Loss, isolation, incarceration, immigration, foriegn-contact, expenditure, punishment, imprisonment, hospitalization, pleasures in bed, misfortune, bad habits, sleep, meditation, donation, secret enemies, heaven, left eye, feet, residence away from the place of birth, moksha (emancipation/liberation)"
        break;
      default:
        console.log(`Sorry, we are out of ${house}.`);
    }

    ShowMessage("AstroView",msg1+'\n' +msg3+'\n' +msg2 );

    }


function set_click() {
    // save state to local storage
    localStorage.setItem('inputData', JSON.stringify(inputObj));
    //console.log(JSON.stringify(schObj));
    // clear off data arrays - no need to save data
    // smithObj.sweepDatasets[0].dataM.splice(0,smithObj.sweepDatasets[0].dataM.length); // clear Sweep data
    // smithObj.sweepDatasets[0].dataQ.splice(0,smithObj.sweepDatasets[0].dataQ.length);
    // smithObj.plotDatasets[0].dataM.splice(0,smithObj.plotDatasets[0].dataM.length); // clear Plot data
    // smithObj.plotDatasets[0].dataQ.splice(0,smithObj.plotDatasets[0].dataQ.length);
    // localStorage.setItem('smithData', JSON.stringify(smithObj));
    //console.log(JSON.stringify(smithObj));
}

function updateUI() {
    astroObj.drawAstro();
    //outputObj.update();
}

function get_click(){
         window.location.reload();
}

function get() {
    // Get from local storage
    var item = localStorage.getItem('inputData');
    if( item !== null)
    {
        var inputObj1 =JSON.parse(item);
        //console.log(schObj);
        copy_inputObj(inputObj1);
        //console.log("After copying");
        //console.log(schObj);
    }
    else { console.log(" inputData local storage not set");  };  

    // item = localStorage.getItem('smithData');
    // if( item !== null)
    // {
    //     var astroObj1 =JSON.parse(item);
    //     copy_astroObj(astroObj1);
    // }
    // else { console.log(" smithData local storage not set");  }; 
    updateUI();
    
}

function new_click() {
    localStorage.removeItem('inputData');
    delete window.localStorage["inputData"];
   // localStorage.removeItem('smithData');
    localStorage.setItem("transferFlag", 'false');
    //delete window.localStorage["smithData"];
    window.location.reload();
}

function save_click() {
    var  name = inputObj.name;
    name = name.replace(/\s/g, '')
    name= name +".json";
    saveJSONtoFile(inputObj, name);
}

function saveCanvas_click(){
    astroObj.ctx.canvas.toBlob(function(blob) {
      var  name = inputObj.name;
      name = name.replace(/\s/g, '')
      name= name +".png";
      saveAs(blob, name);
    });
}



// export the sweep data as a gam file 
function import_click() {
   document.getElementById('file-input1').click();
}

function myfunc() {
    console.log("here");
}
// open JSON file
function handleFileOpen(e) {
    var file = e.target.files[0];
    //var files = evt.target.files; // FileList object
    //console.log(file);
    if (!file) {
        return;
    }
    // else if (!file.type.match('text.*')) 
    // {
  //   alert(file.name + " is not a valid text file");
    // } 
    else if(file) 
    {
        var reader = new FileReader();
        reader.onload = function(e)
            {
                var contents = reader.result;
                // alert( "Got the file. " 
                //         +"name: " + file.name + "\n "
                //         +"type: " + file.type + "\n "
                //         +"size: " + file.size + " bytes\n"
                //         + "starts with: " + contents.substr(1, contents.indexOf("n"))
                //         + " " + contents.substr(2, 3)
                //     );
                var inputObj1 =tryParseJSON(contents);
                if( inputObj1 && file.size < 65536 &&  inputObj1.ver == "1")  // added a 64K requirement- to have some bounds
                  {
                    //alert (" Verified");
                    //var schObj1 =JSON.parse(contents);
                    clear_all();
                    copy_inputObj(inputObj1);
                    console.log(JSON.stringify(inputObj));
                    
                    updateUI(); // update the ui elements
                  }  
                else ShowMessage_sm("AstroView","File too long (>64K) or the of the wrong format")
                
            }
        reader.readAsText(file); 
        $('input[type="file"]').val(null); // this clears the file read 
    }
  else
  {
        alert("Failed to load file");
  }

}

// export the last sweep data as a gam file 
function export_click() {
  // var gamObj = {  
  // "name": "QuickSmith GAM",
  // "Z0": 50.0, // characteristic impedance
  // "gamData" : {
  //               "label": "Data Plot",
  //               "color" : "#000000",
  //               "dataX"  : [],
  //               "dataM" : [],
  //               "dataQ" : []
  //              }
  // }
  //   gamObj.Z0 = smithObj.Z0;
    // var start = parseFloat(schObj.SS);
    // var stop = parseFloat(schObj.ST);
    // var step = parseFloat(schObj.SST);
    // var points = Math.abs((stop-start)/step)+1;
    // var i; var thisStep;
    // var points = Math.abs((stop-start)/step)+1; // eg: start=1, stop=100, step=1; number of points = 99+1=100 0-99 values from 1, 2, 3, .. 100
    // for ( i=0; i < points; i++) {
    //     thisStep = step*i;
    //     gamObj.gamData.dataX=Number(math.add(start,thisStep)).toFixed(4); 
    // } 
    // gamObj.gamData.dataM = smithObj.sweepDatasets[0].dataM;
    // gamObj.gamData.dataQ = smithObj.sweepDatasets[0].dataQ;
    // var start = parseFloat(schObj.SS);
    // var step = parseFloat(schObj.SST);
    // var points = smithObj.sweepDatasets[0].dataM.length; // if a sweep was performed then we use its length to store the length data, if not it is zero
    // console.log(" Number of Points= "+points);
    // for ( i=0; i < points; i++) {
    //     thisStep = step*i;
    //     gamObj.gamData.dataX[i]=Number(math.add(start,thisStep)).toFixed(4); 
    // } 
    // for Safari compatibility
    saveJSONtoFile(astroObj, "astroView.json");
}


// document.getElementById('file').onchange = function(){
//   var file = this.files[0];
//   var reader = new FileReader();
//   reader.onload = function(progressEvent){    
//     var fileContentArray = this.result.split(/\r\n|\n/);
//     for(var line = 0; line < lines.length-1; line++){
//       console.log(line + " --> "+ lines[line]);
//     }
//   };
//   reader.readAsText(file);
// };

function handleFileImport(e) {
    var file = e.target.files[0];
    //var files = evt.target.files; // FileList object
    //console.log(file);
    if (!file) {
        return;
    }
    // else if (!file.type.match('/text.*/')) 
    // {
	//   alert(file.name + " is not a valid text file");
    // } 
    else if(file) 
    {
        var reader = new FileReader();
        reader.onload = function(e)
             {
                var contents = reader.result;
                clear_all();
                // alert( "Got the file. " 
                //         +"name: " + file.name + "\n "
                //         +"type: " + file.type + "\n "
                //         +"size: " + file.size + " bytes\n"
                //         + "starts with: " + contents.substr(9, 14)
                //     );
                if(file.type != "text/plain" || file.size >= 65536)
                {
                  alert (" File not a text file or it is > 64K bytes");
                  return;
                }
                var lines = contents.split(/\r\n|\n/);
                for(var line = 0; line < lines.length-1; line++){
                console.log(line + " --> "+ lines[line]);
                }
                // the PL5.0 export file is tab delimeted
                var firstline = lines[0];
                var lastline = lines[lines.length-2];
                console.log("Number of Lines: " + " --> "+ lines.length);
                console.log("firstline" + " --> "+ firstline);
                console.log("lastline" + " --> "+ lastline);
                let result = [];
                let s = lastline.trim().split(/[\t]/);
                result.push({
                  First_last_name : s[0],
                  Gender : s[1],
                  Ankavalue : s[2],
                  City : s[3],
                  State : s[4],
                  Country : s[5],
                  Birthdate : s[6],
                  Time : s[7],
                  Birthdate_time_Julian : s[8],
                  Timezone : s[9],
                  DST : s[10],
                  Longitude  : s[11],
                  Latitude : s[12],
                  Longitudes_Sun : s[13],
                  Moon : s[14],
                  Mars : s[15],
                  Mercury : s[16],
                  Jupiter : s[17],
                  Venus : s[18],
                  Saturn : s[19],
                  Rahu : s[20],
                  Ketu : s[21],
                  Dhuma : s[22],
                  Vyatipata : s[23],
                  Parivesha : s[24],
                  Indrachapa : s[25],
                  Upaketu : s[26],
                  Gulika : s[27],
                  Prana_Pada : s[28],
                  Uranus : s[29],
                  Neptune : s[30],
                  Pluto : s[31],
                  Ascendant : s[32]
                  });     
                  
                var str = JSON.stringify(result, null, 4); // (Optional) beautiful indented output.
                console.log("result= " + str); // Logs output to dev tools console.
                var str = JSON.stringify(inputObj, null, 4); // (Optional) beautiful indented output.
                console.log("inputObj Before= " + str); // Logs output to dev tools console.
                //console.log("result.First_last_name " + result[0].First_last_name); // Logs output to dev tools console.
                //now update inputObj and the input form now
                inputObj.name = result[0].First_last_name;
                inputObj.city = result[0].City;
                inputObj.state = result[0].State;
                inputObj.country = result[0].Country;
                inputObj.date = result[0].Birthdate;
                inputObj.time = result[0].Time;
                inputObj.latitude = result[0].Latitude;
                inputObj.longitude = result[0].Longitude;
                inputObj.graha["ascendant"] = result[0].Ascendant;
                inputObj.graha["sun"] = result[0].Longitudes_Sun;
                inputObj.graha["moon"] = result[0].Moon;
                inputObj.graha["mercury"] = result[0].Mercury;
                inputObj.graha["venus"] = result[0].Venus;
                inputObj.graha["mars"] = result[0].Mars;
                inputObj.graha["jupiter"] = result[0].Jupiter;
                inputObj.graha["saturn"] = result[0].Saturn;
                inputObj.graha["rahu"] = result[0].Rahu;
                inputObj.graha["ketu"] = result[0].Ketu;
                updateUI();
                var str = JSON.stringify(inputObj, null, 4); // (Optional) beautiful indented output.
                console.log("inputObj After= " + str); // Logs output to dev tools console.               
            }
        reader.readAsText(file); 
        $("#file-input1").val(null); // this clears the file read 
   }
   else
   {
        alert("Failed to load file");
   }

}

function clear_all(){
  //astroObj = defaultObj;
  //var str = JSON.stringify(defaultObj, null, 4); // (Optional) beautiful indented output.
  //console.log("inputObj on clear= " + str); // Logs output to dev tools console.
  
  inputObj.name ="";
  inputObj.city = "";
  inputObj.state = "";
  inputObj.country = "";
  inputObj.date = "";
  inputObj.time = "";
  inputObj.latitude = "";
  inputObj.longitude = "";
  inputObj.graha["ascendant"] = "";
  inputObj.graha["sun"] = "";
  inputObj.graha["moon"] = "";
  inputObj.graha["mercury"] = "";
  inputObj.graha["venus"] = "";
  inputObj.graha["mars"] = "";
  inputObj.graha["jupiter"] = "";
  inputObj.graha["saturn"] = "";
  inputObj.graha["rahu"] = "";
  inputObj.graha["ketu"] = "";
  for (let graha in outputObj) {
    // house = outputObj[graha].house;
    // updateGraha(graha);
    outputObj[graha].is_ownsign =false;
    outputObj[graha].is_retrograde =false;
    outputObj[graha].is_combust =false;
    outputObj[graha].is_exhalted =false;
    outputObj[graha].is_debilitated =false;
    outputObj[graha].is_digbala =false;
    outputObj[graha].is_enemysign =false;
    outputObj[graha].is_friendsign =false;
    outputObj[graha].is_neutralsign =false;
    //console.log("Graha = " + graha);
  }

}

function clear_import_click() {
  clear_all();
 // updateOutput(astroObj.ctx);
  updateUI(); 
}



function load_click() {
   document.getElementById('file-input').click();
}

function Zcalsweep(){ // this function simply calls Zcalsweep with the same arguments, and also updates the output results to the textbox
}

// here target id is the id of the component
var start = function (e) {
   }

var enter = function (e) {
    }

var over = function (e) {
}

var drop = function (e) {   
 }

var end = function(e) {
}

function showComponentdialog(dropElementType, img, mySrcElement, targetIdNum, context) {
}

function componentValidate() {
}

function reply_click(clicked_id, value) {
}

function step_change(id1) {
}
    
function step_change1(id1) {
 }
//  $('input[name="spin1"]').taphold(function (e) {
//                step_change1($(e.target).attr("id"))  },
//                1000);

// $('input[name="spin2"]').on("keypress", function (e) {
// });

// $('input[name="spin2"]').TouchSpin({
// });


// $('input[name="spin2"]').qtip({
// });

// uses the schObj object to update the ToolTip content
function updateToolTip() {
}

function spin_change(id1) {
}

function options_click() {
}

function OnOptionSweepElemet_click()  // depending upon the tune element detemine where it needs a tune option or not ( incase of a two element)
{
}

    // this function shows hides the file dialog depending on Multi/Single termination
function yesnoFileDialog() {
    }

function optionValidate() {
}

var updateValue_disable = false;
    $(function () {  
    });

function playSound() {
        var sound = document.getElementById("audio");
        sound.play();
}

function showTxEquivalents() {
}
function showMarkerDialog() {
}
function generateSweep() {
}
function clearSweep() {
}
function IL_open_click(){
}
function AMP_open_click(){
}



