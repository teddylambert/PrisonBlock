//Function from http://is.gd/mwZp7E

walk(document.body);

function walk(node)  
{	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;
		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	/* * * * * * * * * * * * *
	Parent companies, such as pfizer, were omitted from the text replace function.
	This consumers search for "Advil", not "Pfizer", on Amazon and other sites,
	the subsidiary names are the ones we want to target. Similar reasoning is used for
	companies like State Farm and UPS. 
	* * * * * * * * * * * * */
	/* Word replace not working on target */
	var v = textNode.nodeValue;
	var replacementText = "PRISON BLOCK"
	v = v.replace(/\bCentrum\b/g, replacementText);
	v = v.replace(/\bRobitussin\b/g, replacementText);
	v = v.replace(/\bViagra\b/g, replacementText);
	v = v.replace(/\bAdvil\b/g, replacementText);
	v = v.replace(/\bChapStick\b/g, replacementText);
	v = v.replace(/\bEmergen-C\b/g, replacementText);
	v = v.replace(/\bEpiPen\b/g, replacementText);
	v = v.replace(/\bMolex\b/g, replacementText);
	v = v.replace(/\bAngel Soft\b/g, replacementText);
	v = v.replace(/\bBrawny\b/g, replacementText);
	if(v.includes("Dixie") && v.includes("Paper"))
		v = v.replace(/\bDixie\b/g, replacementText);
	//v = v.replace(/\bMardi Gras\b/g, replacementText); //Need to figure out how to only replace the product
	v = v.replace(/\bQuilted Northern\b/g, replacementText);
	if(v.includes("Sparkle") && v.includes("Paper Towel"))
		v = v.replace(/\bSparkle\b/g, replacementText);
	if(v.includes("Vanity Fair") && (v.includes("Napkin") || v.includes("Everyday") || v.includes("Entertain") || v.includes("Extra Absorbent")))
		v = v.replace(/\bVanity Fair\b/g, replacementText);
	v = v.replace(/\bPost-it\b/g, replacementText);
	v = v.replace(/\bScotch-Brite\b/g, replacementText);
	if(v.includes("Scotch") && (v.includes("Tape") || v.includes("Glue") || v.includes("Laminating") || v.includes("Scissor") || v.includes("Mounting") || v.includes("Fastening") || v.includes("Shipping")))
		v = v.replace(/\bScotch\b/g, replacementText);
	v = v.replace(/\bScotchBlue\b/g, replacementText);
	v = v.replace(/\bScotchgard\b/g, replacementText);
	v = v.replace(/\bNexcare\b/g, replacementText);
	v = v.replace(/\bCommand\b/g, replacementText); //Being case sensitive will help, but this one could have a few false positives
	v = v.replace(/\bACE\b/g, replacementText);
	v = v.replace(/\bFiltrete\b/g, replacementText);
	if(v.includes("FUTURO") || v.includes("Futuro"))
	{
		v = v.replace(/\bFUTURO\b/g, replacementText); 
		v = v.replace(/\bFuturo\b/g, replacementText); 
	}
	v = v.replace(/\bAvalon Eyewear\b/g, replacementText);
	if(v.includes("Haystack Mountain") && v.includes("Cheese"))
		v = v.replace(/\bHaystack Mountain\b/g, replacementText);
	if(v.includes("Tyson") && v.includes("Chicken"))
		v = v.replace(/\bTyson\b/g, replacementText); //Need to make this one better
	v = v.replace(/\bJimmy Dean\b/g, replacementText);
	v = v.replace(/\bHillshire\b/g, replacementText);
	v = v.replace(/\bBall Park\b/g, replacementText);
	v = v.replace(/\bRaised & Rooted\b/g, replacementText);
	v = v.replace(/\bAidells\b/g, replacementText);
	if(v.includes("State Fair") && v.includes("Corn"))
		v = v.replace(/\bState Fair\b/g, replacementText);
	v = v.replace(/\bNature Raised Farms\b/g, replacementText);
	if(v.includes("Sara Lee") && (v.includes("Roast Beef") || v.includes("Ham") || v.includes("Chicken") || v.includes("Turkey")))
		v = v.replace(/\bSara Lee\b/g, replacementText);
	v = v.replace(/\bWright Brand\b/g, replacementText);
	if(v.includes("Gallo") && (v.includes("Salame") || v.includes("Salami")))
		v = v.replace(/\bGallo\b/g, replacementText);
	v = v.replace(/\bAdvance Pierre\b/g, replacementText);
	v = v.replace(/\bBarber Foods\b/g, replacementText);
	v = v.replace(/\bBig Az\b/g, replacementText);
	v = v.replace(/\bFast Fixin\b/g, replacementText);
	v = v.replace(/\bSteak-EZE\b/g, replacementText);
	v = v.replace(/\bTrue Chews\b/g, replacementText);
	v = v.replace(/\bNudges\b/g, replacementText); //False positive possibility

	textNode.nodeValue = v;
}
