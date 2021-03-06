(function(q) {
    var m = function(j, a) {
        var b = this,
            c = m.prototype;
        this.nImg = j;
        this.sImg = a;
        this.isMobile_bl = FWDUtils.isMobile;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        this.isDisabled_bl = false;
        this.init = function() {
            this.setupMainContainers()
        };
        this.setupMainContainers = function() {
            this.n_do = new FWDDisplayObject("img");
            this.n_do.setScreen(this.nImg);
            this.s_do = new FWDDisplayObject("img");
            this.s_do.setScreen(this.sImg);
            this.addChild(this.s_do);
            this.addChild(this.n_do);
            this.setWidth(this.nImg.width);
            this.setHeight(this.nImg.height);
            this.setButtonMode(true);
            if (b.isMobile_bl)
                if (b.hasPointerEvent_bl) {
                    b.screen.addEventListener("MSPointerOver", b.onMouseOver);
                    b.screen.addEventListener("MSPointerOut", b.onMouseOut);
                    b.screen.addEventListener("MSPointerUp", b.onClick)
                } else b.screen.addEventListener("touchstart", b.onClick);
            else if (b.screen.addEventListener) {
                b.screen.addEventListener("mouseover", b.onMouseOver);
                b.screen.addEventListener("mouseout", b.onMouseOut);
                b.screen.addEventListener("mouseup", b.onClick)
            } else if (b.screen.attachEvent) {
                b.screen.attachEvent("onmouseover", b.onMouseOver);
                b.screen.attachEvent("onmouseout", b.onMouseOut);
                b.screen.attachEvent("onmouseup", b.onClick)
            }
        };
        this.onMouseOver = function(e) {
            if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) TweenMax.to(b.n_do, 0.9, {
                alpha: 0,
                ease: Expo.easeOut
            })
        };
        this.onMouseOut = function(e) {
            if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) TweenMax.to(b.n_do, 0.9, {
                alpha: 1,
                ease: Expo.easeOut
            })
        };
        this.onClick = function() {
            b.isDisabled_bl || b.dispatchEvent(m.CLICK)
        };
        this.destroy = function() {
            if (b.isMobile_bl)
                if (b.hasPointerEvent_bl) {
                    b.screen.removeEventListener("MSPointerOver", b.onMouseOver);
                    b.screen.removeEventListener("MSPointerOut", b.onMouseOut);
                    b.screen.removeEventListener("MSPointerUp", b.onClick)
                } else b.screen.removeEventListener("touchstart", b.onClick);
            else if (b.screen.removeEventListener) {
                b.screen.removeEventListener("mouseover", b.onMouseOver);
                b.screen.removeEventListener("mouseout", b.onMouseOut);
                b.screen.removeEventListener("mouseup", b.onClick)
            } else if (b.screen.detachEvent) {
                b.screen.detachEvent("onmouseover", b.onMouseOver);
                b.screen.detachEvent("onmouseout", b.onMouseOut);
                b.screen.detachEvent("onmouseup", b.onClick)
            }
            TweenMax.killTweensOf(b.n_do);
            b.n_do.destroy();
            b.s_do.destroy();
            b.nImg = null;
            b.sImg = null;
            b.n_do = null;
            a = j = b.s_do = null;
            b.setInnerHTML("");
            c.destroy();
            c = b = null;
            m.prototype = null
        };
        this.init()
    };
    m.setPrototype = function() {
        m.prototype = null;
        m.prototype = new FWDDisplayObject("div")
    };
    m.CLICK = "onClick";
    m.prototype = null;
    q.FWDSimpleButton = m
})(window);
(function(q) {
    var m = function() {};
    m.dumy = document.createElement("div");
    m.trim = function(j) {
        return j.replace(/\s/gi, "")
    };
    m.trimAndFormatUrl = function(j) {
        j = j.toLocaleLowerCase();
        j = j.replace(/ /g, "-");
        j = j.replace(/\u00e4/g, "a");
        j = j.replace(/\u00e2/g, "a");
        j = j.replace(/\u00e2/g, "a");
        j = j.replace(/\u00e0/g, "a");
        j = j.replace(/\u00e8/g, "e");
        j = j.replace(/\u00e9/g, "e");
        j = j.replace(/\u00eb/g, "e");
        j = j.replace(/\u00ef/g, "i");
        j = j.replace(/\u00ee/g, "i");
        j = j.replace(/\u00f9/g, "u");
        j = j.replace(/\u00f4/g, "o");
        j = j.replace(/\u00f9/g, "u");
        j = j.replace(/\u00fb/g, "u");
        j = j.replace(/\u00ff/g, "y");
        j = j.replace(/\u00e7/g, "c");
        return j.replace(/\u0153/g, "ce")
    };
    m.splitAndTrim = function(j, a) {
        for (var b = j.split(","), c = b.length, e = 0; e < c; e++)
            if (a) b[e] = m.trim(b[e]);
        return b
    };
    m.indexOfArray = function(j, a) {
        for (var b = j.length, c = 0; c < b; c++)
            if (j[c] === a) return c;
        return -1
    };
    m.randomizeArray = function(j) {
        var a = [];
        j = j.concat();
        for (var b = j.length, c = 0; c < b; c++) {
            var e = Math.floor(Math.random() * j.length);
            a.push(j[e]);
            j.splice(e, 1)
        }
        return a
    };
    m.parent = function(j, a) {
        if (a === undefined) a = 1;
        for (; a-- && j;) j = j.parentNode;
        if (!j || j.nodeType !== 1) return null;
        return j
    };
    m.sibling = function(j, a) {
        for (; j && a !== 0;)
            if (a > 0) {
                if (j.nextElementSibling) j = j.nextElementSibling;
                else
                    for (j = j.nextSibling; j && j.nodeType !== 1; j = j.nextSibling);
                a--
            } else {
                if (j.previousElementSibling) j = j.previousElementSibling;
                else
                    for (j = j.previousSibling; j && j.nodeType !== 1; j = j.previousSibling);
                a++
            }
        return j
    };
    m.getChildAt = function(j, a) {
        var b = m.getChildren(j);
        if (a < 0) a += b.length;
        if (a < 0) return null;
        return b[a]
    };
    m.getChildById = function(j) {
        return document.getElementById(j) || undefined
    };
    m.getChildren = function(j, a) {
        for (var b = [], c = j.firstChild; c != null; c = c.nextSibling)
            if (a) b.push(c);
            else c.nodeType === 1 && b.push(c);
        return b
    };
    m.getChildrenFromAttribute = function(j, a, b) {
        var c = [];
        for (j = j.firstChild; j != null; j = j.nextSibling)
            if (b && m.hasAttribute(j, a)) c.push(j);
            else j.nodeType === 1 && m.hasAttribute(j, a) && c.push(j);
        return c.length == 0 ? undefined : c
    };
    m.getChildFromNodeListFromAttribute = function(j, a, b) {
        for (j = j.firstChild; j != null; j = j.nextSibling)
            if (b && m.hasAttribute(j, a)) return j;
            else if (j.nodeType === 1 && m.hasAttribute(j, a)) return j
    };
    m.getAttributeValue = function(j, a) {
        if (m.hasAttribute(j, a)) return j.getAttribute(a)
    };
    m.hasAttribute = function(j, a) {
        return j.hasAttribute ? j.hasAttribute(a) : j.attributes[a] ? true : false
    };
    m.insertNodeAt = function(j, a, b) {
        var c = m.children(j);
        if (b < 0 || b > c.length) throw Error("invalid index!");
        else j.insertBefore(a, c[b])
    };
    m.hasCanvas = function() {
        return Boolean(document.createElement("canvas"))
    };
    m.hitTest = function(j, a, b) {
        if (!j) throw Error("Hit test target is null!");
        j = j.getBoundingClientRect();
        if (a >= j.left && a <= j.left + (j.right - j.left) && b >= j.top && b <= j.top + (j.bottom - j.top)) return true;
        return false
    };
    m.getScrollOffsets = function() {
        if (q.pageXOffset != null) return {
            x: q.pageXOffset,
            y: q.pageYOffset
        };
        if (document.compatMode == "CSS1Compat") return {
            x: document.documentElement.scrollLeft,
            y: document.documentElement.scrollTop
        }
    };
    m.getViewportSize = function() {
        if (m.hasPointerEvent && navigator.msMaxTouchPoints > 1) return {
            w: document.documentElement.clientWidth || q.innerWidth,
            h: document.documentElement.clientHeight || q.innerHeight
        };
        if (m.isMobile) return {
            w: q.innerWidth,
            h: q.innerHeight
        };
        return {
            w: document.documentElement.clientWidth || q.innerWidth,
            h: document.documentElement.clientHeight || q.innerHeight
        }
    };
    m.getViewportMouseCoordinates = function(j) {
        var a = m.getScrollOffsets();
        if (j.touches) return {
            screenX: j.touches[0] == undefined ? j.touches.pageX - a.x : j.touches[0].pageX - a.x,
            screenY: j.touches[0] == undefined ? j.touches.pageY - a.y : j.touches[0].pageY - a.y
        };
        return {
            screenX: j.clientX == undefined ? j.pageX - a.x : j.clientX,
            screenY: j.clientY == undefined ? j.pageY - a.y : j.clientY
        }
    };
    m.hasPointerEvent = Boolean(q.navigator.msPointerEnabled);
    m.isMobile = function() {
        if (m.hasPointerEvent && navigator.msMaxTouchPoints > 1) return true;
        var j = ["android", "webos", "iphone", "ipad", "blackberry"];
        for (i in j)
            if (navigator.userAgent.toLowerCase().indexOf(j[i].toLowerCase()) != -1) return true;
        return false
    }();
    m.isAndroid = navigator.userAgent.toLowerCase().indexOf("android".toLowerCase()) != -1;
    m.isChrome = navigator.userAgent.toLowerCase().indexOf("chrome") != -1;
    m.isSafari = navigator.userAgent.toLowerCase().indexOf("safari") != -1 && navigator.userAgent.toLowerCase().indexOf("chrome") == -1;
    m.isOpera = navigator.userAgent.toLowerCase().indexOf("opera") != -1 && navigator.userAgent.toLowerCase().indexOf("chrome") == -1;
    m.isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") != -1;
    m.isIE = navigator.userAgent.toLowerCase().indexOf("msie") != -1;
    m.isIEAndLessThen9 = navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 || navigator.userAgent.toLowerCase().indexOf("msie 8") != -1;
    m.isIE7 = navigator.userAgent.toLowerCase().indexOf("msie 7") != -1;
    m.isApple = navigator.appVersion.toLowerCase().indexOf("mac") != -1;
    m.hasFullScreen = m.dumy.requestFullScreen || m.dumy.mozRequestFullScreen || m.dumy.webkitRequestFullScreen || m.dumy.msieRequestFullScreen;
    m.onReady = function(j) {
        if (document.addEventListener) document.addEventListener("DOMContentLoaded", function() {
            m.checkIfHasTransofrms();
            j()
        });
        else document.onreadystatechange = function() {
            m.checkIfHasTransofrms();
            document.readyState == "complete" && j()
        }
    };
    m.checkIfHasTransofrms = function() {
        document.documentElement.appendChild(m.dumy);
        var j;
        a: {
            j = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"];
            for (var a, b; a = j.shift();)
                if (typeof m.dumy.style[a] !== "undefined") {
                    m.dumy.style.position = "absolute";
                    b = m.dumy.getBoundingClientRect().left;
                    m.dumy.style[a] = "translate3d(500px, 0px, 0px)";
                    b = Math.abs(m.dumy.getBoundingClientRect().left - b);
                    if (b > 100 && b < 900) {
                        try {
                            document.documentElement.removeChild(m.dumy)
                        } catch (c) {}
                        j = true;
                        break a
                    }
                }
            try {
                document.documentElement.removeChild(m.dumy)
            } catch (e) {}
            j = false
        }
        m.hasTransform3d = j;
        a: {
            for (j = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; a = j.shift();)
                if (typeof m.dumy.style[a] !== "undefined") {
                    j = true;
                    break a
                }
            try {
                document.documentElement.removeChild(m.dumy)
            } catch (p) {}
            j = false
        }
        m.hasTransform2d = j;
        m.isReadyMethodCalled_bl = true
    };
    m.disableElementSelection = function(j) {
        try {
            j.style.userSelect = "none"
        } catch (a) {}
        try {
            j.style.MozUserSelect = "none"
        } catch (b) {}
        try {
            j.style.webkitUserSelect = "none"
        } catch (c) {}
        try {
            j.style.khtmlUserSelect = "none"
        } catch (e) {}
        try {
            j.style.oUserSelect = "none"
        } catch (p) {}
        try {
            j.style.msUserSelect = "none"
        } catch (f) {}
        try {
            j.msUserSelect = "none"
        } catch (h) {}
        j.onselectstart = function() {
            return false
        }
    };
    m.getUrlArgs = function(j) {
        var a = {};
        j = (j.substr(j.indexOf("?") + 1) || location.search.substring(1)).split("&");
        for (var b = 0; b < j.length; b++) {
            var c = j[b].indexOf("="),
                e = j[b].substring(0, c);
            c = j[b].substring(c + 1);
            c = decodeURIComponent(c);
            a[e] = c
        }
        return a
    };
    m.validateEmail = function(j) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(j)) return true;
        return false
    };
    m.resizeDoWithLimit = function(j, a, b, c, e, p, f, h, t, g, v, d, n) {
        a -= p;
        b -= f;
        f = a / c;
        var u = b / e;
        p = 0;
        if (f <= u) p = f;
        else if (f >= u) p = u;
        f = Math.round(c * p);
        u = Math.round(e * p);
        a = Math.floor((a - c * p) / 2 + h);
        b = Math.floor((b - e * p) / 2 + t);
        if (g) TweenMax.to(j, v, {
            x: a,
            y: b,
            w: f,
            h: u,
            delay: d,
            ease: n
        });
        else {
            j.x = a;
            j.y = b;
            j.w = f;
            j.h = u
        }
    };
    q.requestAnimFrame = function() {
        return q.requestAnimationFrame || q.webkitRequestAnimationFrame || q.mozRequestAnimationFrame || q.oRequestAnimationFrame || q.msRequestAnimationFrame || function(j) {
            return q.setTimeout(j, 1E3 / 60)
        }
    }();
    q.cancelRequestAnimFrame = q.cancelAnimationFrame || q.webkitCancelRequestAnimationFrame || q.mozCancelRequestAnimationFrame || q.oCancelRequestAnimationFrame || q.msCancelRequestAnimationFrame || clearTimeout;
    m.isReadyMethodCalled_bl = false;
    q.FWDUtils = m
})(window);
(function() {
    for (var q = 0, m = ["ms", "moz", "webkit", "o"], j = 0; j < m.length && !window.requestAnimationFrame; ++j) {
        window.requestAnimationFrame = window[m[j] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[m[j] + "CancelAnimationFrame"] || window[m[j] + "CancelRequestAnimationFrame"]
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function(a) {
        var b = (new Date).getTime(),
            c = Math.max(0, 16 - (b - q)),
            e = window.setTimeout(function() {
                a(b + c)
            }, c);
        q = b + c;
        return e
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(a) {
        clearTimeout(a)
    }
})();
(function() {
    var q = function(m, j) {
        var a = this;
        this.parent = m;
        this.url = "http://www.webdesign-flash.ro";
        this.over_do = this.selectedMenu_do = this.normalMenu_do = this.menu_do = null;
        this.showMenu_bl = j;
        this.init = function() {
            this.parent.screen.addEventListener ? this.parent.screen.addEventListener("contextmenu", this.contextMenuHandler) : this.parent.screen.attachEvent("oncontextmenu", this.contextMenuHandler)
        };
        this.contextMenuHandler = function(b) {
            if (a.showMenu_bl) {
                if (a.url.indexOf("sh.r") != -1) {
                    a.setupMenus();
                    a.parent.addChild(a.menu_do);
                    a.menu_do.setVisible(true);
                    a.positionButtons(b);
                    window.addEventListener ? window.addEventListener("mousedown", a.contextMenuWindowOnMouseDownHandler) : document.documentElement.attachEvent("onclick", a.contextMenuWindowOnMouseDownHandler);
                    if (b.preventDefault) b.preventDefault();
                    else return false
                }
            } else if (b.preventDefault) b.preventDefault();
            else return false
        };
        this.contextMenuWindowOnMouseDownHandler = function(b) {
            b = FWDUtils.getViewportMouseCoordinates(b);
            if (!FWDUtils.hitTest(a.menu_do.screen, b.screenX, b.screenY)) {
                window.removeEventListener ? window.removeEventListener("mousedown", a.contextMenuWindowOnMouseDownHandler) : document.documentElement.detachEvent("onclick", a.contextMenuWindowOnMouseDownHandler);
                a.menu_do.setX(-500)
            }
        };
        this.setupMenus = function() {
            if (!this.menu_do) {
                this.menu_do = new FWDDisplayObject("div");
                a.menu_do.setX(-500);
                this.menu_do.getStyle().width = "100%";
                this.normalMenu_do = new FWDDisplayObject("div");
                this.normalMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif";
                this.normalMenu_do.getStyle().padding = "4px";
                this.normalMenu_do.getStyle().fontSize = "12px";
                this.normalMenu_do.getStyle().color = "#000000";
                this.normalMenu_do.setInnerHTML("© made by FWD");
                this.normalMenu_do.setBkColor("#FFFFFF");
                this.selectedMenu_do = new FWDDisplayObject("div");
                this.selectedMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif";
                this.selectedMenu_do.getStyle().padding = "4px";
                this.selectedMenu_do.getStyle().fontSize = "12px";
                this.selectedMenu_do.getStyle().color = "#FFFFFF";
                this.selectedMenu_do.setInnerHTML("© made by FWD");
                this.selectedMenu_do.setBkColor("#000000");
                this.selectedMenu_do.setAlpha(0);
                this.over_do = new FWDDisplayObject("div");
                this.over_do.setBkColor("#FF0000");
                this.over_do.setAlpha(0);
                this.menu_do.addChild(this.normalMenu_do);
                this.menu_do.addChild(this.selectedMenu_do);
                this.menu_do.addChild(this.over_do);
                this.parent.addChild(this.menu_do);
                this.over_do.setWidth(this.selectedMenu_do.getWidth());
                this.menu_do.setWidth(this.selectedMenu_do.getWidth());
                this.over_do.setHeight(this.selectedMenu_do.getHeight());
                this.menu_do.setHeight(this.selectedMenu_do.getHeight());
                this.menu_do.setVisible(false);
                this.menu_do.setButtonMode(true);
                this.menu_do.screen.onmouseover = this.mouseOverHandler;
                this.menu_do.screen.onmouseout = this.mouseOutHandler;
                this.menu_do.screen.onclick = this.onClickHandler
            }
        };
        this.mouseOverHandler = function() {
            if (a.url.indexOf("w.we") == -1) a.menu_do.visible = false;
            TweenMax.to(a.normalMenu_do, 0.8, {
                alpha: 0,
                ease: Expo.easeOut
            });
            TweenMax.to(a.selectedMenu_do, 0.8, {
                alpha: 1,
                ease: Expo.easeOut
            })
        };
        this.mouseOutHandler = function() {
            TweenMax.to(a.normalMenu_do, 0.8, {
                alpha: 1,
                ease: Expo.easeOut
            });
            TweenMax.to(a.selectedMenu_do, 0.8, {
                alpha: 0,
                ease: Expo.easeOut
            })
        };
        this.onClickHandler = function() {
            window.open(a.url, "_blank")
        };
        this.positionButtons = function(b) {
            var c = FWDUtils.getViewportMouseCoordinates(b);
            b = c.screenX - a.parent.getGlobalX();
            c = c.screenY - a.parent.getGlobalY();
            var e = b + 2,
                p = c + 2;
            if (e > a.parent.getWidth() - a.menu_do.getWidth() - 2) e = b - a.menu_do.getWidth() - 2;
            if (p > a.parent.getHeight() - a.menu_do.getHeight() - 2) p = c - a.menu_do.getHeight() - 2;
            a.menu_do.setX(e);
            a.menu_do.setY(p)
        };
        this.destroy =
            function() {
                if (window.removeEventListener) {
                    window.removeEventListener("mousedown", a.contextMenuWindowOnMouseDownHandler);
                    a.parent.screen.removeEventListener("contextmenu", a.contextMenuHandler)
                } else {
                    document.documentElement.detachEvent("onclick", a.contextMenuWindowOnMouseDownHandler);
                    a.parent.screen.detachEvent("oncontextmenu", a.contextMenuHandler)
                }
                if (this.menu_do) {
                    TweenMax.killTweensOf(a.normalMenu_do);
                    TweenMax.killTweensOf(a.selectedMenu_do);
                    a.normalMenu_do.destroy();
                    a.selectedMenu_do.destroy();
                    a.over_do.destroy();
                    a.menu_do.destroy()
                }
                a.parent = null;
                a.menu_do = null;
                a.normalMenu_do = null;
                a.selectedMenu_do = null;
                a = a.over_do = null
            };
        this.init()
    };
    q.prototype = null;
    window.FWDContextMenu = q
})(window);
(function(q) {
    var m = function(j, a, b, c, e, p) {
        var f = this,
            h = m.prototype;
        this.n1Img = j;
        this.s1Img = a;
        this.n2Img = b;
        this.s2Img = c;
        this.isMobile_bl = FWDUtils.isMobile;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        this.currentState = 1;
        this.isMaximized_bl = this.isDisabled_bl = false;
        this.disptachMainEvent_bl = p;
        this.init = function() {
            this.setButtonMode(true);
            this.setWidth(this.n1Img.width);
            this.setHeight(this.n1Img.height);
            this.setupMainContainers();
            this.firstButton_do.setX(3E3)
        };
        this.setupMainContainers = function() {
            this.firstButton_do = new FWDDisplayObject("div");
            this.addChild(this.firstButton_do);
            this.n1_do = new FWDDisplayObject("img");
            this.n1_do.setScreen(this.n1Img);
            this.s1_do = new FWDDisplayObject("img");
            this.s1_do.setScreen(this.s1Img);
            this.firstButton_do.addChild(this.s1_do);
            this.firstButton_do.addChild(this.n1_do);
            this.firstButton_do.setWidth(this.n1Img.width);
            this.firstButton_do.setHeight(this.n1Img.height);
            this.secondButton_do = new FWDDisplayObject("div");
            this.addChild(this.secondButton_do);
            this.n2_do = new FWDDisplayObject("img");
            this.n2_do.setScreen(this.n2Img);
            this.s2_do = new FWDDisplayObject("img");
            this.s2_do.setScreen(this.s2Img);
            this.secondButton_do.addChild(this.s2_do);
            this.secondButton_do.addChild(this.n2_do);
            this.secondButton_do.setWidth(this.n2Img.width);
            this.secondButton_do.setHeight(this.n2Img.height);
            this.addChild(this.firstButton_do);
            this.addChild(this.secondButton_do);
            if (f.isMobile_bl)
                if (f.hasPointerEvent_bl) {
                    f.screen.addEventListener("MSPointerOver", f.onMouseOver);
                    f.screen.addEventListener("MSPointerOut", f.onMouseOut);
                    f.screen.addEventListener("MSPointerUp", f.onClick)
                } else f.screen.addEventListener("touchstart", f.onMouseDown);
            else if (f.screen.addEventListener) {
                f.screen.addEventListener("mouseover", f.onMouseOver);
                f.screen.addEventListener("mouseout", f.onMouseOut);
                f.screen.addEventListener("mouseup", f.onClick)
            } else if (f.screen.attachEvent) {
                f.screen.attachEvent("onmouseover", f.onMouseOver);
                f.screen.attachEvent("onmouseout", f.onMouseOut);
                f.screen.attachEvent("onmouseup", f.onClick)
            }
        };
        this.onMouseOver = function(t) {
            if (!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) {
                TweenMax.killTweensOf(f.n1_do);
                TweenMax.killTweensOf(f.n2_do);
                TweenMax.to(f.n1_do, 0.8, {
                    alpha: 0,
                    ease: Expo.easeOut
                });
                TweenMax.to(f.n2_do, 0.8, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }
        };
        this.onMouseOut = function(t) {
            if (!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) {
                t = 0;
                if (f.isMaximized_bl) t = 1;
                TweenMax.to(f.n1_do, 0.8, {
                    alpha: 1,
                    delay: t,
                    ease: Expo.easeOut
                });
                TweenMax.to(f.n2_do, 0.8, {
                    alpha: 1,
                    delay: t,
                    ease: Expo.easeOut
                })
            }
        };
        this.onMouseDown = function() {
            if (f.disptachMainEvent_bl) f.dispatchEvent(m.CLICK);
            else f.isDisabled_bl || f.toggleButton()
        };
        this.onClick = function() {
            if (f.disptachMainEvent_bl) f.dispatchEvent(m.CLICK);
            else f.isDisabled_bl || f.toggleButton()
        };
        this.toggleButton = function() {
            if (this.currentState == 1) {
                this.firstButton_do.setX(0);
                this.secondButton_do.setX(3E3);
                this.currentState = 0;
                this.dispatchEvent(m.SECOND_BUTTON_CLICK)
            } else {
                this.firstButton_do.setX(3E3);
                this.secondButton_do.setX(0);
                this.currentState = 1;
                this.dispatchEvent(m.FIRST_BUTTON_CLICK)
            }
        };
        this.setSecondButtonState = function() {
            this.firstButton_do.setX(0);
            this.secondButton_do.setX(3E3);
            this.currentState = 0
        };
        this.destroy = function() {
            if (f.isMobile_bl)
                if (f.hasPointerEvent_bl) {
                    f.screen.removeEventListener("MSPointerOver", f.onMouseOver);
                    f.screen.removeEventListener("MSPointerOut", f.onMouseOut);
                    f.screen.removeEventListener("MSPointerUp", f.onClick)
                } else f.screen.removeEventListener("touchstart", f.onMouseDown);
            else if (f.screen.removeEventListener) {
                f.screen.removeEventListener("mouseover", f.onMouseOver);
                f.screen.removeEventListener("mouseout", f.onMouseOut);
                f.screen.removeEventListener("mouseup",
                    f.onClick)
            } else if (f.screen.detachEvent) {
                f.screen.detachEvent("onmouseover", f.onMouseOver);
                f.screen.detachEvent("onmouseout", f.onMouseOut);
                f.screen.detachEvent("onmouseup", f.onClick)
            }
            TweenMax.killTweensOf(f.n1_do);
            TweenMax.killTweensOf(f.n2_do);
            f.firstButton_do.destroy();
            f.n1_do.destroy();
            f.s1_do.destroy();
            f.secondButton_do.destroy();
            f.n2_do.destroy();
            f.s2_do.destroy();
            f.firstButton_do = null;
            f.n1_do = null;
            f.s1_do = null;
            f.secondButton_do = null;
            f.n2_do = null;
            f.s2_do = null;
            f.n1Img = null;
            f.s1Img = null;
            f.n2Img =
                null;
            c = b = a = j = f.s2Img = null;
            f.setInnerHTML("");
            h.destroy();
            h = f = null;
            m.prototype = null
        };
        this.init()
    };
    m.setPrototype = function() {
        m.prototype = new FWDDisplayObject("div")
    };
    m.FIRST_BUTTON_CLICK = "onFirstClick";
    m.SECOND_BUTTON_CLICK = "secondButtonOnClick";
    m.CLICK = "onClick";
    m.prototype = null;
    q.FWDComplexButton = m
})(window);
(function(q) {
    var m = function(j, a, b) {
        var c = this,
            e = m.prototype;
        this.backgroundColor_str = a;
        this.backgroundOpacity = b;
        this.margins = j;
        this.vy2 = this.vy = 0;
        this.friction = 0.9;
        this.obj = {
            currentWidth: 0
        };
        this.isScrollBarActive_bl = this.isShowed_bl = false;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        this.isMobile_bl = FWDUtils.isMobile;
        this.isDragging_bl = false;
        this.isHiddenDone_bl = true;
        this.init = function() {
            this.setOverflow("visible");
            this.setBkColor("#FF0000");
            this.setX(this.margins);
            this.setY(this.margins);
            this.setupMainContainers();
            this.setVisible(false)
        };
        this.setupMainContainers = function() {
            this.main_do = new FWDDisplayObject("div");
            this.text_do = new FWDDisplayObject("div");
            this.text_do.getStyle().fontSmoothing = "antialiased";
            this.text_do.getStyle().webkitFontSmoothing = "antialiased";
            this.text_do.getStyle().textRendering = "optimizeLegibility";
            this.background_do = new FWDDisplayObject("div");
            this.background_do.setResizableSizeAfterParent();
            this.background_do.setBkColor(this.backgroundColor_str);
            this.background_do.setAlpha(this.backgroundOpacity);
            this.main_do.addChild(this.background_do);
            this.main_do.addChild(this.text_do);
            this.addChild(this.main_do)
        };
        this.setText = function(p, f, h, t) {
            this.maxWidth = f;
            this.maxHeight = h;
            this.text_do.setInnerHTML(p);
            clearTimeout(this.resieId_to);
            this.resieId_to = setTimeout(function() {
                c.resize(c.maxWidth, c.maxHeight, t);
                c.isShowed_bl || c.isHiddenDone_bl && c.hide(false);
                c.show(true)
            }, 50);
            c.disableMobileScrollBar();
            c.onTweenUpdate()
        };
        this.resize = function(p, f, h) {
            c.maxWidth = p - c.margins * 2;
            c.maxHeight = f - c.margins * 2;
            c.finalWidth =
                c.maxWidth;
            c.setWidth(c.maxWidth);
            TweenMax.killTweensOf(c.obj);
            if (h) TweenMax.to(c.obj, 0.8, {
                delay: 0.1,
                currentWidth: c.maxWidth,
                onUpdate: c.onTweenUpdate,
                ease: Expo.easeInOut
            });
            else c.obj.currentWidth = c.maxWidth;
            c.onTweenUpdate();
            c.text_do.setY(0)
        };
        this.onTweenUpdate = function() {
            c.main_do.setWidth(c.obj.currentWidth);
            c.finalHeight = c.text_do.getHeight() <= c.maxHeight ? c.text_do.getHeight() : c.maxHeight;
            c.main_do.setHeight(c.finalHeight);
            c.background_do.setHeight(c.finalHeight);
            clearTimeout(c.checkHeightId_to);
            c.checkHeightId_to = setTimeout(c.checkHeight, 200)
        };
        this.checkHeight = function() {
            c.text_do.getHeight() > c.maxHeight ? c.enableMobileScrollBar() : c.disableMobileScrollBar()
        };
        this.enableMobileScrollBar = function() {
            if (this.isMobile_bl)
                if (!this.isScrollBarActive_bl) {
                    c.hasPointerEvent_bl ? c.screen.addEventListener("MSPointerDown", c.touchStartHandler) : this.screen.addEventListener("touchstart", c.touchStartHandler);
                    clearInterval(this.updateMobileScrollBarIntervalId_int);
                    this.updateMobileScrollBarIntervalId_int = setInterval(this.updateMobileScrollBar,
                        16);
                    this.isScrollBarActive_bl = true
                }
        };
        this.disableMobileScrollBar = function() {
            if (this.isScrollBarActive_bl) {
                c.isScrollBarActive_bl = false;
                TweenMax.killTweensOf(c.obj);
                clearTimeout(c.checkHeightId_to);
                clearInterval(c.updateMobileScrollBarIntervalId_int);
                c.text_do.setY(0);
                c.hasPointerEvent_bl ? c.screen.removeEventListener("MSPointerDown", c.touchStartHandler) : this.screen.removeEventListener("touchstart", this.touchStartHandler)
            }
        };
        this.touchStartHandler = function(p) {
            p.preventDefault();
            var f = FWDUtils.getViewportMouseCoordinates(p);
            f = FWDUtils.getViewportMouseCoordinates(p);
            if (c.hasPointerEvent_bl) {
                q.addEventListener("MSPointerUp", c.touchEndHandler);
                q.addEventListener("MSPointerMove", c.scrollBarOnMoveHandler)
            } else {
                q.addEventListener("touchend", c.touchEndHandler);
                q.addEventListener("touchmove", c.scrollBarOnMoveHandler)
            }
            c.lastPresedY = f.screenY
        };
        this.scrollBarOnMoveHandler = function(p) {
            p.preventDefault();
            var f = FWDUtils.getViewportMouseCoordinates(p);
            f = FWDUtils.getViewportMouseCoordinates(p);
            c.isDragging_bl = true;
            p = f.screenY - c.lastPresedY;
            c.lastPresedY = f.screenY;
            c.text_do.setY(c.text_do.getY() + p);
            c.vy = p * 2
        };
        this.touchEndHandler = function() {
            if (c.hasPointerEvent_bl) {
                q.removeEventListener("MSPointerUp", c.touchEndHandler);
                q.removeEventListener("MSPointerMove", c.scrollBarOnMoveHandler)
            } else {
                q.removeEventListener("touchend", c.touchEndHandler);
                q.removeEventListener("touchmove", c.scrollBarOnMoveHandler)
            }
            c.isDragging_bl = false
        };
        this.updateMobileScrollBar = function() {
            var p = c.text_do.getY(),
                f = c.text_do.getHeight();
            if (!c.isDragging_bl) {
                c.vy *= c.friction;
                p += c.vy;
                if (p > 0) {
                    c.vy2 = (0 - p) * 0.5;
                    c.vy *= c.friction;
                    p += c.vy2
                } else if (p <= c.maxHeight - f) {
                    c.vy2 = (c.maxHeight - f - p) * 0.5;
                    c.vy *= c.friction;
                    p += c.vy2
                }
                c.text_do.setY(Math.round(p))
            }
        };
        this.hide = function(p) {
            this.disableMobileScrollBar();
            TweenMax.killTweensOf(this);
            if (p) {
                TweenMax.to(this, 0.6, {
                    y: -this.finalHeight,
                    ease: Expo.easeInOut,
                    onComplete: this.hideComplete
                });
                this.isHiddenDone_bl = false
            } else {
                this.setVisible(false);
                this.setY(-this.finalHeight);
                this.isShowed_bl = false;
                this.isHiddenDone_bl = true
            }
            c.isShowed_bl = false
        };
        this.hideComplete = function() {
            c.isHiddenDone_bl = true;
            c.setVisible(false)
        };
        this.show = function(p) {
            this.setVisible(true);
            TweenMax.killTweensOf(this);
            if (p) TweenMax.to(this, 0.6, {
                y: this.margins,
                ease: Expo.easeInOut
            });
            else {
                this.setVisible(false);
                this.setY(this.margins)
            }
            this.isHiddenDone_bl = false;
            this.isShowed_bl = true
        };
        this.init();
        this.destroy = function() {
            TweenMax.killTweensOf(this);
            TweenMax.killTweensOf(this.obj);
            clearTimeout(c.checkHeightId_to);
            clearInterval(c.updateMobileScrollBarIntervalId_int);
            if (c.screen.removeEventListener)
                if (c.hasPointerEvent_bl) {
                    c.screen.removeEventListener("MSPointerDown",
                        c.touchStartHandler);
                    q.removeEventListener("MSPointerUp", c.touchEndHandler);
                    q.removeEventListener("MSPointerMove", c.scrollBarOnMoveHandler)
                } else {
                    c.screen.removeEventListener("touchstart", this.touchStartHandler);
                    q.removeEventListener("touchend", c.touchEndHandler);
                    q.removeEventListener("touchmove", c.scrollBarOnMoveHandler)
                }
            this.main_do.destroy();
            this.text_do.destroy();
            this.background_do.destroy();
            this.background_do = this.text_do = this.main_do = null;
            c.setInnerHTML("");
            e.destroy();
            e = c = null;
            m.prototype = null
        }
    };
    m.setPrototype = function() {
        m.prototype = new FWDDisplayObject("div")
    };
    m.HIDE_COMPLETE = "infoWindowHideComplete";
    m.prototype = null;
    q.FWDInfoWindow = m
})(window);
(function(q) {
    var m = function(j, a, b, c, e) {
        var p = this,
            f = m.prototype;
        this.imageSource_img = j;
        this.image_sdo = null;
        this.segmentWidth = a;
        this.segmentHeight = b;
        this.totalSegments = c;
        this.animDelay = e || 300;
        this.count = 0;
        this.isShowed_bl = false;
        this.init = function() {
            this.setWidth(this.segmentWidth);
            this.setHeight(this.segmentHeight);
            this.image_sdo = new FWDSimpleDisplayObject("img");
            this.image_sdo.setScreen(this.imageSource_img);
            this.addChild(this.image_sdo);
            this.hide(false)
        };
        this.start = function() {
            clearInterval(this.delayTimerId_int);
            this.delayTimerId_int = setInterval(this.updatePreloader, this.animDelay)
        };
        this.stop = function() {
            clearInterval(this.delayTimerId_int)
        };
        this.updatePreloader = function() {
            p.count++;
            if (p.count > p.totalSegments - 1) p.count = 0;
            p.image_sdo.setX(-(p.count * p.segmentWidth))
        };
        this.show = function() {
            this.setVisible(true);
            this.start();
            TweenMax.killTweensOf(this);
            TweenMax.to(this, 1, {
                alpha: 1
            });
            this.isShowed_bl = true
        };
        this.hide = function(h) {
            if (this.isShowed_bl) {
                TweenMax.killTweensOf(this);
                if (h) TweenMax.to(this, 1, {
                    alpha: 0,
                    onComplete: this.onHideComplete
                });
                else {
                    this.setVisible(false);
                    this.setAlpha(0)
                }
                this.isShowed_bl = false
            }
        };
        this.onHideComplete = function() {
            p.setVisible(false);
            p.stop();
            p.dispatchEvent(m.HIDE_COMPLETE)
        };
        this.destroy = function() {
            TweenMax.killTweensOf(p);
            p.stop();
            p.image_sdo.destroy();
            p.imageSource_img = null;
            j = p.image_sdo = null;
            p.setInnerHTML("");
            f.destroy();
            f = p = null;
            m.prototype = null
        };
        this.init()
    };
    m.setPrototype = function() {
        m.prototype = new FWDDisplayObject("div")
    };
    m.HIDE_COMPLETE = "hideComplete";
    m.prototype = null;
    q.FWDPreloader = m
})(window);
(function(q) {
    var m = function() {
        var j = this,
            a = m.prototype;
        this.init = function() {
            this.setWidth(500);
            this.setBkColor("#FF0000");
            this.getStyle().padding = "10px"
        };
        this.showText = function(b) {
            this.setInnerHTML(b)
        };
        this.destroy = function() {
            j.setInnerHTML("");
            a.destroy();
            j = m.prototype = null
        };
        this.init()
    };
    m.setPrototype = function() {
        m.prototype = new FWDDisplayObject("div", "relative")
    };
    m.prototype = null;
    q.FWDInfo = m
})(window);
(function() {
    window.FWDEventDispatcher = function() {
        this.listeners = {
            events_ar: []
        };
        this.destroy = function() {
            this.listeners = null
        };
        this.addListener = function(q, m) {
            if (q == undefined) throw Error("type is required.");
            if (typeof q === "object") throw Error("type must be of type String.");
            if (typeof m != "function") throw Error("listener must be of type Function.");
            var j = {};
            j.type = q;
            j.listener = m;
            j.target = this;
            this.listeners.events_ar.push(j)
        };
        this.dispatchEvent = function(q, m) {
            if (this.listeners != null) {
                if (q == undefined) throw Error("type is required.");
                if (typeof q === "object") throw Error("type must be of type String.");
                for (var j = 0, a = this.listeners.events_ar.length; j < a; j++)
                    if (this.listeners.events_ar[j].target === this && this.listeners.events_ar[j].type === q) {
                        if (m)
                            for (var b in m) this.listeners.events_ar[j][b] = m[b];
                        this.listeners.events_ar[j].listener.call(this, this.listeners.events_ar[j])
                    }
            }
        };
        this.removeListener = function(q, m) {
            if (q == undefined) throw Error("type is required.");
            if (typeof q === "object") throw Error("type must be of type String.");
            if (typeof m !=
                "function") throw Error("listener must be of type Function." + q);
            for (var j = 0, a = this.listeners.events_ar.length; j < a; j++)
                if (this.listeners.events_ar[j].target === this && this.listeners.events_ar[j].type === q && this.listeners.events_ar[j].listener === m) {
                    this.listeners.events_ar.splice(j, 1);
                    break
                }
        }
    }
})(window);
(function(q) {
    var m = function(j, a) {
        var b = this,
            c = m.prototype;
        this.delay = j;
        this.isStopped_bl = !a;
        this.stop = function() {
            clearTimeout(this.timeOutId);
            this.dispatchEvent(m.STOP)
        };
        this.start = function() {
            if (!this.isStopped_bl) {
                this.timeOutId = setTimeout(this.onTimeHanlder, this.delay);
                this.dispatchEvent(m.START)
            }
        };
        this.onTimeHanlder = function() {
            b.dispatchEvent(m.TIME)
        };
        this.destroy = function() {
            clearTimeout(this.timeOutId);
            c.destroy();
            c = b = null;
            m.prototype = null
        }
    };
    m.setProtptype = function() {
        m.prototype = new FWDEventDispatcher
    };
    m.START = "start";
    m.STOP = "stop";
    m.TIME = "time";
    m.prototype = null;
    q.FWDTimerManager = m
})(window);
(function(q) {
    var m = function(j, a, b, c, e, p, f, h, t) {
        var g = this,
            v = m.prototype;
        this.fullImageSelectedState_sdo = this.fullImageNormalState_sdo = this.normalImageSelectedState_do = this.normalImageNormalState_sdo = this.fullButton_do = this.normalButton_do = this.mainHolder_do = null;
        this.dysplayType_str = p;
        this.position_str = f;
        this.horizontalMargins = h;
        this.verticalMargins = t;
        this.buttonWidth = a.width;
        this.buttonHeight = a.height;
        this.isOutOfTheWay = this.isFullScreen_bl = false;
        this.isMobile_bl = FWDUtils.isMobile;
        this.hasPointerEvent_bl =
            FWDUtils.hasPointerEvent;
        this.init = function() {
            this.setWidth(this.buttonWidth);
            this.setHeight(this.buttonHeight);
            this.setupButtons();
            this.setButtonsState();
            this.hide(false)
        };
        this.position = function() {
            if (g.position_str == "topleft") {
                g.finalX = g.horizontalMargins;
                g.finalY = g.verticalMargins
            } else if (g.position_str == "topright") {
                g.finalX = j.stageWidth - g.buttonWidth - g.horizontalMargins;
                g.finalY = g.verticalMargins
            } else if (g.position_str == "bottomleft") {
                g.finalX = g.horizontalMargins;
                g.finalY = j.stageHeight - g.buttonHeight -
                    g.verticalMargins
            } else if (g.position_str == "bottomright") {
                g.finalX = j.stageWidth - g.buttonWidth - g.horizontalMargins;
                g.finalY = j.stageHeight - g.buttonHeight - g.verticalMargins
            }
            g.setX(g.finalX);
            g.setY(g.finalY)
        };
        this.setupButtons = function() {
            this.mainHolder_do = new FWDDisplayObject("div");
            this.mainHolder_do.setWidth(this.buttonWidth);
            this.mainHolder_do.setHeight(this.buttonHeight);
            this.mainHolder_do.setButtonMode(true);
            this.addChild(this.mainHolder_do);
            this.normalImageNormalState_sdo = new FWDSimpleDisplayObject("img");
            this.normalImageNormalState_sdo.setScreen(a);
            this.normalImageSelectedState_do = new FWDSimpleDisplayObject("img");
            this.normalImageSelectedState_do.setScreen(b);
            this.fullImageNormalState_sdo = new FWDSimpleDisplayObject("img");
            this.fullImageNormalState_sdo.setScreen(c);
            this.fullImageSelectedState_sdo = new FWDSimpleDisplayObject("img");
            this.fullImageSelectedState_sdo.setScreen(e);
            this.normalButton_do = new FWDDisplayObject("div");
            this.normalButton_do.setWidth(this.buttonWidth);
            this.normalButton_do.setHeight(this.buttonHeight);
            this.normalImageSelectedState_do.setAlpha(0);
            this.normalButton_do.addChild(this.normalImageNormalState_sdo);
            this.normalButton_do.addChild(this.normalImageSelectedState_do);
            this.mainHolder_do.addChild(this.normalButton_do);
            this.fullButton_do = new FWDDisplayObject("div");
            this.fullButton_do.setWidth(this.buttonWidth);
            this.fullButton_do.setHeight(this.buttonHeight);
            this.fullImageSelectedState_sdo.setAlpha(0);
            this.fullButton_do.addChild(this.fullImageNormalState_sdo);
            this.fullButton_do.addChild(this.fullImageSelectedState_sdo);
            this.mainHolder_do.addChild(this.fullButton_do);
            if (g.isMobile_bl)
                if (g.hasPointerEvent_bl) {
                    g.screen.addEventListener("MSPointerOver", g.onMouseOver);
                    g.screen.addEventListener("MSPointerOut", g.onMouseOut);
                    g.screen.addEventListener("MSPointerDown", g.onMouseDown)
                } else g.screen.addEventListener("touchstart", g.onMouseDown);
            else if (g.screen.addEventListener) {
                g.screen.addEventListener("mouseover", g.onMouseOver);
                g.screen.addEventListener("mouseout", g.onMouseOut);
                g.screen.addEventListener("mousedown", g.onMouseDown)
            } else if (g.screen.attachEvent) {
                g.screen.attachEvent("onmouseover",
                    g.onMouseOver);
                g.screen.attachEvent("onmouseout", g.onMouseOut);
                g.screen.attachEvent("onmousedown", g.onMouseDown)
            }
        };
        this.onMouseOver = function(d) {
            if (!d.pointerType || d.pointerType == d.MSPOINTER_TYPE_MOUSE) {
                TweenMax.to(g.normalImageSelectedState_do, 0.6, {
                    alpha: 1,
                    ease: Expo.easeOut
                });
                TweenMax.to(g.fullImageSelectedState_sdo, 0.6, {
                    alpha: 1,
                    ease: Expo.easeOut
                })
            }
        };
        this.onMouseOut = function(d) {
            if (!d.pointerType || d.pointerType == d.MSPOINTER_TYPE_MOUSE) {
                TweenMax.to(g.normalImageSelectedState_do, 0.6, {
                    alpha: 0
                });
                TweenMax.to(g.fullImageSelectedState_sdo,
                    0.6, {
                        alpha: 0,
                        ease: Expo.easeOut
                    })
            }
        };
        this.onMouseDown = function() {
            if (g.isFullScreen_bl) {
                g.dispatchEvent(m.GO_NORMAL_SCREEN);
                g.isFullScreen_bl = false
            } else {
                g.dispatchEvent(m.GO_FULL_SCREEN);
                g.isFullScreen_bl = true
            }
            setTimeout(function() {
                if (g != null) {
                    TweenMax.killTweensOf(g.normalImageSelectedState_do);
                    TweenMax.killTweensOf(g.fullImageSelectedState_sdo);
                    g.normalImageSelectedState_do.setAlpha(0);
                    g.fullImageSelectedState_sdo.setAlpha(0)
                }
            }, 100);
            g.setButtonsState()
        };
        this.buttonOnTouchStart = function() {
            if (g.isFullScreen_bl) {
                g.dispatchEvent(m.GO_NORMAL_SCREEN);
                g.isFullScreen_bl = false
            } else {
                g.dispatchEvent(m.GO_FULL_SCREEN);
                g.isFullScreen_bl = true
            }
            g.setButtonsState()
        };
        this.setButtonsState = function() {
            if (g.isFullScreen_bl) {
                g.fullButton_do.setVisible(false);
                g.normalButton_do.setVisible(true)
            } else {
                g.fullButton_do.setVisible(true);
                g.normalButton_do.setVisible(false)
            }
            TweenMax.to(g.normalImageSelectedState_do, 0.6, {
                alpha: 0
            });
            TweenMax.to(g.fullImageSelectedState_sdo, 0.6, {
                alpha: 0,
                ease: Expo.easeOut
            })
        };
        this.show = function(d) {
            TweenMax.killTweensOf(this.mainHolder_do);
            if (d) TweenMax.to(this.mainHolder_do,
                0.8, {
                    y: 0,
                    delay: 0.3,
                    ease: Expo.easeInOut
                });
            else this.mainHolder_do.y = 0
        };
        this.hide = function() {
            if (g.position_str == "topleft") g.mainHolder_do.setY(-g.buttonHeight);
            else if (g.position_str == "topright") g.mainHolder_do.setY(-g.buttonHeight);
            else if (g.position_str == "bottomleft") g.mainHolder_do.setY(g.buttonHeight);
            else g.position_str == "bottomright" && g.mainHolder_do.setY(g.buttonHeight)
        };
        this.destroy = function() {
            if (g.isMobile_bl)
                if (g.hasPointerEvent_bl) {
                    g.screen.removeEventListener("MSPointerOver", g.onMouseOver);
                    g.screen.removeEventListener("MSPointerOut", g.onMouseOut);
                    g.screen.removeEventListener("MSPointerDown", g.onMouseDown)
                } else g.screen.removeEventListener("touchstart", g.onMouseDown);
            else if (g.screen.removeEventListener) {
                g.screen.removeEventListener("mouseover", g.onMouseOver);
                g.screen.removeEventListener("mouseout", g.onMouseOut);
                g.screen.removeEventListener("mousedown", g.onMouseDown)
            } else if (g.screen.detachEvent) {
                g.screen.detachEvent("onmouseover", g.onMouseOver);
                g.screen.detachEvent("onmouseout", g.onMouseOut);
                g.screen.detachEvent("onmousedown", g.onMouseDown)
            }
            TweenMax.killTweensOf(this.mainHolder_do);
            TweenMax.killTweensOf(this.fullImageSelectedState_sdo);
            TweenMax.killTweensOf(this.normalImageSelectedState_do);
            g.mainHolder_do.destroy();
            g.normalButton_do.destroy();
            g.fullButton_do.destroy();
            g.normalImageNormalState_sdo.destroy();
            g.normalImageSelectedState_do.destroy();
            g.fullImageNormalState_sdo.destroy();
            g.fullImageSelectedState_sdo.destroy();
            g.mainHolder_do = null;
            g.normalButton_do = null;
            g.fullButton_do = null;
            g.normalImageNormalState_sdo = null;
            g.normalImageSelectedState_do = null;
            g.fullImageNormalState_sdo = null;
            e = c = b = a = j = g.fullImageSelectedState_sdo = null;
            g.setInnerHTML("");
            v.destroy();
            v = g = null;
            m.prototype = null
        };
        this.init()
    };
    m.setPrototype = function() {
        m.prototype = new FWDDisplayObject("div", "absolute")
    };
    m.GO_FULL_SCREEN = "goFullScreen";
    m.GO_NORMAL_SCREEN = "goNormalScreen";
    m.prototype = null;
    q.FWDFullScreenButton = m
})(window);
(function(q) {
    var m = function(j, a, b, c, e) {
        var p = this,
            f = m.prototype;
        this.imageSource_img = j;
        this.image_do = null;
        this.tweenObj = {
            currentPos: 0
        };
        this.segmentWidth = a;
        this.segmentHeight = b;
        this.totalSegments = c;
        this.duration = e / 1E3;
        this.init = function() {
            this.setWidth(this.segmentWidth);
            this.setHeight(this.segmentHeight);
            this.image_do = new FWDDisplayObject("img");
            this.image_do.setScreen(this.imageSource_img);
            this.addChild(this.image_do);
            this.onUpdateHandler();
            this.hide(false)
        };
        this.animIn = function() {
            TweenMax.killTweensOf(this.tweenObj);
            this.currentPos = 0;
            TweenMax.to(this.tweenObj, this.duration, {
                currentPos: 1,
                ease: Linear.easeNone,
                onUpdate: this.onUpdateHandler
            })
        };
        this.animOut = function() {
            TweenMax.killTweensOf(this.tweenObj);
            TweenMax.to(this.tweenObj, 0.8, {
                currentPos: 0,
                onUpdate: this.onUpdateHandler
            })
        };
        this.onUpdateHandler = function() {
            p.image_do.setX(-(Math.round(p.tweenObj.currentPos / 1 * (p.totalSegments - 1)) * p.segmentWidth))
        };
        this.show = function() {
            this.setVisible(true);
            if (this.opacityType == "opacity") {
                TweenMax.killTweensOf(this.image_do);
                TweenMax.to(this.image_do,
                    1, {
                        alpha: 1
                    })
            } else this.setWidth(this.segmentWidth)
        };
        this.hide = function(h) {
            if (h)
                if (this.opacityType == "opacity") {
                    TweenMax.killTweensOf(this.image_do);
                    TweenMax.to(this.image_do, 1, {
                        alpha: 0
                    })
                } else this.setWidth(0);
            else if (this.opacityType == "opacity") {
                TweenMax.killTweensOf(this.image_do);
                this.setVisible(false);
                this.image_do.setAlpha(0)
            } else this.setWidth(0)
        };
        this.destroy = function() {
            TweenMax.killTweensOf(this);
            TweenMax.killTweensOf(this.tweenObj);
            TweenMax.killTweensOf(this.image_do);
            this.image_do.destroy();
            j = this.tweenObj = this.image_do = this.imageSource_img = null;
            this.setInnerHTML("");
            f.destroy();
            f = p = null;
            m.prototype = null
        };
        this.init()
    };
    m.setPrototype = function() {
        m.prototype = new FWDDisplayObject("div")
    };
    m.prototype = null;
    q.FWDSlideShowPreloader = m
})(window);
(function(q) {
    var m = function() {
        var j = this;
        this.main_do = null;
        this.init = function() {
            this.setupScreen();
            q.onerror = this.showError;
            this.screen.style.zIndex = 1E7;
            setTimeout(this.addConsoleToDom, 100);
            setInterval(this.position, 100)
        };
        this.position = function() {
            var a = FWDUtils.getScrollOffsets();
            j.setX(a.x);
            j.setY(a.y)
        };
        this.addConsoleToDom = function() {
            navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 ? document.getElementsByTagName("body")[0].appendChild(j.screen) : document.documentElement.appendChild(j.screen)
        };
        this.setupScreen = function() {
            this.main_do = new FWDDisplayObject("div", "absolute");
            this.main_do.setOverflow("auto");
            this.main_do.setWidth(200);
            this.main_do.setHeight(300);
            this.setWidth(200);
            this.setHeight(300);
            this.main_do.setBkColor("#FFFFFF");
            this.addChild(this.main_do)
        };
        this.showError = function(a, b, c) {
            a = j.main_do.getInnerHTML() + "<br>JavaScript error: " + a + " on line " + c + " for " + b;
            j.main_do.setInnerHTML(a);
            j.main_do.screen.scrollTop = j.main_do.screen.scrollHeight
        };
        this.log = function(a) {
            a = j.main_do.getInnerHTML() +
                "<br>" + a;
            j.main_do.setInnerHTML(a);
            j.main_do.getScreen().scrollTop = 1E4
        };
        this.init()
    };
    m.setPrototype = function() {
        m.prototype = new FWDDisplayObject("div", "absolute")
    };
    m.prototype = null;
    q.FWDConsole = m
})(window);
(function(q) {
    function m(g, v, d) {
        var n, u = d[0],
            B = g === f;
        d[0] = function() {
            if (u) {
                u.apply(q, arguments);
                if (!B) {
                    delete v[n];
                    u = null
                }
            }
        };
        n = g.apply(q, d);
        v[n] = {
            args: d,
            created: Date.now(),
            cb: u,
            id: n
        };
        return n
    }

    function j(g, v, d, n) {
        var u = d[n];
        if (u) {
            var B = g === f;
            v(u.id);
            if (!B) {
                v = u.args[1];
                var E = Date.now() - u.created;
                if (E < 0) E = 0;
                v -= E;
                if (v < 0) v = 0;
                u.args[1] = v
            }
            u.args[0] = function() {
                if (u.cb) {
                    u.cb.apply(q, arguments);
                    if (!B) {
                        delete d[n];
                        u.cb = null
                    }
                }
            };
            u.created = Date.now();
            u.id = g.apply(q, u.args)
        }
    }
    var a = navigator.platform,
        b = false;
    if (a ==
        "iPad" || a == "iPhone") b = true;
    if (b) {
        a = false;
        if (navigator.userAgent.indexOf("6") != -1) a = true;
        if (a) {
            var c = {},
                e = {},
                p = q.setTimeout,
                f = q.setInterval,
                h = q.clearTimeout,
                t = q.clearInterval;
            q.setTimeout = function() {
                return m(p, c, arguments)
            };
            q.setInterval = function() {
                return m(f, e, arguments)
            };
            q.clearTimeout = function(g) {
                var v = c[g];
                if (v) {
                    delete c[g];
                    h(v.id)
                }
            };
            q.clearInterval = function(g) {
                var v = e[g];
                if (v) {
                    delete e[g];
                    t(v.id)
                }
            };
            q.addEventListener("scroll", function() {
                for (var g in c) j(p, h, c, g);
                for (g in e) j(f, t, e, g)
            })
        }
    }
})(window);
(function(q) {
    q.FWDSimpleDisplayObject = function(m, j, a, b) {
        var c = this;
        if (m == "div" || m == "img" || m == "canvas" || m == "a") c.type = m;
        else throw Error("Type is not valid! " + m);
        this.position = j || "absolute";
        this.overflow = a || "hidden";
        this.display = b || "block";
        this.visible = true;
        this.h = this.w = this.y = this.x = 0;
        this.alpha = 1;
        this.opacityType = this.innerHTML = "";
        this.isHtml5_bl = false;
        this.hasTransform3d_bl = FWDUtils.hasTransform3d;
        this.hasTransform2d_bl = FWDUtils.hasTransform2d;
        if (FWDUtils.isFirefox) c.hasTransform3d_bl = false;
        if (FWDUtils.isFirefox) c.hasTransform2d_bl =
            false;
        this.hasBeenSetSelectable_bl = false;
        c.init = function() {
            c.setScreen()
        };
        c.getTransform = function() {
            for (var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"], p; p = e.shift();)
                if (typeof c.screen.style[p] !== "undefined") return p;
            return false
        };
        c.getOpacityType = function() {
            return typeof c.screen.style.opacity != "undefined" ? "opacity" : "filter"
        };
        c.setScreen = function(e) {
            c.screen = c.type == "img" && e ? e : document.createElement(c.type);
            c.setMainProperties()
        };
        c.setMainProperties = function() {
            c.transform =
                c.getTransform();
            c.setPosition(c.position);
            c.setDisplay(c.display);
            c.setOverflow(c.overflow);
            c.opacityType = c.getOpacityType();
            if (c.opacityType == "opacity") c.isHtml5_bl = true;
            if (c.opacityType == "filter") c.screen.style.filter = "inherit";
            c.screen.style.left = "0px";
            c.screen.style.top = "0px";
            c.screen.style.margin = "0px";
            c.screen.style.padding = "0px";
            c.screen.style.maxWidth = "none";
            c.screen.style.maxHeight = "none";
            c.screen.style.border = "none";
            c.screen.style.lineHeight = "1";
            c.screen.style.backgroundColor = "transparent";
            c.screen.style.backfaceVisibility = "hidden";
            c.screen.style.webkitBackfaceVisibility = "hidden";
            c.screen.style.MozBackfaceVisibility = "hidden";
            c.screen.style.MozImageRendering = "optimizeSpeed";
            c.screen.style.WebkitImageRendering = "optimizeSpeed";
            if (m == "img") {
                c.setWidth(c.screen.width);
                c.setHeight(c.screen.height);
                c.setSelectable(false)
            }
        };
        c.setSelectable = function(e) {
            if (!e) {
                c.screen.style.userSelect = "none";
                c.screen.style.MozUserSelect = "none";
                c.screen.style.webkitUserSelect = "none";
                c.screen.style.khtmlUserSelect =
                    "none";
                c.screen.style.oUserSelect = "none";
                c.screen.style.msUserSelect = "none";
                c.screen.msUserSelect = "none";
                c.screen.ondragstart = function() {
                    return false
                };
                c.screen.onselectstart = function() {
                    return false
                };
                c.screen.ontouchstart = function() {
                    return false
                };
                c.screen.style.webkitTouchCallout = "none";
                c.hasBeenSetSelectable_bl = true
            }
        };
        c.setBackfaceVisibility = function() {
            c.screen.style.backfaceVisibility = "visible";
            c.screen.style.webkitBackfaceVisibility = "visible";
            c.screen.style.MozBackfaceVisibility = "visible"
        };
        c.removeBackfaceVisibility =
            function() {
                c.screen.style.backfaceVisibility = "hidden";
                c.screen.style.webkitBackfaceVisibility = "hidden";
                c.screen.style.MozBackfaceVisibility = "hidden"
            };
        c.getScreen = function() {
            return c.screen
        };
        c.setVisible = function(e) {
            c.visible = e;
            c.screen.style.visibility = c.visible == true ? "visible" : "hidden"
        };
        c.getVisible = function() {
            return c.visible
        };
        c.setResizableSizeAfterParent = function() {
            c.screen.style.width = "100%";
            c.screen.style.height = "100%"
        };
        c.setHref = function(e) {
            return c.screen.setAttribute("href", e)
        };
        c.setClassName =
            function(e) {
                return c.screen.setAttribute("class", e)
            };
        c.getStyle = function() {
            return c.screen.style
        };
        c.setOverflow = function(e) {
            c.overflow = e;
            c.screen.style.overflow = c.overflow
        };
        c.setPosition = function(e) {
            c.position = e;
            c.screen.style.position = c.position
        };
        c.setDisplay = function(e) {
            c.display = e;
            c.screen.style.display = c.display
        };
        c.setButtonMode = function(e) {
            c.buttonMode = e;
            c.screen.style.cursor = c.buttonMode == true ? "pointer" : "default"
        };
        c.setBkColor = function(e) {
            c.screen.style.backgroundColor = e
        };
        c.setCSSClass = function(e) {
            c.screen.className =
                e
        };
        c.setInnerHTML = function(e) {
            c.innerHTML = e;
            c.screen.innerHTML = c.innerHTML
        };
        c.getInnerHTML = function() {
            return c.innerHTML
        };
        c.getRect = function() {
            return c.screen.getBoundingClientRect()
        };
        c.setAlpha = function(e) {
            c.alpha = e;
            if (c.opacityType == "opacity") c.screen.style.opacity = c.alpha;
            else if (c.opacityType == "filter") {
                c.screen.style.filter = "alpha(opacity=" + c.alpha * 100 + ")";
                c.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(c.alpha * 100) + ")"
            }
        };
        c.getAlpha = function() {
            return c.alpha
        };
        c.getRect = function() {
            return c.screen.getBoundingClientRect()
        };
        c.getGlobalX = function() {
            return c.getRect().left
        };
        c.getGlobalY = function() {
            return c.getRect().top
        };
        c.setX = function(e) {
            c.x = e;
            if (c.hasTransform3d_bl) c.screen.style[c.transform] = "translate3d(" + c.x + "px," + c.y + "px,0)";
            else if (c.hasTransform2d_bl) c.screen.style[c.transform] = "translate(" + c.x + "px," + c.y + "px)";
            else c.screen.style.left = c.x + "px"
        };
        c.getX = function() {
            return c.x
        };
        c.setY = function(e) {
            c.y = e;
            if (c.hasTransform3d_bl) c.screen.style[c.transform] =
                "translate3d(" + c.x + "px," + c.y + "px,0)";
            else if (c.hasTransform2d_bl) c.screen.style[c.transform] = "translate(" + c.x + "px," + c.y + "px)";
            else c.screen.style.top = c.y + "px"
        };
        c.getY = function() {
            return c.y
        };
        c.setWidth = function(e) {
            c.w = e;
            if (c.type == "img") c.screen.width = c.w;
            else c.screen.style.width = c.w + "px"
        };
        c.getWidth = function() {
            if (c.type == "div") {
                if (c.screen.offsetWidth != 0) return c.screen.offsetWidth;
                return c.w
            } else if (c.type == "img") {
                if (c.screen.offsetWidth != 0) return c.screen.offsetWidth;
                if (c.screen.width != 0) return c.screen.width;
                return c._w
            } else if (c.type == "canvas") {
                if (c.screen.offsetWidth != 0) return c.screen.offsetWidth;
                return c.w
            }
        };
        c.setHeight = function(e) {
            c.h = e;
            if (c.type == "img") c.screen.height = c.h;
            else c.screen.style.height = c.h + "px"
        };
        c.getHeight = function() {
            if (c.type == "div") {
                if (c.screen.offsetHeight != 0) return c.screen.offsetHeight;
                return c.h
            } else if (c.type == "img") {
                if (c.screen.offsetHeight != 0) return c.screen.offsetHeight;
                if (c.screen.height != 0) return c.screen.height;
                return c.h
            } else if (c.type == "canvas") {
                if (c.screen.offsetHeight !=
                    0) return c.screen.offsetHeight;
                return c.h
            }
        };
        c.disposeImage = function() {
            if (c.type == "img") c.screen.src = null
        };
        c.destroy = function() {
            if (c.hasBeenSetSelectable_bl) {
                c.screen.ondragstart = null;
                c.screen.onselectstart = null;
                c.screen.ontouchstart = null
            }
            c.screen.removeAttribute("style");
            c.style = null;
            c.screen = null;
            c.transform = null;
            c.position = null;
            c.overflow = null;
            c.display = null;
            c.visible = null;
            c.buttonMode = null;
            c.x = null;
            c.y = null;
            c.w = null;
            c.h = null;
            c.rect = null;
            c.alpha = null;
            c.innerHTML = null;
            c.opacityType = null;
            b = a = j = m =
                c.isHtml5_bl = null;
            c.hasTransform3d_bl = null;
            c = c.hasTransform2d_bl = null
        };
        c.init()
    }
})(window);
(function(q) {
    var m = function(j) {
        var a = this;
        this.stageContainer = this.disable_sdo = this.thumbsManager_do = this.info_do = this.customContextMenu_do = this.preloader_do = this.fullScreenButton_do = this.comboBox_do = this.main_do = null;
        this.stageHeight = this.stageWidth = 0;
        this.autoScale_bl = false;
        this.orintationChanceComplete_bl = this.doNotExceedOriginalSize_bl = true;
        this.isMobile_bl = FWDUtils.isMobile;
        this.mustHaveHolderDiv_bl = this.isFullScreen_bl = false;
        this.init = function() {
            TweenLite.ticker.useRAF(false);
            a.props_obj = j;
            if (a.props_obj)
                if (a.props_obj.displayType) {
                    a.displayType = j.displayType.toLowerCase();
                    if (!a.displayType) a.displayType = m.FULL_SCREEN;
                    if (a.displayType == m.RESPONSIVE) a.mustHaveHolderDiv_bl = true;
                    a.body = document.getElementsByTagName("body")[0];
                    if (!a.displayType) a.displayType = m.FULL_SCREEN;
                    if (a.displayType == m.RESPONSIVE || a.displayType == m.FLUID_WIDTH) a.mustHaveHolderDiv_bl = true;
                    a.body = document.getElementsByTagName("body")[0];
                    if (!a.props_obj.divHolderId)
                        if (a.mustHaveHolderDiv_bl) {
                            alert("Property divHolderId is not defined in the FWDGrid constructor, self property represents the div id into which the grid is added as a child!");
                            return
                        }
                    if (a.mustHaveHolderDiv_bl && !FWDUtils.getChildById(a.props_obj.divHolderId)) alert("FWDGrid holder div is not found, please make sure that the div exsists and the id is correct! " + a.props_obj.divHolderId);
                    else if (a.mustHaveHolderDiv_bl && !a.props_obj.width) alert("The width is not defined, plese make sure that the width property is definded in the FWDGrid constructor! ");
                    else if (a.mustHaveHolderDiv_bl && !a.props_obj.height) alert("The height is not defined, plese make sure that the height property is definded in the FWDGrid constructor! ");
                    else {
                        a.stageContainer = a.displayType == m.FULL_SCREEN ? FWDUtils.isIEAndLessThen9 ? a.body : document.documentElement : FWDUtils.getChildById(a.props_obj.divHolderId);
                        this.autoScale_bl = a.props_obj.autoScale;
                        this.autoScale_bl = a.autoScale_bl == "yes" ? true : false;
                        this.backgroundColor_str = a.props_obj.backgroundColor;
                        this.originalWidth = a.props_obj.width;
                        this.originalHeight = a.props_obj.height;
                        this.setupMainDO();
                        this.setupInfo();
                        this.setupData();
                        this.startResizeHandler()
                    }
                } else alert("Display type is not specified!");
            else alert("FWDGrid constructor properties object is not defined!")
        };
        this.setupMainDO = function() {
            a.main_do = new FWDDisplayObject("div", "relative");
            a.main_do.getStyle().msTouchAction = "none";
            a.main_do.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)";
            a.isMobile_bl && a.main_do.setBackfaceVisibility();
            a.main_do.setBkColor(a.backgroundColor_str);
            if (!FWDUtils.isMobile || FWDUtils.isMobile && FWDUtils.hasPointerEvent) a.main_do.setSelectable(false);
            if (a.displayType == m.FULL_SCREEN) {
                a.stageContainer.style.overflow =
                    "hidden";
                a.main_do.getStyle().position = "absolute";
                document.documentElement.style.overflow = "hidden";
                a.stageContainer.appendChild(a.main_do.screen)
            } else if (a.displayType == m.FLUID_WIDTH) {
                a.main_do.getStyle().position = "absolute";
                FWDUtils.isIE7 ? a.body.appendChild(this.main_do.screen) : document.documentElement.appendChild(a.main_do.screen)
            } else a.stageContainer.appendChild(a.main_do.screen)
        };
        this.setupInfo = function() {
            FWDInfo.setPrototype();
            a.info_do = new FWDInfo
        };
        a.startResizeHandler = function() {
            if (q.addEventListener) {
                q.addEventListener("resize",
                    a.onResizeHandler);
                q.addEventListener("scroll", a.onScrollHandler);
                q.addEventListener("orientationchange", a.orientationChance)
            } else if (q.attachEvent) {
                q.attachEvent("onresize", a.onResizeHandler);
                q.attachEvent("onscroll", a.onScrollHandler)
            }
            a.resizeHandlerId2_to = setTimeout(function() {
                a.resizeHandler()
            }, 50);
            if (a.displayType == m.FLUID_WIDTH) a.resizeHandlerId1_to = setTimeout(function() {
                a.resizeHandler()
            }, 800)
        };
        a.onResizeHandler = function() {
            if (a.isMobile_bl) {
                clearTimeout(a.resizeHandlerId2_to);
                a.resizeHandlerId2_to =
                    setTimeout(function() {
                        a.resizeHandler()
                    }, 200)
            } else {
                a.resizeHandler();
                clearTimeout(a.resizeHandlerId2_to);
                a.resizeHandlerId2_to = setTimeout(function() {
                    a.resizeHandler()
                }, 50)
            }
        };
        a.onScrollHandler = function() {
            if (a.isFullScreen_bl || a.displayType == m.FULL_SCREEN || a.displayType == m.FLUID_WIDTH) a.scrollHandler()
        };
        this.orientationChance = function() {
            if (a.displayType == m.FLUID_WIDTH || a.displayType == m.FULL_SCREEN) {
                a.orintationChanceComplete_bl = false;
                clearTimeout(a.scrollEndId_to);
                clearTimeout(a.resizeHandlerId2_to);
                clearTimeout(a.orientationChangeId_to);
                a.orientationChangeId_to = setTimeout(function() {
                    a.orintationChanceComplete_bl = true;
                    a.resizeHandler()
                }, 1E3);
                a.main_do.setX(0);
                a.main_do.setWidth(0)
            }
        };
        a.scrollHandler = function() {
            if (a.orintationChanceComplete_bl) {
                var b = FWDUtils.getScrollOffsets();
                a.pageXOffset = b.x;
                a.pageYOffset = b.y;
                if (a.isFullScreen_bl || a.displayType == m.FULL_SCREEN) {
                    a.main_do.setX(a.pageXOffset);
                    a.main_do.setY(a.pageYOffset)
                } else if (a.displayType == m.FLUID_WIDTH) {
                    if (a.isMobile_bl) {
                        clearTimeout(a.scrollEndId_to);
                        a.scrollEndId_to = setTimeout(a.resizeHandler, 200)
                    } else a.main_do.setX(a.pageXOffset);
                    a.main_do.setY(Math.round(a.stageContainer.getBoundingClientRect().top + a.pageYOffset))
                }
            }
        };
        a.resizeHandler = function() {
            if (a.orintationChanceComplete_bl) {
                var b = FWDUtils.getScrollOffsets(),
                    c = FWDUtils.getViewportSize();
                a.viewportWidth = parseInt(c.w);
                a.viewportHeight = parseInt(c.h);
                a.pageXOffset = parseInt(b.x);
                a.pageYOffset = parseInt(b.y);
                if (a.isFullScreen_bl || a.displayType == m.FULL_SCREEN) {
                    a.main_do.setX(b.x);
                    a.main_do.setY(b.y);
                    a.stageWidth = c.w;
                    a.stageHeight = c.h
                } else if (a.displayType == m.FLUID_WIDTH) {
                    a.stageWidth = c.w;
                    a.stageHeight = c.h;
                    if (a.autoScale_bl) {
                        b = Math.min(a.stageWidth / a.originalWidth, 1);
                        a.stageHeight = parseInt(b * a.originalHeight);
                        a.stageContainer.style.height = a.stageHeight + "px"
                    } else a.stageHeight = a.originalHeight;
                    a.main_do.setX(a.pageXOffset);
                    a.main_do.setY(Math.round(a.stageContainer.getBoundingClientRect().top + a.pageYOffset))
                } else {
                    if (a.displayType == m.AFTER_PARENT) {
                        a.stageWidth = a.stageContainer.offsetWidth;
                        a.stageHeight =
                            a.stageContainer.offsetHeight
                    } else if (a.autoScale_bl) {
                        a.stageContainer.style.width = "100%";
                        if (a.stageContainer.offsetWidth > a.originalWidth) a.stageContainer.style.width = a.originalWidth + "px";
                        b = a.stageContainer.offsetWidth / a.originalWidth;
                        a.stageWidth = parseInt(b * a.originalWidth);
                        a.stageHeight = parseInt(b * a.originalHeight);
                        a.stageContainer.style.height = a.stageHeight + "px"
                    } else {
                        a.stageContainer.style.width = "100%";
                        if (a.stageContainer.offsetWidth > a.originalWidth) a.stageContainer.style.width = a.originalWidth +
                            "px";
                        a.stageWidth = a.stageContainer.offsetWidth;
                        a.stageHeight = a.originalHeight;
                        a.stageContainer.style.height = a.originalHeight + "px"
                    }
                    a.main_do.setX(0);
                    a.main_do.setY(0)
                }
                a.main_do.setWidth(a.stageWidth);
                a.main_do.setHeight(a.stageHeight);
                a.preloader_do && a.positionPreloader();
                if (a.thumbsManager_do) {
                    a.thumbsManager_do.resizeHandler();
                    if (!a.thumbsManager_do.allowToSwitchCat_bl) {
                        a.disable_sdo.setWidth(a.stageWidth);
                        a.disable_sdo.setHeight(a.stageHeight)
                    }
                }
                a.comboBox_do && a.comboBox_do.position();
                a.fullScreenButton_do &&
                    a.fullScreenButton_do.position()
            }
        };
        this.setupDisableContainer = function() {
            a.disable_sdo = new FWDSimpleDisplayObject("div");
            if (FWDUtils.isIE) {
                a.disable_sdo.setBkColor("#000000");
                a.disable_sdo.setAlpha(1.0E-5)
            }
            a.main_do.addChild(a.disable_sdo)
        };
        this.disableAll = function() {
            a.disable_sdo.setWidth(a.stageWidth + 3E3);
            a.disable_sdo.setHeight(a.stageHeight + 3E3)
        };
        this.enableAll = function() {
            a.disable_sdo.setWidth(0);
            a.disable_sdo.setWidth(0)
        };
        this.setupContextMenu = function() {
            a.customContextMenu_do = new FWDContextMenu(a.main_do,
                a.data.showContextMenu_bl)
        };
        this.setupData = function() {
            FWDData.setPrototype();
            a.data = new FWDData(a.props_obj);
            a.data.addListener(FWDData.PRELOADER_LOAD_DONE, a.onPreloaderLoadDone);
            a.data.addListener(FWDData.LOAD_ERROR, a.dataLoadError);
            a.data.addListener(FWDData.LOAD_DONE, a.dataLoadComplete)
        };
        this.onPreloaderLoadDone = function() {
            a.setupPreloader();
            a.positionPreloader()
        };
        this.dataLoadError = function(b) {
            a.main_do.addChild(a.info_do);
            a.info_do.showText(b.text)
        };
        this.dataLoadComplete = function() {
            a.preloader_do.hide(true);
            a.setupThumbsManager();
            a.data.showComboBox_bl && a.setupComboBox();
            if (a.data.showFullScreenButton_bl && a.displayType != m.FULL_SCREEN) a.setupFullScreenButton();
            else a.data.showFullScreenButton_bl && FWDUtils.hasFullScreen && a.setupFullScreenButton();
            a.setupLightBox();
            a.setupDisableContainer();
            a.isMobile_bl || a.setupContextMenu();
            a.resizeHandler(true)
        };
        this.setupPreloader = function() {
            FWDPreloader.setPrototype();
            a.preloader_do = new FWDPreloader(a.data.mainPreloader_img, 29, 29, 32, 60);
            a.preloader_do.addListener(FWDPreloader.HIDE_COMPLETE,
                a.onPreloaderHideCompleteHandler);
            a.preloader_do.show(true);
            a.main_do.addChild(a.preloader_do)
        };
        this.positionPreloader = function() {
            if (a.preloader_do) {
                a.preloader_do.setX(parseInt((a.stageWidth - a.preloader_do.getWidth()) / 2));
                a.preloader_do.setY(parseInt((a.stageHeight - a.preloader_do.getHeight()) / 2))
            }
        };
        this.onPreloaderHideCompleteHandler = function() {
            a.main_do.removeChild(a.preloader_do)
        };
        this.setupThumbsManager = function() {
            FWDThumbsManager.setPrototype();
            a.thumbsManager_do = new FWDThumbsManager(a.data,
                a);
            a.thumbsManager_do.addListener(FWDThumbsManager.LOAD_ERROR, a.onThumbsManagerLoadError);
            a.thumbsManager_do.addListener(FWDThumbsManager.CLICK, a.onThumbsManagerClick);
            a.thumbsManager_do.addListener(FWDThumbsManager.HIDE_THUMBS_COMPLETE, a.onThumbsManagerHideComplete);
            a.main_do.addChild(a.thumbsManager_do)
        };
        this.onThumbsManagerLoadError = function(b) {
            a.main_do.addChild(a.info_do);
            a.info_do.showText(b.text)
        };
        this.onThumbsManagerClick = function(b) {
            a.lighBoxDO.show(b.id)
        };
        this.onThumbsManagerHideComplete =
            function() {
                a.enableAll()
            };
        this.setupComboBox = function() {
            FWDComboBox.setPrototype();
            a.comboBox_do = new FWDComboBox(a, {
                upArrowN_img: a.data.comboboxUpArrowN_img,
                upArrowS_img: a.data.comboboxUpArrowS_img,
                categories_ar: a.data.categories_ar,
                selectorLabel: a.data.selectLabel_str,
                position: a.data.position_str,
                startAtCategory: a.data.startAtCategory,
                comboBoxHorizontalMargins: a.data.comboBoxHorizontalMargins,
                comboBoxVerticalMargins: a.data.comboBoxVerticalMargins,
                comboBoxCornerRadius: a.data.comboBoxCornerRadius,
                selctorBackgroundNormalColor: a.data.selctorBackgroundNormalColor_str,
                selctorBackgroundSelectedColor: a.data.selctorBackgroundSelectedColor_str,
                selctorTextNormalColor: a.data.selctorTextNormalColor_str,
                selctorTextSelectedColor: a.data.selctorTextSelectedColor_str,
                buttonBackgroundNormalColor: a.data.buttonBackgroundNormalColor_str,
                buttonBackgroundSelectedColor: a.data.buttonBackgroundSelectedColor_str,
                buttonTextNormalColor: a.data.buttonTextNormalColor_str,
                buttonTextSelectedColor: a.data.buttonTextSelectedColor_str,
                shadowColor: a.data.comboBoxShadowColor_str
            });
            a.comboBox_do.addListener(FWDComboBox.BUTTON_PRESSED, a.onComboboxButtonPressedHandler);
            a.main_do.addChild(a.comboBox_do)
        };
        this.onComboboxButtonPressedHandler = function(b) {
            if (a.thumbsManager_do.allowToSwitchCat_bl) {
                a.disableAll();
                a.thumbsManager_do.showCurrentCat(b.id);
                a.lighBoxDO.updateData(a.data.lightBox_ar[b.id])
            }
        };
        this.setButtonsStateBasedOnId = function(b) {
            a.curId = b;
            for (var c = 0; c < a.totalButtons; c++) {
                b = a.buttons_ar[c];
                c == a.curId ? b.setSelectedState(true) :
                    b.setNormalState(true)
            }
        };
        this.setupLightBox = function() {
            FWDLightBox.setPrototype();
            this.lighBoxDO = new FWDLightBox({
                data_ar: a.data.lightBox_ar[a.data.startAtCategory],
                lightboxPreloader_img: this.data.lightboxPreloader_img,
                slideShowPreloader_img: this.data.slideShowPreloader_img,
                closeN_img: this.data.lightboxCloseButtonN_img,
                closeS_img: this.data.lightboxCloseButtonS_img,
                nextN_img: this.data.lightboxNextButtonN_img,
                nextS_img: this.data.lightboxNextButtonS_img,
                prevN_img: this.data.lightboxPrevButtonN_img,
                prevS_img: this.data.lightboxPrevButtonS_img,
                maximizeN_img: this.data.lightboxMaximizeN_img,
                maximizeS_img: this.data.lightboxMaximizeS_img,
                minimizeN_img: this.data.lightboxMinimizeN_img,
                minimizeS_img: this.data.lightboxMinimizeS_img,
                infoOpenN_img: this.data.lightboxInfoOpenN_img,
                infoOpenS_img: this.data.lightboxInfoOpenS_img,
                infoCloseN_img: this.data.lightboxInfoCloseN_img,
                infoCloseS_img: this.data.lightboxInfoCloseS_img,
                playN_img: this.data.lightboxPlayN_img,
                playS_img: this.data.lightboxPlayS_img,
                pauseN_img: this.data.lightboxPauseN_img,
                pauseS_img: this.data.lightboxPauseS_img,
                showContextMenu: this.data.showContextMenu_bl,
                showContextMenu_bl: a.data.showContextMenu_bl,
                addKeyboardSupport_bl: a.data.addLightBoxKeyboardSupport_bl,
                showNextAndPrevButtons: a.data.showLighBoxNextAndPrevButtons_bl,
                showZoomButton: a.data.showLightBoxZoomButton_bl,
                showInfoButton: a.data.showLightBoxInfoButton_bl,
                showSlideshowButton: a.data.showLighBoxSlideShowButton_bl,
                slideShowAutoPlay: a.data.slideShowAutoPlay_bl,
                showInfoWindowByDefault: a.data.showInfoWindowByDefault_bl,
                lightBoxVideoAutoPlay: a.data.lightBoxVideoAutoPlay_bl,
                forceRoundBorderToIframe: a.data.forceRoundBorderToIframe_bl,
                infoWindowBackgroundColor: a.data.lightBoxInfoWindowBackgroundColor_str,
                infoWindowBackgroundOpacity: a.data.lightBoxInfoWindowBackgroundOpacity,
                backgroundColor_str: a.data.lightBoxBackgroundColor_str,
                backgroundOpacity: a.data.lightBoxMainBackgroundOpacity,
                itemBackgroundColor_str: a.data.lightBoxItemBackgroundColor_str,
                borderColor_str: a.data.lightBoxItemBorderColor_str,
                borderSize: a.data.lightBoxBorderSize,
                borderRadius: a.data.lightBoxBorderRadius,
                slideShowDelay: a.data.lightBoxSlideShowDelay
            });
            this.lighBoxDO.addListener(FWDLightBox.MINIMIZE_START, this.lightBoxMinimizeStartHandler);
            this.lighBoxDO.addListener(FWDLightBox.MAXIMIZE_COMPLETE, this.lightBoxMaximizeCompleteHandler)
        };
        this.lightBoxMinimizeStartHandler = function() {
            if (!a.isMobile_bl || FWDUtils.isAndroid)
                if (navigator.userAgent.toLowerCase().indexOf("msie 7") != -1) a.main_do.setVisible(true);
                else document.documentElement.getElementsByTagName("body")[0].style.visibility = "visible"
        };
        this.lightBoxMaximizeCompleteHandler =
            function() {
                if (!a.isMobile_bl || FWDUtils.isAndroid)
                    if (navigator.userAgent.toLowerCase().indexOf("msie 7") != -1) a.main_do.setVisible(false);
                    else document.documentElement.getElementsByTagName("body")[0].style.visibility = "hidden"
            };
        this.setupFullScreenButton = function() {
            FWDFullScreenButton.setPrototype();
            a.fullScreenButton_do = new FWDFullScreenButton(a, a.data.fullScreenNN_img, a.data.fullScreenNS_img, a.data.fullScreenFN_img, a.data.fullScreenFS_img, a.displayType, a.data.fullScreenPosition_str, a.data.fullScreenHorizontalMargins,
                a.data.fullScreenVerticalMargins);
            a.main_do.addChild(a.fullScreenButton_do);
            a.fullScreenButton_do.addListener(FWDFullScreenButton.GO_FULL_SCREEN, a.goFullScreenListener);
            a.fullScreenButton_do.addListener(FWDFullScreenButton.GO_NORMAL_SCREEN, a.goNormalScreenListener);
            a.fullScreenButton_do.show(true);
            if (document.addEventListener) {
                document.addEventListener("fullscreenchange", a.onFullScreenChange);
                document.addEventListener("mozfullscreenchange", a.onFullScreenChange);
                document.addEventListener("webkitfullscreenchange",
                    a.onFullScreenChange)
            }
        };
        this.goFullScreenListener = function() {
            a.goFullScreen()
        };
        this.goNormalScreenListener = function() {
            a.goNormalScreen()
        };
        this.onFullScreenChange = function() {
            if (document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msieFullScreen) {
                a.fullScreenButton_do.isFullScreen_bl = true;
                a.isFullScreen_bl = true
            } else {
                a.fullScreenButton_do.isFullScreen_bl = false;
                a.goNormalScreen()
            }
            a.fullScreenButton_do.setButtonsState()
        };
        this.goFullScreen = function() {
            var b = FWDUtils.getScrollOffsets();
            a.lastScrollX = b.x;
            a.lastScrollY = b.y;
            if (document.documentElement.requestFullScreen) document.documentElement.requestFullScreen();
            else if (document.documentElement.mozRequestFullScreen) document.documentElement.mozRequestFullScreen();
            else if (document.documentElement.webkitRequestFullScreen) document.documentElement.webkitRequestFullScreen();
            else document.documentElement.msieRequestFullScreen && document.documentElement.msieRequestFullScreen();
            a.main_do.getStyle().position = "absolute";
            a.body.style.overflow =
                "hidden";
            document.documentElement.style.overflow = "hidden";
            FWDUtils.isIE7 ? a.body.appendChild(a.main_do.screen) : document.documentElement.appendChild(a.main_do.screen);
            a.isMobile_bl && a.thumbsManager_do.disableMoveOnFullScreen();
            a.main_do.getStyle().zIndex = 100000001;
            a.isFullScreen_bl = true;
            a.resizeHandler();
            a.disableAll();
            clearTimeout(a.disableAllOnFullScreenChangeId_to);
            a.disableAllOnFullScreenChangeId_to = setTimeout(a.enableAll, 200)
        };
        this.goNormalScreen = function() {
            if (a.isFullScreen_bl) {
                if (document.cancelFullScreen) document.cancelFullScreen();
                else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
                else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
                else document.msieCancelFullScreen && document.msieCancelFullScreen();
                a.fullScreenButton_do.isFullScreen_bl = false;
                a.fullScreenButton_do.setButtonsState();
                a.isFullScreen_bl = false;
                a.isMobile_bl && a.thumbsManager_do.removeDisableMoveOnFullScreen();
                a.addMainDoToTheOriginalParent();
                a.resizeHandler();
                a.disableAll();
                clearTimeout(a.disableAllOnFullScreenChangeId_to);
                a.disableAllOnFullScreenChangeId_to =
                    setTimeout(a.enableAll, 200)
            }
        };
        this.addMainDoToTheOriginalParent = function() {
            if (FWDUtils.isIE7 && a.displayType == m.FULL_SCREEN) {
                document.documentElement.style.overflow = "auto";
                a.body.style.overflow = "auto"
            } else if (a.displayType != m.FULL_SCREEN) {
                document.documentElement.style.overflow = FWDUtils.isIE7 ? "auto" : "visible";
                a.body.style.overflow = "visible"
            }
            if (this.displayType == m.FULL_SCREEN) FWDUtils.isIE7 ? a.body.appendChild(a.main_do.screen) : document.documentElement.appendChild(this.main_do.screen);
            else if (a.displayType ==
                m.FLUID_WIDTH) {
                FWDUtils.isIE7 ? a.body.appendChild(a.main_do.screen) : document.documentElement.appendChild(a.main_do.screen);
                a.resizeHandler(true)
            } else {
                a.main_do.getStyle().position = "relative";
                a.stageContainer.appendChild(this.main_do.screen)
            }
            a.main_do.getStyle().zIndex = 0;
            a.resizeHandler(true);
            q.scrollTo(a.lastScrollX, a.lastScrollY)
        };
        this.destroy = function() {
            if (q.removeEventListener) {
                document.removeEventListener("fullscreenchange", a.onFullScreenChange);
                document.removeEventListener("mozfullscreenchange",
                    a.onFullScreenChange);
                document.removeEventListener("webkitfullscreenchange", a.onFullScreenChange);
                q.removeEventListener("resize", a.onResizeHandler);
                q.removeEventListener("scroll", a.onScrollHandler);
                q.removeEventListener("orientationchange", a.orientationChance)
            } else if (q.detachEvent) {
                q.detachEvent("onresize", a.onResizeHandler);
                q.detachEvent("onscroll", a.onScrollHandler)
            }
            clearTimeout(a.resizeHandlerId1_to);
            clearTimeout(a.resizeHandlerId2_to);
            clearTimeout(a.disableAllOnFullScreenChangeId_to);
            a.data &&
                a.data.destroy();
            a.customContextMenu_do && a.customContextMenu_do.destroy();
            a.info_do && a.info_do.destroy();
            a.preloader_do && a.preloader_do.destroy();
            a.fullScreenButton_do && a.fullScreenButton_do.destroy();
            a.comboBox_do && a.comboBox_do.destroy();
            a.thumbsManager_do && a.thumbsManager_do.destroy();
            a.lighBoxDO && a.lighBoxDO.destroy();
            if (a.displayType == m.FULL_SCREEN || a.displayType == m.FLUID_WIDTH) FWDUtils.isIE7 ? a.body.removeChild(a.main_do.screen) : document.documentElement.removeChild(a.main_do.screen);
            else a.stageContainer.removeChild(a.main_do.screen);
            if (a.main_do) {
                a.main_do.screen.innerHTML = "";
                a.main_do.destroy()
            }
            a.main_do = null;
            a.comboBox_do = null;
            a.fullScreenButton_do = null;
            a.preloader_do = null;
            a.customContextMenu_do = null;
            a.info_do = null;
            a.thumbsManager_do = null;
            a.disable_sdo = null;
            a = a.stageContainer = null
        };
        this.init()
    };
    m.RESIZE = "resize";
    m.FULL_SCREEN = "fullscreen";
    m.LIGHTBOX = "lightbox";
    m.RESPONSIVE = "responsive";
    m.FLUID_WIDTH = "fluidwidth";
    m.AFTER_PARENT = "afterparent";
    q.FWDGrid = m
})(window);
(function(q) {
    var m = function(j, a, b, c, e, p, f, h, t, g, v) {
        var d = this,
            n = m.prototype;
        this.animStartDir = this.go_button = this.over_sdo = this.description_do = this.descriptionText_do = this.descriptionBg_do = this.descriptionHolder_do = this.image = this.image_sdo = this.imageHolder_do = this.background_sdo = this.main_do = this.icon_img = null;
        this.thumbnailOverlayType_str = a.thumbnailOverlayType_str;
        this.thumbIconPath_str = c;
        this.linkToGo_str = e;
        this.thumbText_str = p;
        this.borderNormalColor_str = t || a.thumbnailBorderNormalColor_str;
        this.borderSelectedColor_str =
            g || a.thumbnailBorderSelectedColor_str;
        this.bgColor_str = f || a.thumbnailBackgroundColor_str;
        this.overlayColor_str = h || a.thumbnailOverlayBackgroundColor_str;
        this.id = j;
        this.borderSize = a.thumbnailBorderSize;
        this.overlayOpacity = a.thumbnailOverlayOpacity;
        this.tempFinalY = this.tempFinalX = -1;
        this.finalH = this.finalW = this.finalY = this.finalX = 0;
        this.iconWidth = a.thumbIconWidth;
        this.iconHeight = a.thumbIconHeight;
        this.borderRadius = a.thumbnailBorderRadius;
        this.imageCornerRadius = 6;
        this.used = this.hasImage = false;
        this.firstTimeLoad =
            true;
        this.isHideTweening_bl = this.isVisible = this.isSelected = false;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        this.allowBorderTween_bl = this.borderNormalColor_str != this.borderSelectedColor_str;
        this.hasButtonMode_bl = v;
        this.isMobile_bl = FWDUtils.isMobile;
        this.imageShowComplete_bl = false;
        this.init = function() {
            d.hasButtonMode_bl && d.setButtonMode(true);
            d.setupScreen()
        };
        this.setupScreen = function() {
            d.main_do = new FWDDisplayObject("div");
            d.background_sdo = new FWDSimpleDisplayObject("div");
            d.imageHolder_do =
                new FWDDisplayObject("div");
            d.image_sdo = new FWDSimpleDisplayObject("img");
            d.over_sdo = new FWDDisplayObject("div");
            d.go_button = new FWDSimpleDisplayObject("a");
            d.go_button.setWidth(24);
            d.go_button.setHeight(24);
            d.go_button.setInnerHTML('<span class="hg-link-to-go-icon"></span>');
            d.go_button.setHref(this.linkToGo_str);
            d.go_button.setClassName("hg-link-to-go");
            d.go_button.setAlpha(1);
            this.linkToGo_str && d.over_sdo.addChild(d.go_button);
            if (!d.isMobile_bl && d.thumbnailOverlayType_str == "text" || d.hasPointerEvent_bl &&
                d.thumbnailOverlayType_str == "text") {
                d.descriptionHolder_do = new FWDDisplayObject("div");
                d.description_do = new FWDDisplayObject("div");
                d.descriptionBg_do = new FWDDisplayObject("div");
                d.descriptionText_do = new FWDDisplayObject("div")
            }
            d.over_sdo.setResizableSizeAfterParent();
            if (FWDUtils.isIE) {
                d.over_sdo.setBkColor("#000000");
                d.over_sdo.setAlpha(0.0010)
            }
            d.background_sdo.getStyle().border = "solid " + d.borderNormalColor_str + " " + d.borderSize + "px";
            d.background_sdo.setBkColor(d.bgColor_str);
            if (d.borderRadius != 0) d.background_sdo.getStyle().borderRadius =
                d.borderRadius + "px";
            d.main_do.addChild(d.background_sdo);
            d.addChild(d.main_do);
            d.addChild(d.over_sdo)
        };
        this.setupIcon = function() {
            d.icon_img = new Image;
            d.icon_img.style.position = "absolute";
            d.icon_img.style.margin = "0px";
            d.icon_img.style.padding = "0px";
            d.icon_img.src = d.thumbIconPath_str;
            d.addChild(d.over_sdo)
        };
        this.showIcon = function() {
            clearTimeout(d.hideIconCompleteId_to);
            if (d.opacityType == "opacity") {
                d.icon_img.style.left = parseInt((d.finalW - 80) / 2) + "px";
                d.icon_img.style.top = parseInt((d.finalH - 80) / 2) + "px";
                d.icon_img.style.width = "80px";
                d.icon_img.style.height = "80px";
                d.icon_img.style.opacity = 0;
                TweenMax.killTweensOf(d.icon_img);
                TweenMax.to(d.icon_img, 0.5, {
                    css: {
                        opacity: 1,
                        left: parseInt((d.finalW - d.iconWidth) / 2),
                        top: parseInt((d.finalH - d.iconHeight) / 2),
                        width: d.iconWidth,
                        height: d.iconHeight
                    },
                    ease: Expo.easeInOut
                })
            } else {
                d.icon_img.style.left = parseInt((d.finalW - d.iconWidth) / 2) + "px";
                d.icon_img.style.top = parseInt((d.finalH - d.iconHeight) / 2) + "px";
                d.icon_img.style.width = d.iconWidth + "px";
                d.icon_img.style.height = d.iconHeight +
                    "px"
            }
            d.screen.appendChild(d.icon_img);
            d.addChild(d.over_sdo)
        };
        this.hideIcon = function() {
            if (d.opacityType == "opacity") {
                TweenMax.killTweensOf(d.icon_img);
                TweenMax.to(d.icon_img, 0.5, {
                    css: {
                        opacity: 0
                    }
                });
                d.hideIconCompleteId_to = setTimeout(d.hideIconComplete, 500)
            } else d.hideIconComplete()
        };
        this.hideIconComplete = function() {
            d.screen.removeChild(d.icon_img)
        };
        this.setupDescription = function() {
            d.descriptionHolder_do.setX(d.borderSize);
            d.descriptionHolder_do.setY(d.borderSize);
            d.description_do.setWidth(d.finalW -
                d.borderSize * 2);
            d.description_do.setHeight(d.finalH - d.borderSize * 2);
            d.descriptionBg_do.setResizableSizeAfterParent();
            d.descriptionBg_do.setBkColor(d.overlayColor_str);
            d.descriptionBg_do.setAlpha(d.overlayOpacity);
            d.descriptionText_do.getStyle().width = "100%";
            d.descriptionText_do.getStyle().fontSmoothing = "antialiased";
            d.descriptionText_do.getStyle().webkitFontSmoothing = "antialiased";
            d.descriptionText_do.getStyle().textRendering = "optimizeLegibility";
            if (d.borderRadius != 0) d.descriptionBg_do.getStyle().borderRadius =
                d.borderRadius + "px";
            d.addChild(d.descriptionHolder_do);
            d.descriptionHolder_do.addChild(d.description_do);
            d.descriptionText_do.setInnerHTML(d.thumbText_str);
            d.description_do.addChild(d.descriptionBg_do);
            d.description_do.addChild(d.descriptionText_do);
            d.addChild(d.descriptionHolder_do);
            d.addChild(d.over_sdo)
        };
        this.positionText = function() {
            d.descriptionText_do.setY(Math.round((d.finalH - d.borderSize * 2 - d.descriptionText_do.getHeight()) / 2))
        };
        this.removeUselesStuff = function() {
            d.imageShowComplete_bl = true;
            TweenMax.killTweensOf(d.imageHolder_do);
            TweenMax.killTweensOf(d.image_sdo);
            d.image_sdo.setX(d.borderSize);
            d.image_sdo.setY(d.borderSize);
            d.image_sdo.setWidth(d.finalW - d.borderSize * 2);
            d.image_sdo.setHeight(d.finalH - d.borderSize * 2);
            d.background_sdo.setBkColor(d.borderNormalColor_str);
            d.imageHolder_do.removeChild(d.image_sdo);
            d.main_do.removeChild(d.imageHolder_do);
            d.imageHolder_do.destroy();
            d.imageHolder_do = null;
            d.main_do.addChild(d.image_sdo)
        };
        this.addImage = function(u) {
            d.image_sdo.setScreen(u);
            if (d.borderRadius !=
                0) d.image_sdo.getStyle().borderRadius = d.borderRadius + "px";
            d.hasImage = true;
            if (d.isMobile_bl)
                if (d.hasPointerEvent_bl) {
                    d.over_sdo.screen.addEventListener("MSPointerOver", d.onMouseOverHandler);
                    d.over_sdo.screen.addEventListener("MSPointerOut", d.onMouseOutHandler);
                    d.over_sdo.screen.addEventListener("MSPointerUp", d.onMouseClickHandler)
                } else d.over_sdo.screen.addEventListener("touchend", d.onMouseClickHandler);
            else if (d.over_sdo.screen.addEventListener) {
                d.over_sdo.screen.addEventListener("mouseover", d.onMouseOverHandler);
                d.over_sdo.screen.addEventListener("mouseout", d.onMouseOutHandler);
                d.over_sdo.screen.addEventListener("click", d.onMouseClickHandler)
            } else if (d.screen.attachEvent) {
                d.over_sdo.screen.attachEvent("onmouseover", d.onMouseOverHandler);
                d.over_sdo.screen.attachEvent("onmouseout", d.onMouseOutHandler);
                d.over_sdo.screen.attachEvent("onclick", d.onMouseClickHandler)
            }
            if (!d.isMobile_bl && d.thumbnailOverlayType_str == "text" || d.hasPointerEvent_bl && d.thumbnailOverlayType_str == "text") d.setupDescription();
            else if (!d.isMobile_bl &&
                d.thumbnailOverlayType_str == "icons" || d.hasPointerEvent_bl && d.thumbnailOverlayType_str == "icons") d.setupIcon();
            d.show()
        };
        this.onMouseOverHandler = function(u) {
            if (!u.pointerType || u.pointerType == u.MSPOINTER_TYPE_MOUSE)
                if (!d.isSelected) {
                    d.isSelected = true;
                    d.allowBorderTween_bl && d.setSelectedState();
                    if (d.descriptionHolder_do) {
                        d.getOverAnimPos(u);
                        d.showDescription()
                    } else d.icon_img && d.showIcon()
                }
        };
        this.onMouseOutHandler = function(u) {
            ee = u;
            for (u = u.toElement || u.relatedTarget; u && u.parentNode && u.parentNode != q;) {
                if (u.parentNode ==
                    this || u == this) {
                    u.preventDefault && u.preventDefault();
                    return false
                }
                u = u.parentNode
            }
            u = ee;
            if (!u.pointerType || u.pointerType == u.MSPOINTER_TYPE_MOUSE)
                if (d.isSelected) {
                    d.isSelected = false;
                    d.allowBorderTween_bl && d.setNormalState();
                    if (d.descriptionHolder_do) {
                        d.getOverAnimPos(u);
                        d.hideDescription()
                    } else d.icon_img && d.hideIcon()
                }
        };
        this.onMouseClickHandler = function(u) {
            if (u.srcElement) u.target = u.srcElement;
            u.target.getAttribute("class") !== null && u.target.getAttribute("class").indexOf("hg-link-to-go") > -1 || d.thumbnailOverlayType_str !=
                "none" && d.dispatchEvent(m.CLICK, {
                    id: d.id
                })
        };
        this.checkVisibility = function() {
            d.isVisible = d.finalX + b.thumbnailsFinalX > -d.finalW && d.finalX + b.thumbnailsFinalX < b.stageWidth || d.getX() + b.thumbnailsFinalX > -d.finalW && d.getX() + b.thumbnailsFinalX < b.stageWidth ? true : false
        };
        this.resizeThumb = function() {
            TweenMax.killTweensOf(d);
            d.checkVisibility();
            var u = d.finalW - d.borderSize * 2,
                B = d.finalH - d.borderSize * 2;
            d.main_do.setWidth(d.finalW);
            d.main_do.setHeight(d.finalH);
            if (d.background_sdo) {
                d.background_sdo.setWidth(u);
                d.background_sdo.setHeight(B)
            }
            if (d.description_do) {
                d.description_do.setWidth(u);
                d.description_do.setHeight(B)
            }
            d.setWidth(d.finalW);
            d.setHeight(d.finalH);
            if (d.firstTimeLoad) {
                TweenMax.killTweensOf(d.image_sdo);
                TweenMax.killTweensOf(d.imageHolder_do);
                d.setX(d.finalX);
                d.setY(d.finalY);
                d.imageHolder_do.setX(parseInt(d.finalW / 2));
                d.imageHolder_do.setY(parseInt(d.finalH / 2));
                d.image_sdo.setX(-parseInt(d.image_sdo.getWidth() / 2));
                d.image_sdo.setY(-parseInt(d.image_sdo.getHeight() / 2));
                TweenMax.to(d.imageHolder_do, 0.8, {
                    x: d.borderSize,
                    y: d.borderSize,
                    w: u,
                    h: B,
                    ease: Expo.easeInOut
                });
                TweenMax.to(d.image_sdo,
                    0.8, {
                        x: 0,
                        y: 0,
                        w: u,
                        h: B,
                        ease: Expo.easeInOut
                    });
                d.firstTimeLoad = false;
                d.imageHolder_do.addChild(d.image_sdo);
                d.main_do.addChild(d.imageHolder_do);
                d.removeBackgroundDoId_to = setTimeout(d.removeUselesStuff, 800)
            } else {
                d.image_sdo.setWidth(u);
                d.image_sdo.setHeight(B);
                if (d.imageHolder_do) {
                    d.imageHolder_do.setX(d.borderSize);
                    d.imageHolder_do.setY(d.borderSize);
                    d.imageHolder_do.setWidth(u);
                    d.imageHolder_do.setHeight(B);
                    d.image_sdo.setX(0);
                    d.image_sdo.setY(0)
                } else {
                    d.image_sdo.setX(d.borderSize);
                    d.image_sdo.setY(d.borderSize)
                }
                d.main_do.setAlpha(1);
                if (d.isVisible && !d.isMobile_bl) TweenMax.to(d, 0.8, {
                    x: d.finalX,
                    y: d.finalY,
                    delay: 0.2,
                    ease: Expo.easeInOut
                });
                else {
                    d.setX(d.finalX);
                    d.setY(d.finalY)
                }
                if (!d.imageShowComplete_bl) {
                    clearTimeout(d.removeBackgroundDoId_to);
                    d.removeUselesStuff()
                }
            }
        };
        this.setNormalState = function() {
            TweenMax.to(d.background_sdo.screen, 0.8, {
                css: {
                    borderColor: d.borderNormalColor_str
                },
                ease: Expo.easeOut
            })
        };
        this.setSelectedState = function() {
            TweenMax.to(d.background_sdo.screen, 0.8, {
                css: {
                    borderColor: d.borderSelectedColor_str
                },
                ease: Expo.easeOut
            })
        };
        this.getOverAnimPos = function(u) {
            u = FWDUtils.getViewportMouseCoordinates(u);
            var B = d.getGlobalX(),
                E = d.getGlobalY();
            u = Math.atan2(u.screenY - (E + d.finalH / 2), u.screenX - (B + d.finalW / 2)) * 180 / Math.PI;
            B = Math.atan2(d.finalH, d.finalW) * 180 / Math.PI;
            if (u < B && u > -B) d.animStartDir = m.RIGHT;
            if (u > B && u < 180 - B) d.animStartDir = m.BOTTOM;
            if (u < -180 + B || u > 180 - B) d.animStartDir = m.LEFT;
            if (u > -180 + B && u < -B) d.animStartDir = m.TOP
        };
        this.showDescription = function() {
            d.addChild(d.descriptionHolder_do);
            d.addChild(d.over_sdo);
            clearTimeout(d.positionTextWithDelayId_to);
            d.positionTextWithDelayId_to = setTimeout(d.positionText, 40);
            d.descriptionHolder_do.setWidth(d.finalW - d.borderSize * 2);
            d.descriptionHolder_do.setHeight(d.finalH - d.borderSize * 2);
            if (d.animStartDir == m.TOP) {
                d.description_do.setX(0);
                d.description_do.setY(-d.finalH + d.borderSize * 2)
            } else if (d.animStartDir == m.RIGHT) {
                d.description_do.setX(d.finalW - d.borderSize * 2);
                d.description_do.setY(0)
            } else if (d.animStartDir == m.BOTTOM) {
                d.description_do.setX(0);
                d.description_do.setY(d.finalH - d.borderSize * 2)
            } else if (d.animStartDir ==
                m.LEFT) {
                d.description_do.setX(-d.finalW + d.borderSize * 2);
                d.description_do.setY(0)
            }
            TweenMax.killTweensOf(d.description_do);
            TweenMax.to(d.description_do, 0.4, {
                x: 0,
                y: 0
            })
        };
        this.hideDescription = function() {
            var u, B;
            if (d.animStartDir == m.TOP) {
                u = 0;
                B = -d.finalH + d.borderSize * 2
            } else if (d.animStartDir == m.RIGHT) {
                u = d.finalW - d.borderSize * 2;
                B = 0
            } else if (d.animStartDir == m.BOTTOM) {
                u = 0;
                B = d.finalH - d.borderSize * 2
            } else if (d.animStartDir == m.LEFT) {
                u = -d.finalW + d.borderSize * 2;
                B = 0
            }
            TweenMax.killTweensOf(d.description_do);
            TweenMax.to(d.description_do,
                0.4, {
                    x: u,
                    y: B,
                    onComplete: d.hideDescriptionComplete
                })
        };
        this.hideDescriptionComplete = function() {
            d.removeChild(d.descriptionHolder_do)
        };
        this.show = function() {
            d.main_do.setAlpha(0);
            TweenMax.to(d.main_do, 0.8, {
                alpha: 1
            })
        };
        this.hide = function(u) {
            d.isHideTweening_bl = true;
            clearTimeout(d.hideIconCompleteId_to);
            clearTimeout(d.removeBackgroundDoId_to);
            clearTimeout(d.positionTextWithDelayId_to);
            clearTimeout(d.resizeThumbId_to);
            TweenMax.killTweensOf(d.main_do);
            TweenMax.to(d.main_do, 0.8, {
                alpha: 0,
                delay: u + 0.2,
                ease: Expo.easeOut,
                onComplete: d.hideTweenDone
            });
            if (!d.imageHolder_do) {
                d.imageHolder_do = new FWDDisplayObject("div");
                d.imageHolder_do.setWidth(d.finalW - d.borderSize);
                d.imageHolder_do.setHeight(d.finalH - d.borderSize);
                d.imageHolder_do.addChild(d.image_sdo);
                d.main_do.addChild(d.imageHolder_do)
            }
            TweenMax.killTweensOf(d.imageHolder_do);
            TweenMax.to(d.imageHolder_do, 0.8, {
                x: parseInt(d.finalW / 2),
                y: parseInt(d.finalH / 2),
                w: 0,
                h: 0,
                delay: u,
                ease: Expo.easeInOut
            });
            if (d.descriptionHolder_do)
                if (d.descriptionHolder_do && d.isSelected) d.hideDescription();
                else d.icon_img && d.hideIcon();
            if (d.image_sdo) {
                TweenMax.killTweensOf(d.image_sdo);
                TweenMax.to(d.image_sdo, 0.8, {
                    x: -parseInt(d.image_sdo.getWidth() / 2),
                    y: -parseInt(d.image_sdo.getHeight() / 2),
                    delay: u,
                    ease: Expo.easeInOut
                })
            }
        };
        this.hideTweenDone = function() {
            d.isHideTweening_bl = false
        };
        this.destroy = function() {
            TweenMax.killTweensOf(d);
            clearTimeout(d.hideIconCompleteId_to);
            clearTimeout(d.removeBackgroundDoId_to);
            clearTimeout(d.positionTextWithDelayId_to);
            clearTimeout(d.resizeThumbId_to);
            if (d.isMobile_bl) {
                if (d.hasPointerEvent_bl) {
                    d.over_sdo.screen.removeEventListener("MSPointerOver",
                        d.onMouseOverHandler);
                    d.over_sdo.screen.removeEventListener("MSPointerOut", d.onMouseOutHandler);
                    d.over_sdo.screen.removeEventListener("MSPointerUp", d.onMouseClickHandler)
                }
                d.over_sdo.screen.removeEventListener("touchend", d.onMouseClickHandler)
            } else if (d.over_sdo.screen.removeEventListener) {
                d.over_sdo.screen.removeEventListener("mouseover", d.onMouseOverHandler);
                d.over_sdo.screen.removeEventListener("mouseout", d.onMouseOutHandler);
                d.over_sdo.screen.removeEventListener("click", d.onMouseClickHandler)
            } else if (d.over_sdo.screen.detachEvent) {
                d.over_sdo.screen.detachEvent("onmouseover",
                    d.onMouseOverHandler);
                d.over_sdo.screen.detachEvent("onmouseout", d.onMouseOutHandler);
                d.over_sdo.screen.detachEvent("onclick", d.onMouseClickHandler)
            }
            if (d.image_sdo.screen) {
                TweenMax.killTweensOf(d.image_sdo);
                d.image_sdo.screen.onload = null;
                d.image_sdo.screen.onerror = null;
                d.image_sdo.screen.src = null;
                d.image_sdo.destroy()
            }
            if (d.icon_img) {
                TweenMax.killTweensOf(d.icon_img);
                d.icon_img.onload = null;
                d.icon_img.onerror = null;
                d.icon_img.src = null
            }
            if (d.imageHolder_do) {
                TweenMax.killTweensOf(d.imageHolder_do);
                d.imageHolder_do.destroy()
            }
            if (d.description_do) {
                TweenMax.killTweensOf(d.description_do);
                d.descriptionHolder_do.destroy();
                d.description_do.destroy();
                d.descriptionBg_do.destroy();
                d.descriptionText_do.destroy()
            }
            d.over_sdo.destroy();
            TweenMax.killTweensOf(d.main_do);
            d.main_do.destroy();
            d.background_sdo && d.background_sdo.destroy();
            d.icon_img = null;
            d.main_do = null;
            d.border_do = null;
            d.background_sdo = null;
            d.imageHolder_do = null;
            d.image_sdo = null;
            d.image = null;
            d.descriptionHolder_do = null;
            d.descriptionBg_do = null;
            d.descriptionText_do = null;
            d.description_do = null;
            b = a = d.over_sdo = null;
            d.setInnerHTML("");
            n.destroy();
            d = n = null;
            m.prototype = null
        };
        this.init()
    };
    m.setPrototype = function() {
        m.prototype = new FWDDisplayObject("div")
    };
    m.LEFT = "left";
    m.RIGHT = "right";
    m.TOP = "top";
    m.BOTTOM = "bottom";
    m.CLICK = "onClick";
    m.prototype = null;
    q.FWDThumb = m
})(window);
(window._gsQueue || (window._gsQueue = [])).push(function() {
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(q, m, j) {
            var a = [].slice,
                b = function(g, v, d) {
                    j.call(this, g, v, d);
                    this._cycle = 0;
                    this._yoyo = this.vars.yoyo === true;
                    this._repeat = this.vars.repeat || 0;
                    this._repeatDelay = this.vars.repeatDelay || 0;
                    this._dirty = true
                },
                c = function(g) {
                    return g.jquery || g.length && g[0] && g[0].nodeType && g[0].style
                },
                e = b.prototype = j.to({}, 0.1, {}),
                p = [];
            b.version = "1.9.7";
            e.constructor = b;
            e.kill()._gc =
                false;
            b.killTweensOf = b.killDelayedCallsTo = j.killTweensOf;
            b.getTweensOf = j.getTweensOf;
            b.ticker = j.ticker;
            e.invalidate = function() {
                this._yoyo = this.vars.yoyo === true;
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                this._uncache(true);
                return j.prototype.invalidate.call(this)
            };
            e.updateTo = function(g, v) {
                var d = this.ratio,
                    n;
                if (v && this.timeline && this._startTime < this._timeline._time) {
                    this._startTime = this._timeline._time;
                    this._uncache(false);
                    this._gc ? this._enabled(true, false) : this._timeline.insert(this,
                        this._startTime - this._delay)
                }
                for (n in g) this.vars[n] = g[n];
                if (this._initted)
                    if (v) this._initted = false;
                    else {
                        this._notifyPluginsOfEnabled && this._firstPT && j._onPluginEvent("_onDisable", this);
                        if (this._time / this._duration > 0.998) {
                            d = this._time;
                            this.render(0, true, false);
                            this._initted = false;
                            this.render(d, true, false)
                        } else if (this._time > 0) {
                            this._initted = false;
                            this._init();
                            d = 1 / (1 - d);
                            n = this._firstPT;
                            for (var u; n;) {
                                u = n.s + n.c;
                                n.c *= d;
                                n.s = u - n.c;
                                n = n._next
                            }
                        }
                    }
                return this
            };
            e.render = function(g, v, d) {
                var n = !this._dirty ? this._totalDuration :
                    this.totalDuration(),
                    u = this._time,
                    B = this._totalTime,
                    E = this._cycle,
                    H, G, P, K;
                if (g >= n) {
                    this._totalTime = n;
                    this._cycle = this._repeat;
                    if (this._yoyo && (this._cycle & 1) !== 0) {
                        this._time = 0;
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0
                    } else {
                        this._time = this._duration;
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1
                    }
                    if (!this._reversed) {
                        H = true;
                        G = "onComplete"
                    }
                    if (this._duration === 0) {
                        if (g === 0 || this._rawPrevTime < 0)
                            if (this._rawPrevTime !== g) {
                                d = true;
                                if (this._rawPrevTime > 0) {
                                    G = "onReverseComplete";
                                    if (v) g = -1
                                }
                            }
                        this._rawPrevTime =
                            g
                    }
                } else if (g < 1.0E-7) {
                    this._totalTime = this._time = this._cycle = 0;
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
                    if (B !== 0 || this._duration === 0 && this._rawPrevTime > 0) {
                        G = "onReverseComplete";
                        H = this._reversed
                    }
                    if (g < 0) {
                        this._active = false;
                        if (this._duration === 0) {
                            if (this._rawPrevTime >= 0) d = true;
                            this._rawPrevTime = g
                        }
                    } else this._initted || (d = true)
                } else {
                    this._totalTime = this._time = g;
                    if (this._repeat !== 0) {
                        n = this._duration + this._repeatDelay;
                        this._cycle = this._totalTime / n >> 0;
                        this._cycle !== 0 && this._cycle === this._totalTime /
                            n && this._cycle--;
                        this._time = this._totalTime - this._cycle * n;
                        if (this._yoyo)
                            if ((this._cycle & 1) !== 0) this._time = this._duration - this._time;
                        if (this._time > this._duration) this._time = this._duration;
                        else if (this._time < 0) this._time = 0
                    }
                    if (this._easeType) {
                        n = this._time / this._duration;
                        P = this._easeType;
                        K = this._easePower;
                        if (P === 1 || P === 3 && n >= 0.5) n = 1 - n;
                        if (P === 3) n *= 2;
                        if (K === 1) n *= n;
                        else if (K === 2) n *= n * n;
                        else if (K === 3) n *= n * n * n;
                        else if (K === 4) n *= n * n * n * n;
                        this.ratio = P === 1 ? 1 - n : P === 2 ? n : this._time / this._duration < 0.5 ? n / 2 : 1 - n / 2
                    } else this.ratio =
                        this._ease.getRatio(this._time / this._duration)
                }
                if (u === this._time && !d) {
                    if (B !== this._totalTime)
                        if (this._onUpdate) v || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || p)
                } else {
                    if (!this._initted) {
                        this._init();
                        if (!this._initted) return;
                        if (this._time && !H) this.ratio = this._ease.getRatio(this._time / this._duration);
                        else if (H && this._ease._calcEnd) this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1)
                    }
                    if (!this._active)
                        if (!this._paused) this._active = true;
                    if (B === 0) {
                        if (this._startAt)
                            if (g >= 0) this._startAt.render(g,
                                v, d);
                            else G || (G = "_dummyGS");
                        if (this.vars.onStart)
                            if (this._totalTime !== 0 || this._duration === 0) v || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || p)
                    }
                    for (u = this._firstPT; u;) {
                        if (u.f) u.t[u.p](u.c * this.ratio + u.s);
                        else {
                            B = u.c * this.ratio + u.s;
                            if (u.p == "x") u.t.setX(B);
                            else if (u.p == "y") u.t.setY(B);
                            else if (u.p == "w") u.t.setWidth(B);
                            else if (u.p == "h") u.t.setHeight(B);
                            else if (u.p == "alpha") u.t.setAlpha(B);
                            else u.t[u.p] = B
                        }
                        u = u._next
                    }
                    if (this._onUpdate) {
                        g < 0 && this._startAt && this._startAt.render(g,
                            v, d);
                        v || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || p)
                    }
                    if (this._cycle !== E)
                        if (!v)
                            if (!this._gc)
                                if (this.vars.onRepeat) this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || p);
                    if (G)
                        if (!this._gc) {
                            g < 0 && this._startAt && !this._onUpdate && this._startAt.render(g, v, d);
                            if (H) {
                                this._timeline.autoRemoveChildren && this._enabled(false, false);
                                this._active = false
                            }
                            if (!v && this.vars[G]) this.vars[G].apply(this.vars[G + "Scope"] || this, this.vars[G + "Params"] || p)
                        }
                }
            };
            b.to =
                function(g, v, d) {
                    return new b(g, v, d)
                };
            b.from = function(g, v, d) {
                d.runBackwards = true;
                d.immediateRender = d.immediateRender != false;
                return new b(g, v, d)
            };
            b.fromTo = function(g, v, d, n) {
                n.startAt = d;
                n.immediateRender = n.immediateRender != false && d.immediateRender != false;
                return new b(g, v, n)
            };
            b.staggerTo = b.allTo = function(g, v, d, n, u, B, E) {
                n = n || 0;
                var H = d.delay || 0,
                    G = [],
                    P = function() {
                        if (d.onComplete) d.onComplete.apply(d.onCompleteScope || this, d.onCompleteParams || p);
                        u.apply(E || this, B || p)
                    },
                    K, T, V, R;
                if (!(g instanceof Array)) {
                    if (typeof g ===
                        "string") g = j.selector(g) || g;
                    if (c(g)) g = a.call(g, 0)
                }
                K = g.length;
                for (V = 0; V < K; V++) {
                    T = {};
                    for (R in d) T[R] = d[R];
                    T.delay = H;
                    if (V === K - 1 && u) T.onComplete = P;
                    G[V] = new b(g[V], v, T);
                    H += n
                }
                return G
            };
            b.staggerFrom = b.allFrom = function(g, v, d, n, u, B, E) {
                d.runBackwards = true;
                d.immediateRender = d.immediateRender != false;
                return b.staggerTo(g, v, d, n, u, B, E)
            };
            b.staggerFromTo = b.allFromTo = function(g, v, d, n, u, B, E, H) {
                n.startAt = d;
                n.immediateRender = n.immediateRender != false && d.immediateRender != false;
                return b.staggerTo(g, v, n, u, B, E, H)
            };
            b.delayedCall =
                function(g, v, d, n, u) {
                    return new b(v, 0, {
                        delay: g,
                        onComplete: v,
                        onCompleteParams: d,
                        onCompleteScope: n,
                        onReverseComplete: v,
                        onReverseCompleteParams: d,
                        onReverseCompleteScope: n,
                        immediateRender: false,
                        useFrames: u,
                        overwrite: 0
                    })
                };
            b.set = function(g, v) {
                return new b(g, 0, v)
            };
            b.isTweening = function(g) {
                g = j.getTweensOf(g);
                for (var v = g.length, d; --v > -1;) {
                    d = g[v];
                    if (d._active || d._startTime === d._timeline._time && d._timeline._active) return true
                }
                return false
            };
            var f = function(g, v) {
                    for (var d = [], n = 0, u = g._first; u;) {
                        if (u instanceof j) d[n++] =
                            u;
                        else {
                            if (v) d[n++] = u;
                            d = d.concat(f(u, v));
                            n = d.length
                        }
                        u = u._next
                    }
                    return d
                },
                h = b.getAllTweens = function(g) {
                    return f(q._rootTimeline, g).concat(f(q._rootFramesTimeline, g))
                };
            b.killAll = function(g, v, d, n) {
                if (v == null) v = true;
                if (d == null) d = true;
                var u = h(n != false),
                    B = u.length;
                n = v && d && n;
                var E, H, G;
                for (G = 0; G < B; G++) {
                    H = u[G];
                    if (n || H instanceof m || (E = H.target === H.vars.onComplete) && d || v && !E) g ? H.totalTime(H.totalDuration()) : H._enabled(false, false)
                }
            };
            b.killChildTweensOf = function(g, v) {
                if (g != null) {
                    var d = j._tweenLookup,
                        n, u, B;
                    if (typeof g ===
                        "string") g = j.selector(g) || g;
                    if (c(g)) g = a(g, 0);
                    if (g instanceof Array)
                        for (d = g.length; --d > -1;) b.killChildTweensOf(g[d], v);
                    else {
                        n = [];
                        for (B in d)
                            for (u = d[B].target.parentNode; u;) {
                                if (u === g) n = n.concat(d[B].tweens);
                                u = u.parentNode
                            }
                        u = n.length;
                        for (d = 0; d < u; d++) {
                            v && n[d].totalTime(n[d].totalDuration());
                            n[d]._enabled(false, false)
                        }
                    }
                }
            };
            var t = function(g, v, d, n) {
                if (v === undefined) v = true;
                if (d === undefined) d = true;
                var u = h(n);
                n = v && d && n;
                for (var B = u.length, E, H; --B > -1;) {
                    H = u[B];
                    if (n || H instanceof m || (E = H.target === H.vars.onComplete) &&
                        d || v && !E) H.paused(g)
                }
            };
            b.pauseAll = function(g, v, d) {
                t(true, g, v, d)
            };
            b.resumeAll = function(g, v, d) {
                t(false, g, v, d)
            };
            e.progress = function(g) {
                return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - g : g) + this._cycle * (this._duration + this._repeatDelay), false)
            };
            e.totalProgress = function(g) {
                return !arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * g, false)
            };
            e.time = function(g, v) {
                if (!arguments.length) return this._time;
                this._dirty && this.totalDuration();
                if (g > this._duration) g = this._duration;
                if (this._yoyo && (this._cycle & 1) !== 0) g = this._duration - g + this._cycle * (this._duration + this._repeatDelay);
                else if (this._repeat !== 0) g += this._cycle * (this._duration + this._repeatDelay);
                return this.totalTime(g, v)
            };
            e.duration = function(g) {
                if (!arguments.length) return this._duration;
                return q.prototype.duration.call(this, g)
            };
            e.totalDuration = function(g) {
                if (!arguments.length) {
                    if (this._dirty) {
                        this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration *
                            (this._repeat + 1) + this._repeatDelay * this._repeat;
                        this._dirty = false
                    }
                    return this._totalDuration
                }
                return this._repeat === -1 ? this : this.duration((g - this._repeat * this._repeatDelay) / (this._repeat + 1))
            };
            e.repeat = function(g) {
                if (!arguments.length) return this._repeat;
                this._repeat = g;
                return this._uncache(true)
            };
            e.repeatDelay = function(g) {
                if (!arguments.length) return this._repeatDelay;
                this._repeatDelay = g;
                return this._uncache(true)
            };
            e.yoyo = function(g) {
                if (!arguments.length) return this._yoyo;
                this._yoyo = g;
                return this
            };
            return b
        },
        true);
    window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(q, m, j) {
        var a = function(h) {
                m.call(this, h);
                this._labels = {};
                this.autoRemoveChildren = this.vars.autoRemoveChildren === true;
                this.smoothChildTiming = this.vars.smoothChildTiming === true;
                this._sortChildren = true;
                this._onUpdate = this.vars.onUpdate;
                h = this.vars;
                for (var t = b.length, g, v; --t > -1;)
                    if (v = h[b[t]])
                        for (g = v.length; --g > -1;)
                            if (v[g] === "{self}") {
                                v = h[b[t]] = v.concat();
                                v[g] = this
                            }
                h.tweens instanceof Array && this.add(h.tweens,
                    0, h.align, h.stagger)
            },
            b = ["onStartParams", "onUpdateParams", "onCompleteParams", "onReverseCompleteParams", "onRepeatParams"],
            c = [],
            e = function(h) {
                var t = {},
                    g;
                for (g in h) t[g] = h[g];
                return t
            },
            p = c.slice,
            f = a.prototype = new m;
        a.version = "1.9.7";
        f.constructor = a;
        f.kill()._gc = false;
        f.to = function(h, t, g, v) {
            return t ? this.add(new j(h, t, g), v) : this.set(h, g, v)
        };
        f.from = function(h, t, g, v) {
            return this.add(j.from(h, t, g), v)
        };
        f.fromTo = function(h, t, g, v, d) {
            return t ? this.add(j.fromTo(h, t, g, v), d) : this.set(h, v, d)
        };
        f.staggerTo = function(h,
            t, g, v, d, n, u, B) {
            n = new a({
                onComplete: n,
                onCompleteParams: u,
                onCompleteScope: B
            });
            if (typeof h === "string") h = j.selector(h) || h;
            if (!(h instanceof Array) && h.length && h[0] && h[0].nodeType && h[0].style) h = p.call(h, 0);
            v = v || 0;
            for (u = 0; u < h.length; u++) {
                if (g.startAt) g.startAt = e(g.startAt);
                n.to(h[u], t, e(g), u * v)
            }
            return this.add(n, d)
        };
        f.staggerFrom = function(h, t, g, v, d, n, u, B) {
            g.immediateRender = g.immediateRender != false;
            g.runBackwards = true;
            return this.staggerTo(h, t, g, v, d, n, u, B)
        };
        f.staggerFromTo = function(h, t, g, v, d, n, u, B, E) {
            v.startAt =
                g;
            v.immediateRender = v.immediateRender != false && g.immediateRender != false;
            return this.staggerTo(h, t, v, d, n, u, B, E)
        };
        f.call = function(h, t, g, v) {
            return this.add(j.delayedCall(0, h, t, g), v)
        };
        f.set = function(h, t, g) {
            g = this._parseTimeOrLabel(g, 0, true);
            if (t.immediateRender == null) t.immediateRender = g === this._time && !this._paused;
            return this.add(new j(h, 0, t), g)
        };
        a.exportRoot = function(h, t) {
            h = h || {};
            if (h.smoothChildTiming == null) h.smoothChildTiming = true;
            var g = new a(h),
                v = g._timeline,
                d, n;
            if (t == null) t = true;
            v._remove(g, true);
            g._startTime = 0;
            g._rawPrevTime = g._time = g._totalTime = v._time;
            for (d = v._first; d;) {
                n = d._next;
                if (!t || !(d instanceof j && d.target === d.vars.onComplete)) g.add(d, d._startTime - d._delay);
                d = n
            }
            v.add(g, 0);
            return g
        };
        f.add = function(h, t, g, v) {
            var d, n, u;
            if (typeof t !== "number") t = this._parseTimeOrLabel(t, 0, true, h);
            if (!(h instanceof q))
                if (h instanceof Array) {
                    g = g || "normal";
                    v = v || 0;
                    d = h.length;
                    for (n = 0; n < d; n++) {
                        if ((u = h[n]) instanceof Array) u = new a({
                            tweens: u
                        });
                        this.add(u, t);
                        if (typeof u !== "string" && typeof u !== "function")
                            if (g ===
                                "sequence") t = u._startTime + u.totalDuration() / u._timeScale;
                            else if (g === "start") u._startTime -= u.delay();
                        t += v
                    }
                    return this._uncache(true)
                } else if (typeof h === "string") return this.addLabel(h, t);
            else if (typeof h === "function") h = j.delayedCall(0, h);
            else throw "Cannot add " + h + " into the timeline; it is neither a tween, timeline, function, nor a string.";
            m.prototype.add.call(this, h, t);
            if (this._gc)
                if (!this._paused)
                    if (this._time === this._duration)
                        if (this._time < this.duration())
                            for (h = this; h._gc && h._timeline;) {
                                h._timeline.smoothChildTiming ?
                                    h.totalTime(h._totalTime, true) : h._enabled(true, false);
                                h = h._timeline
                            }
                        return this
        };
        f.remove = function(h) {
            if (h instanceof q) return this._remove(h, false);
            else if (h instanceof Array) {
                for (var t = h.length; --t > -1;) this.remove(h[t]);
                return this
            } else if (typeof h === "string") return this.removeLabel(h);
            return this.kill(null, h)
        };
        f.append = function(h, t) {
            return this.add(h, this._parseTimeOrLabel(null, t, true, h))
        };
        f.insert = f.insertMultiple = function(h, t, g, v) {
            return this.add(h, t || 0, g, v)
        };
        f.appendMultiple = function(h, t, g,
            v) {
            return this.add(h, this._parseTimeOrLabel(null, t, true, h), g, v)
        };
        f.addLabel = function(h, t) {
            this._labels[h] = this._parseTimeOrLabel(t);
            return this
        };
        f.removeLabel = function(h) {
            delete this._labels[h];
            return this
        };
        f.getLabelTime = function(h) {
            return this._labels[h] != null ? this._labels[h] : -1
        };
        f._parseTimeOrLabel = function(h, t, g, v) {
            var d;
            if (v instanceof q && v.timeline === this) this.remove(v);
            else if (v instanceof Array)
                for (d = v.length; --d > -1;) v[d] instanceof q && v[d].timeline === this && this.remove(v[d]);
            if (typeof t ===
                "string") return this._parseTimeOrLabel(t, g && typeof h === "number" && this._labels[t] == null ? h - this.duration() : 0, g);
            t = t || 0;
            if (typeof h === "string" && (isNaN(h) || this._labels[h] != null)) {
                d = h.indexOf("=");
                if (d === -1) {
                    if (this._labels[h] == null) return g ? this._labels[h] = this.duration() + t : t;
                    return this._labels[h] + t
                }
                t = parseInt(h.charAt(d - 1) + "1", 10) * Number(h.substr(d + 1));
                h = d > 1 ? this._parseTimeOrLabel(h.substr(0, d - 1), 0, g) : this.duration()
            } else if (h == null) h = this.duration();
            return Number(h) + t
        };
        f.seek = function(h, t) {
            return this.totalTime(typeof h ===
                "number" ? h : this._parseTimeOrLabel(h), t !== false)
        };
        f.stop = function() {
            return this.paused(true)
        };
        f.gotoAndPlay = function(h, t) {
            return this.play(h, t)
        };
        f.gotoAndStop = function(h, t) {
            return this.pause(h, t)
        };
        f.render = function(h, t, g) {
            this._gc && this._enabled(true, false);
            this._active = !this._paused;
            var v = !this._dirty ? this._totalDuration : this.totalDuration(),
                d = this._time,
                n = this._startTime,
                u = this._timeScale,
                B = this._paused,
                E, H, G, P;
            if (h >= v) {
                this._totalTime = this._time = v;
                if (!this._reversed)
                    if (!this._hasPausedChild()) {
                        H =
                            true;
                        P = "onComplete";
                        if (this._duration === 0)
                            if (h === 0 || this._rawPrevTime < 0)
                                if (this._rawPrevTime !== h && this._first) {
                                    E = true;
                                    if (this._rawPrevTime > 0) P = "onReverseComplete"
                                }
                    }
                this._rawPrevTime = h;
                h = v + 1.0E-6
            } else if (h < 1.0E-7) {
                this._totalTime = this._time = 0;
                if (d !== 0 || this._duration === 0 && this._rawPrevTime > 0) {
                    P = "onReverseComplete";
                    H = this._reversed
                }
                if (h < 0) {
                    this._active = false;
                    if (this._duration === 0)
                        if (this._rawPrevTime >= 0 && this._first) E = true
                } else this._initted || (E = true);
                this._rawPrevTime = h;
                h = 0
            } else this._totalTime = this._time =
                this._rawPrevTime = h;
            if (!((this._time === d || !this._first) && !g && !E)) {
                if (!this._initted) this._initted = true;
                if (d === 0)
                    if (this.vars.onStart)
                        if (this._time !== 0) t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c);
                if (this._time >= d)
                    for (E = this._first; E;) {
                        G = E._next;
                        if (this._paused && !B) break;
                        else if (E._active || E._startTime <= this._time && !E._paused && !E._gc) E._reversed ? E.render((!E._dirty ? E._totalDuration : E.totalDuration()) - (h - E._startTime) * E._timeScale, t, g) : E.render((h - E._startTime) *
                            E._timeScale, t, g);
                        E = G
                    } else
                        for (E = this._last; E;) {
                            G = E._prev;
                            if (this._paused && !B) break;
                            else if (E._active || E._startTime <= d && !E._paused && !E._gc) E._reversed ? E.render((!E._dirty ? E._totalDuration : E.totalDuration()) - (h - E._startTime) * E._timeScale, t, g) : E.render((h - E._startTime) * E._timeScale, t, g);
                            E = G
                        }
                if (this._onUpdate) t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c);
                if (P)
                    if (!this._gc)
                        if (n === this._startTime || u !== this._timeScale)
                            if (this._time === 0 || v >= this.totalDuration()) {
                                if (H) {
                                    this._timeline.autoRemoveChildren &&
                                        this._enabled(false, false);
                                    this._active = false
                                }
                                if (!t && this.vars[P]) this.vars[P].apply(this.vars[P + "Scope"] || this, this.vars[P + "Params"] || c)
                            }
            }
        };
        f._hasPausedChild = function() {
            for (var h = this._first; h;) {
                if (h._paused || h instanceof a && h._hasPausedChild()) return true;
                h = h._next
            }
            return false
        };
        f.getChildren = function(h, t, g, v) {
            v = v || -9999999999;
            for (var d = [], n = this._first, u = 0; n;) {
                if (!(n._startTime < v))
                    if (n instanceof j) {
                        if (t !== false) d[u++] = n
                    } else {
                        if (g !== false) d[u++] = n;
                        if (h !== false) {
                            d = d.concat(n.getChildren(true, t,
                                g));
                            u = d.length
                        }
                    }
                n = n._next
            }
            return d
        };
        f.getTweensOf = function(h, t) {
            for (var g = j.getTweensOf(h), v = g.length, d = [], n = 0; --v > -1;)
                if (g[v].timeline === this || t && this._contains(g[v])) d[n++] = g[v];
            return d
        };
        f._contains = function(h) {
            for (h = h.timeline; h;) {
                if (h === this) return true;
                h = h.timeline
            }
            return false
        };
        f.shiftChildren = function(h, t, g) {
            g = g || 0;
            for (var v = this._first, d = this._labels, n; v;) {
                if (v._startTime >= g) v._startTime += h;
                v = v._next
            }
            if (t)
                for (n in d)
                    if (d[n] >= g) d[n] += h;
            return this._uncache(true)
        };
        f._kill = function(h, t) {
            if (!h &&
                !t) return this._enabled(false, false);
            for (var g = !t ? this.getChildren(true, true, false) : this.getTweensOf(t), v = g.length, d = false; --v > -1;)
                if (g[v]._kill(h, t)) d = true;
            return d
        };
        f.clear = function(h) {
            var t = this.getChildren(false, true, true),
                g = t.length;
            for (this._time = this._totalTime = 0; --g > -1;) t[g]._enabled(false, false);
            if (h !== false) this._labels = {};
            return this._uncache(true)
        };
        f.invalidate = function() {
            for (var h = this._first; h;) {
                h.invalidate();
                h = h._next
            }
            return this
        };
        f._enabled = function(h, t) {
            if (h === this._gc)
                for (var g =
                        this._first; g;) {
                    g._enabled(h, true);
                    g = g._next
                }
            return m.prototype._enabled.call(this, h, t)
        };
        f.progress = function(h) {
            return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * h, false)
        };
        f.duration = function(h) {
            if (!arguments.length) {
                this._dirty && this.totalDuration();
                return this._duration
            }
            this.duration() !== 0 && h !== 0 && this.timeScale(this._duration / h);
            return this
        };
        f.totalDuration = function(h) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var t = 0, g = this._last, v = 999999999999, d; g;) {
                        d = g._prev;
                        g._dirty && g.totalDuration();
                        if (g._startTime > v && this._sortChildren && !g._paused) this.add(g, g._startTime - g._delay);
                        else v = g._startTime;
                        if (g._startTime < 0 && !g._paused) {
                            t -= g._startTime;
                            if (this._timeline.smoothChildTiming) this._startTime += g._startTime / this._timeScale;
                            this.shiftChildren(-g._startTime, false, -9999999999);
                            v = 0
                        }
                        g = g._startTime + g._totalDuration / g._timeScale;
                        if (g > t) t = g;
                        g = d
                    }
                    this._duration = this._totalDuration = t;
                    this._dirty = false
                }
                return this._totalDuration
            }
            this.totalDuration() !== 0 && h !== 0 && this.timeScale(this._totalDuration /
                h);
            return this
        };
        f.usesFrames = function() {
            for (var h = this._timeline; h._timeline;) h = h._timeline;
            return h === q._rootFramesTimeline
        };
        f.rawTime = function() {
            return this._paused || this._totalTime !== 0 && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        };
        return a
    }, true);
    window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(q, m, j) {
        var a = function(e) {
                q.call(this, e);
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay ||
                    0;
                this._cycle = 0;
                this._yoyo = this.vars.yoyo === true;
                this._dirty = true
            },
            b = [],
            c = new j(null, null, 1, 0);
        j = a.prototype = new q;
        j.constructor = a;
        j.kill()._gc = false;
        a.version = "1.9.7";
        j.invalidate = function() {
            this._yoyo = this.vars.yoyo === true;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(true);
            return q.prototype.invalidate.call(this)
        };
        j.addCallback = function(e, p, f, h) {
            return this.add(m.delayedCall(0, e, f, h), p)
        };
        j.removeCallback = function(e, p) {
            if (p == null) this._kill(null, e);
            else
                for (var f =
                        this.getTweensOf(e, false), h = f.length, t = this._parseTimeOrLabel(p); --h > -1;) f[h]._startTime === t && f[h]._enabled(false, false);
            return this
        };
        j.tweenTo = function(e, p) {
            p = p || {};
            var f = {
                    ease: c,
                    overwrite: 2,
                    useFrames: this.usesFrames(),
                    immediateRender: false
                },
                h, t;
            for (h in p) f[h] = p[h];
            f.time = this._parseTimeOrLabel(e);
            t = new m(this, Math.abs(Number(f.time) - this._time) / this._timeScale || 0.0010, f);
            f.onStart = function() {
                t.target.paused(true);
                t.vars.time !== t.target.time() && t.duration(Math.abs(t.vars.time - t.target.time()) / t.target._timeScale);
                if (p.onStart) p.onStart.apply(p.onStartScope || t, p.onStartParams || b)
            };
            return t
        };
        j.tweenFromTo = function(e, p, f) {
            f = f || {};
            e = this._parseTimeOrLabel(e);
            f.startAt = {
                onComplete: this.seek,
                onCompleteParams: [e],
                onCompleteScope: this
            };
            f.immediateRender = f.immediateRender !== false;
            p = this.tweenTo(p, f);
            return p.duration(Math.abs(p.vars.time - e) / this._timeScale || 0.0010)
        };
        j.render = function(e, p, f) {
            this._gc && this._enabled(true, false);
            this._active = !this._paused;
            var h = !this._dirty ? this._totalDuration : this.totalDuration(),
                t =
                this._duration,
                g = this._time,
                v = this._totalTime,
                d = this._startTime,
                n = this._timeScale,
                u = this._rawPrevTime,
                B = this._paused,
                E = this._cycle,
                H, G, P;
            if (e >= h) {
                if (!this._locked) {
                    this._totalTime = h;
                    this._cycle = this._repeat
                }
                if (!this._reversed)
                    if (!this._hasPausedChild()) {
                        H = true;
                        G = "onComplete";
                        if (t === 0)
                            if (e === 0 || this._rawPrevTime < 0)
                                if (this._rawPrevTime !== e && this._first) {
                                    P = true;
                                    if (this._rawPrevTime > 0) G = "onReverseComplete"
                                }
                    }
                this._rawPrevTime = e;
                if (this._yoyo && (this._cycle & 1) !== 0) this._time = e = 0;
                else {
                    this._time = t;
                    e = t + 1.0E-6
                }
            } else if (e <
                1.0E-7) {
                if (!this._locked) this._totalTime = this._cycle = 0;
                this._time = 0;
                if (g !== 0 || t === 0 && this._rawPrevTime > 0 && !this._locked) {
                    G = "onReverseComplete";
                    H = this._reversed
                }
                if (e < 0) {
                    this._active = false;
                    if (t === 0)
                        if (this._rawPrevTime >= 0 && this._first) P = true
                } else this._initted || (P = true);
                this._rawPrevTime = e;
                e = 0
            } else {
                this._time = this._rawPrevTime = e;
                if (!this._locked) {
                    this._totalTime = e;
                    if (this._repeat !== 0) {
                        e = t + this._repeatDelay;
                        this._cycle = this._totalTime / e >> 0;
                        this._cycle !== 0 && this._cycle === this._totalTime / e && this._cycle--;
                        this._time = this._totalTime - this._cycle * e;
                        if (this._yoyo)
                            if ((this._cycle & 1) !== 0) this._time = t - this._time;
                        if (this._time > t) {
                            this._time = t;
                            e = t + 1.0E-6
                        } else if (this._time < 0) this._time = e = 0;
                        else e = this._time
                    }
                }
            }
            if (this._cycle !== E)
                if (!this._locked) {
                    var K = this._yoyo && (E & 1) !== 0,
                        T = K === (this._yoyo && (this._cycle & 1) !== 0),
                        V = this._totalTime,
                        R = this._cycle,
                        M = this._rawPrevTime,
                        X = this._time;
                    this._totalTime = E * t;
                    if (this._cycle < E) K = !K;
                    else this._totalTime += t;
                    this._time = g;
                    this._rawPrevTime = t === 0 ? u - 1.0E-5 : u;
                    this._cycle = E;
                    this._locked =
                        true;
                    g = K ? 0 : t;
                    this.render(g, p, t === 0);
                    if (!p)
                        if (!this._gc)
                            if (this.vars.onRepeat) this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || b);
                    if (T) {
                        g = K ? t + 1.0E-6 : -1.0E-6;
                        this.render(g, true, false)
                    }
                    this._time = X;
                    this._totalTime = V;
                    this._cycle = R;
                    this._rawPrevTime = M;
                    this._locked = false
                }
            if ((this._time === g || !this._first) && !f && !P) {
                if (v !== this._totalTime)
                    if (this._onUpdate) p || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || b)
            } else {
                if (!this._initted) this._initted =
                    true;
                if (v === 0)
                    if (this.vars.onStart)
                        if (this._totalTime !== 0) p || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || b);
                if (this._time >= g)
                    for (t = this._first; t;) {
                        v = t._next;
                        if (this._paused && !B) break;
                        else if (t._active || t._startTime <= this._time && !t._paused && !t._gc) t._reversed ? t.render((!t._dirty ? t._totalDuration : t.totalDuration()) - (e - t._startTime) * t._timeScale, p, f) : t.render((e - t._startTime) * t._timeScale, p, f);
                        t = v
                    } else
                        for (t = this._last; t;) {
                            v = t._prev;
                            if (this._paused && !B) break;
                            else if (t._active ||
                                t._startTime <= g && !t._paused && !t._gc) t._reversed ? t.render((!t._dirty ? t._totalDuration : t.totalDuration()) - (e - t._startTime) * t._timeScale, p, f) : t.render((e - t._startTime) * t._timeScale, p, f);
                            t = v
                        }
                if (this._onUpdate) p || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || b);
                if (G)
                    if (!this._locked)
                        if (!this._gc)
                            if (d === this._startTime || n !== this._timeScale)
                                if (this._time === 0 || h >= this.totalDuration()) {
                                    if (H) {
                                        this._timeline.autoRemoveChildren && this._enabled(false, false);
                                        this._active = false
                                    }
                                    if (!p &&
                                        this.vars[G]) this.vars[G].apply(this.vars[G + "Scope"] || this, this.vars[G + "Params"] || b)
                                }
            }
        };
        j.getActive = function(e, p, f) {
            if (e == null) e = true;
            if (p == null) p = true;
            if (f == null) f = false;
            var h = [];
            e = this.getChildren(e, p, f);
            p = 0;
            f = e.length;
            var t, g;
            for (t = 0; t < f; t++) {
                g = e[t];
                if (!g._paused)
                    if (g._timeline._time >= g._startTime)
                        if (g._timeline._time < g._startTime + g._totalDuration / g._timeScale) {
                            var v;
                            a: {
                                for (v = g._timeline; v;) {
                                    if (v._paused) {
                                        v = true;
                                        break a
                                    }
                                    v = v._timeline
                                }
                                v = false
                            }
                            v || (h[p++] = g)
                        }
            }
            return h
        };
        j.getLabelAfter = function(e) {
            if (!e)
                if (e !==
                    0) e = this._time;
            var p = this.getLabelsArray(),
                f = p.length,
                h;
            for (h = 0; h < f; h++)
                if (p[h].time > e) return p[h].name;
            return null
        };
        j.getLabelBefore = function(e) {
            if (e == null) e = this._time;
            for (var p = this.getLabelsArray(), f = p.length; --f > -1;)
                if (p[f].time < e) return p[f].name;
            return null
        };
        j.getLabelsArray = function() {
            var e = [],
                p = 0,
                f;
            for (f in this._labels) e[p++] = {
                time: this._labels[f],
                name: f
            };
            e.sort(function(h, t) {
                return h.time - t.time
            });
            return e
        };
        j.progress = function(e) {
            return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() *
                (this._yoyo && (this._cycle & 1) !== 0 ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), false)
        };
        j.totalProgress = function(e) {
            return !arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * e, false)
        };
        j.totalDuration = function(e) {
            if (!arguments.length) {
                if (this._dirty) {
                    q.prototype.totalDuration.call(this);
                    this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat
                }
                return this._totalDuration
            }
            return this._repeat === -1 ? this :
                this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1))
        };
        j.time = function(e, p) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            if (e > this._duration) e = this._duration;
            if (this._yoyo && (this._cycle & 1) !== 0) e = this._duration - e + this._cycle * (this._duration + this._repeatDelay);
            else if (this._repeat !== 0) e += this._cycle * (this._duration + this._repeatDelay);
            return this.totalTime(e, p)
        };
        j.repeat = function(e) {
            if (!arguments.length) return this._repeat;
            this._repeat = e;
            return this._uncache(true)
        };
        j.repeatDelay = function(e) {
            if (!arguments.length) return this._repeatDelay;
            this._repeatDelay = e;
            return this._uncache(true)
        };
        j.yoyo = function(e) {
            if (!arguments.length) return this._yoyo;
            this._yoyo = e;
            return this
        };
        j.currentLabel = function(e) {
            if (!arguments.length) return this.getLabelBefore(this._time + 1.0E-8);
            return this.seek(e, true)
        };
        return a
    }, true);
    (function() {
        var q = 180 / Math.PI,
            m = Math.PI / 180,
            j = [],
            a = [],
            b = [],
            c = {},
            e = function(g, v, d, n) {
                this.a = g;
                this.b = v;
                this.c = d;
                this.d = n;
                this.da = n - g;
                this.ca = d - g;
                this.ba = v - g
            },
            p = function(g,
                v, d, n) {
                var u = {
                        a: g
                    },
                    B = {},
                    E = {},
                    H = {
                        c: n
                    },
                    G = (g + v) / 2,
                    P = (v + d) / 2;
                d = (d + n) / 2;
                v = (G + P) / 2;
                P = (P + d) / 2;
                var K = (P - v) / 8;
                u.b = G + (g - G) / 4;
                B.b = v + K;
                u.c = B.a = (u.b + B.b) / 2;
                B.c = E.a = (v + P) / 2;
                E.b = P - K;
                H.b = d + (n - d) / 4;
                E.c = H.a = (E.b + H.b) / 2;
                return [u, B, E, H]
            },
            f = function(g, v, d, n, u, B) {
                var E = {},
                    H = [],
                    G = B || g[0],
                    P, K, T, V;
                u = typeof u === "string" ? "," + u + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,";
                if (v == null) v = 1;
                for (K in g[0]) H.push(K);
                if (g.length > 1) {
                    V = g[g.length - 1];
                    T = true;
                    for (P = H.length; --P > -1;) {
                        K = H[P];
                        if (Math.abs(G[K] - V[K]) > 0.05) {
                            T = false;
                            break
                        }
                    }
                    if (T) {
                        g = g.concat();
                        B && g.unshift(B);
                        g.push(g[1]);
                        B = g[g.length - 3]
                    }
                }
                j.length = a.length = b.length = 0;
                for (P = H.length; --P > -1;) {
                    K = H[P];
                    c[K] = u.indexOf("," + K + ",") !== -1;
                    G = E;
                    V = K;
                    var R;
                    R = g;
                    var M = K,
                        X = c[K],
                        ba = B,
                        ha = [],
                        ca = void 0,
                        W = void 0,
                        Y = void 0,
                        fa = void 0,
                        ga = void 0;
                    if (ba) {
                        R = [ba].concat(R);
                        for (W = R.length; --W > -1;)
                            if (typeof(ca = R[W][M]) === "string")
                                if (ca.charAt(1) === "=") R[W][M] = ba[M] + Number(ca.charAt(0) + ca.substr(2))
                    }
                    ca =
                        R.length - 2;
                    if (ca < 0) ha[0] = new e(R[0][M], 0, 0, R[ca < -1 ? 0 : 1][M]);
                    else {
                        for (W = 0; W < ca; W++) {
                            Y = R[W][M];
                            fa = R[W + 1][M];
                            ha[W] = new e(Y, 0, 0, fa);
                            if (X) {
                                ga = R[W + 2][M];
                                j[W] = (j[W] || 0) + (fa - Y) * (fa - Y);
                                a[W] = (a[W] || 0) + (ga - fa) * (ga - fa)
                            }
                        }
                        ha[W] = new e(R[W][M], 0, 0, R[W + 1][M])
                    }
                    R = ha;
                    G[V] = R
                }
                for (P = j.length; --P > -1;) {
                    j[P] = Math.sqrt(j[P]);
                    a[P] = Math.sqrt(a[P])
                }
                if (!n) {
                    for (P = H.length; --P > -1;)
                        if (c[K]) {
                            g = E[H[P]];
                            G = g.length - 1;
                            for (u = 0; u < G; u++) {
                                B = g[u + 1].da / a[u] + g[u].da / j[u];
                                b[u] = (b[u] || 0) + B * B
                            }
                        }
                    for (P = b.length; --P > -1;) b[P] = Math.sqrt(b[P])
                }
                P = H.length;
                for (u = d ? 4 : 1; --P > -1;) {
                    K = H[P];
                    B = g = E[K];
                    G = v;
                    V = d;
                    R = n;
                    K = c[K];
                    M = B.length - 1;
                    X = 0;
                    ba = B[0].a;
                    var oa = void 0,
                        xa = void 0,
                        ta = void 0;
                    for (ha = 0; ha < M; ha++) {
                        Y = B[X];
                        W = Y.a;
                        ca = Y.d;
                        ga = B[X + 1].d;
                        if (K) {
                            oa = j[ha];
                            xa = a[ha];
                            ta = (xa + oa) * G * 0.25 / (R ? 0.5 : b[ha] || 0.5);
                            fa = ca - (ca - W) * (R ? G * 0.5 : oa !== 0 ? ta / oa : 0);
                            ga = ca + (ga - ca) * (R ? G * 0.5 : xa !== 0 ? ta / xa : 0);
                            oa = ca - (fa + ((ga - fa) * (oa * 3 / (oa + xa) + 0.5) / 4 || 0))
                        } else {
                            fa = ca - (ca - W) * G * 0.5;
                            ga = ca + (ga - ca) * G * 0.5;
                            oa = ca - (fa + ga) / 2
                        }
                        fa += oa;
                        ga += oa;
                        Y.c = fa;
                        Y.b = ha !== 0 ? ba : ba = Y.a + (Y.c - Y.a) * 0.6;
                        Y.da = ca - W;
                        Y.ca = fa - W;
                        Y.ba = ba - W;
                        if (V) {
                            W =
                                p(W, ba, fa, ca);
                            B.splice(X, 1, W[0], W[1], W[2], W[3]);
                            X += 4
                        } else X++;
                        ba = ga
                    }
                    Y = B[X];
                    Y.b = ba;
                    Y.c = ba + (Y.d - ba) * 0.4;
                    Y.da = Y.d - Y.a;
                    Y.ca = Y.c - Y.a;
                    Y.ba = ba - Y.a;
                    if (V) {
                        W = p(Y.a, ba, Y.c, Y.d);
                        B.splice(X, 1, W[0], W[1], W[2], W[3])
                    }
                    if (T) {
                        g.splice(0, u);
                        g.splice(g.length - u, u)
                    }
                }
                return E
            },
            h = window._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                API: 2,
                global: true,
                init: function(g, v, d) {
                    this._target = g;
                    if (v instanceof Array) v = {
                        values: v
                    };
                    this._func = {};
                    this._round = {};
                    this._props = [];
                    this._timeRes = v.timeResolution == null ? 6 : parseInt(v.timeResolution,
                        10);
                    var n = v.values || [],
                        u = {},
                        B = n[0];
                    d = v.autoRotate || d.vars.orientToBezier;
                    var E, H, G;
                    this._autoRotate = d ? d instanceof Array ? d : [
                        ["x", "y", "rotation", d === true ? 0 : Number(d) || 0]
                    ] : null;
                    for (E in B) this._props.push(E);
                    for (B = this._props.length; --B > -1;) {
                        E = this._props[B];
                        this._overwriteProps.push(E);
                        d = this._func[E] = typeof g[E] === "function";
                        u[E] = !d ? parseFloat(g[E]) : g[E.indexOf("set") || typeof g["get" + E.substr(3)] !== "function" ? E : "get" + E.substr(3)]();
                        if (!G)
                            if (u[E] !== n[0][E]) G = u
                    }
                    if (v.type !== "cubic" && v.type !== "quadratic" &&
                        v.type !== "soft") u = f(n, isNaN(v.curviness) ? 1 : v.curviness, false, v.type === "thruBasic", v.correlate, G);
                    else {
                        d = (d = v.type) || "soft";
                        v = {};
                        G = d === "cubic" ? 3 : 2;
                        d = d === "soft";
                        B = [];
                        var P, K, T, V, R, M, X, ba, ha;
                        if (d && u) n = [u].concat(n);
                        if (n == null || n.length < G + 1) throw "invalid Bezier data";
                        for (K in n[0]) B.push(K);
                        for (M = B.length; --M > -1;) {
                            K = B[M];
                            v[K] = R = [];
                            ha = 0;
                            ba = n.length;
                            for (X = 0; X < ba; X++) {
                                P = u == null ? n[X][K] : typeof(T = n[X][K]) === "string" && T.charAt(1) === "=" ? u[K] + Number(T.charAt(0) + T.substr(2)) : Number(T);
                                if (d)
                                    if (X > 1)
                                        if (X < ba - 1) R[ha++] =
                                            (P + R[ha - 2]) / 2;
                                R[ha++] = P
                            }
                            ba = ha - G + 1;
                            for (X = ha = 0; X < ba; X += G) {
                                P = R[X];
                                K = R[X + 1];
                                T = R[X + 2];
                                V = G === 2 ? 0 : R[X + 3];
                                R[ha++] = T = G === 3 ? new e(P, K, T, V) : new e(P, (2 * K + P) / 3, (2 * K + T) / 3, T)
                            }
                            R.length = ha
                        }
                        u = v
                    }
                    this._beziers = u;
                    this._segCount = this._beziers[E].length;
                    if (this._timeRes) {
                        B = this._beziers;
                        E = this._timeRes;
                        E = E >> 0 || 6;
                        u = [];
                        K = [];
                        n = T = 0;
                        v = E - 1;
                        G = [];
                        d = [];
                        for (H in B) {
                            P = B[H];
                            R = u;
                            M = E;
                            X = 1 / M;
                            ba = P.length;
                            for (var ca = void 0, W = void 0, Y = void 0, fa = void 0, ga = void 0; --ba > -1;) {
                                Y = P[ba];
                                W = Y.a;
                                ha = Y.d - W;
                                V = Y.c - W;
                                Y = Y.b - W;
                                W = 0;
                                for (fa = 1; fa <= M; fa++) {
                                    ca =
                                        X * fa;
                                    ga = 1 - ca;
                                    ca = W - (W = (ca * ca * ha + 3 * ga * (ca * V + ga * Y)) * ca);
                                    ga = ba * M + fa - 1;
                                    R[ga] = (R[ga] || 0) + ca * ca
                                }
                            }
                        }
                        B = u.length;
                        for (H = 0; H < B; H++) {
                            T += Math.sqrt(u[H]);
                            P = H % E;
                            d[P] = T;
                            if (P === v) {
                                n += T;
                                P = H / E >> 0;
                                G[P] = d;
                                K[P] = n;
                                T = 0;
                                d = []
                            }
                        }
                        H = {
                            length: n,
                            lengths: K,
                            segments: G
                        };
                        this._length = H.length;
                        this._lengths = H.lengths;
                        this._segments = H.segments;
                        this._l1 = this._li = this._s1 = this._si = 0;
                        this._l2 = this._lengths[0];
                        this._curSeg = this._segments[0];
                        this._s2 = this._curSeg[0];
                        this._prec = 1 / this._curSeg.length
                    }
                    if (d = this._autoRotate) {
                        if (!(d[0] instanceof Array)) this._autoRotate =
                            d = [d];
                        for (B = d.length; --B > -1;)
                            for (H = 0; H < 3; H++) {
                                E = d[B][H];
                                this._func[E] = typeof g[E] === "function" ? g[E.indexOf("set") || typeof g["get" + E.substr(3)] !== "function" ? E : "get" + E.substr(3)] : false
                            }
                    }
                    return true
                },
                set: function(g) {
                    var v = this._segCount,
                        d = this._func,
                        n = this._target,
                        u, B, E, H, G;
                    if (this._timeRes) {
                        u = this._lengths;
                        H = this._curSeg;
                        g *= this._length;
                        B = this._li;
                        if (g > this._l2 && B < v - 1) {
                            for (v -= 1; B < v && (this._l2 = u[++B]) <= g;);
                            this._l1 = u[B - 1];
                            this._li = B;
                            this._curSeg = H = this._segments[B];
                            this._s2 = H[this._s1 = this._si = 0]
                        } else if (g <
                            this._l1 && B > 0) {
                            for (; B > 0 && (this._l1 = u[--B]) >= g;);
                            if (B === 0 && g < this._l1) this._l1 = 0;
                            else B++;
                            this._l2 = u[B];
                            this._li = B;
                            this._curSeg = H = this._segments[B];
                            this._s1 = H[(this._si = H.length - 1) - 1] || 0;
                            this._s2 = H[this._si]
                        }
                        u = B;
                        g -= this._l1;
                        B = this._si;
                        if (g > this._s2 && B < H.length - 1) {
                            for (v = H.length - 1; B < v && (this._s2 = H[++B]) <= g;);
                            this._s1 = H[B - 1];
                            this._si = B
                        } else if (g < this._s1 && B > 0) {
                            for (; B > 0 && (this._s1 = H[--B]) >= g;);
                            if (B === 0 && g < this._s1) this._s1 = 0;
                            else B++;
                            this._s2 = H[B];
                            this._si = B
                        }
                        H = (B + (g - this._s1) / (this._s2 - this._s1)) * this._prec
                    } else {
                        u =
                            g < 0 ? 0 : g >= 1 ? v - 1 : v * g >> 0;
                        H = (g - u * (1 / v)) * v
                    }
                    v = 1 - H;
                    for (B = this._props.length; --B > -1;) {
                        g = this._props[B];
                        E = this._beziers[g][u];
                        G = (H * H * E.da + 3 * v * (H * E.ca + v * E.ba)) * H + E.a;
                        if (this._round[g]) G = G + (G > 0 ? 0.5 : -0.5) >> 0;
                        if (d[g]) n[g](G);
                        else n[g] = G
                    }
                    if (this._autoRotate) {
                        v = this._autoRotate;
                        var P, K, T, V, R;
                        for (B = v.length; --B > -1;) {
                            g = v[B][2];
                            V = v[B][3] || 0;
                            R = v[B][4] === true ? 1 : q;
                            E = this._beziers[v[B][0]];
                            G = this._beziers[v[B][1]];
                            if (E && G) {
                                E = E[u];
                                G = G[u];
                                P = E.a + (E.b - E.a) * H;
                                K = E.b + (E.c - E.b) * H;
                                P += (K - P) * H;
                                K += (E.c + (E.d - E.c) * H - K) * H;
                                E = G.a + (G.b -
                                    G.a) * H;
                                T = G.b + (G.c - G.b) * H;
                                E += (T - E) * H;
                                T += (G.c + (G.d - G.c) * H - T) * H;
                                G = Math.atan2(T - E, K - P) * R + V;
                                if (d[g]) n[g](G);
                                else n[g] = G
                            }
                        }
                    }
                }
            }),
            t = h.prototype;
        h.bezierThrough = f;
        h.cubicToQuadratic = p;
        h._autoCSS = true;
        h.quadraticToCubic = function(g, v, d) {
            return new e(g, (2 * v + g) / 3, (2 * v + d) / 3, d)
        };
        h._cssRegister = function() {
            var g = window._gsDefine.globals.CSSPlugin;
            if (g) {
                g = g._internals;
                var v = g._parseToProxy,
                    d = g._setPluginRatio,
                    n = g.CSSPropTween;
                g._registerComplexSpecialProp("bezier", {
                    parser: function(u, B, E, H, G, P) {
                        if (B instanceof Array) B = {
                            values: B
                        };
                        P = new h;
                        E = B.values;
                        var K = E.length - 1,
                            T = [],
                            V = {},
                            R, M, X;
                        if (K < 0) return G;
                        for (R = 0; R <= K; R++) {
                            X = v(u, E[R], H, G, P, K !== R);
                            T[R] = X.end
                        }
                        for (M in B) V[M] = B[M];
                        V.values = T;
                        G = new n(u, "bezier", 0, 0, X.pt, 2);
                        G.data = X;
                        G.plugin = P;
                        G.setRatio = d;
                        if (V.autoRotate === 0) V.autoRotate = true;
                        if (V.autoRotate && !(V.autoRotate instanceof Array)) {
                            R = V.autoRotate === true ? 0 : Number(V.autoRotate) * m;
                            V.autoRotate = X.end.left != null ? [
                                ["left", "top", "rotation", R, true]
                            ] : X.end.x != null ? [
                                ["x", "y", "rotation", R, true]
                            ] : false
                        }
                        if (V.autoRotate) {
                            H._transform ||
                                H._enableTransforms(false);
                            X.autoRotate = H._target._gsTransform
                        }
                        P._onInitTween(X.proxy, V, H._tween);
                        return G
                    }
                })
            }
        };
        t._roundProps = function(g, v) {
            for (var d = this._overwriteProps, n = d.length; --n > -1;)
                if (g[d[n]] || g.bezier || g.bezierThrough) this._round[d[n]] = v
        };
        t._kill = function(g) {
            var v = this._props,
                d, n;
            for (d in this._beziers)
                if (d in g) {
                    delete this._beziers[d];
                    delete this._func[d];
                    for (n = v.length; --n > -1;) v[n] === d && v.splice(n, 1)
                }
            return this._super._kill.call(this, g)
        }
    })();
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin",
        "TweenLite"
    ], function(q, m) {
        var j = function() {
                q.call(this, "css");
                this._overwriteProps.length = 0
            },
            a, b, c, e, p = {},
            f = j.prototype = new q("css");
        f.constructor = j;
        j.version = "1.9.7";
        j.API = 2;
        j.defaultTransformPerspective = 0;
        f = "px";
        j.suffixMap = {
            top: f,
            right: f,
            bottom: f,
            left: f,
            width: f,
            height: f,
            fontSize: f,
            padding: f,
            margin: f,
            perspective: f
        };
        var h = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            v = /[^\d\-\.]/g,
            d = /(?:\d|\-|\+|=|#|\.)*/g,
            n = /opacity *= *([^)]*)/,
            u = /opacity:([^;]*)/,
            B = /alpha\(opacity *=.+?\)/i,
            E = /^(rgb|hsl)/,
            H = /([A-Z])/g,
            G = /-([a-z])/gi,
            P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            K = function(l, k) {
                return k.toUpperCase()
            },
            T = /(?:Left|Right|Width)/i,
            V = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            M = /,(?=[^\)]*(?:\(|$))/gi,
            X = Math.PI / 180,
            ba = 180 / Math.PI,
            ha = {},
            ca = document,
            W = ca.createElement("div"),
            Y = ca.createElement("img"),
            fa = j._internals = {
                _specialProps: p
            },
            ga = navigator.userAgent,
            oa, xa,
            ta, o, x, w, C = function() {
                var l = ga.indexOf("Android"),
                    k = ca.createElement("div");
                x = (ta = ga.indexOf("Safari") !== -1 && ga.indexOf("Chrome") === -1 && (l === -1 || Number(ga.substr(l + 8, 1)) > 3)) && Number(ga.substr(ga.indexOf("Version/") + 8, 1)) < 6;
                o = ga.indexOf("Firefox") !== -1;
                /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(ga);
                w = parseFloat(RegExp.$1);
                k.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>";
                return (l = k.getElementsByTagName("a")[0]) ? /^0.55/.test(l.style.opacity) : false
            }(),
            I = function(l) {
                return n.test(typeof l === "string" ? l : (l.currentStyle ?
                    l.currentStyle.filter : l.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            L = "",
            U = "",
            S = function(l, k) {
                k = k || W;
                var r = k.style,
                    s, y;
                if (r[l] !== undefined) return l;
                l = l.charAt(0).toUpperCase() + l.substr(1);
                s = ["O", "Moz", "ms", "Ms", "Webkit"];
                for (y = 5; --y > -1 && r[s[y] + l] === undefined;);
                if (y >= 0) {
                    U = y === 3 ? "ms" : s[y];
                    L = "-" + U.toLowerCase() + "-";
                    return U + l
                }
                return null
            },
            da = ca.defaultView ? ca.defaultView.getComputedStyle : function() {},
            $ = j.getStyle = function(l, k, r, s, y) {
                var D;
                if (!C)
                    if (k === "opacity") return I(l);
                if (!s && l.style[k]) D = l.style[k];
                else if (r = r || da(l, null)) D = (l = r.getPropertyValue(k.replace(H, "-$1").toLowerCase())) || r.length ? l : r[k];
                else if (l.currentStyle) {
                    r = l.currentStyle;
                    D = r[k]
                }
                return y != null && (!D || D === "none" || D === "auto" || D === "auto auto") ? y : D
            },
            ia = function(l, k, r, s, y) {
                if (s === "px" || !s) return r;
                if (s === "auto" || !r) return 0;
                var D = T.test(k),
                    z = l,
                    J = W.style,
                    F = r < 0;
                if (F) r = -r;
                if (s === "%" && k.indexOf("border") !== -1) D = r / 100 * (D ? l.clientWidth : l.clientHeight);
                else {
                    J.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;";
                    if (s === "%" || !z.appendChild) {
                        z = l.parentNode || ca.body;
                        J[D ? "width" : "height"] = r + s
                    } else J[D ? "borderLeftWidth" : "borderTopWidth"] = r + s;
                    z.appendChild(W);
                    D = parseFloat(W[D ? "offsetWidth" : "offsetHeight"]);
                    z.removeChild(W);
                    if (D === 0 && !y) D = ia(l, k, r, s, true)
                }
                return F ? -D : D
            },
            wa = function(l, k, r) {
                if ($(l, "position", r) !== "absolute") return 0;
                var s = k === "left" ? "Left" : "Top";
                r = $(l, "margin" + s, r);
                return l["offset" + s] - (ia(l, k, parseFloat(r), r.replace(d, "")) || 0)
            },
            za = function(l, k) {
                var r = {},
                    s;
                if (k = k || da(l, null))
                    if (s = k.length)
                        for (; --s >
                            -1;) r[k[s].replace(G, K)] = k.getPropertyValue(k[s]);
                    else
                        for (s in k) r[s] = k[s];
                else if (k = l.currentStyle || l.style)
                    for (s in k) r[s.replace(G, K)] = k[s];
                if (!C) r.opacity = I(l);
                s = Ka(l, k, false);
                r.rotation = s.rotation * ba;
                r.skewX = s.skewX * ba;
                r.scaleX = s.scaleX;
                r.scaleY = s.scaleY;
                r.x = s.x;
                r.y = s.y;
                if (Ba) {
                    r.z = s.z;
                    r.rotationX = s.rotationX * ba;
                    r.rotationY = s.rotationY * ba;
                    r.scaleZ = s.scaleZ
                }
                r.filters && delete r.filters;
                return r
            },
            Ca = function(l, k, r, s, y) {
                var D = {},
                    z = l.style,
                    J, F, A;
                for (F in r)
                    if (F !== "cssText")
                        if (F !== "length")
                            if (isNaN(F))
                                if (k[F] !==
                                    (J = r[F]) || y && y[F])
                                    if (F.indexOf("Origin") === -1)
                                        if (typeof J === "number" || typeof J === "string") {
                                            D[F] = J === "auto" && (F === "left" || F === "top") ? wa(l, F) : (J === "" || J === "auto" || J === "none") && typeof k[F] === "string" && k[F].replace(v, "") !== "" ? 0 : J;
                                            if (z[F] !== undefined) A = new Oa(z, F, z[F], A)
                                        }
                if (s)
                    for (F in s)
                        if (F !== "className") D[F] = s[F];
                return {
                    difs: D,
                    firstMPT: A
                }
            },
            $a = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            },
            ab = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            Pa = function(l, k) {
                if (l == null || l === "" || l === "auto" || l ===
                    "auto auto") l = "0 0";
                var r = l.split(" "),
                    s = l.indexOf("left") !== -1 ? "0%" : l.indexOf("right") !== -1 ? "100%" : r[0],
                    y = l.indexOf("top") !== -1 ? "0%" : l.indexOf("bottom") !== -1 ? "100%" : r[1];
                if (y == null) y = "0";
                else if (y === "center") y = "50%";
                if (s === "center" || isNaN(parseFloat(s))) s = "50%";
                if (k) {
                    k.oxp = s.indexOf("%") !== -1;
                    k.oyp = y.indexOf("%") !== -1;
                    k.oxr = s.charAt(1) === "=";
                    k.oyr = y.charAt(1) === "=";
                    k.ox = parseFloat(s.replace(v, ""));
                    k.oy = parseFloat(y.replace(v, ""))
                }
                return s + " " + y + (r.length > 2 ? " " + r[2] : "")
            },
            Sa = function(l, k) {
                return typeof l ===
                    "string" && l.charAt(1) === "=" ? parseInt(l.charAt(0) + "1", 10) * parseFloat(l.substr(2)) : parseFloat(l) - parseFloat(k)
            },
            Ea = function(l, k) {
                return l == null ? k : typeof l === "string" && l.charAt(1) === "=" ? parseInt(l.charAt(0) + "1", 10) * Number(l.substr(2)) + k : parseFloat(l)
            },
            Ia = function(l, k, r, s) {
                var y, D, z;
                if (l == null) l = k;
                else if (typeof l === "number") l *= X;
                else {
                    y = Math.PI * 2;
                    D = l.split("_");
                    z = Number(D[0].replace(v, "")) * (l.indexOf("rad") === -1 ? X : 1) - (l.charAt(1) === "=" ? 0 : k);
                    if (D.length) {
                        if (s) s[r] = k + z;
                        if (l.indexOf("short") !== -1) {
                            z %= y;
                            if (z !== z % (y / 2)) z = z < 0 ? z + y : z - y
                        }
                        if (l.indexOf("_cw") !== -1 && z < 0) z = (z + y * 9999999999) % y - (z / y | 0) * y;
                        else if (l.indexOf("ccw") !== -1 && z > 0) z = (z - y * 9999999999) % y - (z / y | 0) * y
                    }
                    l = k + z
                }
                if (l < 1.0E-6 && l > -1.0E-6) l = 0;
                return l
            },
            Fa = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255,
                    192, 203
                ],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            Qa = function(l, k, r) {
                l = l < 0 ? l + 1 : l > 1 ? l - 1 : l;
                return (l * 6 < 1 ? k + (r - k) * l * 6 : l < 0.5 ? r : l * 3 < 2 ? k + (r - k) * (2 / 3 - l) * 6 : k) * 255 + 0.5 | 0
            },
            Ra = function(l) {
                var k, r, s;
                if (!l || l === "") return Fa.black;
                if (typeof l === "number") return [l >> 16, l >> 8 & 255, l & 255];
                if (l.charAt(l.length - 1) === ",") l = l.substr(0, l.length - 1);
                if (Fa[l]) return Fa[l];
                if (l.charAt(0) === "#") {
                    if (l.length === 4) {
                        k = l.charAt(1);
                        r = l.charAt(2);
                        l = l.charAt(3);
                        l = "#" + k + k + r + r + l + l
                    }
                    l = parseInt(l.substr(1), 16);
                    return [l >> 16, l >> 8 & 255, l & 255]
                }
                if (l.substr(0,
                        3) === "hsl") {
                    l = l.match(h);
                    s = Number(l[0]) % 360 / 360;
                    r = Number(l[1]) / 100;
                    k = Number(l[2]) / 100;
                    r = k <= 0.5 ? k * (r + 1) : k + r - k * r;
                    k = k * 2 - r;
                    if (l.length > 3) l[3] = Number(l[3]);
                    l[0] = Qa(s + 1 / 3, k, r);
                    l[1] = Qa(s, k, r);
                    l[2] = Qa(s - 1 / 3, k, r);
                    return l
                }
                l = l.match(h) || Fa.transparent;
                l[0] = Number(l[0]);
                l[1] = Number(l[1]);
                l[2] = Number(l[2]);
                if (l.length > 3) l[3] = Number(l[3]);
                return l
            },
            Ga = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (f in Fa) Ga += "|" + f + "\\b";
        Ga = RegExp(Ga + ")", "gi");
        var Ta = function(l, k, r, s) {
                if (l == null) return function(N) {
                    return N
                };
                var y = k ? (l.match(Ga) || [""])[0] : "",
                    D = l.split(y).join("").match(g) || [],
                    z = l.substr(0, l.indexOf(D[0])),
                    J = l.charAt(l.length - 1) === ")" ? ")" : "",
                    F = l.indexOf(" ") !== -1 ? " " : ",",
                    A = D.length,
                    O = A > 0 ? D[0].replace(h, "") : "",
                    Q;
                if (!A) return function(N) {
                    return N
                };
                if (k) return Q = function(N) {
                    var Z, aa, ea;
                    if (typeof N === "number") N += O;
                    else if (s && M.test(N)) {
                        N = N.replace(M, "|").split("|");
                        for (ea = 0; ea < N.length; ea++) N[ea] = Q(N[ea]);
                        return N.join(",")
                    }
                    Z = (N.match(Ga) || [y])[0];
                    aa = N.split(Z).join("").match(g) || [];
                    ea = aa.length;
                    if (A > ea--)
                        for (; ++ea <
                            A;) aa[ea] = r ? aa[(ea - 1) / 2 | 0] : D[ea];
                    return z + aa.join(F) + F + Z + J + (N.indexOf("inset") !== -1 ? " inset" : "")
                };
                return Q = function(N) {
                    var Z;
                    if (typeof N === "number") N += O;
                    else if (s && M.test(N)) {
                        Z = N.replace(M, "|").split("|");
                        for (N = 0; N < Z.length; N++) Z[N] = Q(Z[N]);
                        return Z.join(",")
                    }
                    Z = N.match(g) || [];
                    N = Z.length;
                    if (A > N--)
                        for (; ++N < A;) Z[N] = r ? Z[(N - 1) / 2 | 0] : D[N];
                    return z + Z.join(F) + J
                }
            },
            Ua = function(l) {
                l = l.split(",");
                return function(k, r, s, y, D, z, J) {
                    r = (r + "").split(" ");
                    J = {};
                    for (s = 0; s < 4; s++) J[l[s]] = r[s] = r[s] || r[(s - 1) / 2 >> 0];
                    return y.parse(k,
                        J, D, z)
                }
            };
        fa._setPluginRatio = function(l) {
            this.plugin.setRatio(l);
            for (var k = this.data, r = k.proxy, s = k.firstMPT, y; s;) {
                y = r[s.v];
                if (s.r) y = y > 0 ? y + 0.5 | 0 : y - 0.5 | 0;
                else if (y < 1.0E-6 && y > -1.0E-6) y = 0;
                s.t[s.p] = y;
                s = s._next
            }
            if (k.autoRotate) k.autoRotate.rotation = r.rotation;
            if (l === 1)
                for (s = k.firstMPT; s;) {
                    l = s.t;
                    if (l.type) {
                        if (l.type === 1) {
                            r = l.xs0 + l.s + l.xs1;
                            for (k = 1; k < l.l; k++) r += l["xn" + k] + l["xs" + (k + 1)];
                            l.e = r
                        }
                    } else l.e = l.s + l.xs0;
                    s = s._next
                }
        };
        var Oa = function(l, k, r, s, y) {
            this.t = l;
            this.p = k;
            this.v = r;
            this.r = y;
            if (s) {
                s._prev = this;
                this._next =
                    s
            }
        };
        fa._parseToProxy = function(l, k, r, s, y, D) {
            var z = s,
                J = {},
                F = {},
                A = r._transform,
                O = ha,
                Q;
            r._transform = null;
            ha = k;
            s = l = r.parse(l, k, s, y);
            ha = O;
            if (D) {
                r._transform = A;
                if (z) {
                    z._prev = null;
                    if (z._prev) z._prev._next = null
                }
            }
            for (; s && s !== z;) {
                if (s.type <= 1) {
                    A = s.p;
                    F[A] = s.s + s.c;
                    J[A] = s.s;
                    if (!D) {
                        Q = new Oa(s, "s", A, Q, s.r);
                        s.c = 0
                    }
                    if (s.type === 1)
                        for (r = s.l; --r > 0;) {
                            O = "xn" + r;
                            A = s.p + "_" + O;
                            F[A] = s.data[O];
                            J[A] = s[O];
                            D || (Q = new Oa(s, O, A, Q, s.rxp[O]))
                        }
                }
                s = s._next
            }
            return {
                proxy: J,
                end: F,
                firstMPT: Q,
                pt: l
            }
        };
        var ua = fa.CSSPropTween = function(l, k, r, s, y, D,
                z, J, F, A, O) {
                this.t = l;
                this.p = k;
                this.s = r;
                this.c = s;
                this.n = z || "css_" + k;
                l instanceof ua || e.push(this.n);
                this.r = J;
                this.type = D || 0;
                if (F) {
                    this.pr = F;
                    a = true
                }
                this.b = A === undefined ? r : A;
                this.e = O === undefined ? r + s : O;
                if (y) {
                    this._next = y;
                    y._prev = this
                }
            },
            La = j.parseComplex = function(l, k, r, s, y, D, z, J, F, A) {
                r = r || D || "";
                z = new ua(l, k, 0, 0, z, A ? 2 : 1, null, false, J, r, s);
                s += "";
                l = r.split(", ").join(",").split(" ");
                k = s.split(", ").join(",").split(" ");
                J = l.length;
                var O = oa !== false,
                    Q, N, Z, aa;
                if (s.indexOf(",") !== -1 || r.indexOf(",") !== -1) {
                    l = l.join(" ").replace(M,
                        ", ").split(" ");
                    k = k.join(" ").replace(M, ", ").split(" ");
                    J = l.length
                }
                if (J !== k.length) {
                    l = (D || "").split(" ");
                    J = l.length
                }
                z.plugin = F;
                z.setRatio = A;
                for (r = 0; r < J; r++) {
                    D = l[r];
                    A = k[r];
                    if ((F = parseFloat(D)) || F === 0) z.appendXtra("", F, Sa(A, F), A.replace(t, ""), O && A.indexOf("px") !== -1, true);
                    else if (y && (D.charAt(0) === "#" || Fa[D] || E.test(D))) {
                        Q = A.charAt(A.length - 1) === "," ? ")," : ")";
                        D = Ra(D);
                        A = Ra(A);
                        if ((F = D.length + A.length > 6) && !C && A[3] === 0) {
                            z["xs" + z.l] += z.l ? " transparent" : "transparent";
                            z.e = z.e.split(k[r]).join("transparent")
                        } else {
                            C ||
                                (F = false);
                            z.appendXtra(F ? "rgba(" : "rgb(", D[0], A[0] - D[0], ",", true, true).appendXtra("", D[1], A[1] - D[1], ",", true).appendXtra("", D[2], A[2] - D[2], F ? "," : Q, true);
                            if (F) {
                                D = D.length < 4 ? 1 : D[3];
                                z.appendXtra("", D, (A.length < 4 ? 1 : A[3]) - D, Q, false)
                            }
                        }
                    } else if (F = D.match(h)) {
                        N = A.match(t);
                        if (!N || N.length !== F.length) return z;
                        for (A = Q = 0; A < F.length; A++) {
                            aa = F[A];
                            Z = D.indexOf(aa, Q);
                            z.appendXtra(D.substr(Q, Z - Q), Number(aa), Sa(N[A], aa), "", O && D.substr(Z + aa.length, 2) === "px", A === 0);
                            Q = Z + aa.length
                        }
                        z["xs" + z.l] += D.substr(Q)
                    } else z["xs" + z.l] +=
                        z.l ? " " + D : D
                }
                if (s.indexOf("=") !== -1)
                    if (z.data) {
                        Q = z.xs0 + z.data.s;
                        for (r = 1; r < z.l; r++) Q += z["xs" + r] + z.data["xn" + r];
                        z.e = Q + z["xs" + r]
                    }
                if (!z.l) {
                    z.type = -1;
                    z.xs0 = z.e
                }
                return z.xfirst || z
            },
            ya = 9;
        f = ua.prototype;
        for (f.l = f.pr = 0; --ya > 0;) {
            f["xn" + ya] = 0;
            f["xs" + ya] = ""
        }
        f.xs0 = "";
        f._next = f._prev = f.xfirst = f.data = f.plugin = f.setRatio = f.rxp = null;
        f.appendXtra = function(l, k, r, s, y, D) {
            var z = this.l;
            this["xs" + z] += D && z ? " " + l : l || "";
            if (!r)
                if (z !== 0 && !this.plugin) {
                    this["xs" + z] += k + (s || "");
                    return this
                }
            this.l++;
            this.type = this.setRatio ? 2 : 1;
            this["xs" +
                this.l] = s || "";
            if (z > 0) {
                this.data["xn" + z] = k + r;
                this.rxp["xn" + z] = y;
                this["xn" + z] = k;
                if (!this.plugin) {
                    this.xfirst = new ua(this, "xn" + z, k, r, this.xfirst || this, 0, this.n, y, this.pr);
                    this.xfirst.xs0 = 0
                }
                return this
            }
            this.data = {
                s: k + r
            };
            this.rxp = {};
            this.s = k;
            this.c = r;
            this.r = y;
            return this
        };
        var Va = function(l, k) {
                k = k || {};
                this.p = k.prefix ? S(l) || l : l;
                p[l] = p[this.p] = this;
                this.format = k.formatter || Ta(k.defaultValue, k.color, k.collapsible, k.multi);
                if (k.parser) this.parse = k.parser;
                this.clrs = k.color;
                this.multi = k.multi;
                this.keyword = k.keyword;
                this.dflt = k.defaultValue;
                this.pr = k.priority || 0
            },
            pa = fa._registerComplexSpecialProp = function(l, k, r) {
                if (typeof k !== "object") k = {
                    parser: r
                };
                l = l.split(",");
                var s = k.defaultValue,
                    y;
                r = r || [s];
                for (y = 0; y < l.length; y++) {
                    k.prefix = y === 0 && k.prefix;
                    k.defaultValue = r[y] || s;
                    new Va(l[y], k)
                }
            };
        fa = function(l) {
            if (!p[l]) {
                var k = l.charAt(0).toUpperCase() + l.substr(1) + "Plugin";
                pa(l, {
                    parser: function(r, s, y, D, z, J, F) {
                        var A = (window.GreenSockGlobals || window).com.greensock.plugins[k];
                        if (!A) {
                            window.console && console.log("Error: " + k + " js file not loaded.");
                            return z
                        }
                        A._cssRegister();
                        return p[y].parse(r, s, y, D, z, J, F)
                    }
                })
            }
        };
        f = Va.prototype;
        f.parseComplex = function(l, k, r, s, y, D) {
            var z = this.keyword,
                J, F, A, O;
            if (this.multi)
                if (M.test(r) || M.test(k)) {
                    F = k.replace(M, "|").split("|");
                    A = r.replace(M, "|").split("|")
                } else if (z) {
                F = [k];
                A = [r]
            }
            if (A) {
                O = A.length > F.length ? A.length : F.length;
                for (J = 0; J < O; J++) {
                    k = F[J] = F[J] || this.dflt;
                    r = A[J] = A[J] || this.dflt;
                    if (z) {
                        k = k.indexOf(z);
                        r = r.indexOf(z);
                        if (k !== r) {
                            r = r === -1 ? A : F;
                            r[J] += " " + z
                        }
                    }
                }
                k = F.join(", ");
                r = A.join(", ")
            }
            return La(l, this.p, k, r, this.clrs,
                this.dflt, s, this.pr, y, D)
        };
        f.parse = function(l, k, r, s, y, D) {
            return this.parseComplex(l.style, this.format($(l, this.p, c, false, this.dflt)), this.format(k), y, D)
        };
        j.registerSpecialProp = function(l, k, r) {
            pa(l, {
                parser: function(s, y, D, z, J, F) {
                    J = new ua(s, D, 0, 0, J, 2, D, false, r);
                    J.plugin = F;
                    J.setRatio = k(s, y, z._tween, D);
                    return J
                },
                priority: r
            })
        };
        var Wa = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
            Aa = S("transform"),
            bb = L + "transform",
            Xa = S("transformOrigin"),
            Ba = S("perspective") !== null,
            Ka = function(l, k, r) {
                var s = r ? l._gsTransform || {
                        skewY: 0
                    } : {
                        skewY: 0
                    },
                    y = s.scaleX < 0,
                    D = -Math.PI + 1.0E-4,
                    z = Math.PI - 1.0E-4,
                    J = Ba ? parseFloat($(l, Xa, k, false, "0 0 0").split(" ")[2]) || s.zOrigin || 0 : 0,
                    F, A, O, Q, N, Z, aa;
                if (Aa) F = $(l, bb, k, true);
                else if (l.currentStyle)
                    if ((F = l.currentStyle.filter.match(V)) && F.length === 4) F = [F[0].substr(4), Number(F[2].substr(4)), Number(F[1].substr(4)), F[3].substr(4), s.x || 0, s.y || 0].join(",");
                    else if (s.x != null) return s;
                else F = "";
                A = (F || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [];
                for (F = A.length; --F >
                    -1;) {
                    O = Number(A[F]);
                    A[F] = (Q = O - (O |= 0)) ? (Q * 1E5 + (Q < 0 ? -0.5 : 0.5) | 0) / 1E5 + O : O
                }
                if (A.length === 16) {
                    y = A[8];
                    k = A[9];
                    Q = A[10];
                    O = A[12];
                    aa = A[13];
                    var ea = A[14];
                    if (s.zOrigin) {
                        ea = -s.zOrigin;
                        O = y * ea - A[12];
                        aa = k * ea - A[13];
                        ea = Q * ea + s.zOrigin - A[14]
                    }
                    if (!r || s.rotationX == null) {
                        var ja = A[0],
                            qa = A[1],
                            ka = A[2],
                            Ja = A[3],
                            ma = A[4],
                            la = A[5],
                            va = A[6],
                            Da = A[7];
                        A = A[11];
                        var na = s.rotationX = Math.atan2(va, Q),
                            Ya = na < D || na > z,
                            Ha, Ma, ra, sa;
                        if (na) {
                            ra = Math.cos(-na);
                            sa = Math.sin(-na);
                            na = ma * ra + y * sa;
                            Ha = la * ra + k * sa;
                            Ma = va * ra + Q * sa;
                            y = ma * -sa + y * ra;
                            k = la * -sa + k * ra;
                            Q = va * -sa +
                                Q * ra;
                            A = Da * -sa + A * ra;
                            ma = na;
                            la = Ha;
                            va = Ma
                        }
                        if (na = s.rotationY = Math.atan2(y, ja)) {
                            N = na < D || na > z;
                            ra = Math.cos(-na);
                            sa = Math.sin(-na);
                            Ha = qa * ra - k * sa;
                            Ma = ka * ra - Q * sa;
                            k = qa * sa + k * ra;
                            Q = ka * sa + Q * ra;
                            A = Ja * sa + A * ra;
                            ja = ja * ra - y * sa;
                            qa = Ha;
                            ka = Ma
                        }
                        if (na = s.rotation = Math.atan2(qa, la)) {
                            Z = na < D || na > z;
                            ra = Math.cos(-na);
                            sa = Math.sin(-na);
                            ja = ja * ra + ma * sa;
                            Ha = qa * ra + la * sa;
                            la = qa * -sa + la * ra;
                            va = ka * -sa + va * ra;
                            qa = Ha
                        }
                        if (Z && Ya) s.rotation = s.rotationX = 0;
                        else if (Z && N) s.rotation = s.rotationY = 0;
                        else if (N && Ya) s.rotationY = s.rotationX = 0;
                        s.scaleX = (Math.sqrt(ja * ja +
                            qa * qa) * 1E5 + 0.5 | 0) / 1E5;
                        s.scaleY = (Math.sqrt(la * la + k * k) * 1E5 + 0.5 | 0) / 1E5;
                        s.scaleZ = (Math.sqrt(va * va + Q * Q) * 1E5 + 0.5 | 0) / 1E5;
                        s.skewX = 0;
                        s.perspective = A ? 1 / (A < 0 ? -A : A) : 0;
                        s.x = O;
                        s.y = aa;
                        s.z = ea
                    }
                } else if ((!Ba || A.length === 0 || s.x !== A[4] || s.y !== A[5] || !s.rotationX && !s.rotationY) && !(s.x !== undefined && $(l, "display", k) === "none")) {
                    Q = (N = A.length >= 6) ? A[0] : 1;
                    O = A[1] || 0;
                    k = A[2] || 0;
                    aa = N ? A[3] : 1;
                    s.x = A[4] || 0;
                    s.y = A[5] || 0;
                    N = Math.sqrt(Q * Q + O * O);
                    Z = Math.sqrt(aa * aa + k * k);
                    A = Q || O ? Math.atan2(O, Q) : s.rotation || 0;
                    k = k || aa ? Math.atan2(k, aa) + A : s.skewX ||
                        0;
                    Q = N - Math.abs(s.scaleX || 0);
                    O = Z - Math.abs(s.scaleY || 0);
                    if (Math.abs(k) > Math.PI / 2 && Math.abs(k) < Math.PI * 1.5)
                        if (y) {
                            N *= -1;
                            k += A <= 0 ? Math.PI : -Math.PI;
                            A += A <= 0 ? Math.PI : -Math.PI
                        } else {
                            Z *= -1;
                            k += k <= 0 ? Math.PI : -Math.PI
                        }
                    y = (A - s.rotation) % Math.PI;
                    aa = (k - s.skewX) % Math.PI;
                    if (s.skewX === undefined || Q > 2.0E-5 || Q < -2.0E-5 || O > 2.0E-5 || O < -2.0E-5 || y > D && y < z && y * 1E5 | false || aa > D && aa < z && aa * 1E5 | false) {
                        s.scaleX = N;
                        s.scaleY = Z;
                        s.rotation = A;
                        s.skewX = k
                    }
                    if (Ba) {
                        s.rotationX = s.rotationY = s.z = 0;
                        s.perspective = parseFloat(j.defaultTransformPerspective) ||
                            0;
                        s.scaleZ = 1
                    }
                }
                s.zOrigin = J;
                for (F in s)
                    if (s[F] < 2.0E-5)
                        if (s[F] > -2.0E-5) s[F] = 0;
                if (r) l._gsTransform = s;
                return s
            },
            cb = function(l) {
                var k = this.data,
                    r = -k.rotation,
                    s = r + k.skewX,
                    y = (Math.cos(r) * k.scaleX * 1E5 | 0) / 1E5;
                r = (Math.sin(r) * k.scaleX * 1E5 | 0) / 1E5;
                var D = (Math.sin(s) * -k.scaleY * 1E5 | 0) / 1E5;
                s = (Math.cos(s) * k.scaleY * 1E5 | 0) / 1E5;
                var z = this.t.style,
                    J = this.t.currentStyle,
                    F, A;
                if (J) {
                    A = r;
                    r = -D;
                    D = -A;
                    F = J.filter;
                    z.filter = "";
                    var O = this.t.offsetWidth;
                    A = this.t.offsetHeight;
                    var Q = J.position !== "absolute",
                        N = "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                        y + ", M12=" + r + ", M21=" + D + ", M22=" + s,
                        Z = k.x,
                        aa = k.y,
                        ea, ja;
                    if (k.ox != null) {
                        ea = (k.oxp ? O * k.ox * 0.01 : k.ox) - O / 2;
                        ja = (k.oyp ? A * k.oy * 0.01 : k.oy) - A / 2;
                        Z += ea - (ea * y + ja * r);
                        aa += ja - (ea * D + ja * s)
                    }
                    if (Q) {
                        ea = O / 2;
                        ja = A / 2;
                        N += ", Dx=" + (ea - (ea * y + ja * r) + Z) + ", Dy=" + (ja - (ea * D + ja * s) + aa) + ")"
                    } else {
                        var qa = w < 8 ? 1 : -1;
                        ea = k.ieOffsetX || 0;
                        ja = k.ieOffsetY || 0;
                        k.ieOffsetX = Math.round((O - ((y < 0 ? -y : y) * O + (r < 0 ? -r : r) * A)) / 2 + Z);
                        k.ieOffsetY = Math.round((A - ((s < 0 ? -s : s) * A + (D < 0 ? -D : D) * O)) / 2 + aa);
                        for (ya = 0; ya < 4; ya++) {
                            O = ab[ya];
                            A = J[O];
                            A = A.indexOf("px") !== -1 ? parseFloat(A) :
                                ia(this.t, O, parseFloat(A), A.replace(d, "")) || 0;
                            Z = A !== k[O] ? ya < 2 ? -k.ieOffsetX : -k.ieOffsetY : ya < 2 ? ea - k.ieOffsetX : ja - k.ieOffsetY;
                            z[O] = (k[O] = Math.round(A - Z * (ya === 0 || ya === 2 ? 1 : qa))) + "px"
                        }
                        N += ", sizingMethod='auto expand')"
                    }
                    z.filter = F.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? F.replace(R, N) : N + " " + F;
                    if (l === 0 || l === 1)
                        if (y === 1)
                            if (r === 0)
                                if (D === 0)
                                    if (s === 1)
                                        if (!Q || N.indexOf("Dx=0, Dy=0") !== -1)
                                            if (!n.test(F) || parseFloat(RegExp.$1) === 100) F.indexOf("gradient(") === -1 && z.removeAttribute("filter")
                }
            },
            db = function() {
                var l =
                    this.data,
                    k = this.t.style,
                    r = l.perspective,
                    s = l.scaleX,
                    y = 0,
                    D = 0,
                    z = 0,
                    J = 0,
                    F = l.scaleY,
                    A = 0,
                    O = 0,
                    Q = 0,
                    N = 0,
                    Z = l.scaleZ,
                    aa = 0,
                    ea = 0,
                    ja = 0,
                    qa = r ? -1 / r : 0,
                    ka = l.rotation,
                    Ja = l.zOrigin,
                    ma, la, va, Da, na;
                if (o) {
                    ma = k.top ? "top" : k.bottom ? "bottom" : parseFloat($(this.t, "top", null, false)) ? "bottom" : "top";
                    la = $(this.t, ma, null, false);
                    va = parseFloat(la) || 0;
                    Da = la.substr((va + "").length) || "px";
                    l._ffFix = !l._ffFix;
                    k[ma] = (l._ffFix ? va + 0.05 : va - 0.05) + Da
                }
                if (ka || l.skewX) {
                    la = s * Math.cos(ka);
                    va = F * Math.sin(ka);
                    ka -= l.skewX;
                    y = s * -Math.sin(ka);
                    F *= Math.cos(ka);
                    s = la;
                    J = va
                }
                if (ka = l.rotationY) {
                    ma = Math.cos(ka);
                    ka = Math.sin(ka);
                    Da = Z * -ka;
                    na = qa * -ka;
                    D = s * ka;
                    A = J * ka;
                    Z *= ma;
                    qa *= ma;
                    s *= ma;
                    J *= ma;
                    Q = Da;
                    ea = na
                }
                if (ka = l.rotationX) {
                    ma = Math.cos(ka);
                    ka = Math.sin(ka);
                    la = y * ma + D * ka;
                    va = F * ma + A * ka;
                    Da = N * ma + Z * ka;
                    na = ja * ma + qa * ka;
                    D = y * -ka + D * ma;
                    A = F * -ka + A * ma;
                    Z = N * -ka + Z * ma;
                    qa = ja * -ka + qa * ma;
                    y = la;
                    F = va;
                    N = Da;
                    ja = na
                }
                if (Ja) {
                    aa -= Ja;
                    z = D * aa;
                    O = A * aa;
                    aa = Z * aa + Ja
                }
                z = (la = (z += l.x) - (z |= 0)) ? (la * 1E5 + (la < 0 ? -0.5 : 0.5) | 0) / 1E5 + z : z;
                O = (la = (O += l.y) - (O |= 0)) ? (la * 1E5 + (la < 0 ? -0.5 : 0.5) | 0) / 1E5 + O : O;
                aa = (la = (aa += l.z) - (aa |= 0)) ? (la * 1E5 + (la <
                    0 ? -0.5 : 0.5) | 0) / 1E5 + aa : aa;
                k[Aa] = "matrix3d(" + [(s * 1E5 | 0) / 1E5, (J * 1E5 | 0) / 1E5, (Q * 1E5 | 0) / 1E5, (ea * 1E5 | 0) / 1E5, (y * 1E5 | 0) / 1E5, (F * 1E5 | 0) / 1E5, (N * 1E5 | 0) / 1E5, (ja * 1E5 | 0) / 1E5, (D * 1E5 | 0) / 1E5, (A * 1E5 | 0) / 1E5, (Z * 1E5 | 0) / 1E5, (qa * 1E5 | 0) / 1E5, z, O, aa, r ? 1 + -aa / r : 1].join(",") + ")"
            },
            eb = function() {
                var l = this.data,
                    k = this.t,
                    r = k.style,
                    s, y, D;
                if (o) {
                    s = r.top ? "top" : r.bottom ? "bottom" : parseFloat($(k, "top", null, false)) ? "bottom" : "top";
                    y = $(k, s, null, false);
                    k = parseFloat(y) || 0;
                    y = y.substr((k + "").length) || "px";
                    l._ffFix = !l._ffFix;
                    r[s] = (l._ffFix ? k + 0.05 :
                        k - 0.05) + y
                }
                if (!l.rotation && !l.skewX) r[Aa] = "matrix(" + l.scaleX + ",0,0," + l.scaleY + "," + l.x + "," + l.y + ")";
                else {
                    s = l.rotation;
                    k = s - l.skewX;
                    y = l.scaleX * 1E5;
                    D = l.scaleY * 1E5;
                    r[Aa] = "matrix(" + (Math.cos(s) * y | 0) / 1E5 + "," + (Math.sin(s) * y | 0) / 1E5 + "," + (Math.sin(k) * -D | 0) / 1E5 + "," + (Math.cos(k) * D | 0) / 1E5 + "," + l.x + "," + l.y + ")"
                }
            };
        pa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation", {
            parser: function(l, k, r, s, y, D, z) {
                if (s._transform) return y;
                k = s._transform = Ka(l, c, true);
                var J = l.style,
                    F = Wa.length,
                    A = {},
                    O, Q, N, Z, aa;
                if (typeof z.transform === "string" && Aa) {
                    Q = J.cssText;
                    J[Aa] = z.transform;
                    J.display = "block";
                    O = Ka(l, null, false);
                    J.cssText = Q
                } else if (typeof z === "object") {
                    O = {
                        scaleX: Ea(z.scaleX != null ? z.scaleX : z.scale, k.scaleX),
                        scaleY: Ea(z.scaleY != null ? z.scaleY : z.scale, k.scaleY),
                        scaleZ: Ea(z.scaleZ != null ? z.scaleZ : z.scale, k.scaleZ),
                        x: Ea(z.x, k.x),
                        y: Ea(z.y, k.y),
                        z: Ea(z.z, k.z),
                        perspective: Ea(z.transformPerspective,
                            k.perspective)
                    };
                    N = z.directionalRotation;
                    if (N != null)
                        if (typeof N === "object")
                            for (Q in N) z[Q] = N[Q];
                        else z.rotation = N;
                    O.rotation = Ia("rotation" in z ? z.rotation : "shortRotation" in z ? z.shortRotation + "_short" : "rotationZ" in z ? z.rotationZ : k.rotation * ba, k.rotation, "rotation", A);
                    if (Ba) {
                        O.rotationX = Ia("rotationX" in z ? z.rotationX : "shortRotationX" in z ? z.shortRotationX + "_short" : k.rotationX * ba || 0, k.rotationX, "rotationX", A);
                        O.rotationY = Ia("rotationY" in z ? z.rotationY : "shortRotationY" in z ? z.shortRotationY + "_short" : k.rotationY *
                            ba || 0, k.rotationY, "rotationY", A)
                    }
                    O.skewX = z.skewX == null ? k.skewX : Ia(z.skewX, k.skewX);
                    O.skewY = z.skewY == null ? k.skewY : Ia(z.skewY, k.skewY);
                    if (Q = O.skewY - k.skewY) {
                        O.skewX += Q;
                        O.rotation += Q
                    }
                }
                Z = k.z || k.rotationX || k.rotationY || O.z || O.rotationX || O.rotationY || O.perspective;
                if (!Z && z.scale != null) O.scaleZ = 1;
                for (; --F > -1;) {
                    r = Wa[F];
                    N = O[r] - k[r];
                    if (N > 1.0E-6 || N < -1.0E-6 || ha[r] != null) {
                        aa = true;
                        y = new ua(k, r, k[r], N, y);
                        if (r in A) y.e = A[r];
                        y.xs0 = 0;
                        y.plugin = D;
                        s._overwriteProps.push(y.n)
                    }
                }
                if ((N = z.transformOrigin) || Ba && Z && k.zOrigin)
                    if (Aa) {
                        aa =
                            true;
                        N = (N || $(l, r, c, false, "50% 50%")) + "";
                        r = Xa;
                        y = new ua(J, r, 0, 0, y, -1, "css_transformOrigin");
                        y.b = J[r];
                        y.plugin = D;
                        if (Ba) {
                            Q = k.zOrigin;
                            N = N.split(" ");
                            k.zOrigin = (N.length > 2 ? parseFloat(N[2]) : Q) || 0;
                            y.xs0 = y.e = J[r] = N[0] + " " + (N[1] || "50%") + " 0px";
                            y = new ua(k, "zOrigin", 0, 0, y, -1, y.n);
                            y.b = Q;
                            y.xs0 = y.e = k.zOrigin
                        } else y.xs0 = y.e = J[r] = N
                    } else Pa(N + "", k);
                if (aa) s._transformType = Z || this._transformType === 3 ? 3 : 2;
                return y
            },
            prefix: true
        });
        pa("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: true,
            color: true,
            multi: true,
            keyword: "inset"
        });
        pa("borderRadius", {
            defaultValue: "0px",
            parser: function(l, k, r, s, y) {
                k = this.format(k);
                s = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];
                var D = l.style,
                    z, J, F, A, O, Q, N, Z, aa, ea, ja, qa;
                Z = parseFloat(l.offsetWidth);
                aa = parseFloat(l.offsetHeight);
                k = k.split(" ");
                for (z = 0; z < s.length; z++) {
                    if (this.p.indexOf("border")) s[z] = S(s[z]);
                    A = F = $(l, s[z], c, false, "0px");
                    if (A.indexOf(" ") !== -1) {
                        F = A.split(" ");
                        A = F[0];
                        F = F[1]
                    }
                    O = J = k[z];
                    Q = parseFloat(A);
                    ja = A.substr((Q + "").length);
                    if (qa =
                        O.charAt(1) === "=") {
                        N = parseInt(O.charAt(0) + "1", 10);
                        O = O.substr(2);
                        N *= parseFloat(O);
                        ea = O.substr((N + "").length - (N < 0 ? 1 : 0)) || ""
                    } else {
                        N = parseFloat(O);
                        ea = O.substr((N + "").length)
                    }
                    if (ea === "") ea = b[r] || ja;
                    if (ea !== ja) {
                        A = ia(l, "borderLeft", Q, ja);
                        Q = ia(l, "borderTop", Q, ja);
                        if (ea === "%") {
                            A = A / Z * 100 + "%";
                            F = Q / aa * 100 + "%"
                        } else if (ea === "em") {
                            ja = ia(l, "borderLeft", 1, "em");
                            A = A / ja + "em";
                            F = Q / ja + "em"
                        } else {
                            A += "px";
                            F = Q + "px"
                        }
                        if (qa) {
                            O = parseFloat(A) + N + ea;
                            J = parseFloat(F) + N + ea
                        }
                    }
                    y = La(D, s[z], A + " " + F, O + " " + J, false, "0px", y)
                }
                return y
            },
            prefix: true,
            formatter: Ta("0px 0px 0px 0px", false, true)
        });
        pa("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(l, k, r, s, y, D) {
                r = c || da(l, null);
                r = this.format((r ? w ? r.getPropertyValue("background-position-x") + " " + r.getPropertyValue("background-position-y") : r.getPropertyValue("background-position") : l.currentStyle.backgroundPositionX + " " + l.currentStyle.backgroundPositionY) || "0 0");
                k = this.format(k);
                var z, J, F, A;
                if (r.indexOf("%") !== -1 !== (k.indexOf("%") !== -1))
                    if ((J = $(l, "backgroundImage").replace(P, "")) && J !== "none") {
                        s =
                            r.split(" ");
                        z = k.split(" ");
                        Y.setAttribute("src", J);
                        for (J = 2; --J > -1;) {
                            r = s[J];
                            F = r.indexOf("%") !== -1;
                            if (F !== (z[J].indexOf("%") !== -1)) {
                                A = J === 0 ? l.offsetWidth - Y.width : l.offsetHeight - Y.height;
                                s[J] = F ? parseFloat(r) / 100 * A + "px" : parseFloat(r) / A * 100 + "%"
                            }
                        }
                        r = s.join(" ")
                    }
                return this.parseComplex(l.style, r, k, y, D)
            },
            formatter: Pa
        });
        pa("backgroundSize", {
            defaultValue: "0 0",
            formatter: Pa
        });
        pa("perspective", {
            defaultValue: "0px",
            prefix: true
        });
        pa("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: true
        });
        pa("transformStyle", {
            prefix: true
        });
        pa("backfaceVisibility", {
            prefix: true
        });
        pa("margin", {
            parser: Ua("marginTop,marginRight,marginBottom,marginLeft")
        });
        pa("padding", {
            parser: Ua("paddingTop,paddingRight,paddingBottom,paddingLeft")
        });
        pa("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(l, k, r, s, y, D) {
                if (w < 9) {
                    s = l.currentStyle;
                    r = w < 8 ? " " : ",";
                    s = "rect(" + s.clipTop + r + s.clipRight + r + s.clipBottom + r + s.clipLeft + ")";
                    k = this.format(k).split(",").join(r)
                } else {
                    s = this.format($(l, this.p, c, false, this.dflt));
                    k = this.format(k)
                }
                return this.parseComplex(l.style,
                    s, k, y, D)
            }
        });
        pa("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: true,
            multi: true
        });
        pa("autoRound,strictUnits", {
            parser: function(l, k, r, s, y) {
                return y
            }
        });
        pa("border", {
            defaultValue: "0px solid #000",
            parser: function(l, k, r, s, y, D) {
                return this.parseComplex(l.style, this.format($(l, "borderTopWidth", c, false, "0px") + " " + $(l, "borderTopStyle", c, false, "solid") + " " + $(l, "borderTopColor", c, false, "#000")), this.format(k), y, D)
            },
            color: true,
            formatter: function(l) {
                var k = l.split(" ");
                return k[0] + " " + (k[1] || "solid") + " " + (l.match(Ga) || ["#000"])[0]
            }
        });
        pa("float,cssFloat,styleFloat", {
            parser: function(l, k, r, s, y) {
                l = l.style;
                s = "cssFloat" in l ? "cssFloat" : "styleFloat";
                return new ua(l, s, 0, 0, y, -1, r, false, 0, l[s], k)
            }
        });
        var fb = function(l) {
            var k = this.t,
                r = k.filter;
            l = this.s + this.c * l | 0;
            var s;
            if (l === 100)
                if (r.indexOf("atrix(") === -1 && r.indexOf("radient(") === -1) {
                    k.removeAttribute("filter");
                    s = !$(this.data, "filter")
                } else {
                    k.filter = r.replace(B, "");
                    s = true
                }
            if (!s) {
                if (this.xn1) k.filter = r = r || "alpha(opacity=100)";
                if (r.indexOf("opacity") === -1) k.filter += " alpha(opacity=" +
                    l + ")";
                else k.filter = r.replace(n, "opacity=" + l)
            }
        };
        pa("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(l, k, r, s, y, D) {
                var z = parseFloat($(l, "opacity", c, false, "1")),
                    J = l.style,
                    F;
                k = parseFloat(k);
                if (r === "autoAlpha") {
                    F = $(l, "visibility", c);
                    if (z === 1 && F === "hidden" && k !== 0) z = 0;
                    y = new ua(J, "visibility", 0, 0, y, -1, null, false, 0, z !== 0 ? "visible" : "hidden", k === 0 ? "hidden" : "visible");
                    y.xs0 = "visible";
                    s._overwriteProps.push(y.n)
                }
                if (C) y = new ua(J, "opacity", z, k - z, y);
                else {
                    y = new ua(J, "opacity", z * 100, (k - z) * 100, y);
                    y.xn1 = r ===
                        "autoAlpha" ? 1 : 0;
                    J.zoom = 1;
                    y.type = 2;
                    y.b = "alpha(opacity=" + y.s + ")";
                    y.e = "alpha(opacity=" + (y.s + y.c) + ")";
                    y.data = l;
                    y.plugin = D;
                    y.setRatio = fb
                }
                return y
            }
        });
        var Za = function(l, k) {
                if (k) l.removeProperty ? l.removeProperty(k.replace(H, "-$1").toLowerCase()) : l.removeAttribute(k)
            },
            gb = function(l) {
                this.t._gsClassPT = this;
                if (l === 1 || l === 0) {
                    this.t.className = l === 0 ? this.b : this.e;
                    for (var k = this.data, r = this.t.style; k;) {
                        if (k.v) r[k.p] = k.v;
                        else Za(r, k.p);
                        k = k._next
                    }
                    if (l === 1 && this.t._gsClassPT === this) this.t._gsClassPT = null
                } else if (this.t.className !==
                    this.e) this.t.className = this.e
            };
        pa("className", {
            parser: function(l, k, r, s, y, D, z) {
                var J = l.className,
                    F = l.style.cssText,
                    A, O, Q;
                y = s._classNamePT = new ua(l, r, 0, 0, y, 2);
                y.setRatio = gb;
                y.pr = -11;
                a = true;
                y.b = J;
                r = za(l, c);
                if (A = l._gsClassPT) {
                    O = {};
                    for (Q = A.data; Q;) {
                        O[Q.p] = 1;
                        Q = Q._next
                    }
                    A.setRatio(1)
                }
                l._gsClassPT = y;
                y.e = k.charAt(1) !== "=" ? k : J.replace(RegExp("\\s*\\b" + k.substr(2) + "\\b"), "") + (k.charAt(0) === "+" ? " " + k.substr(2) : "");
                if (s._tween._duration) {
                    l.className = y.e;
                    k = Ca(l, r, za(l), z, O);
                    l.className = J;
                    y.data = k.firstMPT;
                    l.style.cssText =
                        F;
                    y = y.xfirst = s.parse(l, k.difs, y, D)
                }
                return y
            }
        });
        var hb = function(l) {
            if (l === 1 || l === 0)
                if (this.data._totalTime === this.data._totalDuration) {
                    l = this.e === "all";
                    for (var k = this.t.style, r = l ? k.cssText.split(";") : this.e.split(","), s = r.length, y = p.transform.parse, D; --s > -1;) {
                        D = r[s];
                        if (l) D = D.substr(0, D.indexOf(":")).split(" ").join("");
                        if (p[D]) D = p[D].parse === y ? Aa : p[D].p;
                        Za(k, D)
                    }
                }
        };
        pa("clearProps", {
            parser: function(l, k, r, s, y) {
                y = new ua(l, r, 0, 0, y, 2);
                y.setRatio = hb;
                y.e = k;
                y.pr = -10;
                y.data = s._tween;
                a = true;
                return y
            }
        });
        f = "bezier,throwProps,physicsProps,physics2D".split(",");
        for (ya = f.length; ya--;) fa(f[ya]);
        f = j.prototype;
        f._firstPT = null;
        f._onInitTween = function(l, k, r) {
            if (!l.nodeType) return false;
            this._target = l;
            this._tween = r;
            this._vars = k;
            oa = k.autoRound;
            a = false;
            b = k.suffixMap || j.suffixMap;
            c = da(l, "");
            e = this._overwriteProps;
            r = l.style;
            var s, y, D, z;
            if (xa)
                if (r.zIndex === "") {
                    s = $(l, "zIndex", c);
                    if (s === "auto" || s === "") r.zIndex = 0
                }
            if (typeof k === "string") {
                y = r.cssText;
                s = za(l, c);
                r.cssText = y + ";" + k;
                s = Ca(l, s, za(l)).difs;
                if (!C && u.test(k)) s.opacity = parseFloat(RegExp.$1);
                k = s;
                r.cssText = y
            }
            this._firstPT =
                k = this.parse(l, k, null);
            if (this._transformType) {
                s = this._transformType === 3;
                if (Aa) {
                    if (ta) {
                        xa = true;
                        if (r.zIndex === "") {
                            z = $(l, "zIndex", c);
                            if (z === "auto" || z === "") r.zIndex = 0
                        }
                        if (x) r.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (s ? "visible" : "hidden")
                    }
                } else r.zoom = 1;
                for (r = k; r && r._next;) r = r._next;
                z = new ua(l, "transform", 0, 0, null, 2);
                this._linkCSSP(z, null, r);
                z.setRatio = s && Ba ? db : Aa ? eb : cb;
                z.data = this._transform || Ka(l, c, true);
                e.pop()
            }
            if (a) {
                for (; k;) {
                    l = k._next;
                    for (r = y; r && r.pr > k.pr;) r = r._next;
                    if (k._prev =
                        r ? r._prev : D) k._prev._next = k;
                    else y = k;
                    if (k._next = r) r._prev = k;
                    else D = k;
                    k = l
                }
                this._firstPT = y
            }
            return true
        };
        f.parse = function(l, k, r, s) {
            var y = l.style,
                D, z, J, F, A, O, Q, N;
            for (D in k) {
                A = k[D];
                if (z = p[D]) r = z.parse(l, A, D, this, r, s, k);
                else {
                    z = $(l, D, c) + "";
                    Q = typeof A === "string";
                    if (D === "color" || D === "fill" || D === "stroke" || D.indexOf("Color") !== -1 || Q && E.test(A)) {
                        if (!Q) {
                            A = Ra(A);
                            A = (A.length > 3 ? "rgba(" : "rgb(") + A.join(",") + ")"
                        }
                        r = La(y, D, z, A, true, "transparent", r, 0, s)
                    } else if (Q && (A.indexOf(" ") !== -1 || A.indexOf(",") !== -1)) r = La(y, D, z,
                        A, true, null, r, 0, s);
                    else {
                        O = (J = parseFloat(z)) || J === 0 ? z.substr((J + "").length) : "";
                        if (z === "" || z === "auto")
                            if (D === "width" || D === "height") {
                                J = l;
                                N = D;
                                F = c;
                                O = parseFloat(N === "width" ? J.offsetWidth : J.offsetHeight);
                                N = $a[N];
                                var Z = N.length;
                                for (F = F || da(J, null); --Z > -1;) {
                                    O -= parseFloat($(J, "padding" + N[Z], F, true)) || 0;
                                    O -= parseFloat($(J, "border" + N[Z] + "Width", F, true)) || 0
                                }
                                J = O;
                                O = "px"
                            } else if (D === "left" || D === "top") {
                            J = wa(l, D, c);
                            O = "px"
                        } else {
                            J = D !== "opacity" ? 0 : 1;
                            O = ""
                        }
                        if (N = Q && A.charAt(1) === "=") {
                            F = parseInt(A.charAt(0) + "1", 10);
                            A = A.substr(2);
                            F *= parseFloat(A);
                            Q = A.replace(d, "")
                        } else {
                            F = parseFloat(A);
                            Q = Q ? A.substr((F + "").length) || "" : ""
                        }
                        if (Q === "") Q = b[D] || O;
                        A = F || F === 0 ? (N ? F + J : F) + Q : k[D];
                        if (O !== Q)
                            if (Q !== "")
                                if (F || F === 0)
                                    if (J || J === 0) {
                                        J = ia(l, D, J, O);
                                        if (Q === "%") {
                                            J /= ia(l, D, 100, "%") / 100;
                                            if (J > 100) J = 100;
                                            if (k.strictUnits !== true) z = J + "%"
                                        } else if (Q === "em") J /= ia(l, D, 1, "em");
                                        else {
                                            F = ia(l, D, F, Q);
                                            Q = "px"
                                        }
                                        if (N)
                                            if (F || F === 0) A = F + J + Q
                                    }
                        if (N) F += J;
                        if ((J || J === 0) && (F || F === 0)) {
                            r = new ua(y, D, J, F - J, r, 0, "css_" + D, oa !== false && (Q === "px" || D === "zIndex"), 0, z, A);
                            r.xs0 = Q
                        } else if (y[D] ===
                            undefined || !A && (A + "" === "NaN" || A == null)) window.console && console.log("invalid " + D + " tween value: " + k[D]);
                        else {
                            r = new ua(y, D, F || J || 0, 0, r, -1, "css_" + D, false, 0, z, A);
                            r.xs0 = A === "none" && (D === "display" || D.indexOf("Style") !== -1) ? z : A
                        }
                    }
                }
                if (s)
                    if (r && !r.plugin) r.plugin = s
            }
            return r
        };
        f.setRatio = function(l) {
            var k = this._firstPT,
                r, s;
            if (l === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0))
                for (; k;) {
                    if (k.type !== 2) k.t[k.p] = k.e;
                    else k.setRatio(l);
                    k = k._next
                } else if (l || !(this._tween._time === this._tween._duration ||
                        this._tween._time === 0) || this._tween._rawPrevTime === -1.0E-6)
                    for (; k;) {
                        r = k.c * l + k.s;
                        if (k.r) r = r > 0 ? r + 0.5 | 0 : r - 0.5 | 0;
                        else if (r < 1.0E-6)
                            if (r > -1.0E-6) r = 0;
                        if (k.type)
                            if (k.type === 1) {
                                s = k.l;
                                if (s === 2) k.t[k.p] = k.xs0 + r + k.xs1 + k.xn1 + k.xs2;
                                else if (s === 3) k.t[k.p] = k.xs0 + r + k.xs1 + k.xn1 + k.xs2 + k.xn2 + k.xs3;
                                else if (s === 4) k.t[k.p] = k.xs0 + r + k.xs1 + k.xn1 + k.xs2 + k.xn2 + k.xs3 + k.xn3 + k.xs4;
                                else if (s === 5) k.t[k.p] = k.xs0 + r + k.xs1 + k.xn1 + k.xs2 + k.xn2 + k.xs3 + k.xn3 + k.xs4 + k.xn4 + k.xs5;
                                else {
                                    r = k.xs0 + r + k.xs1;
                                    for (s = 1; s < k.l; s++) r += k["xn" + s] + k["xs" + (s + 1)];
                                    k.t[k.p] = r
                                }
                            } else if (k.type === -1) k.t[k.p] = k.xs0;
                        else k.setRatio && k.setRatio(l);
                        else k.t[k.p] = r + k.xs0;
                        k = k._next
                    } else
                        for (; k;) {
                            if (k.type !== 2) k.t[k.p] = k.b;
                            else k.setRatio(l);
                            k = k._next
                        }
        };
        f._enableTransforms = function(l) {
            this._transformType = l || this._transformType === 3 ? 3 : 2
        };
        f._linkCSSP = function(l, k, r, s) {
            if (l) {
                if (k) k._prev = l;
                if (l._next) l._next._prev = l._prev;
                if (r) r._next = l;
                else if (!s && this._firstPT === null) this._firstPT = l;
                if (l._prev) l._prev._next = l._next;
                else if (this._firstPT === l) this._firstPT = l._next;
                l._next =
                    k;
                l._prev = r
            }
            return l
        };
        f._kill = function(l) {
            var k = l,
                r, s;
            if (l.css_autoAlpha || l.css_alpha) {
                k = {};
                for (s in l) k[s] = l[s];
                k.css_opacity = 1;
                if (k.css_autoAlpha) k.css_visibility = 1
            }
            if (l.css_className && (r = this._classNamePT)) {
                if ((l = r.xfirst) && l._prev) this._linkCSSP(l._prev, r._next, l._prev._prev);
                else if (l === this._firstPT) this._firstPT = r._next;
                r._next && this._linkCSSP(r._next, r._next._next, l._prev);
                this._classNamePT = null
            }
            return q.prototype._kill.call(this, k)
        };
        var Na = function(l, k, r) {
            var s, y, D;
            if (l.slice)
                for (s = l.length; --s >
                    -1;) Na(l[s], k, r);
            else {
                l = l.childNodes;
                for (s = l.length; --s > -1;) {
                    y = l[s];
                    D = y.type;
                    if (y.style) {
                        k.push(za(y));
                        r && r.push(y)
                    }
                    if ((D === 1 || D === 9 || D === 11) && y.childNodes.length) Na(y, k, r)
                }
            }
        };
        j.cascadeTo = function(l, k, r) {
            var s = m.to(l, k, r),
                y = [s],
                D = [],
                z = [],
                J = [],
                F = m._internals.reservedProps,
                A;
            l = s._targets || s.target;
            Na(l, D, J);
            s.render(k, true);
            Na(l, z);
            s.render(0, true);
            s._enabled(true);
            for (l = J.length; --l > -1;) {
                s = Ca(J[l], D[l], z[l]);
                if (s.firstMPT) {
                    s = s.difs;
                    for (A in r)
                        if (F[A]) s[A] = r[A];
                    y.push(m.to(J[l], k, s))
                }
            }
            return y
        };
        q.activate([j]);
        return j
    }, true);
    (function() {
        var q = window._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(m, j, a) {
                this._tween = a;
                return true
            }
        }).prototype;
        q._onInitAllProps = function() {
            for (var m = this._tween, j = m.vars.roundProps instanceof Array ? m.vars.roundProps : m.vars.roundProps.split(","), a = j.length, b = {}, c = m._propLookup.roundProps, e, p, f; --a > -1;) b[j[a]] = 1;
            for (a = j.length; --a > -1;) {
                e = j[a];
                for (p = m._firstPT; p;) {
                    f = p._next;
                    if (p.pg) p.t._roundProps(b, true);
                    else if (p.n === e) {
                        this._add(p.t, e, p.s, p.c);
                        if (f) f._prev =
                            p._prev;
                        if (p._prev) p._prev._next = f;
                        else if (m._firstPT === p) m._firstPT = f;
                        p._next = p._prev = null;
                        m._propLookup[e] = c
                    }
                    p = f
                }
            }
            return false
        };
        q._add = function(m, j, a, b) {
            this._addTween(m, j, a, a + b, j, true);
            this._overwriteProps.push(j)
        }
    })();
    window._gsDefine.plugin({
        propName: "attr",
        API: 2,
        init: function(q, m) {
            var j;
            if (typeof q.setAttribute !== "function") return false;
            this._target = q;
            this._proxy = {};
            for (j in m) {
                this._addTween(this._proxy, j, parseFloat(q.getAttribute(j)), m[j], j);
                this._overwriteProps.push(j)
            }
            return true
        },
        set: function(q) {
            this._super.setRatio.call(this,
                q);
            q = this._overwriteProps;
            for (var m = q.length, j; --m > -1;) {
                j = q[m];
                this._target.setAttribute(j, this._proxy[j] + "")
            }
        }
    });
    window._gsDefine.plugin({
        propName: "directionalRotation",
        API: 2,
        init: function(q, m) {
            if (typeof m !== "object") m = {
                rotation: m
            };
            this.finals = {};
            var j = m.useRadians === true ? Math.PI * 2 : 360,
                a, b, c, e, p;
            for (a in m)
                if (a !== "useRadians") {
                    p = (m[a] + "").split("_");
                    b = p[0];
                    c = parseFloat(typeof q[a] !== "function" ? q[a] : q[a.indexOf("set") || typeof q["get" + a.substr(3)] !== "function" ? a : "get" + a.substr(3)]());
                    b = this.finals[a] =
                        typeof b === "string" && b.charAt(1) === "=" ? c + parseInt(b.charAt(0) + "1", 10) * Number(b.substr(2)) : Number(b) || 0;
                    e = b - c;
                    if (p.length) {
                        b = p.join("_");
                        if (b.indexOf("short") !== -1) {
                            e %= j;
                            if (e !== e % (j / 2)) e = e < 0 ? e + j : e - j
                        }
                        if (b.indexOf("_cw") !== -1 && e < 0) e = (e + j * 9999999999) % j - (e / j | 0) * j;
                        else if (b.indexOf("ccw") !== -1 && e > 0) e = (e - j * 9999999999) % j - (e / j | 0) * j
                    }
                    if (e > 1.0E-6 || e < -1.0E-6) {
                        this._addTween(q, a, c, c + e, a);
                        this._overwriteProps.push(a)
                    }
                }
            return true
        },
        set: function(q) {
            if (q !== 1) this._super.setRatio.call(this, q);
            else
                for (q = this._firstPT; q;) {
                    if (q.f) q.t[q.p](this.finals[q.p]);
                    else q.t[q.p] = this.finals[q.p];
                    q = q._next
                }
        }
    })._autoCSS = true;
    window._gsDefine("easing.Back", ["easing.Ease"], function(q) {
        var m = window.GreenSockGlobals || window,
            j = Math.PI * 2,
            a = Math.PI / 2,
            b = m.com.greensock._class,
            c = function(n, u) {
                var B = b("easing." + n, function() {}, true),
                    E = B.prototype = new q;
                E.constructor = B;
                E.getRatio = u;
                return B
            },
            e = q.register || function() {},
            p = function(n, u, B, E) {
                u = b("easing." + n, {
                    easeOut: new u,
                    easeIn: new B,
                    easeInOut: new E
                }, true);
                e(u, n);
                return u
            },
            f = function(n, u, B) {
                this.t = n;
                this.v = u;
                if (B) {
                    this.next =
                        B;
                    B.prev = this;
                    this.c = B.v - u;
                    this.gap = B.t - n
                }
            },
            h = function(n, u) {
                var B = b("easing." + n, function(H) {
                        this._p1 = H || H === 0 ? H : 1.70158;
                        this._p2 = this._p1 * 1.525
                    }, true),
                    E = B.prototype = new q;
                E.constructor = B;
                E.getRatio = u;
                E.config = function(H) {
                    return new B(H)
                };
                return B
            };
        h = p("Back", h("BackOut", function(n) {
            return (n -= 1) * n * ((this._p1 + 1) * n + this._p1) + 1
        }), h("BackIn", function(n) {
            return n * n * ((this._p1 + 1) * n - this._p1)
        }), h("BackInOut", function(n) {
            return (n *= 2) < 1 ? 0.5 * n * n * ((this._p2 + 1) * n - this._p2) : 0.5 * ((n -= 2) * n * ((this._p2 + 1) * n + this._p2) +
                2)
        }));
        var t = b("easing.SlowMo", function(n, u, B) {
                if (n == null) n = 0.7;
                else if (n > 1) n = 1;
                this._p = n !== 1 ? u || u === 0 ? u : 0.7 : 0;
                this._p1 = (1 - n) / 2;
                this._p2 = n;
                this._p3 = this._p1 + this._p2;
                this._calcEnd = B === true
            }, true),
            g = t.prototype = new q,
            v, d;
        g.constructor = t;
        g.getRatio = function(n) {
            var u = n + (0.5 - n) * this._p;
            if (n < this._p1) return this._calcEnd ? 1 - (n = 1 - n / this._p1) * n : u - (n = 1 - n / this._p1) * n * n * n * u;
            else if (n > this._p3) return this._calcEnd ? 1 - (n = (n - this._p3) / this._p1) * n : u + (n - u) * (n = (n - this._p3) / this._p1) * n * n * n;
            return this._calcEnd ? 1 : u
        };
        t.ease = new t(0.7, 0.7);
        g.config = t.config = function(n, u, B) {
            return new t(n, u, B)
        };
        v = b("easing.SteppedEase", function(n) {
            n = n || 1;
            this._p1 = 1 / n;
            this._p2 = n + 1
        }, true);
        g = v.prototype = new q;
        g.constructor = v;
        g.getRatio = function(n) {
            if (n < 0) n = 0;
            else if (n >= 1) n = 0.999999999;
            return (this._p2 * n >> 0) * this._p1
        };
        g.config = v.config = function(n) {
            return new v(n)
        };
        d = b("easing.RoughEase", function(n) {
            n = n || {};
            var u = n.taper || "none",
                B = [],
                E = 0,
                H = (n.points || 20) | 0,
                G = H,
                P = n.randomize !== false,
                K = n.clamp === true,
                T = n.template instanceof q ? n.template :
                null;
            n = typeof n.strength === "number" ? n.strength * 0.4 : 0.4;
            for (var V, R, M; --G > -1;) {
                V = P ? Math.random() : 1 / H * G;
                R = T ? T.getRatio(V) : V;
                if (u === "none") M = n;
                else if (u === "out") {
                    M = 1 - V;
                    M = M * M * n
                } else if (u === "in") M = V * V * n;
                else {
                    M = V < 0.5 ? V * 2 : (1 - V) * 2;
                    M = M * M * 0.5 * n
                }
                if (P) R += Math.random() * M - M * 0.5;
                else if (G % 2) R += M * 0.5;
                else R -= M * 0.5;
                if (K)
                    if (R > 1) R = 1;
                    else if (R < 0) R = 0;
                B[E++] = {
                    x: V,
                    y: R
                }
            }
            B.sort(function(X, ba) {
                return X.x - ba.x
            });
            u = new f(1, 1, null);
            for (G = H; --G > -1;) {
                H = B[G];
                u = new f(H.x, H.y, u)
            }
            this._prev = new f(0, 0, u.t !== 0 ? u : u.next)
        }, true);
        g = d.prototype =
            new q;
        g.constructor = d;
        g.getRatio = function(n) {
            var u = this._prev;
            if (n > u.t) {
                for (; u.next && n >= u.t;) u = u.next;
                u = u.prev
            } else
                for (; u.prev && n <= u.t;) u = u.prev;
            this._prev = u;
            return u.v + (n - u.t) / u.gap * u.c
        };
        g.config = function(n) {
            return new d(n)
        };
        d.ease = new d;
        p("Bounce", c("BounceOut", function(n) {
            if (n < 1 / 2.75) return 7.5625 * n * n;
            else if (n < 2 / 2.75) return 7.5625 * (n -= 1.5 / 2.75) * n + 0.75;
            else if (n < 2.5 / 2.75) return 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375;
            return 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375
        }), c("BounceIn", function(n) {
            if ((n = 1 - n) < 1 / 2.75) return 1 -
                7.5625 * n * n;
            else if (n < 2 / 2.75) return 1 - (7.5625 * (n -= 1.5 / 2.75) * n + 0.75);
            else if (n < 2.5 / 2.75) return 1 - (7.5625 * (n -= 2.25 / 2.75) * n + 0.9375);
            return 1 - (7.5625 * (n -= 2.625 / 2.75) * n + 0.984375)
        }), c("BounceInOut", function(n) {
            var u = n < 0.5;
            n = u ? 1 - n * 2 : n * 2 - 1;
            if (n < 1 / 2.75) n *= 7.5625 * n;
            else n = n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375 : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
            return u ? (1 - n) * 0.5 : n * 0.5 + 0.5
        }));
        p("Circ", c("CircOut", function(n) {
            return Math.sqrt(1 - (n -= 1) * n)
        }), c("CircIn", function(n) {
            return -(Math.sqrt(1 -
                n * n) - 1)
        }), c("CircInOut", function(n) {
            return (n *= 2) < 1 ? -0.5 * (Math.sqrt(1 - n * n) - 1) : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1)
        }));
        g = function(n, u, B) {
            var E = b("easing." + n, function(H, G) {
                this._p1 = H || 1;
                this._p2 = G || B;
                this._p3 = this._p2 / j * (Math.asin(1 / this._p1) || 0)
            }, true);
            n = E.prototype = new q;
            n.constructor = E;
            n.getRatio = u;
            n.config = function(H, G) {
                return new E(H, G)
            };
            return E
        };
        p("Elastic", g("ElasticOut", function(n) {
            return this._p1 * Math.pow(2, -10 * n) * Math.sin((n - this._p3) * j / this._p2) + 1
        }, 0.3), g("ElasticIn", function(n) {
            return -(this._p1 *
                Math.pow(2, 10 * (n -= 1)) * Math.sin((n - this._p3) * j / this._p2))
        }, 0.3), g("ElasticInOut", function(n) {
            return (n *= 2) < 1 ? -0.5 * this._p1 * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - this._p3) * j / this._p2) : this._p1 * Math.pow(2, -10 * (n -= 1)) * Math.sin((n - this._p3) * j / this._p2) * 0.5 + 1
        }, 0.45));
        p("Expo", c("ExpoOut", function(n) {
            return 1 - Math.pow(2, -10 * n)
        }), c("ExpoIn", function(n) {
            return Math.pow(2, 10 * (n - 1)) - 0.0010
        }), c("ExpoInOut", function(n) {
            return (n *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (n - 1)) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)))
        }));
        p("Sine", c("SineOut", function(n) {
            return Math.sin(n *
                a)
        }), c("SineIn", function(n) {
            return -Math.cos(n * a) + 1
        }), c("SineInOut", function(n) {
            return -0.5 * (Math.cos(Math.PI * n) - 1)
        }));
        b("easing.EaseLookup", {
            find: function(n) {
                return q.map[n]
            }
        }, true);
        e(m.SlowMo, "SlowMo", "ease,");
        e(d, "RoughEase", "ease,");
        e(v, "SteppedEase", "ease,");
        return h
    }, true)
});
(function(q) {
    var m = q.GreenSockGlobals || q,
        j = function(o) {
            o = o.split(".");
            var x = m,
                w;
            for (w = 0; w < o.length; w++) x[o[w]] = x = x[o[w]] || {};
            return x
        },
        a = j("com.greensock"),
        b = [].slice,
        c = function() {},
        e, p, f, h, t, g = {},
        v = function(o, x, w, C) {
            this.sc = g[o] ? g[o].sc : [];
            g[o] = this;
            this.gsClass = null;
            this.func = w;
            var I = [];
            this.check = function(L) {
                for (var U = x.length, S = U, da, $; --U > -1;)
                    if ((da = g[x[U]] || new v(x[U], [])).gsClass) {
                        I[U] = da.gsClass;
                        S--
                    } else L && da.sc.push(this);
                if (S === 0 && w) {
                    L = ("com.greensock." + o).split(".");
                    U = L.pop();
                    $ = j(L.join("."))[U] =
                        this.gsClass = w.apply(w, I);
                    if (C) {
                        m[U] = $;
                        if (typeof define === "function" && define.amd) define((q.GreenSockAMDPath ? q.GreenSockAMDPath + "/" : "") + o.split(".").join("/"), [], function() {
                            return $
                        });
                        else if (typeof module !== "undefined" && module.exports) module.exports = $
                    }
                    for (U = 0; U < this.sc.length; U++) this.sc[U].check()
                }
            };
            this.check(true)
        },
        d = q._gsDefine = function(o, x, w, C) {
            return new v(o, x, w, C)
        },
        n = a._class = function(o, x, w) {
            x = x || function() {};
            d(o, [], function() {
                return x
            }, w);
            return x
        };
    d.globals = m;
    var u = [0, 0, 1, 1],
        B = [],
        E = n("easing.Ease",
            function(o, x, w, C) {
                this._func = o;
                this._type = w || 0;
                this._power = C || 0;
                this._params = x ? u.concat(x) : u
            }, true),
        H = E.map = {},
        G = E.register = function(o, x, w, C) {
            x = x.split(",");
            var I = x.length;
            w = (w || "easeIn,easeOut,easeInOut").split(",");
            for (var L, U, S, da; --I > -1;) {
                U = x[I];
                L = C ? n("easing." + U, null, true) : a.easing[U] || {};
                for (S = w.length; --S > -1;) {
                    da = w[S];
                    H[U + "." + da] = H[da + U] = L[da] = o.getRatio ? o : o[da] || new o
                }
            }
        };
    f = E.prototype;
    f._calcEnd = false;
    f.getRatio = function(o) {
        if (this._func) {
            this._params[0] = o;
            return this._func.apply(null, this._params)
        }
        var x =
            this._type,
            w = this._power,
            C = x === 1 ? 1 - o : x === 2 ? o : o < 0.5 ? o * 2 : (1 - o) * 2;
        if (w === 1) C *= C;
        else if (w === 2) C *= C * C;
        else if (w === 3) C *= C * C * C;
        else if (w === 4) C *= C * C * C * C;
        return x === 1 ? 1 - C : x === 2 ? C : o < 0.5 ? C / 2 : 1 - C / 2
    };
    e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
    for (p = e.length; --p > -1;) {
        f = e[p] + ",Power" + p;
        G(new E(null, null, 1, p), f, "easeOut", true);
        G(new E(null, null, 2, p), f, "easeIn" + (p === 0 ? ",easeNone" : ""));
        G(new E(null, null, 3, p), f, "easeInOut")
    }
    H.linear = a.easing.Linear.easeIn;
    H.swing = a.easing.Quad.easeInOut;
    var P = n("events.EventDispatcher",
        function(o) {
            this._listeners = {};
            this._eventTarget = o || this
        });
    f = P.prototype;
    f.addEventListener = function(o, x, w, C, I) {
        I = I || 0;
        var L = this._listeners[o],
            U = 0,
            S;
        if (L == null) this._listeners[o] = L = [];
        for (S = L.length; --S > -1;) {
            o = L[S];
            if (o.c === x && o.s === w) L.splice(S, 1);
            else if (U === 0 && o.pr < I) U = S + 1
        }

        L.splice(U, 0, {
            c: x,
            s: w,
            up: C,
            pr: I
        });
        this === h && !t && h.wake()
    };
    f.removeEventListener = function(o, x) {
        var w = this._listeners[o],
            C;
        if (w)
            for (C = w.length; --C > -1;)
                if (w[C].c === x) {
                    w.splice(C, 1);
                    break
                }
    };
    f.dispatchEvent = function(o) {
        var x = this._listeners[o],
            w, C, I;
        if (x) {
            w = x.length;
            for (C = this._eventTarget; --w > -1;) {
                I = x[w];
                I.up ? I.c.call(I.s || C, {
                    type: o,
                    target: C
                }) : I.c.call(I.s || C)
            }
        }
    };
    var K = q.requestAnimationFrame,
        T = q.cancelAnimationFrame,
        V = Date.now || function() {
            return (new Date).getTime()
        };
    e = ["ms", "moz", "webkit", "o"];
    for (p = e.length; --p > -1 && !K;) {
        K = q[e[p] + "RequestAnimationFrame"];
        T = q[e[p] + "CancelAnimationFrame"] || q[e[p] + "CancelRequestAnimationFrame"]
    }
    n("Ticker", function(o, x) {
        var w = this,
            C = V(),
            I = x !== false && K,
            L, U, S, da, $, ia = function(wa) {
                w.time = (V() - C) / 1E3;
                var za =
                    S,
                    Ca = w.time - $;
                if (!L || Ca > 0 || wa === true) {
                    w.frame++;
                    $ += Ca + (Ca >= da ? 0.0040 : da - Ca);
                    w.dispatchEvent("tick")
                }
                if (wa !== true && za === S) S = U(ia)
            };
        P.call(w);
        this.time = this.frame = 0;
        this.tick = function() {
            ia(true)
        };
        this.sleep = function() {
            if (S != null) {
                !I || !T ? clearTimeout(S) : T(S);
                U = c;
                S = null;
                if (w === h) t = false
            }
        };
        this.wake = function() {
            S !== null && w.sleep();
            U = L === 0 ? c : !I || !K ? function(wa) {
                return setTimeout(wa, ($ - w.time) * 1E3 + 1 | 0)
            } : K;
            if (w === h) t = true;
            ia(2)
        };
        this.fps = function(wa) {
            if (!arguments.length) return L;
            L = wa;
            da = 1 / (L || 60);
            $ = this.time +
                da;
            w.wake()
        };
        this.useRAF = function(wa) {
            if (!arguments.length) return I;
            w.sleep();
            I = wa;
            w.fps(L)
        };
        w.fps(o);
        setTimeout(function() {
            if (I && (!S || w.frame < 5)) w.useRAF(false)
        }, 1500)
    });
    f = a.Ticker.prototype = new a.events.EventDispatcher;
    f.constructor = a.Ticker;
    var R = n("core.Animation", function(o, x) {
        this.vars = x || {};
        this._duration = this._totalDuration = o || 0;
        this._delay = Number(this.vars.delay) || 0;
        this._timeScale = 1;
        this._active = this.vars.immediateRender === true;
        this.data = this.vars.data;
        this._reversed = this.vars.reversed ===
            true;
        if (fa) {
            t || h.wake();
            var w = this.vars.useFrames ? Y : fa;
            w.add(this, w._time);
            this.vars.paused && this.paused(true)
        }
    });
    h = R.ticker = new a.Ticker;
    f = R.prototype;
    f._dirty = f._gc = f._initted = f._paused = false;
    f._totalTime = f._time = 0;
    f._rawPrevTime = -1;
    f._next = f._last = f._onUpdate = f._timeline = f.timeline = null;
    f._paused = false;
    f.play = function(o, x) {
        arguments.length && this.seek(o, x);
        return this.reversed(false).paused(false)
    };
    f.pause = function(o, x) {

        arguments.length && this.seek(o, x);
        return this.paused(true)
    };
    f.resume = function(o,
        x) {
        arguments.length && this.seek(o, x);
        return this.paused(false)
    };
    f.seek = function(o, x) {
        return this.totalTime(Number(o), x !== false)
    };
    f.restart = function(o, x) {
        return this.reversed(false).paused(false).totalTime(o ? -this._delay : 0, x !== false, true)
    };
    f.reverse = function(o, x) {
        if (arguments.length) this.seek(o || this.totalDuration(), x);
        return this.reversed(true).paused(false)
    };
    f.render = function() {};
    f.invalidate = function() {
        return this
    };
    f._enabled = function(o, x) {
        t || h.wake();
        this._gc = !o;
        this._active = o && !this._paused && this._totalTime >
            0 && this._totalTime < this._totalDuration;
        if (x !== true)
            if (o && !this.timeline) this._timeline.add(this, this._startTime - this._delay);
            else !o && this.timeline && this._timeline._remove(this, true);
        return false
    };
    f._kill = function() {
        return this._enabled(false, false)
    };
    f.kill = function(o, x) {
        this._kill(o, x);
        return this
    };
    f._uncache = function(o) {
        for (o = o ? this : this.timeline; o;) {
            o._dirty = true;
            o = o.timeline
        }
        return this
    };
    f.eventCallback = function(o, x, w, C) {
        if (o == null) return null;
        else if (o.substr(0, 2) === "on") {
            var I = this.vars,
                L;
            if (arguments.length ===
                1) return I[o];
            if (x == null) delete I[o];
            else {
                I[o] = x;
                I[o + "Params"] = w;
                I[o + "Scope"] = C;
                if (w)
                    for (L = w.length; --L > -1;)
                        if (w[L] === "{self}") {
                            w = I[o + "Params"] = w.concat();
                            w[L] = this
                        }
            }
            if (o === "onUpdate") this._onUpdate = x
        }
        return this
    };
    f.delay = function(o) {
        if (!arguments.length) return this._delay;
        this._timeline.smoothChildTiming && this.startTime(this._startTime + o - this._delay);
        this._delay = o;
        return this
    };
    f.duration = function(o) {
        if (!arguments.length) {
            this._dirty = false;
            return this._duration
        }
        this._duration = this._totalDuration =
            o;
        this._uncache(true);
        this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && o !== 0 && this.totalTime(this._totalTime * (o / this._duration), true);
        return this
    };
    f.totalDuration = function(o) {
        this._dirty = false;
        return !arguments.length ? this._totalDuration : this.duration(o)
    };
    f.time = function(o, x) {
        if (!arguments.length) return this._time;
        this._dirty && this.totalDuration();
        return this.totalTime(o > this._duration ? this._duration : o, x)
    };
    f.totalTime = function(o, x, w) {
        t || h.wake();
        if (!arguments.length) return this._totalTime;
        if (this._timeline) {
            if (o < 0 && !w) o += this.totalDuration();
            if (this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var C = this._totalDuration,
                    I = this._timeline;
                if (o > C && !w) o = C;
                this._startTime = (this._paused ? this._pauseTime : I._time) - (!this._reversed ? o : C - o) / this._timeScale;
                I._dirty || this._uncache(false);
                if (!I._active)
                    for (; I._timeline;) {
                        I.totalTime(I._totalTime, true);
                        I = I._timeline
                    }
            }
            this._gc && this._enabled(true, false);
            this._totalTime !== o && this.render(o, x, false)
        }
        return this
    };
    f.startTime = function(o) {
        if (!arguments.length) return this._startTime;
        if (o !== this._startTime) {
            this._startTime = o;
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, o - this._delay)
        }
        return this
    };
    f.timeScale = function(o) {
        if (!arguments.length) return this._timeScale;
        o = o || 1.0E-6;
        if (this._timeline && this._timeline.smoothChildTiming) {
            var x = this._pauseTime;
            x = x || x === 0 ? x : this._timeline.totalTime();
            this._startTime = x - (x - this._startTime) * this._timeScale / o
        }
        this._timeScale = o;
        return this._uncache(false)
    };
    f.reversed = function(o) {
        if (!arguments.length) return this._reversed;
        if (o != this._reversed) {
            this._reversed = o;
            this.totalTime(this._totalTime, true)
        }
        return this
    };
    f.paused = function(o) {
        if (!arguments.length) return this._paused;
        if (o != this._paused)
            if (this._timeline) {
                !t && !o && h.wake();
                var x = this._timeline.rawTime(),
                    w = x - this._pauseTime;
                if (!o && this._timeline.smoothChildTiming) {
                    this._startTime += w;
                    this._uncache(false)
                }
                this._pauseTime = o ? x : null;
                this._paused = o;
                this._active = !o && this._totalTime > 0 && this._totalTime < this._totalDuration;
                !o && w !== 0 && this._duration !== 0 && this.render(this._totalTime,
                    true, true)
            }
        this._gc && !o && this._enabled(true, false);
        return this
    };
    e = n("core.SimpleTimeline", function(o) {
        R.call(this, 0, o);
        this.autoRemoveChildren = this.smoothChildTiming = true
    });
    f = e.prototype = new R;
    f.constructor = e;
    f.kill()._gc = false;
    f._first = f._last = null;
    f._sortChildren = false;
    f.add = f.insert = function(o, x) {
        var w, C;
        o._startTime = Number(x || 0) + o._delay;
        if (o._paused)
            if (this !== o._timeline) o._pauseTime = o._startTime + (this.rawTime() - o._startTime) / o._timeScale;
        o.timeline && o.timeline._remove(o, true);
        o.timeline = o._timeline =
            this;
        o._gc && o._enabled(true, true);
        w = this._last;
        if (this._sortChildren)
            for (C = o._startTime; w && w._startTime > C;) w = w._prev;
        if (w) {
            o._next = w._next;
            w._next = o
        } else {
            o._next = this._first;
            this._first = o
        }
        if (o._next) o._next._prev = o;
        else this._last = o;
        o._prev = w;
        this._timeline && this._uncache(true);
        return this
    };
    f._remove = function(o, x) {
        if (o.timeline === this) {
            x || o._enabled(false, true);
            o.timeline = null;
            if (o._prev) o._prev._next = o._next;
            else if (this._first === o) this._first = o._next;
            if (o._next) o._next._prev = o._prev;
            else if (this._last ===
                o) this._last = o._prev;
            this._timeline && this._uncache(true)
        }
        return this
    };
    f.render = function(o, x, w) {
        var C = this._first,
            I;
        for (this._totalTime = this._time = this._rawPrevTime = o; C;) {
            I = C._next;
            if (C._active || o >= C._startTime && !C._paused) C._reversed ? C.render((!C._dirty ? C._totalDuration : C.totalDuration()) - (o - C._startTime) * C._timeScale, x, w) : C.render((o - C._startTime) * C._timeScale, x, w);
            C = I
        }
    };
    f.rawTime = function() {
        t || h.wake();
        return this._totalTime
    };
    var M = n("TweenLite", function(o, x, w) {
        R.call(this, x, w);
        if (o == null) throw "Cannot tween a null target.";
        this.target = o = typeof o !== "string" ? o : M.selector(o) || o;
        var C = o.jquery || o.length && o[0] && o[0].nodeType && o[0].style;
        w = this.vars.overwrite;
        var I;
        this._overwrite = w = w == null ? W[M.defaultOverwrite] : typeof w === "number" ? w >> 0 : W[w];
        if ((C || o instanceof Array) && typeof o[0] !== "number") {
            this._targets = I = b.call(o, 0);
            this._propLookup = [];
            this._siblings = [];
            for (o = 0; o < I.length; o++)
                if (C = I[o])
                    if (typeof C === "string") {
                        C = I[o--] = M.selector(C);
                        typeof C === "string" && I.splice(o + 1, 1)
                    } else if (C.length && C[0] && C[0].nodeType && C[0].style) {
                I.splice(o--,
                    1);
                this._targets = I = I.concat(b.call(C, 0))
            } else {
                this._siblings[o] = ga(C, this, false);
                w === 1 && this._siblings[o].length > 1 && oa(C, this, null, 1, this._siblings[o])
            } else I.splice(o--, 1)
        } else {
            this._propLookup = {};
            this._siblings = ga(o, this, false);
            w === 1 && this._siblings.length > 1 && oa(o, this, null, 1, this._siblings)
        }
        if (this.vars.immediateRender || x === 0 && this._delay === 0 && this.vars.immediateRender !== false) this.render(-this._delay, false, true)
    }, true);
    f = M.prototype = new R;
    f.constructor = M;
    f.kill()._gc = false;
    f.ratio = 0;
    f._firstPT =
        f._targets = f._overwrittenProps = f._startAt = null;
    f._notifyPluginsOfEnabled = false;
    M.version = "1.9.7";
    M.defaultEase = f._ease = new E(null, null, 1, 1);
    M.defaultOverwrite = "auto";
    M.ticker = h;
    M.autoSleep = true;
    M.selector = q.$ || q.jQuery || function(o) {
        if (q.$) {
            M.selector = q.$;
            return q.$(o)
        }
        return q.document ? q.document.getElementById(o.charAt(0) === "#" ? o.substr(1) : o) : o
    };
    p = M._internals = {};
    var X = M._plugins = {},
        ba = M._tweenLookup = {},
        ha = 0,
        ca = p.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1
        },
        W = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        Y = R._rootFramesTimeline = new e,
        fa = R._rootTimeline = new e;
    fa._startTime = h.time;
    Y._startTime =
        h.frame;
    fa._active = Y._active = true;
    R._updateRoot = function() {
        fa.render((h.time - fa._startTime) * fa._timeScale, false, false);
        Y.render((h.frame - Y._startTime) * Y._timeScale, false, false);
        if (!(h.frame % 120)) {
            var o, x, w;
            for (w in ba) {
                x = ba[w].tweens;
                for (o = x.length; --o > -1;) x[o]._gc && x.splice(o, 1);
                x.length === 0 && delete ba[w]
            }
            w = fa._first;
            if (!w || w._paused)
                if (M.autoSleep && !Y._first && h._listeners.tick.length === 1) {
                    for (; w && w._paused;) w = w._next;
                    w || h.sleep()
                }
        }
    };
    h.addEventListener("tick", R._updateRoot);
    var ga = function(o, x, w) {
            var C =
                o._gsTweenID,
                I;
            if (!ba[C || (o._gsTweenID = C = "t" + ha++)]) ba[C] = {
                target: o,
                tweens: []
            };
            if (x) {
                o = ba[C].tweens;
                o[I = o.length] = x;
                if (w)
                    for (; --I > -1;) o[I] === x && o.splice(I, 1)
            }
            return ba[C].tweens
        },
        oa = function(o, x, w, C, I) {
            var L, U, S;
            if (C === 1 || C >= 4) {
                o = I.length;
                for (L = 0; L < o; L++)
                    if ((S = I[L]) !== x) {
                        if (!S._gc)
                            if (S._enabled(false, false)) U = true
                    } else if (C === 5) break;
                return U
            }
            var da = x._startTime + 1.0E-10,
                $ = [],
                ia = 0,
                wa = x._duration === 0,
                za;
            for (L = I.length; --L > -1;)
                if (!((S = I[L]) === x || S._gc || S._paused))
                    if (S._timeline !== x._timeline) {
                        za = za ||
                            xa(x, 0, wa);
                        if (xa(S, za, wa) === 0) $[ia++] = S
                    } else if (S._startTime <= da)
                if (S._startTime + S.totalDuration() / S._timeScale + 1.0E-10 > da)(wa || !S._initted) && da - S._startTime <= 2.0E-10 || ($[ia++] = S);
            for (L = ia; --L > -1;) {
                S = $[L];
                if (C === 2)
                    if (S._kill(w, o)) U = true;
                if (C !== 2 || !S._firstPT && S._initted)
                    if (S._enabled(false, false)) U = true
            }
            return U
        },
        xa = function(o, x, w) {
            for (var C = o._timeline, I = C._timeScale, L = o._startTime; C._timeline;) {
                L += C._startTime;
                I *= C._timeScale;
                if (C._paused) return -100;
                C = C._timeline
            }
            L /= I;
            return L > x ? L - x : w && L === x || !o._initted &&
                L - x < 2.0E-10 ? 1.0E-10 : (L += o.totalDuration() / o._timeScale / I) > x + 1.0E-10 ? 0 : L - x - 1.0E-10
        };
    f._init = function() {
        var o = this.vars,
            x = this._overwrittenProps,
            w = this._duration,
            C = o.ease,
            I, L;
        if (o.startAt) {
            o.startAt.overwrite = 0;
            o.startAt.immediateRender = true;
            this._startAt = M.to(this.target, 0, o.startAt);
            if (o.immediateRender) {
                this._startAt = null;
                if (this._time === 0 && w !== 0) return
            }
        } else if (o.runBackwards && o.immediateRender && w !== 0)
            if (this._startAt) {
                this._startAt.render(-1, true);
                this._startAt = null
            } else if (this._time === 0) {
            x = {};
            for (I in o)
                if (!ca[I] || I === "autoCSS") x[I] = o[I];
            x.overwrite = 0;
            this._startAt = M.to(this.target, 0, x);
            return
        }
        this._ease = C ? C instanceof E ? o.easeParams instanceof Array ? C.config.apply(C, o.easeParams) : C : typeof C === "function" ? new E(C, o.easeParams) : H[C] || M.defaultEase : M.defaultEase;
        this._easeType = this._ease._type;
        this._easePower = this._ease._power;
        this._firstPT = null;
        if (this._targets)
            for (I = this._targets.length; --I > -1;) {
                if (this._initProps(this._targets[I], this._propLookup[I] = {}, this._siblings[I], x ? x[I] : null)) L =
                    true
            } else L = this._initProps(this.target, this._propLookup, this._siblings, x);
        L && M._onPluginEvent("_onInitAllProps", this);
        if (x) this._firstPT || typeof this.target !== "function" && this._enabled(false, false);
        if (o.runBackwards)
            for (x = this._firstPT; x;) {
                x.s += x.c;
                x.c = -x.c;
                x = x._next
            }
        this._onUpdate = o.onUpdate;
        this._initted = true
    };
    f._initProps = function(o, x, w, C) {
        var I, L, U, S, da, $;
        if (o == null) return false;
        if (!this.vars.css)
            if (o.style)
                if (o.nodeType)
                    if (X.css)
                        if (this.vars.autoCSS !== false) {
                            L = this.vars;
                            da = {};
                            for (var ia in L)
                                if (!ca[ia] &&
                                    (!(ia in o) || ia === "x" || ia === "y" || ia === "width" || ia === "height" || ia === "className") && (!X[ia] || X[ia] && X[ia]._autoCSS)) {
                                    da[ia] = L[ia];
                                    delete L[ia]
                                }
                            L.css = da
                        }
        for (I in this.vars) {
            if (ca[I]) {
                if (I === "onStartParams" || I === "onUpdateParams" || I === "onCompleteParams" || I === "onReverseCompleteParams" || I === "onRepeatParams")
                    if (da = this.vars[I])
                        for (L = da.length; --L > -1;)
                            if (da[L] === "{self}") {
                                da = this.vars[I] = da.concat();
                                da[L] = this
                            }
            } else if (X[I] && (S = new X[I])._onInitTween(o, this.vars[I], this)) {
                this._firstPT = $ = {
                    _next: this._firstPT,
                    t: S,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: true,
                    n: I,
                    pg: true,
                    pr: S._priority
                };
                for (L = S._overwriteProps.length; --L > -1;) x[S._overwriteProps[L]] = this._firstPT;
                if (S._priority || S._onInitAllProps) U = true;
                if (S._onDisable || S._onEnable) this._notifyPluginsOfEnabled = true
            } else {
                this._firstPT = x[I] = $ = {
                    _next: this._firstPT,
                    t: o,
                    p: I,
                    f: typeof o[I] === "function",
                    n: I,
                    pg: false,
                    pr: 0
                };
                $.s = !$.f ? parseFloat(o[I]) : o[I.indexOf("set") || typeof o["get" + I.substr(3)] !== "function" ? I : "get" + I.substr(3)]();
                L = this.vars[I];
                $.c = typeof L === "string" && L.charAt(1) ===
                    "=" ? parseInt(L.charAt(0) + "1", 10) * Number(L.substr(2)) : Number(L) - $.s || 0
            }
            if ($)
                if ($._next) $._next._prev = $
        }
        if (C)
            if (this._kill(C, o)) return this._initProps(o, x, w, C);
        if (this._overwrite > 1)
            if (this._firstPT)
                if (w.length > 1)
                    if (oa(o, this, x, this._overwrite, w)) {
                        this._kill(x, o);
                        return this._initProps(o, x, w, C)
                    }
        return U
    };
    f.render = function(o, x, w) {
        var C = this._time,
            I, L;
        if (o >= this._duration) {
            this._totalTime = this._time = this._duration;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
            if (!this._reversed) {
                I = true;
                L = "onComplete"
            }
            if (this._duration ===
                0) {
                if (o === 0 || this._rawPrevTime < 0)
                    if (this._rawPrevTime !== o) {
                        w = true;
                        if (this._rawPrevTime > 0) {
                            L = "onReverseComplete";
                            if (x) o = -1
                        }
                    }
                this._rawPrevTime = o
            }
        } else if (o < 1.0E-7) {
            this._totalTime = this._time = 0;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
            if (C !== 0 || this._duration === 0 && this._rawPrevTime > 0) {
                L = "onReverseComplete";
                I = this._reversed
            }
            if (o < 0) {
                this._active = false;
                if (this._duration === 0) {
                    if (this._rawPrevTime >= 0) w = true;
                    this._rawPrevTime = o
                }
            } else this._initted || (w = true)
        } else {
            this._totalTime = this._time = o;
            if (this._easeType) {
                var U = o / this._duration,
                    S = this._easeType,
                    da = this._easePower;
                if (S === 1 || S === 3 && U >= 0.5) U = 1 - U;
                if (S === 3) U *= 2;
                if (da === 1) U *= U;
                else if (da === 2) U *= U * U;
                else if (da === 3) U *= U * U * U;
                else if (da === 4) U *= U * U * U * U;
                this.ratio = S === 1 ? 1 - U : S === 2 ? U : o / this._duration < 0.5 ? U / 2 : 1 - U / 2
            } else this.ratio = this._ease.getRatio(o / this._duration)
        }
        if (!(this._time === C && !w)) {
            if (!this._initted) {
                this._init();
                if (!this._initted) return;
                if (this._time && !I) this.ratio = this._ease.getRatio(this._time / this._duration);
                else if (I && this._ease._calcEnd) this.ratio =
                    this._ease.getRatio(this._time === 0 ? 0 : 1)
            }
            if (!this._active)
                if (!this._paused) this._active = true;
            if (C === 0) {
                if (this._startAt)
                    if (o >= 0) this._startAt.render(o, x, w);
                    else L || (L = "_dummyGS");
                if (this.vars.onStart)
                    if (this._time !== 0 || this._duration === 0) x || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || B)
            }
            for (C = this._firstPT; C;) {
                if (C.f) C.t[C.p](C.c * this.ratio + C.s);
                else C.t[C.p] = C.c * this.ratio + C.s;
                C = C._next
            }
            if (this._onUpdate) {
                o < 0 && this._startAt && this._startAt.render(o, x, w);
                x || this._onUpdate.apply(this.vars.onUpdateScope ||
                    this, this.vars.onUpdateParams || B)
            }
            if (L)
                if (!this._gc) {
                    o < 0 && this._startAt && !this._onUpdate && this._startAt.render(o, x, w);
                    if (I) {
                        this._timeline.autoRemoveChildren && this._enabled(false, false);
                        this._active = false
                    }
                    if (!x && this.vars[L]) this.vars[L].apply(this.vars[L + "Scope"] || this, this.vars[L + "Params"] || B)
                }
        }
    };
    f._kill = function(o, x) {
        if (o === "all") o = null;
        if (o == null)
            if (x == null || x === this.target) return this._enabled(false, false);
        x = typeof x !== "string" ? x || this._targets || this.target : M.selector(x) || x;
        var w, C, I, L, U, S, da;
        if ((x instanceof Array || x.length && x[0] && x[0].nodeType && x[0].style) && typeof x[0] !== "number")
            for (w = x.length; --w > -1;) {
                if (this._kill(o, x[w])) U = true
            } else {
                if (this._targets)
                    for (w = this._targets.length; --w > -1;) {
                        if (x === this._targets[w]) {
                            L = this._propLookup[w] || {};
                            this._overwrittenProps = this._overwrittenProps || [];
                            C = this._overwrittenProps[w] = o ? this._overwrittenProps[w] || {} : "all";
                            break
                        }
                    } else if (x !== this.target) return false;
                    else {
                        L = this._propLookup;
                        C = this._overwrittenProps = o ? this._overwrittenProps || {} : "all"
                    }
                if (L) {
                    S =
                        o || L;
                    da = o !== C && C !== "all" && o !== L && (o == null || o._tempKill !== true);
                    for (I in S) {
                        if (w = L[I]) {
                            if (w.pg && w.t._kill(S)) U = true;
                            if (!w.pg || w.t._overwriteProps.length === 0) {
                                if (w._prev) w._prev._next = w._next;
                                else if (w === this._firstPT) this._firstPT = w._next;
                                if (w._next) w._next._prev = w._prev;
                                w._next = w._prev = null
                            }
                            delete L[I]
                        }
                        if (da) C[I] = 1
                    }!this._firstPT && this._initted && this._enabled(false, false)
                }
            }
        return U
    };
    f.invalidate = function() {
        this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this);
        this._startAt = this._onUpdate =
            this._overwrittenProps = this._firstPT = null;
        this._initted = this._active = this._notifyPluginsOfEnabled = false;
        this._propLookup = this._targets ? {} : [];
        return this
    };
    f._enabled = function(o, x) {
        t || h.wake();
        if (o && this._gc) {
            var w = this._targets,
                C;
            if (w)
                for (C = w.length; --C > -1;) this._siblings[C] = ga(w[C], this, true);
            else this._siblings = ga(this.target, this, true)
        }
        R.prototype._enabled.call(this, o, x);
        if (this._notifyPluginsOfEnabled)
            if (this._firstPT) return M._onPluginEvent(o ? "_onEnable" : "_onDisable", this);
        return false
    };
    M.to =
        function(o, x, w) {
            return new M(o, x, w)
        };
    M.from = function(o, x, w) {
        w.runBackwards = true;
        w.immediateRender = w.immediateRender != false;
        return new M(o, x, w)
    };
    M.fromTo = function(o, x, w, C) {
        C.startAt = w;
        C.immediateRender = C.immediateRender != false && w.immediateRender != false;
        return new M(o, x, C)
    };
    M.delayedCall = function(o, x, w, C, I) {
        return new M(x, 0, {
            delay: o,
            onComplete: x,
            onCompleteParams: w,
            onCompleteScope: C,
            onReverseComplete: x,
            onReverseCompleteParams: w,
            onReverseCompleteScope: C,
            immediateRender: false,
            useFrames: I,
            overwrite: 0
        })
    };
    M.set = function(o, x) {
        return new M(o, 0, x)
    };
    M.killTweensOf = M.killDelayedCallsTo = function(o, x) {
        for (var w = M.getTweensOf(o), C = w.length; --C > -1;) w[C]._kill(x, o)
    };
    M.getTweensOf = function(o) {
        if (o == null) return [];
        o = typeof o !== "string" ? o : M.selector(o) || o;
        var x, w, C;
        if ((o instanceof Array || o.length && o[0] && o[0].nodeType && o[0].style) && typeof o[0] !== "number") {
            x = o.length;
            for (w = []; --x > -1;) w = w.concat(M.getTweensOf(o[x]));
            for (x = w.length; --x > -1;) {
                C = w[x];
                for (o = x; --o > -1;) C === w[o] && w.splice(x, 1)
            }
        } else {
            w = ga(o).concat();
            for (x =
                w.length; --x > -1;) w[x]._gc && w.splice(x, 1)
        }
        return w
    };
    var ta = n("plugins.TweenPlugin", function(o, x) {
        this._overwriteProps = (o || "").split(",");
        this._propName = this._overwriteProps[0];
        this._priority = x || 0;
        this._super = ta.prototype
    }, true);
    f = ta.prototype;
    ta.version = "1.9.1";
    ta.API = 2;
    f._firstPT = null;
    f._addTween = function(o, x, w, C, I, L) {
        var U;
        if (C != null && (U = typeof C === "number" || C.charAt(1) !== "=" ? Number(C) - w : parseInt(C.charAt(0) + "1", 10) * Number(C.substr(2)))) {
            this._firstPT = o = {
                _next: this._firstPT,
                t: o,
                p: x,
                s: w,
                c: U,
                f: typeof o[x] ===
                    "function",
                n: I || x,
                r: L
            };
            if (o._next) o._next._prev = o
        }
    };
    f.setRatio = function(o) {
        for (var x = this._firstPT, w; x;) {
            w = x.c * o + x.s;
            if (x.r) w = w + (w > 0 ? 0.5 : -0.5) >> 0;
            else if (w < 1.0E-6)
                if (w > -1.0E-6) w = 0;
            if (x.f) x.t[x.p](w);
            else x.t[x.p] = w;
            x = x._next
        }
    };
    f._kill = function(o) {
        var x = this._overwriteProps,
            w = this._firstPT,
            C;
        if (o[this._propName] != null) this._overwriteProps = [];
        else
            for (C = x.length; --C > -1;) o[x[C]] != null && x.splice(C, 1);
        for (; w;) {
            if (o[w.n] != null) {
                if (w._next) w._next._prev = w._prev;
                if (w._prev) {
                    w._prev._next = w._next;
                    w._prev =
                        null
                } else if (this._firstPT === w) this._firstPT = w._next
            }
            w = w._next
        }
        return false
    };
    f._roundProps = function(o, x) {
        for (var w = this._firstPT; w;) {
            if (o[this._propName] || w.n != null && o[w.n.split(this._propName + "_").join("")]) w.r = x;
            w = w._next
        }
    };
    M._onPluginEvent = function(o, x) {
        var w = x._firstPT,
            C, I, L, U, S;
        if (o === "_onInitAllProps") {
            for (; w;) {
                S = w._next;
                for (I = L; I && I.pr > w.pr;) I = I._next;
                if (w._prev = I ? I._prev : U) w._prev._next = w;
                else L = w;
                if (w._next = I) I._prev = w;
                else U = w;
                w = S
            }
            w = x._firstPT = L
        }
        for (; w;) {
            if (w.pg)
                if (typeof w.t[o] === "function")
                    if (w.t[o]()) C =
                        true;
            w = w._next
        }
        return C
    };
    ta.activate = function(o) {
        for (var x = o.length; --x > -1;)
            if (o[x].API === ta.API) X[(new o[x])._propName] = o[x];
        return true
    };
    d.plugin = function(o) {
        if (!o || !o.propName || !o.init || !o.API) throw "illegal plugin definition.";
        var x = o.propName,
            w = o.priority || 0,
            C = o.overwriteProps,
            I = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            },
            L = n("plugins." + x.charAt(0).toUpperCase() + x.substr(1) + "Plugin", function() {
                    ta.call(this, x, w);
                    this._overwriteProps = C || []
                }, o.global ===
                true),
            U = L.prototype = new ta(x),
            S;
        U.constructor = L;
        L.API = o.API;
        for (S in I)
            if (typeof o[S] === "function") U[I[S]] = o[S];
        L.version = o.version;
        ta.activate([L]);
        return L
    };
    if (e = q._gsQueue) {
        for (p = 0; p < e.length; p++) e[p]();
        for (f in g) g[f].func || q.console.log("GSAP encountered missing dependency: com.greensock." + f)
    }
    t = false
})(window);
(function(q) {
    var m = function(j) {
        var a = this,
            b = m.prototype;
        this.closeN_img = j.closeN_img;
        this.closeS_img = j.closeS_img;
        this.nextN_img = j.nextN_img;
        this.nextS_img = j.nextS_img;
        this.prevN_img = j.prevN_img;
        this.prevS_img = j.prevS_img;
        this.maximizeN_img = j.maximizeN_img;
        this.maximizeS_img = j.maximizeS_img;
        this.minimizeN_img = j.minimizeN_img;
        this.minimizeS_img = j.minimizeS_img;
        this.infoOpenN_img = j.infoOpenN_img;
        this.infoOpenS_img = j.infoOpenS_img;
        this.infoCloseN_img = j.infoCloseN_img;
        this.infoCloseS_img = j.infoCloseS_img;
        this.pauseN_img = j.pauseN_img;
        this.pauseS_img = j.pauseS_img;
        this.playN_img = j.playN_img;
        this.playS_img = j.playS_img;
        this.preloaderImg = j.lightboxPreloader_img;
        this.slideShowPreloader_img = j.slideShowPreloader_img;
        this.data_ar = j.data_ar;
        this.backgroundColor_str = j.backgroundColor_str;
        this.transitionDirection_str = "next";
        this.backgroundOpacity = j.backgroundOpacity;
        this.infoWindowBackgroundOpacity = j.infoWindowBackgroundOpacity || 1;
        this.defaultIframeW = 460;
        this.defaultIframeH = 320;
        this.slideShowDelay = j.slideShowDelay ||
            3E3;
        if (this.slideShowDelay < 3E3) this.slideShowDelay = 3E3;
        this.slideshowPreloaderHeight = 29;
        this.borderSize = j.borderSize || 0;
        this.borderRadius = j.borderRadius || 0;
        this.transitionTotalDuration = 1200;
        this.buttonWidth = this.closeN_img.width;
        this.buttonHeight = this.closeN_img.height;
        this.totalItems = this.data_ar.length;
        this.friction = 0.9;
        this.borderColor_str = j.borderColor_str || "#FFFFFF";
        this.itemBackgroundColor_str = j.itemBackgroundColor_str || "#222222";
        this.infoWindowBackgroundColor = j.infoWindowBackgroundColor || "transparent";
        this.isTweeningOnShowOrHide_bl = this.isShowed_bl = false;
        this.firstTimeShowed_bl = true;
        this.isTweening_bl = false;
        this.addKeyboardSupport_bl = j.addKeyboardSupport_bl == false ? false : true;
        this.showContextMenu_bl = j.showContextMenu_bl == false ? false : true;
        this.showNextAndPrevButtons_bl = j.showNextAndPrevButtons == false ? false : true;
        this.showZoomButton_bl = j.showZoomButton == false ? false : true;
        this.showInfoButton_bl = j.showInfoButton == false ? false : true;
        this.showSlideshowButton_bl = j.showSlideshowButton == false ? false : true;
        this.slideShowAutoPlay_bl =
            j.slideShowAutoPlay == false ? false : true;
        this.showInfoWindowByDefault_bl = j.showInfoWindowByDefault == true ? true : false;
        this.isMobile_bl = FWDUtils.isMobile;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        this.isFirstItemShowed_bl = this.isMaximized_bl = false;
        this.allowToPressKey_bl = true;
        this.isLoading_bl = false;
        this.videoAutoPlay_bl = j.lightBoxVideoAutoPlay;
        this.isIframe_bl = this.forceRoundBorderToIframe_bl = false;
        this.orintationChanceComplete_bl = true;
        this.init = function() {
            a.getStyle().msTouchAction = "none";
            a.getStyle().webkitTapHighlightColor =
                "rgba(0, 0, 0, 0)";
            this.setupInfo();
            this.setupBackgorundAndMainItemHolder();
            this.setupPreloader();
            this.setupCloseButton();
            this.showNextAndPrevButtons_bl && this.setupNextAndPrevButtons();
            this.showZoomButton_bl && this.setupZoomButton();
            this.showInfoButton_bl && this.setupInfoButton();
            if (this.showInfoButton_bl || this.showInfoWindowByDefault_bl) this.setupInfoWindow();
            if (this.showSlideshowButton_bl) {
                this.setupTimerManager();
                this.setupSlideShowPreloader();
                this.setupSlideshowButton()
            }
            this.setupContextMenu();
            this.buttons_ar = [];
            this.buttons_ar.push(this.closeButton_do);
            this.infoButton_do && this.buttons_ar.push(this.infoButton_do);
            this.showSlideshowButton_bl && this.buttons_ar.push(this.slideshowButtton_do);
            this.zoomButton_do && this.buttons_ar.push(this.zoomButton_do);
            this.showNextAndPrevButtons_bl && this.buttons_ar.push(this.nextButton_do)
        };
        this.updateData = function(c) {
            a.data_ar = c;
            a.totalItems = a.data_ar.length
        };
        this.startResizeHandler = function() {
            if (q.addEventListener) {
                q.addEventListener("resize", a.onResizeHandler);
                q.addEventListener("scroll", a.onScrollHandler);
                q.addEventListener("orientationchange", a.orientationChance);
                if (FWDUtils.isFirefox) {
                    document.addEventListener("fullscreenchange", a.onFullScreenChange);
                    document.addEventListener("mozfullscreenchange", a.onFullScreenChange)
                }
            } else if (q.attachEvent) {
                q.attachEvent("onresize", a.onResizeHandler);
                q.attachEvent("onscroll", a.onScrollHandler)
            }
            a.resizeHandler();
            a.resizeHandlerId2_to = setTimeout(function() {
                a.resizeHandler()
            }, 100)
        };
        this.onFullScreenChange = function() {
            a.resizeHandler();
            clearTimeout(a.resizeHandlerId2_to);
            a.resizeHandlerId2_to = setTimeout(function() {
                a.resizeHandler()
            }, 50)
        };
        a.onScrollHandler = function() {
            if (a.orintationChanceComplete_bl) {
                var c = FWDUtils.getScrollOffsets();
                a.setX(c.x);
                a.setY(c.y)
            }
        };
        a.onResizeHandler = function() {
            if (a.isMobile_bl) {
                clearTimeout(a.resizeHandlerId2_to);
                a.resizeHandlerId2_to = setTimeout(function() {
                    a.resizeHandler()
                }, 200)
            } else {
                a.resizeHandler();
                clearTimeout(a.resizeHandlerId2_to);
                a.resizeHandlerId2_to = setTimeout(function() {
                    a.resizeHandler()
                }, 50)
            }
        };
        this.orientationChance = function() {
            a.orintationChanceComplete_bl = false;
            clearTimeout(a.resizeHandlerId2_to);
            clearTimeout(a.orientationChangeId_to);
            a.orientationChangeId_to = setTimeout(function() {
                a.orintationChanceComplete_bl = true;
                a.resizeHandler()
            }, 1E3);
            a.setX(0);
            a.setWidth(0)
        };
        this.resizeHandler = function() {
            if (a.orintationChanceComplete_bl) {
                var c = FWDUtils.getViewportSize(),
                    e = FWDUtils.getScrollOffsets();
                if (!(a.stageWidth == c.w && a.stageHeight == c.h)) {
                    a.isTweening_bl = false;
                    a.stageWidth = c.w;
                    a.stageHeight =
                        c.h;
                    a.scrollOffestX = e.x;
                    a.scrollOffsetY = e.y;
                    a.setX(e.x);
                    a.setY(e.y);
                    if (a.isMobile_bl) {
                        a.setWidth(a.stageWidth);
                        a.setHeight(a.stageHeight)
                    } else {
                        a.setWidth(a.stageWidth - 0.5);
                        a.setHeight(a.stageHeight - 0.5)
                    }
                    a.positionPreloader();
                    a.resizeCurrentItem();
                    a.positionButtons(false);
                    a.infoWindow_do && a.infoWindow_do.isShowed_bl && a.infoWindow_do.resize(a.finalWidth, a.finalHeight, false)
                }
            }
        };
        this.setupContextMenu = function() {
            this.customContextMenu = new FWDContextMenu(this, this.showContextMenu_bl)
        };
        this.disableBrowserScrollBars =
            function() {
                if (this.isMobile_bl) q.addEventListener("touchmove", this.mouseDummyHandler);
                else if (q.addEventListener) {
                    q.addEventListener("mousewheel", this.mouseDummyHandler);
                    q.addEventListener("DOMMouseScroll", this.mouseDummyHandler)
                } else document.attachEvent && document.attachEvent("onmousewheel", this.mouseDummyHandler)
            };
        this.mouseDummyHandler = function(c) {
            if (c.preventDefault) c.preventDefault();
            else return false
        };
        this.setupInfo = function() {
            FWDInfo.setPrototype();
            this.info_do = new FWDInfo
        };
        this.setupBackgorundAndMainItemHolder =
            function() {
                this.bk_do = new FWDDisplayObject("div");
                this.bk_do.setResizableSizeAfterParent();
                this.bk_do.setBkColor(this.backgroundColor_str);
                this.mainItemsHolder_do = new FWDDisplayObject("div");
                this.itemsBorder_do = new FWDDisplayObject("div");
                this.itemsBorder_do.setBkColor(this.borderColor_str);
                this.itemsBackground_do = new FWDDisplayObject("div");
                this.itemsBackground_do.setBkColor(a.itemBackgroundColor_str);
                this.itemsHolder_do = new FWDDisplayObject("div");
                this.itemsHolder_do.setOverflow("visible");
                this.mainItemsHolder_do.addChild(this.itemsBorder_do);
                this.mainItemsHolder_do.addChild(this.itemsBackground_do);
                this.mainItemsHolder_do.addChild(this.itemsHolder_do);
                this.addChild(this.bk_do);
                this.addChild(this.mainItemsHolder_do)
            };
        this.addCloseEventsWhenBkIsPressed = function() {
            if (a.isMobile_bl) a.hasPointerEvent_bl ? a.bk_do.screen.addEventListener("MSPointerDown", a.onBkMouseDown) : a.bk_do.screen.addEventListener("touchstart", a.onBkMouseDown);
            else if (a.bk_do.screen.addEventListener) a.bk_do.screen.addEventListener("mousedown", a.onBkMouseDown);
            else a.bk_do.screen.attachEvent &&
                a.bk_do.screen.attachEvent("onmousedown", a.onBkMouseDown)
        };
        this.onBkMouseDown = function() {
            a.hide()
        };
        this.show = function(c) {
            if (!this.isShowed_bl) {
                this.isTweeningOnShowOrHide_bl = this.isShowed_bl = true;
                this.getStyle().zIndex = 100000002;
                this.disableBrowserScrollBars();
                this.addKeyboardSupport_bl && this.addKeyboardSupport();
                this.hideButtons(false);
                navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 ? document.getElementsByTagName("body")[0].appendChild(this.screen) : document.documentElement.appendChild(this.screen);
                this.id = c;
                this.startResizeHandler();
                this.bk_do.setAlpha(0);
                TweenMax.to(this.bk_do, 0.8, {
                    alpha: this.backgroundOpacity,
                    ease: Quint.easeOut,
                    onComplete: this.onShowComplete
                });
                this.showFirstTimeWithDelayId_to = setTimeout(function() {
                    a.showCurrentItem()
                }, 100);
                this.dispatchEvent(m.SHOW_START)
            }
        };
        this.onShowComplete = function() {
            a.isTweeningOnShowOrHide_bl = false;
            a.addCloseEventsWhenBkIsPressed()
        };
        this.showCurrentItem = function() {
            if (a != null) {
                this.type_str = this.data_ar[this.id].url;
                if (this.data_ar[this.id].dataType.toLowerCase() ==
                    "iframe") {
                    this.iframeW = this.data_ar[this.id].width || this.defaultIframeW;
                    this.iframeH = this.data_ar[this.id].height || this.defaultIframeH;
                    this.videoIdOrIframeUrl = this.type_str;
                    this.type_str = m.IFRAME;
                    if (a.forceRoundBorderToIframe_bl && a.borderRadius != 0) a.itemsBorder_do.getStyle().borderRadius = a.borderRadius + "px";
                    else if (a.borderRadius != 0) {
                        a.itemsBorder_do.getStyle().borderRadius = "0px";
                        a.itemsBackground_do.getStyle().borderRadius = "0px"
                    }
                    a.isIframe_bl = true
                } else if (this.type_str.toLowerCase().indexOf(".jpg") !=
                    -1 || this.type_str.toLowerCase().indexOf(".png") != -1 || this.type_str.toLowerCase().indexOf(".jpeg") != -1) this.type_str = m.IMAGE;
                else if (this.type_str.toLowerCase().indexOf("http://www.youtube") != -1 || this.type_str.toLowerCase().indexOf("http://youtube") != -1 || this.type_str.toLowerCase().indexOf("youtube.com") != -1) {
                    args = FWDUtils.getUrlArgs(this.type_str);
                    if (!args.v) {
                        this.addChild(this.info_do);
                        this.info_do.showText("Make sure that the youtube url is formatted correctly, probably the <font color='#FFFFFF'>v</font> variable from the url is missing, this represents the video id.");
                        return
                    }
                    this.iframeW = this.data_ar[this.id].width || this.defaultIframeW;
                    this.iframeH = this.data_ar[this.id].height || this.defaultIframeH;
                    this.videoIdOrIframeUrl = args.v;
                    this.type_str = m.YOUTUBE;
                    if (a.forceRoundBorderToIframe_bl && a.borderRadius != 0) a.itemsBorder_do.getStyle().borderRadius = a.borderRadius + "px";
                    else if (a.borderRadius != 0) {
                        a.itemsBorder_do.getStyle().borderRadius = "0px";
                        a.itemsBackground_do.getStyle().borderRadius = "0px"
                    }
                } else if (this.type_str.toLowerCase().indexOf("http://www.vimeo") != -1 || this.type_str.toLowerCase().indexOf("http://vimeo") !=
                    -1 || this.type_str.toLowerCase().indexOf("vimeo.com") != -1) {
                    this.iframeW = this.data_ar[this.id].width || this.defaultIframeW;
                    this.iframeH = this.data_ar[this.id].height || this.defaultIframeH;
                    this.videoIdOrIframeUrl = this.type_str.substr(this.type_str.lastIndexOf("/") + 1);
                    this.type_str = m.VIMEO;
                    if (a.forceRoundBorderToIframe_bl && a.borderRadius != 0) a.itemsBorder_do.getStyle().borderRadius = a.borderRadius + "px";
                    else if (a.borderRadius != 0) {
                        a.itemsBorder_do.getStyle().borderRadius = "0px";
                        a.itemsBackground_do.getStyle().borderRadius =
                            "0px"
                    }
                }
                this.createItem()
            }
        };
        this.createItem = function() {
            clearTimeout(this.transitionShapeDoneId_to);
            clearTimeout(this.showVideoId_to);
            this.preloader_do.hide(true);
            this.showSlideshowButton_bl && this.timerManager.stop();
            this.contains(this.info_do) && this.removeChild(this.info_do);
            if (this.image_img) {
                this.image_img.onload = null;
                this.image_img = this.image_img.onerror = null
            }
            if (this.infoButton_do) this.infoButton_do.isDisabled_bl = true;
            if (this.type_str == m.IMAGE) {
                if (this.prevItem_do)
                    if (this.opacityType == "filter" &&
                        this.prevItem_do.type != "img") this.prevItem_do.setVisible(false);
                    else if (this.isMobile_bl || this.prevItem_do.type != "img") this.cleanChildren(0);
                this.loadImage()
            } else if (this.type_str == m.YOUTUBE || this.type_str == m.VIMEO || this.type_str == m.IFRAME) {
                this.isTweening_bl = true;
                if (this.firstTimeShowed_bl) {
                    this.createIframeHolder();
                    this.resizeCurrentItem();
                    this.showItemFirstTime();
                    this.showVideoId_to = setTimeout(this.showIframeContent, 900)
                } else {
                    if (this.prevItem_do)
                        if (this.opacityType == "filter" && this.prevItem_do.type !=
                            "img") this.prevItem_do.setVisible(false);
                        else this.isMobile_bl || this.prevItem_do.type != "img" ? this.cleanChildren(0) : TweenMax.to(this.prevItem_do, 0.8, {
                            alpha: 0
                        });
                    this.createIframeHolder();
                    this.resizeCurrentItem(true);
                    this.positionButtons(true);
                    this.animMainDos();
                    this.showVideoId_to = setTimeout(this.showIframeContent, 900);
                    if (this.showZoomButton_bl && (this.type_str == m.YOUTUBE || this.type_str == m.VIMEO || a.type_str == m.IFRAME)) {
                        var c = FWDUtils.indexOfArray(this.buttons_ar, this.zoomButton_do);
                        if (c != -1) {
                            this.buttons_ar.splice(c,
                                1);
                            this.removeChild(this.zoomButton_do)
                        }
                    }
                }
                this.prevItem_do = a.currentItem_do;
                a.infoWindow_do && this.mainItemsHolder_do.contains(a.infoWindow_do) && this.infoWindow_do.isShowed_bl && this.infoWindow_do.setText(this.data_ar[a.id].infoText, this.finalWidth, this.finalHeight, false, this.type_str != m.IMAGE)
            }
            this.prevType_str = this.type_str
        };
        this.createIframeHolder = function() {
            this.currentItem_do = new FWDDisplayObject("div");
            if (this.type_str == m.IFRAME && this.isMobile_bl) {
                this.currentItem_do.getStyle().overflow = "scroll";
                this.currentItem_do.getStyle().webkitOverflowScrolling = "touch"
            }
            this.originalWidth = a.iframeW || a.defaultIframeW;
            this.originalHeight = a.iframeH || a.defaultIframeH;
            this.itemsHolder_do.addChild(a.currentItem_do)
        };
        this.loadImage = function() {
            this.isLoading_bl = true;
            this.preloader_do.show(true);
            var c = this.data_ar[this.id].url;
            this.image_img = new Image;
            this.image_img.onload = this.imageLoadComplete;
            this.image_img.onerror = this.imageLoadError;
            this.image_img.src = c;
            this.addChild(this.preloader_do)
        };
        this.imageLoadComplete =
            function() {
                a.prevItem_do && !a.isMobile_bl && a.prevItem_do.type == "img" && TweenMax.to(a.prevItem_do, 0.6, {
                    alpha: 0
                });
                a.originalWidth = a.image_img.width;
                a.originalHeight = a.image_img.height;
                a.currentItem_do = new FWDDisplayObject("img");
                a.currentItem_do.setScreen(a.image_img);
                if (a.borderRadius != 0) a.currentItem_do.getStyle().borderRadius = a.borderRadius + "px";
                if (a.borderRadius != 0) a.itemsBorder_do.getStyle().borderRadius = a.borderRadius + "px";
                if (a.borderRadius != 0) a.itemsBackground_do.getStyle().borderRadius = a.borderRadius +
                    "px";
                if (a.firstTimeShowed_bl) {
                    a.transitionTotalDuration = 800;
                    a.resizeCurrentItem(false);
                    a.showItemFirstTime()
                } else {
                    a.transitionTotalDuration = 1400;
                    a.resizeCurrentItem(true);
                    a.currentItem_do.setWidth(a.finalWidth - a.borderSize * 2);
                    a.currentItem_do.setHeight(a.finalHeight - a.borderSize * 2);
                    a.currentItem_do.setAlpha(0);
                    TweenMax.to(a.currentItem_do, 0.6, {
                        alpha: 1,
                        delay: 0.8
                    });
                    a.addZoomButtonBackToButtonsArray();
                    a.animMainDos();
                    a.positionButtons(true)
                }
                a.infoWindow_do && a.infoWindow_do.isShowed_bl && a.infoWindow_do.setText(a.data_ar[a.id].infoText,
                    a.finalWidth, a.finalHeight, true, a.type_str != m.IMAGE);
                a.showSlideshowButton_bl && a.timerManager.stop();
                a.preloader_do.hide(true);
                a.prevItem_do = a.currentItem_do;
                a.isTweening_bl = true;
                a.isLoading_bl = false;
                a.transitionShapeDoneId_to = setTimeout(a.transitionShapeDoneHandler, 800);
                a.transitionDoneId_to = setTimeout(a.transitionDoneHandler, a.transitionTotalDuration);
                a.itemsHolder_do.addChild(a.currentItem_do)
            };
        this.transitionDoneHandler = function() {
            a.showSlideshowButton_bl && a.timerManager.start();
            a.isTweening_bl =
                false;
            a.cleanChildren(1)
        };
        this.transitionShapeDoneHandler = function() {
            if (a.infoButton_do) a.infoButton_do.isDisabled_bl = false
        };
        this.imageLoadError = function() {
            var c = "Image can't be loaded probably the path is incorrect <font color='#FFFFFF'>" + a.data_ar[a.id].url + "</font>";
            a.addChild(a.info_do);
            a.info_do.showText(c)
        };
        this.animMainDos = function() {
            TweenMax.to(this.mainItemsHolder_do, 0.8, {
                delay: 0.1,
                x: a.finalX,
                y: a.finalY,
                w: a.finalWidth,
                h: a.finalHeight,
                ease: Expo.easeInOut
            });
            TweenMax.to(this.itemsBackground_do,
                0.8, {
                    delay: 0.1,
                    x: a.borderSize,
                    y: a.borderSize,
                    w: a.finalWidth - a.borderSize * 2,
                    h: a.finalHeight - a.borderSize * 2,
                    ease: Expo.easeInOut
                });
            TweenMax.to(this.itemsBorder_do, 0.8, {
                delay: 0.1,
                w: a.finalWidth,
                h: a.finalHeight,
                ease: Expo.easeInOut
            });
            TweenMax.to(this.itemsHolder_do, 0.8, {
                delay: 0.1,
                x: a.borderSize,
                y: a.borderSize,
                w: a.finalWidth - a.borderSize * 2,
                h: a.finalHeight - a.borderSize * 2,
                ease: Expo.easeInOut
            });
            !this.isMobile_bl && this.prevItem_do.type == "img" && TweenMax.to(a.prevItem_do, 0.8, {
                delay: 0.1,
                x: (a.finalWidth - a.borderSize *
                    2 - a.prevItem_do.getWidth()) / 2,
                y: (a.finalHeight - a.borderSize * 2 - a.prevItem_do.getHeight()) / 2,
                ease: Expo.easeInOut
            })
        };
        this.showIframeContent = function() {
            a.isTweening_bl = false;
            a.showSlideshowButton_bl && a.timerManager.start();
            if (a.infoButton_do) a.infoButton_do.isDisabled_bl = false;
            a.cleanChildren(1);
            var c = document.createElement("iframe");
            c.width = "100%";
            c.height = "100%";
            c.frameBorder = 0;
            c.allowfullscreen = true;
            if (a.type_str == m.YOUTUBE) c.src = a.videoAutoPlay_bl ? "http://www.youtube.com/embed/" + a.videoIdOrIframeUrl +
                "?wmode=transparent&autoplay=1" : "http://www.youtube.com/embed/" + a.videoIdOrIframeUrl + "?wmode=transparent";
            else if (a.type_str == m.VIMEO) c.src = a.videoAutoPlay_bl ? "http://player.vimeo.com/video/" + a.videoIdOrIframeUrl + "?autoplay=1" : "http://player.vimeo.com/video/" + a.videoIdOrIframeUrl;
            else if (a.type_str == m.IFRAME) c.src = a.videoIdOrIframeUrl;
            a.currentItem_do.screen.appendChild(c);
            a.resizeCurrentItem()
        };
        this.showItemFirstTime = function() {
            this.firstTimeShowed_bl = false;
            this.showButtons();
            this.mainItemsHolder_do.setX(this.stageWidth /
                2);
            this.mainItemsHolder_do.setY(this.stageHeight / 2);
            this.mainItemsHolder_do.setWidth(0);
            this.mainItemsHolder_do.setHeight(0);
            this.currentItem_do.setAlpha(0);
            this.itemsBorder_do.setAlpha(0);
            this.showInfoWindowByDefault_bl && this.showInfoWindowOnStart();
            TweenMax.to(this.currentItem_do, 0.8, {
                alpha: 1,
                delay: 0.9,
                ease: Quint.easeOut
            });
            TweenMax.to(this.itemsBorder_do, 0.8, {
                alpha: 1,
                delay: 0.7,
                ease: Quint.easeOut
            });
            TweenMax.to(this.mainItemsHolder_do, 0.8, {
                x: this.finalX,
                y: this.finalY,
                w: this.finalWidth,
                h: this.finalHeight,
                ease: Expo.easeInOut
            });
            if (this.showZoomButton_bl && (this.type_str == m.YOUTUBE || this.type_str == m.VIMEO || a.type_str == m.IFRAME)) {
                var c = FWDUtils.indexOfArray(this.buttons_ar, this.zoomButton_do);
                if (c != -1) {
                    this.buttons_ar.splice(c, 1);
                    this.removeChild(this.zoomButton_do)
                }
            }
        };
        this.cleanChildren = function(c) {
            for (var e; a.itemsHolder_do.getNumChildren() > c;) {
                e = a.itemsHolder_do.getChildAt(0);
                TweenMax.killTweensOf(e);
                a.itemsHolder_do.removeChild(e);
                a.opacityType == "opacity" && e.type != "img" && e.setInnerHTML("");
                e.destroy()
            }
        };
        this.resizeCurrentItem = function(c) {
            if (this.currentItem_do) {
                var e = this.stageWidth - 10,
                    p = this.stageHeight - 10,
                    f = e / this.originalWidth,
                    h = p / this.originalHeight,
                    t = 0;
                if (f <= h) t = f;
                else if (f >= h) t = h;
                if (f >= 1 && h >= 1) t = 1;
                this.finalWidth = Math.round(this.originalWidth * t);
                this.finalHeight = Math.round(this.originalHeight * t);
                if (this.finalWidth > this.stageWidth - this.buttonWidth * 2 - 4) {
                    this.finalWidth = this.stageWidth - this.buttonWidth * 2 - 4;
                    this.finalHeight = Math.round(this.originalHeight * (this.finalWidth / this.originalWidth))
                }
                this.finalX =
                    Math.floor((e - this.finalWidth) / 2) + 5;
                this.finalY = Math.floor((p - this.finalHeight) / 2) + 5;
                if (!c) {
                    TweenMax.killTweensOf(this.mainItemsHolder_do);
                    this.mainItemsHolder_do.setX(this.finalX);
                    this.mainItemsHolder_do.setY(this.finalY);
                    this.mainItemsHolder_do.setWidth(this.finalWidth);
                    this.mainItemsHolder_do.setHeight(this.finalHeight);
                    TweenMax.killTweensOf(this.itemsBackground_do);
                    this.itemsBackground_do.setX(this.borderSize);
                    this.itemsBackground_do.setY(this.borderSize);
                    this.itemsBackground_do.setWidth(this.finalWidth -
                        this.borderSize * 2);
                    this.itemsBackground_do.setHeight(this.finalHeight - this.borderSize * 2);
                    TweenMax.killTweensOf(this.itemsBorder_do);
                    this.itemsBorder_do.setX(0);
                    this.itemsBorder_do.setY(0);
                    this.itemsBorder_do.setWidth(this.finalWidth);
                    this.itemsBorder_do.setHeight(this.finalHeight);
                    this.itemsBorder_do.setAlpha(1);
                    TweenMax.killTweensOf(this.currentItem_do);
                    if (this.isMaximized_bl) {
                        f = this.stageWidth / this.originalWidth;
                        h = this.stageHeight / this.originalHeight;
                        if (f >= h) t = f;
                        else if (f <= h) t = h;
                        this.currentItem_do.setX(parseInt((this.stageWidth -
                            this.originalWidth * t) / 2));
                        this.currentItem_do.setY(parseInt((this.stageHeight - this.originalHeight * t) / 2));
                        this.currentItem_do.setWidth(parseInt(this.originalWidth * t));
                        this.currentItem_do.setHeight(parseInt(this.originalHeight * t))
                    } else {
                        this.currentItem_do.setAlpha(1);
                        this.currentItem_do.setX(0);
                        this.currentItem_do.setY(0);
                        this.currentItem_do.setWidth(this.finalWidth - this.borderSize * 2);
                        this.currentItem_do.setHeight(this.finalHeight - this.borderSize * 2)
                    }
                    this.itemsHolder_do.setX(this.borderSize);
                    this.itemsHolder_do.setY(this.borderSize);
                    this.itemsHolder_do.setWidth(this.finalWidth - this.borderSize * 2);
                    this.itemsHolder_do.setHeight(this.finalHeight - this.borderSize * 2)
                }
            }
        };
        this.goToNextItem = function() {
            if (!this.isTweening_bl) {
                this.transitionDirection_str = "next";
                this.id++;
                if (this.id > this.totalItems - 1) this.id = 0;
                this.showCurrentItem()
            }
        };
        this.goToPrevItem = function() {
            if (!this.isTweening_bl) {
                this.transitionDirection_str = "prev";
                this.id--;
                if (this.id < 0) this.id = this.totalItems - 1;
                this.showCurrentItem()
            }
        };
        this.maximizeOrMinimize = function() {
            if (!(this.isLoading_bl ||
                    a.isTweeningOnShowOrHide_bl)) {
                this.timerManager && this.timerManager.stop();
                var c, e, p, f, h, t;
                clearTimeout(this.maximizeCompleteTimeOutId_to);
                clearTimeout(this.minimizeCompleteTimeOutId_to);
                TweenMax.killTweensOf(this.currentItem_do);
                if (this.isMaximized_bl) {
                    this.isMaximized_bl = false;
                    this.isTweening_bl = true;
                    this.isMobile_bl ? this.removeEventsForScrollngImageOnMobile() : this.removeEventsForScrollngImageOnDesktop();
                    this.bk_do.setAlpha(this.backgroundOpacity);
                    this.mainItemsHolder_do.setVisible(true);
                    this.closeButton_do.setVisible(true);
                    if (a.nextButton_do) {
                        this.nextButton_do.setVisible(true);
                        this.prevButton_do.setVisible(true)
                    }
                    this.infoButton_do && this.infoButton_do.setVisible(true);
                    this.slideshowButtton_do && this.slideshowButtton_do.setVisible(true);
                    this.currentItem_do.setX(this.currentItem_do.getX() - this.finalX - this.borderSize);
                    this.currentItem_do.setY(this.currentItem_do.getY() - this.finalY - this.borderSize);
                    this.positionButtons(true);
                    this.slideShowPreloader_do && this.positionSlideShowPreloader(false);
                    TweenMax.to(this.currentItem_do,
                        0.8, {
                            x: 0,
                            y: 0,
                            w: this.finalWidth - this.borderSize * 2,
                            h: this.finalHeight - this.borderSize * 2,
                            ease: Expo.easeInOut
                        });
                    this.minimizeCompleteTimeOutId_to = setTimeout(this.minimizeCompleteHandler, 800);
                    this.mainItemsHolder_do.setOverflow("visible");
                    this.zoomButton_do.isMaximized_bl = false;
                    this.itemsHolder_do.addChild(this.currentItem_do);
                    this.addChild(this.mainItemsHolder_do);
                    this.addChild(this.zoomButton_do);
                    this.dispatchEvent(m.MINIMIZE_START)
                } else {
                    this.isTweening_bl = this.isMaximized_bl = true;
                    if (a.borderRadius !=
                        0) a.currentItem_do.getStyle().borderRadius = "";
                    c = this.stageWidth / this.originalWidth;
                    e = this.stageHeight / this.originalHeight;
                    p = 0;
                    if (c >= e) p = c;
                    else if (c <= e) p = e;
                    h = parseInt(this.originalWidth * p);
                    t = parseInt(this.originalHeight * p);
                    p = parseInt((this.stageWidth - h) / 2);
                    f = parseInt((this.stageHeight - t) / 2);
                    this.currentItem_do.setAlpha(1);
                    this.currentItem_do.setX(this.currentItem_do.getGlobalX());
                    this.currentItem_do.setY(this.currentItem_do.getGlobalY());
                    if (this.isMobile_bl) {
                        TweenMax.to(this.zoomButton_do, 0.8, {
                            x: this.stageWidth -
                                this.buttonWidth,
                            y: 1,
                            ease: Expo.easeInOut
                        });
                        TweenMax.to(this.currentItem_do, 0.8, {
                            x: p,
                            y: f,
                            w: h,
                            h: t,
                            ease: Expo.easeInOut
                        })
                    } else {
                        this.zoomButton_do.isMaximized_bl = true;
                        if (c >= e) TweenMax.to(this.currentItem_do, 0.8, {
                            x: p,
                            w: h,
                            h: t,
                            ease: Expo.easeInOut
                        });
                        else c < e && TweenMax.to(this.currentItem_do, 0.8, {
                            y: f,
                            w: h,
                            h: t,
                            ease: Expo.easeInOut
                        });
                        this.addEventsForScrollngImageOnDesktop()
                    }
                    a.infoWindow_do && a.infoButton_do.currentState == 0 && this.infoWindow_do.hide(false);
                    this.itemsHolder_do.removeChild(this.currentItem_do);
                    this.addChild(this.currentItem_do);
                    this.addChild(this.zoomButton_do);
                    this.maximizeCompleteTimeOutId_to = setTimeout(this.maximizeCompleteHandler, 800)
                }
            }
        };
        this.maximizeCompleteHandler = function() {
            a.bk_do.setAlpha(1);
            a.mainItemsHolder_do.setVisible(false);
            a.closeButton_do.setVisible(false);
            if (a.nextButton_do) {
                a.nextButton_do.setVisible(false);
                a.prevButton_do.setVisible(false)
            }
            a.infoButton_do && a.infoButton_do.setVisible(false);
            if (a.slideshowButtton_do) {
                a.slideshowButtton_do.setVisible(false);
                a.slideShowPreloader_do.setX(3E3)
            }
            a.dispatchEvent(m.MAXIMIZE_COMPLETE);
            a.isMobile_bl && a.addEventsForScrollngImageOnMobile()
        };
        this.minimizeCompleteHandler = function() {
            a.infoWindow_do && a.infoButton_do.currentState == 0 && a.infoWindow_do.show(true);
            a.showSlideshowButton_bl && a.timerManager.start();
            a.mainItemsHolder_do.setOverflow("hidden");
            if (a.borderRadius != 0) a.currentItem_do.getStyle().borderRadius = a.borderRadius + "px";
            a.itemsHolder_do.removeChild(a.currentItem_do);
            a.itemsHolder_do.addChild(a.currentItem_do);
            a.isTweening_bl = false
        };
        this.addEventsForScrollngImageOnDesktop = function() {
            this.updateImageWhenMaximized_int =
                setInterval(this.updateMaximizedImageHandler, 16);
            q.addEventListener ? q.addEventListener("mousemove", this.updateMaximizeImageOnMouseMovedHandler) : document.attachEvent("onmousemove", this.updateMaximizeImageOnMouseMovedHandler)
        };
        this.removeEventsForScrollngImageOnDesktop = function() {
            clearInterval(this.updateImageWhenMaximized_int);
            q.addEventListener ? q.removeEventListener("mousemove", this.updateMaximizeImageOnMouseMovedHandler) : document.detachEvent("onmousemove", this.updateMaximizeImageOnMouseMovedHandler)
        };
        this.updateMaximizeImageOnMouseMovedHandler = function(c) {
            c = FWDUtils.getViewportMouseCoordinates(c);
            FWDUtils.getScrollOffsets();
            a.globalXMousePosition = c.screenX;
            a.globalYMousePosition = c.screenY;
            TweenMax.to(a.zoomButton_do, 0.2, {
                x: a.globalXMousePosition - parseInt(a.buttonWidth / 2),
                y: a.globalYMousePosition - parseInt(a.buttonHeight / 2)
            })
        };
        this.updateMaximizedImageHandler = function() {
            var c;
            a.percentX = a.globalXMousePosition / a.stageWidth;
            a.percentY = a.globalYMousePosition / a.stageHeight;
            if (a.percentX > 1) a.percentX =
                1;
            if (a.percentY > 1) a.percentY = 1;
            if (a.stageWidth / a.originalWidth <= a.stageHeight / a.originalHeight) {
                c = Math.round((a.stageWidth - a.currentItem_do.getWidth()) * a.percentX);
                isNaN(c) || TweenMax.to(a.currentItem_do, 0.4, {
                    x: c
                })
            } else {
                c = Math.round((a.stageHeight - a.currentItem_do.getHeight()) * a.percentY);
                isNaN(c) || TweenMax.to(a.currentItem_do, 0.4, {
                    y: c
                })
            }
        };
        this.addEventsForScrollngImageOnMobile = function() {
            if (a.hasPointerEvent_bl) {
                q.addEventListener("MSPointerDown", a.onTouchStartScrollImage);
                q.addEventListener("MSPointerUp",
                    a.onTouchEndScrollImage)
            } else {
                q.addEventListener("touchstart", a.onTouchStartScrollImage);
                q.addEventListener("touchend", a.onTouchEndScrollImage)
            }
            clearInterval(this.updateImageWhenMaximized_int);
            this.updateImageWhenMaximized_int = setInterval(this.updateMaximizedImageMobileHandler, 16)
        };
        this.removeEventsForScrollngImageOnMobile = function() {
            clearInterval(a.updateImageWhenMaximized_int);
            if (a.hasPointerEvent_bl) {
                q.removeEventListener("MSPointerDown", a.onTouchStartScrollImage);
                q.removeEventListener("MSPointerUp",
                    a.onTouchEndScrollImage);
                q.removeEventListener("MSPointerMove", a.onTouchMoveScrollImage)
            } else {
                q.removeEventListener("touchstart", a.onTouchStartScrollImage);
                q.removeEventListener("touchend", a.onTouchEndScrollImage);
                q.removeEventListener("touchmove", a.onTouchMoveScrollImage)
            }
        };
        this.onTouchStartScrollImage = function(c) {
            var e = FWDUtils.getViewportMouseCoordinates(c);
            a.hasPointerEvent_bl ? q.addEventListener("MSPointerMove", a.onTouchMoveScrollImage) : q.addEventListener("touchmove", a.onTouchMoveScrollImage);
            a.lastPresedX = e.screenX;
            a.lastPresedY = e.screenY;
            c.preventDefault()
        };
        this.onTouchEndScrollImage = function() {
            a.hasPointerEvent_bl ? q.removeEventListener("MSPointerMove", a.onTouchMoveScrollImage) : q.removeEventListener("touchmove", a.onTouchMoveScrollImage);
            a.isDragging_bl = false
        };
        this.onTouchMoveScrollImage = function(c) {
            c.preventDefault && c.preventDefault();
            c = FWDUtils.getViewportMouseCoordinates(c);
            var e = a.stageWidth / a.originalWidth,
                p = a.stageHeight / a.originalHeight,
                f = 0,
                h = 0;
            a.isDragging_bl = true;
            if (e < p) {
                f = c.screenX -
                    a.lastPresedX;
                a.lastPresedX = c.screenX;
                a.currentItem_do.setX(a.currentItem_do.getX() + f)
            } else {
                if (!(e > p)) {
                    f = c.screenX - a.lastPresedX;
                    a.lastPresedX = c.screenX;
                    a.currentItem_do.setX(a.currentItem_do.getX() + f)
                }
                h = c.screenY - a.lastPresedY;
                a.lastPresedY = c.screenY;
                a.currentItem_do.setY(a.currentItem_do.getY() + h)
            }
            a.vx = f * 2;
            a.vy = h * 2
        };
        this.updateMaximizedImageMobileHandler = function() {
            var c, e, p, f, h, t;
            if (!a.isDragging_bl) {
                a.vy *= a.friction;
                a.vx *= a.friction;
                p = a.currentItem_do.getX();
                f = a.currentItem_do.getY();
                c = p + a.vx;
                e = f + a.vy;
                h = a.currentItem_do.getWidth();
                t = a.currentItem_do.getHeight();
                if (!(isNaN(c) || isNaN(e))) {
                    a.currentItem_do.setX(c);
                    a.currentItem_do.setY(e);
                    if (f >= 0) {
                        a.vy2 = (0 - f) * 0.3;
                        a.vy *= a.friction;
                        a.currentItem_do.setY(f + a.vy2)
                    } else if (f <= a.stageHeight - t) {
                        a.vy2 = (a.stageHeight - t - f) * 0.5;
                        a.vy *= a.friction;
                        a.currentItem_do.setY(f + a.vy2)
                    }
                    if (p >= 0) {
                        a.vx2 = (0 - p) * 0.3;
                        a.vx *= a.friction;
                        a.currentItem_do.setX(p + a.vx2)
                    } else if (p <= a.stageWidth - h) {
                        a.vx2 = (a.stageWidth - h - p) * 0.5;
                        a.vx *= a.friction;
                        a.currentItem_do.setX(p + a.vx2)
                    }
                }
            }
        };
        this.setupCloseButton = function() {
            FWDSimpleButton.setPrototype();
            this.closeButton_do = new FWDSimpleButton(this.closeN_img, this.closeS_img, this.isMobile_bl);
            this.closeButton_do.addListener(FWDSimpleButton.CLICK, this.closeButtonOnClickHandler);
            this.addChild(this.closeButton_do)
        };
        this.closeButtonOnClickHandler = function() {
            a.hide()
        };
        this.setupNextAndPrevButtons = function() {
            FWDSimpleButton.setPrototype();
            this.nextButton_do = new FWDSimpleButton(this.nextN_img, this.nextS_img, this.isMobile_bl);
            this.nextButton_do.addListener(FWDSimpleButton.CLICK,
                this.nextButtonOnClickHandler);
            FWDSimpleButton.setPrototype();
            this.prevButton_do = new FWDSimpleButton(this.prevN_img, this.prevS_img, this.isMobile_bl);
            this.prevButton_do.addListener(FWDSimpleButton.CLICK, this.prevButtonOnClickHandler);
            this.addChild(this.nextButton_do);
            this.addChild(this.prevButton_do)
        };
        this.nextButtonOnClickHandler = function() {
            a.goToNextItem()
        };
        this.prevButtonOnClickHandler = function() {
            a.goToPrevItem()
        };
        this.setupZoomButton = function() {
            FWDComplexButton.setPrototype();
            this.zoomButton_do =
                new FWDComplexButton(this.minimizeN_img, this.minimizeS_img, this.maximizeN_img, this.maximizeS_img, this.isMobile_bl, true);
            this.zoomButton_do.addListener(FWDComplexButton.CLICK, this.onZoomButtonClickHandler);
            this.addChild(this.zoomButton_do)
        };
        this.onZoomButtonClickHandler = function() {
            if (!a.isLoading_bl) {
                a.zoomButton_do.toggleButton();
                a.maximizeOrMinimize()
            }
        };
        this.addZoomButtonBackToButtonsArray = function() {
            if (this.showZoomButton_bl)
                if (FWDUtils.indexOfArray(this.buttons_ar, this.zoomButton_do) == -1) {
                    if (this.buttons_ar.length >
                        1) {
                        this.zoomButton_do.setX(this.buttons_ar[this.buttons_ar.length - 2].finalX);
                        this.zoomButton_do.setY(this.buttons_ar[this.buttons_ar.length - 2].finalY + this.buttonHeight + 1);
                        this.buttons_ar.splice(this.buttons_ar.length - 1, 0, this.zoomButton_do)
                    } else {
                        this.zoomButton_do.setX(a.buttons_ar[this.buttons_ar.length - 1].finalX);
                        this.zoomButton_do.setY(a.buttons_ar[this.buttons_ar.length - 1].finalY + this.buttonHeight + 1);
                        this.buttons_ar.push(this.zoomButton_do)
                    }
                    this.addChild(this.zoomButton_do)
                }
        };
        this.setupInfoButton =
            function() {
                FWDComplexButton.setPrototype();
                this.infoButton_do = new FWDComplexButton(this.infoCloseN_img, this.infoCloseS_img, this.infoOpenN_img, this.infoOpenS_img, this.isMobile_bl, false);
                this.infoButton_do.addListener(FWDComplexButton.FIRST_BUTTON_CLICK, this.onHideInfoButtonPressedHandler);
                this.infoButton_do.addListener(FWDComplexButton.SECOND_BUTTON_CLICK, this.onShowInfoButtonPressedHandler);
                this.addChild(this.infoButton_do)
            };
        this.onShowInfoButtonPressedHandler = function() {
            a.infoWindow_do.setText(a.data_ar[a.id].infoText,
                a.finalWidth, a.finalHeight, false, a.type_str != m.IMAGE);
            a.mainItemsHolder_do.addChild(a.infoWindow_do)
        };
        this.onHideInfoButtonPressedHandler = function() {
            a.infoWindow_do.hide(true)
        };
        this.showInfoWindowOnStart = function() {
            if (a.infoWindow_do) {
                this.infoButton_do && this.infoButton_do.setSecondButtonState();
                a.infoWindow_do.setText(a.data_ar[a.id].infoText, a.finalWidth, a.finalHeight, false, a.type_str != m.IMAGE);
                a.mainItemsHolder_do.contains(a.infoWindow_do) || a.mainItemsHolder_do.addChild(a.infoWindow_do)
            }
        };
        this.setupInfoWindow =
            function() {
                FWDInfoWindow.setPrototype();
                this.infoWindow_do = new FWDInfoWindow(this.borderSize, this.infoWindowBackgroundColor, this.infoWindowBackgroundOpacity, this.borderRadius, this.isMobile_bl)
            };
        this.setupSlideshowButton = function() {
            FWDComplexButton.setPrototype();
            this.slideshowButtton_do = new FWDComplexButton(this.pauseN_img, this.pauseS_img, this.playN_img, this.playS_img, this.isMobile_bl, false);
            this.slideshowButtton_do.addListener(FWDComplexButton.FIRST_BUTTON_CLICK, this.onStopSlideShowHandler);
            this.slideshowButtton_do.addListener(FWDComplexButton.SECOND_BUTTON_CLICK,
                this.onStartSlideShowHandler);
            if (this.slideShowAutoPlay_bl) {
                this.timerManager.isStopped_bl = false;
                this.slideShowPreloader_do.show(true);
                this.slideshowButtton_do.setSecondButtonState()
            }
            this.addChild(this.slideshowButtton_do)
        };
        this.onStopSlideShowHandler = function() {
            a.timerManager.isStopped_bl = true;
            a.slideShowPreloader_do.hide(true);
            a.timerManager.stop()
        };
        this.onStartSlideShowHandler = function() {
            a.timerManager.isStopped_bl = false;
            a.slideShowPreloader_do.show(true);
            a.isLoading_bl || a.timerManager.start()
        };
        this.setupTimerManager = function() {
            FWDTimerManager.setProtptype();
            this.timerManager = new FWDTimerManager(this.slideShowDelay, this.slideShowAutoPlay_bl);
            this.timerManager.addListener(FWDTimerManager.START, this.onTimerManagerStartHandler);
            this.timerManager.addListener(FWDTimerManager.STOP, this.onTimerManagerStopHandler);
            this.timerManager.addListener(FWDTimerManager.TIME, this.onTimerManagerTimeHandler)
        };
        this.onTimerManagerStartHandler = function() {
            a.timerManager.isStopped_bl || a.slideShowPreloader_do.animIn()
        };
        this.onTimerManagerStopHandler = function() {
            a.slideShowPreloader_do.animOut()
        };
        this.onTimerManagerTimeHandler = function() {
            a.goToNextItem();
            a.slideShowPreloader_do.animOut()
        };
        this.setupSlideShowPreloader = function() {
            FWDSlideShowPreloader.setPrototype();
            this.slideShowPreloader_do = new FWDSlideShowPreloader(this.slideShowPreloader_img, 31, this.slideshowPreloaderHeight, 11, this.slideShowDelay);
            this.addChild(this.slideShowPreloader_do)
        };
        this.positionSlideShowPreloader = function(c) {
            if (this.slideShowPreloader_do) {
                this.slideShowPreloader_do.finalX =
                    this.finalX + this.finalWidth;
                this.slideShowPreloader_do.finalY = this.finalY + this.finalHeight - this.slideshowPreloaderHeight;
                TweenMax.killTweensOf(this.slideShowPreloader_do);
                if (c) TweenMax.to(this.slideShowPreloader_do, 0.8, {
                    x: this.slideShowPreloader_do.finalX,
                    y: this.slideShowPreloader_do.finalY,
                    delay: 0.1,
                    ease: Expo.easeInOut
                });
                else {
                    this.slideShowPreloader_do.setX(this.slideShowPreloader_do.finalX);
                    this.slideShowPreloader_do.setY(this.slideShowPreloader_do.finalY)
                }
            }
        };
        this.positionButtons = function(c) {
            for (var e,
                    p = this.buttons_ar.length, f = this.finalX + this.finalWidth, h = this.finalY, t = 0; t < p; t++) {
                e = this.buttons_ar[t];
                TweenMax.killTweensOf(e);
                e.finalY = h + t * (this.buttonHeight + 1);
                if (e == this.nextButton_do) {
                    e.finalY = Math.round((this.stageHeight - this.buttonHeight) / 2);
                    if (e.finalY < this.buttons_ar[t - 1].finalY + this.buttonHeight + 1) e.finalY = this.buttons_ar[t - 1].finalY + this.buttonHeight + 1
                }
                e.finalX = f;
                if (isNaN(e.finalX)) return;
                if (e)
                    if (c) TweenMax.to(e, 0.8, {
                        x: e.finalX,
                        y: e.finalY,
                        delay: 0.1,
                        ease: Expo.easeInOut
                    });
                    else {
                        e.setX(e.finalX);
                        e.setY(e.finalY)
                    }
            }
            if (this.showNextAndPrevButtons_bl) {
                TweenMax.killTweensOf(this.prevButton_do);
                if (c) TweenMax.to(this.prevButton_do, 0.8, {
                    x: this.finalX - this.buttonWidth,
                    y: Math.round((this.stageHeight - this.buttonHeight) / 2),
                    delay: 0.1,
                    ease: Expo.easeInOut
                });
                else {
                    this.prevButton_do.setX(this.finalX - this.buttonWidth);
                    this.prevButton_do.setY(Math.round((this.stageHeight - this.buttonHeight) / 2))
                }
            }
            if (this.isMaximized_bl && this.zoomButton_do && this.isMobile_bl) {
                TweenMax.killTweensOf(this.zoomButton_do);
                this.zoomButton_do.setX(this.stageWidth -
                    this.buttonWidth);
                this.zoomButton_do.setY(1)
            }
            this.positionSlideShowPreloader(c)
        };
        this.setupPreloader = function() {
            FWDPreloader.setPrototype();
            this.preloader_do = new FWDPreloader(this.preloaderImg, 29, 29, 21, 50);
            this.preloader_do.addListener(FWDPreloader.HIDE_COMPLETE, this.onPreloaderHideCompleteHandler)
        };
        this.positionPreloader = function() {
            if (this.preloader_do) {
                this.preloader_do.setX(parseInt((this.stageWidth - this.preloader_do.getWidth()) / 2));
                this.preloader_do.setY(Math.round((this.stageHeight - this.preloader_do.getHeight()) /
                    2))
            }
        };
        this.onPreloaderHideCompleteHandler = function() {
            a.removeChild(a.preloader_do)
        };
        this.addKeyboardSupport = function() {
            if (document.addEventListener) {
                document.addEventListener("keydown", this.onKeyDownHandler);
                document.addEventListener("keyup", this.onKeyUpHandler)
            } else {
                document.attachEvent("onkeydown", this.onKeyDownHandler);
                document.attachEvent("onkeyup", this.onKeyUpHandler)
            }
        };
        this.onKeyDownHandler = function(c) {
            if (c.keyCode == 39) a.goToNextItem();
            else c.keyCode == 37 && a.goToPrevItem();
            document.removeEventListener ?
                document.removeEventListener("keydown", a.onKeyDownHandler) : document.detachEvent("onkeydown", a.onKeyDownHandler);
            if (c.preventDefault) c.preventDefault();
            else return false
        };
        this.onKeyUpHandler = function(c) {
            document.addEventListener ? document.addEventListener("keydown", a.onKeyDownHandler) : document.attachEvent("onkeydown", a.onKeyDownHandler);
            if (c.preventDefault) c.preventDefault();
            else return false
        };
        this.hide = function() {
            if (!a.isTweening_bl) {
                a.isTweeningOnShowOrHide_bl = true;
                if (this.image_img) {
                    this.image_img.onload =
                        null;
                    this.image_img.onerror = null
                }
                this.clearMainEventsIntervalsAndTimeOuts();
                if (this.type_str == m.YOUTUBE || this.type_str == m.VIMEO || a.type_str == m.IFRAME) {
                    this.opacityType == "filter" ? this.currentItem_do.setVisible(false) : this.itemsHolder_do.removeChild(this.currentItem_do);
                    TweenMax.to(this.itemsBorder_do, 0.9, {
                        alpha: 0,
                        ease: Quint.easeOut
                    });
                    TweenMax.to(this.mainItemsHolder_do, 0.9, {
                        x: this.stageWidth / 2,
                        y: this.stageHeight / 2,
                        w: 0,
                        h: 0,
                        ease: Expo.easeInOut
                    });
                    TweenMax.to(this.bk_do, 0.9, {
                        alpha: 0,
                        delay: 0.9,
                        ease: Quint.easeOut,
                        onComplete: this.onHideComplete
                    })
                } else if (this.type_str == m.IMAGE) {
                    if (this.currentItem_do && this.currentItem_do.screen) {
                        TweenMax.killTweensOf(this.currentItem_do);
                        TweenMax.to(this.currentItem_do, 0.7, {
                            alpha: 0,
                            ease: Quint.easeOut
                        })
                    }
                    TweenMax.to(this.itemsBorder_do, 0.9, {
                        alpha: 0,
                        delay: 0.1,
                        ease: Quint.easeOut
                    });
                    TweenMax.to(this.mainItemsHolder_do, 0.9, {
                        x: this.stageWidth / 2,
                        y: this.stageHeight / 2,
                        w: 0,
                        h: 0,
                        delay: 0.2,
                        ease: Expo.easeInOut
                    });
                    TweenMax.to(this.bk_do, 0.9, {
                        alpha: 0,
                        delay: 1.2,
                        ease: Quint.easeOut,
                        onComplete: this.onHideComplete
                    })
                }
                this.preloader_do.hide(true);
                this.hideButtons(true);
                this.prevItem_do = this.currentItem_do = null;
                this.firstTimeShowed_bl = this.isTweening_bl = true;
                a.dispatchEvent(m.HIDE_START)
            }
        };
        this.hideButtons = function(c) {
            if (c) {
                TweenMax.to(this.closeButton_do, 0.8, {
                    x: this.stageWidth,
                    ease: Expo.easeInOut
                });
                this.infoButton_do && TweenMax.to(this.infoButton_do, 0.8, {
                    x: this.stageWidth,
                    ease: Expo.easeInOut
                });
                this.slideshowButtton_do && TweenMax.to(this.slideshowButtton_do, 0.8, {
                    x: this.stageWidth,
                    ease: Expo.easeInOut
                });
                this.zoomButton_do && TweenMax.to(this.zoomButton_do,
                    0.8, {
                        x: this.stageWidth,
                        ease: Expo.easeInOut
                    });
                if (this.nextButton_do) {
                    TweenMax.to(this.nextButton_do, 0.8, {
                        x: this.stageWidth,

                        ease: Expo.easeInOut
                    });
                    TweenMax.to(this.prevButton_do, 0.8, {
                        x: -this.buttonWidth,
                        ease: Expo.easeInOut
                    })
                }
                this.slideShowPreloader_do && TweenMax.to(this.slideShowPreloader_do, 0.8, {
                    x: this.stageWidth,
                    ease: Expo.easeInOut
                })
            } else {
                this.closeButton_do.setVisible(false);
                this.infoButton_do && this.infoButton_do.setVisible(false);
                this.zoomButton_do && this.zoomButton_do.setVisible(false);
                this.slideshowButtton_do &&
                    this.slideshowButtton_do.setVisible(false);
                if (this.nextButton_do) {
                    this.nextButton_do.setVisible(false);
                    this.prevButton_do.setVisible(false)
                }
                this.slideShowPreloader_do && this.slideShowPreloader_do.image_do.setVisible(false)
            }
        };
        this.showButtons = function() {
            this.positionButtons(false);
            this.closeButton_do.setVisible(true);
            this.closeButton_do.setX(this.stageWidth);
            if (this.infoButton_do) {
                this.infoButton_do.setVisible(true);
                this.infoButton_do.setX(this.stageWidth)
            }
            if (this.zoomButton_do && (this.type_str != m.YOUTUBE ||
                    this.type_str != m.VIMEO || a.type_str == m.IFRAME)) {
                this.zoomButton_do.setVisible(true);
                this.zoomButton_do.setX(this.stageWidth)
            }
            if (this.slideshowButtton_do) {
                this.slideshowButtton_do.setVisible(true);
                this.slideshowButtton_do.setX(this.stageWidth)
            }
            if (this.nextButton_do) {
                this.nextButton_do.setVisible(true);
                this.nextButton_do.setX(this.stageWidth);
                this.prevButton_do.setVisible(true);
                this.prevButton_do.setX(-this.buttonWidth)
            }
            if (this.slideShowPreloader_do) {
                this.slideShowPreloader_do.image_do.setX(0);
                this.slideShowPreloader_do.setX(this.stageWidth);
                this.slideShowPreloader_do.image_do.setVisible(true)
            }
            this.positionButtons(true)
        };
        this.onHideComplete = function() {
            a.isShowed_bl = false;
            a.isTweeningOnShowOrHide_bl = false;
            a.stageWidth = 0;
            if (a.isMobile_bl) q.removeEventListener("touchmove", a.mouseDummyHandler);
            else if (q.removeEventListener) {
                q.removeEventListener("mousewheel", a.mouseDummyHandler);
                q.removeEventListener("DOMMouseScroll", a.mouseDummyHandler)
            } else document.detachEvent && document.detachEvent("onmousewheel", a.mouseDummyHandler);
            a.addZoomButtonBackToButtonsArray();
            a.screen.parentNode.removeChild(a.screen);
            a.dispatchEvent(m.HIDE_COMPLETE)
        };
        this.clearMainEventsIntervalsAndTimeOuts = function() {
            clearInterval(this.updateImageWhenMaximized_int);
            clearTimeout(this.transitionDoneId_to);
            clearTimeout(this.transitionShapeDoneId_to);
            clearTimeout(this.showVideoId_to);
            clearTimeout(this.maximizeCompleteTimeOutId_to);
            clearTimeout(this.minimizeCompleteTimeOutId_to);
            clearTimeout(this.showFirstTimeWithDelayId_to);
            clearTimeout(this.resizeHandlerId1_to);
            clearTimeout(this.resizeHandlerId2_to);
            clearTimeout(this.orientationChangeId_to);
            this.removeEventsForScrollngImageOnDesktop();
            this.timerManager && this.timerManager.stop();
            if (this.isMobile_bl) {
                if (a.hasPointerEvent_bl) {
                    q.removeEventListener("MSPointerDown", a.onTouchStartScrollImage);
                    q.removeEventListener("MSPointerUp", a.onTouchEndScrollImage);
                    q.removeEventListener("MSPointerMove", a.onTouchMoveScrollImage);
                    a.bk_do.screen.removeEventListener("MSPointerDown", a.onBkMouseDown)
                }
                q.removeEventListener("touchstart", a.onTouchStartScrollImage);
                q.removeEventListener("touchend",
                    a.onTouchEndScrollImage);
                q.removeEventListener("touchmove", a.onTouchMoveScrollImage);
                a.bk_do.screen.removeEventListener("touchstart", a.onBkMouseDown)
            } else if (q.addEventListener) {
                q.removeEventListener("mousemove", this.updateMaximizeImageOnMouseMovedHandler);
                a.bk_do.screen.removeEventListener("mousedown", a.onBkMouseDown)
            } else if (document.attachEvent) {
                document.detachEvent("onmousemove", this.updateMaximizeImageOnMouseMovedHandler);
                a.bk_do.screen.detachEvent("onmousedown", a.onBkMouseDown)
            }
            if (q.removeEventListener) {
                q.removeEventListener("resize",
                    a.onResizeHandler);
                q.removeEventListener("scroll", a.onScrollHandler);
                q.removeEventListener("orientationchange", a.orientationChance);
                document.removeEventListener("fullscreenchange", a.onFullScreenChange);
                document.removeEventListener("mozfullscreenchange", a.onFullScreenChange)
            } else if (q.detachEvent) {
                q.detachEvent("onresize", a.onResizeHandler);
                q.detachEvent("onscroll", a.onScrollHandler)
            }
            if (this.addKeyboardSupport_bl)
                if (document.removeEventListener) {
                    document.removeEventListener("keydown", this.onKeyDownHandler);
                    document.removeEventListener("keyup", this.onKeyUpHandler)
                } else if (document.attachEvent) {
                document.detachEvent("onkeydown", this.onKeyDownHandler);
                document.detachEvent("onkeyup", this.onKeyUpHandler)
            }
        };
        this.destroy = function() {
            if (a.isMobile_bl) q.removeEventListener("touchmove", a.mouseDummyHandler);
            else if (q.removeEventListener) {
                q.removeEventListener("mousewheel", a.mouseDummyHandler);
                q.removeEventListener("DOMMouseScroll", a.mouseDummyHandler)
            } else document.detachEvent && document.detachEvent("onmousewheel",
                a.mouseDummyHandler);
            if (this.image_img) {
                this.image_img.onload = null;
                this.image_img.onerror = null
            }
            if (this.slideShowPreloader_do) {
                TweenMax.killTweensOf(this.slideShowPreloader_do);
                this.slideShowPreloader_do.destroy()
            }
            this.info_do.destroy();
            this.infoWindow_do && this.infoWindow_do.destroy();
            this.timerManager && this.timerManager.destroy();
            this.preloader_do.destroy();
            this.customContextMenu && this.customContextMenu.destroy();
            this.clearMainEventsIntervalsAndTimeOuts();
            this.cleanChildren(0);
            if (this.nextButton_do) {
                TweenMax.killTweensOf(this.nextButton_do);
                TweenMax.killTweensOf(this.prevButton_do);
                this.nextButton_do.destroy();
                this.prevButton_do.destroy()
            }
            if (this.closeButton_do) {
                TweenMax.killTweensOf(this.closeButton_do);
                this.closeButton_do.destroy()
            }
            if (this.zoomButton_do) {
                TweenMax.killTweensOf(this.zoomButton_do);
                this.zoomButton_do.destroy()
            }
            if (this.infoButton_do) {
                TweenMax.killTweensOf(this.infoButton_do);
                this.infoButton_do.destroy()
            }
            if (this.slideshowButtton_do) {
                TweenMax.killTweensOf(this.slideshowButtton_do);
                this.slideshowButtton_do.destroy()
            }
            if (this.currentItem_do)
                if (this.contains(this.currentItem_do)) {
                    TweenMax.killTweensOf(this.currentItem_do);
                    this.currentItem_do.destroy()
                }
            TweenMax.killTweensOf(this.mainItemsHolder_do);
            TweenMax.killTweensOf(this.bk_do);
            TweenMax.killTweensOf(this.itemsBackground_do);
            TweenMax.killTweensOf(this.itemsBorder_do);
            TweenMax.killTweensOf(this.itemsHolder_do);
            this.mainItemsHolder_do.destroy();
            this.bk_do.destroy();
            this.itemsBackground_do.destroy();
            this.itemsBorder_do.destroy();
            this.itemsHolder_do.destroy();
            j = this.data_ar = this.slideshowButtton_do = this.zoomButton_do = this.prevButton_do = this.nextButton_do = this.closeButton_do =
                this.prevItem_do = this.currentItem_do = this.itemsHolder_do = this.itemsBorder_do = this.itemsBackground_do = this.mainItemsHolder_do = this.bk_do = this.timerManager = this.slideShowPreloader_do = this.infoWindow_do = this.info_do = this.preloaderImg = this.infoCloseS_img = this.infoCloseN_img = this.infoOpenS_img = this.infoOpenN_img = this.playS_img = this.playN_img = this.pauseS_img = this.pauseN_img = this.minimizeS_img = this.minimizeN_img = this.maximizeS_img = this.maximizeN_img = this.prevS_img = this.prevN_img = this.nextS_img = this.nextN_img =
                this.closeS_img = this.closeN_img = this.image_img = null;
            a.setInnerHTML("");
            b.destroy();
            b = a = null;
            m.prototype = null
        };
        this.init()
    };
    m.setPrototype = function() {
        m.prototype = new FWDDisplayObject("div")
    };
    m.YOUTUBE = "youtube";
    m.VIMEO = "vimeo";
    m.IMAGE = "image_img";
    m.IFRAME = "htmlIframe";
    m.MAXIMIZE_COMPLETE = "maximizeComplete";
    m.MINIMIZE_START = "minimizeStart";
    m.SHOW_START = "showStart";
    m.HIDE_COMPLETE = "hideComplete";
    m.HIDE_START = "hideStart";
    m.prototype = null;
    q.FWDLightBox = m
})(window);
(function(q) {
    var m = function(j) {
        var a = this,
            b = m.prototype;
        this.lightboxInfoCloseS_img = this.lightboxInfoCloseN_img = this.lightboxInfoOpenS_img = this.lightboxInfoOpenN_img = this.lightboxMinimizeS_img = this.lightboxMinimizeN_img = this.lightboxMaximizeS_img = this.lightboxMaximizeN_img = this.lightboxPauseS_img = this.lightboxPauseN_img = this.lightboxPlayS_img = this.lightboxPlayN_img = this.lightboxPrevButtonS_img = this.lightboxPrevButtonN_img = this.lightboxNextButtonS_img = this.lightboxNextButtonN_img = this.lightboxCloseButtonS_img =
            this.lightboxCloseButtonN_img = this.scrollBarHandlerCenterIconS_img = this.scrollBarHandlerCenterIconN_img = this.scrollBarHandlerRightS_img = this.scrollBarHandlerRightN_img = this.scrollBarHandlerLeftS_img = this.scrollBarHandlerLeftN_img = this.scrollBarHandlerCenterBkS_img = this.scrollBarHandlerCenterBkN_img = this.scrollBarTrackN_img = this.comboboxUpArrowS_img = this.comboboxUpArrowN_img = this.fullScreenFS_img = this.fullScreenFN_img = this.fullScreenNS_img = this.fullScreenNN_img = this.showMoreThumbsButtonS_img = this.showMoreThumbsButtonN_img =
            this.slideShowPreloader_img = this.lightboxPreloader_img = this.mainPreloader_img = this.image_img = null;
        this.props_obj = j;
        this.rootElement_el = null;
        this.graphicsPaths_ar = [];
        this.skin_ar = [];
        this.playList_ar = [];
        this.lightBox_ar = [];
        this.categories_ar = [];
        this.countLoadedGraphics = 0;
        this.lightBoxVideoAutoPlay_bl = false;
        this.removePlayListFromDOM_bl = true;
        this.showComboBox_bl = this.forceRoundBorderToIframe_bl = this.showAllCategories_bl = this.showContextMenu_bl = this.addMargins_bl = false;
        this.isMobile_bl = FWDUtils.isMobile;
        this.init = function() {
            this.parseDelayId_to = setTimeout(a.parseProperties, 100)
        };
        this.parseProperties = function() {
            var c;
            if (a.props_obj.gridPlayListAndSkinId) {
                a.rootElement_el = FWDUtils.getChildById(a.props_obj.gridPlayListAndSkinId);
                if (a.rootElement_el) {
                    a.rootElement_el.style.display = "none";
                    var e = FWDUtils.getChildFromNodeListFromAttribute(a.rootElement_el, "data-skin");
                    if (e) {
                        var p = FWDUtils.getChildrenFromAttribute(a.rootElement_el, "data-cat");
                        if (p) {
                            a.numberOfThumbsToShowPerSet = a.props_obj.nrOfThumbsToShowOnSet ||
                                undefined;
                            a.thumbnailBaseWidth = a.props_obj.thumbnailBaseWidth || 280;
                            a.thumbnailBaseHeight = a.props_obj.thumbnailBaseHeight || 240;
                            a.horizontalSpaceBetweenThumbnails = a.props_obj.horizontalSpaceBetweenThumbnails;
                            if (a.horizontalSpaceBetweenThumbnails == undefined) a.horizontalSpaceBetweenThumbnails = 0;
                            a.verticalSpaceBetweenThumbnails = a.props_obj.verticalSpaceBetweenThumbnails;
                            if (a.verticalSpaceBetweenThumbnails == undefined) a.verticalSpaceBetweenThumbnails = 0; /*console.log(a.props_obj.verticalSpaceBetweenThumbnails);*/
                            a.thumbnailOverlayColor_str = a.props_obj.thumbnailOverlayColor || "transparent";
                            a.thumbnailBackgroundColor_str = a.props_obj.thumbnailBackgroundColor || "transparent";
                            a.thumbnailBorderNormalColor_str = a.props_obj.thumbnailBorderNormalColor || "transparent";
                            a.thumbnailBorderSelectedColor_str = a.props_obj.thumbnailBorderSelectedColor || "transparent";
                            a.backgroundColor_str = a.props_obj.backgroundColor || "transparent";
                            a.thumbnailBackgroundColor_str = a.props_obj.thumbnailBackgroundColor || "transparent";
                            a.thumbnailBorderSize =
                                a.props_obj.thumbnailBorderSize || 0;
                            a.thumbnailBorderColor_str = a.props_obj.thumbnailBorderColor || "transparent";
                            a.thumbnailOverlayBackgroundColor_str = a.props_obj.thumbnailOverlayColor || "transparent";
                            a.thumbnailOverlayOpacity = a.props_obj.thumbnailOverlayOpacity || 1;
                            a.lightBoxInfoWindowBackgroundColor_str = a.props_obj.lightBoxInfoWindowBackgroundColor || "transparent";
                            a.lightBoxBackgroundColor_str = a.props_obj.lighBoxBackgroundColor || "transparent";
                            a.lightBoxInfoWindowBackgroundOpacity = a.props_obj.lightBoxInfoWindowBackgroundOpacity ||
                                1;
                            a.lightBoxBackgroundOpacity = a.props_obj.lightBoxInfoWindowBackgroundOpacity || 1;
                            a.lightBoxMainBackgroundOpacity = a.props_obj.lightBoxMainBackgroundOpacity || 1;
                            a.lightBoxItemBorderColor_str = a.props_obj.lightBoxItemBorderColor || "transparent";
                            a.lightBoxItemBackgroundColor_str = a.props_obj.lightBoxItemBackgroundColor || "transparent";
                            a.lightBoxBorderSize = a.props_obj.lightBoxBorderSize || 0;
                            a.lightBoxBorderRadius = a.props_obj.lightBoxBorderRadius || 0;
                            a.thumbnailBorderRadius = a.props_obj.thumbnailBorderRadius ||
                                0;
                            a.lightBoxSlideShowDelay = a.props_obj.lightBoxSlideShowDelay * 1E3 || 3E3;
                            a.scrollBarOffset = a.props_obj.scrollBarOffset || 0;
                            a.thumbnailOverlayType_str = a.props_obj.thumbnailOverlayType;
                            a.thumbnailOverlayType_str = a.thumbnailOverlayType_str == "icons" || a.thumbnailOverlayType_str == "text" || a.thumbnailOverlayType_str == "none";
                            if (a.thumbnailOverlayType_str) a.thumbnailOverlayType_str = FWDUtils.trim(a.props_obj.thumbnailOverlayType);
                            else a.scrollBarPosition_str = "none";
                            a.scrollBarPosition_str = a.props_obj.scrollBarPosition;
                            a.scrollBarPosition_str = a.scrollBarPosition_str == "bottom" || a.scrollBarPosition_str == "top";
                            a.scrollBarPosition_str = a.scrollBarPosition_str ? FWDUtils.trim(a.props_obj.scrollBarPosition) : "bottom";
                            a.scrollBarType_str = a.props_obj.scrollBarType;
                            a.scrollBarType_str = a.scrollBarType_str == "drag" || a.scrollBarType_str == "scrollbar";
                            a.scrollBarType_str = !a.scrollBarType_str || a.isMobile_bl ? "drag" : FWDUtils.trim(a.props_obj.scrollBarType).toLowerCase();
                            a.position_str = a.props_obj.comboBoxPosition;
                            a.position_str = a.position_str ==
                                "topleft" || a.position_str == "topright";
                            a.position_str = a.position_str ? FWDUtils.trim(a.props_obj.comboBoxPosition).toLowerCase() : "topleft";
                            a.fullScreenPosition_str = a.props_obj.fullScreenButtonPosition;
                            a.fullScreenPosition_str = a.fullScreenPosition_str == "topleft" || a.fullScreenPosition_str == "topright" || a.fullScreenPosition_str == "bottomleft" || a.fullScreenPosition_str == "bottomright";
                            a.fullScreenPosition_str = a.fullScreenPosition_str ? FWDUtils.trim(a.props_obj.fullScreenButtonPosition).toLowerCase() : "topleft";
                            a.scrollbarDisabledColor_str = a.props_obj.scrollbarDisabledColor || "#000000";
                            a.allCategoriesLabel_str = a.props_obj.allCategoriesLabel || null;
                            a.selectLabel_str = a.props_obj.selectLabel || "not defined!";
                            a.selctorBackgroundNormalColor_str = a.props_obj.selctorBackgroundNormalColor;
                            a.selctorBackgroundSelectedColor_str = a.props_obj.selctorBackgroundSelectedColor;
                            a.selctorTextNormalColor_str = a.props_obj.selctorTextNormalColor;
                            a.selctorTextSelectedColor_str = a.props_obj.selctorTextSelectedColor;
                            a.buttonBackgroundNormalColor_str =
                                a.props_obj.buttonBackgroundNormalColor;
                            a.buttonBackgroundSelectedColor_str = a.props_obj.buttonBackgroundSelectedColor;
                            a.buttonTextNormalColor_str = a.props_obj.buttonTextNormalColor;
                            a.buttonTextSelectedColor_str = a.props_obj.buttonTextSelectedColor;
                            a.comboBoxShadowColor_str = a.props_obj.comboBoxShadowColor || "#000000";
                            a.comboBoxHorizontalMargins = a.props_obj.comboBoxHorizontalMargins || 0;
                            a.comboBoxVerticalMargins = a.props_obj.comboBoxVerticalMargins || 0;
                            a.comboBoxCornerRadius = a.props_obj.comboBoxCornerRadius ||
                                0;
                            a.fullScreenHorizontalMargins = a.props_obj.fullScreenButtonHorizontalMargins || 0;
                            a.fullScreenVerticalMargins = a.props_obj.fullScreenButtonVerticalMargins || 0;
                            a.selectLabel_str = a.props_obj.selectLabel || "not defined!";
                            a.addMargins_bl = a.props_obj.addMargins;
                            a.addMargins_bl = a.addMargins_bl == "yes" ? true : false;
                            a.showContextMenu_bl = a.props_obj.showContextMenu;
                            a.showContextMenu_bl = a.showContextMenu_bl == "no" ? false : true;
                            a.showAllCategories_bl = a.props_obj.showAllCategories;
                            a.showAllCategories_bl = a.showAllCategories_bl ==
                                "no" ? false : true;
                            a.forceRoundBorderToIframe_bl = a.props_obj.forceRoundBorderToIframe;
                            a.forceRoundBorderToIframe_bl = a.forceRoundBorderToIframe_bl == "yes" ? true : false;
                            a.showFullScreenButton_bl = a.props_obj.showFullScreenButton;
                            a.showFullScreenButton_bl = a.showFullScreenButton_bl == "no" ? false : true;
                            a.addLightBoxKeyboardSupport_bl = a.props_obj.addLightBoxKeyboardSupport;
                            a.addLightBoxKeyboardSupport_bl = a.addLightBoxKeyboardSupport_bl == "no" ? false : true;
                            a.showLighBoxNextAndPrevButtons_bl = a.props_obj.showLightBoxNextAndPrevButtons;
                            a.showLighBoxNextAndPrevButtons_bl = a.showLighBoxNextAndPrevButtons_bl == "no" ? false : true;
                            a.showInfoWindowByDefault_bl = a.props_obj.showLightBoxInfoWindowByDefault;
                            a.showInfoWindowByDefault_bl = a.showInfoWindowByDefault_bl == "yes" ? true : false;
                            a.lightBoxVideoAutoPlay_bl = a.props_obj.lightBoxVideoAutoPlay;
                            a.lightBoxVideoAutoPlay_bl = a.lightBoxVideoAutoPlay_bl == "yes" ? true : false;
                            a.addMouseWheelSupport_bl = a.props_obj.addMouseWheelSupport;
                            a.addMouseWheelSupport_bl = a.addMouseWheelSupport_bl == "no" ? false : true;
                            a.removePlayListFromDOM_bl =
                                a.props_obj.removePlayListFromDOM;
                            a.removePlayListFromDOM_bl = a.removePlayListFromDOM_bl == "no" ? false : true;
                            a.showContextMenu_bl = a.props_obj.showContextMenu;
                            a.showContextMenu_bl = a.showContextMenu_bl == "no" ? false : true;
                            a.showLightBoxZoomButton_bl = a.props_obj.showLightBoxZoomButton;
                            a.showLightBoxZoomButton_bl = a.showLightBoxZoomButton_bl == "no" ? false : true;
                            a.showLightBoxInfoButton_bl = a.props_obj.showLightBoxInfoButton;
                            a.showLightBoxInfoButton_bl = a.showLightBoxInfoButton_bl == "no" ? false : true;
                            a.showLighBoxSlideShowButton_bl =
                                a.props_obj.showLighBoxSlideShowButton;
                            a.showLighBoxSlideShowButton_bl = a.showLighBoxSlideShowButton_bl == "no" ? false : true;
                            a.slideShowAutoPlay_bl = a.props_obj.slideShowAutoPlay;
                            a.slideShowAutoPlay_bl = a.slideShowAutoPlay_bl == "yes" ? true : false;
                            var f = a.checkForAttribute(e, "data-preloader-path");
                            if (f) {
                                var h = a.checkForAttribute(e, "data-lightbox-slideshow-preloader-path");
                                if (h) {
                                    var t = a.checkForAttribute(e, "data-show-more-thumbnails-button-normal-path");
                                    if (t) {
                                        var g = a.checkForAttribute(e, "data-show-more-thumbnails-button-selectsed-path");
                                        if (g) {
                                            a.imageIconPath_str = a.checkForAttribute(e, "data-image-icon-path");
                                            if (a.imageIconPath_str) {
                                                a.imageIframePath_str = a.checkForAttribute(e, "data-iframe-icon-path");
                                                if (a.imageIframePath_str) {
                                                    a.videoIconPath_str = a.checkForAttribute(e, "data-video-icon-path");
                                                    if (a.videoIconPath_str) {
                                                        a.linkIconPath_str = a.checkForAttribute(e, "data-link-icon-path");
                                                        if (a.linkIconPath_str) {
                                                            a.handMovePath_str = a.checkForAttribute(e, "data-hand-move-icon-path");
                                                            if (a.handMovePath_str) {
                                                                a.handGrabPath_str = a.checkForAttribute(e,
                                                                    "data-hand-drag-icon-path");
                                                                if (a.handGrabPath_str) {
                                                                    var v = a.checkForAttribute(e, "data-fullscreen-button-normal-normal-path");
                                                                    if (v) {
                                                                        var d = a.checkForAttribute(e, "data-fullscreen-button-normal-selected-path");
                                                                        if (d) {
                                                                            var n = a.checkForAttribute(e, "data-fullscreen-button-full-normal-path");
                                                                            if (n) {
                                                                                var u = a.checkForAttribute(e, "data-fullscreen-button-full-selected-path");
                                                                                if (u) {
                                                                                    var B = a.checkForAttribute(e, "data-combobox-down-arrow-icon-normal-path");
                                                                                    if (B) {
                                                                                        var E = a.checkForAttribute(e, "data-combobox-down-arrow-icon-selected-path");
                                                                                        if (E) {
                                                                                            var H = a.checkForAttribute(e, "data-scrollbar-track-background-normal-path");
                                                                                            if (H) {
                                                                                                var G = a.checkForAttribute(e, "data-scrollbar-handler-background-normal-path");
                                                                                                if (G) {
                                                                                                    var P = a.checkForAttribute(e, "data-scrollbar-handler-background-selected-path");
                                                                                                    if (P) {
                                                                                                        var K = a.checkForAttribute(e, "data-scrollbar-handler-left-normal-path");
                                                                                                        if (K) {
                                                                                                            var T = a.checkForAttribute(e, "data-scrollbar-handler-left-selected-path");
                                                                                                            if (T) {
                                                                                                                var V = a.checkForAttribute(e, "data-scrollbar-handler-right-normal-path");
                                                                                                                if (V) {
                                                                                                                    var R = a.checkForAttribute(e,
                                                                                                                        "data-scrollbar-handler-right-selected-path");
                                                                                                                    if (R) {
                                                                                                                        var M = a.checkForAttribute(e, "data-scrollbar-handler-center-icon-normal-path");
                                                                                                                        if (M) {
                                                                                                                            var X = a.checkForAttribute(e, "data-scrollbar-handler-center-icon-selected-path");
                                                                                                                            if (X) {
                                                                                                                                var ba = a.checkForAttribute(e, "data-lightbox-close-button-normal-path");
                                                                                                                                if (ba) {
                                                                                                                                    var ha = a.checkForAttribute(e, "data-lightbox-close-button-selected-path");
                                                                                                                                    if (ha) {
                                                                                                                                        var ca = a.checkForAttribute(e, "data-lightbox-next-button-normal-path");
                                                                                                                                        if (ca) {
                                                                                                                                            var W = a.checkForAttribute(e, "data-lightbox-next-button-selected-path");
                                                                                                                                            if (W) {
                                                                                                                                                var Y = a.checkForAttribute(e, "data-lightbox-prev-button-normal-path");
                                                                                                                                                if (Y) {
                                                                                                                                                    var fa = a.checkForAttribute(e, "data-lightbox-prev-button-selected-path");
                                                                                                                                                    if (fa) {
                                                                                                                                                        var ga = a.checkForAttribute(e, "data-lightbox-play-button-normal-path");
                                                                                                                                                        if (ga) {
                                                                                                                                                            var oa = a.checkForAttribute(e, "data-lightbox-play-button-selected-path");
                                                                                                                                                            if (oa) {
                                                                                                                                                                var xa = a.checkForAttribute(e, "data-lightbox-pause-button-normal-path");
                                                                                                                                                                if (xa) {
                                                                                                                                                                    var ta = a.checkForAttribute(e, "data-lightbox-pause-button-selected-path");
                                                                                                                                                                    if (ta) {
                                                                                                                                                                        var o = a.checkForAttribute(e,
                                                                                                                                                                            "data-lightbox-maximize-button-normal-path");
                                                                                                                                                                        if (o) {
                                                                                                                                                                            var x = a.checkForAttribute(e, "data-lightbox-maximize-button-selected-path");
                                                                                                                                                                            if (x) {
                                                                                                                                                                                var w = a.checkForAttribute(e, "data-lightbox-minimize-button-normal-path");
                                                                                                                                                                                if (w) {
                                                                                                                                                                                    var C = a.checkForAttribute(e, "data-lightbox-minimize-button-selected-path");
                                                                                                                                                                                    if (C) {
                                                                                                                                                                                        var I = a.checkForAttribute(e, "data-lightbox-info-button-open-normal-path");
                                                                                                                                                                                        if (I) {
                                                                                                                                                                                            var L = a.checkForAttribute(e, "data-lightbox-info-button-open-selected-path");
                                                                                                                                                                                            if (L) {
                                                                                                                                                                                                var U = a.checkForAttribute(e, "data-lightbox-info-button-close-normal-path");
                                                                                                                                                                                                if (U)
                                                                                                                                                                                                    if (e = a.checkForAttribute(e, "data-lightbox-info-button-close-selected-path")) {
                                                                                                                                                                                                        a.graphicsPaths_ar.push(f);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(f);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(t);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(g);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(v);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(d);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(n);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(u);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(B);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(E);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(H);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(G);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(P);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(K);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(T);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(V);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(R);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(M);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(X);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(ba);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(ha);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(ca);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(W);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(Y);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(fa);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(ga);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(oa);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(xa);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(ta);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(o);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(x);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(w);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(C);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(I);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(L);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(U);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(e);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(h);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(a.imageIframePath_str);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(a.imageIconPath_str);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(a.videoIconPath_str);
                                                                                                                                                                                                        a.graphicsPaths_ar.push(a.linkIconPath_str);
                                                                                                                                                                                                        f = [];
                                                                                                                                                                                                        h = [];
                                                                                                                                                                                                        n = p.length;
                                                                                                                                                                                                        for (E = 0; E < n; E++) {
                                                                                                                                                                                                            v = p[E];
                                                                                                                                                                                                            g = [];
                                                                                                                                                                                                            t = [];
                                                                                                                                                                                                            u = FWDUtils.getChildren(v);
                                                                                                                                                                                                            B = u.length;
                                                                                                                                                                                                            for (H = 0; H < B; H++) {
                                                                                                                                                                                                                d = {};
                                                                                                                                                                                                                G = u[H];
                                                                                                                                                                                                                G = FWDUtils.getChildren(G);
                                                                                                                                                                                                                T = "";
                                                                                                                                                                                                                M = E + 1;
                                                                                                                                                                                                                R = H + 1;
                                                                                                                                                                                                                P = G.length;
                                                                                                                                                                                                                V = true;
                                                                                                                                                                                                                for (K = 0; K < P; K++) {
                                                                                                                                                                                                                    T = "data-type";
                                                                                                                                                                                                                    if (FWDUtils.hasAttribute(G[K],
                                                                                                                                                                                                                            "data-type")) {
                                                                                                                                                                                                                        V = false;
                                                                                                                                                                                                                        d.mediaType = FWDUtils.trim(FWDUtils.getAttributeValue(G[K], "data-type"));
                                                                                                                                                                                                                        break
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                if (V) {
                                                                                                                                                                                                                    c = "Element with attribute <font color='#FFFFFF'>" + T + "</font> is not defined in the playlist number - <font color='#FFFFFF'>" + M + "</font> at position - <font color='#FFFFFF'>" + R + "</font> in the data playlist ul element.";
                                                                                                                                                                                                                    a.dispatchEvent(m.LOAD_ERROR, {
                                                                                                                                                                                                                        text: c
                                                                                                                                                                                                                    });
                                                                                                                                                                                                                    return
                                                                                                                                                                                                                }
                                                                                                                                                                                                                V = true;
                                                                                                                                                                                                                for (K = 0; K < P; K++) {
                                                                                                                                                                                                                    T = "data-url";
                                                                                                                                                                                                                    if (FWDUtils.hasAttribute(G[K], "data-url")) {
                                                                                                                                                                                                                        V = false;
                                                                                                                                                                                                                        c = G[K];
                                                                                                                                                                                                                        break
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                if (V) {
                                                                                                                                                                                                                    c = "Element with attribute <font color='#FFFFFF'>" +
                                                                                                                                                                                                                        T + "</font> is not defined in the playlist number - <font color='#FFFFFF'>" + M + "</font> at position - <font color='#FFFFFF'>" + R + "</font> in the data playlist ul element.";
                                                                                                                                                                                                                    a.dispatchEvent(m.LOAD_ERROR, {
                                                                                                                                                                                                                        text: c
                                                                                                                                                                                                                    });
                                                                                                                                                                                                                    return
                                                                                                                                                                                                                }
                                                                                                                                                                                                                V = true;
                                                                                                                                                                                                                for (K = 0; K < P; K++) {
                                                                                                                                                                                                                    T = "data-thumbnail-path";
                                                                                                                                                                                                                    if (FWDUtils.hasAttribute(G[K], "data-thumbnail-path")) {
                                                                                                                                                                                                                        V = false;
                                                                                                                                                                                                                        d.thumbPath = FWDUtils.trim(FWDUtils.getAttributeValue(G[K], "data-thumbnail-path"));
                                                                                                                                                                                                                        break
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                if (V) {
                                                                                                                                                                                                                    c = "Element with attribute <font color='#FFFFFF'>" + T + "</font> is not defined in the playlist number - <font color='#FFFFFF'>" +
                                                                                                                                                                                                                        M + "</font> at position - <font color='#FFFFFF'>" + R + "</font> in the data playlist ul element.";
                                                                                                                                                                                                                    a.dispatchEvent(m.LOAD_ERROR, {
                                                                                                                                                                                                                        text: c
                                                                                                                                                                                                                    });
                                                                                                                                                                                                                    return
                                                                                                                                                                                                                }
                                                                                                                                                                                                                if (a.thumbnailOverlayType_str == "text") {
                                                                                                                                                                                                                    V = true;
                                                                                                                                                                                                                    for (K = 0; K < P; K++) {
                                                                                                                                                                                                                        T = "data-thumbnail-text";
                                                                                                                                                                                                                        if (FWDUtils.hasAttribute(G[K], "data-thumbnail-text")) {
                                                                                                                                                                                                                            V = false;
                                                                                                                                                                                                                            d.thumbText = G[K].innerHTML;
                                                                                                                                                                                                                            break
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                    if (V) {
                                                                                                                                                                                                                        c = "Element with attribute <font color='#FFFFFF'>" + T + "</font> is not defined in the playlist number - <font color='#FFFFFF'>" + M + "</font> at position - <font color='#FFFFFF'>" +
                                                                                                                                                                                                                            R + "</font> in the data playlist ul element.";
                                                                                                                                                                                                                        a.dispatchEvent(m.LOAD_ERROR, {
                                                                                                                                                                                                                            text: c
                                                                                                                                                                                                                        });
                                                                                                                                                                                                                        return
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                for (K = 0; K < P; K++) {
                                                                                                                                                                                                                    d.thumbnailBkColor = undefined;
                                                                                                                                                                                                                    if (FWDUtils.hasAttribute(G[K], "data-thumbnail-background-color")) {
                                                                                                                                                                                                                        d.thumbnailBkColor = FWDUtils.trim(FWDUtils.getAttributeValue(G[K], "data-thumbnail-background-color"));
                                                                                                                                                                                                                        break
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                for (K = 0; K < P; K++) {
                                                                                                                                                                                                                    d.thumbnailOverlayColor = undefined;
                                                                                                                                                                                                                    if (FWDUtils.hasAttribute(G[K], "data-thumbnail-overlay-color")) {
                                                                                                                                                                                                                        d.thumbnailOverlayColor = FWDUtils.trim(FWDUtils.getAttributeValue(G[K], "data-thumbnail-overlay-color"));
                                                                                                                                                                                                                        break
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                for (K = 0; K < P; K++) {
                                                                                                                                                                                                                    d.borderNormalColor = undefined;
                                                                                                                                                                                                                    if (FWDUtils.hasAttribute(G[K], "data-thumbnail-border-normal-color")) {
                                                                                                                                                                                                                        d.borderNormalColor = FWDUtils.trim(FWDUtils.getAttributeValue(G[K], "data-thumbnail-border-normal-color"));
                                                                                                                                                                                                                        break
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                for (K = 0; K < P; K++) {
                                                                                                                                                                                                                    d.borderSelectedColor = undefined;
                                                                                                                                                                                                                    if (FWDUtils.hasAttribute(G[K], "data-thumbnail-border-selected-color")) {
                                                                                                                                                                                                                        d.borderSelectedColor = FWDUtils.trim(FWDUtils.getAttributeValue(G[K], "data-thumbnail-border-selected-color"));
                                                                                                                                                                                                                        break
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                T = {};
                                                                                                                                                                                                                T.dataType = FWDUtils.trim(FWDUtils.getAttributeValue(c,
                                                                                                                                                                                                                    "data-type"));
                                                                                                                                                                                                                T.url = FWDUtils.trim(FWDUtils.getAttributeValue(c, "data-url"));
                                                                                                                                                                                                                T.linktogo = FWDUtils.trim(FWDUtils.getAttributeValue(c, "data-linktogo"));
                                                                                                                                                                                                                T.target = FWDUtils.getAttributeValue(c, "data-target");
                                                                                                                                                                                                                T.width = FWDUtils.getAttributeValue(c, "data-width");
                                                                                                                                                                                                                T.height = FWDUtils.getAttributeValue(c, "data-height");
                                                                                                                                                                                                                T.info = FWDUtils.getAttributeValue(c, "data-info");
                                                                                                                                                                                                                if (!T.target) T.target = "_blank";
                                                                                                                                                                                                                for (K = 0; K < P; K++)
                                                                                                                                                                                                                    if (FWDUtils.hasAttribute(G[K], "data-info")) {
                                                                                                                                                                                                                        T.infoText = G[K].innerHTML;
                                                                                                                                                                                                                        break
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                d.secondObj = T;
                                                                                                                                                                                                                g[H] = d;
                                                                                                                                                                                                                f.push(d);
                                                                                                                                                                                                                if (d.mediaType == "iframe") {
                                                                                                                                                                                                                    d.thumbIconPath = a.imageIframePath_str;
                                                                                                                                                                                                                    t.push(T);
                                                                                                                                                                                                                    h.push(T)
                                                                                                                                                                                                                } else if (d.mediaType == "media") {
                                                                                                                                                                                                                    G = T.url.indexOf(".jpg") != -1 || T.url.indexOf(".png") != -1 || T.url.indexOf(".jpeg") != -1;
                                                                                                                                                                                                                    d.thumbIconPath = G ? a.imageIconPath_str : a.videoIconPath_str;
                                                                                                                                                                                                                    t.push(T);
                                                                                                                                                                                                                    h.push(T)
                                                                                                                                                                                                                } else d.thumbIconPath = a.linkIconPath_str;
                                                                                                                                                                                                                d.linkToGo = T.linktogo
                                                                                                                                                                                                            }
                                                                                                                                                                                                            a.categories_ar[E] = FWDUtils.getAttributeValue(v, "data-cat") || "not defined!";
                                                                                                                                                                                                            a.lightBox_ar[E] = t;
                                                                                                                                                                                                            a.playList_ar[E] = g
                                                                                                                                                                                                        }
                                                                                                                                                                                                        if (a.categories_ar.length > 1) a.showComboBox_bl = true;
                                                                                                                                                                                                        if (a.showAllCategories_bl && a.showComboBox_bl) {
                                                                                                                                                                                                            a.categories_ar.unshift(a.allCategoriesLabel_str);
                                                                                                                                                                                                            a.playList_ar.unshift(f);
                                                                                                                                                                                                            a.lightBox_ar.unshift(h)
                                                                                                                                                                                                        }
                                                                                                                                                                                                        a.totalGraphics = a.graphicsPaths_ar.length;
                                                                                                                                                                                                        a.showAllCategories_bl && n++;
                                                                                                                                                                                                        a.startAtCategory = a.props_obj.startAtCategory || 1;
                                                                                                                                                                                                        if (isNaN(a.startAtCategory)) a.startAtCategory = 1;
                                                                                                                                                                                                        if (a.startAtCategory <= 0) a.startAtCategory = 1;
                                                                                                                                                                                                        if (a.startAtCategory > n) a.startAtCategory = n;
                                                                                                                                                                                                        a.startAtCategory -= 1;
                                                                                                                                                                                                        try {
                                                                                                                                                                                                            a.rootElement_el.parentNode.removeChild(a.rootElement_el)
                                                                                                                                                                                                        } catch (S) {}
                                                                                                                                                                                                        a.loadGraphics()
                                                                                                                                                                                                    }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else a.dispatchEvent(m.LOAD_ERROR, {
                            text: "Atleast one playlist ul tag with the attribute <font color='#FFFFFF'>data-cat</font> must be defined."
                        })
                    } else a.dispatchEvent(m.LOAD_ERROR, {
                        text: "The (ul) tag with the attribute <font color='#FFFFFF'>data-skin</font> must be defined, this represents the skin data."
                    })
                } else {
                    c = "Make sure that the a div with the id - <font color='#FFFFFF'>" + a.props_obj.gridPlayListAndSkinId + "</font> exists, this represents the data playlist.";
                    a.dispatchEvent(m.LOAD_ERROR, {
                        text: c
                    })
                }
            } else a.dispatchEvent(m.LOAD_ERROR, {
                text: "<font color='#FFFFFF'>gridPlayListAndSkinId</font> property which represents the grid playlist id is not defined in FWDGrid constructor function!"
            })
        };
        this.checkForAttribute = function(c, e) {
            var p = FWDUtils.getChildFromNodeListFromAttribute(c, e);
            if (p = p ? FWDUtils.trim(FWDUtils.getAttributeValue(p, e)) : undefined) return p;
            else a.dispatchEvent(m.LOAD_ERROR, {
                text: "Element  with attribute <font color='#FFFFFF'>" + e + "</font> is not defined."
            })
        };
        this.loadGraphics = function() {
            if (a.image_img) {
                a.image_img.onload = null;
                a.image_img.onerror = null
            }
            var c = a.graphicsPaths_ar[a.countLoadedGraphics];
            a.image_img = new Image;
            a.image_img.onload = a.onImageLoadHandler;
            a.image_img.onerror = a.onImageLoadErrorHandler;
            a.image_img.src = c
        };
        this.onImageLoadHandler = function() {
            if (a.countLoadedGraphics == 0) {
                a.mainPreloader_img = a.image_img;
                a.dispatchEvent(m.PRELOADER_LOAD_DONE)
            } else if (a.countLoadedGraphics == 1) a.lightboxPreloader_img = a.image_img;
            else if (a.countLoadedGraphics == 2) a.showMoreThumbsButtonN_img = a.image_img;
            else if (a.countLoadedGraphics == 3) a.showMoreThumbsButtonS_img = a.image_img;
            else if (a.countLoadedGraphics == 4) a.fullScreenNN_img = a.image_img;
            else if (a.countLoadedGraphics == 5) a.fullScreenNS_img = a.image_img;
            else if (a.countLoadedGraphics == 6) a.fullScreenFN_img = a.image_img;
            else if (a.countLoadedGraphics == 7) a.fullScreenFS_img = a.image_img;
            else if (a.countLoadedGraphics == 8) a.comboboxUpArrowN_img = a.image_img;
            else if (a.countLoadedGraphics == 9) a.comboboxUpArrowS_img = a.image_img;
            else if (a.countLoadedGraphics == 10) a.scrollBarTrackN_img = a.image_img;
            else if (a.countLoadedGraphics == 11) a.scrollBarHandlerCenterBkN_img = a.image_img;
            else if (a.countLoadedGraphics == 12) a.scrollBarHandlerCenterBkS_img = a.image_img;
            else if (a.countLoadedGraphics == 13) a.scrollBarHandlerLeftN_img = a.image_img;
            else if (a.countLoadedGraphics == 14) a.scrollBarHandlerLeftS_img = a.image_img;
            else if (a.countLoadedGraphics == 15) a.scrollBarHandlerRightN_img = a.image_img;
            else if (a.countLoadedGraphics == 16) a.scrollBarHandlerRightS_img = a.image_img;
            else if (a.countLoadedGraphics == 17) a.scrollBarHandlerCenterIconN_img = a.image_img;
            else if (a.countLoadedGraphics == 18) a.scrollBarHandlerCenterIconS_img = a.image_img;
            else if (a.countLoadedGraphics == 19) a.lightboxCloseButtonN_img = a.image_img;
            else if (a.countLoadedGraphics == 20) a.lightboxCloseButtonS_img = a.image_img;
            else if (a.countLoadedGraphics == 21) a.lightboxNextButtonN_img = a.image_img;
            else if (a.countLoadedGraphics == 22) a.lightboxNextButtonS_img = a.image_img;
            else if (a.countLoadedGraphics == 23) a.lightboxPrevButtonN_img = a.image_img;
            else if (a.countLoadedGraphics == 24) a.lightboxPrevButtonS_img = a.image_img;
            else if (a.countLoadedGraphics == 25) a.lightboxPlayN_img = a.image_img;
            else if (a.countLoadedGraphics == 26) a.lightboxPlayS_img = a.image_img;
            else if (a.countLoadedGraphics == 27) a.lightboxPauseN_img = a.image_img;
            else if (a.countLoadedGraphics == 28) a.lightboxPauseS_img = a.image_img;
            else if (a.countLoadedGraphics == 29) a.lightboxMaximizeN_img = a.image_img;
            else if (a.countLoadedGraphics == 30) a.lightboxMaximizeS_img = a.image_img;
            else if (a.countLoadedGraphics == 31) a.lightboxMinimizeN_img = a.image_img;
            else if (a.countLoadedGraphics == 32) a.lightboxMinimizeS_img = a.image_img;
            else if (a.countLoadedGraphics == 33) a.lightboxInfoOpenN_img = a.image_img;
            else if (a.countLoadedGraphics == 34) a.lightboxInfoOpenS_img = a.image_img;
            else if (a.countLoadedGraphics == 35) a.lightboxInfoCloseN_img = a.image_img;
            else if (a.countLoadedGraphics == 36) a.lightboxInfoCloseS_img = a.image_img;
            else if (a.countLoadedGraphics == 37) a.slideShowPreloader_img = a.image_img;
            else if (a.countLoadedGraphics == 38) {
                a.thumbIconWidth = a.image_img.width;
                a.thumbIconHeight = a.image_img.width
            }
            a.countLoadedGraphics++;
            if (a.countLoadedGraphics < a.totalGraphics) a.loadImageId_to = setTimeout(a.loadGraphics, 16);
            else a.dispatchEvent(m.LOAD_DONE)
        };
        this.onImageLoadErrorHandler = function(c) {
            var e = "The skin graphics with the label <font color='#FFFFFF'>" + a.graphicsPaths_ar[a.countLoadedGraphics] + "</font> can't be loaded, make sure that the image exists and the path is correct!";
            console.log(c);
            a.dispatchEvent(m.LOAD_ERROR, {
                text: e
            })
        };
        this.destroy = function() {
            clearTimeout(this.parseDelayId_to);
            clearTimeout(this.loadImageId_to);
            if (this.image_img) {
                this.image_img.onload = null;
                this.image_img.onerror = null;
                this.image_img.src = null
            }
            if (this.mainPreloader_img) this.mainPreloader_img.src = null;
            if (this.lightboxPreloader_img) this.lightboxPreloader_img.src = null;
            if (this.slideShowPreloader_img) this.slideShowPreloader_img.src = null;
            if (this.showMoreThumbsButtonN_img) this.showMoreThumbsButtonN_img.src = null;
            if (this.showMoreThumbsButtonS_img) this.showMoreThumbsButtonS_img.src = null;
            if (this.fullScreenNN_img) this.fullScreenNN_img.src = null;
            if (this.fullScreenNS_img) this.fullScreenNS_img.src = null;
            if (this.fullScreenFN_img) this.fullScreenFN_img.src = null;
            if (this.fullScreenFS_img) this.fullScreenFS_img.src = null;
            if (this.comboboxUpArrowN_img) this.comboboxUpArrowN_img.src = null;
            if (this.comboboxUpArrowS_img) this.comboboxUpArrowS_img.src = null;
            if (this.scrollBarTrackN_img) this.scrollBarTrackN_img.src = null;
            if (this.scrollBarHandlerCenterBkN_img) this.scrollBarHandlerCenterBkN_img.src = null;
            if (this.scrollBarHandlerCenterBkS_img) this.scrollBarHandlerCenterBkS_img.src = null;
            if (this.scrollBarHandlerLeftN_img) this.scrollBarHandlerLeftN_img.src = null;
            if (this.scrollBarHandlerLeftS_img) this.scrollBarHandlerLeftS_img.src = null;
            if (this.scrollBarHandlerRightN_img) this.scrollBarHandlerRightN_img.src = null;
            if (this.scrollBarHandlerRightS_img) this.scrollBarHandlerRightS_img.src = null;
            if (this.scrollBarHandlerCenterIconN_img) this.scrollBarHandlerCenterIconN_img.src = null;
            if (this.scrollBarHandlerCenterIconS_img) this.scrollBarHandlerCenterIconS_img.src = null;
            if (this.lightboxCloseButtonN_img) this.lightboxCloseButtonN_img.src = null;
            if (this.lightboxCloseButtonS_img) this.lightboxCloseButtonS_img.src = null;
            if (this.lightboxNextButtonN_img) this.lightboxNextButtonN_img.src = null;
            if (this.lightboxNextButtonS_img) this.lightboxNextButtonS_img.src = null;
            if (this.lightboxPrevButtonN_img) this.lightboxPrevButtonN_img.src = null;
            if (this.lightboxPrevButtonS_img) this.lightboxPrevButtonS_img.src = null;
            if (this.lightboxPlayN_img) this.lightboxPlayN_img.src = null;
            if (this.lightboxPlayS_img) this.lightboxPlayS_img.src = null;
            if (this.lightboxPauseN_img) this.lightboxPauseN_img.src = null;
            if (this.lightboxPauseS_img) this.lightboxPauseS_img.src = null;
            if (this.lightboxMaximizeN_img) this.lightboxMaximizeN_img.src = null;
            if (this.lightboxMaximizeS_img) this.lightboxMaximizeS_img.src = null;
            if (this.lightboxMinimizeN_img) this.lightboxMinimizeN_img.src = null;
            if (this.lightboxMinimizeS_img) this.lightboxMinimizeS_img.src = null;
            if (this.lightboxInfoOpenN_img) this.lightboxInfoOpenN_img.src = null;
            if (this.lightboxInfoOpenS_img) this.lightboxInfoOpenS_img.src = null;
            if (this.lightboxInfoCloseN_img) this.lightboxInfoCloseN_img.src = null;
            if (this.lightboxInfoCloseS_img) this.lightboxInfoCloseS_img.src = null;
            this.categories_ar = this.lightBox_ar = this.playList_ar = this.skin_ar = this.graphicsPaths_ar = this.rootElement_el = this.props_obj = this.lightboxInfoCloseS_img = this.lightboxInfoCloseN_img = this.lightboxInfoOpenS_img = this.lightboxInfoOpenN_img = this.lightboxMinimizeS_img = this.lightboxMinimizeN_img = this.lightboxMaximizeS_img = this.lightboxMaximizeN_img = this.lightboxPauseS_img = this.lightboxPauseN_img = this.lightboxPlayS_img = this.lightboxPlayN_img = this.lightboxPrevButtonS_img = this.lightboxPrevButtonN_img = this.lightboxNextButtonS_img = this.lightboxNextButtonN_img = this.lightboxCloseButtonS_img = this.lightboxCloseButtonN_img = this.scrollBarHandlerCenterIconS_img = this.scrollBarHandlerCenterIconN_img = this.scrollBarHandlerRightS_img = this.scrollBarHandlerRightN_img = this.scrollBarHandlerLeftS_img = this.scrollBarHandlerLeftN_img = this.scrollBarHandlerCenterBkS_img = this.scrollBarHandlerCenterBkN_img = this.scrollBarTrackN_img = this.comboboxUpArrowS_img = this.comboboxUpArrowN_img = this.fullScreenFS_img = this.fullScreenFN_img = this.fullScreenNS_img = this.fullScreenNN_img = this.showMoreThumbsButtonS_img = this.showMoreThumbsButtonN_img = this.slideShowPreloader_img = this.lightboxPreloader_img = this.mainPreloader_img = null;
            b.destroy();
            b = a = null;
            m.prototype = null
        };
        this.init()
    };
    m.setPrototype = function() {
        m.prototype = new FWDEventDispatcher
    };
    m.prototype = null;
    m.PRELOADER_LOAD_DONE = "onPreloaderLoadDone";
    m.LOAD_DONE = "onLoadDone";
    m.LOAD_ERROR = "onLoadError";
    q.FWDData = m
})(window);
(function(q) {
    q.FWDDisplayObject = function(m, j, a, b) {
        var c = this;
        c.listeners = {
            events_ar: []
        };
        if (m == "div" || m == "img" || m == "canvas") c.type = m;
        else throw Error("Type is not valid! " + m);
        this.children_ar = [];
        this.position = j || "absolute";
        this.overflow = a || "hidden";
        this.display = b || "inline-block";
        this.visible = true;
        this.h = this.w = this.y = this.x = 0;
        this.alpha = 1;
        this.opacityType = this.innerHTML = "";
        this.isHtml5_bl = false;
        this.hasTransform3d_bl = FWDUtils.hasTransform3d;
        this.hasTransform2d_bl = FWDUtils.hasTransform2d;
        if (FWDUtils.isFirefox) c.hasTransform3d_bl =
            false;
        if (FWDUtils.isFirefox) c.hasTransform2d_bl = false;
        this.hasBeenSetSelectable_bl = false;
        c.init = function() {
            c.setScreen()
        };
        c.getTransform = function() {
            for (var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"], p; p = e.shift();)
                if (typeof c.screen.style[p] !== "undefined") return p;
            return false
        };
        c.getOpacityType = function() {
            return typeof c.screen.style.opacity != "undefined" ? "opacity" : "filter"
        };
        c.setScreen = function(e) {
            c.screen = c.type == "img" && e ? e : document.createElement(c.type);
            c.setMainProperties()
        };
        c.setMainProperties = function() {
            c.transform = c.getTransform();
            c.setPosition(c.position);
            c.setDisplay(c.display);
            c.setOverflow(c.overflow);
            c.opacityType = c.getOpacityType();
            if (c.opacityType == "opacity") c.isHtml5_bl = true;
            if (c.opacityType == "filter") c.screen.style.filter = "inherit";
            c.screen.style.left = "0px";
            c.screen.style.top = "0px";
            c.screen.style.margin = "0px";
            c.screen.style.padding = "0px";
            c.screen.style.maxWidth = "none";
            c.screen.style.maxHeight = "none";
            c.screen.style.border = "none";
            c.screen.style.lineHeight = "1";
            c.screen.style.backgroundColor = "transparent";
            c.screen.style.backfaceVisibility = "hidden";
            c.screen.style.webkitBackfaceVisibility = "hidden";
            c.screen.style.MozBackfaceVisibility = "hidden";
            c.screen.style.MozImageRendering = "optimizeSpeed";
            c.screen.style.WebkitImageRendering = "optimizeSpeed";
            if (m == "img") {
                c.setWidth(c.screen.width);
                c.setHeight(c.screen.height)
            }
        };
        c.setBackfaceVisibility = function() {
            c.screen.style.backfaceVisibility = "visible";
            c.screen.style.webkitBackfaceVisibility = "visible";
            c.screen.style.MozBackfaceVisibility = "visible"
        };
        c.setSelectable = function(e) {
            if (!e) {
                c.screen.style.userSelect = "none";
                c.screen.style.MozUserSelect = "none";
                c.screen.style.webkitUserSelect = "none";
                c.screen.style.khtmlUserSelect = "none";
                c.screen.style.oUserSelect = "none";
                c.screen.style.msUserSelect = "none";
                c.screen.msUserSelect = "none";
                c.screen.ondragstart = function() {
                    return false
                };
                c.screen.onselectstart = function() {
                    return false
                };
                c.screen.ontouchstart = function() {
                    return false
                };
                c.screen.style.webkitTouchCallout = "none";
                c.hasBeenSetSelectable_bl = true
            }
        };
        c.getScreen = function() {
            return c.screen
        };
        c.setVisible = function(e) {
            c.visible = e;
            c.screen.style.visibility = c.visible == true ? "visible" : "hidden"
        };
        c.getVisible = function() {
            return c.visible
        };
        c.setResizableSizeAfterParent = function() {
            c.screen.style.width = "100%";
            c.screen.style.height = "100%"
        };
        c.getStyle = function() {
            return c.screen.style
        };
        c.setCSSClass = function(e) {
            c.screen.className = e
        };
        c.setOverflow = function(e) {
            c.overflow = e;
            c.screen.style.overflow = c.overflow
        };
        c.setPosition = function(e) {
            c.position = e;
            c.screen.style.position = c.position
        };
        c.setDisplay = function(e) {
            c.display = e;
            c.screen.style.display = c.display
        };
        c.setButtonMode = function(e) {
            c.buttonMode = e;
            c.screen.style.cursor = c.buttonMode == true ? "pointer" : "default"
        };
        c.setBkColor = function(e) {
            c.screen.style.backgroundColor = e
        };
        c.setInnerHTML = function(e) {
            c.innerHTML = e;
            c.screen.innerHTML = c.innerHTML
        };
        c.getInnerHTML = function() {
            return c.innerHTML
        };
        c.getRect = function() {
            return c.screen.getBoundingClientRect()
        };
        c.setAlpha = function(e) {
            c.alpha = e;
            if (c.opacityType == "opacity") c.screen.style.opacity = c.alpha;
            else if (c.opacityType == "filter") {
                c.screen.style.filter = "alpha(opacity=" + c.alpha * 100 + ")";
                c.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(c.alpha * 100) + ")"
            }
        };
        c.getAlpha = function() {
            return c.alpha
        };
        c.getRect = function() {
            return c.screen.getBoundingClientRect()
        };
        c.getGlobalX = function() {
            return c.getRect().left
        };
        c.getGlobalY = function() {
            return c.getRect().top
        };
        c.setX = function(e) {
            c.x = e;
            if (c.hasTransform3d_bl) c.screen.style[c.transform] = "translate3d(" + c.x + "px," + c.y + "px,0)";
            else if (c.hasTransform2d_bl) c.screen.style[c.transform] = "translate(" + c.x + "px," + c.y + "px)";
            else c.screen.style.left = c.x + "px"
        };
        c.getX = function() {
            return c.x
        };
        c.setY = function(e) {
            c.y = e;
            if (c.hasTransform3d_bl) c.screen.style[c.transform] = "translate3d(" + c.x + "px," + c.y + "px,0)";
            else if (c.hasTransform2d_bl) c.screen.style[c.transform] = "translate(" + c.x + "px," + c.y + "px)";
            else c.screen.style.top = c.y + "px"
        };
        c.getY = function() {
            return c.y
        };
        c.setWidth = function(e) {
            c.w = e;
            if (c.type == "img") c.screen.width = c.w;
            else c.screen.style.width = c.w + "px"
        };
        c.getWidth = function() {
            if (c.type == "div") {
                if (c.screen.offsetWidth != 0) return c.screen.offsetWidth;
                return c.w
            } else if (c.type == "img") {
                if (c.screen.offsetWidth != 0) return c.screen.offsetWidth;
                if (c.screen.width != 0) return c.screen.width;
                return c._w
            } else if (c.type == "canvas") {
                if (c.screen.offsetWidth != 0) return c.screen.offsetWidth;
                return c.w
            }
        };
        c.setHeight = function(e) {
            c.h = e;
            if (c.type == "img") c.screen.height = c.h;
            else c.screen.style.height = c.h + "px"
        };
        c.getHeight = function() {
            if (c.type == "div") {
                if (c.screen.offsetHeight != 0) return c.screen.offsetHeight;
                return c.h
            } else if (c.type == "img") {
                if (c.screen.offsetHeight != 0) return c.screen.offsetHeight;
                if (c.screen.height != 0) return c.screen.height;
                return c.h
            } else if (c.type == "canvas") {
                if (c.screen.offsetHeight != 0) return c.screen.offsetHeight;
                return c.h
            }
        };
        c.addChild = function(e) {
            c.contains(e) && c.children_ar.splice(FWDUtils.indexOfArray(c.children_ar, e), 1);
            c.children_ar.push(e);
            c.screen.appendChild(e.screen)
        };
        c.removeChild = function(e) {
            if (c.contains(e)) {
                c.children_ar.splice(FWDUtils.indexOfArray(c.children_ar,
                    e), 1);
                c.screen.removeChild(e.screen)
            } else throw Error("##removeChild()## Child dose't exist, it can't be removed!");
        };
        c.contains = function(e) {
            return FWDUtils.indexOfArray(c.children_ar, e) == -1 ? false : true
        };
        c.addChildAt = function(e, p) {
            if (c.getNumChildren() == 0) {
                c.children_ar.push(e);
                c.screen.appendChild(e.screen)
            } else {
                if (p == 1) {
                    c.screen.insertBefore(e.screen, c.children_ar[0].screen);
                    c.screen.insertBefore(c.children_ar[0].screen, e.screen)
                } else {
                    if (p < 0 || p > c.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
                    c.screen.insertBefore(e.screen, c.children_ar[p].screen)
                }
                c.contains(e) ? c.children_ar.splice(FWDUtils.indexOfArray(c.children_ar, e), 1, e) : c.children_ar.splice(FWDUtils.indexOfArray(c.children_ar, e), 0, e)
            }
        };
        c.getChildAt = function(e) {
            if (e < 0 || e > c.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (c.getNumChildren() == 0) throw Errror("##getChildAt## Child dose not exist!");
            return c.children_ar[e]
        };
        c.removeChildAtZero = function() {
            c.screen.removeChild(c.children_ar[0].screen);
            c.children_ar.shift()
        };
        c.getNumChildren = function() {
            return c.children_ar.length
        };
        c.addListener = function(e, p) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            if (typeof p != "function") throw Error("listener must be of type Function.");
            var f = {};
            f.type = e;
            f.listener = p;
            f.target = this;
            this.listeners.events_ar.push(f)
        };
        c.dispatchEvent = function(e, p) {
            if (this.listeners != null) {
                if (e == undefined) throw Error("type is required.");
                if (typeof e === "object") throw Error("type must be of type String.");
                for (var f = 0, h = this.listeners.events_ar.length; f < h; f++)
                    if (this.listeners.events_ar[f].target === this && this.listeners.events_ar[f].type === e) {
                        if (p)
                            for (var t in p) this.listeners.events_ar[f][t] = p[t];
                        this.listeners.events_ar[f].listener.call(this, this.listeners.events_ar[f])
                    }
            }
        };
        c.removeListener = function(e, p) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            if (typeof p != "function") throw Error("listener must be of type Function." + e);
            for (var f = 0, h = this.listeners.events_ar.length; f < h; f++)
                if (this.listeners.events_ar[f].target === this && this.listeners.events_ar[f].type === e && this.listeners.events_ar[f].listener === p) {
                    this.listeners.events_ar.splice(f, 1);
                    break
                }
        };
        c.disposeImage = function() {
            if (c.type == "img") c.screen.src = null
        };
        c.destroy = function() {
            if (c.hasBeenSetSelectable_bl) {
                c.screen.ondragstart = null;
                c.screen.onselectstart = null;
                c.screen.ontouchstart = null
            }
            c.screen.removeAttribute("style");
            c.listeners = [];
            c.listeners = null;
            c.children_ar = [];
            c.children_ar = null;
            c.style = null;
            c.screen = null;
            c.transform = null;
            c.position = null;
            c.overflow = null;
            c.display = null;
            c.visible = null;
            c.buttonMode = null;
            c.x = null;
            c.y = null;
            c.w = null;
            c.h = null;
            c.rect = null;
            c.alpha = null;
            c.innerHTML = null;
            c.opacityType = null;
            c.isHtml5_bl = null;
            c.hasTransform3d_bl = null;
            c = c.hasTransform2d_bl = null
        };
        c.init()
    }
})(window);
(function() {
    var q = function(m, j, a, b, c, e, p) {
        var f = this,
            h = q.prototype;
        this.dumy_sdo = this.text_sdo = this.bk_sdo = null;
        this.label1_str = m;
        this.backgroundNormalColor_str = j;
        this.backgroundSelectedColor_str = a;
        this.textNormalColor_str = b;
        this.textSelectedColor_str = c;
        this.totalWidth = 400;
        this.totalHeight = p;
        this.id = e;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        this.isMobile_bl = FWDUtils.isMobile;
        this.isDisabled_bl = false;
        f.init = function() {
            f.setBackfaceVisibility();
            f.setButtonMode(true);
            f.setupMainContainers();
            f.setWidth(f.totalWidth);
            f.setHeight(f.totalHeight)
        };
        f.setupMainContainers = function() {
            f.bk_sdo = new FWDSimpleDisplayObject("div");
            f.bk_sdo.setBkColor(f.backgroundNormalColor_str);
            f.addChild(f.bk_sdo);
            f.text_sdo = new FWDSimpleDisplayObject("div");
            f.text_sdo.setBackfaceVisibility();
            f.text_sdo.setOverflow("visible");
            f.text_sdo.setDisplay("inline-block");
            f.text_sdo.getStyle().fontSize = "12px";
            f.text_sdo.getStyle().padding = "0 6px";
            f.text_sdo.getStyle().color = f.normalColor_str;
            f.text_sdo.getStyle().fontSmoothing =
                "antialiased";
            f.text_sdo.getStyle().webkitFontSmoothing = "antialiased";
            f.text_sdo.getStyle().textRendering = "optimizeLegibility";
            f.text_sdo.setInnerHTML('<span><span class="fa fa-square-o" style="line-height:37px;"></span>' + f.label1_str + "</span>");
            f.addChild(f.text_sdo);
            f.dumy_sdo = new FWDSimpleDisplayObject("div");
            if (FWDUtils.isIE) {
                f.dumy_sdo.setBkColor("#FF0000");
                f.dumy_sdo.setAlpha(0)
            }
            f.addChild(f.dumy_sdo);
            if (f.isMobile_bl)
                if (f.hasPointerEvent_bl) {
                    f.screen.addEventListener("MSPointerOver", f.onMouseOver);
                    f.screen.addEventListener("MSPointerOut", f.onMouseOut);
                    f.screen.addEventListener("MSPointerDown", f.onMouseDown);
                    f.screen.addEventListener("MSPointerUp", f.onClick)
                } else f.screen.addEventListener("touchstart", f.onMouseDown);
            else if (f.screen.addEventListener) {
                f.screen.addEventListener("mouseover", f.onMouseOver);
                f.screen.addEventListener("mouseout", f.onMouseOut);
                f.screen.addEventListener("mousedown", f.onMouseDown);
                f.screen.addEventListener("click", f.onClick)
            } else if (f.screen.attachEvent) {
                f.screen.attachEvent("onmouseover",
                    f.onMouseOver);
                f.screen.attachEvent("onmouseout", f.onMouseOut);
                f.screen.attachEvent("onmousedown", f.onMouseDown);
                f.screen.attachEvent("onclick", f.onClick)
            }
        };
        f.onMouseOver = function(t) {
            if (!f.isDisabled_bl)
                if (!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) {
                    TweenMax.killTweensOf(f.text_sdo);
                    f.setSelectedState(true);
                    f.dispatchEvent(q.MOUSE_OVER)
                }
        };
        f.onMouseOut = function(t) {
            if (!f.isDisabled_bl)
                if (!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) {
                    TweenMax.killTweensOf(f.text_sdo);
                    f.setNormalState(true);
                    f.dispatchEvent(q.MOUSE_OUT)
                }
        };
        f.onClick = function(t) {
            if (!f.isDisabled_bl) {
                t.preventDefault && t.preventDefault();
                f.dispatchEvent(q.CLICK)
            }
        };
        f.onMouseDown = function(t) {
            if (!f.isDisabled_bl) {
                t.preventDefault && t.preventDefault();
                f.dispatchEvent(q.MOUSE_DOWN, {
                    e: t
                })
            }
        };
        this.setSelectedState = function(t) {
            if (t) {
                TweenMax.to(f.bk_sdo.screen, 0.6, {
                    css: {
                        backgroundColor: f.backgroundSelectedColor_str
                    },
                    ease: Quart.easeOut
                });
                TweenMax.to(f.text_sdo.screen, 0.6, {
                    css: {
                        color: f.textSelectedColor_str
                    },
                    ease: Quart.easeOut
                })
            } else {
                f.bk_sdo.setBkColor(f.backgroundSelectedColor_str);
                f.text_sdo.getStyle().color = f.textSelectedColor_str
            }
        };
        this.setNormalState = function(t) {
            if (t) {
                TweenMax.to(f.bk_sdo.screen, 0.6, {
                    css: {
                        backgroundColor: f.backgroundNormalColor_str
                    },
                    ease: Quart.easeOut
                });
                TweenMax.to(f.text_sdo.screen, 0.6, {
                    css: {
                        color: f.textNormalColor_str
                    },
                    ease: Quart.easeOut
                })
            } else {
                f.bk_sdo.setBkColor(f.backgroundNormalColor_str);
                f.text_sdo.getStyle().color = f.textNormalColor_str
            }
        };
        f.centerText = function() {
            f.dumy_sdo.setWidth(f.totalWidth);
            f.dumy_sdo.setHeight(f.totalHeight);
            f.bk_sdo.setWidth(f.totalWidth);
            f.bk_sdo.setHeight(f.totalHeight);
            FWDUtils.isIEAndLessThen9 || FWDUtils.isSafari ? f.text_sdo.setY(Math.round((f.totalHeight - f.text_sdo.getHeight()) / 2) - 1) : f.text_sdo.setY(Math.round((f.totalHeight - f.text_sdo.getHeight()) / 2));
            f.text_sdo.setHeight(f.totalHeight + 2)
        };
        f.getMaxTextWidth = function() {
            return f.text_sdo.getWidth()
        };
        this.disable = function() {
            f.isDisabled_bl = true;
            f.setButtonMode(false);
            f.setSelectedState(true)
        };
        this.enable = function() {
            f.isDisabled_bl = false;
            f.setNormalState(true);
            f.setButtonMode(true)
        };
        f.destroy = function() {
            if (f.isMobile_bl)
                if (f.hasPointerEvent_bl) {
                    f.screen.removeEventListener("MSPointerOver", f.onMouseOver);
                    f.screen.removeEventListener("MSPointerOut", f.onMouseOut);
                    f.screen.removeEventListener("MSPointerDown", f.onMouseDown);
                    f.screen.removeEventListener("MSPointerUp", f.onClick)
                } else f.screen.removeEventListener("touchstart", f.onMouseDown);
            else if (f.screen.removeEventListener) {
                f.screen.removeEventListener("mouseover", f.onMouseOver);
                f.screen.removeEventListener("mouseout", f.onMouseOut);
                f.screen.removeEventListener("mousedown", f.onMouseDown);
                f.screen.removeEventListener("click", f.onClick)
            } else if (f.screen.detachEvent) {
                f.screen.detachEvent("onmouseover", f.onMouseOver);
                f.screen.detachEvent("onmouseout", f.onMouseOut);
                f.screen.detachEvent("onmousedown", f.onMouseDown);
                f.screen.detachEvent("onclick", f.onClick)
            }
            TweenMax.killTweensOf(f.text_sdo.screen);
            TweenMax.killTweensOf(f.bk_sdo.screen);
            f.text_sdo.destroy();
            f.bk_sdo.destroy();
            f.dumy_sdo.destroy();
            f.bk_sdo = null;
            f.text_sdo = null;
            f.dumy_sdo =
                null;
            f.label1_str = null;
            f.normalColor_str = null;
            f.textSelectedColor_str = null;
            f.disabledColor_str = null;
            f.setInnerHTML("");
            h.destroy();
            h = f = null;
            q.prototype = null
        };
        f.init()
    };
    q.setPrototype = function() {
        q.prototype = new FWDDisplayObject("div")
    };
    q.FIRST_BUTTON_CLICK = "onFirstClick";
    q.SECOND_BUTTON_CLICK = "secondButtonOnClick";
    q.MOUSE_OVER = "onMouseOver";
    q.MOUSE_OUT = "onMouseOut";
    q.MOUSE_DOWN = "onMouseDown";
    q.CLICK = "onClick";
    q.prototype = null;
    window.FWDComboBoxButton = q
})(window);
(function() {
    var q = function(m, j, a, b, c, e, p, f) {
        var h = this,
            t = q.prototype;
        this.arrowS_sdo = this.arrowN_sdo = null;
        this.arrowN_img = m;
        this.arrowS_img = j;
        this.label1_str = a;
        this.backgroundNormalColor_str = b;
        this.backgroundSelectedColor_str = c;
        this.textNormalColor_str = e;
        this.textSelectedColor_str = p;
        this.totalWidth = 400;
        this.totalHeight = f;
        this.arrowWidth = this.arrowN_img.width;
        this.arrowHeight = this.arrowN_img.height;
        this.dumy_sdo = this.text_sdo = this.bk_sdo = null;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        this.isMobile_bl = FWDUtils.isMobile;
        this.isDisabled_bl = false;
        h.init = function() {
            h.setBackfaceVisibility();
            h.setButtonMode(true);
            h.setupMainContainers();
            h.setWidth(h.totalWidth);
            h.setHeight(h.totalHeight)
        };
        h.setupMainContainers = function() {
            h.bk_sdo = new FWDSimpleDisplayObject("div");
            h.bk_sdo.setBkColor(h.backgroundNormalColor_str);
            h.addChild(h.bk_sdo);
            h.text_sdo = new FWDSimpleDisplayObject("div");
            h.text_sdo.setBackfaceVisibility();
            h.text_sdo.setOverflow("visible");
            h.text_sdo.setDisplay("inline-block");
            h.text_sdo.getStyle().fontSize = "12px";
            h.text_sdo.getStyle().padding = "6px";
            h.text_sdo.getStyle().color = h.normalColor_str;
            h.text_sdo.getStyle().fontSmoothing = "antialiased";
            h.text_sdo.getStyle().webkitFontSmoothing = "antialiased";
            h.text_sdo.getStyle().textRendering = "optimizeLegibility";
            h.text_sdo.setInnerHTML('<span class="fa fa-list"></span>' + h.label1_str);
            h.addChild(h.text_sdo);
            h.arrowN_sdo = new FWDSimpleDisplayObject("img");
            h.arrowN_sdo.setScreen(h.arrowN_img);
            h.arrowS_sdo = new FWDSimpleDisplayObject("img");
            h.arrowS_sdo.setScreen(h.arrowS_img);
            h.arrowS_sdo.setAlpha(0);
            h.dumy_sdo = new FWDSimpleDisplayObject("div");
            if (FWDUtils.isIE) {
                h.dumy_sdo.setBkColor("#FF0000");
                h.dumy_sdo.setAlpha(0)
            }
            h.addChild(h.dumy_sdo);
            if (h.isMobile_bl)
                if (h.hasPointerEvent_bl) {
                    h.screen.addEventListener("MSPointerOver", h.onMouseOver);
                    h.screen.addEventListener("MSPointerOut", h.onMouseOut);
                    h.screen.addEventListener("MSPointerDown", h.onMouseDown);
                    h.screen.addEventListener("MSPointerUp", h.onClick)
                } else h.screen.addEventListener("touchstart", h.onMouseDown);
            else if (h.screen.addEventListener) {
                h.screen.addEventListener("mouseover", h.onMouseOver);
                h.screen.addEventListener("mouseout", h.onMouseOut);
                h.screen.addEventListener("mousedown", h.onMouseDown);
                h.screen.addEventListener("click", h.onClick)
            } else if (h.screen.attachEvent) {
                h.screen.attachEvent("onmouseover", h.onMouseOver);
                h.screen.attachEvent("onmouseout", h.onMouseOut);
                h.screen.attachEvent("onmousedown", h.onMouseDown);
                h.screen.attachEvent("onclick", h.onClick)
            }
        };
        h.onMouseOver = function(g) {
            if (!h.isDisabled_bl)
                if (!g.pointerType || g.pointerType == g.MSPOINTER_TYPE_MOUSE) {
                    TweenMax.killTweensOf(h.text_sdo);
                    h.setSelectedState(true);
                    h.dispatchEvent(q.MOUSE_OVER)
                }
        };
        h.onMouseOut = function(g) {
            if (!h.isDisabled_bl)
                if (!g.pointerType || g.pointerType == g.MSPOINTER_TYPE_MOUSE) {
                    TweenMax.killTweensOf(h.text_sdo);
                    h.setNormalState(true);
                    h.dispatchEvent(q.MOUSE_OUT)
                }
        };
        h.onClick = function(g) {
            if (h.isDeveleper_bl) window.open("http://www.webdesign-flash.ro", "_blank");
            else if (!h.isDisabled_bl) {
                g.preventDefault && g.preventDefault();
                h.dispatchEvent(q.CLICK)
            }
        };
        h.onMouseDown = function(g) {
            if (!h.isDisabled_bl) {
                g.preventDefault && g.preventDefault();
                h.dispatchEvent(q.MOUSE_DOWN, {
                    e: g
                })
            }
        };
        this.setSelectedState = function(g) {
            if (g) {
                TweenMax.to(h.bk_sdo.screen, 0.6, {
                    css: {
                        backgroundColor: h.backgroundSelectedColor_str
                    },
                    ease: Quart.easeOut
                });
                TweenMax.to(h.text_sdo.screen, 0.6, {
                    css: {
                        color: h.textSelectedColor_str
                    },
                    ease: Quart.easeOut
                });
                TweenMax.to(h.arrowS_sdo, 0.6, {
                    alpha: 1,
                    ease: Quart.easeOut
                })
            } else {
                h.bk_sdo.setBkColor(h.backgroundSelectedColor_str);
                h.text_sdo.getStyle().color = h.textSelectedColor_str;
                h.arrowS_sdo.alpha = 1
            }
        };
        this.setNormalState = function(g) {
            if (g) {
                TweenMax.to(h.bk_sdo.screen, 0.6, {
                    css: {
                        backgroundColor: h.backgroundNormalColor_str
                    },
                    ease: Quart.easeOut
                });
                TweenMax.to(h.text_sdo.screen, 0.6, {
                    css: {
                        color: h.textNormalColor_str
                    },
                    ease: Quart.easeOut
                });
                TweenMax.to(h.arrowS_sdo, 0.6, {
                    alpha: 0,
                    ease: Quart.easeOut
                })
            } else {
                h.bk_sdo.setBkColor(h.backgroundNormalColor_str);
                h.text_sdo.getStyle().color = h.textNormalColor_str;
                h.arrowS_sdo.alpha = 0
            }
        };
        h.centerText = function() {
            h.dumy_sdo.setWidth(h.totalWidth);
            h.dumy_sdo.setHeight(h.totalHeight);
            h.bk_sdo.setWidth(h.totalWidth);
            h.bk_sdo.setHeight(h.totalHeight);
            FWDUtils.isIEAndLessThen9 ? h.text_sdo.setY(Math.round((h.totalHeight - h.text_sdo.getHeight()) / 2) - 1) : h.text_sdo.setY(Math.round((h.totalHeight - h.text_sdo.getHeight()) / 2));
            h.text_sdo.setHeight(h.totalHeight + 2);
            h.arrowN_sdo.setX(h.totalWidth - h.arrowWidth - 4);
            h.arrowN_sdo.setY(Math.round((h.totalHeight - h.arrowHeight) / 2));
            h.arrowS_sdo.setX(h.totalWidth - h.arrowWidth - 4);
            h.arrowS_sdo.setY(Math.round((h.totalHeight - h.arrowHeight) / 2))
        };
        h.getMaxTextWidth = function() {
            return h.text_sdo.getWidth()
        };
        this.disable = function() {
            h.isDisabled_bl = true;
            h.setSelectedState(true);
            if (FWDUtils.hasTransform2d) {
                TweenMax.to(h.arrowN_sdo.screen, 0.6, {
                    css: {
                        rotation: 180
                    },
                    ease: Quart.easeOut
                });
                TweenMax.to(h.arrowS_sdo.screen, 0.6, {
                    css: {
                        rotation: 180
                    },
                    ease: Quart.easeOut
                })
            }
        };
        this.enable = function() {
            h.isDisabled_bl = false;
            h.setNormalState(true);
            if (FWDUtils.hasTransform2d) {
                TweenMax.to(h.arrowN_sdo.screen, 0.6, {
                    css: {
                        rotation: 0
                    },
                    ease: Quart.easeOut
                });
                TweenMax.to(h.arrowS_sdo.screen, 0.6, {
                    css: {
                        rotation: 0
                    },
                    ease: Quart.easeOut
                })
            }
        };
        h.destroy = function() {
            if (h.isMobile_bl) h.screen.removeEventListener("touchstart", h.onMouseDown);
            else if (h.screen.removeEventListener) {
                h.screen.removeEventListener("mouseover", h.onMouseOver);
                h.screen.removeEventListener("mouseout", h.onMouseOut);
                h.screen.removeEventListener("mousedown", h.onMouseDown);
                h.screen.removeEventListener("click", h.onClick)
            } else if (h.screen.detachEvent) {
                h.screen.detachEvent("onmouseover", h.onMouseOver);
                h.screen.detachEvent("onmouseout", h.onMouseOut);
                h.screen.detachEvent("onmousedown", h.onMouseDown);
                h.screen.detachEvent("onclick", h.onClick)
            }
            TweenMax.killTweensOf(h.text_sdo);
            h.text_sdo.destroy();
            h.dumy_sdo.destroy();
            h.text_sdo = null;
            h.dumy_sdo = null;
            h.label1_str = null;
            h.normalColor_str = null;
            h.textSelectedColor_str = null;
            disabledColor = selectedColor = normalColor = a = h.disabledColor_str = null;
            h.setInnerHTML("");
            t.destroy();
            t = h = null;
            q.prototype = null
        };
        h.init()
    };
    q.setPrototype = function() {
        q.prototype = new FWDDisplayObject("div")
    };
    q.FIRST_BUTTON_CLICK = "onFirstClick";
    q.SECOND_BUTTON_CLICK = "secondButtonOnClick";
    q.MOUSE_OVER = "onMouseOver";
    q.MOUSE_OUT = "onMouseOut";
    q.MOUSE_DOWN = "onMouseDown";
    q.CLICK = "onClick";
    q.prototype = null;
    window.FWDComboBoxSelector = q
})(window);
(function(q) {
    var m = function(j, a) {
        var b = this,
            c = m.prototype;
        this.rowsHeights_ar = this.thumbs_ar = this.curPlayListData_ar = null;
        this.scrollBarTrackN_img = j.scrollBarTrackN_img;
        this.scrollBarHandlerCenterBkN_img = j.scrollBarHandlerCenterBkN_img;
        this.scrollBarHandlerCenterBkS_img = j.scrollBarHandlerCenterBkS_img;
        this.scrollBarHandlerLeftN_img = j.scrollBarHandlerLeftN_img;
        this.scrollBarHandlerLeftS_img = j.scrollBarHandlerLeftS_img;
        this.scrollBarHandlerRightN_img = j.scrollBarHandlerRightN_img;
        this.scrollBarHandlerRightS_img = j.scrollBarHandlerRightS_img;
        this.scrollBarHandlerCenterIconN_img = j.scrollBarHandlerCenterIconN_img;
        this.scrollBarHandlerCenterIconS_img = j.scrollBarHandlerCenterIconS_img;
        this.nextThumbSetBtnSelected_do = this.nextThumbSetBtnNormal_do = this.nextThumbSetBtn_do = this.handlerRightS_sdo = this.handlerRightN_sdo = this.handlerCenterIconS_sdo = this.handlerCenterIconN_sdo = this.handlerLeftS_sdo = this.handlerLeftN_sdo = this.handlerCenterBkS_sdo = this.handlerCenterBkN_sdo = this.scrollBarDumy_sdo = this.scrollBarDisabled_sdo = this.scrollBarHandlerS_do = this.scrollBarHandlerN_do = this.scrollBarHandler_do = this.scrollTrack_sdo = this.scrollBar_do = this.mainScrollBar_do = this.dumy_sdo = this.thumbsHolder_do = null;
        this.handGrabPath_str = j.handGrabPath_str;
        this.handMovePath_str = j.handMovePath_str;
        this.scrollBarType_str = j.scrollBarType_str;
        this.scrollBarPosition_str = j.scrollBarPosition_str;
        this.disabledScrollbarColor_str = j.scrollbarDisabledColor_str;
        this.maxW = this.totalWidth = this.totalThumbnails = 0;
        this.viewportHeight = this.viewportWidth = this.stageHeight = this.stageWidth = -1;
        this.thumbnailsFinalX = this.thumbOffsetY = 0;
        this.thumbnailBaseWidth = j.thumbnailBaseWidth;
        this.thumbnailBaseHeight = j.thumbnailBaseHeight;
        this.nextSetButtonWidth = j.showMoreThumbsButtonN_img.width;
        this.vx2 = this.vx = this.horizontalMargins = 0;
        this.friction = 0.9;
        this.thumbsHSpace = j.horizontalSpaceBetweenThumbnails;
        this.thumbsVSpace = j.verticalSpaceBetweenThumbnails;
        this.countLoadedThumbs = 0;
        this.borderSize = j.thumbnailBorderSize;
        this.loadMoreThumbsButtonOffest = j.loadMoreThumbsButtonOffest;
        this.numberOfThumbsToShowPerSet = j.numberOfThumbsToShowPerSet;
        this.scrollBarHandlerWidth = this.mouseY = this.mouseX = this.lastPressedY = this.lastPressedX = this.xPositionOnPress = 0;
        this.scrollBarOffset = j.scrollBarOffset;
        this.scrollBarHeight = b.scrollBarHandlerLeftN_img.height;
        this.scrollBarHandlerWidth = this.scrollBarHandlerX = this.thumbsHolderCurX = 0;
        this.playListId = j.startAtCategory;
        this.nextButtonSetVisible = this.disableButtons = false;
        this.addMargins_bl = j.addMargins_bl;
        this.disableThumbClick_bl = false;
        this.setOnceDumySizeOnMove_bl = true;
        this.isInitialized_bl = this.isMobileScrollBarRunning_bl = this.isScrollBarActive_bl = this.ieOldMoveTest_bl = this.isScrolling_bl = this.isDragging_bl = false;
        this.allowToSwitchCat_bl = true;
        this.addMouseWheelSupport_bl = j.addMouseWheelSupport_bl;
        this.isMobile_bl = FWDUtils.isMobile;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        this.init = function() {
            b.setResizableSizeAfterParent();
            if (b.scrollBarType_str == m.SCROLL_TYPE_DRAG) {
                b.setupDragScrollbar();
                b.addMouseWheelSupport_bl && b.addDragMouseWheelSupport()
            } else if (b.scrollBarType_str == m.SCROLL_TYPE_SCROLL_BAR) {
                b.setupScrollBar();
                b.addMouseWheelSupport_bl && b.addScrollBarMouseWheelSupport()
            }
            b.thumbsHolder_do = new FWDDisplayObject("div", "absolute", "visible");
            b.scrollBarPosition_str == "top" && b.scrollBarType_str == m.SCROLL_TYPE_SCROLL_BAR && b.thumbsHolder_do.setY(b.scrollBarHeight + b.scrollBarOffset);
            b.addChild(b.thumbsHolder_do);
            if (!b.isMobile_bl && b.scrollBarType_str == m.SCROLL_TYPE_DRAG || b.hasPointerEvent_bl && b.scrollBarType_str == m.SCROLL_TYPE_DRAG) {
                b.screen.style.cursor = "url(" + b.handGrabPath_str + "), default";
                b.dumy_sdo = new FWDSimpleDisplayObject("div");
                if (FWDUtils.isIE) {
                    b.dumy_sdo.setBkColor("#FF0000");
                    b.dumy_sdo.setAlpha(0.0010)
                }
                b.dumy_sdo.screen.style.cursor = "url(" + b.handMovePath_str + "), default";
                b.addChild(b.dumy_sdo)
            }
            b.horizontalMargins = b.addMargins_bl ? b.thumbsHSpace : 0;
            b.numberOfThumbsToShowPerSet && b.setupNextSetButton();
            b.hideScrollBar(false);
            b.showCurrentCat(-1)
        };
        this.resizeHandler = function() {
            if (!(b.viewportWidth == a.stageWidth && b.viewportHeight == a.stageHeight)) {
                b.viewportWidth = a.stageWidth;
                b.viewportHeight = a.stageHeight;
                b.stageWidth = b.viewportWidth;
                if (b.scrollBarType_str == m.SCROLL_TYPE_SCROLL_BAR) {
                    b.stageHeight = b.viewportHeight - b.scrollBarHeight - b.scrollBarOffset;
                    if (b.addMargins_bl) b.stageHeight -= b.thumbsVSpace * 2;
                    b.positionMainScrollBar()
                } else {
                    b.stageHeight = b.viewportHeight;
                    if (b.addMargins_bl) b.stageHeight -= b.thumbsVSpace * 2;
                    b.deactivateDragScrollBar()
                }
                if (b.countLoadedThumbs > 0) {
                    clearTimeout(b.resizeAndPositionThumbsId_to);
                    b.resizeAndPositionThumbsId_to = setTimeout(function() {
                        b.positionAndResizeStuff();
                        b.centerThumbs(true);
                        b.positionThumbsFinal();
                        if (b.scrollBarType_str == m.SCROLL_TYPE_SCROLL_BAR) {
                            b.checkScrolBarHandlerSizeAndPosition();
                            b.setScrollBarSize(false);
                            b.updateScrollBar(false)
                        }
                    }, 200)
                }
            }
        };
        this.showCurrentCat = function(e) {
            if (b.playListId != e && e >= 0) {
                b.allowToSwitchCat_bl = false;
                b.hideCurrentCat();
                b.playListId = e
            } else {
                b.curPlayListData_ar = j.playList_ar[b.playListId];
                b.thumbs_ar = [];
                b.totalThumbnails = b.curPlayListData_ar.length;
                b.countLoadedThumbs = 0;
                b.setupThumbs();
                b.startToLoadThumbsId_to = setTimeout(function() {
                    if (b.scrollBarType_str == m.SCROLL_TYPE_SCROLL_BAR)
                        if (b.scrollBarType_str == m.SCROLL_TYPE_SCROLL_BAR) {
                            b.checkScrolBarHandlerSizeAndPosition();
                            b.setScrollBarSize(false)
                        }
                    b.loadThumbImage()
                }, 100)
            }
        };
        this.hideCurrentCat = function() {
            var e, p = 0.5;
            b.totalWidth = 1;
            clearTimeout(b.startToLoadThumbsId_to);
            clearTimeout(b.loadWithDelayId_to);
            clearTimeout(b.resizeAndPositionThumbsId_to);
            clearTimeout(b.disableThumbClickDelayId_to);
            clearTimeout(b.stopToScrollTimeOutId_to);
            clearTimeout(b.allThumbsAreTweenedId_to);
            clearInterval(b.updateMobileScrollBarId_int);
            if (b.image) {
                b.image.onload = null;
                b.image.onerror = null
            }
            if (b.scrollBarType_str == m.SCROLL_TYPE_SCROLL_BAR) {
                b.checkScrolBarHandlerSizeAndPosition();
                b.setScrollBarSize(false);
                b.updateScrollBar(false)
            }
            for (i = 0; i < b.countLoadedThumbs; i++) {
                e = b.thumbs_ar[i];
                if (e.finalX + b.thumbnailsFinalX > -e.finalW && e.finalX + b.thumbnailsFinalX < b.stageWidth) {
                    e.hide(p);
                    p += 0.02
                }
            }
            b.hideNextSetButton();
            b.allThumbsAreTweenedId_to = setTimeout(b.allThumbsAreTweened, (1 + p) * 1E3)
        };
        this.destroyCurrentCat = function() {
            for (var e, p = 0; p < b.totalThumbnails; p++) {
                e = b.thumbs_ar[p];
                b.thumbsHolder_do.removeChild(e);
                e.destroy()
            }
        };
        this.allThumbsAreTweened = function() {
            b.allowToSwitchCat_bl = true;
            b.isMobileScrollBarRunning_bl = false;
            b.destroyCurrentCat();
            b.showCurrentCat();
            b.dispatchEvent(m.HIDE_THUMBS_COMPLETE)
        };
        this.setupThumbs = function() {
            for (var e, p = b.scrollBarType_str == m.SCROLL_TYPE_SCROLL_BAR, f = 0; f < b.totalThumbnails; f++) {
                e = b.curPlayListData_ar[f];
                FWDThumb.setPrototype();
                e = new FWDThumb(f, j, b, e.thumbIconPath, e.linkToGo, e.thumbText, e.thumbnailBkColor, e.thumbnailOverlayColor, e.borderNormalColor, e.borderSelectedColor, p);
                e.addListener(FWDThumb.CLICK, b.onThumbClick);
                b.thumbs_ar.push(e);
                b.thumbsHolder_do.addChild(e)
            }
        };
        this.onThumbClick = function(e) {
            if (!b.disableThumbClick_bl) {
                b.deactivateDragScrollBar();
                b.getCorrectId(e.id)
            }
        };
        this.getCorrectId = function(e) {
            var p = e,
                f = b.curPlayListData_ar[p].mediaType;
            if (f == "link")
                for (var h = 0; h < b.totalThumbnails; h++) {
                    if (h < e && b.curPlayListData_ar[h].mediaType == "media") p -= 1
                } else if (f == "media" || f == "iframe")
                    for (h = 0; h < b.totalThumbnails; h++)
                        if (h < e && b.curPlayListData_ar[h].mediaType == "link") p -= 1;
            f == "link" ? q.open(b.curPlayListData_ar[e].secondObj.url, b.curPlayListData_ar[e].secondObj.target) : b.dispatchEvent(m.CLICK, {
                id: p
            })
        };
        this.loadThumbImage = function() {
            var e = b.curPlayListData_ar[b.countLoadedThumbs].thumbPath;
            b.image = new Image;
            b.image.onerror = b.onImageLoadErrorHandler;
            b.image.onload = b.onImageLoadHandler;
            b.image.src = e
        };
        this.onImageLoadErrorHandler = function() {
            !b || !j || !b.curPlayListData_ar[b.countLoadedThumbs] || b.dispatchEvent(m.LOAD_ERROR, {
                text: "Thumb can't be loaded, probably the path is incorrect <font color='#FFFFFF'>" + b.curPlayListData_ar[b.countLoadedThumbs].thumbPath + "</font>"
            })
        };
        this.onImageLoadHandler = function() {
            var e = b.thumbs_ar[b.countLoadedThumbs];
            e.originalWidth = b.image.width;
            e.originalHeight = b.image.height;
            e.finalW = b.image.width + b.borderSize * 2;
            e.finalH = b.image.height + b.borderSize * 2;
            e.addImage(b.image, b.curPlayListData_ar[b.countLoadedThumbs].thumbPath);
            if (b.countLoadedThumbs == 0) {
                b.thumbnailsFinalX = Math.round((b.stageWidth - b.thumbnailBaseWidth) / 2);
                b.thumbsHolder_do.setX(b.thumbnailsFinalX);
                b.showScrollBar(true)
            }
            b.countLoadedThumbs++;
            if (b.countLoadedThumbs < b.totalThumbnails)
                if (b.numberOfThumbsToShowPerSet && b.countLoadedThumbs % b.numberOfThumbsToShowPerSet == 0) b.showNextSetButton();
                else b.loadWithDelayId_to = setTimeout(b.loadThumbImage, 100);
            else if (b.nextButtonSetVisible) {
                b.nextButtonSetVisible = false;
                b.hideNextSetButton()
            }
            b.positionAndResizeStuff();
            b.centerThumbs(true);
            b.positionThumbsFinal();
            if (b.scrollBarType_str == m.SCROLL_TYPE_SCROLL_BAR) {
                b.checkScrolBarHandlerSizeAndPosition();
                b.countLoadedThumbs == 1 ? b.setScrollBarSize(false) : b.setScrollBarSize(true);
                b.updateScrollBar(true)
            }
        };
        this.positionAndResizeThumbs1 = function() {
            var e, p, f, h, t, g, v, d, n;
            for (e = 0; e < b.countLoadedThumbs; e++) {
                n = false;
                thumb = b.thumbs_ar[e];
                if (!thumb.used)
                    if (thumb.originalHeight == b.thumbnailBaseHeight) {
                        t = 1E3;
                        wSize = Math.floor(thumb.originalWidth / b.thumbnailBaseWidth);
                        for (p = 0; p < b.totalRows; p++)
                            if (b.rowsHeights_ar[p] < t) t = b.rowsHeights_ar[p];
                        for (p = 0; p < b.totalRows; p++)
                            if (b.rowsHeights_ar[p] == t) {
                                h = p;
                                if (p == b.totalRows - 1) n = true;
                                break
                            }
                        thumb.used = true;
                        f = h * (b.thumbHeight + b.thumbsVSpace + b.borderSize * 2) + b.thumbOffsetY;
                        p = b.rowsHeights_ar[h] * (b.thumbWidth + b.thumbsHSpace + b.borderSize * 2) + b.horizontalMargins;
                        t = (b.thumbWidth + b.thumbsHSpace + b.borderSize * 2) * wSize - b.thumbsHSpace;
                        n = n ? b.thumbHeight + b.borderSize * 2 + b.leftHeight : b.thumbHeight + b.borderSize * 2;
                        thumb.tempFinalX = thumb.finalX;
                        thumb.tempFinalY = thumb.finalY;
                        thumb.finalX = p;
                        thumb.finalY = f;
                        thumb.finalW = t;
                        thumb.finalH = n;
                        b.rowsHeights_ar[h] += wSize
                    } else {
                        t = 1E3;
                        v = false;
                        wSize = Math.floor(thumb.originalWidth / b.thumbnailBaseWidth);
                        g = Math.floor(thumb.originalHeight / b.thumbnailBaseHeight);
                        for (p = 0; p < b.totalRows - (g - 1); p++) {
                            d = true;
                            for (f = 0; f < g; f++)
                                if (b.rowsHeights_ar[p] != b.rowsHeights_ar[p + f]) d = false;
                            if (d && b.rowsHeights_ar[p] < t) {
                                t = b.rowsHeights_ar[p];
                                h = p;
                                if (p == b.totalRows - g) n = true;
                                v = true
                            }
                        }
                        if (v) {
                            g = Math.floor(thumb.originalHeight / b.thumbnailBaseHeight);
                            thumb.used = true;
                            f = h * (b.thumbHeight + b.thumbsVSpace + b.borderSize * 2) + b.thumbOffsetY;
                            p = b.rowsHeights_ar[h] * (b.thumbWidth + b.thumbsHSpace + b.borderSize * 2) + b.horizontalMargins;
                            t = (b.thumbWidth + b.thumbsHSpace + b.borderSize * 2) * wSize - b.thumbsHSpace;
                            n = n ? (b.thumbHeight + b.thumbsVSpace + b.borderSize * 2) * g - b.thumbsVSpace + b.leftHeight : (b.thumbHeight + b.thumbsVSpace + b.borderSize * 2) * g - b.thumbsVSpace;
                            thumb.tempFinalX = thumb.finalX;
                            thumb.tempFinalY = thumb.finalY;
                            thumb.finalX = p;
                            thumb.finalY = f;
                            thumb.finalW = t;
                            thumb.finalH = n;
                            for (f = 0; f < g; f++) b.rowsHeights_ar[h + f] += wSize
                        }
                    }
            }
        };
        this.positionAndResizeThumbs2 = function() {
            var e, p, f, h, t, g, v;
            for (e = b.maxW = 0; e < b.totalRows; e++)
                if (b.rowsHeights_ar[e] > b.maxW) b.maxW = b.rowsHeights_ar[e];
            for (e = 0; e < b.countLoadedThumbs; e++) {
                t = false;
                thumb = b.thumbs_ar[e];
                if (!thumb.used) {
                    g = Math.floor(thumb.originalWidth / b.thumbnailBaseWidth);
                    v = Math.floor(thumb.originalHeight / b.thumbnailBaseHeight);
                    if (b.totalRows == v) t = true;
                    thumb.used = true;
                    p = b.maxW * (b.thumbWidth + b.thumbsHSpace + b.borderSize * 2) + b.horizontalMargins;
                    f = b.thumbOffsetY;
                    h = (b.thumbWidth + b.thumbsHSpace + b.borderSize * 2) * g - b.thumbsHSpace;
                    t = t ? (b.thumbHeight + b.thumbsVSpace + b.borderSize * 2) * v - b.thumbsVSpace + b.leftHeight : (b.thumbHeight + b.thumbsVSpace + b.borderSize * 2) * v - b.thumbsVSpace;
                    thumb.tempFinalX = thumb.finalX;
                    thumb.tempFinalY = thumb.finalY;
                    thumb.finalX = p;
                    thumb.finalY = f;
                    thumb.finalW = h;
                    thumb.finalH = t;
                    b.maxW += g;
                    for (p = 0; p < v; p++) b.rowsHeights_ar[p] = b.hSize
                }
            }
        };
        this.positionThumbsFinal = function() {
            if (b.allowToSwitchCat_bl) {
                var e;
                for (i = 0; i < b.countLoadedThumbs; i++) {
                    e = b.thumbs_ar[i];
                    if (e.finalX != e.tempFinalX || e.finalY != e.finalY || e.finalW != e.w || e.finalH != e.h) e.resizeThumb()
                }
            }
        };
        this.positionAndResizeStuff = function() {
            if (b.allowToSwitchCat_bl) {
                b.totalRows = Math.ceil((b.stageHeight - b.thumbsVSpace) / (b.thumbnailBaseHeight + b.thumbsVSpace + b.borderSize * 2));
                if (b.totalRows < 2) b.totalRows = 2;
                b.thumbHeight = Math.floor((b.stageHeight - b.totalRows * (b.thumbsVSpace + b.borderSize * 2) + b.thumbsVSpace) / b.totalRows);
                b.thumbWidth = Math.floor(b.thumbHeight * (b.thumbnailBaseWidth / b.thumbnailBaseHeight));
                b.totalHeight = b.totalRows * (b.thumbHeight + b.thumbsVSpace + b.borderSize * 2) - b.thumbsVSpace;
                b.leftHeight = b.stageHeight - b.totalHeight;
                b.thumbOffsetY = b.addMargins_bl ? b.thumbsVSpace : 0;
                b.rowsHeights_ar = [];
                for (i = 0; i < b.totalRows; i++) b.rowsHeights_ar[i] = 0;
                for (i = 0; i < b.countLoadedThumbs; i++) {
                    thumb = b.thumbs_ar[i];
                    thumb.used = false
                }
                b.positionAndResizeThumbs1();
                b.positionAndResizeThumbs1();
                b.positionAndResizeThumbs2();
                b.totalWidth = b.addMargins_bl ? b.maxW * (b.thumbWidth + b.thumbsHSpace + b.borderSize * 2) + b.thumbsHSpace : b.maxW * (b.thumbWidth + b.thumbsHSpace + b.borderSize * 2) - b.thumbsHSpace;
                if (b.nextButtonSetVisible && b.addMargins_bl) {
                    b.showNextSetButton();
                    b.totalWidth += b.nextSetButtonWidth + 12
                } else if (b.nextButtonSetVisible && !b.addMargins_bl) {
                    b.showNextSetButton();
                    b.totalWidth += b.nextSetButtonWidth + 12 + b.thumbsHSpace
                } else if (!b.addMargins_bl) b.totalWidth = b.maxW * (b.thumbWidth + b.thumbsHSpace + b.borderSize * 2) - b.thumbsHSpace;
                b.positionNextSetButton()
            }
        };
        this.setupNextSetButton = function() {
            b.nextThumbSetBtn_do = new FWDDisplayObject("div");
            b.nextThumbSetBtnNormal_do = new FWDDisplayObject("img");
            b.nextThumbSetBtnNormal_do.setScreen(j.showMoreThumbsButtonN_img);
            b.nextThumbSetBtnSelected_do = new FWDDisplayObject("img");
            b.nextThumbSetBtnSelected_do.setScreen(j.showMoreThumbsButtonS_img);
            b.nextThumbSetBtnSelected_do.setAlpha(0);
            b.nextThumbSetBtn_do.setWidth(b.nextThumbSetBtnNormal_do.getWidth());
            b.nextThumbSetBtn_do.setHeight(b.nextThumbSetBtnNormal_do.getHeight());
            FWDUtils.isIEAndLessThen9 || b.nextThumbSetBtn_do.setAlpha(0);
            b.nextThumbSetBtn_do.setButtonMode(true);
            b.nextThumbSetBtn_do.setVisible(false);
            if (b.isMobile_bl) {
                if (b.hasPointerEvent_bl) {
                    b.nextThumbSetBtn_do.screen.addEventListener("MSPointerOver", b.onNextBtnOverHandler);
                    b.nextThumbSetBtn_do.screen.addEventListener("MSPointerOut", b.onNextBtnOutHandler);
                    b.nextThumbSetBtn_do.screen.addEventListener("MSPointerUp", b.onNextBtnClickHandler)
                }
                b.nextThumbSetBtn_do.screen.addEventListener("touchend", b.onNextBtnClickHandler)
            } else if (b.nextThumbSetBtn_do.screen.addEventListener) {
                b.nextThumbSetBtn_do.screen.addEventListener("mouseover", b.onNextBtnOverHandler);
                b.nextThumbSetBtn_do.screen.addEventListener("mouseout", b.onNextBtnOutHandler);
                b.nextThumbSetBtn_do.screen.addEventListener("click", b.onNextBtnClickHandler)
            } else if (b.nextThumbSetBtn_do.screen.attachEvent) {
                b.nextThumbSetBtn_do.screen.attachEvent("onmouseover", b.onNextBtnOverHandler);
                b.nextThumbSetBtn_do.screen.attachEvent("onmouseout", b.onNextBtnOutHandler);
                b.nextThumbSetBtn_do.screen.attachEvent("onclick", b.onNextBtnClickHandler)
            }
            b.thumbsHolder_do.addChild(b.nextThumbSetBtn_do);
            b.nextThumbSetBtn_do.addChild(b.nextThumbSetBtnNormal_do);
            b.nextThumbSetBtn_do.addChild(b.nextThumbSetBtnSelected_do)
        };
        this.onNextBtnOverHandler = function() {
            TweenMax.to(b.nextThumbSetBtnSelected_do, 0.8, {
                alpha: 1
            });
            TweenMax.to(b.nextThumbSetBtnNormal_do, 0.8, {
                alpha: 0
            })
        };
        this.onNextBtnOutHandler = function() {
            TweenMax.to(b.nextThumbSetBtnSelected_do, 0.8, {
                alpha: 0
            });
            TweenMax.to(b.nextThumbSetBtnNormal_do, 0.8, {
                alpha: 1
            })
        };
        this.onNextBtnClickHandler = function() {
            if (b.nextButtonSetVisible) {
                b.deactivateDragScrollBar();
                b.hideNextSetButton();
                b.loadWithDelayId_to = setTimeout(b.loadThumbImage, 100)
            }
        };
        this.showNextSetButton = function() {
            if (!b.nextButtonSetVisible) {
                b.nextButtonSetVisible = true;
                if (FWDUtils.isIEAndLessThen9) {
                    b.nextThumbSetBtnNormal_do.setY(0);
                    b.nextThumbSetBtnSelected_do.setY(0)
                } else {
                    TweenMax.killTweensOf(b.nextThumbSetBtn_do);
                    TweenMax.to(b.nextThumbSetBtn_do, 0.4, {
                        alpha: 1
                    })
                }
                b.onNextBtnOutHandler();
                b.thumbsHolder_do.addChild(b.nextThumbSetBtn_do);
                b.nextThumbSetBtn_do.setVisible(true)
            }
        };
        this.positionNextSetButton = function() {
            b.nextThumbSetBtn_do.setX(Math.floor(b.totalWidth - b.nextThumbSetBtn_do.getWidth() - 6 - b.thumbsHSpace / 2));
            b.nextThumbSetBtn_do.setY(Math.floor((b.stageHeight - b.nextThumbSetBtn_do.getHeight()) / 2))
        };
        this.hideNextSetButton = function() {
            if (b.nextButtonSetVisible) {
                if (FWDUtils.isIEAndLessThen9) {
                    b.nextThumbSetBtnNormal_do.setY(-500);
                    b.nextThumbSetBtnSelected_do.setY(-500)
                } else {
                    TweenMax.killTweensOf(b.nextThumbSetBtn_do);
                    TweenMax.to(b.nextThumbSetBtn_do, 0.4, {
                        alpha: 0
                    })
                }
                b.nextButtonSetVisible = false
            }
        };
        this.hideNextSetButtonComplete = function() {
            b.nextThumbSetBtn_do.setY(-500)
        };
        this.setupDragScrollbar = function() {
            if (b.isMobile_bl) b.hasPointerEvent_bl ? b.screen.addEventListener("MSPointerDown", b.mobileScrBarStartHandler) : b.screen.addEventListener("touchstart", b.mobileScrBarStartTest);
            else if (b.screen.addEventListener) b.screen.addEventListener("mousedown", b.mobileScrBarStartHandler);
            else b.screen.attachEvent && b.screen.attachEvent("onmousedown", b.mobileScrBarStartHandler)
        };
        this.disableMoveOnFullScreen = function() {
            q.addEventListener("touchmove", b.onDisableMove)
        };
        this.removeDisableMoveOnFullScreen = function() {
            q.removeEventListener("touchmove", b.onDisableMove)
        };
        this.onDisableMove = function(e) {
            e.preventDefault()
        };
        this.mobileScrBarStartTest = function(e) {
            e = FWDUtils.getViewportMouseCoordinates(e);
            b.lastPressedX = e.screenX;
            b.lastPressedY = e.screenY;
            q.addEventListener("touchmove", b.mobileScrBarMoveTest)
        };
        this.mobileScrBarMoveTest = function(e) {
            if (e.touches.length == 1) {
                var p = FWDUtils.getViewportMouseCoordinates(e);
                b.mouseX = p.screenX;
                b.mouseY = p.screenY;
                p = Math.abs(Math.atan2(b.mouseY - b.lastPressedY, b.mouseX - b.lastPressedX)) * 180 / Math.PI;
                b.disableThumbClick_bl = true;
                if (p > 120 || p < 60 || a.isFullScreen_bl) {
                    e.preventDefault();
                    b.mobileScrBarStartHandler(e);
                    q.removeEventListener("touchmove", b.mobileScrBarMoveTest)
                } else {
                    b.disableThumbClick_bl = true;
                    q.addEventListener("touchend", b.mobileScrBarEndTest)
                }
            }
        };
        this.mobileScrBarEndTest = function() {
            q.removeEventListener("touchmove", b.mobileScrBarMoveTest);
            q.removeEventListener("touchend", b.mobileScrBarEndTest);
            b.disableThumbClick_bl = false
        };
        this.mobileScrBarStartHandler = function(e) {
            if (!(b.stageWidth > b.totalWidth)) {
                e.preventDefault && e.preventDefault();
                e = FWDUtils.getViewportMouseCoordinates(e);
                if (b.stageWidth < b.totalWidth) {
                    b.isDragging_bl = true;
                    b.lastPressedX = e.screenX;
                    b.setOnceDumySizeOnMove_bl = true;
                    b.vx = 0;
                    b.thumbnailsFinalX = b.thumbsHolder_do.getX();
                    clearTimeout(b.disableThumbClickDelayId_to);
                    b.activateDragScrollBar()
                }
                if (b.isMobile_bl)
                    if (b.hasPointerEvent_bl) {
                        q.addEventListener("MSPointerUp", b.mobileScrBarEndHandler, false);
                        q.addEventListener("MSPointerMove", b.mobileScrBarMoveHandler)
                    } else {
                        q.addEventListener("touchend", b.mobileScrBarEndHandler);
                        q.addEventListener("touchmove", b.mobileScrBarMoveHandler)
                    }
                else if (q.addEventListener) {
                    q.addEventListener("mouseup", b.mobileScrBarEndHandler);
                    q.addEventListener("mousemove", b.mobileScrBarMoveHandler)
                } else if (document.attachEvent) {
                    document.attachEvent("onmouseup", b.mobileScrBarEndHandler);
                    document.attachEvent("onmousemove", b.mobileScrBarMoveHandler)
                }
            }
        };
        this.mobileScrBarMoveHandler = function(e) {
            e.preventDefault && e.preventDefault();
            if (!(b.stageWidth > b.totalWidth)) {
                e = FWDUtils.getViewportMouseCoordinates(e);
                if (e.screenX != b.lastPressedX) {
                    var p = e.screenX - b.lastPressedX;
                    b.disableThumbClick_bl = true;
                    if (b.setOnceDumySizeOnMove_bl && !b.isMobile_bl || b.setOnceDumySizeOnMove_bl && b.hasPointerEvent_bl) {
                        b.dumy_sdo.setWidth(b.stageWidth);
                        b.dumy_sdo.setHeight(b.stageHeight);
                        b.setOnceDumySizeOnMove_bl = false
                    }
                    b.thumbnailsFinalX += p;
                    b.thumbnailsFinalX = Math.round(b.thumbnailsFinalX);
                    if (!b.ieOldMoveTest_bl && FWDUtils.isIE) {
                        clearInterval(b.ieOldMoveTestId_int);
                        b.ieOldMoveTestId_int = setInterval(b.updateThumbnailsPosition, 16);
                        b.ieOldMoveTest_bl = true
                    } else FWDUtils.isIE || b.thumbsHolder_do.setX(b.thumbnailsFinalX);
                    b.lastPressedX = e.screenX;
                    b.vx = p * 2
                }
            }
        };
        this.updateThumbnailsPosition = function() {
            b.thumbsHolder_do.setX(b.thumbnailsFinalX)
        };
        this.mobileScrBarEndHandler = function() {
            clearInterval(b.ieOldMoveTestId_int);
            b.ieOldMoveTest_bl = false;
            b.isDragging_bl = false;
            b.disableThumbClickDelayId_to = setTimeout(function() {
                b.disableThumbClick_bl = false
            }, 100);
            if (!b.isMobile_bl || b.hasPointerEvent_bl) {
                b.dumy_sdo.setWidth(0);
                b.dumy_sdo.setHeight(0)
            }
            if (b.isMobile_bl)
                if (b.hasPointerEvent_bl) {
                    q.removeEventListener("MSPointerUp", b.mobileScrBarEndHandler);
                    q.removeEventListener("MSPointerMove", b.mobileScrBarMoveHandler)
                } else {
                    q.removeEventListener("touchend", b.mobileScrBarEndHandler);
                    q.removeEventListener("touchmove", b.mobileScrBarMoveHandler)
                }
            else if (q.removeEventListener) {
                q.removeEventListener("mouseup", b.mobileScrBarEndHandler);
                q.removeEventListener("mousemove", b.mobileScrBarMoveHandler)
            } else if (document.detachEvent) {
                document.detachEvent("onmouseup", b.mobileScrBarEndHandler);
                document.detachEvent("onmousemove", b.mobileScrBarMoveHandler)
            }
        };
        this.updateMobileScrollBar = function() {
            if (!b.isDragging_bl) {
                if (b.stageWidth <= b.totalWidth) {
                    b.vx *= b.friction;
                    b.thumbnailsFinalX += b.vx;
                    if (b.thumbnailsFinalX > 0) {
                        b.vx2 = (0 - b.thumbnailsFinalX) * 0.3;
                        b.vx *= b.friction;
                        b.thumbnailsFinalX += b.vx2
                    } else if (b.thumbnailsFinalX < b.stageWidth - b.totalWidth) {
                        b.vx2 = (b.stageWidth - b.totalWidth - b.thumbnailsFinalX) * 0.3;
                        b.vx *= b.friction;
                        b.thumbnailsFinalX += b.vx2
                    }
                }
                Math.abs(b.vx) < 0.01 && b.deactivateDragScrollBar();
                b.thumbsHolder_do.setX(Math.round(b.thumbnailsFinalX))
            }
            b.stageWidth > b.totalWidth && b.deactivateDragScrollBar()
        };
        this.activateDragScrollBar = function() {
            if (!(b.stageWidth >= b.totalWidth || b.isMobileScrollBarRunning_bl)) {
                b.isMobileScrollBarRunning_bl = true;
                TweenMax.killTweensOf(b.thumbsHolder_do);
                clearInterval(b.updateMobileScrollBarId_int);
                b.updateMobileScrollBarId_int = setInterval(b.updateMobileScrollBar, 16)
            }
        };
        this.deactivateDragScrollBar = function() {
            b.isMobileScrollBarRunning_bl = false;
            b.vx = b.vx2 = 0;
            clearInterval(b.updateMobileScrollBarId_int);
            q.removeEventListener && q.removeEventListener("touchmove", b.mobileScrBarMoveTest)
        };
        this.addDragMouseWheelSupport = function() {
            if (b.screen.addEventListener) {
                b.screen.addEventListener("mousewheel", b.mouseWheelDragHandler);
                b.screen.addEventListener("DOMMouseScroll", b.mouseWheelDragHandler)
            } else b.screen.attachEvent && b.screen.attachEvent("onmousewheel", b.mouseWheelDragHandler)
        };
        this.mouseWheelDragHandler = function(e) {
            var p;
            if (!(b.totalWidth <= b.stageWidth || b.isDragging_bl)) {
                p = e.detail || e.wheelDelta;
                if (e.wheelDelta) p *= -1;
                if (p > 0) b.vx -= 10;
                else if (p < 0) b.vx += 10;
                b.isMobileScrollBarRunning_bl || b.activateDragScrollBar();
                if (e.preventDefault) e.preventDefault();
                else return false
            }
        };
        this.centerThumbs = function(e) {
            if (!(b.isMobileScrollBarRunning_bl || b.isDragging_bl)) {
                if (b.stageWidth > b.totalWidth) b.thumbnailsFinalX = Math.round((b.stageWidth - b.totalWidth) / 2);
                else if (b.thumbnailsFinalX > 0) b.thumbnailsFinalX = 0;
                else if (b.thumbnailsFinalX < b.stageWidth - b.totalWidth) b.thumbnailsFinalX = b.stageWidth - b.totalWidth;
                TweenMax.killTweensOf(b.thumbsHolder_do);
                e ? TweenMax.to(b.thumbsHolder_do, 0.3, {
                    x: b.thumbnailsFinalX
                }) : b.thumbsHolder_do.setX(b.thumbnailsFinalX)
            }
        };
        this.setupScrollBar = function() {
            b.mainScrollBar_do = new FWDDisplayObject("div");
            b.mainScrollBar_do.setOverflow("visible");
            b.scrollBar_do = new FWDDisplayObject("div");
            b.scrollBar_do.setOverflow("visible");
            b.scrollTrack_sdo = new FWDSimpleDisplayObject("img");
            b.scrollTrack_sdo.setScreen(b.scrollBarTrackN_img);
            b.scrollBarHandler_do = new FWDDisplayObject("div");
            b.scrollBarHandler_do.setOverflow("visible");
            b.scrollBarHandler_do.setHeight(b.scrollBarHeight);
            b.scrollBarHandlerN_do = new FWDDisplayObject("div");
            b.scrollBarHandlerN_do.setOverflow("visible");
            b.scrollBarHandlerN_do.setHeight(b.scrollBarHeight);
            b.handlerLeftN_sdo = new FWDSimpleDisplayObject("img");
            b.handlerLeftN_sdo.setScreen(b.scrollBarHandlerLeftN_img);
            b.scrollBarHandlerN_do.addChild(b.handlerLeftN_sdo);
            b.handlerCenterBkN_sdo = new FWDSimpleDisplayObject("img");
            b.handlerCenterBkN_sdo.setScreen(b.scrollBarHandlerCenterBkN_img);
            b.scrollBarHandlerN_do.addChild(b.handlerCenterBkN_sdo);
            b.handlerCenterIconN_sdo = new FWDSimpleDisplayObject("img");
            b.handlerCenterIconN_sdo.setScreen(b.scrollBarHandlerCenterIconN_img);
            b.scrollBarHandlerN_do.addChild(b.handlerCenterIconN_sdo);
            b.handlerRightN_sdo = new FWDSimpleDisplayObject("img");
            b.handlerRightN_sdo.setScreen(b.scrollBarHandlerRightN_img);
            b.scrollBarHandlerN_do.addChild(b.handlerRightN_sdo);
            b.scrollBarHandlerS_do = new FWDDisplayObject("div");
            b.scrollBarHandlerS_do.setOverflow("visible");
            b.scrollBarHandlerS_do.setHeight(b.scrollBarHeight);
            b.handlerLeftS_sdo = new FWDSimpleDisplayObject("img");
            b.handlerLeftS_sdo.setScreen(b.scrollBarHandlerLeftS_img);
            b.scrollBarHandlerS_do.addChild(b.handlerLeftS_sdo);
            b.handlerCenterBkS_sdo = new FWDSimpleDisplayObject("img");
            b.handlerCenterBkS_sdo.setScreen(b.scrollBarHandlerCenterBkS_img);
            b.scrollBarHandlerS_do.addChild(b.handlerCenterBkS_sdo);
            b.handlerCenterIconS_sdo = new FWDSimpleDisplayObject("img");
            b.handlerCenterIconS_sdo.setScreen(b.scrollBarHandlerCenterIconS_img);
            b.scrollBarHandlerS_do.addChild(b.handlerCenterIconS_sdo);
            b.handlerRightS_sdo = new FWDSimpleDisplayObject("img");
            b.handlerRightS_sdo.setScreen(b.scrollBarHandlerRightS_img);
            b.scrollBarHandlerS_do.addChild(b.handlerRightS_sdo);
            b.scrollBarHandlerS_do.setAlpha(0);
            b.scrollBarDisabled_sdo = new FWDSimpleDisplayObject("div");
            b.scrollBarDisabled_sdo.setBkColor(b.disabledScrollbarColor_str);
            b.scrollBarDisabled_sdo.setAlpha(0.7);
            b.scrollBarDisabled_sdo.setHeight(b.scrollBarHeight);
            b.scrollBarDumy_sdo = new FWDSimpleDisplayObject("div");
            if (FWDUtils.isIE) b.scrollBarDumy_sdo.getStyle().background = "url('dumy')";
            b.scrollBarDumy_sdo.setButtonMode(true);
            b.scrollBarDumy_sdo.setHeight(b.scrollBarHeight);
            b.scrollBarHandler_do.addChild(b.scrollBarHandlerN_do);
            b.scrollBarHandler_do.addChild(b.scrollBarHandlerS_do);
            b.scrollBarHandler_do.addChild(b.scrollBarDumy_sdo);
            b.scrollBar_do.addChild(b.scrollTrack_sdo);
            b.scrollBar_do.addChild(b.scrollBarHandler_do);
            b.scrollBar_do.addChild(b.scrollBarDisabled_sdo);
            b.mainScrollBar_do.addChild(b.scrollBar_do);
            b.addChild(b.mainScrollBar_do);
            if (b.scrollBarDumy_sdo.screen.addEventListener) {
                b.scrollBarDumy_sdo.screen.addEventListener("mouseover", b.scrollHandlerOnMouseOver);
                b.scrollBarDumy_sdo.screen.addEventListener("mouseout", b.scrollHandlerOnMouseOut);
                b.scrollBarDumy_sdo.screen.addEventListener("mousedown", b.scrollHandlerOnMouseDown)
            } else if (b.screen.attachEvent) {
                b.scrollBarDumy_sdo.screen.attachEvent("onmouseover", b.scrollHandlerOnMouseOver);
                b.scrollBarDumy_sdo.screen.attachEvent("onmouseout", b.scrollHandlerOnMouseOut);
                b.scrollBarDumy_sdo.screen.attachEvent("onmousedown", b.scrollHandlerOnMouseDown)
            }
        };
        this.scrollHandlerOnMouseOver = function(e) {
            if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) TweenMax.to(b.scrollBarHandlerS_do, 0.8, {
                alpha: 1,
                ease: Expo.easeOut
            })
        };
        this.scrollHandlerOnMouseOut = function(e) {
            if (!b.isDragging_bl)
                if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) TweenMax.to(b.scrollBarHandlerS_do, 0.8, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
        };
        this.scrollHandlerOnMouseDown = function(e) {
            if (b.isScrollBarActive_bl) {
                e.preventDefault && e.preventDefault();
                e = FWDUtils.getViewportMouseCoordinates(e);
                b.isDragging_bl = true;
                TweenMax.killTweensOf(b.scrollBarHandler_do);
                b.scrollBarHandlerX = b.scrollBarHandler_do.getX();
                b.xPositionOnPress = b.scrollBarHandlerX;
                b.lastPressedX = e.screenX;
                if (q.addEventListener) {
                    q.addEventListener("mousemove", b.scrollBarHandlerMoveHandler);
                    q.addEventListener("mouseup", b.scrollBarHandlerEndHandler)
                } else if (document.attachEvent) {
                    document.attachEvent("onmousemove", b.scrollBarHandlerMoveHandler);
                    document.attachEvent("onmouseup", b.scrollBarHandlerEndHandler)
                }
            }
        };
        this.scrollBarHandlerMoveHandler = function(e) {
            e.preventDefault && e.preventDefault();
            e = FWDUtils.getViewportMouseCoordinates(e);
            b.scrollBarHandlerX = Math.round(b.xPositionOnPress + e.screenX - b.lastPressedX);
            if (b.scrollBarHandlerX < 0) b.scrollBarHandlerX = 0;
            else if (b.scrollBarHandlerX > b.stageWidth - b.scrollBarHandlerWidth) b.scrollBarHandlerX = b.stageWidth - b.scrollBarHandlerWidth;
            b.scrollBarHandler_do.setX(b.scrollBarHandlerX);
            b.updateScrollBar()
        };
        this.scrollBarHandlerEndHandler = function(e) {
            e = FWDUtils.getViewportMouseCoordinates(e);
            b.isDragging_bl = false;
            FWDUtils.hitTest(b.scrollBarDumy_sdo.screen, e.screenX, e.screenY) || TweenMax.to(b.scrollBarHandlerS_do, 0.8, {
                alpha: 0,
                ease: Expo.easeOut
            });
            if (q.removeEventListener) {
                q.removeEventListener("mousemove", b.scrollBarHandlerMoveHandler);
                q.removeEventListener("mouseup", b.scrollBarHandlerEndHandler)
            } else if (document.detachEvent) {
                document.detachEvent("onmousemove", b.scrollBarHandlerMoveHandler);
                document.detachEvent("onmouseup", b.scrollBarHandlerEndHandler)
            }
        };
        this.positionMainScrollBar = function() {
            if (b.addMargins_bl) b.scrollBarPosition_str == "top" ? b.mainScrollBar_do.setY(0) : b.mainScrollBar_do.setY(b.stageHeight + b.scrollBarOffset + b.thumbsVSpace * 2);
            else b.scrollBarPosition_str == "top" ? b.mainScrollBar_do.setY(0) : b.mainScrollBar_do.setY(b.stageHeight + b.scrollBarOffset)
        };
        this.showScrollBar = function(e) {
            if (b.scrollBarType_str != m.SCROLL_TYPE_DRAG)
                if (e) TweenMax.to(b.scrollBar_do, 0.8, {
                    y: 0,
                    ease: Expo.easeInOut
                });
                else {
                    TweenMax.killTweensOf(b.scrollBar_do);
                    b.scrollBar_do.setY(0)
                }
        };
        this.hideScrollBar = function(e) {
            if (b.scrollBarType_str != m.SCROLL_TYPE_DRAG)
                if (e) b.scrollBarPosition_str == "top" ? TweenMax.to(b.scrollBar_do, 0.8, {
                    y: -b.scrollBarHeight,
                    ease: Expo.easeInOut
                }) : TweenMax.to(b.scrollBar_do, 0.8, {
                    y: b.scrollBarHeight,
                    ease: Expo.easeInOut
                });
                else {
                    TweenMax.killTweensOf(b.scrollBar_do);
                    b.scrollBarPosition_str == "top" ? b.scrollBar_do.setY(-b.scrollBarHeight) : b.scrollBar_do.setY(b.scrollBarHeight)
                }
        };
        this.checkScrolBarHandlerSizeAndPosition = function() {
            b.scrollBarHandlerWidth = Math.min(b.stageWidth, parseInt(b.stageWidth * (b.stageWidth / b.totalWidth)));
            if (!isNaN(b.scrollBarHandlerWidth)) {
                if (b.scrollBarHandlerWidth < 100) b.scrollBarHandlerWidth = 100;
                if (b.totalWidth > b.stageWidth) {
                    b.scrollBarDisabled_sdo.setY(-2E3);
                    b.isScrollBarActive_bl = true
                } else {
                    b.scrollBarHandlerX = 0;
                    b.scrollBarHandlerWidth = b.stageWidth;
                    b.scrollBarHandler_do.setX(b.scrollBarHandlerX);
                    b.scrollBarDisabled_sdo.setY(0);
                    b.isScrollBarActive_bl = false
                }
                if (b.scrollBarHandlerX < 0) {
                    b.scrollBarHandlerX = 0;
                    b.scrollBarHandler_do.setX(b.scrollBarHandlerX)
                } else if (b.scrollBarHandlerX > b.stageWidth - b.scrollBarHandlerWidth) {
                    b.scrollBarHandlerX = b.stageWidth - b.scrollBarHandlerWidth;
                    b.scrollBarHandler_do.setX(b.scrollBarHandlerX)
                }
            }
        };
        this.setScrollBarSize = function(e) {
            if (!(isNaN(b.scrollBarHandlerWidth) || isNaN(b.scrollBarHeight))) {
                b.scrollTrack_sdo.setWidth(b.stageWidth);
                b.scrollTrack_sdo.setHeight(b.scrollBarHeight);
                b.scrollBarDumy_sdo.setWidth(b.scrollBarHandlerWidth);
                b.scrollBarHandler_do.setWidth(b.scrollBarHandlerWidth);
                b.scrollBarDisabled_sdo.setWidth(b.scrollBarHandlerWidth);
                TweenMax.killTweensOf(b.handlerCenterBkN_sdo);
                TweenMax.killTweensOf(b.handlerCenterBkS_sdo);
                TweenMax.killTweensOf(b.handlerCenterIconN_sdo);
                TweenMax.killTweensOf(b.handlerCenterIconS_sdo);
                TweenMax.killTweensOf(b.handlerRightN_sdo);
                TweenMax.killTweensOf(b.handlerRightS_sdo);
                if (e) {
                    TweenMax.to(b.handlerCenterBkN_sdo, 0.6, {
                        w: b.scrollBarHandlerWidth - b.handlerLeftN_sdo.w * 2 + 2,
                        ease: Quart.easeOut
                    });
                    TweenMax.to(b.handlerCenterBkS_sdo, 0.6, {
                        w: b.scrollBarHandlerWidth - b.handlerLeftN_sdo.w * 2 + 2,
                        ease: Quart.easeOut
                    });
                    TweenMax.to(b.handlerCenterIconN_sdo, 0.6, {
                        x: parseInt((b.scrollBarHandlerWidth - b.handlerCenterIconN_sdo.w) / 2),
                        ease: Quart.easeOut
                    });
                    TweenMax.to(b.handlerCenterIconS_sdo, 0.6, {
                        x: parseInt((b.scrollBarHandlerWidth - b.handlerCenterIconN_sdo.w) / 2),
                        ease: Quart.easeOut
                    });
                    TweenMax.to(b.handlerRightN_sdo, 0.6, {
                        x: b.scrollBarHandlerWidth - b.handlerLeftN_sdo.w,
                        ease: Quart.easeOut
                    });
                    TweenMax.to(b.handlerRightS_sdo, 0.6, {
                        x: b.scrollBarHandlerWidth - b.handlerLeftN_sdo.w,
                        ease: Quart.easeOut
                    })
                } else {
                    b.handlerCenterBkN_sdo.setWidth(b.scrollBarHandlerWidth - b.handlerLeftN_sdo.w * 2 + 2);
                    b.handlerCenterBkS_sdo.setWidth(b.scrollBarHandlerWidth - b.handlerLeftN_sdo.w * 2 + 2);
                    b.handlerCenterIconN_sdo.setX(parseInt((b.scrollBarHandlerWidth - b.handlerCenterIconN_sdo.w) / 2));
                    b.handlerCenterIconS_sdo.setX(parseInt((b.scrollBarHandlerWidth - b.handlerCenterIconN_sdo.w) / 2));
                    b.handlerRightN_sdo.setX(b.scrollBarHandlerWidth - b.handlerLeftN_sdo.w);
                    b.handlerRightS_sdo.setX(b.scrollBarHandlerWidth - b.handlerLeftN_sdo.w);
                    b.handlerCenterBkN_sdo.setX(b.handlerLeftN_sdo.w);
                    b.handlerCenterBkS_sdo.setX(b.handlerLeftN_sdo.w)
                }
            }
        };
        this.updateScrollBar = function(e) {
            var p;
            if (b.isDragging_bl) {
                p = b.scrollBarHandlerX / (b.stageWidth - b.scrollBarHandlerWidth);
                if (p == "Infinity") thumbsTargetYPercent = 0;
                if (p >= 1) thumbsTargetYPercent = 1;
                b.thumbnailsFinalX = Math.round(-p * (b.totalWidth - b.stageWidth));
                TweenMax.killTweensOf(b.thumbsHolder_do);
                TweenMax.to(b.thumbsHolder_do, 0.5, {
                    x: b.thumbnailsFinalX,
                    ease: Quart.easeOut
                })
            } else {
                if (b.isScrolling_bl) {
                    p = b.scrollBarHandlerX / (b.stageWidth - b.scrollBarHandlerWidth);
                    if (p == "Infinity") thumbsTargetYPercent = 0;
                    if (p >= 1) thumbsTargetYPercent = 1;
                    b.thumbnailsFinalX = Math.round(-p * (b.totalWidth - b.stageWidth));
                    TweenMax.killTweensOf(b.thumbsHolder_do);
                    TweenMax.to(b.thumbsHolder_do, 0.5, {
                        x: b.thumbnailsFinalX,
                        ease: Quart.easeOut
                    })
                } else {
                    p = Math.abs(b.thumbnailsFinalX) / (b.totalWidth - b.stageWidth);
                    if (p > 1) p = 1;
                    else if (p < 0) p = 0;
                    if (isNaN(p)) percent = 0;
                    b.scrollBarHandlerX = Math.round(p * (b.stageWidth - b.scrollBarHandlerWidth))
                }
                TweenMax.killTweensOf(b.scrollBarHandler_do);
                e ? TweenMax.to(b.scrollBarHandler_do, 0.6, {
                    x: b.scrollBarHandlerX,
                    ease: Quart.easeOut
                }) : b.scrollBarHandler_do.setX(b.scrollBarHandlerX)
            }
        };
        b.addScrollBarMouseWheelSupport = function() {
            if (b.screen.addEventListener) {
                b.screen.addEventListener("mousewheel", b.mouseWheelHandler);
                b.screen.addEventListener("DOMMouseScroll", b.mouseWheelHandler)
            } else b.screen.attachEvent && b.screen.attachEvent("onmousewheel", b.mouseWheelHandler)
        };
        b.mouseWheelHandler = function(e) {
            var p;
            if (!(b.totalWidth <= b.stageWidth || b.isDragging_bl)) {
                if (b.scrollBarType_str == m.SCROLL_TYPE_SCROLL_BAR) {
                    p = e.detail || e.wheelDelta;
                    if (e.wheelDelta) p *= -1;
                    if (p > 0) b.scrollBarHandlerX += Math.round(120 * (b.stageWidth / b.totalWidth));
                    else if (p < 0) b.scrollBarHandlerX -= Math.round(120 * (b.stageWidth / b.totalWidth));
                    if (b.scrollBarHandlerX < 0) b.scrollBarHandlerX = 0;
                    else if (b.scrollBarHandlerX > b.stageWidth - b.scrollBarHandlerWidth) b.scrollBarHandlerX = b.stageWidth - b.scrollBarHandlerWidth;
                    b.startToScrollTimeOut();
                    b.updateScrollBar(true)
                }
                if (e.preventDefault) e.preventDefault();
                else return false
            }
        };
        this.startToScrollTimeOut = function() {
            b.isScrolling_bl = true;
            clearTimeout(b.stopToScrollTimeOutId_to);
            b.stopToScrollTimeOutId_to = setTimeout(b.scrollCompleteHandler, 300)
        };
        b.scrollCompleteHandler = function() {
            b.isScrolling_bl = false
        };
        this.clearTimeoutsAndRemoveAllMainEvents = function() {
            clearTimeout(b.startToLoadThumbsId_to);
            clearTimeout(b.loadWithDelayId_to);
            clearTimeout(b.resizeAndPositionThumbsId_to);
            clearTimeout(b.disableThumbClickDelayId_to);
            clearTimeout(b.stopToScrollTimeOutId_to);
            clearTimeout(b.allThumbsAreTweenedId_to);
            clearInterval(b.ieOldMoveTestId_int);
            clearInterval(b.updateMobileScrollBarId_int);
            if (b.isMobile_bl) {
                if (b.hasPointerEvent_bl) {
                    b.nextThumbSetBtn_do.screen.removeEventListener("MSPointerOver", b.onNextBtnOverHandler);
                    b.nextThumbSetBtn_do.screen.removeEventListener("MSPointerOut", b.onNextBtnOutHandler);
                    b.nextThumbSetBtn_do.screen.removeEventListener("MSPointerUp", b.onNextBtnClickHandler);
                    b.screen.removeEventListener("MSPointerDown", b.mobileScrBarStartHandler);
                    q.removeEventListener("MSPointerUp", b.mobileScrBarEndHandler, false);
                    q.removeEventListener("MSPointerMove", b.mobileScrBarMoveHandler)
                }
                b.nextThumbSetBtn_do.screen.removeEventListener("touchend", b.onNextBtnClickHandler);
                b.screen.removeEventListener("touchstart", b.mobileScrBarStartTest);
                q.removeEventListener("touchmove", b.mobileScrBarMoveTest);
                q.removeEventListener("touchend", b.mobileScrBarEndTest);
                q.removeEventListener("touchend", b.mobileScrBarEndHandler);
                q.removeEventListener("touchmove", b.mobileScrBarMoveHandler);
                q.removeEventListener("touchmove", b.onDisableMove)
            } else if (document.removeEventListener) {
                b.nextThumbSetBtn_do.screen.removeEventListener("mouseover", b.onNextBtnOverHandler);
                b.nextThumbSetBtn_do.screen.removeEventListener("mouseout", b.onNextBtnOutHandler);
                b.nextThumbSetBtn_do.screen.removeEventListener("click", b.onNextBtnClickHandler);
                b.screen.removeEventListener("mousedown", b.mobileScrBarStartHandler);
                q.removeEventListener("mouseup", b.mobileScrBarEndHandler);
                q.removeEventListener("mousemove", b.mobileScrBarMoveHandler);
                b.screen.removeEventListener("mousewheel", b.mouseWheelDragHandler);
                b.screen.removeEventListener("DOMMouseScroll", b.mouseWheelDragHandler);
                if (b.scrollBarDumy_sdo) {
                    b.scrollBarDumy_sdo.screen.removeEventListener("mouseover", b.scrollHandlerOnMouseOver);
                    b.scrollBarDumy_sdo.screen.removeEventListener("mouseout", b.scrollHandlerOnMouseOut);
                    b.scrollBarDumy_sdo.screen.removeEventListener("mousedown", b.scrollHandlerOnMouseDown)
                }
                q.removeEventListener("mousemove", b.scrollBarHandlerMoveHandler);
                q.removeEventListener("mouseup", b.scrollBarHandlerEndHandler);
                b.screen.removeEventListener("mousewheel", b.mouseWheelHandler);
                b.screen.removeEventListener("DOMMouseScroll", b.mouseWheelHandler)
            } else if (b.nextThumbSetBtn_do.screen.detachEvent) {
                b.nextThumbSetBtn_do.screen.detachEvent("onmouseover", b.onNextBtnOverHandler);
                b.nextThumbSetBtn_do.screen.detachEvent("onmouseout", b.onNextBtnOutHandler);
                b.nextThumbSetBtn_do.screen.detachEvent("onclick", b.onNextBtnClickHandler);
                b.screen.detachEvent("onmousedown", b.mobileScrBarStartHandler);
                document.detachEvent("onmouseup", b.mobileScrBarEndHandler);
                document.detachEvent("onmousemove", b.mobileScrBarMoveHandler);
                b.screen.detachEvent("onmousewheel", b.mouseWheelDragHandler);
                if (b.scrollBarDumy_sdo) {
                    b.scrollBarDumy_sdo.screen.detachEvent("onmouseover", b.scrollHandlerOnMouseOver);
                    b.scrollBarDumy_sdo.screen.detachEvent("onmouseout", b.scrollHandlerOnMouseOut);
                    b.scrollBarDumy_sdo.screen.detachEvent("onmousedown", b.scrollHandlerOnMouseDown)
                }
                document.detachEvent("onmousemove", b.scrollBarHandlerMoveHandler);
                document.detachEvent("onmouseup", b.scrollBarHandlerEndHandler);
                b.screen.detachEvent("onmousewheel", b.mouseWheelHandler)
            }
        };
        this.destroy = function() {
            b.clearTimeoutsAndRemoveAllMainEvents();
            if (b.image) {
                b.image.onload = null;
                b.image.onerror = null;
                b.image.src = null
            }
            for (var e = 0; e < b.totalThumbnails; e++) b.thumbs_ar[e].destroy();
            TweenMax.killTweensOf(b.thumbsHolder_do);
            b.thumbsHolder_do.destroy();
            b.dumy_sdo && b.dumy_sdo.destroy();
            if (b.mainScrollBar_do) {
                TweenMax.killTweensOf(b.mainScrollBar_do);
                TweenMax.killTweensOf(b.scrollBar_do);
                TweenMax.killTweensOf(b.scrollBarHandler_do);
                TweenMax.killTweensOf(b.handlerCenterBkN_sdo);
                TweenMax.killTweensOf(b.handlerCenterBkS_sdo);
                TweenMax.killTweensOf(b.handlerCenterIconN_sdo);
                TweenMax.killTweensOf(b.handlerCenterIconS_sdo);
                TweenMax.killTweensOf(b.scrollBarHandlerS_do);
                TweenMax.killTweensOf(b.handlerRightN_sdo);
                TweenMax.killTweensOf(b.handlerRightS_sdo);
                b.scrollBarHandler_do.destroy();
                b.scrollBarHandlerN_do.destroy();
                b.scrollBarHandlerS_do.destroy();
                b.scrollBarDisabled_sdo.destroy();
                b.scrollBarDumy_sdo.destroy();
                b.handlerCenterBkN_sdo.destroy();
                b.handlerCenterBkS_sdo.destroy();
                b.handlerLeftN_sdo.destroy();
                b.handlerLeftS_sdo.destroy();
                b.handlerCenterIconN_sdo.destroy();
                b.handlerCenterIconS_sdo.destroy();
                b.handlerRightN_sdo.destroy();
                b.handlerRightS_sdo.destroy()
            }
            if (b.numberOfThumbsToShowPerSet) {
                TweenMax.killTweensOf(b.nextThumbSetBtn_do);
                TweenMax.killTweensOf(b.nextThumbSetBtnNormal_do);
                TweenMax.killTweensOf(b.nextThumbSetBtnSelected_do);
                b.nextThumbSetBtn_do.destroy();
                b.nextThumbSetBtnNormal_do.destroy();
                b.nextThumbSetBtnSelected_do.destroy()
            }
            b.curPlayListData_ar = null;
            b.thumbs_ar = null;
            b.rowsHeights_ar = null;
            b.image = null;
            b.thumbsHolder_do = null;
            b.dumy_sdo = null;
            b.mainScrollBar_do = null;
            b.scrollBar_do = null;
            b.scrollTrack_sdo = null;
            b.scrollBarHandler_do = null;
            b.scrollBarHandlerN_do = null;
            b.scrollBarHandlerS_do = null;
            b.scrollBarDisabled_sdo = null;
            b.scrollBarDumy_sdo = null;
            b.handlerCenterBkN_sdo = null;
            b.handlerCenterBkS_sdo = null;
            b.handlerLeftN_sdo = null;
            b.handlerLeftS_sdo = null;
            b.handlerCenterIconN_sdo = null;
            b.handlerCenterIconS_sdo = null;
            b.handlerRightN_sdo = null;
            b.handlerRightS_sdo = null;
            b.nextThumbSetBtn_do = null;
            b.nextThumbSetBtnNormal_do = null;
            b.nextThumbSetBtnSelected_do = null;
            b.scrollBarTrackN_img = null;
            b.scrollBarHandlerCenterBkN_img = null;
            b.scrollBarHandlerCenterBkS_img = null;
            b.scrollBarHandlerLeftN_img = null;
            b.scrollBarHandlerLeftS_img = null;
            b.scrollBarHandlerRightN_img = null;
            b.scrollBarHandlerRightS_img = null;
            b.scrollBarHandlerCenterIconN_img = null;
            a = j = b.scrollBarHandlerCenterIconS_img = null;
            b.setInnerHTML("");
            b = null;
            c.destroy();
            c = null;
            m.prototype = null
        };
        this.init()
    };
    m.setPrototype = function() {
        m.prototype = new FWDDisplayObject("div", "absolute", "visible")
    };
    m.HIDE_THUMBS_COMPLETE = "onHideThumbsComplete";
    m.SCROLL_TYPE_DRAG = "drag";
    m.SCROLL_TYPE_SCROLL_BAR = "scrollbar";
    m.LOAD_ERROR = "onLoadError";
    m.CLICK = "onClick";
    q.FWDThumbsManager = m
})(window);
(function(q) {
    var m = function(j, a) {
        var b = this,
            c = m.prototype;
        this.categories_ar = a.categories_ar;
        this.buttons_ar = [];
        this.buttonsHolder_do = this.mainButtonsHolder_do = this.selector_do = this.mainHolder_do = null;
        this.upArrowN_img = a.upArrowN_img;
        this.upArrowS_img = a.upArrowS_img;
        this.selectorLabel_str = a.selectorLabel;
        this.selectorBkColorN_str = a.selctorBackgroundNormalColor;
        this.selectorBkColorS_str = a.selctorBackgroundSelectedColor;
        this.selectorTextColorN_str = a.selctorTextNormalColor;
        this.selectorTextColorS_str = a.selctorTextSelectedColor;
        this.itemBkColorN_str = a.buttonBackgroundNormalColor;
        this.itemBkColorS_str = a.buttonBackgroundSelectedColor;
        this.itemTextColorN_str = a.buttonTextNormalColor;
        this.itemTextColorS_str = a.buttonTextSelectedColor;
        this.shadowColor_str = a.shadowColor;
        this.position_str = a.position;
        this.totalButtons = b.categories_ar.length;
        this.curId = a.startAtCategory;
        this.horizontalMargins = a.comboBoxHorizontalMargins;
        this.verticalMargins = a.comboBoxVerticalMargins;
        this.totalWidth = this.buttonsHolderHeight = this.buttonsHolderWidth = 0;
        this.buttonHeight = 37;
        this.sapaceBetweenButtons = this.totalButtonsHeight = 0;
        this.borderRadius = a.comboBoxCornerRadius;
        this.isOpened_bl = this.isShowed_bl = false;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        this.isMobile_bl = FWDUtils.isMobile;
        this.init = function() {
            b.setVisible(false);
            b.setupMainContainers();
            b.getMaxWidthResizeAndPositionId_to = setTimeout(function() {
                b.getMaxWidthResizeAndPosition();
                b.setButtonsState();
                b.position();
                b.showFirstTime()
            }, 200)
        };
        this.setupMainContainers = function() {
            var e, p, f;
            b.mainHolder_do = new FWDDisplayObject("div");
            b.mainHolder_do.setCSSClass("hgFilterBox");
            b.mainHolder_do.setOverflow("visible");
            b.addChild(b.mainHolder_do);
            b.mainButtonsHolder_do = new FWDDisplayObject("div");
            b.mainButtonsHolder_do.setY(b.buttonHeight);
            b.mainHolder_do.addChild(b.mainButtonsHolder_do);
            b.buttonsHolder_do = new FWDDisplayObject("div");
            b.mainButtonsHolder_do.addChild(b.buttonsHolder_do);
            p = b.upArrowN_img;
            f = b.upArrowS_img;
            FWDComboBoxSelector.setPrototype();
            b.selector_do = new FWDComboBoxSelector(p, f, b.selectorLabel_str, b.selectorBkColorN_str, b.selectorBkColorS_str, b.selectorTextColorN_str, b.selectorTextColorS_str, b.buttonHeight);
            b.mainHolder_do.addChild(b.selector_do);
            b.selector_do.setNormalState(false);
            if (b.borderRadius != 0) {
                b.selector_do.bk_sdo.getStyle().borderTopLeftRadius = b.borderRadius + "px";
                b.selector_do.bk_sdo.getStyle().borderTopRightRadius = b.borderRadius + "px";
                b.selector_do.bk_sdo.getStyle().borderBottomLeftRadius = b.borderRadius + "px";
                b.selector_do.bk_sdo.getStyle().borderBottomRightRadius = b.borderRadius + "px";
                b.getStyle().borderRadius = b.borderRadius + "px"
            }
            b.selector_do.addListener(FWDComboBoxSelector.MOUSE_DOWN, b.openMenuHandler);
            for (p = 0; p < b.totalButtons; p++) {
                FWDComboBoxButton.setPrototype();
                e = new FWDComboBoxButton(b.categories_ar[p], b.itemBkColorN_str, b.itemBkColorS_str, b.itemTextColorN_str, b.itemTextColorS_str, p, b.buttonHeight);
                b.buttons_ar[p] = e;
                e.addListener(FWDComboBoxButton.MOUSE_DOWN, b.buttonOnMouseDownHandler);
                b.buttonsHolder_do.addChild(e)
            }
            if (b.borderRadius != 0) {
                e.bk_sdo.getStyle().borderBottomLeftRadius = b.borderRadius + "px";
                e.bk_sdo.getStyle().borderBottomRightRadius = b.borderRadius + "px"
            }
        };
        this.buttonOnMouseDownHandler = function(e) {
            b.curId = e.target.id;
            b.setButtonsStateBasedOnId();
            clearTimeout(b.hideMenuTimeOutId_to);
            b.hide(true);
            b.selector_do.enable();
            if (b.isMobile_bl) b.hasPointerEvent_bl ? q.removeEventListener("MSPointerDown", b.checkOpenedMenu) : q.removeEventListener("touchstart", b.checkOpenedMenu);
            else if (q.addEventListener) q.removeEventListener("mousemove", b.checkOpenedMenu);
            else document.attachEvent && document.detachEvent("onmousemove", b.checkOpenedMenu);
            b.dispatchEvent(m.BUTTON_PRESSED, {
                id: b.curId
            })
        };
        this.openMenuHandler = function() {
            if (!b.isShowed_bl) {
                b.selector_do.disable();
                b.show(true);
                b.startToCheckOpenedMenu()
            }
        };
        this.setButtonsStateBasedOnId = function() {
            for (var e = 0; e < b.totalButtons; e++) {
                button_do = b.buttons_ar[e];
                e == b.curId ? button_do.disable() : button_do.enable()
            }
        };
        this.startToCheckOpenedMenu = function() {
            if (b.isMobile_bl) b.hasPointerEvent_bl ? q.addEventListener("MSPointerDown", b.checkOpenedMenu) : q.addEventListener("touchstart", b.checkOpenedMenu);
            else if (q.addEventListener) q.addEventListener("mousemove", b.checkOpenedMenu);
            else document.attachEvent && document.attachEvent("onmousemove", b.checkOpenedMenu)
        };
        this.checkOpenedMenu = function(e) {
            e.preventDefault && e.preventDefault();
            e = FWDUtils.getViewportMouseCoordinates(e);
            if (FWDUtils.hitTest(b.screen, e.screenX, e.screenY)) clearTimeout(b.hideMenuTimeOutId_to);
            else {
                if (b.isMobile_bl) {
                    b.hide(true);
                    b.selector_do.enable()
                } else {
                    clearTimeout(b.hideMenuTimeOutId_to);
                    b.hideMenuTimeOutId_to = setTimeout(function() {
                        b.hide(true);
                        b.selector_do.enable()
                    }, 1E3)
                }
                if (b.isMobile_bl) b.hasPointerEvent_bl ? q.removeEventListener("MSPointerDown", b.checkOpenedMenu) : q.removeEventListener("touchstart", b.checkOpenedMenu);
                else if (q.addEventListener) q.removeEventListener("mousemove", b.checkOpenedMenu);
                else document.attachEvent && document.detachEvent("onmousemove", b.checkOpenedMenu)
            }
        };
        b.getMaxWidthResizeAndPosition = function() {
            var e;
            b.totalWidth = 0;
            b.totalButtonsHeight = 0;
            b.totalWidth = b.selector_do.getMaxTextWidth() + 20;
            for (var p = 0; p < b.totalButtons; p++) {
                e = b.buttons_ar[p];
                if (e.getMaxTextWidth() > b.totalWidth) b.totalWidth = e.getMaxTextWidth()
            }
            for (p = 0; p < b.totalButtons; p++) {
                e = b.buttons_ar[p];
                e.setY(p * (e.totalHeight + b.sapaceBetweenButtons));
                e.totalWidth = b.totalWidth;
                e.setWidth(b.totalWidth);
                e.centerText()
            }
            b.totalButtonsHeight = e.getY() + e.totalHeight;
            b.setWidth(b.totalWidth);
            b.setHeight(b.buttonHeight);
            b.mainButtonsHolder_do.setWidth(b.totalWidth);
            b.selector_do.totalWidth = b.totalWidth;
            b.selector_do.setWidth(b.totalWidth);
            b.selector_do.centerText();
            b.buttonsHolder_do.setWidth(b.totalWidth);
            b.buttonsHolder_do.setHeight(b.totalButtonsHeight);
            b.hide(false, true)
        };
        this.setButtonsState = function() {
            for (var e, p = 0; p < b.totalButtons; p++) {
                e = b.buttons_ar[p];
                p == b.curId ? e.disable(true) : e.enable(true)
            }
        };
        this.position = function() {
            if (b.position_str == "topleft") {
                b.finalX = b.horizontalMargins;
                b.finalY = b.verticalMargins
            } else if (b.position_str == "topright") {
                b.finalX = j.stageWidth - b.totalWidth - b.horizontalMargins;
                b.finalY = b.verticalMargins
            }
            b.setX(b.finalX);
            b.setY(b.finalY)
        };
        this.showFirstTime = function() {
            b.setVisible(true);
            if (b.position_str == "topleft" || b.position_str == "topright") b.mainHolder_do.setY(-(b.verticalMargins + b.buttonHeight));
            b.getStyle().boxShadow = "0px 0px 3px " + b.shadowColor_str;
            TweenMax.to(b.mainHolder_do, 0.8, {
                y: 0,
                ease: Expo.easeInOut
            })
        };
        this.hide = function(e, p) {
            if (b.isShowed_bl || p) {
                TweenMax.killTweensOf(this);
                b.isShowed_bl = false;
                if (b.borderRadius != 0) {
                    b.selector_do.bk_sdo.getStyle().borderBottomLeftRadius = b.borderRadius + "px";
                    b.selector_do.bk_sdo.getStyle().borderBottomRightRadius = b.borderRadius + "px"
                }
                if (e) {
                    TweenMax.to(b.buttonsHolder_do, 0.6, {
                        y: -b.totalButtonsHeight,
                        ease: Expo.easeInOut
                    });
                    TweenMax.to(b.mainButtonsHolder_do, 0.6, {
                        h: 0,
                        ease: Expo.easeInOut
                    });
                    TweenMax.to(b, 0.6, {
                        h: b.buttonHeight,
                        ease: Expo.easeInOut
                    })
                } else {
                    b.buttonsHolder_do.setY(b.buttonHeight - b.totalButtonsHeight);
                    b.mainButtonsHolder_do.setHeight(0);
                    b.setHeight(b.buttonHeight)
                }
            }
        };
        this.show = function(e, p) {
            if (!(b.isShowed_bl && !p)) {
                TweenMax.killTweensOf(this);
                b.isShowed_bl = true;
                if (b.borderRadius != 0) {
                    b.selector_do.bk_sdo.getStyle().borderBottomLeftRadius = "0px";
                    b.selector_do.bk_sdo.getStyle().borderBottomRightRadius = "0px"
                }
                if (e) {
                    TweenMax.to(b.buttonsHolder_do, 0.6, {
                        y: 0,
                        ease: Expo.easeInOut
                    });
                    TweenMax.to(b.mainButtonsHolder_do, 0.6, {
                        h: b.totalButtonsHeight + b.buttonHeight,
                        ease: Expo.easeInOut
                    });
                    TweenMax.to(b, 0.6, {
                        h: b.totalButtonsHeight + b.buttonHeight,
                        ease: Expo.easeInOut
                    })
                } else {
                    b.buttonsHolder_do.setY(b.buttonHeight);
                    b.mainButtonsHolder_do.setHeight(b.buttonHeight + b.buttonHeight);
                    b.setHeight(b.buttonHeight + b.buttonHeight)
                }
            }
        };
        this.init();
        this.destroy = function() {
            if (b.isMobile_bl) {
                q.removeEventListener("MSPointerDown", b.checkOpenedMenu);
                q.removeEventListener("touchstart", b.checkOpenedMenu)
            } else if (q.removeEventListener) q.removeEventListener("mousemove", b.checkOpenedMenu);
            else document.detachEvent && document.detachEvent("onmousemove", b.checkOpenedMenu);
            clearTimeout(b.hideMenuTimeOutId_to);
            clearTimeout(b.getMaxWidthResizeAndPositionId_to);
            TweenMax.killTweensOf(b);
            TweenMax.killTweensOf(b.mainHolder_do);
            TweenMax.killTweensOf(b.buttonsHolder_do);
            TweenMax.killTweensOf(b.mainButtonsHolder_do);
            b.mainHolder_do.destroy();
            b.selector_do.destroy();
            b.mainButtonsHolder_do.destroy();
            b.buttonsHolder_do.destroy();
            b.categories_ar = null;
            b.buttons_ar = null;
            b.mainHolder_do = null;
            b.selector_do = null;
            b.mainButtonsHolder_do = null;
            b.buttonsHolder_do = null;
            b.upArrowN_img = null;
            a = j = b.upArrowS_img = null;
            b.setInnerHTML("");
            c.destroy();
            c = b = null;
            m.prototype = null
        }
    };
    m.setPrototype = function() {
        m.prototype = new FWDDisplayObject("div")
    };
    m.HIDE_COMPLETE = "infoWindowHideComplete";
    m.BUTTON_PRESSED = "buttonPressed";
    m.prototype = null;
    q.FWDComboBox = m
})(window);

FWDUtils.onReady(function() {
    var header, gridDiv, footer, wpadminbar, wpadminbarHeight;
    header = document.getElementById("header");
    gridDiv = document.getElementById("horizontalGridFolioContainer");
    footer = document.getElementById("footer");
    wpadminbar = document.getElementById("wpadminbar");

    var gallery = new FWDGrid({
        //main settings
        divHolderId: "horizontalGridFolioContainer",
        gridPlayListAndSkinId: "playlist",
        removePlayListFromDOM: "yes",
        displayType: "afterParent",
        scrollBarType: ozyHorizontalGridFolioOptions.scrollBarType, //drag
        autoScale: "yes",
        width: 940,
        height: 650,
        thumbnailOverlayType: "text", //"icons",
        showContextMenu: "no",
        addMargins: "no",
        /*yes*/
        addMouseWheelSupport: "yes",
        scrollBarOffset: 0,
        backgroundColor: "#111111",
        scrollbarDisabledColor: "#000000",
        //thumbnails settings
        thumbnailBaseWidth: 278,
        thumbnailBaseHeight: 188,
        nrOfThumbsToShowOnSet: ozyHorizontalGridFolioOptions.nrOfThumbsToShowOnSet,
        horizontalSpaceBetweenThumbnails: parseInt(ozyHorizontalGridFolioOptions.SpaceBetweenThumbnails),
        /*4*/
        verticalSpaceBetweenThumbnails: parseInt(ozyHorizontalGridFolioOptions.SpaceBetweenThumbnails),
        /*4*/
        thumbnailBorderSize: 0,
        /*4*/
        thumbnailBorderRadius: 0,
        thumbnailOverlayOpacity: .85,
        thumbnailOverlayColor: "#000000",
        thumbnailBackgroundColor: "#333333",
        thumbnailBorderNormalColor: "#FFFFFF",
        thumbnailBorderSelectedColor: "#FFFFFF",
        //combobox settings
        startAtCategory: 0,
        selectLabel: ozyHorizontalGridFolioOptions.selectLabel, //"All Categories",
        allCategoriesLabel: ozyHorizontalGridFolioOptions.selectLabel, //"All Categories",
        showAllCategories: "yes",
        comboBoxPosition: "topright",
        selctorBackgroundNormalColor: "#FFFFFF",
        selctorBackgroundSelectedColor: "#000000",
        selctorTextNormalColor: "#000000",
        selctorTextSelectedColor: "#FFFFFF",
        buttonBackgroundNormalColor: "#FFFFFF",
        buttonBackgroundSelectedColor: "#000000",
        buttonTextNormalColor: "#000000",
        buttonTextSelectedColor: "#FFFFFF",
        comboBoxShadowColor: "transparent",
        comboBoxHorizontalMargins: 20,
        comboBoxVerticalMargins: 20,
        comboBoxCornerRadius: 0,
        //fullscreen button settings
        showFullScreenButton: "yes",
        fullScreenButtonPosition: "bottomright",
        fullScreenButtonHorizontalMargins: 20,
        fullScreenButtonVerticalMargins: 20,
        //ligtbox settings
        addLightBoxKeyboardSupport: "yes",
        showLightBoxNextAndPrevButtons: "yes",
        showLightBoxZoomButton: "yes",
        showLightBoxInfoButton: "yes",
        showLighBoxSlideShowButton: "yes",
        showLightBoxInfoWindowByDefault: (ozyGetOsVersion() > 0 ? "no" : "yes"),
        slideShowAutoPlay: "no",
        lightBoxVideoAutoPlay: "no",
        lighBoxBackgroundColor: "#000000",
        lightBoxInfoWindowBackgroundColor: "#FFFFFF",
        lightBoxItemBorderColor: "#FFFFFF",
        lightBoxItemBackgroundColor: "#222222",
        lightBoxMainBackgroundOpacity: .9,
        /*.8*/
        lightBoxInfoWindowBackgroundOpacity: .9,
        /*.9*/
        lightBoxBorderSize: 0,
        /*4*/
        lightBoxBorderRadius: 0,
        /*4*/
        lightBoxSlideShowDelay: 4 /*4*/
    });

    if (window.addEventListener) {
        window.addEventListener("resize", onResizeHandler);
    } else if (window.attachEvent) {
        window.attachEvent("onresize", onResizeHandler);
    }

    wpadminbarHeight = (wpadminbar !== null ? wpadminbar.offsetHeight : 0);

    gridDiv.style.height = (document.documentElement.clientHeight - (header.offsetHeight + footer.offsetHeight + wpadminbarHeight)) + "px";

    function onResizeHandler() {
        gridDiv.style.height = (document.documentElement.clientHeight - (header.offsetHeight + footer.offsetHeight + wpadminbarHeight)) + "px";
    }
});