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
	var v = textNode.nodeValue;

	v = v.replace(/\bTide\b/g, "DON'T BUY");
	//Add other companies here
	
	textNode.nodeValue = v;
}
