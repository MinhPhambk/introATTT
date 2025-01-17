(function(e) {
    "use strict";
    RequireJS.define("js/courseware/courseware_factory", ["jquery", "logger"], function(e, r) {
        return function() {
            e('a:not([href^="#"])').click(function(e) {
                r.log("edx.ui.lms.link_clicked", {
                    current_url: window.location.href,
                    target_url: e.currentTarget.href
                })
            })
        }
    })
}
).call(this, define || RequireJS.define);
