$(document).ajaxError(function(event, jXHR) {
    if (jXHR.status === 403 && jXHR.responseText === "Unauthenticated") {
        var message = gettext("You have been logged out of your edX account. " + "Click Okay to log in again now. " + "Click Cancel to stay on this page " + "(you must log in again to save your work).");
        if (window.confirm(message)) {
            var currentLocation = window.location.pathname;
            window.location.href = "/login?next=" + encodeURIComponent(currentLocation)
        }
    }
});
(function() {
    this.Courseware = function() {
        Courseware.prefix = "";
        function Courseware() {
            Logger.bind();
            this.render()
        }
        Courseware.start = function() {
            return new Courseware
        }
        ;
        Courseware.prototype.render = function() {
            var courseContentElement = $(".course-content")[0];
            var blocks = XBlock.initializeBlocks(courseContentElement);
            if (courseContentElement.dataset.enableCompletionOnViewService === "true") {
                RequireJS.require(["bundles/CompletionOnViewService"], function() {
                    markBlocksCompletedOnViewIfNeeded(blocks[0].runtime, courseContentElement)
                })
            }
            return $(".course-content .histogram").each(function() {
                var error, histg, id;
                id = $(this).attr("id").replace(/histogram_/, "");
                try {
                    histg = new Histogram(id,$(this).data("histogram"))
                } catch (_error) {
                    error = _error;
                    histg = error;
                    if (typeof console !== "undefined" && console !== null) {
                        console.log(error)
                    }
                }
                return histg
            })
        }
        ;
        return Courseware
    }()
}
).call(this);
(function() {
    this.Histogram = function() {
        function Histogram(id, rawData) {
            this.id = id;
            this.rawData = rawData;
            this.xTicks = [];
            this.yTicks = [];
            this.data = [];
            this.calculate();
            this.render()
        }
        Histogram.prototype.calculate = function() {
            var count, i, len, log_count, ref, ref1, results, score;
            ref = this.rawData;
            results = [];
            for (i = 0,
            len = ref.length; i < len; i++) {
                ref1 = ref[i],
                score = ref1[0],
                count = ref1[1];
                if (score === null) {
                    continue
                }
                log_count = Math.log(count + 1);
                this.data.push([score, log_count]);
                this.xTicks.push([score, score.toString()]);
                results.push(this.yTicks.push([log_count, count.toString()]))
            }
            return results
        }
        ;
        Histogram.prototype.render = function() {
            return $.plot($("#histogram_" + this.id), [{
                data: this.data,
                bars: {
                    show: true,
                    align: "center",
                    lineWidth: 0,
                    fill: 1
                },
                color: "#b72121"
            }], {
                xaxis: {
                    min: -1,
                    max: Math.max.apply(Math, $.map(this.xTicks, function(data) {
                        return data[0] + 1
                    })),
                    ticks: this.xTicks,
                    tickLength: 0
                },
                yaxis: {
                    min: 0,
                    max: Math.max.apply(Math, $.map(this.yTicks, function(data) {
                        return data[0] * 1.1
                    })),
                    ticks: this.yTicks,
                    labelWidth: 50
                }
            })
        }
        ;
        return Histogram
    }()
}
).call(this);
var nothingtoseehere;
(function() {
    var bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    this.Tab = function() {
        function Tab(id1, items) {
            this.id = id1;
            this.items = items;
            this.onShow = bind(this.onShow, this);
            this.el = $("#tab_" + id);
            this.render()
        }
        Tab.prototype.$ = function(selector) {
            return $(selector, this.el)
        }
        ;
        Tab.prototype.render = function() {
            $.each(this.items, function(_this) {
                return function(index, item) {
                    var tab;
                    tab = $("<a>").attr({
                        href: "#" + _this.tabId(index)
                    }).html(item.title);
                    _this.$(".navigation").append($("<li>").append(tab));
                    return _this.el.append($("<section>").attr({
                        id: _this.tabId(index)
                    }))
                }
            }(this));
            return this.el.tabs({
                show: this.onShow
            })
        }
        ;
        Tab.prototype.onShow = function(element, ui) {
            this.$("section.ui-tabs-hide").html("");
            this.$("#" + this.tabId(ui.index)).html(this.items[ui.index]["content"]);
            return this.el.trigger("contentChanged")
        }
        ;
        Tab.prototype.tabId = function(index) {
            return "tab-" + this.id + "-" + index
        }
        ;
        return Tab
    }()
}
).call(this);
