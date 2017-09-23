
use(function () {
    var items = [];
    var root = currentPage.getAbsoluteParent(3);
    var it = root.listChildren(new Packages.com.day.cq.wcm.api.PageFilter());
    log.info("Template: " + root.getTitle());

    while (it.hasNext()) {
        var page = it.next();
        if(page != null){
            items.push(page);
        }
    }

    return {
        root: root,
        items: items
    };
});