var i=0;
var timeoutRef;

function timedCount()
{
	i=i+1;
	postMessage(i);
	timeoutRef = setTimeout("timedCount()",500);
}

timedCount();

self.addEventHandler("message", function(e) {
	if (e)
	{
		if (e.data === "pause")
		{
			clearTimeout(timeoutRef);
		}
		else if (e.data === "continue")
		{
			timedCount();
		}
	}
});