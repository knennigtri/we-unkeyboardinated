"use strict";
use(function() {
	var lTitle = currentStyle.get("leftTitle", "Placeholder");
	var lPagePaths = currentStyle.get("leftPagePaths");
	
	var mTitle = currentStyle.get("middleTitle", "Placeholder");
	var mPagePaths = currentStyle.get("middlePagePaths");
	
	var rTitle = currentStyle.get("rightTitle", "Placeholder");
	var rText = currentStyle.get("rightText", "Your Text Here");
	
	var pManager = resolver.adaptTo(com.day.cq.wcm.api.PageManager);
	
	//Create an array of left column links
	var leftPages = [];
	if(lPagePaths != null){
		if(lPagePaths instanceof Array){
			lPagePaths.forEach( function (arrayItem)
					{
					    var pageObject = pManager.getPage(arrayItem);
					    leftPages.push(pageObject);
					});
		}else{
			var pageObject = pManager.getPage(lPagePaths);
		    leftPages.push(pageObject);
		}
	}
	
	//Create an array of middle column links
	var middlePages = [];
	if(mPagePaths != null){
		if(mPagePaths instanceof Array){
			mPagePaths.forEach( function (arrayItem)
					{
					    var pageObject = pManager.getPage(arrayItem);
					    middlePages.push(pageObject);
					});
		}else{
			var pageObject = pManager.getPage(mPagePaths);
		    middlePages.push(pageObject);
		}
	}
	
	return {
		leftTitle: lTitle,
		leftPagePaths: leftPages,
		middleTitle: mTitle,
		middlePagePaths: middlePages,
		rightTitle: rTitle,
		rightText: rText

    }
});