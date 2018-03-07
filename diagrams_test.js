var generateDiagram = document.querySelector('.btn');
var currentEvent = 0;

generateDiagram.addEventListener('click', draw);

function resetScreen() {

    var resetDiv = document.querySelectorAll('.svg-diagram');
    for (var i = 0 ; i < resetDiv.length ; i++) {
        resetDiv[i].textContent = '';
    }

    var resetText = document.querySelectorAll('.textbox');
    for (var i = 0 ; i < resetText.length ; i++) {
        resetText[i].textContent = '';
    }   

    currentEvent++;

    if (currentEvent===events.length){
        currentEvent=0;
    }

    draw();

}

function addSecondDivText (myText, bold=true) {

    var theDiv = document.getElementById("textbox");
    var h2 = document.createElement("H2");
    var content = document.createTextNode(myText);

    if (bold==true) {
        theDiv.appendChild(h2);
        h2.appendChild(content);
    } else {
        theDiv.appendChild(content);
    }

}

// the event representations

var events = [

    ['The hygienist flossed my teeth', 'floss-41.2.1', 'Sbj V Obj', 'Volitional COS', 'IncrementalAccomplishment', 'Sbj V Obj', "flossed('hygienist', 'teeth')", 'Theme-of(y,e) & Component-of(a,hygienist) & Component-of(b,teeth) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)'],

    ['I flossed', 'floss-41.2.1', 'Sbj V', 'Volitional COS', 'UndirectedActivity', 'Sbj V', "flossed('I', 'NI')", 'Theme-of(y,e) & Component-of(a,I) & Component-of(b,NI) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)'],

    ['She flossed her teeth with floss', 'floss-41.2.1', 'Sbj V Obj with Obl', 'Instrument COS', 'IncrementalAccomplishment', 'Sbj V Obj with Obl', "floss('She', 'floss', 'teeth')", 'Theme-of(z,e) & Component-of(a,She) & Component-of(b,floss) & Component-of(c,teeth) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & COS(q3) & FRC(a,b) & FRC(b,c)'],

    ['She brushed with a toothbrush', 'floss-41.2.1', 'Sbj V with Obl', 'Instrument COS', 'UndirectedActivity', 'Sbj V with Obl', "brushed('She', 'toothbrush', 'NI')", 'Theme-of(z,e) & Component-of(a,She) & Component-of(b,toothbrush) & Component-of(c,NI) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & UndAct(c,i,l,q3) & VOL(q1) & COS(q3) & FRC(a,b) & FRC(b,c)'], 

    ['Lydia pocketed the change', 'pocket-9.10', 'Sbj V Obj', 'Volitional Apply', 'DirectedAchievement', 'Sbj V Obj', "pocketed('Lydia', 'change', 'NI')", 'Theme-of(y,e) & Component-of(a,Lydia) & Component-of(b,change) & Component-of(c,NI) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)'],

    ['Cynthia nibbled', 'chew-39.2-1', 'Sbj V', 'Volitional COS', 'UndirectedActivity', 'Sbj V', "nibbled('Cynthia', 'NI')", 'Theme-of(y,e) & Component-of(a,Cynthia) & Component-of(b,NI) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)'],

    ['Susan cut the recipes from the magazine with a sharp knife', 'cut-21.1', 'NP V NP PP.source PP.instrument', 'Instrument Remove', 'incremental accomplishment', 'Sbj V Obj PathP with Obl', "cut('Susan', 'knife', 'recipes', 'magazine')", 'Theme-of(z,e) & Component-of(a,Susan) & Component-of(b,knife) & Component-of(c,recipes) & Component-of(d,magazine) & UndEnd(a,i,j,q1) & UndAct(b,i,k,q2) & IncrAcc(c,i,l,q3) & InhStPh(d,i,m,q4) & VOL(q1) & CNTC(q2) & -MER(q3) & EXST(q4) & FRC(a,b) & FRC(b,c) & PTH(c,d)'],

    ['Doug cleaned the table of dishes', 'clear-10.3', 'NP V NP.location PP.theme', 'Volitional Uncover', 'incremental accomplishment', 'Sbj V Obj of Obl', "cleaned('Doug', 'dishes', 'table')", 'Theme-of(z,e) & Component-of(a,Doug) & Component-of(b,dishes) & Component-of(c,table) & UndEnd(a,i,j,q1) & UndAct(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & REM(q2) & -MER(q3) & FRC(a,b) & PTH(b,c)'],

    ['The books slid from the table to the floor', 'slide-11.2', 'NP V PP.initial_location PP.destination', 'Autonomous Motion', 'incremental accomplishment', 'Sbj V PathP', "slid('books', 'floor')", 'Theme-of(x,e) & Component-of(a,books) & Component-of(b,floor) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & MOT(q1) & EXST(q2) & PTH(a,b)'],

    ['David constructed a house out of sticks', 'create-26.4', 'NP V NP PP.material', 'Volitional Form', 'nonincremental accomplishment', 'Sbj V Obj from/out of Obl', "constructed('David', 'sticks', 'house')", 'Theme-of(z,e) & Component-of(a,David) & Component-of(b,sticks) & Component-of(c,house) & UndEnd(a,i,j,q1) & UndAct(b,i,k,q2) & NonIncrAcc(c,i,l,q3) & VOL(q1) & FORM(q2) & DES(q3) & FRC(a,b) & FORM(b,c)'],

    ['Paula hit the ball with a stick', 'hit-18.1', 'NP V NP PP.instrument', 'Instrument Force', 'cyclic achievement', 'Sbj V Obj with Obl', "hit('Paula', 'stick', 'ball')", 'Theme-of(z,e) & Component-of(a,Paula) & Component-of(b,stick) & Component-of(c,ball) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & CNTC(q2) & EXST(q3) & FRC(a,b) & FRC(b,c)'],

    ['Bill rolled the drawer open', 'roll-51.3.1', 'NP V NP ADJ', 'Volitional COS', 'directed achievement', 'Sbj V Obj ResultP', "rolled('Bill', 'drawer')", 'Theme-of(y,e) & Component-of(a,Bill) & Component-of(b,drawer) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)'],

    ['I lifted the books onto the table', 'put_direction-9.4', 'NP V NP PP.destination', 'Volitional Apply', 'directed achievement', 'Sbj V Obj PathP', "lifted('I', 'books', 'table')", 'Theme-of(y,e) & Component-of(a,I) & Component-of(b,books) & Component-of(c,table) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXST(q3) & FRC(a,b) & PTH(b,c)'],

    ['My computer connected to his computer', 'mix-22.1-2-1', 'NP V PP.patient', 'Autonomous Apply', 'directed achievement', 'Sbj V PathP', "connected('computer', 'computer')", 'Theme-of(x,e) & Component-of(a,computer) & Component-of(b,computer) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & +MER(q1) & EXST(q2) & PTH(a,b)'],

    ['The sky cleared', 'clear-10.3-1', 'NP.location V', 'Autonomous COS', 'directed achievement', 'Sbj V', "cleared('sky',)", 'Theme-of(x,e) & Component-of(a,sky) & DirAch(a,i,j,q1) & COS(q1)'],

    ['The cat clawed the couch to pieces with her sharp nails', 'swat-18.2', 'NP V NP PP.result PP.instrument', 'Instrument COS', 'nonincremental accomplishment', 'Sbj V Obj ResultP with Obl', "clawed('cat', 'nails', 'couch')", 'Theme-of(z,e) & Component-of(a,cat) & Component-of(b,nails) & Component-of(c,couch) & UndEnd(a,i,j,q1) & UndAct(b,i,k,q2) & NonIncrAcc(c,i,l,q3) & VOL(q1) & CNTC(q2) & COS(q3) & FRC(a,b) & FRC(b,c)'],

    ['The hammer hit the window to pieces', 'hit-18.1', 'NP V NP ADJP PP.result', 'Physical COS', 'directed achievement', 'Sbj V Obj ResultP', "hit('hammer', 'window')", 'Theme-of(y,e) & Component-of(a,hammer) & Component-of(b,window) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & CNTC(q1) & COS(q2) & FRC(a,b)'],

    ['The Romans destroyed the city', 'destroy-44', 'NP V NP', 'Volitional COS', 'directed achievement', 'Sbj V Obj', "destroyed('Romans', 'city')", 'Theme-of(y,e) & Component-of(a,Romans) & Component-of(b,city) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)'],

    ['The protesters burned the flag', 'other_cos-45.4', 'Sbj V Obj', 'Volitional COS', 'incremental accomplishment', 'Sbj V Obj', "burned('protesters', 'flag')", 'Theme-of(y,e) & Component-of(a,protesters) & Component-of(b,flag) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)']

];


// the aspect objects
function getObjects (height) {

    var IncrementalAccomplishment = {   "solid": [  { "x": 20,  "y": height-20},
                                                    { "x": 20,  "y": height-40}, 
                                                    { "x": 100,  "y": height-80},
                                                    { "x": 100,  "y": height-100} ],

                                    "dotted-beg": [ {"x":0, "y":height-20},
                                                    {"x":20, "y":height-20} ], 

                                    "dotted-end": [ {"x":100, "y":height-100},
                                                    {"x":120, "y":height-100} ],

                                    "bcr-labels" : {"b" : [{"x":0, "y":height-20}, {"x":-5, "y":height-20}], 
                                                    "c" : [{"x":-1, "y":height-40}, {"x":-1, "y": height-80}],
                                                    "r" : [{"x":0,  "y": height-100}, {"x":-5,  "y": height-100}]},

                                    "fd1" : {"when-first": {"x":20, "y":height-40}, "when-second": {"x":20, "y":height-20}},

                                    "fd2" : {"when-first": {"x":100, "y":height-100}, "when-second": {"x":100, "y":height-80}},

                                    "name" : "IncrAcc" 
                                };


    var NonincrementalAccomplishment = {  "solid": [    { "x": 20,  "y": height-20},
                                                        { "x": 20,  "y": height-40},
                                                        { "x": 40,  "y": height-80}, 
                                                        { "x": 60,  "y": height-40},
                                                        { "x": 80,  "y": height-80},  
                                                        { "x": 100, "y": height-40},
                                                        { "x": 100,  "y": height-100} ],

                                            "dotted-beg": [ {"x":0, "y":height-20},
                                                            {"x":20, "y":height-20} ], 

                                            "dotted-end": [ {"x":100, "y":height-100},
                                                            {"x":120, "y":height-100} ],

                                            "bcr-labels" : {"b" : [{"x":0, "y":height-20}, {"x":-5, "y":height-20}], 
                                                            "c" : [{"x":-1, "y":height-40}, {"x":-1, "y": height-80}],
                                                            "r" : [{"x":0,  "y": height-100}, {"x":-5,  "y": height-100}]},

                                            "fd1" : {"when-first": {"x":20, "y":height-40}, "when-second": {"x":20, "y":height-20}},

                                            "fd2" : {"when-first": {"x":100, "y":height-100}, "when-second": {"x":100, "y":height-40}},

                                            "name" : "NonIncrAcc"

                                        }; 

    var UndirectedEndeavor = {  "solid": [  { "x": 20,  "y": height-10},
                                            { "x": 20,  "y": height-30},
                                            { "x": 40,  "y": height-70}, 
                                            { "x": 60,  "y": height-30},
                                            { "x": 80,  "y": height-70},  
                                            { "x": 100, "y": height-30}, 
                                            { "x": 100, "y": height-10} ],

                                "dotted-beg": [ {"x":0, "y":height-10},
                                                {"x":20, "y":height-10} ], 

                                "dotted-end": [ {"x":100, "y":height-10},
                                                {"x":120, "y":height-10} ],

                                "bcr-labels" : {"b" : [{"x":0, "y":height-10}, {"x":-5, "y":height-10}], 
                                                "c" : [{"x":-1, "y":height-30}, {"x":-1, "y": height-70}],
                                                "r" : ["None"]},

                                "fd1" : {"when-first": {"x":20, "y":height-30}, "when-second": {"x":20, "y":height-10}},

                                "fd2" : {"when-first": {"x":100, "y":height-30}, "when-second": {"x":100, "y":height-10}},

                                "name" : "UndAct"

                            };

    var UndirectedActivity = {  "solid": [  { "x": 20,  "y": height-20},
                                            { "x": 40,  "y": height-60}, 
                                            { "x": 60,  "y": height-20},
                                            { "x": 80,  "y": height-60},  
                                            { "x": 100, "y": height-20} ],

                                "dotted-beg": [ {"x":0, "y":height-10},
                                                {"x":20, "y":height-10},
                                                {"x":20, "y":height-20} ], 

                                "dotted-end": [ {"x":100, "y":height-20},
                                                {"x":100, "y":height-10},
                                                {"x":120, "y":height-10} ],

                                "bcr-labels" : {"b" : [{"x":0, "y":height-10}, {"x":-5, "y":height-10}], 
                                                "c" : [{"x":-1, "y":height-20}, {"x":-1, "y": height-60}],
                                                "r" : ["None"]},

                                "fd1" : {"when-first": {"x":20, "y":height-20}, "when-second": {"x":20, "y":height-10}},

                                "fd2" : {"when-first": {"x":100, "y":height-20}, "when-second": {"x":100, "y":height-10}},

                                "name" : "UndAct"

                            }; 


    var DirectedActivity = {   		"solid": [		{ "x": 20,  "y": height-40}, 
                                                    { "x": 100,  "y": height-80} ],

                                    "dotted-beg": [ {"x":0, "y":height-20},
                                                    {"x":20, "y":height-20},
                                                    { "x": 20,  "y": height-40} ], 

                                    "dotted-end": [ {"x":100, "y":height-80} ],

                                    "bcr-labels" : {"b" : [{"x":0, "y":height-20}, {"x":-5, "y":height-20}], 
                                                    "c" : [{"x":-1, "y":height-40}, {"x":-1, "y": height-80}],
                                                    "r" : ["None"]},

                                    "fd1" : {"when-first": {"x":20, "y":height-40}, "when-second": {"x":20, "y":height-20}},

                                    "fd2" : {"when-first": {"x":100, "y":height-80}, "when-second": {"x":100, "y":height-80}},

                                    "name" : "DirAct"
                            };


    var CyclicAchievement = {   	"solid": 	[	{ "x": 47,  "y": height-20}, 
                                                    { "x": 47,  "y": height-60},
                                                    { "x": 50,  "y": height-60},
                                                    { "x": 50,  "y": height-20} ],

                                    "dotted-beg": [ {"x":0, "y":height-20},
                                                    {"x":47, "y":height-20} ], 

                                    "dotted-end": [ { "x": 50,  "y": height-20},
                                    				{ "x": 100,  "y": height-20} ],

                                    "bcr-labels" : {"b" : [{"x":0, "y":height-20}, {"x":-5, "y":height-20}], 
                                                    "c" : [{"x":-1, "y":height-20}, {"x":-1, "y": height-60}],
                                                    "r" : [{"x":0,  "y": height-60}, {"x":-5,  "y": height-60}]},

                                    "fd1" : {"when-first": {"x":47, "y":height-60}, "when-second": {"x":47, "y":height-20}},

                                    "fd2" : {"when-first": {"x":47, "y":height-60}, "when-second": {"x":47, "y":height-20}},

                                    "name" : "CycAch"
                            };


    var DirectedAchievement = {   	"solid": 	[	{ "x": 47,  "y": height-20}, 
                                                    { "x": 47,  "y": height-60} ],

                                    "dotted-beg": [ {"x":0, "y":height-20},
                                                    {"x":47, "y":height-20} ], 

                                    "dotted-end": [ { "x": 47,  "y": height-60},
                                    				{ "x": 100,  "y": height-60} ],

                                    "bcr-labels" : {"b" : [{"x":0, "y":height-20}, {"x":-5, "y":height-20}], 
                                                    "c" : [{"x":-1, "y":height-20}, {"x":-1, "y": height-60}],
                                                    "r" : [{"x":0,  "y": height-60}, {"x":-5,  "y": height-60}]},

                                    "fd1" : {"when-first": {"x":47, "y":height-60}, "when-second": {"x":47, "y":height-20}},

                                    "fd2" : {"when-first": {"x":47, "y":height-60}, "when-second": {"x":47, "y":height-20}},

                                    "name" : "DirAch" 
                            };

    //InherentState is a little trickier: it takes into account the preceding event (where profiled and points of FDs)
    //so, has two values: "extended" and "punctual"
    var InherentStateExtended = {        

                                    "solid":    [   { "x": 20,  "y": height-60}, 
                                                    { "x": 100,  "y": height-60} ],

                                    "dotted-beg": [ {"x":0, "y":height-60},
                                                    {"x":20, "y":height-60} ], 

                                    "dotted-end": [ { "x": 100,  "y": height-60},
                                                    { "x": 120,  "y": height-60} ],

                                    "bcr-labels" : {"b" : ["None"], 
                                                    "c" : ["None"],
                                                    "r" : [{"x":0,  "y": height-60}, {"x":-5,  "y": height-60}]},

                                    "fd1" : {"when-first": {"x":20, "y":height-20}, "when-second": {"x":20, "y":height-60}},

                                    "fd2" : {"when-first": {"x":100, "y":height-20}, "when-second": {"x":100, "y":height-60}},

                                    "name" : "InhStPhExt" 

                    
                                };

    var InherentStatePunctual =  {        

                                    "solid":    [   { "x": 46,  "y": height-60}, 
                                                    { "x": 48,  "y": height-60} ],

                                    "dotted-beg": [ {"x":0, "y":height-60},
                                                    {"x":46, "y":height-60} ], 

                                    "dotted-end": [ { "x": 48,  "y": height-60},
                                                    { "x": 120,  "y": height-60} ],

                                    "bcr-labels" : {"b" : ["None"], 
                                                    "c" : ["None"],
                                                    "r" : [{"x":0,  "y": height-60}, {"x":-5,  "y": height-60}]},

                                    "fd1" : {"when-first": {"x":47, "y":height-20}, "when-second": {"x":47, "y":height-60}},

                                    "fd2" : {"when-first": {"x":47, "y":height-20}, "when-second": {"x":47, "y":height-60}},

                                    "name" : "InhStPhPunct"

                                };


    var TransitoryState =   {       "solid":    [   { "x": 47,  "y": height-60}, 
                                                    { "x": 100,  "y": height-60} ],

                                    "dotted-beg": [ {"x":0, "y":height-20},
                                                    {"x":47, "y":height-20},
                                                    {"x":47, "y":height-60} ], 

                                    "dotted-end": [ { "x": 47,  "y": height-60} ],

                                    "bcr-labels" : {"b" : [{"x":0, "y":height-20}, {"x":-5, "y":height-20}], 
                                                    "c" : ["None"],
                                                    "r" : [{"x":0,  "y": height-60}, {"x":-5,  "y": height-60}]},

                                    "fd1" : {"when-first": {"x":47, "y":height-60}, "when-second": {"x":47, "y":height-20}},

                                    "fd2" : {"when-first": {"x":47, "y":height-60}, "when-second": {"x":47, "y":height-20}},

                                    "name" : "TranSt" 
                            };


    return  {   IncrAcc: IncrementalAccomplishment, 
                NonIncrAcc: NonincrementalAccomplishment, 
                UndEnd: UndirectedEndeavor,
                UndAct: UndirectedActivity ,
                DirAct: DirectedActivity,
                CycAch: CyclicAchievement,
                DirAch: DirectedAchievement,
                TranSt: TransitoryState,
                InhStPhExt: InherentStateExtended,
                InhStPhPunct: InherentStatePunctual
            };

}

//This is the accessor function 
var lineFunction = d3.line()
                          .x(function(d) { return d.x; })
                          .y(function(d) { return d.y; });


function createDiagram (svgContainer, myAspectObject) {

    var solidLine = myAspectObject["solid"];
    var dottedBeg = myAspectObject["dotted-beg"];
    var dottedEnd = myAspectObject["dotted-end"];
    var b = myAspectObject["bcr-labels"]["b"];
    var c = myAspectObject["bcr-labels"]["c"];
    var r = myAspectObject["bcr-labels"]["r"];

    var aspectName = myAspectObject["name"];

    var lineGraph = svgContainer.append("path")
                                .attr("d", lineFunction(solidLine))
                                .attr("stroke", "blue")
                                .attr("stroke-width", 2)
                                .attr("fill", "none");

    var dLinesBeg = svgContainer.append("path")
                                .attr("d", lineFunction(dottedBeg))
                                .attr("stroke", "black")
                                .style("stroke-dasharray", ("2, 2"))
                                .attr("fill", "none");

    var dLinesEnd = svgContainer.append("path")
                                .attr("d", lineFunction(dottedEnd))
                                .attr("stroke", "black")
                                .style("stroke-dasharray", ("2, 2"))
                                .attr("fill", "none");

    if (b[0]!='None') {

        var addB = svgContainer.append("path")
                            .attr("d", lineFunction(b))
                            .attr("stroke", "black")
                            .attr("stroke-width", 1)
                            .attr("fill", "none");

        var addBText = svgContainer.append("text")
                            .attr("x", b[1]["x"]-11)
                            .attr("y", b[1]["y"]+3)
                            .text('b');

        }

    if (c[0]!='None' && aspectName.indexOf("Ach")==-1) {

        var addC = svgContainer.append("path")
                            .attr("d", lineFunction(c))
                            .attr("stroke", "black")
                            .attr("stroke-width", 4)
                            .attr("fill", "none");

        var addCText = svgContainer.append("text")
                            .attr("x", c[1]["x"]-15)
                            .attr("y", (1/2)*(c[0]["y"]+c[1]["y"])+3)
                            .text('c');

        }

    if (r[0]!="None") {

        var addR = svgContainer.append("path")
                    .attr("d", lineFunction(r))
                    .attr("stroke", "black")
                    .attr("stroke-width", 1)
                    .attr("fill", "none");

        var addRText = svgContainer.append("text")
                            .attr("x", r[1]["x"]-11)
                            .attr("y", r[1]["y"]+3)
                            .text('r');
        }

}


function drawFDlines (svgContainer, myEventObject1, myEventObject2) {

    var fd1 = [myEventObject1["fd1"]["when-first"]];

    fd1.push(myEventObject2["fd1"]["when-second"]);

    var fdline1 = svgContainer.append("path")
                        .attr("d", lineFunction(fd1))
                        .attr("stroke", "red")
                        .attr("stroke-width", 1)
                        .attr("fill", "none");        


    var fd2 = [myEventObject1["fd2"]["when-first"]];

    fd2.push(myEventObject2["fd2"]["when-second"]);

    var fdline2 = svgContainer.append("path")
                        .attr("d", lineFunction(fd2))
                        .attr("stroke", "red")
                        .attr("stroke-width", 1)
                        .attr("fill", "none"); 
}


function drawPathArrows (svgContainer, myObject) {

	// here pass the second object in the causal chain to align the triangle(s)

	var x1 = myObject["fd1"]["when-second"].x;
	var y1 = myObject["fd1"]["when-second"].y;

	svgContainer.append('path')
	      .attr('d', function(d) { 
	        return 'M ' + x1 +' '+ y1 + ' l 5 5 l -10 0 z';
	      })
	      .attr("fill", "red");


	var x2 = myObject["fd2"]["when-second"].x;
	var y2 = myObject["fd2"]["when-second"].y;

	svgContainer.append('path')
	      .attr('d', function(d) { 
	        return 'M ' + x2 +' '+ y2 + ' l 5 5 l -10 0 z';
	      })
	      .attr("fill", "red");
}


function addPathForceLabels(svgContainer, subEvent1, subEvent2, prevSubEvent) {

    var x = subEvent1["fd2"]["when-first"]["x"];
    var y = (subEvent1["fd2"]["when-first"]["y"] + subEvent2["fd2"]["when-second"]["y"]) / 2;

    if (prevSubEvent[2] == 'PTH' || prevSubEvent[2] == 'FRC') {

        var thisText = prevSubEvent[2];

        var addPthFrcText = svgContainer.append("text")
                                .attr("x", x+5)
                                .attr("y", y+5)
                                .style("fill", "red")
                                .text(thisText);

    } else if (prevSubEvent[3] == 'PTH' || prevSubEvent[3] == 'FRC') {

        var thisText = prevSubEvent[3];

        var addPthFrcText = svgContainer.append("text")
                                .attr("x", x+5)
                                .attr("y", y+5)
                                .style("fill", "red")
                                .text(thisText);
    }

}


function drawAxes (svgContainer, height, aspectHeight, includeXaxis) {


    //hacky height is the upper part of the y-axis, while height adjusts the bottom part
    if (aspectHeight == 80) {

        var hackyHeight = height-aspectHeight+10;
        height = height;

    } else if (aspectHeight == 100) {

        var hackyHeight = height-aspectHeight-10;
        height = height-10;

    } else if (aspectHeight == 60) {

        var hackyHeight = height-aspectHeight-20;
        height = height-20;
        
    }

    if (includeXaxis) {

        var xAxis = [   {"x": 0, "y":height},
                        {"x": 120, "y":height}];

        var xline = svgContainer.append("path")
                .attr("d", lineFunction(xAxis))
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .attr("fill", "none");
    };


    var yAxis = [   {"x": 0, "y":hackyHeight},
                    {"x": 0, "y":height}];

    var yline = svgContainer.append("path")
                        .attr("d", lineFunction(yAxis))
                        .attr("stroke", "black")
                        .attr("stroke-width", 1)
                        .attr("fill", "none");
}



function addText (svgContainer, myAspectObject, subeventArray) {

    var participant = subeventArray[0];

    var strLen = participant.length*2;

    var theme = subeventArray[2];

    if (theme){
        var themeLen = theme.length*1.5;
    }
    

    var c = myAspectObject["bcr-labels"]["c"];

    var r = myAspectObject["bcr-labels"]["r"];


    if (c[0]!='None') {

        var addParticipantText = svgContainer.append("text")
                                    .attr("x", c[1]["x"]-55-strLen)
                                    .attr("y", (1/2)*(c[0]["y"]+c[1]["y"])+3)
                                    .text(participant);

    } else if (r[0]!="None") {

        var addParticipantText = svgContainer.append("text")
                                    .attr("x", r[1]["x"]-60-strLen)
                                    .attr("y", r[1]["y"]+3)
                                    .text(participant);
    }


    if (theme!==undefined && theme != 'FRC' && theme != 'PTH') {

        if (r[0]!="None") {

            var addTheme = svgContainer.append("text")
                                        .attr("x", r[1]["x"]-35-themeLen)
                                        .attr("y", r[1]["y"]-10)
                                        .text(theme);
        } else {

            var addTheme = svgContainer.append("text")
                                        .attr("x", c[1]["x"]-35-themeLen)
                                        .attr("y", (1/2)*(c[0]["y"]+c[1]["y"])-10)
                                        .text(theme);
        }

    }

}


function getHeight(allAspects) {

    // determines the height of each subevent: 60, 80, 100

    var subeventHeights = [];

    for (i in allAspects) {
        if (allAspects[i]==='IncrAcc' || allAspects[i]==='NonIncrAcc') {
            subeventHeights.push(100);
        } else if (allAspects[i]==='InhStPh') {
            subeventHeights.push(60);
        } else {
            subeventHeights.push(80);
        }
    }

    return subeventHeights;
}


function parsePredCalc (myPredCalc) {

    // form ("None" if none): [[q1PartAspectThemeFD], [q2PartAspectThemeFD], [q3PartAspectThemeFD], [q4PartAspectThemeFD], [aspectSummary]]
    var eventInfo = []

    var string_split = myPredCalc.split('&');
    var string_trim = [];

    //string_trim is the main array to iterate over
    for (i in string_split) {
        string_trim.push(string_split[i].trim());
    }

    //push q1Aspect
    var q1AspectTheme = [];
    for (i in string_trim) {

        if (string_trim[i].indexOf('Component-of(a,') !== -1) {
            var part1 = string_trim[i].split(',')[1].slice(0, -1);
            q1AspectTheme.push(part1);
        } else if (string_trim[i].indexOf('q1') !== -1) {
            var q1Instance = string_trim[i].split('(')[0];
            q1AspectTheme.push(q1Instance)
        } else if (string_trim[i].indexOf('(a,b)') !== -1) {
            var fd1Instance = string_trim[i].split('(')[0];
            q1AspectTheme.push(fd1Instance)
        }
    }
    eventInfo.push(q1AspectTheme);

    //push q2Aspect
    var q2Exists = false;
    var q2AspectTheme = [];
    for (i in string_trim) {

        if (string_trim[i].indexOf('Component-of(b,') !== -1) {
            var part2 = string_trim[i].split(',')[1].slice(0, -1);
            q2AspectTheme.push(part2);
        } else if (string_trim[i].indexOf('q2') !== -1) {
            var q2Instance = string_trim[i].split('(')[0];
            q2Exists = true;
            q2AspectTheme.push(q2Instance)
        } else if (string_trim[i].indexOf('(b,c)') !== -1) {
            var fd2Instance = string_trim[i].split('(')[0];
            q2AspectTheme.push(fd2Instance)
        }
    }
    
    if (q2Exists===false) {
        eventInfo.push("None");
    } else {
        eventInfo.push(q2AspectTheme);
    }

    //push q3aspect
    var q3Exists = false;
    var q3AspectTheme = [];
    for (i in string_trim) {

        if (string_trim[i].indexOf('Component-of(c,') !== -1) {
            var part3 = string_trim[i].split(',')[1].slice(0, -1);
            q3AspectTheme.push(part3);
        } else if (string_trim[i].indexOf('q3') !== -1) {
            var q3Instance = string_trim[i].split('(')[0];
            q3Exists = true;
            q3AspectTheme.push(q3Instance)
        } else if (string_trim[i].indexOf('(c,d)') !== -1) {
            var fd3Instance = string_trim[i].split('(')[0];
            q3AspectTheme.push(fd3Instance)
        }
    }
    
    if (q3Exists===false) {
        eventInfo.push("None");
    } else {
        eventInfo.push(q3AspectTheme);
    }


    //push q4Aspect
    var q4Exists = false;
    var q4AspectTheme = [];
    for (i in string_trim) {

        if (string_trim[i].indexOf('Component-of(d,') !== -1) {
            var part4 = string_trim[i].split(',')[1].slice(0, -1);
            q4AspectTheme.push(part4);
        } else if (string_trim[i].indexOf('q4') !== -1) {
            var q4Instance = string_trim[i].split('(')[0];
            q4Exists = true;
            q4AspectTheme.push(q4Instance)
        }
    }
    
    if (q4Exists===false) {
        eventInfo.push("None");
    } else {
        eventInfo.push(q4AspectTheme);
    }

    // form: [all aspectual types]
    // will be used to determine height of svg
    // length: number of subevents
    var aspectSummary = [];

    for (i in eventInfo) {
        if (eventInfo[i]!="None") {
            aspectSummary.push(eventInfo[i][1]);
        }
    }

    eventInfo.push(aspectSummary);

    return eventInfo;

}


function draw () {

    // var inputPredCalc = USERINPUT;

    // var eventComponents = parsePredCalc(inputPredCalc);

    var predcalc = events[currentEvent][7];

    
    var eventComponents = parsePredCalc(predcalc);

    // returns an array of all subevent aspect types, ex: ["UndAct", "UndAct", "IncrAcc"]
    var allAspects = eventComponents[4];

    // console.log(eventComponents);

    // this returns a 1xN array when N=number of subevents and each element is the height of the subevent, ex: [80,80,100]
    var allHeights = getHeight(allAspects);

    var svgHeight = allHeights.reduce(function(acc, val) {
        return acc + val;
    }, 0);


    //The SVG Container
    var svgContainer = d3.select(".svg-diagram").append("svg")
                                        .attr("width", 200)
                                        .attr("height", svgHeight);


    // recordObjects keeps a history of the objects for drawing of FD lines
    var recordObjects = [];


    //Start composing subevents
    for (i in allAspects) {

        var thisAspect = allAspects[i];

        // checking for extended or punctual Inherent State
        if (thisAspect === 'InhStPh') {
            if (allAspects[i-1] === 'CycAch' || allAspects[i-1] === 'DirAch') {
                thisAspect = 'InhStPhPunct';
            } else {
                thisAspect = 'InhStPhExt';
            }
        }

        // svgHeight is updated at end of for loop
        var thisHeight = svgHeight+40;

        var thisAspectHeight = allHeights[i];

        var objects = getObjects(thisHeight);

        recordObjects.push(objects)

        var thisSubevent = objects[thisAspect];


        if (i == 0) {
            var thisAxis = drawAxes(svgContainer, thisHeight, thisAspectHeight, true);
        } else {
            var secondAxis = drawAxes(svgContainer, thisHeight, thisAspectHeight, false);
        }

        var drawThisSubevent = createDiagram(svgContainer, thisSubevent);

        var subeventArray = eventComponents[i];

        var addingText = addText(svgContainer, thisSubevent, subeventArray);


        // only draw FD lines after the second subevent has been drawn
        if (i > 0) {

            var subEvent1 = recordObjects[i-1][allAspects[i-1]];


            if (allAspects[i] === 'InhStPh') {
                if (allAspects[i-1] === 'CycAch' || allAspects[i-1] === 'DirAch') {
                    var subEvent2 = objects['InhStPhPunct'];
                } else {
                    var subEvent2 = objects['InhStPhExt'];
                }
            } else {
                var subEvent2 = objects[allAspects[i]];
            }

            
            var drawForceDynamicLines = drawFDlines(svgContainer, subEvent1, subEvent2);

            // checking for PTH and drawing arrows
            var prevSubEvent = eventComponents[i-1];
            for (i in prevSubEvent) {
                if (prevSubEvent[i]==='FRC') {
                    var drawArrows = drawPathArrows(svgContainer, subEvent2);
                }
            }

            var addPthFrcLabels = addPathForceLabels(svgContainer, subEvent1, subEvent2, prevSubEvent);
            
        }

        svgHeight = svgHeight - thisAspectHeight;
    }

    // var sentence = events[currentEvent][0];
    // var themeType = events[currentEvent][3];
    // var aspectType = events[currentEvent][4];
    // var syntax = events[currentEvent][5];
    // var predicate = events[currentEvent][6];

    for (n=0; n<8; n++) {

        var labels = ['Example: ', 'VerbNet class: ', 'VerbNet case frames: ', 'Force-dynamic annotation: ', 'Aspect annotation: ', 'Argument Structure Construction: ', 'Participant mapping: ', 'Predicate calculus representation: '];

        if (n != 1 && n != 2) {
            var addedHeader = addSecondDivText(labels[n], true);
            var addedSentence = addSecondDivText(events[currentEvent][n], false);
            var addedBlank = addSecondDivText('', false);
        }
    }

    generateDiagram.addEventListener('click', resetScreen);
    generateDiagram.removeEventListener('click', draw);

}