//Nakshatra obj

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
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)', 
        qualities: ''
        }, {
        num: '2', name: 'Bharani', startsign_name: "aries",  startdegree: 13, startmins: 20,
        ruler: 'venus', symbol: 'Yoni', deity: 'Yama',  nature: 'fierce', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0, rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '3', name: 'Kritika', startsign_name: "aries", startdegree: 26, startmins: 40,
        ruler: 'sun', symbol: 'Razor', deity: 'Agni',  nature: '', 
        postion: 1, house: 1, longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,0)', fillcolor: 'rgb(255,255,255)', colorKey: 'rgb(0,0,0)',
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
    let houseobj = astroObj.houses.find(o => o.signnum === 1);
    console.log(houseobj);
    nakshatraObj.nakshatras[0].rarray[0] = houseobj.rarray[0];
    nakshatraObj.nakshatras[0].qarray[0] = houseobj.qarray[0];
    nakshatraObj.nakshatras[0].rarray[1] = houseobj.rarray[1];
    nakshatraObj.nakshatras[0].qarray[1] = houseobj.qarray[1];
    nakshatraObj.nakshatras[0].rarray[2] = houseobj.rarray[1]/Math.cos(30*Math.PI/180);
    nakshatraObj.nakshatras[0].qarray[2] = houseobj.qarray[1]+30;
    DrawTriangle(me.ctx,nakshatraObj.nakshatras[0].rarray,nakshatraObj.nakshatras[0].qarray,"red","red")
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

function DrawTriangle(ctx,[...r],[...q],color,fillcolor){
ctx.save();
    var rarray = [r[0], r[1], r[2], r[0]];
    var qarray = [q[0], q[1], q[2], q[0]];
    ctx.globalAlpha  = 0.2;
    drawPath(ctx, [...rarray],[...qarray],color,fillcolor); // line color, fill color
    ctx.restore();
}