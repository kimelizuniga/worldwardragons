<!DOCTYPE html>
<!--
	NOTES:
	1. All tokens are represented by '$' sign in the template.
	2. You can write your code only wherever mentioned.
	3. All occurrences of existing tokens will be replaced by their appropriate values.
	4. Blank lines will be removed automatically.
	5. Remove unnecessary comments before creating your template.
-->
<html>
<head>
<?php 
	// Disable cache
	header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
	header("Pragma: no-cache"); // HTTP 1.0.
	header("Expires: 0"); // Proxies.
?>
<meta charset="UTF-8">
<meta name="authoring-tool" content="Adobe_Animate_CC">
<title>World War Dragons</title>
<!-- write your code here -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">


<style>
  #animation_container, #_preload_div_ {
	position:absolute;
	margin:auto;
	left:0;right:0;
	top:0;bottom:0;
  }
</style>
<link rel="stylesheet" href="assets/styles/styles.css">
<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script>
function LoadGFonts(families, comp) {				
	var lib=comp.getLibrary();				
	var googleObject = {type: "Google", loadedFonts: 0, totalFonts: families.length, callOnLoad: lib.gfontAvailable};				
	for(var i =0; i < families.length; i++)				
		isFontAvailable(gFontsFamilies[i], googleObject);				
}
function isFontAvailable(font, obj) {				
	var timeOut = 5000;				
	var delay = 200;				
	var interval = 0;				
	var timeElapsed = 0;				
	function checkFont() {				
		var node = document.createElement("span");				
		node.innerHTML = "giItT1WQy@!-/#";				
		node.style.position      = "absolute";				
		node.style.left          = "-1000px";				
		node.style.top           = "-1000px";				
		node.style.fontSize      = "300px";				
		node.style.fontFamily    = "sans-serif";				
		node.style.fontVariant   = "normal";				
		node.style.fontStyle     = "normal";				
		node.style.fontWeight    = "normal";				
		node.style.letterSpacing = "0";				
		document.body.appendChild(node);				
		var width = node.offsetWidth;				
		node.style.fontFamily = font+","+node.style.fontFamily;				
		var returnVal = false;				
		if((node && node.offsetWidth != width) || timeElapsed >=timeOut) {				
			obj.loadedFonts++;				
			if(interval)				
				clearInterval(interval);				
			obj.callOnLoad(font, obj.totalFonts);				
			returnVal = true;				
		}				
		if(node) {				
			node.parentNode.removeChild(node);				
			node = null;				
		}				
		timeElapsed += delay;				
		return returnVal;				
	}				
	if(!checkFont()) {				
		interval = setInterval(checkFont, delay);				
	}				
}
</script>
<script>
	var gFontsFamilies = ["Press Start 2P"];
</script>
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Press+Start+2P:regular&subset=latin">
<script src="assets/scripts/demo2_A4.js"></script>

<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("5157CCC23D14EA429E078C34E4344199");
	var lib=comp.getLibrary();
	try {
		if(!(typeof gFontsFamilies === 'undefined' || gFontsFamilies === null))
			LoadGFonts(gFontsFamilies, comp);		
		if(!(typeof totalTypekitFonts === 'undefined' || totalTypekitFonts === null)) {			
			var typekitObject = {type: 'Typekit', loadedFonts: 0, totalFonts: totalTypekitFonts, callOnLoad: lib.tfontAvailable};		
			Typekit.load({
			async: true,
			'fontactive': function(family) {
				isFontAvailable(family, typekitObject);
				}
			});
		}
	} catch(e) {};
	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	var preloaderDiv = document.getElementById("_preload_div_");
	preloaderDiv.style.display = 'none';
	dom_overlay_container.style.display = canvas.style.display = 'block';
	exportRoot = new lib.demo2A4();
	stage = new lib.Stage(canvas);
	stage.enableMouseOver();	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(true,'both',false,1,[canvas,preloaderDiv,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
function playSound(id, loop) {
	return createjs.Sound.play(id, {'interrupt':createjs.Sound.INTERRUPT_EARLY, 'loop': loop});}
</script>
<!-- write your code here -->
</head>
<body onload="init();" style="margin:0px;">
	<div class="button">
		<button class="highScore" tabindex="-1" id="highScore">VIEW HIGHSCORE</button>
	</div>
	<div id="myModal" class="modal">
		<section class="modal-content">
			<span id="close" class="close">&times;</span>
			<h3>High Score</h3>
			<div id="row" class="row">
				
			</div>
			
			<div class="score-nav row">
				<div class="page-col">
					<button id="prev" class="prev"><</button>
				</div>
				<div class="page-col">
					<button id="next" class="next">></button>
				</div>
			</div>
		</section>
	</div>
	<div id="animation_container" style="background-color:rgba(51, 204, 255, 1.00); width:900px; height:500px">
		<canvas id="canvas" width="900" height="500" style="position: absolute; display: none; background-color:rgba(51, 204, 255, 1.00);"></canvas>
		<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:900px; height:500px; position: absolute; left: 0px; top: 0px; display: none;">
		</div>
	</div>
    <div id='_preload_div_' style='position:absolute; top:0; left:0; display: inline-block; height:500px; width: 900px; text-align: center;'>	<span style='display: inline-block; height: 100%; vertical-align: middle;'></span>	<img src=images/_preloader.gif style='vertical-align: middle; max-height: 100%'/></div>

	<!-- <div class="mobile-controls">
		<section>
			<button>LEFT</button>
			<button>RIGHT</button>
		</section>
		<section>
			<button>DOWN</button>
		</section>
		<section class="spacebar">
			<button>SPACEBAR</button>
		</section>
	</div> -->
	<footer>
		© <span id="currentYear"></span> Kim Zuniga
	</footer>
	<script src="assets/scripts/index.js"></script>
	<script
  src="https://code.jquery.com/jquery-3.6.0.js"
  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
  crossorigin="anonymous"></script>
</body>
</html>