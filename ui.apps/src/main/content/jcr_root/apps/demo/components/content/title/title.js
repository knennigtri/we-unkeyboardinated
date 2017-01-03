
"use strict";
use(function (){
    var title = properties.get("jcr:title","Enter Title Here");
    var type = properties.get("type","h1");
    
    return {
        title: title,
        type: type
    };

});
