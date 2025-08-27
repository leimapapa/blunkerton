let shapeTypes = ["circle", "square"];
let colorTypes = ["#cd4bf0", "#7653f3", "#51b4f2", "#f3b705"];
const selectorTypes = ["SHAPE", "COLOR"];
let currentGridSize = 4;
let totalBadGuysToFight = 0;


const randInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const duelChallenges = [`I challenge you to a duel!`, `I aims to put you 6 feet under!`, `Ain't nobody a faster draw than me!`, `I'll put a bullet in ya!`, `There's quick, there's quicker, then there's me!`, `Mama said I was born to stir up trouble!`, `Today's your last day above ground!`, `Make a move, law-dog...`, `I move fast. I shoot fast. You die fast!`, `Let's duel!`, `I met a man faster than me once. So I shot him in the back!`, `I'm gonna take them purty shoes after I shoot you out of em!`, `Can't beat me!`, `We here to jaw, or we here to fight?`, `Prepare to meet your end...`];

class BadGuy {
	constructor({ 
		name = '', 
		drawTimeMs = 20000, 
		levels = 3, 
		gridSize = 3, 
		beard = false, 
		moustache = false,
		beltColor = 'brown',
		beltBuckleColor = 'goldenrod',
		bootColor = '#111',
		hairColor = '#000', 
		hatColor = '#000',
		eyeColor = '#000', 
		eyepatch = false,
		eyepatchColor = '#000',
		innerShirtColor = '#111',
		shirtColor = '#ccc',
		skinColor = 'tan', 
		pantsColor = '#555',
		pupilColor = null,
		callToAction = duelChallenges[randInt(0,duelChallenges.length-1)], 
		x, 
		y }) {
		this.name = name;
		this.drawTimeMs = drawTimeMs;
		this.levels = levels;
		this.gridSize = gridSize;
		this.shirtColor = shirtColor;
		this.innerShirtColor = innerShirtColor;
		this.beard = beard;
		this.moustache = moustache;
		this.beltColor = beltColor,
		this.bootColor = bootColor,
		this.beltBuckleColor = beltBuckleColor,
		this.hairColor = hairColor;
		this.hatColor = hatColor;
		this.eyeColor = eyeColor;
		this.eyepatch = eyepatch;
		this.eyepatchColor = eyepatchColor;
		this.beltColor = beltColor;
		this.bootColor = bootColor;
		this.skinColor = skinColor;
		this.pantsColor = pantsColor;
		this.pupilColor = pupilColor;
		this.callToAction = callToAction;
		this.x = x;
		this.y = y;
	}
}
const outlawsData = [
	// {name: "Testy Testerton", drawTimeMs: 50000, levels: 2, gridSize: 2, beltColor: "rgba(0,255,255,0.7)", beltBuckleColor: "rgba(0,255,255,0.7)", bootColor: "rgba(0,255,255,0.7)", shirtColor: "rgba(0,255,255,0.7)", innerShirtColor: "rgba(0,255,255,0.7)", hairColor: "rgba(0,255,255,0.7)", hatColor: "rgba(0,255,255,0.7)", skinColor: "rgba(0,255,255,0.7)", pantColor: "rgba(0,255,255,0.8)"},
	// {name: "Easy McTutorialson", drawTimeMs: 59000, levels: 3, gridSize: 2, shirtColor: "lightblue"},
	
	{name: "Dastardly Dan", drawTimeMs: 25000, levels: 3, gridSize: 4, shirtColor: "firebrick", pantsColor: "#8B4513", moustache: true},
	{name: "Hapless Harry", drawTimeMs: 18000, levels: 3, gridSize: 4, shirtColor: "cornflowerblue", hairColor: "#F4A460", beard: true},
	{name: "Desperado Dave", drawTimeMs: 15000, levels: 3, gridSize: 3, shirtColor: "#ff6a6a"},
	{name: "Bandit Bill", drawTimeMs: 22000, levels: 2, gridSize: 5, shirtColor: "#ffdc2a"},
	{name: "Rascal Roy", drawTimeMs: 12000, levels: 3, gridSize: 4, shirtColor: "#ceff55"},
	{name: "Lawless Luke", drawTimeMs: 10000, levels: 3, gridSize: 3, shirtColor: "#9a534d"},
	{name: "Outlaw Oliver", drawTimeMs: 35000, levels: 9, gridSize: 4, shirtColor: "#9a1a39"},
	{name: "Black Bart", drawTimeMs: 10000, levels: 3, gridSize: 3, shirtColor: "#9a9467", moustache: true, beard: true, hairColor: '#fff', hatColor: '#fff'},
	{name: "Renegade Randy", drawTimeMs: 10000, levels: 3, gridSize: 4, shirtColor: "#4d759a"},
	{name: "Wild Wes", drawTimeMs: 22000, levels: 5, gridSize: 4, shirtColor: "#6a5a9a", beard: true, hairColor: 'red'},
	{name: "Dirty Dalton", drawTimeMs: 20000, levels: 5, gridSize: 4, shirtColor: "#cf7989", hairColor: 'orange', moustache: true, hatColor: 'grey'},
	{name: "Vicious Vinny", drawTimeMs: 20000, levels: 5, gridSize: 4, shirtColor: "#cf6f00", hatColor: 'red', beard: true, hairColor: 'orange'},
	{name: "Snakebite Sam", drawTimeMs: 20000, levels: 5, gridSize: 4, shirtColor: "#cf0900"},
	{name: "Cactus Kid", drawTimeMs: 15000, levels: 4, gridSize: 3, shirtColor: "#3e9476", hairColor: '#AFA77B', hatColor: '#899F4A'},
	{name: "Whiskey Joe", drawTimeMs: 20000, levels: 5, gridSize: 4, shirtColor: "#943e3e", hatColor: 'brown', moustache: true, hairColor: '#331800'},
	{name: "Buckshot Billy", drawTimeMs: 20000, levels: 5, gridSize: 4, shirtColor: "#3e7694"},
	{name: "Sneaky Steve", drawTimeMs: 19000, levels: 4, gridSize: 4, shirtColor: "#353935", moustache: true},
	{name: "Badlands Bob", drawTimeMs: 20000, levels: 5, gridSize: 4, shirtColor: "#888894", moustache: true},
	{name: "Trigger Tony", drawTimeMs: 20000, levels: 5, gridSize: 4, shirtColor: "#940006", hatColor: 'firebrick'},
	{name: "Slick Slim", drawTimeMs: 20000, levels: 5, gridSize: 4, shirtColor: "#5c4545", hatColor: 'brown'},
	{name: "Deadwood Dave", drawTimeMs: 20000, levels: 5, gridSize: 4, shirtColor: "#5c583d", moustache: true},
	{name: "Rowdy Rex", drawTimeMs: 15000, levels: 3, gridSize: 4, shirtColor: "#3f085c"},
	{name: "Quickdraw Quinn", drawTimeMs: 50000, levels: 3, gridSize: 5, shirtColor: "#1f361b", hatColor: '#ccc'},
	{name: "Black-Eyed Jake", drawTimeMs: 20000, levels: 5, gridSize: 4, shirtColor: "#b826e3", hairColor: 'tan', beard: true, moustache: true, eyepatch: true},
	{name: "Rustler Royce", drawTimeMs: 20000, levels: 5, gridSize: 4, shirtColor: "#b13300", beard: true, moustache: true},
	{name: "Mad Milo", drawTimeMs: 20000, levels: 6, gridSize: 3, shirtColor: "salmon", hatColor: 'salmon', pantsColor: "#8B4513"},
	{name: "Random Ryan", drawTimeMs: 25000, levels: 3, gridSize: 4, shirtColor: randomHexColor(), beard: true, moustache: true, hairColor: randomHexColor(), hatColor: randomHexColor(), eyeColor: randomHexColor(), skinColor: randomHexColor(), pantsColor: randomHexColor(), bootColor: randomHexColor(), beltColor: randomHexColor(), beltBucleColor: randomHexColor(), innerShirtColor: randomHexColor()},
	{name: "Gamblin' Gus", drawTimeMs: 25000, levels: 5, gridSize: 5, shirtColor: "#1F618D", innerShirtColor: "#D4AC0D", hatColor: "#333333"},
	{name: "Bloody Baron", drawTimeMs: 30000, levels: 7, gridSize: 4, shirtColor: "#8B0000", pantColor: "dimgrey", hatColor: "#000000"},
	{name: "Creepy Clyde", drawTimeMs: 15000, levels: 4, gridSize: 3, shirtColor: "#2E8B57", skinColor: "#FCFCFC", hairColor: "#fff", hatColor: "#FAF9F6", shirtColor: "#FAF9F6", pantsColor: "#FAF9F6", eyeColor: "red", moustache: true},
	{name: "Wicked Wayne", drawTimeMs: 22000, levels: 6, gridSize: 4, skinColor: "#623D33", shirtColor: "#708090", hairColor: "black", beard: true},
	{name: "Jailbreak Joe", drawTimeMs: 28000, levels: 8, gridSize: 5, shirtColor: "orangered", pantsColor: "#8B4513", eyepatch: true},
	{name: "Shotgun Shane", drawTimeMs: 20000, levels: 5, gridSize: 4, shirtColor: "#1b0864", moustache: true},
	{name: "Lethal Lenny", drawTimeMs: 25000, levels: 5, gridSize: 5, shirtColor: "#002632", moustache: true, eyepatch: true, beltColor: "#000", beltBuckleColor: 'silver', pantsColor: "#002632"},
	{name: "Dusty Diablo", drawTimeMs: 24000, levels: 5, gridSize: 5, shirtColor: "#000000", beard: true, moustache: true},
	{name: "The Devil Incarnate", drawTimeMs: 10000, levels: 10, gridSize: 10, shirtColor: "#f00", beard: true, moustache: true, hairColor: "#f00", hatColor: "#f00", eyeColor: "#f00", skinColor: "firebrick", beltColor: 'black', beltBuckleColor: 'white', callToAction: `Death becomes you...`}
	];

let gameCount = 0;
let total = 0;
let correctAnswers = 0;
let targetShape = "";
let targetColor = "";
let targetColorClass = "";
let selector = "";

const prompt = document.getElementById("prompt");
const grid = document.getElementById("grid");
const message = document.getElementById("message");
const knob = document.querySelector("#knob");
const game = document.querySelector("#game-container");
const gameBoard = document.getElementById('gameBoard');
const outlawName = document.querySelectorAll('#outlawName');
const quickdraw = document.getElementById('quickdraw');
const toughness = document.getElementById('toughness');

// changeable bad guy reference
let undefeatedBadGuy = document.querySelector('.badGuy');
// changeable bad guy reference
let currentBadGuy = document.querySelector('.badGuy');

//************************
//HELPER FUNCTIONS
//************************
function randomHexColor() {
  // Generate a random number between 0 and 16777215 (FFFFFF in decimal).
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

/**
 * Creates a pseudo-random number generator function using a given seed.
 * This ensures that the sequence of "random" numbers is reproducible.
 */
function createSeededRandom(seed) {
    // LCG (Linear Congruential Generator) parameters
    const m = 0x80000000; // 2^31
    const a = 1103515245;
    const c = 12345;
    let state = seed;

    // Generates the next pseudo-random number.
    return function() {
        state = (a * state + c) % m;
        return state / m;
    };
}

/**
 * Selects a specified number of unique, randomly chosen items from an array
 * using a seeded randomizer. The indexes of the selected items are sorted
 * before the new array is created.
 */
function selectRandomItemsSeeded(originalArray, n, seed) {
    if (n > originalArray.length) {
        throw new Error("Cannot select more items than available in the array.");
    }
    if (n < 0) {
        throw new Error("Number of items to select (n) cannot be negative.");
    }
    if (n === 0) {
        return []; // Return an empty array if n is 0
    }
    // Initialize the seeded random number generator
    const random = createSeededRandom(seed);
    const len = originalArray.length;
    const availableIndexes = Array.from({ length: len }, (_, i) => i);
    const selectedIndexes = new Set();

    // Select n unique random indexes
    while (selectedIndexes.size < n) {
        // Generate a random index within the current range of available indexes
        const randomIndexInAvailable = Math.floor(random() * availableIndexes.length);
        const selectedOriginalIndex = availableIndexes[randomIndexInAvailable];
        // Add the selected index to the set
        selectedIndexes.add(selectedOriginalIndex);
        // Remove the selected index from availableIndexes to ensure uniqueness
        // This makes sure we don't pick the same index twice.
        availableIndexes.splice(randomIndexInAvailable, 1);
    }
    // Convert the Set of selected indexes to an Array and sort them
    const sortedIndexes = Array.from(selectedIndexes).sort((a, b) => a - b);
    // Create a new array containing items from the original array at the sorted indexes
    const newArray = sortedIndexes.map(index => originalArray[index]);

    return newArray;
}

// get a random array item
function getRandomItemFromArray(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

// the auto-generated path is always too long
function removeLastNQuadraticCurves(pathData, n) {
  // Regex to match the 'q' command and its 4 coordinates
  const quadraticRegex = /q\s*(-?\d+\.?\d*)\s*(-?\d+\.?\d*)\s*(-?\d+\.?\d*)\s*(-?\d+\.?\d*)/gi;
  // Find all matches of the quadratic curve command
  const matches = pathData.match(quadraticRegex);
  // If there are 'n' or fewer quadratic curves, return the original data.
  if (!matches || matches.length <= n) {
    return pathData;
  }
  // Iterate 'n' times to remove the last 'n' matches from the path data string.
  let newPathData = pathData;
  for (let i = 0; i < n; i++) {
    newPathData = newPathData.substring(0, newPathData.lastIndexOf(matches[matches.length - 1 - i]));
  }
  return newPathData;
}

function getPointAtPercent(pathD, percent) {
	const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
	pathElement.setAttribute('d', pathD);
	const totalLength = pathElement.getTotalLength();
	const distance = totalLength * (percent / 100); // if percent is 0-100
	const point = pathElement.getPointAtLength(distance);
    
  return [point.x, point.y]
}

function getVictoryPhrase(firstName, lastName) {
  const templates = [`Got eeem! More like<br/> "Disintegrated" ${lastName}, amirite?`, `That's ${firstName} done and dusted all right!`, `Who's fast now ${lastName}?`, `You're no Daisy.<br/>You're no daisy at all!</br/>In fact think your name was...<br/>${lastName}?`, `Whoa...<br/>guess that's the end of <br/>${firstName}'s story. Nice shootin'`, `Yee-haw!<br/>Get merc-ed ${firstName}!`, `Well done!<br/>I think that duel blew ${firstName} away!`, `Shoulda stayed<br/>in bed this mornin' ${firstName}`, `Hot dog! "Vaporized" ${lastName} is more like it!`, `Pulverized that pugilistic predator!`, `Astounding!<br/>You annihilated that antagonistic assassin!`];
  return templates[randInt(0, templates.length - 1)];
}

function isSafari() {
  const userAgent = navigator.userAgent;
  // Check for the presence of "Safari" and the absence of "Chrome" in the user agent string.
  // This helps distinguish Safari from Chromium-based browsers that also include "Safari" in their user agent.
  const isUserAgentSafari = userAgent.includes("Safari") && !userAgent.includes("Chrome");

  // Additionally, check for the window.safari object, which is specific to Safari.
  const hasWindowSafariObject = typeof window.safari !== 'undefined';

  // Combine both checks for a more reliable detection.
  return isUserAgentSafari || hasWindowSafariObject;
}
//************************
//END HELPER FUNCTIONS
//************************

function createCacti(totalOutlaws) {
	let totalCacti = 4;
	let cactiData = []; // Create an array to hold the cactus data

	for (let i = 0; i < totalCacti; i++) {
		const cactusElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
		const cactusNeedlesElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
		const cactusShadow = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");

		let cx = randInt(0, 1) === 0 ? randInt(35, 50) : randInt(335, 350);
		let cy = randInt(95, Math.ceil((totalOutlaws * 400) - 400)); // This is the y-coordinate you want to sort

		const cactusPath = `M ${cx} ${cy} m-10 0 q 10 5 20 0 q 4 -2 0 -31 q 23 3 22 -32 a 1 1 0 0 0 -15 0 q 0 18 -7 18 q 2 -25 0 -37 a 1 1 0 0 0 -21 -1 q -2 28 0 46 q -12 0 -12 -24 a 1 1 0 0 0 -14 1 q -1 38 26 38 q -1 21 1 22`;
		const cactusShadowPath = `M ${cx} ${cy} m-10 0 q 10 5 20 0 q 4 -2 0 -31 q 23 3 22 -32 a 1 1 0 0 0 -15 0 q 0 18 -7 18 q 2 -25 0 -37 a 1 1 0 0 0 -21 -1 q -2 28 0 46 q -12 0 -12 -24 a 1 1 0 0 0 -14 1 q -1 38 26 38 q -1 21 1 22`;
		cactusShadow.setAttribute('cx', cx);
		cactusShadow.setAttribute('cy', cy);
		cactusShadow.setAttribute('rx', 35);
		cactusShadow.setAttribute('ry', 5);
		cactusShadow.setAttribute('opacity', '0.5');
		cactusShadow.setAttribute('filter', 'url(#sunblur2)');
		cactusNeedlesElement.setAttribute("title", "The humble cactus. Means you no harm");
		cactusElement.setAttribute('d', cactusPath);
		cactusNeedlesElement.setAttribute('d', cactusPath);
		cactusElement.setAttribute('fill', 'url(#cactiGrad)');
		cactusElement.setAttribute('filter', 'url(#cactiblur)');
		cactusNeedlesElement.setAttribute('fill', 'url(#cactNeedles)');
		cactusNeedlesElement.setAttribute('filter', 'url(#cactiblur)');
		
		cactusElement.style.userSelect = "none";
		cactusElement.style.pointerEvents = "none";
		cactusNeedlesElement.style.userSelect = "none";
		cactusNeedlesElement.style.pointerEvents = "none";
		cactusShadow.style.userSelect = "none";
		cactusShadow.style.pointerEvents = "none";
		cactusElement.id = `cactus${i}`;

		// Store both elements and the y-coordinate in an object
		cactiData.push({
			y: cy,
			cactus: cactusElement,
			needles: cactusNeedlesElement,
			shadow: cactusShadow
		});
	}

	// Now sort the array based on the y-coordinate
	cactiData.sort((a, b) => a.y - b.y);

	// Finally, loop through the sorted array and append the elements
	cactiData.forEach(cactus => {
		document.querySelector('.gameBoard').appendChild(cactus.shadow);
		document.querySelector('.gameBoard').appendChild(cactus.cactus);
		document.querySelector('.gameBoard').appendChild(cactus.needles);
	});
}

//************************
//MAIN GAME STATE CONSTRUCTOR
//************************
function constructBaddies() {
	const today = new Date();
	// Example: For August 23, 2025, the seed would be 20250823
	const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

	totalBadGuysToFight = 6;
	// First run with a specific seed
	const random6 = selectRandomItemsSeeded(outlawsData, totalBadGuysToFight, dateSeed);
	
	const totalOutlaws = random6.length;
	
	let windingPathElement = `M200 0`;
	const roadCurves = Math.floor(totalOutlaws/0.5);
		for (let i=0; i<roadCurves; i++) {
			let offsetX = randInt(60,200);
			if (i < roadCurves-2) {
			windingPathElement += ` q -${offsetX} 50 0 100 q ${offsetX} 50 0 100`;
			}
		}
	const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
	pathElement.setAttribute('d', removeLastNQuadraticCurves(windingPathElement, 4));
	pathElement.id = 'gamePath';
	pathElement.setAttribute('fill', 'none');
	pathElement.setAttribute('stroke', '#ddc79a');
	// if (isSafari())	pathElement.setAttribute('stroke', 'tan');
	pathElement.setAttribute('filter', 'url(#turb)');	
	pathElement.setAttribute('stroke', 'url(#pathGrad)');
	pathElement.setAttribute('stroke-width', '70');
	pathElement.setAttribute('stroke-linecap', 'round');
	pathElement.setAttribute('stroke-linejoin', 'round');
	document.querySelector('.gameBoard').appendChild(pathElement);
	document.querySelector('.gameBoard').setAttribute('viewBox', `0 -200 400 ${(totalOutlaws * 400) - 300}`);
	const outlaws = random6.map(badGuyObject => new BadGuy(badGuyObject));
	
	for (const [index, o] of outlaws.entries()) {
		let percentDownTrail = (index / totalOutlaws) * 100;
		[o.x, o.y] = getPointAtPercent(windingPathElement, percentDownTrail);
	
	const skinTone = ` filter="brightness(${randInt(70,120)}%)"`;
	const blinkOffset = randInt(2000,5000);
	const baddieSVG = `<svg xmlns="http://www.w3.org/2000/svg" id="badGuy${index}" class="badGuy badGuy${index}" viewBox="0 0 100 100" x="${o.x - 100}" y="${o.y - 170}" height="200px" width="200px" data-name="${o.name}" data-drawtimems="${o.drawTimeMs}" data-levels="${o.levels}" data-gridsize="${o.gridSize}">
		<defs>
			<mask id="holeMask${index}">
				<rect width="100%" height="100%" fill="#fff" />
				<circle class="hole" cx="50" cy="50%" r="0" fill="url(#gg)" stroke="rgba(255,255,255,0.7)" stroke-width="3" filter="url(#filter)" />
			</mask>
			<clipPath id="eyeHoles${index}">
				<circle class="eyeL" cx="46" cy="39" r="2" stroke="#000" stroke-width="0.5" fill="#fff"  clip-rule="evenodd" />
				<circle class="eyeR" cx="54" cy="39" r="2" stroke="#000" stroke-width="0.5" fill="#fff"  clip-rule="evenodd" />
			</clipPath>
		</defs>
		<g class="badGuyBody">
			<title>
			I'm ${o.name}!
	${o.callToAction}
			</title>
			<ellipse class="shadow" cx="50" cy="90" rx="25" ry="3" fill="rgba(0,0,0,0.4)" filter="url(#blur)" />
			<g class="guyBody" mask="url(#holeMask${index})">
				<!-- shirt -->
				<path class="shirt" d="M 45 49 Q 50 50 55 49 Q 61 52 65 53 Q 68 48 71 51 Q 74 54 69 59 Q 67 61 60 61 V 64 H 39 V 59 Q 37 57 34 57 Q 32 57 30 59 Q 28 61 26 59 Q 25 57 26 55 Q 33 44 45 49" fill="${o.shirtColor}" stroke="#000">
					<animate attributeName="d" values="M 45 49 Q 50 50 55 49 Q 61 52 65 53 Q 68 48 71 51 Q 74 54 69 59 Q 67 61 60 61 V 64 H 39 V 59 Q 37 57 34 57 Q 32 57 30 59 Q 28 61 26 59 Q 25 57 26 55 Q 33 44 45 49; M 45 49 Q 50 50 55 49 Q 61 52 65 53 Q 68 48 71 51 Q 74 54 69 59 Q 67 61 60 61 V 64 H 39 V 59 Q 37 57 35 57 Q 33 57 32 59 Q 31 62 28 60 Q 26 59 28 55 Q 33 44 45 49; M 45 49 Q 50 50 55 49 Q 61 52 65 53 Q 68 48 71 51 Q 74 54 69 59 Q 67 61 60 61 V 64 H 39 V 59 Q 37 57 34 57 Q 32 57 30 59 Q 28 61 26 59 Q 25 57 26 55 Q 33 44 45 49" dur="5s" begin="0s" repeatCount="indefinite" />
				</path>
				<!-- inner shirt -->
				<path class="innerShirt" d="M 49 50 Q 49 53 47 64 H 53 Q 51 53 51 50 Z" fill="${o.innerShirtColor}" />
				<path fill="none" stroke="#333" stroke-width="2.5" d="M 46 64 Q 48 54 48 49 M 54 64 Q 52 54 52 49" />
				<!-- collar -->
				<path d="M 45 51 V 48 Q 50 50 55 48 V 52 L 50 50 H 50 Z" fill="${o.shirtColor}" filter="brightness(140%)" stroke="#000" />
				<!-- pants -->
				<path d="M 40 69 Q 50 67 58 69 Q 62 76 62 86 Q 59 86 56 88 Q 53 75 49 75 Q 44 75 41 87 Q 38 86 35 86 Q 36 76 40 69" fill="${o.pantsColor}" stroke="#000" />
				<!-- 	boots -->
				<path d="M 33 90 Q 33 89 35 86 Q 36 84 41 87 V 90 Z M 64 90 Q 64 89 62 86 Q 60 84 56 88 V 90 Z" fill="${o.bootColor}" stroke="#000" />
				<!-- 	belt -->
				<path d="M 39 64 H 60 C 63 68 59 70 58 69 Q 50 67 40 69 C 39 70 36 67 39 64" fill="${o.beltColor}" stroke="#000" />
				<!-- belt buckle -->
				<rect x="46" y="62.5" height="7" width="7" rx="1" fill="none" stroke="#000" stroke-width="4" />
				<rect x="46" y="62.5" height="7" width="7" rx="1" fill="none" stroke="${o.beltBuckleColor}" stroke-width="2" />
				<!-- 	hat -->
				<path class="hatBrim" d="M 50 40 Q 68 42 72 34 Q 75 28 67 27 Q 50 28 33 27 Q 25 28 28 35 Q 31 41 50 40z" fill="${o.hatColor}" stroke="#000" />
				<!-- 	head -->
				<path class="head skin" d="M 38 38 A 1 1 0 0 0 62 38 C 62 33 60 27 50 27 C 41 27 38 33 38 38z" fill="${o.skinColor}"${skinTone} stroke="#000" />
				<!-- 	eyes -->
				<circle class="eyeL" cx="46" cy="39" r="2" stroke="#000" stroke-width="0.5" fill="#fff" />
				<circle class="eyeR" cx="54" cy="39" r="2" stroke="#000" stroke-width="0.5" fill="#fff" />
				<!-- pupils -->
				<circle class="pupilL" cx="46" cy="39" r="0.5" fill="${o.eyeColor}" />
				<circle class="pupilR" cx="54" cy="39" r="0.5" fill="${o.eyeColor}" />
				<!-- eyelids -->
				
				<g class="eyelids" clip-path="url(#eyeHoles${index})" fill="${o.skinColor}"${skinTone}>
					<rect height="2" width='12' x="44" y="35" stroke="#000" stroke-width="0.25">
						<animate id="badGuyEyelids${index}" attributeName="y" values="35; 37.5; 35" dur="0.5s" begin="${blinkOffset/2}ms; badGuyEyelids${index}.end+${blinkOffset/2}ms" fill="freeze"/>
				</rect>
					<rect height="2" width='12' x="44" y="41" stroke="#000" stroke-width="0.25">
						<animate attributeName="y" values="41; 39.5; 41" dur="0.5s" begin="${blinkOffset/2}ms; badGuyEyelids${index}.end+${blinkOffset/2}ms" fill="freeze" />
					</rect>
				</g>
				<!-- 	brows -->
				<path class="brows" d="M42 34 l 7.5 3 v2 l -7 -2 ZM58 34 l -7.5 3 v2 l 7 -2Z" fill="${o.hairColor}" stroke="#000" stroke-width="0.3" />
				<!-- eyepatch -->
				<path class="eyepatch" d="M 62 39 H 56 V 39 A 1 1 0 0 1 50.5 39 L 40 32 L 41 30 L 51 37 L 62 37Z" fill="${o.eyepatchColor}" opacity="${o.eyepatch ? 1 : 0}" />
				<!-- mouth -->
				<path class="mouth" d="M 49 41 A 1 1 0 0 0 51 41" fill="#fff" stroke="#000" />
				<path class="moustache" d="M 49 43 A 1 1 0 0 0 48 40 C 46 41 47 43 42 42 Q 45 45 49 43 Z M 51 43 A 1 1 0 0 1 52 40 C 54 41 53 43 58 42 Q 55 45 51 43 Z" fill="${o.hairColor}" stroke="#000" stroke-width="0.3" opacity="${o.moustache ? 1 : 0}" />
				<path class="beard" d="M 49 49 A 1 1 0 0 1 51 49 C 51 50 50 51 50 52 C 50 51 49 50 49 49 Z" fill="${o.hairColor}" stroke="#000" stroke-width="0.3" opacity="${o.beard ? 1 : 0}" />
				<!-- 	hat 2 -->
				<path class="hatTop" d="M 36 28 Q 50 29 63 28 C 63 26 62 25 60 24 Q 50 21 40 24 C 37 25 36 26 36 28Z" fill="${o.hatColor}" filter="invert(10%)" stroke="#000" />

				<path class="hatBrim2" d="M 37 33 Q 50 29 63 33 A 1 1 0 0 0 67 27 Q 50 28 33 27 A 1 1 0 0 0 37 33Z" fill="${o.hatColor}" />
				<path class="hatBrim2Stroke" d="M 67 27 Q 50 28 33 27" fill="none" stroke="#000" stroke-linecap="square" />
				<!-- gun -->
				<ellipse cx="37" cy="68" rx="1.5" ry="4" fill="#666" stroke="#000" />
				<ellipse cx="37" cy="68" rx="2.5" ry="2.5" fill="silver" stroke="#000" />
				<ellipse cx="37" cy="72" rx="2.5" ry="5" fill="brown" stroke="#000" />
				<!-- hands -->
				<circle class="skin" cx="30" cy="62" r="4" fill="${o.skinColor}"${skinTone} stroke="#000">
					<animate attributeName="cx" values="29; 31.5; 29" dur="5s" begin="${randInt(-2000, 0)}ms" repeatCount="indefinite" />
				</circle>
				<circle class="skin" cx="70" cy="52" r="4" fill="${o.skinColor}"${skinTone} stroke="#000"></circle>
			</g>
			
			<g class="nameSign" transform="scale(1 0)">
				<rect class="nameTag" x="20" y="60" height="20" width="60" fill="#f5f5f5" stroke="#000" />
				<text class="nameSign" x="49" y="71" text-anchor="middle" dominant-baseline="middle" font-size="15" fill="#000" font-weight="900" textLength="50" lengthAdjust="spacingAndGlyphs" class="moneyDot">${o.name}</text>
			</g>
		<rect class="duelBtn duelLevel${index}" height="100" width="100" fill="rgba(0,0,0,0)" />
		</g>
	</svg>`;
	const wrapper = document.createElement('div');
  wrapper.innerHTML = baddieSVG;
  const svgChild = wrapper.firstChild;

	document.querySelector('.gameBoard').appendChild(svgChild);
	}
	createCacti(totalOutlaws);
}

constructBaddies();

function cloneSVGWithUniqueIDs(originalSVG) {
	// Ensure the original SVG has an ID, which is used as a base for new IDs.
	const originalId = originalSVG.id;
	if (!originalId) {
		console.error("Original SVG must have an ID to ensure unique cloning.");
		return null;
	}

	// Create a deep clone of the original SVG.
	const clonedSVG = originalSVG.cloneNode(true);

	// Generate a truly unique base ID for the cloned SVG itself.
	// Using a timestamp and a random string ensures high uniqueness,
	// especially if multiple clones happen quickly.
	const uniqueSuffix = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
	const newBaseId = `${originalId}-cloned-${uniqueSuffix}`;

	// Map to store old IDs to their new unique counterparts.
	const idMap = {};
	// Counter for unique sub-IDs within the cloned SVG.
	let idCounter = 0;

	// First, update the ID of the cloned SVG itself.
	idMap[originalId] = newBaseId;
	clonedSVG.id = newBaseId;

	// 1. Iterate through all elements in the cloned SVG that have an 'id' attribute.
	// Assign a new unique ID and populate the idMap.
	clonedSVG.querySelectorAll('[id]').forEach(el => {
		const oldId = el.id;
		// Generate a new unique ID for this element based on the newBaseId.
		const newSubId = `${newBaseId}-${oldId}-${idCounter++}`;
		el.id = newSubId;
		idMap[oldId] = newSubId;
	});

	// 2. Iterate through all elements in the cloned SVG to find attributes that reference IDs.
	// This includes attributes like 'fill', 'stroke', 'mask', 'clip-path', 'href' (for <use> elements), etc.
	// We use a broader selector here to catch all elements that might have such references.
	const allElements = clonedSVG.querySelectorAll('*');

	allElements.forEach(el => {
		// Attributes that typically use 'url(#id)' syntax.
		const attributesToUpdate = [
			'fill', 'stroke', 'mask', 'clip-path', 'filter',
			'marker-start', 'marker-mid', 'marker-end'
		];

		attributesToUpdate.forEach(attr => {
			const attrValue = el.getAttribute(attr);
			if (attrValue && attrValue.startsWith('url(#')) {
				const oldReferencedId = attrValue.substring(attrValue.indexOf('#') + 1, attrValue.indexOf(')'));
				if (idMap[oldReferencedId]) {
					// Replace the old ID with the new, unique ID in the URL reference.
					el.setAttribute(attr, `url(#${idMap[oldReferencedId]})`);
				}
			}
		});

		// Special handling for <use> elements which reference IDs via 'href' or 'xlink:href'.
		// Note: 'xlink:href' is for older SVG versions; 'href' is the modern standard.
		const hrefValue = el.getAttribute('href');
		if (hrefValue && hrefValue.startsWith('#')) {
			const oldReferencedId = hrefValue.substring(1); // Remove the '#'
			if (idMap[oldReferencedId]) {
				el.setAttribute('href', `#${idMap[oldReferencedId]}`);
			}
		}
		const xlinkHrefValue = el.getAttribute('xlink:href');
		if (xlinkHrefValue && xlinkHrefValue.startsWith('#')) {
			const oldReferencedId = xlinkHrefValue.substring(1); // Remove the '#'
			if (idMap[oldReferencedId]) {
				el.setAttribute('xlink:href', `#${idMap[oldReferencedId]}`);
			}
		}
	});

	return clonedSVG;
}

function prepareDuel(badGuySvg) {
  const outlawContainer = document.getElementById('outlawContainer');
  const defeatedOutlawContainer = document.getElementById('defeatedOutlawContainer');
  const duelModal = document.getElementById('duelModal');

  // Clone the bad guy SVG
  const clonedOutlaw = cloneSVGWithUniqueIDs(badGuySvg);
  const clonedDefeatedOutlaw = cloneSVGWithUniqueIDs(badGuySvg);
	// Remove id from the root SVG element
  if (clonedOutlaw.hasAttribute('id')) {
    clonedOutlaw.removeAttribute('id');
    clonedOutlaw.id = 'wantedPosterBadGuy';
  }
	
	// Remove id from the root SVG element
  if (clonedDefeatedOutlaw.hasAttribute('id')) {
    clonedDefeatedOutlaw.removeAttribute('id');
    clonedDefeatedOutlaw.id = 'defeatedBadGuy';
	}
  
  // Set the position of the cloned outlaw
	// clonedOutlaw.style.position = 'absolute';
	clonedOutlaw.style.height = `50px`;
	clonedOutlaw.style.width = `50px`;
	clonedOutlaw.style.height = '50px';
	clonedOutlaw.style.width = '50px';
	// clonedDefeatedOutlaw.style.transform = 'translate(-50%, -50%)';
	
  clonedOutlaw.querySelector('.nameSign').style.display = 'none';
  // Temporarily hide the original SVG
  badGuySvg.style.visibility = 'hidden';

  // Append the cloned outlaw to the modal
  outlawContainer.appendChild(clonedOutlaw);
	clonedDefeatedOutlaw.height = '350px';
	clonedDefeatedOutlaw.width = '350px';
	clonedDefeatedOutlaw.style.height = '350px';
	clonedDefeatedOutlaw.style.width = '350px';
  clonedDefeatedOutlaw.querySelector('.nameSign').style.display = 'none';
  clonedDefeatedOutlaw.querySelector('.duelBtn').remove();
  defeatedOutlawContainer.appendChild(clonedDefeatedOutlaw);
  
  // Show the modal
  duelModal.classList.add('visible');
  
  // Animate the cloned outlaw
  animateOutlaw(clonedOutlaw);
  
  // Store a reference to the original SVG and its data
  clonedOutlaw.originalSvg = badGuySvg;
  clonedOutlaw.originalData = badGuySvg.dataset;
	
	clonedDefeatedOutlaw.originalSvg = badGuySvg;
  clonedDefeatedOutlaw.originalData = badGuySvg.dataset;
  
  // Add listeners for the new buttons
  document.getElementById('duelButton').addEventListener('click', () => {
    // Pass the original SVG's data to startDuel
    startDuel(clonedOutlaw.originalSvg);
    closeModal();
  });
  
  document.getElementById('backToTrailButton').addEventListener('click', () => {
		clonedDefeatedOutlaw.remove();
    closeModal();
  });
}

function quickdrawToScore(time, minTime = 10000, maxTime = 35000, minScore = 1, maxScore = 100) {
  // Clamp time within bounds
  const clamped = Math.min(Math.max(time, minTime), maxTime);
  
  // Invert scaling since faster = higher score
  const score = maxScore - (clamped - minTime) * (maxScore - minScore) / (maxTime - minTime);
  return Math.round(score);
}

function animateOutlaw(clonedSvg) {
  const modalContent = document.querySelector('#duelModal .modal-content');
  const modalRect = modalContent.getBoundingClientRect();

	outlawName.forEach((name) => {
		name.innerText = clonedSvg.dataset.name;
	});
	quickdraw.value = quickdrawToScore(clonedSvg.dataset.drawtimems);
	toughness.value = ((Number(clonedSvg.dataset.gridsize) + Number(clonedSvg.dataset.levels)) / 20) * 100;
  // Animate the cloned SVG to the center
  clonedSvg.style.display = 'block';
  clonedSvg.style.visibility = 'visible';
  clonedSvg.style.position = 'absolute';
  clonedSvg.style.transition = '1s ease-in-out';
	clonedSvg.setAttribute('height', '300px');
	clonedSvg.setAttribute('width', '300px');
	clonedSvg.style.height = '300px';
	clonedSvg.style.width = '300px';
}


function closeModal() {
  const duelModal = document.getElementById('duelModal');
  const outlawContainer = document.getElementById('outlawContainer');
  
  // Get the cloned SVG
  const clonedOutlaw = outlawContainer.querySelector('svg');
  if (clonedOutlaw) {
    // Unhide the original SVG
    clonedOutlaw.originalSvg.style.visibility = 'visible';
    // Remove the cloned SVG from the DOM
    outlawContainer.removeChild(clonedOutlaw);
  }
  
  // Hide the modal
  duelModal.classList.remove('visible');
}

function closeWinModal() {
  const winModal = document.getElementById('winModal');
  const outlawContainer = document.getElementById('defeatedOutlawContainer');
  
  // Get the cloned SVG
  const clonedOutlaw = outlawContainer.querySelector('svg');
	// Remove the cloned SVG from the DOM
	clonedOutlaw?.remove();
	document.getElementById('victoryPhrase').innerHTML = `Clean draw!<br />Take your shot!`;
  // Hide the modal
  winModal.classList.remove('visible');
	// remove the event listener since it will get added back next time
	document.getElementById('backToTrailButton2').removeEventListener('click', closeWinModal);
	
	totalBadGuysToFight--;
	if (totalBadGuysToFight <= 0) {
		// You beat everyone!
		// TODO: get a badge, add it to an array stored in localStorage
		confetti(document.querySelector('#confettiHolder'));
		document.getElementById('dayWinModal').classList.add('visible');
	}
}

// create a game piece
function createShape(shape, color, colorNum) {
	const element = document.createElement("button");
	element.className = `shape ${shape} color${colorNum}`;
	element.style.background = color;
	return element;
}

// create a grid
function generateGrid(num = 4) {
	// clear it out
	grid.innerHTML = "";

	// set the grid layout css
	document.querySelector('#grid').style.gridTemplateColumns = `repeat(${num}, 1fr)`;
	// populate the grid
	for (let i = 0; i < Math.floor(num * num); i++) {
		const shape = getRandomItemFromArray(shapeTypes);
		const color = getRandomItemFromArray(colorTypes);
		const shapeElement = createShape(shape, color, colorTypes.indexOf(color));
		shapeElement.style.height = `${320 / num}px`;
		shapeElement.style.width = `${320 / num}px`;
		grid.appendChild(shapeElement);
	}
}


function svgProgressBar(barCol="red", timeMs=5000, callback) {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 10 100");
	svg.id = crypto.randomUUID()
  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", "M5 100v0");
  path.setAttribute("stroke", barCol);
  path.setAttribute("stroke-width", "10");
  path.setAttribute("fill", "none");
  const animate = document.createElementNS(svgNS, "animate");
  animate.setAttribute("attributeName", "d");
  animate.setAttribute("values", "M5 100v0; M5 100v-100");
  animate.setAttribute("dur", `${timeMs}ms`);
  animate.setAttribute("begin", "0s");
  animate.setAttribute("repeatCount", "1");
  animate.setAttribute("fill", "freeze");
  path.appendChild(animate);
  svg.appendChild(path);
  animate.addEventListener("endEvent", callback);
  return svg;
}
function heroProgress(percenctComplete) {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 10 100");
	svg.id = crypto.randomUUID()
  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", "M5 100v0");
  path.setAttribute("stroke", barCol);
  path.setAttribute("stroke-width", "10");
  path.setAttribute("fill", "none");
  const animate = document.createElementNS(svgNS, "animate");
  animate.setAttribute("attributeName", "d");
  animate.setAttribute("values", "M5 100v0; M5 100v-100");
  animate.setAttribute("dur", `${timeMs}ms`);
  animate.setAttribute("begin", "0s");
  animate.setAttribute("repeatCount", "1");
  animate.setAttribute("fill", "freeze");
  path.appendChild(animate);
  svg.appendChild(path);
  animate.addEventListener("endEvent", callback);
  return svg;
}

function setHeroProgress(percentComplete) {
	const heroProgress = document.getElementById("heroProgress");
	heroProgress.querySelector('#levelsComplete').setAttribute('d', `M5 100v-${percentComplete}`);
}

function cancelEnemyCountdown() {
  const svgHolder = document.getElementById("enemyProgress");
  const animateElement = svgHolder.querySelector("animate");
  // Remove the endEvent event listener
  animateElement.removeEventListener("endEvent", youDoneLost);
  // Clear the SVG content inside the span
  svgHolder.innerHTML = "";
}

function youDoneLost() {
	youLose(currentBadGuy);
}
function makeSelection() {
	let randCol = randInt(0, 3);
	targetShape = shapeTypes[randInt(0, 1)];
	targetColor = colorTypes[randCol];
	targetColorClass = `color${colorTypes.indexOf(colorTypes[randCol])}`;
	selector = selectorTypes[randInt(0, 1)];
	total = 0;
	correctAnswers = 0;

	if (selector == "SHAPE") {
		knob.setAttribute("transform", "translate(50, 60) rotate(-35) translate(-50, -60)");
	} else {
		knob.setAttribute("transform", "translate(50, 60) rotate(35) translate(-50, -60)");
	}
	let bgCol = ``;
	if (selector === 'COLOR') {
		prompt.innerHTML = ``;
		document.getElementById('knobColor').setAttribute('fill', targetColor);
	} else {
		prompt.innerHTML = `<span class="s${targetShape}"${bgCol}></span>`;
		document.getElementById('knobColor').setAttribute('fill', 'none');
	}

	const shapes = Array.from(document.querySelectorAll(".shape"));
	shapes.forEach((shape) => {
		shape.classList.remove("selected");
		shape.addEventListener("click", handleShapeClick);
	});
	message.textContent = "";
}


function initialStart(drawTimeMs, badGuyWhoBeatYou, gridSize) {
  startGame(gridSize);
	
	// your progress bar: TODO: refactor to be an svg element
	setHeroProgress(0);
	document.querySelector('#enemyProgress').innerHTML = ''; document.querySelector('#enemyProgress').appendChild(svgProgressBar('red', drawTimeMs, youDoneLost));
	
	document.querySelector('#enemyCountDown').innerHTML = '';
	initCountdown(document.querySelector('#enemyCountDown'),
  {
    day: 0, //adds a day's worth of seconds to the total seconds
    hour: 0, //adds an hour's worth of seconds to the total seconds
    min: 0, //adds 60 seconds to the total seconds
    sec: drawTimeMs / 1000, //seconds to add to the total seconds
    color: "#fff", //color of the numbers
    showMs: false, //whether or not to show the milliseconds
    glow: false, //whether or not to add a blur shadow behind the clock
    goldOutline: false, //whether or not to add the fancy gold outline
    font: 'Roboto, sans-serif', //default font
    fontWeight: 600, //default number thickness
  }
);
}


function youLose(badGuyWhoBeatYou) {
	const lossScreen = document.querySelector('#lossScreen');
	lossScreen.style.display = 'block';
	lossScreen.style.opacity = '1';
	undefeatedBadGuy = badGuyWhoBeatYou;
	document.getElementById('defeatedBadGuy').remove();
}

function startGame(gridSize) {
	let validGrid = false;
	while (!validGrid) {
		generateGrid(gridSize);
		makeSelection();
		
		total = getTotal();
		
		if (total > 0) {
			validGrid = true;
		}
	}
}


// calculate the total
function getTotal() {
	let selected = 0;
	const allShapes = grid.querySelectorAll("button.shape");
	if (selector === "SHAPE") {
		for (let i = 0; i < allShapes.length; i++) {
			if (allShapes[i].classList.contains(targetShape)) {
				selected++;
			}
		}
	} else if (selector === "COLOR") {
		for (let i = 0; i < allShapes.length; i++) {
			if (allShapes[i].classList.contains(targetColorClass)) {
				selected++;
			}
		}
	}
	return selected;
}

function handleShapeClick(e) {
	this.classList.toggle("selected");

	let totalLevels = currentBadGuy.dataset.levels;
	// determine if we're correct
	if (selector === "SHAPE") {
		if (e.target.classList.contains(targetShape)) {
			// success!
			correctAnswers++;
			this.removeEventListener("click", handleShapeClick);
		} else {
			resetGame();
		}
	} else if (selector === "COLOR") {
		if (e.target.classList.contains(targetColorClass)) {
			// success!
			correctAnswers++;
			this.removeEventListener("click", handleShapeClick);
		} else {
			resetGame();
		}
	}

	if (allFound()) {
		knob.setAttribute("transform", "translate(50, 60) rotate(0) translate(-50, -60)");
		gameCount++;
		setHeroProgress((gameCount/totalLevels) * 100);

		if (gameCount >= totalLevels) {
			// you won!
			gameCount = 0;
			cancelEnemyCountdown();
			makeBadGuyShootable();
			showWinScreen();
			// document.querySelector(".instructions").innerHTML = `Clean draw!<br/>Take your shot!`;
			// add a function to stop the svg enemy animation from running
			game.style.display = "none";
			return;
		}
		startGame(currentGridSize);
	}
}

function showWinScreen(){
	document.getElementById('winModal').classList.add('visible');
	document.getElementById('backToTrailButton2').style.visibility = 'hidden';
	winMedal();
}

function allFound() {
	if (total === correctAnswers) {
		return true;
	}
	return false;
}

function resetGame() {
  gameCount = 0;
  setHeroProgress(0);
  startGame(currentGridSize);
}

//Shooting stuff

// get the position on the svg
function cursorPoint(e) {
	let pt = new DOMPoint();
	switch (e.type) {
		case "touchstart":
		case "touchmove":
		case "touchend":
		case "touchcancel":
			let evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
			let touch = evt.touches[0] || evt.changedTouches[0];
			pt.x = touch.pageX;
			pt.y = touch.pageY;
			break;
		case "mousedown":
		case "mouseup":
		case "mousemove":
		case "mouseover":
		case "mouseout":
		case "mouseenter":
		case "mouseleave":
		default:
			pt.x = e.clientX;
			pt.y = e.clientY;
	}
	// Get point in global SVG space
	let loc = pt.matrixTransform(e.target.getScreenCTM().inverse());
	let x = loc.x;
	let y = loc.y;
	return [x, y];
}

// set back all of the changes
function bringEmBack() {
	const hole = undefeatedBadGuy.querySelectorAll(".hole");
	const eyeL = undefeatedBadGuy.querySelectorAll(".eyeL");
	const eyeR = undefeatedBadGuy.querySelectorAll(".eyeR");
	const pupilL = undefeatedBadGuy.querySelectorAll(".pupilL");
	const pupilR = undefeatedBadGuy.querySelectorAll(".pupilR");
	const mouth = undefeatedBadGuy.querySelectorAll(".mouth");
	const brows = undefeatedBadGuy.querySelectorAll(".brows");
	const shadow = undefeatedBadGuy.querySelectorAll(".shadow");
	for (let i = 0; i < hole.length; i++) {
		hole[i].setAttribute("r", "0");
		eyeL[i].setAttribute("r", "2");
		eyeR[i].setAttribute("r", "2");
		pupilL[i].setAttribute("r", "0.5");
		pupilR[i].setAttribute("r", "0.5");
		hole[i].style.transition = "0s";
		mouth[i].setAttribute("d", "M 49 41 A 1 1 0 0 0 51 41");
		brows[i].setAttribute("transform", "translate(0 0)");
		shadow[i].setAttribute("opacity", "1");
	}
	
	// document.querySelector("#duel").style.display = "block";
	document.querySelector("#lossScreen").style.display = "none";
	game.style.display = "none";
	document.querySelector("#lossScreen").style.opacity = "0";
	resetGame();
}

// show the game board, populate it and hide the duel button
function startDuel(badGuyElement) {
	currentBadGuy = badGuyElement;
  const drawTimeMs = badGuyElement.dataset.drawtimems;
  currentGridSize = badGuyElement.dataset.gridsize;
	// show game board
  game.style.display = "block";
	
	// hide the duel button: TODO: remove/refactor
  // document.querySelector("#duel").style.display = "none";
	
  initialStart(drawTimeMs, badGuyElement, currentGridSize);
}

function makeBadGuyShootable() {
	const badGuy = document.getElementById('defeatedBadGuy').querySelector(".guyBody");
	// add listener to this bad guy
	badGuy.addEventListener("click", (e) => {
		const guy = e.currentTarget;
		const badGuySvg = guy.closest('svg');
		
		let xy = cursorPoint(e);
		const hole = badGuySvg.querySelector(".hole");
		const eyeL = badGuySvg.querySelector(".eyeL");
		const eyeR = badGuySvg.querySelector(".eyeR");
		const eyelids = badGuySvg.querySelector(".eyelids");
		const pupilL = badGuySvg.querySelector(".pupilL");
		const pupilR = badGuySvg.querySelector(".pupilR");
		const mouth = badGuySvg.querySelector(".mouth");
		const brows = badGuySvg.querySelector(".brows");
		const shadow = badGuySvg.querySelector(".shadow");
		eyeL.setAttribute("r", "3");
		eyeR.setAttribute("r", "3");
		pupilL.setAttribute("r", "0.3");
		pupilR.setAttribute("r", "0.3");
		mouth.setAttribute("d", "M 52 42 A 1 1 0 0 0 48 43 z");
		brows.setAttribute("transform", "translate(0 -2)");
		eyelids.setAttribute("opacity", 0);
		hole.style.transition = "0s";
		hole.setAttribute("cx", xy[0]);
		hole.setAttribute("cy", xy[1]);
		shadow.setAttribute("opacity", "1");
		setTimeout(() => {
			hole.style.transition = "5s";
			hole.setAttribute("r", "100");
		}, 0);
		setTimeout(() => {
			let firstName = badGuySvg.getAttribute('data-name').split(" ")[0];
			let lastName = badGuySvg.getAttribute('data-name').split(" ")[1];
			const victoryPhrase = getVictoryPhrase(firstName, lastName);
			document.querySelector("#victoryPhrase").innerHTML = `${victoryPhrase}<br/>`;
			document.getElementById('backToTrailButton2').style.visibility = 'visible';
			document.getElementById('backToTrailButton2').addEventListener('click', closeWinModal);
			shadow.setAttribute("opacity", "0");
			const badGuyName = badGuySvg.dataset.name;
			const guyOnMap = document.querySelectorAll(`[data-name="${badGuyName}"]`);
			badGuySvg.remove();
			guyOnMap.forEach((guy) => {
				guy.remove();
			});
		}, 2000);
	});
}


gameBoard.addEventListener('click', (event) => {
  const clickedElement = event.target;
  const parentSvg = clickedElement.closest('svg[class^="badGuy"]');

  if (parentSvg) {
    prepareDuel(parentSvg);
  }
});

// document.querySelector("#resetBaddie").addEventListener("click", bringEmBack);
document.querySelector("#sleepOff").addEventListener("click", bringEmBack);


// TROPHY STUFF
// Seeded Random Functions
function createSeededRandom(seed) {
	const m = 0x80000000; // 2^31
	const a = 1103515245;
	const c = 12345;
	let state = seed;
	return function() {
		state = (a * state + c) % m;
		return state / m;
	};
}

function seededRandoInt(min, max, seededRandomFunc) {
	return Math.floor(seededRandomFunc() * (max - min + 1)) + min;
}

function seededRandoFloat(min, max, seededRandomFunc) {
	return seededRandomFunc() * (max - min) + min;
}

function seededRandLetter(length, seededRandomFunc) {
	const chars = 'abcdefghijklmnopqrstuvwxyz';
	let result = '';
	for (let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(seededRandomFunc() * chars.length));
	}
	return result;
}

// Visit Tracker Class
class VisitTracker {
	constructor() {
		this.EPOCH_DATE = new Date(2020, 0, 1);
		this.seededRandom = null;
		this.initializeSeededRandom();
	}

	initializeSeededRandom() {
		const todayInt = this.dateStringToInt(this.getTodayDateString());
		this.seededRandom = createSeededRandom(todayInt);
	}

	getTodayDateString() {
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, '0');
		const day = String(today.getDate()).padStart(2, '0');
		return `${year}${month}${day}`;
	}

	dateStringToInt(dateStr) {
		const year = parseInt(dateStr.slice(0, 4));
		const month = parseInt(dateStr.slice(4, 6)) - 1;
		const day = parseInt(dateStr.slice(6, 8));

		// Use the numeric constructor for cross-browser compatibility
		const date = new Date(year, month, day); 

		return Math.floor((date - this.EPOCH_DATE) / (1000 * 60 * 60 * 24));
	}

	intToDate(daysSinceEpoch) {
		const date = new Date(this.EPOCH_DATE);
		date.setDate(date.getDate() + daysSinceEpoch);
		return date;
	}

	intToDateString(daysSinceEpoch) {
		const date = this.intToDate(daysSinceEpoch);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}${month}${day}`;
	}

	intToDateStringHR(daysSinceEpoch) {
		const date = this.intToDate(daysSinceEpoch);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}-${month}-${day}`;
	}

	addVisit(dateStr = this.getTodayDateString()) {
		const dayInt = this.dateStringToInt(dateStr);
		let visits = JSON.parse(localStorage.getItem('blunkerton') || '[]');

		if (!visits.includes(dayInt)) {
			visits.push(dayInt);
			visits.sort((a, b) => a - b);
			visits = visits.slice(-365); // Keep last 365 visits
			localStorage.setItem('blunkerton', JSON.stringify(visits));
		}
		return visits;
	}

	getVisits() {
		return JSON.parse(localStorage.getItem('blunkerton') || '[]');
	}
	/**
    * Find the longest streak of consecutive days
    */
	findLongestStreak(sortedVisits = null) {
		const visits = sortedVisits || this.getVisits();
		if (visits.length === 0) return 0;

		let longestStreak = 1;
		let currentStreak = 1;

		for (let i = 1; i < visits.length; i++) {
			if (visits[i] === visits[i-1] + 1) {
				// Consecutive day
				currentStreak++;
				longestStreak = Math.max(longestStreak, currentStreak);
			} else {
				// Streak broken
				currentStreak = 1;
			}
		}

		return longestStreak;
	}

	/**
    * Get current streak (from most recent visit up to today)
    */
	getCurrentStreak() {
		const visits = this.getVisits();
		if (visits.length === 0) return 0;

		const today = this.dateStringToInt(this.getTodayDateString());
		const hasVisitedToday = visits.includes(today);

		// Start counting from the most recent visit
		let streak = 1; // Count the most recent visit

		// Work backwards through the visits array
		for (let i = visits.length - 2; i >= 0; i--) {
			// Check if this visit is exactly 1 day before the next visit
			if (visits[i] === visits[i + 1] - 1) {
				streak++;
			} else {
				// Streak is broken
				break;
			}
		}

		// If they haven't visited today, check if the streak goes up to yesterday
		if (!hasVisitedToday) {
			const yesterday = today - 1;
			if (visits[visits.length - 1] !== yesterday) {
				// Most recent visit wasn't yesterday, so current streak is 0
				return 0;
			}
		}
		return streak;
	}

	randomSVGfilter(seed, customSvgId='') {
		const seededRando = createSeededRandom(seed);

		let R2R = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let G2R = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let B2R = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let A2R = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let ROff = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let R2G = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let G2G = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let B2G = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let A2G = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let GOff = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let R2B = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let G2B = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let B2B = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let A2B = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let BOff = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let R2A = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let G2A = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let B2A = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let A2A = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;
		let AOff = Math.round(seededRandoFloat(-30, 50, seededRando) / 10 * 1000) / 1000;

		let extraBF = "";
		let extraBFProb = seededRandoInt(0, 100, seededRando);
		if (extraBFProb > 80) {
			extraBF = " " + Math.round(seededRandoFloat(1, 10000, seededRando) / 100000 * 1000) / 1000;
		}
		let bfRand = (Math.round(seededRandoFloat(1, 10000, seededRando) / 100000 * 10000) / 1000) + extraBF;
		let randOct = seededRandoInt(1, 10, seededRando);

		let svgId = customSvgId + seededRandLetter(3, seededRando) + seededRandoInt(0, 1000, seededRando) + seededRandLetter(3, seededRando);
		let randSeed = seededRandoInt(0, 1000, seededRando);
		let rRand = seededRandoInt(0, 255, seededRando);
		let gRand = seededRandoInt(0, 255, seededRando);
		let bRand = seededRandoInt(0, 255, seededRando);
		let rgb = `rgb(${rRand},${gRand},${bRand})`;

		let animated = '';
		if (seededRandoInt(0, 1, seededRando) === 1) {
			animated = `<feColorMatrix in="turbulence" class="anim" type="hueRotate" values="0" result="hueRotated"><animate attributeName="values" from="0" to="360" dur="${seededRandoInt(2,10, seededRando)}s" repeatCount="indefinite" /></feColorMatrix>`;
		}

		const colorMatrixInput = animated ? 'hueRotated' : 'turbulence';

		// Safari detection function
		function isSafari() {
			const ua = navigator.userAgent;
			return /Safari/.test(ua) && !/Chrome/.test(ua) && !/Chromium/.test(ua);
		}

		// Function to clamp color matrix values for Safari
		function safariClampMatrix(values) {
			return values.split(' ').map(val => {
				const num = parseFloat(val);
				// Clamp extreme values that cause Safari crashes
				return Math.max(-2, Math.min(2, num)).toString();
			}).join(' ');
		}

		// Your modified function
		const svg = (() => {
			const safari = isSafari();

			// Safari-specific adjustments
			const filterUnits = safari ? 'userSpaceOnUse' : 'objectBoundingBox';
			const colorMatrixValues = safari ? 
						safariClampMatrix(`${R2R} ${G2R} ${B2R} ${A2R} ${ROff} ${R2G} ${G2G} ${B2G} ${A2G} ${GOff} ${R2B} ${G2B} ${B2B} ${A2B} ${BOff} ${R2A} ${G2A} ${B2A} ${A2A} ${AOff}`) :
			`${R2R} ${G2R} ${B2R} ${A2R} ${ROff} ${R2G} ${G2G} ${B2G} ${A2G} ${GOff} ${R2B} ${G2B} ${B2B} ${A2B} ${BOff} ${R2A} ${G2A} ${B2A} ${A2A} ${AOff}`;

			// Safari-compatible animations
			const shineAnimation1 = safari ?
						`<animateTransform id="shine-${svgId}" attributeName="transform" type="translate" values="0,0; 110,0" dur="1s" begin="0s; 6s" fill="freeze" />` :
			`<animate id="shine-${svgId}" attributeName="d" values="M -10 90 L 0 100 L 100 0 L 90 -10; M 50 150 L 60 160 L 160 60 L 150 50" dur="1s" begin="0s;shine-${svgId}.end+5s" fill="freeze" />`;

			const shineAnimation2 = safari ?
						`<animateTransform attributeName="transform" type="translate" values="0,0; -110,0" dur="1s" begin="0.5s; 6.5s" fill="freeze" />` :
			`<animate attributeName="d" values="M 40 140 L 50 150 L 150 50 L 140 40; M -60 40 L -50 50 L 50 -50 L 40 -60" dur="1s" begin="0.5s;shine-${svgId}.end+5.5s" fill="freeze" />`;

			// Safari uses simpler shine elements
			const shineElement1 = safari ?
						`<rect x="-10" y="90" width="20" height="20" fill="#fff" opacity="0.8" transform="rotate(-45 0 100)">${shineAnimation1}</rect>` :
			`<path d="M -10 90 L 0 100 L 100 0 L 90 -10" fill="#fff">${shineAnimation1}</path>`;

			const shineElement2 = safari ?
						`<rect x="40" y="140" width="20" height="20" fill="#fff" opacity="0.6" transform="rotate(-45 50 150)">${shineAnimation2}</rect>` :
			`<path d="M 40 140 L 50 150 L 150 50 L 140 40" fill="#fff" opacity="0.8">${shineAnimation2}</path>`;

			// Remove nested filter for Safari
			const starGroup = safari ?
						`<g><path d="M 50 0 l 11 35 h 37 l -30 22 l 11 34 l -29 -21 l -29 21 l 11 -34 l -30 -22 h 37 z M 50 25 l 5.5 17.5 h 18.5 l -15 11 l 5.5 17 l -14.5 -10.5 l -14.5 10.5 l 5.5 -17 l -15 -11 h 18.5 z" fill="none" stroke="#000" stroke-width="2" /></g>` :
			`<g filter="url(#filter-${svgId})"><path d="M 50 0 l 11 35 h 37 l -30 22 l 11 34 l -29 -21 l -29 21 l 11 -34 l -30 -22 h 37 z M 50 25 l 5.5 17.5 h 18.5 l -15 11 l 5.5 17 l -14.5 -10.5 l -14.5 10.5 l 5.5 -17 l -15 -11 h 18.5 z" fill="none" stroke="#000" stroke-width="2" /></g>`;
			
			return `<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 100 100" id="${svgId}" height="100%" width="100%">
					<defs>
						<filter id="filter-${svgId}" filterUnits="${filterUnits}" primitiveUnits="userSpaceOnUse">
							<feFlood flood-color="${rgb}" result="background"/>
							<feTurbulence baseFrequency="${bfRand}" numOctaves="${randOct}" seed="${randSeed}" result="turbulence"/>
							${animated}
							<feColorMatrix in="${colorMatrixInput}" values="${colorMatrixValues}" result="colorMatrix"/>
							<feComposite operator="over" in="colorMatrix" in2="background" result="composite"/>
							<feComposite operator="in" in="composite" in2="SourceGraphic" result="final"/>
						</filter>
						<clipPath id="medalMask-${svgId}">
							<circle cx="50" cy="50" r="35" clip-rule="evenodd" /> 
						</clipPath>
					</defs>
					<g filter="url(#filter-${svgId})">
						<path d="M0 0l33 33h20l-10-33z" />
						<path d="M100 0l-33 33h-20l10-33z" />
					</g>
					<path d="M0 0l33 33h20l-10-33z" fill="none" stroke="#000" />
					<path d="M100 0l-33 33h-20l10-33z" fill="none" stroke="#000" />
					<g id="medalBody-${svgId}" fill="gold" clip-path="url(#medalMask-${svgId})">
						<circle cx="50" cy="50" r="35" />
						<circle cx="50" cy="50" r="35" fill="#000" opacity="0.2" />
						${shineElement1}
						<path d="M 0 0 V 100 L 100 0 Z" />
						<path d="M 0 0 V 100 L 100 0 Z" fill="#fff" opacity="0.2" />
						<circle cx="50" cy="50" r="30" />
						${starGroup}
						${shineElement2}
					</g>
				</svg>`;
		})();

		return svg;
	}

	renderSVGToElement(svgString, elementOrSelector) {
		let element;
		if (typeof elementOrSelector === 'string') {
			element = document.querySelector(elementOrSelector);
		} else {
			element = elementOrSelector;
		}
		if (!element) {
			console.error('Element not found:', elementOrSelector);
			return false;
		}
		element.innerHTML = svgString;
		return true;
	}

	renderTodaySVGToElement(elementOrSelector) {
		const todaySeed = this.dateStringToInt(this.getTodayDateString());
		const svg = this.randomSVGfilter(todaySeed);
		return this.renderSVGToElement(svg, elementOrSelector);
	}

	renderSVGBySeedToElement(seed, elementOrSelector) {
		const svg = this.randomSVGfilter(seed);
		return this.renderSVGToElement(svg, elementOrSelector);
	}

	getAllVisitSeeds() {
		return this.getVisits();
	}
	/**
     * Get comprehensive stats about visits
     */
	getStats() {
		const visits = this.getVisits();
		return {
			totalVisits: visits.length,
			longestStreak: this.findLongestStreak(visits),
			currentStreak: this.getCurrentStreak(),
			firstVisit: visits.length > 0 ? this.intToDateString(visits[0]) : null,
			lastVisit: visits.length > 0 ? this.intToDateString(visits[visits.length - 1]) : null,
			todaySeed: this.dateStringToInt(this.getTodayDateString())
		};
	}

	clearAllVisits() {
		localStorage.removeItem('visits');
	}
}

const tracker = new VisitTracker();
const slideOutMenu = document.getElementById('slideOutMenu');
const menuOverlay = document.getElementById('menuOverlay');
const hamburgerMenuBtn = document.getElementById('hamburgerMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const achieveMedalBtn = document.getElementById('achieveMedalBtn');
const trophyCaseMedalsContainer = document.getElementById('trophyCaseMedals');
const virtualScrollContainer = document.getElementById('virtualScrollContainer');

let allMedalSeeds = []; // Stores all visit seeds for virtual scrolling
const medalWidth = 100; // Each medal is 100px wide
const medalPadding = 8; // Padding around each medal item (0.5rem)
const medalGridGap = 16; // The --medal-grid-gap in CSS (1rem)

// --- EDIT THIS JAVASCRIPT VARIABLE TO CHANGE MEDALS PER ROW ---
// This should match the CSS custom property '--medals-per-row' in .trophy-case-medals
const medalsPerRow = 3; // Change this to 1, 2, 3, 4, etc.
// -------------------------------------------------------------

// Visual height of one medal item including its padding
const visualMedalItemHeight = medalWidth + (2 * medalPadding); // 100 + 16 = 116px
// Total row height including the gap between rows
const rowHeight = visualMedalItemHeight + medalGridGap; // 116 + 16 = 132px

// Function to toggle the slide-out menu
function toggleMenu() {
	slideOutMenu.classList.toggle('open');
	menuOverlay.classList.toggle('open');
	if (slideOutMenu.classList.contains('open')) {
		updateTrophyCase(); // Update medals when opening the menu
	}
}

// Virtual Scrolling Logic
function renderMedalsInView() {
	const containerScrollTop = trophyCaseMedalsContainer.scrollTop;
	const containerHeight = trophyCaseMedalsContainer.clientHeight;
	const totalRows = Math.ceil(allMedalSeeds.length / medalsPerRow);
	const totalHeight = totalRows * rowHeight;

	virtualScrollContainer.style.height = `${totalHeight}px`;

	const startRow = Math.max(0, Math.floor(containerScrollTop / rowHeight) - 1);
	const endRow = Math.min(totalRows - 1, Math.ceil((containerScrollTop + containerHeight) / rowHeight) + 1);

	const startIndex = startRow * medalsPerRow;
	const endIndex = Math.min(allMedalSeeds.length, (endRow + 1) * medalsPerRow);

	const fragment = document.createDocumentFragment();

	for (let i = startIndex; i < endIndex; i++) {
		const seed = allMedalSeeds[i];
		if (seed !== undefined) {
			const medalSVG = tracker.randomSVGfilter(seed, 'trophy');
			const medalItem = document.createElement('div');
			medalItem.classList.add('medal-item');
			medalItem.setAttribute('title', `Medal achieved: ${tracker.intToDateStringHR(seed)}`);
			// Create a temporary wrapper to parse the SVG string
			const tempWrapper = document.createElement('div');
			tempWrapper.innerHTML = medalSVG;
			// Clone and append the SVG to the medal-item div
			const trophyChild = tempWrapper.firstChild;
			medalItem.appendChild(trophyChild);
			// Append the medal-item div to the fragment
			fragment.appendChild(medalItem);
		}
	}

	const offset = startRow * rowHeight;
	virtualScrollContainer.style.transform = `translateY(${offset}px)`;

	let medalGridInner = virtualScrollContainer.querySelector('.medal-grid');
	if (!medalGridInner) {
		medalGridInner = document.createElement('div');
		medalGridInner.classList.add('medal-grid');
		virtualScrollContainer.appendChild(medalGridInner);
	}
	// Clear existing content safely
	while (medalGridInner.firstChild) {
		medalGridInner.removeChild(medalGridInner.firstChild);
	}
	// Append the new content from the document fragment in a single operation
	medalGridInner.appendChild(fragment);
}

// Function to update the trophy case
function updateTrophyCase() {
	allMedalSeeds = tracker.getAllVisitSeeds();
	renderMedalsInView();
}


function winMedal() {
	// This ensures only today's medal is added, and only if it doesn't already exist.
	tracker.addVisit();
	
	updateTrophyCase(); // Refresh the trophy case display
	displayTodayMedal(document.querySelector('#todaysMedal'))
}

function displayTodayMedal(targetElement) {
	// Ensure the tracker instance is available globally or passed in.
	// Assuming 'tracker' is already instantiated from the existing Canvas code.
	if (typeof tracker === 'undefined') {
		console.error("VisitTracker instance 'tracker' not found. Please ensure it's initialized.");
		return false;
	}
	return tracker.renderTodaySVGToElement(targetElement);
}

function populateStats(){
	const stats = tracker.getStats();
	return stats;
}

/**
  * Updates the display of current and longest streak badges.
  * The UI adjusts dynamically based on whether the streaks are the same.
  */
function updateStreakBadges(currentStreak, longestStreak) {
	const currentStreakValueElement = document.getElementById('currentStreakValue');
	const longestStreakValueElement = document.getElementById('longestStreakValue');
	const currentStreakBadge = document.getElementById('currentStreakBadge');
	const longestStreakBadge = document.getElementById('longestStreakBadge');

	// Update numerical values
	currentStreakValueElement.textContent = currentStreak;
	longestStreakValueElement.textContent = longestStreak;

	// Reset classes
	currentStreakBadge.classList.remove('hidden');
	longestStreakBadge.classList.remove('current-record');

	if (currentStreak === longestStreak && currentStreak > 0) {
		longestStreakBadge.classList.add('current-record');
	} else if (currentStreak > longestStreak) {
		longestStreakValueElement.textContent = currentStreak;
		longestStreakBadge.classList.add('current-record');
	}
}


hamburgerMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

// Initialize with default values on page load
document.addEventListener('DOMContentLoaded', () => {
	const stats = populateStats();
	console.log(stats);
	updateStreakBadges(stats.currentStreak, stats.longestStreak); // You can replace with actual initial values from local storage/data
});