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
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(255,0,0)', fillcolor: 'rgb(255,0,0)', colorKey: 'rgb(0,0,0)', 
        qualities: ''
        }, {
        num: '2', name: 'Bharani', startsign_name: "aries",  startdegree: 13, startmins: 20,
        ruler: 'venus', symbol: 'Yoni', deity: 'Yama',  nature: 'fierce', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,255,0)', fillcolor: 'rgb(0,255,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '3', name: 'Kritika', startsign_name: "aries", startdegree: 26, startmins: 40,
        ruler: 'sun', symbol: 'Razor', deity: 'Agni',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,255)', fillcolor: 'rgb(0,0,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '4', name: 'Rohini', startsign_name: "taurus", startdegree: 10, startmins: 00,
        ruler: 'moon', symbol: 'Chariot', deity: 'Brahma',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(255,0,0)', fillcolor: 'rgb(255,0,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '5', name: 'Mrigasira', startsign_name: "tarus", startdegree: 23, startmins: 20,  
        ruler: 'mars', symbol: 'Deer`s head', deity: 'Chandra',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,255,0)', fillcolor: 'rgb(0,255,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '6', name: 'Aardra', startsign_name: "gemini", startdegree: 6, startmins: 40,
        ruler: 'rahu', symbol: 'Tear Drop', deity: 'Rudra',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,255)', fillcolor: 'rgb(0,0,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '7', name: 'Punarvasu', startsign_name: "gemini", startdegree: 20, startmins: 00,
        ruler: 'jupiter', symbol: 'Quiver', deity: 'Aditi',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(255,0,0)', fillcolor: 'rgb(255,0,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '8', name: 'Pushyami', startsign_name: "cancer", startdegree: 3, startmins: 20, 
        ruler: 'saturn',  symbol: 'Udder', deity: 'Brihaspati', nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,255,0)', fillcolor: 'rgb(0,255,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '9', name: 'Ashlesha', startsign_name: "cancer",startdegree: 16, startmins: 40, 
        ruler: 'mercury',  deity: 'Nag', symbol: 'Serpent', nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,255)', fillcolor: 'rgb(0,0,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '10', name: 'Magha', startsign_name: "leo", startdegree: 0, startmins: 00, 
        ruler: 'ketu', symbol: 'Throne', deity: 'Pitras',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(255,0,0)', fillcolor: 'rgb(255,0,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '11', name: 'Purva Phalguni', startsign_name: "leo", startdegree: 13, startmins: 20, 
        ruler: 'venus', symbol: 'Hammock', deity: 'Bhaga',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,255,0)', fillcolor: 'rgb(0,255,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '12', name: 'Uttra Phalguni', startsign_name: "leo", startdegree: 26, startmins: 40, 
        ruler: 'sun', symbol: 'Fig Tree', deity: 'Aryaman',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,255)', fillcolor: 'rgb(0,0,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '13', name: 'Hasta',startsign_name: "virgo", startdegree: 10, startmins: 00, 
        ruler: 'moon', symbol: 'Hand', deity: 'Surya',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(255,0,0)', fillcolor: 'rgb(255,0,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '14', name: 'Chitra',startsign_name: "virgo", startdegree: 23, startmins: 20, 
        ruler: 'mars', symbol: 'jewel', deity: 'Viswakarma',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,255,0)', fillcolor: 'rgb(0,255,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '15', name: 'Swati', startsign_name: "libra", startdegree: 6, startmins: 40, 
        ruler: 'rahu', symbol: 'Coral', deity: 'Vaayu',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,255)', fillcolor: 'rgb(0,0,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '16', name: 'Vishakaha', startsign_name: "libra", startdegree: 20, startmins: 00, 
        ruler: 'jupiter', symbol: 'Arch', deity: 'Indira',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(255,0,0)', fillcolor: 'rgb(255,0,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '17', name: 'Anuradha', startsign_name: "scorpio", startdegree: 3, startmins: 20, 
        ruler: 'saturn', symbol: 'Lotus', deity: 'Mithra',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,255,0)', fillcolor: 'rgb(0,255,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '18', name: 'Jyeshtha', startsign_name: "scorpio", startdegree: 16, startmins: 40, 
        ruler: 'mercury', symbol: 'Amulet', deity: 'Indra',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,255)', fillcolor: 'rgb(0,0,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '19', name: 'Mula', startsign_name: "sagittarius", startdegree: 0, startmins: 00, 
        ruler: 'ketu', symbol: 'roots', deity: 'Nirriti',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(255,0,0)', fillcolor: 'rgb(255,0,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '20', name: 'Purva Ashadha', startsign_name: "sagittarius", startdegree: 13, startmins: 20, 
        ruler: 'venus', symbol: 'A fan', deity: 'Varuna',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,255,0)', fillcolor: 'rgb(0,255,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '21', name: 'Uttara Ashadha', startsign_name: "sagittarius", startdegree: 26, startmins: 40, 
        ruler: 'sun', symbol: 'Tusk', deity: 'Vishvadevas',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,255)', fillcolor: 'rgb(0,0,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '22', name: 'Shravana', startsign_name: "capricorn", startdegree: 23, startmins: 20, 
        ruler: 'moon', symbol: 'An Ear', deity: 'Vishnu',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(255,0,0)', fillcolor: 'rgb(255,0,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '23', name: 'Dhanistha', startsign_name: "capricorn", startdegree: 23, startmins: 20, 
        ruler: 'mars', symbol: 'Drum', deity: 'Vasus',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,255,0)', fillcolor: 'rgb(0,255,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '24', name: 'Satabhishak', startsign_name: "aquarius", startdegree: 6, startmins: 40, 
        ruler: 'rahu', symbol: '1000 Stars', deity: 'Varuna',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,255)', fillcolor: 'rgb(0,0,255)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        },{
        num: '25', name: 'Purva Bhadra', startsign_name: "aquarius", startdegree: 20, startmins: 00, 
        ruler: 'jupiter', symbol: 'Funeral cot', deity: 'Ajaikapada',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(255,0,0)', fillcolor: 'rgb(255,0,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '26', name: 'Uttara Bhadra', startsign_name: "pisces", startdegree: 3, startmins: 20, 
        ruler: 'saturn', symbol: 'Water Snake', deity: 'Ahirbudhnyua',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,255,0)', fillcolor: 'rgb(0,255,0)', colorKey: 'rgb(0,0,0)',
        qualities: ''
        }, {
        num: '27', name: 'Revati', startsign_name: "pisces", startdegree: 16, startmins: 40, 
        ruler: 'mercury', symbol: 'A fish', deity: 'Pushan',  nature: '', 
        postion: 1, house: 1, type:'', longitude: 0, degree: 28.7014879, mins:42, secs:0,rarray : [], qarray: [],
        color: 'rgb(0,0,255)', fillcolor: 'rgb(0,0,255)', colorKey: 'rgb(0,0,0)',
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
    var k,i,padha_num;
    var current_house_position = 1; var nakshatra_num = 0;
    for (i =0; i<12; i++){
      let houseobj = astroObj.houses.find(o => o.signnum === current_house_position);
      if(houseobj.num == 1 || houseobj.num == 4 ||houseobj.num == 7 || houseobj.num == 10) {houseType = "Kendra"; padha =10;}
      else {houseType = "Trikona"; padha = 5;}
      var x = 0; 
      var y = 0;
      console.log(houseobj);
      rarray[0] =houseobj.rarray[0]; ;
      qarray[0] = houseobj.qarray[0];
      rarray[1] =  houseobj.rarray[1];
      qarray[1] = houseobj.qarray[1];
     
      for (k=0; k<9; k++) {
        console.log("current_house_position= " + current_house_position);
        if(houseType == "Kendra") {if(padha*y == 40)  x = x - 0; else if (padha*y > 40)  x = x - 1; else if (padha*y < 40)  x = x + 1;}
        else x = x + 1;
        y = y + 1;
        if((9*i+k) % 4 ==0) { nakshatra_num = nakshatra_num+1; padha_num=0; } else padha_num=padha_num+1;
        console.log("nakshatra_num= " + nakshatra_num + " padha_num= " + padha_num);
        console.log("nakshatra_name= " + nakshatraObj.nakshatras[nakshatra_num-1].name);
        var r1;
        var _0_707 =  1/Math.SQRT2;
        if(houseType == "Kendra") r1 = 0.5; else r1 = _0_707;
        if(houseType == "Kendra")  qarray[2] = qarray[1]+ 10 ; else qarray[2] = qarray[1] + 5;
        if(houseType == "Kendra")  rarray[2] = r1/Math.cos(padha*x*Math.PI/180); 
        if (houseType == "Trikona"){
          let houseobj1 = astroObj.houses.find(o => o.signnum === current_house_position);
          if(houseobj1.num == 2) { rarray[2] = r1/Math.sin((90-padha*x)*Math.PI/180);}
          if(houseobj1.num == 3) { rarray[2] = (Math.sin(((45))*Math.PI/180)*1)/Math.sin((180-45-padha*x)*Math.PI/180);}
          if(houseobj1.num == 5) { rarray[2] =  r1/Math.sin((90-padha*x)*Math.PI/180);}
          if(houseobj1.num == 6) { rarray[2] = (Math.sin(((45))*Math.PI/180)*1)/Math.sin((180-45-padha*x)*Math.PI/180);}
          if(houseobj1.num  == 8) { rarray[2] = r1/Math.sin((90-padha*x)*Math.PI/180);}
          if(houseobj1.num  == 9) { rarray[2] = (Math.sin(((45))*Math.PI/180)*1)/Math.sin((180-45-padha*x)*Math.PI/180);}
          if(houseobj1.num == 11) { rarray[2] = r1/Math.sin((90-padha*x)*Math.PI/180);}
          if(houseobj1.num == 12) { rarray[2] = (Math.sin(((45))*Math.PI/180)*1)/Math.sin((180-45-padha*x)*Math.PI/180);}
        }
        if( rarray[2] < 0)rarray[2] = rarray[2] * (-1);
        if(padha_num==0){
          let houseobj2 = astroObj.houses.find(o => o.signnum === current_house_position);
          var str = get_angles(houseobj2.num, rarray[1],qarray[1]);
          console.log("details= " + str);
          nakshatraObj.nakshatras[nakshatra_num-1].postion=current_house_position;
          nakshatraObj.nakshatras[nakshatra_num-1].house= houseobj2.num;
          nakshatraObj.nakshatras[nakshatra_num-1].type=houseType;
          nakshatraObj.nakshatras[nakshatra_num-1].longitude= 0; 
          nakshatraObj.nakshatras[nakshatra_num-1].degree= 28.7014879; 
          nakshatraObj.nakshatras[nakshatra_num-1].mins=42; 
          nakshatraObj.nakshatras[nakshatra_num-1].secs=0;
          nakshatraObj.nakshatras[nakshatra_num-1].rarray[0]= rarray[0];
          nakshatraObj.nakshatras[nakshatra_num-1].qarray[0]= qarray[0];
          nakshatraObj.nakshatras[nakshatra_num-1].rarray[1]= rarray[1];
          nakshatraObj.nakshatras[nakshatra_num-1].qarray[1]= rarray[1];
          nakshatraObj.nakshatras[nakshatra_num-1].rarray[2]= rarray[2];
          nakshatraObj.nakshatras[nakshatra_num-1].qarray[2]= rarray[2];
          nakshatraObj.nakshatras[nakshatra_num-1].rarray[3]= rarray[0];
          nakshatraObj.nakshatras[nakshatra_num-1].qarray[3]= qarray[0];
        }
        
        DrawTriangle(me.ctx,rarray,qarray,nakshatraObj.nakshatras[nakshatra_num-1].color,nakshatraObj.nakshatras[nakshatra_num-1].fillcolor);
        console.log("degree= " +  qarray[1] );
        Nakshatra_placeText(me.ctx,MQtoX(rarray[1],qarray[1]),MQtoY(rarray[1],qarray[1]),nakshatra_num+(padha_num/10),"center","middle",'italic','normal',3,'arial');
        if((9*i+k) % 4 ==0)  Nakshatra_placeText(me.ctx,MQtoX(rarray[1]-0.1,qarray[1]+15),MQtoY(rarray[1]-0.1,qarray[1]+15),nakshatraObj.nakshatras[nakshatra_num-1].name,"center","middle",'italic','bold',4,'arial');
        console.log("r[0]= " + rarray[0] +  " q[0]= " + qarray[0] +  " r[1]= " + rarray[1] + " q[1]= " + qarray[1]);
        console.log("r[2]= " + rarray[2] +  " q[2]= " + qarray[2] );
        rarray[1] = rarray[2];
        qarray[1] = qarray[2];
      }
      let houseobj2 = astroObj.houses.find(o => o.signnum === current_house_position);
      console.log("current_house_number= " + houseobj2.num);
      current_house_position = current_house_position + 1;
    }
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

function Nakshatra_placeText(ctx,x,y,txt,textAlign,textBaseline,fontStyle,fontWeight,fontSize,fontFamily){
  //console.log(" x= " + x + " y = " + y );
  //Default value:	10px sans-serif
  //"italic small-caps bold 12px arial";
  //font-style	Specifies the font style. Possible values:{normal,italic,oblique}
 // font-variant	Specifies the font variant. Possible values: {normal,small-caps}
 // font-weight	Specifies the font weight. Possible values: {normal, bold, bolder, lighter, 100,200..900}
 // font-size/line-height	Specifies the font size and the line-height, in pixels	
 // font-family	Specifies the font family

  ctx.beginPath();
  var ratio = fontSize / fontBase;   // calc ratio
  var size = chart.width * ratio;   // get font size based on current width 
  //ctx.font = 'bold ' + (size|0) + 'px System';
  ctx.save();
  //console.log ("font= ", ctx.font);
  ctx.font =  fontStyle +' ' + fontWeight +' '+  (size|0) +'px' +' '+  fontFamily ;
 // var txt1 =  '"'+ fontStyle +' '+  fontWeight +' '+  (size|0) +'px' +' '+  fontFamily + '"';
  //ctx.font = "italic normal 10px arial";
  //ctx.font = "italic bold 10px arial";
  //console.log ("font= ", txt1);
  //console.log ("font= ", ctx.font);
  //ctx.font = "italic small-caps bold 10px arial"
  ctx.fillStyle = "black";
  ctx.textAlign = textAlign;  
  ctx.textBaseline = textBaseline;
  var scaled = scale(x,y,0);
  ctx.fillText(txt, scaled.X,scaled.Y); 
  ctx.restore();
  ctx.closePath();
 
}

function get_nakshatraObj(house_position, degree){

  let houseobj = astroObj.houses.find(o => o.signnum === house_position);
  var house_num = houseobj.num;
  //nakshatraObj.nakshatras[house_num-1].name

}


function get_angles(house_num, m,q) {

  // var mouseX = x;
   //var mouseY  = y;
   var house = house_num
   //console.log( "mouseX =" + mouseX + " mouseY =" + mouseY  );
  //  var descaled = descale(mouseX,mouseY);
  //  var x= descaled.X;
  //  var y=descaled.Y;
  //  var inAstro = InAstro(x,y)
   var x = MQtoX(m,q);
   var y = MQtoX(m,q);
   var signnum ;
   var degree;
   var longitude;

       var [R,Q] = [0,0];
       var [M1,Q1] = [0,0];
       var str;
       //document.getElementById("Z1").value ="Z:" +Number(ZR).toFixed(2)+getSign(ZI)+Number(Math.abs(ZI)).toFixed(2)+"i";
       var str1 ="H:" + house +' ' +Number(m).toFixed(2) + '\u2220'+ Number(q).toFixed(2)+'\u00B0';
       console.log(str1);
       switch (house) {
         case '1':
           signnum = astroObj.houses[house-1].signnum;
           var d = q/3-15;
           degree = Number(q/3-15).toFixed(2);
           longitude = Number(q/3-15+270).toFixed(2);
           str = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" +longitude+'\u00B0 '  + "Ruler " + toTitleCase(signObj[signnum-1].ruledby);
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
           str =  toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" +longitude+'\u00B0 '  + "Ruler " + toTitleCase(signObj[signnum-1].ruledby); //+" XY:" + X + ' ' +Y +" RQ:" + Number(R).toFixed(2)+ ' ' + Number(Q).toFixed(2);
           break;  
         case '3':
           signnum = astroObj.houses[house-1].signnum;
           [R,Q] = XYtoMQ( x + 356, y - 356, AXIS_RANGE,true);
           Q=Q/3;
           degree = Number(Q-45).toFixed(2);
           longitude = Number(Q-45+330).toFixed(2);
           str =  toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" +longitude+'\u00B0 ' + "Ruler " + toTitleCase(signObj[signnum-1].ruledby); 
           break;
         case '4':
           signnum = astroObj.houses[house-1].signnum;
           degree = Number(q/3-45).toFixed(2);
           longitude = Number(q/3-45).toFixed(2);
           str =  toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" +longitude+'\u00B0 ' + "Ruler " + toTitleCase(signObj[signnum-1].ruledby);
           break;
         case '5':
           signnum = astroObj.houses[house-1].signnum;
           [R,Q] = XYtoMQ( x + 356, y + 356, AXIS_RANGE,true);
           Q=Q/3;
           degree = Number(Q-45).toFixed(2);
           longitude = Number(Q-45+30).toFixed(2);
           str = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" +longitude+'\u00B0 ' + "Ruler " + toTitleCase(signObj[signnum-1].ruledby); //+" XY:" + X + ' ' +Y +" RQ:" + Number(R).toFixed(2)+ ' ' + Number(Q).toFixed(2);
           break;  
         case '6':
           signnum = astroObj.houses[house-1].signnum;
           [R,Q] = XYtoMQ( x + 356, y + 356, AXIS_RANGE,true);
           Q=Q/3;
           degree = Number((Q-75)).toFixed(2);
           longitude = Number(Q-75+ 60.00).toFixed(2);
           str = toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" + longitude+'\u00B0 '  + "Ruler " + toTitleCase(signObj[signnum-1].ruledby); //+" XY:" + X + ' ' +Y +" RQ:" + Number(R).toFixed(2)+ ' ' + Number(Q).toFixed(2);
           break;
         case '7':
           signnum = astroObj.houses[house-1].signnum;
           degree = Number((q/3)-75).toFixed(2);
           longitude = Number((q/3)+15).toFixed(2);
           str =  toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" + longitude+'\u00B0 ' + "Ruler " + toTitleCase(signObj[signnum-1].ruledby);
           break;
         case '8':
           signnum = astroObj.houses[house-1].signnum;
           [R,Q] = XYtoMQ( x - 356, y + 356, AXIS_RANGE,true);
           Q=Q/3;
           degree = Number(Q-75).toFixed(2);
           longitude = Number((Q-75)+ 120.00).toFixed(2);
           str =  toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" + longitude+'\u00B0 '  + "Ruler " + toTitleCase(signObj[signnum-1].ruledby); //+" XY:" + X + ' ' +Y +" RQ:" + Number(R).toFixed(2)+ ' ' + Number(Q).toFixed(2);
           break;
         case '9':
           signnum = astroObj.houses[house-1].signnum;
           [R,Q] = XYtoMQ( x - 356, y + 356, AXIS_RANGE,false);
           Q=Q/3;
           degree = Number(Q+15).toFixed(2);
           longitude = Number(Q+15+150).toFixed(2);
           str =  toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" + longitude+'\u00B0 ' + "Ruler " + toTitleCase(signObj[signnum-1].ruledby); //+" XY:" + X + ' ' +Y +" RQ:" + Number(R).toFixed(2)+ ' ' + Number(Q).toFixed(2);
           break;
         case '10':
           [M1,Q1] = XYtoMQ(x, y, AXIS_RANGE,false);
           signnum = astroObj.houses[house-1].signnum;
           Q1=Q1/3;
           degree = Number(Q1+15).toFixed(2);
           longitude = Number(Q1+15+180).toFixed(2);
           str =  toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" +longitude+'\u00B0 ' + "Ruler " + toTitleCase(signObj[signnum-1].ruledby);
           break;
         case '11':
           signnum = astroObj.houses[house-1].signnum;
           [R,Q] = XYtoMQ( x - 356, y - 356, AXIS_RANGE,false);
           Q=Q/3;
           degree = Number(Q+15).toFixed(2);
           longitude = Number(Q+15+210).toFixed(2);
           str =  toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" + longitude+'\u00B0 ' + "Ruler " + toTitleCase(signObj[signnum-1].ruledby); //+" XY:" + X + ' ' +Y +" RQ:" + Number(R).toFixed(2)+ ' ' + Number(Q).toFixed(2);
           break;
         case '12':
           signnum = astroObj.houses[house-1].signnum;
           [R,Q] = XYtoMQ( x - 356, y - 356, AXIS_RANGE,false);
           Q=Q/3;
           degree = Number(Q-15).toFixed(2);
           longitude = Number(Q-15+240).toFixed(2);
           str =  toTitleCase(signsArray[signnum-1])+'('+signnum+')'+" Deg:" + degree+'\u00B0'+" Long:" +longitude+'\u00B0 ' + "Ruler " + toTitleCase(signObj[signnum-1].ruledby); //+" XY:" + X + ' ' +Y +" RQ:" + Number(R).toFixed(2)+ ' ' + Number(Q).toFixed(2);
           break;
         default:
           //console.log(`Sorry, we are out of ${house}.`);
       } 
      //  let position = 1;
      //  let degree1 = 0;
      //  let mins = 0;
      //  let secs = 0;
      //  [position,degree1,mins,secs] = logitudeToPositions(longitude);
       convertToDms(degree,true);
       console.log("deg min secs " +   convertToDms(degree));

       return str;
}
