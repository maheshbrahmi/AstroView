
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
//console.log(signs.indexOf('taurus'));
//console.log(signs.indexOf('cancer', 1)); // start from index 1
const signObj = {  // RASI
"signs": 
        [
            {"position": "1",       "name": "aries",      "ruledby": "mars",    "exaltation": "sun",       "debilitation": "saturn"   },
            {"position": "2",       "name": "taurus",     "ruledby": "venus",   "exaltation": "moon",      "debilitation": "rahu/ketu"},
            {"position": "3",       "name": "gemini",     "ruledby": "mercury", "exaltation": "none",      "debilitation": "none"     },
            {"position": "4",       "name": "cancer",     "ruledby": "moon",    "exaltation": "jupiter",   "debilitation": "mars"     },
            {"position": "5",       "name": "leo",        "ruledby": "sun",     "exaltation": "none",      "debilitation": "none"     },
            {"position": "6",       "name": "virgo",      "ruledby": "mercury", "exaltation": "mercury",   "debilitation": "venus"    },
            {"position": "7",       "name": "libra",      "ruledby": "venus",   "exaltation": "saturn",    "debilitation": "sun"      },
            {"position": "8",       "name": "scorpio",    "ruledby": "mars",    "exaltation": "rahu/ketu", "debilitation": "moon"     },
            {"position": "9",       "name": "sagittarius","ruledby": "jupiter", "exaltation": "none",      "debilitation": "none"     },
            {"position": "10",      "name": "capricon",   "ruledby": "saturn",  "exaltation": "mars",      "debilitation": "jupiter"  },
            {"position": "11",      "name": "aquarius",   "ruledby": "saturn",  "exaltation": "none",      "debilitation": "none"     },
            {"position": "12",      "name": "pisces",     "ruledby": "jupiter", "exaltation": "venus",     "debilitation": "mercury"  }
        ]

}
// schObj is used to save schematic - for load file to work it needs to be less the 1024 bytes and the first key should be "ver"
//Input
var inputObj = {
  "ver":1.0,  //if you change this then change the file load verify function- this is used as a check - need a better way to do this
  "type":"astroFile", // to check if the right file is imported
  "name": "test",  //First and Last name
  "city": "Mumbai", // 
  "state": "Maharashtra",  // 
  "country": "India",   // 
  "birthdate": "11/05/1966", // 
  "time": "13:40:00",  // 
  "longitude": 72.8166667, //
  "latitude": 18.9666667,  //  
  "ascendant": 298.7014879,
  "sun": 199.07001545248,
  "moon": 101.505673940617,
  "mercury": 219.718216555607,
  "venus": 198.142409860512,
  "mars": 140.559019472223,
  "jupiter": 100.669422850587,
  "saturn": 329.920879549186,
  "rahu": 22.800941440735,
  "ketu": 202.800941440735,
};

var outputObj = {
  "planet_positions": [
      {
          "name": "ascendant",
          "longitude": 298.7014879,
          "is_retrograde": false,
          "is_combust": false,
          "is_ownsign":false,
          "is_exhalted":false,
          "is_debilitated":false,
          "aspect":"none",
          "position": 10,
          "house": 1,
          "degree": 28.7014879,
          "min":42,
          "sec":5,
          "sign": "capricon"
      },
      {
          "name": "sun",
          "longitude": 199.07001545248,
          "is_retrograde": false,
          "is_combust": false,
          "is_ownsign":false,
          "is_exhalted":false,
          "is_debilitated":true,
          "aspect":"1,7",
          "position": 7,
          "house": 10,
          "degree": 19.07001545,
          "min":4,
          "sec":12,
          "sign":"libra"
      },
      {
          "name": "moon",
          "longitude": 101.505673940617,
          "is_retrograde": false,
          "is_combust": false,
          "is_ownsign":false,
          "is_exhalted":false,
          "is_debilitated":false,
          "aspect":"1,7",
          "position": 4,
          "house": 7,
          "degree": 11.50567394,
          "min":30,
          "sec":20,
          "sign":"cancer"
      },
      {
          "name": "mars",
          "longitude": 140.559019472223,
          "is_retrograde": false,
          "is_combust": false,
          "is_ownsign":false,
          "is_exhalted":false,
          "is_debilitated":false,
          "aspect":"1,7,4,8",
          "position": 5,
          "house": 8,
          "degree": 20.55901947,
          "min":33,
          "sec":32,
          "sign":"leo"
      },
      {
          "name": "mercury",
          "longitude": 219.718216555607,
          "is_retrograde": false,
          "is_combust": false,
          "is_exhalted":false,
          "is_ownsign":false,
          "is_exhalted":false,
          "is_debilitated":false,
          "aspect":"1,7",
          "position": 8,
          "house": 11,
          "degree": 9.718216556,
          "min":43,
          "sec":5,
          "sign": "scorpio"
      },
      {
          "name": "jupiter",
          "longitude": 100.669422850587,
          "is_retrograde": false,
          "is_combust": false,
          "is_exhalted":false,
          "is_ownsign":false,
          "is_exhalted":false,
          "is_debilitated":false,
          "aspect":"1,7,5,9",
          "position": 4,
          "house": 7,
          "degree": 10.66942285,
          "min":40,
          "sec":9,
          "sign":"cancer"
      },
      {
          "name": "venus",
          "longitude": 198.142409860512,
          "is_retrograde": true,
          "is_combust": false,
          "is_exhalted":false,
          "is_ownsign":true,
          "is_exhalted":false,
          "is_debilitated":false,
          "aspect":"1,7",
          "position": 7,
          "house": 10,
          "degree":18.14240986,
          "min":8,
          "sec":32,
          "sign":"libra"
      },
      {
          "name": "saturn",
          "longitude": 329.920879549186,
          "is_retrograde": true,
          "is_combust": false,
          "is_exhalted":false,
          "is_ownsign":false,
          "is_exhalted":false,
          "is_debilitated":false,
          "aspect":"1,7,3,10",
          "position": 11,
          "house": 2,
          "degree": 29.92087955,
          "min":55,
          "sec":15,
          "sign":"aquarius"
      },
      {
          "name": "rahu",
          "longitude": 22.800941440735,
          "is_retrograde": false,
          "is_combust": false,
          "is_exhalted":false,
          "is_ownsign":false,
          "is_exhalted":false,
          "is_debilitated":false,
          "aspect":"1,7",
          "position": 1,
          "house": 4,
          "degree": 22.80094144,
          "min":48,
          "sec":3,
          "sign":"aries",
      },
      {
          "name": "ketu",
          "longitude": 202.800941440735,
          "is_retrograde": false,
          "is_combust": false,
          "is_exhalted":false,
          "is_ownsign":false,
          "is_exhalted":false,
          "is_debilitated":false,
          "aspect":"1,7",
          "position": 7,
          "house": 10,
          "degree": 22.80094144,
          "min":48,
          "sec":3,
          "sign":"libra"
      }
  ],
  calculate: updateChart
}

var smithObj = {
              "ctx" : null,
              "hitCtx" : null,
              "title": '',
              resetAll: function() { resetAll (this);}, // Resets all properties to its default values
              redrawSmith: redrawSmith, // repaints smithChart with the current values
              colorsHash: {},
              houses : [{
                num: '1', signnum: '10', color: 'rgb(255,0,0)', fillcolor: 'rgb(255,0,0)', colorKey: 'rgb(0,0,0)'
                }, {
                num: '2', signnum: '113',  color: 'rgb(0,255,0)', fillcolor: 'rgb(0,255,0)', colorKey: 'rgb(0,0,0)'
                }, {
                num: '3', signnum: '123', color: 'rgb(0,0,255)', fillcolor: 'rgb(0,0,255)', colorKey: 'rgb(0,0,0)'
                }, {
                num: '4', signnum: '13', color: 'rgb(255,255,0)', fillcolor: 'rgb(255,255,0)', colorKey: 'rgb(0,0,0)'
                }, {
                num: '5', signnum: '23', color: 'rgb(0,255,255)', fillcolor: 'rgb(0,255,255)', colorKey: 'rgb(0,0,0)'
                }, {
                num: '6', signnum: '33', color: 'rgb(255,255,255)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)'
                }, {
                num: '7', signnum: '43', color: 'rgb(0,0,0)', fillcolor: 'rgb(0,0,0)', colorKey: 'rgb(0,0,0)'
                }, {
                num: '8', signnum: '53', color: 'rgb(255,0,255)', fillcolor: 'rgb(255,0,255)', colorKey: 'rgb(0,0,0)'
                }, {
                num: '9', signnum: '63', color: 'rgb(0,128,128)', fillcolor: 'rgb(0,128,128)', colorKey: 'rgb(0,0,0)'
                }, {
                num: '10', signnum: '73', color: 'rgb(128,128,128)', fillcolor: 'rgb(128,128,128)', colorKey: 'rgb(0,0,0)'
                }, {
                num: '11', signnum: '83', color: 'rgb(128,0,0)', fillcolor: 'rgb(128,0,0)', colorKey: 'rgb(0,0,0)'
                }, {
                num: '12', signnum: '93', color: 'rgb(128,0,128)', fillcolor: 'rgb(128,0,128)', colorKey: 'rgb(0,0,0)'
                }
                ],
               drawSmith: function() { drawSmith(this);},
               test: function() { test(this);},
               updateSigns: function() { updateSigns (this);}, // Resets all properties to its default values
               input:inputObj,
               output:outputObj
          };
var matchTipShown = false; 
smithObj.ctx = document.getElementById("smithMain").getContext('2d');
smithObj.hitCtx = document.getElementById("smithMainHit").getContext('2d');

smithObj.ctx.canvas.addEventListener("mousemove", onMouseMove, false);
smithObj.ctx.canvas.addEventListener("dblclick", onMouseClick, false);
//window.addEventListener('load', smithObj.redrawSmith, false);  //  not necessary duplicates $('document').ready(function () at the top
window.addEventListener('resize',smithObj.redrawSmith, false); // resize,clear and redraw
document.getElementById('file-input1').addEventListener('change', handleFileImport, false);//file Import
document.getElementById('file-input').addEventListener('change', handleFileOpen, false);

function updateSigns(me){
  // get asendent and increment by 1 if >12 then reset it to 0
  var current_pos =  me.output.planet_positions[0].position ;
  me.houses[0].signnum = current_pos;
  for (let i = 1; i < 12; i++) {
    current_pos = current_pos + 1
    if (current_pos >= 13 ) current_pos = 1;
    me.houses[i].signnum = current_pos;
  }

}

function updateChart(){
}

function test(context){
  // context.vswrCircle = '3.0';
  // context.drawVSWRCircles;
  // console.log(context.Z0);
 }

 $('document').ready(function () {
        //alert (" ready 873");
        console.log("init")
        window.name = "parent";
        //chart.currentDevicePixelRatio = window.devicePixelRatio || 1 ||  window.window.devicePixelRatio;
    $('input[type=text]').bind('copy paste', function (e) {
        e.preventDefault();
    });   // this prenvents the copy/paste menu popping up in IOS when you touch the step box
    resize(smithObj.ctx.canvas)// Smith chart drawn here
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
    // called by redrawSmith function
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
      smithObj.ctx.canvas.width =chart.width= width;
      smithObj.ctx.canvas.height =chart.height = height;
      smithObj.ctx.canvas.style.width = width+'px';
      smithObj.ctx.canvas.style.height = height+'px';
      smithObj.hitCtx.canvas.width =chart.width= width;
      smithObj.hitCtx.canvas.height =chart.height = height;
      smithObj.hitCtx.canvas.style.width = width+'px';
      smithObj.hitCtx.canvas.style.height = height+'px';
      retinaScale(chart, smithObj);  
      resize_done = true;
  }
  
  function redrawSmith () {
      console.log("Redrawing smith1 Begin");
      var ctx = smithObj.ctx;
      if(ctx ==null) return;
     
      resize(ctx.canvas)
      console.log("Redrawing smith2 End");
      smithObj.drawSmith(); // clears canvas too
  }

function drawSmith(me) {
  if(resize_done == false) return;
  //alert (" drawSmith 16");
  var ctx = me.ctx;
  var hitCtx = me.hitCtx;
 
  ctx.clearRect(0,0,chart.width,chart.height);
  var  r =  AXIS_RANGE;
 //var  r =  chart.height;
  var  wby2 = chart.width/2;
  var  hby2 = chart.height/2;
  colorsHash = {};
  const propOwn = Object.keys(me.houses);
  console.log("House Object length= " + propOwn.length); // 1

  for (let i = 0; i < propOwn.length; ++i) {
    //console.log(houses[i].color);
    const colorKey = getRandomColor();
      if (!me.colorsHash[colorKey]) {
        me.houses[i].colorKey = colorKey;
          me.colorsHash[colorKey] = me.houses[i].colorKey;
    }
    console.log(me.houses[i].colorKey);
    console.log(me.colorsHash[colorKey]);
  } // end for

  str = JSON.stringify(me.colorsHash, null, 4); // (Optional) beautiful indented output.
  //console.log("colorHash Object= " + str); // Logs output to dev tools console.
  str = JSON.stringify(me.houses, null, 4); // (Optional) beautiful indented output.
  //console.log("houses Object= " + str); // Logs output to dev tools console.

  drawCircle(ctx,0,0,r,"WhiteSmoke");  //constant resistance circles Rn = 0; small padding provide for the outer circle to avoid flatning.
  drawRectangle(ctx,0,0,r,0,"black");
  drawLine(ctx,1,135,1,135+180,"black");
  drawLine(ctx,1,45,1,180+45,"black");
  drawLine(ctx,1/Math.sqrt(2),90,1/Math.sqrt(2),180,"black");
  drawLine(ctx,1/Math.sqrt(2),180,1/Math.sqrt(2),270,"black");
  drawLine(ctx,1/Math.sqrt(2),270,1/Math.sqrt(2),360,"black");
  drawLine(ctx,1/Math.sqrt(2),0,1/Math.sqrt(2),90,"black");

  ctx.beginPath();
  // House1
  var rarray = [0, 0.5, 1/Math.SQRT2, 0.5,0];
  var qarray = [0, 135, 90, 45,0];
  drawPath(ctx, [...rarray],[...qarray],me.houses[0].color,me.houses[0].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[0].colorKey,me.houses[0].colorKey); // line color, fill color
  // House2
  rarray = [0.5, 1, 1/Math.SQRT2, 0.5];
  qarray = [135, 135, 90, 135];
  drawPath(ctx, [...rarray],[...qarray],me.houses[1].color,me.houses[1].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[1].colorKey,me.houses[1].colorKey); // line color, fill color
  // House3
  rarray = [0.5, 1/Math.SQRT2, 1, 0.5];
  qarray = [135, 180, 135, 135];
  drawPath(ctx, [...rarray],[...qarray],me.houses[2].color,me.houses[2].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[2].colorKey,me.houses[2].colorKey); // line color, fill color
  // House4
  rarray = [0, 0.5, 1/Math.SQRT2, 0.5, 0];
  qarray = [0, 135, 180, 225,0];
  drawPath(ctx, [...rarray],[...qarray],me.houses[3].color,me.houses[3].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[3].colorKey,me.houses[3].colorKey); // line color, fill color
  // House5
  rarray = [0.5, 1/Math.SQRT2, 1, 0.5];
  qarray = [225, 180, 225, 225];
  drawPath(ctx, [...rarray],[...qarray],me.houses[4].color,me.houses[4].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[4].colorKey,me.houses[4].colorKey); // line color, fill color
  // House6
  rarray = [0.5, 1, 1/Math.SQRT2, 0.5];
  qarray = [225, 225, 270, 225];
  drawPath(ctx, [...rarray],[...qarray],me.houses[5].color,me.houses[5].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[5].colorKey,me.houses[5].colorKey); // line color, fill color  
  // House7
  rarray = [0, 0.5, 1/Math.SQRT2, 0.5, 0];
  qarray = [0, 225, 270, 315,0];
  drawPath(ctx, [...rarray],[...qarray],me.houses[6].color,me.houses[6].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[6].colorKey,me.houses[6].colorKey); // line color, fill color
  //House8
  rarray = [0.5, 1, 1/Math.SQRT2, 0.5];
  qarray = [315, 315, 270, 315];
  drawPath(ctx, [...rarray],[...qarray],me.houses[7].color,me.houses[7].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[7].colorKey,me.houses[7].colorKey); // line color, fill color
  // House9
  rarray = [0.5, 1/Math.SQRT2, 1, 0.5];
  qarray = [315, 360, 315, 315];
  drawPath(ctx, [...rarray],[...qarray],me.houses[8].color,me.houses[8].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[8].colorKey,me.houses[8].colorKey); // line color, fill color
  // House10
  rarray = [0, 0.5, 1/Math.SQRT2, 0.5, 0];
  qarray = [0, 315, 0, 45,0];
  drawPath(ctx, [...rarray],[...qarray],me.houses[9].color,me.houses[9].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[9].colorKey,me.houses[9].colorKey); // line color, fill color  
  // House11
  rarray = [0.5, 1, 1/Math.SQRT2, 0.5];
  qarray = [45, 45, 360, 45];
  drawPath(ctx, [...rarray],[...qarray],me.houses[10].color,me.houses[10].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[10].colorKey,me.houses[10].colorKey); // line color, fill color
  // House12
  rarray = [0, 1, 1/Math.SQRT2, 0.5];
  qarray = [45, 45, 90, 45];
  drawPath(ctx, [...rarray],[...qarray],me.houses[11].color,me.houses[11].fillcolor); // line color, fill color
  drawPath(hitCtx, [...rarray],[...qarray],me.houses[11].colorKey,me.houses[11].colorKey); // line color, fill color

  // //drawSprite(ctx,0,0);
  //drawFilledCircle(ctx,0,0)
  me.updateSigns(me);
  str = JSON.stringify(me, null, 4); // (Optional) beautiful indented output.
  console.log("Smith Object= " + str); // Logs output to dev tools console.
  placeText(ctx,0,50,me.houses[0].signnum ,"center","middle");
  placeText(ctx,(0.5*Math.cos(Math.PI*135/180)*AXIS_RANGE)+0,(0.5*Math.sin(Math.PI*135/180)*AXIS_RANGE)+50, me.houses[1].signnum,"center","middle");
  placeText(ctx,(0.5*Math.cos(Math.PI*135/180)*AXIS_RANGE)-50,(0.5*Math.sin(Math.PI*135/180)*AXIS_RANGE)+0, me.houses[2].signnum,"center","middle");
  placeText(ctx,-50,0,me.houses[3].signnum,"center","middle");
  placeText(ctx,(0.5*Math.cos(Math.PI*225/180)*AXIS_RANGE)-50,(0.5*Math.sin(Math.PI*225/180)*AXIS_RANGE)+0, me.houses[4].signnum,"center","middle");
  placeText(ctx,(0.5*Math.cos(Math.PI*225/180)*AXIS_RANGE)+0,(0.5*Math.sin(Math.PI*225/180)*AXIS_RANGE)-50, me.houses[5].signnum,"center","middle");
  placeText(ctx,0,-50,me.houses[6].signnum,"center","middle");
  placeText(ctx,(0.5*Math.cos(Math.PI*315/180)*AXIS_RANGE)+0,(0.5*Math.sin(Math.PI*315/180)*AXIS_RANGE)-50, me.houses[7].signnum,"center","middle");
  placeText(ctx,(0.5*Math.cos(Math.PI*315/180)*AXIS_RANGE)+50,(0.5*Math.sin(Math.PI*315/180)*AXIS_RANGE)+0, me.houses[8].signnum,"center","middle");
  placeText(ctx,50,0,me.houses[9].signnum,"center","middle");
  placeText(ctx,(0.5*Math.cos(Math.PI*45/180)*AXIS_RANGE)+50,(0.5*Math.sin(Math.PI*45/180)*AXIS_RANGE)+0, me.houses[10].signnum,"center","middle");
  placeText(ctx,(0.5*Math.cos(Math.PI*45/180)*AXIS_RANGE)+0,(0.5*Math.sin(Math.PI*45/180)*AXIS_RANGE)+50, me.houses[11].signnum,"center","middle");
  DrawImage(ctx,0,0,0.02*AXIS_RANGE,"earth");
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
  console.log(" x= " + scaled.X + " y = " + scaled.Y + " r =  " + scaled.R);
  console.log(" img.width= " + img.width + "  img.height = " +  img.height);
  console.log(" chart.width= " + chart.width+ "  chart.height = " +  chart.width);
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
  console.log(" x= " + x + " y = " + y + " r =  " + r);
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  var scaled = scale(x,y,r);
  var a = AXIS_RANGE / (2*Math.sqrt(2));

  ctx.translate(-scaled.R/Math.sqrt(2),-scaled.R/Math.sqrt(2))
  ctx.rotate(rotate*Math.PI/180);
  ctx.rect(scaled.X,scaled.Y,2*scaled.R/Math.sqrt(2),2*scaled.R/Math.sqrt(2));
  
  console.log(" Sx= " + scaled.X + " Sy = " + scaled.Y + " Sr =  " + scaled.R + " A =  " + a);
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
// Return TRUE if the given coordinates are inside of the Smith Chart
//---------------------------------------------------------------------------
function InSmith(x,y)
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

function descale(X,Y) {
  var  wby2 = chart.width/2;
  var  hby2 = chart.height/2;
  var y = Y - Math.round(hby2);
  y=-y;
  y= Math.round(y/parseFloat(hby2/AXIS_RANGE));
  var x = X - Math.round(wby2);
  x= Math.round(x/parseFloat(wby2/AXIS_RANGE));
  return {
        x: x,
        y: y
    };
}


function drawCircle(ctx,x,y,r,color) {
  console.log(" x= " + x + " y = " + y + " r =  " + r);
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
    console.log(" x= " + x + " y = " + y );
	  ctx.beginPath();
	  var ratio = fontSize / fontBase;   // calc ratio
    var size = chart.width * ratio;   // get font size based on current width 
  	ctx.font = (size|0) + 'px System';
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
        console.log("CH ="+ ch);
        console.log("h ="+ h);
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
  //    retinaScale(chart, smithObject); 
	function retinaScale(chart,smithObject) {
    //var pixelRatio = chart.currentDevicePixelRatio = chart.devicePixelRatio || window.devicePixelRatio || 1;
     var pixelRatio = chart.currentDevicePixelRatio = window.devicePixelRatio ;
    console.log (" pixelRatio = "+pixelRatio );
		if (pixelRatio === 1) {
			return;
		}
    
    
		var height = chart.height;
		var width = chart.width;

		smithObject.ctx.canvas.height = height * pixelRatio;
		smithObject.ctx.canvas.width = width * pixelRatio;
		smithObject.ctx.scale(pixelRatio, pixelRatio);
	  smithObject.ctx.canvas.style.height = height + 'px';
		smithObject.ctx.canvas.style.width = width + 'px';

    smithObject.hitCtx.canvas.height = height * pixelRatio;
		smithObject.hitCtx.canvas.width = width * pixelRatio;
		smithObject.hitCtx.scale(pixelRatio, pixelRatio);
	  smithObject.hitCtx.canvas.style.height = height + 'px';
		smithObject.hitCtx.canvas.style.width = width + 'px';
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

function onMouseMove(evt) {
   // var e = evt.originalEvent || evt;
     //var mouseX = e.clientX-smithObj.ctx.canvas.offsetLeft;  // this works
     //var mouseY = e.clientY-smithObj.ctx.canvas.offsetTop ;  // this is off by about 80px in this version but works with the stand alone component ?
     // var mouseX = e.layerX; // this seems like working // does not work well with firefox
     // var mouseY = e.layerY; // layerX returns the horizontal coordinate of the event relative to the current layer.
    var m = getMousePosition(evt,chart);
    var mouseX = m.x;
    var mouseY  = m.y;
    var house = getHouse(mouseX,mouseY);
    //console.log( "mouseX =" + mouseX + " mouseY =" + mouseY  );
    var descaled = descale(mouseX,mouseY);
    var x= descaled.x;
    var y=descaled.y;
    var inSmith = InSmith(x,y)
    var signnum ;
    var degree;
    var longitude;
    
    if (inSmith) {
        var r1 = math.sqrt(((x*x)+(y*y))); // convert to polar form
        var q;
        if(r1==0) q=0 ; else q= 180*math.asin(y/r1)/Math.PI;
        if(x < 0 && y >=0) q= 180-q; if(x<0 && y<0) q= -180-q;  // Adjust for the second and third quadrant
        var m= r1/AXIS_RANGE; 
        if(q<0) q = q+ 360; // make it show 360 degree
        //document.getElementById("Z1").value ="Z:" +Number(ZR).toFixed(2)+getSign(ZI)+Number(Math.abs(ZI)).toFixed(2)+"i";
        document.getElementById("Z1").value ="H:" + house+ ' \u2220' +Number(m).toFixed(2) +' ' + Number(q).toFixed(2)+'\u00B0'+ "  X:" +Number(x).toFixed(0)+' Y:'+Number(y).toFixed(0) ;
        switch (house) {
          case '1':
            signnum = smithObj.houses[house-1].signnum;
            degree = Number((q-45)/3).toFixed(2);
            longitude = (q-45)/3 + 270.00;
            document.getElementById("L1").value = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" + Number(longitude).toFixed(2)+'\u00B0';
            break;
          case '2':
            signnum = smithObj.houses[house-1].signnum;
            degree = Number((q-0)/1).toFixed(2);
            longitude = (q-0)/1 + 270.00;
            document.getElementById("L1").value = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" + Number(longitude).toFixed(2)+'\u00B0';
            break;  
          case '3':
            document.getElementById("L1").value ="LONG:" + house ;
            break;
          case '4':
            document.getElementById("L1").value ="LONG:" + house ;
            break;
          case '5':
            document.getElementById("L1").value ="LONG:" + house ;
            break;
          case '6':
            document.getElementById("L1").value ="LONG:" + house ;
            break;  
          case '7':
            document.getElementById("L1").value ="LONG:" + house ;
            break;
          case '8':
            document.getElementById("L1").value ="LONG:" + house ;
            break;
          case '9':
            document.getElementById("L1").value ="LONG:" + house ;
            break;
          case '10':
            document.getElementById("L1").value ="LONG:" + house ;
            break;  
          case '11':
            document.getElementById("L1").value ="LONG:" + house ;
            break;
          case '12':
            document.getElementById("L1").value ="LONG:" + house ;
            break;
          default:
            console.log(`Sorry, we are out of ${house}.`);
        }
      }
    else  {
      document.getElementById("Z1").value ="Z:";
      document.getElementById("L1").value ="LONG:";
    }
    
    if( isMobile ) return;    
}

function getHouse(x,y){
    const pixel = smithObj.hitCtx.getImageData(x, y, 1, 1).data;
    const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
    //console.log("color = " + color);
    const shape = smithObj.colorsHash[color];
    //console.log("shape = " + shape);
    var retvalue = 0;
    smithObj.houses.forEach(house => {
        if (shape === house.colorKey) {
            //console.log('click on house: ' + house.num);
            retvalue = house.num;
        }
    });
    return retvalue;
}


function onMouseClick(e) {
    if( isMobile ) return;
    // var mouseX = e.layerX; // this seems like working
    // var mouseY = e.layerY; // layerX returns the horizontal coordinate of the event relative to the current layer.
    var m = getMousePosition(e,chart);
    var mouseX = m.x;
    var mouseY  = m.y;
    var house = getHouse(mouseX,mouseY);
    console.log('house number: ' + house);
    var msg = "House : " + house + "\n" ; 
    ShowMessage_sm("AstroView",msg);

    // var descaled = descale(mouseX,mouseY);
    // var x= descaled.x;
    // var y=descaled.y;
    // var r1 = math.sqrt(((x*x)+(y*y))); // convert to polar form
    // var q;
    // if(r1==0) q=0 ; else q= 180*math.asin(y/r1)/Math.PI;
	// if(x < 0 && y >=0) q= 180-q; if(x<0 && y<0) q= -180-q;  // Adjust for the second and third quadrant
    // var m = r1/AXIS_RANGE; 
    // var str1;
    // if (InSmith(x,y) == true) {
    //    // var msg =  x + " ," + y +"i";
    //     if (m == 0)  m = 1e-16;
    //     if (m == 1)  m = 0.9999999999;
    //     var swr = (1 + m) / (1 - m);
    //     var S11 = -20 * (Math.log(m) / Math.log(10));
    //     if (S11 >= 720)  str1 = " > "; else str1 = "";
    //     var msg = "Gamma [Mag]: " + Number(m).toFixed(2) + "\n" + "Gamma [Ang]: " + Number(q).toFixed(2) + '&#176' + '\n' + "VSWR: " + Number(swr).toFixed(2) + '\n' + "Return Loss: " + str1 + Number(S11).toFixed(2) + " dB" ; 
    //     ShowMessage_sm("AstroView",msg);
    //     //console.log("x= " + x + "y= " + y );
    //     }
    }


function drawSweep(me) {
    }
    
function dataPlot(me) {
    }
    
function drawAdmitanceCircles(me) {
    }
    
function drawVSWRCircles(me) {   
    }
    
function drawQCircles(me){ // Constant Q cicles
    }
    
function drawGainCircles(me) {
    }
    
$("#sweepColor").change(function(){
});

function step_change1(id1) {
}

function spin_change1(id1) {
    }

$('input[name="spin1"]').TouchSpin({

  });

function set_click() {
}

function updateUI() {
    smithObj.drawSmith();
}

function get_click(){
         window.location.reload();
}

function get() {
    // Get from local storage
    var item = localStorage.getItem('schData');
    if( item !== null)
    {
        var schObj1 =JSON.parse(item);
        //console.log(schObj);
        copy_schObj(schObj1);
        //console.log("After copying");
        //console.log(schObj);
    }
    else { console.log(" schData local storage not set");  };  

    item = localStorage.getItem('smithData');
    if( item !== null)
    {
        var smithObj1 =JSON.parse(item);
        copy_smithObj(smithObj1);
    }
    else { console.log(" smithData local storage not set");  }; 
    updateUI();
    
}

function new_click() {
    localStorage.removeItem('schData');
    delete window.localStorage["schData"];
    localStorage.removeItem('smithData');
    localStorage.setItem("transferFlag", 'false');
    delete window.localStorage["smithData"];
    window.location.reload();
}

function save_click() {
    saveJSONtoFile(schObj, "out.sch");
}

function saveCanvas_click(){
    smithObj.ctx.canvas.toBlob(function(blob) {
        saveAs(blob, "AstroView.png");
    });
}

// export the last sweep data as a gam file 
function export_click() {
}


function handleFileImport(e) {
}

function clear_import_click() {
// smithObj.data = false; 

}

// export the sweep data as a gam file 
function import_click() {
  // document.getElementById('file-input1').click();
}

function myfunc() {
    console.log("here");
}

function handleFileOpen(e) {
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
 $('input[name="spin1"]').taphold(function (e) {
               step_change1($(e.target).attr("id"))  },
               1000);

$('input[name="spin2"]').on("keypress", function (e) {
});

$('input[name="spin2"]').TouchSpin({
});


$('input[name="spin2"]').qtip({ 
});

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



