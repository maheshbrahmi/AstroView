//Nakshatra obj
var nakshatra_degree = 360.0/(13+(20/60));
var nakshatra_padha = 360.0/(13+(20/60))/4;
var nakshatra_90 = 10; //each padha is 10 degrees
// var nakshatraObj =   // RASI
//         [
//             {"position": "1",       "name": "aries",      "ruledby": "mars",    "exaltation": "sun",        "element": "fire",    "debilitation": "saturn",    "x": 0, "y": 0},
//             {"position": "2",       "name": "taurus",     "ruledby": "venus",   "exaltation": "moon",       "element": "earth",   "debilitation": "rahu/ketu", "x": 0, "y": 0},
//             {"position": "3",       "name": "gemini",     "ruledby": "mercury", "exaltation": "none",       "element": "air",     "debilitation": "none",      "x": 0, "y": 0},
//             {"position": "4",       "name": "cancer",     "ruledby": "moon",    "exaltation": "jupiter",    "element": "water",   "debilitation": "mars",      "x": 0, "y": 0},
//             {"position": "5",       "name": "leo",        "ruledby": "sun",     "exaltation": "none",       "element": "fire",    "debilitation": "none",      "x": 0, "y": 0},
//             {"position": "6",       "name": "virgo",      "ruledby": "mercury", "exaltation": "mercury",    "element": "earth",   "debilitation": "venus",     "x": 0, "y": 0},
//             {"position": "7",       "name": "libra",      "ruledby": "venus",   "exaltation": "saturn",     "element": "air",     "debilitation": "sun",       "x": 0, "y": 0},
//             {"position": "8",       "name": "scorpio",    "ruledby": "mars",    "exaltation": "rahu/ketu",  "element": "water",   "debilitation": "moon",      "x": 0, "y": 0},
//             {"position": "9",       "name": "sagittarius","ruledby": "jupiter", "exaltation": "none",       "element": "fire",    "debilitation": "none" ,     "x": 0, "y": 0},
//             {"position": "10",      "name": "capricorn",   "ruledby": "saturn", "exaltation": "mars",       "element": "earth",   "debilitation": "jupiter",   "x": 0, "y": 0},
//             {"position": "11",      "name": "aquarius",   "ruledby": "saturn",  "exaltation": "none",       "element": "air",     "debilitation": "none",      "x": 0, "y": 0},
//             {"position": "12",      "name": "pisces",     "ruledby": "jupiter", "exaltation": "venus",      "element": "water",   "debilitation": "mercury",   "x": 0, "y": 0}
//         ];
var nakshatraObj = {
    "ctx" : null,
    "hitCtx" : null,
    nakshatras : [{
        num: '1', name: 'Ashwini', startsign_name: "aries", startdegree: 0, startmins: 0,
        ruler: 'ketu', symbol: 'Horses Head', deity: 'Ashwini Kumar', nature: 'swift', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(255,0,0)', fillcolor: 'rgb(255,0,0)', colorKey: 'rgb(0,0,0)', 
        qualities: ''
        }, {
        num: '2', name: 'Bharani', startsign_name: "aries",  startdegree: 13, startmins: 20,
        ruler: 'venus', symbol: 'Yoni', deity: 'Yama',  nature: 'fierce', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0, rarray : [], qarray: [],
        color: 'rgb(255,0,0)', fillcolor: 'rgb(255,0,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '3', name: 'Kritika', startsign_name: "aries", startdegree: 26, startmins: 40,
        ruler: 'sun', symbol: 'Razor', deity: 'Agni',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(255,0,0)', fillcolor: 'rgb(255,0,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '4', name: 'Rohini', startsign_name: "taurus", startdegree: 10, startmins: 00,
        ruler: 'moon', symbol: 'Chariot', deity: 'Brahma',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '5', name: 'Mrigasira', startsign_name: "tarus", startdegree: 23, startmins: 20,  
        ruler: 'mars', symbol: 'Deer`s head', deity: 'Chandra',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '6', name: 'Aardra', startsign_name: "gemini", startdegree: 6, startmins: 40,
        ruler: 'rahu', symbol: 'Tear Drop', deity: 'Rudra',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '7', name: 'Punarvasu', startsign_name: "gemini", startdegree: 20, startmins: 00,
        ruler: 'jupiter', symbol: 'Quiver', deity: 'Aditi',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '8', name: 'Pushyami', startsign_name: "cancer", startdegree: 3, startmins: 20, 
        ruler: 'saturn',  symbol: 'Udder', deity: 'Brihaspati', nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '9', name: 'Ashlesha', startsign_name: "cancer",startdegree: 16, startmins: 40, 
        ruler: 'mercury',  deity: 'Nag', symbol: 'Serpent', nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '10', name: 'Magha', startsign_name: "leo", startdegree: 0, startmins: 00, 
        ruler: 'ketu', symbol: 'Throne', deity: 'Pitras',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '11', name: 'Purva Phalguni', startsign_name: "leo", startdegree: 13, startmins: 20, 
        ruler: 'venus', symbol: 'Hammock', deity: 'Bhaga',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '12', name: 'Uttra Phalguni', startsign_name: "leo", startdegree: 26, startmins: 40, 
        ruler: 'sun', symbol: 'Fig Tree', deity: 'Aryaman',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '13', name: 'Hasta',startsign_name: "virgo", startdegree: 10, startmins: 00, 
        ruler: 'moon', symbol: 'Hand', deity: 'Surya',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '14', name: 'Chitra',startsign_name: "virgo", startdegree: 23, startmins: 20, 
        ruler: 'mars', symbol: 'jewel', deity: 'Viswakarma',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '15', name: 'Swati', startsign_name: "libra", startdegree: 6, startmins: 40, 
        ruler: 'rahu', symbol: 'Coral', deity: 'Vaayu',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '16', name: 'Vishakaha', startsign_name: "libra", startdegree: 20, startmins: 00, 
        ruler: 'jupiter', symbol: 'Arch', deity: 'Indira',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '17', name: 'Anuradha', startsign_name: "scorpio", startdegree: 3, startmins: 20, 
        ruler: 'saturn', symbol: 'Lotus', deity: 'Mithra',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '18', name: 'Jyeshtha', startsign_name: "scorpio", startdegree: 16, startmins: 40, 
        ruler: 'mercury', symbol: 'Amulet', deity: 'Indra',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '19', name: 'Mula', startsign_name: "sagittarius", startdegree: 0, startmins: 00, 
        ruler: 'ketu', symbol: 'roots', deity: 'Nirriti',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '20', name: 'Purva Ashadha', startsign_name: "sagittarius", startdegree: 13, startmins: 20, 
        ruler: 'venus', symbol: 'A fan', deity: 'Varuna',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '21', name: 'Uttara Ashadha', startsign_name: "sagittarius", startdegree: 26, startmins: 40, 
        ruler: 'sun', symbol: 'Tusk', deity: 'Vishvadevas',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '22', name: 'Shravana', startsign_name: "capricorn", startdegree: 23, startmins: 20, 
        ruler: 'moon', symbol: 'An Ear', deity: 'Vishnu',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '23', name: 'Dhanistha', startsign_name: "capricorn", startdegree: 23, startmins: 20, 
        ruler: 'mars', symbol: 'Drum', deity: 'Vasus',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '24', name: 'Satabhishak', startsign_name: "aquarius", startdegree: 6, startmins: 40, 
        ruler: 'rahu', symbol: '1000 Stars', deity: 'Varuna',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        },{
        num: '25', name: 'Purva Bhadra', startsign_name: "aquarius", startdegree: 20, startmins: 00, 
        ruler: 'jupiter', symbol: 'Funeral cot', deity: 'Ajaikapada',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '26', name: 'Uttara Bhadra', startsign_name: "pisces", startdegree: 3, startmins: 20, 
        ruler: 'saturn', symbol: 'Water Snake', deity: 'Ahirbudhnyua',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '27', name: 'Revati', startsign_name: "pisces", startdegree: 16, startmins: 40, 
        ruler: 'mercury', symbol: 'A fish', deity: 'Pushan',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }
        ],
        print_: function() { print_(this);},
        update_: function() { update_(this);},
        drawNakshatra_: function() { drawNakshatra_(this);}
    }

function drawNakshatra_(me) {
        // if(me.showNakshatra == true) me.showNakshatra = false; 
        // else me.showNakshatra = true;
        var ctx = me.ctx;
        // DrawTriangle(ctx,0,0,0.5,135,0.55,160,"red","red");
        // DrawTriangle(ctx,0,0,0.55,160,0.71,180,"red","red");
        // DrawTriangle(ctx,0,0,0.71,180,0.55,200,"red","red");
        // DrawTriangle(ctx,0,0,0.55,200,0.5,225,"red","red");
        console.log("Draw Nakshatra____");
        //console.log(me.nakshatras[0].signnum);
      }
function print_(me) {
        str = JSON.stringify(me, null, 4); // (Optional) beautiful indented output.
        console.log("Nakshatra Object= " + str); // Logs output to dev tools console.
      }
function update_(me) {
    // get the house number of position 1(Aries) first
    var houseType, padha; var rarray = []; var qarray = [];
    let houseobj = astroObj.houses.find(o => o.signnum === 1);
    if(houseobj.num == 1 || houseobj.num == 4 ||houseobj.num == 7 || houseobj.num == 10) {houseType = "Kendra"; padha =10;}
    else {houseType = "Trikona"; padha = 5;}
    
    var startr = houseobj.rarray[0]; var startq = houseobj.qarray[0];
    var startr1 =  houseobj.rarray[1];  var startq1 =  houseobj.qarray[1];
    var x = 0; 
    var y = 0;
    console.log(houseobj);
    rarray[0] = startr;
    qarray[0] = startq;

    rarray[1] = startr1;
    qarray[1] = startq1;
    if(houseType == "Kendra") {if(padha*y == 40)  x = x - 0; else if (padha*y > 40)  x = x - 1; else if (padha*y < 40)  x = x + 1;}
    else x = x + 1;
    //x = x + 1; 
    y = y + 1;
    var r1;
    if(houseType == "Kendra") r1 = 0.5; else r1 = 1/Math.SQRT2;
    qarray[2] = startq1+padha*y;
    var angle = 180 - ((padha * y) + 45 + 45);
    
    //rarray[2] = -r1/Math.cos(qarray[2]*Math.PI/180);
    if(houseType == "Kendra")  rarray[2] = r1/Math.cos(padha*x*Math.PI/180); else rarray[2] =(Math.sin(45*Math.PI/180)*1)/Math.sin(angle*Math.PI/180);
   
  
    //rarray[2] =(Math.sin((180-(45+padha))*Math.PI/180)*rarray[1])/Math.sin(45*Math.PI/180);
    
    DrawTriangle(me.ctx,rarray,qarray,nakshatraObj.nakshatras[0].color,nakshatraObj.nakshatras[0].fillcolor);
    console.log("r[0]= " + rarray[0] +  " q[0]= " + qarray[0] +  " r[1]= " + rarray[1] + " q[1]= " + qarray[1]);
    console.log("r[2]= " + rarray[2] +  " q[2]= " + qarray[2] );

    // rarray[1] = rarray[2];
    // qarray[1] = qarray[2];
    // if(houseType == "Kendra") {if(padha*y == 40)  x = x - 0; else if (padha*y > 40)  x = x - 1; else if (padha*y < 40)  x = x + 1;}
    // else x = x + 1;
    // y = y + 1;
    // rarray[2] = startr1/Math.cos(padha*x*Math.PI/180);
    // qarray[2] = startq1+padha*y;
    // DrawTriangle(me.ctx,rarray,qarray,nakshatraObj.nakshatras[0].color,nakshatraObj.nakshatras[0].fillcolor);

    // rarray[1] = rarray[2];
    // qarray[1] = qarray[2];
    // if(houseType == "Kendra") {if(padha*y == 40)  x = x - 0; else if (padha*y > 40)  x = x - 1; else if (padha*y < 40)  x = x + 1;}
    // else x = x + 1;
    // y = y + 1;
    // rarray[2] = startr1/Math.cos(padha*x*Math.PI/180);
    // qarray[2] = startq1+padha*y;
    // DrawTriangle(me.ctx,rarray,qarray,nakshatraObj.nakshatras[0].color,nakshatraObj.nakshatras[0].fillcolor);

    // rarray[1] = rarray[2];
    // qarray[1] = qarray[2];
    // if(houseType == "Kendra") {if(padha*y == 40)  x = x - 0; else if (padha*y > 40)  x = x - 1; else if (padha*y < 40)  x = x + 1;}
    // else x = x + 1;
    // y = y + 1;
    // rarray[2] = startr1/Math.cos(padha*x*Math.PI/180);
    // qarray[2] = startq1+padha*y;
    // DrawTriangle(me.ctx,rarray,qarray,nakshatraObj.nakshatras[0].color,nakshatraObj.nakshatras[0].fillcolor);

    // rarray[1] = rarray[2];
    // qarray[1] = qarray[2];
    // if(houseType == "Kendra") {if(padha*y == 40)  x = x - 0; else if (padha*y > 40)  x = x - 1; else if (padha*y < 40)  x = x + 1;}
    // else x = x + 1;
    // y = y + 1;
    // rarray[2] = startr1/Math.cos(padha*x*Math.PI/180);
    // qarray[2] = startq1+padha*y;
    // DrawTriangle(me.ctx,rarray,qarray,nakshatraObj.nakshatras[0].color,nakshatraObj.nakshatras[0].fillcolor);
    
    // rarray[1] = rarray[2];
    // qarray[1] = qarray[2];
    // if(houseType == "Kendra") {if(padha*y == 40)  x = x - 0; else if (padha*y > 40)  x = x - 1; else if (padha*y < 40)  x = x + 1;}
    // else x = x + 1;
    // y = y + 1;
    // rarray[2] = startr1/Math.cos(padha*x*Math.PI/180);
    // qarray[2] = startq1+padha*y;
    // DrawTriangle(me.ctx,rarray,qarray,nakshatraObj.nakshatras[0].color,nakshatraObj.nakshatras[0].fillcolor);


    // rarray[1] = rarray[2];
    // qarray[1] = qarray[2];
    // if(houseType == "Kendra") {if(padha*y == 40)  x = x - 0; else if (padha*y > 40)  x = x - 1; else if (padha*y < 40)  x = x + 1;}
    // else x = x + 1;
    // y = y + 1;
    // rarray[2] = startr1/Math.cos(padha*x*Math.PI/180);
    // qarray[2] = startq1+padha*y;
    // DrawTriangle(me.ctx,rarray,qarray,nakshatraObj.nakshatras[0].color,nakshatraObj.nakshatras[0].fillcolor);


    // rarray[1] = rarray[2];
    // qarray[1] = qarray[2];
    // if(houseType == "Kendra") {if(padha*y == 40)  x = x - 0; else if (padha*y > 40)  x = x - 1; else if (padha*y < 40)  x = x + 1;}
    // else x = x + 1;
    // y = y + 1;
    // rarray[2] = startr1/Math.cos(padha*x*Math.PI/180);
    // qarray[2] = startq1+padha*y;
    // DrawTriangle(me.ctx,rarray,qarray,nakshatraObj.nakshatras[0].color,nakshatraObj.nakshatras[0].fillcolor);

    // rarray[1] = rarray[2];
    // qarray[1] = qarray[2];
    
    // if(houseType == "Kendra") {if(padha*y == 40)  x = x - 0; else if (padha*y > 40)  x = x - 1; else if (padha*y < 40)  x = x + 1;}
    // else x = x + 1;
    // console.log("padha*y = " + padha*y +  " x = " + x);
    // y = y + 1;
    // rarray[2] = startr1/Math.cos(padha*(x)*Math.PI/180);
    // qarray[2] = startq1+padha*y;
    // DrawTriangle(me.ctx,rarray,qarray,nakshatraObj.nakshatras[0].color,nakshatraObj.nakshatras[0].fillcolor);

    // rarray[0] = startr;
    // qarray[0] = startq;
    // rarray[1] = rarray[2];
    // qarray[1] = qarray[2];
    // rarray[2] = r/Math.cos(padha*3*Math.PI/180);
    // qarray[2] = q+padha*3;
    // DrawTriangle(me.ctx,rarray,qarray,nakshatraObj.nakshatras[0].color,nakshatraObj.nakshatras[0].fillcolor);

    // rarray[0] = startr;
    // qarray[0] = startq;
    // rarray[1] = rarray[2];
    // qarray[1] = qarray[2];
    // rarray[2] = r/Math.cos(padha*4*Math.PI/180);
    // qarray[2] = q+padha*4;
    // DrawTriangle(me.ctx,rarray,qarray,nakshatraObj.nakshatras[0].color,nakshatraObj.nakshatras[0].fillcolor);
    
    //houseobj = astroObj.houses.find(o => o.signnum === 2);
    //console.log(houseobj);
    // nakshatraObj.nakshatras[1].rarray[0] = houseobj.rarray[0];
    // nakshatraObj.nakshatras[1].qarray[0] = houseobj.qarray[0];
    // nakshatraObj.nakshatras[1].rarray[1] = houseobj.rarray[1];
    // nakshatraObj.nakshatras[1].qarray[1] = houseobj.qarray[1];
    // nakshatraObj.nakshatras[1].rarray[2] = (houseobj.rarray[1]/Math.cos(10*4*Math.PI/180));
    // nakshatraObj.nakshatras[1].qarray[2] = houseobj.qarray[1]+10*4;
    // console.log(nakshatraObj.nakshatras[1]);
    // DrawTriangle(me.ctx,nakshatraObj.nakshatras[1].rarray,nakshatraObj.nakshatras[1].qarray,nakshatraObj.nakshatras[1].color,nakshatraObj.nakshatras[1].fillcolor);
    
    // for(let i=0; i <12; i++)
    // {
    //   //let id = "#sign"+(i+1);
    //   signnum = astroObj.houses[i].signnum;
    //   let index = signObj.findIndex(
    //     element => element.name === signsArray[signnum-1]
    //   );
    //   console.log("HOUSE: " + (i+1) + " INDEX: " + index + " signnum "+ signnum+ " Name: " + signObj[index].name + " Position: " + signObj[index].position + " Ruledby: " + signObj[index].ruledby +" x: " + signObj[index].x + " y: " + signObj[index].y );
    //   // var index = signObj.findIndex("name" => "name".value === "cancer");
    //   ruler = signObj[index].ruledby;
    //   //which house is this lord(ruler) placed in
    //   house_num = outputObj[ruler].house;
    //   //console.log("ruler: " + ruler + " HOUSE: " +house_num)  ;
    //   //DrawLinewithArrow(ctx,x,y,astroObj.houses[house_num-1].centerx,astroObj.houses[house_num-1].centery,'rgb(0,0,255)' );
    // }
    //str = JSON.stringify(signObj, null, 4); // (Optional) beautiful indented output.
   //console.log("Sign Object= " + str); // Logs output to dev tools console.
}

// this function does not need the last point to be set to the first point for closure, it does it internally
function drawPathClose(ctx, [...rarray],[...qarray],color,fillcolor){
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
    x1 = AXIS_RANGE*rarray[0]*Math.cos(qarray[0]*Math.PI/180);
    y1 = AXIS_RANGE*rarray[0]*Math.sin(qarray[0]*Math.PI/180);
    let scaled3 = scale(x1,y1,r1);
    ctx.lineTo(scaled3.X, scaled3.Y);
    ctx.closePath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = color; // Green path
    ctx.fillStyle = fillcolor;
    ctx.stroke(); // Draw it
    ctx.fill();
    ctx.restore();
  }

// function DrawTriangle(ctx,[...r],[...q],color,fillcolor){
//     ctx.save();
//     var rarray = [r[0], r[1], r[2], r[0]];
//     var qarray = [q[0], q[1], q[2], q[0]];
//     ctx.globalAlpha  = 0.2;
//     drawPath(ctx, [...rarray],[...qarray],color,fillcolor); // line color, fill color
//     ctx.restore();
// }
function DrawTriangle(ctx,[...r],[...q],color,fillcolor){
    ctx.save();
    var rarray = [r[0], r[1], r[2], r[0]];
    var qarray = [q[0], q[1], q[2], q[0]];
    ctx.globalAlpha  = 0.2;
    drawPathClose(ctx, [...r],[...q],color,fillcolor); // line color, fill color
    ctx.restore();
}

