!function (t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.layer = n() : t.layer = n()
}(this, function () {
    return function (t) {
        function n(r) {
            if (e[r]) return e[r].exports;
            var i = e[r] = {i: r, l: !1, exports: {}};
            return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }

        var e = {};
        return n.m = t, n.c = e, n.i = function (t) {
            return t
        }, n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: r})
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, n.p = "", n(n.s = 65)
    }([function (t, n, e) {
        var r = e(27)("wks"), i = e(30), o = e(1).Symbol, c = "function" == typeof o;
        (t.exports = function (t) {
            return r[t] || (r[t] = c && o[t] || (c ? o : i)("Symbol." + t))
        }).store = r
    }, function (t, n) {
        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
    }, function (t, n, e) {
        var r = e(10);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, n, e) {
        var r = e(11), i = e(26);
        t.exports = e(5) ? function (t, n, e) {
            return r.f(t, n, i(1, e))
        } : function (t, n, e) {
            return t[n] = e, t
        }
    }, function (t, n) {
        var e = t.exports = {version: "2.4.0"};
        "number" == typeof __e && (__e = e)
    }, function (t, n, e) {
        t.exports = !e(22)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, n) {
        t.exports = {}
    }, function (t, n) {
        var e = {}.toString;
        t.exports = function (t) {
            return e.call(t).slice(8, -1)
        }
    }, function (t, n, e) {
        var r = e(12);
        t.exports = function (t, n, e) {
            if (r(t), void 0 === n) return t;
            switch (e) {
                case 1:
                    return function (e) {
                        return t.call(n, e)
                    };
                case 2:
                    return function (e, r) {
                        return t.call(n, e, r)
                    };
                case 3:
                    return function (e, r, i) {
                        return t.call(n, e, r, i)
                    }
            }
            return function () {
                return t.apply(n, arguments)
            }
        }
    }, function (t, n) {
        var e = {}.hasOwnProperty;
        t.exports = function (t, n) {
            return e.call(t, n)
        }
    }, function (t, n) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, n, e) {
        var r = e(2), i = e(37), o = e(58), c = Object.defineProperty;
        n.f = e(5) ? Object.defineProperty : function (t, n, e) {
            if (r(t), n = o(n, !0), r(e), i) try {
                return c(t, n, e)
            } catch (t) {
            }
            if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
            return "value" in e && (t[n] = e.value), t
        }
    }, function (t, n) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, n) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, n, e) {
        var r = e(10), i = e(1).document, o = r(i) && r(i.createElement);
        t.exports = function (t) {
            return o ? i.createElement(t) : {}
        }
    }, function (t, n, e) {
        var r = e(11).f, i = e(9), o = e(0)("toStringTag");
        t.exports = function (t, n, e) {
            t && !i(t = e ? t : t.prototype, o) && r(t, o, {configurable: !0, value: n})
        }
    }, function (t, n, e) {
        var r = e(27)("keys"), i = e(30);
        t.exports = function (t) {
            return r[t] || (r[t] = i(t))
        }
    }, function (t, n) {
        var e = Math.ceil, r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
        }
    }, function (t, n, e) {
        var r = e(39), i = e(13);
        t.exports = function (t) {
            return r(i(t))
        }
    }, function (t, n, e) {
        var r = e(7), i = e(0)("toStringTag"), o = "Arguments" == r(function () {
            return arguments
        }()), c = function (t, n) {
            try {
                return t[n]
            } catch (t) {
            }
        };
        t.exports = function (t) {
            var n, e, u;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = c(n = Object(t), i)) ? e : o ? r(n) : "Object" == (u = r(n)) && "function" == typeof n.callee ? "Arguments" : u
        }
    }, function (t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, n, e) {
        var r = e(1), i = e(4), o = e(8), c = e(3), u = "prototype", s = function (t, n, e) {
            var a, f, l, p = t & s.F, v = t & s.G, h = t & s.S, d = t & s.P, y = t & s.B, m = t & s.W,
                x = v ? i : i[n] || (i[n] = {}), b = x[u], _ = v ? r : h ? r[n] : (r[n] || {})[u];
            v && (e = n);
            for (a in e) (f = !p && _ && void 0 !== _[a]) && a in x || (l = f ? _[a] : e[a], x[a] = v && "function" != typeof _[a] ? e[a] : y && f ? o(l, r) : m && _[a] == l ? function (t) {
                var n = function (n, e, r) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(n);
                            case 2:
                                return new t(n, e)
                        }
                        return new t(n, e, r)
                    }
                    return t.apply(this, arguments)
                };
                return n[u] = t[u], n
            }(l) : d && "function" == typeof l ? o(Function.call, l) : l, d && ((x.virtual || (x.virtual = {}))[a] = l, t & s.R && b && !b[a] && c(b, a, l)))
        };
        s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
    }, function (t, n) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, n, e) {
        t.exports = e(1).document && document.documentElement
    }, function (t, n, e) {
        "use strict";
        var r = e(25), i = e(21), o = e(52), c = e(3), u = e(9), s = e(6), a = e(42), f = e(15), l = e(48),
            p = e(0)("iterator"), v = !([].keys && "next" in [].keys()), h = "keys", d = "values", y = function () {
                return this
            };
        t.exports = function (t, n, e, m, x, b, _) {
            a(e, n, m);
            var g, w, j, k = function (t) {
                    if (!v && t in C) return C[t];
                    switch (t) {
                        case h:
                            return function () {
                                return new e(this, t)
                            };
                        case d:
                            return function () {
                                return new e(this, t)
                            }
                    }
                    return function () {
                        return new e(this, t)
                    }
                }, S = n + " Iterator", O = x == d, P = !1, C = t.prototype, T = C[p] || C["@@iterator"] || x && C[x],
                E = T || k(x), M = x ? O ? k("entries") : E : void 0, A = "Array" == n ? C.entries || T : T;
            if (A && (j = l(A.call(new t))) !== Object.prototype && (f(j, S, !0), r || u(j, p) || c(j, p, y)), O && T && T.name !== d && (P = !0, E = function () {
                    return T.call(this)
                }), r && !_ || !v && !P && C[p] || c(C, p, E), s[n] = E, s[S] = y, x) if (g = {
                    values: O ? E : k(d),
                    keys: b ? E : k(h),
                    entries: M
                }, _) for (w in g) w in C || o(C, w, g[w]); else i(i.P + i.F * (v || P), n, g);
            return g
        }
    }, function (t, n) {
        t.exports = !0
    }, function (t, n) {
        t.exports = function (t, n) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n}
        }
    }, function (t, n, e) {
        var r = e(1), i = "__core-js_shared__", o = r[i] || (r[i] = {});
        t.exports = function (t) {
            return o[t] || (o[t] = {})
        }
    }, function (t, n, e) {
        var r, i, o, c = e(8), u = e(38), s = e(23), a = e(14), f = e(1), l = f.process, p = f.setImmediate,
            v = f.clearImmediate, h = f.MessageChannel, d = 0, y = {}, m = "onreadystatechange", x = function () {
                var t = +this;
                if (y.hasOwnProperty(t)) {
                    var n = y[t];
                    delete y[t], n()
                }
            }, b = function (t) {
                x.call(t.data)
            };
        p && v || (p = function (t) {
            for (var n = [], e = 1; arguments.length > e;) n.push(arguments[e++]);
            return y[++d] = function () {
                u("function" == typeof t ? t : Function(t), n)
            }, r(d), d
        }, v = function (t) {
            delete y[t]
        }, "process" == e(7)(l) ? r = function (t) {
            l.nextTick(c(x, t, 1))
        } : h ? (i = new h, o = i.port2, i.port1.onmessage = b, r = c(o.postMessage, o, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function (t) {
            f.postMessage(t + "", "*")
        }, f.addEventListener("message", b, !1)) : r = m in a("script") ? function (t) {
            s.appendChild(a("script"))[m] = function () {
                s.removeChild(this), x.call(t)
            }
        } : function (t) {
            setTimeout(c(x, t, 1), 0)
        }), t.exports = {set: p, clear: v}
    }, function (t, n, e) {
        var r = e(17), i = Math.min;
        t.exports = function (t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0
        }
    }, function (t, n) {
        var e = 0, r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
        }
    }, function (t, n, e) {
        t.exports = {default: e(32), __esModule: !0}
    }, function (t, n, e) {
        e(61), e(63), e(64), e(62), t.exports = e(4).Promise
    }, function (t, n) {
        t.exports = function () {
        }
    }, function (t, n) {
        t.exports = function (t, n, e, r) {
            if (!(t instanceof n) || void 0 !== r && r in t) throw TypeError(e + ": incorrect invocation!");
            return t
        }
    }, function (t, n, e) {
        var r = e(18), i = e(29), o = e(56);
        t.exports = function (t) {
            return function (n, e, c) {
                var u, s = r(n), a = i(s.length), f = o(c, a);
                if (t && e != e) {
                    for (; a > f;) if ((u = s[f++]) != u) return !0
                } else for (; a > f; f++) if ((t || f in s) && s[f] === e) return t || f || 0;
                return !t && -1
            }
        }
    }, function (t, n, e) {
        var r = e(8), i = e(41), o = e(40), c = e(2), u = e(29), s = e(59), a = {}, f = {},
            n = t.exports = function (t, n, e, l, p) {
                var v, h, d, y, m = p ? function () {
                    return t
                } : s(t), x = r(e, l, n ? 2 : 1), b = 0;
                if ("function" != typeof m) throw TypeError(t + " is not iterable!");
                if (o(m)) {
                    for (v = u(t.length); v > b; b++) if ((y = n ? x(c(h = t[b])[0], h[1]) : x(t[b])) === a || y === f) return y
                } else for (d = m.call(t); !(h = d.next()).done;) if ((y = i(d, x, h.value, n)) === a || y === f) return y
            };
        n.BREAK = a, n.RETURN = f
    }, function (t, n, e) {
        t.exports = !e(5) && !e(22)(function () {
            return 7 != Object.defineProperty(e(14)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, n) {
        t.exports = function (t, n, e) {
            var r = void 0 === e;
            switch (n.length) {
                case 0:
                    return r ? t() : t.call(e);
                case 1:
                    return r ? t(n[0]) : t.call(e, n[0]);
                case 2:
                    return r ? t(n[0], n[1]) : t.call(e, n[0], n[1]);
                case 3:
                    return r ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);
                case 4:
                    return r ? t(n[0], n[1], n[2], n[3]) : t.call(e, n[0], n[1], n[2], n[3])
            }
            return t.apply(e, n)
        }
    }, function (t, n, e) {
        var r = e(7);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function (t, n, e) {
        var r = e(6), i = e(0)("iterator"), o = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || o[i] === t)
        }
    }, function (t, n, e) {
        var r = e(2);
        t.exports = function (t, n, e, i) {
            try {
                return i ? n(r(e)[0], e[1]) : n(e)
            } catch (n) {
                var o = t.return;
                throw void 0 !== o && r(o.call(t)), n
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(46), i = e(26), o = e(15), c = {};
        e(3)(c, e(0)("iterator"), function () {
            return this
        }), t.exports = function (t, n, e) {
            t.prototype = r(c, {next: i(1, e)}), o(t, n + " Iterator")
        }
    }, function (t, n, e) {
        var r = e(0)("iterator"), i = !1;
        try {
            var o = [7][r]();
            o.return = function () {
                i = !0
            }, Array.from(o, function () {
                throw 2
            })
        } catch (t) {
        }
        t.exports = function (t, n) {
            if (!n && !i) return !1;
            var e = !1;
            try {
                var o = [7], c = o[r]();
                c.next = function () {
                    return {done: e = !0}
                }, o[r] = function () {
                    return c
                }, t(o)
            } catch (t) {
            }
            return e
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            return {value: n, done: !!t}
        }
    }, function (t, n, e) {
        var r = e(1), i = e(28).set, o = r.MutationObserver || r.WebKitMutationObserver, c = r.process, u = r.Promise,
            s = "process" == e(7)(c);
        t.exports = function () {
            var t, n, e, a = function () {
                var r, i;
                for (s && (r = c.domain) && r.exit(); t;) {
                    i = t.fn, t = t.next;
                    try {
                        i()
                    } catch (r) {
                        throw t ? e() : n = void 0, r
                    }
                }
                n = void 0, r && r.enter()
            };
            if (s) e = function () {
                c.nextTick(a)
            }; else if (o) {
                var f = !0, l = document.createTextNode("");
                new o(a).observe(l, {characterData: !0}), e = function () {
                    l.data = f = !f
                }
            } else if (u && u.resolve) {
                var p = u.resolve();
                e = function () {
                    p.then(a)
                }
            } else e = function () {
                i.call(r, a)
            };
            return function (r) {
                var i = {fn: r, next: void 0};
                n && (n.next = i), t || (t = i, e()), n = i
            }
        }
    }, function (t, n, e) {
        var r = e(2), i = e(47), o = e(20), c = e(16)("IE_PROTO"), u = function () {
        }, s = "prototype", a = function () {
            var t, n = e(14)("iframe"), r = o.length, i = "<", c = ">";
            for (n.style.display = "none", e(23).appendChild(n), n.src = "javascript:", t = n.contentWindow.document, t.open(), t.write(i + "script" + c + "document.F=Object" + i + "/script" + c), t.close(), a = t.F; r--;) delete a[s][o[r]];
            return a()
        };
        t.exports = Object.create || function (t, n) {
            var e;
            return null !== t ? (u[s] = r(t), e = new u, u[s] = null, e[c] = t) : e = a(), void 0 === n ? e : i(e, n)
        }
    }, function (t, n, e) {
        var r = e(11), i = e(2), o = e(50);
        t.exports = e(5) ? Object.defineProperties : function (t, n) {
            i(t);
            for (var e, c = o(n), u = c.length, s = 0; u > s;) r.f(t, e = c[s++], n[e]);
            return t
        }
    }, function (t, n, e) {
        var r = e(9), i = e(57), o = e(16)("IE_PROTO"), c = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null
        }
    }, function (t, n, e) {
        var r = e(9), i = e(18), o = e(35)(!1), c = e(16)("IE_PROTO");
        t.exports = function (t, n) {
            var e, u = i(t), s = 0, a = [];
            for (e in u) e != c && r(u, e) && a.push(e);
            for (; n.length > s;) r(u, e = n[s++]) && (~o(a, e) || a.push(e));
            return a
        }
    }, function (t, n, e) {
        var r = e(49), i = e(20);
        t.exports = Object.keys || function (t) {
            return r(t, i)
        }
    }, function (t, n, e) {
        var r = e(3);
        t.exports = function (t, n, e) {
            for (var i in n) e && t[i] ? t[i] = n[i] : r(t, i, n[i]);
            return t
        }
    }, function (t, n, e) {
        t.exports = e(3)
    }, function (t, n, e) {
        "use strict";
        var r = e(1), i = e(4), o = e(11), c = e(5), u = e(0)("species");
        t.exports = function (t) {
            var n = "function" == typeof i[t] ? i[t] : r[t];
            c && n && !n[u] && o.f(n, u, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }
    }, function (t, n, e) {
        var r = e(2), i = e(12), o = e(0)("species");
        t.exports = function (t, n) {
            var e, c = r(t).constructor;
            return void 0 === c || void 0 == (e = r(c)[o]) ? n : i(e)
        }
    }, function (t, n, e) {
        var r = e(17), i = e(13);
        t.exports = function (t) {
            return function (n, e) {
                var o, c, u = String(i(n)), s = r(e), a = u.length;
                return s < 0 || s >= a ? t ? "" : void 0 : (o = u.charCodeAt(s), o < 55296 || o > 56319 || s + 1 === a || (c = u.charCodeAt(s + 1)) < 56320 || c > 57343 ? t ? u.charAt(s) : o : t ? u.slice(s, s + 2) : c - 56320 + (o - 55296 << 10) + 65536)
            }
        }
    }, function (t, n, e) {
        var r = e(17), i = Math.max, o = Math.min;
        t.exports = function (t, n) {
            return t = r(t), t < 0 ? i(t + n, 0) : o(t, n)
        }
    }, function (t, n, e) {
        var r = e(13);
        t.exports = function (t) {
            return Object(r(t))
        }
    }, function (t, n, e) {
        var r = e(10);
        t.exports = function (t, n) {
            if (!r(t)) return t;
            var e, i;
            if (n && "function" == typeof(e = t.toString) && !r(i = e.call(t))) return i;
            if ("function" == typeof(e = t.valueOf) && !r(i = e.call(t))) return i;
            if (!n && "function" == typeof(e = t.toString) && !r(i = e.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, n, e) {
        var r = e(19), i = e(0)("iterator"), o = e(6);
        t.exports = e(4).getIteratorMethod = function (t) {
            if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)]
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(33), i = e(44), o = e(6), c = e(18);
        t.exports = e(24)(Array, "Array", function (t, n) {
            this._t = c(t), this._i = 0, this._k = n
        }, function () {
            var t = this._t, n = this._k, e = this._i++;
            return !t || e >= t.length ? (this._t = void 0, i(1)) : "keys" == n ? i(0, e) : "values" == n ? i(0, t[e]) : i(0, [e, t[e]])
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
    }, function (t, n) {
    }, function (t, n, e) {
        "use strict";
        var r, i, o, c = e(25), u = e(1), s = e(8), a = e(19), f = e(21), l = e(10), p = e(12), v = e(34), h = e(36),
            d = e(54), y = e(28).set, m = e(45)(), x = "Promise", b = u.TypeError, _ = u.process, g = u[x], _ = u.process,
            w = "process" == a(_), j = function () {
            }, k = !!function () {
                try {
                    var t = g.resolve(1), n = (t.constructor = {})[e(0)("species")] = function (t) {
                        t(j, j)
                    };
                    return (w || "function" == typeof PromiseRejectionEvent) && t.then(j) instanceof n
                } catch (t) {
                }
            }(), S = function (t, n) {
                return t === n || t === g && n === o
            }, O = function (t) {
                var n;
                return !(!l(t) || "function" != typeof(n = t.then)) && n
            }, P = function (t) {
                return S(g, t) ? new C(t) : new i(t)
            }, C = i = function (t) {
                var n, e;
                this.promise = new t(function (t, r) {
                    if (void 0 !== n || void 0 !== e) throw b("Bad Promise constructor");
                    n = t, e = r
                }), this.resolve = p(n), this.reject = p(e)
            }, T = function (t) {
                try {
                    t()
                } catch (t) {
                    return {error: t}
                }
            }, E = function (t, n) {
                if (!t._n) {
                    t._n = !0;
                    var e = t._c;
                    m(function () {
                        for (var r = t._v, i = 1 == t._s, o = 0, c = function (n) {
                            var e, o, c = i ? n.ok : n.fail, u = n.resolve, s = n.reject, a = n.domain;
                            try {
                                c ? (i || (2 == t._h && F(t), t._h = 1), c === !0 ? e = r : (a && a.enter(), e = c(r), a && a.exit()), e === n.promise ? s(b("Promise-chain cycle")) : (o = O(e)) ? o.call(e, u, s) : u(e)) : s(r)
                            } catch (t) {
                                s(t)
                            }
                        }; e.length > o;) c(e[o++]);
                        t._c = [], t._n = !1, n && !t._h && M(t)
                    })
                }
            }, M = function (t) {
                y.call(u, function () {
                    var n, e, r, i = t._v;
                    if (A(t) && (n = T(function () {
                            w ? _.emit("unhandledRejection", i, t) : (e = u.onunhandledrejection) ? e({
                                promise: t,
                                reason: i
                            }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i)
                        }), t._h = w || A(t) ? 2 : 1), t._a = void 0, n) throw n.error
                })
            }, A = function (t) {
                if (1 == t._h) return !1;
                for (var n, e = t._a || t._c, r = 0; e.length > r;) if (n = e[r++], n.fail || !A(n.promise)) return !1;
                return !0
            }, F = function (t) {
                y.call(u, function () {
                    var n;
                    w ? _.emit("rejectionHandled", t) : (n = u.onrejectionhandled) && n({promise: t, reason: t._v})
                })
            }, R = function (t) {
                var n = this;
                n._d || (n._d = !0, n = n._w || n, n._v = t, n._s = 2, n._a || (n._a = n._c.slice()), E(n, !0))
            }, L = function (t) {
                var n, e = this;
                if (!e._d) {
                    e._d = !0, e = e._w || e;
                    try {
                        if (e === t) throw b("Promise can't be resolved itself");
                        (n = O(t)) ? m(function () {
                            var r = {_w: e, _d: !1};
                            try {
                                n.call(t, s(L, r, 1), s(R, r, 1))
                            } catch (t) {
                                R.call(r, t)
                            }
                        }) : (e._v = t, e._s = 1, E(e, !1))
                    } catch (t) {
                        R.call({_w: e, _d: !1}, t)
                    }
                }
            };
        k || (g = function (t) {
            v(this, g, x, "_h"), p(t), r.call(this);
            try {
                t(s(L, this, 1), s(R, this, 1))
            } catch (t) {
                R.call(this, t)
            }
        }, r = function (t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, r.prototype = e(51)(g.prototype, {
            then: function (t, n) {
                var e = P(d(this, g));
                return e.ok = "function" != typeof t || t, e.fail = "function" == typeof n && n, e.domain = w ? _.domain : void 0, this._c.push(e), this._a && this._a.push(e), this._s && E(this, !1), e.promise
            }, catch: function (t) {
                return this.then(void 0, t)
            }
        }), C = function () {
            var t = new r;
            this.promise = t, this.resolve = s(L, t, 1), this.reject = s(R, t, 1)
        }), f(f.G + f.W + f.F * !k, {Promise: g}), e(15)(g, x), e(53)(x), o = e(4)[x], f(f.S + f.F * !k, x, {
            reject: function (t) {
                var n = P(this);
                return (0, n.reject)(t), n.promise
            }
        }), f(f.S + f.F * (c || !k), x, {
            resolve: function (t) {
                if (t instanceof g && S(t.constructor, this)) return t;
                var n = P(this);
                return (0, n.resolve)(t), n.promise
            }
        }), f(f.S + f.F * !(k && e(43)(function (t) {
            g.all(t).catch(j)
        })), x, {
            all: function (t) {
                var n = this, e = P(n), r = e.resolve, i = e.reject, o = T(function () {
                    var e = [], o = 0, c = 1;
                    h(t, !1, function (t) {
                        var u = o++, s = !1;
                        e.push(void 0), c++, n.resolve(t).then(function (t) {
                            s || (s = !0, e[u] = t, --c || r(e))
                        }, i)
                    }), --c || r(e)
                });
                return o && i(o.error), e.promise
            }, race: function (t) {
                var n = this, e = P(n), r = e.reject, i = T(function () {
                    h(t, !1, function (t) {
                        n.resolve(t).then(e.resolve, r)
                    })
                });
                return i && r(i.error), e.promise
            }
        })
    }, function (t, n, e) {
        "use strict";
        var r = e(55)(!0);
        e(24)(String, "String", function (t) {
            this._t = String(t), this._i = 0
        }, function () {
            var t, n = this._t, e = this._i;
            return e >= n.length ? {value: void 0, done: !0} : (t = r(n, e), this._i += t.length, {value: t, done: !1})
        })
    }, function (t, n, e) {
        e(60);
        for (var r = e(1), i = e(3), o = e(6), c = e(0)("toStringTag"), u = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], s = 0; s < 5; s++) {
            var a = u[s], f = r[a], l = f && f.prototype;
            l && !l[c] && i(l, c, a), o[a] = o.Array
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return new (t.extend(c))({el: document.createElement("div"), propsData: n})
        }

        Object.defineProperty(n, "__esModule", {value: !0});
        var i = e(31), o = e.n(i), c = {
            template: '\n<div v-if="visible" class="layui-m-layer" v-bind:class="layerClass">\n  <div v-on:click="close()" v-if="isShade" class="layui-m-layershade"></div>\n  <div class="layui-m-layermain">\n    <div class="layui-m-layersection">\n      <div v-if="type==2 && !skin" class="layui-m-layerchild  layui-m-anim-scale">\n        <div class="layui-m-layercont"><i></i> <i class="layui-m-layerload"></i> <i></i>\n          <p>{{ content?content:"" }}</p>\n        </div>\n      </div>\n      <div v-if="ismsg" v-bind:style="msgStyle" class="layui-m-layerchild layui-m-anim-up" v-bind:class="skinClass">\n        <div class="layui-m-layercont"> <i v-if="icon" style="display:block;font-size:40px;margin:22px" class="icon iconfont" :class="iconClass"></i> {{ content }} </div>\n      </div>\n      <div v-if="defaultChild" class="layui-m-layerchild layui-m-anim-up">\n        <h3 :style="titleStyle" v-if="title">{{ titleText }}</h3>\n        <div  v-html="content" :class="contentClass" class="layui-m-layercont"></div>\n        <div v-if="btn" class="layui-m-layerbtn">\n          <template v-for="(item, index) in btn"> <span v-on:click="callback(index)" type="1">{{ item }}</span> </template>\n        </div>\n      </div>\n      <div v-if="isfooter" class="layui-m-layerchild layui-m-anim-up" v-bind:class="skinClass">\n        <div v-if="content" class="layui-m-layercont">{{ content }}</div>\n        <div class="layui-m-layerbtn">\n          <template v-for="(item, index) in btn"> <span :style="footerRadius(index)" v-if="index!=0" no="" v-on:click="callback(index)" type="1">{{ item }}</span> </template> <span v-if="btn.length>0" yes="" v-on:click="callback(0)" type="1">{{ btn[0] }}</span> </div>\n      </div>\n    </div>\n  </div>\n</div>',
            props: {
                content: String,
                type: {type: [Number, String], default: 0},
                time: {type: Number, default: 0},
                skin: {type: String},
                btn: {type: [String, Array]},
                title: {type: [Array, String]},
                icon: {type: String},
                callback: {type: Function},
                contentClass: {type: String},
                shadeClose:{type:Boolean,default:false}
            },
            created: function () {
                var t = this;
                this.visible = !0, setTimeout(function () {
                    t.status = !1
                }, 3e3), this.time > 0 && setTimeout(function () {
                    t.visible = !1
                }, this.time)
            },
            computed: {
                defaultChild: function () {
                    return !(2 === this.type || "msg" === this.skin || "footer" === this.skin)
                }, layerClass: function () {
                    return "layui-m-layer" + this.type
                }, skinClass: function () {
                    return "layui-m-layer-" + this.skin
                }, msgStyle: function () {
                    return {bottom: this.icon ? "auto" : ""}
                }, iconClass: function () {
                    return this.icon
                }, isShade: function () {
                    return 2 === this.type || "footer" === this.skin || this.defaultChild
                }, titleText: function () {
                    return "string" == typeof this.title ? this.title : this.title[0]
                }, titleStyle: function () {
                    return "string" == typeof this.title ? "" : this.title[1]
                }, ismsg: function () {
                    return "msg" === this.skin
                }, isfooter: function () {
                    return "footer" === this.skin
                }
            },
            data: function () {
                return {visible: !1, status: !0}
            },
            methods: {
                close: function () {
                    if (this.shadeClose){
                        return
                    }
                    if (2 === this.type) return !1;
                    this.visible = !1
                }, footerRadius: function (t) {
                    return this.btn[t + 1] ? "border-radius:0" : "border-radius: 0 0 5px 5px"
                }
            }
        }, u = {
            v: "1.0", instanceList: [], open: function (t) {
                this.close();
                var n = r(this.vue, t);
                return this.instanceList.push(n), document.body.appendChild(n.$el), n
            }, close: function () {
                if (this.instanceList.length > 0) {
                    this.instanceList.pop().visible = !1, this.close()
                }
                return !1
            }, loading: function (t) {
                var n = {content: t, type: 2};
                this.open(n)
            }, toast: function (t) {
                var n = {
                    content: "string" == typeof t ? t : t.content ? t.content : "",
                    icon: t.className ? t.className : "",
                    skin: "msg",
                    time: t.time ? t.time : 2e3
                };
                this.open(n)
            }, dialog: function (t) {
                var n = this, e = {
                    content: t.content ? t.content : "",
                    time: t.time ? t.time : 0,
                    title: t.title ? t.title : "",
                    btn: t.btn ? t.btn : "",
                    contentClass: t.contentClass ? t.contentClass : "",
                    shadeClose: t.shadeClose !== false ? false : true
                };
                return new o.a(function (t, r) {
                    e.callback = function (e) {
                        t(e), n.close()
                    }, n.open(e)
                })
            }, footer: function (t) {
                var n = this, e = {skin: "footer", content: t.content ? t.content : "", btn: t.btn ? t.btn : []};
                return new o.a(function (t, r) {
                    e.callback = function (e) {
                        t(e), n.close()
                    }, n.open(e)
                })
            }
        };
        u.install = function (t, n) {
            u.vue = t, t.prototype.$layer = u
        }, n.default = u
    }])
});
