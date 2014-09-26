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
    var insultArrayLower = ["ding-dong", "poo brain", "dingus", "jerk"];
    var insultArraySentence = ["Ding-dong", "Poo brain", "Dingus", "Jerk"];
    var insultArrayUpper = ["DING-DONG", "POO BRAIN", "DINGUS", "JERK"];

    var originalInsultsLower = ["\\bbitch\\b", "\\bmotherfucker\\b", "\\bfucker\\b", "\\basshole\\b", "\\bshithead\\b", "\\bdouchebag\\b", "\\bdouche\\b", "\\bcunt\\b", "\\bdumbass\\b", "\\bnigga\\b"];
    var originalInsultsSentence = ["\\bBitch\\b", "\\bMotherfucker\\b", "\\bFucker\\b", "\\bAsshole\\b", "\\bShithead\\b", "\\bDouchebag\\b", "\\bDouche\\b", "\\bCunt\\b", "\\bDumbass\\b", "\\bNigga\\b"];
    var originalInsultsUpper = ["\\bBITCH\\b", "\\bMOTHERFUCKER\\b", "\\bFUCKER\\b", "\\bASSHOLE\\b", "\\bSHITHEAD\\b", "\\bDOUCHEBAG\\b", "\\bDOUCHE\\b", "\\bCUNT\\b", "\\bDUMBASS\\b", "\\bNIGGA\\b"];

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

	var originalButtLower = ["\\bass\\b", "\\bbutt\\b"];
	var originalButtSentence = ["\\bAss\\b", "\\bButt\\b"];
	var originalButtUpper = ["\\bASS\\b", "\\bBUTT\\b"];

	v = v.replace(new RegExp(originalButtLower.join("|"), "g"), buttArrayLower[Math.floor(Math.random()*buttArrayLower.length)]);
    v = v.replace(new RegExp(originalButtSentence.join("|"), "g"), buttArraySentence[Math.floor(Math.random()*buttArraySentence.length)]);
	v = v.replace(new RegExp(originalButtUpper.join("|"), "g"), buttArrayUpper[Math.floor(Math.random()*buttArrayUpper.length)]);

	// This is lame
	v = v.replace(/this is lame/g, "this is plop dumps and waggle sags");
    v = v.replace(/This is lame/g, "This is plop dumps and waggle sags");
	v = v.replace(/THIS IS LAME/g, "THIS IS PLOP DUMPS AND WAGGLE SAGS");

	// Shit
	v = v.replace(/shit/g, "plop dumps and waggle sags");
    v = v.replace(/Shit/g, "Plop dumps and waggle sags");
	v = v.replace(/SHIT/g, "PLOP DUMPS AND WAGGLE SAGS");
	
	textNode.nodeValue = v;
}


