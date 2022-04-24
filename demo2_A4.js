(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"demo2_A4_atlas_", frames: [[0,0,1174,1044]]},
		{name:"demo2_A4_atlas_2", frames: [[1002,952,900,900],[0,0,1000,1200],[1002,0,900,950],[651,1596,346,176],[0,1202,600,600],[651,1854,328,173],[651,1380,311,214],[0,1804,649,205],[602,1202,391,176]]},
		{name:"demo2_A4_atlas_3", frames: [[880,246,130,110],[838,112,170,132],[394,295,160,124],[136,374,160,124],[556,325,160,124],[294,547,70,90],[136,242,80,70],[460,421,90,220],[897,358,70,160],[366,547,70,90],[652,577,60,60],[0,394,60,80],[62,394,60,80],[454,128,150,165],[0,242,134,150],[819,503,70,150],[162,500,130,150],[606,112,230,110],[606,0,362,110],[222,128,230,110],[394,240,50,50],[222,240,170,132],[298,421,160,124],[0,500,160,124],[718,325,160,124],[594,577,56,66],[552,577,40,50],[970,0,50,60],[969,358,40,50],[0,626,144,25],[222,0,382,126],[552,451,343,50],[969,410,53,19],[294,643,298,33],[552,503,265,41],[891,547,63,24],[970,62,54,25],[0,0,220,240],[695,224,57,19],[891,520,69,25],[594,655,395,18],[298,374,90,30],[714,604,86,25],[606,224,87,19],[754,224,56,19],[552,546,230,29],[136,314,84,25],[714,577,91,25],[136,341,79,24],[714,631,56,19],[606,246,260,77]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.CachedBmp_37 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["demo2_A4_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["demo2_A4_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["demo2_A4_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["demo2_A4_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.controls = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.controlsText = function() {
	this.initialize(ss["demo2_A4_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.controlsTextB = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.dragons = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.explode = function() {
	this.initialize(ss["demo2_A4_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.firstPage = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.gameOverThree = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.gameOverTwo = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.homeText = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.info = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.keyboard = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.lastPage = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.next = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.note = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.pointsText = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.rules = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.rulesTextOne = function() {
	this.initialize(ss["demo2_A4_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.rulesTextTwo = function() {
	this.initialize(ss["demo2_A4_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.score = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.secondPage = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.select = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.spacebar = function() {
	this.initialize(ss["demo2_A4_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.start = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.story = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.storyDetails = function() {
	this.initialize(ss["demo2_A4_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.submit = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.thirdPage = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.worldTitle = function() {
	this.initialize(ss["demo2_A4_atlas_3"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.4697,0.4697);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,79.9,62), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_31();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,40,35), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,25,25), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dragons();
	this.instance.setTransform(0,78);

	this.instance_1 = new lib.worldTitle();
	this.instance_1.setTransform(42,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,343,128), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gameOverThree();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,298,33), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_36();
	this.instance.setTransform(0,0,0.4697,0.4697);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,79.9,62), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_37();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,65,55), null);


(lib.SubmitText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.submit();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SubmitText, new cjs.Rectangle(0,0,79,24), null);


(lib.nextText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.next();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nextText, new cjs.Rectangle(0,0,69,25), null);


(lib.MissileGreyed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{begin:0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// main_layer
	this.instance = new lib.CachedBmp_32();
	this.instance.setTransform(-17.5,-22.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-22.5,35,45);


(lib.Missile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,startFire:5,moreFire:10});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.gotoAndPlay("startFire");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// main_layer
	this.instance = new lib.CachedBmp_28();
	this.instance.setTransform(-17.5,-22.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_29();
	this.instance_1.setTransform(-17.5,-22.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_30();
	this.instance_2.setTransform(-22.5,-22.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-22.5,45,110);


(lib.HeartGreyed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_23();
	this.instance.setTransform(-15,-15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HeartGreyed, new cjs.Rectangle(-15,-15,30,30), null);


(lib.fireBall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,end:5});

	// timeline functions:
	this.frame_9 = function() {
		this.gotoAndPlay("begin");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_21();
	this.instance.setTransform(-15,-20,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_22();
	this.instance_1.setTransform(-15,-20,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-20,30,40);


(lib.explosion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hit:0,hitTwo:5});

	// Layer_1
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(-34.4,-37.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_20();
	this.instance_1.setTransform(-34.4,-45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.4,-45,75,82.5);


(lib.dragon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0,"end":5});

	// timeline functions:
	this.frame_9 = function() {
		this.gotoAndPlay("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(-32.5,-37.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_18();
	this.instance_1.setTransform(-17.5,-37.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-37.5,65,75);


(lib.Clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(-378.5,-229.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Clouds, new cjs.Rectangle(-378.5,-229.3,587,522), null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("pressButton");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-57.5,-27.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_14();
	this.instance_1.setTransform(-90.5,-27.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_15();
	this.instance_2.setTransform(-57.5,-27.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.5,-27.5,181,55);


(lib.ArrowButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("moveArrow");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-10,-12.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(-12.5,-15,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_5();
	this.instance_2.setTransform(-10,-12.5,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_6();
	this.instance_3.setTransform(-14,-16.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-16.5,28,33);


(lib.Title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(-0.5,0,1,1,0,0,0,171.5,64);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.0227},0).wait(1).to({alpha:0.0455},0).wait(1).to({alpha:0.0682},0).wait(1).to({alpha:0.0909},0).wait(1).to({alpha:0.1136},0).wait(1).to({alpha:0.1364},0).wait(1).to({alpha:0.1591},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.2045},0).wait(1).to({alpha:0.2273},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.2955},0).wait(1).to({alpha:0.3182},0).wait(1).to({alpha:0.3409},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.3864},0).wait(1).to({alpha:0.4091},0).wait(1).to({alpha:0.4318},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.4773},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5227},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.5682},0).wait(1).to({alpha:0.5909},0).wait(1).to({alpha:0.6136},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.6591},0).wait(1).to({alpha:0.6818},0).wait(1).to({alpha:0.7045},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7727},0).wait(1).to({alpha:0.7955},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.8409},0).wait(1).to({alpha:0.8636},0).wait(1).to({alpha:0.8864},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:0.9318},0).wait(1).to({alpha:0.9545},0).wait(1).to({alpha:0.9773},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9778},0).wait(1).to({alpha:0.9556},0).wait(1).to({alpha:0.9333},0).wait(1).to({alpha:0.9111},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.8444},0).wait(1).to({alpha:0.8222},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.7556},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.7111},0).wait(1).to({alpha:0.6889},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6444},0).wait(1).to({alpha:0.6222},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5778},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.5111},0).wait(1).to({alpha:0.4889},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.4222},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3778},0).wait(1).to({alpha:0.3556},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.3111},0).wait(1).to({alpha:0.2889},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.2444},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1778},0).wait(1).to({alpha:0.1556},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0889},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0.0444},0).wait(1).to({alpha:0.0222},0).wait(1).to({alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172,-64,343,128);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Clouds();
	this.instance.setTransform(292.2,186.8,1,1,0,0,0,292.2,186.8);

	this.instance_1 = new lib.Clouds();
	this.instance_1.setTransform(1076.05,186.8,1,1,0,0,0,292.2,186.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-378.5,-229.3,1370.9,522), null);


(lib.RedButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("pressButton");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(0,0,1,1,0,0,0,40,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:30.9,scaleX:1.05,scaleY:1.0645,y:1.9},0).wait(1).to({regY:31,scaleX:1,scaleY:1,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-31,83.9,66);


(lib.redPlane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,spin:5,respawn:10,explode:50});

	// timeline functions:
	this.frame_9 = function() {
		this.gotoAndPlay("begin");
	}
	this.frame_49 = function() {
		this.gotoAndPlay("begin");
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(40).call(this.frame_49).wait(15).call(this.frame_64).wait(1));

	// motion_tween
	this.instance = new lib.Symbol2();
	this.instance.setTransform(0,0,1,1,0,0,0,40,31);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(1).to({regX:39.9,x:-0.1,alpha:0.8889},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.07},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.42},0).wait(1).to({alpha:0.49},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.49},0).wait(1).to({alpha:0.42},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.07},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.0967},0).wait(1).to({alpha:0.1933},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.3867},0).wait(1).to({alpha:0.4833},0).wait(1).to({alpha:0.58},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(15));

	// Layer_2
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(-2.25,-1.6,1,1,0,0,0,12.5,12.5);
	this.instance_1.alpha = 0.1797;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).wait(1).to({scaleX:1.1314,scaleY:1.1465,x:-2.2,y:-1.55,alpha:0.24},0).wait(1).to({scaleX:1.2628,scaleY:1.2929,y:-1.6,alpha:0.3},0).wait(1).to({scaleX:1.3942,scaleY:1.4394,y:-1.55,alpha:0.36},0).wait(1).to({scaleX:1.5255,scaleY:1.5858,x:-2.25,y:-1.6,alpha:0.42},0).wait(1).to({scaleX:1.6569,scaleY:1.7323,alpha:0.48},0).wait(1).to({scaleX:1.7883,scaleY:1.8788,y:-1.55,alpha:0.54},0).wait(1).to({scaleX:1.9197,scaleY:2.0252,x:-2.2,y:-1.6,alpha:0.6},0).wait(1).to({scaleX:2.0511,scaleY:2.1717,y:-1.55,alpha:0.66},0).wait(1).to({scaleX:2.1825,scaleY:2.3182,alpha:0.72},0).wait(1).to({scaleX:2.3138,scaleY:2.4646,x:-2.25,y:-1.6,alpha:0.78},0).wait(1).to({scaleX:2.4452,scaleY:2.6111,y:-1.55,alpha:0.84},0).wait(1).to({scaleX:2.5766,scaleY:2.7575,y:-1.6,alpha:0.9},0).wait(1).to({scaleX:2.708,scaleY:2.904,x:-2.2,alpha:0.96},0).to({_off:true},1).wait(1));

	// main
	this.instance_2 = new lib.CachedBmp_33();
	this.instance_2.setTransform(-40,-31,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_34();
	this.instance_3.setTransform(-40,-31,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_35();
	this.instance_4.setTransform(-40,-31,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},5).to({state:[]},5).to({state:[{t:this.instance_4}]},40).to({state:[]},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-37.9,80,72.6);


(lib.missileFireBall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,stop:29});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
		this.gotoAndStop("begin");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_1
	this.instance = new lib.Symbol8();
	this.instance.setTransform(0,-0.25,0.5,0.4286,0,0,0,20,16.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:17.5,scaleX:0.5172,scaleY:0.4483,x:0.05,y:0.2,alpha:0.0345},0).wait(1).to({scaleX:0.5345,scaleY:0.468,alpha:0.069},0).wait(1).to({scaleX:0.5517,scaleY:0.4877,alpha:0.1034},0).wait(1).to({scaleX:0.569,scaleY:0.5074,alpha:0.1379},0).wait(1).to({scaleX:0.5862,scaleY:0.5271,x:0,alpha:0.1724},0).wait(1).to({scaleX:0.6034,scaleY:0.5468,alpha:0.2069},0).wait(1).to({scaleX:0.6207,scaleY:0.5665,alpha:0.2414},0).wait(1).to({scaleX:0.6379,scaleY:0.5862,alpha:0.2759},0).wait(1).to({scaleX:0.6552,scaleY:0.6059,alpha:0.3103},0).wait(1).to({scaleX:0.6724,scaleY:0.6256,x:0.05,y:0.25,alpha:0.3448},0).wait(1).to({scaleX:0.6897,scaleY:0.6453,alpha:0.3793},0).wait(1).to({scaleX:0.7069,scaleY:0.665,alpha:0.4138},0).wait(1).to({scaleX:0.7241,scaleY:0.6847,alpha:0.4483},0).wait(1).to({scaleX:0.7414,scaleY:0.7044,alpha:0.4828},0).wait(1).to({scaleX:0.7586,scaleY:0.7241,x:0,alpha:0.5172},0).wait(1).to({scaleX:0.7759,scaleY:0.7438,alpha:0.5517},0).wait(1).to({scaleX:0.7931,scaleY:0.7635,alpha:0.5862},0).wait(1).to({scaleX:0.8103,scaleY:0.7832,alpha:0.6207},0).wait(1).to({scaleX:0.8276,scaleY:0.8029,alpha:0.6552},0).wait(1).to({scaleX:0.8448,scaleY:0.8226,x:0.05,y:0.3,alpha:0.6897},0).wait(1).to({scaleX:0.8621,scaleY:0.8423,alpha:0.7241},0).wait(1).to({scaleX:0.8793,scaleY:0.862,alpha:0.7586},0).wait(1).to({scaleX:0.8966,scaleY:0.8817,alpha:0.7931},0).wait(1).to({scaleX:0.9138,scaleY:0.9014,y:0.25,alpha:0.8276},0).wait(1).to({scaleX:0.931,scaleY:0.9211,x:0,y:0.3,alpha:0.8621},0).wait(1).to({scaleX:0.9483,scaleY:0.9408,alpha:0.8966},0).wait(1).to({scaleX:0.9655,scaleY:0.9605,alpha:0.931},0).wait(1).to({scaleX:0.9828,scaleY:0.9803,alpha:0.9655},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-17.1,40,35);


(lib.Manual = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{one:0,two:5,three:10,four:15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		thisClip = this;
		
		thisClip.pageTwo.addEventListener("click", goNext);
		
		function goNext()
		{
			thisClip.pageTwo.removeEventListener("click", goNext);
			thisClip.gotoAndStop("two");
		}
	}
	this.frame_5 = function() {
		this.stop();
		
		thisClip.pageOne.addEventListener("click", goPrev);
		thisClip.pageThree.addEventListener("click", goNext);
		
		function goPrev()
		{
			thisClip.pageOne.removeEventListener("click", goPrev);
			thisClip.gotoAndStop("one");
		}
		
		function goNext()
		{
			thisClip.pageThree.removeEventListener("click", goNext);
			thisClip.gotoAndStop("three");
		}
	}
	this.frame_10 = function() {
		this.stop();
		
		thisClip.pageTwo.addEventListener("click", goPrev);
		thisClip.pageFour.addEventListener("click", goNext);
		
		function goPrev()
		{
			thisClip.pageThree.removeEventListener("click", goPrev);
			thisClip.gotoAndStop("two");
		}
		
		function goNext()
		{
			thisClip.pageFour.removeEventListener("click", goNext);
			thisClip.gotoAndStop("four");
		}
	}
	this.frame_15 = function() {
		this.stop();
		
		thisClip.pageThree.addEventListener("click", goPrev);
		thisClip.playGame.addEventListener("click", playGame);
		
		function goPrev()
		{
			thisClip.pageThree.removeEventListener("click", goPrev);
			thisClip.gotoAndStop("three");
		}
		
		function playGame()
		{
			thisClip.playGame.removeEventListener("click", playGame);
			thisGame.gotoAndStop("selection");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5).call(this.frame_10).wait(5).call(this.frame_15).wait(5));

	// Layer_1
	this.pageTwo = new lib.ArrowButton();
	this.pageTwo.name = "pageTwo";
	this.pageTwo.setTransform(50,200);
	new cjs.ButtonHelper(this.pageTwo, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.instance = new lib.storyDetails();
	this.instance.setTransform(-195,-125);

	this.instance_1 = new lib.story();
	this.instance_1.setTransform(-53,-200);

	this.instance_2 = new lib.firstPage();
	this.instance_2.setTransform(-26,190);

	this.instance_3 = new lib.CachedBmp_27();
	this.instance_3.setTransform(-225,-225,0.5,0.5);

	this.instance_4 = new lib.controlsTextB();
	this.instance_4.setTransform(-195,41);

	this.instance_5 = new lib.keyboard();
	this.instance_5.setTransform(165,24,0.1818,0.1667,0,180,0);

	this.instance_6 = new lib.spacebar();
	this.instance_6.setTransform(105,64,0.1541,0.1463);

	this.instance_7 = new lib.controlsText();
	this.instance_7.setTransform(-195,-152);

	this.instance_8 = new lib.keyboard();
	this.instance_8.setTransform(216,-112,0.1818,0.1667,0,90,-90);

	this.instance_9 = new lib.keyboard();
	this.instance_9.setTransform(129,-112,0.1818,0.1667,-90);

	this.pageOne = new lib.ArrowButton();
	this.pageOne.name = "pageOne";
	this.pageOne.setTransform(-50,200,1,1,0,0,180);
	new cjs.ButtonHelper(this.pageOne, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.pageThree = new lib.ArrowButton();
	this.pageThree.name = "pageThree";
	this.pageThree.setTransform(50,200);
	new cjs.ButtonHelper(this.pageThree, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.instance_10 = new lib.controls();
	this.instance_10.setTransform(-85,-200);

	this.instance_11 = new lib.secondPage();
	this.instance_11.setTransform(-26,190);

	this.instance_12 = new lib.note();
	this.instance_12.setTransform(-195,100);

	this.instance_13 = new lib.rulesTextOne();
	this.instance_13.setTransform(-195,-129);

	this.pageFour = new lib.ArrowButton();
	this.pageFour.name = "pageFour";
	this.pageFour.setTransform(50,200);
	new cjs.ButtonHelper(this.pageFour, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.instance_14 = new lib.rules();
	this.instance_14.setTransform(-50,-200);

	this.instance_15 = new lib.thirdPage();
	this.instance_15.setTransform(-26,190);

	this.instance_16 = new lib.start();
	this.instance_16.setTransform(-40,124);

	this.playGame = new lib.button();
	this.playGame.name = "playGame";
	this.playGame.setTransform(0,135);
	new cjs.ButtonHelper(this.playGame, 0, 1, 2);

	this.instance_17 = new lib.rulesTextTwo();
	this.instance_17.setTransform(-194,-132);

	this.instance_18 = new lib.lastPage();
	this.instance_18.setTransform(-26,190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.pageTwo,p:{skewY:0,x:50}}]}).to({state:[{t:this.instance_3},{t:this.instance_11},{t:this.instance_10},{t:this.pageThree,p:{skewY:0,x:50}},{t:this.pageOne},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},5).to({state:[{t:this.instance_3},{t:this.instance_15},{t:this.instance_14},{t:this.pageFour},{t:this.pageTwo,p:{skewY:180,x:-50}},{t:this.instance_13},{t:this.instance_12}]},5).to({state:[{t:this.instance_3},{t:this.instance_18},{t:this.pageThree,p:{skewY:180,x:-50}},{t:this.instance_17},{t:this.instance_14},{t:this.playGame},{t:this.instance_16}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-225,450,450);


(lib.IntroBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(979.15,86.2,1,1,0,0,0,684.1,186.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:306.9,regY:31.7,x:595.35,y:-68.9},0).wait(1).to({x:588.75},0).wait(1).to({x:582.15},0).wait(1).to({x:575.6},0).wait(1).to({x:569},0).wait(1).to({x:562.4},0).wait(1).to({x:555.85},0).wait(1).to({x:549.25},0).wait(1).to({x:542.65},0).wait(1).to({x:536.1},0).wait(1).to({x:529.5},0).wait(1).to({x:522.9},0).wait(1).to({x:516.35},0).wait(1).to({x:509.75},0).wait(1).to({x:503.15},0).wait(1).to({x:496.6},0).wait(1).to({x:490},0).wait(1).to({x:483.4},0).wait(1).to({x:476.85},0).wait(1).to({x:470.25},0).wait(1).to({x:463.65},0).wait(1).to({x:457.1},0).wait(1).to({x:450.5},0).wait(1).to({x:443.9},0).wait(1).to({x:437.3},0).wait(1).to({x:430.75},0).wait(1).to({x:424.15},0).wait(1).to({x:417.55},0).wait(1).to({x:411},0).wait(1).to({x:404.4},0).wait(1).to({x:397.8},0).wait(1).to({x:391.25},0).wait(1).to({x:384.65},0).wait(1).to({x:378.05},0).wait(1).to({x:371.5},0).wait(1).to({x:364.9},0).wait(1).to({x:358.3},0).wait(1).to({x:351.75},0).wait(1).to({x:345.15},0).wait(1).to({x:338.55},0).wait(1).to({x:332},0).wait(1).to({x:325.4},0).wait(1).to({x:318.8},0).wait(1).to({x:312.25},0).wait(1).to({x:305.7},0).wait(1).to({x:299.1},0).wait(1).to({x:292.55},0).wait(1).to({x:285.95},0).wait(1).to({x:279.35},0).wait(1).to({x:272.75},0).wait(1).to({x:266.2},0).wait(1).to({x:259.6},0).wait(1).to({x:253},0).wait(1).to({x:246.45},0).wait(1).to({x:239.85},0).wait(1).to({x:233.25},0).wait(1).to({x:226.7},0).wait(1).to({x:220.1},0).wait(1).to({x:213.5},0).wait(1).to({x:206.95},0).wait(1).to({x:200.35},0).wait(1).to({x:193.75},0).wait(1).to({x:187.2},0).wait(1).to({x:180.6},0).wait(1).to({x:174},0).wait(1).to({x:167.45},0).wait(1).to({x:160.85},0).wait(1).to({x:154.25},0).wait(1).to({x:147.7},0).wait(1).to({x:141.1},0).wait(1).to({x:134.5},0).wait(1).to({x:127.9},0).wait(1).to({x:121.35},0).wait(1).to({x:114.75},0).wait(1).to({x:108.15},0).wait(1).to({x:101.6},0).wait(1).to({x:95},0).wait(1).to({x:88.4},0).wait(1).to({x:81.85},0).wait(1).to({x:75.25},0).wait(1).to({x:68.65},0).wait(1).to({x:62.1},0).wait(1).to({x:55.5},0).wait(1).to({x:48.9},0).wait(1).to({x:42.35},0).wait(1).to({x:35.75},0).wait(1).to({x:29.15},0).wait(1).to({x:22.6},0).wait(1).to({x:16},0).wait(1).to({x:9.4},0).wait(1).to({x:2.85},0).wait(1).to({x:-3.75},0).wait(1).to({x:-10.35},0).wait(1).to({x:-16.9},0).wait(1).to({x:-23.5},0).wait(1).to({x:-30.1},0).wait(1).to({x:-36.7},0).wait(1).to({x:-43.25},0).wait(1).to({x:-49.85},0).wait(1).to({x:-56.45},0).wait(1).to({x:-63},0).wait(1).to({x:-69.6},0).wait(1).to({x:-76.2},0).wait(1).to({x:-82.75},0).wait(1).to({x:-89.35},0).wait(1).to({x:-95.95},0).wait(1).to({x:-102.5},0).wait(1).to({x:-109.1},0).wait(1).to({x:-115.7},0).wait(1).to({x:-122.25},0).wait(1).to({x:-128.85},0).wait(1).to({x:-135.45},0).wait(1).to({x:-142},0).wait(1).to({x:-148.6},0).wait(1).to({x:-155.2},0).wait(1).to({x:-161.75},0).wait(1).to({x:-168.35},0).wait(1).to({x:-174.95},0).wait(1).to({x:-181.55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-866.9,-329.9,2154.3,522);


(lib.Heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(38).call(this.frame_38).wait(1));

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-0.35,-0.35,0.4615,0.5455,0,0,0,31.1,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:32.5,regY:27.5,x:0.3,y:10.7,alpha:0.8889},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.084},0).wait(1).to({alpha:0.168},0).wait(1).to({alpha:0.252},0).wait(1).to({alpha:0.336},0).wait(1).to({alpha:0.42},0).wait(1).to({alpha:0.504},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.672},0).wait(1).to({alpha:0.756},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.735},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.525},0).wait(1).to({alpha:0.42},0).wait(1).to({alpha:0.315},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-4.3,30,30.1);


(lib.gameOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(0,-0.5,1,1,0,0,0,149,16.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.0345},0).wait(1).to({alpha:0.069},0).wait(1).to({alpha:0.1034},0).wait(1).to({alpha:0.1379},0).wait(1).to({alpha:0.1724},0).wait(1).to({alpha:0.2069},0).wait(1).to({alpha:0.2414},0).wait(1).to({alpha:0.2759},0).wait(1).to({alpha:0.3103},0).wait(1).to({alpha:0.3448},0).wait(1).to({alpha:0.3793},0).wait(1).to({alpha:0.4138},0).wait(1).to({alpha:0.4483},0).wait(1).to({alpha:0.4828},0).wait(1).to({alpha:0.5172},0).wait(1).to({alpha:0.5517},0).wait(1).to({alpha:0.5862},0).wait(1).to({alpha:0.6207},0).wait(1).to({alpha:0.6552},0).wait(1).to({alpha:0.6897},0).wait(1).to({alpha:0.7241},0).wait(1).to({alpha:0.7586},0).wait(1).to({alpha:0.7931},0).wait(1).to({alpha:0.8276},0).wait(1).to({alpha:0.8621},0).wait(1).to({alpha:0.8966},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.9655},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9667},0).wait(1).to({alpha:0.9333},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7667},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6333},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5667},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.4333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.2333},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0.0333},0).wait(1).to({alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149,-17,298,33);


(lib.CloudCombined = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Clouds();
	this.instance.setTransform(364.65,521.1,1,1,0,0,0,292.2,186.8);

	this.instance_1 = new lib.Clouds();
	this.instance_1.setTransform(364.65,-111.45,1,1,0,0,0,292.2,186.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CloudCombined, new cjs.Rectangle(-306,-527.5,587,1154.5), null);


(lib.bluePlane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"spin":5,"respawn":10,"explode":50});

	// timeline functions:
	this.frame_9 = function() {
		this.gotoAndPlay("begin");
	}
	this.frame_49 = function() {
		this.gotoAndPlay("begin");
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(40).call(this.frame_49).wait(15).call(this.frame_64).wait(1));

	// motion_tween
	this.instance = new lib.Symbol9();
	this.instance.setTransform(0,0,1,1,0,0,0,40,31);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(1).to({regX:39.9,x:-0.1,alpha:0.8889},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.07},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.42},0).wait(1).to({alpha:0.49},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.49},0).wait(1).to({alpha:0.42},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.07},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.0967},0).wait(1).to({alpha:0.1933},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.3867},0).wait(1).to({alpha:0.4833},0).wait(1).to({alpha:0.58},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(15));

	// Layer_2
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(-2.25,-1.6,1,1,0,0,0,12.5,12.5);
	this.instance_1.alpha = 0.1797;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).wait(1).to({scaleX:1.1314,scaleY:1.1465,x:-2.2,y:-1.55,alpha:0.24},0).wait(1).to({scaleX:1.2628,scaleY:1.2929,y:-1.6,alpha:0.3},0).wait(1).to({scaleX:1.3942,scaleY:1.4394,y:-1.55,alpha:0.36},0).wait(1).to({scaleX:1.5255,scaleY:1.5858,x:-2.25,y:-1.6,alpha:0.42},0).wait(1).to({scaleX:1.6569,scaleY:1.7323,alpha:0.48},0).wait(1).to({scaleX:1.7883,scaleY:1.8788,y:-1.55,alpha:0.54},0).wait(1).to({scaleX:1.9197,scaleY:2.0252,x:-2.2,y:-1.6,alpha:0.6},0).wait(1).to({scaleX:2.0511,scaleY:2.1717,y:-1.55,alpha:0.66},0).wait(1).to({scaleX:2.1825,scaleY:2.3182,alpha:0.72},0).wait(1).to({scaleX:2.3138,scaleY:2.4646,x:-2.25,y:-1.6,alpha:0.78},0).wait(1).to({scaleX:2.4452,scaleY:2.6111,y:-1.55,alpha:0.84},0).wait(1).to({scaleX:2.5766,scaleY:2.7575,y:-1.6,alpha:0.9},0).wait(1).to({scaleX:2.708,scaleY:2.904,x:-2.2,alpha:0.96},0).to({_off:true},1).wait(1));

	// main
	this.instance_2 = new lib.CachedBmp_8();
	this.instance_2.setTransform(-40,-31,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_9();
	this.instance_3.setTransform(-40,-31,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_10();
	this.instance_4.setTransform(-40,-31,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},5).to({state:[]},5).to({state:[{t:this.instance_4}]},40).to({state:[]},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-37.9,80,72.6);


(lib.BlueButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("pressButton");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.Symbol9();
	this.instance.setTransform(0,0,1,1,0,0,0,40,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:30.9,scaleX:1.05,scaleY:1.0645,y:-0.1},0).wait(1).to({regY:31,scaleX:1,scaleY:1,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-33,83.9,66);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_layer (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnDAu4MAAAhdvMBOHAAAMAAABdvg");

	// foreground
	this.instance = new lib.CloudCombined();
	this.instance.setTransform(7.9,-125.8,1,1,0,0,0,-14.1,352.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-12.6,regY:49.7,x:9.4,y:-423},0).wait(1).to({y:-417.7},0).wait(1).to({y:-412.45},0).wait(1).to({y:-407.15},0).wait(1).to({y:-401.9},0).wait(1).to({y:-396.6},0).wait(1).to({y:-391.35},0).wait(1).to({y:-386.05},0).wait(1).to({y:-380.8},0).wait(1).to({y:-375.5},0).wait(1).to({y:-370.2},0).wait(1).to({y:-364.95},0).wait(1).to({y:-359.65},0).wait(1).to({y:-354.4},0).wait(1).to({y:-349.1},0).wait(1).to({y:-343.85},0).wait(1).to({y:-338.55},0).wait(1).to({y:-333.3},0).wait(1).to({y:-328},0).wait(1).to({y:-322.7},0).wait(1).to({y:-317.45},0).wait(1).to({y:-312.15},0).wait(1).to({y:-306.9},0).wait(1).to({y:-301.6},0).wait(1).to({y:-296.35},0).wait(1).to({y:-291.05},0).wait(1).to({y:-285.8},0).wait(1).to({y:-280.5},0).wait(1).to({y:-275.2},0).wait(1).to({y:-269.95},0).wait(1).to({y:-264.65},0).wait(1).to({y:-259.4},0).wait(1).to({y:-254.1},0).wait(1).to({y:-248.85},0).wait(1).to({y:-243.55},0).wait(1).to({y:-238.3},0).wait(1).to({y:-233},0).wait(1).to({y:-227.7},0).wait(1).to({y:-222.45},0).wait(1).to({y:-217.15},0).wait(1).to({y:-211.9},0).wait(1).to({y:-206.6},0).wait(1).to({y:-201.35},0).wait(1).to({y:-196.05},0).wait(1).to({y:-190.8},0).wait(1).to({y:-185.5},0).wait(1).to({y:-180.2},0).wait(1).to({y:-174.95},0).wait(1).to({y:-169.65},0).wait(1).to({y:-164.4},0).wait(1).to({y:-159.1},0).wait(1).to({y:-153.85},0).wait(1).to({y:-148.55},0).wait(1).to({y:-143.3},0).wait(1).to({y:-138},0).wait(1).to({y:-132.7},0).wait(1).to({y:-127.45},0).wait(1).to({y:-122.15},0).wait(1).to({y:-116.9},0).wait(1).to({y:-111.6},0).wait(1).to({y:-106.35},0).wait(1).to({y:-101.05},0).wait(1).to({y:-95.8},0).wait(1).to({y:-90.5},0).wait(1).to({y:-85.2},0).wait(1).to({y:-79.95},0).wait(1).to({y:-74.65},0).wait(1).to({y:-69.4},0).wait(1).to({y:-64.1},0).wait(1).to({y:-58.85},0).wait(1).to({y:-53.55},0).wait(1).to({y:-48.3},0).wait(1).to({y:-43},0).wait(1).to({y:-37.7},0).wait(1).to({y:-32.45},0).wait(1).to({y:-27.15},0).wait(1).to({y:-21.9},0).wait(1).to({y:-16.6},0).wait(1).to({y:-11.35},0).wait(1).to({y:-6.05},0).wait(1).to({y:-0.8},0).wait(1).to({y:4.5},0).wait(1).to({y:9.8},0).wait(1).to({y:15.05},0).wait(1).to({y:20.35},0).wait(1).to({y:25.6},0).wait(1).to({y:30.9},0).wait(1).to({y:36.15},0).wait(1).to({y:41.45},0).wait(1).to({y:46.7},0).wait(1).to({y:51.95},0).wait(1).to({y:57.25},0).wait(1).to({y:62.5},0).wait(1).to({y:67.8},0).wait(1).to({y:73.05},0).wait(1).to({y:78.35},0).wait(1).to({y:83.6},0).wait(1).to({y:88.9},0).wait(1).to({y:94.15},0).wait(1).to({y:99.45},0).wait(1).to({y:104.75},0).wait(1).to({y:110},0).wait(1).to({y:115.3},0).wait(1).to({y:120.55},0).wait(1).to({y:125.85},0).wait(1).to({y:131.1},0).wait(1).to({y:136.4},0).wait(1).to({y:141.65},0).wait(1).to({y:146.95},0).wait(1).to({y:152.25},0).wait(1).to({y:157.5},0).wait(1).to({y:162.8},0).wait(1).to({y:168.05},0).wait(1).to({y:173.35},0).wait(1).to({y:178.6},0).wait(1).to({y:183.9},0).wait(1).to({y:189.15},0).wait(1).to({y:194.45},0).wait(1).to({y:199.75},0).wait(1));

	// background
	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(-250,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-300,500,600);


// stage content:
(lib.demo2A4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:0,instruction:5,selection:10,play:15,gameOver:20,horizontal:0,vertical:15});

	// timeline functions:
	this.frame_0 = function() {
		// Kim Zuniga
		thisGame = this;
		thisGame.stop();
		
		// Set and loop through intro music
		var props = new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 0.8})
		thisGame.introMusic = createjs.Sound.play("introMusic", props);
		
		thisGame.start.addEventListener("click", startGame);
		thisGame.manual.addEventListener("click", goToInstruction);
		
		function startGame()
		{
			thisGame.gotoAndStop("selection");
		}
		
		function goToInstruction()
		{
			thisGame.gotoAndStop("instruction");
		}
	}
	this.frame_5 = function() {
		thisGame.stop();
	}
	this.frame_10 = function() {
		thisGame.stop();
		
		thisGame.selectedPlane = null;
		
		thisGame.redPlane.addEventListener("click", selectRed);
		thisGame.bluePlane.addEventListener("click", selectBlue);
		
		function selectRed()
		{
			thisGame.selectedPlane = "redPlane";
			thisGame.redPlane.removeEventListener("click", selectRed);
			thisGame.bluePlane.removeEventListener("click", selectBlue);
			thisGame.introMusic.stop();
			thisGame.introMusic = null;
			thisGame.gotoAndStop("play");
		}
		
		function selectBlue()
		{
			thisGame.selectedPlane = "bluePlane";
			thisGame.redPlane.removeEventListener("click", selectRed);
			thisGame.bluePlane.removeEventListener("click", selectBlue);
			thisGame.introMusic.stop();
			thisGame.introMusic = null;
			thisGame.gotoAndStop("play");
		}
	}
	this.frame_15 = function() {
		// Global variables
		thisGame = this;
		thisGame.stop();
		thisGame.score;
		console.log("Here at play frame");
		// Game Music
		// Enables the music to loop
		var props = new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 0.8})
		
		// constants
		var width = 900;
		var height = 500;
		const STOP = 0;
		const WEST = 1;
		const EAST = 2;
		const missileStart = 8; // missile speed
		const missileLoaded = 12; // boosted missile speed
		
		// Declare edge of game's stage
		var stageLeft;
		var stageRight;
		
		// References of objects
		var player;
		var missileOne = thisGame.missileOne;
		var missileTwo = thisGame.missileTwo;
		var missileArray;
		var nextButton = thisGame.nextButton;
		var nextText = thisGame.nextText;
		
		// Declare missile's attributes
		var missilePosition;
		var missileNum;
		var noAmmo;
		
		// Dragon
		var numDragons;
		var dragonArray;
		
		//var dragon = thisGame.greenDragon;
		var dragonSpeed;
		var dragonKilled;
		var dragonCombo;
		
		// Direction where the player moves (left or right)
		var steerLeft;
		var steerRight;
		var moveSound;
		
		// Reference of the background object
		var background = thisGame.background;
		
		// Score
		var scoreText = thisGame.scoreText;
		const baseScore = 50;
		var scoreMultiplier = 1; // changes based on difficulty
		var scoreReduction = 0.95; // reduce current score to this value
		
		// Base lives
		var hearts = [thisGame.heartOne, thisGame.heartTwo, thisGame.heartThree];
		var gainLife;
		
		// Game status
		var gameOver;
		var gameOverImage;
		
		// Initialize the game
		init();
		
		// Initial the game
		function init()
		{	
			// Event Listeners
			window.addEventListener("keydown", movePlane);
			window.addEventListener("keydown", releaseMissile);
			thisGame.addEventListener("tick", gamePlay);
			nextButton.addEventListener("click", goNext);
			
			// Initialize music
			thisGame.gameMusic = createjs.Sound.play("gameMusic", props);
			
			// Sound effect for plane changing direction
			moveSound = null;
			
			// initialize score to 0
			thisGame.score = 0;
			gameOverImage = null;
			
			// Next button
			nextButton.visible = false;
			nextText.visible = false;
			
			// player
			if(thisGame.selectedPlane == "redPlane")
			{
				player = new lib.redPlane();
			}
			else if(thisGame.selectedPlane == "bluePlane")
			{
				player = new lib.bluePlane();
			}
			
			player.height = 62;
			player.width = 80;
			player.halfHeight = player.height / 2;
			player.halfWidth = player.width / 2;
			player.x = 450;
			player.y = height - player.height / 2 - 10;
			player.direction = STOP;
			player.speed = 0;
			steerLeft = -10; // move player left
			steerRight = 10; // move player right
			player.isAlive = true;
			player.lives = 3; // Player's lives
			player.isImmune = false;
			player.hit = null;
			player.health = null;
			player.visible = true;
			stage.addChild(player);
			
			// background
			background.width = 500;
			background.height = 600;
			background.x = width / 2;
			background.y = height / 2;
			
			// Co-ordinates of stage's left and right edges
			stageLeft = (width - background.width) / 2;
			stageRight = width / 2 + background.width / 2;
			
			// Initialize missile array
			missileArray = [];
			noAmmo = null;
			
			// missile #1
			missileOne.width = 35;
			missileOne.height = 45;
			missileOne.x = 830;
			missileOne.y = 110;
			missileOne.halfWidth = missileOne.width / 2;
			missileOne.halfHeight = missileOne.height / 2;
			missileOne.speed = missileStart;
			missileOne.isFired = false;
			missileOne.isPriority = true; // Fire missile one first
			missileOne.collided = false;
			missileOne.releaseMissile = null;
			missileOne.explosion = null;
			missileOne.gotoAndStop("begin");
			
			// missile #2
			missileTwo.width = 35;
			missileTwo.height = 45;
			missileTwo.x = 870;
			missileTwo.y = 110;
			missileTwo.halfWidth = missileTwo.width / 2;
			missileTwo.halfHeight = missileTwo.height / 2;
			missileTwo.speed = missileStart;
			missileTwo.isFired = false;
			missileTwo.isPriority = false;
			missileTwo.collided = false;
			missileTwo.releaseMissile = null;
			missileTwo.explosion = null;
			missileTwo.gotoAndStop("begin");
			
			missileArray.push(missileOne);
			missileArray.push(missileTwo);
			
			// Default missiles' attribute's value
			missilePosition = 830; // Default x co-ordinate of missiles
			missileNum = 2; // Default amount of missiles (ammo)
			
			// Green dragon
			numDragons = 1;
			dragonSpeed = 4;
			dragonKilled = 0;
			dragonArray = [];
			dragonCombo = 0;
			dragonTrick = 0;
			createDragon();
			fireBall = null;
			
			
			
			// Base lives - reset to beginning frame
			hearts.forEach(
				heart => heart.gotoAndStop("begin")
			);
			
			gainLife = null;
			
			// Reset game status
			gameOver = false;
		}
		
		function goNext()
		{
			missileArray.length = 0;
			stage.removeChild(gameOverImage);
			player.direction = STOP;
			
			dragonArray.forEach(dragon =>{
				removeFireBall(dragon);
				stage.removeChild(dragon);
			});
			
			stage.removeChild(player);
			thisGame.removeAllEventListeners();
			thisGame.gotoAndStop("gameOver");
		}
		
		// Call all functions that plays the game
		function gamePlay()
		{
			moveSprite(player);
			
			dragonArray.forEach( dragon => {
				moveDragon(dragon);
				checkDragonPassed(dragon);
				
				if(gameOver == false)
				{
					checkCollision(dragon);
				}
				
			});
			
			
			checkMissile();
		}
		
		// Update value of dynamic text score
		function updateScore()
		{
			scoreText.text = thisGame.score;
		}
		
		// Check if the game is over ( player is hit by dragon or 3 dragons destroyed the base)
		function checkGameOver()
		{
			if(player.lives <= 0)
			{
				addGameOver();
				thisGame.gameMusic.volume = 0.6;
				player.gotoAndPlay("explode");
				createjs.Sound.play("gameOverSound");
				setTimeout(resumeGameSound, 3000);
				player.isAlive = false;
				player.direction = STOP;
				player.maxSpeed = false;
				player.speed = 0;
				gameOver = true;
				nextButton.visible = true;
				nextText.visible = true;
			}
		}
		
		function resumeGameSound()
		{
			thisGame.gameMusic.volume = 1;
		}
		
		// Check for buttons pressed to move or stop the player
		function movePlane(e)
		{
			if  (e.keyCode==37 && player.x > stageLeft + player.halfWidth && player.isAlive == true)  // left arrow pressed
			{
				console.log(player.speed);
				if (player.direction != WEST)
				{
					if(moveSound == null)
					{
						moveSound = createjs.Sound.play("steerSound");
						moveSound.volume = 0.3;
					}
					else
					{
						moveSound.stop();
						moveSound.play();
					}
					
					player.direction = WEST;
					player.speed = steerLeft;
					player.maxSpeed = false;
				}
				else if (player.direction == WEST && player.maxSpeed == false)
				{
					player.speed -= 5;
					player.maxSpeed = true;
				}
			}
			else  if  (e.keyCode==39 && player.x < stageRight - player.halfWidth && player.isAlive == true)  // right arrow pressed
			{
				if (player.direction != EAST)
				{
					if(moveSound == null)
					{
						moveSound = createjs.Sound.play("steerSound");
						moveSound.volume = 0.3;
					}
					else
					{
						moveSound.stop();
						moveSound.play();
					}
					
					player.direction = EAST;
					player.speed = steerRight;
					player.maxSpeed = false;
				}
				else if (player.direction == EAST && player.maxSpeed == false)
				{
					player.speed += 5;
					player.maxSpeed = true;
				}
			}
			else if (e.keyCode == 40) // down button pressed
			{
				if(moveSound != null)
				{
					moveSound.stop();
				}
				
				player.direction = STOP;
			}
		}
		
		// Check if up arrows is pressed, release missiles 1 at a time if loaded
		function releaseMissile(e)
		{
			if (e.keyCode == 32 && player.isAlive == true)
			{
					if(missileOne.isFired == true && missileTwo.isFired == true && missileNum == 0)
					{
						if(noAmmo == null)
						{
							noAmmo = createjs.Sound.play("noAmmo");
						}
						else
						{
							noAmmo.play();
						}
					}
					
					missileArray.forEach(missile =>{
						if(missile.isFired == false && missile.isPriority == true)
						{
							missile.x = player.x;
							missile.y = player.y - player.height - 10;
							missile.isFired = true;
							missileNum--;
							missile.isPriority = false;
							
							if(missile.releaseMissile == null)
							{
								missile.releaseMissile = new createjs.Sound.play("releaseMissile");
							}
							else
							{
								missile.releaseMissile.stop();
								missile.releaseMissile.play();
							}
						}
						else
						{
							missile.isPriority = true;
						}
					});
			}
		}
		
		// Move the player left or right or stay in place
		function  moveSprite(sprite)
		{
			if (sprite.direction != STOP)
			{
				sprite.x  +=  sprite.speed;	//move  the  sprite
			}
			
			if  (sprite.x  <=  stageLeft + player.halfWidth)	//wrap 
			{
				sprite.x  =  stageLeft + player.width / 2;
				sprite.direction = STOP;
			}
			else  if  (sprite.x  >=  stageRight - player.halfWidth)
			{
				sprite.x  =  stageRight - player.halfWidth;
				sprite.direction = STOP;
			}
			
		}
		
		// Move the missiles, and return to proper loaded area accordingly
		function checkMissile()
		{
		
			if(missileNum == 1)
			{
				missilePosition = 830;
			}
			else if (missileNum == 0)
			{
				missilePosition = 870;
			}
			
			if(missileOne.isFired == true)
			{
				moveMissile(missileOne);
				
				// If missile missed
				if(missileOne.y < 0 - missileOne.height /2)
				{
					if (missileOne.visible == true)
					{
						thisGame.score *= scoreReduction;
						thisGame.score = Math.floor(thisGame.score);
						// Make sure score doesn't become negative
						if(thisGame.score <= 0)
						{
							thisGame.score = 0;
						}
					}
					
					returnMissile(missileOne);
					if (missileNum == 2)
					{
						missileOne.isPriority = true;
						missileTwo.isPriority = false;
					}
				}
			}
			
			if (missileTwo.isFired == true)
			{
				moveMissile(missileTwo);
				
				// If missile missed
				if(missileTwo.y < 0 - missileTwo.height /2)
				{
					if (missileTwo.visible == true)
					{
						thisGame.score *= scoreReduction;
						thisGame.score = Math.floor(thisGame.score);
						// Make sure score doesn't become negative
						if(thisGame.score <= 0)
						{
							thisGame.score = 0;
						}
					}
					
					returnMissile(missileTwo);
					if (missileNum == 2)
					{
						missileOne.isPriority = false;
						missileTwo.isPriority = true;
					}
				}
			}
			
			// Make sure missile's animation is reset when not fired
			missileArray.forEach(missile => {
				if (missile.y > 300)
				{
					missile.gotoAndPlay("begin");
				}
			});
			
			updateScore();
		}
		
		function moveMissile(missile)
		{
			if(missile.speed > 0)
			{
				missile.y -= missile.speed;
			}
			
			if(missile.y < 300 && missile.y > 290)
			{
				missile.gotoAndPlay("startFire");
				missile.speed = missileLoaded;
			}
		}
		
		function returnMissile(missile)
		{
			missileNum++;
			missile.y = 110;
			missile.x = missilePosition;
			missile.gotoAndStop("begin");
			missile.isFired = false;
			missile.visible = true;
			missile.speed = missileStart;
			missile.collided = false;
		}
		
		// Create an instance of dragon
		function createDragon()
		{
			var dragon = new lib.dragon();
			dragon.width = 65;
			dragon.height = 75;
			dragon.halfWidth = dragon.width / 2;
			dragon.halfHeight = dragon.height / 2;
			randomizeDragonSpeed(dragon);
			dragon.verticalSpeed = dragonSpeed + dragon.speed;
			dragon.horizontalSpeed = dragonSpeed + dragon.speed * 0.8;
			dragon.usedSkill = false;
			dragon.skill = 0;
			dragon.fireBall = null;
			dragon.fired = false;
			createExplosion(dragon);
			stage.addChild(dragon);
			generateDragon(dragon);
			dragonArray.push(dragon);
		}
		
		function randomizeDragonSpeed(dragon)
		{
			dragon.speed = Math.floor(Math.random() * 2) + 1;
		}
		
		function createFireBall(dragon)
		{
			dragon.fireBall = new lib.fireBall();
			dragon.fireBall.width = 30;
			dragon.fireBall.height = 40;
			dragon.fireBall.x = dragon.x;
			dragon.fireBall.y = dragon.y + dragon.halfHeight;
			dragon.fireBall.halfWidth = dragon.fireBall.width / 2;
			dragon.fireBall.halfHeight = dragon.fireBall.height / 2;
			dragon.fireSpeed = dragonSpeed + 5;
			dragon.fired = true;
			stage.addChild(dragon.fireBall);
		}
		
		function moveFireBall(dragon)
		{
			dragon.fireBall.y += dragon.fireSpeed;
		}
		
		// Respawn dragon at the top of stage randomly
		function generateDragon(dragon)
		{
			randomizeDragonSpeed(dragon);
			// Place dragon at random location above the stage
			dragon.x = Math.floor(Math.random() 
					  * (stageRight - stageLeft - dragon.halfWidth))
					  + (stageLeft + dragon.halfWidth);
		
			dragon.y = -(Math.floor(Math.random() * 400) + 150);
			
			dragon.usedSkill = false;
			dragon.skill = Math.floor(Math.random() * 2) + 1;
			dragon.gotoAndPlay("start");
			containDragon(dragon);
		}
		
		function containDragon(dragon)
		{
			// Make sure the dragon doesn't go over the stage
			if (dragon.x > stageRight - dragon.halfWidth)
			{
				dragon.x = stageRight - dragon.halfWidth;
			}
			else if (dragon.x < stageLeft + dragon.halfWidth)
			{
				dragon.x = stageLeft + dragon.halfWidth;
			}
		}
		
		// Move the dragon and activate it's skill on chance
		function moveDragon(dragon)
		{
			dragon.y += dragon.verticalSpeed;
			
			dragon.x += dragon.horizontalSpeed;
			
			if(dragon.fired == true)
			{
				moveFireBall(dragon);
			}
			
			// Dragon's skill is maneuvering
			if(dragon.skill == 1 && dragon.usedSkill == false && dragon.y > 50)
			{
				var rand = Math.floor(Math.random() * 300) + 1;
				
				if(rand > 280)
				{
					if(dragon.horizontalSpeed == -(dragonSpeed + dragon.speed))
					{
						dragon.horizontalSpeed = +(dragonSpeed + dragon.speed);
					}
					else if(dragon.horizontalSpeed == (dragonSpeed + dragon.speed))
					{
						dragon.horizontalSpeed = -(dragonSpeed + dragon.speed);
					}
					
					dragon.usedSkill = true;
				}
			}
			else if(dragon.skill == 2 && dragon.usedSkill == false 
					&& dragon.y > 0 && dragon.y < 300)
			{
				// Dragon's skill is fireball
				var rand = Math.floor(Math.random() * 300) + 1;
				
				if(rand > 295)
				{
					dragon.usedSkill = true;
					createjs.Sound.play("dragonFire");
					createFireBall(dragon);
				}
			}
			
			if(dragon.x >= stageRight - dragon.halfWidth)
			{
				dragon.horizontalSpeed = -(dragonSpeed + dragon.speed);
			}
			else if(dragon.x <= stageLeft + dragon.halfWidth)
			{
				dragon.horizontalSpeed = dragonSpeed + dragon.speed;
			}
		}
		
		function createExplosion(dragon)
		{
			dragon.explosion = new lib.explosion();
			dragon.explosion.y = -100;
			dragon.explosion.x = -100;
			dragon.explosion.visible = false;
			stage.addChild(dragon.explosion);
		}
		
		// Move explosion image to dragon
		function moveExplosion(dragon)
		{
			dragon.explosion.y = dragon.y;
			dragon.explosion.x = dragon.x;
			dragon.explosion.visible = true;
		}
		
		// Remove explosion image
		function removeExplosion(dragon)
		{
			dragon.explosion.y = -100;
			dragon.explosion.x = -100;
			dragon.explosion.visible = false;
		}
		
		// Check for collision between missiles, player, dragon, and fireball
		function checkCollision(dragon)
		{
			
			// Dragon hit by missile
			missileArray.forEach( missile => {
					if (missile.y - missile.halfHeight < dragon.y + dragon.halfHeight - 25
						&& (missile.x  >= dragon.x - dragon.halfWidth - 2
							&& missile.x <= dragon.x + dragon.halfWidth + 2)
						&& dragon.y + dragon.halfHeight < player.y - player.halfHeight
						&& missile.collided == false
						&& missile.y != dragon.y && dragon.y < missile.y
						)
					{
						missile.visible = false;
						missile.collided = true;
						
						dragonKilled++;
						dragonCombo++;
						moveExplosion(dragon);
						setTimeout(removeExplosion, 500, dragon);	
						
						// Only play the "dragon hit" sound when not hit
						if(dragon.hit == null)
						{
							dragon.hit = new createjs.Sound.play("hit");
						}
						else
						{
							missile.releaseMissile.stop();
							dragon.hit.stop();
							dragon.hit.play();
						}
						
						// Change difficulty
						if(dragonKilled == 5)
						{
							//Add extra dragon
							createDragon();
						}
						
						if (dragonKilled == 20)
						{
							dragonSpeed += dragonSpeed / 6;
							dragonKilled = 6;
						}
						
						
						// If player killed 5 dragons consecutively
						if(dragonCombo >= 5)
						{
							
							if(player.lives < 3)
							{
								if(gainLife == null)
								{
									gainLife = new createjs.Sound.play("gainLife");
								}
								else
								{
									gainLife.play();
								}
								
								hearts[player.lives].gotoAndStop("begin");
								player.lives++;
								dragonCombo = 0;
							}
						}
						
						generateDragon(dragon);
						thisGame.score += (baseScore * scoreMultiplier);
					}
			});
			
			// Dragon hits player
			if (player.y - player.halfHeight < dragon.y + dragon.halfHeight - 10
				&& (player.x >= dragon.x - dragon.halfWidth
					&& player.x <= dragon.x + dragon.halfWidth)
				&& player.isImmune == false
				)
			{
				
				if (gameOver == false)
				{
					// Play sound when player is hit
					if(player.hit == null)
					{
						player.hit = new createjs.Sound.play("playerHit");
					}
					else
					{
						player.hit.play();
					}
					// Play sound of health being removed
					if(player.health == null)
					{
						player.health = new createjs.Sound.play("healthReduce");
					}
					else
					{
						player.health.volume = 0.6;
						player.health.play();
					}
					
					player.isImmune = true;
					dragonCombo = 0; // reset combo counter
					moveExplosion(dragon);
					setTimeout(removeExplosion, 500, dragon);
					setTimeout(immunePlayer, 1400); // remove immunity after 1400ms
					generateDragon(dragon);
					player.gotoAndPlay("respawn");
					player.lives--;
					hearts[player.lives].play();
					checkGameOver();
				}
			}
			
			if(dragon.fired == true)
			{
				// Check if fireball hits the player
				if (player.y - player.halfHeight < dragon.fireBall.y + dragon.fireBall.halfHeight - 10
				&& (player.x >= dragon.fireBall.x - dragon.fireBall.halfWidth
					&& player.x <= dragon.fireBall.x + dragon.fireBall.halfWidth)
				&& player.isImmune == false
				)
				{
		
					// Play sound when player is hit
					if(player.hit == null)
					{
						player.hit = new createjs.Sound.play("playerHit");
					}
					else
					{
						player.hit.play();
					}
					
					// Play sound of health being removed
					if(player.health == null)
					{
						player.health = new createjs.Sound.play("healthReduce");
					}
					else
					{
						player.health.volume = 0.6;
						player.health.play();
					}	
					
					player.isImmune = true;
					dragonCombo = 0; // reset combo counter
					setTimeout(immunePlayer, 1400); // remove immunity after 1400ms
					removeFireBall(dragon);
					player.gotoAndPlay("respawn");
					player.lives--;
					hearts[player.lives].play();
					checkGameOver();
				}
				else if(height < dragon.fireBall.y) // Fireball misses player
				{
					removeFireBall(dragon);
				}
				
				// If missile hits a fireball
				missileArray.forEach(missile => {
					if (missile.y - missile.halfHeight < dragon.fireBall.y + dragon.fireBall.halfHeight - 10
					&& (missile.x >= dragon.fireBall.x - dragon.fireBall.halfWidth
						&& missile.x <= dragon.fireBall.x + dragon.fireBall.halfWidth)
					)
					{
						if(missile.explosion != null)
						{
							stage.removeChild(missile.explosion);
						}
						
						if(dragon.hit == null)
						{
							dragon.hit = new createjs.Sound.play("hit");
						}
						else
						{
							missile.releaseMissile.stop();
							dragon.hit.stop();
							dragon.hit.play();
						}
						
						missile.explosion = new lib.missileFireBall();
						missile.explosion.x = dragon.fireBall.x;
						missile.explosion.y = dragon.fireBall.y + dragon.fireBall.halfHeight;
						stage.addChild(missile.explosion);
						
						removeFireBall(dragon);
						missile.visible = false;
						missile.collided = true;
					}
				})
			}
			
			updateScore();
		}
		
		function removeFireBall(dragon)
		{
			dragon.fired = false;
			stage.removeChild(dragon.fireBall);
		}
		
		// Remove player immunity
		function immunePlayer()
		{
			player.isImmune = false;
		}
		
		// Check if dragon passed player
		function checkDragonPassed(dragon)
		{
			// Dragon passed player
			if (dragon.y - dragon.halfHeight > height && player.isImmune == false)
			{
				generateDragon(dragon);
				
				if (gameOver == false)
				{
					if(player.health == null)
					{
						player.health = new createjs.Sound.play("healthReduce");
					}
					else
					{
						player.health.volume = 1;
						player.health.play();
					}
					
					player.isImmune = true;
					setTimeout(immunePlayer, 1400);
					player.gotoAndPlay("respawn");
					player.lives--;
					dragonCombo = 0; // reset combo counter
					hearts[player.lives].play();
					checkGameOver();
				}
			}
		}
		
		function addGameOver()
		{
			gameOverImage = new lib.gameOver();
			gameOverImage.x = 450;
			gameOverImage.y = 215;
			stage.addChild(gameOverImage);
		}
	}
	this.frame_20 = function() {
		thisGame.stop();
		thisGame.scoreText.text = thisGame.score;
		
		var playerName = null;
		
		thisGame.home.addEventListener("click", goHome);
		thisGame.submitName.addEventListener("click", getName);
		
		function goHome()
		{
			thisGame.gameMusic.stop();
			thisGame.gameMusic = null;
			thisGame.submitName.visible = true;
			thisGame.submitText.visible = true;
			if(playerName != null)
			{
				playerName.disabled = false;
			}
			
			thisGame.submitName.removeEventListener("click", getName);
			thisGame.gotoAndStop("intro");
		}
		
		function getName()
		{	
			playerName = document.getElementById("playerName");
			alert("Congratulations " + playerName.value + "! You earned " + thisGame.score + " points!");
			thisGame.submitName.visible = false;
			thisGame.submitText.visible = false;
			thisGame.submitName.removeEventListener("click", getName);
			playerName.disabled = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5).call(this.frame_10).wait(5).call(this.frame_15).wait(5).call(this.frame_20).wait(5));

	// main_layer
	this.instance = new lib.info();
	this.instance.setTransform(541,361);

	this.instance_1 = new lib.start();
	this.instance_1.setTransform(293,361);

	this.manual = new lib.button();
	this.manual.name = "manual";
	this.manual.setTransform(566,371.75);
	new cjs.ButtonHelper(this.manual, 0, 1, 2);

	this.start = new lib.button();
	this.start.name = "start";
	this.start.setTransform(333,371.75);
	new cjs.ButtonHelper(this.start, 0, 1, 2);

	this.instance_2 = new lib.Title();
	this.instance_2.setTransform(450,175);

	this.instance_3 = new lib.Manual();
	this.instance_3.setTransform(450,250);

	this.instance_4 = new lib.select();
	this.instance_4.setTransform(335,168);

	this.bluePlane = new lib.BlueButton();
	this.bluePlane.name = "bluePlane";
	this.bluePlane.setTransform(530,300);
	new cjs.ButtonHelper(this.bluePlane, 0, 1, 2);

	this.redPlane = new lib.RedButton();
	this.redPlane.name = "redPlane";
	this.redPlane.setTransform(370,300);
	new cjs.ButtonHelper(this.redPlane, 0, 1, 2);

	this.instance_5 = new lib.CachedBmp_2();
	this.instance_5.setTransform(225,12.5,0.5,0.5);

	this.nextText = new lib.nextText();
	this.nextText.name = "nextText";
	this.nextText.setTransform(448,373,1,1,0,0,0,29,8);

	this.nextButton = new lib.button();
	this.nextButton.name = "nextButton";
	this.nextButton.setTransform(450,376);
	new cjs.ButtonHelper(this.nextButton, 0, 1, 2);

	this.instance_6 = new lib.score();
	this.instance_6.setTransform(800,430);

	this.missileTwo = new lib.Missile();
	this.missileTwo.name = "missileTwo";
	this.missileTwo.setTransform(870,110);

	this.heartThree = new lib.Heart();
	this.heartThree.name = "heartThree";
	this.heartThree.setTransform(802.3,31.3,1,1,0,0,0,0.1,0.1);

	this.instance_7 = new lib.HeartGreyed();
	this.instance_7.setTransform(802.3,41.25);

	this.heartTwo = new lib.Heart();
	this.heartTwo.name = "heartTwo";
	this.heartTwo.setTransform(837.3,31.3,1,1,0,0,0,0.1,0.1);

	this.instance_8 = new lib.HeartGreyed();
	this.instance_8.setTransform(837.3,41.25);

	this.heartOne = new lib.Heart();
	this.heartOne.name = "heartOne";
	this.heartOne.setTransform(872.3,31.3,1,1,0,0,0,0.1,0.1);

	this.instance_9 = new lib.HeartGreyed();
	this.instance_9.setTransform(872,41.25);

	this.scoreText = new cjs.Text("0", "normal 400 20px 'Press Start 2P'");
	this.scoreText.name = "scoreText";
	this.scoreText.textAlign = "right";
	this.scoreText.lineHeight = 30;
	this.scoreText.lineWidth = 160;
	this.scoreText.parent = this;
	this.scoreText.setTransform(885,462.7);
	if(!lib.properties.webfonts['Press Start 2P']) {
		lib.webFontTxtInst['Press Start 2P'] = lib.webFontTxtInst['Press Start 2P'] || [];
		lib.webFontTxtInst['Press Start 2P'].push(this.scoreText);
	}

	this.missileOne = new lib.Missile();
	this.missileOne.name = "missileOne";
	this.missileOne.setTransform(831.2,110);

	this.instance_10 = new lib.MissileGreyed();
	this.instance_10.setTransform(831.2,110);

	this.instance_11 = new lib.MissileGreyed();
	this.instance_11.setTransform(870,110);

	this.submitText = new lib.SubmitText();
	this.submitText.name = "submitText";
	this.submitText.setTransform(452.5,290,1,1,0,0,0,39.5,12);

	this.submitName = new lib.button();
	this.submitName.name = "submitName";
	this.submitName.setTransform(450,290);
	new cjs.ButtonHelper(this.submitName, 0, 1, 2);

	this.playerName = new lib.an_TextInput({'id': 'playerName', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.playerName.name = "playerName";
	this.playerName.setTransform(450,236,1,1,0,0,0,50,11);

	this.instance_12 = new lib.homeText();
	this.instance_12.setTransform(423,406,0.873,0.8333);

	this.home = new lib.button();
	this.home.name = "home";
	this.home.setTransform(450,415);
	new cjs.ButtonHelper(this.home, 0, 1, 2);

	this.instance_13 = new lib.pointsText();
	this.instance_13.setTransform(478,159,0.7778,0.8333);

	this.instance_14 = new lib.gameOverTwo();
	this.instance_14.setTransform(320,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.start},{t:this.manual},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_5},{t:this.redPlane},{t:this.bluePlane},{t:this.instance_4}]},5).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.missileOne},{t:this.scoreText,p:{x:885,y:462.7,text:"0",lineWidth:160}},{t:this.instance_9},{t:this.heartOne},{t:this.instance_8},{t:this.heartTwo},{t:this.instance_7},{t:this.heartThree},{t:this.missileTwo},{t:this.instance_6},{t:this.nextButton},{t:this.nextText}]},5).to({state:[{t:this.instance_5},{t:this.instance_14},{t:this.scoreText,p:{x:464.05,y:162,text:"",lineWidth:156}},{t:this.instance_13},{t:this.home},{t:this.instance_12},{t:this.playerName},{t:this.submitName},{t:this.submitText}]},5).wait(5));

	// mask_play (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_10 = new cjs.Graphics().p("EgnDAu4MAAAhdvMBOHAAAMAAABdvg");
	var mask_graphics_11 = new cjs.Graphics().p("EgnDAu4MAAAhdvMBOHAAAMAAABdvg");
	var mask_graphics_12 = new cjs.Graphics().p("EgnDAu4MAAAhdvMBOHAAAMAAABdvg");
	var mask_graphics_13 = new cjs.Graphics().p("EgnDAu4MAAAhdvMBOHAAAMAAABdvg");
	var mask_graphics_14 = new cjs.Graphics().p("EgnDAu4MAAAhdvMBOHAAAMAAABdvg");
	var mask_graphics_15 = new cjs.Graphics().p("EgnDAu4MAAAhdvMBOHAAAMAAABdvg");
	var mask_graphics_16 = new cjs.Graphics().p("EgnDAu4MAAAhdvMBOHAAAMAAABdvg");
	var mask_graphics_17 = new cjs.Graphics().p("EgnDAu4MAAAhdvMBOHAAAMAAABdvg");
	var mask_graphics_18 = new cjs.Graphics().p("EgnDAu4MAAAhdvMBOHAAAMAAABdvg");
	var mask_graphics_19 = new cjs.Graphics().p("EgnDAu4MAAAhdvMBOHAAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:450,y:249.975}).wait(1).to({graphics:mask_graphics_11,x:450,y:249.975}).wait(1).to({graphics:mask_graphics_12,x:450,y:249.975}).wait(1).to({graphics:mask_graphics_13,x:450,y:249.975}).wait(1).to({graphics:mask_graphics_14,x:450,y:249.975}).wait(1).to({graphics:mask_graphics_15,x:450,y:249.975}).wait(1).to({graphics:mask_graphics_16,x:450,y:249.975}).wait(1).to({graphics:mask_graphics_17,x:450,y:249.975}).wait(1).to({graphics:mask_graphics_18,x:450,y:249.975}).wait(1).to({graphics:mask_graphics_19,x:450,y:249.975}).wait(6));

	// play_layer
	this.explosion = new lib.explosion();
	this.explosion.name = "explosion";
	this.explosion.setTransform(-42.35,37.5);
	this.explosion._off = true;

	var maskedShapeInstanceList = [this.explosion];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.explosion).wait(10).to({_off:false},0).to({_off:true},5).wait(10));

	// main_background
	this.instance_15 = new lib.IntroBG();
	this.instance_15.setTransform(263.55,257.3,1,1,0,0,0,-21.8,-66.5);

	this.background = new lib.Background();
	this.background.name = "background";
	this.background.setTransform(450,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.background}]},15).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(616,-505.5,956.8,1055.5);
// library properties:
lib.properties = {
	id: '5157CCC23D14EA429E078C34E4344199',
	width: 900,
	height: 500,
	fps: 30,
	color: "#33CCFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/demo2_A4_atlas_.png", id:"demo2_A4_atlas_"},
		{src:"images/demo2_A4_atlas_2.png", id:"demo2_A4_atlas_2"},
		{src:"images/demo2_A4_atlas_3.png", id:"demo2_A4_atlas_3"},
		{src:"sounds/dragonFire.mp3", id:"dragonFire"},
		{src:"sounds/gainLife.mp3", id:"gainLife"},
		{src:"sounds/gameMusic.mp3", id:"gameMusic"},
		{src:"sounds/gameOverSound.mp3", id:"gameOverSound"},
		{src:"sounds/healthReduce.mp3", id:"healthReduce"},
		{src:"sounds/hit.mp3", id:"hit"},
		{src:"sounds/introMusic.mp3", id:"introMusic"},
		{src:"sounds/moveArrow.mp3", id:"moveArrow"},
		{src:"sounds/noAmmo.mp3", id:"noAmmo"},
		{src:"sounds/playerHit.mp3", id:"playerHit"},
		{src:"sounds/pressButton.mp3", id:"pressButton"},
		{src:"sounds/releaseMissile.mp3", id:"releaseMissile"},
		{src:"sounds/steerSound.mp3", id:"steerSound"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5157CCC23D14EA429E078C34E4344199'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	if((this.stage == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element && this._element._attached) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	this._lastAddedFrame = this.parent.currentFrame;
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;