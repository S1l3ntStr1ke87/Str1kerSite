window.onload = function() {
    // Get the canvas and context
    var canvas = document.getElementById("viewport");
    var context = canvas.getContext("2d");
    
    // Timing and frames per second
    var lastframe = 0;
    var fpstime = 0;
    var framecount = 0;
    var fps = 0;
    
    var active = false;
    
    var drag = false;
    
    // Animation variables
    var animationstate = 0;
    var animationtime = 0;
    var animationtimetotal = 0.3;
    
    // Images
    
    var age = 0;
    var glasses = false;
    var shirt = true;
    var vest = true;
    var cock = 0;
    var leftfeet = 0;
    var rightfeet = 0;
    var jeans = 0;
    var polar = 0;
    var work = 0;
    
    var blinky = 0;
    var textbubble = 0;
    var quote = "";
    var cum = 0;
    
    var armimages = ["./img/Arms/arms.png", "./img/Arms/polararms.png"];
    var blinkimages = ["./img/Blinks/blink1.png","./img/Blinks/blink2.png","./img/Blinks/blink3.png","./img/Blinks/blink4.png", "./img/Blinks/polar1.png","./img/Blinks/polar2.png","./img/Blinks/polar3.png","./img/Blinks/polar4.png"];
    var clothingimages = ["./img/Clothing/shirt.png", "./img/Clothing/vest.png", "./img/Clothing/shirt2.png"];
    var crotchimages = ["./img/Crotches/jeans.png", "./img/Crotches/bulge.png", "./img/Crotches/nude.png", "./img/Crotches/pants.png", "./img/Crotches/polarnude.png"];
    var earimages = ["./img/Ears/ears.png", "./img/Ears/glasses.png", "./img/Ears/polarears.png"];
    var genitalimages = ["./img/Genitals/bulge.png", "./img/Genitals/flaccid.png", "./img/Genitals/erect.png"];
    var headimages = ["./img/Heads/head1.png","./img/Heads/head2.png","./img/Heads/head3.png","./img/Heads/head4.png","./img/Heads/polar1.png","./img/Heads/polar2.png","./img/Heads/polar3.png","./img/Heads/polar4.png"];
    var leftfootimages = ["./img/LeftFeet/boot.png", "./img/LeftFeet/sock.png", "./img/LeftFeet/paw.png", "./img/LeftFeet/polarpaw.png"];
    var rightfootimages = ["./img/RightFeet/boot.png", "./img/RightFeet/sock.png", "./img/RightFeet/paw.png", "./img/RightFeet/polarpaw.png"];
    var leftlegimages = ["./img/LeftLegs/jeans.png", "./img/LeftLegs/undies.png", "./img/LeftLegs/nude.png", "./img/LeftLegs/pants.png", "./img/LeftLegs/polarundies.png", "./img/LeftLegs/polarnude.png"];
    var rightlegimages = ["./img/RightLegs/jeans.png", "./img/RightLegs/undies.png", "./img/RightLegs/nude.png", "./img/RightLegs/pants.png", "./img/RightLegs/polarundies.png", "./img/RightLegs/polarnude.png"];
    var torsoimages = ["./img/Torsos/belly.png", "./img/Torsos/belly2.png", "./img/Torsos/belly3.png", "./img/Torsos/belly4.png", "./img/Torsos/polarbelly.png", "./img/Torsos/polarbelly2.png", "./img/Torsos/polarbelly3.png", "./img/Torsos/polarbelly4.png"];
    var systemimages = ["./img/System/background.png", "./img/System/agebutton.png", "./img/System/resetbutton.png", "./img/System/workbutton.png", "./img/System/bearbutton.png", "./img/Whitestuff/cum.png"];
    
    //Remove shoes individually?
    
    var loadedimages = {
		arms: [],
		blinks: [],
		clothing: [],
		crotches: [],
		ears: [],
		genitals: [],
		heads: [],
		leftfeet: [],
		rightfeet: [],
		leftlegs: [],
		rightlegs: [],
		torso: [],
		system: []
    };
    
    function loadArmsAndTorso() {
		var loadedarmimage = new Image();
		loadedarmimage.onload = function () {
    		loadedimages.arms.push(loadedarmimage);
    		var loadedarmimage2 = new Image();
    		loadedarmimage2.onload = function () {
        		loadedimages.arms.push(loadedarmimage2);
        		loadTorsos();
        	}
    		loadedarmimage2.src = armimages[1];
    	}
		loadedarmimage.src = armimages[0];
    };
    
    function loadTorsos(imageindex) {
        if (!imageindex) {
        	imageindex = 0;
        }
        if (imageindex < torsoimages.length) {
        	var newimage = new Image();
        	newimage.onload = function () {
        		loadedimages.torso.push(newimage);
        		imageindex++;
        		loadTorsos(imageindex);
        	}
        	newimage.src = torsoimages[imageindex];
        } else {
        	loadBlinks();
        }
    };
    
    function loadBlinks(imageindex) {
        if (!imageindex) {
        	imageindex = 0;
        }
        if (imageindex < blinkimages.length) {
        	var newimage = new Image();
        	newimage.onload = function () {
        		loadedimages.blinks.push(newimage);
        		imageindex++;
        		loadBlinks(imageindex);
        	}
        	newimage.src = blinkimages[imageindex];
        } else {
        	loadClothes();
        }
    };
    
    function loadClothes(imageindex) {
        if (!imageindex) {
        	imageindex = 0;
        }
        if (imageindex < clothingimages.length) {
        	var newimage = new Image();
        	newimage.onload = function () {
        		loadedimages.clothing.push(newimage);
        		imageindex++;
        		loadClothes(imageindex);
        	}
        	newimage.src = clothingimages[imageindex];
        } else {
        	loadCrotches();
        }
    };
    
    function loadCrotches(imageindex) {
        if (!imageindex) {
        	imageindex = 0;
        }
        if (imageindex < crotchimages.length) {
        	var newimage = new Image();
        	newimage.onload = function () {
        		loadedimages.crotches.push(newimage);
        		imageindex++;
        		loadCrotches(imageindex);
        	}
        	newimage.src = crotchimages[imageindex];
        } else {
        	loadEars();
        }
    };
    
    function loadEars(imageindex) {
        if (!imageindex) {
        	imageindex = 0;
        }
        if (imageindex < earimages.length) {
        	var newimage = new Image();
        	newimage.onload = function () {
        		loadedimages.ears.push(newimage);
        		imageindex++;
        		loadEars(imageindex);
        	}
        	newimage.src = earimages[imageindex];
        } else {
        	loadGenitals();
        }
    };
    
    function loadGenitals(imageindex) {
        if (!imageindex) {
        	imageindex = 0;
        }
        if (imageindex < genitalimages.length) {
        	var newimage = new Image();
        	newimage.onload = function () {
        		loadedimages.genitals.push(newimage);
        		imageindex++;
        		loadGenitals(imageindex);
        	}
        	newimage.src = genitalimages[imageindex];
        } else {
        	loadHeads();
        }
    };
    
    function loadHeads(imageindex) {
        if (!imageindex) {
        	imageindex = 0;
        }
        if (imageindex < headimages.length) {
        	var newimage = new Image();
        	newimage.onload = function () {
        		loadedimages.heads.push(newimage);
        		imageindex++;
        		loadHeads(imageindex);
        	}
        	newimage.src = headimages[imageindex];
        } else {
        	loadLeftFeet();
        }
    };
    
    function loadLeftFeet(imageindex) {
        if (!imageindex) {
        	imageindex = 0;
        }
        if (imageindex < leftfootimages.length) {
        	var newimage = new Image();
        	newimage.onload = function () {
        		loadedimages.leftfeet.push(newimage);
        		imageindex++;
        		loadLeftFeet(imageindex);
        	}
        	newimage.src = leftfootimages[imageindex];
        } else {
        	loadRightFeet();
        }
    };
    
    function loadRightFeet(imageindex) {
        if (!imageindex) {
        	imageindex = 0;
        }
        if (imageindex < rightfootimages.length) {
        	var newimage = new Image();
        	newimage.onload = function () {
        		loadedimages.rightfeet.push(newimage);
        		imageindex++;
        		loadRightFeet(imageindex);
        	}
        	newimage.src = rightfootimages[imageindex];
        } else {
        	loadLeftLegs();
        }
    };
    
    function loadLeftLegs(imageindex) {
        if (!imageindex) {
        	imageindex = 0;
        }
        if (imageindex < leftlegimages.length) {
        	var newimage = new Image();
        	newimage.onload = function () {
        		loadedimages.leftlegs.push(newimage);
        		imageindex++;
        		loadLeftLegs(imageindex);
        	}
        	newimage.src = leftlegimages[imageindex];
        } else {
        	loadRightLegs();
        }
    };
    
    function loadRightLegs(imageindex) {
        if (!imageindex) {
        	imageindex = 0;
        }
        if (imageindex < rightlegimages.length) {
        	var newimage = new Image();
        	newimage.onload = function () {
        		loadedimages.rightlegs.push(newimage);
        		imageindex++;
        		loadRightLegs(imageindex);
        	}
        	newimage.src = rightlegimages[imageindex];
        } else {
        	loadSystem();
        }
    };
    
    function loadSystem(imageindex) {
        if (!imageindex) {
        	imageindex = 0;
        }
        if (imageindex < systemimages.length) {
        	var newimage = new Image();
        	newimage.onload = function () {
        		loadedimages.system.push(newimage);
        		imageindex++;
        		loadSystem(imageindex);
        	}
        	newimage.src = systemimages[imageindex];
        } else {
        	init();
        }
    };
    
    window.onresize = function() {
    	var canvasheight = window.innerHeight-5;
    	var canvaswidth = canvasheight/0.8376;
    	
    	
    	context.canvas.width  = canvaswidth;
    	context.canvas.height = canvasheight;
    };
    
    // Initialize the game
    function init() {
        // Add mouse events
    	document.getElementById("load").className  = "hide"
    		var canvasheight = window.innerHeight-5;
    	var canvaswidth = canvasheight/0.8376;
    	
    	context.canvas.width  = canvaswidth;
    	context.canvas.height = canvasheight;
    	
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", onMouseDown);
        canvas.addEventListener("mouseup", onMouseUp);
        canvas.addEventListener("mouseout", onMouseOut);
        
        // Enter main loop
        main(0);
    }
    
    // Main loop
    function main(tframe) {
        // Request animation frames
        window.requestAnimationFrame(main);
        
        // Update and render the game
        update(tframe);
        render();
    }
    
    var blinkcounter = 0;
    var sincounter = 0;
    
    // Update the game state
    function update(tframe) {
        active = true;
    	blinkcounter++;
        sincounter++;
        
        textbubble--;
        if (textbubble < 0) {
        	textbubble = 0;
        }
        
        blinky--;
        if (blinky < 0) {
        	blinky = 0;
        }
        
        if(blinkcounter > 200) {
        	blinkcounter = 0;
        }
    	
    	var dt = (tframe - lastframe) / 1000;
        lastframe = tframe;
        
        // Update the fps counter
        updateFps(dt);
    }
    
    function updateFps(dt) {
        if (fpstime > 0.25) {
            // Calculate fps
            fps = Math.round(framecount / fpstime);
            
            // Reset time and framecount
            fpstime = 0;
            framecount = 0;
        }
        
        // Increase time and framecount
        fpstime += dt;
        framecount++;
    }
    
    // Draw text that is centered
    function drawCenterText(text, x, y, width) {
        var textdim = context.measureText(text);
        context.fillText(text, x + (width-textdim.width)/2, y);
    }
    
    function drawBackground() {
    	context.drawImage(loadedimages.system[0], 0, 0, canvas.width, canvas.height);
    };
    
    function drawCrotch() {
    	var index = jeans;
    	if (jeans == 0 && work == 1) {
    		index = 3;
    	}
    	if (jeans == 2 && polar == 4) {
    		index = 4;
    	}
    	context.drawImage(loadedimages.crotches[index], 0, 0, canvas.width, canvas.height);
    };
    
    function drawArms() {
    	var index = 0;
    	if (polar) {
    		index = 1;
    	}
    	var width = (820/1250)*canvas.width;
    	var height = (499/1047)*canvas.height;
    	context.drawImage(loadedimages.arms[index], canvas.width*0.165, canvas.height*0.16, width, height);
    };
    
    function calculatebellyrise() {
    	return Math.sin(sincounter/50);
    };
    
    function calculateheadrise() {
    	return Math.sin(sincounter/100);
    };
    
    function drawBelly() {
    	var index = age+polar;
    	var yoffset = canvas.height*0.005*calculatebellyrise();
    	context.drawImage(loadedimages.torso[index], 0, 0+yoffset, canvas.width, canvas.height);
    };
    
    function drawCum() {
    	if (cum > 10) {
    		context.drawImage(loadedimages.system[5], 0, 0, canvas.width, canvas.height);
    	}
    };
    
    function drawClothing() {
    	var yoffset = (canvas.height*0.005*calculatebellyrise())+(canvas.height*0.005);
    	if (vest) {
    		context.drawImage(loadedimages.clothing[1], 0, 0+yoffset, canvas.width, canvas.height);
    	}
    	if(shirt) {
    		var index = 0;
    		if (work) {
    			index = 2;
    		}
    		context.drawImage(loadedimages.clothing[index], 0, 0+yoffset, canvas.width, canvas.height);
    	}
    };
    
    function drawLeftLeg() {
    	var index = jeans;
    	if (jeans == 0 && work) {
    		index = 3;
    	}
    	if (jeans == 1 && polar) {
    		index = 4;
    	}
    	if (jeans == 2 && polar) {
    		index = 5;
    	}
    	var width = (675/1250)*canvas.width;
    	var height = (707/1047)*canvas.height;
    	context.drawImage(loadedimages.leftlegs[index], 0, canvas.height*0.315, width, height);
    };
    
    function drawRightLeg() {
    	var index = jeans;
    	if (jeans == 0 && work) {
    		index = 3;
    	}
    	if (jeans == 1 && polar) {
    		index = 4;
    	}
    	if (jeans == 2 && polar) {
    		index = 5;
    	}
    	var width = (651/1250)*canvas.width;
    	var height = (716/1047)*canvas.height;
    	context.drawImage(loadedimages.rightlegs[index], canvas.width*0.5, canvas.height*0.315, width, height);
    };
    
    function getFootRotation() {
    	return Math.sin(sincounter/100)*5;
    };
    
    function drawLeftFoot() {
    	var index = leftfeet;
    	if (leftfeet == 2 && polar) {
    		index = 3;
    	}
    	context.save();
    	
    	var width = (519/1250)*canvas.width;
    	var height = (646/1047)*canvas.height;
    	context.translate(0+(width/2), canvas.height*0.4+(height*0.75));
    	context.rotate(getFootRotation()*(Math.PI/180));
    	context.drawImage(loadedimages.leftfeet[index], -1*width/2, -1*height*0.75, width, height);
    	context.restore();
    };
    
    function drawRightFoot() {
    	var index = rightfeet;
    	if (rightfeet == 2 && polar) {
    		index = 3;
    	}
    	context.save();
    	
    	var width = (529/1250)*canvas.width;
    	var height = (658/1047)*canvas.height;
    	context.translate(canvas.width*0.6+(width/2), canvas.height*0.4+(height*0.75));
    	context.rotate(getFootRotation()*-1*(Math.PI/180));
    	context.drawImage(loadedimages.rightfeet[index], -1*width/2, -1*height*0.75, width, height);
    	context.restore();
    };
    
    function drawGenitals() {
    	var width = (556/1250)*canvas.width;
    	var height = (602/1047)*canvas.height;
    	if (jeans === 1) {
    		context.drawImage(loadedimages.genitals[0], canvas.width*0.295, canvas.height*0.390, width, height);
    	} else if (jeans === 2) {
    		if (cock === 0) {
    			context.drawImage(loadedimages.genitals[1], canvas.width*0.295, canvas.height*0.39, width, height);
    		}
    		if (cock === 1) {
    			context.drawImage(loadedimages.genitals[2], canvas.width*0.295, canvas.height*0.39, width, height);
    		}
    	}
    };
    
    function drawEars() {
    	var index = 0;
    	if (polar) {
    		index = 2;
    	}
    	var yoffset = canvas.height*0.001*calculateheadrise();
    	var width = (284/1250)*canvas.width;
    	var height = (282/1047)*canvas.height;
    	context.drawImage(loadedimages.ears[index], canvas.width*0.37, canvas.height*0.05+yoffset, width, height);
    };
    
    function drawHead() {
    	var index = age+polar;
    	var yoffset = canvas.height*0.002*calculateheadrise();
    	var width = (284/1250)*canvas.width;
    	var height = (282/1047)*canvas.height;
    	if (blinky > 0) {
    		context.drawImage(loadedimages.blinks[index], canvas.width*0.37, canvas.height*0.04+yoffset, width, height);
    	} else if (blinkcounter > 190) {
    		context.drawImage(loadedimages.blinks[index], canvas.width*0.37, canvas.height*0.04+yoffset, width, height);
    	} else {
    		context.drawImage(loadedimages.heads[index], canvas.width*0.37, canvas.height*0.04+yoffset, width, height);
    	}
    };
    
    function drawGlasses() {
    	var width = (284/1250)*canvas.width;
    	var height = (282/1047)*canvas.height;
    	if (glasses) {
    		context.drawImage(loadedimages.ears[1], canvas.width*0.37, canvas.height*0.05, width, height);
    	}
    };
    
    function drawAgeButton() {
    	var width = (209/1250)*canvas.width;
    	var height = (204/1047)*canvas.height;
		context.drawImage(loadedimages.system[1], canvas.width*0, canvas.height*0.05, width, height);
    };
    
    function drawResetButton() {
    	var width = (231/1250)*canvas.width;
    	var height = (180/1047)*canvas.height;
		context.drawImage(loadedimages.system[2], canvas.width*0.75, canvas.height*0.05, width, height);
    };
    
    function drawWorkButton() {
    	var width = (209/1250)*canvas.width;
    	var height = (204/1047)*canvas.height;
		context.drawImage(loadedimages.system[3], canvas.width*0, canvas.height*0.25, width, height);
    };
    
    function drawBearButton() {
    	var width = (231/1250)*canvas.width;
    	var height = (180/1047)*canvas.height;
		context.drawImage(loadedimages.system[4], canvas.width*0.75, canvas.height*0.25, width, height);
    };
    
    var buttons = [];
    
    function recheckbuttons() {
    	buttons = [
        	{ //Age up
        		x: canvas.width*0.025,
        		y: canvas.height*0.17,
        		width: canvas.width*0.05,
        		height: canvas.height*0.05
        	},
        	{ //Age down
        		x: canvas.width*0.095,
        		y: canvas.height*0.17,
        		width: canvas.width*0.05,
        		height: canvas.height*0.05
        	},
        	{ //Reset
        		x: canvas.width*0.75,
        		y: canvas.height*0.05,
        		width: canvas.width*0.2,
        		height: canvas.height*0.2
        	},
        	{ //Face
        		x: canvas.width*0.375,
        		y: canvas.height*0.05,
        		width: canvas.width*0.2,
        		height: canvas.height*0.2
        	},
        	{ //Chest
        		x: canvas.width*0.34,
        		y: canvas.height*0.25,
        		width: canvas.width*0.29,
        		height: canvas.height*0.35
        	},
        	{ //Left Foot
        		x: canvas.width*0.075,
        		y: canvas.height*0.52,
        		width: canvas.width*0.3,
        		height: canvas.height*0.45
        	},
        	{ //Right Foot
        		x: canvas.width*0.675,
        		y: canvas.height*0.52,
        		width: canvas.width*0.3,
        		height: canvas.height*0.45
        	},
        	{ //Crotch
        		x: canvas.width*0.375,
        		y: canvas.height*0.56,
        		width: canvas.width*0.25,
        		height: canvas.height*0.35
        	},
        	{ //Legs
        		x: canvas.width*0.15,
        		y: canvas.height*0.5,
        		width: canvas.width*0.75,
        		height: canvas.height*0.35
        	},
        	{ //Age up
        		x: canvas.width*0.025,
        		y: canvas.height*0.25,
        		width: canvas.width*0.13,
        		height: canvas.height*0.13
        	},
        	{ //Reset
        		x: canvas.width*0.75,
        		y: canvas.height*0.27,
        		width: canvas.width*0.2,
        		height: canvas.height*0.15
        	},
        ]
    };
    
    // Render the game
    function render() {
    	context.globalAlpha = 1;
    	drawBackground();
    	
    	drawCrotch();
    	drawArms();
    	drawBelly();
    	drawClothing();
    	drawLeftLeg();
    	drawRightLeg();
    	drawLeftFoot();
    	drawRightFoot();
    	drawGenitals();
    	drawEars();
    	drawHead();
    	drawGlasses();
    	
    	drawAgeButton();
    	drawResetButton();
    	
    	drawWorkButton();
    	drawBearButton();
    	
    	drawCum();
    	
    	drawBubble();
    	
    	recheckbuttons();
//    	context.fillStyle = "black";
//    	context.globalAlpha = 0.8;
//    	for (var i = 0; i < buttons.length; i++) {
//    		context.fillRect(buttons[i].x, buttons[i].y, buttons[i].width, buttons[i].height);
//    	}
		
    }
    
    function drawBubble() {
    	var fontsize = Math.floor(canvas.width*0.02);
    	context.font = fontsize+"pt Verdana";
    	
    	var x = canvas.width*0.35;
    	var y = canvas.width*0.3;
    	var w = context.measureText(quote).width + canvas.width*0.02;
    	var h = parseInt(context.font) + canvas.height*0.02;
    	var radius = Math.floor(canvas.width*0.02);
    	if (textbubble) {
			var r = x + w;
			var b = y + h;
			context.beginPath();
			context.strokeStyle="black";
			context.lineWidth="2";
			context.moveTo(x+radius, y);
			context.lineTo(x+radius/2, y-10);
			context.lineTo(x+radius * 2, y);
			context.lineTo(r-radius, y);
			context.quadraticCurveTo(r, y, r, y+radius);
			context.lineTo(r, y+h-radius);
			context.quadraticCurveTo(r, b, r-radius, b);
			context.lineTo(x+radius, b);
			context.quadraticCurveTo(x, b, x, b-radius);
			context.lineTo(x, y+radius);
			context.quadraticCurveTo(x, y, x+radius, y);
			context.fillStyle = "#ffffff";
			context.fill();
			context.stroke();
			
			context.fillStyle = "black";
	        context.fillText(quote, x+canvas.width*0.01, y+h-canvas.width*0.01);
    	}
    };
    
    function reset() {
        age = 0;
        glasses = false;
        shirt = true;
        vest = true;
        cock = 0;
        leftfeet = 0;
        rightfeet = 0;
        jeans = 0;
        cum = 0;
    }
    
    // On mouse movement
    function onMouseMove(e) {
        // Get the mouse position
        var pos = getMousePos(canvas, e);
        
        // Check if we are dragging with a tile selected
        if (drag && level.selectedtile.selected) {
            // Get the tile under the mouse
            mt = getMouseTile(pos);
            if (mt.valid) {
                // Valid tile
                
                // Check if the tiles can be swapped
                if (canSwap(mt.x, mt.y, level.selectedtile.column, level.selectedtile.row)){
                    // Swap the tiles
                    mouseSwap(mt.x, mt.y, level.selectedtile.column, level.selectedtile.row);
                }
            }
        }
    }
    
    function doQuote(message) {
    	quote = message;
    	textbubble = 100;
    };
    
    // On mouse button click
    function onMouseDown(e) {
    	recheckbuttons();
    	var active = true;
    	var pos = getMousePos(canvas, e);
    	for (var i=0; i<buttons.length; i++) {
    		if (pos.x >= buttons[i].x && pos.x < buttons[i].x+buttons[i].width &&
                pos.y >= buttons[i].y && pos.y < buttons[i].y+buttons[i].height && active) {
            	
                // Button i was clicked
                if (i == 0) {
                	if (age == 0) {
                		doQuote("Think I need a shave...");
                	} else if (age == 1) {
                		doQuote("You like older men, don't ya?");
                	} else if (age == 2) {
                		doQuote("Daddy could use a hug, kid.");
                	} else if (age == 3) {
                		doQuote("I'm getting too old for this...");
                	}
                	
                    active = false;
                	age++;
                    if (age > 3) {
                    	age = 3;
                    }
                } else if (i == 1) {
                	if (age == 0) {
                		doQuote("I'm not gettin' any younger!");
                	} else if (age == 1) {
                		doQuote("I could go all night long!");
                	} else if (age == 2) {
                		doQuote("Give my beard a kiss before it goes.");
                	} else if (age == 3) {
                		doQuote("I'm feeling ten years younger!");
                	}
                	
                	active = false;
                    age = age -1;
                    if (age < 0) {
                    	age = 0;
                    }
                } else if (i == 2) {
                	doQuote("Whoah, what just happened?");
                	active = false;
                	reset();
                } else if (i == 3) {
                	if (glasses) {
                		doQuote("Don't need my specs to see that you want me.");
                	} else {
                		doQuote("Thanks for finding my glasses, cutie.");
                	}
                	active = false;
                    glasses = !glasses;
                } else if (i == 4) {
                	active = false;
                    if (shirt) {
                    	doQuote("Feels good to relax.");
                    	shirt = false;
                    } else if (vest) {
                    	doQuote("You want to see my belly do ya?");
                    	vest = false;
                    } else {
                    	blinky = 50;
                    	doQuote("That feels nice...rub daddy's gut some more.");
                    }
                } else if (i == 5) {
                	if (leftfeet == 0) {
                		doQuote("Phew, feels great to get those boots off!");
                	} else if (leftfeet == 1) {
                		doQuote("Sorry for the musk, kiddo.");
                	} else if (leftfeet == 2) {
                		blinky = 50;
                		doQuote("Yeah, rub daddy's hot tired feet for me...");
                	}
                	active = false;
                    leftfeet++;
                    if (leftfeet > 2) {
                    	leftfeet = 2;
                    }
                } else if (i == 6) {
                	if (rightfeet == 0) {
                		doQuote("Phew, feels great to get those boots off!");
                	} else if (rightfeet == 1) {
                		doQuote("Sorry for the musk, kiddo.");
                	} else if (rightfeet == 2) {
                		blinky = 50;
                		doQuote("Yeah, rub daddy's hot tired feet for me...");
                	}
                	active = false;
                    rightfeet++;
                    if (rightfeet > 2) {
                    	rightfeet = 2;
                    }
                } else if (i == 7) {
                	if (jeans == 0) {
                		doQuote("Nothing wrong with relaxing in your shorts!");
                	} else if (jeans == 1){
                		doQuote("Time to let it all hang out...");
                	}  else if (cock == 0){
                		blinky = 50;
                		doQuote("Fuck yeah, squeeze that big fat cock...");
                	}  else if (cum == 10){
                		blinky = 100;
                		doQuote("GRAAAAWR!");
                	}  else if (cum > 10){
                		blinky = 10;
                		doQuote("Just can't get enough of this old bear eh?");
                	}  else if (cock == 1){
                		blinky = 100;
                		doQuote("Fuck, keep going, you love daddy's cock...");
                	}
                	active = false;
                	if (jeans == 2) {
                		cock++;
                		if (cock > 1) {
                			cock = 1;
                			cum++;
                		}
                	} else {
                		jeans++;
                	}
                } else if (i == 8) {
                	if (jeans == 0) {
                		doQuote("Nothing wrong with relaxing in your shorts!");
                	} else {
                		doQuote("Time to let it all hang out...");
                	}
                	active = false;
                	jeans++;
                	if (jeans > 2) {
                		jeans = 2;
                	}
                } else if (i == 9) {
                	if (work == 0) {
                		doQuote("I'm so tired and sweaty after working all day...");
                	} else {
                		doQuote("Feels good to relax!");
                	}
                	active = false;
                	if (work == 0) {
                		work = 1;
                	} else {
                		work = 0;
                	}
                } else if (i == 10) {
                	if (polar == 0) {
                		doQuote("Did it just get warmer in here?");
                	} else {
                		doQuote("Suddenly I feel much colder.");
                	}
                	active = false;
                	if (polar == 0) {
                		polar = 4;
                	} else {
                		polar = 0;
                	}
                }
            }
        }
    }
    
    function onMouseUp(e) {
        // Reset dragging
        drag = false;
    }
    
    function onMouseOut(e) {
        // Reset dragging
        drag = false;
    }
    
    // Get the mouse position
    function getMousePos(canvas, e) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: Math.round((e.clientX - rect.left)/(rect.right - rect.left)*canvas.width),
            y: Math.round((e.clientY - rect.top)/(rect.bottom - rect.top)*canvas.height)
        };
    }
    
    // Call init to start the game
//    init();
    loadArmsAndTorso();
};