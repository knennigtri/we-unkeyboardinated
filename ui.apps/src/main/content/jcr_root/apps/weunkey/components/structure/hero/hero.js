"use strict";
use(function() {
	var curPage = currentPage.getTitle();
	var title = properties.get("heroTitle", currentPage.getTitle() || currentPage.getName());
	var subtitle = properties.get("heroSubtitle");
	var bTitle = properties.get("buttonTitle");
	var bLink = properties.get("buttonLink");
	
    //Check for file reference from the DAM
    var image = properties.get("fileReference", String.class);
    if(image == "undefined"){
    	//Check for file upload
    	var res = resource.getChild("file");
    	if(res != null){
    		image = res.getPath();
    	}
    } 
	
    if(image != "undefined"){
    	log.info("Image: " + image);
    	style = "background-image:url(" + image + ");";
    }

	return {
		title: title,
		subtitle: subtitle,
		buttonTitle: bTitle,
		buttonLink: bLink,
		style: style
    }
});