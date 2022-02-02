console.log("[GatherCheats] inject completed");
console.log("[GatherCheats] initializing GatherCheats functions");

// flags
telemove       = 0;
squaredance    = 0;
updowndance    = 0;
rightleftdance = 0;


// global parameters
boost = 3;   // speed for teleport move
dancespeed = 200;  // dancing speed


// private functions
function GetPos() {
  curStats = gameSpace.gameState[gameSpace.id];
  return {x:curStats.x, y:curStats.y};
};


// teleport move
//   description: use arrow key to move anywhere without colliding to object. (can go anywhere)
//   * boost variable: value of speed
document.onkeydown = function (event) {
	if(telemove==1) {
		curPos   = GetPos();
		curMapId = gameSpace.mapId;

		switch (event.keyCode) {
			case 37: // left arrow
				game.teleport(curMapId, curPos.x-boost, curPos.y);
				break;
			case 38: // up arrow
				game.teleport(curMapId, curPos.x, curPos.y-boost);
				break;
			case 39: // right arrow
				game.teleport(curMapId, curPos.x+boost, curPos.y);
				break;
			case 40: // down arrow
				game.teleport(curMapId, curPos.x, curPos.y+boost);
				break;
		}
	}
};
window.addEventListener("teleportmove_enable", function() {
	telemove = 1;
}, false);
window.addEventListener("teleportmove_disable", function() {
	telemove = 0;
}, false);
window.addEventListener("changeboost", e => {
	boost = e.detail;
}, false);


// square dance
// description: square dance until squaredance flag is set to 0
// * dancespeed: speed of dancing
async function SquareDance() {
	curPos   = GetPos();
	curMapId = gameSpace.mapId;

	squaredance = 1;
	while(squaredance==1) {
	  gameSpace.dance();
	  game.teleport(curMapId, curPos.x, curPos.y-1);
	  await new Promise(r => setTimeout(r, dancespeed)); // one up

	  gameSpace.dance();
	  game.teleport(curMapId, curPos.x+1, curPos.y);
	  await new Promise(r => setTimeout(r, dancespeed));

	  gameSpace.dance();
	  game.teleport(curMapId, curPos.x+1, curPos.y);
	  await new Promise(r => setTimeout(r, dancespeed)); // two right

	  gameSpace.dance();
	  game.teleport(curMapId, curPos.x, curPos.y+1);
	  await new Promise(r => setTimeout(r, dancespeed));

	  gameSpace.dance();
	  game.teleport(curMapId, curPos.x, curPos.y+1);
	  await new Promise(r => setTimeout(r, dancespeed)); // two down

	  gameSpace.dance();
	  game.teleport(curMapId, curPos.x-1, curPos.y);
	  await new Promise(r => setTimeout(r, dancespeed));

	  gameSpace.dance();
	  game.teleport(curMapId, curPos.x-1, curPos.y);
	  await new Promise(r => setTimeout(r, dancespeed)); // two left

	  gameSpace.dance();
	  game.teleport(curMapId, curPos.x, curPos.y-1);
	  await new Promise(r => setTimeout(r, dancespeed)); // one up
	}
}
window.addEventListener("squaredance_enable", function() {
	SquareDance();
}, false);
window.addEventListener("squaredance_disable", function() {
	squaredance = 0;
}, false);


// updown dance
// description: updown dance until updowndance flag is set to 0
// * dancespeed: speed of dancing
async function UpDownDance() {
	curPos   = GetPos();
	curMapId = gameSpace.mapId;

	updowndance = 1;
	while(updowndance==1) {
	  gameSpace.dance();
	  game.teleport(curMapId, curPos.x, curPos.y-1);
	  await new Promise(r => setTimeout(r, dancespeed)); // one up

	  gameSpace.dance();
	  game.teleport(curMapId, curPos.x, curPos.y+1);
	  await new Promise(r => setTimeout(r, dancespeed));

	  gameSpace.dance();
	  game.teleport(curMapId, curPos.x, curPos.y+1);
	  await new Promise(r => setTimeout(r, dancespeed)); // two down

	  gameSpace.dance();
	  game.teleport(curMapId, curPos.x, curPos.y-1);
	  await new Promise(r => setTimeout(r, dancespeed)); // one up
	}
}
window.addEventListener("updowndance_enable", function() {
	UpDownDance();
}, false);
window.addEventListener("updowndance_disable", function() {
	updowndance = 0;
}, false);


// rightleft dance
// description: rightleft dance until rightleftdance flag is set to 0
// * dancespeed: speed of dancing
async function RightLeftDance() {
	curPos   = GetPos();
	curMapId = gameSpace.mapId;

	rightleftdance = 1;
	while(rightleftdance==1) {
	  gameSpace.dance();
	  game.teleport(curMapId, curPos.x+1, curPos.y);
	  await new Promise(r => setTimeout(r, dancespeed)); // one right

	  gameSpace.dance();
	  game.teleport(curMapId, curPos.x-1, curPos.y);
	  await new Promise(r => setTimeout(r, dancespeed));

	  gameSpace.dance();
	  game.teleport(curMapId, curPos.x-1, curPos.y);
	  await new Promise(r => setTimeout(r, dancespeed)); // two left

	  gameSpace.dance();
	  game.teleport(curMapId, curPos.x+1, curPos.y);
	  await new Promise(r => setTimeout(r, dancespeed)); // one right
	}
}
window.addEventListener("rightleftdance_enable", function() {
	RightLeftDance();
}, false);
window.addEventListener("rightleftdance_disable", function() {
	rightleftdance = 0;
}, false);


window.addEventListener("changedancespeed", e => {
	dancespeed = e.detail;
}, false);


// ghost function
//  - enabled=1 => enable
//  - enabled=0 => disable
async function Ghost(enabled) {
	game.ghost(enabled, undefined);
}
window.addEventListener("ghost_enable", function() {
	Ghost(1);
}, false);
window.addEventListener("ghost_disable", function() {
	Ghost(0);
}, false);


// single emote
//   - emotion: single word or emoji
async function SingleEmote(emotion) {
	game.setEmote(emotion, undefined)
}
window.addEventListener("outputsingleemote", e => {
	SingleEmote(e.detail);
}, false);


// multi emote
//   - msg: message(string) is shown one word at a time
async function MultiEmote(msg) {
	for(c in msg) {
		game.setEmote(msg.charAt(c), undefined);
		await new Promise(r => setTimeout(r, 500));
	}
	game.setEmote("", undefined);
}
window.addEventListener("outputmultiemote", e => {
	MultiEmote(e.detail);
}, false);

console.log("[GatherCheats] initializing complete");
