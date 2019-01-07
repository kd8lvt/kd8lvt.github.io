var mediums = {bolt:"thaumcraft.BOLT",cloud:"thaumcraft.CLOUD",mine:"thaumcraft.MINE",projectile:"thaumcraft.PROJECTILE",bat:"thaumcraft.SPELLBAT",touch:"thaumcraft.TOUCH",root:"ROOT"};
var mods = {scatter:"thaumcraft.SCATTER",splitTraj:"thaumcraft.SPLITTRAJECTORY",splitTarg:"thaumcraft.SPLITTARGET"};
var effects = {air:"thaumcraft.AIR",break:"thaumcraft.BREAK",curse:"thaumcraft.CURSE",earth:"thaumcraft.EARTH",exchange:"thaumcraft.EXCHANGE",fire:"thaumcraft.FIRE",flux:"thaumcraft.FLUX",ice:"thaumcraft.FROST",heal:"thaumcraft.HEAL",rift:"thaumcraft.RIFT"};
var types = {medium:"MEDIUM",mod:"MOD",effect:"EFFECT"}

var Node = function(type,key){
	this._type = type;
	this._key = key;
	this._nbt = {type:this._type,key:this._key};

	this.setType = function(type) {
		this._type = type;
		return this;
	};
	this.setKey = function(key) {
		this._key = key;
		return this;
	};

	this.addElement = function(key,value) {
		this._nbt[key] = value;
		return this;
	};

	this.getType = function() {
		return this._type;
	};
	this.getKey = function() {
		return this._key;
	};

	this.getNBT = function() {
		return this._nbt;
	};
};

var Focus = function() {
	this._nodes = [],
	this._nbt = {package:{complexity:5,nodes:[]},index:0,power:1.0},

	this.addNode = function(node) {
		this._nodes.push(node.getNBT());
		this._nbt.package.nodes = this.nodes;
		return this;
	};

	this.setPower = function(power) {
		if (typeof power != "float") {
			console.error("Typeof 'power' must be 'float'.");
			return this;
		} else {
			if (power > 2.0) {
				console.log("WARNING: Desired power is greater than 2.0! This may cause odd behavior such as insta-kill Foci, or bedrock-breaking shenanigans! Be careful!");
			}
			this._nbt.power = power;
			return this;
		}
	}

	this.init = function() {
		this.addNode(new Node(types.medium,mediums.root));
		return this;
	};

	this.getNodes = function() {
		return this._nodes;
	};
	this.getNBT = function() {
		this._nbt.package.nodes = this._nodes;
		return this._nbt;
	};
	this.export = function() {
		console.log("Beginning export. This may take a few moments on particuarly large Foci.");
		var nbt = JSON.stringify(this.getNBT());
		for (var i=0;i<nbt.length;i++) {
			nbt = nbt.replace('{"','{');
			nbt = nbt.replace('":',':');
			nbt = nbt.replace(',"',',');
		}
		//console.log('Exported NBT: "'+nbt+'"');
		return nbt;
	};

	this.command = function() {
		var nbt = this.export();
		var cmd = '/summon Item ~ ~1 ~ {Item:{id:"thaumcraft:focus_3",Count:1,tag:'+nbt+',Damage:0}}';
		console.log('Your command: "'+cmd+'"');
	}
};

function Docs(obj) {
	if (obj == types || obj == "types") {
		console.log("These are all the 'types' - basically, these tell Thaumcraft 6 what to expect as the 'key'. There are three types - \"MEDIUM\",\"EFFECT\", and \"MOD\"s. Mediums are the way your foci moves the effects around, Effects are what happens when the Medium triggers, and Mods modify how the medium does it's job.");
	} else if (obj == mediums || obj == "mediums") {
		console.log("These are all the available Mediums in Thaumcraft 6. They are the way your Effects get around.");
	} else if (obj == effects || obj == "effects") {
		console.log("Effects are what happens when a Medium is triggered - whether it be a Mine gets tripped, or a Projectile hits a block / entity, Effects are what happens next. For example, the Fire effect applies Fire damage to hit entities, and lights hit blocks on fire.");
	} else if (obj == mods || obj == "mods") {
		console.log("Mods affect how Mediums do their job. The Scatter medium, for example, splits into *setting.forks* directions, all within about *setting.cone* degrees from the original direction.");
	} else if (obj == mediums.bat || obj == 'bat' || obj == "bats") {
		console.log("The Spellbat Medium summons a Spellbat, which targets the nearest *setting.target* entity (0 is hostile, 1 is friendly - including you), and begins applying it's effect(s).");
	} else {
		console.log('"'+obj+"\" hasn't been given a Docs() entry yet!");
	}
}