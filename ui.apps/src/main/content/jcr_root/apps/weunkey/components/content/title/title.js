

"use strict";
use(function (){
    var title = properties.get("jcr:title")
			    || pageProperties.get("jcr:title")
			    || currentPage.name;
    var subtitle = properties.get("subtitle");
    var type = properties.get("type","h2");
    
    var style = currentStyle.get("style","");
    
    return {
        title: title,
        subtitle: subtitle,
        type: type,
        cssClass: style
    };

});
