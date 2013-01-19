var U_GROUP_TESTER = 1;
var U_GROUP_ADMIN = 2;
var U_GROUP_EDITOR = 4;
var U_GROUP_MOD = 8;
var U_GROUP_BUREAU = 16;
var U_GROUP_DEV = 32;
var U_GROUP_VIP = 64;
var U_GROUP_BLOGGER = 128;
var U_GROUP_PREMIUM = 256;
var U_GROUP_LOCALIZER = 512;
var U_GROUP_SALESAGENT = 1024;
var U_GROUP_SCREENSHOT = 2048;
var U_GROUP_VIDEO = 4096;
var U_GROUP_APIONLY = 8192;
var U_GROUP_PENDING = 16384;
var U_GROUP_STAFF = U_GROUP_ADMIN | U_GROUP_EDITOR | U_GROUP_MOD | U_GROUP_BUREAU | U_GROUP_DEV | U_GROUP_BLOGGER | U_GROUP_LOCALIZER | U_GROUP_SALESAGENT;
var U_GROUP_EMPLOYEE = U_GROUP_ADMIN | U_GROUP_BUREAU | U_GROUP_DEV;
var U_GROUP_GREEN_TEXT = U_GROUP_MOD | U_GROUP_BUREAU | U_GROUP_DEV;
var U_GROUP_MODERATOR = U_GROUP_ADMIN | U_GROUP_MOD | U_GROUP_BUREAU;
var U_GROUP_COMMENTS_MODERATOR = U_GROUP_MODERATOR | U_GROUP_LOCALIZER;
var U_GROUP_PREMIUM_PERMISSIONS = U_GROUP_PREMIUM | U_GROUP_STAFF | U_GROUP_VIP;
function $(c) {
	if (arguments.length > 1) {
		var b = [];
		var a;
		for (var d = 0, a = arguments.length; d < a; ++d) {
			b.push($(arguments[d]))
		}
		return b
	}
	if (typeof c == "string") {
		c = ge(c)
	}
	return c
}
function $E(a) {
	if (!a) {
		if (typeof event != "undefined") {
			a = event
		} else {
			return null
		}
	}
	if (a.which) {
		a._button = a.which
	} else {
		a._button = a.button;
		if (Browser.ie) {
			if (a._button & 4) {
				a._button = 2
			} else {
				if (a._button & 2) {
					a._button = 3
				}
			}
		} else {
			a._button = a.button + 1
		}
	}
	a._target = a.target ? a.target: a.srcElement;
	a._wheelDelta = a.wheelDelta ? a.wheelDelta: -a.detail;
	return a
}
function $A(c) {
	var e = [];
	for (var d = 0, b = c.length; d < b; ++d) {
		e.push(c[d])
	}
	return e
}
function bindfunc() {
    args = $A(arguments);
    var b = args.shift();
    var a = args.shift();
    return function() {
        return b.apply(a, args.concat($A(arguments)))
    }
}

Function.prototype.bind = function () {
	var
        __method = this,
        args     = $A(arguments),
        object   = args.shift();

	return function () {
		return __method.apply(object, args.concat($A(arguments)));
	}
};

if (!String.prototype.ltrim) {
	String.prototype.ltrim = function () {
		return this.replace(/^\s*/, "")
	}
}
if (!String.prototype.rtrim) {
	String.prototype.rtrim = function () {
		return this.replace(/\s*$/, "")
	}
}
if (!String.prototype.trim) {
	String.prototype.trim = function () {
		return this.ltrim().rtrim()
	}
}
if (!String.prototype.removeAllWhitespace) {
	String.prototype.removeAllWhitespace = function () {
		return this.replace("/s+/g", "")
	}
}
function strcmp(d, c) {
	if (d == c) {
		return 0
	}
	if (d == null) {
		return -1
	}
	if (c == null) {
		return 1
	}
	var f = parseFloat(d),
	e = parseFloat(c);
	if (!isNaN(f) && !isNaN(e) && f != e) {
		return f < e ? -1 : 1
	}
	return d < c ? -1 : 1
}
function trim(a) {
	return a.replace(/(^\s*|\s*$)/g, "")
}
function rtrim(c, d) {
	var b = c.length;
	while (--b > 0 && c.charAt(b) == d) {}
	c = c.substring(0, b + 1);
	if (c == d) {
		c = ""
	}
	return c
}
function sprintf(b) {
	var a;
	for (a = 1, len = arguments.length; a < len; ++a) {
		b = b.replace("$" + a, arguments[a])
	}
	return b
}
function sprintfa(b) {
	var a;
	for (a = 1, len = arguments.length; a < len; ++a) {
		b = b.replace(new RegExp("\\$" + a, "g"), arguments[a])
	}
	return b
}
function sprintfo(c) {
	if (typeof c == "object" && c.length) {
		var a = c;
		c = a[0];
		var b;
		for (b = 1; b < a.length; ++b) {
			c = c.replace("$" + b, a[b])
		}
		return c
	}
}
function str_replace(e, d, c) {
	while (e.indexOf(d) != -1) {
		e = e.replace(d, c)
	}
	return e
}
function urlencode(a) {
	a = encodeURIComponent(a);
	a = str_replace(a, "+", "+");
	return a
}
function urlencode2(a) {
	a = encodeURIComponent(a);
	a = str_replace(a, " ", "+");
	return a
}
function number_format(a) {
	x = ("" + parseFloat(a)).split(".");
	a = x[0];
	x = x.length > 1 ? "." + x[1] : "";
	if (a.length <= 3) {
		return a + x
	}
	return number_format(a.substr(0, a.length - 3)) + "," + a.substr(a.length - 3) + x
}

function is_array(arr) {
	return !!(arr && arr.constructor == Array);
}

function in_array(arr, val, func, idx) {
	if (arr == null) {
		return -1;
	}

	if (func) {
		return in_arrayf(arr, val, func, idx);
	}

	for (var i = idx || 0, len = arr.length; i < len; ++i) {
		if (arr[i] == val) {
			return i;
		}
	}

	return -1;
}

function in_arrayf(arr, val, func, idx) {
	for (var i = idx || 0, len = arr.length; i < len; ++i) {
		if (func(arr[i]) == val) {
			return i;
		}
	}
	return -1;
}

function rs() {
	var e = rs.random;
	var b = "";
	for (var a = 0; a < 16; a++) {
		var d = Math.floor(Math.random() * e.length);
		if (a == 0 && d < 11) {
			d += 10
		}
		b += e.substring(d, d + 1)
	}
	return b
}
rs.random = "0123456789abcdefghiklmnopqrstuvwxyz";
function isset(a) {
	return typeof window[a] != "undefined"
}
function array_filter(c, g) {
	var e=[];
	for (var d = 0, b = c.length; d < b; ++d) {
		if (g(c[d])) {
			e.push(c[d])
		}
	}
	return e
}
function array_walk(d, h, c) {
	var g;
	for (var e = 0, b = d.length; e < b; ++e) {
		g = h(d[e], c, d, e);
		if (g != null) {
			d[e] = g
		}
	}
}
function array_apply(d, h, c) {
	var g;
	for (var e = 0, b = d.length; e < b; ++e) {
		h(d[e], c, d, e)
	}
}
function ge(a) {
	return document.getElementById(a)
}
function gE(a, b) {
	return a.getElementsByTagName(b)
}
function ce(d, b, e) {
	var a = document.createElement(d);
	if (b) {
		cOr(a, b)
	}
	if (e) {
		ae(a, e)
	}
	return a
}
function de(a) {
	a.parentNode.removeChild(a)
}
function ae(a, b) {
	if (is_array(b)) {
		array_apply(b, a.appendChild.bind(a));
		return b
	} else {
		return a.appendChild(b)
	}
}
function aef(a, b) {
	return a.insertBefore(b, a.firstChild)
}
function ee(a, b) {
	if (!b) {
		b = 0
	}
	while (a.childNodes[b]) {
		a.removeChild(a.childNodes[b])
	}
}
function ct(a) {
	return document.createTextNode(a)
}
function st(a, b) {
	if (a.firstChild && a.firstChild.nodeType == 3) {
		a.firstChild.nodeValue = b
	} else {
		aef(a, ct(b))
	}
}
function nw(a) {
	a.style.whiteSpace = "nowrap"
}
function rf() {
	return false
}
function rf2(a) {
	a = $E(a);
	if (a.ctrlKey || a.shiftKey || a.altKey || a.metaKey) {
		return
	}
	return false
}
function tb() {
	this.blur()
}
function ac(c, d) {
	var a = 0,
	g = 0,
	b;
	while (c) {
		a += c.offsetLeft;
		g += c.offsetTop;
		b = c.parentNode;
		while (b && b != c.offsetParent && b.offsetParent) {
			if (b.scrollLeft || b.scrollTop) {
				a -= (b.scrollLeft | 0);
				g -= (b.scrollTop | 0);
				break
			}
			b = b.parentNode
		}
		c = c.offsetParent
	}
	if (Lightbox.isVisible()) {
		d = true
	}
	if (d && !Browser.ie6) {
		var f = g_getScroll();
		a += f.x;
		g += f.y
	}
	var e = [a, g];
	e.x = a;
	e.y = g;
	return e
}
function aE(b, c, a) {
	if (Browser.ie) {
		b.attachEvent("on" + c, a)
	} else {
		b.addEventListener(c, a, false)
	}
}
function dE(b, c, a) {
	if (Browser.ie) {
		b.detachEvent("on" + c, a)
	} else {
		b.removeEventListener(c, a, false)
	}
}
function sp(a) {
	if (!a) {
		a = event
	}
	if (Browser.ie) {
		a.cancelBubble = true
	} else {
		a.stopPropagation()
	}
}

// Set cookie
function sc(z, y, x, w, v) {
	var a = new Date();
	var b = z + "=" + escape(x) + "; ";
	a.setDate(a.getDate() + y);
	b += "expires=" + a.toUTCString() + "; ";
	if (w) {
		b += "path=" + w + "; ";
	}
	if (v) {
		b += "domain=" + v + "; ";
	}
	document.cookie = b;
    gc(z);
	gc.C[z] = x;
}

// Delete cookie
function dc(z) {
	sc(z, -1);
	gc.C[z] = null;
}

// Get all cookies (return value is cached)
function gc(z) {
	if (gc.I == null) { // Initialize cookie table
		var words = unescape(document.cookie).split("; ");

		gc.C = {};
		for (var i = 0, len = words.length; i < len; ++i) {
			var
                pos = words[i].indexOf("="),
                name,
                value;

			if (pos != -1) {
				name  = words[i].substr(0, pos);
				value = words[i].substr(pos + 1);
			}
            else {
				name  = words[i];
				value = "";
			}

			gc.C[name] = value;
		}

		gc.I = 1;
	}

	if (!z) {
		return gc.C;
	}
    else {
		return gc.C[z];
	}
}

function ns(a) {
	if (Browser.ie) {
		a.onfocus = tb;
		a.onmousedown = a.onselectstart = a.ondragstart = rf
	}
}
function eO(b) {
	for (var a in b) {
		delete b[a]
	}
}
function cO(c, a) {
	for (var b in a) {
		if (a[b] !== null && typeof a[b] == "object" && a[b].length) {
			c[b] = a[b].slice(0)
		} else {
			c[b] = a[b]
		}
	}
}
function cOr(c, a) {
	for (var b in a) {
		if (typeof a[b] == "object") {
			if (a[b].length) {
				c[b] = a[b].slice(0)
			} else {
				if (!c[b]) {
					c[b] = {}
				}
				cOr(c[b], a[b])
			}
		} else {
			c[b] = a[b]
		}
	}
}
Browser = {
	ie:      !!(window.attachEvent && !window.opera),
	opera:   !!window.opera,
	safari:  navigator.userAgent.indexOf('Safari') != -1,
	firefox: navigator.userAgent.indexOf('Firefox') != -1,
	chrome:  navigator.userAgent.indexOf('Chrome') != -1
};
Browser.ie9   = Browser.ie && navigator.userAgent.indexOf('MSIE 9.0') != -1;
Browser.ie8   = Browser.ie && navigator.userAgent.indexOf('MSIE 8.0') != -1&& !Browser.ie9;
Browser.ie7   = Browser.ie && navigator.userAgent.indexOf('MSIE 7.0') != -1 && !Browser.ie8;
Browser.ie6   = Browser.ie && navigator.userAgent.indexOf('MSIE 6.0') != -1 && !Browser.ie7;

Browser.ie67   = Browser.ie6   || Browser.ie7;
Browser.ie678  = Browser.ie67  || Browser.ie8;
Browser.ie6789 = Browser.ie678 || Browser.ie9;

navigator.userAgent.match(/Gecko\/([0-9]+)/);
Browser.geckoVersion = parseInt(RegExp.$1) | 0;

OS = {
	windows: navigator.appVersion.indexOf('Windows')   != -1,
	mac:     navigator.appVersion.indexOf('Macintosh') != -1,
	linux:   navigator.appVersion.indexOf('Linux')     != -1
};

var DomContentLoaded = new function () {
	var b = [];
	var a = [];
	this.now = function () {
		array_apply(b, function (c) {
			c()
		})
	};
	this.delayed = function () {
		array_apply(a, function (c) {
			c()
		});
		DomContentLoaded = null
	};
	this.addEvent = function (c) {
		b.push(c)
	};
	this.addDelayedEvent = function (c) {
		a.push(c)
	}
};
function g_getWindowSize() {
	var a = 0,
	b = 0;
	if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		a = document.documentElement.clientWidth;
		b = document.documentElement.clientHeight
	} else {
		if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
			a = document.body.clientWidth;
			b = document.body.clientHeight
		} else {
			if (typeof window.innerWidth == "number") {
				a = window.innerWidth;
				b = window.innerHeight
			}
		}
	}
	return {
		w: a,
		h: b
	}
}

function g_getScroll() {
	var
        x = 0,
        y = 0;

	if (typeof(window.pageYOffset) == "number") {
		// Netscape compliant
		x = window.pageXOffset;
		y = window.pageYOffset
	}
    else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
		// DOM compliant
        x = document.body.scrollLeft;
        y = document.body.scrollTop
    }
    else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
        // IE6 standards compliant mode
        x = document.documentElement.scrollLeft;
        y = document.documentElement.scrollTop
	}
	return {
		x: x,
		y: y
	};
}

function g_getCursorPos(e) {
	var
        x,
        y;

	if (window.innerHeight) {

        // ok, something of a workaround here... MS9+ sends a MSEventObj istead of mouseEvent . whatever
        // but the properties for that are client[X|Y] DIAF!

        if (!e.pageX || !e.pageY) {
            x = e.clientX;
            y = e.clientY
        }
        else {
            x = e.pageX;
            y = e.pageY
        }
	}
    else {
		var scroll = g_getScroll();

		x = e.clientX + scroll.x;
		y = e.clientY + scroll.y
	}

	return {
		x: x,
		y: y
	};
}

function g_scrollTo(c, b) {
	var l, k = g_getWindowSize(),
	m = g_getScroll(),
	i = k.w,
	e = k.h,
	g = m.x,
	d = m.y;
	c = $(c);
	if (b == null) {
		b = []
	} else {
		if (typeof b == "number") {
			b = [b]
		}
	}
	l = b.length;
	if (l == 0) {
		b[0] = b[1] = b[2] = b[3] = 0
	} else {
		if (l == 1) {
			b[1] = b[2] = b[3] = b[0]
		} else {
			if (l == 2) {
				b[2] = b[0];
				b[3] = b[1]
			} else {
				if (l == 3) {
					b[3] = b[1]
				}
			}
		}
	}
	l = ac(c);
	var a = l[0] - b[3],
	h = l[1] - b[0],
	j = l[0] + c.offsetWidth + b[1],
	f = l[1] + c.offsetHeight + b[2];
	if (j - a > i || a < g) {
		g = a
	} else {
		if (j - i > g) {
			g = j - i
		}
	}
	if (f - h > e || h < d) {
		d = h
	} else {
		if (f - e > d) {
			d = f - e
		}
	}
	scrollTo(g, d)
}
function g_addCss(b) {
	var c = ce("style");
	c.type = "text/css";
	if (c.styleSheet) {
		c.styleSheet.cssText = b
	} else {
		ae(c, ct(b))
	}
	var a = document.getElementsByTagName("head")[0];
	ae(a, c)
}
function g_setTextNodes(c, b) {
	if (c.nodeType == 3) {
		c.nodeValue = b
	} else {
		for (var a = 0; a < c.childNodes.length; ++a) {
			g_setTextNodes(c.childNodes[a], b)
		}
	}
}
function g_setInnerHtml(d, c, a) {
	if (d.nodeName.toLowerCase() == a) {
		d.innerHTML = c
	} else {
		for (var b = 0; b < d.childNodes.length; ++b) {
			g_setInnerHtml(d.childNodes[b], c, a)
		}
	}
}
function g_getTextContent(c) {
	var a = "";
	for (var b = 0; b < c.childNodes.length; ++b) {
		if (c.childNodes[b].nodeValue) {
			a += c.childNodes[b].nodeValue
		} else {
			if (c.childNodes[b].nodeName == "BR") {
				if (Browser.ie) {
					a += "\r"
				} else {
					a += "\n"
				}
			}
		}
		a += g_getTextContent(c.childNodes[b])
	}
	return a
}

function g_pickerWheel(evt)
{
	evt = $E(evt);

	if(evt._wheelDelta < 0)
		this.scrollTop += 27;
	else
		this.scrollTop -= 27;
}

function g_setSelectedLink(c, b) {
	if (!g_setSelectedLink.groups) {
		g_setSelectedLink.groups = {}
	}
	var a = g_setSelectedLink.groups;
	if (a[b]) {
		a[b].className = a[b].className.replace("selected", "")
	}
	c.className += " selected";
	a[b] = c
}
function g_setCheckedRow(c, b) {
	if (!g_setCheckedRow.groups) {
		g_setCheckedRow.groups = {}
	}
	var a = g_setCheckedRow.groups;
	if (a[b]) {
		a[b].className = a[b].className.replace("checked", "")
	}
	c.className += " checked";
	a[b] = c
}
function g_toggleDisplay(a) {
	if (a.style.display == "none") {
		a.style.display = "";
		return true
	} else {
		a.style.display = "none";
		return false
	}
}
function g_enableScroll(a) {
	if (!a) {
		aE(document, "mousewheel", g_enableScroll.F);
		aE(window, "DOMMouseScroll", g_enableScroll.F)
	} else {
		dE(document, "mousewheel", g_enableScroll.F);
		dE(window, "DOMMouseScroll", g_enableScroll.F)
	}
}
g_enableScroll.F = function (a) {
	if (a.stopPropagation) {
		a.stopPropagation()
	}
	if (a.preventDefault) {
		a.preventDefault()
	}
	a.returnValue = false;
	a.cancelBubble = true;
	return false
};
function g_getGets() {
	if (g_getGets.C != null) {
		return g_getGets.C
	}
	var e = {};
	if (location.search) {
		var f = decodeURIComponent(location.search.substr(1)).split("&");
		for (var c = 0, a = f.length; c < a; ++c) {
			var g = f[c].indexOf("="),
			b,
			d;
			if (g != -1) {
				b = f[c].substr(0, g);
				d = f[c].substr(g + 1)
			} else {
				b = f[c];
				d = ""
			}
			e[b] = d
		}
	}
	g_getGets.C = e;
	return e
}
function g_createRect(d, c, a, b) {
	return {
		l: d,
		t: c,
		r: d + a,
		b: c + b
	}
}
function g_intersectRect(d, c) {
	return ! (d.l >= c.r || c.l >= d.r || d.t >= c.b || c.t >= d.b)
}
function g_createRange(c, a) {
	range = {};
	for (var b = c; b <= a; ++b) {
		range[b] = b
	}
	return range
}
function g_sortIdArray(a, b, c) {
	a.sort(c ?
	function (e, d) {
		return strcmp(b[e][c], b[d][c])
	}: function (e, d) {
		return strcmp(b[e], b[d])
	})
}
function g_sortJsonArray(e, d, f, a) {
	var c = [];
	for (var b in e) {
		if (d[b] && (a == null || a(d[b]))) {
			c.push(b)
		}
	}
	if (f != null) {
		c.sort(f)
	} else {
		g_sortIdArray(c, d)
	}
	return c
}
function g_urlize(a, b) {
	a = str_replace(a, "'", "");
	a = trim(a);
	if (b) {
		a = str_replace(a, " ", "-")
	} else {
		a = a.replace(/[^a-z0-9]/ig, "-")
	}
	a = str_replace(a, "--", "-");
	a = str_replace(a, "--", "-");
	a = rtrim(a, "-");
	a = a.toLowerCase();
	return a
}
function g_getLocale(a) {
	if (a && g_locale.id == 25) {
		return 0
	}
	return g_locale.id
}
function g_createReverseLookupJson(b) {
	var c = {};
	for (var a in b) {
		c[b[a]] = a
	}
	return c
}
function g_isUsernameValid(a) {
	return (a.match(/[^a-z0-9]/i) == null && a.length >= 4 && a.length <= 16)
}
function g_createHeader(c) {
	var k = ce("dl"),
	p = (c == 5);
	for (var j = 0, l = mn_path.length; j < l; ++j) {
		var f = ce("dt");
		var q = ce("a");
		var m = ce("ins");
		var g = ce("big");
		var e = ce("span");
		var o = mn_path[j][0];
		var h = (o == c);
		var d = (!h && mn_path[j][3]);
		if (p && o == 5) {
			d = true;
			mn_path[j][3] = mn_profiles
		}
		if (d) {
			q.menu = mn_path[j][3];
			q.onmouseover = Menu.show;
			q.onmouseout = Menu.hide
		} else {
			q.onmouseover = Menu._hide
		}
		if (mn_path[j][2]) {
			q.href = mn_path[j][2]
		} else {
			q.href = "javascript:;";
			ns(q);
			q.style.cursor = "default"
		}
		if (h) {
			q.className = "selected"
		}
		ae(g, ct(mn_path[j][1].charAt(0)));
		ae(m, g);
		ae(m, ct(mn_path[j][1].substr(1)));
		ae(q, m);
		ae(q, e);
		ae(f, q);
		ae(k, f)
	}
	ae(ge("toptabs-generic"), k);
	var b = ge("topbar-generic");
	if (c != null && c >= 0 && c < mn_path.length) {
		c = parseInt(c);
		switch (c) {
		case 0:
			Menu.addButtons(b, Menu.explode(mn_database));
			break;
		case 1:
			Menu.addButtons(b, mn_tools);
			break;
		case 2:
			Menu.addButtons(b, Menu.explode(mn_more));
			break;
		case 3:
			Menu.addButtons(b, Menu.explode(mn_forums));
			break;
		case 5:
			pr_initTopBarSearch();
			break
		}
	} else {
		ae(b, ct(String.fromCharCode(160)))
	}
}
function g_updateHeader(a) {
	ee(ge("toptabs-generic"));
	ee(ge("topbar-generic"));
	g_createHeader(a)
}
function g_initHeader(a) {
	g_createHeader(a);
	var d = ge("livesearch-generic");
	var b = d.previousSibling;
	var c = d.parentNode;
	ns(b);
	b.onclick = function () {
		this.parentNode.onsubmit()
	};
	if (Browser.ie) {
		setTimeout(function () {
			d.value = ""
		},
		1)
	}
	if (d.value == "") {
		d.className = "search-database"
	}
	d.onmouseover = function () {
		if (trim(this.value) != "") {
			this.className = ""
		}
	};
	d.onfocus = function () {
		this.className = ""
	};
	d.onblur = function () {
		if (trim(this.value) == "") {
			this.className = "search-database";
			this.value = ""
		}
	};
	c.onsubmit = function () {
		var e = this.elements[0].value;
		if (trim(e) == "") {
			return false
		}
		this.submit()
	}
}
function g_initHeaderMenus() {
	var c = ge("toptabs-menu-user");
	if (c) {
		c.menu = [[0, LANG.userpage, "?user=" + g_user.name], [0, LANG.settings, "?account"], [0, LANG.signout, "?account=signout"]];
		if (location.href.match(new RegExp("/?user=" + g_user.name + "$", "i"))) {
			c.menu[0].checked = 1
		} else {
			if (location.href.indexOf("?account") != -1) {
				c.menu[1].checked = 1
			}
		}
		c.onmouseover = Menu.show;
		c.onmouseout = Menu.hide;
		c.href = "?user=" + g_user.name
	}
	c = ge("toptabs-menu-profiles");
	if (c) {
		c.menu = [];
		if (g_user.characters) {
			c.menu.push([, LANG.tab_characters]);
			for (var f = 0, b = g_user.characters.length; f < b; ++f) {
				var h = g_user.characters[f],
				e = [0, h.name + " (" + h.realmname + LANG.hyphen + h.region.toUpperCase() + ")", "?profile=" + h.region + "." + h.realm + "." + g_cleanCharacterName(h.name)];
				e.smallIcon = h.icon ? h.icon: "chr_" + g_file_races[h.race] + "_" + g_file_genders[h.gender] + "_" + g_file_classes[h.classs] + "0" + (h.level > 59 ? (Math.floor((h.level - 60) / 10) + 2) : 1);
				c.menu.push(e)
			}
		}
		c.menu.push([, LANG.tab_profiles]);
		if (g_user.profiles) {
			for (var f = 0, b = g_user.profiles.length; f < b; ++f) {
				var h = g_user.profiles[f],
				e = [0, h.name, "?profile=" + h.id];
				e.smallIcon = h.icon ? h.icon: "chr_" + g_file_races[h.race] + "_" + g_file_genders[h.gender] + "_" + g_file_classes[h.classs] + "0" + (h.level > 59 ? (Math.floor((h.level - 60) / 10) + 2) : 1);
				c.menu.push(e)
			}
		}
		var e = [0, "(" + LANG.button_new + ")", "?profile&new"];
		e.smallIcon = "inv_misc_questionmark";
		c.menu.push(e);
		c.menu.rightAligned = 1;
		c.onmouseover = Menu.show;
		c.onmouseout = Menu.hide;
		c.href = "?user=" + g_user.name + (g_user.profiles ? "#profiles": (g_user.characters ? "#characters": ""))
	}
	c = ge("toptabs-menu-language");
	if (c) {
		var g = "www",
		d = location.href,
		j = location.hostname.indexOf(".");
		if (j != -1 && j <= 5) {
			g = location.hostname.substr(0, j)
		}
		j = d.indexOf("#");
		if (j != -1) {
			d = d.substr(0, j)
		}
		//c.menu = [[0, "Deutsch", (g_locale.id != 3 ? d.replace(g, "de") : null)], [0, "English", (g_locale.id != 0 ? d.replace(g, "www") : null)], [0, "Espa" + String.fromCharCode(241) + "ol", (g_locale.id != 6 ? d.replace(g, "es") : null)], [0, "Fran" + String.fromCharCode(231) + "ais", (g_locale.id != 2 ? d.replace(g, "fr") : null)], [0, String.fromCharCode(1056, 1091, 1089, 1089, 1082, 1080, 1081), (g_locale.id != 8 ? d.replace(g, "ru") : null)]];

        var rel = d.match(/()\?((item|quest|spell|achievement|npc|object)=([0-9]+))/);
        rel = (rel && rel[2]) ? rel[2] : "";

		c.menu = [
			[0, "Deutsch", (g_locale.id != 3 ? "?locale=3" : null), , {rel: rel + " domain=de"}],
			[0, "English", (g_locale.id != 0 ? "?locale=0" : null), , {rel: rel + " domain=en"}],
			[0, "Espa" + String.fromCharCode(241) + "ol", (g_locale.id != 6 ? "?locale=6" : null), , {rel: rel + " domain=es"}],
			[0, "Fran" + String.fromCharCode(231) + "ais", (g_locale.id != 2 ? "?locale=2" : null), , {rel: rel + " domain=fr"}],
			[0, String.fromCharCode(1056, 1091, 1089, 1089, 1082, 1080, 1081), (g_locale.id != 8 ? "?locale=8" : null), , {rel: rel + " domain=ru"}]
        ];
		c.menu.rightAligned = 1;
		if (g_locale.id != 25) {
			c.menu[{
				0 : 1,
				2 : 3,
				3 : 0,
				6 : 2,
				8 : 4
			} [g_locale.id]].checked = 1
		}
		c.onmouseover = Menu.show;
		c.onmouseout = Menu.hide
	}
}
function g_initPath(q, f) {
	var h = mn_path,
	c = null,
	k = null,
	p = 0,
	l = ge("main-precontents"),
	o = ce("div");
	ee(l);
	if (g_initPath.lastIt) {
		g_initPath.lastIt.checked = null
	}
	o.className = "path";
	if (f != null) {
		var m = ce("div");
		m.className = "path-right";
		var r = ce("a");
		r.href = "javascript:;";
		r.id = "fi_toggle";
		ns(r);
		r.onclick = fi_toggle;
		if (f) {
			r.className = "disclosure-on";
			ae(r, ct(LANG.fihide))
		} else {
			r.className = "disclosure-off";
			ae(r, ct(LANG.fishow))
		}
		ae(m, r);
		ae(l, m)
	}
	for (var g = 0; g < q.length; ++g) {
		var r, b, t = 0;
		for (var e = 0; e < h.length; ++e) {
			if (h[e][0] == q[g]) {
				t = 1;
				h = h[e];
				h.checked = 1;
				break
			}
		}
		if (!t) {
			p = 1;
			break
		}
		r = ce("a");
		b = ce("span");
		if (h[2]) {
			r.href = h[2]
		} else {
			r.href = "javascript:;";
			ns(r);
			r.style.textDecoration = "none";
			r.style.color = "white";
			r.style.cursor = "default"
		}
		if (g < q.length - 1 && h[3]) {
			b.className = "menuarrow"
		}
		//ae(r, ct(h[4] == null ? h[1] : h[4]));
		ae(r, ct(h[1]));
		if (g == 0) {
			r.menu = mn_path
		} else {
			r.menu = c[3]
		}
		r.onmouseover = Menu.show;
		r.onmouseout = Menu.hide;
		ae(b, r);
		ae(o, b);
		k = b;
		c = h;
		h = h[3];
		if (!h) {
			p = 1;
			break
		}
	}
	if (p && k) {
		k.className = ""
	} else {
		if (c && c[3]) {
			k.className = "menuarrow";
			r = ce("a");
			b = ce("span");
			r.href = "javascript:;";
			ns(r);
			r.style.textDecoration = "none";
			r.style.paddingRight = "16px";
			r.style.color = "white";
			r.style.cursor = "default";
			ae(r, ct("..."));
			r.menu = c[3];
			r.onmouseover = Menu.show;
			r.onmouseout = Menu.hide;
			ae(b, r);
			ae(o, b)
		}
	}
	var m = ce("div");
	m.className = "clear";
	ae(o, m);
	ae(l, o);
	g_initPath.lastIt = c
}
function g_addTooltip(b, c, a) {
	if (!a && c.indexOf("<table>") == -1) {
		a = "q"
	}
	b.onmouseover = function (d) {
		Tooltip.showAtCursor(d, c, 0, 0, a)
	};
	b.onmousemove = Tooltip.cursorUpdate;
	b.onmouseout = Tooltip.hide
}
function g_addStaticTooltip(b, c, a) {
	if (!a && c.indexOf("<table>") == -1) {
		a = "q"
	}
	b.onmouseover = function (d) {
		Tooltip.show(b, c, 0, 0, a)
	};
	b.onmouseout = Tooltip.hide
}
function g_formatTimeElapsed(e) {
	function c(m, l, i) {
		if (i && LANG.timeunitsab[l] == "") {
			i = 0
		}
		if (i) {
			return m + " " + LANG.timeunitsab[l]
		} else {
			return m + " " + (m == 1 ? LANG.timeunitssg[l] : LANG.timeunitspl[l])
		}
	}
	var g = [31557600, 2629800, 604800, 86400, 3600, 60, 1];
	var a = [1, 3, 3, -1, 5, -1, -1];
	e = Math.max(e, 1);
	for (var f = 3, h = g.length; f < h; ++f) {
		if (e >= g[f]) {
			var d = f;
			var k = Math.floor(e / g[d]);
			if (a[d] != -1) {
				var b = a[d];
				e %= g[d];
				var j = Math.floor(e / g[b]);
				if (j > 0) {
					return c(k, d, 1) + " " + c(j, b, 1)
				}
			}
			return c(k, d, 0)
		}
	}
	return "(n/a)"
}
function g_formatDate(c, j, a, d, k) {
	var f = new Date();
	var b = new Date();
	b.setTime(f.getTime() - (1000 * j));
	var e;
	var g = new Date(b.getYear(), b.getMonth(), b.getDate());
	var l = new Date(f.getYear(), f.getMonth(), f.getDate());
	var i = (l.getTime() - g.getTime());
	i /= 1000;
	i /= 86400;
	i = Math.round(i);
	if (j >= 2592000) {
		e = LANG.date_on + g_formatDateSimple(a, d)
	} else {
		if (i > 1) {
			e = sprintf(LANG.ddaysago, i);
			if (c) {
				var h = new Date();
				h.setTime(a.getTime() + (g_localTime - g_serverTime));
				c.className += " tip";
				c.title = h.toLocaleString()
			}
		} else {
			if (j >= 43200) {
				if (f.getDay() == b.getDay()) {
					e = LANG.today
				} else {
					e = LANG.yesterday
				}
				e = g_formatTimeSimple(b, e);
				if (c) {
					var h = new Date();
					h.setTime(a.getTime() + (g_localTime - g_serverTime));
					c.className += " tip";
					c.title = h.toLocaleString()
				}
			} else {
				var e = sprintf(LANG.date_ago, g_formatTimeElapsed(j));
				if (c) {
					var h = new Date();
					h.setTime(a.getTime() + (g_localTime - g_serverTime));
					c.className += " tip";
					c.title = h.toLocaleString()
				}
			}
		}
	}
	if (k == 1) {
		e = e.substr(0, 1).toUpperCase() + e.substr(1)
	}
	if (c) {
		ae(c, ct(e))
	} else {
		return e
	}
}
function g_formatDateSimple(g, c) {
	function a(b) {
		return (b < 10 ? "0" + b: b)
	}
	var i = "",
	j = g.getDate(),
	f = g.getMonth() + 1,
	h = g.getFullYear();
	i += sprintf(LANG.date_simple, a(j), a(f), h);
	if (c == 1) {
		var k = g.getHours() + 1,
		e = g.getMinutes() + 1;
		i += LANG.date_at + a(k) + ":" + a(e)
	}
	return i
}
function g_cleanCharacterName(e) {
	var d = "";
	for (var c = 0, a = e.length; c < a; ++c) {
		var b = e.charAt(c).toLowerCase();
		if (b >= "a" && b <= "z") {
			d += b
		} else {
			d += e.charAt(c)
		}
	}
	return d
}
function g_createGlow(a, h) {
	var e = ce("span");
	for (var c = -1; c <= 1; ++c) {
		for (var b = -1; b <= 1; ++b) {
			var g = ce("div");
			g.style.position = "absolute";
			g.style.whiteSpace = "nowrap";
			g.style.left = c + "px";
			g.style.top = b + "px";
			if (c == 0 && b == 0) {
				g.style.zIndex = 4
			} else {
				g.style.color = "black";
				g.style.zIndex = 2
			}
			g.innerHTML = a;
			ae(e, g)
		}
	}
	e.style.position = "relative";
	e.className = "glow" + (h != null ? " " + h: "");
	var f = ce("span");
	f.style.visibility = "hidden";
	ae(f, ct(a));
	ae(e, f);
	return e
}
function g_createProgressBar(c) {
	if (c == null) {
		c = {}
	}
	if (!c.text) {
		c.text = " "
	}
	if (c.color == null) {
		c.color = "rep0"
	}
	if (c.width == null || c.width > 100) {
		c.width = 100
	}
	var d, e;
	if (c.hoverText) {
		d = ce("a");
		d.href = "javascript:;"
	} else {
		d = ce("span")
	}
	d.className = "progressbar";
	if (c.text || c.hoverText) {
		e = ce("div");
		e.className = "progressbar-text";
		if (c.text) {
			var a = ce("del");
			ae(a, ct(c.text));
			ae(e, a)
		}
		if (c.hoverText) {
			var b = ce("ins");
			ae(b, ct(c.hoverText));
			ae(e, b)
		}
		ae(d, e)
	}
	e = ce("div");
	e.className = "progressbar-" + c.color;
	e.style.width = c.width + "%";
	ae(e, ct(String.fromCharCode(160)));
	ae(d, e);
	return d
}
function g_createReputationBar(g) {
	var f = g_createReputationBar.P;
	if (!g) {
		g = 0
	}
	g += 42000;
	if (g < 0) {
		g = 0
	} else {
		if (g > 84999) {
			g = 84999
		}
	}
	var e = g,
	h, b = 0;
	for (var d = 0, a = f.length; d < a; ++d) {
		if (f[d] > e) {
			break
		}
		if (d < a - 1) {
			e -= f[d];
			b = d + 1
		}
	}
	h = f[b];
	var c = {
		text: g_reputation_standings[b],
		hoverText: e + " / " + h,
		color: "rep" + b,
		width: parseInt(e / h * 100)
	};
	return g_createProgressBar(c)
}
g_createReputationBar.P = [36000, 3000, 3000, 3000, 6000, 12000, 21000, 999];
function g_createAchievementBar(b, d, a) {
	if (!b) {
		b = 0
	}
	var c = {
		text: b + (d > 0 ? " / " + d: ""),
		color: (a ? "rep7": "ach" + (d > 0 ? 0 : 1)),
		width: (d > 0 ? parseInt(b / d * 100) : 100)
	};
	return g_createProgressBar(c)
}
function g_setRatingLevel(f, e, b, c) {
	var d = prompt(sprintf(LANG.prompt_ratinglevel, 1, 80), e);
	if (d != null) {
		d |= 0;
		if (d != e && d >= 1 && d <= 80) {
			e = d;
			var a = g_convertRatingToPercent(e, b, c);
			a = (Math.round(a * 100) / 100);
			if (b != 12 && b != 37) {
				a += "%"
			}
			f.innerHTML = sprintf(LANG.tooltip_combatrating, a, e);
			f.onclick = g_setRatingLevel.bind(0, f, e, b, c)
		}
	}
}
function g_convertRatingToPercent(g, b, f, d) {
	var e = g_convertRatingToPercent.RB;
	if (g < 0) {
		g = 1
	} else {
		if (g > 80) {
			g = 80
		}
	}
	if ((b == 14 || b == 12 || b == 15) && g < 34) {
		g = 34
	}
	if ((b == 28 || b == 36) && (d == 2 || d == 6 || d == 7 || d == 11)) {
		e[b] /= 1.3
	}
	if (f < 0) {
		f = 0
	}
	var a;
	if (e[b] == null) {
		a = 0
	} else {
		var c;
		if (g > 70) {
			c = (82 / 52) * Math.pow((131 / 63), ((g - 70) / 10))
		} else {
			if (g > 60) {
				c = (82 / (262 - 3 * g))
			} else {
				if (g > 10) {
					c = ((g - 8) / 52)
				} else {
					c = 2 / 52
				}
			}
		}
		a = f / e[b] / c
	}
	return a
}
g_convertRatingToPercent.RB = {
	12 : 1.5,
	13 : 12,
	14 : 15,
	15 : 5,
	16 : 10,
	17 : 10,
	18 : 8,
	19 : 14,
	20 : 14,
	21 : 14,
	22 : 10,
	23 : 10,
	24 : 0,
	25 : 0,
	26 : 0,
	27 : 0,
	28 : 10,
	29 : 10,
	30 : 10,
	31 : 10,
	32 : 14,
	33 : 0,
	34 : 0,
	35 : 25,
	36 : 10,
	37 : 2.5,
	44 : 3.756097412109376
};
var g_statToJson = {
	1 : "health",
	2 : "mana",
	3 : "agi",
	4 : "str",
	5 : "int",
	6 : "spi",
	7 : "sta",
	12 : "defrtng",
	13 : "dodgertng",
	14 : "parryrtng",
	15 : "blockrtng",
	16 : "mlehitrtng",
	17 : "rgdhitrtng",
	18 : "splhitrtng",
	19 : "mlecritstrkrtng",
	20 : "rgdcritstrkrtng",
	21 : "splcritstrkrtng",
	22 : "_mlehitrtng",
	23 : "_rgdhitrtng",
	24 : "_splhitrtng",
	25 : "_mlecritstrkrtng",
	26 : "_rgdcritstrkrtng",
	27 : "_splcritstrkrtng",
	28 : "mlehastertng",
	29 : "rgdhastertng",
	30 : "splhastertng",
	31 : "hitrtng",
	32 : "critstrkrtng",
	33 : "_hitrtng",
	34 : "_critstrkrtng",
	35 : "resirtng",
	36 : "hastertng",
	37 : "exprtng",
	38 : "atkpwr",
	43 : "manargn",
	44 : "armorpenrtng",
	45 : "splpwr"
};
function g_convertScalingFactor(c, b, g, d, j) {
	var f = g_convertScalingFactor.SV;
	var e = g_convertScalingFactor.SD;
	var i = {},
	h = f[c],
	a = e[g];
	if (!a || !(d >= 0 && d <= 9)) {
		i.v = h[b]
	} else {
		i.n = g_statToJson[a[d]];
		i.s = a[d];
		i.v = Math.floor(h[b] * a[d + 10] / 10000)
	}
	return (j ? i: i.v)
}
g_convertScalingFactor.SV = {
	1 : [2, 2, 1, 3, 1, 10, 32, 32, 64, 6, 8, 6, 8, 6, 8, 1, 0, 0, 1, 7, 13, 43, 43, 85],
	2 : [3, 3, 1, 3, 1, 12, 35, 35, 70, 6, 9, 6, 9, 7, 9, 2, 0, 0, 2, 8, 16, 47, 47, 93],
	3 : [3, 3, 1, 4, 1, 13, 39, 39, 76, 7, 9, 7, 9, 7, 10, 3, 0, 0, 2, 9, 17, 52, 52, 101],
	4 : [3, 3, 1, 4, 1, 14, 42, 42, 83, 7, 10, 7, 10, 8, 11, 3, 0, 0, 2, 9, 19, 56, 56, 111],
	5 : [4, 4, 2, 5, 2, 16, 45, 45, 89, 8, 10, 8, 10, 8, 12, 4, 0, 0, 3, 11, 21, 60, 60, 119],
	6 : [4, 4, 2, 5, 2, 17, 48, 48, 95, 8, 11, 8, 11, 9, 12, 5, 0, 0, 3, 11, 23, 64, 64, 127],
	7 : [4, 4, 3, 6, 2, 19, 51, 51, 101, 9, 11, 9, 11, 9, 13, 6, 0, 0, 3, 13, 25, 68, 68, 135],
	8 : [5, 5, 3, 7, 2, 20, 54, 54, 107, 9, 12, 9, 12, 9, 14, 7, 0, 0, 4, 13, 27, 72, 72, 143],
	9 : [5, 5, 3, 7, 2, 22, 56, 56, 113, 10, 13, 10, 13, 10, 15, 7, 0, 0, 4, 15, 29, 75, 75, 151],
	10 : [6, 6, 3, 8, 2, 23, 57, 57, 119, 10, 13, 10, 13, 10, 16, 8, 0, 0, 4, 15, 31, 76, 76, 159],
	11 : [6, 6, 4, 8, 3, 24, 59, 59, 125, 11, 14, 11, 14, 11, 16, 9, 0, 0, 5, 16, 32, 79, 79, 167],
	12 : [7, 7, 4, 9, 3, 25, 60, 60, 131, 11, 15, 11, 15, 12, 17, 10, 0, 0, 5, 17, 33, 80, 80, 175],
	13 : [7, 7, 4, 9, 3, 26, 61, 61, 133, 12, 16, 12, 16, 12, 18, 10, 0, 0, 5, 17, 35, 81, 81, 177],
	14 : [8, 8, 4, 10, 3, 27, 63, 63, 136, 12, 16, 12, 16, 13, 19, 11, 0, 0, 6, 18, 36, 84, 84, 181],
	15 : [8, 8, 5, 11, 3, 28, 64, 64, 138, 13, 17, 13, 17, 13, 20, 12, 0, 0, 6, 19, 37, 85, 85, 184],
	16 : [8, 8, 5, 11, 4, 29, 65, 65, 141, 14, 18, 14, 18, 14, 21, 13, 0, 0, 6, 19, 39, 87, 87, 188],
	17 : [9, 9, 5, 12, 4, 30, 67, 67, 143, 14, 19, 14, 19, 14, 22, 14, 0, 0, 7, 20, 40, 89, 89, 191],
	18 : [9, 9, 5, 12, 4, 30, 68, 68, 146, 15, 19, 15, 19, 15, 23, 14, 0, 0, 7, 20, 40, 91, 91, 195],
	19 : [10, 10, 6, 13, 4, 31, 69, 69, 148, 15, 20, 15, 20, 15, 24, 15, 0, 0, 7, 21, 41, 92, 92, 197],
	20 : [10, 10, 6, 14, 4, 32, 71, 71, 151, 16, 21, 16, 21, 16, 25, 16, 0, 0, 8, 21, 43, 95, 95, 201],
	21 : [11, 11, 6, 14, 5, 33, 72, 72, 153, 16, 21, 16, 21, 16, 26, 17, 0, 0, 8, 22, 44, 96, 96, 204],
	22 : [11, 11, 6, 15, 5, 34, 73, 73, 156, 17, 22, 17, 22, 17, 27, 18, 0, 0, 8, 23, 45, 97, 97, 208],
	23 : [12, 12, 7, 15, 5, 34, 75, 75, 158, 17, 23, 17, 23, 17, 28, 18, 0, 0, 9, 23, 45, 100, 100, 211],
	24 : [12, 12, 7, 16, 5, 35, 76, 76, 161, 18, 23, 18, 23, 18, 29, 19, 0, 0, 9, 23, 47, 101, 101, 215],
	25 : [12, 12, 7, 17, 5, 35, 77, 77, 163, 19, 24, 19, 24, 19, 29, 20, 0, 0, 9, 23, 47, 103, 103, 217],
	26 : [13, 13, 7, 17, 5, 36, 78, 78, 166, 19, 25, 19, 25, 19, 30, 21, 0, 0, 10, 24, 48, 104, 104, 221],
	27 : [13, 13, 8, 18, 6, 37, 80, 80, 168, 20, 26, 20, 26, 20, 31, 22, 0, 0, 10, 25, 49, 107, 107, 224],
	28 : [14, 14, 8, 18, 6, 37, 81, 81, 171, 21, 27, 21, 27, 21, 32, 22, 0, 0, 10, 25, 49, 108, 108, 228],
	29 : [14, 14, 8, 19, 6, 38, 82, 82, 173, 22, 29, 22, 29, 22, 32, 23, 0, 0, 11, 25, 51, 109, 109, 231],
	30 : [15, 15, 8, 20, 6, 38, 84, 84, 176, 23, 30, 23, 30, 22, 33, 24, 0, 0, 11, 25, 51, 112, 112, 235],
	31 : [15, 15, 9, 20, 6, 39, 85, 85, 178, 24, 31, 24, 31, 23, 34, 25, 0, 0, 11, 26, 52, 113, 113, 237],
	32 : [16, 16, 9, 21, 7, 40, 86, 86, 181, 25, 32, 25, 32, 24, 34, 25, 0, 0, 12, 27, 53, 115, 115, 241],
	33 : [16, 16, 9, 21, 7, 41, 88, 88, 184, 25, 33, 25, 33, 25, 35, 26, 0, 0, 12, 27, 55, 117, 117, 245],
	34 : [16, 16, 9, 22, 7, 43, 90, 90, 187, 26, 34, 26, 34, 26, 36, 27, 0, 0, 12, 29, 57, 120, 120, 249],
	35 : [17, 17, 10, 23, 7, 44, 91, 91, 190, 27, 35, 27, 35, 26, 37, 28, 0, 0, 13, 29, 59, 121, 121, 253],
	36 : [17, 17, 10, 23, 7, 44, 93, 93, 193, 28, 36, 28, 36, 27, 38, 29, 0, 0, 13, 29, 59, 124, 124, 257],
	37 : [18, 18, 10, 24, 8, 46, 95, 95, 196, 28, 37, 28, 37, 28, 39, 29, 0, 0, 13, 31, 61, 127, 127, 261],
	38 : [18, 18, 10, 24, 8, 47, 97, 97, 199, 29, 38, 29, 38, 28, 40, 30, 0, 0, 14, 31, 63, 129, 129, 265],
	39 : [19, 19, 11, 25, 8, 48, 99, 99, 202, 29, 38, 29, 38, 29, 41, 31, 0, 0, 14, 32, 64, 132, 132, 269],
	40 : [19, 19, 11, 26, 8, 49, 100, 205, 360, 30, 39, 30, 39, 30, 42, 32, 0, 0, 14, 33, 65, 133, 273, 480],
	41 : [20, 20, 11, 26, 8, 50, 102, 209, 368, 31, 40, 31, 40, 30, 43, 33, 0, 0, 15, 33, 67, 136, 279, 491],
	42 : [20, 20, 11, 27, 8, 51, 104, 213, 375, 31, 41, 31, 41, 31, 44, 33, 0, 0, 15, 34, 68, 139, 284, 500],
	43 : [20, 20, 12, 27, 9, 52, 106, 217, 382, 32, 41, 32, 41, 31, 45, 34, 0, 0, 15, 35, 69, 141, 289, 509],
	44 : [21, 21, 12, 28, 9, 53, 108, 221, 389, 32, 42, 32, 42, 32, 47, 35, 0, 0, 16, 35, 71, 144, 295, 519],
	45 : [21, 21, 12, 28, 9, 54, 109, 225, 396, 33, 43, 33, 43, 33, 48, 36, 0, 0, 16, 36, 72, 145, 300, 528],
	46 : [22, 22, 12, 29, 9, 55, 111, 229, 403, 34, 44, 34, 44, 33, 50, 37, 0, 0, 16, 37, 73, 148, 305, 537],
	47 : [22, 22, 13, 30, 9, 56, 113, 233, 410, 34, 45, 34, 45, 34, 51, 37, 0, 0, 17, 37, 75, 151, 311, 547],
	48 : [23, 23, 13, 30, 10, 57, 115, 238, 418, 35, 45, 35, 45, 34, 52, 38, 0, 0, 17, 38, 76, 153, 317, 557],
	49 : [23, 23, 13, 31, 10, 58, 117, 242, 425, 35, 46, 35, 46, 35, 53, 39, 0, 0, 17, 39, 77, 156, 323, 567],
	50 : [24, 24, 13, 31, 10, 59, 118, 246, 433, 36, 47, 36, 47, 36, 54, 40, 0, 0, 18, 39, 79, 157, 328, 577],
	51 : [24, 24, 14, 32, 10, 60, 120, 250, 440, 37, 48, 37, 48, 36, 54, 40, 0, 0, 18, 40, 80, 160, 333, 587],
	52 : [24, 24, 14, 33, 10, 61, 122, 254, 448, 37, 49, 37, 49, 37, 55, 41, 0, 0, 18, 41, 81, 163, 339, 597],
	53 : [25, 25, 14, 33, 11, 62, 124, 258, 455, 38, 49, 38, 49, 38, 57, 42, 0, 0, 19, 41, 83, 165, 344, 607],
	54 : [25, 25, 14, 34, 11, 63, 126, 262, 463, 38, 50, 38, 50, 38, 58, 43, 0, 0, 19, 42, 84, 168, 349, 617],
	55 : [26, 26, 15, 34, 11, 64, 127, 266, 470, 39, 51, 39, 51, 39, 59, 44, 0, 0, 19, 43, 85, 169, 355, 627],
	56 : [26, 26, 15, 35, 11, 65, 129, 270, 478, 40, 52, 40, 52, 39, 61, 44, 0, 0, 20, 43, 87, 172, 360, 637],
	57 : [27, 27, 15, 36, 11, 66, 131, 274, 485, 40, 53, 40, 53, 40, 62, 45, 0, 0, 20, 44, 88, 175, 365, 647],
	58 : [34, 34, 19, 46, 14, 83, 159, 344, 611, 50, 65, 46, 60, 48, 85, 46, 0, 0, 25, 55, 111, 212, 459, 815],
	59 : [36, 36, 20, 47, 15, 86, 164, 356, 633, 51, 67, 47, 61, 50, 88, 52, 0, 0, 27, 57, 115, 219, 475, 844],
	60 : [37, 37, 21, 49, 16, 88, 169, 368, 655, 53, 68, 47, 62, 51, 91, 57, 0, 0, 28, 59, 117, 225, 491, 873],
	61 : [39, 39, 22, 51, 16, 91, 174, 380, 677, 54, 70, 48, 63, 52, 94, 63, 0, 0, 29, 61, 121, 232, 507, 903],
	62 : [40, 40, 22, 53, 17, 94, 178, 392, 699, 55, 72, 49, 64, 53, 97, 68, 0, 0, 30, 63, 125, 237, 523, 932],
	63 : [41, 41, 23, 54, 17, 97, 183, 404, 721, 56, 73, 50, 65, 54, 100, 73, 0, 0, 31, 65, 129, 244, 539, 961],
	64 : [42, 42, 24, 55, 18, 100, 187, 416, 742, 58, 75, 50, 66, 55, 104, 80, 0, 0, 31, 67, 133, 249, 555, 989],
	65 : [43, 43, 24, 57, 18, 102, 192, 428, 764, 60, 78, 52, 67, 57, 109, 89, 0, 0, 32, 68, 136, 256, 571, 1019],
	66 : [44, 44, 25, 58, 18, 105, 197, 440, 786, 62, 81, 53, 69, 59, 113, 98, 0, 0, 33, 70, 140, 263, 587, 1048],
	67 : [45, 45, 25, 59, 19, 108, 203, 452, 808, 65, 84, 54, 71, 61, 117, 107, 0, 0, 34, 72, 144, 271, 603, 1077],
	68 : [62, 62, 36, 84, 26, 157, 294, 654, 1169, 91, 119, 70, 91, 82, 168, 220, 0, 0, 47, 105, 209, 392, 872, 1559],
	69 : [64, 64, 37, 87, 27, 161, 303, 675, 1206, 93, 121, 71, 92, 84, 172, 228, 0, 0, 48, 107, 215, 404, 900, 1608],
	70 : [67, 67, 39, 90, 28, 166, 312, 695, 1242, 95, 124, 72, 94, 86, 175, 238, 0, 0, 50, 111, 221, 416, 927, 1656],
	71 : [69, 69, 40, 93, 29, 171, 321, 715, 1278, 97, 127, 73, 95, 88, 179, 246, 0, 0, 52, 114, 228, 428, 953, 1704],
	72 : [72, 72, 42, 97, 30, 176, 331, 736, 1315, 99, 129, 75, 97, 90, 183, 255, 0, 0, 54, 117, 235, 441, 981, 1753],
	73 : [75, 75, 43, 101, 32, 181, 340, 756, 1351, 102, 132, 76, 99, 92, 187, 265, 0, 0, 56, 121, 241, 453, 1008, 1801],
	74 : [78, 78, 45, 104, 33, 186, 349, 776, 1387, 104, 135, 77, 100, 94, 191, 275, 0, 0, 58, 124, 248, 465, 1035, 1849],
	75 : [81, 81, 46, 108, 34, 191, 358, 797, 1423, 106, 138, 79, 102, 96, 196, 285, 0, 0, 60, 127, 255, 477, 1063, 1897],
	76 : [84, 84, 48, 113, 35, 196, 367, 817, 1460, 109, 141, 80, 104, 98, 200, 296, 0, 0, 63, 131, 261, 489, 1089, 1947],
	77 : [87, 87, 50, 117, 37, 200, 376, 837, 1496, 111, 145, 81, 106, 101, 205, 307, 0, 0, 65, 133, 267, 501, 1116, 1995],
	78 : [90, 90, 52, 121, 38, 205, 386, 858, 1532, 114, 148, 83, 108, 103, 210, 319, 0, 0, 68, 137, 273, 515, 1144, 2043],
	79 : [94, 94, 54, 126, 40, 208, 390, 868, 1551, 117, 152, 85, 110, 105, 215, 331, 0, 0, 71, 139, 277, 520, 1157, 2068],
	80 : [97, 97, 56, 131, 41, 210, 395, 878, 1570, 120, 156, 86, 112, 108, 220, 343, 0, 0, 73, 140, 280, 527, 1171, 2093]
};
g_convertScalingFactor.SD = {
	1 : [4, 7, 32, -1, -1, -1, -1, -1, -1, -1, 5259, 7888, 5259, 0, 0, 0, 0, 0, 0, 0, 80],
	2 : [38, 3, 31, -1, -1, -1, -1, -1, -1, -1, 14532, 4106, 3193, 0, 0, 0, 0, 0, 0, 0, 80],
	3 : [38, 7, 32, -1, -1, -1, -1, -1, -1, -1, 5068, 5065, 6666, 0, 0, 0, 0, 0, 0, 0, 80],
	4 : [38, 32, 31, -1, -1, -1, -1, -1, -1, -1, 13332, 4767, 3900, 0, 0, 0, 0, 0, 0, 0, 80],
	5 : [7, 5, 32, -1, -1, -1, -1, -1, -1, -1, 7150, 5850, 4766, 0, 0, 0, 0, 0, 0, 0, 80],
	6 : [7, 5, 43, -1, -1, -1, -1, -1, -1, -1, 5067, 7601, 1350, 0, 0, 0, 0, 0, 0, 0, 80],
	7 : [4, 7, 32, -1, -1, -1, -1, -1, -1, -1, 6666, 6666, 4445, 0, 0, 0, 0, 0, 0, 0, 80],
	8 : [38, 3, 7, 5, -1, -1, -1, -1, -1, -1, 10518, 5258, 5641, 3076, 0, 0, 0, 0, 0, 0, 80],
	9 : [45, 7, 5, 43, -1, -1, -1, -1, -1, -1, 5201, 6666, 4444, 1778, 0, 0, 0, 0, 0, 0, 80],
	10 : [38, 31, 7, -1, -1, -1, -1, -1, -1, -1, 14532, 4106, 4789, 0, 0, 0, 0, 0, 0, 0, 80],
	11 : [45, 7, 5, 6, -1, -1, -1, -1, -1, -1, 6153, 3996, 3997, 5258, 0, 0, 0, 0, 0, 0, 80],
	12 : [0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0, 10],
	13 : [42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10],
	14 : [38, 39, 40, 41, 42, 43, 0, 0, 0, 0, 6500, 6500, 10000, 10000, 10000, 10000, 0, 0, 0, 0, 15],
	15 : [40, 41, 42, 0, 0, 0, 0, 0, 0, 0, 4200, 5200, 6200, 0, 0, 0, 0, 0, 0, 0, 10],
	16 : [45, 7, 5, 6, -1, -1, -1, -1, -1, -1, 6153, 3996, 3997, 5258, 0, 0, 0, 0, 0, 0, 80],
	21 : [12, 13, 14, 15, 16, 0, 0, 0, 0, 0, 5000, 6000, 7000, 8000, 9000, 0, 0, 0, 0, 0, 10],
	41 : [3, 4, 5, 6, 7, 12, 13, 14, 15, 16, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10],
	42 : [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10],
	43 : [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10],
	102 : [44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15],
	103 : [3, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	104 : [32, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80],
	105 : [13, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	221 : [4, 7, 32, 36, -1, -1, -1, -1, -1, -1, 4844, 7266, 4106, 3193, 0, 0, 0, 0, 0, 0, 80],
	222 : [3, 44, 7, -1, -1, -1, -1, -1, -1, -1, 5259, 3506, 5259, 0, 0, 0, 0, 0, 0, 0, 80],
	223 : [7, 5, 32, -1, -1, -1, -1, -1, -1, -1, 4859, 5732, 2519, 0, 0, 0, 0, 0, 0, 0, 80],
	224 : [38, 3, 31, 7, -1, -1, -1, -1, -1, -1, 9688, 4844, 3193, 6159, 0, 0, 0, 0, 0, 0, 80],
	241 : [45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80],
	251 : [36, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6666, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80],
	271 : [45, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7800, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80],
	291 : [38, -1, -1, -1, -1, -1, -1, -1, -1, -1, 23252, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	292 : [38, 7, 35, -1, -1, -1, -1, -1, -1, -1, 10518, 7888, 5258, 0, 0, 0, 0, 0, 0, 0, 80],
	293 : [4, 7, 35, -1, -1, -1, -1, -1, -1, -1, 7266, 4789, 4106, 0, 0, 0, 0, 0, 0, 0, 80],
	294 : [38, 32, 35, -1, -1, -1, -1, -1, -1, -1, 8212, 7266, 3193, 0, 0, 0, 0, 0, 0, 0, 80],
	295 : [7, 35, 43, -1, -1, -1, -1, -1, -1, -1, 6666, 6666, 1777, 0, 0, 0, 0, 0, 0, 0, 80],
	296 : [7, 31, 35, -1, -1, -1, -1, -1, -1, -1, 7888, 5259, 5258, 0, 0, 0, 0, 0, 0, 0, 80],
	297 : [35, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5259, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80],
	298 : [35, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6667, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80],
	299 : [35, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6667, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80],
	300 : [4, 7, 35, -1, -1, -1, -1, -1, -1, -1, 5259, 7888, 5258, 0, 0, 0, 0, 0, 0, 0, 80],
	301 : [45, 7, 43, 35, -1, -1, -1, -1, -1, -1, 5200, 6666, 1776, 4444, 0, 0, 0, 0, 0, 0, 80],
	302 : [38, 3, 7, 35, -1, -1, -1, -1, -1, -1, 8888, 4444, 6668, 4444, 0, 0, 0, 0, 0, 0, 80],
	303 : [45, 7, 5, 35, -1, -1, -1, -1, -1, -1, 6153, 5259, 3506, 5258, 0, 0, 0, 0, 0, 0, 80],
	304 : [38, 3, 7, 35, -1, -1, -1, -1, -1, -1, 8888, 3899, 6666, 4767, 0, 0, 0, 0, 0, 0, 80],
	305 : [45, 7, 6, 35, -1, -1, -1, -1, -1, -1, 6153, 5259, 3506, 5258, 0, 0, 0, 0, 0, 0, 80],
	306 : [45, 7, 32, 35, -1, -1, -1, -1, -1, -1, 6153, 5259, 3506, 5258, 0, 0, 0, 0, 0, 0, 80],
	311 : [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	331 : [38, 3, 7, 5, -1, -1, -1, -1, -1, -1, 10518, 5258, 5259, 3506, 0, 0, 0, 0, 0, 0, 80],
	332 : [45, 7, 5, 43, -1, -1, -1, -1, -1, -1, 6153, 3997, 3997, 2629, 0, 0, 0, 0, 0, 0, 80],
	333 : [4, 7, 32, -1, -1, -1, -1, -1, -1, -1, 5996, 5996, 5258, 0, 0, 0, 0, 0, 0, 0, 80],
	334 : [45, 7, 5, 6, -1, -1, -1, -1, -1, -1, 6153, 3997, 3997, 5259, 0, 0, 0, 0, 0, 0, 80],
	335 : [38, 7, 31, -1, -1, -1, -1, -1, -1, -1, 10518, 7888, 5259, 0, 0, 0, 0, 0, 0, 0, 80],
	336 : [45, 7, 5, 6, -1, -1, -1, -1, -1, -1, 6153, 3997, 3997, 5259, 0, 0, 0, 0, 0, 0, 80],
	351 : [3, 38, 7, 32, -1, -1, -1, -1, -1, -1, 5259, 7012, 7889, 3506, 0, 0, 0, 0, 0, 0, 80],
	352 : [3, 44, 7, 38, -1, -1, -1, -1, -1, -1, 5259, 3506, 7889, 7012, 0, 0, 0, 0, 0, 0, 80],
	371 : [32, 31, 7, -1, -1, -1, -1, -1, -1, -1, 7266, 4106, 4789, 0, 0, 0, 0, 0, 0, 0, 80]
};
function g_setJsonItemLevel(t, a) {
	if (!t.scadist || !t.scaflags) {
		return
	}
	t.bonuses = t.bonuses || {};
	var c = -1,
	r = -1,
	k = -1,
	p = -1,
	f = 262175,
	o = 16253408,
	d = 32256,
	g = 32768,
	b = 5120;
	for (var h = 0; h < 24; ++h) {
		var l = 1 << h;
		if (l & t.scaflags) {
			if (l & f && c < 0) {
				c = h
			} else {
				if (l & o && r < 0) {
					r = h
				} else {
					if (l & d && k < 0) {
						k = h
					} else {
						if (l & g && p < 0) {
							p = h
						}
					}
				}
			}
		}
	}
	if (c >= 0) {
		for (var h = 0; h < 10; ++h) {
			var q = g_convertScalingFactor(a, c, t.scadist, h, 1);
			if (q.n) {
				t[q.n] = q.v
			}
			t.bonuses[q.s] = q.v
		}
	}
	if (r >= 0) {
		t.armor = g_convertScalingFactor(a, r)
	}
	if (k >= 0) {
		var j = (t.scaflags & b ? 0.2 : 0.3),
		m = (t.mledps ? "mle": "rgd");
        t.speed /= t.speed > 1000 ? 1000 : 1;               // summary expects speed in sec; different version of script is different
		t.dps = t[m + "dps"] = g_convertScalingFactor(a, k);
		t.dmgmin = t[m + "dmgmin"] = Math.floor(t.dps * t.speed * (1 - j));
		t.dmgmax = t[m + "dmgmax"] = Math.floor(t.dps * t.speed * (1 + j))

        if (t.feratkpwr) {                                  // yes thats custom too..
            t.feratkpwr = Math.max(0, Math.floor((t.dps - 54.8) * 14));
        }
	}
	if (p >= 0) {
		t.splpwr = t.bonuses[45] = g_convertScalingFactor(a, p)
	}
	if (t.gearscore != null) {
		if (t._gearscore == null) {
			t._gearscore = t.gearscore
		}
		var e = Math.min(80, a + 1);
		if (e >= 70) {
			n = ((e - 70) * 9.5) + 105
		} else {
			if (e >= 60) {
				n = ((e - 60) * 4.5) + 60
			} else {
				n = e + 5
			}
		}
		t.gearscore = (t._gearscore * n) / 1.8
	}
}
function g_setTooltipItemLevel(a, g) {
	var d = typeof a;
	if (d == "number") {
		if (isset("g_items") && g_items[a] && g_items[a]["tooltip_" + g_locale.name]) {
			a = g_items[a]["tooltip_" + g_locale.name]
		} else {
			return a
		}
	} else {
		if (d != "string") {
			return a
		}
	}
	d = a.match(/<!--\?\d+:\d+:\d+:\d+(:(\d+):(\d+))?-->/);
	if (!d) {
		return a
	}
	var b = d[2] || 0,
	c = d[3] || 0;
	if (b && c) {
		var f = a.match(/<!--spd-->(\d\.\d+)/);
		if (f) {
			f = Math.floor(parseFloat(f[1]) * 1000)
		}
		var e = {
			scadist: b,
			scaflags: c,
			speed: f || 0
		};
		g_setJsonItemLevel(e, g);
		a = a.replace(/(<!--asc(\d+)-->)([^<]+)/, function (j, h, i) {
			d = i;
			if (g < 40 && (i == 3 || i == 4)) {--d
			}
			return h + g_itemset_types[d]
		});
		a = a.replace(/(<!--dmg-->)\d+(\D+)\d+/, function (j, h, i) {
			return h + e.dmgmin + i + e.dmgmax
		});
		a = a.replace(/(<!--dps-->\D*?)(\d+\.\d)/, function (i, h) {
			return h + e.dps.toFixed(1)
		});
		a = a.replace(/<span class="c11"><!--fap-->(\D*?)(\d+)(\D*?)<\/span>(<br \/>)?/i, function (l, h, i, m, j) {
			var k;
			i = Math.floor((e.dps - 54.8) * 14);
			if (e.dps > 54.8 && i > 0) {
				k = "";
				j = (j ? "<br />": "")
			} else {
				i = 0;
				k = ' style="display: none"';
				j = (j ? "<!--br-->": "")
			}
			return '<span class="c11"' + k + "><!--fap-->" + h + i + m + "</span>" + j
		});
		a = a.replace(/(<!--amr-->)\d+/, function (i, h) {
			return h + e.armor
		});
		a = a.replace(/<span><!--stat(\d+)-->[-+]\d+(\D*?)<\/span>(<!--e-->)?(<!--ps-->)?(<br ?\/?>)?/gi, function (l, i, h, o, p, j) {
			var k, m = e.bonuses[i];
			if (m) {
				m = (m > 0 ? "+": "-") + m;
				k = "";
				j = (j ? "<br />": "")
			} else {
				m = "+0";
				k = ' style="display: none"';
				j = (j ? "<!--br-->": "")
			}
			return "<span" + k + "><!--stat" + i + "-->" + m + h + "</span>" + (o || "") + (p || "") + j
		});
		a = a.replace(/<span class="q2">(.*?)<!--rtg(\d+)-->\d+(.*?)<\/span>(<br \/>)?/gi, function (h, k, m, p, l, i, q) {
			var j, o = e.bonuses[m];
			if (o) {
				j = "";
				q = (q ? "<br />": "")
			} else {
				j = ' style="display: none"';
				q = (q ? "<!--br-->": "")
			}
			return '<span class="q2"' + j + ">" + k + "<!--rtg" + m + "-->" + o + p + "</span>" + q
		})
	}
	a = a.replace(/(<!--rtg%(\d+)-->)([\.0-9]+)/g, function (j, h, k, i) {
		d = a.match(new RegExp("<!--rtg" + k + "-->(\\d+)"));
		if (!d) {
			return j
		}
		return h + Math.round(g_convertRatingToPercent(g, k, d[1]) * 100) / 100
	});
	a = a.replace(/(<!--\?\d+:\d+:\d+:)\d+((:\d+:\d+)?-->)/, "$1" + g + "$2");
	a = a.replace(/<!--lvl-->\d+/g, "<!--lvl-->" + g);
	return a
}
function g_enhanceTooltip(a, c) {
	var b = typeof a;
	if (b == "number") {
		if (isset("g_items") && g_items[a] && g_items[a]["tooltip_" + g_locale.name]) {
			a = g_items[a]["tooltip_" + g_locale.name]
		} else {
			return a
		}
	} else {
		if (b != "string") {
			return a
		}
	}
	if (c) {
		a = a.replace(/<span class="q2"><!--addamr(\d+)--><span>.*?<\/span><\/span>/i, function (d, e) {
			return '<span class="q2 tip" onmouseover="Tooltip.showAtCursor(event, sprintf(LANG.tooltip_armorbonus, ' + e + '), 0, 0, \'q\')" onmousemove="Tooltip.cursorUpdate(event)" onmouseout="Tooltip.hide()">' + d + "</span>"
		});
		a = a.replace(/\(([^\)]*?<!--lvl-->[^\(]*?)\)/gi, function (e, d) {
			return '(<a href="javascript:;" onmousedown="return false" class="tip" style="color: white; cursor: pointer" onclick="g_staticTooltipLevelClick(this)">' + d + "</a>)"
		})
	}
	return a
}
function g_staticTooltipLevelClick(g, f) {
	while (g.className.indexOf("tooltip") == -1) {
		g = g.parentNode
	}
	var c = g.innerHTML;
	c = c.match(/<!--\?(\d+):(\d+):(\d+):(\d+)/);
	if (!c) {
		return
	}
	var e = parseInt(c[1]),
	d = parseInt(c[2]),
	b = parseInt(c[3]),
	a = parseInt(c[4]);
	if (!f) {
		f = prompt(sprintf(LANG.prompt_ratinglevel, d, b), a)
	}
	f = parseInt(f);
	if (isNaN(f)) {
		return
	}
	if (f == a || f < d || f > b) {
		return
	}
	c = g_setTooltipItemLevel(g_items[e]["tooltip_" + g_locale.name], f);
	c = g_enhanceTooltip(c, true);
	g.innerHTML = "<table><tr><td>" + c + '</td><th style="background-position: top right"></th></tr><tr><th style="background-position: bottom left"></th><th style="background-position: bottom right"></th></tr></table>';
	Tooltip.fixSafe(g, 1, 1)
}
function g_getMoneyHtml(c) {
	var b = 0,
	a = "";
	if (c >= 10000) {
		b = 1;
		a += '<span class="moneygold">' + Math.floor(c / 10000) + "</span>";
		c %= 10000
	}
	if (c >= 100) {
		if (b) {
			a += " "
		} else {
			b = 1
		}
		a += '<span class="moneysilver">' + Math.floor(c / 100) + "</span>";
		c %= 100
	}
	if (c >= 1) {
		if (b) {
			a += " "
		} else {
			b = 1
		}
		a += '<span class="moneycopper">' + c + "</span>"
	}
	return a
}
function g_getMoneyHtml2(f, c, b, a) {
	var e = g_getMoneyHtml(f);
	if (c !== undefined && c !== null && c != 0) {
		if (e.length > 0) {
			e += " "
		}
		e += '<span class="money' + (c < 0 ? "horde": "alliance") + ' tip" onmouseover="Listview.funcBox.moneyHonorOver(event)" onmousemove="Tooltip.cursorUpdate(event)" onmouseout="Tooltip.hide()">' + g_numberFormat(Math.abs(c)) + "</span>"
	}
	if (b !== undefined && b !== null && b > 0) {
		if (e.length > 0) {
			e += " "
		}
		e += '<span class="moneyarena tip" onmouseover="Listview.funcBox.moneyArenaOver(event)" onmousemove="Tooltip.cursorUpdate(event)" onmouseout="Tooltip.hide()">' + g_numberFormat(b) + "</span>"
	}
	if (a !== undefined && a !== null && a.length > 0) {
		for (var d = 0; d < a.length; ++d) {
			if (e.length > 0) {
				e += " "
			}
			var h = a[d][0];
			var g = a[d][1];
			e += '<a href="?item=' + h + '" class="moneyitem" style="background-image: url(images/icons/tiny/' + (g_items[h] && g_items[h]["icon"] ? g_items[h]["icon"] : "inv_misc_questionmark").toLowerCase() + '.gif)">' + g + "</a>"
		}
	}
	return e
}
function g_numberFormat(f, b, l, h) {
	var c = f,
	a = b;
	var e = function (r, q) {
		var i = Math.pow(10, q);
		return (Math.round(r * i) / i).toString()
	};
	c = !isFinite( + c) ? 0 : +c;
	a = !isFinite( + a) ? 0 : Math.abs(a);
	var p = (typeof h === "undefined") ? ",": h;
	var d = (typeof l === "undefined") ? ".": l;
	var o = (a > 0) ? e(c, a) : e(Math.round(c), a);
	var m = e(Math.abs(c), a);
	var k, g;
	if (m >= 1000) {
		k = m.split(/\D/);
		g = k[0].length % 3 || 3;
		k[0] = o.slice(0, g + (c < 0)) + k[0].slice(g).replace(/(\d{3})/g, p + "$1");
		o = k.join(d)
	} else {
		o = o.replace(".", d)
	}
	var j = o.indexOf(d);
	if (a >= 1 && j !== -1 && (o.length - j - 1) < a) {
		o += new Array(a - (o.length - j - 1)).join(0) + "0"
	} else {
		if (a >= 1 && j === -1) {
			o += d + new Array(a).join(0) + "0"
		}
	}
	return o
}
function g_getPatchVersionIndex(e) {
	var d = g_getPatchVersion;
	var b = 0,
	c = d.T.length - 2,
	a;
	while (c > b) {
		a = Math.floor((c + b) / 2);
		if (e >= d.T[a] && e < d.T[a + 1]) {
			return a
		}
		if (e >= d.T[a]) {
			b = a + 1
		} else {
			c = a - 1
		}
	}
	a = Math.ceil((c + b) / 2);
	return a
}
function g_getPatchVersion(b) {
	var a = g_getPatchVersionIndex(b);
	return g_getPatchVersion.V[a]
}
g_getPatchVersion.V = [
    "1.12.0",
    "1.12.1",
    "1.12.2",
	"2.0.1",
	"2.0.3",
	"2.0.4",
	"2.0.5",
	"2.0.6",
	"2.0.7",
	"2.0.8",
	"2.0.10",
	"2.0.12",
	"2.1.0",
	"2.1.1",
	"2.1.2",
	"2.1.3",
	"2.2.0",
	"2.2.2",
	"2.2.3",
	"2.3.0",
	"2.3.2",
	"2.3.3",
	"2.4.0",
	"2.4.1",
	"2.4.2",
	"2.4.3",
	"3.0.2",
	"3.0.3",
	"3.0.8",
	"3.0.9",
	"3.1.0",
	"3.1.1",
	"3.1.2",
	"3.1.3",
	"3.2.0",
	"3.2.2",
	"3.3.0",
    "???"
];
g_getPatchVersion.T = [
    1153540800000,
	1159243200000,
	1160712000000,
	1165294800000,
	1168318800000,
	1168578000000,
	1168750800000,
	1169528400000,
	1171342800000,
	1171602000000,
	1173157200000,
	1175572800000,
	1179806400000,
	1181016000000,
	1182225600000,
	1184040000000,
	1190692800000,
	1191297600000,
	1191902400000,
	1194930000000,
	1199768400000,
	1200978000000,
	1206417600000,
	1207022400000,
	1210651200000,
	1216094400000,
	1223956800000,
	1225774800000,
	1232427600000,
	1234242000000,
	1239681600000,
	1240286400000,
	1242705600000,
	1243915200000,
	1249358400000,
	1253595600000,
	1260266400000,
	9999999999999
];
function g_expandSite() {
	ge("wrapper").className = "nosidebar";
	var a = ge("topbar-expand");
	if (a) {
		de(a)
	}
	a = ge("sidebar");
	if (a) {
		de(a)
	}
}
function g_insertTag(d, a, i, j) {
	var b = $(d);
	b.focus();
	if (b.selectionStart != null) {
		var l = b.selectionStart,
		h = b.selectionEnd,
		k = b.scrollLeft,
		c = b.scrollTop;
		var g = b.value.substring(l, h);
		if (typeof j == "function") {
			g = j(g)
		}
		b.value = b.value.substr(0, l) + a + g + i + b.value.substr(h);
		b.selectionStart = b.selectionEnd = h + a.length;
		b.scrollLeft = k;
		b.scrollTop = c
	} else {
		if (document.selection && document.selection.createRange) {
			var f = document.selection.createRange();
			if (f.parentElement() != b) {
				return
			}
			var g = f.text;
			if (typeof j == "function") {
				g = j(g)
			}
			f.text = a + g + i
		}
	}
	if (b.onkeyup) {
		b.onkeyup()
	}
}
function g_getLocaleFromDomain(a) {
	var c = g_getLocaleFromDomain.L;
	if (a) {
		var b = a.indexOf(".");
		if (b != -1) {
			a = a.substring(0, b)
		}
	}
	return (c[a] ? c[a] : 0)
}
g_getLocaleFromDomain.L = {
   www: 0,
	fr: 2,
	de: 3,
	es: 6,
	ru: 8
};
function g_getDomainFromLocale(a) {
	var b;
	if (g_getDomainFromLocale.L) {
		b = g_getDomainFromLocale.L
	} else {
		b = g_getDomainFromLocale.L = g_createReverseLookupJson(g_getLocaleFromDomain.L)
	}
	return (b[a] ? b[a] : "www")
}
function g_getIdFromTypeName(a) {
	var b = g_getIdFromTypeName.L;
	return (b[a] ? b[a] : -1)
}
g_getIdFromTypeName.L = {
	npc: 1,
	object: 2,
	item: 3,
	itemset: 4,
	quest: 5,
	spell: 6,
	zone: 7,
	faction: 8,
	pet: 9,
	achievement: 10,
	title: 11,
    event: 12,
    "class": 13,
    race: 14,
    skill: 15,
    currency: 17,
	profile: 100
};
function g_getIngameLink(color, id, name) {
	// prompt(LANG.prompt_ingamelink, '/script DEFAULT_CHAT_FRAME:AddMessage("\\124c' + a + "\\124H" + c + "\\124h[" + b + ']\\124h\\124r");')
    return '/script DEFAULT_CHAT_FRAME:AddMessage("\\124c' + color + '\\124H' + id + '\\124h[' + name + ']\\124h\\124r");';
}
function g_isEmailValid(a) {
	return a.match(/^([a-z0-9._-]+)(\+[a-z0-9._-]+)?(@[a-z0-9.-]+\.[a-z]{2,4})$/i) != null
}
function g_onAfterTyping(a, d, c) {
	var e;
	var b = function () {
		if (e) {
			clearTimeout(e);
			e = null
		}
		e = setTimeout(d, c)
	};
	a.onkeyup = b
}
function g_onClick(c, d) {
	var b = 0;
	function a(e) {
		if (b) {
			if (b != e) {
				return
			}
		} else {
			b = e
		}
		d(true)
	}
	c.oncontextmenu = function () {
		a(1);
		return false
	};
	c.onmouseup = function (f) {
		f = $E(f);
		if (f._button == 3 || f.shiftKey || f.ctrlKey) {
			a(2)
		} else {
			if (f._button == 1) {
				d(false)
			}
		}
		return false
	}
}
function g_isLeftClick(a) {
	a = $E(a);
	return (a && a._button == 1)
}
function g_createOrRegex(c) {
	var e = c.split(" "),
	d = "";
	for (var b = 0, a = e.length; b < a; ++b) {
		if (b > 0) {
			d += "|"
		}
		d += e[b]
	}
	return new RegExp("(" + d + ")", "gi")
}
function g_GetExpansionClassName(a) {
	switch (a) {
		case 0:
			return null;
		case 1:
			return "bc-icon";
		case 2:
			return "wotlk-icon";
	}
	return null
}
function g_addPages(l, b) {
	function p(r, d) {
		var i;
		if (r == b.page) {
			i = ce("span");
			i.className = "selected"
		} else {
			i = ce("a");
			i.href = (r > 1 ? b.url + b.sep + r + b.pound: b.url + b.pound)
		}
		ae(i, ct(d != null ? d: r));
		return i
	}
	if (!b.pound) {
		b.pound = ""
	}
	if (!b.sep) {
		b.sep = "."
	}
	if (b.allOrNothing && b.nPages <= 1) {
		return
	}
	var c = (b.align && b.align == "left");
	var e = ce("div"),
	k,
	q = ce("var");
	e.className = "pages";
	if (c) {
		e.className += " pages-left"
	}
	if (b.nPages > 1) {
		k = ce("div");
		k.className = "pages-numbers";
		var o = Math.max(2, b.page - 3);
		var h = Math.min(b.nPages - 1, b.page + 3);
		var m = [];
		if (b.page != b.nPages) {
			m.push(p(b.page + 1, LANG.lvpage_next + String.fromCharCode(8250)))
		}
		m.push(p(b.nPages));
		if (h < b.nPages - 1) {
			var a = ce("span");
			ae(a, ct("..."));
			m.push(a)
		}
		for (var g = h; g >= o; --g) {
			m.push(p(g))
		}
		if (o > 2) {
			var a = ce("span");
			ae(a, ct("..."));
			m.push(a)
		}
		m.push(p(1));
		if (b.page != 1) {
			m.push(p(b.page - 1, String.fromCharCode(8249) + LANG.lvpage_previous))
		}
		if (c) {
			m.reverse()
		}
		for (var g = 0, j = m.length; g < j; ++g) {
			ae(k, m[g])
		}
		k.firstChild.style.marginRight = "0";
		k.lastChild.style.marginLeft = "0"
	}
	var q = ce("var");
	ae(q, ct(sprintf(LANG[b.wording[b.nItems == 1 ? 0 : 1]], b.nItems)));
	if (b.nPages > 1) {
		var a = ce("span");
		ae(a, ct(String.fromCharCode(8211)));
		ae(q, a);
		var f = ce("a");
		f.className = "gotopage";
		f.href = "javascript:;";
		ns(f);
		if (Browser.ie) {
			ae(f, ct(" "))
		}
		f.onclick = function () {
			var d = prompt(sprintf(LANG.prompt_gotopage, 1, b.nPages), b.page);
			if (d != null) {
				d |= 0;
				if (d != b.page && d >= 1 && d <= b.nPages) {
					document.location.href = (d > 1 ? b.url + b.sep + d + b.pound: b.url + b.pound)
				}
			}
		};
		f.onmouseover = function (d) {
			Tooltip.showAtCursor(d, LANG.tooltip_gotopage, 0, 0, "q")
		};
		f.onmousemove = Tooltip.cursorUpdate;
		f.onmouseout = Tooltip.hide;
		ae(q, f)
	}
	if (c) {
		ae(e, q);
		if (k) {
			ae(e, k)
		}
	} else {
		if (k) {
			ae(e, k)
		}
		ae(e, q)
	}
	ae(l, e)
}
function g_disclose(a, b) {
	b.className = "disclosure-" + (g_toggleDisplay(a) ? "on": "off");
	return false
}
function co_addYourComment() {
	tabsContribute.focus(0);
	var ta = gE(document.forms['addcomment'], "textarea")[0];
	ta.focus()
}
function co_cancelReply() {
	ge("replybox-generic").style.display = "none";
	document.forms.addcomment.elements.replyto.value = ""
}
function co_validateForm(f) {
	var ta = gE(f, "textarea")[0];

    if (g_user.permissions & 1) {
        return true;
    }

    if (Listview.funcBox.coValidate(ta)) {
        return true;
	}
	return false
}
function ss_submitAScreenshot() {
	tabsContribute.focus(1)
}
function ss_validateForm(f) {
	if (!f.elements.screenshotfile.value.length) {
		alert(LANG.message_noscreenshot);
		return false;
	}
	return true;
}
function ss_appendSticky() {
	var _ = ge("infobox-sticky-ss");
	var type = g_pageInfo.type;
	var typeId = g_pageInfo.typeId;
	var pos = in_array(lv_screenshots, 1, function (a) {
		return a.sticky;
	});

	if (pos != -1) {
		var screenshot = lv_screenshots[pos];

		var a = ce("a");
		a.href = "#screenshots:id=" + screenshot.id;
		a.onclick = function (a) {
			ScreenshotViewer.show({
				screenshots: lv_screenshots,
				pos: pos
			});
			return rf2(a);
		};

		var size = (lv_videos && lv_videos.length ? [120, 90] : [150, 150]);
		var
            img = ce("img"),
            scale = Math.min(size[0] / screenshot.width, size[1] / screenshot.height);

		img.src    = g_staticUrl + "/uploads/screenshots/thumb/" + screenshot.id + ".jpg";
		img.width  = Math.round(scale * screenshot.width);
		img.height = Math.round(scale * screenshot.height);
		img.className = "border";
		ae(a, img);
		ae(_, a);

		var th = ge('infobox-screenshots');
        var a = ce("a");
        ae(a, ct(th.innerText + " (" + lv_screenshots.length + ")"));
        a.href = "#screenshots"
        a.title = sprintf(LANG.infobox_showall, lv_screenshots.length);
		a.onclick = function () {
			tabsRelated.focus((lv_videos && lv_videos.length) || (g_user && g_user.roles & (U_GROUP_ADMIN | U_GROUP_BUREAU | U_GROUP_VIDEO)) ? -2 : -1);
			return false;
		};
        ee(th);
        ae(th, a);
	}
    else {
		var a;
		if (g_user.id > 0) {
			a = '<a href="javascript:;" onclick="ss_submitAScreenshot(); return false">';
		}
        else {
			a = '<a href="?account=signin">';
		}
		_.innerHTML = sprintf(LANG.infobox_noneyet, a + LANG.infobox_submitone + "</a>")
	}
}
var vi_thumbnails = {
	1 : "http://i3.ytimg.com/vi/$1/default.jpg"
};
var vi_siteurls = {
	1 : "http://www.youtube.com/watch?v=$1"
};
var vi_sitevalidation = {
	1 : /^http:\/\/www\.youtube\.com\/watch\?v=([^& ]{11})/
};
function vi_submitAVideo() {
	tabsContribute.focus(2)
}
function vi_validateForm(f) {
	if (!f.elements['videourl'].value.length) {
		alert(LANG.message_novideo);
		return false;
	}

	var urlmatch = false;
	for (var i in vi_sitevalidation) {
		if (f.elements['videourl'].value.match(vi_sitevalidation[i])) {
			urlmatch = true;
			break
		}
	}

	if (!urlmatch) {
		alert(LANG.message_novideo);
		return false;
	}
	return true;
}
function vi_appendSticky() {
	var _ = ge("infobox-sticky-vi");
	var type = g_pageInfo.type;
	var typeId = g_pageInfo.typeId;
	var pos = in_array(lv_videos, 1, function (a) {
		return a.sticky
	});

	if (pos != -1) {
		var video = lv_videos[pos];

		var a = ce("a");
		a.href = "#videos:id=" + video.id;
		a.onclick = function (e) {
			VideoViewer.show({
				videos: lv_videos,
				pos: pos
			});
			return rf2(e)
		};

		var img = ce("img");
		img.src = sprintf(vi_thumbnails[video.videoType], video.videoId);
		img.className = "border";
		ae(a, img);
		ae(_, a);

		var th = ge('infobox-videos');
        var a = ce("a");
        ae(a, ct(th.innerText + " (" + lv_videos.length + ")"));
        a.href = "#videos"
        a.title = sprintf(LANG.infobox_showall, lv_videos.length);
		a.onclick = function () {
			tabsRelated.focus(-1);
			return false;
		};
        ee(th);
        ae(th, a);
	}
    else {
        var a;
        if (g_user.id > 0) {
            a = '<a href="javascript:;" onclick="vi_submitAVideo(); return false">'
        }
        else {
            a = '<a href="?account=signin">'
        }

        _.innerHTML = sprintf(LANG.infobox_noneyet, a + LANG.infobox_suggestone + "</a>")
	}
}
var g_videos = [];
var VideoViewer = new function () {
	var
        videos,
        pos,
        imgWidth,
        imgHeight,
        scale,
        oldHash,
        mode = 0,
        collectionId,
        pageTitle, // IE flash embed fix
        container,
        screen,
        imgDiv,
        aPrev,
        aNext,
        aCover,
        aOriginal,
        divFrom,
        divCaption;

	function computeDimensions() {
		var video = videos[pos];

		var
            captionExtraHeight = Math.max(divCaption.offsetHeight - 18, 0),
            availHeight = Math.max(50, Math.min(520, g_getWindowSize().h - 72 - captionExtraHeight)),
            scale = Math.min(1, availHeight / 520);

		imgWidth = Math.round(scale * 880);
		imgHeight = Math.round(scale * 520);

		aPrev.style.height = aNext.style.height = aCover.style.height = (imgHeight - 95) + 'px';
		Lightbox.setSize(Math.max(480, imgWidth) + 20, imgHeight + 52 + captionExtraHeight);
	}

	function getPound(pos) {
		var
            video = videos[pos],
            buff = '#videos:';

        if (mode == 0) {
			buff += 'id=' + video.id;
		}
        else {
			buff += collectionId + ':' + (pos + 1);
		}

		return buff;
	}

	function render(resizing) {
		if (resizing && (scale == 1) && g_getWindowSize().h > container.offsetHeight) {
			return;
		}

		container.style.visibility = 'hidden';

		var video = videos[pos];

		computeDimensions();

		if (!resizing) {

			if (video.videoType == 1) {
				// imgDiv.innerHTML = Markup.toHtml('[youtube=' + video.videoId + ' width=' + imgWidth + ' height=' + imgHeight + ' autoplay=true]', {mode:Markup.MODE_ARTICLE});
                /* yes container hack .. fuck off */
                var m = 'http://www.youtube.com/collectionId/' + video.videoId + '&fs=1&rel=0&autoplay=1';
                var l = imgWidth ? imgWidth : 640;
                var n = imgHeight ? imgHeight : 385;
                imgDiv.innerHTML = '<object width="' + l + '" height="' + n + '"><param name="movie" value="' + m + '">';
                imgDiv.innerHTML += '<param name="allowfullscreen" value="true"></param>';
                imgDiv.innerHTML += '<param name="allowscriptaccess" value="always"></param>';
                imgDiv.innerHTML += '<param name="wmode" value="opaque"></param>';
                imgDiv.innerHTML += '<embed width="' + l + '" height="' + n + '" src="' + m + '" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque"></embed>';
                imgDiv.innerHTML += '</object>';
                /* end of hack .. fuck off */
			}

			aOriginal.href = sprintf(vi_siteurls[video.videoType], video.videoId);

			if (!video.user && typeof g_pageInfo == 'object') {
				video.user = g_pageInfo.username;
			}

			var
                hasFrom1 = (video.date && video.user),
                hasFrom2 = (videos.length > 1);

			if (hasFrom1) {
				var
                    postedOn = new Date(video.date),
                    elapsed = (g_serverTime - postedOn) / 1000;

				var a = divFrom.firstChild.childNodes[1];
				a.href = '?user=' + video.user;
				a.innerHTML = video.user;

				var s = divFrom.firstChild.childNodes[3];
				ee(s);
				Listview.funcBox.coFormatDate(s, elapsed, postedOn);
				divFrom.firstChild.style.display = '';
			}
            else {
				divFrom.firstChild.style.display = 'none';
			}

			var s = divFrom.childNodes[1];
			ee(s);

			if(video.user)
			{
				if (hasFrom1) {
					ae(s, ct(' ' + LANG.dash + ' '));
                }
				var a = ce('a');
				a.href = 'javascript:;';
				a.onclick = ContactTool.show.bind(ContactTool, { mode: 5, video: video });
				a.className = 'icon-report';
				g_addTooltip(a, LANG.report_tooltip, 'q2');
				ae(a, ct(LANG.report));
				ae(s, a);
			}

			s = divFrom.childNodes[2];

			if (hasFrom2) {
				var buff = '';
				if (video.user) {
					buff = LANG.dash;
				}
				buff += (pos + 1) + LANG.lvpage_of + videos.length;

				s.innerHTML = buff;
				s.style.display = '';
			}
            else {
				s.style.display = 'none';
			}

			divFrom.style.display = (hasFrom1 || hasFrom2 ? '': 'none');

			var hasCaption = (video.caption != null && video.caption.length);
			var hasSubject = (video.subject != null && video.subject.length && video.type && video.typeId);

			if (hasCaption || hasSubject) {
				var html = '';

				if (hasSubject) {
					html += LANG.types[video.type][0] + LANG.colon;
					html += '<a href="?' + g_types[video.type] + '=' + video.typeId + '">';
					html += video.subject;
					html += '</a>';
				}

				if (hasCaption) {
					if (hasSubject) {
						html += LANG.dash;
					}

					html += (video.noMarkup ? video.caption: Markup.toHtml(video.caption, {
						mode: Markup.MODE_SIGNATURE
					}));
				}

				divCaption.innerHTML = html;
				divCaption.style.display = '';
			}
            else {
				divCaption.style.display = 'none';
			}

			if (videos.length > 1) {
				aPrev.href = getPound(peekPos(-1));
				aNext.href = getPound(peekPos(1));
				aPrev.style.display = aNext.style.display = '';
				aCover.style.display = 'none';
			}
            else {
				aPrev.style.display = aNext.style.display = 'none';
				aCover.style.display = '';
			}

			location.replace(getPound(pos));
		}

		Lightbox.reveal();

		container.style.visibility = 'visible';

		setTimeout(fixTitle, 1);
	}

	function peekPos(change) {
		var foo = pos;
		foo += change;

		if (foo < 0) {
			foo = videos.length - 1;
		}
        else if (foo >= videos.length) {
            foo = 0;
		}

		return foo;
	}

	function prevVideo() {
		pos = peekPos(-1);
		render();

		return false;
	}

	function nextVideo() {
		pos = peekPos(1);
		render();

		return false;
	}

	function fixTitle() {
		if (pageTitle) {
			document.title = pageTitle;
		}
	}

	function onKeyUp(e) {
		e = $E(e);

		switch (e.keyCode) {
		case 37: // Left
			prevVideo();
			break;
		case 39: // Right
			nextVideo();
			break;
		}
	}

	function onResize() {
		render(1);
	}

	function onHide() {
		ee(imgDiv);

		if (videos.length > 1) {
			dE(document, 'keyup', onKeyUp) ;
		}

		if (oldHash && mode == 0) {
			if (oldHash.indexOf(':id=') != -1) {
				oldHash = '#videos';
			}
			location.replace(oldHash);
		}
        else {
			location.replace('#.');
		}

		fixTitle();
	}

	function onShow(dest, first, opt) {
		if (typeof opt.videos == 'string') {
			videos = g_videos[opt.videos];
			mode = 1;
			collectionId = opt.videos;
		}
        else {
			videos = opt.videos;
			mode = 0;
			collectionId = null;
		}
		container = dest;

		pos = 0;
		if (opt.pos && opt.pos >= 0 && opt.pos < videos.length) {
			pos = opt.pos;
		}

		if (first) {
			dest.className = 'screenshotviewer';
			screen = ce('div');
			screen.className = 'screenshotviewer-screen';

			aPrev = ce('a');
			aNext = ce('a');
			aPrev.className = 'screenshotviewer-prev';
			aNext.className = 'screenshotviewer-next';
			aPrev.href = 'javascript:;';
			aNext.href = 'javascript:;';

			var foo = ce('span');
			var b = ce('b');
			// ae(b, ct(LANG.previous));
			ae(foo, b);
			ae(aPrev, foo);
			var foo = ce('span');
			var b = ce('b');
			// ae(b, ct(LANG.next));
			ae(foo, b);
			ae(aNext, foo);

			aPrev.onclick = prevVideo;
			aNext.onclick = nextVideo;

			aCover = ce('a');
			aCover.className = 'screenshotviewer-cover';
			aCover.href = 'javascript:;';
			aCover.onclick = Lightbox.hide;
			var foo = ce('span');
			var b = ce('b');
			ae(b, ct(LANG.close));
			ae(foo, b);
			ae(aCover, foo);

			ae(screen, aPrev);
			ae(screen, aNext);
			ae(screen, aCover);

			imgDiv = ce('div');
			ae(screen, imgDiv);

			ae(dest, screen);

			var aClose = ce('a');
			// aClose.className = 'dialog-x';
			aClose.className = 'screenshotviewer-close';
			aClose.href = 'javascript:;';
			aClose.onclick = Lightbox.hide;
			// ae(aClose, ct(LANG.close));
            ae(aClose, ce('span'));
			ae(dest, aClose);

			aOriginal = ce('a');
			// aOriginal.className = 'dialog-arrow';
			aOriginal.className = 'screenshotviewer-original';
			aOriginal.href = 'javascript:;';
			aOriginal.target = '_blank';
			// ae(aOriginal, ct(LANG.original));
            ae(aOriginal, ce('span'));
			ae(dest, aOriginal);

			divFrom = ce('div');
			divFrom.className = 'screenshotviewer-from';
			var sp = ce('span');
			ae(sp, ct(LANG.lvscreenshot_from));
			ae(sp, ce('a'));
			ae(sp, ct(' '));
			ae(sp, ce('span'));
			ae(divFrom, sp);
			ae(divFrom, ce('span'));
			ae(divFrom, ce('span'));
			ae(dest, divFrom);

			divCaption = ce('div');
			divCaption.className = 'screenshotviewer-caption';
			ae(dest, divCaption);

			var d = ce('div');
			d.className = 'clear';
			ae(dest, d);
		}

		oldHash = location.hash;

		if (videos.length > 1) {
			aE(document, 'keyup', onKeyUp);
		}
		render();
	}

	this.checkPound = function () {
		pageTitle = gE(document, 'title').innerHTML;
		if (location.hash && location.hash.indexOf('#videos') == 0) {
			if (!g_listviews['videos']) { // Standalone video viewer
				var parts = location.hash.split(':');
				if (parts.length == 3) {
					var collection = g_videos[parts[1]],
					p = parseInt(parts[2]);

					if (collection && p >= 1 && p <= collection.length) {
						VideoViewer.show({
							videos: parts[1],
							pos: p - 1
						});
					}
				}
			}
		}
	}

	this.show = function (opt) {
		Lightbox.show('videoviewer', {
			onShow: onShow,
			onHide: onHide,
			onResize: onResize
		},opt);
		return false;
	}

	DomContentLoaded.addEvent(this.checkPound)
};
var suDialog;
function su_addToSaved(c, d, a, e) {
	if (!c) {
		return
	}
	if (!Dialog.templates.docompare) {
		Dialog.templates.docompare = {
			title: LANG.dialog_compare,
			width: 400,
			height: 138,
			buttons: ["okay", "cancel"],
			fields: [{
				id: "selecteditems",
				type: "caption",
				compute: function (h, g, f, i) {
					i.innerHTML = sprintf((g == 1 ? LANG.dialog_selecteditem: LANG.dialog_selecteditems), g)
				}
			},
			{
				id: "action",
				type: "radio",
				label: "",
				value: 3,
				submitOnDblClick: 1,
				options: {
					1 : LANG.dialog_nosaveandview,
					2 : LANG.dialog_saveandview,
					3 : LANG.dialog_saveforlater
				}
			}]
		}
	}
	if (!suDialog) {
		suDialog = new Dialog()
	}
	var b = function (h) {
		var g = gc("compare_groups"),
		f = "?compare";
		if (h.action > 1) {
			if (g) {
				c = g + ";" + c
			}
			sc("compare_groups", 20, c, "/", location.hostname);
			// sc("compare_groups", 20, c, "/", ".wowhead.com");
			if (e) {
				sc("compare_level", 20, e, "/", location.hostname)
				// sc("compare_level", 20, e, "/", ".wowhead.com")
			}
		} else {
			f += "=" + c + (e ? "&l=" + e: "")
		}
		if (h.action < 3) {
			if (a) {
				window.open(f)
			} else {
				location.href = f
			}
		}
	};
	suDialog.show("docompare", {
		data: {
			selecteditems: d,
			action: 1
		},
		onSubmit: b
	})
}
function Ajax(b, c) {
	if (!b) {
		return
	}
	var a;
	try {
		a = new XMLHttpRequest()
	} catch(d) {
		try {
			a = new ActiveXObject("Msxml2.XMLHTTP")
		} catch(d) {
			try {
				a = new ActiveXObject("Microsoft.XMLHTTP")
			} catch(d) {
				if (window.createRequest) {
					a = window.createRequest()
				} else {
					alert(LANG.message_ajaxnotsupported);
					return
				}
			}
		}
	}
	this.request = a;
	cO(this, c);
	this.method = this.method || (this.params && "POST") || "GET";
	a.open(this.method, b, this.async == null ? true: this.async);
	a.onreadystatechange = Ajax.onReadyStateChange.bind(this);
	if (this.method.toUpperCase() == "POST") {
		a.setRequestHeader("Content-Type", (this.contentType || "application/x-www-form-urlencoded") + "; charset=" + (this.encoding || "UTF-8"))
	}
	a.send(this.params)
}
Ajax.onReadyStateChange = function () {
	if (this.request.readyState == 4) {
		if (this.request.status == 0 || (this.request.status >= 200 && this.request.status < 300)) {
			this.onSuccess != null && this.onSuccess(this.request, this)
		} else {
			this.onFailure != null && this.onFailure(this.request, this)
		}
		if (this.onComplete != null) {
			this.onComplete(this.request, this)
		}
	}
};
function g_ajaxIshRequest(b) {
	var c = document.getElementsByTagName("head")[0],
	a = g_getGets();
	if (a.refresh != null) {
		b += "&refresh"
	}
	ae(c, ce("script", {
		type: "text/javascript",
		src: b
	}))
}
var Menu = {
	iframes: [],
	divs: [],
	selection: [],
	show: function () {
		try {
			clearTimeout(Menu.timer);
			if (Menu.currentLink) {
				Menu._show(this)
			} else {
				if (this.className.indexOf("open") == -1) {
					this.className += " open"
				}
				Menu.timer = setTimeout(Menu._show.bind(0, this), 100)
			}
		} catch(a) {}
	},
	_show: function (b) {
		if (Menu.currentLink != b) {
			var a = ac(b);
			Menu._hide();
			Menu.selection = [-1];
			Menu.currentLink = b;
			Menu.showDepth(0, b.menu, a[0], a[1] + b.offsetHeight + 1, b.offsetHeight + 8, b.offsetWidth, a[1], false);
			if (b.className.indexOf("open") == -1) {
				b.className += " open"
			}
		} else {
			Menu.truncate(0);
			Menu.clean(0)
		}
	},
	showAtCursor: function (b, a, d) {
		clearTimeout(Menu.timer);
		Menu._hide();
		Menu.selection = [-1];
		Menu.currentLink = null;
		if (! (a && d)) {
			b = $E(b);
			var c = g_getCursorPos(b);
			a = c.x;
			d = c.y
		}
		if (Browser.ie6) {
			a -= 2;
			d -= 2
		}
		Menu.showDepth(0, this.menu, a, d, 0, 0, 0, true)
	},
	hide: function () {
		try {
			clearTimeout(Menu.timer);
			if (Menu.currentLink) {
				Menu.timer = setTimeout(Menu._hide, 333)
			} else {
				this.className = this.className.replace("open", "")
			}
		} catch(a) {}
	},
	_hide: function () {
		for (var b = 0, a = Menu.selection.length; b < a; ++b) {
			Menu.divs[b].style.display = "none";
			Menu.divs[b].style.visibility = "hidden";
			if (Browser.ie6) {
				Menu.iframes[b].style.display = "none"
			}
		}
		Menu.selection = [];
		if (Menu.currentLink) {
			Menu.currentLink.className = Menu.currentLink.className.replace("open", "")
		}
		Menu.currentLink = null
	},
	sepOver: function () {
		var b = this.d;
		var a = b.i;
		Menu.truncate(a);
		Menu.clean(a);
		Menu.selection[a] = -1
	},
	elemOver: function () {
		var g = this.d;
		var f = g.i;
		var e = this.i;
		var a = this.k;
		var b = this.firstChild.className == "menusub";
		Menu.truncate(f + b);
		if (b && a != Menu.selection[f]) {
			var h = ac(this);
			Menu.selection[f + 1] = -1;
			Menu.showDepth(f + 1, g.menuArray[e][3], h[0], h[1] - 2, this.offsetHeight, this.offsetWidth - 3, 0, false)
		}
		Menu.clean(f);
		Menu.selection[f] = a;
		if (this.className.length) {
			this.className += " open"
		} else {
			this.className = "open"
		}
	},
	elemClick: function (a) {
		Menu._hide();
		a()
	},
	getIframe: function (a) {
		var b;
		if (Menu.iframes[a] == null) {
			b = ce("iframe");
			b.src = "javascript:0;";
			b.frameBorder = 0;
			ae(ge("layers"), b);
			Menu.iframes[a] = b
		} else {
			b = Menu.iframes[a]
		}
		return b
	},
	getDiv: function (a, b) {
		var c;
		if (Menu.divs[a] == null) {
			c = ce("div");
			c.className = "menu";
			ae(ge("layers"), c);
			Menu.divs[a] = c
		} else {
			c = Menu.divs[a]
		}
		c.i = a;
		c.menuArray = b;
		return c
	},
	showDepth: function (N, c, D, C, O, G, A, z) {
		var X, U = Menu.getDiv(N, c);
		while (U.firstChild) {
			de(U.firstChild)
		}
		var v = ce("table"),
		B = ce("tbody"),
		S = ce("tr"),
		e = ce("td"),
		Q = ce("div"),
		K = ce("div");
		var J = 999;
		var b = g_getWindowSize(),
		l = g_getScroll(),
		f = b.w,
		o = b.h,
		W = l.x,
		P = l.y;
		if (O > 0 && (N > 0 || c.length > 20)) {
			if ((25 + 1) * c.length > o - 25 - A) {
				for (var M = 2; M < 4; ++M) {
					if (O / M * c.length + 30 < o - A) {
						break
					}
				}
				J = Math.floor(c.length / M)
			}
		}
		var t = 0;
		var L = 0;
		for (var M = 0, u = c.length; M < u; ++M) {
			var R = c[M];
			if (R[0] == null) {
				var r = ce("span");
				r.className = "separator";
				ns(r);
				ae(r, ct(R[1]));
				r.d = U;
				r.onmouseover = Menu.sepOver;
				ae(K, r)
			} else {
				var V = ce("a");
				V.d = U;
				V.k = L++;
				V.i = M;
				if (R[2]) {
					if (Menu.currentLink && Menu.currentLink.menuappend) {
						if (R[2].indexOf(Menu.currentLink.menuappend) == -1) {
							V.href = R[2] + Menu.currentLink.menuappend
						} else {
							V.href = R[2]
						}
					} else {
						if (typeof R[2] == "function") {
							V.href = "javascript:;";
							V.onclick = Menu.elemClick.bind(0, R[2]);
							ns(V)
						} else {
							V.href = R[2]
						}
					}
				} else {
					V.href = "javascript:;";
					V.style.cursor = "default";
					ns(V)
				}
				V.onmouseover = Menu.elemOver;
				var H = ce("span"),
				T = ce("span");
				if (R[3] != null) {
					H.className = "menusub"
				}
				if (R.newWindow) {
					V.target = "_blank"
				}
				if (R.className) {
					T.className += " "+R.className
				}
                if (R[4] != null && R[4].rel) {
                    V.rel = R[4].rel
                }
				if (R[4] != null && R[4].className) {
					T.className += " "+R[4].className
				}
				if (R.checked) {
					T.className += " menucheck"
				}
				else if (!R.checked && R[4] != null && R[4].tinyIcon) {
					if (R[4].tinyIcon.indexOf("/") != -1)
						T.style.background = "url(" + R[4].tinyIcon.toLowerCase() + ") left center no-repeat"
					else
						T.style.background = "url(images/icons/tiny/" + R[4].tinyIcon.toLowerCase() + ".gif) left center no-repeat"
				}
				else if (!R.checked && R.tinyIcon) {
					if (R.tinyIcon.indexOf("/") != -1)
						T.style.background = "url(" + R.tinyIcon.toLowerCase() + ") left center no-repeat"
					else
						T.style.background = "url(images/icons/tiny/" + R.tinyIcon.toLowerCase() + ".gif) left center no-repeat"
				} else {
					if (R[4] != null && R[4].socketColor) {
						T.className += " socket-" + g_file_gems[R[4].socketColor]
					}
					else if (R.socketColor) {
						T.className += " socket-" + g_file_gems[R.socketColor]
					} else {
						if (R.smallIcon) {
							V.style.padding = 0;
							T.style.padding = "4px 18px 4px 28px";
							T.style.background = "url(images/icon_border_small.png) left center no-repeat transparent";
							H.style.background = "url(images/icons/small/" + R.smallIcon.toLowerCase() + ".jpg) 4px 3px no-repeat transparent"
						} else {
							if (R.smallImage) {
								V.style.padding = 0;
								T.style.padding = "4px 18px 4px 28px";
								H.style.background = "url(images/icons/small/" + R.smallImage.toLowerCase() + ".jpg) 4px 3px no-repeat transparent"
							}
						}
					}
				}
				ae(T, ct(R[1]));
				ae(H, T);
				ae(V, H);
				ae(K, V)
			}
			if (t++==J) {
				Q.onmouseover = Menu.divOver;
				Q.onmouseout = Menu.divOut;
				ae(Q, K);
				if (!Browser.ie6) {
					var I = ce("p");
					ae(I, ce("em"));
					ae(I, ce("var"));
					ae(I, ce("strong"));
					ae(I, Q);
					ae(e, I)
				} else {
					ae(e, Q)
				}
				ae(S, e);
				e = ce("td");
				I = ce("p");
				Q = ce("div");
				K = ce("div");
				t = 0
			}
		}
		Q.onmouseover = Menu.divOver;
		Q.onmouseout = Menu.divOut;
		ae(Q, K);
		if (!Browser.ie6) {
			if (J != 999) {
				var I = ce("p");
				ae(I, ce("em"));
				ae(I, ce("var"));
				ae(I, ce("strong"));
				ae(I, Q);
				ae(e, I)
			} else {
				ae(U, ce("em"));
				ae(U, ce("var"));
				ae(U, ce("strong"));
				ae(e, Q)
			}
		} else {
			ae(e, Q)
		}
		ae(S, e);
		ae(B, S);
		ae(v, B);
		ae(U, v);
		U.style.left = U.style.top = "-2323px";
		U.style.display = "";
		var g = v.offsetWidth,
		q = v.offsetHeight,
		F = true,
		E = true;
		if (!Browser.ie6) {
			g += 5;
			q += 6
		}
		if (D + g > f + W || c.rightAligned) {
			F = false
		}
		if (F) {
			if (D + G + g > f) {
				D = Math.max(0, D - g)
			} else {
				if (N > 0) {
					D += G
				}
			}
		} else {
			D = D + G - g;
			if (Browser.ie) {
				D -= 3
			}
		}
		if ((N > 0 || z) && C + q > o + P) {
			C = Math.max(P + 5, o + P - q)
		}
		U.style.left = D + "px";
		U.style.top = C + "px";
		if (Browser.ie6) {
			X = Menu.getIframe(N);
			X.style.left = D + "px";
			X.style.top = C + "px";
			X.style.width = g + "px";
			X.style.height = q + "px";
			X.style.display = "";
			X.style.visibility = "visible"
		}
		U.style.visibility = "visible";
		if (Browser.opera) {
			U.style.display = "none";
			U.style.display = ""
		}
	},
	divOver: function () {
		clearTimeout(Menu.timer)
	},
	divOut: function () {
		clearTimeout(Menu.timer);
		Menu.timer = setTimeout(Menu._hide, 333)
	},
	truncate: function (b) {
		var c;
		while (Menu.selection.length - 1 > b) {
			c = Menu.selection.length - 1;
			Menu.divs[c].style.display = "none";
			Menu.divs[c].style.visibility = "hidden";
			if (Browser.ie6) {
				Menu.iframes[c].style.display = "none"
			}
			Menu.selection.pop()
		}
	},
	clean: function (b) {
		for (var c = b; c < Menu.selection.length; ++c) {
			if (Menu.selection[c] != -1) {
				var e = gE(Menu.divs[c], "a")[Menu.selection[c]];
				if (e.className.indexOf("sub") != -1) {
					e.className = "sub"
				} else {
					e.className = ""
				}
				Menu.selection[c] = -1
			}
		}
	},
	append: function (b, c) {
		b[2] += c;
		if (b[3] != null) {
			Menu._append(b[3], c)
		}
	},
	_append: function (b, d) {
		var e, g = 0;
		for (var c = 0; c < b.length; ++c) {
			var f = b[c][2].indexOf("&filter=");
			if (f != -1 && d.indexOf("&filter=") == 0) {
				d = Menu._fixCollision(b[c][2].substr(f), d)
			}
			b[c][2] += d;
			if (b[c][3]) {
				Menu._append(b[c][3], d)
			}
		}
	},
	_splitFilter: function (b) {
		var g = b.substr(8).split(";"),
		c = {};
		for (var e = 0, a = g.length; e < a; ++e) {
			var h = g[e].indexOf("="),
			d,
			f;
			if (h != -1) {
				d = g[e].substr(0, h);
				f = g[e].substr(h + 1)
			} else {
				d = g[e];
				f = ""
			}
			c[d] = f
		}
		return c
	},
	_fixCollision: function (d, a) {
		var b = Menu._splitFilter(d),
		c = Menu._splitFilter(a);
		a = "";
		for (var e in c) {
			if (!b[e] && e != "sl" && e != "cl") {
				a += ";";
				a += e + "=" + c[e]
			}
		}
		return a
	},
	fixUrls: function (g, c, e, b, f) {
		if (!f) {
			f = 0
		}
		for (var d = 0, a = g.length; d < a; ++d) {
			if (g[d][2] == null) {
				g[d][2] = c + g[d][0] + (e ? e: "")
			}
			if (g[d][3]) {
				if (b == true || (typeof b == "object" && b[f] == true)) {
					Menu.fixUrls(g[d][3], c, e, b, f + 1)
				} else {
					Menu.fixUrls(g[d][3], c + g[d][0] + ".", e, b, f + 1)
				}
			}
		}
	},
	addButtons: function (h, g) {
		for (var e = 0, b = g.length; e < b; ++e) {
			if (g[e][0] == null) {
				continue
			}
			var c = ce("a"),
			f = ce("span");
			if (g[e][2]) {
				c.href = g[e][2]
			} else {
				c.href = "javascript:;";
				c.style.cursor = "default";
				c.style.textDecoration = "none";
				ns(c)
			}
			if (g[e][3] != null) {
				f.className = "menuarrowd";
				c.menu = g[e][3];
				c.onmouseover = Menu.show;
				c.onmouseout = Menu.hide
			} else {
				c.onmouseover = Menu._hide
			}
			ae(f, ct(g[e][1]));
			ae(c, f);
			ae(h, c)
		}
	},
	explode: function (f) {
		var d = [],
		e = null,
		c;
		for (var b = 0, a = f.length; b < a; ++b) {
			if (f[b][0] != null) {
				if (e != null) {
					c.push(f[b])
				} else {
					d.push(f[b])
				}
			}
			if (e != null && (f[b][0] == null || b == a - 1)) {
				d.push([0, e[1], , c])
			}
			if (f[b][0] == null) {
				e = f[b];
				c = []
			}
		}
		return d
	}
};
function Tabs(a) {
	cO(this, a);
	if (this.parent) {
		this.parent = $(this.parent)
	} else {
		return
	}
	this.oldMode = (Browser.geckoVersion > 20000000 && Browser.geckoVersion <= 20060414);
	this.selectedTab = -1;
	this.uls = [];
	this.tabs = [];
	this.nShows = 0;
	if (this.poundable == null) {
		this.poundable = 1
	}
	this.poundedTab = null;
	if (this.onLoad == null) {
		this.onLoad = Tabs.onLoad.bind(this)
	}
	if (this.onShow == null) {
		this.onShow = Tabs.onShow.bind(this)
	}
	if (this.onHide) {
		this.onHide = this.onHide.bind(this)
	}
}
Tabs.prototype = {
	add: function (a, d) {
		var c, b = this.tabs.length;
		c = {
			caption: a,
			index: b,
			owner: this
		};
		cO(c, d);
		this.tabs.push(c);
		return b
	},
	hide: function (a, b) {
		if (this.tabs[a]) {
			ee(this.parent);
			this.tabs[a].hidden = !b;
			this.flush();
			this.show((a == this.selectedTab ? this.poundedTab: this.selectedTab), 1)
		}
	},
	focus: function (a) {
		if (a < 0) {
			a = this.tabs.length + a
		}
		this.forceScroll = 1;
		gE(this.uls[this.oldMode ? 0 : 2], "a")[a].onclick({},
		true);
		this.forceScroll = null
	},
	show: function (c, e) {
		var b;
		if (isNaN(c) || c < 0 || this.tabs[c].hidden) {
			c = 0
		} else {
			if (c >= this.tabs.length) {
				c = this.tabs.length - 1
			}
		}
		if (e == null && c == this.selectedTab) {
			return
		}
		if (this.selectedTab != -1) {
			b = this.tabs[this.selectedTab];
			if (this.onHide && !this.onHide(b)) {
				return
			}
			if (b.onHide && !b.onHide()) {
				return
			}
		}++this.nShows;
		var a = this.oldMode ? 0 : 3;
		for (var d = 0; d <= a; ++d) {
			b = gE(this.uls[d], "a");
			if (this.selectedTab != -1) {
				b[this.selectedTab].className = ""
			}
			b[c].className = "selected"
		}
		b = this.tabs[c];
		if (b.onLoad) {
			b.onLoad();
			b.onLoad = null
		}
		this.onShow(this.tabs[c], this.tabs[this.selectedTab]);
		if (b.onShow) {
			b.onShow(this.tabs[this.selectedTab])
		}
		this.selectedTab = c
	},
	flush: function (q) {
		if (this.oldMode) {
			var m, u, e, t;
			m = ce("ul");
			m.className = "old-tabs";
			for (var k = 0; k < this.tabs.length; ++k) {
				var f = this.tabs[k];
				u = ce("li");
				e = ce("div");
				t = ce("a");
				if (f.hidden) {
					u.style.display = "none"
				}
				if (this.poundable) {
					t.href = "#" + f.id
				} else {
					t.href = "javascript:;"
				}
				ns(t);
				t.onclick = Tabs.onClick.bind(f, t);
				ae(t, ct(f.caption));
				ae(u, e);
				ae(u, t);
				ae(m, u)
			}
			this.uls[0] = m;
			ae(this.parent, m);
			var v = ce("div");
			v.style.cssFloat = v.style.styleFloat = "left";
			ae(this.parent, v)
		} else {
			var v, g, t, r, p, c;
			var o = ce("div");
			o.className = "tabs-container";
			p = ce("div");
			p.style.visibility = "hidden";
			this.uls[0] = ce("ul");
			this.uls[0].className = "tabs";
			ae(p, this.uls[0]);
			ae(o, p);
			p = ce("div");
			p.className = "tabs-levels";
			for (var k = 1; k <= 3; ++k) {
				c = ce("div");
				c.className = "tabs-level";
				this.uls[k] = ce("ul");
				this.uls[k].className = "tabs";
				this.uls[k].style.top = ( - 30 * (3 - k)) + "px";
				ae(c, this.uls[k]);
				ae(p, c)
			}
			ae(o, p);
			for (var k = 0; k < this.tabs.length; ++k) {
				var f = this.tabs[k];
				for (var h = 0; h <= 3; ++h) {
					g = ce("li");
					t = ce("a");
					r = ce("b");
					if (f.hidden) {
						g.style.display = "none"
					}
					if (this.poundable) {
						t.href = "#" + f.id
					} else {
						t.href = "javascript:;"
					}
					if (h > 0) {
						ns(t);
						t.onclick = Tabs.onClick.bind(f, t)
					}
					if (!Browser.ie6) {
						p = ce("div");
						if (f.icon) {
							s = ce("span");
							s.className = "icontiny";
							s.style.backgroundImage = "url(images/icons/tiny/" + f.icon.toLowerCase() + ".gif)";
							ae(p, s)
						}
						ae(p, ct(f.caption));
						ae(t, p)
					}
					if (f.icon) {
						s = ce("span");
						s.className = "icontiny";
						s.style.backgroundImage = "url(images/icons/tiny/" + f.icon.toLowerCase() + ".gif)";
						ae(r, s)
					}
					ae(r, ct(f.caption));
					ae(t, r);
					ae(g, t);
					ae(this.uls[h], g)
				}
			}
			ae(this.parent, o)
		}
		if (this.onLoad) {
			v = this.onLoad();
			if (v != null) {
				this.poundedTab = q = v
			}
		}
		this.show(q)
	},
	setTabName: function (d, c) {
		var a = this.oldMode ? 0 : 3;
		this.tabs[d].caption = c;
		for (var e = 0; e <= a; ++e) {
			var b = gE(this.uls[e], "a");
			g_setTextNodes(b[d], c)
		}
	},
	setTabPound: function (d, a) {
		if (!this.poundable) {
			return
		}
		var b = this.oldMode ? 0 : 3;
		for (var e = 0; e <= b; ++e) {
			var c = gE(this.uls[e], "a");
			c[d].href = "#" + this.tabs[d].id + ":" + a
		}
	},
	getSelectedTab: function () {
		return this.selectedTab
	}
};
Tabs.onClick = function (b, g, f) {
	if (f == null && this.index == this.owner.selectedTab) {
		return
	}
	var d = rf2(g);
	if (d == null) {
		return
	}
	this.owner.show(this.index, f);
	if (this.owner.poundable) {
		var c = b.href.indexOf("#");
		c != -1 && location.replace(b.href.substr(c))
	}
	return d
};
Tabs.onLoad = function () {
	if (!this.poundable || !location.hash.length) {
		return
	}
	var a = location.hash.substr(1).split(":")[0];
	if (a) {
		return in_array(this.tabs, a, function (b) {
			return b.id
		})
	}
};
Tabs.onShow = function (d, e) {
	var b;
	if (e) {
		ge("tab-" + e.id).style.display = "none"
	}
	b = ge("tab-" + d.id);
	b.style.display = "";
	if ((this.nShows == 1 && this.poundedTab != null && this.poundedTab >= 0) || this.forceScroll) {
		var c, a;
		if (this.__st) {
			c = this.__st;
			a = 15
		} else {
			c = b;
			a = this.parent.offsetHeight + 15
		}
		if (Browser.ie) {
			setTimeout(g_scrollTo.bind(this, c, a), 1)
		} else {
			g_scrollTo(c, a)
		}
	}
};
var Icon = {
	sizes: ['small', 'medium', 'large'],
	sizes2: [18, 36, 56],
	premiumOffsets: [[-56, -36], [-56, 0], [0, 0]],

	create: function (name, size, UNUSED, url, num, qty, noBorder) {
		var
            icon = ce('div'),
            image = ce('ins'),
            tile = ce('del');

		if (size == null) {
			size = 1;
		}

		icon.className = 'icon' + Icon.sizes[size];

		ae(icon, image);

		if (!noBorder)
            ae(icon, tile);

		Icon.setTexture(icon, size, name);

		if (url) {
            var a = ce('a');
			a.href = url;
			if (url.indexOf('wowhead.com') == -1 && url.substr(0, 5) == 'http:') {
				a.target = "_blank";
			}
			ae(icon, a);
		}
        else if (name) {
			var _ = icon.firstChild.style;
			var avatarIcon = (_.backgroundImage.indexOf('/avatars/') != -1);

			if (!avatarIcon) {
				icon.onclick = Icon.onClick;

				var a = ce('a');
				a.href = "javascript:;";
				ae(icon, a);
			}
		}

		Icon.setNumQty(icon, num, qty);

		return icon;
	},

	createUser: function (avatar, avatarMore, size, url, isPremium, noBorder) {
		if (avatar == 2) {
			avatarMore = g_staticUrl + '/uploads/avatars/' + avatarMore + '.jpg';
		}

		var icon = Icon.create(avatarMore, size, null, url, null, null, noBorder);

		if (isPremium) {
			icon.className += ' ' + icon.className + (isPremium == 2 ? '-gold' : '-premium');
		}

		if (avatar == 2) {
			Icon.moveTexture(icon, size, Icon.premiumOffsets[size][0], Icon.premiumOffsets[size][1], true);
		}

		return icon;
	},

	setTexture: function (icon, size, name) {
		if (!name) {
			return;
		}

		var _ = icon.firstChild.style;

		if (name.indexOf('/') != -1 || name.indexOf('?') != -1) {
			_.backgroundImage = 'url(' + name + ')';
		}
        else {
			_.backgroundImage = 'url(' + g_staticUrl + '/images/icons/' + Icon.sizes[size] + '/' + escape(name.toLowerCase()) + '.jpg)';
		}

		Icon.moveTexture(icon, size, 0, 0);
	},

	moveTexture: function (icon, size, x, y, exact) {
		var _ = icon.firstChild.style;

		if (x || y) {
			if (exact) {
				_.backgroundPosition = x + 'px ' + y + 'px';
			}
            else {
				_.backgroundPosition = (-x * Icon.sizes2[size]) + 'px ' + ( -y * Icon.sizes2[size]) + 'px';
			}
		}
        else if (_.backgroundPosition) {
            _.backgroundPosition = '';
		}
	},

	setNumQty: function (icon, num, qty) {
		var _ = gE(icon, 'span');

		for (var i = 0, len = _.length; i < len; ++i) {
			if (_[i]) {
				de(_[i]);
			}
		}
		if (num != null && ((num > 1 && num < 2147483647) || num.length)) {
			_ = g_createGlow(num, 'q1');
			_.style.right = '0';
			_.style.bottom = '0';
			_.style.position = 'absolute';
			ae(icon, _);
		}

		if (qty != null && qty > 0) {
			_ = g_createGlow('(' + qty + ')', 'q');
			_.style.left = '0';
			_.style.top = '0';
			_.style.position = 'absolute';
			ae(icon, _);
		}
	},

	getLink: function (icon) {
		return gE(icon, 'a')[0];
	},

	showIconName: function (x) {
		if (x.firstChild) {
			var _ = x.firstChild.style;
			if (_.backgroundImage.length && (_.backgroundImage.indexOf(g_staticUrl) >= 4 || g_staticUrl == '')) {
                var
                start = _.backgroundImage.lastIndexOf('/'),
				end   = _.backgroundImage.indexOf('.jpg');

				if (start != -1 && end != -1) {
					Icon.displayIcon(_.backgroundImage.substring(start + 1, end));
				}
			}
		}
	},

	onClick: function() {
		Icon.showIconName(this);
	},

	displayIcon: function(icon) {
		if (!Dialog.templates.icondisplay) {
			var w = 364;
			switch(g_locale.id) {
				case 6:
					w = 380;
					break;

				case 8:
					w = 384;
					break;
			}

			Dialog.templates.icondisplay = {
				title: LANG.icon,
				width: w,
				buttons: [['arrow', LANG.dialog_original], ['cancel', LANG.close]],
				fields:
				[
					{
						id: 'icon',
						label: LANG.dialog_imagename,
						required: 1,
						type: 'text',
						labelAlign: 'left',
						compute: function(field, value, form, td) {
							var wrapper = ce('div');
							td.style.width = '300px';
							wrapper.style.position = 'relative';
							wrapper.style.cssFloat = 'left';
							wrapper.style.paddingRight = '6px';
							field.style.width = '200px';

							var divIcon = this.iconDiv = ce('div');
							divIcon.style.position = 'absolute';
							divIcon.style.top = '-12px';
							divIcon.style.right = '-70px';

							divIcon.update = function() {
								setTimeout(function() { field.focus(); field.select(); }, 10);
								ee(divIcon);
								ae(divIcon, Icon.create(field.value, 2));
							};

							ae(divIcon, Icon.create(value, 2));
							ae(wrapper, divIcon);
							ae(wrapper, field);
							ae(td, wrapper);
						}
					},
					{
						id: 'location',
						label: " ",
						required: 1,
						type: 'caption',
						compute: function(field, value, form, th, tr) {
							ee(th);
							th.style.padding = '3px 3px 0 3px';
							th.style.lineHeight = '17px';
							th.style.whiteSpace = 'normal';
							var wrapper = ce('div');
							wrapper.style.position = 'relative';
							wrapper.style.width = '250px';

							var span = ce('span');

							var text = LANG.dialog_seeallusingicon;
							text = text.replace('$1', '<a href="?items&filter=cr=142;crs=0;crv=' + this.data.icon + '">' + LANG.types[3][3] + '</a>');
							text = text.replace('$2', '<a href="?spells&filter=cr=15;crs=0;crv=' + this.data.icon + '">' + LANG.types[6][3] + '</a>');
							text = text.replace('$3', '<a href="?achievements&filter=cr=10;crs=0;crv=' + this.data.icon + '">' + LANG.types[10][3] + '</a>');

							span.innerHTML = text;
							ae(wrapper, span);
							ae(th, wrapper);
						}
					}
				],

				onInit: function(form) {
					this.updateIcon = this.template.updateIcon.bind(this, form);
				},

				onShow: function(form) {
					this.updateIcon();
					if (location.hash && location.hash.indexOf('#icon') == -1) {
						this.oldHash = location.hash;
                    }
					else {
						this.oldHash = '';
                    }

					var hash = '#icon';

					// Add icon name on all pages but item, spell and achievement pages (where the name is already available).
					var nameDisabled = (isset('g_pageInfo') && g_pageInfo.type && in_array([3, 6, 10], g_pageInfo.type) == -1);
					if (!nameDisabled)
						hash += ':' + this.data.icon;

					location.hash = hash;
				},

				onHide: function(form) {
					if (this.oldHash) {
						location.hash = this.oldHash;
                    }
					else {
						location.hash = '#.';
                    }
				},

				updateIcon: function(form) {
					this.iconDiv.update();
				},

				onSubmit: function(unused, data, button, form) {
					if (button == 'arrow') {
						var win = window.open(g_staticUrl + '/images/icons/large/' + data.icon.toLowerCase() + '.jpg', '_blank');
						win.focus();
						return false;
					}

					return true;
				}
			};
		}

		if (!Icon.icDialog) {
			Icon.icDialog = new Dialog();
        }

		Icon.icDialog.show('icondisplay', {data: {icon: icon}});
	},

	checkPound: function() {
		if (location.hash && location.hash.indexOf('#icon') == 0) {
			var parts = location.hash.split(':');
			var icon = false;
			if (parts.length == 2) {
				icon = parts[1];
			}
			else if (parts.length == 1 && isset('g_pageInfo')) {
				switch(g_pageInfo.type) {
					case 3: // Item
						icon = g_items[g_pageInfo.typeId].icon.toLowerCase();
						break;
					case 6: // Spell
						icon = g_spells[g_pageInfo.typeId].icon.toLowerCase();
						break;
					case 10: // Achievement
						icon = g_achievements[g_pageInfo.typeId].icon.toLowerCase();
						break;
				}
			}

			if (icon)
				Icon.displayIcon(icon);
		}
	}
};
DomContentLoaded.addEvent(Icon.checkPound);

var RedButton = {
	create: function (text, enabled, func) {
		var
            a = ce('a'),
            em = ce('em'),
            b = ce('b'),
            i = ce('i'),
            span = ce('span');

		a.href = 'javascript:;';
		a.className = 'button-red';

		ae(b, i);
		ae(em, b);
		ae(em, span);
		ae(a, em);

		RedButton.setText(a, text);
		RedButton.enable(a, enabled);
		RedButton.setFunc(a, func);

		return a;
	},

	setText: function (button, text) {
		st(button.firstChild.childNodes[0].firstChild, text); // em, b, i
		st(button.firstChild.childNodes[1], text); // em, span
	},

	enable: function (button, enabled) {
		if (enabled || enabled == null) {
			button.className = button.className.replace('button-red-disabled', '');
		}
        else if (button.className.indexOf('button-red-disabled') == -1) {
            button.className += ' button-red-disabled';
		}
	},

	setFunc: function (button, func) {
		button.onclick = (func ? func: null);
	}
};

var Tooltip = {
	create: function (h) {
		var f = ce("div"),
		k = ce("table"),
		b = ce("tbody"),
		e = ce("tr"),
		c = ce("tr"),
		a = ce("td"),
		j = ce("th"),
		i = ce("th"),
		g = ce("th");
		f.className = "tooltip";
		j.style.backgroundPosition = "top right";
		i.style.backgroundPosition = "bottom left";
		g.style.backgroundPosition = "bottom right";
		if (h) {
			a.innerHTML = h
		}
		ae(e, a);
		ae(e, j);
		ae(b, e);
		ae(c, i);
		ae(c, g);
		ae(b, c);
		ae(k, b);
		Tooltip.icon = ce("p");
		Tooltip.icon.style.visibility = "hidden";
		ae(Tooltip.icon, ce("div"));
		ae(f, Tooltip.icon);
		ae(f, k);
		return f
	},
	fix: function (d, b, f) {
		var e = gE(d, "table")[0],
		h = gE(e, "td")[0],
		g = h.childNodes;
		if (g.length >= 2 && g[0].nodeName == "TABLE" && g[1].nodeName == "TABLE") {
			g[0].style.whiteSpace = "nowrap";
			var a;
			if (g[1].offsetWidth > 300) {
				a = Math.max(300, g[0].offsetWidth) + 20
			} else {
				a = Math.max(g[0].offsetWidth, g[1].offsetWidth) + 20
			}
			if (a > 20) {
				d.style.width = a + "px";
				g[0].style.width = g[1].style.width = "100%";
				if (!b && d.offsetHeight > document.body.clientHeight) {
					e.className = "shrink"
				}
			}
		}
		if (f) {
			d.style.visibility = "visible"
		}
	},
	fixSafe: function (c, b, a) {
		if (Browser.ie) {
			setTimeout(Tooltip.fix.bind(this, c, b, a), 1)
		} else {
			Tooltip.fix(c, b, a)
		}
	},
	append: function (c, b) {
		var c = $(c);
		var a = Tooltip.create(b);
		ae(c, a);
		Tooltip.fixSafe(a, 1, 1)
	},
	prepare: function () {
		if (Tooltip.tooltip) {
			return
		}
		var b = Tooltip.create();
		b.style.position = "absolute";
		b.style.left = b.style.top = "-2323px";
		var a = ge("layers");
		ae(a, b);
		Tooltip.tooltip = b;
		Tooltip.tooltipTable = gE(b, "table")[0];
		Tooltip.tooltipTd = gE(b, "td")[0];
		if (Browser.ie6) {
			b = ce("iframe");
			b.src = "javascript:0;";
			b.frameBorder = 0;
			ae(a, b);
			Tooltip.iframe = b
		}
	},
	set: function (b) {
		var a = Tooltip.tooltip;
		a.style.width = "550px";
		a.style.left = "-2323px";
		a.style.top = "-2323px";
		Tooltip.tooltipTd.innerHTML = b;
		a.style.display = "";
		Tooltip.fix(a, 0, 0)
	},
	moveTests: [[null, null], [null, false], [false, null], [false, false]],
	move: function (m, l, d, o, c, a) {
		if (!Tooltip.tooltipTable) {
			return
		}
		var k = Tooltip.tooltip,
		g = Tooltip.tooltipTable.offsetWidth,
		b = Tooltip.tooltipTable.offsetHeight,
		p;
		k.style.width = g + "px";
		var j, e;
		for (var f = 0, h = Tooltip.moveTests.length; f < h; ++f) {
			p = Tooltip.moveTests[f];
			j = Tooltip.moveTest(m, l, d, o, c, a, p[0], p[1]);
            break;
		}
		k.style.left = j.l + "px";
		k.style.top = j.t + "px";
		k.style.visibility = "visible";
		if (Browser.ie6 && Tooltip.iframe) {
			var p = Tooltip.iframe;
			p.style.left = j.l + "px";
			p.style.top = j.t + "px";
			p.style.width = g + "px";
			p.style.height = b + "px";
			p.style.display = "";
			p.style.visibility = "visible"
		}
	},
	moveTest: function (e, l, o, z, c, a, m, b) {
		var k = e,
		y = l,
		f = Tooltip.tooltip,
		i = Tooltip.tooltipTable.offsetWidth,
		q = Tooltip.tooltipTable.offsetHeight,
		g = g_getWindowSize(),
		j = g_getScroll(),
		h = g.w,
		p = g.h,
		d = j.x,
		w = j.y,
		v = d,
		u = w,
		t = d + h,
		r = w + p;
		if (m == null) {
			m = (e + o + i <= t)
		}
		if (b == null) {
			b = (l - q >= u)
		}
		if (m) {
			e += o + c
		} else {
			e = Math.max(e - i, v) - c
		}
		if (b) {
			l -= q + a
		} else {
			l += z + a
		}
		if (e < v) {
			e = v
		} else {
			if (e + i > t) {
				e = t - i
			}
		}
		if (l < u) {
			l = u
		} else {
			if (l + q > r) {
				l = Math.max(w, r - q)
			}
		}
		if (Tooltip.iconVisible) {
			if (k >= e - 48 && k <= e && y >= l - 4 && y <= l + 48) {
				l -= 48 - (y - l)
			}
		}
		return g_createRect(e, l, i, q)
	},
	show: function (f, e, d, b, c) {
		if (Tooltip.disabled) {
			return
		}
		if (!d || d < 1) {
			d = 1
		}
		if (!b || b < 1) {
			b = 1
		}
		if (c) {
			e = '<span class="' + c + '">' + e + "</span>"
		}
		var a = ac(f);
		Tooltip.prepare();
		Tooltip.set(e);
		Tooltip.move(a.x, a.y, f.offsetWidth, f.offsetHeight, d, b)
	},
	showAtCursor: function (d, f, c, a, b) {
		if (Tooltip.disabled) {
			return
		}
		if (!c || c < 10) {
			c = 10
		}
		if (!a || a < 10) {
			a = 10
		}
		if (b) {
			f = '<span class="' + b + '">' + f + "</span>"
		}
		d = $E(d);
		var g = g_getCursorPos(d);
		Tooltip.prepare();
		Tooltip.set(f);
		Tooltip.move(g.x, g.y, 0, 0, c, a)
	},
	showAtXY: function (d, a, e, c, b) {
		if (Tooltip.disabled) {
			return
		}
		Tooltip.prepare();
		Tooltip.set(d);
		Tooltip.move(a, e, 0, 0, c, b)
	},
	cursorUpdate: function (b, a, d) {
		if (Tooltip.disabled || !Tooltip.tooltip) {
			return
		}
		b = $E(b);
		if (!a || a < 10) {
			a = 10
		}
		if (!d || d < 10) {
			d = 10
		}
		var c = g_getCursorPos(b);
		Tooltip.move(c.x, c.y, 0, 0, a, d)
	},
	hide: function () {
		if (Tooltip.tooltip) {
			Tooltip.tooltip.style.display = "none";
			Tooltip.tooltip.visibility = "hidden";
			Tooltip.tooltipTable.className = "";
			if (Browser.ie6) {
				Tooltip.iframe.style.display = "none"
			}
			Tooltip.setIcon(null);
		}
	},
	setIcon: function (a) {
		Tooltip.prepare();
		if (a) {
			Tooltip.icon.style.backgroundImage = "url(images/icons/medium/" + a.toLowerCase() + ".jpg)";
			Tooltip.icon.style.visibility = "visible"
		} else {
			Tooltip.icon.style.backgroundImage = "none";
			Tooltip.icon.style.visibility = "hidden"
		}
		Tooltip.iconVisible = a ? 1 : 0
	}
};
var g_listviews = {};
function Listview(a) {
	cO(this, a);
	if (this.id) {
		var o = (this.tabs ? "tab-": "lv-") + this.id;
		if (this.parent) {
			var l = ce("div");
			l.id = o;
			ae($(this.parent), l);
			this.container = l
		} else {
			this.container = ge(o)
		}
	} else {
		return
	}
	var c = g_getGets();
	if ((c.debug != null || g_user.debug) && g_user.roles & 26) {
		this.debug = true
	}
	if (this.template && Listview.templates[this.template]) {
		this.template = Listview.templates[this.template]
	} else {
		return
	}
	g_listviews[this.id] = this;
	if (this.data == null) {
		this.data = []
	}
	if (this.poundable == null) {
		if (this.template.poundable != null) {
			this.poundable = this.template.poundable
		} else {
			this.poundable = true
		}
	}
	if (this.searchable == null) {
		if (this.template.searchable != null) {
			this.searchable = this.template.searchable
		} else {
			this.searchable = false
		}
	}
	if (this.filtrable == null) {
		if (this.template.filtrable != null) {
			this.filtrable = this.template.filtrable
		} else {
			this.filtrable = false
		}
	}
	if (this.data.length == 1) {
		this.filtrable = false;
		this.searchable = false
	}
	if (this.searchable && this.searchDelay == null) {
		if (this.template.searchDelay != null) {
			this.searchDelay = this.template.searchDelay
		} else {
			this.searchDelay = 333
		}
	}
	if (this.clickable == null) {
		if (this.template.clickable != null) {
			this.clickable = this.template.clickable
		} else {
			this.clickable = true
		}
	}
	if (this.hideBands == null) {
		this.hideBands = this.template.hideBands
	}
	if (this.hideNav == null) {
		this.hideNav = this.template.hideNav
	}
	if (this.hideHeader == null) {
		this.hideHeader = this.template.hideHeader
	}
	if (this.hideCount == null) {
		this.hideCount = this.template.hideCount
	}
	if (this.computeDataFunc == null && this.template.computeDataFunc != null) {
		this.computeDataFunc = this.template.computeDataFunc
	}
	if (this.createCbControls == null && this.template.createCbControls != null) {
		this.createCbControls = this.template.createCbControls
	}
	if (this.template.onBeforeCreate != null) {
		if (this.onBeforeCreate == null) {
			this.onBeforeCreate = this.template.onBeforeCreate
		} else {
			this.onBeforeCreate = [this.template.onBeforeCreate, this.onBeforeCreate]
		}
	}
	if (this.onAfterCreate == null && this.template.onAfterCreate != null) {
		this.onAfterCreate = this.template.onAfterCreate
	}
	if (this.onNoData == null && this.template.onNoData != null) {
		this.onNoData = this.template.onNoData
	}
	if (this.createNote == null && this.template.createNote != null) {
		this.createNote = this.template.createNote
	}
	if (this.customFilter == null && this.template.customFilter != null) {
		this.customFilter = this.template.customFilter
	}
	if (this.onSearchSubmit == null && this.template.onSearchSubmit != null) {
		this.onSearchSubmit = this.template.onSearchSubmit
	}
	if (this.clip == null && this.template.clip != null) {
		this.clip = this.template.clip
	}
	if (this.mode == null) {
		this.mode = this.template.mode
	}
	if (this.nItemsPerPage == null) {
		if (this.template.nItemsPerPage != null) {
			this.nItemsPerPage = this.template.nItemsPerPage
		} else {
			this.nItemsPerPage = 50
		}
	}
	this.nItemsPerPage |= 0;
	if (this.nItemsPerPage <= 0) {
		this.nItemsPerPage = 0
	}
	this.nFilters = 0;
	this.resetRowVisibility();
	if (this.mode == Listview.MODE_TILED) {
		if (this.nItemsPerRow == null) {
			var t = this.template.nItemsPerRow;
			this.nItemsPerRow = (t != null ? t: 4)
		}
		this.nItemsPerRow |= 0;
		if (this.nItemsPerRow <= 1) {
			this.nItemsPerRow = 1
		}
	} else {
		this.nItemsPerRow = 1
	}
	this.columns = [];
	for (var f = 0, k = this.template.columns.length; f < k; ++f) {
		var r = this.template.columns[f],
		e = {};
		cO(e, r);
		this.columns.push(e)
	}
	if (this.extraCols != null) {
		for (var f = 0, k = this.extraCols.length; f < k; ++f) {
			var m = null;
			var b = this.extraCols[f];
			if (b.after || b.before) {
				var j = in_array(this.columns, (b.after ? b.after: b.before), function (d) {
					return d.id
				});
				if (j != -1) {
					m = (b.after ? j + 1 : j - 1)
				}
			}
			if (m == null) {
				m = this.columns.length
			}
			if (b.id == "debug-id") {
				this.columns.splice(0, 0, b)
			} else {
				this.columns.splice(m, 0, b)
			}
		}
	}
	this.visibility = [];
	var p = [],
	q = [];
	if (this.visibleCols != null) {
		array_walk(this.visibleCols, function (d) {
			p[d] = 1
		})
	}
	if (this.hiddenCols != null) {
		array_walk(this.hiddenCols, function (d) {
			q[d] = 1
		})
	}
	for (var f = 0, k = this.columns.length; f < k; ++f) {
		var b = this.columns[f];
		if (p[b.id] != null || (!b.hidden && q[b.id] == null)) {
			this.visibility.push(f)
		}
	}
	if (this.sort == null && this.template.sort) {
		this.sort = this.template.sort.slice(0)
	}
	if (this.sort != null) {
		var h = this.sort;
		this.sort = [];
		for (var f = 0, k = h.length; f < k; ++f) {
			var b = parseInt(h[f]);
			if (isNaN(b)) {
				var g = 0;
				if (h[f].charAt(0) == "-") {
					g = 1;
					h[f] = h[f].substring(1)
				}
				var j = in_array(this.columns, h[f], function (d) {
					return d.id
				});
				if (j != -1) {
					if (g) {
						this.sort.push( - (j + 1))
					} else {
						this.sort.push(j + 1)
					}
				}
			} else {
				this.sort.push(b)
			}
		}
	} else {
		this.sort = []
	}
	if ((this.debug || g_user.debug) && this.id != "topics" && this.id != "recipes") {
		this.columns.splice(0, 0, {
			id: "debug-id",
			value: "id",
			name: "ID",
			width: "5%",
			tooltip: "ID"
		});
		this.visibility.splice(0, 0, -1);
		for (var f = 0, k = this.visibility.length; f < k; ++f) {
			this.visibility[f] = this.visibility[f] + 1
		}
		for (var f = 0, k = this.sort.length; f < k; ++f) {
			if (this.sort[f] < 0) {
				this.sort[f] = this.sort[f] - 1
			} else {
				this.sort[f] = this.sort[f] + 1
			}
		}
	}
	if (this.tabs) {
		this.tabIndex = this.tabs.add(this.getTabName(), {
			id: this.id,
			onLoad: this.initialize.bind(this)
		})
	} else {
		this.initialize()
	}
}
Listview.MODE_DEFAULT = 0;
Listview.MODE_CHECKBOX = 1;
Listview.MODE_DIV = 2;
Listview.MODE_TILED = 3;
Listview.prototype = {
	initialize: function () {
		if (this.data.length) {
			if (this.computeDataFunc != null) {
				for (var d = 0, a = this.data.length; d < a; ++d) {
					this.computeDataFunc(this.data[d])
				}
			}
		}
		if (this.tabs) {
			this.pounded = (this.tabs.poundedTab == this.tabIndex);
			if (this.pounded) {
				this.readPound()
			}
		} else {
			this.readPound()
		}
		this.applySort();
		var b;
		if (this.onBeforeCreate != null) {
			if (typeof this.onBeforeCreate == "function") {
				b = this.onBeforeCreate()
			} else {
				for (var d = 0; d < this.onBeforeCreate.length; ++d) { (this.onBeforeCreate[d].bind(this))()
				}
			}
		}
		this.noData = ce("div");
		this.noData.className = "listview-nodata text";
		if (this.mode == Listview.MODE_DIV) {
			this.mainContainer = this.mainDiv = ce("div");
			this.mainContainer.className = "listview-mode-div"
		} else {
			this.mainContainer = this.table = ce("table");
			this.thead = ce("thead");
			this.tbody = ce("tbody");
			if (this.clickable) {
				this.tbody.className = "clickable"
			}
			if (this.mode == Listview.MODE_TILED) {
				this.table.className = "listview-mode-tiled";
				var e = (100 / this.nItemsPerRow) + "%",
				f = ce("colgroup"),
				c;
				for (var d = 0; d < this.nItemsPerRow; ++d) {
					c = ce("col");
					c.style.width = e;
					ae(f, c)
				}
				ae(this.mainContainer, f)
			} else {
				this.table.className = "listview-mode-default";
				this.createHeader();
				this.updateSortArrow()
			}
			ae(this.table, this.thead);
			ae(this.table, this.tbody);
			if (this.mode == Listview.MODE_CHECKBOX && Browser.ie) {
				setTimeout(Listview.cbIeFix.bind(this), 1)
			}
		}
		this.createBands();
		if (this.customFilter != null) {
			this.updateFilters()
		}
		this.updateNav();
		this.refreshRows();
		if (this.onAfterCreate != null) {
			this.onAfterCreate(b)
		}
	},
	createHeader: function () {
		var h = ce("tr");
		if (this.mode == Listview.MODE_CHECKBOX) {
			var g = ce("th"),
			j = ce("div"),
			c = ce("a");
			g.style.width = "33px";
			c.href = "javascript:;";
			c.className = "listview-cb";
			ns(c);
			ae(c, ct(String.fromCharCode(160)));
			ae(j, c);
			ae(g, j);
			ae(h, g)
		}
		for (var f = 0, b = this.visibility.length; f < b; ++f) {
			var e = this.visibility[f],
			d = this.columns[e],
			g = ce("th");
			j = ce("div"),
			c = ce("a"),
			outerSpan = ce("span"),
			innerSpan = ce("span");
			d.__th = g;
			c.href = "javascript:;";
			if (this.filtrable && (d.filtrable == null || d.filtrable)) {
				c.onmouseup = Listview.headerClick.bind(this, d, e);
				c.onclick = c.oncontextmenu = rf
			} else {
				c.onclick = this.sortBy.bind(this, e + 1)
			}
			c.onmouseover = Listview.headerOver.bind(this, c, d);
			c.onmouseout = Tooltip.hide;
			ns(c);
			if (d.width != null) {
				g.style.width = d.width
			}
			if (d.align != null) {
				g.style.textAlign = d.align
			}
			if (d.span != null) {
				g.colSpan = d.span
			}
			ae(innerSpan, ct(d.name));
			ae(outerSpan, innerSpan);
			ae(c, outerSpan);
			ae(j, c);
			ae(g, j);
			ae(h, g)
		}
		if (this.hideHeader) {
			this.thead.style.display = "none"
		}
		ae(this.thead, h)
	},
	createBands: function () {
		var j = ce("div"),
		l = ce("div"),
		m = ce("div"),
		k = ce("div");
		this.bandTop = j;
		this.bandBot = l;
		this.noteTop = m;
		this.noteBot = k;
		j.className = "listview-band-top";
		l.className = "listview-band-bottom";
		this.navTop = this.createNav(true);
		this.navBot = this.createNav(false);
		m.className = k.className = "listview-note";
		if (this.note) {
			m.innerHTML = this.note;
			var e = g_getGets();
			if (this.note.indexOf("fi_toggle()") > -1 && !e.filter) {
				fi_toggle()
			}
		} else {
			if (this.createNote) {
				this.createNote(m, k)
			}
		}
		if (this.debug && this.id != "topics") {
			ae(m, ct(" ("));
			var b = ce("a");
			b.onclick = this.getList.bind(this);
			ae(b, ct("CSV"));
			ae(m, b);
			ae(m, ct(")"))
		}
		if (!m.firstChild && this.mode != Listview.MODE_CHECKBOX) {
			ae(m, ct(String.fromCharCode(160)))
		}
		if (this.mode != Listview.MODE_CHECKBOX) {
			ae(k, ct(String.fromCharCode(160)))
		}
		ae(j, this.navTop);
		if (this.searchable) {
			var o = this.updateFilters.bind(this, true),
			f = (this._truncated ? "search-within-results2": "search-within-results"),
			d = ce("span"),
			c = ce("em"),
			i = ce("a"),
			h = ce("input");
			d.className = "listview-quicksearch";
			ae(d, c);
			i.href = "javascript:;";
			i.onclick = function () {
				var a = this.nextSibling;
				a.value = "";
				a.className = f;
				o()
			};
			i.style.display = "none";
			ae(i, ce("span"));
			ae(d, i);
			ns(i);
			h.setAttribute("type", "text");
			h.className = f;
			h.style.width = (this._truncated ? "19em": "15em");
			g_onAfterTyping(h, o, this.searchDelay);
			h.onmouseover = function () {
				if (trim(this.value) != "") {
					this.className = ""
				}
			};
			h.onfocus = function () {
				this.className = ""
			};
			h.onblur = function () {
				if (trim(this.value) == "") {
					this.className = f;
					this.value = ""
				}
			};
			h.onkeypress = this.submitSearch.bind(this);
			if (Browser.ie) {
				setTimeout(function () {
					h.value = ""
				},
				1)
			}
			ae(d, h);
			this.quickSearchBox = h;
			this.quickSearchGlass = c;
			this.quickSearchClear = i;
			ae(j, d)
		}
		ae(j, m);
		ae(l, this.navBot);
		ae(l, k);
		if (this.mode == Listview.MODE_CHECKBOX) {
			if (this.note) {
				m.style.paddingBottom = "5px"
			}
			this.cbBarTop = this.createCbBar(true);
			this.cbBarBot = this.createCbBar(false);
			ae(j, this.cbBarTop);
			ae(l, this.cbBarBot);
			if (!this.noteTop.firstChild && !this.cbBarTop.firstChild) {
				this.noteTop.innerHTML = "&nbsp;"
			}
			if (!this.noteBot.firstChild && !this.cbBarBot.firstChild) {
				this.noteBot.innerHTML = "&nbsp;"
			}
			if (this.noteTop.firstChild && this.cbBarTop.firstChild) {
				this.noteTop.style.paddingBottom = "6px"
			}
			if (this.noteBot.firstChild && this.cbBarBot.firstChild) {
				this.noteBot.style.paddingBottom = "6px"
			}
		}
		if (this.hideBands & 1) {
			j.style.display = "none"
		}
		if (this.hideBands & 2) {
			l.style.display = "none"
		}
		ae(this.container, this.bandTop);
		if (this.clip) {
			var g = ce("div");
			g.className = "listview-clip";
			g.style.width = this.clip.w + "px";
			g.style.height = this.clip.h + "px";
			this.clipDiv = g;
			ae(g, this.mainContainer);
			ae(g, this.noData);
			ae(this.container, g)
		} else {
			ae(this.container, this.mainContainer);
			ae(this.container, this.noData)
		}
		ae(this.container, this.bandBot)
	},
	createNav: function (g) {
		var c = ce("div"),
		d = ce("a"),
		b = ce("a"),
		a = ce("a"),
		j = ce("a"),
		i = ce("span"),
		h = ce("b"),
		f = ce("b"),
		e = ce("b");
		c.className = "listview-nav";
		d.href = b.href = a.href = j.href = "javascript:;";
		ae(d, ct(String.fromCharCode(171) + LANG.lvpage_first));
		ae(b, ct(String.fromCharCode(8249) + LANG.lvpage_previous));
		ae(a, ct(LANG.lvpage_next + String.fromCharCode(8250)));
		ae(j, ct(LANG.lvpage_last + String.fromCharCode(187)));
		ns(d);
		ns(b);
		ns(a);
		ns(j);
		d.onclick = this.firstPage.bind(this);
		b.onclick = this.previousPage.bind(this);
		a.onclick = this.nextPage.bind(this);
		j.onclick = this.lastPage.bind(this);
		ae(h, ct("a"));
		ae(f, ct("a"));
		ae(e, ct("a"));
		ae(i, h);
		ae(i, ct(LANG.hyphen));
		ae(i, f);
		ae(i, ct(LANG.lvpage_of));
		ae(i, e);
		ae(c, d);
		ae(c, b);
		ae(c, i);
		ae(c, a);
		ae(c, j);
		if (g) {
			if (this.hideNav & 1) {
				c.style.display = "none"
			}
		} else {
			if (this.hideNav & 2) {
				c.style.display = "none"
			}
		}
		return c
	},
    createCbBar: function (a) {
		var b = ce("div");
		if (this.createCbControls) {
			this.createCbControls(b, a)
		}
		if (b.firstChild) {
			b.className = "listview-withselected" + (a ? "": "2")
		}
		return b
	},
	refreshRows: function () {
		var a = (this.mode == Listview.MODE_DIV ? this.mainContainer: this.tbody);
		ee(a);
		if (this.nRowsVisible == 0) {
			if (!this.filtered) {
				this.bandTop.style.display = this.bandBot.style.display = "none";
				this.mainContainer.style.display = "none"
			}
			this.noData.style.display = "";
			this.showNoData();
			return
		}
		var o, b, c;
		if (! (this.hideBands & 1)) {
			this.bandTop.style.display = ""
		}
		if (! (this.hideBands & 2)) {
			this.bandBot.style.display = ""
		}
		if (this.nItemsPerPage > 0) {
			o = this.rowOffset;
			b = Math.min(o + this.nRowsVisible, o + this.nItemsPerPage);
			if (this.filtered && this.rowOffset > 0) {
				for (var f = 0, g = 0; f < this.data.length && g < this.rowOffset; ++f) {
					var p = this.data[f];
					if (p.__hidden || p.__deleted) {++o
					} else {++g
					}
				}
				b += (o - this.rowOffset)
			}
		} else {
			o = 0;
			b = this.nRowsVisible
		}
		var h = b - o;
		if (this.mode == Listview.MODE_DIV) {
			for (var e = 0; e < h; ++e) {
				var f = o + e,
				p = this.data[f];
				if (!p) {
					break
				}
				if (p.__hidden || p.__deleted) {++h;
					continue
				}
				ae(this.mainDiv, this.getDiv(f))
			}
		} else {
			if (this.mode == Listview.MODE_TILED) {
				var d = 0,
				l = ce("tr");
				for (var e = 0; e < h; ++e) {
					var f = o + e,
					p = this.data[f];
					if (!p) {
						break
					}
					if (p.__hidden || p.__deleted) {++h;
						continue
					}
					ae(l, this.getCell(f));
					if (++d == this.nItemsPerRow) {
						ae(this.tbody, l);
						if (e + 1 < h) {
							l = ce("tr")
						}
						d = 0
					}
				}
				if (d != 0) {
					for (; d < 4; ++d) {
						var m = ce("td");
						m.className = "empty-cell";
						ae(l, m)
					}
					ae(this.tbody, l)
				}
			} else {
				for (var e = 0; e < h; ++e) {
					var f = o + e,
					p = this.data[f];
					if (!p) {
						break
					}
					if (p.__hidden || p.__deleted) {++h;
						continue
					}
					ae(this.tbody, this.getRow(f))
				}
			}
		}
		this.mainContainer.style.display = "";
		this.noData.style.display = "none"
	},
	showNoData: function () {
		var b = this.noData;
		ee(b);
		var a = -1;
		if (this.onNoData) {
			a = (this.onNoData.bind(this, b))()
		}
		if (a == -1) {
			ae(this.noData, ct(this.filtered ? LANG.lvnodata2: LANG.lvnodata))
		}
	},
	getDiv: function (a) {
		var b = this.data[a];
		if (b.__div == null || this.minPatchVersion != b.__minPatch) {
			this.createDiv(b, a)
		}
		return b.__div
	},
	createDiv: function (b, a) {
		var c = ce("div");
		b.__div = c;
		if (this.minPatchVersion) {
			b.__minPatch = this.minPatchVersion
		} (this.template.compute.bind(this, b, c, a))()
	},
	getCell: function (a) {
		var b = this.data[a];
		if (b.__div == null) {
			this.createCell(b, a)
		}
		return b.__td
	},
	createCell: function (b, a) {
		var c = ce("td");
		b.__td = c;
		(this.template.compute.bind(this, b, c, a))();
		if (this.template.getItemLink) {
			c.onclick = this.itemClick.bind(this, b)
		}
		if (Browser.ie6) {
			c.onmouseover = Listview.itemOver;
			c.onmouseout = Listview.itemOut
		}
	},
	getRow: function (a) {
		var b = this.data[a];
		if (b.__tr == null) {
			this.createRow(b)
		}
		return b.__tr
	},
	setRow: function (a) {
		if (this.data[a.pos]) {
			this.data[a.pos] = a;
			this.data[a.pos].__tr = a.__tr;
			this.createRow(this.data[a.pos]);
			this.refreshRows()
		}
	},
	createRow: function (j) {
		var g = ce("tr");
		j.__tr = g;
		if (this.mode == Listview.MODE_CHECKBOX) {
			var c = ce("td");
			if (!j.__nochk) {
				c.className = "listview-cb";
				c.onclick = Listview.cbCellClick;
				var b = ce("input");
				ns(b);
				b.type = "checkbox";
				b.onclick = Listview.cbClick;
				if (j.__chk) {
					b.checked = true;
					if (Browser.ie) {
						b.defaultChecked = true
					}
				}
				j.__cb = b;
				ae(c, b)
			}
			ae(g, c)
		}
		for (var d = 0, e = this.visibility.length; d < e; ++d) {
			var f = this.visibility[d],
			a = this.columns[f],
			c = ce("td"),
			h;
			if (a.align != null) {
				c.style.textAlign = a.align
			}
			if (a.compute) {
				h = (a.compute.bind(this, j, c, g, f))()
			} else {
				if (j[a.value] != null) {
					h = j[a.value]
				} else {
					h = -1
				}
			}
			if (h != -1 && h != null) {
				c.insertBefore(ct(h), c.firstChild)
			}
			ae(g, c)
		}
		if (this.mode == Listview.MODE_CHECKBOX && j.__chk) {
			g.className = "checked"
		}
		if (this.template.getItemLink) {
			g.onclick = this.itemClick.bind(this, j)
		}
		if (Browser.ie6) {
			g.onmouseover = Listview.itemOver;
			g.onmouseout = Listview.itemOut
		}
	},
	itemClick: function (d, c) {
		c = $E(c);
		var a = 0,
		b = c._target;
		while (b && a < 3) {
			if (b.nodeName == "A") {
				return
			}
			b = b.parentNode
		}
		location.href = this.template.getItemLink(d)
	},
	submitSearch: function (c) {
		c = $E(c);
		if (!this.onSearchSubmit || c.keyCode != 13) {
			return
		}
		for (var b = 0, a = this.data.length; b < a; ++b) {
			if (this.data[b].__hidden) {
				continue
			} (this.onSearchSubmit.bind(this, this.data[b]))()
		}
	},
	validatePage: function () {
		var c = this.nItemsPerPage,
		b = this.rowOffset,
		a = this.nRowsVisible;
		if (b < 0) {
			this.rowOffset = 0
		} else {
			this.rowOffset = this.getRowOffset(b + c > a ? a - 1 : b)
		}
	},
	getRowOffset: function (b) {
		var a = this.nItemsPerPage;
		return (a > 0 && b > 0 ? Math.floor(b / a) * a: 0)
	},
	resetRowVisibility: function () {
		for (var b = 0, a = this.data.length; b < a; ++b) {
			this.data[b].__hidden = false
		}
		this.filtered = false;
		this.rowOffset = 0;
		this.nRowsVisible = this.data.length
	},
	getColText: function (b, a) {
		if (a.getVisibleText) {
			return a.getVisibleText(b)
		}
		if (a.getValue) {
			return a.getValue(b)
		}
		if (a.value) {
			return b[a.value]
		}
		if (a.compute) {
			return a.compute(b)
		}
		return ""
	},
	updateFilters: function (d) {
		Tooltip.hide();
		this.resetRowVisibility();
		var z, r, c;
		if (this.searchable) {
			this.quickSearchBox.parentNode.style.display = "";
			z = trim(this.quickSearchBox.value);
			if (z) {
				this.quickSearchGlass.style.display = "none";
				this.quickSearchClear.style.display = "";
				z = z.toLowerCase().replace(/\s+/g, " ");
				r = z.split(" ");
				c = r.length
			} else {
				this.quickSearchGlass.style.display = "";
				this.quickSearchClear.style.display = "none"
			}
		} else {
			if (this.quickSearchBox) {
				this.quickSearchBox.parentNode.style.display = "none"
			}
		}
		if (!z && this.nFilters == 0 && this.customFilter == null) {
			if (d) {
				this.updateNav();
				this.refreshRows()
			}
			return
		}
		var C = {
			1 : function (i, j) {
				return i > j
			},
			2 : function (i, j) {
				return i == j
			},
			3 : function (i, j) {
				return i < j
			},
			4 : function (i, j) {
				return i >= j
			},
			5 : function (i, j) {
				return i <= j
			},
			6 : function (i, k, j) {
				return k <= i && i <= j
			}
		};
		var q = {
			1 : function (j, i, k) {
				return i > k
			},
			2 : function (j, i, k) {
				return j <= k && k <= i
			},
			3 : function (j, i, k) {
				return j < k
			},
			4 : function (j, i, k) {
				return i >= k
			},
			5 : function (j, i, k) {
				return j <= k
			},
			6 : function (j, i, E, k) {
				return E <= i && j <= k
			}
		};
		var p = 0;
		for (var w = 0, y = this.data.length; w < y; ++w) {
			var g = this.data[w],
			m = 0;
			nSearchMatches = 0,
			matches = [];
			g.__hidden = true;
			if (this.customFilter && !this.customFilter(g, w)) {
				continue
			}
			for (var v = 0, h = this.visibility.length; v < h; ++v) {
				var o = this.visibility[v];
				var e = this.columns[o];
				if (e.__filter) {
					var a = e.__filter,
					b = false;
					if (e.type == null || e.type == "num" || a.type > 0) {
						var t = null;
						if (e.getValue) {
							t = e.getValue(g)
						} else {
							if (e.value) {
								t = parseFloat(g[e.value])
							}
						}
						if (!t) {
							t = 0
						}
						b = (C[a.type])(t, a.value, a.value2)
					} else {
						if (e.type == "range") {
							var D = e.getMinValue(g),
							B = e.getMaxValue(g);
							b = (q[a.type])(D, B, a.value, a.value2)
						} else {
							var l = this.getColText(g, e);
							if (l) {
								l = l.toString().toLowerCase();
								if (a.invert) {
									b = l.match(a.regex) != null
								} else {
									var A = 0;
									for (var u = 0, f = a.words.length; u < f; ++u) {
										if (l.indexOf(a.words[u]) != -1) {++A
										} else {
											break
										}
									}
									b = (A == a.words.length)
								}
							}
						}
					}
					if (a.invert) {
						b = !b
					}
					if (b) {++m
					} else {
						break
					}
				}
				if (z) {
					var l = this.getColText(g, e);
					if (l) {
						l = l.toString().toLowerCase();
						for (var u = 0, f = r.length; u < f; ++u) {
							if (!matches[u]) {
								if (l.indexOf(r[u]) != -1) {
									matches[u] = 1; ++nSearchMatches
								}
							}
						}
					}
				}
			}
			if (g.__alwaysvisible || ((this.nFilters == 0 || m == this.nFilters) && (!z || nSearchMatches == c))) {
				g.__hidden = false; ++p
			}
		}
		this.filtered = (p < this.data.length);
		this.nRowsVisible = p;
		if (d) {
			this.updateNav();
			this.refreshRows()
		}
	},
	changePage: function () {
		this.validatePage();
		this.refreshRows();
		this.updateNav();
		this.updatePound();
		var a = g_getScroll(),
		b = ac(this.container);
		if (a.y > b[1]) {
			scrollTo(a.x, b[1])
		}
	},
	firstPage: function () {
		this.rowOffset = 0;
		this.changePage();
		return false
	},
	previousPage: function () {
		this.rowOffset -= this.nItemsPerPage;
		this.changePage();
		return false
	},
	nextPage: function () {
		this.rowOffset += this.nItemsPerPage;
		this.changePage();
		return false
	},
	lastPage: function () {
		this.rowOffset = 99999999;
		this.changePage();
		return false
	},
	addSort: function (a, c) {
		var b = in_array(a, Math.abs(c), function (d) {
			return Math.abs(d)
		});
		if (b != -1) {
			c = a[b];
			a.splice(b, 1)
		}
		a.splice(0, 0, c)
	},
	sortBy: function (a) {
		if (a <= 0 || a > this.columns.length) {
			return
		}
		if (Math.abs(this.sort[0]) == a) {
			this.sort[0] = -this.sort[0]
		} else {
			var b = -1;
			if (this.columns[a-1].type == "text") {
				b = 1
			}
			this.addSort(this.sort, b * a)
		}
		this.applySort();
		this.refreshRows();
		this.updateSortArrow();
		this.updatePound()
	},
	applySort: function () {
		if (this.sort.length == 0) {
			return
		}
		Listview.sort = this.sort;
		Listview.columns = this.columns;
		if (this.indexCreated) {
			this.data.sort(Listview.sortIndexedRows)
		} else {
			this.data.sort(Listview.sortRows)
		}
		this.updateSortIndex()
	},
	setSort: function (b, c, a) {
		if (this.sort.toString() != b.toString()) {
			this.sort = b;
			this.applySort();
			if (c) {
				this.refreshRows()
			}
			if (a) {
				this.updatePound()
			}
		}
	},
	readPound: function () {
		if (!this.poundable || !location.hash.length) {
			return false
		}
		var b = location.hash.substr(1);
		if (this.tabs) {
			var g = b.indexOf(":");
			if (g == -1) {
				return false
			}
			b = b.substr(g + 1)
		}
		var a = parseInt(b);
		if (!isNaN(a)) {
			this.rowOffset = a;
			this.validatePage();
			if (this.poundable != 2) {
				var d = [];
				var f = b.match(/(\+|\-)[0-9]+/g);
				if (f != null) {
					for (var c = f.length - 1; c >= 0; --c) {
						var e = parseInt(f[c]) | 0;
						var b = Math.abs(e);
						if (b <= 0 || b > this.columns.length) {
							break
						}
						this.addSort(d, e)
					}
					this.setSort(d, false, false)
				}
			}
			if (this.tabs) {
				this.tabs.setTabPound(this.tabIndex, this.getTabPound())
			}
		}
	},
	updateSortArrow: function () {
		if (!this.sort.length || !this.thead || this.mode == Listview.MODE_TILED) {
			return
		}
		var a = in_array(this.visibility, Math.abs(this.sort[0]) - 1);
		if (a == -1) {
			return
		}
		if (this.mode == Listview.MODE_CHECKBOX) {
			a += 1
		}
		var b = this.thead.firstChild.childNodes[a].firstChild.firstChild.firstChild;
		if (this.lsa && this.lsa != b) {
			this.lsa.className = ""
		}
		b.className = (this.sort[0] < 0 ? "sortdesc": "sortasc");
		this.lsa = b
	},
	updateSortIndex: function () {
		var b = this.data;
		for (var c = 0, a = b.length; c < a; ++c) {
			b[c].__si = c
		}
		this.indexCreated = true
	},
	updateTabName: function () {
		if (this.tabs && this.tabIndex != null) {
			this.tabs.setTabName(this.tabIndex, this.getTabName())
		}
	},
	updatePound: function () {
		if (!this.poundable) {
			return
		}
		var a = this.getTabPound();
		if (this.tabs) {
			this.tabs.setTabPound(this.tabIndex, a);
			location.replace("#" + this.id + ":" + a)
		} else {
			location.replace("#" + a)
		}
	},
	updateNav: function () {
		var e = [this.navTop, this.navBot],
		j = this.nItemsPerPage,
		h = this.rowOffset,
		d = this.nRowsVisible,
		g = 0,
		b = 0,
		f = 0,
		k = 0;
		if (d > 0) {
			if (! (this.hideNav & 1)) {
				e[0].style.display = ""
			}
			if (! (this.hideNav & 2)) {
				e[1].style.display = ""
			}
		} else {
			e[0].style.display = e[1].style.display = "none"
		}
		if (j) {
			if (h > 0) {
				b = 1;
				if (h >= j + j) {
					g = 1
				}
			}
			if (h + j < d) {
				f = 1;
				if (h + j + j < d) {
					k = 1
				}
			}
		}
		for (var c = 0; c < 2; ++c) {
			var a = e[c].childNodes;
			a[0].style.display = (g ? "": "none");
			a[1].style.display = (b ? "": "none");
			a[3].style.display = (f ? "": "none");
			a[4].style.display = (k ? "": "none");
			a = a[2].childNodes;
			a[0].firstChild.nodeValue = h + 1;
			a[2].firstChild.nodeValue = j ? Math.min(h + j, d) : d;
			a[4].firstChild.nodeValue = d
		}
	},
	getTabName: function () {
		var b = this.name,
		d = this.data.length;
		for (var c = 0, a = this.data.length; c < a; ++c) {
			if (this.data[c].__hidden || this.data[c].__deleted) {--d
			}
		}
		if (d > 0 && !this.hideCount) {
			b += sprintf(LANG.qty, d)
		}
		return b
	},
	getTabPound: function () {
		var a = "";
		a += this.rowOffset;
		if (this.poundable != 2 && this.sort.length) {
			a += ("+" + this.sort.join("+")).replace(/\+\-/g, "-")
		}
		return a
	},
	getCheckedRows: function () {
		var d = [];
		for (var c = 0, a = this.data.length; c < a; ++c) {
			var b = this.data[c];
			if ((b.__cb && b.__cb.checked) || (!b.__cb && b.__chk)) {
				d.push(b)
			}
		}
		return d
	},
	deleteRows: function (c) {
		if (!c || !c.length) {
			return
		}
		for (var b = 0, a = c.length; b < a; ++b) {
			var d = c[b];
			if (!d.__hidden && !d.__hidden) {
				this.nRowsVisible -= 1
			}
			d.__deleted = true
		}
		this.updateTabName();
		if (this.rowOffset >= this.nRowsVisible) {
			this.previousPage()
		} else {
			this.refreshRows();
			this.updateNav()
		}
	},
	setData: function (a) {
		this.data = a;
		this.indexCreated = false;
		this.resetRowVisibility();
		if (this.tabs) {
			this.pounded = (this.tabs.poundedTab == this.tabIndex);
			if (this.pounded) {
				this.readPound()
			}
		} else {
			this.readPound()
		}
		this.applySort();
		this.updateSortArrow();
		if (this.customFilter != null) {
			this.updateFilters()
		}
		this.updateNav();
		this.refreshRows()
	},
	getClipDiv: function () {
		return this.clipDiv
	},
	getNoteTopDiv: function () {
		return this.noteTop
	},
	focusSearch: function () {
		this.quickSearchBox.focus()
	},
	clearSearch: function () {
		this.quickSearchBox.value = ""
	},
	getList: function () {
		if (!this.debug) {
			return
		}
		var b = "";
		for (var a = 0; a < this.data.length; a++) {
			if (!this.data[a].__hidden) {
				b += this.data[a].id + ", "
			}
		}
		prompt("", b)
	}
};
Listview.sortRows = function (e, d) {
	var j = Listview.sort,
	k = Listview.columns;
	for (var h = 0, c = j.length; h < c; ++h) {
		var g, f = k[Math.abs(j[h]) - 1];
		if (f.sortFunc) {
			g = f.sortFunc(e, d, j[h])
		} else {
			g = strcmp(e[f.value], d[f.value])
		}
		if (g != 0) {
			return g * j[h]
		}
	}
	return 0
},
Listview.sortIndexedRows = function (d, c) {
	var g = Listview.sort,
	h = Listview.columns,
	e = h[Math.abs(g[0]) - 1],
	f;
	if (e.sortFunc) {
		f = e.sortFunc(d, c, g[0])
	} else {
		f = strcmp(d[e.value], c[e.value])
	}
	if (f != 0) {
		return f * g[0]
	}
	return (d.__si - c.__si)
},
Listview.cbSelect = function (b) {
	for (var d = 0, a = this.data.length; d < a; ++d) {
		var c = this.data[d];
		var f = b;
		if (!c.__nochk && c.__tr) {
			var e = c.__tr.firstChild.firstChild;
			if (f == null) {
				f = !e.checked
			}
			if (e.checked != f) {
				e.checked = f;
				c.__tr.className = (e.checked ? "checked": "");
				if (Browser.ie) {
					e.defaultChecked = f;
					if (Browser.ie6) { (Listview.itemOut.bind(c.__tr))()
					}
				}
			}
		} else {
			if (f == null) {
				f = true
			}
		}
		c.__chk = f
	}
};
Listview.cbClick = function (a) {
	setTimeout(Listview.cbUpdate.bind(0, 0, this, this.parentNode.parentNode), 1);
	sp(a)
};
Listview.cbCellClick = function (a) {
	setTimeout(Listview.cbUpdate.bind(0, 1, this.firstChild, this.parentNode), 1);
	sp(a)
};
Listview.cbIeFix = function () {
	var d = gE(this.tbody, "tr");
	for (var c = 0, a = d.length; c < a; ++c) {
		var b = d[c].firstChild.firstChild;
		if (b) {
			b.checked = b.defaultChecked = false
		}
	}
};
Listview.cbUpdate = function (c, a, b) {
	if (c) {
		a.checked = !a.checked
	}
	b.className = (a.checked ? "checked": "");
	if (Browser.ie) {
		a.defaultChecked = a.checked;
		if (Browser.ie6) { (Listview.itemOver.bind(b))()
		}
	}
};
Listview.itemOver = function () {
	this.style.backgroundColor = (this.className == "checked" ? "#2C2C2C": "#202020")
};
Listview.itemOut = function () {
	this.style.backgroundColor = (this.className == "checked" ? "#242424": "transparent")
};
Listview.headerClick = function (a, b, c) {
	c = $E(c);
	if (c._button == 3 || c.shiftKey || c.ctrlKey) {
		Tooltip.hide();
		setTimeout(Listview.headerFilter.bind(this, a, null), 1)
	} else {
		this.sortBy(b + 1)
	}
	return false
};
Listview.headerFilter = function (c, f) {
	var j = "";
	if (c.__filter) {
		if (c.__filter.invert) {
			j += "!"
		}
		j += c.__filter.text
	}
	if (f == null) {
		var f = prompt(sprintf(LANG.prompt_colfilter1 + (c.type == "text" ? LANG.prompt_colfilter2: LANG.prompt_colfilter3), c.name), j)
	}
	if (f != null) {
		var e = {
			text: "",
			type: -1
		};
		f = trim(f.replace(/\s+/g, " "));
		if (f) {
			if (f.charAt(0) == "!" || f.charAt(0) == "-") {
				e.invert = 1;
				f = f.substr(1)
			}
			if (c.type == "text") {
				e.type = 0;
				e.text = f;
				if (e.invert) {
					e.regex = g_createOrRegex(f)
				} else {
					e.words = f.toLowerCase().split(" ")
				}
			}
			var i, b;
			if (f.match(/(>|=|<|>=|<=)\s*([0-9\.]+)/)) {
				i = parseFloat(RegExp.$2);
				if (!isNaN(i)) {
					switch (RegExp.$1) {
					case ">":
						e.type = 1;
						break;
					case "=":
						e.type = 2;
						break;
					case "<":
						e.type = 3;
						break;
					case ">=":
						e.type = 4;
						break;
					case "<=":
						e.type = 5;
						break
					}
					e.value = i;
					e.text = RegExp.$1 + " " + i
				}
			} else {
				if (f.match(/([0-9\.]+)\s*\-\s*([0-9\.]+)/)) {
					i = parseFloat(RegExp.$1);
					b = parseFloat(RegExp.$2);
					if (!isNaN(i) && !isNaN(b)) {
						if (i > b) {
							var g = i;
							i = b;
							b = g
						}
						if (i == b) {
							e.type = 2;
							e.value = i;
							e.text = "= " + i
						} else {
							e.type = 6;
							e.value = i;
							e.value2 = b;
							e.text = i + " - " + b
						}
					}
				} else {
					var d = f.toLowerCase().split(" ");
					if (d.length == 1 && !isNaN(i = parseFloat(d[0]))) {
						e.type = 2;
						e.value = i;
						e.text = "= " + i
					} else {
						if (c.type == "text") {
							e.type = 0;
							e.text = f;
							if (e.invert) {
								e.regex = g_createOrRegex(f)
							} else {
								e.words = d
							}
						}
					}
				}
			}
			if (e.type == -1) {
				alert(LANG.message_invalidfilter);
				return
			}
		}
		if (!c.__filter || e.text != c.__filter.text || e.invert != c.__filter.invert) {
			var h = c.__th.firstChild.firstChild;
			if (f && e.text) {
				if (!c.__filter) {
					h.className = "q5"; ++(this.nFilters)
				}
				c.__filter = e
			} else {
				if (c.__filter) {
					h.className = ""; --(this.nFilters)
				}
				c.__filter = null
			}
			this.updateFilters(1)
		}
	}
};
Listview.headerOver = function (b, c, f) {
	var d = "";
	d += '<b class="q1">' + (c.tooltip ? c.tooltip: c.name) + "</b>";
	if (c.__filter) {
		d += "<br />" + sprintf((c.__filter.invert ? LANG.tooltip_colfilter2: LANG.tooltip_colfilter1), c.__filter.text)
	}
	d += '<br /><span class="q2">' + LANG.tooltip_lvheader1 + "</span>";
	if (this.filtrable && (c.filtrable == null || c.filtrable)) {
		d += '<br /><span class="q2">' + (Browser.opera ? LANG.tooltip_lvheader3: LANG.tooltip_lvheader2) + "</span>"
	}
	Tooltip.show(b, d, 0, 0, "q")
};
Listview.extraCols = {
	id: {
		id: "id",
		name: "ID",
		width: "5%",
		value: "id",
		compute: function (a, b) {
			if (a.id) {
				ae(b, ct(a.id))
			}
		}
	},
	cost: {
		id: "cost",
		name: LANG.cost,
		getValue: function (a) {
			if (a.cost) {
				return (a.cost[3] && a.cost[3][0] ? a.cost[3][0][1] : 0) || (a.cost[2] || a.cost[1] || a.cost[0])
			}
		},
		compute: function (f, g) {
			if (f.cost) {
				var d = f.cost[0];
				var c = null;
				var b = f.cost[2];
				var a = f.cost[1];
				var e = 0;
				if (f.side != null) {
					c = f.side
				} else {
					if (f.react != null) {
						if (f.react[0] == 1 && f.react[1] == -1) {
							c = 1
						} else {
							if (f.react[0] == -1 && f.react[1] == 1) {
								c = 2
							}
						}
					}
				}
				Listview.funcBox.appendMoney(g, d, c, a, b, f.cost[3]/*e*/)
			}
		},
		sortFunc: function (d, c, e) {
			if (d.cost == null) {
				return -1
			} else {
				if (c.cost == null) {
					return 1
				}
			}
			var i = 0,
			h = 0,
			g = 0,
			f = 0;
			if (d.cost[2] != null) {
				array_walk(d.cost[2], function (a, b, k, j) {

					i += Math.pow(10, j) + a[1]
				})
			}
			if (c.cost[2] != null) {
				array_walk(c.cost[2], function (a, b, k, j) {

					h += Math.pow(10, j) + a[1]
				})
			}

			if (d.cost[1] != null) {
				array_walk(d.cost[1], function (a, b, k, j) {
					g += Math.pow(10, j) + a[1]
				})
			}
			if (c.cost[1] != null) {
				array_walk(c.cost[1], function (a, b, k, j) {
					f += Math.pow(10, j) + a[1]
				})
			}
			return strcmp(i, h) || strcmp(g, f) || strcmp(d.cost[0], c.cost[0])
		}
	},
	count: {
		id: "count",
		name: LANG.count,
		width: "11%",
		value: "count",
		compute: function (b, c) {
			if (! (this._totalCount > 0 || b.outof > 0)) {
				return
			}
			if (b.outof) {
				var a = ce("div");
				a.className = "small q0";
				ae(a, ct(sprintf(LANG.lvdrop_outof, b.outof)));
				ae(c, a)
			}
			return b.count
		},
		getVisibleText: function (a) {
			var b = a.count;
			if (a.outof) {
				b += " " + a.outof
			}
			return b
		},
		sortFunc: function (d, c, e) {
			if (d.count == null) {
				return -1
			} else {
				if (c.count == null) {
					return 1
				}
			}
			return strcmp(d.count, c.count)
		}
	},
	percent: {
		id: "percent",
		name: "%",
		width: "10%",
		value: "percent",
		compute: function (a, b) {
			if (a.count <= 0) {
				return "??"
			}
			if (a.pctstack) {
				var text = "";
				var data = eval("(" + a.pctstack + ")");
				for (var amt in data) {
					var pct = (data[amt] * a.percent) / 100;
					if (pct >= 1.95) {
						pct = parseFloat(pct.toFixed(0))
					} else {

						if (pct >= 0.195) {
							pct = parseFloat(pct.toFixed(1))
						} else {
							pct = parseFloat(pct.toFixed(2))
						}
					}
					text += sprintf(LANG.stackof_format, amt, pct) + "<br />"
				}
				b.className += " tip";
                b.onmouseover = function (event) {
					Tooltip.showAtCursor(event, text, 0, 0, "q")
				}
                b.mousemove = function (event) {
					Tooltip.cursorUpdate(event)
				}
                b.mouseout = function () {
					Tooltip.hide()
				}
			}
			var value = parseFloat(a.percent.toFixed(a.percent >= 1.95 ? 0 : (a.percent >= 0.195 ? 1 : 2)));
			if (a.pctstack) {
				var c = ce("span");
                c.className += " tip";
                ae(c, ct(value));
                ae(b, c);
			} else {
				return value
			}
        },
		getVisibleText: function (a) {
			if (a.count <= 0) {
				return "??"
			}
			if (a.percent >= 1.95) {
				return a.percent.toFixed(0)
			} else {
				if (a.percent >= 0.195) {
					return parseFloat(a.percent.toFixed(1))
				} else {
					return parseFloat(a.percent.toFixed(2))
				}
			}
		},
		sortFunc: function (e, c, f) {
			if (e.count == null) {
				return -1
			} else {
				if (c.count == null) {
					return 1
				}
			}
			if (e.percent >= 1.95) {
				var d = e.percent.toFixed(0)
			} else {
				if (e.percent >= 0.195) {
                    d = parseFloat(e.percent.toFixed(1))
				} else {
					d = parseFloat(e.percent.toFixed(2))
				}
			}
			if (c.percent >= 1.95) {
				var g = c.percent.toFixed(0)
			} else {
				if (c.percent >= 0.195) {
                    g = parseFloat(c.percent.toFixed(1))
				} else {
					g = parseFloat(c.percent.toFixed(2))
				}
			}
			return strcmp(d, g)
		}
	},
	stock: {
		id: "stock",
		name: LANG.stock,
		width: "10%",
		value: "stock",
		compute: function (a, b) {
			if (a.stock > 0) {
				return a.stock
			} else {
				b.style.fontFamily = "Verdana, sans-serif";
				return String.fromCharCode(8734)
			}
		},
		getVisibleText: function (a) {
			if (a.stock > 0) {
				return a.stock
			} else {
				return String.fromCharCode(8734) + " infinity"
			}
		}
    },
	currency: {
		id: "currency",
		name: LANG.currency,
		getValue: function (a) {
			if (a.currency) {
				return (a.currency[0] ? a.currency[0][1] : 0)
			}
		},
		compute: function (b, c) {
			if (b.currency) {
				var a = null;
				if (b.side != null) {
					a = b.side
				} else {
					if (b.react != null) {
						if (b.react[0] == 1 && b.react[1] == -1) {
							a = 1
						} else {
							if (b.react[0] == -1 && b.react[1] == 1) {
								a = 2
							}
						}
					}
				}
				Listview.funcBox.appendMoney(c, null, a, null, b.currency)
			}
		},
		sortFunc: function (d, c, e) {
			if (d.currency == null) {
				return - 1
			} else {
				if (c.currency == null) {
					return 1
				}
			}
			var g = 0,
			f = 0;
			array_walk(d.currency, function (a, b, j, h) {
				g += Math.pow(10, h) + a[1]
			});
			array_walk(c.currency, function (a, b, j, h) {
				f += Math.pow(10, h) + a[1]
			});
			return strcmp(g, f)
        }
	},
	mode: {
		id: "mode",
		name: "Mode",
		after: "name",
		type: "text",
		compute: function (a, b) {
			if (a.modes && a.modes.mode) {
				if ((a.modes.mode & 120) == 120 || (a.modes.mode & 3) == 3) {
					return LANG.pr_note_all
				}
				return Listview.extraCols.mode.getVisibleText(a)
			}
		},
		getVisibleText: function (f) {
			var a = !!(f.modes.mode & 26);
			var g = !!(f.modes.mode & 97);
			var e = !!(f.modes.mode & 40);
			var b = !!(f.modes.mode & 80);
			var d;
			if (e && !b) {
				d = 10
			} else {
				if (b && !e) {
					d = 25
				}
			}
			var c;
			if (a && !g) {
				c = "normal"
			} else {
				if (g && !a) {
					c = "heroic"
				}
			}
			if (c) {
				if (d) {
					return sprintf(LANG["tab_" + c + "X"], d)
				} else {
					return LANG["tab_" + c]
				}
			}
			if (d) {
				return sprintf(LANG.lvzone_xman, d)
			}
			return LANG.pr_note_all
		},
		sortFunc: function (d, c, e) {
			if (d.modes && c.modes) {
				return - strcmp(d.modes.mode, c.modes.mode)
			}
		}
	},
	requires: {
		id: "requires",
		name: LANG.requires,
		type: "text",
		compute: function (c, d) {
			if (c.achievement && g_achievements[c.achievement]) {
				nw(d);
				d.className = "small";
				d.style.lineHeight = "18px";
				var b = ce("a");
				b.href = "?achievement=" + c.achievement;
				b.className = "icontiny";
				b.style.backgroundImage = "url(" + g_staticUrl + "/images/wow/icons/tiny/" + g_achievements[c.achievement].icon.toLowerCase() + ".gif)";
				b.style.whiteSpace = "nowrap";
				st(b, g_achievements[c.achievement]["name_" + g_locale.name]);
				ae(d, b)
			}
		},
		getVisibleText: function (a) {
			if (a.achievement && g_achievements[a.achievement]) {
				return g_achievements[a.achievement].name
			}
		},
		sortFunc: function (d, c, e) {
			return strcmp(this.getVisibleText(d), this.getVisibleText(c))
		}
	},
	reqskill: {
		id: "reqskill",
		name: LANG.skill,
		width: "10%",
		value: "reqskill",
		before: "yield"
	},
	yield: {
		id: "yield",
		name: LANG.yields,
		type: "text",
		align: "left",
		span: 2,
		value: "name",
		compute: function (e, g, d) {
			if (e.yield && g_items[e.yield]) {
				var c = ce("td");
				c.style.width = "1px";
				c.style.padding = "0";
				c.style.borderRight = "none";
				ae(c, g_items.createIcon(e.yield, 1));
				ae(d, c);
				g.style.borderLeft = "none";
				var f = ce("div");
				var b = ce("a");
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = "?item=" + e.yield;
				b.className = "q" + g_items[e.yield].quality;
				ae(b, ct(g_items[e.yield]["name_" + g_locale.name]));
				ae(f, b);
				ae(g, f)
			}
		},
		getVisibleText: function (a) {
			if (a.yield && g_items[a.yield]) {
				return g_items[a.yield]["name_" + g_locale.name]
			}
		},
		sortFunc: function (d, c, e) {
			if (!d.yield || !g_items[d.yield] || !c.yield || !g_items[c.yield]) {
				return (d.yield && g_items[d.yield] ? 1 : (c.yield && g_items[c.yield] ? -1 : 0))
			}
			return - strcmp(g_items[d.yield].quality, g_items[c.yield].quality) || strcmp(g_items[d.yield]["name_" + g_locale.name], g_items[c.yield]["name_" + g_locale.name])
		}
	}
};
Listview.funcBox = {
	assocBinFlags: function (d, a) {
		var c = [];
		for (var b in a) {
			if (!isNaN(b) && (d & 1 << b - 1)) {
				c.push(b)
			}
		}
		c.sort(function (f, e) {
			return strcmp(a[f], a[e])
		});
		return c
	},
	createSimpleCol: function (c, d, a, b) {
		return {
			id: c,
			name: (LANG[d] !== undefined ? LANG[d] : d),
			width: a,
			value: b
		}
	},
	initLootTable: function (b) {
		var a;
		if (this._totalCount != null) {
			a = this._totalCount
		} else {
			a = b.outof
		}
		if (a == 0) {
			if (b.count != -1) {
				b.percent = b.count
			} else {
				b.percent = 0
			}
		} else {
			b.percent = b.count / a * 100
		}
        (Listview.funcBox.initModeFilter.bind(this, b))()
	},
	assocArrCmp: function (e, d, c) {
		if (e == null) {
			return -1
		} else {
			if (d == null) {
				return 1
			}
		}
		var h = Math.max(e.length, d.length);
		for (var g = 0; g < h; ++g) {
			if (e[g] == null) {
				return -1
			} else {
				if (d[g] == null) {
					return 1
				}
			}
			var f = strcmp(c[e[g]], c[d[g]]);
			if (f != 0) {
				return f
			}
		}
		return 0
	},
	location: function (f, g) {
		if (f.location == null) {
			return -1
		}
		for (var d = 0, b = f.location.length; d < b; ++d) {
			if (d > 0) {
				ae(g, ct(LANG.comma))
			}
			var e = f.location[d];
			if (e == -1) {
				ae(g, ct(LANG.ellipsis))
			} else {
				var c = ce("a");
				c.className = "q1";
				c.href = "?zone=" + e;
				ae(c, ct(g_zones[e]));
				ae(g, c)
			}
		}
	},
	arrayText: function (b, e) {
		if (b == null) {
			return
		} else {
			if (!is_array(b)) {
				return e[b]
			}
		}
		var d = "";
		for (var c = 0, a = b.length; c < a; ++c) {
			if (c > 0) {
				d += " "
			}
			if (!e[b[c]]) {
				continue
			}
			d += e[b[c]]
		}
		return d
	},
	createCenteredIcons: function (h, c, q, m) {
		if (h != null) {
			var l = ce("div"),
			a = ce("div");
			ae(document.body, l);
			if (q && (h.length != 1 || m != 2)) {
				var k = ce("div");
				k.style.position = "relative";
				k.style.width = "1px";
				var o = ce("div");
				o.className = "q0";
				o.style.position = "absolute";
				o.style.right = "2px";
				o.style.lineHeight = "26px";
				o.style.fontSize = "11px";
				o.style.whiteSpace = "nowrap";
				ae(o, ct(q));
				ae(k, o);
				ae(l, k);
				l.style.paddingLeft = o.offsetWidth + "px"
			}
			var g = g_items;
			if (m == 1) {
				g = g_spells
			}
			for (var e = 0, j = h.length; e < j; ++e) {
				var p;
				if (h[e] == null) {
					p = ce("div");
					p.style.width = p.style.height = "26px"
				} else {
					var b, f;
					if (typeof h[e] == "object") {
						b = h[e][0];
						f = h[e][1]
					} else {
						b = h[e]
					}
					if (b) {
						p = g.createIcon(b, 0, f)
					} else {
						p = Icon.create("inventoryslot_empty", 0, null, "javascript:;")
					}
				}
				if (h.length == 1 && m == 2) {
					if (b && g_items[b]) {
						ee(l);
						var u = g_items[b],
						r = ce("a"),
						d = ce("span");
						d.style.paddingTop = "4px";
						r.href = "?item=" + b;
						r.className = "q" + u.quality + " icontiny";
						r.style.backgroundImage = "url(images/icons/tiny/" + u.icon.toLowerCase() + ".gif)";
						r.style.whiteSpace = "nowrap";
						st(r, u["name_" + g_locale.name]);
						ae(d, r);
						if (f > 1) {
							ae(d, ct(" (" + f + ")"))
						}
						if (q) {
							var w = ce("span");
							w.className = "q0";
							w.style.fontSize = "11px";
							w.style.whiteSpace = "nowrap";
							ae(w, ct(q));
							ae(l, w);
							d.style.paddingLeft = w.offsetWidth + "px"
						}
						ae(l, d)
					}
				} else {
					p.style.cssFloat = p.style.styleFloat = "left";
					ae(l, p);
					l.style.margin = "0 auto";
					l.style.textAlign = "left";
					l.style.width = (26 * h.length) + "px"
				}
			}
			a.className = "clear";
			ae(c, l);
			ae(c, a);
			return true
		}
	},
    createSocketedIcons: function (b, e, c, g, o) {
		var m = 0,
		k = ce("div"),
		a = ce("div");
		for (var f = 0, h = b.length; f < h; ++f) {
			var l, j = c[f];
				if (g_items && g_items[j]) {
					l = g_items.createIcon(j, 0)
				} else {
				if (isset("g_gems") && g_gems && g_gems[j]) {
					l = Icon.create(g_gems[j].icon, 0, null, "?item=" + j)
                } else {
                    l = Icon.create(null, 0, null, "javascript:;")
				}
			}
			l.className += " iconsmall-socket-" + g_file_gems[b[f]] + (!c || !j ? "-empty": "");
			l.style.cssFloat = l.style.styleFloat = "left";
			if (g && g[f]) {
				l.insertBefore(ce("var"), l.childNodes[1]); ++m
			}
			ae(k, l)
		}
		k.style.margin = "0 auto";
		k.style.textAlign = "left";
		k.style.width = (26 * b.length) + "px";
		a.className = "clear";
		ae(e, k);
		ae(e, a);
		if (o && m == b.length) {
			k = ce("div");
			k.style.paddingTop = "4px";
			ae(k, ct(o));
			ae(e, k)
		}
	},
	getItemType: function (c, a, b) {
		if (b != null && g_item_subsubclasses[c] != null && g_item_subsubclasses[c][a] != null) {
			return {
				url: "?items=" + c + "." + a + "." + b,
				text: g_item_subsubclasses[c][a][b]
			}
		} else {
            if (a != null &&g_item_subclasses[c] != null) {
                return {
                    url: "?items=" + c + "." + a,
                    text: g_item_subclasses[c][a]
                }
            } else {
                return {
                    url: "?items=" + c,
                    text: g_item_classes[c]
                }
            }
        }
	},
	getQuestCategory: function (a) {
		return g_quest_sorts[a]
	},
	getQuestReputation: function (d, b) {
		if (b.reprewards) {
			for (var c = 0, a = b.reprewards.length; c < a; ++c) {
				if (b.reprewards[c][0] == d) {
					return b.reprewards[c][1]
				}
			}
		}
	},
	getEventNextDates: function (e, a, j, f) {
		if (typeof e != "string" || typeof a != "string") {
			return [null, null]
		}
		e = new Date(e.replace(/-/g, "/"));
		a = new Date(a.replace(/-/g, "/"));
		if (isNaN(e.getTime()) || isNaN(a.getTime())) {
			return [null, null]
		}
		if (f == null) {
			f = g_serverTime
		}
		var b = 0;
		if (j == -1) {
			var k = new Date(f.getFullYear(), f.getMonth(), 1, e.getHours(), e.getMinutes(), e.getSeconds());
			for (var c = 0; c < 2; ++c) {
				k.setDate(1);
				k.setMonth(k.getMonth() + c);
				var h = k.getDay();
				var g = 1;
				if (k.getYear() == 2009) {
					g = 0
				}
				if (h > g) {
					k.setDate(k.getDate() + (7 - h))
				}
				var d = new Date(k);
				d.setDate(d.getDate() + (7 - g));
				if (f.getTime() < d.getTime()) {
					break
				}
			}
			b = k.getTime() - e.getTime()
		} else {
			if (j > 0) {
				j *= 1000;
				b = Math.ceil((f.getTime() - a.getTime()) / j) * j
			}
		}
		e.setTime(e.getTime() + b);
		a.setTime(a.getTime() + b);
		return [e, a]
	},
	getFactionCategory: function (b, a) {
		if (b) {
			return g_faction_categories[b]
		} else {
			return g_faction_categories[a]
		}
	},
	createTextRange: function (b, a) {
		b |= 0;
		a |= 0;
		if (b > 1 || a > 1) {
			if (b != a && a > 0) {
				return b + "-" + a
			} else {
				return b + ""
			}
		}
		return null
	},
	coReport: function (d, b, f) {
		if (!g_user.id || !g_report_reasons[f]) {
			return
		}
		var a = "";
		if (f == 4 || f == 7) {
			a = prompt(LANG.prompt_details, "")
		} else {
			if (d == 2) {
				if (!confirm((f == 5 ? LANG.confirm_report3: LANG.confirm_report4))) {
					return
				}
			} else {
				if (!confirm(sprintf((d == 0 ? LANG.confirm_report: LANG.confirm_report2), g_report_reasons[f]))) {
					return
				}
			}
		}
		if (a != null) {
			var e = "?report&type=" + d + "&typeid=" + b + "&reason=" + f;
			if (a) {
				e += "&reasonmore=" + urlencode(a)
			}
			new Ajax(e);
			var c = ce("span");
			ae(c, ct(LANG.lvcomment_reported));
			this.parentNode.replaceChild(c, this)
		}
	},
	coReportClick: function (b, a, c) {
		this.menu = [
            [2, g_report_reasons[2], Listview.funcBox.coReport.bind(this, a, b.id, 2)],
            [1, g_report_reasons[1], Listview.funcBox.coReport.bind(this, a, b.id, 1)],
            [3, g_report_reasons[3], Listview.funcBox.coReport.bind(this, a, b.id, 3)],
            [4, g_report_reasons[4], Listview.funcBox.coReport.bind(this, a, b.id, 4)]
        ];
		if (a == 1 && b.op && typeof g_pageInfo != "undefined" && !g_pageInfo.sticky) {
			this.menu.splice(3, 0, [0, g_report_reasons[0], Listview.funcBox.coReport.bind(this, a, b.id, 0)])
		}
		if (a == 1 && g_users[b.user].avatar == 2) {
			this.menu.push([5, g_report_reasons[5], Listview.funcBox.coReport.bind(this, 2, g_users[b.user].avatarmore, 5)])
		} (Menu.showAtCursor.bind(this, c))()
	},
	coGetColor: function (c, a, d) {
		switch (a) {
		case -1 :
            var b = null;
            if (!d) {

                b = c.divPost.childNodes[1].className.match(/comment-([a-z]+)/);
			} else {
                b = c.divBody[0].className.match(/comment-([a-z]+)/)
            }
            if (b != null) {
				return " comment-" + b[1]
			}
			break;
		case 3:
		case 4:
			if (c.roles & (U_GROUP_ADMIN | U_GROUP_BUREAU)) {
				return " comment-blue"
			}
			if (c.roles & U_GROUP_GREEN_TEXT) {
				return " comment-green"
			} else {
				if (c.roles & U_GROUP_VIP) {
					return " comment-gold"
				}
			}
			break
		}
		if (c.roles & (U_GROUP_ADMIN | U_GROUP_BUREAU)) {
			return " comment-blue"
		} else {
			if (c.rating >= 10) {
				return " comment-green"
			} else {
				if (c.rating < 0) {
					return " comment-bt"
				}
			}
		}
		return ""
	},
	coToggleVis: function (b) {
        var c = g_toggleDisplay(b.divBody);
		this.firstChild.nodeValue = (c ? LANG.lvcomment_hide: LANG.lvcomment_show);
		b.__div.className = trim(b.__div.className.replace("comment-collapsed", "")) + (c ? "": " comment-collapsed");
		var a = b.divHeader.firstChild.lastChild;
		if (b.ratable) {
			a.style.display = ""
		} else {
			if (b.deleted || b.purged) {
				a.style.fontWeight = "normal";
				a.className = "q10";
				a.innerHTML = (b.deleted ? LANG.lvcomment_deleted: LANG.lvcomment_purged);
				a.style.display = ""
			}
		}
		g_toggleDisplay(b.divLinks);
		if (b.lastEdit != null) {
			g_toggleDisplay(b.divLastEdit)
		}
	},
	coDisplayRating: function (d, c) {
		if (typeof(d._ratingMode) == "undefined") {
			d._ratingMode = 0
		}
		if (typeof(Listview._ratings) == "undefined") {
			Listview._ratings = {}
		}
		var a = c;
		var e = d._ratingMode;
		if (e == 0) {
			if (d.rating < 0) {
				a.innerHTML = d.rating
			} else {
				a.innerHTML = "+" + d.rating
			}
		}
		if (e == 1) {
			if (Listview._ratings[d.id] !== undefined) {
				var b = Listview._ratings[d.id];
				a.innerHTML = "+" + b.up + " / -" + b.down
			} else {
				new Ajax("?comment=rating&id=" + d.id, {
					method: "get",
					onSuccess: function (i, g) {
                        var f = JSON.parse(g.responseText);
						if (f.success) {
							Listview._ratings[i] = f;
							this.innerHTML = "+" + f.up + " / -" + f.down
						} else {
							this.innerHTML = "Error!"
						}
					}.bind(a, d.id)
				});
				a.innerHTML = '<img src="' + g_staticUrl + '/template/images/ajax.gif" />';
			}
		}
	},
	coToggleRating: function (b, a) {
		if (typeof(b._ratingMode) == "undefined") {
			b._ratingMode = 0
		}
		if (++b._ratingMode > 1) {
			b._ratingMode = 0
		}
		Listview.funcBox.coDisplayRating(b, a)
	},
	coRate: function (e, a) {
		if (a == 0) {
			var c = 5;
			if (g_user.roles & U_GROUP_ADMIN) {
				c = 25
			} else {
				if (g_user.roles & U_GROUP_BUREAU) {
					c = 15
				}
			}
			var d = prompt(sprintf(LANG.prompt_customrating, c, c), 0);
			if (d == null) {
				return
			} else {
				d |= 0;
				if (d != 0 && Math.abs(d) <= c) {
					a = d
				}
			}
			if (a == 0) {
				return
			}
		} else {
			if (g_user.roles & U_GROUP_COMMENTS_MODERATOR) {
				a *= 5
			}
		}
		e.rating += a;
		e.raters.push([g_user.id, a]);
		var b = e.divHeader.firstChild;
		Tooltip.hide();
		b = b.childNodes[b.childNodes.length - 3];
        var f = ge("commentrating" + e.id);
        Listview.funcBox.coDisplayRating(e, f);
		de(b.nextSibling);
		de(b.nextSibling);
		new Ajax("?comment=rate&id=" + e.id + "&rating=" + a, {
			method: "get",
			onSuccess: function (e) {
                if (e.responseText == "0") {} else {
                    if (e.responseText == "1") {
                        b.innerHTML = LANG.tooltip_banned_rating;
                    } else {
                        if (e.responseText == "3") {
                            b.innerHTML = LANG.tooltip_too_many_votes;
                        } else {
                            b.innerHTML = LANG.genericerror;
                        }
                    }
                }
			}
        });
	},
	coDelete: function (a) {
		if (a.purged) {
			alert(LANG.message_cantdeletecomment)
		} else {
			if (confirm(LANG.confirm_deletecomment)) {
				new Ajax("?comment=delete&id=" + a.id);
				this.deleteRows([a])
			}
		}
	},
	coDetach: function (a) {
		if (a.replyTo == 0) {
			alert(LANG.message_cantdetachcomment)
		} else {
			if (confirm(LANG.confirm_detachcomment)) {
				new Ajax("?comment=detach&id=" + a.id);
				a.replyTo = 0;
				alert(LANG.message_commentdetached)
			}
		}
	},
	coEdit: function (g, e, c) {
		if (!c) {
			g.divBody.style.display = "none";
			g.divResponse.style.display = "none";
			g.divLinks.firstChild.style.display = "none"
		} else {
			g.divBody.hide();
			g.divResponse.hide()
		}
		var f = ce("div");
		f.className = "comment-edit";
		g.divEdit = f;
		if (e == -1) {
			if (g_users[g.user] != null) {
				g.roles = g_users[g.user].roles
			}
		}
		var a = Listview.funcBox.coEditAppend(f, g, e, c);
		var b = ce("div");
		b.className = "comment-edit-buttons";
		var d = ce("input");
		d.type = "button";
		d.value = LANG.compose_save;
		d.onclick = Listview.funcBox.coEditButton.bind(d, g, true, e, c);
		ae(b, d);
		ae(b, ct(" "));
		d = ce("input");
		d.type = "button";
		d.value = LANG.compose_cancel;
		d.onclick = Listview.funcBox.coEditButton.bind(d, g, false, e, c);
		ae(b, d);
		ae(f, b);
		var c = f;
		if (Browser.ie6) {
			c = ce("div");
			c.style.width = "99%";
			ae(c, f)
		}
        ae(g.divBody.parentNode, f)
		a.focus()
	},
	coEditAppend: function (m, b, l, X, x) {
		var f = Listview.funcBox.coGetCharLimit(l);
		if (l == 1 || l == 3 || l == 4) {
			b.user = g_user.name;
			b.roles = g_user.roles;
			b.rating = 1
		} else {
			if (l == 2) {
				b.roles = g_user.roles;
				b.rating = 1
			}
		}
		if (x) {
			b.roles &= ~U_GROUP_PENDING
		}
		if (l == -1 || l == 0) {
			var j = ce("div");
			j.className = "comment-edit-modes";
			ae(j, ct(LANG.compose_mode));
			var p = ce("a");
			p.className = "selected";
			p.onclick = Listview.funcBox.coModeLink.bind(p, 1, l, b);
			p.href = "javascript:;";
			ae(p, ct(LANG.compose_edit));
			ae(j, p);
			ae(j, ct("|"));
			var w = ce("a");
			w.onclick = Listview.funcBox.coModeLink.bind(w, 2, l, b);
			w.href = "javascript:;";
			ae(w, ct(LANG.compose_preview));
			ae(j, w);
			ae(m, j)
		}
		var a = ce("div");
		a.style.display = "none";
		a.className = "comment-body" + Listview.funcBox.coGetColor(b, l);
		ae(m, a);
		var h = ce("div");
		h.className = "comment-edit-body";
		var e = ce("div");
		e.className = "toolbar";
        e.style.cssFloat = "left";
		var i = ce("div");
		i.className = "menu-buttons";
        i.style.cssFloat = "left";
		var g = ce("textarea");
		g.className = "comment-editbox";
		g.rows = 10;
        g.style.clear = "left";
		g.value = b.body;
		switch (l) {
		case 1:
			g.name = "commentbody";
			break;
		case 2:
			g.name = "desc";
			g.originalValue = b.body;
			break;
		case 3:
			g.name = "body";
			break;
		case 4:
			g.name = "sig";
			g.originalValue = b.body;
			g.rows = (Browser.firefox ? 2 : 3);
			g.style.height = "auto";
			break
		}
		if (l != -1 && l != 0) {
			var d = ce("h3"),
			y = ce("a"),
			v = ce("div"),
			u = ce("div");
			var c = Listview.funcBox.coLivePreview.bind(g, b, l, v);
			if (b.body) {
				y.className = "disclosure-off";
				v.style.display = "none"
			} else {
				y.className = "disclosure-on"
			}
			ae(y, ct(LANG.compose_livepreview));
			ae(d, y);
			y.href = "javascript:;";
			y.onclick = function () {
				c(1);
				y.className = "disclosure-" + (g_toggleDisplay(v) ? "on": "off")
			};
			ns(y);
			d.className = "first";
			u.className = "pad";
			ae(a, d);
			ae(a, v);
			ae(a, u);
			g_onAfterTyping(g, c, 50);
			aE(g, "focus", function () {
				c();
				a.style.display = "";
				if (l != 4) {
					g.style.height = "22em"
				}
			})
		} else {
			if (l != 4) {
				aE(g, "focus", function () {
					g.style.height = "22em"
				})
			}
		}
		var t = [{
			id: "b",
			title: LANG.markup_b,
			pre: "[b]",
			post: "[/b]"
		},
		{
			id: "i",
			title: LANG.markup_i,
			pre: "[i]",
			post: "[/i]"
		},
		{
			id: "u",
			title: LANG.markup_u,
			pre: "[u]",
			post: "[/u]"
		},
		{
			id: "s",
			title: LANG.markup_s,
			pre: "[s]",
			post: "[/s]"
		},
		{
			id: "small",
			title: LANG.markup_small,
			pre: "[small]",
			post: "[/small]"
		},
		{
			id: "url",
			title: LANG.markup_url,
			onclick: function () {
				var i = prompt(LANG.prompt_linkurl, "http://");
				if (i) {
					g_insertTag(g, "[url=" + i + "]", "[/url]")
				}
			}
		},
		{
			id: "quote",
			title: LANG.markup_quote,
			pre: "[quote]",
			post: "[/quote]"
		},
		{
			id: "code",
			title: LANG.markup_code,
			pre: "[code]",
			post: "[/code]"
		},
		{
			id: "ul",
			title: LANG.markup_ul,
			pre: "[ul]\n[li]",
			post: "[/li]\n[/ul]",
			rep: function (i) {
				return i.replace(/\n/g, "[/li]\n[li]")
			}
		},
		{
			id: "ol",
			title: LANG.markup_ol,
			pre: "[ol]\n[li]",
			post: "[/li]\n[/ol]",
			rep: function (i) {
				return i.replace(/\n/g, "[/li]\n[li]")
			}
		},
		{
			id: "li",
			title: LANG.markup_li,
			pre: "[li]",
			post: "[/li]"
		}];
        if (!X) {
            for (var q = 0, r = t.length; q < r; ++q) {
                var k = t[q];
                if (l == 4 && k.id == "quote") {
                    break
                }
                if ((g_user.roles & U_GROUP_PENDING) && k.nopending) {
                    continue
                }
                var o = ce("button");
                o.setAttribute("type", "button");
                o.title = k.title;
                if (k.onclick != null) {
                    o.onclick = k.onclick
                } else {
                    o.onclick = g_insertTag.bind(0, g, k.pre, k.post, k.rep)
                }

                var z = ce("img");
                z.src = "template/images/pixel.gif";
                z.className = "toolbar-" + k.id;
                ae(o, z);
                ae(e, o)
            }
        } else {
			for (var B = 0, C = t.length; B < C; ++B) {
				var q = t[B];
				if ((g_user.rolls & U_GROUP_PENDING) && q.nopending) {
					continue
				}
				var H = "tb-" + q.id;
				var V = ce('button');
				V.onclick = function (i, L) {
                    L.preventDefault();
                    (i.onclick != null ? i.onclick: g_insertTag.bind(0, g, i.pre, i.post, i.rep))()
                };
                V.bind(null, q);
				V.className = H;
				V.title = q.title;
				V[0].setAttribute("type", "button");
				ae(V, ce('ins'));
				ae(e, V);
			}
			e.className += " formatting button sm";
		}
		var r = function (L, i) {
			var M = prompt(sprintf(LANG.markup_prompt, L), "");
			if (M != null) {
				g_insertTag(g, "[" + i + "=" + (parseInt(M) || 0) + "]", "")
			}
		};
		var A = [[0, LANG.markup_links, , [
                [9, LANG.types[10][0] + "...", r.bind(null, LANG.types[10][1], "achievement")],
                [11, LANG.types[13][0] + "...", r.bind(null, LANG.types[13][1], "class")],
                [7, LANG.types[8][0] + "...", r.bind(null, LANG.types[8][1], "faction")],
                [0, LANG.types[3][0] + "...", r.bind(null, LANG.types[3][1], "item")],
                [1, LANG.types[4][0] + "...", r.bind(null, LANG.types[4][1], "itemset")],
                [2, LANG.types[1][0] + "...", r.bind(null, LANG.types[1][1], "npc")],
                [3, LANG.types[2][0] + "...", r.bind(null, LANG.types[2][1], "object")],
                [8, LANG.types[9][0] + "...", r.bind(null, LANG.types[9][1], "pet")],
                [4, LANG.types[5][0] + "...", r.bind(null, LANG.types[5][1], "quest")],
                [12, LANG.types[14][0] + "...", r.bind(null, LANG.types[14][1], "race")],
                [13, LANG.types[15][0] + "...", r.bind(null, LANG.types[15][1], "skill")],
                [5, LANG.types[6][0] + "...", r.bind(null, LANG.types[6][1], "spell")],
                [6, LANG.types[7][0] + "...", r.bind(null, LANG.types[7][1], "zone")]]
        ]];
        var di = ce('div');
        ae(di, e);
        ae(di, i);
        ae(h, di);
  		ae(h, ce("div"));
		ae(h, g);
		ae(h, ce("br"));
		Menu.addButtons(i, A);
		if (l == 4) {
			ae(h, ct(sprintf(LANG.compose_limit2, f, 3)))
		} else {
			ae(h, ct(sprintf(LANG.compose_limit, f)))
		}
        var A = ce('span');
        A.className = "comment-remaining";
        ae(A, ct(sprintf(LANG.compose_remaining, l - b.body.length)));
        ae(h, A);
		g.onkeyup = Listview.funcBox.coUpdateCharLimit.bind(0, g, A, f);
		g.onkeydown = Listview.funcBox.coUpdateCharLimit.bind(0, g, A, f);
		if ((l == -1 || l == 0) && g_user.roles & U_GROUP_MODERATOR) {
			var B = ce("div");
            B.classname = "pad";
			var W = ce("div");
			ae(W, ct((g_user.roles & U_GROUP_ADMIN ? "Admin": "Moderator") + " response"));
			var p = ce("textarea");
            p.value = b.response;
            p.rows = 3;
			p.style.height = "6em";
			h.append(B);
			h.append(w);
			h.append(p)
		}
		ae(m, h);
		ae(m, ce('div'));
		ae(m, a);

		return g
	},
/*
	coEditAppend: function (m, b, l) {
		var f = Listview.funcBox.coGetCharLimit(l);
		if (l == 1 || l == 3 || l == 4) {
			b.user = g_user.name;
			b.roles = g_user.roles;
			b.rating = 1
		} else {
			if (l == 2) {
				b.roles = g_user.roles;
				b.rating = 1
			}
		}
		if (l == -1 || l == 0) {
			var j = ce("div");
			j.className = "comment-edit-modes";
			ae(j, ct(LANG.compose_mode));
			var p = ce("a");
			p.className = "selected";
			p.onclick = Listview.funcBox.coModeLink.bind(p, 1, l, b);
			p.href = "javascript:;";
			ae(p, ct(LANG.compose_edit));
			ae(j, p);
			ae(j, ct("|"));
			var w = ce("a");
			w.onclick = Listview.funcBox.coModeLink.bind(w, 2, l, b);
			w.href = "javascript:;";
			ae(w, ct(LANG.compose_preview));
			ae(j, w);
			ae(m, j)
		}
		var a = ce("div");
		a.style.display = "none";
		a.className = "comment-body" + Listview.funcBox.coGetColor(b, l);
		ae(m, a);
		var h = ce("div");
		h.className = "comment-edit-body";
		var e = ce("div");
		e.className = "toolbar";
		var g = ce("textarea");
		g.className = "comment-editbox";
		g.rows = 10;
		g.value = b.body;
		switch (l) {
		case 1:
			g.name = "commentbody";
			g.onfocus = g_revealCaptcha;
			break;
		case 2:
			g.name = "desc";
			g.originalValue = b.body;
			break;
		case 3:
			g.name = "body";
			g.onfocus = g_revealCaptcha;
			break;
		case 4:
			g.name = "sig";
			g.originalValue = b.body;
			g.rows = (Browser.gecko ? 2 : 3);
			g.style.height = "auto";
			break
		}
		if (l != -1 && l != 0) {
			var d = ce("h3"),
			y = ce("a"),
			v = ce("div"),
			u = ce("div");
			var c = Listview.funcBox.coLivePreview.bind(g, b, l, v);
			if (b.body) {
				y.className = "disclosure-off";
				v.style.display = "none"
			} else {
				y.className = "disclosure-on"
			}
			ae(y, ct(LANG.compose_livepreview));
			ae(d, y);
			y.href = "javascript:;";
			y.onclick = function () {
				c(1);
				y.className = "disclosure-" + (g_toggleDisplay(v) ? "on": "off")
			};
			ns(y);
			d.className = "first";
			u.className = "pad";
			ae(a, d);
			ae(a, v);
			ae(a, u);
			g_onAfterTyping(g, c, 50);
			aE(g, "focus", function () {
				c();
				a.style.display = "";
				if (l != 4) {
					g.style.height = "22em"
				}
			})
		} else {
			if (l != 4) {
				aE(g, "focus", function () {
					g.style.height = "22em"
				})
			}
		}
		var t = [{
			id: "b",
			title: LANG.markup_b,
			pre: "[b]",
			post: "[/b]"
		},
		{
			id: "i",
			title: LANG.markup_i,
			pre: "[i]",
			post: "[/i]"
		},
		{
			id: "u",
			title: LANG.markup_u,
			pre: "[u]",
			post: "[/u]"
		},
		{
			id: "s",
			title: LANG.markup_s,
			pre: "[s]",
			post: "[/s]"
		},
		{
			id: "small",
			title: LANG.markup_small,
			pre: "[small]",
			post: "[/small]"
		},
		{
			id: "url",
			title: LANG.markup_url,
			onclick: function () {
				var i = prompt(LANG.prompt_linkurl, "http://");
				if (i) {
					g_insertTag(g, "[url=" + i + "]", "[/url]")
				}
			}
		},
		{
			id: "quote",
			title: LANG.markup_quote,
			pre: "[quote]",
			post: "[/quote]"
		},
		{
			id: "code",
			title: LANG.markup_code,
			pre: "[code]",
			post: "[/code]"
		},
		{
			id: "ul",
			title: LANG.markup_ul,
			pre: "[ul]\n[li]",
			post: "[/li]\n[/ul]",
			rep: function (i) {
				return i.replace(/\n/g, "[/li]\n[li]")
			}
		},
		{
			id: "ol",
			title: LANG.markup_ol,
			pre: "[ol]\n[li]",
			post: "[/li]\n[/ol]",
			rep: function (i) {
				return i.replace(/\n/g, "[/li]\n[li]")
			}
		},
		{
			id: "li",
			title: LANG.markup_li,
			pre: "[li]",
			post: "[/li]"
		}];
		for (var q = 0, r = t.length; q < r; ++q) {
			var k = t[q];
			if (l == 4 && k.id == "quote") {
				break
			}
			var o = ce("button");
			var z = ce("img");
			o.setAttribute("type", "button");
			o.title = k.title;
			if (k.onclick != null) {
				o.onclick = k.onclick
			} else {
				o.onclick = g_insertTag.bind(0, g, k.pre, k.post, k.rep)
			}
			z.src = "template/images/pixel.gif";
			z.className = "toolbar-" + k.id;
			ae(o, z);
			ae(e, o)
		}
		ae(h, e);
		ae(h, g);
		ae(h, ce("br"));
		if (l == 4) {
			ae(h, ct(sprintf(LANG.compose_limit2, f, 3)))
		} else {
			ae(h, ct(sprintf(LANG.compose_limit, f)))
		}
		ae(m, h);
		return g
	},
*/
	coLivePreview: function (f, e, a, b) {
        if (b != 1 && a.style.display == "none") {
			return
		}
		var c = this,
		i = Listview.funcBox.coGetCharLimit(e),
		g = (c.value.length > i ? c.value.substring(0, i) : c.value);
		if (e == 4) {
			var h;
			if ((h = g.indexOf("\n")) != -1 && (h = g.indexOf("\n", h + 1)) != -1 && (h = g.indexOf("\n", h + 1)) != -1) {
				g = g.substring(0, h)
			}
		}
		var d = Markup.toHtml(g, {
			mode: Markup.MODE_COMMENT,
			roles: f.roles
		});
		if (d) {
			a.innerHTML = d
		} else {
			a.innerHTML = '<span class="q6">...</span>'
		}
	},
	coEditButton: function (f, d, e, k) {
		if (d) {
			var a = gE(f.divEdit, "textarea");
            var g = a[0];
			if (!Listview.funcBox.coValidate(a, e)) {
				return
			}
			if (g.value != f.body || (a[1] && a[1].value != f.response)) {
				var c = 0;
				if (f.lastEdit != null) {
					c = f.lastEdit[1]
				}++c;
				f.lastEdit = [g_serverTime, c, g_user.name];
				Listview.funcBox.coUpdateLastEdit(f);
				var b = Listview.funcBox.coGetCharLimit(e);
				var i = Markup.toHtml((g.value.length > b ? g.value.substring(0, b) : g.value), {
					mode: Markup.MODE_COMMENT,
					roles: f.roles
				});
				var h = ((a[1] && a[1].value.length > 0) ? Markup.toHtml("[div][/div][wowheadresponse=" + g_user.name + " roles=" + g_user.roles + "]" + a[1].value + "[/wowheadresponse]", {
					mode: Markup.MODE_COMMENT,
					roles: g_user.roles
				}) : "");
				if (!k) {
					f.divBody.innerHTML = i;
					f.divResponse.innerHTML = h
				} else {
					f.divBody.html(i);
					f.divResponse.html(h)
				}
				f.body = g.value;
				if (g_user.roles & U_GROUP_MODERATOR && e[1]) {
					f.response = e[1].value
				}
				var j = "body=" + urlencode(f.body);
				if (f.response !== undefined) {
					j += "&response=" + urlencode(f.response)
				}
				if (e == -1) {
					new Ajax("?forums=editpost&id=" + f.id, {
						method: "POST",
						params: j
					})
				} else {
					new Ajax("?comment=edit&id=" + f.id, {
						method: "POST",
						params: j
					})
				}
			}
		}
		if (!k) {
            f.divBody.style.display = "";
            f.divResponse.style.display = "";
            f.divLinks.firstChild.style.display = "";
		} else {
			f.divBody.show();
			f.divResponse.show()
		}
		de(f.divEdit);
		f.divEdit = null
    },
	coGetCharLimit: function (a) {
		if (a == 2) {
			return 7500
		}
		if (a == 4) {
			return 250
		}
		if (g_user.roles & U_GROUP_STAFF) {
			return 16000000
		}
		var b = 1;
		if (g_user.premium) {
			b = 3
		}
		switch (a) {
		case 0:
		case 1:
			return 7500 * b;
		case -1 : case 3:
			return 15000 * b
		}
	},
	coUpdateCharLimit: function (a, b, c) {
		var d = a.value;
		if (d.length > c) {
			a.value = d.substring(0, c);
		} else {
			b.innerHTML = (" " + sprintf(LANG.compose_remaining, c - d.length))
            b.className.replace(/(?:^|\s)q10(?!\S)/g , '');
			if (d.length == c) {
				b.className += " q10";
			}
		}
	},
	coModeLink: function (e, b, f) {
        var j = Listview.funcBox.coGetCharLimit(b);
		var c = Markup.MODE_COMMENT;
		array_walk(gE(this.parentNode, "a"), function (k) {
			k.className = ""
		});
		this.className = "selected";
		var d = gE(this.parentNode.parentNode, "textarea"),
        k = d[0],
		i = k,
		a = i.previousSibling;
		if (b == 4) {
			c = Markup.MODE_SIGNATURE
		}
		switch (e) {
		case 1:
			i.style.display = "";
			a.style.display = "none";
			a.previousSibling.style.display = "";
			i.focus();
			break;
		case 2:
			i.style.display = "none";
			var g = (k.value.length > j ? k.value.substring(0, j) : k.value);
			if (b == 4) {
				var h;
				if ((h = g.indexOf("\n")) != -1 && (h = g.indexOf("\n", h + 1)) != -1 && (h = g.indexOf("\n", h + 1)) != -1) {
					g = g.substring(0, h)
				}
			}
			var l = Markup.toHtml(g, {
				mode: c,
				roles: f.roles
			});
			if (d[1] && d[1].value.length > 0) {
				l += Markup.toHtml("[div][/div][wowheadresponse=" + g_user.name + " roles=" + g_user.roles + "]" + f[1].value + "[/wowheadresponse]", {
					mode: c,
					roles: g_user.roles
				})
			}
			a.innerHTML = l;
			a.style.display = "";
			a.previousSibling.style.display = "none";
			break
		}
	},
	coReply: function (b) {
		document.forms.addcomment.elements.replyto.value = b.replyTo;
		var a = ge("replybox-generic");
		gE(a, "span")[0].innerHTML = b.user;
		a.style.display = "";
		co_addYourComment()
	},
	coValidate: function (a, c) {
		c |= 0;
		if (c == 1 || c == -1) {
			if (trim(a.value).length < 1) {
				alert(LANG.message_forumposttooshort);
				return false
			}
		} else {
			if (trim(a.value).length < 10) {
				alert(LANG.message_commenttooshort);
				return false
			}
		}
		var b = Listview.funcBox.coGetCharLimit(c);
		if (a.value.length > b) {
			if (!confirm(sprintf(c == 1 ? LANG.confirm_forumposttoolong: LANG.confirm_commenttoolong, b, a.value.substring(b - 30, b)))) {
				return false
			}
		}
		return true
	},
	coCustomRatingOver: function (a) {
		Tooltip.showAtCursor(a, LANG.tooltip_customrating, 0, 0, "q")
	},
	coPlusRatingOver: function (a) {
		Tooltip.showAtCursor(a, LANG.tooltip_uprate, 0, 0, "q2")
	},
	coMinusRatingOver: function (a) {
		Tooltip.showAtCursor(a, LANG.tooltip_downrate, 0, 0, "q10")
	},
	coSortDate: function (a) {
		a.nextSibling.nextSibling.className = "";
		a.className = "selected";
		this.mainDiv.className += " listview-aci";
		this.setSort([1], true, false)
		sc("temp_comment_sort", 1)
	},
	coSortHighestRatedFirst: function (a) {
		a.previousSibling.previousSibling.className = "";
		a.className = "selected";
		this.mainDiv.className = this.mainDiv.className.replace("listview-aci", "");
		this.setSort([ - 3, 2], true, false)
		sc("temp_comment_sort", 2)
	},
	coFilterByPatchVersion: function (a) {
		this.minPatchVersion = a.value;
		this.refreshRows()
	},
	coUpdateLastEdit: function (f) {
		var b = f.divLastEdit;
		if (!b) {
			return
		}
		if (f.lastEdit != null) {
			var e = f.lastEdit;
			b.childNodes[1].firstChild.nodeValue = e[2];
			b.childNodes[1].href = "?user=" + e[2];
			var c = new Date(e[0]);
			var d = (g_serverTime - c) / 1000;
			if (b.childNodes[3].firstChild) {
				de(b.childNodes[3].firstChild)
			}
			Listview.funcBox.coFormatDate(b.childNodes[3], d, c);
			var a = "";
			if (f.rating != null) {
				a += ct(sprintf(LANG.lvcomment_patch, g_getPatchVersion(c)))
			}
			if (e[1] > 1) {
				a += LANG.dash + sprintf(LANG.lvcomment_nedits, e[1])
			}
			b.childNodes[4].nodeValue = a;
			b.style.display = ""
		} else {
			b.style.display = "none"
		}
	},
	coFormatDate: function (f, e, b, g, h) {
		var d;
		if (e < 2592000) {
			var a = sprintf(LANG.date_ago, g_formatTimeElapsed(e));
			var c = new Date();
			c.setTime(b.getTime() + (g_localTime - g_serverTime));
			f.style.cursor = "help";
			f.title = c.toLocaleString()
		} else {
			a = LANG.date_on + g_formatDateSimple(b, g)
		}
		if (h == 1) {
			a = a.substr(0, 1).toUpperCase() + a.substr(1)
		}
		d = ct(a);
		ae(f, d)
	},
	coFormatFileSize: function (c) {
		var b = -1;
		var a = "KMGTPEZY";
		while (c >= 1024 && b < 7) {
			c /= 1024; ++b
		}
		if (b < 0) {
			return c + " byte" + (c > 1 ? "s": "")
		} else {
			return c.toFixed(1) + " " + a[b] + "B"
		}
	},
	ssCellOver: function () {
		this.className = "screenshot-caption-over"
	},
	ssCellOut: function () {
		this.className = "screenshot-caption"
	},
	ssCellClick: function (b, d) {
		d = $E(d);
		if (d.shiftKey || d.ctrlKey) {
			return
		}
		var a = 0,
		c = d._target;
		while (c && a < 3) {
			if (c.nodeName == "A") {
				return
			}
			if (c.nodeName == "IMG") {
				break
			}
			c = c.parentNode
		}
		ScreenshotViewer.show({
			screenshots: this.data,
			pos: b
		})
	},
	viCellClick: function (b, d) {
		d = $E(d);
		if (d.shiftKey || d.ctrlKey) {
			return
		}
		var a = 0,
		c = d._target;
		while (c && a < 3) {
			if (c.nodeName == "A") {
				return
			}
			if (c.nodeName == "IMG") {
				break
			}
			c = c.parentNode
		}
		VideoViewer.show({
			videos: this.data,
			pos: b
		})
	},
	moneyHonorOver: function (a) {
		Tooltip.showAtCursor(a, LANG.tooltip_honorpoints, 0, 0, "q")
	},
	moneyArenaOver: function (a) {
		Tooltip.showAtCursor(a, LANG.tooltip_arenapoints, 0, 0, "q")
	},
	moneyAchievementOver: function (a) {
		Tooltip.showAtCursor(a, LANG.tooltip_achievementpoints, 0, 0, "q")
	},
	appendMoney: function (g, a, f, m, j, c, l) {
		var k, h = 0;
		if (a >= 10000) {
			h = 1;
			k = ce("span");
			k.className = "moneygold";
			ae(k, ct(Math.floor(a / 10000)));
			ae(g, k);
			a %= 10000
		}
		if (a >= 100) {
			if (h) {
				ae(g, ct(" "))
			} else {
				h = 1
			}
			k = ce("span");
			k.className = "moneysilver";
			ae(k, ct(Math.floor(a / 100)));
			ae(g, k);
			a %= 100
		}
		if (a >= 1 || f != null) {
			if (h) {
				ae(g, ct(" "))
			} else {
				h = 1
			}
			k = ce("span");
			k.className = "moneycopper";
			ae(k, ct(a));
			ae(g, k)
		}
		if (m != null && m != 0) {
			if (h) {
				ae(g, ct(" "))
			} else {
				h = 1
			}
			k = ce("span");
			k.className = "money" + (m < 0 ? "horde": "alliance") + " tip";
			k.onmouseover = Listview.funcBox.moneyHonorOver;
			k.onmousemove = Tooltip.cursorUpdate;
			k.onmouseout = Tooltip.hide;
			ae(k, ct(number_format(Math.abs(m))));
			ae(g, k)
		}
		if (j >= 1) {
			if (h) {
				ae(g, ct(" "))
			} else {
				h = 1
			}
			k = ce("span");
			k.className = "moneyarena tip";
			k.onmouseover = Listview.funcBox.moneyArenaOver;
			k.onmousemove = Tooltip.cursorUpdate;
			k.onmouseout = Tooltip.hide;
			ae(k, ct(number_format(j)));
			ae(g, k)
		}
		if (c != null) {
			for (var b = 0; b < c.length; ++b) {
				if (h) {
					ae(g, ct(" "))
				} else {
					h = 1
				}
				var o = c[b][0];
				var e = c[b][1];
				k = ce("a");
				k.href = "?item=" + o;
				k.className = "moneyitem";
				k.style.backgroundImage = "url(images/icons/tiny/" + g_items.getIcon(o).toLowerCase() + ".gif)";
				ae(k, ct(e));
				ae(g, k)
			}
		}
		if (l != null) {
			if (h) {
				ae(g, ct(" "))
			} else {
				h = 1
			}
			k = ce("span");
			k.className = "moneyachievement tip";
			k.onmouseover = Listview.funcBox.moneyAchievementOver;
			k.onmousemove = Tooltip.cursorUpdate;
			k.onmouseout = Tooltip.hide;
			ae(k, ct(number_format(l)));
			ae(g, k)
		}
	},
	getUpperSource: function (a, b) {
		switch (a) {
		case 2:
			if (b.bd) {
				return LANG.source_bossdrop
			}
			if (b.z) {
				return LANG.source_zonedrop
			}
			break;
		case 4:
			return LANG.source_quests;
		case 5:
			return LANG.source_vendors
		}
		return g_sources[a]
	},
	getLowerSource: function (a, d, c) {
		switch (a) {
		case 3:
			if (d.p && g_sources_pvp[d.p]) {
				return {
					text: g_sources_pvp[d.p]
				}
			}
			break
		}
		switch (c) {
		case 0:
		case 1:
		case 2:
			if (d.z) {
				var b = {
					url: "?zone=" + d.z,
					text: g_zones[d.z]
				};
				if (d.t && a == 5) {
					b.pretext = LANG.lvitem_vendorin
				}
				if (d.dd && d.dd != 99) {
					if (d.dd < 0) {
						b.posttext = sprintf(LANG.lvitem_dd, "", (d.dd < -1 ? LANG.lvitem_heroic: LANG.lvitem_normal))
					} else {
						b.posttext = sprintf(LANG.lvitem_dd, (d.dd & 1 ? LANG.lvitem_raid10: LANG.lvitem_raid25), (d.dd > 2 ? LANG.lvitem_heroic: LANG.lvitem_normal))
					}
				}
				return b
			}
			break;
		case 5:
			return {
				url:
				"?quests=" + d.c2 + "." + d.c,
				text: Listview.funcBox.getQuestCategory(d.c)
			};
			break;
		case 6:
			if (d.c && d.s) {
				return {
					url: "?spells=" + d.c + "." + d.s,
					text: g_spell_skills[d.s]
				}
			} else {
				return {
					url: "?spells=0",
					text: "??"
				}
			}
			break
		}
	},
	getExpansionText: function (a) {
		var b = "";
		if (a.expansion == 1) {
			b += " bc"
		} else {
			if (a.expansion == 2) {
				b += " wotlk wrath"
			}
		}
		return b
	}
};
Listview.templates = {
	faction: {
		sort: [1],
		nItemsPerPage: -1,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			compute: function (d, e) {
				var b = ce("a");
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(d);
				ae(b, ct(d.name));
				if (d.expansion) {
					var c = ce("span");
					c.className = (d.expansion == 1 ? "bc-icon": "wotlk-icon");
					ae(c, b);
					ae(e, c)
				} else {
					ae(e, b)
				}
			},
			getVisibleText: function (a) {
				var b = a.name;
				if (a.expansion == 1) {
					b += " bc"
				} else {
					if (a.expansion == 2) {
						b += "wotlk wrath"
					}
				}
				return b
			}
		},
		{
			id: "side",
			name: LANG.side,
			type: "text",
			compute: function (a, c) {
				if (a.side && a.side != 3) {
					var b = ce("span");
					b.className = (a.side == 1 ? "alliance-icon": "horde-icon");
					b.onmouseover = function (d) {
						Tooltip.showAtCursor(d, g_sides[a.side], 0, 0, "q")
					};
					b.onmousemove = Tooltip.cursorUpdate;
					b.onmouseout = Tooltip.hide;
					ae(c, b)
				}
			},
			getVisibleText: function (a) {
				if (a.side) {
					return g_sides[a.side]
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_sides[d.side], g_sides[c.side])
			}
		},
		{
			id: "standing",
			name: LANG.reputation,
			value: "standing",
			compute: function (a, b) {
				b.style.padding = 0;
				ae(b, g_createReputationBar(a.standing))
			},
			hidden: 1
		},
		{
			id: "category",
			name: LANG.category,
			type: "text",
			width: "16%",
			compute: function (d, e) {
				if (d.category2 != null) {
					e.className = "small q1";
					var b = ce("a"),
					c = "?factions=" + d.category2;
					if (d.category) {
						c += "." + d.category
					}
					b.href = c;
					ae(b, ct(Listview.funcBox.getFactionCategory(d.category, d.category2)));
					ae(e, b)
				}
			},
			getVisibleText: function (a) {
				return Listview.funcBox.getFactionCategory(a.category, a.category2)
			},
			sortFunc: function (d, c, f) {
				var e = Listview.funcBox.getFactionCategory;
				return strcmp(e(d.category, d.category2), e(c.category, c.category2))
			}
		}],
		getItemLink: function (a) {
			return "?faction=" + a.id
		}
	},
	item: {
		sort: [1],
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			span: 2,
			value: "name",
			compute: function (o, e, l) {
				var g = ce("td");
				g.style.width = "1px";
				g.style.padding = "0";
				g.style.borderRight = "none";
				var h = null,
				p = null;
				if (o.stack != null) {
					h = Listview.funcBox.createTextRange(o.stack[0], o.stack[1])
				}
				if (o.avail != null) {
					p = o.avail
				}
				ae(g, g_items.createIcon(o.id, (this.iconSize == null ? 1 : this.iconSize), h, p));
				ae(l, g);
				e.style.borderLeft = "none";
				var m = ce("a");
				m.className = "q" + (7 - parseInt(o.name.charAt(0)));
				m.style.fontFamily = "Verdana, sans-serif";
				m.href = this.template.getItemLink(o);
				if (o.rel) {
					Icon.getLink(g.firstChild).rel = o.rel;
					m.rel = o.rel
				}
				ae(m, ct(o.name.substring(1)));
				var b = ce("div");
				ae(b, m);
				if (o.reqclass) {
					var k = ce("div");
					k.className = "small2";
					var f = Listview.funcBox.assocBinFlags(o.reqclass, g_chr_classes);
					for (var j = 0, l = f.length; j < l; ++j) {
						if (j > 0) {
							ae(k, ct(", "))
						}
						var p = ce("a");
						p.href = "?class=" + f[j];
						p.className = "c" + f[j];
						st(p, g_chr_classes[f[j]]);
						ae(k, p)
					}
					ae(b, k)
				}
				if (typeof fi_nExtraCols == "number" && fi_nExtraCols >= 5) {
					if (o.source != null && o.source.length == 1) {
						if (q.reqclass) {
							ae(j, ct(LANG.dash))
						} else {
                            var j = ce("div");
                            j.className = "small2";
						}
						var c = (o.sourcemore ? o.sourcemore[0] : {});
						var k = 0;
						if (c.t) {
							k = c.t;
							var m = ce("a");
							if (c.q != null) {
								m.className = "q" + c.q
							} else {
								m.className = "q1"
							}
							m.href = "?" + g_types[c.t] + "=" + c.ti;
							if (c.n.length <= 30) {
								ae(m, ct(c.n))
							} else {
								m.title = c.n;
								ae(m, ct(trim(c.n.substr(0, 27)) + "..."))
							}
							ae(j, m)
						} else {
							ae(j, ct(Listview.funcBox.getUpperSource(o.source[0], c)))
						}
						var f = Listview.funcBox.getLowerSource(o.source[0], c, k);
						if (f != null) {
							ae(j, ct(LANG.hyphen));
							if (f.pretext) {
								ae(j, ct(f.pretext))
							}
							if (f.url) {
								var m = ce("a");
								m.className = "q1";
								m.href = f.url;
								ae(m, ct(f.text));
								ae(j, m)
							} else {
								ae(j, ct(f.text))
							}
							if (f.posttext) {
								ae(j, ct(f.posttext))
							}
						}
						ae(b, j)
					}
				}
				if (o.heroic || o.reqrace) {
					b.style.position = "relative";
					var j = ce("div");
					j.className = "small";
					j.style.fontStyle = "italic";
					j.style.position = "absolute";
					j.style.right = j.style.bottom = "3px";
					if (o.heroic) {
						var t = ce("span");
						t.className = "q2";
						ae(t, ct(LANG.lvitem_heroicitem));
						ae(j, t)
					}
					if (o.reqrace) {
						if ((o.reqrace & 1791) != 1101 && (o.reqrace & 1791) != 690) {
							if (o.heroic) {
								ae(j, ce("br"));
								j.style.bottom = "-6px"
							}
							var c = Listview.funcBox.assocBinFlags(o.reqrace, g_chr_races);
							for (var j = 0, l = c.length; j < l; ++j) {
								if (j > 0) {
									ae(j, ct(", "))
								}
								var p = ce("a");
								p.href = "?race=" + c[j];
								st(p, g_chr_races[c[j]]);
								ae(j, p)
							}
							j.className += " q1";
						}
					}
					ae(b, j)
				}
				ae(e, b);
			},
			getVisibleText: function (c) {
				var e = c.name.substring(1);
				if (c.heroic) {
					e += " " + LANG.lvitem_heroicitem
				}
				if (c.reqrace) {
					e += " " + Listview.funcBox.arrayText(Listview.funcBox.assocBinFlags(c.reqrace, g_chr_races), g_chr_races)
				}
				if (c.reqclass) {
					e += " " + Listview.funcBox.arrayText(Listview.funcBox.assocBinFlags(c.reqclass, g_chr_classes), g_chr_classes)
				}
				if (typeof fi_nExtraCols == "number" && fi_nExtraCols >= 5) {
					if (c.source != null && c.source.length == 1) {
						var d = (c.sourcemore ? c.sourcemore[0] : {});
						var b = 0;
						if (d.t) {
							b = d.t;
							e += " " + d.n
						} else {
							e += " " + Listview.funcBox.getUpperSource(c.source[0], d)
						}
						var a = Listview.funcBox.getLowerSource(c.source[0], d, b);
						if (a != null) {
							if (a.pretext) {
								e += " " + a.pretext
							}
							e += " " + a.text;
							if (a.posttext) {
								e += " " + a.posttext
							}
						}
					}
				}
				return e
			}
		},
		{
			id: "level",
			name: LANG.level,
			value: "level",
			type: "range",
			getMinValue: function (a) {
				return a.minlevel ? a.minlevel: a.level
			},
			getMaxValue: function (a) {
				return a.maxlevel ? a.maxlevel: a.level
			},
			compute: function (a, b) {
				if (a.minlevel && a.maxlevel) {
					if (a.minlevel != a.maxlevel) {
						return a.minlevel + LANG.hyphen + a.maxlevel
					} else {
						return a.minlevel
					}
				} else {
					return a.level
				}
			},
			sortFunc: function (d, c, e) {
				if (e > 0) {
					return strcmp(d.minlevel, c.minlevel) || strcmp(d.maxlevel, c.maxlevel) || strcmp(d.level, c.level)
				} else {
					return strcmp(d.maxlevel, c.maxlevel) || strcmp(d.minlevel, c.minlevel) || strcmp(d.level, c.level)
				}
			}
		},
		{
			id: "reqlevel",
			name: LANG.req,
			tooltip: LANG.tooltip_reqlevel,
			value: "reqlevel",
			compute: function (a, b) {
				if (a.reqlevel > 1) {
					return a.reqlevel
				}
			}
		},
		{
			id: "side",
			name: LANG.side,
			type: "text",
			compute: function (a, c) {
				if (a.side && a.side != 3) {
					var b = ce("span");
					b.className = (a.side == 1 ? "alliance-icon": "horde-icon");
					b.onmouseover = function (d) {
						Tooltip.showAtCursor(d, g_sides[a.side], 0, 0, "q")
					};
					b.onmousemove = Tooltip.cursorUpdate;
					b.onmouseout = Tooltip.hide;
					ae(c, b)
				}
			},
			getVisibleText: function (a) {
				if (a.side) {
					return g_sides[a.side]
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_sides[d.side], g_sides[c.side])
			}
		},
		{
			id: "dps",
			name: LANG.dps,
			value: "dps",
			compute: function (a, b) {
				return (a.dps || 0).toFixed(1)
			},
			hidden: true
		},
		{
			id: "speed",
			name: LANG.speed,
			value: "speed",
			compute: function (a, b) {
				return (a.speed || 0).toFixed(2)
			},
			hidden: true
		},
		{
			id: "armor",
			name: LANG.armor,
			value: "armor",
			compute: function (a, b) {
				if (a.armor > 0) {
					return a.armor
				}
			},
			hidden: true
		},
		{
			id: "slot",
			name: LANG.slot,
			type: "text",
			compute: function (a, b) {
				nw(b);
				return g_item_slots[a.slot]
			},
			getVisibleText: function (a) {
				return g_item_slots[a.slot]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_item_slots[d.slot], g_item_slots[c.slot])
			}
		},
		{
			id: "slots",
			name: LANG.slots,
			value: "nslots",
			hidden: true
		},
		{
			id: "skill",
			name: LANG.skill,
			value: "skill",
			hidden: true
		},
		{
			id: "glyph",
			name: LANG.glyphtype,
			type: "text",
			value: "glyph",
			compute: function (a, b) {
				if (a.glyph) {
					return g_item_glyphs[a.glyph]
				}
			},
			getVisibleText: function (a) {
				return g_item_glyphs[a.glyph]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_item_glyphs[d.glyph], g_item_glyphs[c.glyph])
			},
			hidden: true
		},
		{
			id: "source",
			name: LANG.source,
			type: "text",
			compute: function (k, d) {
				if (this.iconSize == 0) {
					d.className = "small"
				}
				if (k.source != null) {
					if (k.source.length == 1) {
						nw(d);
						var c = (k.sourcemore ? k.sourcemore[0] : {});
						var h = 0;
						if (c.t) {
							h = c.t;
							var j = ce("a");
							if (c.q != null) {
								j.className = "q" + c.q
							} else {
								j.className = "q1"
							}
							j.href = "?" + g_types[c.t] + "=" + c.ti;
							j.style.whiteSpace = "nowrap";
							if (c.icon) {
								j.className += " icontiny";
								j.style.backgroundImage = 'url("images/icons/tiny/' + c.icon.toLowerCase() + '.gif")'
							}
							ae(j, ct(c.n));
							ae(d, j)
						} else {
							ae(d, ct(Listview.funcBox.getUpperSource(k.source[0], c)))
						}
						var f = Listview.funcBox.getLowerSource(k.source[0], c, h);
						if (this.iconSize != 0 && f != null) {
							var b = ce("div");
							b.className = "small2";
							if (f.pretext) {
								ae(b, ct(f.pretext))
							}
							if (f.url) {
								var j = ce("a");
								j.className = "q1";
								j.href = f.url;
								ae(j, ct(f.text));
								ae(b, j)
							} else {
								ae(b, ct(f.text))
							}
							if (f.posttext) {
								ae(b, ct(f.posttext))
							}
							ae(d, b)
						}
					} else {
						var l = "";
						for (var e = 0, g = k.source.length; e < g; ++e) {
							if (e > 0) {
								l += LANG.comma
							}
							l += g_sources[k.source[e]]
						}
						return l
					}
				}
			},
			getVisibleText: function (c) {
				if (c.source != null) {
					if (c.source.length == 1) {
						var e = "";
						var d = (c.sourcemore ? c.sourcemore[0] : {});
						var b = 0;
						if (d.t) {
							b = d.t;
							e += " " + d.n
						} else {
							e += " " + Listview.funcBox.getUpperSource(c.source[0], d)
						}
						var a = Listview.funcBox.getLowerSource(c.source[0], d, b);
						if (a != null) {
							if (a.pretext) {
								e += " " + a.pretext
							}
							e += " " + a.text;
							if (a.posttext) {
								e += " " + a.posttext
							}
						}
						return e
					} else {
						return Listview.funcBox.arrayText(c.source, g_sources)
					}
				}
			},
			sortFunc: function (f, d) {
				var g = Listview.funcBox.assocArrCmp(f.source, d.source, g_sources);
				if (g != 0) {
					return g
				}
				var e = (f.sourcemore && f.source.length == 1 ? f.sourcemore[0].n: null),
				c = (d.sourcemore && d.source.length == 1 ? d.sourcemore[0].n: null);
				return strcmp(e, c)
			}
		},
		{
			id: "type",
			name: LANG.type,
			type: "text",
			compute: function (d, e) {
				e.className = "small q1";
				nw(e);
				var b = ce("a");
				var c = Listview.funcBox.getItemType(d.classs, d.subclass, d.subsubclass);
				b.href = c.url;
				ae(b, ct(c.text));
				ae(e, b)
			},
			getVisibleText: function (a) {
				return Listview.funcBox.getItemType(a.classs, a.subclass, a.subsubclass).text
			},
			sortFunc: function (d, c, f) {
				var e = Listview.funcBox.getItemType;
				return strcmp(e(d.classs, d.subclass, d.subsubclass).text, e(c.classs, c.subclass, c.subsubclass).text)
			}
		}],
		getItemLink: function (a) {
			return "?item=" + a.id
		},
		onBeforeCreate: function () {
			var b = false;
			for (var c = 0, a = this.data.length; c < a; ++c) {
				var d = this.data[c];
				if (d.slot > 0 && d.slot != 18) {++b
				} else {
					d.__nochk = 1
				}
			}
			if (b > 0) {
				this.mode = 1;
				this._nComparable = b
			}
		},
		createCbControls: function (d, c) {
			if (!c && this._nComparable < 15) {
				return
			}
			var g = ce("input"),
			b = ce("input"),
			f = ce("input"),
			a = ce("input"),
			e = g_user.characters ? array_filter(g_user.characters, function (h) {
				return h.pinned
			}) : false;
			g.type = b.type = f.type = a.type = "button";
			g.value = LANG.button_compare;
			b.value = LANG.button_viewin3d;
			f.value = LANG.button_equip;
			a.value = LANG.button_deselect;
			g.onclick = this.template.compareItems.bind(this);
			b.onclick = this.template.viewIn3d.bind(this);
			a.onclick = Listview.cbSelect.bind(this, false);
			if (this._nComparable == 0 || typeof this._nComparable == "undefined") {
				g.disabled = "disabled";
				b.disabled = "disabled";
				f.disabled = "disabled";
				a.disabled = "disabled";
				e = false
			}
			ae(d, b);
			ae(d, g);
			if (e && e.length) {
				f.onclick = this.template.equipItems.bind(this, e[0]);
				ae(d, f)
			}
			ae(d, a)
		},
		compareItems: function () {
			var b = this.getCheckedRows();
			if (!b.length) {
				return
			}
			var a = "";
			array_walk(b, function (c) {
				if (c.slot == 0 || c.slot == 18) {
					return
				}
				a += c.id + ";"
			});
			su_addToSaved(rtrim(a, ";"), b.length)
		},
		viewIn3d: function () {
			var j = this.getCheckedRows();
			if (!j.length) {
				return
			}
			var g = false,
			e = false,
			f = false;
			var c = {};
			var d = null;
			array_walk(j, function (i) {
				if (in_array(ModelViewer.validSlots, i.slotbak) >= 0 && i.displayid > 0) {
					var k = ModelViewer.slotMap[i.slotbak];
					if (c[k]) {
						e = true
					}
					c[k] = i.displayid;
					g = true
				} else {
					if (i.modelviewer) {
						d = i.modelviewer
					} else {
						f = true
					}
				}
			});
			var h = null;
			if (d) {
				if (g || f) {
					h = LANG.dialog_cantdisplay
				}
				ModelViewer.show({
					type: d.type,
					displayId: d.displayid,
					slot: d.slot,
					message: h
				})
			} else {
				if (e || f) {
					h = LANG.dialog_cantdisplay
				}
				var a = [];
				for (var b in c) {
					a.push(parseInt(b));
					a.push(c[b])
				}
				if (a.length > 0) {
					ModelViewer.show({
						type: 4,
						equipList: a,
						message: h
					})
				} else {
					alert(LANG.message_nothingtoviewin3d)
				}
			}
	},
		equipItems: function (c) {
			var b = this.getCheckedRows();
			if (!b.length) {
				return
			}
			var a = "";
			array_walk(b, function (d) {
				if (d.slot == 0 || d.slot == 18) {
					return
				}
				a += d.id + ":"
			});
			location.href = g_getProfileUrl(c) + "&items=" + rtrim(a, ":")
		}
	},
	itemset: {
		sort: [1],
		nItemsPerPage: 75,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			compute: function (c, g) {
				var b = ce("a");
				b.className = "q" + (7 - parseInt(c.name.charAt(0)));
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(c);
				ae(b, ct(c.name.substring(1)));
				var f = ce("div");
				f.style.position = "relative";
				ae(f, b);
				if (c.heroic) {
					var e = ce("div");
					e.className = "small q2";
					e.style.fontStyle = "italic";
					e.style.position = "absolute";
					e.style.right = "3px";
					e.style.bottom = "3px";
					ae(e, ct(LANG.lvitem_heroicitem));
					ae(f, e)
				}
				ae(g, f);
				if (c.note) {
					var e = ce("div");
					e.className = "small";
					ae(e, ct(g_itemset_notes[c.note]));
					ae(g, e)
				}
			},
			getVisibleText: function (a) {
				var b = a.name.substring(1);
				if (a.note) {
					b += " " + g_itemset_notes[a.note]
				}
				return b
			}
		},
		{
			id: "level",
			name: LANG.level,
			type: "range",
			getMinValue: function (a) {
				return a.minlevel
			},
			getMaxValue: function (a) {
				return a.maxlevel
			},
			compute: function (a, b) {
				if (a.minlevel > 0 && a.maxlevel > 0) {
					if (a.minlevel != a.maxlevel) {
						return a.minlevel + LANG.hyphen + a.maxlevel
					} else {
						return a.minlevel
					}
				} else {
					return - 1
				}
			},
			sortFunc: function (d, c, e) {
				if (e > 0) {
					return strcmp(d.minlevel, c.minlevel) || strcmp(d.maxlevel, c.maxlevel)
				} else {
					return strcmp(d.maxlevel, c.maxlevel) || strcmp(d.minlevel, c.minlevel)
				}
			}
		},
		{
			id: "pieces",
			name: LANG.pieces,
			getValue: function (a) {
				return a.pieces.length
			},
			compute: function (a, b) {
				b.style.padding = "0";
				Listview.funcBox.createCenteredIcons(a.pieces, b)
			},
			sortFunc: function (d, c) {
				var f = (d.pieces != null ? d.pieces.length: 0);
				var e = (c.pieces != null ? c.pieces.length: 0);
				return strcmp(f, e)
			}
		},
		{
			id: "type",
			name: LANG.type,
			type: "text",
			compute: function (a, b) {
				return g_itemset_types[a.type]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_itemset_types[d.type], g_itemset_types[c.type])
			}
		},
		{
			id: "classes",
			name: LANG.classes,
			type: "text",
			width: "20%",
			getVisibleText: function (d) {
				var e = "";
				if (d.reqclass) {
					var c = Listview.funcBox.assocBinFlags(d.reqclass, g_chr_classes);
					for (var b = 0, a = c.length; b < a; ++b) {
						if (b > 0) {
							e += LANG.comma
						}
						e += g_chr_classes[c[b]]
					}
				}
				return e
			},
			compute: function (f, h) {
				if (f.reqclass) {
					var c = Listview.funcBox.assocBinFlags(f.reqclass, g_chr_classes);
					var g = ce("div");
					g.style.width = (26 * c.length) + "px";
					g.style.margin = "0 auto";
					for (var b = 0, a = c.length; b < a; ++b) {
						var e = Icon.create("class_" + g_file_classes[c[b]], 0, null, "?class=" + c[b]);
						e.style.cssFloat = e.style.styleFloat = "left";
						ae(g, e)
					}
					ae(h, g)
				}
			},
			sortFunc: function (d, c, e) {
				return Listview.funcBox.assocArrCmp(Listview.funcBox.assocBinFlags(d.reqclass, g_chr_classes), Listview.funcBox.assocBinFlags(c.reqclass, g_chr_classes), g_chr_classes)
			}
		}],
		getItemLink: function (a) {
			return "?itemset=" + a.id
		}
	},
	npc: {
		sort: [1],
		nItemsPerPage: 100,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			compute: function (c, f) {
				if (c.boss) {
					f.className = "boss-icon-padded"
				}
				var b = ce("a");
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(c);
				ae(b, ct(c.name));
				ae(f, b);
				if (c.tag != null) {
					var e = ce("div");
					e.className = "small";
					ae(e, ct("<" + c.tag + ">"));
					ae(f, e)
				}
			},
			getVisibleText: function (a) {
				var b = a.name;
				if (a.tag) {
					b += " <" + a.tag + ">"
				}
				if (a.boss) {
					b += " boss skull"
				}
				return b
			},
			sortFunc: function (d, c, e) {
				return strcmp(c.boss, d.boss) || strcmp(d.name, c.name)
			}
		},
		{
			id: "level",
			name: LANG.level,
			type: "range",
			width: "10%",
			getMinValue: function (a) {
				return a.minlevel
			},
			getMaxValue: function (a) {
				return a.maxlevel
			},
			compute: function (a, c) {
				if (a.classification) {
					var b = ce("div");
					b.className = "small";
					ae(b, ct(g_npc_classifications[a.classification]));
					ae(c, b)
				}
				if (a.classification == 3) {
					return "??"
				}
				if (a.minlevel > 0 && a.maxlevel > 0) {
					if (a.minlevel != a.maxlevel) {
						return a.minlevel + LANG.hyphen + a.maxlevel
					} else {
						return a.minlevel
					}
				}
				return -1
			},
			getVisibleText: function (a) {
				var b = "";
				if (a.classification) {
					b += " " + g_npc_classifications[a.classification]
				}
				if (a.minlevel > 0 && a.maxlevel > 0) {
					b += " ";
					if (a.minlevel != a.maxlevel) {
						b += a.minlevel + LANG.hyphen + a.maxlevel
					} else {
						b += a.minlevel
					}
				}
				return b
			},
			sortFunc: function (d, c, e) {
				if (e > 0) {
					return strcmp(d.minlevel, c.minlevel) || strcmp(d.maxlevel, c.maxlevel) || strcmp(d.classification, c.classification)
				} else {
					return strcmp(d.maxlevel, c.maxlevel) || strcmp(d.minlevel, c.minlevel) || strcmp(d.classification, c.classification)
				}
			}
		},
		{
			id: "location",
			name: LANG.location,
			type: "text",
			compute: function (a, b) {
				return Listview.funcBox.location(a, b)
			},
			getVisibleText: function (a) {
				return Listview.funcBox.arrayText(a.location, g_zones)
			},
			sortFunc: function (d, c, e) {
				return Listview.funcBox.assocArrCmp(d.location, c.location, g_zones)
			}
		},
		{
			id: "react",
			name: LANG.react,
			type: "text",
			width: "10%",
			value: "react",
			filtrable: 0,
			compute: function (b, g) {
				if (b.react == null) {
					return -1
				}
				var d = [LANG.lvnpc_alliance, LANG.lvnpc_horde];
				var f = 0;
				for (var a = 0; a < 2; ++a) {
					if (b.react[a] != null) {
						if (f++>0) {
							ae(g, ct(" "))
						}
						var e = ce("span");
						e.className = (b.react[a] < 0 ? "q10": (b.react[a] > 0 ? "q2": "q"));
						ae(e, ct(d[a]));
						ae(g, e)
					}
				}
			}
		},
		{
			id: "skin",
			name: LANG.skin,
			type: "text",
			value: "skin",
			compute: function (c, d) {
				if (c.skin) {
					var b = ce("a");
					b.className = "q1";
					b.href = "?npcs&filter=cr=35;crs=0;crv=" + c.skin;
					ae(b, ct(c.skin));
					ae(d, b)
				}
			},
			hidden: 1
		},
		{
			id: "petfamily",
			name: LANG.petfamily,
			type: "text",
			width: "12%",
			compute: function (c, d) {
				d.className = "q1";
				var b = ce("a");
				b.href = "?pet=" + c.family;
				ae(b, ct(g_pet_families[c.family]));
				ae(d, b)
			},
			getVisibleText: function (a) {
				return g_pet_families[a.family]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_pet_families[d.family], g_pet_families[c.family])
			},
			hidden: 1
		},
		{
			id: "type",
			name: LANG.type,
			type: "text",
			width: "12%",
			compute: function (c, d) {
				d.className = "small q1";
				var b = ce("a");
				b.href = "?npcs=" + c.type;
				ae(b, ct(g_npc_types[c.type]));
				ae(d, b)
			},
			getVisibleText: function (a) {
				return g_npc_types[a.type]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_npc_types[d.type], g_npc_types[c.type])
			}
		}],
		getItemLink: function (a) {
			return "?npc=" + a.id
		}
	},
	object: {
		sort: [1],
		nItemsPerPage: 100,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			compute: function (c, d) {
				var b = ce("a");
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(c);
				ae(b, ct(c.name));
				ae(d, b)
			}
		},
		{
			id: "location",
			name: LANG.location,
			type: "text",
			compute: function (a, b) {
				return Listview.funcBox.location(a, b)
			},
			getVisibleText: function (a) {
				return Listview.funcBox.arrayText(a.location, g_zones)
			},
			sortFunc: function (d, c, e) {
				return Listview.funcBox.assocArrCmp(d.location, c.location, g_zones)
			}
		},
		{
			id: "skill",
			name: LANG.skill,
			width: "10%",
			value: "skill",
			hidden: true
		},
		{
			id: "type",
			name: LANG.type,
			type: "text",
			width: "12%",
			compute: function (c, d) {
				d.className = "small q1";
				var b = ce("a");
				b.href = "?objects=" + c.type;
				ae(b, ct(g_object_types[c.type]));
				ae(d, b)
			},
			getVisibleText: function (a) {
				return g_object_types[a.type]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_object_types[d.type], g_object_types[c.type])
			}
		}],
		getItemLink: function (a) {
			return "?object=" + a.id
		}
	},
	quest: {
		sort: [1, 2],
		nItemsPerPage: 100,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			compute: function (c, d) {
				var m = ce("div");
				var b = ce("a");
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(c);
				ae(b, ct(c.name));
				ae(m, b)
				if (c.reqclass) {
					var k = ce("div");
					k.className += " small2";
					var e = Listview.funcBox.assocBinFlags(c.reqclass, g_chr_classes);
					for (var g = 0, h = e.length; g < h; ++g) {
						if (g > 0) {
							ae(k, ct(LANG.comma))
						}
						var l = ce("a");
						l.href = "?class=" + e[g];
						l.className += "c" + e[g];
						st(l, g_chr_classes[e[g]]);
						ae(k, l);
					}
					ae(m, k);
				}
				if (c.wflags & 1 || (c.wflags & 32) || (c.reqrace && c.reqrace != -1)) {
					m.style.position = "relative";
					var n = ce("div");
					n.className = "small";
					n.style.fontStyle = "italic";
					n.style.position = "absolute";
					n.style.right = "3px";
					n.style.bottom = "3px";
					n.style.textAlign = "right";
					if (c.wflags & 1) {
						var p = ce("span");
                        p.style.color = "red";
                        ae(p, ct(LANG.lvdisabled));
						ae(n, p);
					}
					if (c.wflags & 32) {
						if (c.wflags & 1) {
							ae(n, ce("br"));
							m.style.height = "33px";
						}
						var p = ce("span"),
                        o = LANG.lvquest_autoaccept;
						if (c.wflags & 64) {
							p.style.color = "red";
                            o += " " + LANG.lvquest_hostile;
						}
                        ae(p, ct(o));
						ae(n, p)
					}
                    if (c.reqrace && c.reqrace != -1) {
                        var e = Listview.funcBox.assocBinFlags(c.reqrace, g_chr_races);
						if (e.length && (c.wflags & 1 || (c.wflags & 32))) {
							ae(n, ce("br"));
                            m.style.height = "33px";
						}
                        for (var g = 0, h = e.length; g < h; ++g) {
                            if (g > 0) {
                                ae(n, ct(LANG.comma))
                            }
                            var l = ce("a");
                            l.href = "?race=" + e[g];
                            l.className += "q1";
                            st(l, g_chr_races[e[g]]);
                            ae(n, l)
                        }
                    }
					ae(m, n)
				}
				ae(d, m);
			}
		},
		{
			id: "level",
			name: LANG.level,
			width: "7%",
			value: "level",
			compute: function (a, c) {
				if (a.type || a.daily || a.weekly) {
					var b = ce("div");
					b.className = "small";
					nw(b);
					if (a.daily) {
						if (a.type) {
							ae(b, ct(sprintf(LANG.lvquest_daily, g_quest_types[a.type])))
						} else {
							ae(b, ct(LANG.daily))
						}
					} else {
						if (a.weekly) {
							if (a.type) {
								ae(b, ct(sprintf(LANG.lvquest_weekly, g_quest_types[a.type])))
							} else {
								ae(b, ct(LANG.weekly))
							}
						} else {
							if (a.type) {
								ae(b, ct(g_quest_types[a.type]))
							}
						}
					}
					ae(c, b)
				}
				return a.level
			},
			getVisibleText: function (a) {
				var b = "";
				if (a.type) {
					b += " " + g_quest_types[a.type]
				}
				if (a.daily) {
					b += " " + LANG.daily
				} else {
					if (a.weekly) {
						b += " " + LANG.weekly
					}
				}
				if (a.level) {
					b += " " + a.level
				}
				return b
			},
			sortFunc: function (d, c, e) {
				return strcmp(d.level, c.level) || strcmp(d.type, c.type)
			}
		},
		{
			id: "reqlevel",
			name: LANG.req,
			tooltip: LANG.tooltip_reqlevel,
			width: "7%",
			value: "reqlevel"
		},
		{
			id: "side",
			name: LANG.side,
			type: "text",
			compute: function (a, c) {
				if (a.side && a.side != 3) {
					var b = ce("span");
					b.className = (a.side == 1 ? "alliance-icon": "horde-icon");
					b.onmouseover = function (d) {
						Tooltip.showAtCursor(d, g_sides[a.side], 0, 0, "q")
					};
					b.onmousemove = Tooltip.cursorUpdate;
					b.onmouseout = Tooltip.hide;
					ae(c, b)
				} else {
					if (!a.side) {
						ae(c, ct("??"))
					}
				}
			},
			getVisibleText: function (a) {
				if (a.side) {
					return g_sides[a.side]
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_sides[d.side], g_sides[c.side])
			}
		},
		{
			id: "rewards",
			name: LANG.rewards,
			width: "25%",
			compute: function (b, g) {
				var a = (b.itemchoices != null || b.itemrewards != null);
				if (a) {
					var f, e;
					if (b.itemchoices && b.itemchoices.length > 1) {
						f = LANG.lvquest_pickone;
						if (b.itemrewards && b.itemrewards.length > 0) {
							e = LANG.lvquest_alsoget
						}
					}
					Listview.funcBox.createCenteredIcons(b.itemchoices, g, f, 2);
					Listview.funcBox.createCenteredIcons(b.itemrewards, g, e, 2)
				}
				if (b.titlereward && g_titles[b.titlereward]) {
					var d = g_titles[b.titlereward]["name_" + g_locale.name];
					d = d.replace("%s", '<span class="q0">&lt;' + LANG.name + "&gt;</span>");
					var c = ce("a");
					c.className = "q1";
					c.href = "?title=" + b.titlereward;
					c.innerHTML = d;
					ae(g, c);
					ae(g, ce("br"))
				}
			},
			getVisibleText: function (a) {
				var b = "";
				if (a.itemchoices && a.itemchoices.length) {
					b += " " + LANG.lvquest_pickone;
					if (a.itemrewards && a.itemrewards.length) {
						b += " " + LANG.lvquest_alsoget
					}
				}
				if (a.titlereward && g_titles[a.titlereward]) {
					b += " " + g_titles[a.titlereward]["name_" + g_locale.name]
				}
				return b
			},
			sortFunc: function (d, c, e) {
				var g = (d.itemchoices != null ? d.itemchoices.length: 0) + (d.itemrewards != null ? d.itemrewards.length: 0);
				var f = (c.itemchoices != null ? c.itemchoices.length: 0) + (c.itemrewards != null ? c.itemrewards.length: 0);
				var i = (d.titlereward && g_titles[d.titlereward] ? g_titles[d.titlereward]["name_" + g_locale.name] : "");
				var h = (c.titlereward && g_titles[c.titlereward] ? g_titles[c.titlereward]["name_" + g_locale.name] : "");
				return strcmp(g, f) || strcmp(i, h)
			}
		},
		{
			id: "experience",
			name: LANG.exp,
			value: "xp"
		},
		{
			id: "money",
			name: LANG.money,
			compute: function (a, b) {
				if (a.money > 0 || a.currencyrewards != null) {
					if (a.money > 0) {
						Listview.funcBox.appendMoney(b, a.money);
						if (a.currencyrewards != null) {
							ae(b, ct(" + "))
						}
					}
					if (a.currencyrewards != null) {
						Listview.funcBox.appendMoney(b, null, a.side, null, a.currencyrewards)
					}
				}
			},
			getVisibleText: function (a) {
				var c = "";
				for (var b = 0; b < a.currencyrewards.length; ++b) {
					if (g_gatheredcurrencies[a.currencyrewards[b][0]]) {
						c += " " + g_gatheredcurrencies[a.currencyrewards[b][0]]["name_" + g_locale.name]
					}
				}
				return c
			},
			sortFunc: function (d, c, e) {
				var g = 0,
				f = 0;
				if (d.currencyrewards && d.currencyrewards.length) {
					for (a in d.currencyrewards) {
						var b = (d.currencyrewards)[a];
						g += b[1]
					}
				}
				if (c.currencyrewards && c.currencyrewards.length) {
					for (a in c.currencyrewards) {
						var b = (c.currencyrewards)[a];
						f += b[1]
					}
				}
				return strcmp(g, f) || strcmp(d.money, c.money)
			}
		},
		{
			id: "reputation",
			name: LANG.reputation,
			width: "14%",
			value: "id",
			hidden: true
		},
		{
			id: "category",
			name: LANG.category,
			type: "text",
			width: "16%",
			compute: function (c, d) {
				if (c.category != 0) {
					d.className = "small q1";
					var b = ce("a");
					b.href = "?quests=" + c.category2 + "." + c.category;
					ae(b, ct(Listview.funcBox.getQuestCategory(c.category)));
					ae(d, b)
				}
			},
			getVisibleText: function (a) {
				return Listview.funcBox.getQuestCategory(a.category)
			},
			sortFunc: function (d, c, f) {
				var e = Listview.funcBox.getQuestCategory;
				return strcmp(e(d.category), e(c.category))
			}
		}],
		getItemLink: function (a) {
			return "?quest=" + a.id
		}
	},
	skill: {
		sort: [1],
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			span: 2,
			compute: function (c, h, f) {
				var d = ce("td");
				d.style.width = "1px";
				d.style.padding = "0";
				d.style.borderRight = "none";
				ae(d, Icon.create(c.icon, 0, null, this.getItemLink(c)));
				ae(f, d);
				h.style.borderLeft = "none";
				var g = ce("div");
				var b = ce("a");
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.getItemLink(c);
				ae(b, ct(c.name));
				if (c.expansion) {
					var e = ce("span");
					e.className = g_GetExpansionClassName(c.expansion);
					ae(e, b);
					ae(g, e)
				} else {
					ae(g, b)
				}
				ae(h, g)
			},
			getVisibleText: function (a) {
				var b = a.name + Listview.funcBox.getExpansionText(a);
				return b
			}
		},
		{
			id: "category",
			name: LANG.category,
			type: "text",
			width: "16%",
			compute: function (c, d) {
				if (c.category != 0) {
					d.className = "small q1";
					var b = ce("a");
					b.href = "?skills=" + c.category;
					ae(b, ct(g_skill_categories[c.category]));
					ae(d, b)
				}
			},
			getVisibleText: function (a) {
				return g_skill_categories[skill.category]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_skill_categories[d.category], g_skill_categories[c.category])
			}
		}],
		getItemLink: function (a) {
			return "?skill=" + a.id
		}
	},
	spell: {
		sort: ["name", "skill", "level"],
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			span: 2,
			value: "name",
			compute: function (g, e, k) {
				var f = ce("td"),
				p;
				f.style.width = "44px";
				f.style.padding = "0";
				f.style.borderRight = "none";
				if (g.creates != null) {
					p = g_items.createIcon(g.creates[0], 1, Listview.funcBox.createTextRange(g.creates[1], g.creates[2]))
				} else {
					p = g_spells.createIcon(g.id, 1)
				}
				p.style.cssFloat = p.style.styleFloat = "left";
				ae(f, p);
				ae(k, f);
				e.style.borderLeft = "none";
				var b = ce("div");
				var o = ce("a");
				var l = g.name.charAt(0);
				if (l != "@") {
					o.className = "q" + (7 - parseInt(l))
				}
				o.style.fontFamily = "Verdana, sans-serif";
				o.href = this.template.getItemLink(g);
				ae(o, ct(g.name.substring(1)));
				ae(b, o);
				if (g.rank) {
					var j = ce("div");
					j.className = "small2";
					ae(j, ct(g.rank));
					ae(b, j)
				}
				if (this.showRecipeClass && g.reqclass) {
					var l = ce("div");
					l.className = "small2";
					var f = Listview.funcBox.assocBinFlags(j.reqclass, g_chr_classes);
					for (var h = 0, k = f.length; h < k; ++h) {
						if (h > 0) {
							ae(l, ct(", "))
						}
						var o = ce("a");
						o.href = "?class=" + f[h];
						o.className = "c" + f[h];
						st(o, g_chr_classes[f[h]]);
						ae(l, o)
					}
					ae(b, l)
				}
				if (g.races) {

					b.style.position = "relative";
					var j = ce("div");
					j.className = "small";
					j.style.fontStyle = "italic";
					j.style.position = "absolute";
					j.style.right = j.style.bottom = "3px";
					if ((g.races & 1791) == 1101) {
						ae(j, ct(g_sides[1]))
					} else {
						if ((g.races & 1791) == 690) {
							ae(j, ct(g_sides[2]))
						} else {
							var i = Listview.funcBox.assocBinFlags(g.races, g_chr_races);
							j.className += " q1";
							for (var h = 0, k = i.length; h < k; ++h) {
								if (h > 0) {
									ae(j, ct(LANG.comma))
								}
								var o = ce("a");
								o.href = "?race=" + i[h];
								st(o, g_chr_races[i[h]]);
								ae(j, o)
							}
						}
					}
					ae(b, j)
				}
				ae(e, b)
			},
			getVisibleText: function (a) {
				var b = a.name;
				if (a.rank) {
					b += " " + a.rank
				}
				if (a.races) {

					var d = Listview.funcBox.assocBinFlags(b.reqclass, g_chr_classes);
					for (var c = 0, a = d.length; c < a; ++c) {
						if (c > 0) {
							b += LANG.comma
						}
						b += g_chr_classes[d[c]]
					}
				}
				if (b.races) {
					b += " " + Listview.funcBox.arrayText(Listview.funcBox.assocBinFlags(b.reqrace, g_chr_races), g_chr_races)
				}
				return b
			}
		},
		{
			id: "tier",
			name: LANG.tier,
			width: "10%",
			value: "level",
			compute: function (b, d) {
				if (b.level > 0) {
					var a = (!this._petTalents ? 10 : 20),
					c = (!this._petTalents ? 5 : 12);
					return Math.floor((b.level - a) / c) + 1
				}
			},
			hidden: true
		},
        {
			id: "level",
			name: LANG.level,
			width: "10%",
			value: "level",
			compute: function (a, b) {
				if (a.level > 0) {
					return a.level
				}
			},
			hidden: true
		},
		{
			id: "trainingcost",
			name: LANG.cost,
			width: "10%",
			hidden: true,
			getValue: function (a) {
				if (a.trainingcost) {
					return a.trainingcost
				}
			},
			compute: function (a, b) {
				if (a.trainingcost) {
					Listview.funcBox.appendMoney(b, a.trainingcost)
				}
			},
			sortFunc: function (d, c, e) {
				if (d.trainingcost == null) {
					return - 1
				} else {
					if (c.trainingcost == null) {
						return 1
					}
				}
				if (d.trainingcost < c.trainingcost) {
					return - 1
				} else {
					if (d.trainingcost > c.trainingcost) {
						return 1
					}
				}
				return 0
			}
		},
		{
			id: "classes",
			name: LANG.classes,
			type: "text",
			hidden: true,
			width: "20%",
			getVisibleText: function (b) {
				var e = "";
				if (b.reqclass) {
					var d = Listview.funcBox.assocBinFlags(b.reqclass, g_chr_classes);
					for (var c = 0, a = d.length; c < a; ++c) {
						if (c > 0) {
							e += LANG.comma
						}
						e += g_chr_classes[d[c]]
					}
				}
				return e
			},
			compute: function (b, h) {
				if (b.reqclass) {
					var e = Listview.funcBox.assocBinFlags(b.reqclass, g_chr_classes);
					var g = ce("div");
					g.style.width = (26 * e.length) + "px";
					g.style.margin = "0 auto";
					for (var c = 0, a = e.length; c < a; ++c) {
						var f = Icon.create("class_" + g_file_classes[e[c]], 0, null, "?class=" + e[c]);
						f.style.cssFloat = f.style.styleFloat = "left";
						ae(g, f)
					}
					ae(h, g)
				}
			},
			sortFunc: function (d, c, e) {
				return Listview.funcBox.assocArrCmp(Listview.funcBox.assocBinFlags(d.reqclass, g_chr_classes), Listview.funcBox.assocBinFlags(c.reqclass, g_chr_classes), g_chr_classes)
			}
		},
		{
			id: "singleclass",
			name: LANG.classs,
			type: "text",
			hidden: true,
			width: "15%",
			compute: function (a, e) {
				if (a.reqclass) {
					var b = Listview.funcBox.assocBinFlags(a.reqclass, g_chr_classes);
					var c = b[0];
					var d = ce("a");
                    d.style.backgroundImage = 'url("' + g_staticUrl + "/images/wow/icons/tiny?class_" + g_file_classes[c] + '.gif")';
                    d.className = "icontiny c" + c;
                    d.href = "?class=" + c;
                    ae(d, ct(g_chr_classes[c]));
					ae(e, d);
				}
			},
			sortFunc: function (d, c, e) {
				return Listview.funcBox.assocArrCmp(Listview.funcBox.assocBinFlags(d.reqclass, g_chr_classes), Listview.funcBox.assocBinFlags(c.reqclass, g_chr_classes), g_chr_classes)
			}
		},
		{
			id: "glyphtype",
			name: LANG.glyphtype,
			type: "text",
			hidden: true,
			width: "10%",
			compute: function (a, b) {
				if (a.glyphtype) {
					return g_item_glyphs[a.glyphtype]
				}
			}
		},
		{
			id: "schools",
			name: LANG.school,
			type: "text",
			width: "10%",
			hidden: true,
			compute: function (a, b) {
				var d = "";
				var c = a.schools ? a.schools: a.school;
				for (var e = 0; e < 32; ++e) {
					if (! (c & (1 << e))) {
						continue
					}
					if (d != "") {
						d += ", "
					}
					d += g_spell_resistances[e]
				}
				return d
			},
			sortFunc: function (d, c, e) {
				return strcmp(this.compute(d), this.compute(c))
			}
		},
		{
			id: "type",
			name: LANG.type,
			type: "text",
			width: "10%",
			hidden: true,
			compute: function (a, b) {
				if (g_spell_types[a.cat]) {
					return g_spell_types[a.cat][a.type]
				}
				return a.type
			},
			sortFunc: function (d, c, e) {
				var g = (g_spell_types[d.cat] ? g_spell_types[d.cat][d.type] : d.type),
				f = (g_spell_types[c.cat] ? g_spell_types[c.cat][c.type] : d.type);
				return strcmp(d.cat, c.cat) || strcmp(g, f)
			}
		},
		{
			id: "reagents",
			name: LANG.reagents,
			width: "9%",
			getValue: function (a) {
				return (a.reagents ? a.reagents.length: 0)
			},
			compute: function (g, c) {
				var a = (g.reagents != null);
				if (a) {
					c.style.padding = "0";
					var k = ce("div");
					var j = g.reagents;
					k.style.width = (44 * j.length) + "px";
					k.style.margin = "0 auto";
					for (var e = 0, h = j.length; e < h; ++e) {
						var b = j[e][0];
						var f = j[e][1];
						var l = g_items.createIcon(b, 1, f);
						l.style.cssFloat = l.style.styleFloat = "left";
						ae(k, l);

					}
					ae(c, k)
				}
			},
			sortFunc: function (d, c) {
				var f = (d.reagents != null ? d.reagents.length: 0);
				var e = (c.reagents != null ? c.reagents.length: 0);
				if (f > 0 && f == e) {
					return strcmp(d.reagents.toString(), c.reagents.toString())
				} else {
					return strcmp(f, e)
				}
			}
		},
		{
			id: "tp",
			name: LANG.tp,
			tooltip: LANG.tooltip_trainingpoints,
			width: "7%",
			hidden: true,
			value: "tp",
			compute: function (a, b) {
				if (a.tp > 0) {
					return a.tp
				}
			}
		},
		{
			id: "source",
			name: LANG.source,
			type: "text",
			width: "12%",
			hidden: true,
			compute: function (b, e) {
				if (b.source != null) {
					var d = "";
					for (var c = 0, a = b.source.length; c < a; ++c) {
						if (c > 0) {
							d += LANG.comma
						}
						d += g_sources[b.source[c]]
					}
					return d
				}
			},
			sortFunc: function (d, c, e) {
				return Listview.funcBox.assocArrCmp(d.source, c.source, g_sources)
			}
		},
		{
			id: "skill",
			name: LANG.skill,
			type: "text",
			width: "16%",
			getValue: function (a) {
				return a.learnedat
			},
			compute: function (h, f, l, r) {
				if (h.skill != null) {
					this.skillsColumn = r;
					var c = ce("div");
					c.className = "small";
					if (h.cat == -7 && h.pettype != null) {
						h.skill = [];
						var q = {
							0 : 410,
							1 : 409,
							2 : 411
						};
						for (var j = 0, k = h.pettype.length; j < k; ++j) {
							h.skill.push(q[h.pettype[j]])
						}
					}
					for (var g = 0, j = h.skill.length; g < j; ++g) {
						if (g > 0) {
							ae(c, ct(LANG.comma))
						}
						if (h.skill[g] == -1) {
							ae(c, ct(LANG.ellipsis))
						} else {
							if (in_array([7, -2, -3, -5, -6, -7, 11, 9], h.cat) != -1) {
								var o = ce("a");
								o.className = "q1";
								if (in_array([ - 5, -6, -7], h.cat) != -1) {
									o.href = "?spells=" + h.cat
								} else {
									o.href = "?spells=" + h.cat + "." + (h.chrclass ? (1 + Math.log(h.chrclass) / Math.LN2) + ".": "") + h.skill[g]
								}
								var q = document.location.href.split("?")[1];
								var e = q.substring(q.indexOf("=") + 1, (q.indexOf("#") != -1 ? q.indexOf("#") : q.length)).split(".");


								if (h.chrclass && (h.cat == 7 || h.cat == -2)) {
									if (g < 1 && ((1 + Math.log(h.chrclass) / Math.LN2) != e[1])) {
										var b = ce("a");
										b.className = "q0";
										b.href = "?spells=" + h.cat + "." + (1 + Math.log(h.chrclass) / Math.LN2);
										ae(b, ct(g_chr_classes[(1 + Math.log(h.chrclass) / Math.LN2)]));
										ae(c, b);
										ae(c, ce("br"))
									}
								}
								ae(o, ct(g_spell_skills[h.skill[g]]));
								ae(c, o)
							} else {
								ae(c, ct(g_spell_skills[h.skill[g]]))
							}
						}
					}
					if (h.learnedat > 0) {
						ae(c, ct(" ("));
						var d = ce("span");
						if (h.learnedat == 9999) {
							d.className = "q0";
							ae(d, ct("??"))
						} else {
							if (h.learnedat > 0) {
								ae(d, ct(h.learnedat));
								d.style.fontWeight = "bold"
							}
						}
						ae(c, d);
						ae(c, ct(")"))
					}
					ae(f, c);
					if (h.colors != null) {
						this.template.columns[r].type = null;
						var k = h.colors,
						p = 0;
						for (var g = 0; g < k.length; ++g) {
							if (k[g] > 0) {++p;
								break
							}
						}
						if (p > 0) {
							p = 0;
							c = ce("div");
							c.className = "small";
							c.style.fontWeight = "bold";
							for (var g = 0; g < k.length; ++g) {
								if (k[g] > 0) {
									if (p++>0) {
										ae(c, ct(" "))
									}
									var m = ce("span");
									m.className = "r" + (g + 1);
									ae(m, ct(k[g]));
									ae(c, m)
								}
							}
							ae(f, c)
						}
					}
				}
			},
			getVisibleText: function (a) {
				var b = Listview.funcBox.arrayText(a.skill, g_spell_skills);
				if (a.learnedat > 0) {
					b += " " + (a.learnedat == 9999 ? "??": a.learnedat)
				}
				return b
			},
			sortFunc: function (e, c) {
				if (e.chrclass && c.chrclass) {

					var h = strcmp(g_chr_classes[(1 + Math.log(e.chrclass) / Math.LN2)], g_chr_classes[(1 + Math.log(c.chrclass) / Math.LN2)])
					if (h) {
						return h
					}
                }
				var d = [e.learnedat, c.learnedat];
				for (var g = 0; g < 2; ++g) {
					var h = (g == 0 ? e: c);
					if (d[g] == 9999 && h.colors != null) {
						var f = 0;
						while (h.colors[f] == 0 && f < h.colors.length) {
							f++
						}
						if (f < h.colors.length) {
							d[g] = h.colors[f]
						}
					}
				}
				var j = strcmp(d[0], d[1]);
				if (j != 0) {
					return j
				}
				if (e.colors != null && c.colors != null) {
					for (var f = 0; f < 4; ++f) {
						j = strcmp(e.colors[f], c.colors[f]);
						if (j != 0) {
							return j
						}
					}
				}
				if (e.pettype != null & c.pettype != null) {
					return Listview.funcBox.assocArrCmp(e.pettype, c.pettype, g_pet_types)
				}
				return Listview.funcBox.assocArrCmp(e.skill, c.skill, g_spell_skills)
			}
		}],
		getItemLink: function (a) {
			return "?spell=" + a.id
		}
	},
	zone: {
		sort: [1],
		nItemsPerPage: -1,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			compute: function (c, e) {
				var b = ce("a");
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(c);
				ae(b, ct(c.name));
				if (c.expansion) {
					var d = ce("span");
					d.className = (c.expansion == 1 ? "bc-icon": "wotlk-icon");
					ae(d, b);
					ae(e, d)
				} else {
					ae(e, b)
				}
			},
			getVisibleText: function (a) {
				var b = a.name;
				if (a.expansion == 1) {
					b += " bc"
				} else {
					if (a.expansion == 2) {
						b += "wotlk wrath"
					}
                    if (a.instance == 5 || a.instance == 8) {
                        b += " heroic"
                    }
				}
				return b
			}
		},
		{
			id: "level",
			name: LANG.level,
			type: "range",
			width: "10%",
			getMinValue: function (a) {
				return a.minlevel
			},
			getMaxValue: function (a) {
				return a.maxlevel
			},
			compute: function (a, b) {
				if (a.minlevel > 0 && a.maxlevel > 0) {
					if (a.minlevel != a.maxlevel) {
						return a.minlevel + LANG.hyphen + a.maxlevel
					} else {
						return a.minlevel
					}
				}
			},
			sortFunc: function (d, c, e) {
				if (e > 0) {
					return strcmp(d.minlevel, c.minlevel) || strcmp(d.maxlevel, c.maxlevel)
				} else {
					return strcmp(d.maxlevel, c.maxlevel) || strcmp(d.minlevel, c.minlevel)
				}
			}
		},
		{
			id: "players",
			name: LANG.players,
			type: "text",
			hidden: true,
			compute: function (a, d) {
				if (a.instance > 0) {
					var b = ce("span");
					if (a.nplayers == -2) {
						a.nplayers = "10/25"
					}
					var c = "";
					if (a.nplayers) {
						if (a.instance == 4) {
							c += sprintf(LANG.lvzone_xvx, a.nplayers, a.nplayers)
						} else {
							c += sprintf(LANG.lvzone_xman, a.nplayers)
						}
					}
					ae(b, ct(c));
					ae(d, b)
				}
			},
			getVisibleText: function (a) {
				if (a.instance > 0) {
					if (a.nplayers == -2) {
						a.nplayers = "10/25"
					}
					var b = "";
					if (a.nplayers && ((a.instance != 2 && a.instance != 5) || a.nplayers > 5)) {
						if (a.instance == 4) {
							b += sprintf(LANG.lvzone_xvx, a.nplayers, a.nplayers)
						} else {
							b += sprintf(LANG.lvzone_xman, a.nplayers)
						}
					}
					return b
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(d.nplayers, c.nplayers)
			}
		},
		{
			id: "territory",
			name: LANG.territory,
			type: "text",
			width: "13%",
			compute: function (a, c) {
				var b = ce("span");
				switch (a.territory) {
				case 0:
					b.className = "alliance-icon";
					break;
				case 1:
					b.className = "horde-icon";
					break;
				case 4:
					b.className = "ffapvp-icon";
					break
				}
				ae(b, ct(g_zone_territories[a.territory]));
				ae(c, b)
			},
			getVisibleText: function (a) {
				return g_zone_territories[a.territory]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_zone_territories[d.territory], g_zone_territories[c.territory])
			}
		},
		{
			id: "instancetype",
			name: LANG.instancetype,
			type: "text",
			compute: function (a, d) {
				if (a.instance > 0) {
					var b = ce("span");
					if ((a.instance >= 1 && a.instance <= 5) || a.instance == 7 || a.instance == 8) {
						b.className = "instance-icon" + a.instance
					}
					if (a.nplayers == -2) {
						a.nplayers = "10/25"
					}
					var c = g_zone_instancetypes[a.instance];
					if (a.heroicLevel) {
						var f = ce("span");
						f.className = "heroic-icon";
                        f.onmouseover = function (d) {Tooltip.showAtCursor(d, LANG.tooltip_heroicmodeavailable + LANG.qty.replace("$1", a.heroicLevel), 0, 0, 'q')};
                        f.onmousemove = Tooltip.cursorUpdate;
                        f.onmouseout = Tooltip.hide;
						ae(e, f)
					}
					ae(b, ct(c));
					ae(d, b)
				}
			},
			getVisibleText: function (a) {
				if (a.instance > 0) {
					var b = g_zone_instancetypes[a.instance];
					if (a.nplayers && ((a.instance != 2 && a.instance != 5) || a.nplayers > 5)) {
						if (a.instance == 4) {
							b += " " + sprintf(LANG.lvzone_xvx, a.nplayers, a.nplayers)
						} else {
							b += " " + sprintf(LANG.lvzone_xman, a.nplayers)
						}
					}
					if (a.instance == 5 || a.instance == 8) {
						b += " heroic"
					}
					return b
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_zone_instancetypes[d.instance], g_zone_instancetypes[c.instance]) || strcmp(d.instance, c.instance) || strcmp(d.nplayers, c.nplayers)
			}
		},
		{
			id: "category",
			name: LANG.category,
			type: "text",
			width: "15%",
			compute: function (c, d) {
				d.className = "small q1";
				var b = ce("a");
				b.href = "?zones=" + c.category;
				ae(b, ct(g_zone_categories[c.category]));
				ae(d, b)
			},
			getVisibleText: function (a) {
				return g_zone_categories[a.category]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_zone_categories[d.category], g_zone_categories[c.category])
			}
		}],
		getItemLink: function (a) {
			return "?zone=" + a.id
		}
	},
	holiday: {
		sort: [2, 1],
		nItemsPerPage: -1,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			span: 2,
			compute: function (c, f, e) {
				var d = ce("td");
				d.style.width = "1px";
				d.style.padding = "0";
				d.style.borderRight = "none";
				ae(d, g_holidays.createIcon(c.id, 0));
				ae(e, d);
				f.style.borderLeft = "none";
				var b = ce("a");
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(c);
				ae(b, ct(c.name));
				ae(f, b)
			},
			getVisibleText: function (a) {
				return a.name
			}
		},
		{
			id: "date",
			name: LANG.date,
			type: "text",
			width: "16%",
			allText: true,
			compute: function (b, e, g) {
				if (b.startDate && b.endDate) {
                    var h = Listview.funcBox.getEventNextDates(b.startDate, b.endDate, b.rec || 0);
                    if (h[0] && h[1]) {
                        var f = g_formatDateSimple(e[0]),
						i = g_formatDateSimple(e[1]),
						c = ce("span");
                        if (b.today)
                            c.style.color = "#00bb00";
                        if (f != i) {
                            st(c, f + LANG.hyphen + i)
                        } else {
                            st(c, f)
                        }
                        ae(e, c)
						if (h[0] <= g_serverTime && h[1] >= g_serverTime) {
							d.className = "checked";
							c.className = "q2 tip";
							g_addTooltip(c, LANG.tooltip_activeholiday, "q")
                        }
                    }
                }
			},
			getVisibleText: function (b) {
				if (b.startDate && b.endDate) {
					var c = Listview.funcBox.getEventNextDates(b.startDate, b.endDate, b.rec || 0);
					if (c[0] && c[1]) {
						var d = g_formatDateSimple(c[0]),
						a = g_formatDateSimple(c[1]);
						if (d != a) {
							return d + LANG.hyphen + a
						} else {
							return d
						}
					}
				}
				return""
			},
			sortFunc: function (e, c, g) {
				if (e.startDate && c.startDate) {
					var d = Listview.funcBox.getEventNextDates(e.startDate, e.endDate, e.rec || 0);
					var f = Listview.funcBox.getEventNextDates(c.startDate, c.endDate, c.rec || 0);
					if (d[0] && f[0]) {
						return d[0] - f[0]
					}
				} else {
					return e.startDate ? -1 : c.startDate ? 1 : 0;
				}
			}
		},
		{
			id: "category",
			name: LANG.category,
			type: "text",
			width: "16%",
			compute: function (d, e) {
				e.className = "small q1";
				var b = ce("a"), c = "?events=" + d.category;
				b.href = c;
				ae(b, ct(g_holiday_categories[d.category]));
				ae(e, b)
			},
			getVisibleText: function (a) {
				return g_holiday_categories[a.category]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_holiday_categories[d.category], g_holiday_categories[c.category])
			},
			hidden: true
		}],
		getItemLink: function (a) {
			return "?event=" + a.id
		}
	},
	comment: {
		sort: [1],
		mode: 2,
		nItemsPerPage: 40,
		poundable: 2,
		columns: [{
			value: "number"
		},
		{
			value: "id"
		},
		{
			value: "rating"
		}],
		compute: function (J, ac, ab) {
			var ag, I = new Date(J.date),
			Y = (g_serverTime - I) / 1000,
			h = (g_user.roles & U_GROUP_COMMENTS_MODERATOR) != 0,
			ad = J.rating < 0 || J.purged || J.deleted || (J.__minPatch && g_getPatchVersion.T[J.__minPatch] > I),
			U = h || (J.user.toLowerCase() == g_user.name.toLowerCase() && !g_user.commentban),
			L = U && J.deleted == 0,
			d = U && J.replyTo != J.id,
			af = true,
			W = J.purged == 0 && J.deleted == 0 && g_user.id && J.user.toLowerCase() != g_user.name.toLowerCase() && in_array(J.raters, g_user.id, function (i) {
				return i[0]
			}) == -1 && !g_user.ratingban,
			p = J.rating >= 0 && (g_user.id == 0 || W || g_user.ratingban),
			G = g_users[J.user];
            J.ratable = W;
			var aa = ac;
			var N = ce("div");
			var z = ce("div");
			var t = ce("em");
			J.divHeader = N;
			J.divBody = z;
			J.divLinks = t;
			aa.className = "comment-wrapper";
			if (J.indent) {
				aa.className += " comment-indent"
			}
			if (ad) {
				aa.className += " comment-collapsed"
			}
			ac = ce("div");
			ac.className = "comment comment" + (ab % 2);
			ae(aa, ac);
			N.className = "comment-header";
			ae(ac, N);
			var n = ce("em");
			n.className = "comment-rating";
			if (ad) {
				var D = ce("a");
				D.href = "javascript:;";
				D.onclick = Listview.funcBox.coToggleVis.bind(D, J);
				ae(D, ct(LANG.lvcomment_show));
				ae(n, D);
				ae(n, ct(" " + String.fromCharCode(160) + " "))
			}
			var A = ce("b");
			var v = ce("a");
			v.href = "javascript:;";
			ae(v, ct(LANG.lvcomment_rating));
			var E = ce("span");
			E.id = "commentrating" + J.id;
			Listview.funcBox.coDisplayRating(J, E);
			v.onclick = Listview.funcBox.coToggleRating.bind(this, J, E);
			ae(v, E);
			ae(A, v);
			ae(n, A);
			ae(n, ct(" "));
			var S = ce("span");
			var q = ce("a"),
			af = ce("a");
			if (W) {
				q.href = af.href = "javascript:;";
				q.onclick = Listview.funcBox.coRate.bind(q, J, 1);
				af.onclick = Listview.funcBox.coRate.bind(af, J, -1);
				if (h) {
					var R = ce("a");
					R.href = "javascript:;";
					R.onclick = Listview.funcBox.coRate.bind(R, J, 0);
					R.onmouseover = Listview.funcBox.coCustomRatingOver;
					R.onmousemove = Tooltip.cursorUpdate;
					R.onmouseout = Tooltip.hide;
					ae(R, ct("[~]"))
					ae(S, R);
					ae(S, ct(" "))
				}
			} else {
				if (g_user.ratingban) {
					q.href = af.href = "javascript:;"
				} else {
					q.href = af.href = "?account=signin"
				}
			}
			ae(q, ct("[+]"))
			if (!g_user.ratingban) {
				q.onmouseover = Listview.funcBox.coPlusRatingOver;
				af.onmouseover = Listview.funcBox.coMinusRatingOver;
				q.onmousemove = af.onmousemove = Tooltip.cursorUpdate;
				q.onmouseout = af.onmouseout = Tooltip.hide
			} else {
				g_addTooltip(q, LANG.tooltip_banned_rating, "q");
				g_addTooltip(af, LANG.tooltip_banned_rating, "q")
			}
			ae(af, ct("[-]"))
			ae(S, af);
			ae(S, ct(" "));
			ae(S, q);
			ae(n, S);
			if (!p) {
				S.style.display = "none"
			}
			ae(N, n);
			t.className = "comment-links";
			var c = false;
			if (U) {
				var b = ce("span");
				var Q = ce("a");
				ae(Q, ct(LANG.lvcomment_edit));
				Q.onclick = Listview.funcBox.coEdit.bind(this, J, 0, false);
				ns(Q);
				Q.href = "javascript:;";
				ae(b, Q);
				c = true;
				ae(t, b)
			}
			if (L) {
				var u = ce("span");
				var F = ce("a");
				ae(F, ct(LANG.lvcomment_delete));
				F.onclick = Listview.funcBox.coDelete.bind(this, J);
				ns(F);
				F.href = "javascript:;";
				if (c) {
                    var e = ce("span");
                    e.style.color = "white";
                    ae(e, ct("|"));
					ae(t, e)
				}
				ae(u, F);
				ae(t, u)
				c = true;
			}
			if (d) {
				var P = ce("span");
				var k = ce("a");
				ae(k, ct(LANG.lvcomment_detach));
				k.onclick = Listview.funcBox.coDetach.bind(this, J);
				ns(k);
				k.href = "javascript:;";
				if (c) {
                    var e = ce("span");
                    e.style.color = "white";
                    ae(e, ct("|"));
					ae(t, e)
				}
				ae(P, k);
				ae(t, P)
				c = true;
			}
			if (af) {
				var K = ce("span");
				var m = ce("a");
				ae(m, ct(LANG.lvcomment_report));
				m.onclick = ContactTool.show.bind(ContactTool, {
					mode: 1,
					comment: J
				});
				m.className = "report-icon";
				m.href = "javascript:;";
				g_addTooltip(m, LANG.report_tooltip, "q2");
				if (c) {
                    var e = ce("span");
                    e.style.color = "white";
                    ae(e, ct("|"));
					ae(t, e)
				}
				ae(K, m);
				ae(t, K)
				c = true;
			}
			if (!g_user.commentban) {
				var l = ce("span");
				var o = ce("a");
				ae(o, ct(LANG.lvcomment_reply));
				if (g_user.id > 0) {
					o.onclick = Listview.funcBox.coReply.bind(this, J);
					o.href = "javascript:;"
				} else {
					o.href = "?account=signin"
				}
				if (c) {
                    var e = ce("span");
                    e.style.color = "white";
                    ae(e, ct("|"));
					ae(t, e)
				}
				ae(l, o);
				ae(t, l)
				c = true;
			}
			if (ad) {
				z.style.display = "none";
				t.style.display = "none"
			}
			ae(N, t);
			var C = ce("var");
			ae(C, ct(LANG.lvcomment_by));
			aUser = ce("a");
			aUser.href = "?user=" + J.user;
			ae(aUser, ct(J.user));
			ae(C, aUser);
			ae(C, ct(" "));
			var a = ce("a");
			a.className = "q0";
			a.id = "comments:id=" + J.id;
			a.href = "#" + a.id;
			g_formatDate(a, Y, I);
			ae(C, a);
			ae(C, ct(sprintf(LANG.lvcomment_patch, g_getPatchVersion(I))));
			if (G != null && G.avatar) {
				var j = Icon.createUser(G.avatar, G.avatarmore, 0, null, ((G.roles & U_GROUP_PREMIUM) ? (G.border ? 2 : 1) : 0));
				j.style.marginRight = "3px";
				j.style.cssFloat = j.style.styleFloat = "left";
				ae(N, j);
				C.style.lineHeight = "26px"
			}
			ae(N, C);
			z.className = "text comment-body" + Listview.funcBox.coGetColor(J);
			if (J.indent) {
				z.className += " comment-body-indent"
			}
			B = (this.id == "english-comments" ? "www": "");
			z.innerHTML = Markup.toHtml(J.body, {
				mode: Markup.MODE_COMMENT,
				roles: J.roles,
				locale: B
			});
			ae(ac, z);
			var H = ce("div");
			H.className = "text comment-body";
			if (J.indent) {
				H.className += " comment-body-indent"
			}
			if (J.response) {
				H.innerHTML = Markup.toHtml("[div][/div][wowheadresponse=" + J.responseuser + " roles=" + J.responseroles + "]" + J.response + "[/wowheadresponse]", {
					allow: Markup.CLASS_STAFF,
					roles: J.responseroles,
					uid: "resp-" + J.id
				})
			}
			ae(ac, H);
			J.divResponse = H;
			if ((J.roles & U_GROUP_COMMENTS_MODERATOR) == 0 || g_user.roles & U_GROUP_COMMENTS_MODERATOR) {
				var X = ce("div");
				J.divLastEdit = X;
				X.className = "comment-lastedit";
				ae(X, ct(LANG.lvcomment_lastedit));
				var w = ce("a");
				ae(w, ct(" "));
				ae(X, w);
				ae(X, ct(" "));
				var O = ce("span");
				ae(X, O);
				ae(X, ct(" "));
				Listview.funcBox.coUpdateLastEdit(J);
				if (ad) {
					X.style.display = "none"
				}
				ae(ac, X)
			}
		},
/* no idea what the new one does exactly.. so saved this old compute
		compute: function (v, K) {
			var O, u = new Date(v.date),
			I = (g_serverTime - u) / 1000,
			d = (g_user.roles & 26) != 0,
			L = v.rating < 0 || v.purged || v.deleted || (v.__minPatch && g_getPatchVersion.T[v.__minPatch] > u),
			F = d || v.user.toLowerCase() == g_user.name.toLowerCase(),
			y = F && v.deleted == 0,
			c = F && v.replyTo != v.id,
			M = ((v.roles & 26) == 0),
			G = v.purged == 0 && v.deleted == 0 && g_user.id && v.user.toLowerCase() != g_user.name.toLowerCase() && in_array(v.raters, g_user.id, function (P) {
				return P[0]
			}) == -1,
			i = v.rating >= 0 && (g_user.id == 0 || G);
			v.ratable = G;
			K.className = "comment";
			if (v.indent) {
				K.className += " comment-indent"
			}
			var z = ce("div");
			var m = ce("div");
			var k = ce("div");
			v.divHeader = z;
			v.divBody = m;
			v.divLinks = k;
			z.className = (L ? "comment-header-bt": "comment-header");
			var g = ce("div");
			g.className = "comment-rating";
			if (L) {
				var q = ce("a");
				q.href = "javascript:;";
				q.onclick = Listview.funcBox.coToggleVis.bind(q, v);
				ae(q, ct(LANG.lvcomment_show));
				ae(g, q);
				ae(g, ct(" " + String.fromCharCode(160) + " "))
			}
			var o = ce("b");
			ae(o, ct(LANG.lvcomment_rating));
			var r = ce("span");
			ae(r, ct((v.rating > 0 ? "+": "") + v.rating));
			ae(o, r);
			ae(g, o);
			ae(g, ct(" "));
			var E = ce("span");
			var j = ce("a"),
			N = ce("a");
			if (G) {
				j.href = N.href = "javascript:;";
				j.onclick = Listview.funcBox.coRate.bind(j, v, 1);
				N.onclick = Listview.funcBox.coRate.bind(N, v, -1);
				if (d) {
					var D = ce("a");
					D.href = "javascript:;";
					D.onclick = Listview.funcBox.coRate.bind(D, v, 0);
					D.onmouseover = Listview.funcBox.coCustomRatingOver;
					D.onmousemove = Tooltip.cursorUpdate;
					D.onmouseout = Tooltip.hide;
					ae(D, ct("[~]"));
					ae(E, D);
					ae(E, ct(" "))
				}
			} else {
				j.href = N.href = "?account=signin"
			}
			ae(j, ct("[+]"));
			j.onmouseover = Listview.funcBox.coPlusRatingOver;
			N.onmouseover = Listview.funcBox.coMinusRatingOver;
			j.onmousemove = N.onmousemove = Tooltip.cursorUpdate;
			j.onmouseout = N.onmouseout = Tooltip.hide;
			ae(N, ct("[-]"));
			ae(E, N);
			ae(E, ct(" "));
			ae(E, j);
			ae(g, E);
			if (!i) {
				E.style.display = "none"
			}
			ae(z, g);
			ae(z, ct(LANG.lvcomment_by));
			var J = ce("a");
			J.href = "?user=" + v.user;
			ae(J, ct(v.user));
			ae(z, J);
			ae(z, ct(" "));
			var a = ce("a");
			a.className = "q0";
			a.id = "comments:id=" + v.id;
			a.href = "#" + a.id;
			Listview.funcBox.coFormatDate(a, I, u);
			a.style.cursor = "pointer";
			ae(z, a);
			ae(z, ct(sprintf(LANG.lvcomment_patch, g_getPatchVersion(u))));
			ae(K, z);
			m.className = "comment-body" + Listview.funcBox.coGetColor(v);
			if (v.indent) {
				m.className += " comment-body-indent"
			}
			m.innerHTML = Markup.toHtml(v.body, {
				mode: Markup.MODE_COMMENT,
				roles: v.roles
			});
			ae(K, m);
			if ((v.roles & 26) == 0 || g_user.roles & 26) {
				var H = ce("div");
				v.divLastEdit = H;
				H.className = "comment-lastedit";
				ae(H, ct(LANG.lvcomment_lastedit));
				var p = ce("a");
				ae(p, ct(" "));
				ae(H, p);
				ae(H, ct(" "));
				var C = ce("span");
				ae(H, C);
				ae(H, ct(" "));
				Listview.funcBox.coUpdateLastEdit(v);
				if (L) {
					H.style.display = "none"
				}
				ae(K, H)
			}
			k.className = "comment-links";
			if (F) {
				var b = ce("span");
				var B = ce("a");
				ae(B, ct(LANG.lvcomment_edit));
				B.onclick = Listview.funcBox.coEdit.bind(this, v, 0);
				ns(B);
				B.href = "javascript:;";
				ae(b, B);
				ae(b, ct("|"));
				ae(k, b)
			}
			if (y) {
				var l = ce("span");
				var t = ce("a");
				ae(t, ct(LANG.lvcomment_delete));
				t.onclick = Listview.funcBox.coDelete.bind(this, v);
				ns(t);
				t.href = "javascript:;";
				ae(l, t);
				ae(l, ct("|"));
				ae(k, l)
			}
			if (c) {
				var A = ce("span");
				var e = ce("a");
				ae(e, ct(LANG.lvcomment_detach));
				e.onclick = Listview.funcBox.coDetach.bind(this, v);
				ns(e);
				e.href = "javascript:;";
				ae(A, e);
				ae(A, ct("|"));
				ae(k, A)
			}
			if (M) {
				var w = ce("span");
				var f = ce("a");
				ae(f, ct(LANG.lvcomment_report));
				if (g_user.id > 0) {
					f.onclick = Listview.funcBox.coReportClick.bind(f, v, 0);
					f.href = "javascript:;"
				} else {
					f.href = "?account=signin"
				}
				ae(w, f);
				ae(w, ct("|"));
				ae(k, w)
			}
			var h = ce("a");
			ae(h, ct(LANG.lvcomment_reply));
			if (g_user.id > 0) {
				h.onclick = Listview.funcBox.coReply.bind(this, v);
				h.href = "javascript:;"
			} else {
				h.href = "?account=signin"
			}
			ae(k, h);
			if (L) {
				m.style.display = "none";
				k.style.display = "none"
			}
			ae(K, k)
		}, */
		createNote: function (b) {
			var g = ce("small");
			if (!g_user.commentban) {
				var l = ce("a");
				if (g_user.id > 0) {
					l.href = "javascript:;";
					l.onclick = co_addYourComment
				} else {
					l.href = "?account=signin"
				}
				ae(l, ct(LANG.lvcomment_add));
				ae(g, l);
				var e = ce("span");
				e.style.padding = "0 5px";
				e.style.color = "white";
				ae(e, ct("|"));
				ae(g, e);
			}
			ae(g, ct(LANG.lvcomment_sort));
			var m = ce("a");
			m.href = "javascript:;";
			ae(m, ct(LANG.lvcomment_sortdate));
			m.onclick = Listview.funcBox.coSortDate.bind(this, m);
			ae(g, m);
			ae(g, ct(LANG.comma));
			var o = ce("a");
			o.href = "javascript:;";
			ae(o, ct(LANG.lvcomment_sortrating));
			o.onclick = Listview.funcBox.coSortHighestRatedFirst.bind(this, o);
			ae(g, o);
			var h = gc("temp_comment_sort") || 1;
			if (h == "2") {
				o.onclick()
			} else {
				m.onclick()
			}
			var e = ce("span");
			e.style.padding = "0 5px";
			e.style.color = "white";
			ae(e, ct("|"));
			ae(g, e);
			var q = ce("select");
			var f = ce("option");
			f.value = 0;
			f.selected = "selected";
			ae(q, f);
			var k = {};
			for (var i = 0; i < this.data.length; ++i) {
				var h = new Date(this.data[i].date).getTime();
				k[g_getPatchVersionIndex(h)] = true
			}
			var j = [];
			for (var c in k) {
				j.push(c)
			}
			j.sort(function (p, d) {
				return d - p
			});
			for (var c = 0; c < j.length; ++c) {
				var f = ce("option");
				f.value = j[c];
				ae(f, ct(g_getPatchVersion.V[j[c]]));
				ae(q, f)
			}
			q.onchange = Listview.funcBox.coFilterByPatchVersion.bind(this, q);
			ae(g, ct(LANG.lvcomment_patchfilter));
			ae(g, q);
			ae(b, g);
		},
		onNoData: function (c) {
			var a = "<b>" + LANG.lvnodata_co1 + '</b><div class="pad2"></div>';
			if (g_user.id > 0) {
				var b = LANG.lvnodata_co2;
				b = b.replace("<a>", '<a href="javascript:;" onclick="co_addYourComment()" onmousedown="return false">');
				a += b
			} else {
				var b = LANG.lvnodata_co3;
                b = b.replace("<a>", '<a href="?account=signin">');
                b = b.replace("<a>", '<a href="?account=signup">');
				a += b
			}
			c.style.padding = "1.5em 0";
			c.innerHTML = a
		},
		onBeforeCreate: function () {
			if (location.hash && location.hash.match(/:id=([0-9]+)/) != null) {
				var a = in_array(this.data, parseInt(RegExp.$1), function (b) {
					return b.id
				});
				this.rowOffset = this.getRowOffset(a);
				return this.data[a]
			}
		},
		onAfterCreate: function (a) {
			if (a != null) {
				var b = a.__div;
				this.tabs.__st = b;
                b.firstChild.style.border = "1px solid #505050"
			}
		}
	},
	commentpreview: {
		sort: [4],
		nItemsPerPage: 75,
		columns: [{
			id: "subject",
			name: LANG.subject,
			align: "left",
			value: "subject",
			compute: function (f, e) {
				var b = ce("a");
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(f);
				ae(b, ct(f.subject));
				ae(e, b);
				if (LANG.types[f.type]) {
                    var c = ce("div");
                    c.className = "small";
                    ae(c, ct(LANG.types[f.type][0]));
                    ae(e, c)
                }
			}
		},
		{
			id: "preview",
			name: LANG.preview,
			align: "left",
			width: "50%",
			value: "preview",
			compute: function (j, i, k) {
				var g = ce("div");
				g.className = "crop";
				if (j.rating >= 10) {
					g.className += " comment-green"
				}
				ae(g, ct(Markup.removeTags(j.preview, {
					mode: Markup.MODE_ARTICLE
				})));
				ae(i, g);
				var e = j.rating != null;
				var f = j.user != null;
				if (e || f ||j.purged) {
					g = ce("div");
					g.className = "small3";
					if (f) {
						ae(g, ct(LANG.lvcomment_by));
						var b = ce("a");
						b.href = "?user=" + j.user;
						ae(b, ct(j.user));
						ae(g, b);
						if (e) {
							ae(g, ct(LANG.hyphen))
						}
					}
					if (e) {
						ae(g, ct(LANG.lvcomment_rating + (j.rating > 0 ? "+": "") + j.rating));
						var c = ce("span"),
						h = "";
						c.className = "q10";
						if (j.deleted) {
							h = LANG.lvcomment_deleted
						} else {
							if (j.purged) {
								h = LANG.lvcomment_purged
							}
						}
						ae(c, ct(h));
						ae(g, c)
                        k.__status = c;
					}
					ae(i, g)
				}
            }
		},
		{
			id: "author",
			name: LANG.author,
			value: "user",
			compute: function (d, c) {
				c.className = "q1";
				var b = ce("a");
				b.href = "?user=" + d.user;
				ae(b, ct(d.user));
				ae(c, b)
			}
		},
		{
			id: "posted",
			name: LANG.posted,
			width: "16%",
			value: "elapsed",
			compute: function (e, d) {
				var a = new Date(e.date),
				c = (g_serverTime - a) / 1000;
				var b = ce("span");
				Listview.funcBox.coFormatDate(b, c, a, 0, 1);
				ae(d, b)
			}
		}],
		getItemLink: function (a) {
			return "?" + g_types[a.type] + "=" + a.typeId + (a.id != null ? "#comments:id=" + a.id: "")
		}
	},
	screenshot: {
		sort: [],
		mode: 3,
		nItemsPerPage: 40,
		nItemsPerRow: 4,
		poundable: 2,
		columns: [],
		compute: function (k, e, l) {
			var v, p = new Date(k.date),
			f = (g_serverTime - p) / 1000;
			e.className = "screenshot-cell";
			e.vAlign = "bottom";
			var r = ce("a");
			r.href = "#screenshots:id=" + k.id;
			r.onclick = rf2;
			var w = ce("img"),
			u = Math.min(150 / k.width, 150 / k.height);
			// w.src = "http://static.wowhead.com/uploads/screenshots/thumb/" + k.id + ".jpg";
			w.src = g_staticUrl + "/uploads/screenshots/thumb/" + k.id + ".jpg";
			ae(r, w);
			ae(e, r);
			var q = ce("div");
			q.className = "screenshot-cell-user";
			var m = (k.user != null && k.user.length);
			if (m) {
				r = ce("a");
				r.href = "?user=" + k.user;
				ae(r, ct(k.user));
				ae(q, ct(LANG.lvscreenshot_from));
				ae(q, r);
				ae(q, ct(" "))
			}
			var j = ce("span");
			if (m) {
				Listview.funcBox.coFormatDate(j, f, p)
			} else {
				Listview.funcBox.coFormatDate(j, f, p, 0, 1)
			}
			ae(q, j);

			ae(q, ct(" " + LANG.dash + " "));
			var w = ce("a");
			w.href = "javascript:;";
			w.onclick = ContactTool.show.bind(ContactTool, {
				mode: 3,
				screenshot: k
			});
            w.className = "report-icon"
			g_addTooltip(w, LANG.report_tooltip, "q2");
			ae(w, ct(LANG.report));
			ae(q, w);

			ae(e, q);
			q = ce("div");
			q.style.position = "relative";
			q.style.height = "1em";
			if (g_getLocale(true) != 0 && k.caption) {
				k.caption = ""
			}
			var h = (k.caption != null && k.caption.length);
			var g = (k.subject != null && k.subject.length);
			if (h || g) {
				var t = ce("div");
				t.className = "screenshot-caption";
				if (g) {
					var c = ce("small");
					ae(c, ct(LANG.types[k.type][0] + LANG.colon));
					var b = ce("a");
					ae(b, ct(k.subject));
					b.href = "?" + g_types[k.type] + "=" + k.typeId;
					ae(c, b);
					ae(t, c);
					if (h && k.caption.length) {
						ae(c, ct(" (...)"))
					}
					ae(c, ce("br"))
				}
				if (h) {
					aE(e, "mouseover", Listview.funcBox.ssCellOver.bind(t));
					aE(e, "mouseout", Listview.funcBox.ssCellOut.bind(t));
					var o = ce("span");
					o.innerHTML = Markup.toHtml(k.caption, {
						mode: Markup.MODE_SIGNATURE
					});
					ae(t, o)
				}
				ae(q, t)
			}
			aE(e, "click", Listview.funcBox.ssCellClick.bind(this, l));
			ae(e, q)
		},
		createNote: function (d) {
			if (typeof g_pageInfo == "object" && g_pageInfo.type > 0) {
				var c = ce("small");
				var b = ce("a");
				if (g_user.id > 0) {
					b.href = "javascript:;";
					b.onclick = ss_submitAScreenshot
				} else {
					b.href = "?account=signin"
				}
				ae(b, ct(LANG.lvscreenshot_submit));
				ae(c, b);
				ae(d, c)
			}
		},
		onNoData: function (c) {
			if (typeof g_pageInfo == "object" && g_pageInfo.type > 0) {
				var a = "<b>" + LANG.lvnodata_ss1 + '</b><div class="pad2"></div>';
				if (g_user.id > 0) {
					var b = LANG.lvnodata_ss2;
					b = b.replace("<a>", '<a href="javascript:;" onclick="ss_submitAScreenshot()" onmousedown="return false">');
					a += b
				} else {
					var b = LANG.lvnodata_ss3;
					b = b.replace("<a>", '<a href="?account=signin">');
					b = b.replace("<a>", '<a href="?account=signup">');
					a += b
				}
				c.style.padding = "1.5em 0";
				c.innerHTML = a
			} else {
				return -1
			}
		},
		onBeforeCreate: function () {
			if (location.hash && location.hash.match(/:id=([0-9]+)/) != null) {
				var a = in_array(this.data, parseInt(RegExp.$1), function (b) {
					return b.id
				});
				this.rowOffset = this.getRowOffset(a);
				return a
			}
		},
		onAfterCreate: function (a) {
			if (a != null) {
				setTimeout((function () {
					ScreenshotViewer.show({
						screenshots: this.data,
						pos: a
					})
				}).bind(this), 1)
			}
		}
	},
	video: {
		sort: [],
		mode: 3,
		nItemsPerPage: 40,
		nItemsPerRow: 4,
		poundable: 2,
		columns: [],
		compute: function (e, f, j) {
			var q, k = new Date(e.date),
			r = (g_serverTime - k) / 1000;
			f.className = "screenshot-cell";
			f.vAlign = "bottom";
			var p = ce("a");
			p.href = "#videos:id=" + e.id;
			p.onclick = rf2;
			var h = ce("img");
			h.src = sprintf(vi_thumbnails[e.videoType], e.videoId);
			ae(p, h);
			ae(f, p);
			var l = ce("div");
			l.className = "screenshot-cell-user";
			var t = (e.user != null && e.user.length);
			if (t) {
				p = ce("a");
				p.href = "?user=" + e.user;
				ae(p, ct(e.user));
				ae(l, ct(LANG.lvvideo_from));
				ae(l, p);
				ae(l, ct(" "))
			}
			var u = ce("span");
			if (t) {
				Listview.funcBox.coFormatDate(u, r, k)
			} else {
				Listview.funcBox.coFormatDate(u, r, k, 0, 1)
			}
			ae(l, u);
			ae(f, l);
			l = ce("div");
			l.style.position = "relative";
			l.style.height = "1em";
			if (g_locale.id != 0 && e.caption) {
				e.caption = ""
			}
			var c = (e.caption != null && e.caption.length);
			var g = (e.subject != null && e.subject.length);
			if (c || g) {
				var b = ce("div");
				b.className = "screenshot-caption";
				if (g) {
					var o = ce("small");
					ae(o, ct(LANG.types[e.type][0] + LANG.colon));
					var n = ce("a");
					ae(n, ct(e.subject));
					n.href = g_getCommentDomain(e.domain) + "/" + g_types[e.type] + "=" + e.typeId;
					ae(o, n);
					ae(b, o);
					if (c && e.caption.length) {
						ae(o, ct(" (...)"))
					}
					ae(o, ce("br"))
				}
				if (c) {
					aE(f, "mouseover", Listview.funcBox.ssCellOver.bind(b));
					aE(f, "mouseout", Listview.funcBox.ssCellOut.bind(b));
					var m = ce("span");
					m.innerHTML = Markup.toHtml(e.caption, {
						mode: Markup.MODE_SIGNATURE
					});
					ae(b, m)
				}
				ae(l, b)
			}
			aE(f, "click", Listview.funcBox.viCellClick.bind(this, j));
			ae(f, l)
		},
		createNote: function (d) {
			if (g_user && g_user.roles & (U_GROUP_ADMIN | U_GROUP_BUREAU | U_GROUP_VIDEO)) {
				if (typeof g_pageInfo == "object" && g_pageInfo.type > 0) {
					var c = ce("small");
					var b = ce("a");
					if (g_user.id > 0) {
						b.href = "javascript:;";
						b.onclick = vi_submitAVideo
					} else {
						b.href = "?account=signin"
					}
					ae(b, ct(LANG.lvvideo_suggest));
					ae(c, b);
					ae(d, c)
				}
			}
		},
		onNoData: function (c) {
			if (typeof g_pageInfo == "object" && g_pageInfo.type > 0) {
				var a = "<b>" + LANG.lvnodata_vi1 + '</b><div class="pad2"></div>';
				if (g_user.id > 0) {
					var b = LANG.lvnodata_vi2;
					b = b.replace("<a>", '<a href="javascript:;" onclick="vi_submitAVideo()" onmousedown="return false">');
					a += b
				} else {
					var b = LANG.lvnodata_vi3;
					b = b.replace("<a>", '<a href="?account=signin">');
					b = b.replace("<a>", '<a href="?account=signup">');
					a += b
				}
				c.style.padding = "1.5em 0";
				c.innerHTML = a
			} else {
				return - 1
			}
		},
		onBeforeCreate: function () {
			if (location.hash && location.hash.match(/:id=([0-9]+)/) != null) {
				var a = in_array(this.data, parseInt(RegExp.$1), function (b) {
					return b.id
				});
				this.rowOffset = this.getRowOffset(a);
				return a
			}
		},
		onAfterCreate: function (a) {
			if (a != null) {
				setTimeout((function () {
					VideoViewer.show({
						videos: this.data,
						pos: a,
						displayAd: true
					})
				}).bind(this), 1)
			}
		}
	},
	pet: {
		sort: [1],
		nItemsPerPage: -1,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			span: 2,
			compute: function (b, k, g) {
				var e = ce("td");
				e.style.width = "1px";
				e.style.padding = "0";
				e.style.borderRight = "none";
				ae(e, Icon.create(b.icon, 0));
				ae(g, e);
				k.style.borderLeft = "none";
				var j = ce("div");
				var c = ce("a");
				c.style.fontFamily = "Verdana, sans-serif";
				c.href = this.template.getItemLink(b);
				ae(c, ct(b.name));
				if (b.expansion) {
					var f = ce("span");
					f.className = (b.expansion == 1 ? "bc-icon": "wotlk-icon");
					ae(f, c);
					ae(j, f)
				} else {
					ae(j, c)
				}
				if (b.exotic) {
					j.style.position = "relative";
					var h = ce("div");
					h.className = "small q1";
					h.style.fontStyle = "italic";
					h.style.position = "absolute";
					h.style.right = "3px";
					h.style.bottom = "0px";
					var c = ce("a");
					c.href = "?spell=53270";
					ae(c, ct(LANG.lvpet_exotic));
					ae(h, c);
					ae(j, h)
				}
				ae(k, j)
			},
			getVisibleText: function (a) {
				var b = a.name + Listview.funcBox.getExpansionText(a);
				if (a.exotic) {
					b += " " + LANG.lvpet_exotic
				}
				return b
			}
		},
		{
			id: "level",
			name: LANG.level,
			type: "range",
			getMinValue: function (a) {
				return a.minlevel
			},
			getMaxValue: function (a) {
				return a.maxlevel
			},
			compute: function (a, b) {
				if (a.minlevel > 0 && a.maxlevel > 0) {
					if (a.minlevel != a.maxlevel) {
						return a.minlevel + LANG.hyphen + a.maxlevel
					} else {
						return a.minlevel
					}
				} else {
					return - 1
				}
			},
			sortFunc: function (d, c, e) {
				if (e > 0) {
					return strcmp(d.minlevel, c.minlevel) || strcmp(d.maxlevel, c.maxlevel)
				} else {
					return strcmp(d.maxlevel, c.maxlevel) || strcmp(d.minlevel, c.minlevel)
				}
			}
		},
		{
			id: "abilities",
			name: LANG.abilities,
			type: "text",
			getValue: function (b) {
				if (!b.spells) {
					return ""
				}
				if (b.spells.length > 0) {
					var d = "";
					for (var c = 0, a = b.spells.length; c < a; ++c) {
						if (b.spells[c]) {
							d += g_spells[b.spells[c]]["name_" + Locale.getName()]
						}
					}
					return d
				}
			},
			compute: function (a, b) {
				if (!a.spells) {
					return ""
				}
				if (a.spells.length > 0) {
					b.style.padding = "0";
					Listview.funcBox.createCenteredIcons(a.spells, b, "", 1)
				}
			},
			sortFunc: function (d, c) {
				if (!d.spells || !c.spells) {
					return 0
				}
				return strcmp(d.spellCount, c.spellCount) || strcmp(d.spells, c.spells)
			},
			hidden: true
		},
		{
			id: "diet",
			name: LANG.diet,
			type: "text",
			compute: function (a, e) {
				if (e) {
					e.className = "small"
				}
				var b = 0,
				c = "";
				for (var d in g_pet_foods) {
					if (a.diet & d) {
						if (b++>0) {
							c += LANG.comma
						}
						c += g_pet_foods[d]
					}
				}
				return c
			},
			sortFunc: function (d, c) {
				return strcmp(c.foodCount, d.foodCount) || Listview.funcBox.assocArrCmp(d.diet, c.diet, g_pet_foods)
			}
		},
		{
			id: "type",
			name: LANG.type,
			type: "text",
			compute: function (b, d) {
				if (b.type != null) {
					d.className = "small q1";
					var c = ce("a");
					c.href = "?pets=" + b.type;
					ae(c, ct(g_pet_types[b.type]));
					ae(d, c)
				}
			},
			getVisibleText: function (a) {
				if (a.type != null) {
					return g_pet_types[a.type]
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_pet_types[d.type], g_pet_types[c.type])
			}
		}],
		getItemLink: function (a) {
			return "?pet=" + a.id
		},
		getStatPct: function (b) {
			var a = ce("span");
			if (!isNaN(b) && b > 0) {
				a.className = "q2";
				ae(a, ct("+" + b + "%"))
			} else {
				if (!isNaN(b) && b < 0) {
					a.className = "q10";
					ae(a, ct(b + "%"))
				}
			}
			return a
		}
	},
	achievement: {
		sort: [1, 2],
		nItemsPerPage: 100,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			span: 2,
			compute: function (c, j, g) {
				var b = null;
				if (c.who && c.completed) {
					b = "who=" + c.who + "&when=" + c.completed.getTime()
				}
				var f = ce("td");
				f.style.width = "1px";
				f.style.padding = "0";
				f.style.borderRight = "none";
				ae(f, g_achievements.createIcon(c.id, 1));
				Icon.getLink(f.firstChild).href = this.template.getItemLink(c);
				Icon.getLink(f.firstChild).rel = b;
				ae(g, f);
				j.style.borderLeft = "none";
				var e = ce("a");
				e.style.fontFamily = "Verdana, sans-serif";
				e.href = this.template.getItemLink(c);
				e.rel = b;
				ae(e, ct(c.name));
				ae(j, e);
				if (c.description != null) {
					var h = ce("div");
					h.className = "small";
					ae(h, ct(c.description));
					ae(j, h)
				}
			},
			getVisibleText: function (a) {
				var b = a.name;
				if (a.description) {
					b += " " + a.description
				}
				return b
			}
		},
		{
			id: "location",
			name: LANG.location,
			type: "text",
			width: "15%",
			compute: function (b, d) {
				if (b.zone) {
					var c = ce("a");
					c.className = "q1";
					c.href = "?zone=" + b.zone;
					ae(c, ct(g_zones[b.zone]));
					ae(d, c)
				}
			},
			getVisibleText: function (a) {
				return Listview.funcBox.arrayText(a.zone, g_zones)
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_zones[d.zone], g_zones[c.zone])
			},
            hidden: true
		},
        {
			id: "side",
			name: LANG.side,
			type: "text",
			compute: function (a, c) {
				if (a.side && a.side != 3) {
					var b = ce("span");
					b.className = (a.side == 1 ? "alliance-icon": "horde-icon");
					b.onmouseover = function (d) {
						Tooltip.showAtCursor(d, g_sides[a.side], 0, 0, "q")
					};
					b.onmousemove = Tooltip.cursorUpdate;
					b.onmouseout = Tooltip.hide;
					ae(c, b)
				}
			},
			getVisibleText: function (a) {
				if (a.side) {
					return g_sides[a.side]
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_sides[d.side], g_sides[c.side])
			}
		},
		{
			id: "points",
			name: LANG.points,
			type: "number",
			width: "10%",
			value: "points",
			compute: function (a, b) {
				if (a.points) {
					Listview.funcBox.appendMoney(b, 0, null, 0, 0, 0, a.points)
				}
			}
		},
		{
			id: "rewards",
			name: LANG.rewards,
			type: "text",
			width: "20%",
			compute: function (h, d) {
				if (h.rewards) {
					var c = [];
					var b = []; // spellrewards not present in 3.x
					var f = [];
					for (var e = 0; e < h.rewards.length; e++) {
						if (h.rewards[e][0] == 11) {
							f.push(h.rewards[e][1])
						} else {
							if (h.rewards[e][0] == 3) {
								c.push(h.rewards[e][1])
							} else {
								if (h.rewards[e][0] == 6) {
									b.push(h.rewards[e][1])
								}
							}
						}
					}
					if (c.length > 0) {
						for (var e = 0; e < c.length; e++) {
							if (!g_items[c[e]]) {
								return
							}
							var m = g_items[c[e]];
							var k = ce("a");
							k.href = "?item=" + c[e];
							k.className = "q" + m.quality + " icontiny tinyspecial";
							k.style.backgroundImage = "url(" + g_staticUrl + "/images/icons/tiny/" + m.icon.toLowerCase() + ".gif)";
							ae(k, ct(m["name_" + g_locale.name]));
							var l = ce("span");
							ae(l, k);
							ae(d, l);
							ae(d, ce("br"))
						}
					}
					if (b.length > 0) {
						for (var e = 0; e < b.length; e++) {
							if (!g_spells[b[e]]) {
								return
							}
							var m = g_spells[b[e]];
							var k = ce("a");
							k.href = "?spell=" + b[e];
							k.className = "q8 icontiny tinyspecial";
							k.style.backgroundImage = "url(" + g_staticUrl + "/images/icons/tiny/" + m.icon.toLowerCase() + ".gif)";
							ae(k, ct(m["name_" + g_locale.name]));
							var l = ce("span");
							ae(l, k);
							ae(d, l);
							ae(d, ce("br"))
						}
					}
					if (f.length > 0) {
						for (var e = 0; e < f.length; e++) {
							if (!g_titles[f[e]]) {
								return
							}
							var g = g_titles[f[e]]["name_" + g_locale.name];
							g = g.replace("%s", '<span class="q0">&lt;' + LANG.name + "&gt;</span>");
							var l = ce("a");
							l.className = "q1";
							l.href = "?title=" + f[e];
							l.innerHTML = g;
							ae(d, l);
							ae(d, ce("br"))
						}
					}
				} else {
					if (h.reward) {
						var l = ce("span");
						l.className = "q1";
						ae(l, ct(h.reward));
						ae(d, l)
					}
				}
			},
			getVisibleText: function (b) {
				var d = "";
				if (b.rewards) {
					for (var c = 0; c < b.rewards.length; c++) {
						if (b.rewards[c][0] == 11) {
							d += " " + g_titles[b.rewards[c][1]]["name_" + g_locale.name].replace("%s", "<" + LANG.name + ">")
						} else {
							if (b.rewards[c][0] == 3) {
								d += " " + g_items[b.rewards[c][1]]["name_" + g_locale.name]
							} else {
								if (b.rewards[c][0] == 6) {
									d += " " + g_spells[b.rewards[c][1]]["name_" + g_locale.name]
								}
							}
						}
					}
				} else {
					if (b.reward) {
						d += " " + b.reward
					}
				}
				return d
			},
			sortFunc: function (d, c, e) {
				var f = this.getVisibleText(d);
				var g = this.getVisibleText(c);
				if (f != "" && g == "") {
					return -1
				}
				if (g != "" && f == "") {
					return 1
				}
				return strcmp(f, g)
			}
        },
		{
			id: "category",
			name: LANG.category,
			type: "text",
			width: "15%",
			compute: function (b, d) {
				d.className = "small";
				f = "?achievements=";
				if (b.category != -1 && b.parentcat != -1) {
                    var c = ce("a");
					c.className = "q0";
                    c.href = "?achievements=" + b.parentcat;
					ae(c, ct(g_achievement_categories[b.parentcat]));
					ae(d, c);
					ae(d, ce("br"));
					f = c.href + "."
				}
				var e = ce("a");
				e.className = "q1";
				e.href = f + b.category;
				ae(e, ct(g_achievement_categories[b.category]));
				ae(d, e)
			},
			getVisibleText: function (a) {
				return g_achievement_categories[a.category]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_achievement_categories[d.category], g_achievement_categories[c.category])
			},
			hidden: true
		}],
		getItemLink: function (a) {
			return "?achievement=" + a.id
		}
	},
	title: {
		sort: [1],
		nItemsPerPage: -1,
		searchable: 1,
		filtrable: 1,
		clickable: 0,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			value: "name",
			compute: function (e, g, d) {
				var c = ce("span"),
				f = ce("span"),
				b = ct(str_replace(e.name, "%s", ""));
				g.style.fontFamily = "Verdana, sans-serif";
				nw(g)
                ae(f, ct("<" + LANG.name + ">"));
				f.className = "q0";
				if (e.name.indexOf("%s") > 0) {
					ae(c, b);
					ae(c, f)
				} else {
					if (e.name.indexOf("%s") == 0) {
						ae(c, f);
						ae(c, b)
					}
				}
				if (e.expansion) {
					var a = ce("span");
					a.className = (e.expansion == 1 ? "bc-icon": "wotlk-icon");
					ae(a, c);
					ae(g, a)
				} else {
					ae(g, c)
				}
			},
			sortFunc: function (d, c, e) {
				var f = trim(d.name.replace("%s", "").replace(/^[\s,]*(,|the |of the |of )/i, ""));
				bName = trim(c.name.replace("%s", "").replace(/^[\s,]*(,|the |of the |of )/i, ""));
				return strcmp(f, bName)
			},
			getVisibleText: function (a) {
				var b = a.name;
				if (a.expansion == 1) {
					b += " bc"
				} else {
					if (a.expansion == 2) {
						b += "wotlk wrath"
					}
				}
				return b
			}
		},
		{
			id: "gender",
			name: LANG.gender,
			type: "text",
			value: "gender",
			compute: function (c, d) {
				if (c.gender && c.gender != 3) {
					var a = g_file_genders[c.gender - 1];
					var b = ce("span");
					b.className = a + "-icon";
					b.onmouseover = function (f) {
						Tooltip.showAtCursor(f, LANG[a], 0, 0, "q")
					};
					b.onmousemove = Tooltip.cursorUpdate;
					b.onmouseout = Tooltip.hide;
					ae(d, b)
				}
			},
			getVisibleText: function (a) {
				if (a.gender && a.gender != 3) {
					return LANG[g_file_genders[a.gender - 1]]
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(d.gender, c.gender)
			}
		},
		{
			id: "side",
			name: LANG.side,
			type: "text",
			compute: function (a, c) {
				if (a.side && a.side != 3) {
					var b = ce("span");
					b.className = (a.side == 1 ? "alliance-icon": "horde-icon");
					b.onmouseover = function (d) {
						Tooltip.showAtCursor(d, g_sides[a.side], 0, 0, "q")
					};
					b.onmousemove = Tooltip.cursorUpdate;
					b.onmouseout = Tooltip.hide;
					ae(c, b)
				}
			},
			getVisibleText: function (a) {
				if (a.side) {
					return g_sides[a.side]
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_sides[d.side], g_sides[c.side])
			}
		},
		{
			id: "source",
			name: LANG.source,
			type: "text",
			compute: function (j, d) {
				if (j.source) {
					nw(d);
					d.className = "small";
					d.style.lineHeight = "18px";
					var b = 0;
					for (var k in j.source) {
						j.source[k].sort(function (l, i) {
							return i.s - l.s
						});
						for (var e = 0, f = j.source[k].length; e < f; ++e) {
							var c = j.source[k][e];
							var g = 0;
							if (j.faction && typeof c != "string" && c.s !== undefined && c.s != -1 && c.s != 2 - j.faction) {
								continue
							}
							if (b++ > 0) {
								ae(d, ce("br"))
							}
							if (typeof c == "string") {
								ae(d, ct(c))
							} else {
								if (c.t) {
									g = c.t;
									var h = ce("a");
                                    o.style.fontFamily = "Verdana, sans-serif";
									h.href = "?" + g_types[c.t] + "=" + c.ti;
									h.className = "q1";
									if (c.s == 1) {
										h.className += " alliance-icon"
									}
									if (c.s == 0) {
										h.className += " horde-icon"
									}
									if (c.t == 5) {
										h.className += " icontiny";
										h.style.backgroundImage = "url(" + g_staticUrl + "/images/wow/icons/tiny/quest_start.gif)"
									}
									ae(h, ct(c.n));
									ae(d, h)
								}
							}
						}
					}
				}
			},
			getVisibleText: function (l) {
				var h = {
					achievements: g_achievements,
					quests: g_quests
				},
				m = "",
				d = 0;
				for (var f in h) {
					var g = h[f],
					a = l[f];
					if (!g || !a) {
						continue
					}
					for (var e = 0, c = a.length; e < c; ++e) {
						if (g[a[e]]) {
							var b = (f == "achievements" ? "name": "name_" + g_locale.name);
							if (d++>0) {
								m += " "
							}
							m += g[a[e]][b]
						}
					}
				}
				return m
			},
			sortFunc: function (d, c, e) {
				return strcmp(this.getVisibleText(d), this.getVisibleText(c))
			}
		},
		{
			id: "category",
			name: LANG.category,
			type: "text",
			width: "15%",
			compute: function (c, d) {
				nw(d);
				d.className = "small q1";
				var b = ce("a");
				b.href = "?titles=" + c.category;
				ae(b, ct(g_title_categories[c.category]));
				ae(d, b)
			},
			getVisibleText: function (a) {
				return g_title_categories[a.category]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_title_categories[d.category], g_title_categories[c.category])
			},
			hidden: true
		}],
		getItemLink: function (a) {
			return "?title=" + a.id
		}
	},
	profile: {
		sort: [],
		nItemsPerPage: 50,
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			value: "name",
			type: "text",
			align: "left",
			span: 2,
			compute: function (f, c, h) {
				if (f.level) {
					var e = ce("td");
					e.style.width = "1px";
					e.style.padding = "0";
					e.style.borderRight = "none";
					ae(e, Icon.create(f.icon ? f.icon: "chr_" + g_file_races[f.race] + "_" + g_file_genders[f.gender] + "_" + g_file_classes[f.classs] + "0" + (f.level > 59 ? (Math.floor((f.level - 60) / 10) + 2) : 1), 1, null, this.template.getItemLink(f)));
					ae(h, e);
					c.style.borderLeft = "none"
				} else {
					c.colSpan = 2
				}
				var b = ce("div");
				b.style.position = "relative";
				var k = ce("a");
				k.style.fontFamily = "Verdana, sans-serif";
				k.href = this.template.getItemLink(f);
				if (f.pinned) {
					k.className = "star-icon-right"
				}
				ae(k, ct(f.name));
				ae(b, k);
				var g = ce("div");
				g.className = "small";
				g.style.marginRight = "20px";
				if (f.guild) {
					var k = ce("a");
					k.className = "q1";
					k.href = "?profiles=" + f.region + "." + f.realm + "&filter=cr=9;crs=0;crv=" + str_replace(urlencode(f.guild), " ", "+") + "&roster=1";
					ae(k, ct(f.guild));
					ae(g, ct("<"));
					ae(g, k);
					ae(g, ct(">"))
				} else {
					if (f.description) {
						ae(g, ct(f.description))
					}
				}
				var l = ce("span"),
				j = "";
				l.className = "q10";
				if (f.deleted) {
					j = LANG.lvcomment_deleted
				}
				ae(l, ct(j));
				ae(g, l);
				ae(b, g);
				var g = ce("div");
				g.className = "small";
				g.style.fontStyle = "italic";
				g.style.position = "absolute";
				g.style.right = "3px";
				g.style.bottom = "0px";
				if (f.published === 0) {
					ae(g, ct(LANG.privateprofile))
				}
				ae(b, g);
				ae(c, b)
			},
			getVisibleText: function (a) {
				var b = a.name;
				if (a.guild) {
					b += " " + a.guild
				}
				return b
			}
		},
		{
			id: "faction",
			name: LANG.faction,
			type: "text",
			compute: function (a, f) {
				if (!a.size && a.members === undefined && !a.level) {
					return
				}
				var e = ce("div"),
				c = ce("div"),
				b;
				b = Icon.create("faction_" + g_file_factions[a.faction + 1], 0);
				b.onmouseover = function (d) {
					Tooltip.showAtCursor(d, g_sides[a.faction + 1], 0, 0, "q")
				};
				b.onmousemove = Tooltip.cursorUpdate;
				b.onmouseout = Tooltip.hide;
				b.style.cssFloat = b.style.syleFloat = "left";
				e.style.margin = "0 auto";
				e.style.textAlign = "left";
				e.style.width = "26px";
				c.className = "clear";
				ae(e, b);
				ae(f, e);
				ae(f, c)
			},
			getVisibleText: function (a) {
				return g_sides[a.faction + 1]
			},
			sortFunc: function (d, c, e) {
				return strcmp(this.getVisibleText(d), this.getVisibleText(c))
			}
		},
		{
			id: "members",
			name: LANG.members,
			value: "members",
			hidden: 1
		},
		{
			id: "size",
			name: "Size",
			value: "size",
			hidden: 1
		},
		{
			id: "rank",
			name: "Rank",
			value: "rank",
			hidden: 1
		},
		{
			id: "race",
			name: LANG.race,
			type: "text",
			compute: function (a, f) {
				if (a.race) {
					var e = ce("div"),
					c = ce("div"),
					b;
					b = Icon.create("race_" + g_file_races[a.race] + "_" + g_file_genders[a.gender], 0, null, "?race=" + a.race);
					b.onmouseover = function (d) {
						Tooltip.showAtCursor(d, g_chr_races[a.race], 0, 0, "q")
					};
					b.onmousemove = Tooltip.cursorUpdate;
					b.onmouseout = Tooltip.hide;
					b.style.cssFloat = b.style.syleFloat = "left";
					e.style.margin = "0 auto";
					e.style.textAlign = "left";
					e.style.width = "26px";
					c.className = "clear";
					ae(e, b);
					ae(f, e);
					ae(f, c)
				}
			},
			getVisibleText: function (a) {
				return g_file_genders[a.gender] + " " + g_chr_races[a.race]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_chr_races[d.race], g_chr_races[c.race])
			},
			hidden: 1
		},
		{
			id: "classs",
			name: LANG.classs,
			type: "text",
			compute: function (a, f) {
				if (a.classs) {
					var e = ce("div"),
					c = ce("div"),
					b;
					b = Icon.create("class_" + g_file_classes[a.classs], 0, null, "?class=" + a.classs);
					b.onmouseover = function (d) {
						Tooltip.showAtCursor(d, g_chr_classes[a.classs], 0, 0, "q")
					};
					b.onmousemove = Tooltip.cursorUpdate;
					b.onmouseout = Tooltip.hide;
					b.style.cssFloat = b.style.syleFloat = "left";
					e.style.margin = "0 auto";
					e.style.textAlign = "left";
					e.style.width = "26px";
					c.className = "clear";
					ae(e, b);
					ae(f, e);
					ae(f, c)
				} else {
					return -1
				}
			},
			getVisibleText: function (a) {
				if (a.classs) {
					return g_chr_classes[a.classs]
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(this.getVisibleText(d), this.getVisibleText(c))
			},
			hidden: 1
		},
		{
			id: "level",
			name: LANG.level,
			value: "level",
			hidden: 1
		},
		{
			id: "talents",
			name: LANG.talents,
			type: "text",
			compute: function (e, j) {
				if (!e.level) {
					return
				}
				var i = [e.talenttree1, e.talenttree2, e.talenttree3],
				f = pr_getSpecFromTalents(e.classs, i),
				c,
				g,
				b = ce("a");
				var h = ce("div");
				h.style.width = "82px";
				h.style.height = "23px";
				h.style.margin = "0 auto";
				h.style.lineHeight = "23px";
				h.style.backgroundImage = "url(" + f.icon + ")";
				h.style.backgroundRepeat = "no-repeat";
				h.style.backgroundPosition = "left";
				var b = ce("a");
				b.className = "small q1";
				b.style.padding = "7px 0 7px 28px";
				b.style.fontWeight = "bold";
				b.rel = "np";
				b.href = this.template.getItemLink(e) + "#talents";
				b.onmouseover = function (a) {
					Tooltip.showAtCursor(a, f.name, 0, 0, "q")
				};
				b.onmousemove = Tooltip.cursorUpdate;
				b.onmouseout = Tooltip.hide;
				ae(b, ct(e.talenttree1 + " / " + e.talenttree2 + " / " + e.talenttree3));
				ae(h, b);
				ae(j, h)
			},
			getVisibleText: function (a) {
				if (a.talenttree1 || a.talenttree2 || a.talenttree3) {
					if (a.talentspec > 0) {
						return g_chr_specs[a.classs][a.talentspec - 1]
					} else {
						return g_chr_specs[0]
					}
				} else {
					return g_chr_specs["-1"]
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(this.getVisibleText(d), this.getVisibleText(c))
			},
			hidden: 1
		},
		{
			id: "gearscore",
			name: LANG.gearscore,
			tooltip: LANG.gearscore_real,
			value: "gearscore",
			compute: function (a, c) {
				var b = (a.level ? a.level: (a.members !== undefined ? 80 : 0));
				if (isNaN(a.gearscore) || !b) {
					return
				}
				c.className = "q" + pr_getGearScoreQuality(b, a.gearscore, (in_array([2, 6, 7, 11], a.classs) != -1));
				return (a.gearscore ? number_format(a.gearscore) : 0)
			},
			hidden: 1
		},
		{
			id: "achievementpoints",
			name: LANG.points,
			value: "achievementpoints",
			tooltip: LANG.tooltip_achievementpoints,
			compute: function (a, b) {
				if (a.achievementpoints) {
					Listview.funcBox.appendMoney(b, 0, null, 0, 0, 0, a.achievementpoints)
				}
			},
			hidden: 1
		},
		{
			id: "wins",
			name: LANG.wins,
			value: "wins",
			hidden: 1
		},
		{
			id: "losses",
			name: LANG.losses,
			compute: function (a, b) {
				return a.games - a.wins
			},
			hidden: 1
		},
		{
			id: "guildrank",
			name: LANG.guildrank,
			value: "guildrank",
			compute: function (c, d) {
				if (c.guildrank > 0) {
					return sprintf(LANG.rankno, c.guildrank)
				} else {
					if (c.guildrank == 0) {
						var a = ce("b");
						ae(a, ct(LANG.guildleader));
						ae(d, a)
					}
				}
			},
			getVisibleText: function (a) {
				if (a.guildrank > 0) {
					return sprintf(LANG.rankno, a.guildrank)
				} else {
					if (a.guildrank == 0) {
						return LANG.guildleader
					}
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp((d.guildrank >= 0 ? d.guildrank: 11), (c.guildrank >= 0 ? c.guildrank: 11))
			},
			hidden: 1
		},
		{
			id: "rating",
			name: LANG.rating,
			value: "rating",
			compute: function (a, b) {
				if (a.roster) {
					return a.arenateam[a.roster].rating
				}
				return a.rating
			},
			sortFunc: function (d, c, e) {
				if (d.roster && c.roster) {
					return strcmp(d.arenateam[d.roster].rating, c.arenateam[c.roster].rating)
				}
				return strcmp(d.rating, c.rating)
			},
			hidden: 1
		},
		{
			id: "location",
			name: LANG.location,
			type: "text",
			compute: function (c, e) {
				var b;
				if (c.region) {
					if (c.realm) {
						b = ce("a");
						b.className = "q1";
						b.href = "?profiles=" + c.region + "." + c.realm;
						ae(b, ct(c.realmname));
						ae(e, b);
						ae(e, ce("br"))
					}
					var d = ce("small");
					b = ce("a");
					b.className = "q1";
					b.href = "?profiles=" + c.region;
					ae(b, ct(c.region.toUpperCase()));
					ae(d, b);
					if (c.battlegroup) {
						ae(d, ct(LANG.hyphen));
						b = ce("a");
						b.className = "q1";
						b.href = "?profiles=" + c.region + "." + c.battlegroup;
						ae(b, ct(c.battlegroupname));
						ae(d, b)
					}
					ae(e, d)
				}
			},
			getVisibleText: function (a) {
				var b = "";
				if (a.region) {
					b += " " + a.region
				}
				if (a.battlegroup) {
					b += " " + a.battlegroup
				}
				if (a.realm) {
					b += " " + a.realm
				}
				return trim(b)
			},
			sortFunc: function (d, c, e) {
				if (d.region != c.region) {
					return strcmp(d.region, c.region)
				}
				if (d.battlegroup != c.battlegroup) {
					return strcmp(d.battlegroup, c.battlegroup)
				}
				return strcmp(d.realm, c.realm)
			}
		},
		{
			id: "guild",
			name: LANG.guild,
			value: "guild",
			type: "text",
			compute: function (c, d) {
				if (!c.region || !c.battlegroup || !c.realm || !c.guild) {
					return
				}
				var b = ce("a");
				b.className = "q1";
				b.href = "?profiles=" + c.region + "." + c.realm + "&filter=cr=9;crs=0;crv=" + str_replace(urlencode(c.guild), " ", "+") + "&roster=1";
				ae(b, ct(c.guild));
				ae(d, b)
			}
		}],
		getItemLink: function (a) {
			if (a.size !== undefined) {
				return "?profiles=" + a.region + "." + a.realm + "&filter=cr=" + (a.size == 2 ? 12 : (a.size == 3 ? 15 : 18)) + ";crs=0;crv=" + str_replace(urlencode(a.name), " ", "+") + "&roster=" + (a.size == 5 ? 4 : a.size)
			} else {
				if (a.members !== undefined) {
					return "?profiles=" + a.region + "." + a.realm + "&filter=cr=9;crs=0;crv=" + str_replace(urlencode(a.name), " ", "+") + "&roster=1"
				} else {
					if (a.region && a.realm) {
						return "?profile=" + a.region + "." + a.realm + "." + g_cleanCharacterName(a.name)
					} else {
						return "?profile=" + a.id
					}
				}
			}
		}
	},
	model: {
		sort: [],
		mode: 3,
		nItemsPerPage: 40,
		nItemsPerRow: 4,
		poundable: 2,
		columns: [],
		compute: function (e, k, f) {
			k.className = "screenshot-cell";
			k.vAlign = "bottom";
			var b = ce("a");
			b.href = "javascript:;";
			b.onclick = this.template.modelShow.bind(this.template, e.npcId, e.displayId);
			var c = ce("img");
			c.src = "http://static.wowhead.com/modelviewer/thumbs/npc/" + e.displayId + ".png";
			ae(b, c);
			ae(k, b);
			var j = ce("div");
			j.className = "screenshot-cell-user";
			b = ce("a");
			b.href = "?npcs=1&filter=" + (e.family ? "fa=" + e.family + ";": "") + "minle=1;cr=35;crs=0;crv=" + e.skin;
			ae(b, ct(e.skin));
			ae(j, b);
			ae(j, ct(" (" + e.count + ")"));
			ae(k, j);
			j = ce("div");
			j.style.position = "relative";
			j.style.height = "1em";
			var h = ce("div");
			h.className = "screenshot-caption";
			var g = ce("small");
			ae(g, ct(LANG.level + ": "));
			ae(g, ct(e.minLevel + (e.minLevel == e.maxLevel ? "": LANG.hyphen + (e.maxLevel == 9999 ? "??": e.maxLevel))));
			ae(g, ce("br"));
			ae(h, g);
			ae(j, h);
			ae(k, j);
			aE(k, "click", this.template.modelShow.bind(this.template, e.npcId, e.displayId, true))
		},
		modelShow: function (d, b, f, g) {
			if (f) {
				g = $E(g);
				if (g.shiftKey || g.ctrlKey) {
					return
				}
				var a = 0,
				c = g._target;
				while (c && a < 3) {
					if (c.nodeName == "A") {
						return
					}
					if (c.nodeName == "IMG") {
						break
					}
					c = c.parentNode
				}
			}
			ModelViewer.show({
				type: 1,
				typeId: d,
				displayId: b,
				noPound: 1
			})
		}
	},
	currency: {
		sort: [1],
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			span: 2,
			value: "name",
			compute: function (c, g, e) {
				var d = ce("td");
				d.style.width = "1px";
				d.style.padding = "0";
				d.style.borderRight = "none";
				ae(d, Icon.create(c.icon, 0, null, this.template.getItemLink(c)));
				ae(e, d);
				g.style.borderLeft = "none";
				var f = ce("div");
				var b = ce("a");
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(c);
				ae(b, ct(c.name));
				ae(f, b);
				ae(g, f)
			}
		},
		{
			id: "category",
			name: LANG.category,
			type: "text",
			width: "15%",
			compute: function (c, d) {
				d.className = "small";
				var b = ce("a");
				b.className = "q1";
				b.href = "?currencies=" + c.category;
				ae(b, ct(g_currency_categories[c.category]));
				ae(d, b)
			},
			getVisibleText: function (a) {
				return g_currency_categories[a.category]
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_currency_categories[d.category], g_currency_categories[c.category])
			}
		}],
		getItemLink: function (a) {
			return "?currency=" + a.id
		}
	},
	classs: {
		sort: [1],
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			span: 2,
			value: "name",
			compute: function (e, k, g) {
				var c = ce("td");
				c.style.width = "1px";
				c.style.padding = "0";
				c.style.borderRight = "none";
				ae(c, Icon.create("class_" + g_file_classes[e.id], 0, null, this.template.getItemLink(e)));
				ae(g, c);
				k.style.borderLeft = "none";
				var j = ce("div");
				var b = ce("a");
				b.className = "c" + e.id;
				b.style.fontFamily = "Verdana, sans-serif";
				b.href = this.template.getItemLink(e);
				ae(b, ct(e.name));
				if (e.expansion) {
					var f = ce("span");
					f.className = g_GetExpansionClassName(e.expansion);
					ae(f, b);
					ae(j, f)
				} else {
					ae(j, b)
				}
				if (e.hero) {
					j.style.position = "relative";
					var h = ce("div");
					h.className = "small";
					h.style.fontStyle = "italic";
					h.style.position = "absolute";
					h.style.right = "3px";
					h.style.bottom = "0px";
					ae(h, ct(LANG.lvclass_hero));
					ae(j, h)
				}
				ae(k, j)
			}
		},
		{
			id: "races",
			name: LANG.races,
			type: "text",
			compute: function (e, g) {
				if (e.races) {
					var f = Listview.funcBox.assocBinFlags(e.races, g_chr_races);
					g.className = "q1";
					for (var d = 0, b = f.length; d < b; ++d) {
						if (d > 0) {
							ae(g, ct(LANG.comma))
						}
						var c = ce("a");
						c.href = "?race=" + f[d];
						ae(c, ct(g_chr_races[f[d]]));
						ae(g, c)
					}
				}
			},
			getVisibleText: function (a) {
				if (a.races) {
					return Listview.funcBox.arrayText(Listview.funcBox.assocBinFlags(a.races, g_chr_races), g_chr_races)
				}
			},
			sortFunc: function (d, c, e) {
				return Listview.funcBox.assocArrCmp(Listview.funcBox.assocBinFlags(d.races, g_chr_races), Listview.funcBox.assocBinFlags(c.races, g_chr_races), g_chr_races)
			}
		}],
		getItemLink: function (a) {
			return "?class=" + a.id
		}
	},
	race: {
		sort: [1],
		searchable: 1,
		filtrable: 1,
		columns: [{
			id: "name",
			name: LANG.name,
			type: "text",
			align: "left",
			span: 2,
			value: "name",
			compute: function (g, e, j) {
				var h = ce("div"),
				k;
				h.style.margin = "0 auto";
				h.style.textAlign = "left";
				h.style.width = "52px";
				k = Icon.create("race_" + g_file_races[g.id] + "_" + g_file_genders[0], 0, null, this.template.getItemLink(g));
				k.style.cssFloat = k.style.styleFloat = "left";
				ae(h, k);
				k = Icon.create("race_" + g_file_races[g.id] + "_" + g_file_genders[1], 0, null, this.template.getItemLink(g));
				k.style.cssFloat = k.style.styleFloat = "left";
				ae(h, k);
				var f = ce("td");
				f.style.width = "1px";
				f.style.padding = "0";
				f.style.borderRight = "none";
				ae(f, h);
				ae(j, f);
				e.style.borderLeft = "none";
				var b = ce("div");
				var l = ce("a");
				l.style.fontFamily = "Verdana, sans-serif";
				l.href = this.template.getItemLink(g);
				ae(l, ct(g.name));
				if (g.expansion) {
					var c = ce("span");
					c.className = g_GetExpansionClassName(g.expansion);
					ae(c, l);
					ae(b, c)
				} else {
					ae(b, l)
				}
				ae(e, b)
			}
		},
		{
			id: "side",
			name: LANG.side,
			type: "text",
			compute: function (a, c) {
				if (a.side && a.side != 3) {
					var b = ce("span");
					b.className = (a.side == 1 ? "alliance-icon": "horde-icon");
					b.onmouseover = function (d) {
						Tooltip.showAtCursor(d, g_sides[a.side], 0, 0, "q")
					};
					b.onmousemove = Tooltip.cursorUpdate;
					b.onmouseout = Tooltip.hide;
					ae(c, b)
				}
			},
			getVisibleText: function (a) {
				if (a.side) {
					return g_sides[a.side]
				}
			},
			sortFunc: function (d, c, e) {
				return strcmp(g_sides[d.side], g_sides[c.side])
			}
		},
		{
			id: "classes",
			name: LANG.classes,
			type: "text",
			compute: function (e, h) {
				if (e.classes) {
					var c = Listview.funcBox.assocBinFlags(e.classes, g_chr_classes);
					var g = ce("div");
					g.style.width = (26 * c.length) + "px";
					g.style.margin = "0 auto";
					for (var b = 0, a = c.length; b < a; ++b) {
						var f = Icon.create("class_" + g_file_classes[c[b]], 0, null, "?class=" + c[b]);
						f.style.cssFloat = f.style.styleFloat = "left";
						ae(g, f)
					}
					ae(h, g)
				}
			},
			getVisibleText: function (a) {
				if (a.classes) {
					return Listview.funcBox.arrayText(Listview.funcBox.assocBinFlags(a.classes, g_chr_classes), g_chr_classes)
				}
			},
			sortFunc: function (d, c, e) {
				return Listview.funcBox.assocArrCmp(Listview.funcBox.assocBinFlags(d.classes, g_chr_classes), Listview.funcBox.assocBinFlags(c.classes, g_chr_classes), g_chr_classes)
			}
		}],
		getItemLink: function (a) {
			return "?race=" + a.id
		}
	}
};
Menu.fixUrls(mn_items, "?items=");
Menu.fixUrls(mn_itemSets, "?itemsets&filter=cl=", "#0-2+1");
Menu.fixUrls(mn_npcs, "?npcs=");
Menu.fixUrls(mn_objects, "?objects=");
Menu.fixUrls(mn_quests, "?quests=");
Menu.fixUrls(mn_spells, "?spells=");
Menu.fixUrls(mn_skills, "?skill=");
Menu.fixUrls(mn_classes, "?class=");
Menu.fixUrls(mn_races, "?race=");
Menu.fixUrls(mn_zones, "?zones=");
Menu.fixUrls(mn_pets, "?pets=");
Menu.fixUrls(mn_factions, "?factions=");
Menu.fixUrls(mn_achievements, "?achievements=");
Menu.fixUrls(mn_titles, "?titles=", null, true);
Menu.fixUrls(mn_petCalc, "?petcalc=");
var g_dev = false;
var g_locale = {
	id: 0,
	name: "enus"
};
var g_localTime = new Date();
var g_user = {
	id: 0,
	name: "",
	roles: 0
};
var g_npcs = {};
var g_objects = {};
var g_items = {};
var g_itemsets = {};
var g_quests = {};
var g_spells = {};
var g_titles = {}; //
var g_gatheredzones = {};
var g_factions = {};
var g_pets = {};
var g_achievements = {};
var g_holidays = {};
var g_classes = {};
var g_races = {};
var g_skills={}
var g_gatheredcurrencies = {};
var g_users = {};
var g_types = {
	1 : "npc",
	2 : "object",
	3 : "item",
	4 : "itemset",
	5 : "quest",
	6 : "spell",
	7 : "zone",
	8 : "faction",
	9 : "pet",
	10 : "achievement",
    11 : "title",
    12 : "event",
    13 : "class",
    14 : "race",
    15 : "skill",
    17 : "currency"
};
var g_locales = {
	0 : "enus",
	2 : "frfr",
	3 : "dede",
	6 : "eses",
	8 : "ruru"
};
var g_file_races = {
	10 : "bloodelf",
	11 : "draenei",
	3 : "dwarf",
	7 : "gnome",
	1 : "human",
	4 : "nightelf",
	2 : "orc",
	6 : "tauren",
	8 : "troll",
	5 : "scourge"
};
var g_file_classes = {
	6 : "deathknight",
	11 : "druid",
	3 : "hunter",
	8 : "mage",
	2 : "paladin",
	5 : "priest",
	4 : "rogue",
	7 : "shaman",
	9 : "warlock",
	1 : "warrior"
};
var g_file_genders = {
	0 : "male",
	1 : "female"
};
var g_file_factions = {
	1 : "alliance",
	2 : "horde"
};
var g_file_gems = {
	1 : "meta",
	2 : "red",
	4 : "yellow",
	6 : "orange",
	8 : "blue",
	10 : "purple",
	12 : "green",
	14 : "prismatic"
};
g_items.add = function (b, a) {
	if (g_items[b] != null) {
		cO(g_items[b], a)
	} else {
		g_items[b] = a
	}
};
g_items.getIcon = function (a) {
	if (g_items[a] != null && g_items[a].icon) {
		return g_items[a].icon
	} else {
		return "inv_misc_questionmark"
	}
};
g_items.createIcon = function (d, b, a, c) {
	return Icon.create(g_items.getIcon(d), b, null, "?item=" + d, a, c)
};
g_spells.add = function (b, a) {
	if (g_spells[b] != null) {
		cO(g_spells[b], a)
	} else {
		g_spells[b] = a
	}
};
g_spells.getIcon = function (a) {
	if (g_spells[a] != null && g_spells[a].icon) {
		return g_spells[a].icon
	} else {
		return "inv_misc_questionmark"
	}
};
g_spells.createIcon = function (d, b, a, c) {
	return Icon.create(g_spells.getIcon(d), b, null, "?spell=" + d, a, c)
};
g_achievements.getIcon = function (a) {
	if (g_achievements[a] != null && g_achievements[a].icon) {
		return g_achievements[a].icon
	} else {
		return "inv_misc_questionmark"
	}
};
g_achievements.createIcon = function (d, b, a, c) {
	return Icon.create(g_achievements.getIcon(d), b, null, "?achievement=" + d, a, c)
};
g_classes.getIcon = function (a) {
    if (g_file_classes[a]) {
        return "class_" + g_file_classes[a]
    } else {
        return "inv_misc_questionmark"
    }
};
g_classes.createIcon = function (d, b, a, c) {
    return Icon.create(g_classes.getIcon(d), b, null, "?class=" + d, a, c)
};
g_races.getIcon = function (b, a) {
    if (a === undefined) {
        a = 0
    }
    if (g_file_races[b] && g_file_genders[a]) {
        return "race_" + g_file_races[b] + "_" + g_file_genders[a]
    } else {
        return "inv_misc_questionmark"
    }
};
g_races.createIcon = function (d, b, a, c) {
    return Icon.create(g_races.getIcon(d), b, null, "?race=" + d, a, c)
};
g_skills.getIcon = function (a) {
    if (g_skills[a] != null && g_skills[a].icon) {
        return g_skills[a].icon
    } else {
        return "inv_misc_questionmark"
    }
};
g_skills.createIcon = function (d, b, a, c) {
    return Icon.create(g_skills.getIcon(d), b, null, "?skill=" + d, a, c)
};
g_gatheredcurrencies.getIcon = function (b, a) {
    if (g_gatheredcurrencies[b] != null && g_gatheredcurrencies[b].icon) {
        if (is_array(g_gatheredcurrencies[b].icon) && !isNaN(a)) {
            return g_gatheredcurrencies[b].icon[a]
        }
        return g_gatheredcurrencies[b].icon
    } else {
        return "inv_misc_questionmark"
    }
};
g_gatheredcurrencies.createIcon = function (d, b, a, c) {
    return Icon.create(g_gatheredcurrencies.getIcon(d, (a > 0 ? 0 : 1)), b, null, null, Math.abs(a), c)
};
g_holidays.getIcon = function (a) {
    if (g_holidays[a] != null && g_holidays[a].icon) {
        return g_holidays[a].icon
    } else {
        return "inv_misc_questionmark"
    }
};
g_holidays.createIcon = function (d, b, a, c) {
    return Icon.create(g_holidays.getIcon(d), b, null, "?event=" + d, a, c)
};

var LiveSearch = new function () {
	var
        currentTextbox,
        lastSearch = {},
        lastDiv,
        timer,
        prepared,
        container,
        cancelNext,
        hasData,
        summary,
        selection,
        LIVESEARCH_DELAY = 500;

	function setText(textbox, txt) {
		textbox.value = txt;
		textbox.selectionStart = textbox.selectionEnd = txt.length;
	}

	function colorDiv(div, fromOver) {
		if (lastDiv) {
			lastDiv.className = lastDiv.className.replace("live-search-selected", "");
		}

		lastDiv = div;
		lastDiv.className += " live-search-selected";
		selection = div.i;

		if (!fromOver) {
			show();
			setTimeout(setText.bind(0, currentTextbox, g_getTextContent(div.firstChild.firstChild.childNodes[1])), 1);
			cancelNext = 1;
		}
	}

	function aOver() {
		colorDiv(this.parentNode.parentNode, 1);
	}

	function isVisible() {
		if (!container) {
			return false;
		}

		return container.style.display != "none";
	}

	function adjust(fromResize) {
		if (fromResize == 1 && !isVisible()) {
			return;
		}

		if (currentTextbox == null) {
			return;
		}

		var c = ac(currentTextbox);
		container.style.left  = (c[0] - 2) + "px";
		container.style.top   = (c[1] + currentTextbox.offsetHeight + 1) + "px";
		container.style.width = currentTextbox.offsetWidth + "px";
	}

	function prepare() {
		if (prepared) {
			return;
		}

		prepared = 1;

		container = ce("div");
		container.className = "live-search";
		container.style.display = "none";

		ae(ge("layers"), container);
		aE(window, "resize", adjust.bind(0, 1));
		aE(document, "click", hide);
	}

	function show() {
		if (container && !isVisible()) {
			adjust();
			container.style.display = "";
		}
	}

	function hide() {
		if (container) {
			container.style.display = "none";
		}
	}

	function highlight(match) {
		return "<b><u>" + match + "</u></b>";
	}

	function display(textbox, search, suggz, dataz) {
		prepare();
		show();
		lastA = null;
		hasData = 1;
		selection = null;

		while (container.firstChild) {
			de(container.firstChild);
		}

		if (!Browser.ie6) {
			ae(container, ce("em"));
			ae(container, ce("var"));
			ae(container, ce("strong"));
		}

		search = search.replace(/[^a-z0-9\-]/i, " ");
		search = trim(search.replace(/\s+/g, " "));

		var regex = g_createOrRegex(search);

		for (var i = 0, len = suggz.length; i < len; ++i) {
			var pos = suggz[i].lastIndexOf("(");
			if (pos != -1) {
				suggz[i] = suggz[i].substr(0, pos - 1);
			}

			var
                type   = dataz[i][0],
                typeId = dataz[i][1],
                param1 = dataz[i][2],
                param2 = dataz[i][3],
                a      = ce("a"),
                sp     = ce("i"),
                sp2    = ce("span"),
                div    = ce("div"),
                div2   = ce("div");
                div.i  = i;

			a.onmouseover = aOver;
			a.href = "?" + g_types[type] + "=" + typeId;
			if (textbox._append) {
				a.rel += textbox._append;
			}

			if (type == 3 && param2 != null) {
				a.className += " q" + param2;
			}
            else if (type == 4 && param1 != null) {
                a.className += " q" + param1;
            }

            if ((type == 3 || type == 6 || type == 9 || type == 10) && param1) {
				div.className += " live-search-icon";
				div.style.backgroundImage = "url(images/icons/small/" + param1.toLowerCase() + ".jpg)";
			}
            else if (type == 5 && param1 >= 1 && param1 <= 2) {
                div.className += " live-search-icon-quest-" + (param1 == 1 ? "alliance" : "horde");
            }

			ae(sp, ct(LANG.types[type][0]));
			ae(a, sp);

			var buffer = suggz[i];
			buffer = buffer.replace(regex, highlight);
			sp2.innerHTML = buffer;
			ae(a, sp2);

			if (type == 6 && param2) {
				ae(a, ct(" (" + param2 + ")"));
			}

			ae(div2, a);
			ae(div, div2);
			ae(container, div);
		}
	}

	function receive(xhr, opt) {
		var text = xhr.responseText;
		if (text.charAt(0) != "[" || text.charAt(text.length - 1) != "]") {
			return;
		}

		var a = eval(text);
		var search = a[0];

		if (search == opt.search) {
			if (a.length == 8) {
				display(opt.textbox, search, a[1], a[7]);
			}
            else {
				hide();
			}
		}
	}

	function fetch(textbox, search) {
		var url = "?search=" + urlencode(search);

		if (textbox._type) {
			url += "&json&type=" + textbox._type;
		}
        else {
			url += "&opensearch";
		}

		new Ajax(url, {
			onSuccess: receive,
			textbox: textbox,
			search: search
		})
	}

	function preFetch(textbox, search) {
		if (cancelNext) {
			cancelNext = 0;
			return;
		}
		hasData = 0;
		if (timer > 0) {
			clearTimeout(timer);
			timer = 0;
		}
		timer = setTimeout(fetch.bind(0, textbox, search), LIVESEARCH_DELAY);
	}

	function cycle(dir) {
		if (!isVisible()) {
			if (hasData) {
				show();
			}
			return;
		}

		var firstNode = (container.childNodes[0].nodeName == "EM" ? container.childNodes[3] : container.firstChild);
		var bakDiv = dir ? firstNode : container.lastChild;

		if (lastDiv == null) {
			colorDiv(bakDiv);
		}
        else {
			var div = dir ? lastDiv.nextSibling: lastDiv.previousSibling;
			if (div) {
				if (div.nodeName == "STRONG") {
					div = container.lastChild;
				}
				colorDiv(div);
			}
            else {
				colorDiv(bakDiv);
			}
		}
	}

	function onKeyUp(e) {
		e = $E(e);
		var textbox = e._target;

		switch (e.keyCode) {
            case 48:
            case 96:
            case 107:
            case 109:
                if (Browser.firefox && e.ctrlKey) {
                    adjust(textbox);
                    break;
                }
                break;
		}

		var search = trim(textbox.value.replace(/\s+/g, " "));
		if (search == lastSearch[textbox.id]) {
			return;
		}

		lastSearch[textbox.id] = search;
		if (search.length) {
			preFetch(textbox, search);
		}
        else {
			hide();
		}
	}

	function onKeyDown(e) {
		e = $E(e);
		var textbox = e._target;

		switch (e.keyCode) {
            case 27:
                hide();
                break;
            case 38:
                cycle(0);
                break;
            case 40:
                cycle(1);
                break
		}
	}

	function onFocus(e) {
		e = $E(e);
		var textbox = e._target;

		if (textbox != document) {
			currentTextbox = textbox;
		}
	}

	this.attach = function (textbox) {
		if (textbox.getAttribute("autocomplete") == "off") {
			return;
		}
		textbox.setAttribute("autocomplete", "off");

		aE(textbox, "focus", onFocus);
		aE(textbox, "keyup", onKeyUp);
		aE(textbox, Browser.opera ? "keypress" : "keydown", onKeyDown);
	};

	this.reset = function (textbox) {
		lastSearch[textbox.id] = null;
		textbox.value = "";
		hasData = 0;
		hide();
	};

	this.hide = function () {
		hide();
	}
};

var Lightbox = new function () {
	var d, m, o, h = {},
	c = {},
	i, f;
	function p() {
		aE(d, "click", e);
		aE(document, Browser.opera ? "keypress": "keydown", g);
		aE(window, "resize", a);
		if (Browser.ie6) {
			aE(window, "scroll", j)
		}
	}
	function l() {
		dE(d, "click", e);
		dE(document, Browser.opera ? "keypress": "keydown", g);
		dE(window, "resize", a);
		if (Browser.ie6) {
			dE(window, "scroll", j)
		}
	}
	function b() {
		if (i) {
			return
		}
		i = 1;
		var q = ge("layers");
		d = ce("div");
		d.className = "lightbox-overlay";
		m = ce("div");
		m.className = "lightbox-outer";
		o = ce("div");
		o.className = "lightbox-inner";
		d.style.display = m.style.display = "none";
		ae(q, d);
		ae(m, o);
		ae(q, m)
	}
	function g(q) {
		q = $E(q);
		switch (q.keyCode) {
		case 27:
			e();
			break
		}
	}
	function a(q) {
		if (q != 1234) {
			if (c.onResize) {
				c.onResize()
			}
		}
		d.style.height = document.body.offsetHeight + "px";
		if (Browser.ie6) {
			j()
		}
	}
	function j() {
		var r = g_getScroll().y,
		q = g_getWindowSize().h;
		m.style.top = (r + q / 2) + "px"
	}
	function e() {
		l();
		if (c.onHide) {
			c.onHide()
		}
		d.style.display = m.style.display = "none";
		g_enableScroll(true)
	}
	function k() {
		d.style.display = m.style.display = h[f].style.display = ""
	}
	this.setSize = function (q, r) {
		o.style.visibility = "hidden";
		o.style.width = q + "px";
		o.style.height = r + "px";
		o.style.left = -parseInt(q / 2) + "px";
		o.style.top = -parseInt(r / 2) + "px";
		o.style.visibility = "visible"
	};
	this.show = function (v, u, q) {
		c = u || {};
		b();
		p();
		if (f != v && h[f] != null) {
			h[f].style.display = "none"
		}
		f = v;
		var t = 0,
		r;
		if (h[v] == null) {
			t = 1;
			r = ce("div");
			ae(o, r);
			h[v] = r
		} else {
			r = h[v]
		}
		if (c.onShow) {
			c.onShow(r, t, q)
		}
		a(1234);
		k();
		g_enableScroll(false)
	};
	this.reveal = function () {
		k()
	};
	this.hide = function () {
		e()
	};
	this.isVisible = function () {
		return (d && d.style.display != "none")
	}
};

var ModelViewer = new function () {
	var d, A, C = [],
	h,
	w,
	o,
	z,
	g,
	q,
	r,
	e,
	m,
	u,
	l,
	p = [
        {id: 10, name: g_chr_races[10], model: "bloodelf" },
        {id: 11, name: g_chr_races[11], model: "draenei" },
        {id: 3, name: g_chr_races[3], model: "dwarf" },
        {id: 7, name: g_chr_races[7], model: "gnome" },
        {id: 1, name: g_chr_races[1], model: "human" },
        {id: 4, name: g_chr_races[4], model: "nightelf" },
        {id: 2, name: g_chr_races[2], model: "orc" },
        {id: 6, name: g_chr_races[6], model: "tauren" },
        {id: 8, name: g_chr_races[8], model: "troll" },
        {id: 5, name: g_chr_races[5], model: "scourge"}
    ],
	i = [
        {id: 1, name: LANG.female, model: "female" },
        {id: 0, name: LANG.male, model: "male" }
    ];
	function y() {
		w.style.display = "none";
		o.style.display = "none";
		z.style.display = "none"
	}
	function a() {
		var D, E;
		if (q.style.display == "") {
			D = (q.selectedIndex >= 0 ? q.options[q.selectedIndex].value: "")
		} else {
			D = (r.selectedIndex >= 0 ? r.options[r.selectedIndex].value: "")
		}
		E = (e.selectedIndex >= 0 ? e.options[e.selectedIndex].value: 0);
		return {
			r: D,
			s: E
		}
	}
	function c(D, E) {
		return (!isNaN(D) && D > 0 && in_array(p, D, function (F) {
			return F.id
		}) != -1 && !isNaN(E) && E >= 0 && E <= 1)
	}
	function v() {
		if (u == 2 && !f()) {
			u = 0
		}
		if (u == 2) {
			var G = '<object id="3dviewer-plugin" type="application/x-zam-wowmodel" width="600" height="400"><param name="model" value="' + d + '" /><param name="modelType" value="' + A + '" /><param name="contentPath" value="http://static.wowhead.com/modelviewer/" />';
			if (A == 16 && C.length) {
				G += '<param name="equipList" value="' + C.join(",") + '" />'
			}
			G += '<param name="bgColor" value="#181818" /></object>';
			z.innerHTML = G;
			z.style.display = ""
		} else {
			if (u == 1) {
				var G = '<applet id="3dviewer-java" code="org.jdesktop.applet.util.JNLPAppletLauncher" width="600" height="400" archive="http://static.wowhead.com/modelviewer/applet-launcher.jar,http://download.java.net/media/jogl/builds/archive/jsr-231-webstart-current/jogl.jar,http://download.java.net/media/gluegen/webstart/gluegen-rt.jar,http://download.java.net/media/java3d/webstart/release/vecmath/latest/vecmath.jar,http://static.wowhead.com/modelviewer/ModelView510.jar"><param name="jnlp_href" value="http://static.wowhead.com/modelviewer/ModelView.jnlp"><param name="codebase_lookup" value="false"><param name="cache_option" value="no"><param name="subapplet.classname" value="modelview.ModelViewerApplet"><param name="subapplet.displayname" value="Model Viewer Applet"><param name="progressbar" value="true"><param name="jnlpNumExtensions" value="1"><param name="jnlpExtension1" value="http://download.java.net/media/jogl/builds/archive/jsr-231-webstart-current/jogl.jnlp"><param name="contentPath" value="http://static.wowhead.com/modelviewer/"><param name="model" value="' + d + '"><param name="modelType" value="' + A + '">';
				if (A == 16 && C.length) {
					G += '<param name="equipList" value="' + C.join(",") + '">'
				}
				G += '<param name="bgColor" value="#181818"></applet>';
				o.innerHTML = G;
				o.style.display = ""
			} else {
				var J = {
					model: d,
					modelType: A,
					contentPath: "http://static.wowhead.com/modelviewer/",
					blur: (OS.mac ? "0": "1")
				};
				var I = {
					quality: "high",
					allowscriptaccess: "always",
					menu: false,
					bgcolor: "#181818"
				};
				var D = {};
				if (A == 16 && C.length) {
					J.equipList = C.join(",")
				}
				swfobject.embedSWF("http://static.wowhead.com/modelviewer/ModelView.swf", "dsjkgbdsg2346", "600", "400", "10.0.0", "http://static.wowhead.com/modelviewer/expressInstall.swf", J, I, D);
				w.style.display = ""
			}
		}
		var K = a(),
		F = K.r,
		H = K.s;
		if (!h.noPound) {
			var E = "#modelviewer";
			switch (h.type) {
			case 1:
				E += ":1:" + h.displayId + ":" + (h.humanoid | 0);
				break;
			case 2:
				E += ":2:" + h.displayId;
				break;
			case 3:
				E += ":3:" + h.displayId + ":" + (h.slot | 0);
				break;
			case 4:
				E += ":4:" + C.join(";");
				break
			}
			if (F && H) {
				E += ":" + F + "+" + H
			} else {
				E += ":"
			}
			if (h.extraPound != null) {
				E += ":" + h.extraPound
			}
			location.replace(rtrim(E, ":"))
		}
	}

	function b() {
		var H = a(),
		E = H.r,
		F = H.s;
		if (!E) {
			if (e.style.display == "none") {
				return
			}
			e.style.display = "none";
			d = C[1];
			switch (h.slot) {
			case 1:
				A = 2;
				break;
			case 3:
				A = 4;
				break;
			default:
				A = 1
			}
		} else {
			if (e.style.display == "none") {
				e.style.display = ""
			}
			var H = function (I) {
				return I.id
			};
			var G = in_array(p, E, H);
			var D = in_array(i, F, H);
			if (G != -1 && D != -1) {
				d = p[G].model + i[D].model;
				A = 16
			}
		}
		y();
		v()
	}
	function j(D) {
		if (D == u) {
			return
		}
		g_setSelectedLink(this, "modelviewer-mode");
		y();
		if (u == null) {
			u = D;
			setTimeout(v, 50)
		} else {
			u = D;
			sc("modelviewer_mode", 7, D, "/", location.hostname);
			// sc("modelviewer_mode", 7, D, "/", ".wowhead.com");
			v()
		}
	}
	function t(I, D) {
		var K = -1,
		L = -1,
		E, H;
		if (D.race != null && D.sex != null) {
			K = D.race;
			L = D.sex;
			g.style.display = "none";
			I = 0
		} else {
			g.style.display = ""
		}
		if (K == -1 && L == -1) {
			if (location.hash) {
				var J = location.hash.match(/modelviewer:.*?([0-9]+)\+([0-9]+)/);
				if (J != null) {
					if (c(J[1], J[2])) {
						K = J[1];
						L = J[2];
						e.style.display = ""
					}
				}
			}
		}
		if (I) {
			E = q;
			H = 1;
			q.style.display = "";
			q.selectedIndex = -1;
			r.style.display = "none";
			if (L == -1) {
				e.style.display = "none"
			}
		} else {
			if (K == -1 && L == -1) {
				var O = (g_user && g_user.settings ? g_user.settings.modelrace: 1),
				G = (g_user && g_user.settings ? g_user.settings.modelgender - 1 : 0);
				if (c(O, G)) {
					K = O;
					L = G
				} else {
					K = 1;
					L = 0
				}
			}
			E = r;
			H = 0;
			q.style.display = "none";
			r.style.display = "";
			e.style.display = ""
		}
		if (L != -1) {
			e.selectedIndex = L
		}
		if (K != -1 && L != -1) {
			var N = function (P) {
				return P.id
			};
			var M = in_array(p, K, N);
			var F = in_array(i, L, N);
			if (M != -1 && F != -1) {
				d = p[M].model + i[F].model;
				A = 16;
				M += H;
				if (Browser.opera) {
					setTimeout(function () {
						E.selectedIndex = M
					},
					1)
				} else {
					E.selectedIndex = M
				}
				e.selectedIndex = F
			}
		}
	}
	function f() {
		var E = navigator.mimeTypes["application/x-zam-wowmodel"];
		if (E) {
			var D = E.enabledPlugin;
			if (D) {
				return true
			}
		}
		return false
	}
	function k() {
		if (!h.noPound) {
			if (!h.fromTag && m && m.indexOf("modelviewer") == -1) {
				location.replace(m)
			} else {
				location.replace("#.")
			}
		}
		if (h.onHide) {
			h.onHide()
		}
	}
	function B(Q, K, H) {
		var G, E;
		if (!H.displayAd || g_user.premium) {
			Lightbox.setSize(620, 452)
		} else {
			Lightbox.setSize(749, 546)
		}
		if (K) {
			Q.className = "modelviewer";
			var P = ce("div");
			w = ce("div");
			o = ce("div");
			z = ce("div");
			var O = ce("div");
			O.id = "dsjkgbdsg2346";
			ae(w, O);
			P.className = "modelviewer-screen";
			w.style.display = o.style.display = z.style.display = "none";
			ae(P, w);
			ae(P, o);
			ae(P, z);
			var M = ce("div");
			M.style.backgroundColor = "#181818";
			M.style.margin = "0";
			ae(M, P);
			ae(Q, M);
			G = ce("a"),
			E = ce("a");
			G.className = "modelviewer-help";
			G.href = "?help=modelviewer";
			G.target = "_blank";
			ae(G, ce("span"));
			E.className = "modelviewer-close";
			E.href = "javascript:;";
			E.onclick = Lightbox.hide;
			ae(E, ce("span"));
			ae(Q, E);
			ae(Q, G);
			var N = ce("div"),
			F = ce("span"),
			G = ce("a"),
			E = ce("a");
			N.className = "modelviewer-quality";
			G.href = E.href = "javascript:;";
			ae(G, ct("Flash"));
			ae(E, ct("Java"));
			G.onclick = j.bind(G, 0);
			E.onclick = j.bind(E, 1);
			ae(F, G);
			ae(F, ct(" " + String.fromCharCode(160)));
			ae(F, E);
			if (f()) {
				var D = ce("a");
				D.href = "javascript:;";
				ae(D, ct("Plugin"));
				D.onclick = j.bind(D, 2);
				ae(F, ct(" " + String.fromCharCode(160)));
				ae(F, D)
			}
			ae(N, ce("div"));
			ae(N, F);
			ae(Q, N);
			g = ce("div");
			g.className = "modelviewer-model";
			var O = function (V, U) {
				return strcmp(V.name, U.name)
			};
			p.sort(O);
			i.sort(O);
			q = ce("select");
			r = ce("select");
			e = ce("select");
			q.onchange = r.onchange = e.onchange = b;
			ae(q, ce("option"));
			for (var J = 0, L = p.length; J < L; ++J) {
				var I = ce("option");
				I.value = p[J].id;
				ae(I, ct(p[J].name));
				ae(q, I)
			}
			for (var J = 0, L = p.length; J < L; ++J) {
				var I = ce("option");
				I.value = p[J].id;
				ae(I, ct(p[J].name));
				ae(r, I)
			}
			for (var J = 0, L = i.length; J < L; ++J) {
				var I = ce("option");
				I.value = i[J].id;
				ae(I, ct(i[J].name));
				ae(e, I)
			}
			e.style.display = "none";
			ae(g, ce("div"));
			ae(g, q);
			ae(g, r);
			ae(g, e);
			ae(Q, g);
			N = ce("div");
			N.className = "clear";
			ae(Q, N);
			if (H.displayAd) {
				N = ce("div");
				N.id = "modelviewer-ad";
				N.style.paddingBottom = "10px";
				ae(Q, N)
			}
		}
		switch (H.type) {
		case 1:
			g.style.display = "none";
			if (H.humanoid) {
				A = 32
			} else {
				A = 8
			}
			d = H.displayId;
			break;
		case 2:
			g.style.display = "none";
			A = 64;
			d = H.displayId;
			break;
		case 3:
			C = [H.slot, H.displayId];
			if (in_array([4, 5, 6, 7, 8, 9, 10, 16, 19, 20], H.slot) != -1) {
				t(0, H)
			} else {
				switch (H.slot) {
				case 1:
					A = 2;
					break;
				case 3:
					A = 4;
					break;
				default:
					A = 1
				}
				d = H.displayId;
				t(1, H)
			}
			break;
		case 4:
			C = H.equipList;
			t(0, H)
		}
		var S = ge("modelviewer-ad");
		if (K) {
			if (gc("modelviewer_mode") == "2" && f()) {
				D.onclick()
			} else {
				if (gc("modelviewer_mode") == "1") {
					E.onclick()
				} else {
					G.onclick()
				}
			}
		} else {
			if (S) {
				ee(S)
			}
			y();
			setTimeout(v, 1)
		}
		var R = "?tracker/modelviewer/";
		if (H.fromTag) {
			R += "custom/";
			switch (H.type) {
			case 1:
				R += "1:" + H.displayId + ":" + (H.humanoid | 0);
				break;
			case 2:
				R += "2:" + H.displayId;
				break;
			case 3:
				R += "3:" + H.displayId + ":" + (H.slot | 0);
				break;
			case 4:
				R += "4:" + C.join(".");
				break
			}
		} else {
			switch (H.type) {
			case 1:
				R += "npc/" + (H.typeId ? H.typeId: "display/" + H.displayId);
				break;
			case 2:
				R += "object/" + H.typeId;
				break;
			case 3:
				R += "item/" + H.typeId;
				break;
			case 4:
				R += "itemset/" + H.typeId;
				break
			}
		}
		var T = function () {
			if (isset("pageTracker") && pageTracker != null) {
				pageTracker._trackPageview(R)
			}
		};
		if (DomContentLoaded) {
			DomContentLoaded.addDelayedEvent(T)
		} else {
			T()
		}
		m = location.hash
	}
	this.checkPound = function () {
		if (location.hash && location.hash.indexOf("#modelviewer") == 0) {
			var H = location.hash.split(":");
			if (H.length >= 3) {
				H.shift();
				var F = parseInt(H.shift());
				var E = {
					type: F,
					displayAd: 1
				};
				switch (F) {
				case 1:
					E.displayId = parseInt(H.shift());
					var D = parseInt(H.shift());
					if (D == 1) {
						E.humanoid = 1
					}
					break;
				case 2:
					E.displayId = parseInt(H.shift());
					break;
				case 3:
					E.displayId = parseInt(H.shift());
					E.slot = parseInt(H.shift());
					break;
				case 4:
					var G = H.shift();
					E.equipList = G.split(";");
					break
				}
				if (E.displayId || E.equipList) {
					ModelViewer.show(E)
				}
				if (l != null) {
					if (H.length > 0 && H[H.length - 1]) {
						l(H[H.length - 1])
					}
				}
			} else {
				if (l != null && H.length == 2 && H[1]) {
					l(H[1])
				} else {
					var I = ge("dsgndslgn464d");
					if (I) {
						I.onclick()
					}
				}
			}
		}
	};
	this.addExtraPound = function (D) {
		l = D
	};
	this.show = function (D) {
		h = D;
		Lightbox.show("modelviewer", {
			onShow: B,
			onHide: k
		},
		D)
	};
	DomContentLoaded.addEvent(this.checkPound)
};

var g_screenshots = {};
var ScreenshotViewer = new function () {
	var
        screenshots,
        pos,
        imgWidth,
        imgHeight,
        scale,
        desiredScale,
        oldHash,
        mode = 0,
        collectionId,
        container,
        screen,
        imgDiv,
        aPrev,
        aNext,
        aCover,
        aOriginal,
        divFrom,
        divCaption,
	    loadingImage,
	    lightboxComponents;

	function computeDimensions(captionExtraHeight) {
		var screenshot = screenshots[pos];

		var availHeight = Math.max(50, Math.min(618, g_getWindowSize().h - 72 - captionExtraHeight));

		if (mode != 1 || screenshot.id || screenshot.resize) {
			desiredScale = Math.min(772 / screenshot.width, 618 / screenshot.height);
			scale        = Math.min(772 / screenshot.width, availHeight / screenshot.height);
		}
        else {
			desiredScale = scale = 1;
		}

		if (desiredScale > 1) {
			desiredScale = 1;
		}

		if (scale > 1) {
			scale = 1;
		}

		imgWidth = Math.round(scale * screenshot.width);
		imgHeight = Math.round(scale * screenshot.height);
		var lbWidth = Math.max(480, imgWidth);

		Lightbox.setSize(lbWidth + 20, imgHeight + 52 + captionExtraHeight);

		if (Browser.ie6) {
			screen.style.width = lbWidth + 'px';
			if (screenshots.length > 1) {
				aPrev.style.height = aNext.style.height = imgHeight + 'px'
			} else {
				aCover.style.height = imgHeight + 'px'
			}
		}
		if (captionExtraHeight) {
			imgDiv.firstChild.width = imgWidth;
			imgDiv.firstChild.height = imgHeight;
		}
	}

	function getPound(pos) {
		var
            screenshot = screenshots[pos],
            buff = '#screenshots:';

		if (mode == 0) {
			buff += 'id=' + screenshot.id;
		}
        else {
			buff += collectionId + ':' + (pos + 1);
		}
		return buff;
	}

	function render(resizing) {
		if (resizing && (scale == desiredScale) && g_getWindowSize().h > container.offsetHeight) {
			return;
		}
		container.style.visibility = 'hidden';
		var
            screenshot = screenshots[pos],
            resized = (screenshot.width > 772 || screenshot.height > 618);

		computeDimensions(0);

		var url = (screenshot.url ? screenshot.url: g_staticUrl + '/uploads/screenshots/' + (resized ? 'resized/': 'normal/') + screenshot.id + '.jpg');

		var html =
            '<img src="' + url + '"'
        + ' width="' + imgWidth + '"'
        + ' height="' + imgHeight + '"';
		if (Browser.ie6) {
			html += ' galleryimg="no"';
		}
		html += '>';

		imgDiv.innerHTML = html;

		if (!resizing) {
			if (screenshot.url) {
				aOriginal.href = url;
			}
            else {
				aOriginal.href = g_staticUrl + '/uploads/screenshots/normal/' + screenshot.id + '.jpg';
			}
			if (!screenshot.user && typeof g_pageInfo == 'object') {
				screenshot.user = g_pageInfo.username;
			}

			var
                hasFrom1 = (screenshot.date && screenshot.user),
                hasFrom2 = (screenshots.length > 1);

            if (hasFrom1) {
				var
                    postedOn = new Date(screenshot.date),
                    elapsed = (g_serverTime - postedOn) / 1000;
				var a = divFrom.firstChild.childNodes[1];
				a.href = '?user=' + screenshot.user;
				a.innerHTML = screenshot.user;

				var s = divFrom.firstChild.childNodes[3];
				ee(s);
				Listview.funcBox.coFormatDate(s, elapsed, postedOn);

				divFrom.firstChild.style.display = '';
			}
            else {
				divFrom.firstChild.style.display = 'none';
			}

			var s = divFrom.childNodes[1];
            ee(s);
			if(screenshot.user) {
				if (hasFrom1) {
					ae(s, ct(' ' + LANG.dash + ' '));
                }
                var a = ce('a');
                a.href = 'javascript:;';
                a.onclick = ContactTool.show.bind(ContactTool, {
                    mode: 3,
                    screenshot: screenshot
                });
                a.className = 'report-icon'
                g_addTooltip(a, LANG.report_tooltip, 'q2');
                ae(a, ct(LANG.report));
                ae(s, a);
            }

			s = divFrom.childNodes[2];

			if (hasFrom2) {
				var buff = '';
				if(screenshot.user) {
					buff = LANG.dash;
                }
				buff += (pos + 1) + LANG.lvpage_of + screenshots.length;

				s.innerHTML = buff;
				s.style.display = '';
			}
            else {
				s.style.display = 'none';
			}

			divFrom.style.display = (hasFrom1 || hasFrom2 ? '': 'none');

			if (g_getLocale(true) != 0 && screenshot.caption) {
				screenshot.caption = '';
            }

			var hasCaption = (screenshot.caption != null && screenshot.caption.length);
			var hasSubject = (screenshot.subject != null && screenshot.subject.length && screenshot.type && screenshot.typeId);

			if (hasCaption || hasSubject) {
				var html = '';

				if (hasSubject) {
					html += LANG.types[screenshot.type][0] + LANG.colon;
					html += '<a href="?' + g_types[screenshot.type] + '=' + screenshot.typeId + '">';
					html += screenshot.subject;
					html += '</a>';
				}

				if (hasCaption) {
					if (hasSubject) {
						html += LANG.dash;
                    }
					html += (screenshot.noMarkup ? screenshot.caption : Markup.toHtml(screenshot.caption, { mode: Markup.MODE_SIGNATURE }));
				}

                divCaption.innerHTML = html;
				divCaption.style.display = '';
			}
            else {
				divCaption.style.display = 'none';
			}

			if (screenshots.length > 1) {
				aPrev.href = getPound(peekPos(-1));
				aNext.href = getPound(peekPos(1));

				aPrev.style.display = aNext.style.display = '';
				aCover.style.display = 'none';
			}
            else {
				aPrev.style.display = aNext.style.display = 'none';
				aCover.style.display = '';
			}

			location.replace(getPound(pos));
		}

		Lightbox.reveal();

		if (divCaption.offsetHeight > 18) {
			computeDimensions(divCaption.offsetHeight - 18);
		}
		container.style.visibility = 'visible';
    }

	function peekPos(change) {
		var foo = pos;
		foo += change;

		if (foo < 0) {
			foo = screenshots.length - 1;
		}
        else if (foo >= screenshots.length) {
            foo = 0;
        }

        return foo;
    }

	function prevScreenshot() {
		pos = peekPos(-1);
		onRender();

		return false;
	}

	function nextScreenshot() {
		pos = peekPos(1);
		onRender();

		return false;
	}

	function onKeyUp(e) {
		e = $E(e);
		switch (e.keyCode) {
            case 37: // Left
                prevScreenshot();
                break;
            case 39: // Right
                nextScreenshot();
                break;
        }
    }

	function onResize() {
		render(1);
	}

	function onHide() {
		cancelImageLoading();

		if (screenshots.length > 1) {
			dE(document, 'keyup', onKeyUp);
        }

		if (oldHash && mode == 0) {
			if (oldHash.indexOf(':id=') != -1) {
				oldHash = '#screenshots';
			}
			location.replace(oldHash);
		}
        else {
			location.replace('#.');
        }
	}

	function onShow(dest, first, opt) {
		if (typeof opt.screenshots == 'string') {
			screenshots = g_screenshots[opt.screenshots];
			mode = 1;
			collectionId = opt.screenshots;
		}
        else {
			screenshots = opt.screenshots;
			mode = 0;
			collectionId = null;
        }
		container = dest;

		pos = 0;
		if (opt.pos && opt.pos >= 0 && opt.pos < screenshots.length) {
			pos = opt.pos;
		}

		if (first) {
			dest.className = 'screenshotviewer';

			screen = ce('div');

			screen.className = 'screenshotviewer-screen';

			aPrev = ce('a');
			aNext = ce('a');
			aPrev.className = 'screenshotviewer-prev';
			aNext.className = 'screenshotviewer-next';
			aPrev.href = 'javascript:;';
			aNext.href = 'javascript:;';

			var foo = ce('span');
			ae(foo, ce('b'));
			// var b = ce('b');
			// ae(b, ct(LANG.previous));
			// ae(foo, b);
			ae(aPrev, foo);
			var foo = ce('span');
			ae(foo, ce('b'));
			// var b = ce('b');
			// ae(b, ct(LANG.next));
			// ae(foo, b);
			ae(aNext, foo);

			aPrev.onclick = prevScreenshot;
			aNext.onclick = nextScreenshot;

			aCover = ce('a');
			aCover.className = 'screenshotviewer-cover';
			aCover.href = 'javascript:;';
			aCover.onclick = Lightbox.hide;
			var foo = ce('span');
			ae(foo, ce('b'));
			// var b = ce('b');
			// ae(b, ct(LANG.close));
			// ae(foo, b);
			ae(aCover, foo);
			if (Browser.ie6) {
				ns(aPrev);
				ns(aNext);
				aPrev.onmouseover = aNext.onmouseover = aCover.onmouseover = function () {
					this.firstChild.style.display = 'block';
				};
				aPrev.onmouseout = aNext.onmouseout = aCover.onmouseout = function () {
					this.firstChild.style.display = '';
                };

			}
			ae(screen, aPrev);
			ae(screen, aNext);
			ae(screen, aCover);

			imgDiv = ce('div');
			ae(screen, imgDiv);

			ae(dest, screen);

			var aClose = ce('a');
			aClose.className = 'screenshotviewer-close';
			// aClose.className = 'dialog-x';
			aClose.href = 'javascript:;';
			aClose.onclick = Lightbox.hide;
			ae(aClose, ce('span'));
			// ae(aClose, ct(LANG.close));
			ae(dest, aClose);

			aOriginal = ce('a');
			aOriginal.className = 'screenshotviewer-original';
			// aOriginal.className = 'dialog-arrow';
			aOriginal.href = 'javascript:;';
			aOriginal.target = '_blank';
			ae(aOriginal, ce('span'));
			// ae(aOriginal, ct(LANG.original));
			ae(dest, aOriginal);

			divFrom = ce('div');
			divFrom.className = 'screenshotviewer-from';
			var sp = ce('span');
			ae(sp, ct(LANG.lvscreenshot_from));
			ae(sp, ce('a'));
			ae(sp, ct(' '));
			ae(sp, ce('span'));
			ae(divFrom, sp);
			ae(divFrom, ce('span'));
			ae(divFrom, ce('span'));
			ae(dest, divFrom);

			divCaption = ce('div');
			divCaption.className = 'screenshotviewer-caption';
			ae(dest, divCaption);
			var d = ce('div');
			d.className = 'clear';
			ae(dest, d);
		}

		oldHash = location.hash;

		if (screenshots.length > 1) {
			aE(document, 'keyup', onKeyUp);
        }

		onRender();
    }

	function onRender() {
		var screenshot = screenshots[pos];
		if (!screenshot.width || !screenshot.height) {
			if (loadingImage) {
				loadingImage.onload = null;
				loadingImage.onerror = null;
			}
			else {
				container.className = '';
				lightboxComponents = [];
				while(container.firstChild) {
					lightboxComponents.push(container.firstChild);
					de(container.firstChild);
				}
			}

			var lightboxTimer = setTimeout(function() {
				screenshot.width = 126;
				screenshot.height = 22;
				computeDimensions(0);
				screenshot.width = null;
				screenshot.height = null;

				var div = ce('div');
				div.style.margin = '0 auto';
				div.style.width = '126px';
				var img = ce('img');
				img.src = g_staticUrl + '/template/images/progress-anim.gif';
				img.width = 126;
				img.height = 22;
				ae(div, img);
				ae(container, div);

				Lightbox.reveal();
				container.style.visiblity = 'visible';
			}, 150);

			loadingImage = new Image();
			loadingImage.onload = (function(screen, timer) {
                clearTimeout(timer);
                screen.width = this.width;
                screen.height = this.height;
                loadingImage = null;
                restoreLightbox();
                render();
            }).bind(loadingImage, screenshot, lightboxTimer);
			loadingImage.onerror = (function(timer) {
                clearTimeout(timer);
                loadingImage = null;
                Lightbox.hide();
                restoreLightbox();
            }).bind(loadingImage, lightboxTimer);
			loadingImage.src = (screenshot.url ? screenshot.url : g_staticUrl + '/uploads/screenshots/normal/' + screenshot.id + '.jpg');
		}
		else {
			render();
		}
	}

	function cancelImageLoading() {
		if (!loadingImage) {
			return;
		}

		loadingImage.onload = null;
		loadingImage.onerror = null;
		loadingImage = null;

		restoreLightbox();
	}

	function restoreLightbox() {
		if (!lightboxComponents) {
			return;
		}

		ee(container);
		container.className = 'screenshotviewer';
		for (var i = 0; i < lightboxComponents.length; ++i)
			ae(container, lightboxComponents[i]);
		lightboxComponents = null;
	}

	this.checkPound = function () {
		if (location.hash && location.hash.indexOf('#screenshots') == 0) {
			if (!g_listviews['screenshots']) { // Standalone screenshot viewer
				var parts = location.hash.split(':');
				if (parts.length == 3) {
					var
                        collection = g_screenshots[parts[1]],
                        p = parseInt(parts[2]);

                    if (collection && p >= 1 && p <= collection.length) {
						ScreenshotViewer.show({
							screenshots: parts[1],
							pos: p - 1
						});
					}
				}
			}
		}
	}

	this.show = function (opt) {
		Lightbox.show('screenshotviewer', {
			onShow: onShow,
			onHide: onHide,
			onResize: onResize
		}, opt);
    }

	DomContentLoaded.addEvent(this.checkPound)
};

var Dialog = function () {
var
    _self = this,
	_template,
	_onSubmit = null,
    _templateName,

    _funcs = {},
	_data,

	_inited = false,
    _form = ce('form'),
	_elements = {};

	_form.onsubmit = function () {
		_processForm();
		return false
	};

	this.show = function (template, opt) {
		if (template) {
			_templateName = template;
			_template = Dialog.templates[_templateName];
			_self.template = _template;
		}
        else {
			return;
		}

		if (_template.onInit && !_inited) {
            (_template.onInit.bind(_self, _form, opt))();
		}

		if(opt.onBeforeShow) {
			_funcs.onBeforeShow = opt.onBeforeShow.bind(_self, _form);
        }

		if(_template.onBeforeShow) {
			_template.onBeforeShow = _template.onBeforeShow.bind(_self, _form);
        }

		if(opt.onShow) {
			_funcs.onShow = opt.onShow.bind(_self, _form);
        }

		if (_template.onShow) {
			_template.onShow = _template.onShow.bind(_self, _form);
		}

		if(opt.onHide) {
			_funcs.onHide = opt.onHide.bind(_self, _form);
        }

		if(_template.onHide) {
			_template.onHide = _template.onHide.bind(_self, _form);
        }

		if (opt.onSubmit) {
			_funcs.onSubmit = opt.onSubmit;
		}

		if(_template.onSubmit)
			_onSubmit = _template.onSubmit.bind(_self, _form);

		if (opt.data) {
			_inited = false;
			_data = {};
			cO(_data, opt.data);
		}
        _self.data = _data;

		Lightbox.show('dialog-' + _templateName, {
			onShow: _onShow,
			onHide: _onHide
		});
	};

	this.getValue = function (id) {
		return _getValue(id);
	};

	this.setValue = function (id, value) {
		_setValue(id, value);
	};

	this.getSelectedValue = function (id) {
		return _getSelectedValue(id);
	};

	this.getCheckedValue = function (id) {
		return _getCheckedValue(id);
	};

	function _onShow(dest, first) {
		if (first || !_inited) {
			_initForm(dest);
		}

		if(_template.onBeforeShow) {
			_template.onBeforeShow();
        }

		if(_funcs.onBeforeShow) {
			_funcs.onBeforeShow();
        }

		Lightbox.setSize(_template.width, _template.height);
		dest.className = 'dialog';

		_updateForm();

		if (_template.onShow) {
			_template.onShow();
		}

		if(_funcs.onShow) {
			_funcs.onShow();
        }
	}

	function _initForm(dest) {
		ee(dest);
		ee(_form);

		var container = ce('div');
		container.className = 'text';
		ae(dest, container);
		ae(container, _form);
        if (_template.title) {
			var h = ce('h1');
			ae(h, ct(_template.title));
			ae(_form, h);
		}

		var t = ce('table'),
		tb = ce('tbody'),
        mergeCell = false;

		ae(t, tb);
		ae(_form, t);

		for (var i = 0, len = _template.fields.length; i < len; ++i) {
			var
                field = _template.fields[i],
                element;

            if (!mergeCell) {
                tr = ce('tr');
                th = ce('th');
                td = ce('td');
            }

			field.__tr = tr;

			if (_data[field.id] == null) {
				_data[field.id] = (field.value ? field.value: '');
			}

			var options;
			if (field.options) {
				options = [];

				if (field.optorder) {
					cO(options, field.optorder);
                }
				else {
                    for (var j in field.options) {
                        options.push(j);
                    }
				}

				if (field.sort) {
					options.sort(function (a, b) {
						return field.sort * strcmp(field.options[a], field.options[b]);
					});
				}
			}

			switch (field.type) {
                case 'caption':
                    th.colSpan = 2;
                    th.style.textAlign = 'left';
                    th.style.padding = 0;

                    if (field.compute) {
                        (field.compute.bind(_self, null, _data[field.id], _form, th, tr))();
                    }
                    else if (field.label) {
                        ae(th, ct(field.label));
                    }

                    ae(tr, th);
                    ae(tb, tr);

                    continue;
                    break;
                case 'textarea':
                    var f = element = ce('textarea');

                    f.name = field.id;

                    if (field.disabled) {
                        f.disabled = true;
                    }

                    f.rows = field.size[0];
                    f.cols = field.size[1];
                    td.colSpan = 2;

                    if (field.label) {
                        th.colSpan = 2;
                        th.style.textAlign = 'left';
                        th.style.padding = 0;
                        td.style.padding = 0;

                        ae(th, ct(field.label));
                        ae(tr, th);
                        ae(tb, tr);

                        tr = ce('tr');
                    }
                    ae(td, f);

                    break;
                case 'select':

                    var f = element = ce('select');

                    f.name = field.id;

                    if (field.size) {
                        f.size = field.size;
                    }

                    if (field.disabled) {
                        f.disabled = true;
                    }

                    if (field.multiple) {
                        f.multiple = true;
                    }

                    for (var j = 0, len2 = options.length; j < len2; ++j) {
                        var o = ce('option');

                        o.value = options[j];

                        ae(o, ct(field.options[options[j]]));
                        ae(f, o)
                    }

                    ae(td, f);

                    break;
				case 'dynamic':
					td.colSpan = 2;
					td.style.textAlign = 'left';
					td.style.padding = 0;

					if(field.compute)
						(field.compute.bind(_self, null, _data[field.id], _form, td, tr))();

					ae(tr, td);
					ae(tb, tr);

					element = td;

					break;
                case 'checkbox':
                case 'radio':
                    var k = 0;
                    element = [];
                    for (var j = 0, len2 = options.length; j < len2; ++j) {
                        var
                            s = ce('span'),
                            f,
                            l,
                            uniqueId = 'sdfler46' + field.id + '-' + options[j];

                        if (j > 0 && !field.noInputBr) {
                            ae(td, ce('br'));
                        }
                        if (Browser.ie6 && field.type == 'radio') {
                            l = ce("<label for='' + uniqueId + '' onselectstart='return false' />");
                            f = ce("<input type='' + field.type + '' name='' + field.id + '' />");
                        }
                        else {
                            l = ce('label');
                            l.setAttribute('for', uniqueId);
                            l.onmousedown = rf;

                            f = ce('input');
                            f.setAttribute('type', field.type);
                            f.name = field.id;
                        }
                        f.value = options[j];
                        f.id = uniqueId;

                        if (field.disabled) {
                            f.disabled = true;
                        }
                        if (field.submitOnDblClick) {
                            l.ondblclick = f.ondblclick = function (e) {
                                _processForm();
                            };
                        }

                        if (field.compute) {
                            (field.compute.bind(_self, f, _data[field.id], _form, td, tr))();
                        }

                        ae(l, f);
                        ae(l, ct(field.options[options[j]]));
                        ae(td, l);
                        element.push(f);
                    }
                    break;
                default: // Textbox
                    var f = element = ce('input');
                    f.name = field.id;

                    if(field.size) {
                        f.size = field.size;
                    }

                    if (field.disabled) {
                        f.disabled = true ;
                    }

                    if (field.submitOnEnter) {
                        f.onkeypress = function (e) {
                            e = $E(e);
                            if (e.keyCode == 13) {
                                _processForm();
                            }
                        }
                    }
                    f.setAttribute('type', field.type);
                    ae(td, f);
                    break;
			}

			if (field.label) {
				if (field.type == 'textarea') {
					if (field.labelAlign) {
						td.style.textAlign = field.labelAlign;
                    }
					td.colSpan = 2;
				}
                else {
					if(field.labelAlign) {
						th.style.textAlign = field.labelAlign;
                    }
					ae(th, ct(field.label));
					ae(tr, th);
				}
			}

			if (field.type != 'checkbox' && field.type != 'radio') {
				if (field.width) {
					f.style.width = field.width;
				}

				if (field.compute  && field.type != 'caption' && field.type != 'dynamic') {
                    (field.compute.bind(_self, f, _data[field.id], _form, td, tr))();
				}
			}

			if (field.caption) {
				var s = ce('small');
				if(field.type != 'textarea')
					s.style.paddingLeft = '2px';
				s.className = 'q0'; // commented in 5.0?
				ae(s, ct(field.caption));
				ae(td, s);
			}

			ae(tr, td);
			ae(tb, tr);

			mergeCell = field.mergeCell;
			_elements[field.id] = element;
		}

		for (var i = _template.buttons.length; i > 0; --i) {
			var
                button = _template.buttons[i - 1],
                a = ce('a');

            a.href = 'javascript:;';
			a.onclick = _processForm.bind(a, button[0]);
			a.className = 'dialog-' + button[0];
			ae(a, ct(button[1]));
/* custom for lost buttons texture, no longer in use on 2.5.2012
			a.onclick = _processForm.bind(a, button);
			a.className = 'dialog-' + button;
			var sp = ce('span');
			sp.innerHTML = button;
			ae(a, sp);
end custom */
			ae(dest, a);
		}

		var _ = ce('div');
		_.className = 'clear';
		ae(dest, _);

		_inited = true;
	}

	function _updateForm() {
		for (var i = 0, len = _template.fields.length; i < len; ++i) {
			var
                field = _template.fields[i],
                f     = _elements[field.id];

			switch (field.type) {
                case 'caption': // Do nothing
                    break;
                case 'select':
                    for (var j = 0, len2 = f.options.length; j < len2; j++) {
                        f.options[j].selected = (f.options[j].value == _data[field.id] || in_array(_data[field.id], f.options[j].value) != -1);
                    }
                    break;
                case 'checkbox':
                case 'radio':
                    for (var j = 0, len2 = f.length; j < len2; j++) {
                        f[j].checked = (f[j].value == _data[field.id] || in_array(_data[field.id], f[j].value) != -1);
                    }
                    break;

                default:
                    f.value = _data[field.id];
                    break;
			}

			if (field.update) {
				(field.update.bind(_self, null, _data[field.id], _form, f))();
            }
		}
	}

	function _onHide() {
		if(_template.onHide)
			_template.onHide();
		if(_funcs.onHide)
			_funcs.onHide();
	}

	function _processForm(button) {
		// if (button == 'x') { // Special case
		if (button == 'cancel') { // Special case
			return Lightbox.hide();
		}

		for (var i = 0, len = _template.fields.length; i < len; ++i) {
			var
            field = _template.fields[i],
			newValue;

			switch (field.type) {
                case 'caption': // Do nothing
                    continue;
                case 'select':
                    newValue = _getSelectedValue(field.id);
                    break;
                case 'checkbox':
                case 'radio':
                    newValue = _getCheckedValue(field.id);
                    break;
				case 'dynamic':
					if (field.getValue) {
						newValue = field.getValue(field, _data, _form);
						break;
					}
                default:
                    newValue = _getValue(field.id);
                    break;
			}
			if (field.validate) {
				if (!field.validate(newValue, _data, _form)) {
					return;
				}
			}

			if (newValue && typeof newValue == 'string') {
				newValue = trim(newValue);
			}
			_data[field.id] = newValue;
		}

		_submitData(button);
	}

	function _submitData(button) {
		var ret;

		if(_onSubmit) {
			ret = _onSubmit(_data, button, _form);
        }

		if (_funcs.onSubmit) {
			ret = _funcs.onSubmit(_data, button, _form);
		}

		if(ret === undefined || ret)
            Lightbox.hide();

            return false;
	}

	function _getValue(id) {
		return _elements[id].value;
	}

	function _setValue(id, value) {
		_elements[id].value = value;
	}

	function _getSelectedValue(id) {
		var
            result = [],
            f = _elements[id];

            for (var i = 0, len = f.options.length; i < len; i++) {
			if (f.options[i].selected) {
				result.push(parseInt(f.options[i].value) == f.options[i].value ? parseInt(f.options[i].value) : f.options[i].value);
			}
		}
		if (result.length == 1) {
			result = result[0];
		}
		return result;
	}

	function _getCheckedValue(id) {
		var
            result = [],
            f      = _elements[id];
		for (var i = 0, len = f.length; i < len; i++) {
			if (f[i].checked) {
				result.push(parseInt(f[i].value) == f[i].value ? parseInt(f[i].value) : f[i].value);
			}
		}

		return result;
	}
};
Dialog.templates = {};
var ContactTool = new
function () {
	this.general = 0;
	this.comment = 1;
	this.post = 2;
	this.screenshot = 3;
	this.character = 4;
	this.video = 5;
	var d;
	var c = {
		0 : [[1, true], [2, true], [8, true], [3, true], [4, true], [5, true], [6, true], [7, true]],
		1 : [[15, function (f) {
			return ((f.roles & U_GROUP_MODERATOR) == 0)
		}], [16, true], [17, true], [18, function (f) {
			return ((f.roles & U_GROUP_MODERATOR) == 0)
		}], [19, function (f) {
			return ((f.roles & U_GROUP_MODERATOR) == 0)
		}], [20, function (f) {
			return ((f.roles & U_GROUP_MODERATOR) == 0)
		}]],
		2 : [[30, function (f) {
			return (g_users && g_users[f.user] && (g_users[f.user].roles & U_GROUP_MODERATOR) == 0)
		}], [37, function (f) {
			return ((f.roles & U_GROUP_MODERATOR) == 0 && g_users && g_users[f.user] && (g_users[f.user].roles & U_GROUP_MODERATOR) == 0 && g_users[f.user].avatar == 2)
		}], [31, true], [32, true], [33, function (f) {
			return (g_users && g_users[f.user] && (g_users[f.user].roles & U_GROUP_MODERATOR) == 0)
		}], [34, function (f) {
			return (g_users && g_users[f.user] && (g_users[f.user].roles & U_GROUP_MODERATOR) == 0 && f.op && !f.sticky)
		}], [35, function (f) {
			return (g_users && g_users[f.user] && (g_users[f.user].roles & U_GROUP_MODERATOR) == 0)
		}], [36, function (f) {
			return (g_users && g_users[f.user] && (g_users[f.user].roles & U_GROUP_MODERATOR) == 0)
		}]],
		3 : [[45, true], [46, true], [47, function (f) {
			return (g_users && g_users[f.user] && (g_users[f.user].roles & U_GROUP_MODERATOR) == 0)
		}], [48, function (f) {
			return (g_users && g_users[f.user] && (g_users[f.user].roles & U_GROUP_MODERATOR) == 0)
		}]],
		4 : [[60, true], [61, true]],
		5 : [[45, true], [46, true], [47, function (f) {
			return (g_users && g_users[f.user] && (g_users[f.user].roles & U_GROUP_MODERATOR) == 0)
		}], [48, function (f) {
			return (g_users && g_users[f.user] && (g_users[f.user].roles & U_GROUP_MODERATOR) == 0)
		}]]
	};
	var b = {
		1 : LANG.ct_resp_error1,
		2 : LANG.ct_resp_error2,
		3 : LANG.ct_resp_error3,
		7 : LANG.ct_resp_error7
	};
	var a = null;
	this.displayError = function (g, f) {
		alert(f)
	};
	this.onShow = function () {
		if (location.hash && location.hash != "#contact") {
			a = location.hash
		}
		if (this.data.mode == 0) {
			location.replace("#contact")
		}
	};
	this.onHide = function () {
		if (a && (a.indexOf("screenshots:") == -1 || a.indexOf("videos:") == -1)) {
			location.replace(a)
		} else {
			location.replace("#.")
		}
	};
	this.onSubmit = function (k, g, j) {
		if (k.submitting) {
			return false
		}
		for (var h = 0; h < j.elements.length; ++h) {
			j.elements[h].disabled = true
		}
		var l = ["contact=1", "mode=" + urlencode(k.mode), "reason=" + urlencode(k.reason), "desc=" + urlencode(k.description), "ua=" + urlencode(navigator.userAgent), "appname=" + urlencode(navigator.appName), "page=" + urlencode(k.currenturl)];
		if (k.mode == 0) {
			if (k.relatedurl) {
				l.push("relatedurl=" + urlencode(k.relatedurl))
			}
			if (k.email) {
				l.push("email=" + urlencode(k.email))
			}
			if (!k.skipCaptcha) {
				l.push("captcharesponse=" + urlencode(k.captcha_response));
				l.push("captchachallenge=" + urlencode(k.captcha_challenge))
			} else {
				l.push("skipcaptcha=1")
			}
		} else {
			if (k.mode == 1) {
				l.push("id=" + urlencode(k.comment.id))
			} else {
				if (k.mode == 2) {
					l.push("id=" + urlencode(k.post.id))
				} else {
					if (k.mode == 3) {
						l.push("id=" + urlencode(k.screenshot.id))
					} else {
						if (k.mode == 4) {
							l.push("id=" + urlencode(k.profile.source))
						} else {
							if (k.mode == 5) {
								l.push("id=" + urlencode(k.video.id))
							}
						}
					}
				}
			}
		}
		k.submitting = true;
		var f = "?contactus";
		new Ajax(f, {
			method: "POST",
			params: l.join("&"),
			onSuccess: function (n, i) {
				var m = n.responseText;
				if (m == 0) {
					if (g_user.name) {
						alert(sprintf(LANG.ct_dialog_thanks_user, g_user.name))
					} else {
						alert(LANG.ct_dialog_thanks)
					}
					Lightbox.hide()
				} else {
					if (b[m]) {
						alert(b[m])
					} else {
						alert("Error: " + m)
					}
				}
			},
			onFailure: function (m, i) {
				alert("Failure submitting contact request: " + m.statusText)
			},
			onComplete: function (o, n) {
				for (var m = 0; m < j.elements.length; ++m) {
					j.elements[m].disabled = false
				}
				k.submitting = false
			}
		});
		return false
	};
	this.show = function (f) {
		if (!f) {
			f = {}
		}
		var h = {
			mode: 0
		};
		cO(h, f);
		h.reasons = c[h.mode];
		if (location.href.indexOf("#contact") != -1) {
			h.currenturl = location.href.substr(0, location.href.indexOf("#contact"))
		} else {
			h.currenturl = location.href
		}
		var g = "contactus";
		if (h.mode != 0) {
			g = "reportform"
		}
		if (!d) {
			this.init()
		}
		d.show(g, {
			data: h,
			onShow: this.onShow,
			onHide: this.onHide,
			onSubmit: this.onSubmit
		})
	};
	this.checkPound = function () {
		if (location.hash && location.hash == "#contact") {
			ContactTool.show()
		}
	};
	var e = LANG.ct_dialog_contactwowhead;
	this.init = function () {
		d = new Dialog();
		Dialog.templates.contactus = {
			title: e,
			width: 550,
			buttons: [["okay", LANG.dialog_ok], ["cancel", LANG.dialog_cancel]],
			fields: [{
				id: "reason",
				type: "select",
				label: LANG.ct_dialog_reason,
				required: 1,
				options: [],
				compute: function (n, p, h, l) {
					ee(n);
					for (var m = 0; m < this.data.reasons.length; ++m) {
						var j = this.data.reasons[m][0];
						var g = this.data.reasons[m][1];
						var f = false;
						if (typeof g == "function") {
							f = g(this.extra)
						} else {
							f = g
						}
						if (!f) {
							continue
						}
						var k = ce("option");
						k.value = j;
						if (p && p == j) {
							k.selected = true
						}
						ae(k, ct(g_contact_reasons[j]));
						ae(n, k)
					}
					n.onchange = function () {
						if (this.value == 1 || this.value == 2 || this.value == 3) {
							h.currenturl.parentNode.parentNode.style.display = "";
							h.relatedurl.parentNode.parentNode.style.display = ""
						} else {
							h.currenturl.parentNode.parentNode.style.display = "none";
							h.relatedurl.parentNode.parentNode.style.display = "none"
						}
					}.bind(n);
					l.style.width = "98%"
				},
				validate: function (i, h, g) {
					var f = "";
					if (!i || i.length == 0) {
						f = LANG.ct_dialog_error_reason
					}
					if (f == "") {
						return true
					}
					ContactTool.displayError(g.reason, f);
					g.reason.focus();
					return false
				}
			},
			{
				id: "currenturl",
				type: "text",
				disabled: true,
				label: LANG.ct_dialog_currenturl,
				size: 40
			},
			{
				id: "relatedurl",
				type: "text",
				label: LANG.ct_dialog_relatedurl,
				caption: LANG.ct_dialog_optional,
				size: 40,
				validate: function (j, i, h) {
					var g = "";
					var f = /^(http(s?)\:\/\/|\/)?([\w]+:\w+@)?([a-zA-Z]{1}([\w\-]+\.)+([\w]{2,5}))(:[\d]{1,5})?((\/?\w+\/)+|\/?)(\w+\.[\w]{3,4})?((\?\w+=\w+)?(&\w+=\w+)*)?/;
					j = j.trim();
					if (j.length >= 250) {
						g = LANG.ct_dialog_error_relatedurl
					} else {
						if (j.length > 0 && !f.test(j)) {
							g = LANG.ct_dialog_error_invalidurl
						}
					}
					if (g == "") {
						return true
					}
					ContactTool.displayError(h.relatedurl, g);
					h.relatedurl.focus();
					return false
				}
			},
			{
				id: "email",
				type: "text",
				label: LANG.ct_dialog_email,
				caption: LANG.ct_dialog_email_caption,
				compute: function (j, i, g, k, h) {
					if (g_user.email) {
						this.data.email = g_user.email;
						h.style.display = "none"
					} else {
						var f = function () {
							ge("contact-emailwarn").style.display = g_isEmailValid(ge(g.email).value) ? "none": "";
							Lightbox.reveal()
						};
						ge(j).onkeyup = f;
						ge(j).onblur = f;
					}
				},
				validate: function (i, h, g) {
					var f = "";
					i = i.trim();
					if (i.length >= 100) {
						f = LANG.ct_dialog_error_emaillen
					} else {
						if (i.length > 0 && !g_isEmailValid(i)) {
							f = LANG.ct_dialog_error_email
						}
					}
					if (f == "") {
						return true
					}
					ContactTool.displayError(g.email, f);
					g.email.focus();
					return false
				}
			},
			{
				id: "description",
				type: "textarea",
				caption: LANG.ct_dialog_desc_caption,
				width: "98%",
				required: 1,
				size: [10, 30],
				validate: function (i, h, g) {
					var f = "";
					i = i.trim();
					if (i.length == 0 || i.length > 10000) {
						f = LANG.ct_dialog_error_desc
					}
					if (f == "") {
						return true
					}
					ContactTool.displayError(g.description, f);
					g.description.focus();
					return false
				}
			},
			{
				id: "noemailwarning",
				type: "caption",
				compute: function (h, g, f, i) {
					var e = ge(i);
                    e.innerHTML = '<span id="contact-emailwarn" class="q10"' + (g_user.email ? ' style="display: none"': "") + ">" + LANG.ct_dialog_noemailwarning + "</span>";
                    e.style.whiteSpace = "normal";
                    e.style.padding = "0 4px";
				}
			},
        /* Captcha.. why..?
			{
				id: "captcha_response",
				type: "dynamic",
				compute: function (i, h, f, j, g) {
					if (!g_requireCaptcha()) {
						this.data.skipCaptcha = true;
						return
					}
					if (g_captchaType == 1) {
						ge(j).style.height = "130px";
					} else {
						ge(j).style.height = "75px")
					}
				},
				update: function (i, h, f, k, g) {
					if (this.data.skipCaptcha) {
						return
					}
					var j = $("<div/>", {
						id: "shjlfwhseo3w"
					});
					k = ge(k);
					ae(k,j);
					g_revealCaptcha("shjlfwhseo3w")
				},
				getValue: function (h, g, f) {
					if (g_captchaType == 1) {
						return Recaptcha.get_response()
					} else {
						return $("input[name=captcha]", f).val()
					}
				},
				validate: function (i, h, g) {
					var f = "";
					if (typeof i == "string") {
						i = trim(i)
					}
					if (!h.skipCaptcha && !i) {
						f = LANG.ct_dialog_error_captcha
					}
					if (f == "") {
						return true
					}
					ContactTool.displayError(null, f);
					if (g_captchaType == 1) {
						Recaptcha.focus_response_field()
					} else {
						$("input[name=captcha]", g).focus()
					}
					return false
				}
			},
			{
				id: "captcha_challenge",
				type: "dynamic",
				compute: function (i, h, f, j, g) {},
				getValue: function (h, g, f) {
					if (g_captchaType == 1) {
						return Recaptcha.get_challenge()
					} else {
						return $("input[name=captcha]", f).val()
					}
				}
			}
        */
            ],
			onInit: function (f) {},
			onShow: function (f) {
				if (this.data.focus && f[this.data.focus]) {
					setTimeout(g_setCaretPosition.bind(null, f[this.data.focus], f[this.data.focus].value.length), 100)
				} else {
					if (f.reason && !f.reason.value) {
						setTimeout(bindfunc(f.reason.focus, f.reason), 10)
					} else {
						if (f.relatedurl && !f.relatedurl.value) {
							setTimeout(bindfunc(f.relatedurl.focus, f.relatedurl), 10)
						} else {
							if (f.email && !f.email.value) {
								setTimeout(bindfunc(f.email.focus, f.email), 10)
							} else {
								if (f.description && !f.description.value) {
									setTimeout(bindfunc(f.description.focus, f.description), 10)
								} else {
									if (f.captcha && !f.captcha.value) {
										setTimeout(bindfunc(f.captcha.focus, f.captcha), 10)
									}
								}
							}
						}
					}
				}
				setTimeout(Lightbox.reveal, 250)
			}
		};
		Dialog.templates.reportform = {
			title: LANG.ct_dialog_report,
			width: 550,
            height: 360,
			buttons: [["okay", LANG.dialog_ok], ["cancel", LANG.dialog_cancel]],
			fields: [{
				id: "reason",
				type: "select",
				label: LANG.ct_dialog_reason,
				options: [],
				compute: function (q, r, h, m) {
					switch (this.data.mode) {
					case 1:
						h.firstChild.innerHTML = sprintf(LANG.ct_dialog_reportcomment, '<a href="?user=' + this.data.comment.user + '">' + this.data.comment.user + "</a>");
						break;
					case 2:
						var p = '<a href="?user=' + this.data.post.user + '">' + this.data.post.user + "</a>";
						if (this.data.post.op) {
							h.firstChild.innerHTML = sprintf(LANG.ct_dialog_reporttopic, p)
						} else {
							h.firstChild.innerHTML = sprintf(LANG.ct_dialog_reportpost, p)
						}
						break;
					case 3:
						h.firstChild.innerHTML = sprintf(LANG.ct_dialog_reportscreen, '<a href="?user=' + this.data.screenshot.user + '">' + this.data.screenshot.user + "</a>");
						break;
					case 4:
						ee(h.firstChild);
						ae(h.firstChild, ct(LANG.ct_dialog_reportchar));
						break;
					case 5:
						h.firstChild.innerHTML = sprintf(LANG.ct_dialog_reportvideo, '<a href="?user=' + this.data.video.user + '">' + this.data.video.user + "</a>");
						break
					}
					h.firstChild.setAttribute("style", "");
					ee(q);
					var l;
					if (this.data.mode == 1) {
						l = this.data.comment
					} else {
						if (this.data.mode == 2) {
							l = this.data.post
						} else {
							if (this.data.mode == 3) {
								l = this.data.screenshot
							} else {
								if (this.data.mode == 4) {
									l = this.data.profile
								} else {
									if (this.data.mode == 5) {
										l = this.data.video
									}
								}
							}
						}
					}
					ae(q, ce("option", {
						selected: (!r),
						value: -1
					}));
					for (var n = 0; n < this.data.reasons.length; ++n) {
						var j = this.data.reasons[n][0];
						var g = this.data.reasons[n][1];
						var f = false;
						if (typeof g == "function") {
							f = g(l)
						} else {
							f = g
						}
						if (!f) {
							continue
						}
						var k = ce("option");
						k.value = j;
						if (r && r == j) {
							k.selected = true
						}
						ae(k, ct(g_contact_reasons[j]));
						ae(q, k)
					}
					m.style.width = "98%"
				},
				validate: function (i, h, g) {
					var f = "";
					if (!i || i == -1 || i.length == 0) {
						f = LANG.ct_dialog_error_reason
					}
					if (f == "") {
						return true
					}
					ContactTool.displayError(g.reason, f);
					g.reason.focus();
					return false
				}
			},
			{
				id: "description",
				type: "textarea",
				caption: LANG.ct_dialog_desc_caption,
				width: "98%",
				required: 1,
				size: [10, 30],
				validate: function (i, h, g) {
					var f = "";
					i = i.trim();
					if (i.length == 0 || i.length > 10000) {
						f = LANG.ct_dialog_error_desc
					}
					if (f == "") {
						return true
					}
					ContactTool.displayError(g.description, f);
					g.description.focus();
					return false
				}
			}],
			onInit: function (f) {},
			onShow: function (g) {
				var h = gE(g, 'select')[0];
				var f = gE(g, 'textarea')[0];
				if (this.data.focus && g[this.data.focus]) {
					setTimeout(g_setCaretPosition.bind(null, g[this.data.focus], g[this.data.focus].value.length), 100)
				} else {
					if (!h.value) {
						setTimeout(bindfunc(h.focus, h), 10)
					} else {
						if (!f.value) {
							setTimeout(bindfunc(f.focus, f), 10)
						}
					}
				}
			}
		}
	};
	DomContentLoaded.addEvent(this.checkPound)
};

var Links = new function()
{
	var dialog = null;
	var oldHash = null;

	var validArmoryTypes = {
		item: 1
	};

	this.onShow = function()
	{
		if(location.hash && location.hash != '#links')
			oldHash = location.hash;
		location.replace('#links');
	}

	this.onHide = function()
	{
		if(oldHash && (oldHash.indexOf('screenshots:') == -1 || oldHash.indexOf('videos:') == -1))
			location.replace(oldHash);
		else
			location.replace('#.');
	}

	this.show = function(opt)
	{
		if (!opt || !opt.type || !opt.typeId)
			return;

		var type = g_types[opt.type];

		if(!dialog)
			this.init();

		if (validArmoryTypes[type] && Dialog.templates.links.fields[1].id != 'armoryurl')
		{
			Dialog.templates.links.fields.splice(1, 0, {
				id: 'armoryurl',
				type: 'text',
				label: 'Armory URL',
				size: 40
			});
		}

		var link = '';
		if (opt.linkColor && opt.linkId && opt.linkName)
		{
			link = g_getIngameLink(opt.linkColor, opt.linkId, opt.linkName);

			if (Dialog.templates.links.fields[Dialog.templates.links.fields.length - 2].id != 'ingamelink')
			{
				Dialog.templates.links.fields.splice(Dialog.templates.links.fields.length - 1, 0, {
					id: 'ingamelink',
					type: 'text',
					label: 'Ingame Link',
					size: 40
				});
			}
		}

		var data = {
			'wowheadurl': g_staticUrl +'?' + type + '=' + opt.typeId,
			'armoryurl': 'http://us.battle.net/wow/en/' + type + '/' + opt.typeId,
			'ingamelink': link,
			'markuptag': '[' + type + '=' + opt.typeId + ']'
		};

		dialog.show('links', {
            data: data,
            onShow: this.onShow,
            onHide: this.onHide,
            onSubmit: function() {
                return false;
            }
        });
	}

	this.checkPound = function()
	{
		if(location.hash && location.hash == '#links')
		{
			ge('open-links-button').click();
		}
	}

	this.init = function()
	{
		dialog = new Dialog();

		Dialog.templates.links = {
			title: LANG.pr_menu_links || 'Links',
			width: 425,
			buttons: [['cancel', LANG.close]],

			fields:
				[
					{
						id: 'wowheadurl',
						type: 'text',
						label: 'Aowow URL',
						size: 40
					},
					{
						id: 'markuptag',
						type: 'text',
						label: 'Markup Tag',
						size: 40
					}
				],

			onInit: function(form)
			{

			},

			onShow: function(form)
			{
				setTimeout(function() {
					document.getElementsByName('ingamelink')[0].select();
				}, 50);
				setTimeout(Lightbox.reveal, 100);
			}
		};
	};

	DomContentLoaded.addEvent(this.checkPound)
};

var Announcement = function(opt)
{
	if (!opt)
		opt = {};

	cO(this, opt);

	if (this.parent)
		this.parentDiv = ge(this.parent);
	else
		return;

	if (g_user.id == 0 && gc('announcement-' + this.id) == 'closed')
		return;

	this.initialize();
};

Announcement.prototype = {
	initialize: function()
	{
		// this.parentDiv.style.display = 'none';
		this.parentDiv.style.opacity = '0';
		// this.parentDiv.style.height = '0px';
        /* replaced with..*/

		if (this.mode === undefined || this.mode == 1)
			this.parentDiv.className = 'announcement announcement-contenttop';
		else
			this.parentDiv.className = 'announcement announcement-pagetop';

		var div = this.innerDiv = ce('div');
		div.className = 'announcement-inner text';
		this.setStyle(this.style);

		var a = null;
		var id = parseInt(this.id);

		if(g_user && (g_user.roles & (U_GROUP_ADMIN|U_GROUP_BUREAU)) > 0 && Math.abs(id) > 0)
		{
			if(id < 0)
			{
				a = ce('a');
				a.style.cssFloat = a.style.styleFloat = 'right';
				a.href = '?admin=announcements&id=' + Math.abs(id) + '&status=2';
				a.onclick = function() { return confirm('Are you sure you want to delete ' + this.name + '?'); };
				ae(a, ct('Delete'));
				var small = ce('small');
				ae(small, a);
				ae(div, small);

				a = ce('a');
				a.style.cssFloat = a.style.styleFloat = 'right';
				a.style.marginRight = '10px';
				a.href = '?admin=announcements&id=' + Math.abs(id) + '&status=' + (this.status == 1 ? 0 : 1);
				a.onclick = function() { return confirm('Are you sure you want to delete ' + this.name + '?'); };
				ae(a, ct((this.status == 1 ? 'Disable' : 'Enable')));
				var small = ce('small');
				ae(small, a);
				ae(div, small);
			}

			a = ce('a');
			a.style.cssFloat = a.style.styleFloat = 'right';
			a.style.marginRight = '22px';
			a.href = '?admin=announcements&id=' + Math.abs(id) + '&edit';
			ae(a, ct('Edit announcement'));
			var small = ce('small');
			ae(small, a);
			ae(div, small);
		}

		var markupDiv = ce('div');
		markupDiv.id = this.parent + '-markup';
		ae(div, markupDiv);

		if(id >= 0)
		{
			a = ce('a');

			a.id = 'closeannouncement';
			a.href = 'javascript:;';
			a.className = 'announcement-close';
			if(this.nocookie)
				a.onclick = this.hide.bind(this);
			else
				a.onclick = this.markRead.bind(this);
			ae(div, a);
			g_addTooltip(a, LANG.close);
		}

		ae(div, ce('div', { style: { clear: 'both' } }));

		ae(this.parentDiv, div);

		this.setText(this.text);

		setTimeout(this.show.bind(this), 500); // Delay to avoid visual lag
	},
	show: function()
	{
		// $(this.parentDiv).animate({
			// opacity: 'show',
			// height: 'show'
		// },{
			// duration: 333
		// });
        // this.parentDiv.style.display = 'block';

        // todo: iron out the quirks
        this.parentDiv.style.opacity = '100';
        this.parentDiv.style.height = (this.parentDiv.offsetHeight + 10) + 'px'; // + margin-bottom of child
	},
	hide: function()
	{
		// $(this.parentDiv).animate({
			// opacity: 'hide',
			// height: 'hide'
		// },{
			// duration: 200
		// });
        // this.parentDiv.style.display = 'none';

        // todo: iron out the quirks
        this.parentDiv.style.opacity = '0';
        this.parentDiv.style.height = '0px';
        setTimeout(function() {
            this.parentDiv.style.display = 'none';
        }.bind(this), 400);
	},
	markRead: function()
	{
		// g_setWowheadCookie('announcement-' + this.id, 'closed');
		sc('announcement-' + this.id, 20, 'closed', "/", location.hostname);
		this.hide();
	},
	setStyle: function(style)
	{
		this.style = style;
		this.innerDiv.setAttribute('style', style);
	},
	setText: function(text)
	{
		this.text = text;
		// Markup.printHtml(this.text, this.parent + '-markup');
        ge(this.parent + '-markup').innerHTML = this.text;
	}
};