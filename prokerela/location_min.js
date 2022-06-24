var a, b;
(a = this),
    (b = function () {
        "use strict";
        function r(t) {
            return (r =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function n(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
        }
        function e(e, t) {
            var o,
                n = Object.keys(e);
            return (
                Object.getOwnPropertySymbols &&
                    ((o = Object.getOwnPropertySymbols(e)),
                    t &&
                        (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                    n.push.apply(n, o)),
                n
            );
        }
        function c(n) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? e(Object(i), !0).forEach(function (t) {
                          var e, o;
                          (e = n), (t = i[(o = t)]), o in e ? Object.defineProperty(e, o, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[o] = t);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                    : e(Object(i)).forEach(function (t) {
                          Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(i, t));
                      });
            }
            return n;
        }
        function a(t, e) {
            return (
                (function (t) {
                    if (Array.isArray(t)) return t;
                })(t) ||
                (function (t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var o = [],
                        n = !0,
                        i = !1,
                        r = void 0;
                    try {
                        for (var c, a = t[Symbol.iterator](); !(n = (c = a.next()).done) && (o.push(c.value), !e || o.length !== e); n = !0);
                    } catch (t) {
                        (i = !0), (r = t);
                    } finally {
                        try {
                            n || null == a.return || a.return();
                        } finally {
                            if (i) throw r;
                        }
                    }
                    return o;
                })(t, e) ||
                (function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return i(t, e);
                    var o = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === o && t.constructor && (o = t.constructor.name);
                    if ("Map" === o || "Set" === o) return Array.from(t);
                    if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return i(t, e);
                })(t, e) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function i(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
            return n;
        }
        var l = "prokerala-client-token",
            s = "prokerala-location",
            u = { theme: "theme-light", minChars: 3, limit: 20, clientId: "", persistKey: "" },
            d = {
                white:
                    '<svg xmlns="http://www.w3.org/2000/svg" style="display: block!important;" viewBox="0 0 854 242">\n    <path fill="#FFF" d="M132.21 85.09h13.71v15.24c4.09-6.01 8.4-10.5 12.94-13.47 4.54-2.97 9.27-4.46 14.19-4.46 3.71 0 7.67 1.18 11.89 3.55l-7 11.31c-2.81-1.21-5.18-1.82-7.09-1.82-4.47 0-8.79 1.84-12.94 5.51-4.16 3.68-7.32 9.38-9.49 17.11-1.66 5.94-2.49 17.96-2.49 36.05v35.28h-13.71l-.01-104.3z"/>\n    <path fill="#FFF" d="M223.88 82.4c16.07 0 29.39 5.82 39.95 17.45 9.6 10.61 14.41 23.17 14.41 37.68 0 14.57-5.08 27.31-15.22 38.21-10.15 10.9-23.2 16.35-39.14 16.35-16.01 0-29.09-5.45-39.23-16.35-10.15-10.9-15.22-23.63-15.22-38.21 0-14.44 4.8-26.97 14.41-37.58 10.55-11.7 23.9-17.55 40.04-17.55zm-.05 13.14c-11.16 0-20.75 4.12-28.77 12.37-8.02 8.24-12.03 18.22-12.03 29.91 0 7.54 1.83 14.57 5.48 21.09 3.66 6.52 8.59 11.55 14.82 15.1 6.22 3.55 13.05 5.32 20.49 5.32s14.27-1.77 20.49-5.32 11.16-8.58 14.82-15.1 5.48-13.55 5.48-21.09c0-11.7-4.03-21.67-12.08-29.91-8.03-8.25-17.6-12.37-28.7-12.37zM452.76 154.79l11.31 5.94c-3.71 7.29-8 13.17-12.86 17.64s-10.33 7.88-16.41 10.21c-6.08 2.33-12.96 3.5-20.63 3.5-17.02 0-30.32-5.58-39.92-16.73s-14.39-23.76-14.39-37.82c0-13.23 4.06-25.02 12.19-35.38 10.3-13.17 24.09-19.75 41.36-19.75 17.78 0 31.99 6.74 42.61 20.23 7.55 9.52 11.39 21.41 11.52 35.67h-93.86c.25 12.12 4.13 22.05 11.61 29.8 7.49 7.75 16.73 11.62 27.74 11.62 5.31 0 10.48-.92 15.5-2.77s9.29-4.3 12.81-7.35c3.51-3.06 7.32-8 11.42-14.81zm0-28.09c-1.79-7.16-4.4-12.88-7.82-17.16-3.42-4.28-7.95-7.73-13.58-10.35-5.63-2.62-11.55-3.93-17.76-3.93-10.24 0-19.04 3.29-26.4 9.88-5.38 4.79-9.44 11.98-12.19 21.57l77.75-.01zM481.39 85.09h13.71v15.24c4.09-6.01 8.4-10.5 12.94-13.47s9.27-4.46 14.19-4.46c3.71 0 7.67 1.18 11.89 3.55l-7 11.31c-2.81-1.21-5.18-1.82-7.09-1.82-4.47 0-8.79 1.84-12.94 5.51-4.16 3.68-7.32 9.38-9.49 17.11-1.66 5.94-2.49 17.96-2.49 36.05v35.28H481.4l-.01-104.3z"/>\n    <path fill="#FFF" d="M626.33 85.09V189.4H613.1v-17.93c-5.63 6.84-11.94 11.98-18.94 15.44-7 3.45-14.65 5.18-22.96 5.18-14.76 0-27.37-5.35-37.82-16.06-10.45-10.7-15.68-23.73-15.68-39.07 0-15.02 5.27-27.87 15.82-38.54s23.23-16.01 38.06-16.01c8.57 0 16.31 1.82 23.25 5.47 6.93 3.64 13.02 9.11 18.26 16.39V85.09h13.24zm-53.64 10.26c-7.47 0-14.37 1.84-20.69 5.51-6.32 3.67-11.35 8.83-15.08 15.47-3.73 6.64-5.6 13.66-5.6 21.07 0 7.34 1.88 14.37 5.65 21.07 3.77 6.7 8.83 11.92 15.18 15.66s13.17 5.6 20.45 5.6c7.34 0 14.3-1.85 20.88-5.55 6.57-3.7 11.63-8.71 15.18-15.03 3.54-6.32 5.32-13.44 5.32-21.36 0-12.07-3.97-22.15-11.92-30.26-7.97-8.13-17.75-12.18-29.37-12.18zM119.25 62.7c-5.11-6.17-11.7-10.24-19.75-12.22-5.4-1.35-15.66-2.05-30.74-2.1l-10.63 13.8h19.7c9.52 0 16.38.83 20.56 2.49 4.19 1.66 7.56 4.45 10.11 8.37 2.56 3.92 3.84 8.24 3.84 12.96 0 4.85-1.28 9.24-3.84 13.16-2.56 3.92-6.07 6.76-10.55 8.52-4.47 1.75-11.54 2.63-21.19 2.63l-23.87-.29V68.96L38.8 87.26V189.4h14.09v-65.58h10.07c17.51 0 29.46-.77 35.86-2.3 8.76-2.11 15.63-6.22 20.61-12.32 4.99-6.1 7.48-13.85 7.48-23.25.01-9.33-2.54-17.08-7.66-23.25z"/>\n    <path fill="#FDCD08" d="M62.84 48.37H38.82v31.12zM298.73 58.28V44.82h-13.42v30.84z"/>\n    <path fill="#FFF" d="M309.47 134.85l57.33-49.76h-19.71l-48.36 42.1v-61.2l-13.42 17.43V189.4h13.42v-46.97l52.54 46.97h18.89z"/>\n    <path fill="#FDCD08" d="M655.73 60.89V44.82h-13.42v33.45z"/>\n    <path fill="#FFF" d="M642.31 86.03V189.4h13.42V68.6zM769.37 165.69c0-4.96 2.68-9.29 6.66-11.65V85.09H762.8v19.17c-5.24-7.29-11.33-12.75-18.26-16.39-6.94-3.64-14.68-5.47-23.25-5.47-14.83 0-27.52 5.34-38.06 16.01-10.55 10.67-15.82 23.52-15.82 38.54 0 15.34 5.23 28.36 15.68 39.07s23.06 16.06 37.82 16.06c8.31 0 15.96-1.73 22.96-5.18s13.31-8.6 18.94-15.44v17.93h13.23v-12.06c-4-2.35-6.67-6.68-6.67-11.64zm-11.02-6.56c-3.54 6.32-8.6 11.33-15.18 15.03s-13.53 5.55-20.88 5.55c-7.28 0-14.1-1.87-20.45-5.6-6.35-3.73-11.41-8.95-15.18-15.66-3.77-6.7-5.65-13.72-5.65-21.07 0-7.41 1.87-14.43 5.6-21.07s8.76-11.8 15.08-15.47 13.22-5.51 20.69-5.51c11.62 0 21.4 4.06 29.35 12.16 7.95 8.11 11.92 18.2 11.92 30.26.01 7.94-1.76 15.06-5.3 21.38z"/>\n    <path fill="#FDCD08" d="M795.53 165.92c0 6.47-5.24 11.72-11.72 11.72-6.47 0-11.72-5.25-11.72-11.72s5.24-11.72 11.72-11.72c6.47 0 11.72 5.25 11.72 11.72"/>\n  </svg>\n  ',
                black:
                    '<svg xmlns="http://www.w3.org/2000/svg" style="display: block!important;" viewBox="0 0 854 242">\n    <path d="M132.21 85.09h13.71v15.24c4.09-6.01 8.4-10.5 12.94-13.47 4.54-2.97 9.27-4.46 14.19-4.46 3.71 0 7.67 1.18 11.89 3.55l-7 11.31c-2.81-1.21-5.18-1.82-7.09-1.82-4.47 0-8.79 1.84-12.94 5.51-4.16 3.68-7.32 9.38-9.49 17.11-1.66 5.94-2.49 17.96-2.49 36.05v35.28h-13.71l-.01-104.3z"/>\n    <path d="M223.88 82.4c16.07 0 29.39 5.82 39.95 17.45 9.6 10.61 14.41 23.17 14.41 37.68 0 14.57-5.08 27.31-15.22 38.21-10.15 10.9-23.2 16.35-39.14 16.35-16.01 0-29.09-5.45-39.23-16.35-10.15-10.9-15.22-23.63-15.22-38.21 0-14.44 4.8-26.97 14.41-37.58 10.55-11.7 23.9-17.55 40.04-17.55zm-.05 13.14c-11.16 0-20.75 4.12-28.77 12.37-8.02 8.24-12.03 18.22-12.03 29.91 0 7.54 1.83 14.57 5.48 21.09 3.66 6.52 8.59 11.55 14.82 15.1 6.22 3.55 13.05 5.32 20.49 5.32s14.27-1.77 20.49-5.32 11.16-8.58 14.82-15.1 5.48-13.55 5.48-21.09c0-11.7-4.03-21.67-12.08-29.91-8.03-8.25-17.6-12.37-28.7-12.37zM452.76 154.79l11.31 5.94c-3.71 7.29-8 13.17-12.86 17.64s-10.33 7.88-16.41 10.21c-6.08 2.33-12.96 3.5-20.63 3.5-17.02 0-30.32-5.58-39.92-16.73s-14.39-23.76-14.39-37.82c0-13.23 4.06-25.02 12.19-35.38 10.3-13.17 24.09-19.75 41.36-19.75 17.78 0 31.99 6.74 42.61 20.23 7.55 9.52 11.39 21.41 11.52 35.67h-93.86c.25 12.12 4.13 22.05 11.61 29.8 7.49 7.75 16.73 11.62 27.74 11.62 5.31 0 10.48-.92 15.5-2.77s9.29-4.3 12.81-7.35c3.51-3.06 7.32-8 11.42-14.81zm0-28.09c-1.79-7.16-4.4-12.88-7.82-17.16-3.42-4.28-7.95-7.73-13.58-10.35-5.63-2.62-11.55-3.93-17.76-3.93-10.24 0-19.04 3.29-26.4 9.88-5.38 4.79-9.44 11.98-12.19 21.57l77.75-.01zM481.39 85.09h13.71v15.24c4.09-6.01 8.4-10.5 12.94-13.47s9.27-4.46 14.19-4.46c3.71 0 7.67 1.18 11.89 3.55l-7 11.31c-2.81-1.21-5.18-1.82-7.09-1.82-4.47 0-8.79 1.84-12.94 5.51-4.16 3.68-7.32 9.38-9.49 17.11-1.66 5.94-2.49 17.96-2.49 36.05v35.28H481.4l-.01-104.3z"/>\n    <path d="M626.33 85.09V189.4H613.1v-17.93c-5.63 6.84-11.94 11.98-18.94 15.44-7 3.45-14.65 5.18-22.96 5.18-14.76 0-27.37-5.35-37.82-16.06-10.45-10.7-15.68-23.73-15.68-39.07 0-15.02 5.27-27.87 15.82-38.54s23.23-16.01 38.06-16.01c8.57 0 16.31 1.82 23.25 5.47 6.93 3.64 13.02 9.11 18.26 16.39V85.09h13.24zm-53.64 10.26c-7.47 0-14.37 1.84-20.69 5.51-6.32 3.67-11.35 8.83-15.08 15.47-3.73 6.64-5.6 13.66-5.6 21.07 0 7.34 1.88 14.37 5.65 21.07 3.77 6.7 8.83 11.92 15.18 15.66s13.17 5.6 20.45 5.6c7.34 0 14.3-1.85 20.88-5.55 6.57-3.7 11.63-8.71 15.18-15.03 3.54-6.32 5.32-13.44 5.32-21.36 0-12.07-3.97-22.15-11.92-30.26-7.97-8.13-17.75-12.18-29.37-12.18zM119.25 62.7c-5.11-6.17-11.7-10.24-19.75-12.22-5.4-1.35-15.66-2.05-30.74-2.1l-10.63 13.8h19.7c9.52 0 16.38.83 20.56 2.49 4.19 1.66 7.56 4.45 10.11 8.37 2.56 3.92 3.84 8.24 3.84 12.96 0 4.85-1.28 9.24-3.84 13.16-2.56 3.92-6.07 6.76-10.55 8.52-4.47 1.75-11.54 2.63-21.19 2.63l-23.87-.29V68.96L38.8 87.26V189.4h14.09v-65.58h10.07c17.51 0 29.46-.77 35.86-2.3 8.76-2.11 15.63-6.22 20.61-12.32 4.99-6.1 7.48-13.85 7.48-23.25.01-9.33-2.54-17.08-7.66-23.25z"/>\n    <path fill="#FDCD08" d="M62.84 48.37H38.82v31.12zM298.73 58.28V44.82h-13.42v30.84z"/>\n    <path d="M309.47 134.85l57.33-49.76h-19.71l-48.36 42.1v-61.2l-13.42 17.43V189.4h13.42v-46.97l52.54 46.97h18.89z"/>\n    <path fill="#FDCD08" d="M655.73 60.89V44.82h-13.42v33.45z"/>\n    <path d="M642.31 86.03V189.4h13.42V68.6zM769.37 165.69c0-4.96 2.68-9.29 6.66-11.65V85.09H762.8v19.17c-5.24-7.29-11.33-12.75-18.26-16.39-6.94-3.64-14.68-5.47-23.25-5.47-14.83 0-27.52 5.34-38.06 16.01-10.55 10.67-15.82 23.52-15.82 38.54 0 15.34 5.23 28.36 15.68 39.07s23.06 16.06 37.82 16.06c8.31 0 15.96-1.73 22.96-5.18s13.31-8.6 18.94-15.44v17.93h13.23v-12.06c-4-2.35-6.67-6.68-6.67-11.64zm-11.02-6.56c-3.54 6.32-8.6 11.33-15.18 15.03s-13.53 5.55-20.88 5.55c-7.28 0-14.1-1.87-20.45-5.6-6.35-3.73-11.41-8.95-15.18-15.66-3.77-6.7-5.65-13.72-5.65-21.07 0-7.41 1.87-14.43 5.6-21.07s8.76-11.8 15.08-15.47 13.22-5.51 20.69-5.51c11.62 0 21.4 4.06 29.35 12.16 7.95 8.11 11.92 18.2 11.92 30.26.01 7.94-1.76 15.06-5.3 21.38z"/>\n    <path fill="#FDCD08" d="M795.53 165.92c0 6.47-5.24 11.72-11.72 11.72-6.47 0-11.72-5.25-11.72-11.72s5.24-11.72 11.72-11.72c6.47 0 11.72 5.25 11.72 11.72"/>\n  </svg>',
            },
            p =
                ".prokerala-location-wdgt-theme-light{--background-color:#fff;--hover-background-color:#2196F3;--hover-text-color:#fff;--text-color:#000;--muted-text-color:#757575;--muted-text-color-hover:#fff}.prokerala-location-wdgt-theme-dark{--background-color:#9E9E9E;--hover-background-color:#b9b9b9;--hover-text-color:#fff;--text-color:#fff;--muted-text-color:#fff;--muted-text-color-hover:#fff}.prokerala-location-wdgt-suggestions{border:1px solid #e4e4e4;box-shadow:rgba(0,0,0,.2) 0 0 .5rem;margin:0;position:absolute;z-index:1;background:var(--background-color,#fff);color:var(--text-color,#000);width:100%}.prokerala-location-wdgt-suggestions ul{list-style:none;padding:0;margin-bottom:25px;margin-top:0;margin-left:0;max-height:400px;overflow:hidden;overflow-y:scroll}.prokerala-location-wdgt-suggestions li{cursor:pointer;padding:.75rem;font-family:Arial,Helvetica,sans-serif;font-size:16px;margin: 0;}.prokerala-location-wdgt-suggestions li.active{background-color:var(--hover-background-color,#2196f3);color:var(--hover-text-color,#fff)}.prokerala-location-wdgt-suggestions li:last-child{border-bottom:none}.prokerala-location-wdgt-suggestions li.active>.prokerala-location-wdgt-muted{color:var(--muted-text-color-hover,#fff)}.prokerala-location-wdgt-muted{font-size:14px;color:var(--muted-text-color,#757575)}.prokerala-location-wdgt-suggestions ul::-webkit-scrollbar{width:2px}.prokerala-location-wdgt-suggestions ul::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.prokerala-location-wdgt-suggestions ul::-webkit-scrollbar-thumb{background-color:#ccc;outline:1px solid #ccc}";
        function h(t) {
            try {
                var e = localStorage.getItem(l),
                    o =
                        ((o = (o = e).split(".")[1].replace(/-/g, "+").replace(/_/g, "/")),
                        (o = decodeURIComponent(
                            atob(o)
                                .split("")
                                .map(function (t) {
                                    return "%".concat("00".concat(t.charCodeAt(0).toString(16)).slice(-2));
                                })
                                .join("")
                        )),
                        JSON.parse(o));
                if (new Date().getTime() > o.exp && o.aud === window.location.origin && o.sub === t) return e;
            } catch (t) {}
            var o;
            return null;
        }
        function f(t) {
            var e = new XMLHttpRequest();
            return (
                (e.onreadystatechange = function () {
                    4 === e.readyState && 200 === e.status && t(JSON.parse(e.responseText));
                }),
                e
            );
        }
        return (function () {
            function i(t, e) {
                var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, i),
                    (this.element = t),
                    (this.callback = e),
                    (this.options = c(c({}, u), o)),
                    (this.clientVerfied = null !== h(this.options.clientId)),
                    this.bindEvents(this.element),
                    document.getElementById("prokerala-location-wdgt-styles") ||
                        (((o = document.createElement("style")).id = "prokerala-location-wdgt-styles"),
                        "textContent" in o ? (o.textContent = p) : (o.styleSheet.cssText = p),
                        (n = document.querySelector("head")).insertBefore(o, n.firstElementChild)),
                    (this.activeSuggestion = -1),
                    (this.xhr = null),
                    (this.verifyxhr = null);
                var n = r(this.callback);
                "function" !== n && "console" in window && console.error("[ERROR] Second parameter should be a callback function. Given ".concat(n, ".")),
                    (this.options.persist = "" !== this.options.persistKey.trim()),
                    this.options.persist &&
                        ((this.persistData = localStorage.getItem("".concat(s, "-").concat(this.options.persistKey))),
                        t.value.trim(),
                        this.persistData && "function" == typeof this.callback && ((n = JSON.parse(this.persistData)), (t.value = "".concat(n.city, ", ").concat(n.state, ", ").concat(n.country)), this.callback(n)));
            }
            var t, e, o;
            return (
                (t = i),
                (e = [
                    {
                        key: "initiateDomainVerification",
                        value: function (t) {
                            var e = this;
                            (this.verifyXhr = f(function (t) {
                                "ok" === t.status
                                    ? ((function (t) {
                                          try {
                                              localStorage.setItem(l, t);
                                          } catch (t) {}
                                      })(t.data.token),
                                      (e.clientVerfied = !0),
                                      e.search(e.element, e.element.value))
                                    : "console" in window && console.error("[ERROR] Client Verification failed. ".concat(t.message), t);
                            })),
                                this.verifyXhr.open("POST", "https://api.prokerala.com/client/verify/".concat(t), !0),
                                this.verifyXhr.send();
                        },
                    },
                    {
                        key: "search",
                        value: function (e, t) {
                            var o = this;
                            this.clientVerfied || this.verifyxhr
                                ? t.length < this.options.minChars ||
                                  (this.xhr && this.xhr.abort(),
                                  (this.xhr = f(function (t) {
                                      return o.updateAutocompleteList(e, t);
                                  })),
                                  this.xhr.open("GET", "https://client-api.prokerala.com/v1/location/search.json?q=".concat(t, "&limit=").concat(this.options.limit), !0),
                                  this.xhr.send())
                                : this.initiateDomainVerification(this.options.clientId);
                        },
                    },
                    {
                        key: "onSelect",
                        value: function (t, e) {
                            e = e.dataset;
                            this.clearAutocompleteList(), e && (t.value = "".concat(e.city, ", ").concat(e.state, ", ").concat(e.country));
                            var o,
                                n,
                                e =
                                    ((o = e),
                                    (n = {}),
                                    Object.keys(o).forEach(function (t) {
                                        n[t] = o[t];
                                    }),
                                    n);
                            this.options.persist && void 0 !== e.geonameid && localStorage.setItem("".concat(s, "-").concat(this.options.persistKey), JSON.stringify(e)), "function" == typeof this.callback && this.callback(e);
                        },
                    },
                    {
                        key: "bindEvents",
                        value: function (t) {
                            this.bindInputPress(t), this.bindKeyPress(t), this.closeOnDocumentClick(t);
                        },
                    },
                    {
                        key: "bindKeyPress",
                        value: function (t) {
                            var a = this;
                            t.addEventListener("keydown", function (t) {
                                var e = t.which || t.keyCode || 0,
                                    o = document.querySelector(".prokerala-location-wdgt-suggestions"),
                                    n = o ? o.querySelectorAll("li") : [],
                                    i = n.length;
                                if (0 !== i) {
                                    var r = a.activeSuggestion,
                                        c = n[r];
                                    if (-1 !== r && (c.classList.remove("active"), 13 === e)) return t.preventDefault(), (a.activeSuggestion = -1), void a.onSelect(this, c);
                                    if ((9 === e && t.preventDefault(), 40 === e || (!t.shiftKey && 9 === e))) r = (r + 1) % i;
                                    else {
                                        if (!(38 === e || (t.shiftKey && 9 === e))) return;
                                        r = (r - 1 + i) % i;
                                    }
                                    (c = n[(a.activeSuggestion = r)]).classList.add("active"),
                                        (r = c),
                                        (o = o.querySelector("ul")),
                                        r && 1 === r.nodeType && (o.scrollTop = r.offsetTop),
                                        (0 <= (r = (r = c).getBoundingClientRect()).top &&
                                            0 <= r.left &&
                                            r.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                                            r.right <= (window.innerWidth || document.documentElement.clientWidth)) ||
                                            c.scrollIntoView(!1);
                                }
                            });
                        },
                    },
                    {
                        key: "bindInputPress",
                        value: function (e) {
                            var o = this;
                            e.addEventListener("input", function () {
                                var t = e.value;
                                o.search(e, t);
                            });
                        },
                    },
                    {
                        key: "closeOnDocumentClick",
                        value: function (n) {
                            var i = this;
                            document.addEventListener("click", function (t) {
                                var e = n.nextElementSibling,
                                    o = t.target;
                                do {
                                    if (o === e) return;
                                } while ((o = o.parentNode));
                                i.clearAutocompleteList();
                            });
                        },
                    },
                    {
                        key: "updateAutocompleteList",
                        value: function (t, e) {
                            var o, i, n, r, c;
                            "error" !== e.status &&
                                ((r = e.data),
                                this.clearAutocompleteList(t),
                                (o = document.createElement("div")).classList.add("prokerala-location-wdgt-suggestions"),
                                this.options.theme || (this.options.theme = "theme-light"),
                                this.options.theme && o.classList.add("prokerala-location-wdgt-".concat(this.options.theme)),
                                0 < r.length
                                    ? ((i = document.createElement("ul")),
                                      r.forEach(function (t) {
                                          var e = document.createElement("li"),
                                              o = e.dataset,
                                              n = a(t, 8);
                                          (o.geonameid = n[0]),
                                              (o.city = n[1]),
                                              (o.state = n[2]),
                                              (o.country = n[3]),
                                              (o.country_code = n[4]),
                                              (o.timezone = n[5]),
                                              (o.latitude = n[6]),
                                              (o.longitude = n[7]),
                                              (e.innerHTML = "".concat(t[1], ", ").concat(t[2], '<br> <span class="prokerala-location-wdgt-muted">').concat(t[3], "</span>")),
                                              i.appendChild(e);
                                      }),
                                      o.appendChild(i))
                                    : (((c = document.createElement("p")).innerHTML = '<i style="margin-left: 10px;">No results found..</i>'), o.appendChild(c)),
                                o.appendChild(this.getPoweredBy()),
                                (n = t.getBoundingClientRect()),
                                (r = (e = t).getBoundingClientRect()),
                                (c = window.pageXOffset || document.documentElement.scrollLeft),
                                (e = window.pageYOffset || document.documentElement.scrollTop),
                                (c = { top: r.top + e, left: r.left + c }),
                                (o.style.top = "".concat(c.top + n.height, "px")),
                                (o.style.width = "".concat(n.width, "px")),
                                (o.style.left = "".concat(c.left, "px")),
                                document.body.appendChild(o),
                                this.bindSuggestionElementEvents(t, o));
                        },
                    },
                    {
                        key: "getPoweredBy",
                        value: function () {
                            var t = document.createElement("p"),
                                e = "theme-dark" === this.options.theme ? "white" : "black",
                                o = 'Powered By <a href="https://www.prokerala.com" style="';
                            (o += "width: 70px !important;display: inline-block !important;vertical-align: middle !important;"),
                                (o += 'position: relative !important;bottom: 3px !important;" target="_blank">'),
                                (o += "".concat(d[e], "</a>")),
                                (t.innerHTML = o);
                            return (
                                t.setAttribute(
                                    "style",
                                    "display: inline-block !important;padding: 0px !important;margin: 0px !important;right: 0 !important;bottom: 0 !important;position: absolute !important;font-size: 10px !important;opacity: 1!important;"
                                ),
                                t
                            );
                        },
                    },
                    {
                        key: "bindSuggestionElementEvents",
                        value: function (o, n) {
                            var i = this;
                            Array.prototype.forEach.call(n.querySelectorAll("li"), function (t, e) {
                                t.addEventListener("mouseover", function () {
                                    var t = n.querySelector(".active");
                                    t && t.classList.remove("active"), this.classList.add("active"), (i.activeSuggestion = e);
                                }),
                                    t.addEventListener("click", function () {
                                        return i.onSelect(o, t);
                                    });
                            });
                        },
                    },
                    {
                        key: "clearAutocompleteList",
                        value: function () {
                            var t = document.querySelector(".prokerala-location-wdgt-suggestions");
                            t && t.remove(), (this.activeSuggestion = -1);
                        },
                    },
                ]) && n(t.prototype, e),
                o && n(t, o),
                i
            );
        })();
    }),
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = b()) : "function" == typeof define && define.amd ? define(b) : ((a = "undefined" != typeof globalThis ? globalThis : a || self).LocationSearch = b());
