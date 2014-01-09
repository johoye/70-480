var javascript = (function(){
	var orgFruit = ["apple", "orange", "banana"];
	var fruit = orgFruit.slice();
	var webWorker;
	
	return {
		restore : function(show)
		{
			fruit = orgFruit.slice();
			show(fruit);
		},
		sort : function(show)
		{
			show(fruit.sort());
		},
		map : function(show)
		{
			fruit = fruit.map(function(i){ return i.toUpperCase();});
			show(fruit);
		},
		startWebWorker : function(webWorkerFilename)
		{
			if(typeof(Worker)!=="undefined")
			{
				if(typeof(webWorker)!="undefined")
				{
					webWorker.terminate();
				}
				
				webWorker = new Worker("countWorker.js");
				webWorker.onmessage = function(event){
					document.getElementById("webWorkerResult").innerHTML=event.data;
				};
			}
			else
			{
				alert("Web Worker not supported by this browser!");
			}
		},
		stopWebWorker : function()
		{
			webWorker.terminate();
		},
		pauseWebWorker : function()
		{
			webWorker.postMessage("pause");
		},
		continueWebWorker : function()
		{
			webWorker.postMessage("continue");
		}
	}
}());

