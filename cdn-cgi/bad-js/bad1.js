import {
  b as I,
  c as P,
} from "https://app.gitbook.com/public/app/chunks/chunk-6BTEMRKY.min.js";
import "https://app.gitbook.com/public/app/chunks/chunk-6STEEV7T.min.js";
import "https://app.gitbook.com/public/app/chunks/chunk-METM5DVO.min.js";
import "https://app.gitbook.com/public/app/chunks/chunk-O5YQ63IM.min.js";
import "https://app.gitbook.com/public/app/chunks/chunk-NFJC7XLY.min.js";
import "https://app.gitbook.com/public/app/chunks/chunk-3JDS2C3M.min.js";
import "https://app.gitbook.com/public/app/chunks/chunk-3JLKLWA5.min.js";
import {
  P as U,
  a as b,
  b as B,
  yd as j,
} from "https://app.gitbook.com/public/app/chunks/chunk-NPWG5RF5.min.js";
import "https://app.gitbook.com/public/app/chunks/chunk-QJZ4EDPX.min.js";
import "https://app.gitbook.com/public/app/chunks/chunk-56MW2UEJ.min.js";
import "https://app.gitbook.com/public/app/chunks/chunk-CRVDFOWB.min.js";
import "https://app.gitbook.com/public/app/chunks/chunk-REWI2BFW.min.js";
import {
  D as x,
  O as D,
} from "https://app.gitbook.com/public/app/chunks/chunk-TJ7PYJU6.min.js";
import "https://app.gitbook.com/public/app/chunks/chunk-KCINV3S7.min.js";
import { a as M } from "https://app.gitbook.com/public/app/chunks/chunk-2VHNAIGO.min.js";
import {
  g as q,
  i as C,
  k as g,
} from "https://app.gitbook.com/public/app/chunks/chunk-COSHZCUI.min.js";
var L = q((Z, O) => {
  g();
  var E = (function () {
    var _ = String.fromCharCode,
      y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      S = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
      T = {};
    function k(n, t) {
      if (!T[n]) {
        T[n] = {};
        for (var a = 0; a < n.length; a++) T[n][n.charAt(a)] = a;
      }
      return T[n][t];
    }
    var w = {
      compressToBase64: function (n) {
        if (n == null) return "";
        var t = w._compress(n, 6, function (a) {
          return y.charAt(a);
        });
        switch (t.length % 4) {
          default:
          case 0:
            return t;
          case 1:
            return t + "===";
          case 2:
            return t + "==";
          case 3:
            return t + "=";
        }
      },
      decompressFromBase64: function (n) {
        return n == null
          ? ""
          : n == ""
          ? null
          : w._decompress(n.length, 32, function (t) {
              return k(y, n.charAt(t));
            });
      },
      compressToUTF16: function (n) {
        return n == null
          ? ""
          : w._compress(n, 15, function (t) {
              return _(t + 32);
            }) + " ";
      },
      decompressFromUTF16: function (n) {
        return n == null
          ? ""
          : n == ""
          ? null
          : w._decompress(n.length, 16384, function (t) {
              return n.charCodeAt(t) - 32;
            });
      },
      compressToUint8Array: function (n) {
        for (
          var t = w.compress(n),
            a = new Uint8Array(t.length * 2),
            i = 0,
            s = t.length;
          i < s;
          i++
        ) {
          var p = t.charCodeAt(i);
          (a[i * 2] = p >>> 8), (a[i * 2 + 1] = p % 256);
        }
        return a;
      },
      decompressFromUint8Array: function (n) {
        if (n == null) return w.decompress(n);
        for (var t = new Array(n.length / 2), a = 0, i = t.length; a < i; a++)
          t[a] = n[a * 2] * 256 + n[a * 2 + 1];
        var s = [];
        return (
          t.forEach(function (p) {
            s.push(_(p));
          }),
          w.decompress(s.join(""))
        );
      },
      compressToEncodedURIComponent: function (n) {
        return n == null
          ? ""
          : w._compress(n, 6, function (t) {
              return S.charAt(t);
            });
      },
      decompressFromEncodedURIComponent: function (n) {
        return n == null
          ? ""
          : n == ""
          ? null
          : ((n = n.replace(/ /g, "+")),
            w._decompress(n.length, 32, function (t) {
              return k(S, n.charAt(t));
            }));
      },
      compress: function (n) {
        return w._compress(n, 16, function (t) {
          return _(t);
        });
      },
      _compress: function (n, t, a) {
        if (n == null) return "";
        var i,
          s,
          p = {},
          h = {},
          m = "",
          v = "",
          f = "",
          u = 2,
          A = 3,
          c = 2,
          l = [],
          e = 0,
          o = 0,
          d;
        for (d = 0; d < n.length; d += 1)
          if (
            ((m = n.charAt(d)),
            Object.prototype.hasOwnProperty.call(p, m) ||
              ((p[m] = A++), (h[m] = !0)),
            (v = f + m),
            Object.prototype.hasOwnProperty.call(p, v))
          )
            f = v;
          else {
            if (Object.prototype.hasOwnProperty.call(h, f)) {
              if (f.charCodeAt(0) < 256) {
                for (i = 0; i < c; i++)
                  (e = e << 1),
                    o == t - 1 ? ((o = 0), l.push(a(e)), (e = 0)) : o++;
                for (s = f.charCodeAt(0), i = 0; i < 8; i++)
                  (e = (e << 1) | (s & 1)),
                    o == t - 1 ? ((o = 0), l.push(a(e)), (e = 0)) : o++,
                    (s = s >> 1);
              } else {
                for (s = 1, i = 0; i < c; i++)
                  (e = (e << 1) | s),
                    o == t - 1 ? ((o = 0), l.push(a(e)), (e = 0)) : o++,
                    (s = 0);
                for (s = f.charCodeAt(0), i = 0; i < 16; i++)
                  (e = (e << 1) | (s & 1)),
                    o == t - 1 ? ((o = 0), l.push(a(e)), (e = 0)) : o++,
                    (s = s >> 1);
              }
              u--, u == 0 && ((u = Math.pow(2, c)), c++), delete h[f];
            } else
              for (s = p[f], i = 0; i < c; i++)
                (e = (e << 1) | (s & 1)),
                  o == t - 1 ? ((o = 0), l.push(a(e)), (e = 0)) : o++,
                  (s = s >> 1);
            u--,
              u == 0 && ((u = Math.pow(2, c)), c++),
              (p[v] = A++),
              (f = String(m));
          }
        if (f !== "") {
          if (Object.prototype.hasOwnProperty.call(h, f)) {
            if (f.charCodeAt(0) < 256) {
              for (i = 0; i < c; i++)
                (e = e << 1),
                  o == t - 1 ? ((o = 0), l.push(a(e)), (e = 0)) : o++;
              for (s = f.charCodeAt(0), i = 0; i < 8; i++)
                (e = (e << 1) | (s & 1)),
                  o == t - 1 ? ((o = 0), l.push(a(e)), (e = 0)) : o++,
                  (s = s >> 1);
            } else {
              for (s = 1, i = 0; i < c; i++)
                (e = (e << 1) | s),
                  o == t - 1 ? ((o = 0), l.push(a(e)), (e = 0)) : o++,
                  (s = 0);
              for (s = f.charCodeAt(0), i = 0; i < 16; i++)
                (e = (e << 1) | (s & 1)),
                  o == t - 1 ? ((o = 0), l.push(a(e)), (e = 0)) : o++,
                  (s = s >> 1);
            }
            u--, u == 0 && ((u = Math.pow(2, c)), c++), delete h[f];
          } else
            for (s = p[f], i = 0; i < c; i++)
              (e = (e << 1) | (s & 1)),
                o == t - 1 ? ((o = 0), l.push(a(e)), (e = 0)) : o++,
                (s = s >> 1);
          u--, u == 0 && ((u = Math.pow(2, c)), c++);
        }
        for (s = 2, i = 0; i < c; i++)
          (e = (e << 1) | (s & 1)),
            o == t - 1 ? ((o = 0), l.push(a(e)), (e = 0)) : o++,
            (s = s >> 1);
        for (;;)
          if (((e = e << 1), o == t - 1)) {
            l.push(a(e));
            break;
          } else o++;
        return l.join("");
      },
      decompress: function (n) {
        return n == null
          ? ""
          : n == ""
          ? null
          : w._decompress(n.length, 32768, function (t) {
              return n.charCodeAt(t);
            });
      },
      _decompress: function (n, t, a) {
        var i = [],
          s,
          p = 4,
          h = 4,
          m = 3,
          v = "",
          f = [],
          u,
          A,
          c,
          l,
          e,
          o,
          d,
          r = { val: a(0), position: t, index: 1 };
        for (u = 0; u < 3; u += 1) i[u] = u;
        for (c = 0, e = Math.pow(2, 2), o = 1; o != e; )
          (l = r.val & r.position),
            (r.position >>= 1),
            r.position == 0 && ((r.position = t), (r.val = a(r.index++))),
            (c |= (l > 0 ? 1 : 0) * o),
            (o <<= 1);
        switch ((s = c)) {
          case 0:
            for (c = 0, e = Math.pow(2, 8), o = 1; o != e; )
              (l = r.val & r.position),
                (r.position >>= 1),
                r.position == 0 && ((r.position = t), (r.val = a(r.index++))),
                (c |= (l > 0 ? 1 : 0) * o),
                (o <<= 1);
            d = _(c);
            break;
          case 1:
            for (c = 0, e = Math.pow(2, 16), o = 1; o != e; )
              (l = r.val & r.position),
                (r.position >>= 1),
                r.position == 0 && ((r.position = t), (r.val = a(r.index++))),
                (c |= (l > 0 ? 1 : 0) * o),
                (o <<= 1);
            d = _(c);
            break;
          case 2:
            return "";
        }
        for (i[3] = d, A = d, f.push(d); ; ) {
          if (r.index > n) return "";
          for (c = 0, e = Math.pow(2, m), o = 1; o != e; )
            (l = r.val & r.position),
              (r.position >>= 1),
              r.position == 0 && ((r.position = t), (r.val = a(r.index++))),
              (c |= (l > 0 ? 1 : 0) * o),
              (o <<= 1);
          switch ((d = c)) {
            case 0:
              for (c = 0, e = Math.pow(2, 8), o = 1; o != e; )
                (l = r.val & r.position),
                  (r.position >>= 1),
                  r.position == 0 && ((r.position = t), (r.val = a(r.index++))),
                  (c |= (l > 0 ? 1 : 0) * o),
                  (o <<= 1);
              (i[h++] = _(c)), (d = h - 1), p--;
              break;
            case 1:
              for (c = 0, e = Math.pow(2, 16), o = 1; o != e; )
                (l = r.val & r.position),
                  (r.position >>= 1),
                  r.position == 0 && ((r.position = t), (r.val = a(r.index++))),
                  (c |= (l > 0 ? 1 : 0) * o),
                  (o <<= 1);
              (i[h++] = _(c)), (d = h - 1), p--;
              break;
            case 2:
              return f.join("");
          }
          if ((p == 0 && ((p = Math.pow(2, m)), m++), i[d])) v = i[d];
          else if (d === h) v = A + A.charAt(0);
          else return null;
          f.push(v),
            (i[h++] = A + v.charAt(0)),
            p--,
            (A = v),
            p == 0 && ((p = Math.pow(2, m)), m++);
        }
      },
    };
    return w;
  })();
  typeof define == "function" && define.amd
    ? define(function () {
        return E;
      })
    : typeof O != "undefined" && O != null && (O.exports = E);
});
g();
var K = C(L());
D();
g();
var R = M("browser-compatibility");
function z() {
  let _ = [
    "webcache.googleusercontent.com",
    "translate.googleusercontent.com",
    "translate.google.com",
  ];
  return !window.location.hostname || _.includes(window.location.hostname)
    ? (R.warning(
        "The application is served over an unsupported hostname and has been made static."
      ),
      !1)
    : G()
    ? !0
    : (R.warning(
        "Your browser is missing required features, the application has been made static."
      ),
      !1);
}
function G() {
  try {
    if ("\u212B".normalize("NFKD") !== "A\u030A") return !1;
  } catch (_) {
    return !1;
  }
  return !(!window.Intl || ![].flat);
}
if (z()) {
  new URLSearchParams(window.location.search).has("jwt_token") &&
    window.history.replaceState({}, "", window.location.pathname),
    U({
      dsn: b.sentry.dsn,
      release: B,
      projectId: b.firebase.projectId,
      tracesSampling: b.sentry.tracesSampling,
    });
  let y = JSON.parse(window.__GITBOOK_INITIAL_PROPS__);
  j({ customToken: y.customToken, waitUserReady: !1 });
  let S = K.default.decompressFromBase64(window.__GITBOOK_INITIAL_STATE__);
  S
    ? (P(JSON.parse(S)),
      x.registerComponent("PublicContentApplication", () => I),
      x.runApplication("PublicContentApplication", {
        hydrate: !0,
        rootTag: document.getElementById("root"),
        initialProps: y,
      }))
    : console.error(
        `Invalid state received from server, content won't be interactive: "${window.__GITBOOK_INITIAL_STATE__}"`
      );
}
//# sourceMappingURL=https://app.gitbook.com/public/app/public-R3ODVBUA.min.js.map
