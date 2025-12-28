/*	-INFORMATION-
	Subject:	Species, Armor, Weapons
	Effect:		This script adds the homebrew species "Magnaranea silva" by MasterJedi2014. It also adds to the custom Armor & Weapons from this Species.
	Code by:	MasterJedi2014, using MorePurpleMoreBetter's code as reference
	Date:		2025-12-28 (sheet v13.2.3)
*/

var iFileName = "Magnaranea silva [by MasterJedi2014] V3.js";
RequiredSheetVersion("13.2.3");

SourceList["MJ:HB"] = {
	name : "MasterJedi2014's Homebrew",
	abbreviation : "MJ:HB",
	date : "2024/1/1",
};

// Add the M. silva species & its two lineages
RaceList["magnaranea silva"] = {
	regExpSearch : /^(?=.*magnaranea)(?=.*silva).*$/i,
	name : "Magnaranea silva",
	source : ["MJ:HB", 0],
	size : [0,1,2,3,4],
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : 30, enc : 20 },
	},
	languageProfs : ["Arachnid (Verbal & Vibrational)"],
	vision : [["Darkvision", 60], ["Blindsight", 10], ["Psionic Telepathy", 200]],
	age : "M. silva are considered an adult around the age of 200, and live between 700-1000 years.",
	height : "M. silva range from 23'-42' tall (22' + 1d20') as adults \u0026 are twice as wide.",
	weight : "M. silva typically weigh between 72,500-82,500 lb (72,380 + (1d20 \xD7 100 \xD7 (5d4 / 1d4)) lb) as adults.",
	heightMetric : "M. silva range from 7-13 metres tall (89 + 9d10 cm) as adults \u0026 twice as wide.",
	weightMetric : "M. silva typically weigh between 32,885-37,425 kg (32,658 + (1d20 \xD7 227) kg) as adults.",
	trait : "Magnaranea silva:\n   Blindsight: I can see in total Darkness within 3m (10’) of my feet as if it were Bright Light.\n   Darkvision: I have Darkvision with a range of 18m (60') from my feet.\n   Spider Whisperer: I innately can communicate with other arachnids, regardless of whether or not said arachnid has a language.\n   Spider Language: I innately have a non-telepathic language I can speak that consists of various clicking, chirping, \u0026 trilling noises. I also know an alternate version of this language that uses the vibrations of webbing to communicate. Other non-arachnid creatures can learn these languages, but most will be unable to perfectly speak the vocal one themselves.\n   Monstrous Nature: My Creature Type is Monstrosity.\n   See pg3 Notes for additional Species info.",
	toNotesPage : [{
		name : "Magnaranea silva Traits (Continued)",
		note : [
			"Web Sense: While in contact with a web, I know the exact location of any other creature in contact with the same web.",
			"Web Walker: I ignore movement restrictions caused by webbing.",
			"No Hands: My limbs and pedipalps have cling pads and three relatively small retractable claws (<5cm(2”) at age 60), allowing me to use weapons and other objects made for Humanoids, but I may not add my Proficiency Bonus to attack rolls with any Humanoid weapons I use. In order to add my Proficiency Bonus from Weapon Training to attack rolls, I must acquire weapons specially made for my body plan. Weapons provided with my starting gear are already considered to have been specially made for my body plan.",
			"   New weapons made for my body plan cost 50% more than they otherwise would. Magical weapons instead cost an extra 50% of the base weapon type per rarity of magical weapon.",
			"   Until the age of 200, any specially made gear for me will have to be adjusted every year to account for my larger size if I wish to keep using that gear, requiring a cost equal to 10% of the gear’s crafting/purchase price.",
			"Natural Chitin Armor: I have some natural chitin armor, enough to give me a base AC of 14. Due to my arachnid body, I cannot equip normal armor. My base AC will rise by one (1) every 35 years over the age of 60 I am, capping out at an unarmored AC of 18 at the age of 200.",
			"   Any armor that would give me extra AC will be very rare or very expensive custom made armor. Such armor will costs four times the equivalent armor made for Humanoids, and it weighs twice as much. Magical armor increases in price to accommodate my body plan from the standard magical armor price by an amount equal to three times the cost of a non-magical set of the base armor.",
			"   Until the age of 200, any specially made gear for me will have to be adjusted every year to account for my larger size if I wish to keep using that gear, requiring a cost equal to 10% of the gear’s crafting/purchase price.",
			"   Alternate Rules: At character levels 4, 8, 12, & 16, my AC rises by one (1) up to a maximum AC of 18.",
			"The Bigger You Are: My Strength stat will automatically rise by one (1) for every 35 yrs over the age of 60 I am until I reach the age of 200.",
			"   Alternate Rules: At character levels 4, 8, 12, & 16, my Strength stat rises by one (1). This will not occur past 16th level.",
			"Natural Resilience: For each level past character level 1, the HP to be added to my HP pool will be rolled with Advantage if I am rolling for HP gain. Furthermore, regardless of my chosen class, I use d8s as my Hit Die.",
			"Natural Telepath: I only speak with non-arachnids via psionic Telepathy. Range 60m (200') [40 Squares]. I can mentally talk with one Creature; this is a two-way conversation. I can mentally talk to up to 10 Creatures at once at the cost of the range of communication dropping to 6m (20’). Put another way, each additional Creature past the first lowers the range by 5.5m (18’).",
			"   Optional Rules: The range and number for multi-Creature communication increases by 6m (20’) & 5 Creatures respectively for every 35 yrs over the age of 60 I am, capping out at a total range of 90m (300’) \u0026 a total of 30 Creatures at the age of 200.",
			"   Alternate Optional Rules: The range and number for multi-Creature communication increase by 1.2m (4’) & 1 Creature respectively for every 7 yrs over the age of 60 I am, capping out at a total range of 90m (300’) \u0026 a total of 30 Creatures at the age of 200.",
			"Forest Guardian: I am part of a lineage that grants me supernatural abilities. Choose a lineage from the Forest Guardian Lineages table. I gain the level 1 benefit of that lineage.",
			"   When I reach character levels 3 and 5, I learn a higher-level spell, as shown on the table. I always have that spell prepared. I can cast it once without a spell slot, and I regain the ability to cast it in that way when I finish a Long Rest. I can also cast the spell using any spell slots I have of the appropriate level.",
			"   Intelligence, Wisdom, or Charisma is my spellcasting ability for the spells I cast with this trait (choose the ability when I select the lineage).",
		],
		page3notes : true,
		popupName : "Magnaranea silva Traits (Continued)",
		source : ["MJ:HB", 0],
	}],
	variants: ["clerical", "druidic"],
};
RaceSubList["magnaranea silva-clerical"] = {
	regExpSearch: /^(?=.*magnaranea)(?=.*silva)(?=.*clerical|cleric).*$/i,
	name: "Clerical Magnaranea silva",
	sortname: "Magnaranea silva, Clerical",
	trait : "Magnaranea silva (Clerical Lineage):\n   Blindsight: I can see in total Darkness within 3m (10’) of my feet as if it were Bright Light.\n   Darkvision: I have Darkvision with a range of 18m (60') from my feet.\n   Spider Whisperer: I innately can communicate with other arachnids, regardless of whether or not said arachnid has a language.\n   Spider Language: I innately have a non-telepathic language I can speak that consists of various clicking, chirping, \u0026 trilling noises. I also know an alternate version of this language that uses the vibrations of webbing to communicate. Other non-arachnid creatures can learn these languages, but most will be unable to perfectly speak the vocal one themselves.\n   Monstrous Nature: My Creature Type is Monstrosity.\n   See pg3 Notes for additional Species info.",
	toNotesPage : [{
		name : "Magnaranea silva Traits (Continued)",
		note : [
			"Web Sense: While in contact with a web, I know the exact location of any other creature in contact with the same web.",
			"Web Walker: I ignore movement restrictions caused by webbing.",
			"No Hands: My limbs and pedipalps have cling pads and three relatively small retractable claws (<5cm(2”) at age 60), allowing me to use weapons and other objects made for Humanoids, but I may not add my Proficiency Bonus to attack rolls with any Humanoid weapons I use. In order to add my Proficiency Bonus from Weapon Training to attack rolls, I must acquire weapons specially made for my body plan. Weapons provided with my starting gear are already considered to have been specially made for my body plan.",
			"   New weapons made for my body plan cost 50% more than they otherwise would. Magical weapons instead cost an extra 50% of the base weapon type per rarity of magical weapon.",
			"   Until the age of 200, any specially made gear for me will have to be adjusted every year to account for my larger size if I wish to keep using that gear, requiring a cost equal to 10% of the gear’s crafting/purchase price.",
			"Natural Chitin Armor: I have some natural chitin armor, enough to give me a base AC of 14. Due to my arachnid body, I cannot equip normal armor. My base AC will rise by one (1) every 35 years over the age of 60 I am, capping out at an unarmored AC of 18 at the age of 200.",
			"   Any armor that would give me extra AC will be very rare or very expensive custom made armor. Such armor will costs four times the equivalent armor made for Humanoids, and it weighs twice as much. Magical armor increases in price to accommodate my body plan from the standard magical armor price by an amount equal to three times the cost of a non-magical set of the base armor.",
			"   Until the age of 200, any specially made gear for me will have to be adjusted every year to account for my larger size if I wish to keep using that gear, requiring a cost equal to 10% of the gear’s crafting/purchase price.",
			"   Alternate Rules: At character levels 4, 8, 12, & 16, my AC rises by one (1) up to a maximum AC of 18.",
			"The Bigger You Are: My Strength stat will automatically rise by one (1) for every 35 yrs over the age of 60 I am until I reach the age of 200.",
			"   Alternate Rules: At character levels 4, 8, 12, & 16, my Strength stat rises by one (1). This will not occur past 16th level.",
			"Natural Resilience: For each level past character level 1, the HP to be added to my HP pool will be rolled with Advantage if I am rolling for HP gain. Furthermore, regardless of my chosen class, I use d8s as my Hit Die.",
			"Natural Telepath: I only speak with non-arachnids via psionic Telepathy. Range 60m (200') [40 Squares]. I can mentally talk with one Creature; this is a two-way conversation. I can mentally talk to up to 10 Creatures at once at the cost of the range of communication dropping to 6m (20’). Put another way, each additional Creature past the first lowers the range by 5.5m (18’).",
			"   Optional Rules: The range and number for multi-Creature communication increases by 6m (20’) & 5 Creatures respectively for every 35 yrs over the age of 60 I am, capping out at a total range of 90m (300’) \u0026 a total of 30 Creatures at the age of 200.",
			"   Alternate Optional Rules: The range and number for multi-Creature communication increase by 1.2m (4’) & 1 Creature respectively for every 7 yrs over the age of 60 I am, capping out at a total range of 90m (300’) \u0026 a total of 30 Creatures at the age of 200.",
			"Forest Guardian: I am part of a clerical lineage that grants me supernatural abilities. I know the Spare the Dying cantrip & can replace it with another from the Cleric spell list at the end of a Long Rest. I also know the Mage Hand cantrip; it cannot be replaced with another cantrip.",
			"   When I reach character level 3, I learn the spell Ceremony. When I reach character level 5, I learn my choice of the Borrowed Knowledge or Prayer of Healing spells; my choice here is permanent. I always have these spell prepared, \u0026 can cast them once without a spell slot, after which I regain the ability to cast each in that way when I finish a Long Rest. I can also cast these spells using any spell slots I have of the appropriate level.",
			"   Intelligence, Wisdom, or Charisma is my spellcasting ability for the spells I cast with this trait (choose the ability when I select the lineage).",
		],
		page3notes : true,
		popupName : "Magnaranea silva Traits (Continued)",
		source : ["MJ:HB", 0],
	}],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name: "Clerical M silva Cantrip",
		"class": ["cleric"],
		selection: ["spare the dying"],
		level: [0, 0],
		times: 1,
		firstCol: "atwill",
	}, {
		name: "M silva Mage Hand",
		spells: ["mage hand"],
		selection: ["mage hand"],
		times: 1,
		firstCol: "atwill",
	}],
	features : {
		"magnaranea silva equip lineage1" : {
			name : "M silva Bite, Web, & Armor Equip",
			minlevel : 1,
			limfeaname : "Venom Charges",
			usages : 12,
			recovery : "12min/ea",
			armorAdd : {
				select : ["M silva Chitin Carapace (Base)"],
				options : ["M silva Chitin Carapace (Base)", "M silva Chitin Carapace (Base+1)", "M silva Chitin Carapace (Base+2)", "M silva Chitin Carapace (Base+3)", "M silva Chitin Carapace (Base+4)"],
			},
			weaponsAdd : {
				select : ["M silva Bite (Base)", "M silva Web (Recharge 5-6)"],
				options : ["M silva Bite (Base)", "M silva Bite (Base+1)", "M silva Bite (Base+2)", "M silva Bite (Base+3)", "M silva Bite (Base+4)", "M silva Web (Recharge 5-6)"],
			},
		},
		"clerical magnaranea silva lineage3" : {
			name : "Clerical M silva Lineage: Lvl 3 Spell",
			minlevel : 3,
			limfeaname : "Ceremony",
			usages: 1,
			recovery: "long rest",
			description: desc([
				"When I reach character level 3 I learn the Ceremony spell.",
			]),
			spellcastingBonus: [{
				name: "Clerical M silva Lineage: Lvl 3",
				spells: ["ceremony"],
				selection: ["ceremony"],
				times: 1,
				firstCol: "oncelr",
			}],
		},
		"clerical magnaranea silva lineage5" : {
			name : "Clerical M silva Lineage: Lvl 5 Spell",
			minlevel : 5,
			usages: 1,
			recovery: "long rest",
			description: desc([
				"When I reach character level 5 I learn my choice of the Borrowed Knowledge or Prayer of Healing spells. This choice is permanent.",
			]),
			spellcastingBonus: [{
				name: "Clerical M silva Lineage: Lvl 5",
				spells: ["borrowed knowledge", "prayer of healing"],
				selection: ["borrowed knowledge", "prayer of healing"],
				times: 1,
				firstCol: "oncelr",
			}],
		},
	},
};
RaceSubList["magnaranea silva-druidic"] = {
	regExpSearch: /^(?=.*magnaranea)(?=.*silva)(?=.*druidic|druid).*$/i,
	name: "Druidic Magnaranea silva",
	sortname: "Magnaranea silva, Druidic",
	trait : "Magnaranea silva (Druidic Lineage):\n   Blindsight: I can see in total Darkness within 3m (10’) of my feet as if it were Bright Light.\n   Darkvision: I have Darkvision with a range of 18m (60') from my feet.\n   Spider Whisperer: I innately can communicate with other arachnids, regardless of whether or not said arachnid has a language.\n   Spider Language: I innately have a non-telepathic language I can speak that consists of various clicking, chirping, \u0026 trilling noises. I also know an alternate version of this language that uses the vibrations of webbing to communicate. Other non-arachnid creatures can learn these languages, but most will be unable to perfectly speak the vocal one themselves.\n   Monstrous Nature: My Creature Type is Monstrosity.\n   See pg3 Notes for additional Species info.",
	toNotesPage : [{
		name : "Magnaranea silva Traits (Continued)",
		note : [
			"Web Sense: While in contact with a web, I know the exact location of any other creature in contact with the same web.",
			"Web Walker: I ignore movement restrictions caused by webbing.",
			"No Hands: My limbs and pedipalps have cling pads and three relatively small retractable claws (<5cm(2”) at age 60), allowing me to use weapons and other objects made for Humanoids, but I may not add my Proficiency Bonus to attack rolls with any Humanoid weapons I use. In order to add my Proficiency Bonus from Weapon Training to attack rolls, I must acquire weapons specially made for my body plan. Weapons provided with my starting gear are already considered to have been specially made for my body plan.",
			"   New weapons made for my body plan cost 50% more than they otherwise would. Magical weapons instead cost an extra 50% of the base weapon type per rarity of magical weapon.",
			"   Until the age of 200, any specially made gear for me will have to be adjusted every year to account for my larger size if I wish to keep using that gear, requiring a cost equal to 10% of the gear’s crafting/purchase price.",
			"Natural Chitin Armor: I have some natural chitin armor, enough to give me a base AC of 14. Due to my arachnid body, I cannot equip normal armor. My base AC will rise by one (1) every 35 years over the age of 60 I am, capping out at an unarmored AC of 18 at the age of 200.",
			"   Any armor that would give me extra AC will be very rare or very expensive custom made armor. Such armor will costs four times the equivalent armor made for Humanoids, and it weighs twice as much. Magical armor increases in price to accommodate my body plan from the standard magical armor price by an amount equal to three times the cost of a non-magical set of the base armor.",
			"   Until the age of 200, any specially made gear for me will have to be adjusted every year to account for my larger size if I wish to keep using that gear, requiring a cost equal to 10% of the gear’s crafting/purchase price.",
			"   Alternate Rules: At character levels 4, 8, 12, & 16, my AC rises by one (1) up to a maximum AC of 18.",
			"The Bigger You Are: My Strength stat will automatically rise by one (1) for every 35 yrs over the age of 60 I am until I reach the age of 200.",
			"   Alternate Rules: At character levels 4, 8, 12, & 16, my Strength stat rises by one (1). This will not occur past 16th level.",
			"Natural Resilience: For each level past character level 1, the HP to be added to my HP pool will be rolled with Advantage if I am rolling for HP gain. Furthermore, regardless of my chosen class, I use d8s as my Hit Die.",
			"Natural Telepath: I only speak with non-arachnids via psionic Telepathy. Range 60m (200') [40 Squares]. I can mentally talk with one Creature; this is a two-way conversation. I can mentally talk to up to 10 Creatures at once at the cost of the range of communication dropping to 6m (20’). Put another way, each additional Creature past the first lowers the range by 5.5m (18’).",
			"   Optional Rules: The range and number for multi-Creature communication increases by 6m (20’) & 5 Creatures respectively for every 35 yrs over the age of 60 I am, capping out at a total range of 90m (300’) \u0026 a total of 30 Creatures at the age of 200.",
			"   Alternate Optional Rules: The range and number for multi-Creature communication increase by 1.2m (4’) & 1 Creature respectively for every 7 yrs over the age of 60 I am, capping out at a total range of 90m (300’) \u0026 a total of 30 Creatures at the age of 200.",
			"Forest Guardian: I am part of a druidic lineage that grants me supernatural abilities. I know the Druidcraft cantrip & can replace it with another from the Druid spell list at the end of a Long Rest. I also know the Mage Hand cantrip; it cannot be replaced with another cantrip.",
			"   When I reach character level 3, I learn the spell Speak with Animals. When I reach character level 5, I learn my choice of the Darkvision or Wither and Bloom spells; my choice here is permanent. I always have these spell prepared, \u0026 can cast them once without a spell slot, after which I regain the ability to cast each in that way when I finish a Long Rest. I can also cast these spells using any spell slots I have of the appropriate level.",
			"   Intelligence, Wisdom, or Charisma is my spellcasting ability for the spells I cast with this trait (choose the ability when I select the lineage).",
		],
		page3notes : true,
		popupName : "Magnaranea silva Traits (Continued)",
		source : ["MJ:HB", 0],
	}],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name: "Druidic M silva Cantrip",
		"class": ["druid"],
		selection: ["druidcraft"],
		level: [0, 0],
		times: 1,
		firstCol: "atwill",
    }, {
		name: "M silva Mage Hand",
		spells: ["mage hand"],
		selection: ["mage hand"],
		times: 1,
		firstCol: "atwill",
	}],
	features : {
		"magnaranea silva equip lineage1" : {
			name : "M silva Bite, Web, & Armor Equip",
			minlevel : 1,
			limfeaname : "Venom Charges",
			usages : 12,
			recovery : "12min/ea",
			armorAdd : {
				select : ["M silva Chitin Carapace (Base)"],
				options : ["M silva Chitin Carapace (Base)", "M silva Chitin Carapace (Base+1)", "M silva Chitin Carapace (Base+2)", "M silva Chitin Carapace (Base+3)", "M silva Chitin Carapace (Base+4)"],
			},
			weaponsAdd : {
				select : ["M silva Bite (Base)", "M silva Web (Recharge 5-6)"],
				options : ["M silva Bite (Base)", "M silva Bite (Base+1)", "M silva Bite (Base+2)", "M silva Bite (Base+3)", "M silva Bite (Base+4)", "M silva Web (Recharge 5-6)"],
			},
		},
		"druidic magnaranea silva lineage3" : {
			name : "Druidic M silva Lineage: Lvl 3 Spell",
			minlevel : 3,
			usages: 1,
			recovery: "long rest",
			description: desc([
				"When I reach character level 3 I learn the Speak with Animals spell.",
			]),
			spellcastingBonus: [{
				name: "Druidic M silva Lineage: Lvl 3",
				spells: ["speak with animals"],
				selection: ["speak with animals"],
				times: 1,
				firstCol: "oncelr",
			}],
		},
		"Druidic magnaranea silva lineage5" : {
			name : "Druidic M silva Lineage: Lvl 5 Spell",
			minlevel : 5,
			usages: 1,
			recovery: "long rest",
			description: desc([
				"When I reach character level 5 I learn my choice of the Darkvision or Wither and Bloom spells. This choice is permanent.",
			]),
			spellcastingBonus: [{
				name: "Druidic M silva Lineage: Lvl 5",
				spells: ["darkvision", "wither and bloom"],
				selection: ["darkvision", "wither and bloom"],
				times: 1,
				firstCol: "oncelr",
			}],
		},
	},
};

// Add the M. silva Chitinous natural armors
ArmourList["m silva carapace 0"] = {
	name : "M silva Chitin Carapace (Base)",
	source : ["HB", 0],
	regExpSearch : /^(?=.*silva)(?=.*carapace).*$/i,
	ac : "14",
};
ArmourList["m silva carapace 1"] = {
	name : "M silva Chitin Carapace (Base+1)",
	source : ["HB", 0],
	regExpSearch : /^(?=.*silva)(?=."carapace 1").*$/i,
	ac : "15",
};
ArmourList["m silva carapace 2"] = {
	name : "M silva Chitin Carapace (Base+2)",
	source : ["HB", 0],
	regExpSearch : /^(?=.*silva)(?=."carapace 2").*$/i,
	ac : "16",
};
ArmourList["m silva carapace 3"] = {
	name : "M silva Chitin Carapace (Base+3)",
	source : ["HB", 0],
	regExpSearch : /^(?=.*silva)(?=."carapace 3").*$/i,
	ac : "17",
};
ArmourList["m silva carapace 4"] = {
	name : "M silva Chitin Carapace (Base+4)",
	source : ["HB", 0],
	regExpSearch : /^(?=.*silva)(?=."carapace 4").*$/i,
	ac : "18",
};

// Add the M. silva Bite attacks, M. silva Web attack, & the M. silva Unarmed Strike attacks
WeaponsList["m silva bite 0"] = {
	name : "M silva Bite (Base)",
	source : ["HB", 0],
	regExpSearch : /^(?=.*silva)(?=.*bite).*$/i,
	type : "Natural",
	ability : 2,
	abilitytodamage : true,
	damage : [1, 8, "piercing"],
	range : "Melee",
	description : "1d8 + " + Number(What('Dex Mod')) + " Piercing; Optional 2d8 Poison (Venom); 12 Venom charges",
	weight : 0,
};
WeaponsList["m silva bite 1"] = {
	name : "M silva Bite (Base+1)",
	source : ["HB", 0],
	regExpSearch : /^(?=.*silva)(?=."bite 1").*$/i,
	type : "Natural",
	ability : 2,
	abilitytodamage : true,
	damage : [2, 8, "piercing"],
	range : "Melee",
	description : "2d8 + " + Number(What('Dex Mod')) + " Piercing; Optional 3d8 Poison (Venom); 14 Venom charges",
	weight : 0,
};
WeaponsList["m silva bite 2"] = {
	name : "M silva Bite (Base+2)",
	source : ["HB", 0],
	regExpSearch : /^(?=.*silva)(?=."bite 2").*$/i,
	type : "Natural",
	ability : 2,
	abilitytodamage : true,
	damage : [3, 8, "piercing"],
	range : "Melee",
	description : "3d8 + " + Number(What('Dex Mod')) + " Piercing; Optional 4d8 Poison (Venom); 16 Venom charges",
	weight : 0,
};
WeaponsList["m silva bite 3"] = {
	name : "M silva Bite (Base+3)",
	source : ["HB", 0],
	regExpSearch : /^(?=.*silva)(?=."bite 3").*$/i,
	type : "Natural",
	ability : 2,
	abilitytodamage : true,
	damage : [4, 8, "piercing"],
	range : "Melee",
	description : "4d8 + " + Number(What('Dex Mod')) + " Piercing; Optional 5d8 Poison (Venom); 18 Venom charges",
	weight : 0,
};
WeaponsList["m silva bite 4"] = {
	name : "M silva Bite (Base+4)",
	source : ["HB", 0],
	regExpSearch : /^(?=.*silva)(?=."bite 4").*$/i,
	type : "Natural",
	ability : 2,
	abilitytodamage : true,
	damage : [5, 8, "piercing"],
	range : "Melee",
	description : "5d8 + " + Number(What('Dex Mod')) + " Piercing; Optional 6d8 Poison (Venom); 20 Venom charges",
	weight : 0,
};
WeaponsList["m silva web"] = {
	name : "M silva Web (Recharge 5-6)",
	source : ["HB", 0],
	regExpSearch : /^(?=.*silva)(?=.*web).*$/i,
	type : "Natural",
	ability : 2,
	damage : ["\u2015", "", "Restrained"],
	range : "30/60 ft",
	modifiers : ["", "", false],
	description : "Target can escape as an Action with a DC " + Math.max(10, 8 + Number(How('Proficiency Bonus')) + Number(What('Con Mod'))) + " Strength check, or by destroying the webbing (AC " + Math.max(10, 10 + (classes.totallevel / 5)) + "; " + Math.max(5 + classes.totallevel) + " HP); See tooltip",
	weight : 0,
	tooltip : "On a hit, the target is Restrained by webbing. Target can be up to 1 Size larger than myself. As an Action, the Restrained target can make a Strength check (DC 8 + Prof + Con Mod), bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10 + 1/4 per Char Lvl [Round down]; HP 5 + Char Lvl; Vulnerability to Fire damage; Immunity to Bludgeoning, Poison, \u0026 Psychic damage).",
};
WeaponsList["m silva unarmed strike 0"] = {
	name : "M silva Unarmed Strike (33'+ Dia)",
	source : ["HB", 0],
	regExpSearch : /^(?=.*silva)(?=.*33ft|33|10m|10).*$/i,
	type : "Natural",
	ability : 1,
	abilitytodamage : true,
	damage : [1, 8, "bludgeoning"],
	range : "10 ft Melee",
	description : "1d8 + Str Bludgeoning; 2d8 + Str Bludgeoning to any Medium or smaller targets I step on; See tooltip",
	weight : 0,
	tooltip : "Upon reaching a diameter of 33ft (10m), my Unarmed Strikes with my legs start to deal 1d8 Bludg dmg if they aren’t already dealing more damage, and they have a melee range of 10’ (3m) from the edge of my feet. At this size, I also deal 2d8 Bludg dmg to Medium or smaller targets I step on with one of my legs.\n   If I'm intentionally trying to step on a target, make the attack roll at Disadvantage. Upon successfully hitting a target, the aforementioned crushing damage for my size can be repeated every turn without a new attack roll until the target makes a DC [8 + Proficiency + Str Mod] Strength (Athletics) check to move my leg from on top of them.",
};
WeaponsList["m silva unarmed strike 1"] = {
	name : "M silva Unarmed Strike (50'+ Dia)",
	source : ["HB", 0],
	regExpSearch : /^(?=.*silva)(?=.*50ft|50|15m|15).*$/i,
	type : "Natural",
	ability : 1,
	abilitytodamage : true,
	damage : [2, 8, "bludgeoning"],
	range : "15 ft Melee",
	description : "2d8 + Str Bludgeoning; 4d8 + Str Bludgeoning to any Medium or smaller targets I step on; See tooltip",
	weight : 0,
	tooltip : "Upon reaching a diameter of 50ft (15m), my Unarmed Strikes with my legs start to deal 2d8 Bludg dmg if they aren’t already dealing more damage, and they have a melee range of 15’ (4.5m) from the edge of my feet. At this size, I also deal 4d8 Bludg dmg to Medium or smaller targets I step on with one of my legs.\n   If I'm intentionally trying to step on a target, make the attack roll at Disadvantage. Upon successfully hitting a target, the aforementioned crushing damage for my size can be repeated every turn without a new attack roll until the target makes a DC [8 + Proficiency + Str Mod] Strength (Athletics) check to move my leg from on top of them.",
};