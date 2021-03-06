walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	// NO! => UNNACCEPTABLE!
	v = v.replace(/\bNO!\b/g, "UNACCEPTABLE!");

	// What the fuck
	var wtfArrayLower = ["what the froop", "what the glob", "what the jam", "what the flip", "what the glub", "jj flip, what the zip"];
	var wtfArraySentence = ["What the froop", "What the glob", "What the jam", "What the flip", "What the glub", "JJ flip, what the zip"];
	var wtfArrayUpper = ["WHAT THE FROOP", "WHAT THE GLOB", "WHAT THE JAM", "WHAT THE FLIP", "WHAT THE GLUB", "JJ FLIP, WHAT THE ZIP"];

    v = v.replace(/\bWhat the fuck\b/g, wtfArraySentence[Math.floor(Math.random()*wtfArraySentence.length)]);
    v = v.replace(/\bwhat the fuck\b/g, wtfArrayLower[Math.floor(Math.random()*wtfArrayLower.length)]);
    v = v.replace(/\bWHAT THE FUCK\b/g, wtfArrayUpper[Math.floor(Math.random()*wtfArrayUpper.length)]);

    // Son of a bitch (goes before bitch)
    v = v.replace(/\bson of a bitch\\b/g, "son of a toot");
    v = v.replace(/\bSon of a bitch\b/g, "Son of a toot");
	v = v.replace(/\bSON OF A BITCH\b/g, "SON OF A TOOT");

    // General insults
    var insultArrayLower = ["ding-dong", "poo brain", "dingus"];
    var insultArraySentence = ["Ding-dong", "Poo brain", "Dingus"];
    var insultArrayUpper = ["DING-DONG", "POO BRAIN", "DINGUS"];

    var originalInsultsLower = ["bitch", "motherfucker", "fucker", "asshole", "shithead", "douchebag", "douche", "cunt", "dumbass", "nigga", "whore", "jerk", "mothafucka", "motherfucka", "nigger", "faggot", "fag", "slut"];
    var originalInsultsSentence = ["Bitch", "Motherfucker", "Fucker", "Asshole", "Shithead", "Douchebag", "Douche", "Cunt", "Dumbass", "Nigga", "Whore", "Jerk", "Mothafucka", "Motherfucka", "Nigger", "Faggot", "Fag", "Slut"];
    var originalInsultsUpper = ["BITCH", "MOTHERFUCKER", "FUCKER", "ASSHOLE", "SHITHEAD", "DOUCHEBAG", "DOUCHE", "CUNT", "DUMBASS", "NIGGA", "WHORE", "JERK", "MOTHAFUCKA", "MOTHERFUCKA", "NIGGER", "FAGGOT", "FAG", "SLUT"];

	v = v.replace(new RegExp(originalInsultsLower.join("|"), "g"), insultArrayLower[Math.floor(Math.random()*insultArrayLower.length)]);
    v = v.replace(new RegExp(originalInsultsSentence.join("|"), "g"), insultArraySentence[Math.floor(Math.random()*insultArraySentence.length)]);
	v = v.replace(new RegExp(originalInsultsUpper.join("|"), "g"), insultArrayUpper[Math.floor(Math.random()*insultArrayUpper.length)]);

	// Awesome! Fuck yeah! Hell yeah!
	var awesomeArrayLower = ["hammacow", "wow cow chow", "mathematical", "algebraic", "slam bam in a can"];
	var awesomeArraySentence = ["Hammacow", "Wow cow chow", "Mathematical", "Algebraic", "Slam bam in a can"];
	var awesomeArrayUpper = ["HAMMACOW", "WOW COW CHOW", "MATHEMATICAL", "ALGEBRAIC", "SLAM BAM IN A CAN"];

	var originalAwesomeLower = ["awesome", "fuck yeah", "hell yeah", "remarkable", "incredible"];
	var originalAwesomeSentence = ["Awesome", "Fuck yeah", "Hell yeah", "Remarkable", "Incredible"];
	var originalAwesomeUpper = ["AWESOME", "FUCK YEAH", "HELL YEAH", "REMARKABLE", "INCREDIBLE"];

	v = v.replace(new RegExp(originalAwesomeLower.join("|"), "g"), awesomeArrayLower[Math.floor(Math.random()*awesomeArrayLower.length)]);
    v = v.replace(new RegExp(originalAwesomeSentence.join("|"), "g"), awesomeArraySentence[Math.floor(Math.random()*awesomeArraySentence.length)]);
	v = v.replace(new RegExp(originalAwesomeUpper.join("|"), "g"), awesomeArrayUpper[Math.floor(Math.random()*awesomeArrayUpper.length)]);

	// Ass and Butts
	var buttArrayLower = ["buns", "hams", "patoot", "stump"];
	var buttArraySentence = ["Buns", "Hams", "Patoot", "Stump"];
	var buttArrayUpper = ["BUNS", "HAMS", "PATOOT", "STUMP"];

	var originalButtLower = ["\\bass\\b", "\\bbutt\\b", "\\banus\\b"];
	var originalButtSentence = ["\\bAss\\b", "\\bButt\\b", "\\bAnus\\b"];
	var originalButtUpper = ["\\bASS\\b", "\\bBUTT\\b", "\\bANUS\\b"];

	v = v.replace(new RegExp(originalButtLower.join("|"), "g"), buttArrayLower[Math.floor(Math.random()*buttArrayLower.length)]);
    v = v.replace(new RegExp(originalButtSentence.join("|"), "g"), buttArraySentence[Math.floor(Math.random()*buttArraySentence.length)]);
	v = v.replace(new RegExp(originalButtUpper.join("|"), "g"), buttArrayUpper[Math.floor(Math.random()*buttArrayUpper.length)]);

	// This is lame
	v = v.replace(/this is lame/g, "this is plop dumps and waggle sags");
    v = v.replace(/This is lame/g, "This is plop dumps and waggle sags");
	v = v.replace(/THIS IS LAME/g, "THIS IS PLOP DUMPS AND WAGGLE SAGS");

	// Shit
	v = v.replace(/shit\b/g, "plop dumps and waggle sags");
    v = v.replace(/Shit\b/g, "Plop dumps and waggle sags");
	v = v.replace(/SHIT\b/g, "PLOP DUMPS AND WAGGLE SAGS");

	// Fucking
	v = v.replace(/\bfucking\b/g, "flipping");
    v = v.replace(/\bFucking\b/g, "Flipping");
	v = v.replace(/\bFUCKING\b/g, "FLIPPING");

	// Fucked
	v = v.replace(/\bfucked/g, "globbed");
    v = v.replace(/\bFucked/g, "Globbed");
	v = v.replace(/\bFUCKED/g, "GLOBBED");

	// Fuck alone
	v = v.replace(/\bfuck/g, "glob");
    v = v.replace(/\bFuck/g, "Glob");
	v = v.replace(/\bFUCK/g, "GLOB");
	
	textNode.nodeValue = v;
}


