"use strict";
use(function() {
	var curPage = currentPage.getTitle();
	var title = properties.get("jcr:title", currentPage.getTitle() || currentPage.getName());
	var subtitle = properties.get("subtitle");

	return {
		title: title,
		subtitle: subtitle
    }
});