edx = edx || {};
(function(Backbone) {
    "use strict";
    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};
    edx.instructor_dashboard.proctoring.ProctoredExamAllowanceModel = Backbone.Model.extend({
        url: "/api/edx_proctoring/v1/proctored_exam/allowance"
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamAllowanceModel = edx.instructor_dashboard.proctoring.ProctoredExamAllowanceModel
}
).call(this, Backbone);
edx = edx || {};
(function(Backbone) {
    
}
).call(this, Backbone);
(function(Backbone) {
}
).call(this, Backbone);
edx = edx || {};
(function(Backbone) {
    "use strict";
    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};
    edx.instructor_dashboard.proctoring.CohortModel = Backbone.Model.extend({
        url: "/courses/<course_id>/cohorts/"
    });
    this.edx.instructor_dashboard.proctoring.CohortModel = edx.instructor_dashboard.proctoring.CohortModel
}
).call(this, Backbone);
edx = edx || {};
(function(Backbone) {
    "use strict";
    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};
    edx.instructor_dashboard.proctoring.ProctoredExamTrackingModel = Backbone.Model.extend({
        url: "/api/edx_proctoring/v1/proctored_exam/tracking_exam/"
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamTrackingModel = edx.instructor_dashboard.proctoring.ProctoredExamTrackingModel
}
).call(this, Backbone);
edx = edx || {};
(function(Backbone) {
    "use strict";
    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};
    edx.instructor_dashboard.proctoring.UserCollection = Backbone.Collection.extend({
        url: "/courses/<course_id>/instructor/api/get_users_by_cohorts/"
    });
    this.edx.instructor_dashboard.proctoring.UserCollection = edx.instructor_dashboard.proctoring.UserCollection
}
).call(this, Backbone);
edx = edx || {};
(function(Backbone) {
    "use strict";
    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};
    edx.instructor_dashboard.proctoring.ProctoredExamAllowanceCollection = Backbone.Collection.extend({
        model: edx.instructor_dashboard.proctoring.ProctoredExamAllowanceModel,
        url: "/api/edx_proctoring/v1/proctored_exam/"
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamAllowanceCollection = edx.instructor_dashboard.proctoring.ProctoredExamAllowanceCollection
}
).call(this, Backbone);
edx = edx || {};
(function(Backbone) {
    
}
).call(this, Backbone);
edx = edx || {};
(function(Backbone) {
    
}
).call(this, Backbone);
edx = edx || {};
(function(Backbone) {
    "use strict";
    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};
    edx.instructor_dashboard.proctoring.CohortCollection = Backbone.Collection.extend({
        model: edx.instructor_dashboard.proctoring.CohortModel,
        url: "/courses/<course_id>/cohorts/"
    });
    this.edx.instructor_dashboard.proctoring.CohortCollection = edx.instructor_dashboard.proctoring.CohortCollection
}
).call(this, Backbone);
edx = edx || {};
(function(Backbone) {
    "use strict";
    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};
    edx.instructor_dashboard.proctoring.ProctoredExamTrackingCollection = Backbone.Collection.extend({
        model: edx.instructor_dashboard.proctoring.ProctoredExamAttemptModel,
        url: "/api/edx_proctoring/v1/proctored_exam/tracking_exam/course_id/"
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamTrackingCollection = edx.instructor_dashboard.proctoring.ProctoredExamTrackingCollection
}
).call(this, Backbone);
edx = edx || {};
(function(Backbone) {
    "use strict";
    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};
    edx.instructor_dashboard.proctoring.ProctoredExamCountStatusCollection = Backbone.Collection.extend({
        url: "/api/edx_proctoring/v1/proctored_exam/tracking_exam/course_id/<course_id>/count_status"
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamCountStatusCollection = edx.instructor_dashboard.proctoring.ProctoredExamCountStatusCollection
}
).call(this, Backbone);
Backbone.ModalView = Backbone.View.extend({
    name: "ModalView",
    modalBlanket: null,
    modalContainer: null,
    defaultOptions: {
        fadeInDuration: 150,
        fadeOutDuration: 150,
        showCloseButton: true,
        bodyOverflowHidden: false,
        setFocusOnFirstFormControl: true,
        targetContainer: document.body,
        slideFromAbove: false,
        slideFromBelow: false,
        slideDistance: 150,
        closeImageUrl: "/static/proctoring/close-modal.png",
        closeImageHoverUrl: "/static/proctoring/close-modal-hover.png",
        showModalAtScrollPosition: true,
        permanentlyVisible: false,
        backgroundClickClosesModal: true,
        pressingEscapeClosesModal: true,
        css: {
            border: "1px solid #111",
            display: "block",
            "background-color": "#fff",
            "-webkit-box-shadow": "0px 0px 15px 4px rgba(0, 0, 0, 0.5)",
            "-moz-box-shadow": "0px 0px 15px 4px rgba(0, 0, 0, 0.5)",
            "box-shadow": "0px 0px 15px 4px rgba(0, 0, 0, 0.5)",
            "-webkit-border-radius": "10px",
            "-moz-border-radius": "10px",
            "border-radius": "6px",
            padding: "0px"
        }
    },
    initialize: function() {},
    events: {},
    showModalBlanket: function() {
        return this.ensureModalBlanket().fadeIn(this.options.fadeInDuration)
    },
    hideModalBlanket: function() {
        return this.modalBlanket.fadeOut(this.options.fadeOutDuration)
    },
    ensureModalContainer: function(target) {
        if (target != null) {
            if (this.modalContainer != null) {
                this.modalContainer.remove();
                this.modalContainer = null
            }
        }
        if (this.modalContainer == null) {
            this.modalContainer = $("<div id='modalContainer'>").css({
                "z-index": "99999",
                position: "relative",
                "-webkit-border-radius": "6px",
                "-moz-border-radius": "6px",
                "border-radius": "6px"
            }).appendTo(target)
        }
        return this.modalContainer
    },
    ensureModalBlanket: function() {
        this.modalBlanket = $("#modal-blanket");
        if (this.modalBlanket.length == 0) {
            this.modalBlanket = $("<div id='modal-blanket'>").css({
                position: "absolute",
                top: 0,
                left: 0,
                height: $(document).height(),
                width: "100%",
                opacity: .5,
                backgroundColor: "#000",
                "z-index": 99900
            }).appendTo(document.body).hide()
        } else {
            this.modalBlanket.css({
                height: $(document).height(),
                width: "100%"
            })
        }
        return this.modalBlanket
    },
    keyup: function(event) {
        if (event.keyCode == 27 && this.options.pressingEscapeClosesModal) {
            this.hideModal()
        }
    },
    click: function(event) {
        if (event.target.id == "modal-blanket" && this.options.backgroundClickClosesModal) {
            this.hideModal()
        }
    },
    setFocusOnFirstFormControl: function() {
        var controls = $("input, select, email, url, number, range, date, month, week, time, datetime, datetime-local, search, color", $(this.el));
        if (controls.length > 0) {
            $(controls[0]).focus()
        }
    },
    hideModal: function() {
        this.trigger("closeModalWindow");
        this.hideModalBlanket();
        $(document.body).unbind("keyup", this.keyup);
        this.modalBlanket.unbind("click", this.click);
        if (this.options.bodyOverflowHidden === true) {
            $(document.body).css("overflow", this.originalBodyOverflowValue)
        }
        var container = this.modalContainer;
        $(this.modalContainer).fadeOut(this.options.fadeOutDuration, function() {
            container.remove()
        })
    },
    getCoordinate: function(coordinate, css) {
        if (typeof css[coordinate] !== "undefined") {
            var value = css[coordinate];
            delete css[coordinate];
            return value
        }
    },
    recenter: function() {
        return this.recentre()
    },
    recentre: function() {
        var $el = $(this.el);
        var coords = {
            top: this.getCoordinate("top", this.options.css),
            left: this.getCoordinate("left", this.options.css),
            right: this.getCoordinate("right", this.options.css),
            bottom: this.getCoordinate("bottom", this.options.css),
            isEmpty: function() {
                return this.top == null && this.left == null && this.right == null && this.bottom == null
            }
        };
        var offsets = this.getOffsets();
        var centreY = $(window).height() / 2;
        var centreX = $(window).width() / 2;
        var modalContainer = this.modalContainer;
        var positionY = centreY - $el.outerHeight() / 2;
        modalContainer.css({
            top: positionY + offsets.y + "px"
        });
        var positionX = centreX - $el.outerWidth() / 2;
        modalContainer.css({
            left: positionX + offsets.x + "px"
        });
        return this
    },
    getOffsets: function() {
        var offsetY = 0
          , offsetX = 0;
        if (this.options.showModalAtScrollPosition) {
            offsetY = $(document).scrollTop(),
            offsetX = $(document).scrollLeft()
        }
        return {
            x: offsetX,
            y: offsetY
        }
    },
    showModal: function(options) {
        this.defaultOptions.targetContainer = document.body;
        this.options = $.extend(true, {}, this.defaultOptions, options, this.options);
        if (this.options.permanentlyVisible) {
            this.options.showCloseButton = false;
            this.options.backgroundClickClosesModal = false;
            this.options.pressingEscapeClosesModal = false
        }
        var $el = $(this.el);
        var centreY = $(window).height() / 2;
        var centreX = $(window).width() / 2;
        var modalContainer = this.ensureModalContainer(this.options.targetContainer).empty();
        $el.addClass("modal");
        var coords = {
            top: this.getCoordinate("top", this.options.css),
            left: this.getCoordinate("left", this.options.css),
            right: this.getCoordinate("right", this.options.css),
            bottom: this.getCoordinate("bottom", this.options.css),
            isEmpty: function() {
                return this.top == null && this.left == null && this.right == null && this.bottom == null
            }
        };
        $el.css(this.options.css);
        this.showModalBlanket();
        this.keyup = _.bind(this.keyup, this);
        this.click = _.bind(this.click, this);
        $(document.body).keyup(this.keyup);
        this.modalBlanket.click(this.click);
        if (this.options.bodyOverflowHidden === true) {
            this.originalBodyOverflowValue = $(document.body).css("overflow");
            $(document.body).css("overflow", "hidden")
        }
        modalContainer.append($el);
        modalContainer.css({
            opacity: 0,
            position: "absolute",
            "z-index": 999999
        });
        var offsets = this.getOffsets();
        if (coords.isEmpty()) {
            var positionY = centreY - $el.outerHeight() / 2;
            if (positionY < 10)
                positionY = 10;
            if (typeof this.options.y !== "undefined") {
                positionY = this.options.y
            } else {
                positionY += offsets.y
            }
            modalContainer.css({
                top: positionY + "px"
            });
            var positionX = centreX - $el.outerWidth() / 2;
            if (typeof this.options.x !== "undefined") {
                positionX = this.options.x
            } else {
                positionX += offsets.x
            }
            modalContainer.css({
                left: positionX + "px"
            })
        } else {
            if (coords.top != null)
                modalContainer.css({
                    top: coords.top + offsets.y
                });
            if (coords.left != null)
                modalContainer.css({
                    left: coords.left + offsets.x
                });
            if (coords.right != null)
                modalContainer.css({
                    right: coords.right
                });
            if (coords.bottom != null)
                modalContainer.css({
                    bottom: coords.bottom
                })
        }
        if (this.options.setFocusOnFirstFormControl) {
            this.setFocusOnFirstFormControl()
        }
        if (this.options.showCloseButton) {
            var view = this;
            var image = $("<a href='#' id='modalCloseButton'>&#160;</a>").css({
                position: "absolute",
                top: "-8px",
                right: "-495px",
                width: "32px",
                height: "32px",
                "z-index": "999999",
                background: "transparent url(" + view.options.closeImageUrl + ") top left no-repeat",
                "text-decoration": "none"
            }).appendTo(this.modalContainer).hover(function() {
                $(this).css("background-image", "url(" + view.options.closeImageHoverUrl + ") !important")
            }, function() {
                $(this).css("background-image", "url(" + view.options.closeImageUrl + ") !important")
            }).click(function(event) {
                event.preventDefault();
                view.hideModal()
            })
        }
        var animateProperties = {
            opacity: 1
        };
        var modalOffset = modalContainer.offset();
        if (this.options.slideFromAbove) {
            modalContainer.css({
                top: modalOffset.top - this.options.slideDistance + "px"
            });
            animateProperties.top = coords.top
        }
        if (this.options.slideFromBelow) {
            modalContainer.css({
                top: modalOffset.top + this.options.slideDistance + "px"
            });
            animateProperties.top = coords.top
        }
        this.modalContainer.animate(animateProperties, this.options.fadeInDuration);
        return this
    }
});
edx = edx || {};
(function(Backbone, $, _, gettext) {
    "use strict";
    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};
    edx.instructor_dashboard.proctoring.AddAllowanceView = Backbone.ModalView.extend({
        name: "AddAllowanceView",
        template: null,
        template_url: "/static/proctoring/templates/add-new-allowance.underscore",
        initialize: function(options) {
            this.proctored_exams = options.proctored_exams;
            this.proctored_exam_allowance_view = options.proctored_exam_allowance_view;
            this.course_id = options.course_id;
            this.course_groups = options.course_groups;
            this.allowance_types = options.allowance_types;
            this.userColletion = options.userCollection;
            this.model = new edx.instructor_dashboard.proctoring.ProctoredExamAllowanceModel;
            _.bindAll(this, "render");
            this.loadTemplateData()
        },
        events: {
            "submit form": "addAllowance",
            "change #proctored_exam": "selectExam",
            "change #allowance_type": "selectAllowance",
            "change #group_id": "changeGroupHandle"
        },
        renderUserCollection: function(users) {
            var $userInforElm = $("#user_info");
            $userInforElm.select2({
                width: "100%",
                language: {
                    noResults: function() {
                        return "Không tìm thấy kết quả"
                    }
                }
            });
            $userInforElm.find(".username").remove();
            for (var i in users) {
                $userInforElm.append($("<option>", {
                    value: users[i],
                    text: users[i],
                    class: "username"
                }))
            }
            $(".loading-user-list").addClass("hidden")
        },
        changeGroupHandle: function(event) {
            var $target = $(event.target);
            var self = this;
            var users = [];
            $(".loading-user-list").removeClass("hidden");
            if ($target.val() != "") {
                this.userColletion.fetch({
                    headers: {
                        "X-CSRFToken": self.proctored_exam_allowance_view.getCSRFToken()
                    },
                    type: "GET",
                    data: {
                        group_id: $target.val()
                    },
                    success: function(response) {
                        users = response.toJSON()[0].users;
                        users.sort();
                        self.renderUserCollection(users)
                    }
                })
            } else {
                users = [];
                self.renderUserCollection(users)
            }
        },
        loadTemplateData: function() {
            var self = this;
            $.ajax({
                url: self.template_url,
                dataType: "html"
            }).done(function(templateData) {
                self.template = _.template(templateData);
                self.render();
                self.showModal();
                self.updateCss();
                self.selectExamAtIndex(0)
            })
        },
        updateCss: function() {
            var $el = $(this.el);
            $el.find(".modal-header").css({
                color: "#1580b0",
                "font-size": "20px",
                "font-weight": "600",
                "line-height": "normal",
                padding: "10px 15px",
                "border-bottom": "1px solid #ccc"
            });
            $el.find("form").css({
                padding: "15px"
            });
            $el.find("form table.compact td").css({
                "vertical-align": "middle",
                padding: "4px 8px"
            });
            $el.find("form label").css({
                display: "block",
                "font-size": "14px",
                margin: 0,
                cursor: "default"
            });
            $el.find("form #minutes_label").css({
                display: "inline-block"
            });
            $el.find('form input[type="text"]').css({
                height: "26px",
                padding: "1px 8px 2px",
                "font-size": "14px"
            });
            $el.find('form input[type="submit"]').css({
                "margin-top": "10px",
                padding: "2px 32px"
            });
            $el.find(".error-message").css({
                color: "#ff0000",
                "line-height": "normal",
                "font-size": "14px"
            });
            $el.find(".error-response").css({
                color: "#ff0000",
                "line-height": "normal",
                "font-size": "14px",
                padding: "0px 10px 5px 7px"
            });
            $el.find("form select").css({
                padding: "2px 0px 2px 2px",
                "font-size": "16px"
            })
        },
        getCurrentFormValues: function() {
            return {
                proctored_exam: $("select#proctored_exam").val(),
                allowance_type: $("select#allowance_type").val(),
                group_id: $("select#group_id").val(),
                allowance_value: $("#allowance_value").val(),
                user_info: $("#user_info").val()
            }
        },
        hideError: function(view, attr) {
            var $element = view.$form[attr];
            $element.removeClass("error");
            $element.parent().find(".error-message").empty()
        },
        showError: function(view, attr, errorMessage) {
            var $element = view.$form[attr];
            var $errorMessage;
            $element.addClass("error");
            $errorMessage = $element.parent().find(".error-message");
            if ($errorMessage.length === 0) {
                $errorMessage = $("<div class='error-message'></div>");
                $element.parent().append($errorMessage)
            }
            $errorMessage.empty().append(errorMessage);
            this.updateCss()
        },
        addAllowance: function(event) {
            var $errorResponse, values, formHasErrors;
            var self = this;
            event.preventDefault();
            $errorResponse = $(".error-response");
            $errorResponse.html();
            values = this.getCurrentFormValues();
            formHasErrors = false;
            $.each(values, function(key, value) {
                if (value === "" && key != "user_info" && key != "group_id") {
                    formHasErrors = true;
                    self.showError(self, key, gettext("Required field."))
                } else {
                    self.hideError(self, key)
                }
            });
            if (!formHasErrors) {
                self.model.fetch({
                    headers: {
                        "X-CSRFToken": self.proctored_exam_allowance_view.getCSRFToken()
                    },
                    type: "PUT",
                    data: {
                        exam_id: values.proctored_exam,
                        user_info: values.user_info,
                        key: values.allowance_type,
                        value: values.allowance_value,
                        group_id: values.group_id,
                        course_id: self.course_id
                    },
                    success: function() {
                        $errorResponse.html();
                        self.proctored_exam_allowance_view.collection.url = self.proctored_exam_allowance_view.initial_url + self.course_id + "/allowance";
                        self.proctored_exam_allowance_view.hydrate();
                        self.hideModal()
                    },
                    error: function(unused, response) {
                        var data = $.parseJSON(response.responseText);
                        $errorResponse.html(gettext(data.detail))
                    }
                })
            }
        },
        selectExamAtIndex: function(index) {
            var selectedExam = this.proctored_exams[index];
            if (selectedExam.is_proctored) {
                if (selectedExam.is_practice_exam) {
                    $("#exam_type_label").text(gettext("Practice Exam"))
                } else {
                    $("#exam_type_label").text(gettext("Proctored Exam"))
                }
                $("#additional_time_label").hide();
                $("select#allowance_type").val("additional_time_granted").show()
            } else {
                $("#exam_type_label").text(gettext("Timed Exam"));
                $("#additional_time_label").show();
                $("select#allowance_type").val("additional_time_granted").hide()
            }
            this.updateAllowanceLabels("additional_time_granted")
        },
        selectExam: function() {
            this.selectExamAtIndex($("#proctored_exam")[0].selectedIndex)
        },
        selectAllowance: function() {
            this.updateAllowanceLabels($("#allowance_type").val())
        },
        updateAllowanceLabels: function(selectedAllowanceType) {
            if (selectedAllowanceType === "additional_time_granted") {
                $("#minutes_label").show();
                $("#allowance_value_label").text(gettext("Additional Time"))
            } else {
                $("#minutes_label").hide();
                $("#allowance_value_label").text(gettext("Value"))
            }
        },
        render: function() {
            $(this.el).html(this.template({
                proctored_exams: this.proctored_exams,
                allowance_types: this.allowance_types,
                course_groups: this.course_groups
            }));
            this.$form = {
                proctored_exam: this.$("select#proctored_exam"),
                allowance_type: this.$("select#allowance_type"),
                allowance_value: this.$("#allowance_value"),
                user_info: this.$("#user_info"),
                group_id: this.$("select#group_id")
            };
            return this
        }
    })
}
).call(this, Backbone, $, _, gettext);
edx = edx || {};
(function(Backbone, $, _) {
    "use strict";
    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};
    edx.instructor_dashboard.proctoring.ProctoredExamAllowanceView = Backbone.View.extend({
        initialize: function() {
            this.allowance_types = [["additional_time_granted", gettext("Additional Time (minutes)")], ["review_policy_exception", gettext("Review Policy Exception")]];
            this.collection = new edx.instructor_dashboard.proctoring.ProctoredExamAllowanceCollection;
            this.proctoredExamCollection = new edx.instructor_dashboard.proctoring.ProctoredExamCollection;
            this.cohortCollection = new edx.instructor_dashboard.proctoring.CohortCollection;
            this.userCollection = new edx.instructor_dashboard.proctoring.UserCollection;
            this.setElement($(".special-allowance-container"));
            this.course_id = this.$el.data("course-id");
            this.cohortCollection.url = this.cohortCollection.url.replace("<course_id>", this.course_id);
            this.userCollection.url = this.userCollection.url.replace("<course_id>", this.course_id);
            this.cohortsData = this.getCohortCollection();
            this.template_url = "/static/proctoring/templates/course_allowances.underscore";
            this.template = null;
            this.initial_url = this.collection.url;
            this.allowance_url = this.initial_url + "allowance";
            this.listenTo(this.collection, "change", this.collectionChanged);
            this.loadTemplateData();
            this.proctoredExamCollection.url = this.proctoredExamCollection.url + this.course_id;
            this.collection.url = this.initial_url + this.course_id + "/allowance"
        },
        events: {
            "click #add-allowance": "showAddModal",
            "click .remove_allowance": "removeAllowance"
        },
        getCohortCollection: function() {
            var response = {};
            var self = this;
            return self.cohortCollection.fetch({
                headers: {
                    "X-CSRFToken": this.getCSRFToken()
                },
                type: "GET",
                success: function(res) {
                    return res.toJSON()[0].cohorts
                }
            })
        },
        getCSRFToken: function() {
            var cookieValue = null;
            var name = "csrftoken";
            var cookies, cookie, i;
            if (document.cookie && document.cookie !== "") {
                cookies = document.cookie.split(";");
                for (i = 0; i < cookies.length; i += 1) {
                    cookie = jQuery.trim(cookies[i]);
                    if (cookie.substring(0, name.length + 1) === name + "=") {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break
                    }
                }
            }
            return cookieValue
        },
        removeAllowance: function(event) {
            var $element = $(event.currentTarget);
            var userID = $element.data("user-id");
            var examID = $element.data("exam-id");
            var key = $element.data("key-name");
            var self = this;
            self.collection.url = this.allowance_url;
            self.collection.fetch({
                headers: {
                    "X-CSRFToken": this.getCSRFToken()
                },
                type: "DELETE",
                data: {
                    exam_id: examID,
                    user_id: userID,
                    key: key
                },
                success: function() {
                    self.collection.url = self.initial_url + self.course_id + "/allowance";
                    self.hydrate()
                }
            });
            event.stopPropagation();
            event.preventDefault()
        },
        constructor: function(section) {
            $(section).data("wrapper", this);
            this.initialize({})
        },
        onClickTitle: function() {},
        loadTemplateData: function() {
            var self = this;
            $.ajax({
                url: self.template_url,
                dataType: "html"
            }).done(function(templateData) {
                self.template = _.template(templateData);
                self.hydrate()
            })
        },
        hydrate: function() {
            var self = this;
            self.collection.fetch({
                success: function() {
                    self.render()
                }
            })
        },
        collectionChanged: function() {
            this.hydrate()
        },
        render: function() {
            var self = this;
            var key, i, html;
            if (this.template !== null) {
                this.collection.each(function(item) {
                    key = item.get("key");
                    for (i = 0; i < self.allowance_types.length; i += 1) {
                        if (key === self.allowance_types[i][0]) {
                            item.set("key_display_name", self.allowance_types[i][1]);
                            break
                        }
                    }
                    if (!item.has("key_display_name")) {
                        item.set("key_display_name", key)
                    }
                });
                html = this.template({
                    proctored_exam_allowances: this.collection.toJSON()
                });
                this.$el.html(html)
            }
        },
        showAddModal: function(event) {
            var self = this;
            self.proctoredExamCollection.fetch({
                success: function() {
                    new edx.instructor_dashboard.proctoring.AddAllowanceView({
                        course_id: self.course_id,
                        proctored_exams: self.proctoredExamCollection.toJSON(),
                        proctored_exam_allowance_view: self,
                        allowance_types: self.allowance_types,
                        course_groups: self.cohortsData.responseJSON.cohorts,
                        userCollection: self.userCollection
                    })
                }
            });
            event.stopPropagation();
            event.preventDefault()
        }
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamAllowanceView = edx.instructor_dashboard.proctoring.ProctoredExamAllowanceView
}
).call(this, Backbone, $, _);
edx = edx || {};
(function(Backbone, $, _, gettext) {
    "use strict";
    var viewHelper, examStatusReadableFormat;
    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};
    examStatusReadableFormat = {
        eligible: gettext("Eligible"),
        created: gettext("Created"),
        download_software_clicked: gettext("Download Software Clicked"),
        ready_to_start: gettext("Ready to start"),
        started: gettext("Started"),
        ready_to_submit: gettext("Ready to submit"),
        declined: gettext("Declined"),
        timed_out: gettext("Timed out"),
        second_review_required: gettext("Second Review Required"),
        submitted: gettext("Submitted"),
        verified: gettext("Verified"),
        rejected: gettext("Rejected"),
        error: gettext("Error"),
        onboarding_missing: gettext("Onboarding Missing"),
        onboarding_pending: gettext("Onboarding Pending"),
        onboarding_failed: gettext("Onboarding Failed"),
        onboarding_expired: gettext("Onboarding Expired")
    };
    viewHelper = {
        getDateFormat: function(date) {
            if (date) {
                return new Date(date).toString("MMM dd, yyyy h:mmtt")
            } else {
                return "---"
            }
        },
        getExamAttemptStatus: function(status) {
            if (status in examStatusReadableFormat) {
                return examStatusReadableFormat[status]
            } else {
                return status
            }
        }
    };
    edx.instructor_dashboard.proctoring.ProctoredExamAttemptView = Backbone.View.extend({
        initialize: function() {
            this.setElement($(".student-proctored-exam-container"));
            this.collection = new edx.instructor_dashboard.proctoring.ProctoredExamAttemptCollection;
            this.tempate_url = "/static/proctoring/templates/student-proctored-exam-attempts.underscore";
            this.model = new edx.instructor_dashboard.proctoring.ProctoredExamAttemptModel;
            this.course_id = this.$el.data("course-id");
            this.template = null;
            this.initial_url = this.collection.url;
            this.attempt_url = this.model.url;
            this.collection.url = this.initial_url + this.course_id;
            this.inSearchMode = false;
            this.searchText = "";
            this.listenTo(this.collection, "change", this.collectionChanged);
            this.loadTemplateData()
        },
        events: {
            "click .remove-attempt": "onRemoveAttempt",
            "click li > a.target-link": "getPaginatedAttempts",
            "click .search-attempts > span.search": "searchAttempts",
            "click .search-attempts > span.clear-search": "clearSearch"
        },
        searchAttempts: function(event) {
            var searchText = $("#search_attempt_id").val();
            if (searchText !== "") {
                this.inSearchMode = true;
                this.searchText = searchText;
                this.collection.url = this.initial_url + this.course_id + "/search/" + searchText;
                this.hydrate();
                event.stopPropagation();
                event.preventDefault()
            }
        },
        clearSearch: function(event) {
            this.inSearchMode = false;
            this.searchText = "";
            this.collection.url = this.initial_url + this.course_id;
            this.hydrate();
            event.stopPropagation();
            event.preventDefault()
        },
        getPaginatedAttempts: function(event) {
            var $target = $(event.currentTarget);
            this.collection.url = $target.data("target-url");
            this.hydrate();
            event.stopPropagation();
            event.preventDefault()
        },
        getCSRFToken: function() {
            var cookieValue = null;
            var name = "csrftoken";
            var cookie, cookies, i;
            if (document.cookie && document.cookie !== "") {
                cookies = document.cookie.split(";");
                for (i = 0; i < cookies.length; i += 1) {
                    cookie = jQuery.trim(cookies[i]);
                    if (cookie.substring(0, name.length + 1) === name + "=") {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break
                    }
                }
            }
            return cookieValue
        },
        loadTemplateData: function() {
            var self = this;
            $.ajax({
                url: self.tempate_url,
                dataType: "html"
            }).done(function(templateData) {
                self.template = _.template(templateData);
                self.hydrate()
            })
        },
        hydrate: function() {
            var self = this;
            self.collection.fetch({
                success: function() {
                    self.render()
                }
            })
        },
        collectionChanged: function() {
            this.hydrate()
        },
        render: function() {
            var dataJson, startPage, endPage, data, html;
            if (this.template !== null) {
                dataJson = this.collection.toJSON()[0];
                startPage = dataJson.pagination_info.current_page - 2;
                if (startPage < 1) {
                    startPage = 1
                }
                endPage = startPage + 4;
                if (endPage > dataJson.pagination_info.total_pages) {
                    endPage = dataJson.pagination_info.total_pages
                }
                _.each(dataJson.proctored_exam_attempts, function(proctoredExamAttempt) {
                    var isProctored = proctoredExamAttempt.proctored_exam.is_proctored;
                    var isPractice = proctoredExamAttempt.proctored_exam.is_practice_exam;
                    var proctoredText = isPractice ? gettext("Practice") : gettext("Proctored");
                    proctoredExamAttempt.exam_attempt_type = !isProctored ? gettext("Timed") : proctoredText
                });
                data = {
                    proctored_exam_attempts: dataJson.proctored_exam_attempts,
                    pagination_info: dataJson.pagination_info,
                    attempt_url: dataJson.attempt_url,
                    inSearchMode: this.inSearchMode,
                    searchText: this.searchText,
                    start_page: startPage,
                    end_page: endPage
                };
                _.extend(data, viewHelper);
                html = this.template(data);
                this.$el.html(html)
            }
        },
        onRemoveAttempt: function(event) {
            var $target, attemptId;
            var self = this;
            event.preventDefault();
            if (!confirm(gettext("Are you sure you want to remove this student's exam attempt?"))) {
                return
            }
            $("body").css("cursor", "wait");
            $target = $(event.currentTarget);
            attemptId = $target.data("attemptId");
            self.model.url = this.attempt_url + attemptId;
            self.model.fetch({
                headers: {
                    "X-CSRFToken": this.getCSRFToken()
                },
                type: "DELETE",
                success: function() {
                    self.hydrate();
                    $("body").css("cursor", "auto")
                }
            })
        }
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamAttemptView = edx.instructor_dashboard.proctoring.ProctoredExamAttemptView
}
).call(this, Backbone, $, _, gettext);
edx = edx || {};
(function(Backbone, $, _, gettext) {
    "use strict";
    var viewHelper, examStatusReadableFormat, filterableStatus;
    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};
    examStatusReadableFormat = {
        eligible: gettext("Eligible"),
        created: gettext("Created"),
        download_software_clicked: gettext("Download Software Clicked"),
        ready_to_start: gettext("Ready to start"),
        started: gettext("Started"),
        ready_to_submit: gettext("Ready to submit"),
        declined: gettext("Declined"),
        timed_out: gettext("Timed out"),
        second_review_required: gettext("Second Review Required"),
        submitted: gettext("Submitted"),
        verified: gettext("Verified"),
        rejected: gettext("Rejected"),
        error: gettext("Error"),
        onboarding_missing: gettext("Onboarding Missing"),
        onboarding_pending: gettext("Onboarding Pending"),
        onboarding_failed: gettext("Onboarding Failed"),
        onboarding_expired: gettext("Onboarding Expired"),
        not_stated: gettext("Not started")
    };
    viewHelper = {
        getDateFormat: function(date) {
            if (date) {
                return new Date(date).toString("MMM dd, yyyy h:mmtt")
            } else {
                return "---"
            }
        },
        getExamAttemptStatus: function(status) {
            if (status in examStatusReadableFormat) {
                return examStatusReadableFormat[status]
            } else {
                return status
            }
        }
    };
    filterableStatus = [{
        value: "all_status",
        display_name: gettext("All status")
    }, {
        value: "started",
        display_name: gettext("Started")
    }, {
        value: "submitted",
        display_name: gettext("Submitted")
    }, {
        value: "not_stated",
        display_name: gettext("Not started")
    }];
    edx.instructor_dashboard.proctoring.ProctoredExamTrackingView = Backbone.View.extend({
        initialize: function() {
            this.setElement($(".student-tracking-exam-container"));
            this.collection = new edx.instructor_dashboard.proctoring.ProctoredExamTrackingCollection;
            this.model = new edx.instructor_dashboard.proctoring.ProctoredExamTrackingModel;
            this.proctoredExamCollection = new edx.instructor_dashboard.proctoring.ProctoredExamCollection;
            this.cohortCollection = new edx.instructor_dashboard.proctoring.CohortCollection;
            this.countStatusCollection = new edx.instructor_dashboard.proctoring.ProctoredExamCountStatusCollection;
            this.tempate_url = "/static/proctoring/templates/tracking-proctored-exam.underscore";
            this.course_id = this.$el.data("course-id");
            this.template = null;
            this.pageSize = 10;
            this.initial_url = this.collection.url;
            this.attempt_url = this.model.url;
            this.collection.url = this.initial_url + this.course_id;
            this.searchText = "";
            this.refreshTime = null;
            this.queryParams = {};
            this.cohortId = null;
            this.countStatus = null;
            this.examId = null;
            this.examStatus = null;
            this.cohorts = "";
            this.proctored_exams = "";
            this.cohortCollection.url = this.cohortCollection.url.replace("<course_id>", this.course_id);
            this.proctoredExamCollection.url = this.proctoredExamCollection.url + this.course_id;
            this.countStatusURL = this.countStatusCollection.url.replace("<course_id>", this.course_id);
            this.getCohortCollection();
            this.getProctoredExamCollection();
            this.listenTo(this.collection, "change", this.collectionChanged);
            this.loadTemplateData()
        },
        events: {
            "click li > a.target-link": "getPaginatedAttempts",
            "click .search": "searchAttempts",
            "click .auto-refresh": "refreshData",
            "change #auto_refresh_time": "updateTimeStamp",
            "change #cohort_id": "updateParams",
            "change #exam_id": "updateParams",
            "change #exam_status": "updateParams",
            "change #search_attempt_id": "searchSpecificUser",
            "change #pageSize": "searchAttempts"
        },
        getCohortCollection: function() {
            var self = this;
            this.cohortCollection.fetch({
                headers: {
                    "X-CSRFToken": this.getCSRFToken()
                },
                type: "GET",
                success: function(res) {
                    self.cohorts = res.toJSON()[0].cohorts;
                    self.render()
                }
            })
        },
        getProctoredExamCollection: function() {
            var self = this;
            self.proctoredExamCollection.fetch({
                headers: {
                    "X-CSRFToken": this.getCSRFToken()
                },
                type: "GET",
                success: function(res) {
                    self.proctored_exams = res.toJSON()
                }
            })
        },
        getCountStatusCollection: function(resolve) {
            var self = this;
            self.countStatusCollection.fetch({
                headers: {
                    "X-CSRFToken": this.getCSRFToken()
                },
                type: "GET",
                success: function(res) {
                    self.countStatus = res.toJSON();
                    resolve(res.toJSON())
                }
            })
        },
        isLoading: function() {
            $(".ui-loading").removeClass("hidden")
        },
        updateTimeStamp: function(event) {
            var $target = $(event.currentTarget);
            this.refreshTime = $target.val()
        },
        updateParams: function(event) {
            var $target = $(event.currentTarget);
            var field = $target.attr("id");
            this.queryParams[field] = $target.val()
        },
        refreshData: function() {
            var self = this;
            if (this.refreshTime) {
                self.hydrate();
                this.interval = setInterval(function() {
                    self.hydrate()
                }, this.refreshTime * 1e3 * 60)
            }
        },
        getUrl: function() {
            return this.initial_url + this.course_id + this.parseObjectToQuery(this.queryParams)
        },
        searchAttempts: function(event) {
            var cohort_id = $("#cohort_id").val();
            var exam_id = $("#exam_id").val();
            var exam_status = $("#exam_status").val();
            var page_size = $("#pageSize").val();
            this.cohortId = cohort_id;
            this.examId = exam_id;
            this.examStatus = exam_status;
            this.pageSize = page_size;
            this.queryParams["cohort_id"] = cohort_id;
            this.queryParams["exam_id"] = exam_id;
            this.queryParams["exam_status"] = exam_status;
            this.queryParams["page_size"] = page_size;
            this.collection.url = this.getUrl();
            this.hydrate();
            event.stopPropagation();
            event.preventDefault()
        },
        searchSpecificUser: function(event) {
            var $target = $(event.currentTarget);
            var search_by = $target.val();
            this.queryParams["search_by"] = search_by;
            this.searchText = search_by;
            this.collection.url = this.getUrl();
            this.hydrate();
            event.stopPropagation();
            event.preventDefault()
        },
        getPaginatedAttempts: function(event) {
            var $target = $(event.currentTarget);
            this.collection.url = $target.data("target-url");
            this.hydrate();
            event.stopPropagation();
            event.preventDefault()
        },
        getCSRFToken: function() {
            var cookieValue = null;
            var name = "csrftoken";
            var cookie, cookies, i;
            if (document.cookie && document.cookie !== "") {
                cookies = document.cookie.split(";");
                for (i = 0; i < cookies.length; i += 1) {
                    cookie = jQuery.trim(cookies[i]);
                    if (cookie.substring(0, name.length + 1) === name + "=") {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break
                    }
                }
            }
            return cookieValue
        },
        loadTemplateData: function() {
            var self = this;
            $.ajax({
                url: self.tempate_url,
                dataType: "html"
            }).done(function(templateData) {
                self.template = _.template(templateData);
                self.hydrate()
            })
        },
        hydrate: function() {
            var self = this;
            this.countStatusCollection.url = this.countStatusURL + this.parseObjectToQuery(this.queryParams);
            var countStatusReq = new Promise(function(resolve) {
                self.getCountStatusCollection(resolve)
            }
            );
            var getViewData = new Promise(function(resolve) {
                self.collection.fetch({
                    success: function(res) {
                        resolve(res)
                    }
                })
            }
            );
            this.isLoading();
            Promise.allSettled([countStatusReq, getViewData]).then(function(resultes) {
                self.render()
            })
        },
        collectionChanged: function() {
            this.hydrate()
        },
        parseObjectToQuery: function(obj) {
            var params = new URLSearchParams;
            for (var key in obj) {
                if (obj.hasOwnProperty(key) && obj[key]) {
                    params.append(key, obj[key])
                }
            }
            return "?" + params.toString()
        },
        render: function() {
            var dataJson, startPage, endPage, data, html;
            if (this.template !== null) {
                dataJson = this.collection.toJSON()[0];
                startPage = dataJson.pagination_info.current_page - 2;
                if (startPage < 1) {
                    startPage = 1
                }
                endPage = startPage + 4;
                if (endPage > dataJson.pagination_info.total_pages) {
                    endPage = dataJson.pagination_info.total_pages
                }
                _.each(dataJson.proctored_exam_attempts, function(proctoredExamAttempt) {
                    var isProctored = proctoredExamAttempt.proctored_exam.is_proctored;
                    var isPractice = proctoredExamAttempt.proctored_exam.is_practice_exam;
                    var proctoredText = isPractice ? gettext("Practice") : gettext("Proctored");
                    proctoredExamAttempt.exam_attempt_type = !isProctored ? gettext("Timed") : proctoredText
                });
                data = {
                    proctored_exam_attempts: dataJson.proctored_exam_attempts,
                    pagination_info: dataJson.pagination_info,
                    attempt_url: this.getUrl(),
                    searchText: this.searchText,
                    start_page: startPage,
                    end_page: endPage,
                    cohorts: this.cohorts,
                    proctored_exams: this.proctored_exams,
                    cohortId: this.cohortId,
                    examId: this.examId,
                    examStatus: this.examStatus,
                    refreshTime: this.refreshTime,
                    filterableStatus: filterableStatus,
                    pageSize: this.pageSize,
                    countStatus: this.countStatus
                };
                _.extend(data, viewHelper);
                html = this.template(data);
                this.$el.html(html)
            }
        }
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamTrackingView = edx.instructor_dashboard.proctoring.ProctoredExamTrackingView
}
).call(this, Backbone, $, _, gettext);
edx = edx || {};
(function(Backbone, $, _, gettext) {
    "use strict";
    edx.courseware = edx.courseware || {};
    edx.courseware.proctored_exam = edx.courseware.proctored_exam || {};
    edx.courseware.proctored_exam.ProctoredExamView = Backbone.View.extend({
        initialize: function(options) {
            var templateHtml, controlsTemplateHtml;
            _.bindAll(this, "detectScroll");
            this.$el = options.el;
            this.timerBarTopPosition = this.$el.position().top;
            this.initialCourseNavBarMarginTop = this.timerBarTopPosition - 3;
            this.model = options.model;
            this.templateId = options.proctored_template;
            this.template = null;
            this.timerId = null;
            this.timerTick = 0;
            this.secondsLeft = 0;
            this.grace_period_secs = 5;
            this.poll_interval = 60;
            this.first_time_rendering = true;
            this.taking_as_proctored = false;
            templateHtml = $(this.templateId).text();
            if (templateHtml !== null) {
                this.template = _.template(templateHtml)
            }
            controlsTemplateHtml = $(this.examControlsTemplateId).text();
            if (controlsTemplateHtml !== null) {
                this.controls_template = _.template(controlsTemplateHtml)
            }
            this.listenTo(this.model, "change", this.modelChanged);
            $(window).unbind("beforeunload", this.unloadMessage);
        },
        events: {
            "click #toggle_timer": "toggleTimerVisibility",
            "click .js-toggle-show-more": "toggleShowText"
        },
        detectScroll: function(event) {
            var examStatusBarHeight;
            var $courseNavBar = $(".wrapper-course-material");
            if (!$courseNavBar.length) {
                $courseNavBar = $(".course-tabs")
            }
            examStatusBarHeight = this.$el.height();
            if ($(event.currentTarget).scrollTop() > this.timerBarTopPosition) {
                $(".proctored_exam_status").addClass("is-fixed");
                $courseNavBar.css("margin-top", examStatusBarHeight + "px")
            } else {
                $(".proctored_exam_status").removeClass("is-fixed");
                $courseNavBar.css("margin-top", "0")
            }
        },
        modelChanged: function() {
            var desktopApplicationJsUrl;
            var takingAsProctored = this.model.get("taking_as_proctored");
            var timeLeft = this.model.get("time_remaining_seconds") > 0;
            var status = this.model.get("attempt_status");
            var inCourseware = document.location.href.indexOf("/courses/" + this.model.get("course_id") + "/courseware/") > -1;
            this.secondsLeft = this.model.get("time_remaining_seconds");
            if (takingAsProctored && timeLeft && inCourseware && status !== "started") {
                $(window).bind("beforeunload", this.unloadMessage)
            } else {
                $(window).unbind("beforeunload", this.unloadMessage)
            }
            desktopApplicationJsUrl = this.model.get("desktop_application_js_url");
            if (desktopApplicationJsUrl && !edx.courseware.proctored_exam.configuredWorkerURL) {
                edx.courseware.proctored_exam.configuredWorkerURL = desktopApplicationJsUrl
            }
            this.render()
        },
        render: function() {
            var html, self;
            if (this.template !== null) {
                if (this.model.get("in_timed_exam") && this.model.get("time_remaining_seconds") > 0 && this.model.get("attempt_status") !== "error") {
                    $(window).bind("scroll", this.detectScroll);
                    html = this.template(this.model.toJSON());
                    this.$el.html(html);
                    this.$el.show();
                    if (this.first_time_rendering) {
                        this.accessibility_time_string = this.model.get("accessibility_time_string");
                        this.$el.find(".timer-announce").html(this.accessibility_time_string);
                        if (!(window && window.matchMedia && window.matchMedia("(min-width: 992px)").matches)) {
                            this.toggleShowText()
                        }
                        this.first_time_rendering = false
                    }
                    this.updateRemainingTime();
                    this.timerId = setInterval(this.updateRemainingTime.bind(this), 1e3, this);
                    self = this;
                    
                } else {
                    $(window).unbind("scroll", this.detectScroll)
                }
            }
            return this
        },
        reloadPage: function() {
            location.reload()
        },
        unloadMessage: function() {
            return gettext("Are you sure you want to leave this page? \n" + "To pass your proctored exam you must also pass the online proctoring session review.")
        },
        updateRemainingTime: function() {
            var url, queryString, newState;
            var self = this;
            var pingInterval = self.model.get("ping_interval");
            self.timerTick += 1;
            self.secondsLeft -= 1;
            if (self.timerTick % pingInterval === pingInterval / 2 && edx.courseware.proctored_exam.configuredWorkerURL && this.model.get("attempt_status") !== "ready_to_submit") {
                edx.courseware.proctored_exam.pingApplication(pingInterval).catch(self.endExamForFailureState.bind(self))
            }
            if (self.timerTick % self.poll_interval === 0) {
                url = self.model.url + "/" + self.model.get("attempt_id");
                queryString = "?sourceid=in_exam&proctored=" + self.model.get("taking_as_proctored");
                $.ajax(url + queryString).success(function(data) {
                    if (data.status === "error") {
                        clearInterval(self.timerId);
                        $(window).unbind("beforeunload", self.unloadMessage);
                        location.reload()
                    } else {
                        self.secondsLeft = data.time_remaining_seconds;
                        self.accessibility_time_string = data.accessibility_time_string
                    }
                })
            }
            self.$el.find("div.exam-timer").attr("class");
            newState = self.model.getRemainingTimeState(self.secondsLeft);
            if (newState !== null && !self.$el.find("div.exam-timer").hasClass(newState)) {
                self.$el.find("div.exam-timer").removeClass("warning critical");
                self.$el.find("div.exam-timer").addClass("low-time " + newState);
                self.$el.find(".timer-announce").html(self.accessibility_time_string)
            }
            self.$el.find("h3#time_remaining_id b").html(self.model.getFormattedRemainingTime(self.secondsLeft));
            if (self.secondsLeft <= -self.grace_period_secs) {
                clearInterval(self.timerId);
                $(window).unbind("beforeunload", this.unloadMessage);
                edx.courseware.proctored_exam.endExam(self.model.get("exam_started_poll_url")).then(self.reloadPage)
            }
        },
        endExamForFailureState: function() {
            var self = this;
            return $.ajax({
                data: {
                    action: "error"
                },
                url: this.model.url + "/" + this.model.get("attempt_id"),
                type: "PUT"
            }).done(function(result) {
                if (result.exam_attempt_id) {
                    self.reloadPage()
                }
            })
        },
        toggleTimerVisibility: function(event) {
            var $button = $(event.currentTarget);
            var icon = $button.find("i");
            var timer = this.$el.find("h3#time_remaining_id b");
            if (timer.hasClass("timer-hidden")) {
                timer.removeClass("timer-hidden");
                $button.attr("aria-pressed", "false");
                icon.removeClass("fa-eye").addClass("fa-eye-slash")
            } else {
                timer.addClass("timer-hidden");
                $button.attr("aria-pressed", "true");
                icon.removeClass("fa-eye-slash").addClass("fa-eye")
            }
            event.stopPropagation();
            event.preventDefault()
        },
        toggleShowText: function() {
            var $examText = this.$el.find(".js-exam-text");
            var $toggle = this.$el.find(".js-toggle-show-more");
            var $additionalText = this.$el.find(".js-exam-additional-text");
            var currentlyShowingLongText = $examText.data("showLong");
            $additionalText.toggleClass("hidden d-none", currentlyShowingLongText).attr("aria-hidden", currentlyShowingLongText);
            $toggle.html(currentlyShowingLongText ? $toggle.data("showMoreText") : $toggle.data("showLessText"));
            $examText.data("showLong", !currentlyShowingLongText)
        }
    });
    this.edx.courseware.proctored_exam.ProctoredExamView = edx.courseware.proctored_exam.ProctoredExamView
}
).call(this, Backbone, $, _, gettext);
edx = edx || {};
(function(Backbone, $, _) {
    "use strict";
    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};
    edx.instructor_dashboard.proctoring.ProctoredExamDashboardView = Backbone.View.extend({
        initialize: function() {
            var self = this;
            this.setElement($(".student-review-dashboard-container"));
            this.tempate_url = "/static/proctoring/templates/dashboard.underscore";
            this.iframeHTML = null;
            this.doRender = true;
            this.context = {
                dashboardURL: "/api/edx_proctoring/v1/instructor/" + this.$el.data("course-id")
            };
            $("#proctoring-accordion").on("accordionactivate", function(event, ui) {
                self.render(ui)
            });
            this.loadTemplateData()
        },
        loadTemplateData: function() {
            var self = this;
            $.ajax({
                url: self.tempate_url,
                dataType: "html"
            }).done(function(templateHtml) {
                self.iframeHTML = _.template(templateHtml)(self.context)
            })
        },
        render: function(ui) {
            if (ui.newPanel.eq(this.$el) && this.doRender && this.iframeHTML) {
                this.$el.html(this.iframeHTML);
                this.doRender = false
            }
        }
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamDashboardView = edx.instructor_dashboard.proctoring.ProctoredExamDashboardView
}
).call(this, Backbone, $, _);
$(function() {
    "use strict";
    var proctoredExamView = new edx.courseware.proctored_exam.ProctoredExamView({
        el: $(".proctored_exam_status"),
        proctored_template: "#proctored-exam-status-tpl",
        model: ""
    });
    proctoredExamView.render()
});
edx = edx || {};
(function($) {
    "use strict";
    var actionToMessageTypesMap = {
        submit: {
            promptEventName: "endExamAttempt",
            successEventName: "examAttemptEnded",
            failureEventName: "examAttemptEndFailed"
        },
        start: {
            promptEventName: "startExamAttempt",
            successEventName: "examAttemptStarted",
            failureEventName: "examAttemptStartFailed"
        },
        ping: {
            promptEventName: "ping",
            successEventName: "echo",
            failureEventName: "pingFailed"
        }
    };
    function accessibleError(title, message) {
        accessible_modal("#accessible-error-modal #confirm_open_button", "#accessible-error-modal .close-modal", "#accessible-error-modal", ".content-wrapper");
        $("#accessible-error-modal #confirm_open_button").click();
        $("#accessible-error-modal .message-title").html(message);
        $("#accessible-error-modal #acessible-error-title").html(title);
        $("#accessible-error-modal .ok-button").html(gettext("OK")).off("click.closeModal").on("click.closeModal", function() {
            $("#accessible-error-modal .close-modal").click()
        })
    }
    function createWorker(url) {
        var blob = new Blob(["importScripts('" + url + "');"],{
            type: "application/javascript"
        });
        var blobUrl = window.URL.createObjectURL(blob);
        return new Worker(blobUrl)
    }
    function workerPromiseForEventNames(eventNames) {
        return function() {
            var proctoringBackendWorker = createWorker(edx.courseware.proctored_exam.configuredWorkerURL);
            return new Promise(function(resolve, reject) {
                var responseHandler = function(e) {
                    if (e.data.type === eventNames.successEventName) {
                        proctoringBackendWorker.removeEventListener("message", responseHandler);
                        proctoringBackendWorker.terminate();
                        resolve()
                    } else {
                        reject()
                    }
                };
                proctoringBackendWorker.addEventListener("message", responseHandler);
                proctoringBackendWorker.postMessage({
                    type: eventNames.promptEventName
                })
            }
            )
        }
    }
    function timeoutPromise(timeoutMilliseconds) {
        return new Promise(function(resolve, reject) {
            setTimeout(reject, timeoutMilliseconds)
        }
        )
    }
    function updateExamAttemptStatusPromise(actionUrl, action) {
        return function() {
            return Promise.resolve($.ajax({
                url: actionUrl,
                type: "PUT",
                data: {
                    action: action
                }
            }))
        }
    }
    function reloadPage() {
        location.reload()
    }
    function setActionButtonLoadingState($button) {
        $button.prop("disabled", true);
        $button.html($button.data("loading-text"))
    }
    function setActionButtonSteadyState($button) {
        $button.prop("disabled", false);
        $button.html($button.data("cta-text"))
    }
    function errorHandlerGivenMessage($button, title, message) {
        setActionButtonSteadyState($button);
        return function() {
            accessibleError(title, message)
        }
    }
    edx.courseware = edx.courseware || {};
    edx.courseware.proctored_exam = edx.courseware.proctored_exam || {};
    edx.courseware.proctored_exam.updateStatusHandler = function() {
        var $this = $(this);
        var actionUrl = $this.data("change-state-url");
        var action = $this.data("action");
        updateExamAttemptStatusPromise(actionUrl, action)().then(reloadPage).catch(errorHandlerGivenMessage($this, gettext("Error Ending Exam"), gettext("Something has gone wrong ending your exam. " + "Please reload the page and start again.")))
    }
    ;
    edx.courseware.proctored_exam.examStartHandler = function(e) {
        var $this = $(this);
        var actionUrl = $this.data("change-state-url");
        var action = $this.data("action");
        var shouldUseWorker = window.Worker && edx.courseware.proctored_exam.configuredWorkerURL;
        e.preventDefault();
        e.stopPropagation();
        setActionButtonLoadingState($this);
        if (shouldUseWorker) {
            workerPromiseForEventNames(actionToMessageTypesMap[action])().then(updateExamAttemptStatusPromise(actionUrl, action)).then(reloadPage).catch(errorHandlerGivenMessage($this, gettext("Error Starting Exam"), gettext("Something has gone wrong starting your exam. " + "Please double-check that the application is running.")))
        } else {
            updateExamAttemptStatusPromise(actionUrl, action)().then(reloadPage).catch(errorHandlerGivenMessage($this, gettext("Error Starting Exam"), gettext("Something has gone wrong starting your exam. " + "Please reload the page and start again.")))
        }
    }
    ;
    edx.courseware.proctored_exam.examEndHandler = function() {
        var $this = $(this);
        var actionUrl = $this.data("change-state-url");
        var action = $this.data("action");
        var shouldUseWorker = window.Worker && edx.courseware.proctored_exam.configuredWorkerURL && action === "submit";
        $(window).unbind("beforeunload");
        setActionButtonLoadingState($this);
        if (shouldUseWorker) {
            updateExamAttemptStatusPromise(actionUrl, action)().then(workerPromiseForEventNames(actionToMessageTypesMap[action])).then(reloadPage).catch(errorHandlerGivenMessage($this, gettext("Error Ending Exam"), gettext("Something has gone wrong ending your exam. " + "Please double-check that the application is running.")))
        } else {
            updateExamAttemptStatusPromise(actionUrl, action)().then(reloadPage).catch(errorHandlerGivenMessage($this, gettext("Error Ending Exam"), gettext("Something has gone wrong ending your exam. " + "Please reload the page and start again.")))
        }
    }
    ;
    edx.courseware.proctored_exam.checkExamAttemptStatus = function(attemptStatusPollURL) {
        return new Promise(function(resolve, reject) {
            $.ajax(attemptStatusPollURL).success(function(data) {
                if (data.status) {
                    resolve(data.status)
                } else {
                    reject()
                }
            }).fail(function() {
                reject()
            })
        }
        )
    }
    ;
    edx.courseware.proctored_exam.endExam = function(attemptStatusPollURL) {
        var shouldUseWorker = window.Worker && edx.courseware.proctored_exam.configuredWorkerURL;
        if (shouldUseWorker) {
            return edx.courseware.proctored_exam.checkExamAttemptStatus(attemptStatusPollURL).then(function(status) {
                if (status === "submitted") {
                    return workerPromiseForEventNames(actionToMessageTypesMap.submit)()
                }
                return Promise.reject()
            })
        } else {
            return Promise.resolve()
        }
    }
    ;
    edx.courseware.proctored_exam.pingApplication = function(timeoutInSeconds) {
        return Promise.race([workerPromiseForEventNames(actionToMessageTypesMap.ping)(), timeoutPromise(timeoutInSeconds * 1e3)])
    }
    ;
    edx.courseware.proctored_exam.accessibleError = accessibleError
}
).call(this, $);
