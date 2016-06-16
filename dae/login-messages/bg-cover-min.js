(function(a) {
    a.fn.anystretch = function(d, c, e) {
        var b = this.selector.length ? false : true;
        return this.each(function(q) {
            var s = {
                    positionX: "center",
                    positionY: "center",
                    speed: 0,
                    elPosition: "relative",
                    dataName: "stretch"
                },
                h = a(this),
                g = b ? a(".anystretch") : h.children(".anystretch"),
                l = g.data("settings") || s,
                m = g.data("settings"),
                j, f, r, p, v, u;
            if (c && typeof c == "object") {
                a.extend(l, c)
            }
            if (c && typeof c == "function") {
                e = c
            }
            a(document).ready(t);
            return this;

            function t() {
                if (d || h.length >= 1) {
                    var i;
                    if (!b) {
                        h.css({
                            position: l.elPosition,
                            background: "none"
                        })
                    }
                    if (g.length == 0) {
                        g = a("<div />").attr("class", "anystretch").css({
                            left: 0,
                            top: 0,
                            position: (b ? "fixed" : "absolute"),
                            overflow: "hidden",
                            zIndex: (b ? -999999 : -999998),
                            margin: 0,
                            padding: 0,
                            height: "100%",
                            width: "100%"
                        })
                    } else {
                        g.find("img").addClass("deleteable")
                    }
                    i = a("<img />").css({
                        position: "absolute",
                        display: "none",
                        margin: 0,
                        padding: 0,
                        border: "none",
                        zIndex: -999999
                    }).bind("load", function(A) {
                        var z = a(this),
                            y, x;
                        z.css({
                            width: "auto",
                            height: "auto"
                        });
                        y = this.width || a(A.target).width();
                        x = this.height || a(A.target).height();
                        j = y / x;
                        o(function() {
                            z.fadeIn(l.speed, function() {
                                g.find(".deleteable").remove();
                                if (typeof e == "function") {
                                    e()
                                }
                            })
                        })
                    }).appendTo(g);
                    if (h.children(".anystretch").length == 0) {
                        if (b) {
                            a("body").append(g)
                        } else {
                            h.append(g)
                        }
                    }
                    g.data("settings", l);
                    var w = "";
                    if (d) {
                        w = d
                    } else {
                        if (h.data(l.dataName)) {
                            w = h.data(l.dataName)
                        } else {
                            return
                        }
                    }

                    //alert(w);


                    var num = Math.floor(Math.random() * 4); // 0...6
                    var imagesArray = [
                        "1.jpg",
                        "2.jpg",
                        "5.jpg",
                        "4.jpg",
                        "5.jpg"];

                    var text1Array = [
                        "Explore Real World Evidence",
                        "Explore Real World Evidence",
                        "Explore Real World Evidence",
                        "Explore Real World Evidence",
                        "Explore Real World Evidence"];


                    var text2Array = [
                        "Drive insights from real world data",
                        "Drive insights from real world data",
                        "Drive insights from real world data",
                        "Drive insights from real world data",
                        "Drive insights from real world data"];



                    w = "https://rawgit.com/vgalatsky/random_images/master/dae/login-messages/assets/images/" + imagesArray[num];
                    i.attr("src", w);
                    $('#text1Array').text(text1Array[num]);
                    $('#text2Array').text(text2Array[num]);

                    a(window).resize(o)
                }
            }

            function o(i) {
                try {
                    u = {
                        left: 0,
                        top: 0
                    };
                    r = k();
                    p = r / j;
                    if (p >= n()) {
                        v = (p - n()) / 2;
                        if (l.positionY == "center" || l.centeredY) {
                            a.extend(u, {
                                top: "-" + v + "px"
                            })
                        } else {
                            if (l.positionY == "bottom") {
                                a.extend(u, {
                                    top: "auto",
                                    bottom: "0px"
                                })
                            }
                        }
                    } else {
                        p = n();
                        r = p * j;
                        v = (r - k()) / 2;
                        if (l.positionX == "center" || l.centeredX) {
                            a.extend(u, {
                                left: "-" + v + "px"
                            })
                        } else {
                            if (l.positionX == "right") {
                                a.extend(u, {
                                    left: "auto",
                                    right: "0px"
                                })
                            }
                        }
                    }
                    g.children("img:not(.deleteable)").width(r).height(p).filter("img").css(u)
                } catch (w) {}
                if (typeof i == "function") {
                    i()
                }
            }

            function k() {
                return b ? h.width() : h.innerWidth()
            }

            function n() {
                return b ? h.height() : h.innerHeight()
            }
        })
    };
    a.anystretch = function(d, b, e) {
        var c = ("onorientationchange" in window) ? a(document) : a(window);
        c.anystretch(d, b, e)
    }
})(jQuery);
$(function() {
    $(".stretchMe").each(function() {
        var a = $(this);
        if (a.is(":visible")) {
            a.selector = "this is an element";
            a.anystretch(a.data("bg"))
        }
    })
});