(() => {
  "use strict";
  const t = "153",
    e = 0,
    n = 1,
    i = 2,
    r = 0,
    a = 1,
    s = 2,
    o = 3,
    l = 1,
    c = 2,
    h = 3,
    u = 0,
    d = 1,
    p = 100,
    m = 0,
    f = 1,
    g = 2,
    _ = 0,
    v = 1,
    x = 2,
    y = 3,
    M = 4,
    S = 5,
    E = 301,
    b = 302,
    w = 303,
    T = 304,
    A = 306,
    R = 1e3,
    C = 1001,
    P = 1002,
    L = 1003,
    U = 1004,
    D = 1005,
    I = 1006,
    N = 1008,
    O = 1009,
    F = 1012,
    z = 1013,
    B = 1014,
    k = 1015,
    H = 1016,
    V = 1020,
    G = 1023,
    W = 1026,
    X = 1027,
    j = 33776,
    Y = 33777,
    q = 33778,
    Z = 33779,
    K = 36492,
    $ = 2300,
    J = 2301,
    Q = 2302,
    tt = 2400,
    et = 2401,
    nt = 2402,
    it = 3001,
    rt = "",
    at = "srgb",
    st = "srgb-linear",
    ot = "display-p3",
    lt = 7680,
    ct = 35044,
    ht = "300 es",
    ut = 1035,
    dt = 2e3,
    pt = 2001;
  class mt {
    addEventListener(t, e) {
      void 0 === this._listeners && (this._listeners = {});
      const n = this._listeners;
      void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
    }
    hasEventListener(t, e) {
      if (void 0 === this._listeners) return !1;
      const n = this._listeners;
      return void 0 !== n[t] && -1 !== n[t].indexOf(e);
    }
    removeEventListener(t, e) {
      if (void 0 === this._listeners) return;
      const n = this._listeners[t];
      if (void 0 !== n) {
        const t = n.indexOf(e);
        -1 !== t && n.splice(t, 1);
      }
    }
    dispatchEvent(t) {
      if (void 0 === this._listeners) return;
      const e = this._listeners[t.type];
      if (void 0 !== e) {
        t.target = this;
        const n = e.slice(0);
        for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
        t.target = null;
      }
    }
  }
  const ft = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ];
  let gt = 1234567;
  const _t = Math.PI / 180,
    vt = 180 / Math.PI;
  function xt() {
    const t = (4294967295 * Math.random()) | 0,
      e = (4294967295 * Math.random()) | 0,
      n = (4294967295 * Math.random()) | 0,
      i = (4294967295 * Math.random()) | 0;
    return (
      ft[255 & t] +
      ft[(t >> 8) & 255] +
      ft[(t >> 16) & 255] +
      ft[(t >> 24) & 255] +
      "-" +
      ft[255 & e] +
      ft[(e >> 8) & 255] +
      "-" +
      ft[((e >> 16) & 15) | 64] +
      ft[(e >> 24) & 255] +
      "-" +
      ft[(63 & n) | 128] +
      ft[(n >> 8) & 255] +
      "-" +
      ft[(n >> 16) & 255] +
      ft[(n >> 24) & 255] +
      ft[255 & i] +
      ft[(i >> 8) & 255] +
      ft[(i >> 16) & 255] +
      ft[(i >> 24) & 255]
    ).toLowerCase();
  }
  function yt(t, e, n) {
    return Math.max(e, Math.min(n, t));
  }
  function Mt(t, e) {
    return ((t % e) + e) % e;
  }
  function St(t, e, n) {
    return (1 - n) * t + n * e;
  }
  function Et(t) {
    return 0 == (t & (t - 1)) && 0 !== t;
  }
  function bt(t) {
    return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
  }
  function wt(t) {
    return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
  }
  function Tt(t, e) {
    switch (e.constructor) {
      case Float32Array:
        return t;
      case Uint32Array:
        return t / 4294967295;
      case Uint16Array:
        return t / 65535;
      case Uint8Array:
        return t / 255;
      case Int32Array:
        return Math.max(t / 2147483647, -1);
      case Int16Array:
        return Math.max(t / 32767, -1);
      case Int8Array:
        return Math.max(t / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function At(t, e) {
    switch (e.constructor) {
      case Float32Array:
        return t;
      case Uint32Array:
        return Math.round(4294967295 * t);
      case Uint16Array:
        return Math.round(65535 * t);
      case Uint8Array:
        return Math.round(255 * t);
      case Int32Array:
        return Math.round(2147483647 * t);
      case Int16Array:
        return Math.round(32767 * t);
      case Int8Array:
        return Math.round(127 * t);
      default:
        throw new Error("Invalid component type.");
    }
  }
  const Rt = {
    DEG2RAD: _t,
    RAD2DEG: vt,
    generateUUID: xt,
    clamp: yt,
    euclideanModulo: Mt,
    mapLinear: function (t, e, n, i, r) {
      return i + ((t - e) * (r - i)) / (n - e);
    },
    inverseLerp: function (t, e, n) {
      return t !== e ? (n - t) / (e - t) : 0;
    },
    lerp: St,
    damp: function (t, e, n, i) {
      return St(t, e, 1 - Math.exp(-n * i));
    },
    pingpong: function (t, e = 1) {
      return e - Math.abs(Mt(t, 2 * e) - e);
    },
    smoothstep: function (t, e, n) {
      return t <= e
        ? 0
        : t >= n
        ? 1
        : (t = (t - e) / (n - e)) * t * (3 - 2 * t);
    },
    smootherstep: function (t, e, n) {
      return t <= e
        ? 0
        : t >= n
        ? 1
        : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
    },
    randInt: function (t, e) {
      return t + Math.floor(Math.random() * (e - t + 1));
    },
    randFloat: function (t, e) {
      return t + Math.random() * (e - t);
    },
    randFloatSpread: function (t) {
      return t * (0.5 - Math.random());
    },
    seededRandom: function (t) {
      void 0 !== t && (gt = t);
      let e = (gt += 1831565813);
      return (
        (e = Math.imul(e ^ (e >>> 15), 1 | e)),
        (e ^= e + Math.imul(e ^ (e >>> 7), 61 | e)),
        ((e ^ (e >>> 14)) >>> 0) / 4294967296
      );
    },
    degToRad: function (t) {
      return t * _t;
    },
    radToDeg: function (t) {
      return t * vt;
    },
    isPowerOfTwo: Et,
    ceilPowerOfTwo: bt,
    floorPowerOfTwo: wt,
    setQuaternionFromProperEuler: function (t, e, n, i, r) {
      const a = Math.cos,
        s = Math.sin,
        o = a(n / 2),
        l = s(n / 2),
        c = a((e + i) / 2),
        h = s((e + i) / 2),
        u = a((e - i) / 2),
        d = s((e - i) / 2),
        p = a((i - e) / 2),
        m = s((i - e) / 2);
      switch (r) {
        case "XYX":
          t.set(o * h, l * u, l * d, o * c);
          break;
        case "YZY":
          t.set(l * d, o * h, l * u, o * c);
          break;
        case "ZXZ":
          t.set(l * u, l * d, o * h, o * c);
          break;
        case "XZX":
          t.set(o * h, l * m, l * p, o * c);
          break;
        case "YXY":
          t.set(l * p, o * h, l * m, o * c);
          break;
        case "ZYZ":
          t.set(l * m, l * p, o * h, o * c);
          break;
        default:
          console.warn(
            "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
              r
          );
      }
    },
    normalize: At,
    denormalize: Tt,
  };
  class Ct {
    constructor(t = 0, e = 0) {
      (Ct.prototype.isVector2 = !0), (this.x = t), (this.y = e);
    }
    get width() {
      return this.x;
    }
    set width(t) {
      this.x = t;
    }
    get height() {
      return this.y;
    }
    set height(t) {
      this.y = t;
    }
    set(t, e) {
      return (this.x = t), (this.y = e), this;
    }
    setScalar(t) {
      return (this.x = t), (this.y = t), this;
    }
    setX(t) {
      return (this.x = t), this;
    }
    setY(t) {
      return (this.y = t), this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t) {
      return (this.x = t.x), (this.y = t.y), this;
    }
    add(t) {
      return (this.x += t.x), (this.y += t.y), this;
    }
    addScalar(t) {
      return (this.x += t), (this.y += t), this;
    }
    addVectors(t, e) {
      return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
    }
    addScaledVector(t, e) {
      return (this.x += t.x * e), (this.y += t.y * e), this;
    }
    sub(t) {
      return (this.x -= t.x), (this.y -= t.y), this;
    }
    subScalar(t) {
      return (this.x -= t), (this.y -= t), this;
    }
    subVectors(t, e) {
      return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
    }
    multiply(t) {
      return (this.x *= t.x), (this.y *= t.y), this;
    }
    multiplyScalar(t) {
      return (this.x *= t), (this.y *= t), this;
    }
    divide(t) {
      return (this.x /= t.x), (this.y /= t.y), this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    applyMatrix3(t) {
      const e = this.x,
        n = this.y,
        i = t.elements;
      return (
        (this.x = i[0] * e + i[3] * n + i[6]),
        (this.y = i[1] * e + i[4] * n + i[7]),
        this
      );
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this
      );
    }
    clamp(t, e) {
      return (
        (this.x = Math.max(t.x, Math.min(e.x, this.x))),
        (this.y = Math.max(t.y, Math.min(e.y, this.y))),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = Math.max(t, Math.min(e, this.x))),
        (this.y = Math.max(t, Math.min(e, this.y))),
        this
      );
    }
    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(t, Math.min(e, n))
      );
    }
    floor() {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    }
    ceil() {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    }
    round() {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        this
      );
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), this;
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    cross(t) {
      return this.x * t.y - this.y * t.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(t) {
      const e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (0 === e) return Math.PI / 2;
      const n = this.dot(t) / e;
      return Math.acos(yt(n, -1, 1));
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      const e = this.x - t.x,
        n = this.y - t.y;
      return e * e + n * n;
    }
    manhattanDistanceTo(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), this
      );
    }
    equals(t) {
      return t.x === this.x && t.y === this.y;
    }
    fromArray(t, e = 0) {
      return (this.x = t[e]), (this.y = t[e + 1]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this.x), (t[e + 1] = this.y), t;
    }
    fromBufferAttribute(t, e) {
      return (this.x = t.getX(e)), (this.y = t.getY(e)), this;
    }
    rotateAround(t, e) {
      const n = Math.cos(e),
        i = Math.sin(e),
        r = this.x - t.x,
        a = this.y - t.y;
      return (
        (this.x = r * n - a * i + t.x), (this.y = r * i + a * n + t.y), this
      );
    }
    random() {
      return (this.x = Math.random()), (this.y = Math.random()), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  }
  class Pt {
    constructor(t, e, n, i, r, a, s, o, l) {
      (Pt.prototype.isMatrix3 = !0),
        (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        void 0 !== t && this.set(t, e, n, i, r, a, s, o, l);
    }
    set(t, e, n, i, r, a, s, o, l) {
      const c = this.elements;
      return (
        (c[0] = t),
        (c[1] = i),
        (c[2] = s),
        (c[3] = e),
        (c[4] = r),
        (c[5] = o),
        (c[6] = n),
        (c[7] = a),
        (c[8] = l),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(t) {
      const e = this.elements,
        n = t.elements;
      return (
        (e[0] = n[0]),
        (e[1] = n[1]),
        (e[2] = n[2]),
        (e[3] = n[3]),
        (e[4] = n[4]),
        (e[5] = n[5]),
        (e[6] = n[6]),
        (e[7] = n[7]),
        (e[8] = n[8]),
        this
      );
    }
    extractBasis(t, e, n) {
      return (
        t.setFromMatrix3Column(this, 0),
        e.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
      );
    }
    setFromMatrix4(t) {
      const e = t.elements;
      return (
        this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
      );
    }
    multiply(t) {
      return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      const n = t.elements,
        i = e.elements,
        r = this.elements,
        a = n[0],
        s = n[3],
        o = n[6],
        l = n[1],
        c = n[4],
        h = n[7],
        u = n[2],
        d = n[5],
        p = n[8],
        m = i[0],
        f = i[3],
        g = i[6],
        _ = i[1],
        v = i[4],
        x = i[7],
        y = i[2],
        M = i[5],
        S = i[8];
      return (
        (r[0] = a * m + s * _ + o * y),
        (r[3] = a * f + s * v + o * M),
        (r[6] = a * g + s * x + o * S),
        (r[1] = l * m + c * _ + h * y),
        (r[4] = l * f + c * v + h * M),
        (r[7] = l * g + c * x + h * S),
        (r[2] = u * m + d * _ + p * y),
        (r[5] = u * f + d * v + p * M),
        (r[8] = u * g + d * x + p * S),
        this
      );
    }
    multiplyScalar(t) {
      const e = this.elements;
      return (
        (e[0] *= t),
        (e[3] *= t),
        (e[6] *= t),
        (e[1] *= t),
        (e[4] *= t),
        (e[7] *= t),
        (e[2] *= t),
        (e[5] *= t),
        (e[8] *= t),
        this
      );
    }
    determinant() {
      const t = this.elements,
        e = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        a = t[4],
        s = t[5],
        o = t[6],
        l = t[7],
        c = t[8];
      return (
        e * a * c - e * s * l - n * r * c + n * s * o + i * r * l - i * a * o
      );
    }
    invert() {
      const t = this.elements,
        e = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        a = t[4],
        s = t[5],
        o = t[6],
        l = t[7],
        c = t[8],
        h = c * a - s * l,
        u = s * o - c * r,
        d = l * r - a * o,
        p = e * h + n * u + i * d;
      if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const m = 1 / p;
      return (
        (t[0] = h * m),
        (t[1] = (i * l - c * n) * m),
        (t[2] = (s * n - i * a) * m),
        (t[3] = u * m),
        (t[4] = (c * e - i * o) * m),
        (t[5] = (i * r - s * e) * m),
        (t[6] = d * m),
        (t[7] = (n * o - l * e) * m),
        (t[8] = (a * e - n * r) * m),
        this
      );
    }
    transpose() {
      let t;
      const e = this.elements;
      return (
        (t = e[1]),
        (e[1] = e[3]),
        (e[3] = t),
        (t = e[2]),
        (e[2] = e[6]),
        (e[6] = t),
        (t = e[5]),
        (e[5] = e[7]),
        (e[7] = t),
        this
      );
    }
    getNormalMatrix(t) {
      return this.setFromMatrix4(t).invert().transpose();
    }
    transposeIntoArray(t) {
      const e = this.elements;
      return (
        (t[0] = e[0]),
        (t[1] = e[3]),
        (t[2] = e[6]),
        (t[3] = e[1]),
        (t[4] = e[4]),
        (t[5] = e[7]),
        (t[6] = e[2]),
        (t[7] = e[5]),
        (t[8] = e[8]),
        this
      );
    }
    setUvTransform(t, e, n, i, r, a, s) {
      const o = Math.cos(r),
        l = Math.sin(r);
      return (
        this.set(
          n * o,
          n * l,
          -n * (o * a + l * s) + a + t,
          -i * l,
          i * o,
          -i * (-l * a + o * s) + s + e,
          0,
          0,
          1
        ),
        this
      );
    }
    scale(t, e) {
      return this.premultiply(Lt.makeScale(t, e)), this;
    }
    rotate(t) {
      return this.premultiply(Lt.makeRotation(-t)), this;
    }
    translate(t, e) {
      return this.premultiply(Lt.makeTranslation(t, e)), this;
    }
    makeTranslation(t, e) {
      return (
        t.isVector2
          ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1)
          : this.set(1, 0, t, 0, 1, e, 0, 0, 1),
        this
      );
    }
    makeRotation(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
    }
    makeScale(t, e) {
      return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
    }
    equals(t) {
      const e = this.elements,
        n = t.elements;
      for (let t = 0; t < 9; t++) if (e[t] !== n[t]) return !1;
      return !0;
    }
    fromArray(t, e = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
      return this;
    }
    toArray(t = [], e = 0) {
      const n = this.elements;
      return (
        (t[e] = n[0]),
        (t[e + 1] = n[1]),
        (t[e + 2] = n[2]),
        (t[e + 3] = n[3]),
        (t[e + 4] = n[4]),
        (t[e + 5] = n[5]),
        (t[e + 6] = n[6]),
        (t[e + 7] = n[7]),
        (t[e + 8] = n[8]),
        t
      );
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  const Lt = new Pt();
  function Ut(t) {
    for (let e = t.length - 1; e >= 0; --e) if (t[e] >= 65535) return !0;
    return !1;
  }
  Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array;
  function Dt(t) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", t);
  }
  const It = {};
  function Nt(t) {
    t in It || ((It[t] = !0), console.warn(t));
  }
  function Ot(t) {
    return t < 0.04045
      ? 0.0773993808 * t
      : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
  }
  function Ft(t) {
    return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
  }
  const zt = new Pt().fromArray([
      0.8224621, 0.0331941, 0.0170827, 0.177538, 0.9668058, 0.0723974, -1e-7,
      1e-7, 0.9105199,
    ]),
    Bt = new Pt().fromArray([
      1.2249401, -0.0420569, -0.0196376, -0.2249404, 1.0420571, -0.0786361,
      1e-7, 0, 1.0982735,
    ]);
  const kt = {
      [st]: (t) => t,
      [at]: (t) => t.convertSRGBToLinear(),
      [ot]: function (t) {
        return t.convertSRGBToLinear().applyMatrix3(Bt);
      },
    },
    Ht = {
      [st]: (t) => t,
      [at]: (t) => t.convertLinearToSRGB(),
      [ot]: function (t) {
        return t.applyMatrix3(zt).convertLinearToSRGB();
      },
    },
    Vt = {
      enabled: !0,
      get legacyMode() {
        return (
          console.warn(
            "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
          ),
          !this.enabled
        );
      },
      set legacyMode(t) {
        console.warn(
          "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
        ),
          (this.enabled = !t);
      },
      get workingColorSpace() {
        return st;
      },
      set workingColorSpace(t) {
        console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
      },
      convert: function (t, e, n) {
        if (!1 === this.enabled || e === n || !e || !n) return t;
        const i = kt[e],
          r = Ht[n];
        if (void 0 === i || void 0 === r)
          throw new Error(
            `Unsupported color space conversion, "${e}" to "${n}".`
          );
        return r(i(t));
      },
      fromWorkingColorSpace: function (t, e) {
        return this.convert(t, this.workingColorSpace, e);
      },
      toWorkingColorSpace: function (t, e) {
        return this.convert(t, e, this.workingColorSpace);
      },
    };
  let Gt;
  class Wt {
    static getDataURL(t) {
      if (/^data:/i.test(t.src)) return t.src;
      if ("undefined" == typeof HTMLCanvasElement) return t.src;
      let e;
      if (t instanceof HTMLCanvasElement) e = t;
      else {
        void 0 === Gt && (Gt = Dt("canvas")),
          (Gt.width = t.width),
          (Gt.height = t.height);
        const n = Gt.getContext("2d");
        t instanceof ImageData
          ? n.putImageData(t, 0, 0)
          : n.drawImage(t, 0, 0, t.width, t.height),
          (e = Gt);
      }
      return e.width > 2048 || e.height > 2048
        ? (console.warn(
            "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
            t
          ),
          e.toDataURL("image/jpeg", 0.6))
        : e.toDataURL("image/png");
    }
    static sRGBToLinear(t) {
      if (
        ("undefined" != typeof HTMLImageElement &&
          t instanceof HTMLImageElement) ||
        ("undefined" != typeof HTMLCanvasElement &&
          t instanceof HTMLCanvasElement) ||
        ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
      ) {
        const e = Dt("canvas");
        (e.width = t.width), (e.height = t.height);
        const n = e.getContext("2d");
        n.drawImage(t, 0, 0, t.width, t.height);
        const i = n.getImageData(0, 0, t.width, t.height),
          r = i.data;
        for (let t = 0; t < r.length; t++) r[t] = 255 * Ot(r[t] / 255);
        return n.putImageData(i, 0, 0), e;
      }
      if (t.data) {
        const e = t.data.slice(0);
        for (let t = 0; t < e.length; t++)
          e instanceof Uint8Array || e instanceof Uint8ClampedArray
            ? (e[t] = Math.floor(255 * Ot(e[t] / 255)))
            : (e[t] = Ot(e[t]));
        return { data: e, width: t.width, height: t.height };
      }
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        t
      );
    }
  }
  let Xt = 0;
  class jt {
    constructor(t = null) {
      (this.isSource = !0),
        Object.defineProperty(this, "id", { value: Xt++ }),
        (this.uuid = xt()),
        (this.data = t),
        (this.version = 0);
    }
    set needsUpdate(t) {
      !0 === t && this.version++;
    }
    toJSON(t) {
      const e = void 0 === t || "string" == typeof t;
      if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
      const n = { uuid: this.uuid, url: "" },
        i = this.data;
      if (null !== i) {
        let t;
        if (Array.isArray(i)) {
          t = [];
          for (let e = 0, n = i.length; e < n; e++)
            i[e].isDataTexture ? t.push(Yt(i[e].image)) : t.push(Yt(i[e]));
        } else t = Yt(i);
        n.url = t;
      }
      return e || (t.images[this.uuid] = n), n;
    }
  }
  function Yt(t) {
    return ("undefined" != typeof HTMLImageElement &&
      t instanceof HTMLImageElement) ||
      ("undefined" != typeof HTMLCanvasElement &&
        t instanceof HTMLCanvasElement) ||
      ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
      ? Wt.getDataURL(t)
      : t.data
      ? {
          data: Array.from(t.data),
          width: t.width,
          height: t.height,
          type: t.data.constructor.name,
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  let qt = 0;
  class Zt extends mt {
    constructor(
      t = Zt.DEFAULT_IMAGE,
      e = Zt.DEFAULT_MAPPING,
      n = 1001,
      i = 1001,
      r = 1006,
      a = 1008,
      s = 1023,
      o = 1009,
      l = Zt.DEFAULT_ANISOTROPY,
      c = ""
    ) {
      super(),
        (this.isTexture = !0),
        Object.defineProperty(this, "id", { value: qt++ }),
        (this.uuid = xt()),
        (this.name = ""),
        (this.source = new jt(t)),
        (this.mipmaps = []),
        (this.mapping = e),
        (this.channel = 0),
        (this.wrapS = n),
        (this.wrapT = i),
        (this.magFilter = r),
        (this.minFilter = a),
        (this.anisotropy = l),
        (this.format = s),
        (this.internalFormat = null),
        (this.type = o),
        (this.offset = new Ct(0, 0)),
        (this.repeat = new Ct(1, 1)),
        (this.center = new Ct(0, 0)),
        (this.rotation = 0),
        (this.matrixAutoUpdate = !0),
        (this.matrix = new Pt()),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        "string" == typeof c
          ? (this.colorSpace = c)
          : (Nt(
              "THREE.Texture: Property .encoding has been replaced by .colorSpace."
            ),
            (this.colorSpace = c === it ? at : rt)),
        (this.userData = {}),
        (this.version = 0),
        (this.onUpdate = null),
        (this.isRenderTargetTexture = !1),
        (this.needsPMREMUpdate = !1);
    }
    get image() {
      return this.source.data;
    }
    set image(t = null) {
      this.source.data = t;
    }
    updateMatrix() {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return (
        (this.name = t.name),
        (this.source = t.source),
        (this.mipmaps = t.mipmaps.slice(0)),
        (this.mapping = t.mapping),
        (this.channel = t.channel),
        (this.wrapS = t.wrapS),
        (this.wrapT = t.wrapT),
        (this.magFilter = t.magFilter),
        (this.minFilter = t.minFilter),
        (this.anisotropy = t.anisotropy),
        (this.format = t.format),
        (this.internalFormat = t.internalFormat),
        (this.type = t.type),
        this.offset.copy(t.offset),
        this.repeat.copy(t.repeat),
        this.center.copy(t.center),
        (this.rotation = t.rotation),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        this.matrix.copy(t.matrix),
        (this.generateMipmaps = t.generateMipmaps),
        (this.premultiplyAlpha = t.premultiplyAlpha),
        (this.flipY = t.flipY),
        (this.unpackAlignment = t.unpackAlignment),
        (this.colorSpace = t.colorSpace),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        (this.needsUpdate = !0),
        this
      );
    }
    toJSON(t) {
      const e = void 0 === t || "string" == typeof t;
      if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
      const n = {
        metadata: {
          version: 4.6,
          type: "Texture",
          generator: "Texture.toJSON",
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(t).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment,
      };
      return (
        Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        e || (t.textures[this.uuid] = n),
        n
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(t) {
      if (300 !== this.mapping) return t;
      if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
        switch (this.wrapS) {
          case R:
            t.x = t.x - Math.floor(t.x);
            break;
          case C:
            t.x = t.x < 0 ? 0 : 1;
            break;
          case P:
            1 === Math.abs(Math.floor(t.x) % 2)
              ? (t.x = Math.ceil(t.x) - t.x)
              : (t.x = t.x - Math.floor(t.x));
        }
      if (t.y < 0 || t.y > 1)
        switch (this.wrapT) {
          case R:
            t.y = t.y - Math.floor(t.y);
            break;
          case C:
            t.y = t.y < 0 ? 0 : 1;
            break;
          case P:
            1 === Math.abs(Math.floor(t.y) % 2)
              ? (t.y = Math.ceil(t.y) - t.y)
              : (t.y = t.y - Math.floor(t.y));
        }
      return this.flipY && (t.y = 1 - t.y), t;
    }
    set needsUpdate(t) {
      !0 === t && (this.version++, (this.source.needsUpdate = !0));
    }
    get encoding() {
      return (
        Nt(
          "THREE.Texture: Property .encoding has been replaced by .colorSpace."
        ),
        this.colorSpace === at ? it : 3e3
      );
    }
    set encoding(t) {
      Nt("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
        (this.colorSpace = t === it ? at : rt);
    }
  }
  (Zt.DEFAULT_IMAGE = null),
    (Zt.DEFAULT_MAPPING = 300),
    (Zt.DEFAULT_ANISOTROPY = 1);
  class Kt {
    constructor(t = 0, e = 0, n = 0, i = 1) {
      (Kt.prototype.isVector4 = !0),
        (this.x = t),
        (this.y = e),
        (this.z = n),
        (this.w = i);
    }
    get width() {
      return this.z;
    }
    set width(t) {
      this.z = t;
    }
    get height() {
      return this.w;
    }
    set height(t) {
      this.w = t;
    }
    set(t, e, n, i) {
      return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
    }
    setScalar(t) {
      return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
    }
    setX(t) {
      return (this.x = t), this;
    }
    setY(t) {
      return (this.y = t), this;
    }
    setZ(t) {
      return (this.z = t), this;
    }
    setW(t) {
      return (this.w = t), this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(t) {
      return (
        (this.x = t.x),
        (this.y = t.y),
        (this.z = t.z),
        (this.w = void 0 !== t.w ? t.w : 1),
        this
      );
    }
    add(t) {
      return (
        (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
      );
    }
    addScalar(t) {
      return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
    }
    addVectors(t, e) {
      return (
        (this.x = t.x + e.x),
        (this.y = t.y + e.y),
        (this.z = t.z + e.z),
        (this.w = t.w + e.w),
        this
      );
    }
    addScaledVector(t, e) {
      return (
        (this.x += t.x * e),
        (this.y += t.y * e),
        (this.z += t.z * e),
        (this.w += t.w * e),
        this
      );
    }
    sub(t) {
      return (
        (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this
      );
    }
    subScalar(t) {
      return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this;
    }
    subVectors(t, e) {
      return (
        (this.x = t.x - e.x),
        (this.y = t.y - e.y),
        (this.z = t.z - e.z),
        (this.w = t.w - e.w),
        this
      );
    }
    multiply(t) {
      return (
        (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this
      );
    }
    multiplyScalar(t) {
      return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this;
    }
    applyMatrix4(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = this.w,
        a = t.elements;
      return (
        (this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r),
        (this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r),
        (this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r),
        (this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r),
        this
      );
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    setAxisAngleFromQuaternion(t) {
      this.w = 2 * Math.acos(t.w);
      const e = Math.sqrt(1 - t.w * t.w);
      return (
        e < 1e-4
          ? ((this.x = 1), (this.y = 0), (this.z = 0))
          : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
        this
      );
    }
    setAxisAngleFromRotationMatrix(t) {
      let e, n, i, r;
      const a = 0.01,
        s = 0.1,
        o = t.elements,
        l = o[0],
        c = o[4],
        h = o[8],
        u = o[1],
        d = o[5],
        p = o[9],
        m = o[2],
        f = o[6],
        g = o[10];
      if (Math.abs(c - u) < a && Math.abs(h - m) < a && Math.abs(p - f) < a) {
        if (
          Math.abs(c + u) < s &&
          Math.abs(h + m) < s &&
          Math.abs(p + f) < s &&
          Math.abs(l + d + g - 3) < s
        )
          return this.set(1, 0, 0, 0), this;
        e = Math.PI;
        const t = (l + 1) / 2,
          o = (d + 1) / 2,
          _ = (g + 1) / 2,
          v = (c + u) / 4,
          x = (h + m) / 4,
          y = (p + f) / 4;
        return (
          t > o && t > _
            ? t < a
              ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
              : ((n = Math.sqrt(t)), (i = v / n), (r = x / n))
            : o > _
            ? o < a
              ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
              : ((i = Math.sqrt(o)), (n = v / i), (r = y / i))
            : _ < a
            ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
            : ((r = Math.sqrt(_)), (n = x / r), (i = y / r)),
          this.set(n, i, r, e),
          this
        );
      }
      let _ = Math.sqrt(
        (f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c)
      );
      return (
        Math.abs(_) < 0.001 && (_ = 1),
        (this.x = (f - p) / _),
        (this.y = (h - m) / _),
        (this.z = (u - c) / _),
        (this.w = Math.acos((l + d + g - 1) / 2)),
        this
      );
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)),
        (this.y = Math.min(this.y, t.y)),
        (this.z = Math.min(this.z, t.z)),
        (this.w = Math.min(this.w, t.w)),
        this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)),
        (this.y = Math.max(this.y, t.y)),
        (this.z = Math.max(this.z, t.z)),
        (this.w = Math.max(this.w, t.w)),
        this
      );
    }
    clamp(t, e) {
      return (
        (this.x = Math.max(t.x, Math.min(e.x, this.x))),
        (this.y = Math.max(t.y, Math.min(e.y, this.y))),
        (this.z = Math.max(t.z, Math.min(e.z, this.z))),
        (this.w = Math.max(t.w, Math.min(e.w, this.w))),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = Math.max(t, Math.min(e, this.x))),
        (this.y = Math.max(t, Math.min(e, this.y))),
        (this.z = Math.max(t, Math.min(e, this.z))),
        (this.w = Math.max(t, Math.min(e, this.w))),
        this
      );
    }
    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(t, Math.min(e, n))
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        (this.w = Math.floor(this.w)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        (this.w = Math.ceil(this.w)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        (this.w = Math.round(this.w)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
        (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
        this
      );
    }
    negate() {
      return (
        (this.x = -this.x),
        (this.y = -this.y),
        (this.z = -this.z),
        (this.w = -this.w),
        this
      );
    }
    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
    }
    lengthSq() {
      return (
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    length() {
      return Math.sqrt(
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    manhattanLength() {
      return (
        Math.abs(this.x) +
        Math.abs(this.y) +
        Math.abs(this.z) +
        Math.abs(this.w)
      );
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e),
        (this.y += (t.y - this.y) * e),
        (this.z += (t.z - this.z) * e),
        (this.w += (t.w - this.w) * e),
        this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n),
        (this.y = t.y + (e.y - t.y) * n),
        (this.z = t.z + (e.z - t.z) * n),
        (this.w = t.w + (e.w - t.w) * n),
        this
      );
    }
    equals(t) {
      return (
        t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
      );
    }
    fromArray(t, e = 0) {
      return (
        (this.x = t[e]),
        (this.y = t[e + 1]),
        (this.z = t[e + 2]),
        (this.w = t[e + 3]),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this.x),
        (t[e + 1] = this.y),
        (t[e + 2] = this.z),
        (t[e + 3] = this.w),
        t
      );
    }
    fromBufferAttribute(t, e) {
      return (
        (this.x = t.getX(e)),
        (this.y = t.getY(e)),
        (this.z = t.getZ(e)),
        (this.w = t.getW(e)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        (this.w = Math.random()),
        this
      );
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  }
  class $t extends mt {
    constructor(t = 1, e = 1, n = {}) {
      super(),
        (this.isWebGLRenderTarget = !0),
        (this.width = t),
        (this.height = e),
        (this.depth = 1),
        (this.scissor = new Kt(0, 0, t, e)),
        (this.scissorTest = !1),
        (this.viewport = new Kt(0, 0, t, e));
      const i = { width: t, height: e, depth: 1 };
      void 0 !== n.encoding &&
        (Nt(
          "THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."
        ),
        (n.colorSpace = n.encoding === it ? at : rt)),
        (this.texture = new Zt(
          i,
          n.mapping,
          n.wrapS,
          n.wrapT,
          n.magFilter,
          n.minFilter,
          n.format,
          n.type,
          n.anisotropy,
          n.colorSpace
        )),
        (this.texture.isRenderTargetTexture = !0),
        (this.texture.flipY = !1),
        (this.texture.generateMipmaps =
          void 0 !== n.generateMipmaps && n.generateMipmaps),
        (this.texture.internalFormat =
          void 0 !== n.internalFormat ? n.internalFormat : null),
        (this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : I),
        (this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer),
        (this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer),
        (this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null),
        (this.samples = void 0 !== n.samples ? n.samples : 0);
    }
    setSize(t, e, n = 1) {
      (this.width === t && this.height === e && this.depth === n) ||
        ((this.width = t),
        (this.height = e),
        (this.depth = n),
        (this.texture.image.width = t),
        (this.texture.image.height = e),
        (this.texture.image.depth = n),
        this.dispose()),
        this.viewport.set(0, 0, t, e),
        this.scissor.set(0, 0, t, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      (this.width = t.width),
        (this.height = t.height),
        (this.depth = t.depth),
        this.scissor.copy(t.scissor),
        (this.scissorTest = t.scissorTest),
        this.viewport.copy(t.viewport),
        (this.texture = t.texture.clone()),
        (this.texture.isRenderTargetTexture = !0);
      const e = Object.assign({}, t.texture.image);
      return (
        (this.texture.source = new jt(e)),
        (this.depthBuffer = t.depthBuffer),
        (this.stencilBuffer = t.stencilBuffer),
        null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()),
        (this.samples = t.samples),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  class Jt extends Zt {
    constructor(t = null, e = 1, n = 1, i = 1) {
      super(null),
        (this.isDataArrayTexture = !0),
        (this.image = { data: t, width: e, height: n, depth: i }),
        (this.magFilter = L),
        (this.minFilter = L),
        (this.wrapR = C),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  }
  class Qt extends Zt {
    constructor(t = null, e = 1, n = 1, i = 1) {
      super(null),
        (this.isData3DTexture = !0),
        (this.image = { data: t, width: e, height: n, depth: i }),
        (this.magFilter = L),
        (this.minFilter = L),
        (this.wrapR = C),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  }
  class te {
    constructor(t = 0, e = 0, n = 0, i = 1) {
      (this.isQuaternion = !0),
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._w = i);
    }
    static slerpFlat(t, e, n, i, r, a, s) {
      let o = n[i + 0],
        l = n[i + 1],
        c = n[i + 2],
        h = n[i + 3];
      const u = r[a + 0],
        d = r[a + 1],
        p = r[a + 2],
        m = r[a + 3];
      if (0 === s)
        return (
          (t[e + 0] = o), (t[e + 1] = l), (t[e + 2] = c), void (t[e + 3] = h)
        );
      if (1 === s)
        return (
          (t[e + 0] = u), (t[e + 1] = d), (t[e + 2] = p), void (t[e + 3] = m)
        );
      if (h !== m || o !== u || l !== d || c !== p) {
        let t = 1 - s;
        const e = o * u + l * d + c * p + h * m,
          n = e >= 0 ? 1 : -1,
          i = 1 - e * e;
        if (i > Number.EPSILON) {
          const r = Math.sqrt(i),
            a = Math.atan2(r, e * n);
          (t = Math.sin(t * a) / r), (s = Math.sin(s * a) / r);
        }
        const r = s * n;
        if (
          ((o = o * t + u * r),
          (l = l * t + d * r),
          (c = c * t + p * r),
          (h = h * t + m * r),
          t === 1 - s)
        ) {
          const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
          (o *= t), (l *= t), (c *= t), (h *= t);
        }
      }
      (t[e] = o), (t[e + 1] = l), (t[e + 2] = c), (t[e + 3] = h);
    }
    static multiplyQuaternionsFlat(t, e, n, i, r, a) {
      const s = n[i],
        o = n[i + 1],
        l = n[i + 2],
        c = n[i + 3],
        h = r[a],
        u = r[a + 1],
        d = r[a + 2],
        p = r[a + 3];
      return (
        (t[e] = s * p + c * h + o * d - l * u),
        (t[e + 1] = o * p + c * u + l * h - s * d),
        (t[e + 2] = l * p + c * d + s * u - o * h),
        (t[e + 3] = c * p - s * h - o * u - l * d),
        t
      );
    }
    get x() {
      return this._x;
    }
    set x(t) {
      (this._x = t), this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t) {
      (this._y = t), this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t) {
      (this._z = t), this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(t) {
      (this._w = t), this._onChangeCallback();
    }
    set(t, e, n, i) {
      return (
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._w = i),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t) {
      return (
        (this._x = t.x),
        (this._y = t.y),
        (this._z = t.z),
        (this._w = t.w),
        this._onChangeCallback(),
        this
      );
    }
    setFromEuler(t, e) {
      const n = t._x,
        i = t._y,
        r = t._z,
        a = t._order,
        s = Math.cos,
        o = Math.sin,
        l = s(n / 2),
        c = s(i / 2),
        h = s(r / 2),
        u = o(n / 2),
        d = o(i / 2),
        p = o(r / 2);
      switch (a) {
        case "XYZ":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "YXZ":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        case "ZXY":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "ZYX":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        case "YZX":
          (this._x = u * c * h + l * d * p),
            (this._y = l * d * h + u * c * p),
            (this._z = l * c * p - u * d * h),
            (this._w = l * c * h - u * d * p);
          break;
        case "XZY":
          (this._x = u * c * h - l * d * p),
            (this._y = l * d * h - u * c * p),
            (this._z = l * c * p + u * d * h),
            (this._w = l * c * h + u * d * p);
          break;
        default:
          console.warn(
            "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
              a
          );
      }
      return !1 !== e && this._onChangeCallback(), this;
    }
    setFromAxisAngle(t, e) {
      const n = e / 2,
        i = Math.sin(n);
      return (
        (this._x = t.x * i),
        (this._y = t.y * i),
        (this._z = t.z * i),
        (this._w = Math.cos(n)),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(t) {
      const e = t.elements,
        n = e[0],
        i = e[4],
        r = e[8],
        a = e[1],
        s = e[5],
        o = e[9],
        l = e[2],
        c = e[6],
        h = e[10],
        u = n + s + h;
      if (u > 0) {
        const t = 0.5 / Math.sqrt(u + 1);
        (this._w = 0.25 / t),
          (this._x = (c - o) * t),
          (this._y = (r - l) * t),
          (this._z = (a - i) * t);
      } else if (n > s && n > h) {
        const t = 2 * Math.sqrt(1 + n - s - h);
        (this._w = (c - o) / t),
          (this._x = 0.25 * t),
          (this._y = (i + a) / t),
          (this._z = (r + l) / t);
      } else if (s > h) {
        const t = 2 * Math.sqrt(1 + s - n - h);
        (this._w = (r - l) / t),
          (this._x = (i + a) / t),
          (this._y = 0.25 * t),
          (this._z = (o + c) / t);
      } else {
        const t = 2 * Math.sqrt(1 + h - n - s);
        (this._w = (a - i) / t),
          (this._x = (r + l) / t),
          (this._y = (o + c) / t),
          (this._z = 0.25 * t);
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(t, e) {
      let n = t.dot(e) + 1;
      return (
        n < Number.EPSILON
          ? ((n = 0),
            Math.abs(t.x) > Math.abs(t.z)
              ? ((this._x = -t.y),
                (this._y = t.x),
                (this._z = 0),
                (this._w = n))
              : ((this._x = 0),
                (this._y = -t.z),
                (this._z = t.y),
                (this._w = n)))
          : ((this._x = t.y * e.z - t.z * e.y),
            (this._y = t.z * e.x - t.x * e.z),
            (this._z = t.x * e.y - t.y * e.x),
            (this._w = n)),
        this.normalize()
      );
    }
    angleTo(t) {
      return 2 * Math.acos(Math.abs(yt(this.dot(t), -1, 1)));
    }
    rotateTowards(t, e) {
      const n = this.angleTo(t);
      if (0 === n) return this;
      const i = Math.min(1, e / n);
      return this.slerp(t, i), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return (
        (this._x *= -1),
        (this._y *= -1),
        (this._z *= -1),
        this._onChangeCallback(),
        this
      );
    }
    dot(t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
    }
    lengthSq() {
      return (
        this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
      );
    }
    length() {
      return Math.sqrt(
        this._x * this._x +
          this._y * this._y +
          this._z * this._z +
          this._w * this._w
      );
    }
    normalize() {
      let t = this.length();
      return (
        0 === t
          ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
          : ((t = 1 / t),
            (this._x = this._x * t),
            (this._y = this._y * t),
            (this._z = this._z * t),
            (this._w = this._w * t)),
        this._onChangeCallback(),
        this
      );
    }
    multiply(t) {
      return this.multiplyQuaternions(this, t);
    }
    premultiply(t) {
      return this.multiplyQuaternions(t, this);
    }
    multiplyQuaternions(t, e) {
      const n = t._x,
        i = t._y,
        r = t._z,
        a = t._w,
        s = e._x,
        o = e._y,
        l = e._z,
        c = e._w;
      return (
        (this._x = n * c + a * s + i * l - r * o),
        (this._y = i * c + a * o + r * s - n * l),
        (this._z = r * c + a * l + n * o - i * s),
        (this._w = a * c - n * s - i * o - r * l),
        this._onChangeCallback(),
        this
      );
    }
    slerp(t, e) {
      if (0 === e) return this;
      if (1 === e) return this.copy(t);
      const n = this._x,
        i = this._y,
        r = this._z,
        a = this._w;
      let s = a * t._w + n * t._x + i * t._y + r * t._z;
      if (
        (s < 0
          ? ((this._w = -t._w),
            (this._x = -t._x),
            (this._y = -t._y),
            (this._z = -t._z),
            (s = -s))
          : this.copy(t),
        s >= 1)
      )
        return (this._w = a), (this._x = n), (this._y = i), (this._z = r), this;
      const o = 1 - s * s;
      if (o <= Number.EPSILON) {
        const t = 1 - e;
        return (
          (this._w = t * a + e * this._w),
          (this._x = t * n + e * this._x),
          (this._y = t * i + e * this._y),
          (this._z = t * r + e * this._z),
          this.normalize(),
          this._onChangeCallback(),
          this
        );
      }
      const l = Math.sqrt(o),
        c = Math.atan2(l, s),
        h = Math.sin((1 - e) * c) / l,
        u = Math.sin(e * c) / l;
      return (
        (this._w = a * h + this._w * u),
        (this._x = n * h + this._x * u),
        (this._y = i * h + this._y * u),
        (this._z = r * h + this._z * u),
        this._onChangeCallback(),
        this
      );
    }
    slerpQuaternions(t, e, n) {
      return this.copy(t).slerp(e, n);
    }
    random() {
      const t = Math.random(),
        e = Math.sqrt(1 - t),
        n = Math.sqrt(t),
        i = 2 * Math.PI * Math.random(),
        r = 2 * Math.PI * Math.random();
      return this.set(
        e * Math.cos(i),
        n * Math.sin(r),
        n * Math.cos(r),
        e * Math.sin(i)
      );
    }
    equals(t) {
      return (
        t._x === this._x &&
        t._y === this._y &&
        t._z === this._z &&
        t._w === this._w
      );
    }
    fromArray(t, e = 0) {
      return (
        (this._x = t[e]),
        (this._y = t[e + 1]),
        (this._z = t[e + 2]),
        (this._w = t[e + 3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this._x),
        (t[e + 1] = this._y),
        (t[e + 2] = this._z),
        (t[e + 3] = this._w),
        t
      );
    }
    fromBufferAttribute(t, e) {
      return (
        (this._x = t.getX(e)),
        (this._y = t.getY(e)),
        (this._z = t.getZ(e)),
        (this._w = t.getW(e)),
        this
      );
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(t) {
      return (this._onChangeCallback = t), this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  }
  class ee {
    constructor(t = 0, e = 0, n = 0) {
      (ee.prototype.isVector3 = !0), (this.x = t), (this.y = e), (this.z = n);
    }
    set(t, e, n) {
      return (
        void 0 === n && (n = this.z),
        (this.x = t),
        (this.y = e),
        (this.z = n),
        this
      );
    }
    setScalar(t) {
      return (this.x = t), (this.y = t), (this.z = t), this;
    }
    setX(t) {
      return (this.x = t), this;
    }
    setY(t) {
      return (this.y = t), this;
    }
    setZ(t) {
      return (this.z = t), this;
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw new Error("index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(t) {
      return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
    }
    add(t) {
      return (this.x += t.x), (this.y += t.y), (this.z += t.z), this;
    }
    addScalar(t) {
      return (this.x += t), (this.y += t), (this.z += t), this;
    }
    addVectors(t, e) {
      return (
        (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this
      );
    }
    addScaledVector(t, e) {
      return (
        (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this
      );
    }
    sub(t) {
      return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this;
    }
    subScalar(t) {
      return (this.x -= t), (this.y -= t), (this.z -= t), this;
    }
    subVectors(t, e) {
      return (
        (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this
      );
    }
    multiply(t) {
      return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this;
    }
    multiplyScalar(t) {
      return (this.x *= t), (this.y *= t), (this.z *= t), this;
    }
    multiplyVectors(t, e) {
      return (
        (this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this
      );
    }
    applyEuler(t) {
      return this.applyQuaternion(ie.setFromEuler(t));
    }
    applyAxisAngle(t, e) {
      return this.applyQuaternion(ie.setFromAxisAngle(t, e));
    }
    applyMatrix3(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.elements;
      return (
        (this.x = r[0] * e + r[3] * n + r[6] * i),
        (this.y = r[1] * e + r[4] * n + r[7] * i),
        (this.z = r[2] * e + r[5] * n + r[8] * i),
        this
      );
    }
    applyNormalMatrix(t) {
      return this.applyMatrix3(t).normalize();
    }
    applyMatrix4(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.elements,
        a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
      return (
        (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a),
        (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a),
        (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a),
        this
      );
    }
    applyQuaternion(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.x,
        a = t.y,
        s = t.z,
        o = t.w,
        l = o * e + a * i - s * n,
        c = o * n + s * e - r * i,
        h = o * i + r * n - a * e,
        u = -r * e - a * n - s * i;
      return (
        (this.x = l * o + u * -r + c * -s - h * -a),
        (this.y = c * o + u * -a + h * -r - l * -s),
        (this.z = h * o + u * -s + l * -a - c * -r),
        this
      );
    }
    project(t) {
      return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
        t.projectionMatrix
      );
    }
    unproject(t) {
      return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
        t.matrixWorld
      );
    }
    transformDirection(t) {
      const e = this.x,
        n = this.y,
        i = this.z,
        r = t.elements;
      return (
        (this.x = r[0] * e + r[4] * n + r[8] * i),
        (this.y = r[1] * e + r[5] * n + r[9] * i),
        (this.z = r[2] * e + r[6] * n + r[10] * i),
        this.normalize()
      );
    }
    divide(t) {
      return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)),
        (this.y = Math.min(this.y, t.y)),
        (this.z = Math.min(this.z, t.z)),
        this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)),
        (this.y = Math.max(this.y, t.y)),
        (this.z = Math.max(this.z, t.z)),
        this
      );
    }
    clamp(t, e) {
      return (
        (this.x = Math.max(t.x, Math.min(e.x, this.x))),
        (this.y = Math.max(t.y, Math.min(e.y, this.y))),
        (this.z = Math.max(t.z, Math.min(e.z, this.z))),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = Math.max(t, Math.min(e, this.x))),
        (this.y = Math.max(t, Math.min(e, this.y))),
        (this.z = Math.max(t, Math.min(e, this.z))),
        this
      );
    }
    clampLength(t, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(t, Math.min(e, n))
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
        this
      );
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
    }
    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e),
        (this.y += (t.y - this.y) * e),
        (this.z += (t.z - this.z) * e),
        this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n),
        (this.y = t.y + (e.y - t.y) * n),
        (this.z = t.z + (e.z - t.z) * n),
        this
      );
    }
    cross(t) {
      return this.crossVectors(this, t);
    }
    crossVectors(t, e) {
      const n = t.x,
        i = t.y,
        r = t.z,
        a = e.x,
        s = e.y,
        o = e.z;
      return (
        (this.x = i * o - r * s),
        (this.y = r * a - n * o),
        (this.z = n * s - i * a),
        this
      );
    }
    projectOnVector(t) {
      const e = t.lengthSq();
      if (0 === e) return this.set(0, 0, 0);
      const n = t.dot(this) / e;
      return this.copy(t).multiplyScalar(n);
    }
    projectOnPlane(t) {
      return ne.copy(this).projectOnVector(t), this.sub(ne);
    }
    reflect(t) {
      return this.sub(ne.copy(t).multiplyScalar(2 * this.dot(t)));
    }
    angleTo(t) {
      const e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (0 === e) return Math.PI / 2;
      const n = this.dot(t) / e;
      return Math.acos(yt(n, -1, 1));
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      const e = this.x - t.x,
        n = this.y - t.y,
        i = this.z - t.z;
      return e * e + n * n + i * i;
    }
    manhattanDistanceTo(t) {
      return (
        Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
      );
    }
    setFromSpherical(t) {
      return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
    }
    setFromSphericalCoords(t, e, n) {
      const i = Math.sin(e) * t;
      return (
        (this.x = i * Math.sin(n)),
        (this.y = Math.cos(e) * t),
        (this.z = i * Math.cos(n)),
        this
      );
    }
    setFromCylindrical(t) {
      return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
    }
    setFromCylindricalCoords(t, e, n) {
      return (
        (this.x = t * Math.sin(e)),
        (this.y = n),
        (this.z = t * Math.cos(e)),
        this
      );
    }
    setFromMatrixPosition(t) {
      const e = t.elements;
      return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
    }
    setFromMatrixScale(t) {
      const e = this.setFromMatrixColumn(t, 0).length(),
        n = this.setFromMatrixColumn(t, 1).length(),
        i = this.setFromMatrixColumn(t, 2).length();
      return (this.x = e), (this.y = n), (this.z = i), this;
    }
    setFromMatrixColumn(t, e) {
      return this.fromArray(t.elements, 4 * e);
    }
    setFromMatrix3Column(t, e) {
      return this.fromArray(t.elements, 3 * e);
    }
    setFromEuler(t) {
      return (this.x = t._x), (this.y = t._y), (this.z = t._z), this;
    }
    setFromColor(t) {
      return (this.x = t.r), (this.y = t.g), (this.z = t.b), this;
    }
    equals(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z;
    }
    fromArray(t, e = 0) {
      return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
    }
    fromBufferAttribute(t, e) {
      return (
        (this.x = t.getX(e)), (this.y = t.getY(e)), (this.z = t.getZ(e)), this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        this
      );
    }
    randomDirection() {
      const t = 2 * (Math.random() - 0.5),
        e = Math.random() * Math.PI * 2,
        n = Math.sqrt(1 - t ** 2);
      return (
        (this.x = n * Math.cos(e)),
        (this.y = n * Math.sin(e)),
        (this.z = t),
        this
      );
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  }
  const ne = new ee(),
    ie = new te();
  class re {
    constructor(
      t = new ee(1 / 0, 1 / 0, 1 / 0),
      e = new ee(-1 / 0, -1 / 0, -1 / 0)
    ) {
      (this.isBox3 = !0), (this.min = t), (this.max = e);
    }
    set(t, e) {
      return this.min.copy(t), this.max.copy(e), this;
    }
    setFromArray(t) {
      this.makeEmpty();
      for (let e = 0, n = t.length; e < n; e += 3)
        this.expandByPoint(se.fromArray(t, e));
      return this;
    }
    setFromBufferAttribute(t) {
      this.makeEmpty();
      for (let e = 0, n = t.count; e < n; e++)
        this.expandByPoint(se.fromBufferAttribute(t, e));
      return this;
    }
    setFromPoints(t) {
      this.makeEmpty();
      for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
      return this;
    }
    setFromCenterAndSize(t, e) {
      const n = se.copy(e).multiplyScalar(0.5);
      return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
    }
    setFromObject(t, e = !1) {
      return this.makeEmpty(), this.expandByObject(t, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this;
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = this.min.z = 1 / 0),
        (this.max.x = this.max.y = this.max.z = -1 / 0),
        this
      );
    }
    isEmpty() {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    }
    getCenter(t) {
      return this.isEmpty()
        ? t.set(0, 0, 0)
        : t.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(t) {
      return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
    }
    expandByPoint(t) {
      return this.min.min(t), this.max.max(t), this;
    }
    expandByVector(t) {
      return this.min.sub(t), this.max.add(t), this;
    }
    expandByScalar(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this;
    }
    expandByObject(t, e = !1) {
      if ((t.updateWorldMatrix(!1, !1), void 0 !== t.boundingBox))
        null === t.boundingBox && t.computeBoundingBox(),
          oe.copy(t.boundingBox),
          oe.applyMatrix4(t.matrixWorld),
          this.union(oe);
      else {
        const n = t.geometry;
        if (void 0 !== n)
          if (
            e &&
            void 0 !== n.attributes &&
            void 0 !== n.attributes.position
          ) {
            const e = n.attributes.position;
            for (let n = 0, i = e.count; n < i; n++)
              se.fromBufferAttribute(e, n).applyMatrix4(t.matrixWorld),
                this.expandByPoint(se);
          } else
            null === n.boundingBox && n.computeBoundingBox(),
              oe.copy(n.boundingBox),
              oe.applyMatrix4(t.matrixWorld),
              this.union(oe);
      }
      const n = t.children;
      for (let t = 0, i = n.length; t < i; t++) this.expandByObject(n[t], e);
      return this;
    }
    containsPoint(t) {
      return !(
        t.x < this.min.x ||
        t.x > this.max.x ||
        t.y < this.min.y ||
        t.y > this.max.y ||
        t.z < this.min.z ||
        t.z > this.max.z
      );
    }
    containsBox(t) {
      return (
        this.min.x <= t.min.x &&
        t.max.x <= this.max.x &&
        this.min.y <= t.min.y &&
        t.max.y <= this.max.y &&
        this.min.z <= t.min.z &&
        t.max.z <= this.max.z
      );
    }
    getParameter(t, e) {
      return e.set(
        (t.x - this.min.x) / (this.max.x - this.min.x),
        (t.y - this.min.y) / (this.max.y - this.min.y),
        (t.z - this.min.z) / (this.max.z - this.min.z)
      );
    }
    intersectsBox(t) {
      return !(
        t.max.x < this.min.x ||
        t.min.x > this.max.x ||
        t.max.y < this.min.y ||
        t.min.y > this.max.y ||
        t.max.z < this.min.z ||
        t.min.z > this.max.z
      );
    }
    intersectsSphere(t) {
      return (
        this.clampPoint(t.center, se),
        se.distanceToSquared(t.center) <= t.radius * t.radius
      );
    }
    intersectsPlane(t) {
      let e, n;
      return (
        t.normal.x > 0
          ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
          : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
        t.normal.y > 0
          ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
          : ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
        t.normal.z > 0
          ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
          : ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
        e <= -t.constant && n >= -t.constant
      );
    }
    intersectsTriangle(t) {
      if (this.isEmpty()) return !1;
      this.getCenter(me),
        fe.subVectors(this.max, me),
        le.subVectors(t.a, me),
        ce.subVectors(t.b, me),
        he.subVectors(t.c, me),
        ue.subVectors(ce, le),
        de.subVectors(he, ce),
        pe.subVectors(le, he);
      let e = [
        0,
        -ue.z,
        ue.y,
        0,
        -de.z,
        de.y,
        0,
        -pe.z,
        pe.y,
        ue.z,
        0,
        -ue.x,
        de.z,
        0,
        -de.x,
        pe.z,
        0,
        -pe.x,
        -ue.y,
        ue.x,
        0,
        -de.y,
        de.x,
        0,
        -pe.y,
        pe.x,
        0,
      ];
      return (
        !!ve(e, le, ce, he, fe) &&
        ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        !!ve(e, le, ce, he, fe) &&
          (ge.crossVectors(ue, de),
          (e = [ge.x, ge.y, ge.z]),
          ve(e, le, ce, he, fe)))
      );
    }
    clampPoint(t, e) {
      return e.copy(t).clamp(this.min, this.max);
    }
    distanceToPoint(t) {
      return this.clampPoint(t, se).distanceTo(t);
    }
    getBoundingSphere(t) {
      return (
        this.isEmpty()
          ? t.makeEmpty()
          : (this.getCenter(t.center),
            (t.radius = 0.5 * this.getSize(se).length())),
        t
      );
    }
    intersect(t) {
      return (
        this.min.max(t.min),
        this.max.min(t.max),
        this.isEmpty() && this.makeEmpty(),
        this
      );
    }
    union(t) {
      return this.min.min(t.min), this.max.max(t.max), this;
    }
    applyMatrix4(t) {
      return (
        this.isEmpty() ||
          (ae[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
          ae[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
          ae[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
          ae[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
          ae[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
          ae[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
          ae[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
          ae[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
          this.setFromPoints(ae)),
        this
      );
    }
    translate(t) {
      return this.min.add(t), this.max.add(t), this;
    }
    equals(t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    }
  }
  const ae = [
      new ee(),
      new ee(),
      new ee(),
      new ee(),
      new ee(),
      new ee(),
      new ee(),
      new ee(),
    ],
    se = new ee(),
    oe = new re(),
    le = new ee(),
    ce = new ee(),
    he = new ee(),
    ue = new ee(),
    de = new ee(),
    pe = new ee(),
    me = new ee(),
    fe = new ee(),
    ge = new ee(),
    _e = new ee();
  function ve(t, e, n, i, r) {
    for (let a = 0, s = t.length - 3; a <= s; a += 3) {
      _e.fromArray(t, a);
      const s =
          r.x * Math.abs(_e.x) + r.y * Math.abs(_e.y) + r.z * Math.abs(_e.z),
        o = e.dot(_e),
        l = n.dot(_e),
        c = i.dot(_e);
      if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s) return !1;
    }
    return !0;
  }
  const xe = new re(),
    ye = new ee(),
    Me = new ee();
  class Se {
    constructor(t = new ee(), e = -1) {
      (this.center = t), (this.radius = e);
    }
    set(t, e) {
      return this.center.copy(t), (this.radius = e), this;
    }
    setFromPoints(t, e) {
      const n = this.center;
      void 0 !== e ? n.copy(e) : xe.setFromPoints(t).getCenter(n);
      let i = 0;
      for (let e = 0, r = t.length; e < r; e++)
        i = Math.max(i, n.distanceToSquared(t[e]));
      return (this.radius = Math.sqrt(i)), this;
    }
    copy(t) {
      return this.center.copy(t.center), (this.radius = t.radius), this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), (this.radius = -1), this;
    }
    containsPoint(t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t) {
      return t.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t) {
      const e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e;
    }
    intersectsBox(t) {
      return t.intersectsSphere(this);
    }
    intersectsPlane(t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t, e) {
      const n = this.center.distanceToSquared(t);
      return (
        e.copy(t),
        n > this.radius * this.radius &&
          (e.sub(this.center).normalize(),
          e.multiplyScalar(this.radius).add(this.center)),
        e
      );
    }
    getBoundingBox(t) {
      return this.isEmpty()
        ? (t.makeEmpty(), t)
        : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
    }
    applyMatrix4(t) {
      return (
        this.center.applyMatrix4(t),
        (this.radius = this.radius * t.getMaxScaleOnAxis()),
        this
      );
    }
    translate(t) {
      return this.center.add(t), this;
    }
    expandByPoint(t) {
      if (this.isEmpty()) return this.center.copy(t), (this.radius = 0), this;
      ye.subVectors(t, this.center);
      const e = ye.lengthSq();
      if (e > this.radius * this.radius) {
        const t = Math.sqrt(e),
          n = 0.5 * (t - this.radius);
        this.center.addScaledVector(ye, n / t), (this.radius += n);
      }
      return this;
    }
    union(t) {
      return t.isEmpty()
        ? this
        : this.isEmpty()
        ? (this.copy(t), this)
        : (!0 === this.center.equals(t.center)
            ? (this.radius = Math.max(this.radius, t.radius))
            : (Me.subVectors(t.center, this.center).setLength(t.radius),
              this.expandByPoint(ye.copy(t.center).add(Me)),
              this.expandByPoint(ye.copy(t.center).sub(Me))),
          this);
    }
    equals(t) {
      return t.center.equals(this.center) && t.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const Ee = new ee(),
    be = new ee(),
    we = new ee(),
    Te = new ee(),
    Ae = new ee(),
    Re = new ee(),
    Ce = new ee();
  class Pe {
    constructor(t = new ee(), e = new ee(0, 0, -1)) {
      (this.origin = t), (this.direction = e);
    }
    set(t, e) {
      return this.origin.copy(t), this.direction.copy(e), this;
    }
    copy(t) {
      return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
    }
    at(t, e) {
      return e.copy(this.origin).addScaledVector(this.direction, t);
    }
    lookAt(t) {
      return this.direction.copy(t).sub(this.origin).normalize(), this;
    }
    recast(t) {
      return this.origin.copy(this.at(t, Ee)), this;
    }
    closestPointToPoint(t, e) {
      e.subVectors(t, this.origin);
      const n = e.dot(this.direction);
      return n < 0
        ? e.copy(this.origin)
        : e.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(t) {
      return Math.sqrt(this.distanceSqToPoint(t));
    }
    distanceSqToPoint(t) {
      const e = Ee.subVectors(t, this.origin).dot(this.direction);
      return e < 0
        ? this.origin.distanceToSquared(t)
        : (Ee.copy(this.origin).addScaledVector(this.direction, e),
          Ee.distanceToSquared(t));
    }
    distanceSqToSegment(t, e, n, i) {
      be.copy(t).add(e).multiplyScalar(0.5),
        we.copy(e).sub(t).normalize(),
        Te.copy(this.origin).sub(be);
      const r = 0.5 * t.distanceTo(e),
        a = -this.direction.dot(we),
        s = Te.dot(this.direction),
        o = -Te.dot(we),
        l = Te.lengthSq(),
        c = Math.abs(1 - a * a);
      let h, u, d, p;
      if (c > 0)
        if (((h = a * o - s), (u = a * s - o), (p = r * c), h >= 0))
          if (u >= -p)
            if (u <= p) {
              const t = 1 / c;
              (h *= t),
                (u *= t),
                (d = h * (h + a * u + 2 * s) + u * (a * h + u + 2 * o) + l);
            } else
              (u = r),
                (h = Math.max(0, -(a * u + s))),
                (d = -h * h + u * (u + 2 * o) + l);
          else
            (u = -r),
              (h = Math.max(0, -(a * u + s))),
              (d = -h * h + u * (u + 2 * o) + l);
        else
          u <= -p
            ? ((h = Math.max(0, -(-a * r + s))),
              (u = h > 0 ? -r : Math.min(Math.max(-r, -o), r)),
              (d = -h * h + u * (u + 2 * o) + l))
            : u <= p
            ? ((h = 0),
              (u = Math.min(Math.max(-r, -o), r)),
              (d = u * (u + 2 * o) + l))
            : ((h = Math.max(0, -(a * r + s))),
              (u = h > 0 ? r : Math.min(Math.max(-r, -o), r)),
              (d = -h * h + u * (u + 2 * o) + l));
      else
        (u = a > 0 ? -r : r),
          (h = Math.max(0, -(a * u + s))),
          (d = -h * h + u * (u + 2 * o) + l);
      return (
        n && n.copy(this.origin).addScaledVector(this.direction, h),
        i && i.copy(be).addScaledVector(we, u),
        d
      );
    }
    intersectSphere(t, e) {
      Ee.subVectors(t.center, this.origin);
      const n = Ee.dot(this.direction),
        i = Ee.dot(Ee) - n * n,
        r = t.radius * t.radius;
      if (i > r) return null;
      const a = Math.sqrt(r - i),
        s = n - a,
        o = n + a;
      return o < 0 ? null : s < 0 ? this.at(o, e) : this.at(s, e);
    }
    intersectsSphere(t) {
      return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
    }
    distanceToPlane(t) {
      const e = t.normal.dot(this.direction);
      if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
      const n = -(this.origin.dot(t.normal) + t.constant) / e;
      return n >= 0 ? n : null;
    }
    intersectPlane(t, e) {
      const n = this.distanceToPlane(t);
      return null === n ? null : this.at(n, e);
    }
    intersectsPlane(t) {
      const e = t.distanceToPoint(this.origin);
      if (0 === e) return !0;
      return t.normal.dot(this.direction) * e < 0;
    }
    intersectBox(t, e) {
      let n, i, r, a, s, o;
      const l = 1 / this.direction.x,
        c = 1 / this.direction.y,
        h = 1 / this.direction.z,
        u = this.origin;
      return (
        l >= 0
          ? ((n = (t.min.x - u.x) * l), (i = (t.max.x - u.x) * l))
          : ((n = (t.max.x - u.x) * l), (i = (t.min.x - u.x) * l)),
        c >= 0
          ? ((r = (t.min.y - u.y) * c), (a = (t.max.y - u.y) * c))
          : ((r = (t.max.y - u.y) * c), (a = (t.min.y - u.y) * c)),
        n > a || r > i
          ? null
          : ((r > n || isNaN(n)) && (n = r),
            (a < i || isNaN(i)) && (i = a),
            h >= 0
              ? ((s = (t.min.z - u.z) * h), (o = (t.max.z - u.z) * h))
              : ((s = (t.max.z - u.z) * h), (o = (t.min.z - u.z) * h)),
            n > o || s > i
              ? null
              : ((s > n || n != n) && (n = s),
                (o < i || i != i) && (i = o),
                i < 0 ? null : this.at(n >= 0 ? n : i, e)))
      );
    }
    intersectsBox(t) {
      return null !== this.intersectBox(t, Ee);
    }
    intersectTriangle(t, e, n, i, r) {
      Ae.subVectors(e, t), Re.subVectors(n, t), Ce.crossVectors(Ae, Re);
      let a,
        s = this.direction.dot(Ce);
      if (s > 0) {
        if (i) return null;
        a = 1;
      } else {
        if (!(s < 0)) return null;
        (a = -1), (s = -s);
      }
      Te.subVectors(this.origin, t);
      const o = a * this.direction.dot(Re.crossVectors(Te, Re));
      if (o < 0) return null;
      const l = a * this.direction.dot(Ae.cross(Te));
      if (l < 0) return null;
      if (o + l > s) return null;
      const c = -a * Te.dot(Ce);
      return c < 0 ? null : this.at(c / s, r);
    }
    applyMatrix4(t) {
      return (
        this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
      );
    }
    equals(t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class Le {
    constructor(t, e, n, i, r, a, s, o, l, c, h, u, d, p, m, f) {
      (Le.prototype.isMatrix4 = !0),
        (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        void 0 !== t &&
          this.set(t, e, n, i, r, a, s, o, l, c, h, u, d, p, m, f);
    }
    set(t, e, n, i, r, a, s, o, l, c, h, u, d, p, m, f) {
      const g = this.elements;
      return (
        (g[0] = t),
        (g[4] = e),
        (g[8] = n),
        (g[12] = i),
        (g[1] = r),
        (g[5] = a),
        (g[9] = s),
        (g[13] = o),
        (g[2] = l),
        (g[6] = c),
        (g[10] = h),
        (g[14] = u),
        (g[3] = d),
        (g[7] = p),
        (g[11] = m),
        (g[15] = f),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new Le().fromArray(this.elements);
    }
    copy(t) {
      const e = this.elements,
        n = t.elements;
      return (
        (e[0] = n[0]),
        (e[1] = n[1]),
        (e[2] = n[2]),
        (e[3] = n[3]),
        (e[4] = n[4]),
        (e[5] = n[5]),
        (e[6] = n[6]),
        (e[7] = n[7]),
        (e[8] = n[8]),
        (e[9] = n[9]),
        (e[10] = n[10]),
        (e[11] = n[11]),
        (e[12] = n[12]),
        (e[13] = n[13]),
        (e[14] = n[14]),
        (e[15] = n[15]),
        this
      );
    }
    copyPosition(t) {
      const e = this.elements,
        n = t.elements;
      return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
    }
    setFromMatrix3(t) {
      const e = t.elements;
      return (
        this.set(
          e[0],
          e[3],
          e[6],
          0,
          e[1],
          e[4],
          e[7],
          0,
          e[2],
          e[5],
          e[8],
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    extractBasis(t, e, n) {
      return (
        t.setFromMatrixColumn(this, 0),
        e.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
      );
    }
    makeBasis(t, e, n) {
      return (
        this.set(
          t.x,
          e.x,
          n.x,
          0,
          t.y,
          e.y,
          n.y,
          0,
          t.z,
          e.z,
          n.z,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    extractRotation(t) {
      const e = this.elements,
        n = t.elements,
        i = 1 / Ue.setFromMatrixColumn(t, 0).length(),
        r = 1 / Ue.setFromMatrixColumn(t, 1).length(),
        a = 1 / Ue.setFromMatrixColumn(t, 2).length();
      return (
        (e[0] = n[0] * i),
        (e[1] = n[1] * i),
        (e[2] = n[2] * i),
        (e[3] = 0),
        (e[4] = n[4] * r),
        (e[5] = n[5] * r),
        (e[6] = n[6] * r),
        (e[7] = 0),
        (e[8] = n[8] * a),
        (e[9] = n[9] * a),
        (e[10] = n[10] * a),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        this
      );
    }
    makeRotationFromEuler(t) {
      const e = this.elements,
        n = t.x,
        i = t.y,
        r = t.z,
        a = Math.cos(n),
        s = Math.sin(n),
        o = Math.cos(i),
        l = Math.sin(i),
        c = Math.cos(r),
        h = Math.sin(r);
      if ("XYZ" === t.order) {
        const t = a * c,
          n = a * h,
          i = s * c,
          r = s * h;
        (e[0] = o * c),
          (e[4] = -o * h),
          (e[8] = l),
          (e[1] = n + i * l),
          (e[5] = t - r * l),
          (e[9] = -s * o),
          (e[2] = r - t * l),
          (e[6] = i + n * l),
          (e[10] = a * o);
      } else if ("YXZ" === t.order) {
        const t = o * c,
          n = o * h,
          i = l * c,
          r = l * h;
        (e[0] = t + r * s),
          (e[4] = i * s - n),
          (e[8] = a * l),
          (e[1] = a * h),
          (e[5] = a * c),
          (e[9] = -s),
          (e[2] = n * s - i),
          (e[6] = r + t * s),
          (e[10] = a * o);
      } else if ("ZXY" === t.order) {
        const t = o * c,
          n = o * h,
          i = l * c,
          r = l * h;
        (e[0] = t - r * s),
          (e[4] = -a * h),
          (e[8] = i + n * s),
          (e[1] = n + i * s),
          (e[5] = a * c),
          (e[9] = r - t * s),
          (e[2] = -a * l),
          (e[6] = s),
          (e[10] = a * o);
      } else if ("ZYX" === t.order) {
        const t = a * c,
          n = a * h,
          i = s * c,
          r = s * h;
        (e[0] = o * c),
          (e[4] = i * l - n),
          (e[8] = t * l + r),
          (e[1] = o * h),
          (e[5] = r * l + t),
          (e[9] = n * l - i),
          (e[2] = -l),
          (e[6] = s * o),
          (e[10] = a * o);
      } else if ("YZX" === t.order) {
        const t = a * o,
          n = a * l,
          i = s * o,
          r = s * l;
        (e[0] = o * c),
          (e[4] = r - t * h),
          (e[8] = i * h + n),
          (e[1] = h),
          (e[5] = a * c),
          (e[9] = -s * c),
          (e[2] = -l * c),
          (e[6] = n * h + i),
          (e[10] = t - r * h);
      } else if ("XZY" === t.order) {
        const t = a * o,
          n = a * l,
          i = s * o,
          r = s * l;
        (e[0] = o * c),
          (e[4] = -h),
          (e[8] = l * c),
          (e[1] = t * h + r),
          (e[5] = a * c),
          (e[9] = n * h - i),
          (e[2] = i * h - n),
          (e[6] = s * c),
          (e[10] = r * h + t);
      }
      return (
        (e[3] = 0),
        (e[7] = 0),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        this
      );
    }
    makeRotationFromQuaternion(t) {
      return this.compose(Ie, t, Ne);
    }
    lookAt(t, e, n) {
      const i = this.elements;
      return (
        ze.subVectors(t, e),
        0 === ze.lengthSq() && (ze.z = 1),
        ze.normalize(),
        Oe.crossVectors(n, ze),
        0 === Oe.lengthSq() &&
          (1 === Math.abs(n.z) ? (ze.x += 1e-4) : (ze.z += 1e-4),
          ze.normalize(),
          Oe.crossVectors(n, ze)),
        Oe.normalize(),
        Fe.crossVectors(ze, Oe),
        (i[0] = Oe.x),
        (i[4] = Fe.x),
        (i[8] = ze.x),
        (i[1] = Oe.y),
        (i[5] = Fe.y),
        (i[9] = ze.y),
        (i[2] = Oe.z),
        (i[6] = Fe.z),
        (i[10] = ze.z),
        this
      );
    }
    multiply(t) {
      return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      const n = t.elements,
        i = e.elements,
        r = this.elements,
        a = n[0],
        s = n[4],
        o = n[8],
        l = n[12],
        c = n[1],
        h = n[5],
        u = n[9],
        d = n[13],
        p = n[2],
        m = n[6],
        f = n[10],
        g = n[14],
        _ = n[3],
        v = n[7],
        x = n[11],
        y = n[15],
        M = i[0],
        S = i[4],
        E = i[8],
        b = i[12],
        w = i[1],
        T = i[5],
        A = i[9],
        R = i[13],
        C = i[2],
        P = i[6],
        L = i[10],
        U = i[14],
        D = i[3],
        I = i[7],
        N = i[11],
        O = i[15];
      return (
        (r[0] = a * M + s * w + o * C + l * D),
        (r[4] = a * S + s * T + o * P + l * I),
        (r[8] = a * E + s * A + o * L + l * N),
        (r[12] = a * b + s * R + o * U + l * O),
        (r[1] = c * M + h * w + u * C + d * D),
        (r[5] = c * S + h * T + u * P + d * I),
        (r[9] = c * E + h * A + u * L + d * N),
        (r[13] = c * b + h * R + u * U + d * O),
        (r[2] = p * M + m * w + f * C + g * D),
        (r[6] = p * S + m * T + f * P + g * I),
        (r[10] = p * E + m * A + f * L + g * N),
        (r[14] = p * b + m * R + f * U + g * O),
        (r[3] = _ * M + v * w + x * C + y * D),
        (r[7] = _ * S + v * T + x * P + y * I),
        (r[11] = _ * E + v * A + x * L + y * N),
        (r[15] = _ * b + v * R + x * U + y * O),
        this
      );
    }
    multiplyScalar(t) {
      const e = this.elements;
      return (
        (e[0] *= t),
        (e[4] *= t),
        (e[8] *= t),
        (e[12] *= t),
        (e[1] *= t),
        (e[5] *= t),
        (e[9] *= t),
        (e[13] *= t),
        (e[2] *= t),
        (e[6] *= t),
        (e[10] *= t),
        (e[14] *= t),
        (e[3] *= t),
        (e[7] *= t),
        (e[11] *= t),
        (e[15] *= t),
        this
      );
    }
    determinant() {
      const t = this.elements,
        e = t[0],
        n = t[4],
        i = t[8],
        r = t[12],
        a = t[1],
        s = t[5],
        o = t[9],
        l = t[13],
        c = t[2],
        h = t[6],
        u = t[10],
        d = t[14];
      return (
        t[3] *
          (+r * o * h -
            i * l * h -
            r * s * u +
            n * l * u +
            i * s * d -
            n * o * d) +
        t[7] *
          (+e * o * d -
            e * l * u +
            r * a * u -
            i * a * d +
            i * l * c -
            r * o * c) +
        t[11] *
          (+e * l * h -
            e * s * d -
            r * a * h +
            n * a * d +
            r * s * c -
            n * l * c) +
        t[15] *
          (-i * s * c -
            e * o * h +
            e * s * u +
            i * a * h -
            n * a * u +
            n * o * c)
      );
    }
    transpose() {
      const t = this.elements;
      let e;
      return (
        (e = t[1]),
        (t[1] = t[4]),
        (t[4] = e),
        (e = t[2]),
        (t[2] = t[8]),
        (t[8] = e),
        (e = t[6]),
        (t[6] = t[9]),
        (t[9] = e),
        (e = t[3]),
        (t[3] = t[12]),
        (t[12] = e),
        (e = t[7]),
        (t[7] = t[13]),
        (t[13] = e),
        (e = t[11]),
        (t[11] = t[14]),
        (t[14] = e),
        this
      );
    }
    setPosition(t, e, n) {
      const i = this.elements;
      return (
        t.isVector3
          ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
          : ((i[12] = t), (i[13] = e), (i[14] = n)),
        this
      );
    }
    invert() {
      const t = this.elements,
        e = t[0],
        n = t[1],
        i = t[2],
        r = t[3],
        a = t[4],
        s = t[5],
        o = t[6],
        l = t[7],
        c = t[8],
        h = t[9],
        u = t[10],
        d = t[11],
        p = t[12],
        m = t[13],
        f = t[14],
        g = t[15],
        _ =
          h * f * l - m * u * l + m * o * d - s * f * d - h * o * g + s * u * g,
        v =
          p * u * l - c * f * l - p * o * d + a * f * d + c * o * g - a * u * g,
        x =
          c * m * l - p * h * l + p * s * d - a * m * d - c * s * g + a * h * g,
        y =
          p * h * o - c * m * o - p * s * u + a * m * u + c * s * f - a * h * f,
        M = e * _ + n * v + i * x + r * y;
      if (0 === M)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const S = 1 / M;
      return (
        (t[0] = _ * S),
        (t[1] =
          (m * u * r -
            h * f * r -
            m * i * d +
            n * f * d +
            h * i * g -
            n * u * g) *
          S),
        (t[2] =
          (s * f * r -
            m * o * r +
            m * i * l -
            n * f * l -
            s * i * g +
            n * o * g) *
          S),
        (t[3] =
          (h * o * r -
            s * u * r -
            h * i * l +
            n * u * l +
            s * i * d -
            n * o * d) *
          S),
        (t[4] = v * S),
        (t[5] =
          (c * f * r -
            p * u * r +
            p * i * d -
            e * f * d -
            c * i * g +
            e * u * g) *
          S),
        (t[6] =
          (p * o * r -
            a * f * r -
            p * i * l +
            e * f * l +
            a * i * g -
            e * o * g) *
          S),
        (t[7] =
          (a * u * r -
            c * o * r +
            c * i * l -
            e * u * l -
            a * i * d +
            e * o * d) *
          S),
        (t[8] = x * S),
        (t[9] =
          (p * h * r -
            c * m * r -
            p * n * d +
            e * m * d +
            c * n * g -
            e * h * g) *
          S),
        (t[10] =
          (a * m * r -
            p * s * r +
            p * n * l -
            e * m * l -
            a * n * g +
            e * s * g) *
          S),
        (t[11] =
          (c * s * r -
            a * h * r -
            c * n * l +
            e * h * l +
            a * n * d -
            e * s * d) *
          S),
        (t[12] = y * S),
        (t[13] =
          (c * m * i -
            p * h * i +
            p * n * u -
            e * m * u -
            c * n * f +
            e * h * f) *
          S),
        (t[14] =
          (p * s * i -
            a * m * i -
            p * n * o +
            e * m * o +
            a * n * f -
            e * s * f) *
          S),
        (t[15] =
          (a * h * i -
            c * s * i +
            c * n * o -
            e * h * o -
            a * n * u +
            e * s * u) *
          S),
        this
      );
    }
    scale(t) {
      const e = this.elements,
        n = t.x,
        i = t.y,
        r = t.z;
      return (
        (e[0] *= n),
        (e[4] *= i),
        (e[8] *= r),
        (e[1] *= n),
        (e[5] *= i),
        (e[9] *= r),
        (e[2] *= n),
        (e[6] *= i),
        (e[10] *= r),
        (e[3] *= n),
        (e[7] *= i),
        (e[11] *= r),
        this
      );
    }
    getMaxScaleOnAxis() {
      const t = this.elements,
        e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
        n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
        i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
      return Math.sqrt(Math.max(e, n, i));
    }
    makeTranslation(t, e, n) {
      return (
        t.isVector3
          ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1)
          : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
        this
      );
    }
    makeRotationX(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(t) {
      const e = Math.cos(t),
        n = Math.sin(t);
      return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(t, e) {
      const n = Math.cos(e),
        i = Math.sin(e),
        r = 1 - n,
        a = t.x,
        s = t.y,
        o = t.z,
        l = r * a,
        c = r * s;
      return (
        this.set(
          l * a + n,
          l * s - i * o,
          l * o + i * s,
          0,
          l * s + i * o,
          c * s + n,
          c * o - i * a,
          0,
          l * o - i * s,
          c * o + i * a,
          r * o * o + n,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    makeScale(t, e, n) {
      return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(t, e, n, i, r, a) {
      return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(t, e, n) {
      const i = this.elements,
        r = e._x,
        a = e._y,
        s = e._z,
        o = e._w,
        l = r + r,
        c = a + a,
        h = s + s,
        u = r * l,
        d = r * c,
        p = r * h,
        m = a * c,
        f = a * h,
        g = s * h,
        _ = o * l,
        v = o * c,
        x = o * h,
        y = n.x,
        M = n.y,
        S = n.z;
      return (
        (i[0] = (1 - (m + g)) * y),
        (i[1] = (d + x) * y),
        (i[2] = (p - v) * y),
        (i[3] = 0),
        (i[4] = (d - x) * M),
        (i[5] = (1 - (u + g)) * M),
        (i[6] = (f + _) * M),
        (i[7] = 0),
        (i[8] = (p + v) * S),
        (i[9] = (f - _) * S),
        (i[10] = (1 - (u + m)) * S),
        (i[11] = 0),
        (i[12] = t.x),
        (i[13] = t.y),
        (i[14] = t.z),
        (i[15] = 1),
        this
      );
    }
    decompose(t, e, n) {
      const i = this.elements;
      let r = Ue.set(i[0], i[1], i[2]).length();
      const a = Ue.set(i[4], i[5], i[6]).length(),
        s = Ue.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (r = -r),
        (t.x = i[12]),
        (t.y = i[13]),
        (t.z = i[14]),
        De.copy(this);
      const o = 1 / r,
        l = 1 / a,
        c = 1 / s;
      return (
        (De.elements[0] *= o),
        (De.elements[1] *= o),
        (De.elements[2] *= o),
        (De.elements[4] *= l),
        (De.elements[5] *= l),
        (De.elements[6] *= l),
        (De.elements[8] *= c),
        (De.elements[9] *= c),
        (De.elements[10] *= c),
        e.setFromRotationMatrix(De),
        (n.x = r),
        (n.y = a),
        (n.z = s),
        this
      );
    }
    makePerspective(t, e, n, i, r, a, s = 2e3) {
      const o = this.elements,
        l = (2 * r) / (e - t),
        c = (2 * r) / (n - i),
        h = (e + t) / (e - t),
        u = (n + i) / (n - i);
      let d, p;
      if (s === dt) (d = -(a + r) / (a - r)), (p = (-2 * a * r) / (a - r));
      else {
        if (s !== pt)
          throw new Error(
            "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + s
          );
        (d = -a / (a - r)), (p = (-a * r) / (a - r));
      }
      return (
        (o[0] = l),
        (o[4] = 0),
        (o[8] = h),
        (o[12] = 0),
        (o[1] = 0),
        (o[5] = c),
        (o[9] = u),
        (o[13] = 0),
        (o[2] = 0),
        (o[6] = 0),
        (o[10] = d),
        (o[14] = p),
        (o[3] = 0),
        (o[7] = 0),
        (o[11] = -1),
        (o[15] = 0),
        this
      );
    }
    makeOrthographic(t, e, n, i, r, a, s = 2e3) {
      const o = this.elements,
        l = 1 / (e - t),
        c = 1 / (n - i),
        h = 1 / (a - r),
        u = (e + t) * l,
        d = (n + i) * c;
      let p, m;
      if (s === dt) (p = (a + r) * h), (m = -2 * h);
      else {
        if (s !== pt)
          throw new Error(
            "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + s
          );
        (p = r * h), (m = -1 * h);
      }
      return (
        (o[0] = 2 * l),
        (o[4] = 0),
        (o[8] = 0),
        (o[12] = -u),
        (o[1] = 0),
        (o[5] = 2 * c),
        (o[9] = 0),
        (o[13] = -d),
        (o[2] = 0),
        (o[6] = 0),
        (o[10] = m),
        (o[14] = -p),
        (o[3] = 0),
        (o[7] = 0),
        (o[11] = 0),
        (o[15] = 1),
        this
      );
    }
    equals(t) {
      const e = this.elements,
        n = t.elements;
      for (let t = 0; t < 16; t++) if (e[t] !== n[t]) return !1;
      return !0;
    }
    fromArray(t, e = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
      return this;
    }
    toArray(t = [], e = 0) {
      const n = this.elements;
      return (
        (t[e] = n[0]),
        (t[e + 1] = n[1]),
        (t[e + 2] = n[2]),
        (t[e + 3] = n[3]),
        (t[e + 4] = n[4]),
        (t[e + 5] = n[5]),
        (t[e + 6] = n[6]),
        (t[e + 7] = n[7]),
        (t[e + 8] = n[8]),
        (t[e + 9] = n[9]),
        (t[e + 10] = n[10]),
        (t[e + 11] = n[11]),
        (t[e + 12] = n[12]),
        (t[e + 13] = n[13]),
        (t[e + 14] = n[14]),
        (t[e + 15] = n[15]),
        t
      );
    }
  }
  const Ue = new ee(),
    De = new Le(),
    Ie = new ee(0, 0, 0),
    Ne = new ee(1, 1, 1),
    Oe = new ee(),
    Fe = new ee(),
    ze = new ee(),
    Be = new Le(),
    ke = new te();
  class He {
    constructor(t = 0, e = 0, n = 0, i = He.DEFAULT_ORDER) {
      (this.isEuler = !0),
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._order = i);
    }
    get x() {
      return this._x;
    }
    set x(t) {
      (this._x = t), this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t) {
      (this._y = t), this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t) {
      (this._z = t), this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(t) {
      (this._order = t), this._onChangeCallback();
    }
    set(t, e, n, i = this._order) {
      return (
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._order = i),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t) {
      return (
        (this._x = t._x),
        (this._y = t._y),
        (this._z = t._z),
        (this._order = t._order),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(t, e = this._order, n = !0) {
      const i = t.elements,
        r = i[0],
        a = i[4],
        s = i[8],
        o = i[1],
        l = i[5],
        c = i[9],
        h = i[2],
        u = i[6],
        d = i[10];
      switch (e) {
        case "XYZ":
          (this._y = Math.asin(yt(s, -1, 1))),
            Math.abs(s) < 0.9999999
              ? ((this._x = Math.atan2(-c, d)), (this._z = Math.atan2(-a, r)))
              : ((this._x = Math.atan2(u, l)), (this._z = 0));
          break;
        case "YXZ":
          (this._x = Math.asin(-yt(c, -1, 1))),
            Math.abs(c) < 0.9999999
              ? ((this._y = Math.atan2(s, d)), (this._z = Math.atan2(o, l)))
              : ((this._y = Math.atan2(-h, r)), (this._z = 0));
          break;
        case "ZXY":
          (this._x = Math.asin(yt(u, -1, 1))),
            Math.abs(u) < 0.9999999
              ? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-a, l)))
              : ((this._y = 0), (this._z = Math.atan2(o, r)));
          break;
        case "ZYX":
          (this._y = Math.asin(-yt(h, -1, 1))),
            Math.abs(h) < 0.9999999
              ? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(o, r)))
              : ((this._x = 0), (this._z = Math.atan2(-a, l)));
          break;
        case "YZX":
          (this._z = Math.asin(yt(o, -1, 1))),
            Math.abs(o) < 0.9999999
              ? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-h, r)))
              : ((this._x = 0), (this._y = Math.atan2(s, d)));
          break;
        case "XZY":
          (this._z = Math.asin(-yt(a, -1, 1))),
            Math.abs(a) < 0.9999999
              ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(s, r)))
              : ((this._x = Math.atan2(-c, d)), (this._y = 0));
          break;
        default:
          console.warn(
            "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
              e
          );
      }
      return (this._order = e), !0 === n && this._onChangeCallback(), this;
    }
    setFromQuaternion(t, e, n) {
      return (
        Be.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Be, e, n)
      );
    }
    setFromVector3(t, e = this._order) {
      return this.set(t.x, t.y, t.z, e);
    }
    reorder(t) {
      return ke.setFromEuler(this), this.setFromQuaternion(ke, t);
    }
    equals(t) {
      return (
        t._x === this._x &&
        t._y === this._y &&
        t._z === this._z &&
        t._order === this._order
      );
    }
    fromArray(t) {
      return (
        (this._x = t[0]),
        (this._y = t[1]),
        (this._z = t[2]),
        void 0 !== t[3] && (this._order = t[3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this._x),
        (t[e + 1] = this._y),
        (t[e + 2] = this._z),
        (t[e + 3] = this._order),
        t
      );
    }
    _onChange(t) {
      return (this._onChangeCallback = t), this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  }
  He.DEFAULT_ORDER = "XYZ";
  class Ve {
    constructor() {
      this.mask = 1;
    }
    set(t) {
      this.mask = ((1 << t) | 0) >>> 0;
    }
    enable(t) {
      this.mask |= (1 << t) | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(t) {
      this.mask ^= (1 << t) | 0;
    }
    disable(t) {
      this.mask &= ~((1 << t) | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(t) {
      return 0 != (this.mask & t.mask);
    }
    isEnabled(t) {
      return 0 != (this.mask & ((1 << t) | 0));
    }
  }
  let Ge = 0;
  const We = new ee(),
    Xe = new te(),
    je = new Le(),
    Ye = new ee(),
    qe = new ee(),
    Ze = new ee(),
    Ke = new te(),
    $e = new ee(1, 0, 0),
    Je = new ee(0, 1, 0),
    Qe = new ee(0, 0, 1),
    tn = { type: "added" },
    en = { type: "removed" };
  class nn extends mt {
    constructor() {
      super(),
        (this.isObject3D = !0),
        Object.defineProperty(this, "id", { value: Ge++ }),
        (this.uuid = xt()),
        (this.name = ""),
        (this.type = "Object3D"),
        (this.parent = null),
        (this.children = []),
        (this.up = nn.DEFAULT_UP.clone());
      const t = new ee(),
        e = new He(),
        n = new te(),
        i = new ee(1, 1, 1);
      e._onChange(function () {
        n.setFromEuler(e, !1);
      }),
        n._onChange(function () {
          e.setFromQuaternion(n, void 0, !1);
        }),
        Object.defineProperties(this, {
          position: { configurable: !0, enumerable: !0, value: t },
          rotation: { configurable: !0, enumerable: !0, value: e },
          quaternion: { configurable: !0, enumerable: !0, value: n },
          scale: { configurable: !0, enumerable: !0, value: i },
          modelViewMatrix: { value: new Le() },
          normalMatrix: { value: new Pt() },
        }),
        (this.matrix = new Le()),
        (this.matrixWorld = new Le()),
        (this.matrixAutoUpdate = nn.DEFAULT_MATRIX_AUTO_UPDATE),
        (this.matrixWorldNeedsUpdate = !1),
        (this.matrixWorldAutoUpdate = nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
        (this.layers = new Ve()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.animations = []),
        (this.userData = {});
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(t) {
      this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(t),
        this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(t) {
      return this.quaternion.premultiply(t), this;
    }
    setRotationFromAxisAngle(t, e) {
      this.quaternion.setFromAxisAngle(t, e);
    }
    setRotationFromEuler(t) {
      this.quaternion.setFromEuler(t, !0);
    }
    setRotationFromMatrix(t) {
      this.quaternion.setFromRotationMatrix(t);
    }
    setRotationFromQuaternion(t) {
      this.quaternion.copy(t);
    }
    rotateOnAxis(t, e) {
      return Xe.setFromAxisAngle(t, e), this.quaternion.multiply(Xe), this;
    }
    rotateOnWorldAxis(t, e) {
      return Xe.setFromAxisAngle(t, e), this.quaternion.premultiply(Xe), this;
    }
    rotateX(t) {
      return this.rotateOnAxis($e, t);
    }
    rotateY(t) {
      return this.rotateOnAxis(Je, t);
    }
    rotateZ(t) {
      return this.rotateOnAxis(Qe, t);
    }
    translateOnAxis(t, e) {
      return (
        We.copy(t).applyQuaternion(this.quaternion),
        this.position.add(We.multiplyScalar(e)),
        this
      );
    }
    translateX(t) {
      return this.translateOnAxis($e, t);
    }
    translateY(t) {
      return this.translateOnAxis(Je, t);
    }
    translateZ(t) {
      return this.translateOnAxis(Qe, t);
    }
    localToWorld(t) {
      return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        t.applyMatrix4(je.copy(this.matrixWorld).invert())
      );
    }
    lookAt(t, e, n) {
      t.isVector3 ? Ye.copy(t) : Ye.set(t, e, n);
      const i = this.parent;
      this.updateWorldMatrix(!0, !1),
        qe.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight
          ? je.lookAt(qe, Ye, this.up)
          : je.lookAt(Ye, qe, this.up),
        this.quaternion.setFromRotationMatrix(je),
        i &&
          (je.extractRotation(i.matrixWorld),
          Xe.setFromRotationMatrix(je),
          this.quaternion.premultiply(Xe.invert()));
    }
    add(t) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
        return this;
      }
      return t === this
        ? (console.error(
            "THREE.Object3D.add: object can't be added as a child of itself.",
            t
          ),
          this)
        : (t && t.isObject3D
            ? (null !== t.parent && t.parent.remove(t),
              (t.parent = this),
              this.children.push(t),
              t.dispatchEvent(tn))
            : console.error(
                "THREE.Object3D.add: object not an instance of THREE.Object3D.",
                t
              ),
          this);
    }
    remove(t) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
        return this;
      }
      const e = this.children.indexOf(t);
      return (
        -1 !== e &&
          ((t.parent = null), this.children.splice(e, 1), t.dispatchEvent(en)),
        this
      );
    }
    removeFromParent() {
      const t = this.parent;
      return null !== t && t.remove(this), this;
    }
    clear() {
      for (let t = 0; t < this.children.length; t++) {
        const e = this.children[t];
        (e.parent = null), e.dispatchEvent(en);
      }
      return (this.children.length = 0), this;
    }
    attach(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        je.copy(this.matrixWorld).invert(),
        null !== t.parent &&
          (t.parent.updateWorldMatrix(!0, !1),
          je.multiply(t.parent.matrixWorld)),
        t.applyMatrix4(je),
        this.add(t),
        t.updateWorldMatrix(!1, !0),
        this
      );
    }
    getObjectById(t) {
      return this.getObjectByProperty("id", t);
    }
    getObjectByName(t) {
      return this.getObjectByProperty("name", t);
    }
    getObjectByProperty(t, e) {
      if (this[t] === e) return this;
      for (let n = 0, i = this.children.length; n < i; n++) {
        const i = this.children[n].getObjectByProperty(t, e);
        if (void 0 !== i) return i;
      }
    }
    getObjectsByProperty(t, e) {
      let n = [];
      this[t] === e && n.push(this);
      for (let i = 0, r = this.children.length; i < r; i++) {
        const r = this.children[i].getObjectsByProperty(t, e);
        r.length > 0 && (n = n.concat(r));
      }
      return n;
    }
    getWorldPosition(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        t.setFromMatrixPosition(this.matrixWorld)
      );
    }
    getWorldQuaternion(t) {
      return (
        this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(qe, t, Ze), t
      );
    }
    getWorldScale(t) {
      return (
        this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(qe, Ke, t), t
      );
    }
    getWorldDirection(t) {
      this.updateWorldMatrix(!0, !1);
      const e = this.matrixWorld.elements;
      return t.set(e[8], e[9], e[10]).normalize();
    }
    raycast() {}
    traverse(t) {
      t(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
    }
    traverseVisible(t) {
      if (!1 === this.visible) return;
      t(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
    }
    traverseAncestors(t) {
      const e = this.parent;
      null !== e && (t(e), e.traverseAncestors(t));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale),
        (this.matrixWorldNeedsUpdate = !0);
    }
    updateMatrixWorld(t) {
      this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || t) &&
          (null === this.parent
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              ),
          (this.matrixWorldNeedsUpdate = !1),
          (t = !0));
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) {
        const i = e[n];
        (!0 !== i.matrixWorldAutoUpdate && !0 !== t) || i.updateMatrixWorld(t);
      }
    }
    updateWorldMatrix(t, e) {
      const n = this.parent;
      if (
        (!0 === t &&
          null !== n &&
          !0 === n.matrixWorldAutoUpdate &&
          n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        !0 === e)
      ) {
        const t = this.children;
        for (let e = 0, n = t.length; e < n; e++) {
          const n = t[e];
          !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!1, !0);
        }
      }
    }
    toJSON(t) {
      const e = void 0 === t || "string" == typeof t,
        n = {};
      e &&
        ((t = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
          nodes: {},
        }),
        (n.metadata = {
          version: 4.6,
          type: "Object",
          generator: "Object3D.toJSON",
        }));
      const i = {};
      function r(e, n) {
        return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
      }
      if (
        ((i.uuid = this.uuid),
        (i.type = this.type),
        "" !== this.name && (i.name = this.name),
        !0 === this.castShadow && (i.castShadow = !0),
        !0 === this.receiveShadow && (i.receiveShadow = !0),
        !1 === this.visible && (i.visible = !1),
        !1 === this.frustumCulled && (i.frustumCulled = !1),
        0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
        Object.keys(this.userData).length > 0 && (i.userData = this.userData),
        (i.layers = this.layers.mask),
        (i.matrix = this.matrix.toArray()),
        (i.up = this.up.toArray()),
        !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
        this.isInstancedMesh &&
          ((i.type = "InstancedMesh"),
          (i.count = this.count),
          (i.instanceMatrix = this.instanceMatrix.toJSON()),
          null !== this.instanceColor &&
            (i.instanceColor = this.instanceColor.toJSON())),
        this.isScene)
      )
        this.background &&
          (this.background.isColor
            ? (i.background = this.background.toJSON())
            : this.background.isTexture &&
              (i.background = this.background.toJSON(t).uuid)),
          this.environment &&
            this.environment.isTexture &&
            !0 !== this.environment.isRenderTargetTexture &&
            (i.environment = this.environment.toJSON(t).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(t.geometries, this.geometry);
        const e = this.geometry.parameters;
        if (void 0 !== e && void 0 !== e.shapes) {
          const n = e.shapes;
          if (Array.isArray(n))
            for (let e = 0, i = n.length; e < i; e++) {
              const i = n[e];
              r(t.shapes, i);
            }
          else r(t.shapes, n);
        }
      }
      if (
        (this.isSkinnedMesh &&
          ((i.bindMode = this.bindMode),
          (i.bindMatrix = this.bindMatrix.toArray()),
          void 0 !== this.skeleton &&
            (r(t.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
        void 0 !== this.material)
      )
        if (Array.isArray(this.material)) {
          const e = [];
          for (let n = 0, i = this.material.length; n < i; n++)
            e.push(r(t.materials, this.material[n]));
          i.material = e;
        } else i.material = r(t.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let e = 0; e < this.children.length; e++)
          i.children.push(this.children[e].toJSON(t).object);
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let e = 0; e < this.animations.length; e++) {
          const n = this.animations[e];
          i.animations.push(r(t.animations, n));
        }
      }
      if (e) {
        const e = a(t.geometries),
          i = a(t.materials),
          r = a(t.textures),
          s = a(t.images),
          o = a(t.shapes),
          l = a(t.skeletons),
          c = a(t.animations),
          h = a(t.nodes);
        e.length > 0 && (n.geometries = e),
          i.length > 0 && (n.materials = i),
          r.length > 0 && (n.textures = r),
          s.length > 0 && (n.images = s),
          o.length > 0 && (n.shapes = o),
          l.length > 0 && (n.skeletons = l),
          c.length > 0 && (n.animations = c),
          h.length > 0 && (n.nodes = h);
      }
      return (n.object = i), n;
      function a(t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          delete i.metadata, e.push(i);
        }
        return e;
      }
    }
    clone(t) {
      return new this.constructor().copy(this, t);
    }
    copy(t, e = !0) {
      if (
        ((this.name = t.name),
        this.up.copy(t.up),
        this.position.copy(t.position),
        (this.rotation.order = t.rotation.order),
        this.quaternion.copy(t.quaternion),
        this.scale.copy(t.scale),
        this.matrix.copy(t.matrix),
        this.matrixWorld.copy(t.matrixWorld),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
        (this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate),
        (this.layers.mask = t.layers.mask),
        (this.visible = t.visible),
        (this.castShadow = t.castShadow),
        (this.receiveShadow = t.receiveShadow),
        (this.frustumCulled = t.frustumCulled),
        (this.renderOrder = t.renderOrder),
        (this.animations = t.animations),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        !0 === e)
      )
        for (let e = 0; e < t.children.length; e++) {
          const n = t.children[e];
          this.add(n.clone());
        }
      return this;
    }
  }
  (nn.DEFAULT_UP = new ee(0, 1, 0)),
    (nn.DEFAULT_MATRIX_AUTO_UPDATE = !0),
    (nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0);
  const rn = new ee(),
    an = new ee(),
    sn = new ee(),
    on = new ee(),
    ln = new ee(),
    cn = new ee(),
    hn = new ee(),
    un = new ee(),
    dn = new ee(),
    pn = new ee();
  let mn = !1;
  class fn {
    constructor(t = new ee(), e = new ee(), n = new ee()) {
      (this.a = t), (this.b = e), (this.c = n);
    }
    static getNormal(t, e, n, i) {
      i.subVectors(n, e), rn.subVectors(t, e), i.cross(rn);
      const r = i.lengthSq();
      return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
    }
    static getBarycoord(t, e, n, i, r) {
      rn.subVectors(i, e), an.subVectors(n, e), sn.subVectors(t, e);
      const a = rn.dot(rn),
        s = rn.dot(an),
        o = rn.dot(sn),
        l = an.dot(an),
        c = an.dot(sn),
        h = a * l - s * s;
      if (0 === h) return r.set(-2, -1, -1);
      const u = 1 / h,
        d = (l * o - s * c) * u,
        p = (a * c - s * o) * u;
      return r.set(1 - d - p, p, d);
    }
    static containsPoint(t, e, n, i) {
      return (
        this.getBarycoord(t, e, n, i, on),
        on.x >= 0 && on.y >= 0 && on.x + on.y <= 1
      );
    }
    static getUV(t, e, n, i, r, a, s, o) {
      return (
        !1 === mn &&
          (console.warn(
            "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."
          ),
          (mn = !0)),
        this.getInterpolation(t, e, n, i, r, a, s, o)
      );
    }
    static getInterpolation(t, e, n, i, r, a, s, o) {
      return (
        this.getBarycoord(t, e, n, i, on),
        o.setScalar(0),
        o.addScaledVector(r, on.x),
        o.addScaledVector(a, on.y),
        o.addScaledVector(s, on.z),
        o
      );
    }
    static isFrontFacing(t, e, n, i) {
      return rn.subVectors(n, e), an.subVectors(t, e), rn.cross(an).dot(i) < 0;
    }
    set(t, e, n) {
      return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
    }
    setFromPointsAndIndices(t, e, n, i) {
      return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
    }
    setFromAttributeAndIndices(t, e, n, i) {
      return (
        this.a.fromBufferAttribute(t, e),
        this.b.fromBufferAttribute(t, n),
        this.c.fromBufferAttribute(t, i),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
    }
    getArea() {
      return (
        rn.subVectors(this.c, this.b),
        an.subVectors(this.a, this.b),
        0.5 * rn.cross(an).length()
      );
    }
    getMidpoint(t) {
      return t
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3);
    }
    getNormal(t) {
      return fn.getNormal(this.a, this.b, this.c, t);
    }
    getPlane(t) {
      return t.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t, e) {
      return fn.getBarycoord(t, this.a, this.b, this.c, e);
    }
    getUV(t, e, n, i, r) {
      return (
        !1 === mn &&
          (console.warn(
            "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."
          ),
          (mn = !0)),
        fn.getInterpolation(t, this.a, this.b, this.c, e, n, i, r)
      );
    }
    getInterpolation(t, e, n, i, r) {
      return fn.getInterpolation(t, this.a, this.b, this.c, e, n, i, r);
    }
    containsPoint(t) {
      return fn.containsPoint(t, this.a, this.b, this.c);
    }
    isFrontFacing(t) {
      return fn.isFrontFacing(this.a, this.b, this.c, t);
    }
    intersectsBox(t) {
      return t.intersectsTriangle(this);
    }
    closestPointToPoint(t, e) {
      const n = this.a,
        i = this.b,
        r = this.c;
      let a, s;
      ln.subVectors(i, n), cn.subVectors(r, n), un.subVectors(t, n);
      const o = ln.dot(un),
        l = cn.dot(un);
      if (o <= 0 && l <= 0) return e.copy(n);
      dn.subVectors(t, i);
      const c = ln.dot(dn),
        h = cn.dot(dn);
      if (c >= 0 && h <= c) return e.copy(i);
      const u = o * h - c * l;
      if (u <= 0 && o >= 0 && c <= 0)
        return (a = o / (o - c)), e.copy(n).addScaledVector(ln, a);
      pn.subVectors(t, r);
      const d = ln.dot(pn),
        p = cn.dot(pn);
      if (p >= 0 && d <= p) return e.copy(r);
      const m = d * l - o * p;
      if (m <= 0 && l >= 0 && p <= 0)
        return (s = l / (l - p)), e.copy(n).addScaledVector(cn, s);
      const f = c * p - d * h;
      if (f <= 0 && h - c >= 0 && d - p >= 0)
        return (
          hn.subVectors(r, i),
          (s = (h - c) / (h - c + (d - p))),
          e.copy(i).addScaledVector(hn, s)
        );
      const g = 1 / (f + m + u);
      return (
        (a = m * g),
        (s = u * g),
        e.copy(n).addScaledVector(ln, a).addScaledVector(cn, s)
      );
    }
    equals(t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
    }
  }
  let gn = 0;
  class _n extends mt {
    constructor() {
      super(),
        (this.isMaterial = !0),
        Object.defineProperty(this, "id", { value: gn++ }),
        (this.uuid = xt()),
        (this.name = ""),
        (this.type = "Material"),
        (this.blending = 1),
        (this.side = u),
        (this.vertexColors = !1),
        (this.opacity = 1),
        (this.transparent = !1),
        (this.blendSrc = 204),
        (this.blendDst = 205),
        (this.blendEquation = p),
        (this.blendSrcAlpha = null),
        (this.blendDstAlpha = null),
        (this.blendEquationAlpha = null),
        (this.depthFunc = 3),
        (this.depthTest = !0),
        (this.depthWrite = !0),
        (this.stencilWriteMask = 255),
        (this.stencilFunc = 519),
        (this.stencilRef = 0),
        (this.stencilFuncMask = 255),
        (this.stencilFail = lt),
        (this.stencilZFail = lt),
        (this.stencilZPass = lt),
        (this.stencilWrite = !1),
        (this.clippingPlanes = null),
        (this.clipIntersection = !1),
        (this.clipShadows = !1),
        (this.shadowSide = null),
        (this.colorWrite = !0),
        (this.precision = null),
        (this.polygonOffset = !1),
        (this.polygonOffsetFactor = 0),
        (this.polygonOffsetUnits = 0),
        (this.dithering = !1),
        (this.alphaToCoverage = !1),
        (this.premultipliedAlpha = !1),
        (this.forceSinglePass = !1),
        (this.visible = !0),
        (this.toneMapped = !0),
        (this.userData = {}),
        (this.version = 0),
        (this._alphaTest = 0);
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(t) {
      this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t);
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(t) {
      if (void 0 !== t)
        for (const e in t) {
          const n = t[e];
          if (void 0 === n) {
            console.warn(
              `THREE.Material: parameter '${e}' has value of undefined.`
            );
            continue;
          }
          const i = this[e];
          void 0 !== i
            ? i && i.isColor
              ? i.set(n)
              : i && i.isVector3 && n && n.isVector3
              ? i.copy(n)
              : (this[e] = n)
            : console.warn(
                `THREE.Material: '${e}' is not a property of THREE.${this.type}.`
              );
        }
    }
    toJSON(t) {
      const e = void 0 === t || "string" == typeof t;
      e && (t = { textures: {}, images: {} });
      const n = {
        metadata: {
          version: 4.6,
          type: "Material",
          generator: "Material.toJSON",
        },
      };
      function i(t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          delete i.metadata, e.push(i);
        }
        return e;
      }
      if (
        ((n.uuid = this.uuid),
        (n.type = this.type),
        "" !== this.name && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        void 0 !== this.roughness && (n.roughness = this.roughness),
        void 0 !== this.metalness && (n.metalness = this.metalness),
        void 0 !== this.sheen && (n.sheen = this.sheen),
        this.sheenColor &&
          this.sheenColor.isColor &&
          (n.sheenColor = this.sheenColor.getHex()),
        void 0 !== this.sheenRoughness &&
          (n.sheenRoughness = this.sheenRoughness),
        this.emissive &&
          this.emissive.isColor &&
          (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity &&
          1 !== this.emissiveIntensity &&
          (n.emissiveIntensity = this.emissiveIntensity),
        this.specular &&
          this.specular.isColor &&
          (n.specular = this.specular.getHex()),
        void 0 !== this.specularIntensity &&
          (n.specularIntensity = this.specularIntensity),
        this.specularColor &&
          this.specularColor.isColor &&
          (n.specularColor = this.specularColor.getHex()),
        void 0 !== this.shininess && (n.shininess = this.shininess),
        void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
        void 0 !== this.clearcoatRoughness &&
          (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap &&
          this.clearcoatMap.isTexture &&
          (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
        this.clearcoatRoughnessMap &&
          this.clearcoatRoughnessMap.isTexture &&
          (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
        this.clearcoatNormalMap &&
          this.clearcoatNormalMap.isTexture &&
          ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
          (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
        void 0 !== this.iridescence && (n.iridescence = this.iridescence),
        void 0 !== this.iridescenceIOR &&
          (n.iridescenceIOR = this.iridescenceIOR),
        void 0 !== this.iridescenceThicknessRange &&
          (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap &&
          this.iridescenceMap.isTexture &&
          (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
        this.iridescenceThicknessMap &&
          this.iridescenceThicknessMap.isTexture &&
          (n.iridescenceThicknessMap =
            this.iridescenceThicknessMap.toJSON(t).uuid),
        void 0 !== this.anisotropy && (n.anisotropy = this.anisotropy),
        void 0 !== this.anisotropyRotation &&
          (n.anisotropyRotation = this.anisotropyRotation),
        this.anisotropyMap &&
          this.anisotropyMap.isTexture &&
          (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
        this.matcap &&
          this.matcap.isTexture &&
          (n.matcap = this.matcap.toJSON(t).uuid),
        this.alphaMap &&
          this.alphaMap.isTexture &&
          (n.alphaMap = this.alphaMap.toJSON(t).uuid),
        this.lightMap &&
          this.lightMap.isTexture &&
          ((n.lightMap = this.lightMap.toJSON(t).uuid),
          (n.lightMapIntensity = this.lightMapIntensity)),
        this.aoMap &&
          this.aoMap.isTexture &&
          ((n.aoMap = this.aoMap.toJSON(t).uuid),
          (n.aoMapIntensity = this.aoMapIntensity)),
        this.bumpMap &&
          this.bumpMap.isTexture &&
          ((n.bumpMap = this.bumpMap.toJSON(t).uuid),
          (n.bumpScale = this.bumpScale)),
        this.normalMap &&
          this.normalMap.isTexture &&
          ((n.normalMap = this.normalMap.toJSON(t).uuid),
          (n.normalMapType = this.normalMapType),
          (n.normalScale = this.normalScale.toArray())),
        this.displacementMap &&
          this.displacementMap.isTexture &&
          ((n.displacementMap = this.displacementMap.toJSON(t).uuid),
          (n.displacementScale = this.displacementScale),
          (n.displacementBias = this.displacementBias)),
        this.roughnessMap &&
          this.roughnessMap.isTexture &&
          (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
        this.metalnessMap &&
          this.metalnessMap.isTexture &&
          (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
        this.emissiveMap &&
          this.emissiveMap.isTexture &&
          (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
        this.specularMap &&
          this.specularMap.isTexture &&
          (n.specularMap = this.specularMap.toJSON(t).uuid),
        this.specularIntensityMap &&
          this.specularIntensityMap.isTexture &&
          (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
        this.specularColorMap &&
          this.specularColorMap.isTexture &&
          (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
        this.envMap &&
          this.envMap.isTexture &&
          ((n.envMap = this.envMap.toJSON(t).uuid),
          void 0 !== this.combine && (n.combine = this.combine)),
        void 0 !== this.envMapIntensity &&
          (n.envMapIntensity = this.envMapIntensity),
        void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
        void 0 !== this.refractionRatio &&
          (n.refractionRatio = this.refractionRatio),
        this.gradientMap &&
          this.gradientMap.isTexture &&
          (n.gradientMap = this.gradientMap.toJSON(t).uuid),
        void 0 !== this.transmission && (n.transmission = this.transmission),
        this.transmissionMap &&
          this.transmissionMap.isTexture &&
          (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
        void 0 !== this.thickness && (n.thickness = this.thickness),
        this.thicknessMap &&
          this.thicknessMap.isTexture &&
          (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
        void 0 !== this.attenuationDistance &&
          this.attenuationDistance !== 1 / 0 &&
          (n.attenuationDistance = this.attenuationDistance),
        void 0 !== this.attenuationColor &&
          (n.attenuationColor = this.attenuationColor.getHex()),
        void 0 !== this.size && (n.size = this.size),
        null !== this.shadowSide && (n.shadowSide = this.shadowSide),
        void 0 !== this.sizeAttenuation &&
          (n.sizeAttenuation = this.sizeAttenuation),
        1 !== this.blending && (n.blending = this.blending),
        this.side !== u && (n.side = this.side),
        this.vertexColors && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        !0 === this.transparent && (n.transparent = this.transparent),
        (n.depthFunc = this.depthFunc),
        (n.depthTest = this.depthTest),
        (n.depthWrite = this.depthWrite),
        (n.colorWrite = this.colorWrite),
        (n.stencilWrite = this.stencilWrite),
        (n.stencilWriteMask = this.stencilWriteMask),
        (n.stencilFunc = this.stencilFunc),
        (n.stencilRef = this.stencilRef),
        (n.stencilFuncMask = this.stencilFuncMask),
        (n.stencilFail = this.stencilFail),
        (n.stencilZFail = this.stencilZFail),
        (n.stencilZPass = this.stencilZPass),
        void 0 !== this.rotation &&
          0 !== this.rotation &&
          (n.rotation = this.rotation),
        !0 === this.polygonOffset && (n.polygonOffset = !0),
        0 !== this.polygonOffsetFactor &&
          (n.polygonOffsetFactor = this.polygonOffsetFactor),
        0 !== this.polygonOffsetUnits &&
          (n.polygonOffsetUnits = this.polygonOffsetUnits),
        void 0 !== this.linewidth &&
          1 !== this.linewidth &&
          (n.linewidth = this.linewidth),
        void 0 !== this.dashSize && (n.dashSize = this.dashSize),
        void 0 !== this.gapSize && (n.gapSize = this.gapSize),
        void 0 !== this.scale && (n.scale = this.scale),
        !0 === this.dithering && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        !0 === this.alphaToCoverage &&
          (n.alphaToCoverage = this.alphaToCoverage),
        !0 === this.premultipliedAlpha &&
          (n.premultipliedAlpha = this.premultipliedAlpha),
        !0 === this.forceSinglePass &&
          (n.forceSinglePass = this.forceSinglePass),
        !0 === this.wireframe && (n.wireframe = this.wireframe),
        this.wireframeLinewidth > 1 &&
          (n.wireframeLinewidth = this.wireframeLinewidth),
        "round" !== this.wireframeLinecap &&
          (n.wireframeLinecap = this.wireframeLinecap),
        "round" !== this.wireframeLinejoin &&
          (n.wireframeLinejoin = this.wireframeLinejoin),
        !0 === this.flatShading && (n.flatShading = this.flatShading),
        !1 === this.visible && (n.visible = !1),
        !1 === this.toneMapped && (n.toneMapped = !1),
        !1 === this.fog && (n.fog = !1),
        Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        e)
      ) {
        const e = i(t.textures),
          r = i(t.images);
        e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
      }
      return n;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      (this.name = t.name),
        (this.blending = t.blending),
        (this.side = t.side),
        (this.vertexColors = t.vertexColors),
        (this.opacity = t.opacity),
        (this.transparent = t.transparent),
        (this.blendSrc = t.blendSrc),
        (this.blendDst = t.blendDst),
        (this.blendEquation = t.blendEquation),
        (this.blendSrcAlpha = t.blendSrcAlpha),
        (this.blendDstAlpha = t.blendDstAlpha),
        (this.blendEquationAlpha = t.blendEquationAlpha),
        (this.depthFunc = t.depthFunc),
        (this.depthTest = t.depthTest),
        (this.depthWrite = t.depthWrite),
        (this.stencilWriteMask = t.stencilWriteMask),
        (this.stencilFunc = t.stencilFunc),
        (this.stencilRef = t.stencilRef),
        (this.stencilFuncMask = t.stencilFuncMask),
        (this.stencilFail = t.stencilFail),
        (this.stencilZFail = t.stencilZFail),
        (this.stencilZPass = t.stencilZPass),
        (this.stencilWrite = t.stencilWrite);
      const e = t.clippingPlanes;
      let n = null;
      if (null !== e) {
        const t = e.length;
        n = new Array(t);
        for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
      }
      return (
        (this.clippingPlanes = n),
        (this.clipIntersection = t.clipIntersection),
        (this.clipShadows = t.clipShadows),
        (this.shadowSide = t.shadowSide),
        (this.colorWrite = t.colorWrite),
        (this.precision = t.precision),
        (this.polygonOffset = t.polygonOffset),
        (this.polygonOffsetFactor = t.polygonOffsetFactor),
        (this.polygonOffsetUnits = t.polygonOffsetUnits),
        (this.dithering = t.dithering),
        (this.alphaTest = t.alphaTest),
        (this.alphaToCoverage = t.alphaToCoverage),
        (this.premultipliedAlpha = t.premultipliedAlpha),
        (this.forceSinglePass = t.forceSinglePass),
        (this.visible = t.visible),
        (this.toneMapped = t.toneMapped),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(t) {
      !0 === t && this.version++;
    }
  }
  const vn = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    },
    xn = { h: 0, s: 0, l: 0 },
    yn = { h: 0, s: 0, l: 0 };
  function Mn(t, e, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? t + 6 * (e - t) * n
        : n < 0.5
        ? e
        : n < 2 / 3
        ? t + 6 * (e - t) * (2 / 3 - n)
        : t
    );
  }
  class Sn {
    constructor(t, e, n) {
      return (
        (this.isColor = !0),
        (this.r = 1),
        (this.g = 1),
        (this.b = 1),
        this.set(t, e, n)
      );
    }
    set(t, e, n) {
      if (void 0 === e && void 0 === n) {
        const e = t;
        e && e.isColor
          ? this.copy(e)
          : "number" == typeof e
          ? this.setHex(e)
          : "string" == typeof e && this.setStyle(e);
      } else this.setRGB(t, e, n);
      return this;
    }
    setScalar(t) {
      return (this.r = t), (this.g = t), (this.b = t), this;
    }
    setHex(t, e = at) {
      return (
        (t = Math.floor(t)),
        (this.r = ((t >> 16) & 255) / 255),
        (this.g = ((t >> 8) & 255) / 255),
        (this.b = (255 & t) / 255),
        Vt.toWorkingColorSpace(this, e),
        this
      );
    }
    setRGB(t, e, n, i = Vt.workingColorSpace) {
      return (
        (this.r = t),
        (this.g = e),
        (this.b = n),
        Vt.toWorkingColorSpace(this, i),
        this
      );
    }
    setHSL(t, e, n, i = Vt.workingColorSpace) {
      if (((t = Mt(t, 1)), (e = yt(e, 0, 1)), (n = yt(n, 0, 1)), 0 === e))
        this.r = this.g = this.b = n;
      else {
        const i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
          r = 2 * n - i;
        (this.r = Mn(r, i, t + 1 / 3)),
          (this.g = Mn(r, i, t)),
          (this.b = Mn(r, i, t - 1 / 3));
      }
      return Vt.toWorkingColorSpace(this, i), this;
    }
    setStyle(t, e = at) {
      function n(e) {
        void 0 !== e &&
          parseFloat(e) < 1 &&
          console.warn(
            "THREE.Color: Alpha component of " + t + " will be ignored."
          );
      }
      let i;
      if ((i = /^(\w+)\(([^\)]*)\)/.exec(t))) {
        let r;
        const a = i[1],
          s = i[2];
        switch (a) {
          case "rgb":
          case "rgba":
            if (
              (r =
                /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  s
                ))
            )
              return (
                n(r[4]),
                this.setRGB(
                  Math.min(255, parseInt(r[1], 10)) / 255,
                  Math.min(255, parseInt(r[2], 10)) / 255,
                  Math.min(255, parseInt(r[3], 10)) / 255,
                  e
                )
              );
            if (
              (r =
                /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  s
                ))
            )
              return (
                n(r[4]),
                this.setRGB(
                  Math.min(100, parseInt(r[1], 10)) / 100,
                  Math.min(100, parseInt(r[2], 10)) / 100,
                  Math.min(100, parseInt(r[3], 10)) / 100,
                  e
                )
              );
            break;
          case "hsl":
          case "hsla":
            if (
              (r =
                /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  s
                ))
            )
              return (
                n(r[4]),
                this.setHSL(
                  parseFloat(r[1]) / 360,
                  parseFloat(r[2]) / 100,
                  parseFloat(r[3]) / 100,
                  e
                )
              );
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + t);
        }
      } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(t))) {
        const n = i[1],
          r = n.length;
        if (3 === r)
          return this.setRGB(
            parseInt(n.charAt(0), 16) / 15,
            parseInt(n.charAt(1), 16) / 15,
            parseInt(n.charAt(2), 16) / 15,
            e
          );
        if (6 === r) return this.setHex(parseInt(n, 16), e);
        console.warn("THREE.Color: Invalid hex color " + t);
      } else if (t && t.length > 0) return this.setColorName(t, e);
      return this;
    }
    setColorName(t, e = at) {
      const n = vn[t.toLowerCase()];
      return (
        void 0 !== n
          ? this.setHex(n, e)
          : console.warn("THREE.Color: Unknown color " + t),
        this
      );
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(t) {
      return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
    }
    copySRGBToLinear(t) {
      return (this.r = Ot(t.r)), (this.g = Ot(t.g)), (this.b = Ot(t.b)), this;
    }
    copyLinearToSRGB(t) {
      return (this.r = Ft(t.r)), (this.g = Ft(t.g)), (this.b = Ft(t.b)), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(t = at) {
      return (
        Vt.fromWorkingColorSpace(En.copy(this), t),
        65536 * Math.round(yt(255 * En.r, 0, 255)) +
          256 * Math.round(yt(255 * En.g, 0, 255)) +
          Math.round(yt(255 * En.b, 0, 255))
      );
    }
    getHexString(t = at) {
      return ("000000" + this.getHex(t).toString(16)).slice(-6);
    }
    getHSL(t, e = Vt.workingColorSpace) {
      Vt.fromWorkingColorSpace(En.copy(this), e);
      const n = En.r,
        i = En.g,
        r = En.b,
        a = Math.max(n, i, r),
        s = Math.min(n, i, r);
      let o, l;
      const c = (s + a) / 2;
      if (s === a) (o = 0), (l = 0);
      else {
        const t = a - s;
        switch (((l = c <= 0.5 ? t / (a + s) : t / (2 - a - s)), a)) {
          case n:
            o = (i - r) / t + (i < r ? 6 : 0);
            break;
          case i:
            o = (r - n) / t + 2;
            break;
          case r:
            o = (n - i) / t + 4;
        }
        o /= 6;
      }
      return (t.h = o), (t.s = l), (t.l = c), t;
    }
    getRGB(t, e = Vt.workingColorSpace) {
      return (
        Vt.fromWorkingColorSpace(En.copy(this), e),
        (t.r = En.r),
        (t.g = En.g),
        (t.b = En.b),
        t
      );
    }
    getStyle(t = at) {
      Vt.fromWorkingColorSpace(En.copy(this), t);
      const e = En.r,
        n = En.g,
        i = En.b;
      return t !== at
        ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
        : `rgb(${Math.round(255 * e)},${Math.round(255 * n)},${Math.round(
            255 * i
          )})`;
    }
    offsetHSL(t, e, n) {
      return (
        this.getHSL(xn),
        (xn.h += t),
        (xn.s += e),
        (xn.l += n),
        this.setHSL(xn.h, xn.s, xn.l),
        this
      );
    }
    add(t) {
      return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
    }
    addColors(t, e) {
      return (
        (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
      );
    }
    addScalar(t) {
      return (this.r += t), (this.g += t), (this.b += t), this;
    }
    sub(t) {
      return (
        (this.r = Math.max(0, this.r - t.r)),
        (this.g = Math.max(0, this.g - t.g)),
        (this.b = Math.max(0, this.b - t.b)),
        this
      );
    }
    multiply(t) {
      return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
    }
    multiplyScalar(t) {
      return (this.r *= t), (this.g *= t), (this.b *= t), this;
    }
    lerp(t, e) {
      return (
        (this.r += (t.r - this.r) * e),
        (this.g += (t.g - this.g) * e),
        (this.b += (t.b - this.b) * e),
        this
      );
    }
    lerpColors(t, e, n) {
      return (
        (this.r = t.r + (e.r - t.r) * n),
        (this.g = t.g + (e.g - t.g) * n),
        (this.b = t.b + (e.b - t.b) * n),
        this
      );
    }
    lerpHSL(t, e) {
      this.getHSL(xn), t.getHSL(yn);
      const n = St(xn.h, yn.h, e),
        i = St(xn.s, yn.s, e),
        r = St(xn.l, yn.l, e);
      return this.setHSL(n, i, r), this;
    }
    setFromVector3(t) {
      return (this.r = t.x), (this.g = t.y), (this.b = t.z), this;
    }
    applyMatrix3(t) {
      const e = this.r,
        n = this.g,
        i = this.b,
        r = t.elements;
      return (
        (this.r = r[0] * e + r[3] * n + r[6] * i),
        (this.g = r[1] * e + r[4] * n + r[7] * i),
        (this.b = r[2] * e + r[5] * n + r[8] * i),
        this
      );
    }
    equals(t) {
      return t.r === this.r && t.g === this.g && t.b === this.b;
    }
    fromArray(t, e = 0) {
      return (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
    }
    fromBufferAttribute(t, e) {
      return (
        (this.r = t.getX(e)), (this.g = t.getY(e)), (this.b = t.getZ(e)), this
      );
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  }
  const En = new Sn();
  Sn.NAMES = vn;
  class bn extends _n {
    constructor(t) {
      super(),
        (this.isMeshBasicMaterial = !0),
        (this.type = "MeshBasicMaterial"),
        (this.color = new Sn(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.combine = m),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.fog = !0),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.lightMap = t.lightMap),
        (this.lightMapIntensity = t.lightMapIntensity),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        (this.specularMap = t.specularMap),
        (this.alphaMap = t.alphaMap),
        (this.envMap = t.envMap),
        (this.combine = t.combine),
        (this.reflectivity = t.reflectivity),
        (this.refractionRatio = t.refractionRatio),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.fog = t.fog),
        this
      );
    }
  }
  const wn = new ee(),
    Tn = new Ct();
  class An {
    constructor(t, e, n = !1) {
      if (Array.isArray(t))
        throw new TypeError(
          "THREE.BufferAttribute: array should be a Typed Array."
        );
      (this.isBufferAttribute = !0),
        (this.name = ""),
        (this.array = t),
        (this.itemSize = e),
        (this.count = void 0 !== t ? t.length / e : 0),
        (this.normalized = n),
        (this.usage = ct),
        (this.updateRange = { offset: 0, count: -1 }),
        (this.gpuType = k),
        (this.version = 0);
    }
    onUploadCallback() {}
    set needsUpdate(t) {
      !0 === t && this.version++;
    }
    setUsage(t) {
      return (this.usage = t), this;
    }
    copy(t) {
      return (
        (this.name = t.name),
        (this.array = new t.array.constructor(t.array)),
        (this.itemSize = t.itemSize),
        (this.count = t.count),
        (this.normalized = t.normalized),
        (this.usage = t.usage),
        (this.gpuType = t.gpuType),
        this
      );
    }
    copyAt(t, e, n) {
      (t *= this.itemSize), (n *= e.itemSize);
      for (let i = 0, r = this.itemSize; i < r; i++)
        this.array[t + i] = e.array[n + i];
      return this;
    }
    copyArray(t) {
      return this.array.set(t), this;
    }
    applyMatrix3(t) {
      if (2 === this.itemSize)
        for (let e = 0, n = this.count; e < n; e++)
          Tn.fromBufferAttribute(this, e),
            Tn.applyMatrix3(t),
            this.setXY(e, Tn.x, Tn.y);
      else if (3 === this.itemSize)
        for (let e = 0, n = this.count; e < n; e++)
          wn.fromBufferAttribute(this, e),
            wn.applyMatrix3(t),
            this.setXYZ(e, wn.x, wn.y, wn.z);
      return this;
    }
    applyMatrix4(t) {
      for (let e = 0, n = this.count; e < n; e++)
        wn.fromBufferAttribute(this, e),
          wn.applyMatrix4(t),
          this.setXYZ(e, wn.x, wn.y, wn.z);
      return this;
    }
    applyNormalMatrix(t) {
      for (let e = 0, n = this.count; e < n; e++)
        wn.fromBufferAttribute(this, e),
          wn.applyNormalMatrix(t),
          this.setXYZ(e, wn.x, wn.y, wn.z);
      return this;
    }
    transformDirection(t) {
      for (let e = 0, n = this.count; e < n; e++)
        wn.fromBufferAttribute(this, e),
          wn.transformDirection(t),
          this.setXYZ(e, wn.x, wn.y, wn.z);
      return this;
    }
    set(t, e = 0) {
      return this.array.set(t, e), this;
    }
    getX(t) {
      let e = this.array[t * this.itemSize];
      return this.normalized && (e = Tt(e, this.array)), e;
    }
    setX(t, e) {
      return (
        this.normalized && (e = At(e, this.array)),
        (this.array[t * this.itemSize] = e),
        this
      );
    }
    getY(t) {
      let e = this.array[t * this.itemSize + 1];
      return this.normalized && (e = Tt(e, this.array)), e;
    }
    setY(t, e) {
      return (
        this.normalized && (e = At(e, this.array)),
        (this.array[t * this.itemSize + 1] = e),
        this
      );
    }
    getZ(t) {
      let e = this.array[t * this.itemSize + 2];
      return this.normalized && (e = Tt(e, this.array)), e;
    }
    setZ(t, e) {
      return (
        this.normalized && (e = At(e, this.array)),
        (this.array[t * this.itemSize + 2] = e),
        this
      );
    }
    getW(t) {
      let e = this.array[t * this.itemSize + 3];
      return this.normalized && (e = Tt(e, this.array)), e;
    }
    setW(t, e) {
      return (
        this.normalized && (e = At(e, this.array)),
        (this.array[t * this.itemSize + 3] = e),
        this
      );
    }
    setXY(t, e, n) {
      return (
        (t *= this.itemSize),
        this.normalized && ((e = At(e, this.array)), (n = At(n, this.array))),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        this
      );
    }
    setXYZ(t, e, n, i) {
      return (
        (t *= this.itemSize),
        this.normalized &&
          ((e = At(e, this.array)),
          (n = At(n, this.array)),
          (i = At(i, this.array))),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        (this.array[t + 2] = i),
        this
      );
    }
    setXYZW(t, e, n, i, r) {
      return (
        (t *= this.itemSize),
        this.normalized &&
          ((e = At(e, this.array)),
          (n = At(n, this.array)),
          (i = At(i, this.array)),
          (r = At(r, this.array))),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        (this.array[t + 2] = i),
        (this.array[t + 3] = r),
        this
      );
    }
    onUpload(t) {
      return (this.onUploadCallback = t), this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const t = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized,
      };
      return (
        "" !== this.name && (t.name = this.name),
        this.usage !== ct && (t.usage = this.usage),
        (0 === this.updateRange.offset && -1 === this.updateRange.count) ||
          (t.updateRange = this.updateRange),
        t
      );
    }
    copyColorsArray() {
      console.error(
        "THREE.BufferAttribute: copyColorsArray() was removed in r144."
      );
    }
    copyVector2sArray() {
      console.error(
        "THREE.BufferAttribute: copyVector2sArray() was removed in r144."
      );
    }
    copyVector3sArray() {
      console.error(
        "THREE.BufferAttribute: copyVector3sArray() was removed in r144."
      );
    }
    copyVector4sArray() {
      console.error(
        "THREE.BufferAttribute: copyVector4sArray() was removed in r144."
      );
    }
  }
  class Rn extends An {
    constructor(t, e, n) {
      super(new Uint16Array(t), e, n);
    }
  }
  class Cn extends An {
    constructor(t, e, n) {
      super(new Uint32Array(t), e, n);
    }
  }
  class Pn extends An {
    constructor(t, e, n) {
      super(new Float32Array(t), e, n);
    }
  }
  let Ln = 0;
  const Un = new Le(),
    Dn = new nn(),
    In = new ee(),
    Nn = new re(),
    On = new re(),
    Fn = new ee();
  class zn extends mt {
    constructor() {
      super(),
        (this.isBufferGeometry = !0),
        Object.defineProperty(this, "id", { value: Ln++ }),
        (this.uuid = xt()),
        (this.name = ""),
        (this.type = "BufferGeometry"),
        (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.morphTargetsRelative = !1),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 }),
        (this.userData = {});
    }
    getIndex() {
      return this.index;
    }
    setIndex(t) {
      return (
        Array.isArray(t)
          ? (this.index = new (Ut(t) ? Cn : Rn)(t, 1))
          : (this.index = t),
        this
      );
    }
    getAttribute(t) {
      return this.attributes[t];
    }
    setAttribute(t, e) {
      return (this.attributes[t] = e), this;
    }
    deleteAttribute(t) {
      return delete this.attributes[t], this;
    }
    hasAttribute(t) {
      return void 0 !== this.attributes[t];
    }
    addGroup(t, e, n = 0) {
      this.groups.push({ start: t, count: e, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t, e) {
      (this.drawRange.start = t), (this.drawRange.count = e);
    }
    applyMatrix4(t) {
      const e = this.attributes.position;
      void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
      const n = this.attributes.normal;
      if (void 0 !== n) {
        const e = new Pt().getNormalMatrix(t);
        n.applyNormalMatrix(e), (n.needsUpdate = !0);
      }
      const i = this.attributes.tangent;
      return (
        void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)),
        null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        this
      );
    }
    applyQuaternion(t) {
      return Un.makeRotationFromQuaternion(t), this.applyMatrix4(Un), this;
    }
    rotateX(t) {
      return Un.makeRotationX(t), this.applyMatrix4(Un), this;
    }
    rotateY(t) {
      return Un.makeRotationY(t), this.applyMatrix4(Un), this;
    }
    rotateZ(t) {
      return Un.makeRotationZ(t), this.applyMatrix4(Un), this;
    }
    translate(t, e, n) {
      return Un.makeTranslation(t, e, n), this.applyMatrix4(Un), this;
    }
    scale(t, e, n) {
      return Un.makeScale(t, e, n), this.applyMatrix4(Un), this;
    }
    lookAt(t) {
      return (
        Dn.lookAt(t), Dn.updateMatrix(), this.applyMatrix4(Dn.matrix), this
      );
    }
    center() {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter(In).negate(),
        this.translate(In.x, In.y, In.z),
        this
      );
    }
    setFromPoints(t) {
      const e = [];
      for (let n = 0, i = t.length; n < i; n++) {
        const i = t[n];
        e.push(i.x, i.y, i.z || 0);
      }
      return this.setAttribute("position", new Pn(e, 3)), this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new re());
      const t = this.attributes.position,
        e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute)
        return (
          console.error(
            'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
            this
          ),
          void this.boundingBox.set(
            new ee(-1 / 0, -1 / 0, -1 / 0),
            new ee(1 / 0, 1 / 0, 1 / 0)
          )
        );
      if (void 0 !== t) {
        if ((this.boundingBox.setFromBufferAttribute(t), e))
          for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            Nn.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (Fn.addVectors(this.boundingBox.min, Nn.min),
                  this.boundingBox.expandByPoint(Fn),
                  Fn.addVectors(this.boundingBox.max, Nn.max),
                  this.boundingBox.expandByPoint(Fn))
                : (this.boundingBox.expandByPoint(Nn.min),
                  this.boundingBox.expandByPoint(Nn.max));
          }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z)) &&
        console.error(
          'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
          this
        );
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new Se());
      const t = this.attributes.position,
        e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute)
        return (
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
            this
          ),
          void this.boundingSphere.set(new ee(), 1 / 0)
        );
      if (t) {
        const n = this.boundingSphere.center;
        if ((Nn.setFromBufferAttribute(t), e))
          for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            On.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (Fn.addVectors(Nn.min, On.min),
                  Nn.expandByPoint(Fn),
                  Fn.addVectors(Nn.max, On.max),
                  Nn.expandByPoint(Fn))
                : (Nn.expandByPoint(On.min), Nn.expandByPoint(On.max));
          }
        Nn.getCenter(n);
        let i = 0;
        for (let e = 0, r = t.count; e < r; e++)
          Fn.fromBufferAttribute(t, e),
            (i = Math.max(i, n.distanceToSquared(Fn)));
        if (e)
          for (let r = 0, a = e.length; r < a; r++) {
            const a = e[r],
              s = this.morphTargetsRelative;
            for (let e = 0, r = a.count; e < r; e++)
              Fn.fromBufferAttribute(a, e),
                s && (In.fromBufferAttribute(t, e), Fn.add(In)),
                (i = Math.max(i, n.distanceToSquared(Fn)));
          }
        (this.boundingSphere.radius = Math.sqrt(i)),
          isNaN(this.boundingSphere.radius) &&
            console.error(
              'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
              this
            );
      }
    }
    computeTangents() {
      const t = this.index,
        e = this.attributes;
      if (
        null === t ||
        void 0 === e.position ||
        void 0 === e.normal ||
        void 0 === e.uv
      )
        return void console.error(
          "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
        );
      const n = t.array,
        i = e.position.array,
        r = e.normal.array,
        a = e.uv.array,
        s = i.length / 3;
      !1 === this.hasAttribute("tangent") &&
        this.setAttribute("tangent", new An(new Float32Array(4 * s), 4));
      const o = this.getAttribute("tangent").array,
        l = [],
        c = [];
      for (let t = 0; t < s; t++) (l[t] = new ee()), (c[t] = new ee());
      const h = new ee(),
        u = new ee(),
        d = new ee(),
        p = new Ct(),
        m = new Ct(),
        f = new Ct(),
        g = new ee(),
        _ = new ee();
      function v(t, e, n) {
        h.fromArray(i, 3 * t),
          u.fromArray(i, 3 * e),
          d.fromArray(i, 3 * n),
          p.fromArray(a, 2 * t),
          m.fromArray(a, 2 * e),
          f.fromArray(a, 2 * n),
          u.sub(h),
          d.sub(h),
          m.sub(p),
          f.sub(p);
        const r = 1 / (m.x * f.y - f.x * m.y);
        isFinite(r) &&
          (g
            .copy(u)
            .multiplyScalar(f.y)
            .addScaledVector(d, -m.y)
            .multiplyScalar(r),
          _.copy(d)
            .multiplyScalar(m.x)
            .addScaledVector(u, -f.x)
            .multiplyScalar(r),
          l[t].add(g),
          l[e].add(g),
          l[n].add(g),
          c[t].add(_),
          c[e].add(_),
          c[n].add(_));
      }
      let x = this.groups;
      0 === x.length && (x = [{ start: 0, count: n.length }]);
      for (let t = 0, e = x.length; t < e; ++t) {
        const e = x[t],
          i = e.start;
        for (let t = i, r = i + e.count; t < r; t += 3)
          v(n[t + 0], n[t + 1], n[t + 2]);
      }
      const y = new ee(),
        M = new ee(),
        S = new ee(),
        E = new ee();
      function b(t) {
        S.fromArray(r, 3 * t), E.copy(S);
        const e = l[t];
        y.copy(e),
          y.sub(S.multiplyScalar(S.dot(e))).normalize(),
          M.crossVectors(E, e);
        const n = M.dot(c[t]) < 0 ? -1 : 1;
        (o[4 * t] = y.x),
          (o[4 * t + 1] = y.y),
          (o[4 * t + 2] = y.z),
          (o[4 * t + 3] = n);
      }
      for (let t = 0, e = x.length; t < e; ++t) {
        const e = x[t],
          i = e.start;
        for (let t = i, r = i + e.count; t < r; t += 3)
          b(n[t + 0]), b(n[t + 1]), b(n[t + 2]);
      }
    }
    computeVertexNormals() {
      const t = this.index,
        e = this.getAttribute("position");
      if (void 0 !== e) {
        let n = this.getAttribute("normal");
        if (void 0 === n)
          (n = new An(new Float32Array(3 * e.count), 3)),
            this.setAttribute("normal", n);
        else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
        const i = new ee(),
          r = new ee(),
          a = new ee(),
          s = new ee(),
          o = new ee(),
          l = new ee(),
          c = new ee(),
          h = new ee();
        if (t)
          for (let u = 0, d = t.count; u < d; u += 3) {
            const d = t.getX(u + 0),
              p = t.getX(u + 1),
              m = t.getX(u + 2);
            i.fromBufferAttribute(e, d),
              r.fromBufferAttribute(e, p),
              a.fromBufferAttribute(e, m),
              c.subVectors(a, r),
              h.subVectors(i, r),
              c.cross(h),
              s.fromBufferAttribute(n, d),
              o.fromBufferAttribute(n, p),
              l.fromBufferAttribute(n, m),
              s.add(c),
              o.add(c),
              l.add(c),
              n.setXYZ(d, s.x, s.y, s.z),
              n.setXYZ(p, o.x, o.y, o.z),
              n.setXYZ(m, l.x, l.y, l.z);
          }
        else
          for (let t = 0, s = e.count; t < s; t += 3)
            i.fromBufferAttribute(e, t + 0),
              r.fromBufferAttribute(e, t + 1),
              a.fromBufferAttribute(e, t + 2),
              c.subVectors(a, r),
              h.subVectors(i, r),
              c.cross(h),
              n.setXYZ(t + 0, c.x, c.y, c.z),
              n.setXYZ(t + 1, c.x, c.y, c.z),
              n.setXYZ(t + 2, c.x, c.y, c.z);
        this.normalizeNormals(), (n.needsUpdate = !0);
      }
    }
    merge() {
      return (
        console.error(
          "THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."
        ),
        this
      );
    }
    normalizeNormals() {
      const t = this.attributes.normal;
      for (let e = 0, n = t.count; e < n; e++)
        Fn.fromBufferAttribute(t, e),
          Fn.normalize(),
          t.setXYZ(e, Fn.x, Fn.y, Fn.z);
    }
    toNonIndexed() {
      function t(t, e) {
        const n = t.array,
          i = t.itemSize,
          r = t.normalized,
          a = new n.constructor(e.length * i);
        let s = 0,
          o = 0;
        for (let r = 0, l = e.length; r < l; r++) {
          s = t.isInterleavedBufferAttribute
            ? e[r] * t.data.stride + t.offset
            : e[r] * i;
          for (let t = 0; t < i; t++) a[o++] = n[s++];
        }
        return new An(a, i, r);
      }
      if (null === this.index)
        return (
          console.warn(
            "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
          ),
          this
        );
      const e = new zn(),
        n = this.index.array,
        i = this.attributes;
      for (const r in i) {
        const a = t(i[r], n);
        e.setAttribute(r, a);
      }
      const r = this.morphAttributes;
      for (const i in r) {
        const a = [],
          s = r[i];
        for (let e = 0, i = s.length; e < i; e++) {
          const i = t(s[e], n);
          a.push(i);
        }
        e.morphAttributes[i] = a;
      }
      e.morphTargetsRelative = this.morphTargetsRelative;
      const a = this.groups;
      for (let t = 0, n = a.length; t < n; t++) {
        const n = a[t];
        e.addGroup(n.start, n.count, n.materialIndex);
      }
      return e;
    }
    toJSON() {
      const t = {
        metadata: {
          version: 4.6,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON",
        },
      };
      if (
        ((t.uuid = this.uuid),
        (t.type = this.type),
        "" !== this.name && (t.name = this.name),
        Object.keys(this.userData).length > 0 && (t.userData = this.userData),
        void 0 !== this.parameters)
      ) {
        const e = this.parameters;
        for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
        return t;
      }
      t.data = { attributes: {} };
      const e = this.index;
      null !== e &&
        (t.data.index = {
          type: e.array.constructor.name,
          array: Array.prototype.slice.call(e.array),
        });
      const n = this.attributes;
      for (const e in n) {
        const i = n[e];
        t.data.attributes[e] = i.toJSON(t.data);
      }
      const i = {};
      let r = !1;
      for (const e in this.morphAttributes) {
        const n = this.morphAttributes[e],
          a = [];
        for (let e = 0, i = n.length; e < i; e++) {
          const i = n[e];
          a.push(i.toJSON(t.data));
        }
        a.length > 0 && ((i[e] = a), (r = !0));
      }
      r &&
        ((t.data.morphAttributes = i),
        (t.data.morphTargetsRelative = this.morphTargetsRelative));
      const a = this.groups;
      a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
      const s = this.boundingSphere;
      return (
        null !== s &&
          (t.data.boundingSphere = {
            center: s.center.toArray(),
            radius: s.radius,
          }),
        t
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null);
      const e = {};
      this.name = t.name;
      const n = t.index;
      null !== n && this.setIndex(n.clone(e));
      const i = t.attributes;
      for (const t in i) {
        const n = i[t];
        this.setAttribute(t, n.clone(e));
      }
      const r = t.morphAttributes;
      for (const t in r) {
        const n = [],
          i = r[t];
        for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
        this.morphAttributes[t] = n;
      }
      this.morphTargetsRelative = t.morphTargetsRelative;
      const a = t.groups;
      for (let t = 0, e = a.length; t < e; t++) {
        const e = a[t];
        this.addGroup(e.start, e.count, e.materialIndex);
      }
      const s = t.boundingBox;
      null !== s && (this.boundingBox = s.clone());
      const o = t.boundingSphere;
      return (
        null !== o && (this.boundingSphere = o.clone()),
        (this.drawRange.start = t.drawRange.start),
        (this.drawRange.count = t.drawRange.count),
        (this.userData = t.userData),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  const Bn = new Le(),
    kn = new Pe(),
    Hn = new Se(),
    Vn = new ee(),
    Gn = new ee(),
    Wn = new ee(),
    Xn = new ee(),
    jn = new ee(),
    Yn = new ee(),
    qn = new Ct(),
    Zn = new Ct(),
    Kn = new Ct(),
    $n = new ee(),
    Jn = new ee(),
    Qn = new ee(),
    ti = new ee(),
    ei = new ee();
  class ni extends nn {
    constructor(t = new zn(), e = new bn()) {
      super(),
        (this.isMesh = !0),
        (this.type = "Mesh"),
        (this.geometry = t),
        (this.material = e),
        this.updateMorphTargets();
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        void 0 !== t.morphTargetInfluences &&
          (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
        void 0 !== t.morphTargetDictionary &&
          (this.morphTargetDictionary = Object.assign(
            {},
            t.morphTargetDictionary
          )),
        (this.material = t.material),
        (this.geometry = t.geometry),
        this
      );
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes,
        e = Object.keys(t);
      if (e.length > 0) {
        const n = t[e[0]];
        if (void 0 !== n) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let t = 0, e = n.length; t < e; t++) {
            const e = n[t].name || String(t);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[e] = t);
          }
        }
      }
    }
    getVertexPosition(t, e) {
      const n = this.geometry,
        i = n.attributes.position,
        r = n.morphAttributes.position,
        a = n.morphTargetsRelative;
      e.fromBufferAttribute(i, t);
      const s = this.morphTargetInfluences;
      if (r && s) {
        Yn.set(0, 0, 0);
        for (let n = 0, i = r.length; n < i; n++) {
          const i = s[n],
            o = r[n];
          0 !== i &&
            (jn.fromBufferAttribute(o, t),
            a ? Yn.addScaledVector(jn, i) : Yn.addScaledVector(jn.sub(e), i));
        }
        e.add(Yn);
      }
      return e;
    }
    raycast(t, e) {
      const n = this.geometry,
        i = this.material,
        r = this.matrixWorld;
      if (void 0 !== i) {
        if (
          (null === n.boundingSphere && n.computeBoundingSphere(),
          Hn.copy(n.boundingSphere),
          Hn.applyMatrix4(r),
          kn.copy(t.ray).recast(t.near),
          !1 === Hn.containsPoint(kn.origin))
        ) {
          if (null === kn.intersectSphere(Hn, Vn)) return;
          if (kn.origin.distanceToSquared(Vn) > (t.far - t.near) ** 2) return;
        }
        Bn.copy(r).invert(),
          kn.copy(t.ray).applyMatrix4(Bn),
          (null !== n.boundingBox && !1 === kn.intersectsBox(n.boundingBox)) ||
            this._computeIntersections(t, e, kn);
      }
    }
    _computeIntersections(t, e, n) {
      let i;
      const r = this.geometry,
        a = this.material,
        s = r.index,
        o = r.attributes.position,
        l = r.attributes.uv,
        c = r.attributes.uv1,
        h = r.attributes.normal,
        u = r.groups,
        d = r.drawRange;
      if (null !== s)
        if (Array.isArray(a))
          for (let r = 0, o = u.length; r < o; r++) {
            const o = u[r],
              p = a[o.materialIndex];
            for (
              let r = Math.max(o.start, d.start),
                a = Math.min(
                  s.count,
                  Math.min(o.start + o.count, d.start + d.count)
                );
              r < a;
              r += 3
            ) {
              (i = ii(
                this,
                p,
                t,
                n,
                l,
                c,
                h,
                s.getX(r),
                s.getX(r + 1),
                s.getX(r + 2)
              )),
                i &&
                  ((i.faceIndex = Math.floor(r / 3)),
                  (i.face.materialIndex = o.materialIndex),
                  e.push(i));
            }
          }
        else {
          for (
            let r = Math.max(0, d.start),
              o = Math.min(s.count, d.start + d.count);
            r < o;
            r += 3
          ) {
            (i = ii(
              this,
              a,
              t,
              n,
              l,
              c,
              h,
              s.getX(r),
              s.getX(r + 1),
              s.getX(r + 2)
            )),
              i && ((i.faceIndex = Math.floor(r / 3)), e.push(i));
          }
        }
      else if (void 0 !== o)
        if (Array.isArray(a))
          for (let r = 0, s = u.length; r < s; r++) {
            const s = u[r],
              p = a[s.materialIndex];
            for (
              let r = Math.max(s.start, d.start),
                a = Math.min(
                  o.count,
                  Math.min(s.start + s.count, d.start + d.count)
                );
              r < a;
              r += 3
            ) {
              (i = ii(this, p, t, n, l, c, h, r, r + 1, r + 2)),
                i &&
                  ((i.faceIndex = Math.floor(r / 3)),
                  (i.face.materialIndex = s.materialIndex),
                  e.push(i));
            }
          }
        else {
          for (
            let r = Math.max(0, d.start),
              s = Math.min(o.count, d.start + d.count);
            r < s;
            r += 3
          ) {
            (i = ii(this, a, t, n, l, c, h, r, r + 1, r + 2)),
              i && ((i.faceIndex = Math.floor(r / 3)), e.push(i));
          }
        }
    }
  }
  function ii(t, e, n, i, r, a, s, o, l, c) {
    t.getVertexPosition(o, Gn),
      t.getVertexPosition(l, Wn),
      t.getVertexPosition(c, Xn);
    const h = (function (t, e, n, i, r, a, s, o) {
      let l;
      if (
        ((l =
          e.side === d
            ? i.intersectTriangle(s, a, r, !0, o)
            : i.intersectTriangle(r, a, s, e.side === u, o)),
        null === l)
      )
        return null;
      ei.copy(o), ei.applyMatrix4(t.matrixWorld);
      const c = n.ray.origin.distanceTo(ei);
      return c < n.near || c > n.far
        ? null
        : { distance: c, point: ei.clone(), object: t };
    })(t, e, n, i, Gn, Wn, Xn, ti);
    if (h) {
      r &&
        (qn.fromBufferAttribute(r, o),
        Zn.fromBufferAttribute(r, l),
        Kn.fromBufferAttribute(r, c),
        (h.uv = fn.getInterpolation(ti, Gn, Wn, Xn, qn, Zn, Kn, new Ct()))),
        a &&
          (qn.fromBufferAttribute(a, o),
          Zn.fromBufferAttribute(a, l),
          Kn.fromBufferAttribute(a, c),
          (h.uv1 = fn.getInterpolation(ti, Gn, Wn, Xn, qn, Zn, Kn, new Ct())),
          (h.uv2 = h.uv1)),
        s &&
          ($n.fromBufferAttribute(s, o),
          Jn.fromBufferAttribute(s, l),
          Qn.fromBufferAttribute(s, c),
          (h.normal = fn.getInterpolation(
            ti,
            Gn,
            Wn,
            Xn,
            $n,
            Jn,
            Qn,
            new ee()
          )),
          h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
      const t = { a: o, b: l, c, normal: new ee(), materialIndex: 0 };
      fn.getNormal(Gn, Wn, Xn, t.normal), (h.face = t);
    }
    return h;
  }
  class ri extends zn {
    constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) {
      super(),
        (this.type = "BoxGeometry"),
        (this.parameters = {
          width: t,
          height: e,
          depth: n,
          widthSegments: i,
          heightSegments: r,
          depthSegments: a,
        });
      const s = this;
      (i = Math.floor(i)), (r = Math.floor(r)), (a = Math.floor(a));
      const o = [],
        l = [],
        c = [],
        h = [];
      let u = 0,
        d = 0;
      function p(t, e, n, i, r, a, p, m, f, g, _) {
        const v = a / f,
          x = p / g,
          y = a / 2,
          M = p / 2,
          S = m / 2,
          E = f + 1,
          b = g + 1;
        let w = 0,
          T = 0;
        const A = new ee();
        for (let a = 0; a < b; a++) {
          const s = a * x - M;
          for (let o = 0; o < E; o++) {
            const u = o * v - y;
            (A[t] = u * i),
              (A[e] = s * r),
              (A[n] = S),
              l.push(A.x, A.y, A.z),
              (A[t] = 0),
              (A[e] = 0),
              (A[n] = m > 0 ? 1 : -1),
              c.push(A.x, A.y, A.z),
              h.push(o / f),
              h.push(1 - a / g),
              (w += 1);
          }
        }
        for (let t = 0; t < g; t++)
          for (let e = 0; e < f; e++) {
            const n = u + e + E * t,
              i = u + e + E * (t + 1),
              r = u + (e + 1) + E * (t + 1),
              a = u + (e + 1) + E * t;
            o.push(n, i, a), o.push(i, r, a), (T += 6);
          }
        s.addGroup(d, T, _), (d += T), (u += w);
      }
      p("z", "y", "x", -1, -1, n, e, t, a, r, 0),
        p("z", "y", "x", 1, -1, n, e, -t, a, r, 1),
        p("x", "z", "y", 1, 1, t, n, e, i, a, 2),
        p("x", "z", "y", 1, -1, t, n, -e, i, a, 3),
        p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
        p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
        this.setIndex(o),
        this.setAttribute("position", new Pn(l, 3)),
        this.setAttribute("normal", new Pn(c, 3)),
        this.setAttribute("uv", new Pn(h, 2));
    }
    copy(t) {
      return (
        super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
      );
    }
    static fromJSON(t) {
      return new ri(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments
      );
    }
  }
  function ai(t) {
    const e = {};
    for (const n in t) {
      e[n] = {};
      for (const i in t[n]) {
        const r = t[n][i];
        r &&
        (r.isColor ||
          r.isMatrix3 ||
          r.isMatrix4 ||
          r.isVector2 ||
          r.isVector3 ||
          r.isVector4 ||
          r.isTexture ||
          r.isQuaternion)
          ? r.isRenderTargetTexture
            ? (console.warn(
                "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
              ),
              (e[n][i] = null))
            : (e[n][i] = r.clone())
          : Array.isArray(r)
          ? (e[n][i] = r.slice())
          : (e[n][i] = r);
      }
    }
    return e;
  }
  function si(t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const i = ai(t[n]);
      for (const t in i) e[t] = i[t];
    }
    return e;
  }
  function oi(t) {
    return null === t.getRenderTarget() ? t.outputColorSpace : st;
  }
  const li = { clone: ai, merge: si };
  class ci extends _n {
    constructor(t) {
      super(),
        (this.isShaderMaterial = !0),
        (this.type = "ShaderMaterial"),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.uniformsGroups = []),
        (this.vertexShader =
          "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
        (this.fragmentShader =
          "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.forceSinglePass = !0),
        (this.extensions = {
          derivatives: !1,
          fragDepth: !1,
          drawBuffers: !1,
          shaderTextureLOD: !1,
        }),
        (this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv1: [0, 0],
        }),
        (this.index0AttributeName = void 0),
        (this.uniformsNeedUpdate = !1),
        (this.glslVersion = null),
        void 0 !== t && this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.fragmentShader = t.fragmentShader),
        (this.vertexShader = t.vertexShader),
        (this.uniforms = ai(t.uniforms)),
        (this.uniformsGroups = (function (t) {
          const e = [];
          for (let n = 0; n < t.length; n++) e.push(t[n].clone());
          return e;
        })(t.uniformsGroups)),
        (this.defines = Object.assign({}, t.defines)),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.fog = t.fog),
        (this.lights = t.lights),
        (this.clipping = t.clipping),
        (this.extensions = Object.assign({}, t.extensions)),
        (this.glslVersion = t.glslVersion),
        this
      );
    }
    toJSON(t) {
      const e = super.toJSON(t);
      (e.glslVersion = this.glslVersion), (e.uniforms = {});
      for (const n in this.uniforms) {
        const i = this.uniforms[n].value;
        i && i.isTexture
          ? (e.uniforms[n] = { type: "t", value: i.toJSON(t).uuid })
          : i && i.isColor
          ? (e.uniforms[n] = { type: "c", value: i.getHex() })
          : i && i.isVector2
          ? (e.uniforms[n] = { type: "v2", value: i.toArray() })
          : i && i.isVector3
          ? (e.uniforms[n] = { type: "v3", value: i.toArray() })
          : i && i.isVector4
          ? (e.uniforms[n] = { type: "v4", value: i.toArray() })
          : i && i.isMatrix3
          ? (e.uniforms[n] = { type: "m3", value: i.toArray() })
          : i && i.isMatrix4
          ? (e.uniforms[n] = { type: "m4", value: i.toArray() })
          : (e.uniforms[n] = { value: i });
      }
      Object.keys(this.defines).length > 0 && (e.defines = this.defines),
        (e.vertexShader = this.vertexShader),
        (e.fragmentShader = this.fragmentShader),
        (e.lights = this.lights),
        (e.clipping = this.clipping);
      const n = {};
      for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
      return Object.keys(n).length > 0 && (e.extensions = n), e;
    }
  }
  class hi extends nn {
    constructor() {
      super(),
        (this.isCamera = !0),
        (this.type = "Camera"),
        (this.matrixWorldInverse = new Le()),
        (this.projectionMatrix = new Le()),
        (this.projectionMatrixInverse = new Le()),
        (this.coordinateSystem = dt);
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        this.matrixWorldInverse.copy(t.matrixWorldInverse),
        this.projectionMatrix.copy(t.projectionMatrix),
        this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
        (this.coordinateSystem = t.coordinateSystem),
        this
      );
    }
    getWorldDirection(t) {
      this.updateWorldMatrix(!0, !1);
      const e = this.matrixWorld.elements;
      return t.set(-e[8], -e[9], -e[10]).normalize();
    }
    updateMatrixWorld(t) {
      super.updateMatrixWorld(t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(t, e) {
      super.updateWorldMatrix(t, e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class ui extends hi {
    constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
      super(),
        (this.isPerspectiveCamera = !0),
        (this.type = "PerspectiveCamera"),
        (this.fov = t),
        (this.zoom = 1),
        (this.near = n),
        (this.far = i),
        (this.focus = 10),
        (this.aspect = e),
        (this.view = null),
        (this.filmGauge = 35),
        (this.filmOffset = 0),
        this.updateProjectionMatrix();
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.fov = t.fov),
        (this.zoom = t.zoom),
        (this.near = t.near),
        (this.far = t.far),
        (this.focus = t.focus),
        (this.aspect = t.aspect),
        (this.view = null === t.view ? null : Object.assign({}, t.view)),
        (this.filmGauge = t.filmGauge),
        (this.filmOffset = t.filmOffset),
        this
      );
    }
    setFocalLength(t) {
      const e = (0.5 * this.getFilmHeight()) / t;
      (this.fov = 2 * vt * Math.atan(e)), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const t = Math.tan(0.5 * _t * this.fov);
      return (0.5 * this.getFilmHeight()) / t;
    }
    getEffectiveFOV() {
      return 2 * vt * Math.atan(Math.tan(0.5 * _t * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    setViewOffset(t, e, n, i, r, a) {
      (this.aspect = t / e),
        null === this.view &&
          (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1,
          }),
        (this.view.enabled = !0),
        (this.view.fullWidth = t),
        (this.view.fullHeight = e),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = r),
        (this.view.height = a),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t = this.near;
      let e = (t * Math.tan(0.5 * _t * this.fov)) / this.zoom,
        n = 2 * e,
        i = this.aspect * n,
        r = -0.5 * i;
      const a = this.view;
      if (null !== this.view && this.view.enabled) {
        const t = a.fullWidth,
          s = a.fullHeight;
        (r += (a.offsetX * i) / t),
          (e -= (a.offsetY * n) / s),
          (i *= a.width / t),
          (n *= a.height / s);
      }
      const s = this.filmOffset;
      0 !== s && (r += (t * s) / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(
          r,
          r + i,
          e,
          e - n,
          t,
          this.far,
          this.coordinateSystem
        ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        (e.object.fov = this.fov),
        (e.object.zoom = this.zoom),
        (e.object.near = this.near),
        (e.object.far = this.far),
        (e.object.focus = this.focus),
        (e.object.aspect = this.aspect),
        null !== this.view && (e.object.view = Object.assign({}, this.view)),
        (e.object.filmGauge = this.filmGauge),
        (e.object.filmOffset = this.filmOffset),
        e
      );
    }
  }
  const di = -90;
  class pi extends nn {
    constructor(t, e, n) {
      super(),
        (this.type = "CubeCamera"),
        (this.renderTarget = n),
        (this.coordinateSystem = null);
      const i = new ui(di, 1, t, e);
      (i.layers = this.layers), this.add(i);
      const r = new ui(di, 1, t, e);
      (r.layers = this.layers), this.add(r);
      const a = new ui(di, 1, t, e);
      (a.layers = this.layers), this.add(a);
      const s = new ui(di, 1, t, e);
      (s.layers = this.layers), this.add(s);
      const o = new ui(di, 1, t, e);
      (o.layers = this.layers), this.add(o);
      const l = new ui(di, 1, t, e);
      (l.layers = this.layers), this.add(l);
    }
    updateCoordinateSystem() {
      const t = this.coordinateSystem,
        e = this.children.concat(),
        [n, i, r, a, s, o] = e;
      for (const t of e) this.remove(t);
      if (t === dt)
        n.up.set(0, 1, 0),
          n.lookAt(1, 0, 0),
          i.up.set(0, 1, 0),
          i.lookAt(-1, 0, 0),
          r.up.set(0, 0, -1),
          r.lookAt(0, 1, 0),
          a.up.set(0, 0, 1),
          a.lookAt(0, -1, 0),
          s.up.set(0, 1, 0),
          s.lookAt(0, 0, 1),
          o.up.set(0, 1, 0),
          o.lookAt(0, 0, -1);
      else {
        if (t !== pt)
          throw new Error(
            "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
              t
          );
        n.up.set(0, -1, 0),
          n.lookAt(-1, 0, 0),
          i.up.set(0, -1, 0),
          i.lookAt(1, 0, 0),
          r.up.set(0, 0, 1),
          r.lookAt(0, 1, 0),
          a.up.set(0, 0, -1),
          a.lookAt(0, -1, 0),
          s.up.set(0, -1, 0),
          s.lookAt(0, 0, 1),
          o.up.set(0, -1, 0),
          o.lookAt(0, 0, -1);
      }
      for (const t of e) this.add(t), t.updateMatrixWorld();
    }
    update(t, e) {
      null === this.parent && this.updateMatrixWorld();
      const n = this.renderTarget;
      this.coordinateSystem !== t.coordinateSystem &&
        ((this.coordinateSystem = t.coordinateSystem),
        this.updateCoordinateSystem());
      const [i, r, a, s, o, l] = this.children,
        c = t.getRenderTarget(),
        h = t.toneMapping,
        u = t.xr.enabled;
      (t.toneMapping = _), (t.xr.enabled = !1);
      const d = n.texture.generateMipmaps;
      (n.texture.generateMipmaps = !1),
        t.setRenderTarget(n, 0),
        t.render(e, i),
        t.setRenderTarget(n, 1),
        t.render(e, r),
        t.setRenderTarget(n, 2),
        t.render(e, a),
        t.setRenderTarget(n, 3),
        t.render(e, s),
        t.setRenderTarget(n, 4),
        t.render(e, o),
        (n.texture.generateMipmaps = d),
        t.setRenderTarget(n, 5),
        t.render(e, l),
        t.setRenderTarget(c),
        (t.toneMapping = h),
        (t.xr.enabled = u),
        (n.texture.needsPMREMUpdate = !0);
    }
  }
  class mi extends Zt {
    constructor(t, e, n, i, r, a, s, o, l, c) {
      super(
        (t = void 0 !== t ? t : []),
        (e = void 0 !== e ? e : E),
        n,
        i,
        r,
        a,
        s,
        o,
        l,
        c
      ),
        (this.isCubeTexture = !0),
        (this.flipY = !1);
    }
    get images() {
      return this.image;
    }
    set images(t) {
      this.image = t;
    }
  }
  class fi extends $t {
    constructor(t = 1, e = {}) {
      super(t, t, e), (this.isWebGLCubeRenderTarget = !0);
      const n = { width: t, height: t, depth: 1 },
        i = [n, n, n, n, n, n];
      void 0 !== e.encoding &&
        (Nt(
          "THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."
        ),
        (e.colorSpace = e.encoding === it ? at : rt)),
        (this.texture = new mi(
          i,
          e.mapping,
          e.wrapS,
          e.wrapT,
          e.magFilter,
          e.minFilter,
          e.format,
          e.type,
          e.anisotropy,
          e.colorSpace
        )),
        (this.texture.isRenderTargetTexture = !0),
        (this.texture.generateMipmaps =
          void 0 !== e.generateMipmaps && e.generateMipmaps),
        (this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : I);
    }
    fromEquirectangularTexture(t, e) {
      (this.texture.type = e.type),
        (this.texture.colorSpace = e.colorSpace),
        (this.texture.generateMipmaps = e.generateMipmaps),
        (this.texture.minFilter = e.minFilter),
        (this.texture.magFilter = e.magFilter);
      const n = {
          uniforms: { tEquirect: { value: null } },
          vertexShader:
            "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
          fragmentShader:
            "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
        },
        i = new ri(5, 5, 5),
        r = new ci({
          name: "CubemapFromEquirect",
          uniforms: ai(n.uniforms),
          vertexShader: n.vertexShader,
          fragmentShader: n.fragmentShader,
          side: d,
          blending: 0,
        });
      r.uniforms.tEquirect.value = e;
      const a = new ni(i, r),
        s = e.minFilter;
      e.minFilter === N && (e.minFilter = I);
      return (
        new pi(1, 10, this).update(t, a),
        (e.minFilter = s),
        a.geometry.dispose(),
        a.material.dispose(),
        this
      );
    }
    clear(t, e, n, i) {
      const r = t.getRenderTarget();
      for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
      t.setRenderTarget(r);
    }
  }
  const gi = new ee(),
    _i = new ee(),
    vi = new Pt();
  class xi {
    constructor(t = new ee(1, 0, 0), e = 0) {
      (this.isPlane = !0), (this.normal = t), (this.constant = e);
    }
    set(t, e) {
      return this.normal.copy(t), (this.constant = e), this;
    }
    setComponents(t, e, n, i) {
      return this.normal.set(t, e, n), (this.constant = i), this;
    }
    setFromNormalAndCoplanarPoint(t, e) {
      return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
    }
    setFromCoplanarPoints(t, e, n) {
      const i = gi.subVectors(n, e).cross(_i.subVectors(t, e)).normalize();
      return this.setFromNormalAndCoplanarPoint(i, t), this;
    }
    copy(t) {
      return this.normal.copy(t.normal), (this.constant = t.constant), this;
    }
    normalize() {
      const t = 1 / this.normal.length();
      return this.normal.multiplyScalar(t), (this.constant *= t), this;
    }
    negate() {
      return (this.constant *= -1), this.normal.negate(), this;
    }
    distanceToPoint(t) {
      return this.normal.dot(t) + this.constant;
    }
    distanceToSphere(t) {
      return this.distanceToPoint(t.center) - t.radius;
    }
    projectPoint(t, e) {
      return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
    }
    intersectLine(t, e) {
      const n = t.delta(gi),
        i = this.normal.dot(n);
      if (0 === i)
        return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
      const r = -(t.start.dot(this.normal) + this.constant) / i;
      return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
    }
    intersectsLine(t) {
      const e = this.distanceToPoint(t.start),
        n = this.distanceToPoint(t.end);
      return (e < 0 && n > 0) || (n < 0 && e > 0);
    }
    intersectsBox(t) {
      return t.intersectsPlane(this);
    }
    intersectsSphere(t) {
      return t.intersectsPlane(this);
    }
    coplanarPoint(t) {
      return t.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(t, e) {
      const n = e || vi.getNormalMatrix(t),
        i = this.coplanarPoint(gi).applyMatrix4(t),
        r = this.normal.applyMatrix3(n).normalize();
      return (this.constant = -i.dot(r)), this;
    }
    translate(t) {
      return (this.constant -= t.dot(this.normal)), this;
    }
    equals(t) {
      return t.normal.equals(this.normal) && t.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const yi = new Se(),
    Mi = new ee();
  class Si {
    constructor(
      t = new xi(),
      e = new xi(),
      n = new xi(),
      i = new xi(),
      r = new xi(),
      a = new xi()
    ) {
      this.planes = [t, e, n, i, r, a];
    }
    set(t, e, n, i, r, a) {
      const s = this.planes;
      return (
        s[0].copy(t),
        s[1].copy(e),
        s[2].copy(n),
        s[3].copy(i),
        s[4].copy(r),
        s[5].copy(a),
        this
      );
    }
    copy(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
      return this;
    }
    setFromProjectionMatrix(t, e = 2e3) {
      const n = this.planes,
        i = t.elements,
        r = i[0],
        a = i[1],
        s = i[2],
        o = i[3],
        l = i[4],
        c = i[5],
        h = i[6],
        u = i[7],
        d = i[8],
        p = i[9],
        m = i[10],
        f = i[11],
        g = i[12],
        _ = i[13],
        v = i[14],
        x = i[15];
      if (
        (n[0].setComponents(o - r, u - l, f - d, x - g).normalize(),
        n[1].setComponents(o + r, u + l, f + d, x + g).normalize(),
        n[2].setComponents(o + a, u + c, f + p, x + _).normalize(),
        n[3].setComponents(o - a, u - c, f - p, x - _).normalize(),
        n[4].setComponents(o - s, u - h, f - m, x - v).normalize(),
        e === dt)
      )
        n[5].setComponents(o + s, u + h, f + m, x + v).normalize();
      else {
        if (e !== pt)
          throw new Error(
            "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
              e
          );
        n[5].setComponents(s, h, m, v).normalize();
      }
      return this;
    }
    intersectsObject(t) {
      if (void 0 !== t.boundingSphere)
        null === t.boundingSphere && t.computeBoundingSphere(),
          yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
      else {
        const e = t.geometry;
        null === e.boundingSphere && e.computeBoundingSphere(),
          yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
      }
      return this.intersectsSphere(yi);
    }
    intersectsSprite(t) {
      return (
        yi.center.set(0, 0, 0),
        (yi.radius = 0.7071067811865476),
        yi.applyMatrix4(t.matrixWorld),
        this.intersectsSphere(yi)
      );
    }
    intersectsSphere(t) {
      const e = this.planes,
        n = t.center,
        i = -t.radius;
      for (let t = 0; t < 6; t++) {
        if (e[t].distanceToPoint(n) < i) return !1;
      }
      return !0;
    }
    intersectsBox(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) {
        const i = e[n];
        if (
          ((Mi.x = i.normal.x > 0 ? t.max.x : t.min.x),
          (Mi.y = i.normal.y > 0 ? t.max.y : t.min.y),
          (Mi.z = i.normal.z > 0 ? t.max.z : t.min.z),
          i.distanceToPoint(Mi) < 0)
        )
          return !1;
      }
      return !0;
    }
    containsPoint(t) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
      return !0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  function Ei() {
    let t = null,
      e = !1,
      n = null,
      i = null;
    function r(e, a) {
      n(e, a), (i = t.requestAnimationFrame(r));
    }
    return {
      start: function () {
        !0 !== e && null !== n && ((i = t.requestAnimationFrame(r)), (e = !0));
      },
      stop: function () {
        t.cancelAnimationFrame(i), (e = !1);
      },
      setAnimationLoop: function (t) {
        n = t;
      },
      setContext: function (e) {
        t = e;
      },
    };
  }
  function bi(t, e) {
    const n = e.isWebGL2,
      i = new WeakMap();
    return {
      get: function (t) {
        return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
      },
      remove: function (e) {
        e.isInterleavedBufferAttribute && (e = e.data);
        const n = i.get(e);
        n && (t.deleteBuffer(n.buffer), i.delete(e));
      },
      update: function (e, r) {
        if (e.isGLBufferAttribute) {
          const t = i.get(e);
          return void (
            (!t || t.version < e.version) &&
            i.set(e, {
              buffer: e.buffer,
              type: e.type,
              bytesPerElement: e.elementSize,
              version: e.version,
            })
          );
        }
        e.isInterleavedBufferAttribute && (e = e.data);
        const a = i.get(e);
        void 0 === a
          ? i.set(
              e,
              (function (e, i) {
                const r = e.array,
                  a = e.usage,
                  s = t.createBuffer();
                let o;
                if (
                  (t.bindBuffer(i, s),
                  t.bufferData(i, r, a),
                  e.onUploadCallback(),
                  r instanceof Float32Array)
                )
                  o = t.FLOAT;
                else if (r instanceof Uint16Array)
                  if (e.isFloat16BufferAttribute) {
                    if (!n)
                      throw new Error(
                        "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
                      );
                    o = t.HALF_FLOAT;
                  } else o = t.UNSIGNED_SHORT;
                else if (r instanceof Int16Array) o = t.SHORT;
                else if (r instanceof Uint32Array) o = t.UNSIGNED_INT;
                else if (r instanceof Int32Array) o = t.INT;
                else if (r instanceof Int8Array) o = t.BYTE;
                else if (r instanceof Uint8Array) o = t.UNSIGNED_BYTE;
                else {
                  if (!(r instanceof Uint8ClampedArray))
                    throw new Error(
                      "THREE.WebGLAttributes: Unsupported buffer data format: " +
                        r
                    );
                  o = t.UNSIGNED_BYTE;
                }
                return {
                  buffer: s,
                  type: o,
                  bytesPerElement: r.BYTES_PER_ELEMENT,
                  version: e.version,
                };
              })(e, r)
            )
          : a.version < e.version &&
            (!(function (e, i, r) {
              const a = i.array,
                s = i.updateRange;
              t.bindBuffer(r, e),
                -1 === s.count
                  ? t.bufferSubData(r, 0, a)
                  : (n
                      ? t.bufferSubData(
                          r,
                          s.offset * a.BYTES_PER_ELEMENT,
                          a,
                          s.offset,
                          s.count
                        )
                      : t.bufferSubData(
                          r,
                          s.offset * a.BYTES_PER_ELEMENT,
                          a.subarray(s.offset, s.offset + s.count)
                        ),
                    (s.count = -1)),
                i.onUploadCallback();
            })(a.buffer, e, r),
            (a.version = e.version));
      },
    };
  }
  class wi extends zn {
    constructor(t = 1, e = 1, n = 1, i = 1) {
      super(),
        (this.type = "PlaneGeometry"),
        (this.parameters = {
          width: t,
          height: e,
          widthSegments: n,
          heightSegments: i,
        });
      const r = t / 2,
        a = e / 2,
        s = Math.floor(n),
        o = Math.floor(i),
        l = s + 1,
        c = o + 1,
        h = t / s,
        u = e / o,
        d = [],
        p = [],
        m = [],
        f = [];
      for (let t = 0; t < c; t++) {
        const e = t * u - a;
        for (let n = 0; n < l; n++) {
          const i = n * h - r;
          p.push(i, -e, 0), m.push(0, 0, 1), f.push(n / s), f.push(1 - t / o);
        }
      }
      for (let t = 0; t < o; t++)
        for (let e = 0; e < s; e++) {
          const n = e + l * t,
            i = e + l * (t + 1),
            r = e + 1 + l * (t + 1),
            a = e + 1 + l * t;
          d.push(n, i, a), d.push(i, r, a);
        }
      this.setIndex(d),
        this.setAttribute("position", new Pn(p, 3)),
        this.setAttribute("normal", new Pn(m, 3)),
        this.setAttribute("uv", new Pn(f, 2));
    }
    copy(t) {
      return (
        super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
      );
    }
    static fromJSON(t) {
      return new wi(t.width, t.height, t.widthSegments, t.heightSegments);
    }
  }
  const Ti = {
      alphamap_fragment:
        "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
      alphamap_pars_fragment:
        "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
      alphatest_fragment:
        "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
      alphatest_pars_fragment:
        "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
      aomap_fragment:
        "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
      aomap_pars_fragment:
        "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
      begin_vertex: "vec3 transformed = vec3( position );",
      beginnormal_vertex:
        "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
      bsdfs:
        "float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated",
      iridescence_fragment:
        "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\t return vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat R21 = R12;\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",
      bumpmap_pars_fragment:
        "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos.xyz );\n\t\tvec3 vSigmaY = dFdy( surf_pos.xyz );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
      clipping_planes_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
      clipping_planes_pars_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
      clipping_planes_pars_vertex:
        "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
      clipping_planes_vertex:
        "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
      color_fragment:
        "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
      color_pars_fragment:
        "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
      color_pars_vertex:
        "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
      color_vertex:
        "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
      common:
        "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
      cube_uv_reflection_fragment:
        "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_v0 0.339\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_v1 0.276\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_v4 0.046\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_v5 0.016\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_v6 0.0038\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
      defaultnormal_vertex:
        "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
      displacementmap_pars_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
      displacementmap_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
      emissivemap_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
      emissivemap_pars_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
      encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
      encodings_pars_fragment:
        "vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
      envmap_fragment:
        "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
      envmap_common_pars_fragment:
        "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
      envmap_pars_fragment:
        "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
      envmap_pars_vertex:
        "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
      envmap_physical_pars_fragment:
        "#ifdef USE_ENVMAP\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\t#ifdef USE_ANISOTROPY\n\t\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\t\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\t\tvec3 bentNormal = cross( bitangent, viewDir );\n\t\t\t\tbentNormal = normalize( cross( bentNormal, bitangent ) );\n\t\t\t\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\t\t\t\treturn getIBLRadiance( viewDir, bentNormal, roughness );\n\t\t\t#else\n\t\t\t\treturn vec3( 0.0 );\n\t\t\t#endif\n\t\t}\n\t#endif\n#endif",
      envmap_vertex:
        "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
      fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
      fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
      fog_fragment:
        "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
      fog_pars_fragment:
        "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
      gradientmap_pars_fragment:
        "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",
      lightmap_fragment:
        "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
      lightmap_pars_fragment:
        "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
      lights_lambert_fragment:
        "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
      lights_lambert_pars_fragment:
        "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",
      lights_pars_begin:
        "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( LEGACY_LIGHTS )\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#else\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
      lights_toon_fragment:
        "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
      lights_toon_pars_fragment:
        "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",
      lights_phong_fragment:
        "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
      lights_phong_pars_fragment:
        "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",
      lights_physical_fragment:
        "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\t#ifdef USE_ANISOTROPYMAP\n\t\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n\t\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n\t\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\t#else\n\t\tvec2 anisotropyV = anisotropyVector;\n\t#endif\n\tmaterial.anisotropy = length( anisotropyV );\n\tanisotropyV /= material.anisotropy;\n\tmaterial.anisotropy = saturate( material.anisotropy );\n\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;\n\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;\n#endif",
      lights_physical_pars_fragment:
        "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat anisotropy;\n\t\tfloat alphaT;\n\t\tvec3 anisotropyT;\n\t\tvec3 anisotropyB;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n\t\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n\t\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n\t\tfloat v = 0.5 / ( gv + gl );\n\t\treturn saturate(v);\n\t}\n\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n\t\tfloat a2 = alphaT * alphaB;\n\t\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n\t\thighp float v2 = dot( v, v );\n\t\tfloat w2 = a2 / v2;\n\t\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\n\t}\n#endif\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat dotTL = dot( material.anisotropyT, lightDir );\n\t\tfloat dotTV = dot( material.anisotropyT, viewDir );\n\t\tfloat dotTH = dot( material.anisotropyT, halfDir );\n\t\tfloat dotBL = dot( material.anisotropyB, lightDir );\n\t\tfloat dotBV = dot( material.anisotropyB, viewDir );\n\t\tfloat dotBH = dot( material.anisotropyB, halfDir );\n\t\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n\t\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n\t#else\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t#endif\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
      lights_fragment_begin:
        "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
      lights_fragment_maps:
        "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\t#ifdef USE_ANISOTROPY\n\t\tradiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );\n\t#else\n\t\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
      lights_fragment_end:
        "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
      logdepthbuf_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
      logdepthbuf_pars_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
      logdepthbuf_pars_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
      logdepthbuf_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
      map_fragment:
        "#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, vMapUv );\n#endif",
      map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
      map_particle_fragment:
        "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
      map_particle_pars_fragment:
        "#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
      metalnessmap_fragment:
        "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
      metalnessmap_pars_fragment:
        "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
      morphcolor_vertex:
        "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
      morphnormal_vertex:
        "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
      morphtarget_pars_vertex:
        "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
      morphtarget_vertex:
        "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
      normal_fragment_begin:
        "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
      normal_fragment_maps:
        "#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
      normal_pars_fragment:
        "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
      normal_pars_vertex:
        "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
      normal_vertex:
        "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
      normalmap_pars_fragment:
        "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif",
      clearcoat_normal_fragment_begin:
        "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
      clearcoat_normal_fragment_maps:
        "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
      clearcoat_pars_fragment:
        "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif",
      iridescence_pars_fragment:
        "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
      output_fragment:
        "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
      packing:
        "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}",
      premultiplied_alpha_fragment:
        "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
      project_vertex:
        "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
      dithering_fragment:
        "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
      dithering_pars_fragment:
        "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
      roughnessmap_fragment:
        "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
      roughnessmap_pars_fragment:
        "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
      shadowmap_pars_fragment:
        "#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
      shadowmap_pars_vertex:
        "#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
      shadowmap_vertex:
        "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif",
      shadowmask_pars_fragment:
        "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
      skinbase_vertex:
        "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
      skinning_pars_vertex:
        "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif",
      skinning_vertex:
        "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
      skinnormal_vertex:
        "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
      specularmap_fragment:
        "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
      specularmap_pars_fragment:
        "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
      tonemapping_fragment:
        "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
      tonemapping_pars_fragment:
        "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
      transmission_fragment:
        "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmitted = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
      transmission_pars_fragment:
        "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn vec3( 1.0 );\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\t}\n#endif",
      uv_pars_fragment:
        "#ifdef USE_UV\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
      uv_pars_vertex:
        "#ifdef USE_UV\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tuniform mat3 anisotropyMapTransform;\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
      uv_vertex:
        "#ifdef USE_UV\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
      worldpos_vertex:
        "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
      background_vert:
        "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
      background_frag:
        "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      backgroundCube_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
      backgroundCube_frag:
        "#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      cube_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
      cube_frag:
        "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      depth_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
      depth_frag:
        "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
      distanceRGBA_vert:
        "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
      distanceRGBA_frag:
        "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
      equirect_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
      equirect_frag:
        "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      linedashed_vert:
        "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
      linedashed_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
      meshbasic_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
      meshbasic_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshlambert_vert:
        "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshlambert_frag:
        "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshmatcap_vert:
        "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
      meshmatcap_frag:
        "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshnormal_vert:
        "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
      meshnormal_frag:
        "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
      meshphong_vert:
        "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshphong_frag:
        "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshphysical_vert:
        "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
      meshphysical_frag:
        "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef USE_SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULAR_COLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\tuniform vec2 anisotropyVector;\n\t#ifdef USE_ANISOTROPYMAP\n\t\tuniform sampler2D anisotropyMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshtoon_vert:
        "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshtoon_frag:
        "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      points_vert:
        "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\nvoid main() {\n\t#ifdef USE_POINTS_UV\n\t\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\t#endif\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
      points_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
      shadow_vert:
        "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      shadow_frag:
        "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
      sprite_vert:
        "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
      sprite_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    },
    Ai = {
      common: {
        diffuse: { value: new Sn(16777215) },
        opacity: { value: 1 },
        map: { value: null },
        mapTransform: { value: new Pt() },
        alphaMap: { value: null },
        alphaMapTransform: { value: new Pt() },
        alphaTest: { value: 0 },
      },
      specularmap: {
        specularMap: { value: null },
        specularMapTransform: { value: new Pt() },
      },
      envmap: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        reflectivity: { value: 1 },
        ior: { value: 1.5 },
        refractionRatio: { value: 0.98 },
      },
      aomap: {
        aoMap: { value: null },
        aoMapIntensity: { value: 1 },
        aoMapTransform: { value: new Pt() },
      },
      lightmap: {
        lightMap: { value: null },
        lightMapIntensity: { value: 1 },
        lightMapTransform: { value: new Pt() },
      },
      bumpmap: {
        bumpMap: { value: null },
        bumpMapTransform: { value: new Pt() },
        bumpScale: { value: 1 },
      },
      normalmap: {
        normalMap: { value: null },
        normalMapTransform: { value: new Pt() },
        normalScale: { value: new Ct(1, 1) },
      },
      displacementmap: {
        displacementMap: { value: null },
        displacementMapTransform: { value: new Pt() },
        displacementScale: { value: 1 },
        displacementBias: { value: 0 },
      },
      emissivemap: {
        emissiveMap: { value: null },
        emissiveMapTransform: { value: new Pt() },
      },
      metalnessmap: {
        metalnessMap: { value: null },
        metalnessMapTransform: { value: new Pt() },
      },
      roughnessmap: {
        roughnessMap: { value: null },
        roughnessMapTransform: { value: new Pt() },
      },
      gradientmap: { gradientMap: { value: null } },
      fog: {
        fogDensity: { value: 25e-5 },
        fogNear: { value: 1 },
        fogFar: { value: 2e3 },
        fogColor: { value: new Sn(16777215) },
      },
      lights: {
        ambientLightColor: { value: [] },
        lightProbe: { value: [] },
        directionalLights: {
          value: [],
          properties: { direction: {}, color: {} },
        },
        directionalLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        directionalShadowMap: { value: [] },
        directionalShadowMatrix: { value: [] },
        spotLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            direction: {},
            distance: {},
            coneCos: {},
            penumbraCos: {},
            decay: {},
          },
        },
        spotLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        spotLightMap: { value: [] },
        spotShadowMap: { value: [] },
        spotLightMatrix: { value: [] },
        pointLights: {
          value: [],
          properties: { color: {}, position: {}, decay: {}, distance: {} },
        },
        pointLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {},
          },
        },
        pointShadowMap: { value: [] },
        pointShadowMatrix: { value: [] },
        hemisphereLights: {
          value: [],
          properties: { direction: {}, skyColor: {}, groundColor: {} },
        },
        rectAreaLights: {
          value: [],
          properties: { color: {}, position: {}, width: {}, height: {} },
        },
        ltc_1: { value: null },
        ltc_2: { value: null },
      },
      points: {
        diffuse: { value: new Sn(16777215) },
        opacity: { value: 1 },
        size: { value: 1 },
        scale: { value: 1 },
        map: { value: null },
        alphaMap: { value: null },
        alphaMapTransform: { value: new Pt() },
        alphaTest: { value: 0 },
        uvTransform: { value: new Pt() },
      },
      sprite: {
        diffuse: { value: new Sn(16777215) },
        opacity: { value: 1 },
        center: { value: new Ct(0.5, 0.5) },
        rotation: { value: 0 },
        map: { value: null },
        mapTransform: { value: new Pt() },
        alphaMap: { value: null },
        alphaMapTransform: { value: new Pt() },
        alphaTest: { value: 0 },
      },
    },
    Ri = {
      basic: {
        uniforms: si([
          Ai.common,
          Ai.specularmap,
          Ai.envmap,
          Ai.aomap,
          Ai.lightmap,
          Ai.fog,
        ]),
        vertexShader: Ti.meshbasic_vert,
        fragmentShader: Ti.meshbasic_frag,
      },
      lambert: {
        uniforms: si([
          Ai.common,
          Ai.specularmap,
          Ai.envmap,
          Ai.aomap,
          Ai.lightmap,
          Ai.emissivemap,
          Ai.bumpmap,
          Ai.normalmap,
          Ai.displacementmap,
          Ai.fog,
          Ai.lights,
          { emissive: { value: new Sn(0) } },
        ]),
        vertexShader: Ti.meshlambert_vert,
        fragmentShader: Ti.meshlambert_frag,
      },
      phong: {
        uniforms: si([
          Ai.common,
          Ai.specularmap,
          Ai.envmap,
          Ai.aomap,
          Ai.lightmap,
          Ai.emissivemap,
          Ai.bumpmap,
          Ai.normalmap,
          Ai.displacementmap,
          Ai.fog,
          Ai.lights,
          {
            emissive: { value: new Sn(0) },
            specular: { value: new Sn(1118481) },
            shininess: { value: 30 },
          },
        ]),
        vertexShader: Ti.meshphong_vert,
        fragmentShader: Ti.meshphong_frag,
      },
      standard: {
        uniforms: si([
          Ai.common,
          Ai.envmap,
          Ai.aomap,
          Ai.lightmap,
          Ai.emissivemap,
          Ai.bumpmap,
          Ai.normalmap,
          Ai.displacementmap,
          Ai.roughnessmap,
          Ai.metalnessmap,
          Ai.fog,
          Ai.lights,
          {
            emissive: { value: new Sn(0) },
            roughness: { value: 1 },
            metalness: { value: 0 },
            envMapIntensity: { value: 1 },
          },
        ]),
        vertexShader: Ti.meshphysical_vert,
        fragmentShader: Ti.meshphysical_frag,
      },
      toon: {
        uniforms: si([
          Ai.common,
          Ai.aomap,
          Ai.lightmap,
          Ai.emissivemap,
          Ai.bumpmap,
          Ai.normalmap,
          Ai.displacementmap,
          Ai.gradientmap,
          Ai.fog,
          Ai.lights,
          { emissive: { value: new Sn(0) } },
        ]),
        vertexShader: Ti.meshtoon_vert,
        fragmentShader: Ti.meshtoon_frag,
      },
      matcap: {
        uniforms: si([
          Ai.common,
          Ai.bumpmap,
          Ai.normalmap,
          Ai.displacementmap,
          Ai.fog,
          { matcap: { value: null } },
        ]),
        vertexShader: Ti.meshmatcap_vert,
        fragmentShader: Ti.meshmatcap_frag,
      },
      points: {
        uniforms: si([Ai.points, Ai.fog]),
        vertexShader: Ti.points_vert,
        fragmentShader: Ti.points_frag,
      },
      dashed: {
        uniforms: si([
          Ai.common,
          Ai.fog,
          {
            scale: { value: 1 },
            dashSize: { value: 1 },
            totalSize: { value: 2 },
          },
        ]),
        vertexShader: Ti.linedashed_vert,
        fragmentShader: Ti.linedashed_frag,
      },
      depth: {
        uniforms: si([Ai.common, Ai.displacementmap]),
        vertexShader: Ti.depth_vert,
        fragmentShader: Ti.depth_frag,
      },
      normal: {
        uniforms: si([
          Ai.common,
          Ai.bumpmap,
          Ai.normalmap,
          Ai.displacementmap,
          { opacity: { value: 1 } },
        ]),
        vertexShader: Ti.meshnormal_vert,
        fragmentShader: Ti.meshnormal_frag,
      },
      sprite: {
        uniforms: si([Ai.sprite, Ai.fog]),
        vertexShader: Ti.sprite_vert,
        fragmentShader: Ti.sprite_frag,
      },
      background: {
        uniforms: {
          uvTransform: { value: new Pt() },
          t2D: { value: null },
          backgroundIntensity: { value: 1 },
        },
        vertexShader: Ti.background_vert,
        fragmentShader: Ti.background_frag,
      },
      backgroundCube: {
        uniforms: {
          envMap: { value: null },
          flipEnvMap: { value: -1 },
          backgroundBlurriness: { value: 0 },
          backgroundIntensity: { value: 1 },
        },
        vertexShader: Ti.backgroundCube_vert,
        fragmentShader: Ti.backgroundCube_frag,
      },
      cube: {
        uniforms: {
          tCube: { value: null },
          tFlip: { value: -1 },
          opacity: { value: 1 },
        },
        vertexShader: Ti.cube_vert,
        fragmentShader: Ti.cube_frag,
      },
      equirect: {
        uniforms: { tEquirect: { value: null } },
        vertexShader: Ti.equirect_vert,
        fragmentShader: Ti.equirect_frag,
      },
      distanceRGBA: {
        uniforms: si([
          Ai.common,
          Ai.displacementmap,
          {
            referencePosition: { value: new ee() },
            nearDistance: { value: 1 },
            farDistance: { value: 1e3 },
          },
        ]),
        vertexShader: Ti.distanceRGBA_vert,
        fragmentShader: Ti.distanceRGBA_frag,
      },
      shadow: {
        uniforms: si([
          Ai.lights,
          Ai.fog,
          { color: { value: new Sn(0) }, opacity: { value: 1 } },
        ]),
        vertexShader: Ti.shadow_vert,
        fragmentShader: Ti.shadow_frag,
      },
    };
  Ri.physical = {
    uniforms: si([
      Ri.standard.uniforms,
      {
        clearcoat: { value: 0 },
        clearcoatMap: { value: null },
        clearcoatMapTransform: { value: new Pt() },
        clearcoatNormalMap: { value: null },
        clearcoatNormalMapTransform: { value: new Pt() },
        clearcoatNormalScale: { value: new Ct(1, 1) },
        clearcoatRoughness: { value: 0 },
        clearcoatRoughnessMap: { value: null },
        clearcoatRoughnessMapTransform: { value: new Pt() },
        iridescence: { value: 0 },
        iridescenceMap: { value: null },
        iridescenceMapTransform: { value: new Pt() },
        iridescenceIOR: { value: 1.3 },
        iridescenceThicknessMinimum: { value: 100 },
        iridescenceThicknessMaximum: { value: 400 },
        iridescenceThicknessMap: { value: null },
        iridescenceThicknessMapTransform: { value: new Pt() },
        sheen: { value: 0 },
        sheenColor: { value: new Sn(0) },
        sheenColorMap: { value: null },
        sheenColorMapTransform: { value: new Pt() },
        sheenRoughness: { value: 1 },
        sheenRoughnessMap: { value: null },
        sheenRoughnessMapTransform: { value: new Pt() },
        transmission: { value: 0 },
        transmissionMap: { value: null },
        transmissionMapTransform: { value: new Pt() },
        transmissionSamplerSize: { value: new Ct() },
        transmissionSamplerMap: { value: null },
        thickness: { value: 0 },
        thicknessMap: { value: null },
        thicknessMapTransform: { value: new Pt() },
        attenuationDistance: { value: 0 },
        attenuationColor: { value: new Sn(0) },
        specularColor: { value: new Sn(1, 1, 1) },
        specularColorMap: { value: null },
        specularColorMapTransform: { value: new Pt() },
        specularIntensity: { value: 1 },
        specularIntensityMap: { value: null },
        specularIntensityMapTransform: { value: new Pt() },
        anisotropyVector: { value: new Ct() },
        anisotropyMap: { value: null },
        anisotropyMapTransform: { value: new Pt() },
      },
    ]),
    vertexShader: Ti.meshphysical_vert,
    fragmentShader: Ti.meshphysical_frag,
  };
  const Ci = { r: 0, b: 0, g: 0 };
  function Pi(t, e, n, i, r, a, s) {
    const o = new Sn(0);
    let l,
      c,
      h = !0 === a ? 0 : 1,
      p = null,
      m = 0,
      f = null;
    function g(e, n) {
      e.getRGB(Ci, oi(t)), i.buffers.color.setClear(Ci.r, Ci.g, Ci.b, n, s);
    }
    return {
      getClearColor: function () {
        return o;
      },
      setClearColor: function (t, e = 1) {
        o.set(t), (h = e), g(o, h);
      },
      getClearAlpha: function () {
        return h;
      },
      setClearAlpha: function (t) {
        (h = t), g(o, h);
      },
      render: function (a, _) {
        let v = !1,
          x = !0 === _.isScene ? _.background : null;
        if (x && x.isTexture) {
          x = (_.backgroundBlurriness > 0 ? n : e).get(x);
        }
        switch (
          (null === x ? g(o, h) : x && x.isColor && (g(x, 1), (v = !0)),
          t.xr.getEnvironmentBlendMode())
        ) {
          case "opaque":
            v = !0;
            break;
          case "additive":
            i.buffers.color.setClear(0, 0, 0, 1, s), (v = !0);
            break;
          case "alpha-blend":
            i.buffers.color.setClear(0, 0, 0, 0, s), (v = !0);
        }
        (t.autoClear || v) &&
          t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
          x && (x.isCubeTexture || x.mapping === A)
            ? (void 0 === c &&
                ((c = new ni(
                  new ri(1, 1, 1),
                  new ci({
                    name: "BackgroundCubeMaterial",
                    uniforms: ai(Ri.backgroundCube.uniforms),
                    vertexShader: Ri.backgroundCube.vertexShader,
                    fragmentShader: Ri.backgroundCube.fragmentShader,
                    side: d,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                  })
                )),
                c.geometry.deleteAttribute("normal"),
                c.geometry.deleteAttribute("uv"),
                (c.onBeforeRender = function (t, e, n) {
                  this.matrixWorld.copyPosition(n.matrixWorld);
                }),
                Object.defineProperty(c.material, "envMap", {
                  get: function () {
                    return this.uniforms.envMap.value;
                  },
                }),
                r.update(c)),
              (c.material.uniforms.envMap.value = x),
              (c.material.uniforms.flipEnvMap.value =
                x.isCubeTexture && !1 === x.isRenderTargetTexture ? -1 : 1),
              (c.material.uniforms.backgroundBlurriness.value =
                _.backgroundBlurriness),
              (c.material.uniforms.backgroundIntensity.value =
                _.backgroundIntensity),
              (c.material.toneMapped = x.colorSpace !== at),
              (p === x && m === x.version && f === t.toneMapping) ||
                ((c.material.needsUpdate = !0),
                (p = x),
                (m = x.version),
                (f = t.toneMapping)),
              c.layers.enableAll(),
              a.unshift(c, c.geometry, c.material, 0, 0, null))
            : x &&
              x.isTexture &&
              (void 0 === l &&
                ((l = new ni(
                  new wi(2, 2),
                  new ci({
                    name: "BackgroundMaterial",
                    uniforms: ai(Ri.background.uniforms),
                    vertexShader: Ri.background.vertexShader,
                    fragmentShader: Ri.background.fragmentShader,
                    side: u,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                  })
                )),
                l.geometry.deleteAttribute("normal"),
                Object.defineProperty(l.material, "map", {
                  get: function () {
                    return this.uniforms.t2D.value;
                  },
                }),
                r.update(l)),
              (l.material.uniforms.t2D.value = x),
              (l.material.uniforms.backgroundIntensity.value =
                _.backgroundIntensity),
              (l.material.toneMapped = x.colorSpace !== at),
              !0 === x.matrixAutoUpdate && x.updateMatrix(),
              l.material.uniforms.uvTransform.value.copy(x.matrix),
              (p === x && m === x.version && f === t.toneMapping) ||
                ((l.material.needsUpdate = !0),
                (p = x),
                (m = x.version),
                (f = t.toneMapping)),
              l.layers.enableAll(),
              a.unshift(l, l.geometry, l.material, 0, 0, null));
      },
    };
  }
  function Li(t, e, n, i) {
    const r = t.getParameter(t.MAX_VERTEX_ATTRIBS),
      a = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
      s = i.isWebGL2 || null !== a,
      o = {},
      l = p(null);
    let c = l,
      h = !1;
    function u(e) {
      return i.isWebGL2 ? t.bindVertexArray(e) : a.bindVertexArrayOES(e);
    }
    function d(e) {
      return i.isWebGL2 ? t.deleteVertexArray(e) : a.deleteVertexArrayOES(e);
    }
    function p(t) {
      const e = [],
        n = [],
        i = [];
      for (let t = 0; t < r; t++) (e[t] = 0), (n[t] = 0), (i[t] = 0);
      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: e,
        enabledAttributes: n,
        attributeDivisors: i,
        object: t,
        attributes: {},
        index: null,
      };
    }
    function m() {
      const t = c.newAttributes;
      for (let e = 0, n = t.length; e < n; e++) t[e] = 0;
    }
    function f(t) {
      g(t, 0);
    }
    function g(n, r) {
      const a = c.newAttributes,
        s = c.enabledAttributes,
        o = c.attributeDivisors;
      if (
        ((a[n] = 1),
        0 === s[n] && (t.enableVertexAttribArray(n), (s[n] = 1)),
        o[n] !== r)
      ) {
        (i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[
          i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](n, r),
          (o[n] = r);
      }
    }
    function _() {
      const e = c.newAttributes,
        n = c.enabledAttributes;
      for (let i = 0, r = n.length; i < r; i++)
        n[i] !== e[i] && (t.disableVertexAttribArray(i), (n[i] = 0));
    }
    function v(e, n, i, r, a, s, o) {
      !0 === o
        ? t.vertexAttribIPointer(e, n, i, a, s)
        : t.vertexAttribPointer(e, n, i, r, a, s);
    }
    function x() {
      y(), (h = !0), c !== l && ((c = l), u(c.object));
    }
    function y() {
      (l.geometry = null), (l.program = null), (l.wireframe = !1);
    }
    return {
      setup: function (r, l, d, x, y) {
        let M = !1;
        if (s) {
          const e = (function (e, n, r) {
            const s = !0 === r.wireframe;
            let l = o[e.id];
            void 0 === l && ((l = {}), (o[e.id] = l));
            let c = l[n.id];
            void 0 === c && ((c = {}), (l[n.id] = c));
            let h = c[s];
            void 0 === h &&
              ((h = p(
                i.isWebGL2 ? t.createVertexArray() : a.createVertexArrayOES()
              )),
              (c[s] = h));
            return h;
          })(x, d, l);
          c !== e && ((c = e), u(c.object)),
            (M = (function (t, e, n, i) {
              const r = c.attributes,
                a = e.attributes;
              let s = 0;
              const o = n.getAttributes();
              for (const e in o) {
                if (o[e].location >= 0) {
                  const n = r[e];
                  let i = a[e];
                  if (
                    (void 0 === i &&
                      ("instanceMatrix" === e &&
                        t.instanceMatrix &&
                        (i = t.instanceMatrix),
                      "instanceColor" === e &&
                        t.instanceColor &&
                        (i = t.instanceColor)),
                    void 0 === n)
                  )
                    return !0;
                  if (n.attribute !== i) return !0;
                  if (i && n.data !== i.data) return !0;
                  s++;
                }
              }
              return c.attributesNum !== s || c.index !== i;
            })(r, x, d, y)),
            M &&
              (function (t, e, n, i) {
                const r = {},
                  a = e.attributes;
                let s = 0;
                const o = n.getAttributes();
                for (const e in o) {
                  if (o[e].location >= 0) {
                    let n = a[e];
                    void 0 === n &&
                      ("instanceMatrix" === e &&
                        t.instanceMatrix &&
                        (n = t.instanceMatrix),
                      "instanceColor" === e &&
                        t.instanceColor &&
                        (n = t.instanceColor));
                    const i = {};
                    (i.attribute = n),
                      n && n.data && (i.data = n.data),
                      (r[e] = i),
                      s++;
                  }
                }
                (c.attributes = r), (c.attributesNum = s), (c.index = i);
              })(r, x, d, y);
        } else {
          const t = !0 === l.wireframe;
          (c.geometry === x.id && c.program === d.id && c.wireframe === t) ||
            ((c.geometry = x.id),
            (c.program = d.id),
            (c.wireframe = t),
            (M = !0));
        }
        null !== y && n.update(y, t.ELEMENT_ARRAY_BUFFER),
          (M || h) &&
            ((h = !1),
            (function (r, a, s, o) {
              if (
                !1 === i.isWebGL2 &&
                (r.isInstancedMesh || o.isInstancedBufferGeometry) &&
                null === e.get("ANGLE_instanced_arrays")
              )
                return;
              m();
              const l = o.attributes,
                c = s.getAttributes(),
                h = a.defaultAttributeValues;
              for (const e in c) {
                const a = c[e];
                if (a.location >= 0) {
                  let s = l[e];
                  if (
                    (void 0 === s &&
                      ("instanceMatrix" === e &&
                        r.instanceMatrix &&
                        (s = r.instanceMatrix),
                      "instanceColor" === e &&
                        r.instanceColor &&
                        (s = r.instanceColor)),
                    void 0 !== s)
                  ) {
                    const e = s.normalized,
                      l = s.itemSize,
                      c = n.get(s);
                    if (void 0 === c) continue;
                    const h = c.buffer,
                      u = c.type,
                      d = c.bytesPerElement,
                      p =
                        !0 === i.isWebGL2 &&
                        (u === t.INT ||
                          u === t.UNSIGNED_INT ||
                          s.gpuType === z);
                    if (s.isInterleavedBufferAttribute) {
                      const n = s.data,
                        i = n.stride,
                        c = s.offset;
                      if (n.isInstancedInterleavedBuffer) {
                        for (let t = 0; t < a.locationSize; t++)
                          g(a.location + t, n.meshPerAttribute);
                        !0 !== r.isInstancedMesh &&
                          void 0 === o._maxInstanceCount &&
                          (o._maxInstanceCount = n.meshPerAttribute * n.count);
                      } else
                        for (let t = 0; t < a.locationSize; t++)
                          f(a.location + t);
                      t.bindBuffer(t.ARRAY_BUFFER, h);
                      for (let t = 0; t < a.locationSize; t++)
                        v(
                          a.location + t,
                          l / a.locationSize,
                          u,
                          e,
                          i * d,
                          (c + (l / a.locationSize) * t) * d,
                          p
                        );
                    } else {
                      if (s.isInstancedBufferAttribute) {
                        for (let t = 0; t < a.locationSize; t++)
                          g(a.location + t, s.meshPerAttribute);
                        !0 !== r.isInstancedMesh &&
                          void 0 === o._maxInstanceCount &&
                          (o._maxInstanceCount = s.meshPerAttribute * s.count);
                      } else
                        for (let t = 0; t < a.locationSize; t++)
                          f(a.location + t);
                      t.bindBuffer(t.ARRAY_BUFFER, h);
                      for (let t = 0; t < a.locationSize; t++)
                        v(
                          a.location + t,
                          l / a.locationSize,
                          u,
                          e,
                          l * d,
                          (l / a.locationSize) * t * d,
                          p
                        );
                    }
                  } else if (void 0 !== h) {
                    const n = h[e];
                    if (void 0 !== n)
                      switch (n.length) {
                        case 2:
                          t.vertexAttrib2fv(a.location, n);
                          break;
                        case 3:
                          t.vertexAttrib3fv(a.location, n);
                          break;
                        case 4:
                          t.vertexAttrib4fv(a.location, n);
                          break;
                        default:
                          t.vertexAttrib1fv(a.location, n);
                      }
                  }
                }
              }
              _();
            })(r, l, d, x),
            null !== y &&
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, n.get(y).buffer));
      },
      reset: x,
      resetDefaultState: y,
      dispose: function () {
        x();
        for (const t in o) {
          const e = o[t];
          for (const t in e) {
            const n = e[t];
            for (const t in n) d(n[t].object), delete n[t];
            delete e[t];
          }
          delete o[t];
        }
      },
      releaseStatesOfGeometry: function (t) {
        if (void 0 === o[t.id]) return;
        const e = o[t.id];
        for (const t in e) {
          const n = e[t];
          for (const t in n) d(n[t].object), delete n[t];
          delete e[t];
        }
        delete o[t.id];
      },
      releaseStatesOfProgram: function (t) {
        for (const e in o) {
          const n = o[e];
          if (void 0 === n[t.id]) continue;
          const i = n[t.id];
          for (const t in i) d(i[t].object), delete i[t];
          delete n[t.id];
        }
      },
      initAttributes: m,
      enableAttribute: f,
      disableUnusedAttributes: _,
    };
  }
  function Ui(t, e, n, i) {
    const r = i.isWebGL2;
    let a;
    (this.setMode = function (t) {
      a = t;
    }),
      (this.render = function (e, i) {
        t.drawArrays(a, e, i), n.update(i, a, 1);
      }),
      (this.renderInstances = function (i, s, o) {
        if (0 === o) return;
        let l, c;
        if (r) (l = t), (c = "drawArraysInstanced");
        else if (
          ((l = e.get("ANGLE_instanced_arrays")),
          (c = "drawArraysInstancedANGLE"),
          null === l)
        )
          return void console.error(
            "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
          );
        l[c](a, i, s, o), n.update(s, a, o);
      });
  }
  function Di(t, e, n) {
    let i;
    function r(e) {
      if ("highp" === e) {
        if (
          t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision >
            0 &&
          t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT)
            .precision > 0
        )
          return "highp";
        e = "mediump";
      }
      return "mediump" === e &&
        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision >
          0 &&
        t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT)
          .precision > 0
        ? "mediump"
        : "lowp";
    }
    const a =
      "undefined" != typeof WebGL2RenderingContext &&
      "WebGL2RenderingContext" === t.constructor.name;
    let s = void 0 !== n.precision ? n.precision : "highp";
    const o = r(s);
    o !== s &&
      (console.warn(
        "THREE.WebGLRenderer:",
        s,
        "not supported, using",
        o,
        "instead."
      ),
      (s = o));
    const l = a || e.has("WEBGL_draw_buffers"),
      c = !0 === n.logarithmicDepthBuffer,
      h = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
      u = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
      d = t.getParameter(t.MAX_TEXTURE_SIZE),
      p = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
      m = t.getParameter(t.MAX_VERTEX_ATTRIBS),
      f = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
      g = t.getParameter(t.MAX_VARYING_VECTORS),
      _ = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
      v = u > 0,
      x = a || e.has("OES_texture_float");
    return {
      isWebGL2: a,
      drawBuffers: l,
      getMaxAnisotropy: function () {
        if (void 0 !== i) return i;
        if (!0 === e.has("EXT_texture_filter_anisotropic")) {
          const n = e.get("EXT_texture_filter_anisotropic");
          i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        } else i = 0;
        return i;
      },
      getMaxPrecision: r,
      precision: s,
      logarithmicDepthBuffer: c,
      maxTextures: h,
      maxVertexTextures: u,
      maxTextureSize: d,
      maxCubemapSize: p,
      maxAttributes: m,
      maxVertexUniforms: f,
      maxVaryings: g,
      maxFragmentUniforms: _,
      vertexTextures: v,
      floatFragmentTextures: x,
      floatVertexTextures: v && x,
      maxSamples: a ? t.getParameter(t.MAX_SAMPLES) : 0,
    };
  }
  function Ii(t) {
    const e = this;
    let n = null,
      i = 0,
      r = !1,
      a = !1;
    const s = new xi(),
      o = new Pt(),
      l = { value: null, needsUpdate: !1 };
    function c(t, n, i, r) {
      const a = null !== t ? t.length : 0;
      let c = null;
      if (0 !== a) {
        if (((c = l.value), !0 !== r || null === c)) {
          const e = i + 4 * a,
            r = n.matrixWorldInverse;
          o.getNormalMatrix(r),
            (null === c || c.length < e) && (c = new Float32Array(e));
          for (let e = 0, n = i; e !== a; ++e, n += 4)
            s.copy(t[e]).applyMatrix4(r, o),
              s.normal.toArray(c, n),
              (c[n + 3] = s.constant);
        }
        (l.value = c), (l.needsUpdate = !0);
      }
      return (e.numPlanes = a), (e.numIntersection = 0), c;
    }
    (this.uniform = l),
      (this.numPlanes = 0),
      (this.numIntersection = 0),
      (this.init = function (t, e) {
        const n = 0 !== t.length || e || 0 !== i || r;
        return (r = e), (i = t.length), n;
      }),
      (this.beginShadows = function () {
        (a = !0), c(null);
      }),
      (this.endShadows = function () {
        a = !1;
      }),
      (this.setGlobalState = function (t, e) {
        n = c(t, e, 0);
      }),
      (this.setState = function (s, o, h) {
        const u = s.clippingPlanes,
          d = s.clipIntersection,
          p = s.clipShadows,
          m = t.get(s);
        if (!r || null === u || 0 === u.length || (a && !p))
          a
            ? c(null)
            : (function () {
                l.value !== n && ((l.value = n), (l.needsUpdate = i > 0));
                (e.numPlanes = i), (e.numIntersection = 0);
              })();
        else {
          const t = a ? 0 : i,
            e = 4 * t;
          let r = m.clippingState || null;
          (l.value = r), (r = c(u, o, e, h));
          for (let t = 0; t !== e; ++t) r[t] = n[t];
          (m.clippingState = r),
            (this.numIntersection = d ? this.numPlanes : 0),
            (this.numPlanes += t);
        }
      });
  }
  function Ni(t) {
    let e = new WeakMap();
    function n(t, e) {
      return e === w ? (t.mapping = E) : e === T && (t.mapping = b), t;
    }
    function i(t) {
      const n = t.target;
      n.removeEventListener("dispose", i);
      const r = e.get(n);
      void 0 !== r && (e.delete(n), r.dispose());
    }
    return {
      get: function (r) {
        if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
          const a = r.mapping;
          if (a === w || a === T) {
            if (e.has(r)) {
              return n(e.get(r).texture, r.mapping);
            }
            {
              const a = r.image;
              if (a && a.height > 0) {
                const s = new fi(a.height / 2);
                return (
                  s.fromEquirectangularTexture(t, r),
                  e.set(r, s),
                  r.addEventListener("dispose", i),
                  n(s.texture, r.mapping)
                );
              }
              return null;
            }
          }
        }
        return r;
      },
      dispose: function () {
        e = new WeakMap();
      },
    };
  }
  class Oi extends hi {
    constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
      super(),
        (this.isOrthographicCamera = !0),
        (this.type = "OrthographicCamera"),
        (this.zoom = 1),
        (this.view = null),
        (this.left = t),
        (this.right = e),
        (this.top = n),
        (this.bottom = i),
        (this.near = r),
        (this.far = a),
        this.updateProjectionMatrix();
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.left = t.left),
        (this.right = t.right),
        (this.top = t.top),
        (this.bottom = t.bottom),
        (this.near = t.near),
        (this.far = t.far),
        (this.zoom = t.zoom),
        (this.view = null === t.view ? null : Object.assign({}, t.view)),
        this
      );
    }
    setViewOffset(t, e, n, i, r, a) {
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
        (this.view.enabled = !0),
        (this.view.fullWidth = t),
        (this.view.fullHeight = e),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = r),
        (this.view.height = a),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t = (this.right - this.left) / (2 * this.zoom),
        e = (this.top - this.bottom) / (2 * this.zoom),
        n = (this.right + this.left) / 2,
        i = (this.top + this.bottom) / 2;
      let r = n - t,
        a = n + t,
        s = i + e,
        o = i - e;
      if (null !== this.view && this.view.enabled) {
        const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
          e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        (r += t * this.view.offsetX),
          (a = r + t * this.view.width),
          (s -= e * this.view.offsetY),
          (o = s - e * this.view.height);
      }
      this.projectionMatrix.makeOrthographic(
        r,
        a,
        s,
        o,
        this.near,
        this.far,
        this.coordinateSystem
      ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        (e.object.zoom = this.zoom),
        (e.object.left = this.left),
        (e.object.right = this.right),
        (e.object.top = this.top),
        (e.object.bottom = this.bottom),
        (e.object.near = this.near),
        (e.object.far = this.far),
        null !== this.view && (e.object.view = Object.assign({}, this.view)),
        e
      );
    }
  }
  const Fi = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
    zi = 20,
    Bi = new Oi(),
    ki = new Sn();
  let Hi = null;
  const Vi = (1 + Math.sqrt(5)) / 2,
    Gi = 1 / Vi,
    Wi = [
      new ee(1, 1, 1),
      new ee(-1, 1, 1),
      new ee(1, 1, -1),
      new ee(-1, 1, -1),
      new ee(0, Vi, Gi),
      new ee(0, Vi, -Gi),
      new ee(Gi, 0, Vi),
      new ee(-Gi, 0, Vi),
      new ee(Vi, Gi, 0),
      new ee(-Vi, Gi, 0),
    ];
  class Xi {
    constructor(t) {
      (this._renderer = t),
        (this._pingPongRenderTarget = null),
        (this._lodMax = 0),
        (this._cubeSize = 0),
        (this._lodPlanes = []),
        (this._sizeLods = []),
        (this._sigmas = []),
        (this._blurMaterial = null),
        (this._cubemapMaterial = null),
        (this._equirectMaterial = null),
        this._compileMaterial(this._blurMaterial);
    }
    fromScene(t, e = 0, n = 0.1, i = 100) {
      (Hi = this._renderer.getRenderTarget()), this._setSize(256);
      const r = this._allocateTargets();
      return (
        (r.depthBuffer = !0),
        this._sceneToCubeUV(t, n, i, r),
        e > 0 && this._blur(r, 0, 0, e),
        this._applyPMREM(r),
        this._cleanup(r),
        r
      );
    }
    fromEquirectangular(t, e = null) {
      return this._fromTexture(t, e);
    }
    fromCubemap(t, e = null) {
      return this._fromTexture(t, e);
    }
    compileCubemapShader() {
      null === this._cubemapMaterial &&
        ((this._cubemapMaterial = Zi()),
        this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial &&
        ((this._equirectMaterial = qi()),
        this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(),
        null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
        null !== this._equirectMaterial && this._equirectMaterial.dispose();
    }
    _setSize(t) {
      (this._lodMax = Math.floor(Math.log2(t))),
        (this._cubeSize = Math.pow(2, this._lodMax));
    }
    _dispose() {
      null !== this._blurMaterial && this._blurMaterial.dispose(),
        null !== this._pingPongRenderTarget &&
          this._pingPongRenderTarget.dispose();
      for (let t = 0; t < this._lodPlanes.length; t++)
        this._lodPlanes[t].dispose();
    }
    _cleanup(t) {
      this._renderer.setRenderTarget(Hi),
        (t.scissorTest = !1),
        Yi(t, 0, 0, t.width, t.height);
    }
    _fromTexture(t, e) {
      t.mapping === E || t.mapping === b
        ? this._setSize(
            0 === t.image.length
              ? 16
              : t.image[0].width || t.image[0].image.width
          )
        : this._setSize(t.image.width / 4),
        (Hi = this._renderer.getRenderTarget());
      const n = e || this._allocateTargets();
      return (
        this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n
      );
    }
    _allocateTargets() {
      const t = 3 * Math.max(this._cubeSize, 112),
        e = 4 * this._cubeSize,
        n = {
          magFilter: I,
          minFilter: I,
          generateMipmaps: !1,
          type: H,
          format: G,
          colorSpace: st,
          depthBuffer: !1,
        },
        i = ji(t, e, n);
      if (
        null === this._pingPongRenderTarget ||
        this._pingPongRenderTarget.width !== t ||
        this._pingPongRenderTarget.height !== e
      ) {
        null !== this._pingPongRenderTarget && this._dispose(),
          (this._pingPongRenderTarget = ji(t, e, n));
        const { _lodMax: i } = this;
        ({
          sizeLods: this._sizeLods,
          lodPlanes: this._lodPlanes,
          sigmas: this._sigmas,
        } = (function (t) {
          const e = [],
            n = [],
            i = [];
          let r = t;
          const a = t - 4 + 1 + Fi.length;
          for (let s = 0; s < a; s++) {
            const a = Math.pow(2, r);
            n.push(a);
            let o = 1 / a;
            s > t - 4 ? (o = Fi[s - t + 4 - 1]) : 0 === s && (o = 0), i.push(o);
            const l = 1 / (a - 2),
              c = -l,
              h = 1 + l,
              u = [c, c, h, c, h, h, c, c, h, h, c, h],
              d = 6,
              p = 6,
              m = 3,
              f = 2,
              g = 1,
              _ = new Float32Array(m * p * d),
              v = new Float32Array(f * p * d),
              x = new Float32Array(g * p * d);
            for (let t = 0; t < d; t++) {
              const e = ((t % 3) * 2) / 3 - 1,
                n = t > 2 ? 0 : -1,
                i = [
                  e,
                  n,
                  0,
                  e + 2 / 3,
                  n,
                  0,
                  e + 2 / 3,
                  n + 1,
                  0,
                  e,
                  n,
                  0,
                  e + 2 / 3,
                  n + 1,
                  0,
                  e,
                  n + 1,
                  0,
                ];
              _.set(i, m * p * t), v.set(u, f * p * t);
              const r = [t, t, t, t, t, t];
              x.set(r, g * p * t);
            }
            const y = new zn();
            y.setAttribute("position", new An(_, m)),
              y.setAttribute("uv", new An(v, f)),
              y.setAttribute("faceIndex", new An(x, g)),
              e.push(y),
              r > 4 && r--;
          }
          return { lodPlanes: e, sizeLods: n, sigmas: i };
        })(i)),
          (this._blurMaterial = (function (t, e, n) {
            const i = new Float32Array(zi),
              r = new ee(0, 1, 0),
              a = new ci({
                name: "SphericalGaussianBlur",
                defines: {
                  n: zi,
                  CUBEUV_TEXEL_WIDTH: 1 / e,
                  CUBEUV_TEXEL_HEIGHT: 1 / n,
                  CUBEUV_MAX_MIP: `${t}.0`,
                },
                uniforms: {
                  envMap: { value: null },
                  samples: { value: 1 },
                  weights: { value: i },
                  latitudinal: { value: !1 },
                  dTheta: { value: 0 },
                  mipInt: { value: 0 },
                  poleAxis: { value: r },
                },
                vertexShader: Ki(),
                fragmentShader:
                  "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
                blending: 0,
                depthTest: !1,
                depthWrite: !1,
              });
            return a;
          })(i, t, e));
      }
      return i;
    }
    _compileMaterial(t) {
      const e = new ni(this._lodPlanes[0], t);
      this._renderer.compile(e, Bi);
    }
    _sceneToCubeUV(t, e, n, i) {
      const r = new ui(90, 1, e, n),
        a = [1, -1, 1, 1, 1, 1],
        s = [1, 1, 1, -1, -1, -1],
        o = this._renderer,
        l = o.autoClear,
        c = o.toneMapping;
      o.getClearColor(ki), (o.toneMapping = _), (o.autoClear = !1);
      const h = new bn({
          name: "PMREM.Background",
          side: d,
          depthWrite: !1,
          depthTest: !1,
        }),
        u = new ni(new ri(), h);
      let p = !1;
      const m = t.background;
      m
        ? m.isColor && (h.color.copy(m), (t.background = null), (p = !0))
        : (h.color.copy(ki), (p = !0));
      for (let e = 0; e < 6; e++) {
        const n = e % 3;
        0 === n
          ? (r.up.set(0, a[e], 0), r.lookAt(s[e], 0, 0))
          : 1 === n
          ? (r.up.set(0, 0, a[e]), r.lookAt(0, s[e], 0))
          : (r.up.set(0, a[e], 0), r.lookAt(0, 0, s[e]));
        const l = this._cubeSize;
        Yi(i, n * l, e > 2 ? l : 0, l, l),
          o.setRenderTarget(i),
          p && o.render(u, r),
          o.render(t, r);
      }
      u.geometry.dispose(),
        u.material.dispose(),
        (o.toneMapping = c),
        (o.autoClear = l),
        (t.background = m);
    }
    _textureToCubeUV(t, e) {
      const n = this._renderer,
        i = t.mapping === E || t.mapping === b;
      i
        ? (null === this._cubemapMaterial && (this._cubemapMaterial = Zi()),
          (this._cubemapMaterial.uniforms.flipEnvMap.value =
            !1 === t.isRenderTargetTexture ? -1 : 1))
        : null === this._equirectMaterial && (this._equirectMaterial = qi());
      const r = i ? this._cubemapMaterial : this._equirectMaterial,
        a = new ni(this._lodPlanes[0], r);
      r.uniforms.envMap.value = t;
      const s = this._cubeSize;
      Yi(e, 0, 0, 3 * s, 2 * s), n.setRenderTarget(e), n.render(a, Bi);
    }
    _applyPMREM(t) {
      const e = this._renderer,
        n = e.autoClear;
      e.autoClear = !1;
      for (let e = 1; e < this._lodPlanes.length; e++) {
        const n = Math.sqrt(
            this._sigmas[e] * this._sigmas[e] -
              this._sigmas[e - 1] * this._sigmas[e - 1]
          ),
          i = Wi[(e - 1) % Wi.length];
        this._blur(t, e - 1, e, n, i);
      }
      e.autoClear = n;
    }
    _blur(t, e, n, i, r) {
      const a = this._pingPongRenderTarget;
      this._halfBlur(t, a, e, n, i, "latitudinal", r),
        this._halfBlur(a, t, n, n, i, "longitudinal", r);
    }
    _halfBlur(t, e, n, i, r, a, s) {
      const o = this._renderer,
        l = this._blurMaterial;
      "latitudinal" !== a &&
        "longitudinal" !== a &&
        console.error(
          "blur direction must be either latitudinal or longitudinal!"
        );
      const c = new ni(this._lodPlanes[i], l),
        h = l.uniforms,
        u = this._sizeLods[n] - 1,
        d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / 39,
        p = r / d,
        m = isFinite(r) ? 1 + Math.floor(3 * p) : zi;
      m > zi &&
        console.warn(
          `sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`
        );
      const f = [];
      let g = 0;
      for (let t = 0; t < zi; ++t) {
        const e = t / p,
          n = Math.exp((-e * e) / 2);
        f.push(n), 0 === t ? (g += n) : t < m && (g += 2 * n);
      }
      for (let t = 0; t < f.length; t++) f[t] = f[t] / g;
      (h.envMap.value = t.texture),
        (h.samples.value = m),
        (h.weights.value = f),
        (h.latitudinal.value = "latitudinal" === a),
        s && (h.poleAxis.value = s);
      const { _lodMax: _ } = this;
      (h.dTheta.value = d), (h.mipInt.value = _ - n);
      const v = this._sizeLods[i];
      Yi(
        e,
        3 * v * (i > _ - 4 ? i - _ + 4 : 0),
        4 * (this._cubeSize - v),
        3 * v,
        2 * v
      ),
        o.setRenderTarget(e),
        o.render(c, Bi);
    }
  }
  function ji(t, e, n) {
    const i = new $t(t, e, n);
    return (
      (i.texture.mapping = A),
      (i.texture.name = "PMREM.cubeUv"),
      (i.scissorTest = !0),
      i
    );
  }
  function Yi(t, e, n, i, r) {
    t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
  }
  function qi() {
    return new ci({
      name: "EquirectangularToCubeUV",
      uniforms: { envMap: { value: null } },
      vertexShader: Ki(),
      fragmentShader:
        "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
      blending: 0,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function Zi() {
    return new ci({
      name: "CubemapToCubeUV",
      uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
      vertexShader: Ki(),
      fragmentShader:
        "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
      blending: 0,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function Ki() {
    return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
  }
  function $i(t) {
    let e = new WeakMap(),
      n = null;
    function i(t) {
      const n = t.target;
      n.removeEventListener("dispose", i);
      const r = e.get(n);
      void 0 !== r && (e.delete(n), r.dispose());
    }
    return {
      get: function (r) {
        if (r && r.isTexture) {
          const a = r.mapping,
            s = a === w || a === T,
            o = a === E || a === b;
          if (s || o) {
            if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
              r.needsPMREMUpdate = !1;
              let i = e.get(r);
              return (
                null === n && (n = new Xi(t)),
                (i = s ? n.fromEquirectangular(r, i) : n.fromCubemap(r, i)),
                e.set(r, i),
                i.texture
              );
            }
            if (e.has(r)) return e.get(r).texture;
            {
              const a = r.image;
              if (
                (s && a && a.height > 0) ||
                (o &&
                  a &&
                  (function (t) {
                    let e = 0;
                    const n = 6;
                    for (let i = 0; i < n; i++) void 0 !== t[i] && e++;
                    return e === n;
                  })(a))
              ) {
                null === n && (n = new Xi(t));
                const a = s ? n.fromEquirectangular(r) : n.fromCubemap(r);
                return e.set(r, a), r.addEventListener("dispose", i), a.texture;
              }
              return null;
            }
          }
        }
        return r;
      },
      dispose: function () {
        (e = new WeakMap()), null !== n && (n.dispose(), (n = null));
      },
    };
  }
  function Ji(t) {
    const e = {};
    function n(n) {
      if (void 0 !== e[n]) return e[n];
      let i;
      switch (n) {
        case "WEBGL_depth_texture":
          i =
            t.getExtension("WEBGL_depth_texture") ||
            t.getExtension("MOZ_WEBGL_depth_texture") ||
            t.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          i =
            t.getExtension("EXT_texture_filter_anisotropic") ||
            t.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
            t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          i =
            t.getExtension("WEBGL_compressed_texture_s3tc") ||
            t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
            t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          i =
            t.getExtension("WEBGL_compressed_texture_pvrtc") ||
            t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          i = t.getExtension(n);
      }
      return (e[n] = i), i;
    }
    return {
      has: function (t) {
        return null !== n(t);
      },
      init: function (t) {
        t.isWebGL2
          ? n("EXT_color_buffer_float")
          : (n("WEBGL_depth_texture"),
            n("OES_texture_float"),
            n("OES_texture_half_float"),
            n("OES_texture_half_float_linear"),
            n("OES_standard_derivatives"),
            n("OES_element_index_uint"),
            n("OES_vertex_array_object"),
            n("ANGLE_instanced_arrays")),
          n("OES_texture_float_linear"),
          n("EXT_color_buffer_half_float"),
          n("WEBGL_multisampled_render_to_texture");
      },
      get: function (t) {
        const e = n(t);
        return (
          null === e &&
            console.warn(
              "THREE.WebGLRenderer: " + t + " extension not supported."
            ),
          e
        );
      },
    };
  }
  function Qi(t, e, n, i) {
    const r = {},
      a = new WeakMap();
    function s(t) {
      const o = t.target;
      null !== o.index && e.remove(o.index);
      for (const t in o.attributes) e.remove(o.attributes[t]);
      for (const t in o.morphAttributes) {
        const n = o.morphAttributes[t];
        for (let t = 0, i = n.length; t < i; t++) e.remove(n[t]);
      }
      o.removeEventListener("dispose", s), delete r[o.id];
      const l = a.get(o);
      l && (e.remove(l), a.delete(o)),
        i.releaseStatesOfGeometry(o),
        !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
        n.memory.geometries--;
    }
    function o(t) {
      const n = [],
        i = t.index,
        r = t.attributes.position;
      let s = 0;
      if (null !== i) {
        const t = i.array;
        s = i.version;
        for (let e = 0, i = t.length; e < i; e += 3) {
          const i = t[e + 0],
            r = t[e + 1],
            a = t[e + 2];
          n.push(i, r, r, a, a, i);
        }
      } else {
        const t = r.array;
        s = r.version;
        for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
          const t = e + 0,
            i = e + 1,
            r = e + 2;
          n.push(t, i, i, r, r, t);
        }
      }
      const o = new (Ut(n) ? Cn : Rn)(n, 1);
      o.version = s;
      const l = a.get(t);
      l && e.remove(l), a.set(t, o);
    }
    return {
      get: function (t, e) {
        return (
          !0 === r[e.id] ||
            (e.addEventListener("dispose", s),
            (r[e.id] = !0),
            n.memory.geometries++),
          e
        );
      },
      update: function (n) {
        const i = n.attributes;
        for (const n in i) e.update(i[n], t.ARRAY_BUFFER);
        const r = n.morphAttributes;
        for (const n in r) {
          const i = r[n];
          for (let n = 0, r = i.length; n < r; n++)
            e.update(i[n], t.ARRAY_BUFFER);
        }
      },
      getWireframeAttribute: function (t) {
        const e = a.get(t);
        if (e) {
          const n = t.index;
          null !== n && e.version < n.version && o(t);
        } else o(t);
        return a.get(t);
      },
    };
  }
  function tr(t, e, n, i) {
    const r = i.isWebGL2;
    let a, s, o;
    (this.setMode = function (t) {
      a = t;
    }),
      (this.setIndex = function (t) {
        (s = t.type), (o = t.bytesPerElement);
      }),
      (this.render = function (e, i) {
        t.drawElements(a, i, s, e * o), n.update(i, a, 1);
      }),
      (this.renderInstances = function (i, l, c) {
        if (0 === c) return;
        let h, u;
        if (r) (h = t), (u = "drawElementsInstanced");
        else if (
          ((h = e.get("ANGLE_instanced_arrays")),
          (u = "drawElementsInstancedANGLE"),
          null === h)
        )
          return void console.error(
            "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
          );
        h[u](a, l, s, i * o, c), n.update(l, a, c);
      });
  }
  function er(t) {
    const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return {
      memory: { geometries: 0, textures: 0 },
      render: e,
      programs: null,
      autoReset: !0,
      reset: function () {
        (e.calls = 0), (e.triangles = 0), (e.points = 0), (e.lines = 0);
      },
      update: function (n, i, r) {
        switch ((e.calls++, i)) {
          case t.TRIANGLES:
            e.triangles += r * (n / 3);
            break;
          case t.LINES:
            e.lines += r * (n / 2);
            break;
          case t.LINE_STRIP:
            e.lines += r * (n - 1);
            break;
          case t.LINE_LOOP:
            e.lines += r * n;
            break;
          case t.POINTS:
            e.points += r * n;
            break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", i);
        }
      },
    };
  }
  function nr(t, e) {
    return t[0] - e[0];
  }
  function ir(t, e) {
    return Math.abs(e[1]) - Math.abs(t[1]);
  }
  function rr(t, e, n) {
    const i = {},
      r = new Float32Array(8),
      a = new WeakMap(),
      s = new Kt(),
      o = [];
    for (let t = 0; t < 8; t++) o[t] = [t, 0];
    return {
      update: function (l, c, h) {
        const u = l.morphTargetInfluences;
        if (!0 === e.isWebGL2) {
          const d =
              c.morphAttributes.position ||
              c.morphAttributes.normal ||
              c.morphAttributes.color,
            p = void 0 !== d ? d.length : 0;
          let m = a.get(c);
          if (void 0 === m || m.count !== p) {
            void 0 !== m && m.texture.dispose();
            const _ = void 0 !== c.morphAttributes.position,
              v = void 0 !== c.morphAttributes.normal,
              x = void 0 !== c.morphAttributes.color,
              y = c.morphAttributes.position || [],
              M = c.morphAttributes.normal || [],
              S = c.morphAttributes.color || [];
            let E = 0;
            !0 === _ && (E = 1), !0 === v && (E = 2), !0 === x && (E = 3);
            let b = c.attributes.position.count * E,
              w = 1;
            b > e.maxTextureSize &&
              ((w = Math.ceil(b / e.maxTextureSize)), (b = e.maxTextureSize));
            const T = new Float32Array(b * w * 4 * p),
              A = new Jt(T, b, w, p);
            (A.type = k), (A.needsUpdate = !0);
            const R = 4 * E;
            for (let P = 0; P < p; P++) {
              const L = y[P],
                U = M[P],
                D = S[P],
                I = b * w * 4 * P;
              for (let N = 0; N < L.count; N++) {
                const O = N * R;
                !0 === _ &&
                  (s.fromBufferAttribute(L, N),
                  (T[I + O + 0] = s.x),
                  (T[I + O + 1] = s.y),
                  (T[I + O + 2] = s.z),
                  (T[I + O + 3] = 0)),
                  !0 === v &&
                    (s.fromBufferAttribute(U, N),
                    (T[I + O + 4] = s.x),
                    (T[I + O + 5] = s.y),
                    (T[I + O + 6] = s.z),
                    (T[I + O + 7] = 0)),
                  !0 === x &&
                    (s.fromBufferAttribute(D, N),
                    (T[I + O + 8] = s.x),
                    (T[I + O + 9] = s.y),
                    (T[I + O + 10] = s.z),
                    (T[I + O + 11] = 4 === D.itemSize ? s.w : 1));
              }
            }
            function C() {
              A.dispose(), a.delete(c), c.removeEventListener("dispose", C);
            }
            (m = { count: p, texture: A, size: new Ct(b, w) }),
              a.set(c, m),
              c.addEventListener("dispose", C);
          }
          let f = 0;
          for (let F = 0; F < u.length; F++) f += u[F];
          const g = c.morphTargetsRelative ? 1 : 1 - f;
          h.getUniforms().setValue(t, "morphTargetBaseInfluence", g),
            h.getUniforms().setValue(t, "morphTargetInfluences", u),
            h.getUniforms().setValue(t, "morphTargetsTexture", m.texture, n),
            h.getUniforms().setValue(t, "morphTargetsTextureSize", m.size);
        } else {
          const z = void 0 === u ? 0 : u.length;
          let B = i[c.id];
          if (void 0 === B || B.length !== z) {
            B = [];
            for (let X = 0; X < z; X++) B[X] = [X, 0];
            i[c.id] = B;
          }
          for (let j = 0; j < z; j++) {
            const Y = B[j];
            (Y[0] = j), (Y[1] = u[j]);
          }
          B.sort(ir);
          for (let q = 0; q < 8; q++)
            q < z && B[q][1]
              ? ((o[q][0] = B[q][0]), (o[q][1] = B[q][1]))
              : ((o[q][0] = Number.MAX_SAFE_INTEGER), (o[q][1] = 0));
          o.sort(nr);
          const H = c.morphAttributes.position,
            V = c.morphAttributes.normal;
          let G = 0;
          for (let Z = 0; Z < 8; Z++) {
            const K = o[Z],
              $ = K[0],
              J = K[1];
            $ !== Number.MAX_SAFE_INTEGER && J
              ? (H &&
                  c.getAttribute("morphTarget" + Z) !== H[$] &&
                  c.setAttribute("morphTarget" + Z, H[$]),
                V &&
                  c.getAttribute("morphNormal" + Z) !== V[$] &&
                  c.setAttribute("morphNormal" + Z, V[$]),
                (r[Z] = J),
                (G += J))
              : (H &&
                  !0 === c.hasAttribute("morphTarget" + Z) &&
                  c.deleteAttribute("morphTarget" + Z),
                V &&
                  !0 === c.hasAttribute("morphNormal" + Z) &&
                  c.deleteAttribute("morphNormal" + Z),
                (r[Z] = 0));
          }
          const W = c.morphTargetsRelative ? 1 : 1 - G;
          h.getUniforms().setValue(t, "morphTargetBaseInfluence", W),
            h.getUniforms().setValue(t, "morphTargetInfluences", r);
        }
      },
    };
  }
  function ar(t, e, n, i) {
    let r = new WeakMap();
    function a(t) {
      const e = t.target;
      e.removeEventListener("dispose", a),
        n.remove(e.instanceMatrix),
        null !== e.instanceColor && n.remove(e.instanceColor);
    }
    return {
      update: function (s) {
        const o = i.render.frame,
          l = s.geometry,
          c = e.get(s, l);
        return (
          r.get(c) !== o && (e.update(c), r.set(c, o)),
          s.isInstancedMesh &&
            (!1 === s.hasEventListener("dispose", a) &&
              s.addEventListener("dispose", a),
            n.update(s.instanceMatrix, t.ARRAY_BUFFER),
            null !== s.instanceColor &&
              n.update(s.instanceColor, t.ARRAY_BUFFER)),
          c
        );
      },
      dispose: function () {
        r = new WeakMap();
      },
    };
  }
  const sr = new Zt(),
    or = new Jt(),
    lr = new Qt(),
    cr = new mi(),
    hr = [],
    ur = [],
    dr = new Float32Array(16),
    pr = new Float32Array(9),
    mr = new Float32Array(4);
  function fr(t, e, n) {
    const i = t[0];
    if (i <= 0 || i > 0) return t;
    const r = e * n;
    let a = hr[r];
    if ((void 0 === a && ((a = new Float32Array(r)), (hr[r] = a)), 0 !== e)) {
      i.toArray(a, 0);
      for (let i = 1, r = 0; i !== e; ++i) (r += n), t[i].toArray(a, r);
    }
    return a;
  }
  function gr(t, e) {
    if (t.length !== e.length) return !1;
    for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
    return !0;
  }
  function _r(t, e) {
    for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
  }
  function vr(t, e) {
    let n = ur[e];
    void 0 === n && ((n = new Int32Array(e)), (ur[e] = n));
    for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
    return n;
  }
  function xr(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
  }
  function yr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y) ||
        (t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
    else {
      if (gr(n, e)) return;
      t.uniform2fv(this.addr, e), _r(n, e);
    }
  }
  function Mr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
        (t.uniform3f(this.addr, e.x, e.y, e.z),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z));
    else if (void 0 !== e.r)
      (n[0] === e.r && n[1] === e.g && n[2] === e.b) ||
        (t.uniform3f(this.addr, e.r, e.g, e.b),
        (n[0] = e.r),
        (n[1] = e.g),
        (n[2] = e.b));
    else {
      if (gr(n, e)) return;
      t.uniform3fv(this.addr, e), _r(n, e);
    }
  }
  function Sr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
        (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z),
        (n[3] = e.w));
    else {
      if (gr(n, e)) return;
      t.uniform4fv(this.addr, e), _r(n, e);
    }
  }
  function Er(t, e) {
    const n = this.cache,
      i = e.elements;
    if (void 0 === i) {
      if (gr(n, e)) return;
      t.uniformMatrix2fv(this.addr, !1, e), _r(n, e);
    } else {
      if (gr(n, i)) return;
      mr.set(i), t.uniformMatrix2fv(this.addr, !1, mr), _r(n, i);
    }
  }
  function br(t, e) {
    const n = this.cache,
      i = e.elements;
    if (void 0 === i) {
      if (gr(n, e)) return;
      t.uniformMatrix3fv(this.addr, !1, e), _r(n, e);
    } else {
      if (gr(n, i)) return;
      pr.set(i), t.uniformMatrix3fv(this.addr, !1, pr), _r(n, i);
    }
  }
  function wr(t, e) {
    const n = this.cache,
      i = e.elements;
    if (void 0 === i) {
      if (gr(n, e)) return;
      t.uniformMatrix4fv(this.addr, !1, e), _r(n, e);
    } else {
      if (gr(n, i)) return;
      dr.set(i), t.uniformMatrix4fv(this.addr, !1, dr), _r(n, i);
    }
  }
  function Tr(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
  }
  function Ar(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y) ||
        (t.uniform2i(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
    else {
      if (gr(n, e)) return;
      t.uniform2iv(this.addr, e), _r(n, e);
    }
  }
  function Rr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
        (t.uniform3i(this.addr, e.x, e.y, e.z),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z));
    else {
      if (gr(n, e)) return;
      t.uniform3iv(this.addr, e), _r(n, e);
    }
  }
  function Cr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
        (t.uniform4i(this.addr, e.x, e.y, e.z, e.w),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z),
        (n[3] = e.w));
    else {
      if (gr(n, e)) return;
      t.uniform4iv(this.addr, e), _r(n, e);
    }
  }
  function Pr(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
  }
  function Lr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y) ||
        (t.uniform2ui(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
    else {
      if (gr(n, e)) return;
      t.uniform2uiv(this.addr, e), _r(n, e);
    }
  }
  function Ur(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
        (t.uniform3ui(this.addr, e.x, e.y, e.z),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z));
    else {
      if (gr(n, e)) return;
      t.uniform3uiv(this.addr, e), _r(n, e);
    }
  }
  function Dr(t, e) {
    const n = this.cache;
    if (void 0 !== e.x)
      (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
        (t.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
        (n[0] = e.x),
        (n[1] = e.y),
        (n[2] = e.z),
        (n[3] = e.w));
    else {
      if (gr(n, e)) return;
      t.uniform4uiv(this.addr, e), _r(n, e);
    }
  }
  function Ir(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture2D(e || sr, r);
  }
  function Nr(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture3D(e || lr, r);
  }
  function Or(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.setTextureCube(e || cr, r);
  }
  function Fr(t, e, n) {
    const i = this.cache,
      r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
      n.setTexture2DArray(e || or, r);
  }
  function zr(t, e) {
    t.uniform1fv(this.addr, e);
  }
  function Br(t, e) {
    const n = fr(e, this.size, 2);
    t.uniform2fv(this.addr, n);
  }
  function kr(t, e) {
    const n = fr(e, this.size, 3);
    t.uniform3fv(this.addr, n);
  }
  function Hr(t, e) {
    const n = fr(e, this.size, 4);
    t.uniform4fv(this.addr, n);
  }
  function Vr(t, e) {
    const n = fr(e, this.size, 4);
    t.uniformMatrix2fv(this.addr, !1, n);
  }
  function Gr(t, e) {
    const n = fr(e, this.size, 9);
    t.uniformMatrix3fv(this.addr, !1, n);
  }
  function Wr(t, e) {
    const n = fr(e, this.size, 16);
    t.uniformMatrix4fv(this.addr, !1, n);
  }
  function Xr(t, e) {
    t.uniform1iv(this.addr, e);
  }
  function jr(t, e) {
    t.uniform2iv(this.addr, e);
  }
  function Yr(t, e) {
    t.uniform3iv(this.addr, e);
  }
  function qr(t, e) {
    t.uniform4iv(this.addr, e);
  }
  function Zr(t, e) {
    t.uniform1uiv(this.addr, e);
  }
  function Kr(t, e) {
    t.uniform2uiv(this.addr, e);
  }
  function $r(t, e) {
    t.uniform3uiv(this.addr, e);
  }
  function Jr(t, e) {
    t.uniform4uiv(this.addr, e);
  }
  function Qr(t, e, n) {
    const i = this.cache,
      r = e.length,
      a = vr(n, r);
    gr(i, a) || (t.uniform1iv(this.addr, a), _r(i, a));
    for (let t = 0; t !== r; ++t) n.setTexture2D(e[t] || sr, a[t]);
  }
  function ta(t, e, n) {
    const i = this.cache,
      r = e.length,
      a = vr(n, r);
    gr(i, a) || (t.uniform1iv(this.addr, a), _r(i, a));
    for (let t = 0; t !== r; ++t) n.setTexture3D(e[t] || lr, a[t]);
  }
  function ea(t, e, n) {
    const i = this.cache,
      r = e.length,
      a = vr(n, r);
    gr(i, a) || (t.uniform1iv(this.addr, a), _r(i, a));
    for (let t = 0; t !== r; ++t) n.setTextureCube(e[t] || cr, a[t]);
  }
  function na(t, e, n) {
    const i = this.cache,
      r = e.length,
      a = vr(n, r);
    gr(i, a) || (t.uniform1iv(this.addr, a), _r(i, a));
    for (let t = 0; t !== r; ++t) n.setTexture2DArray(e[t] || or, a[t]);
  }
  class ia {
    constructor(t, e, n) {
      (this.id = t),
        (this.addr = n),
        (this.cache = []),
        (this.setValue = (function (t) {
          switch (t) {
            case 5126:
              return xr;
            case 35664:
              return yr;
            case 35665:
              return Mr;
            case 35666:
              return Sr;
            case 35674:
              return Er;
            case 35675:
              return br;
            case 35676:
              return wr;
            case 5124:
            case 35670:
              return Tr;
            case 35667:
            case 35671:
              return Ar;
            case 35668:
            case 35672:
              return Rr;
            case 35669:
            case 35673:
              return Cr;
            case 5125:
              return Pr;
            case 36294:
              return Lr;
            case 36295:
              return Ur;
            case 36296:
              return Dr;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
              return Ir;
            case 35679:
            case 36299:
            case 36307:
              return Nr;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
              return Or;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
              return Fr;
          }
        })(e.type));
    }
  }
  class ra {
    constructor(t, e, n) {
      (this.id = t),
        (this.addr = n),
        (this.cache = []),
        (this.size = e.size),
        (this.setValue = (function (t) {
          switch (t) {
            case 5126:
              return zr;
            case 35664:
              return Br;
            case 35665:
              return kr;
            case 35666:
              return Hr;
            case 35674:
              return Vr;
            case 35675:
              return Gr;
            case 35676:
              return Wr;
            case 5124:
            case 35670:
              return Xr;
            case 35667:
            case 35671:
              return jr;
            case 35668:
            case 35672:
              return Yr;
            case 35669:
            case 35673:
              return qr;
            case 5125:
              return Zr;
            case 36294:
              return Kr;
            case 36295:
              return $r;
            case 36296:
              return Jr;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
              return Qr;
            case 35679:
            case 36299:
            case 36307:
              return ta;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
              return ea;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
              return na;
          }
        })(e.type));
    }
  }
  class aa {
    constructor(t) {
      (this.id = t), (this.seq = []), (this.map = {});
    }
    setValue(t, e, n) {
      const i = this.seq;
      for (let r = 0, a = i.length; r !== a; ++r) {
        const a = i[r];
        a.setValue(t, e[a.id], n);
      }
    }
  }
  const sa = /(\w+)(\])?(\[|\.)?/g;
  function oa(t, e) {
    t.seq.push(e), (t.map[e.id] = e);
  }
  function la(t, e, n) {
    const i = t.name,
      r = i.length;
    for (sa.lastIndex = 0; ; ) {
      const a = sa.exec(i),
        s = sa.lastIndex;
      let o = a[1];
      const l = "]" === a[2],
        c = a[3];
      if ((l && (o |= 0), void 0 === c || ("[" === c && s + 2 === r))) {
        oa(n, void 0 === c ? new ia(o, t, e) : new ra(o, t, e));
        break;
      }
      {
        let t = n.map[o];
        void 0 === t && ((t = new aa(o)), oa(n, t)), (n = t);
      }
    }
  }
  class ca {
    constructor(t, e) {
      (this.seq = []), (this.map = {});
      const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
      for (let i = 0; i < n; ++i) {
        const n = t.getActiveUniform(e, i);
        la(n, t.getUniformLocation(e, n.name), this);
      }
    }
    setValue(t, e, n, i) {
      const r = this.map[e];
      void 0 !== r && r.setValue(t, n, i);
    }
    setOptional(t, e, n) {
      const i = e[n];
      void 0 !== i && this.setValue(t, n, i);
    }
    static upload(t, e, n, i) {
      for (let r = 0, a = e.length; r !== a; ++r) {
        const a = e[r],
          s = n[a.id];
        !1 !== s.needsUpdate && a.setValue(t, s.value, i);
      }
    }
    static seqWithValue(t, e) {
      const n = [];
      for (let i = 0, r = t.length; i !== r; ++i) {
        const r = t[i];
        r.id in e && n.push(r);
      }
      return n;
    }
  }
  function ha(t, e, n) {
    const i = t.createShader(e);
    return t.shaderSource(i, n), t.compileShader(i), i;
  }
  let ua = 0;
  function da(t, e, n) {
    const i = t.getShaderParameter(e, t.COMPILE_STATUS),
      r = t.getShaderInfoLog(e).trim();
    if (i && "" === r) return "";
    const a = /ERROR: 0:(\d+)/.exec(r);
    if (a) {
      const i = parseInt(a[1]);
      return (
        n.toUpperCase() +
        "\n\n" +
        r +
        "\n\n" +
        (function (t, e) {
          const n = t.split("\n"),
            i = [],
            r = Math.max(e - 6, 0),
            a = Math.min(e + 6, n.length);
          for (let t = r; t < a; t++) {
            const r = t + 1;
            i.push(`${r === e ? ">" : " "} ${r}: ${n[t]}`);
          }
          return i.join("\n");
        })(t.getShaderSource(e), i)
      );
    }
    return r;
  }
  function pa(t, e) {
    const n = (function (t) {
      switch (t) {
        case st:
          return ["Linear", "( value )"];
        case at:
          return ["sRGB", "( value )"];
        default:
          return (
            console.warn("THREE.WebGLProgram: Unsupported color space:", t),
            ["Linear", "( value )"]
          );
      }
    })(e);
    return (
      "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
    );
  }
  function ma(t, e) {
    let n;
    switch (e) {
      case v:
        n = "Linear";
        break;
      case x:
        n = "Reinhard";
        break;
      case y:
        n = "OptimizedCineon";
        break;
      case M:
        n = "ACESFilmic";
        break;
      case S:
        n = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
          (n = "Linear");
    }
    return (
      "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
    );
  }
  function fa(t) {
    return "" !== t;
  }
  function ga(t, e) {
    const n =
      e.numSpotLightShadows +
      e.numSpotLightMaps -
      e.numSpotLightShadowsWithMaps;
    return t
      .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
      .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
      .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
      .replace(/NUM_SPOT_LIGHT_COORDS/g, n)
      .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
      .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
      .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
      .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
      .replace(
        /NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,
        e.numSpotLightShadowsWithMaps
      )
      .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
      .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }
  function _a(t, e) {
    return t
      .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
      .replace(
        /UNION_CLIPPING_PLANES/g,
        e.numClippingPlanes - e.numClipIntersection
      );
  }
  const va = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function xa(t) {
    return t.replace(va, ya);
  }
  function ya(t, e) {
    const n = Ti[e];
    if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
    return xa(n);
  }
  const Ma =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function Sa(t) {
    return t.replace(Ma, Ea);
  }
  function Ea(t, e, n, i) {
    let r = "";
    for (let t = parseInt(e); t < parseInt(n); t++)
      r += i
        .replace(/\[\s*i\s*\]/g, "[ " + t + " ]")
        .replace(/UNROLLED_LOOP_INDEX/g, t);
    return r;
  }
  function ba(t) {
    let e =
      "precision " +
      t.precision +
      " float;\nprecision " +
      t.precision +
      " int;";
    return (
      "highp" === t.precision
        ? (e += "\n#define HIGH_PRECISION")
        : "mediump" === t.precision
        ? (e += "\n#define MEDIUM_PRECISION")
        : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
      e
    );
  }
  function wa(t, e, n, i) {
    const r = t.getContext(),
      a = n.defines;
    let s = n.vertexShader,
      o = n.fragmentShader;
    const u = (function (t) {
        let e = "SHADOWMAP_TYPE_BASIC";
        return (
          t.shadowMapType === l
            ? (e = "SHADOWMAP_TYPE_PCF")
            : t.shadowMapType === c
            ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
            : t.shadowMapType === h && (e = "SHADOWMAP_TYPE_VSM"),
          e
        );
      })(n),
      d = (function (t) {
        let e = "ENVMAP_TYPE_CUBE";
        if (t.envMap)
          switch (t.envMapMode) {
            case E:
            case b:
              e = "ENVMAP_TYPE_CUBE";
              break;
            case A:
              e = "ENVMAP_TYPE_CUBE_UV";
          }
        return e;
      })(n),
      p = (function (t) {
        let e = "ENVMAP_MODE_REFLECTION";
        t.envMap && t.envMapMode === b && (e = "ENVMAP_MODE_REFRACTION");
        return e;
      })(n),
      v = (function (t) {
        let e = "ENVMAP_BLENDING_NONE";
        if (t.envMap)
          switch (t.combine) {
            case m:
              e = "ENVMAP_BLENDING_MULTIPLY";
              break;
            case f:
              e = "ENVMAP_BLENDING_MIX";
              break;
            case g:
              e = "ENVMAP_BLENDING_ADD";
          }
        return e;
      })(n),
      x = (function (t) {
        const e = t.envMapCubeUVHeight;
        if (null === e) return null;
        const n = Math.log2(e) - 2,
          i = 1 / e;
        return {
          texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
          texelHeight: i,
          maxMip: n,
        };
      })(n),
      y = n.isWebGL2
        ? ""
        : (function (t) {
            return [
              t.extensionDerivatives ||
              t.envMapCubeUVHeight ||
              t.bumpMap ||
              t.normalMapTangentSpace ||
              t.clearcoatNormalMap ||
              t.flatShading ||
              "physical" === t.shaderID
                ? "#extension GL_OES_standard_derivatives : enable"
                : "",
              (t.extensionFragDepth || t.logarithmicDepthBuffer) &&
              t.rendererExtensionFragDepth
                ? "#extension GL_EXT_frag_depth : enable"
                : "",
              t.extensionDrawBuffers && t.rendererExtensionDrawBuffers
                ? "#extension GL_EXT_draw_buffers : require"
                : "",
              (t.extensionShaderTextureLOD || t.envMap || t.transmission) &&
              t.rendererExtensionShaderTextureLod
                ? "#extension GL_EXT_shader_texture_lod : enable"
                : "",
            ]
              .filter(fa)
              .join("\n");
          })(n),
      M = (function (t) {
        const e = [];
        for (const n in t) {
          const i = t[n];
          !1 !== i && e.push("#define " + n + " " + i);
        }
        return e.join("\n");
      })(a),
      S = r.createProgram();
    let w,
      T,
      R = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
    n.isRawShaderMaterial
      ? ((w = [
          "#define SHADER_TYPE " + n.shaderType,
          "#define SHADER_NAME " + n.shaderName,
          M,
        ]
          .filter(fa)
          .join("\n")),
        w.length > 0 && (w += "\n"),
        (T = [
          y,
          "#define SHADER_TYPE " + n.shaderType,
          "#define SHADER_NAME " + n.shaderName,
          M,
        ]
          .filter(fa)
          .join("\n")),
        T.length > 0 && (T += "\n"))
      : ((w = [
          ba(n),
          "#define SHADER_TYPE " + n.shaderType,
          "#define SHADER_NAME " + n.shaderName,
          M,
          n.instancing ? "#define USE_INSTANCING" : "",
          n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
          n.useFog && n.fog ? "#define USE_FOG" : "",
          n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
          n.map ? "#define USE_MAP" : "",
          n.envMap ? "#define USE_ENVMAP" : "",
          n.envMap ? "#define " + p : "",
          n.lightMap ? "#define USE_LIGHTMAP" : "",
          n.aoMap ? "#define USE_AOMAP" : "",
          n.bumpMap ? "#define USE_BUMPMAP" : "",
          n.normalMap ? "#define USE_NORMALMAP" : "",
          n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
          n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
          n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
          n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
          n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
          n.iridescenceThicknessMap
            ? "#define USE_IRIDESCENCE_THICKNESSMAP"
            : "",
          n.specularMap ? "#define USE_SPECULARMAP" : "",
          n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
          n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
          n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          n.metalnessMap ? "#define USE_METALNESSMAP" : "",
          n.alphaMap ? "#define USE_ALPHAMAP" : "",
          n.transmission ? "#define USE_TRANSMISSION" : "",
          n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
          n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
          n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
          n.mapUv ? "#define MAP_UV " + n.mapUv : "",
          n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
          n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
          n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
          n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
          n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
          n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
          n.displacementMapUv
            ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv
            : "",
          n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
          n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
          n.anisotropyMapUv
            ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv
            : "",
          n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
          n.clearcoatNormalMapUv
            ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv
            : "",
          n.clearcoatRoughnessMapUv
            ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv
            : "",
          n.iridescenceMapUv
            ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv
            : "",
          n.iridescenceThicknessMapUv
            ? "#define IRIDESCENCE_THICKNESSMAP_UV " +
              n.iridescenceThicknessMapUv
            : "",
          n.sheenColorMapUv
            ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv
            : "",
          n.sheenRoughnessMapUv
            ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv
            : "",
          n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
          n.specularColorMapUv
            ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv
            : "",
          n.specularIntensityMapUv
            ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv
            : "",
          n.transmissionMapUv
            ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv
            : "",
          n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
          n.vertexTangents ? "#define USE_TANGENT" : "",
          n.vertexColors ? "#define USE_COLOR" : "",
          n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          n.vertexUv1s ? "#define USE_UV1" : "",
          n.vertexUv2s ? "#define USE_UV2" : "",
          n.vertexUv3s ? "#define USE_UV3" : "",
          n.pointsUvs ? "#define USE_POINTS_UV" : "",
          n.flatShading ? "#define FLAT_SHADED" : "",
          n.skinning ? "#define USE_SKINNING" : "",
          n.morphTargets ? "#define USE_MORPHTARGETS" : "",
          n.morphNormals && !1 === n.flatShading
            ? "#define USE_MORPHNORMALS"
            : "",
          n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
          n.morphTargetsCount > 0 && n.isWebGL2
            ? "#define MORPHTARGETS_TEXTURE"
            : "",
          n.morphTargetsCount > 0 && n.isWebGL2
            ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride
            : "",
          n.morphTargetsCount > 0 && n.isWebGL2
            ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount
            : "",
          n.doubleSided ? "#define DOUBLE_SIDED" : "",
          n.flipSided ? "#define FLIP_SIDED" : "",
          n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          n.shadowMapEnabled ? "#define " + u : "",
          n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
          n.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
          n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
            ? "#define USE_LOGDEPTHBUF_EXT"
            : "",
          "uniform mat4 modelMatrix;",
          "uniform mat4 modelViewMatrix;",
          "uniform mat4 projectionMatrix;",
          "uniform mat4 viewMatrix;",
          "uniform mat3 normalMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          "#ifdef USE_INSTANCING",
          "\tattribute mat4 instanceMatrix;",
          "#endif",
          "#ifdef USE_INSTANCING_COLOR",
          "\tattribute vec3 instanceColor;",
          "#endif",
          "attribute vec3 position;",
          "attribute vec3 normal;",
          "attribute vec2 uv;",
          "#ifdef USE_UV1",
          "\tattribute vec2 uv1;",
          "#endif",
          "#ifdef USE_UV2",
          "\tattribute vec2 uv2;",
          "#endif",
          "#ifdef USE_UV3",
          "\tattribute vec2 uv3;",
          "#endif",
          "#ifdef USE_TANGENT",
          "\tattribute vec4 tangent;",
          "#endif",
          "#if defined( USE_COLOR_ALPHA )",
          "\tattribute vec4 color;",
          "#elif defined( USE_COLOR )",
          "\tattribute vec3 color;",
          "#endif",
          "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
          "\tattribute vec3 morphTarget0;",
          "\tattribute vec3 morphTarget1;",
          "\tattribute vec3 morphTarget2;",
          "\tattribute vec3 morphTarget3;",
          "\t#ifdef USE_MORPHNORMALS",
          "\t\tattribute vec3 morphNormal0;",
          "\t\tattribute vec3 morphNormal1;",
          "\t\tattribute vec3 morphNormal2;",
          "\t\tattribute vec3 morphNormal3;",
          "\t#else",
          "\t\tattribute vec3 morphTarget4;",
          "\t\tattribute vec3 morphTarget5;",
          "\t\tattribute vec3 morphTarget6;",
          "\t\tattribute vec3 morphTarget7;",
          "\t#endif",
          "#endif",
          "#ifdef USE_SKINNING",
          "\tattribute vec4 skinIndex;",
          "\tattribute vec4 skinWeight;",
          "#endif",
          "\n",
        ]
          .filter(fa)
          .join("\n")),
        (T = [
          y,
          ba(n),
          "#define SHADER_TYPE " + n.shaderType,
          "#define SHADER_NAME " + n.shaderName,
          M,
          n.useFog && n.fog ? "#define USE_FOG" : "",
          n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
          n.map ? "#define USE_MAP" : "",
          n.matcap ? "#define USE_MATCAP" : "",
          n.envMap ? "#define USE_ENVMAP" : "",
          n.envMap ? "#define " + d : "",
          n.envMap ? "#define " + p : "",
          n.envMap ? "#define " + v : "",
          x ? "#define CUBEUV_TEXEL_WIDTH " + x.texelWidth : "",
          x ? "#define CUBEUV_TEXEL_HEIGHT " + x.texelHeight : "",
          x ? "#define CUBEUV_MAX_MIP " + x.maxMip + ".0" : "",
          n.lightMap ? "#define USE_LIGHTMAP" : "",
          n.aoMap ? "#define USE_AOMAP" : "",
          n.bumpMap ? "#define USE_BUMPMAP" : "",
          n.normalMap ? "#define USE_NORMALMAP" : "",
          n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
          n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
          n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          n.anisotropy ? "#define USE_ANISOTROPY" : "",
          n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
          n.clearcoat ? "#define USE_CLEARCOAT" : "",
          n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          n.iridescence ? "#define USE_IRIDESCENCE" : "",
          n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
          n.iridescenceThicknessMap
            ? "#define USE_IRIDESCENCE_THICKNESSMAP"
            : "",
          n.specularMap ? "#define USE_SPECULARMAP" : "",
          n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
          n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
          n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          n.metalnessMap ? "#define USE_METALNESSMAP" : "",
          n.alphaMap ? "#define USE_ALPHAMAP" : "",
          n.alphaTest ? "#define USE_ALPHATEST" : "",
          n.sheen ? "#define USE_SHEEN" : "",
          n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
          n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
          n.transmission ? "#define USE_TRANSMISSION" : "",
          n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
          n.vertexTangents ? "#define USE_TANGENT" : "",
          n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
          n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          n.vertexUv1s ? "#define USE_UV1" : "",
          n.vertexUv2s ? "#define USE_UV2" : "",
          n.vertexUv3s ? "#define USE_UV3" : "",
          n.pointsUvs ? "#define USE_POINTS_UV" : "",
          n.gradientMap ? "#define USE_GRADIENTMAP" : "",
          n.flatShading ? "#define FLAT_SHADED" : "",
          n.doubleSided ? "#define DOUBLE_SIDED" : "",
          n.flipSided ? "#define FLIP_SIDED" : "",
          n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          n.shadowMapEnabled ? "#define " + u : "",
          n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
          n.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
          n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
            ? "#define USE_LOGDEPTHBUF_EXT"
            : "",
          "uniform mat4 viewMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          n.toneMapping !== _ ? "#define TONE_MAPPING" : "",
          n.toneMapping !== _ ? Ti.tonemapping_pars_fragment : "",
          n.toneMapping !== _ ? ma("toneMapping", n.toneMapping) : "",
          n.dithering ? "#define DITHERING" : "",
          n.opaque ? "#define OPAQUE" : "",
          Ti.encodings_pars_fragment,
          pa("linearToOutputTexel", n.outputColorSpace),
          n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
          "\n",
        ]
          .filter(fa)
          .join("\n"))),
      (s = xa(s)),
      (s = ga(s, n)),
      (s = _a(s, n)),
      (o = xa(o)),
      (o = ga(o, n)),
      (o = _a(o, n)),
      (s = Sa(s)),
      (o = Sa(o)),
      n.isWebGL2 &&
        !0 !== n.isRawShaderMaterial &&
        ((R = "#version 300 es\n"),
        (w =
          [
            "precision mediump sampler2DArray;",
            "#define attribute in",
            "#define varying out",
            "#define texture2D texture",
          ].join("\n") +
          "\n" +
          w),
        (T =
          [
            "#define varying in",
            n.glslVersion === ht
              ? ""
              : "layout(location = 0) out highp vec4 pc_fragColor;",
            n.glslVersion === ht ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad",
          ].join("\n") +
          "\n" +
          T));
    const C = R + w + s,
      P = R + T + o,
      L = ha(r, r.VERTEX_SHADER, C),
      U = ha(r, r.FRAGMENT_SHADER, P);
    if (
      (r.attachShader(S, L),
      r.attachShader(S, U),
      void 0 !== n.index0AttributeName
        ? r.bindAttribLocation(S, 0, n.index0AttributeName)
        : !0 === n.morphTargets && r.bindAttribLocation(S, 0, "position"),
      r.linkProgram(S),
      t.debug.checkShaderErrors)
    ) {
      const e = r.getProgramInfoLog(S).trim(),
        n = r.getShaderInfoLog(L).trim(),
        i = r.getShaderInfoLog(U).trim();
      let a = !0,
        s = !0;
      if (!1 === r.getProgramParameter(S, r.LINK_STATUS))
        if (((a = !1), "function" == typeof t.debug.onShaderError))
          t.debug.onShaderError(r, S, L, U);
        else {
          const t = da(r, L, "vertex"),
            n = da(r, U, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              r.getError() +
              " - VALIDATE_STATUS " +
              r.getProgramParameter(S, r.VALIDATE_STATUS) +
              "\n\nProgram Info Log: " +
              e +
              "\n" +
              t +
              "\n" +
              n
          );
        }
      else
        "" !== e
          ? console.warn("THREE.WebGLProgram: Program Info Log:", e)
          : ("" !== n && "" !== i) || (s = !1);
      s &&
        (this.diagnostics = {
          runnable: a,
          programLog: e,
          vertexShader: { log: n, prefix: w },
          fragmentShader: { log: i, prefix: T },
        });
    }
    let D, I;
    return (
      r.deleteShader(L),
      r.deleteShader(U),
      (this.getUniforms = function () {
        return void 0 === D && (D = new ca(r, S)), D;
      }),
      (this.getAttributes = function () {
        return (
          void 0 === I &&
            (I = (function (t, e) {
              const n = {},
                i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
              for (let r = 0; r < i; r++) {
                const i = t.getActiveAttrib(e, r),
                  a = i.name;
                let s = 1;
                i.type === t.FLOAT_MAT2 && (s = 2),
                  i.type === t.FLOAT_MAT3 && (s = 3),
                  i.type === t.FLOAT_MAT4 && (s = 4),
                  (n[a] = {
                    type: i.type,
                    location: t.getAttribLocation(e, a),
                    locationSize: s,
                  });
              }
              return n;
            })(r, S)),
          I
        );
      }),
      (this.destroy = function () {
        i.releaseStatesOfProgram(this),
          r.deleteProgram(S),
          (this.program = void 0);
      }),
      (this.type = n.shaderType),
      (this.name = n.shaderName),
      (this.id = ua++),
      (this.cacheKey = e),
      (this.usedTimes = 1),
      (this.program = S),
      (this.vertexShader = L),
      (this.fragmentShader = U),
      this
    );
  }
  let Ta = 0;
  class Aa {
    constructor() {
      (this.shaderCache = new Map()), (this.materialCache = new Map());
    }
    update(t) {
      const e = t.vertexShader,
        n = t.fragmentShader,
        i = this._getShaderStage(e),
        r = this._getShaderStage(n),
        a = this._getShaderCacheForMaterial(t);
      return (
        !1 === a.has(i) && (a.add(i), i.usedTimes++),
        !1 === a.has(r) && (a.add(r), r.usedTimes++),
        this
      );
    }
    remove(t) {
      const e = this.materialCache.get(t);
      for (const t of e)
        t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code);
      return this.materialCache.delete(t), this;
    }
    getVertexShaderID(t) {
      return this._getShaderStage(t.vertexShader).id;
    }
    getFragmentShaderID(t) {
      return this._getShaderStage(t.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(t) {
      const e = this.materialCache;
      let n = e.get(t);
      return void 0 === n && ((n = new Set()), e.set(t, n)), n;
    }
    _getShaderStage(t) {
      const e = this.shaderCache;
      let n = e.get(t);
      return void 0 === n && ((n = new Ra(t)), e.set(t, n)), n;
    }
  }
  class Ra {
    constructor(t) {
      (this.id = Ta++), (this.code = t), (this.usedTimes = 0);
    }
  }
  function Ca(t, e, n, i, r, a, s) {
    const o = new Ve(),
      l = new Aa(),
      c = [],
      h = r.isWebGL2,
      u = r.logarithmicDepthBuffer,
      p = r.vertexTextures;
    let m = r.precision;
    const f = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite",
    };
    function g(t) {
      return 0 === t ? "uv" : `uv${t}`;
    }
    return {
      getParameters: function (a, o, c, v, x) {
        const y = v.fog,
          M = x.geometry,
          S = a.isMeshStandardMaterial ? v.environment : null,
          E = (a.isMeshStandardMaterial ? n : e).get(a.envMap || S),
          b = E && E.mapping === A ? E.image.height : null,
          w = f[a.type];
        null !== a.precision &&
          ((m = r.getMaxPrecision(a.precision)),
          m !== a.precision &&
            console.warn(
              "THREE.WebGLProgram.getParameters:",
              a.precision,
              "not supported, using",
              m,
              "instead."
            ));
        const T =
            M.morphAttributes.position ||
            M.morphAttributes.normal ||
            M.morphAttributes.color,
          R = void 0 !== T ? T.length : 0;
        let C,
          P,
          L,
          U,
          D = 0;
        if (
          (void 0 !== M.morphAttributes.position && (D = 1),
          void 0 !== M.morphAttributes.normal && (D = 2),
          void 0 !== M.morphAttributes.color && (D = 3),
          w)
        ) {
          const t = Ri[w];
          (C = t.vertexShader), (P = t.fragmentShader);
        } else
          (C = a.vertexShader),
            (P = a.fragmentShader),
            l.update(a),
            (L = l.getVertexShaderID(a)),
            (U = l.getFragmentShaderID(a));
        const I = t.getRenderTarget(),
          N = !0 === x.isInstancedMesh,
          O = !!a.map,
          F = !!a.matcap,
          z = !!E,
          B = !!a.aoMap,
          k = !!a.lightMap,
          H = !!a.bumpMap,
          V = !!a.normalMap,
          G = !!a.displacementMap,
          W = !!a.emissiveMap,
          X = !!a.metalnessMap,
          j = !!a.roughnessMap,
          Y = a.anisotropy > 0,
          q = a.clearcoat > 0,
          Z = a.iridescence > 0,
          K = a.sheen > 0,
          $ = a.transmission > 0,
          J = Y && !!a.anisotropyMap,
          Q = q && !!a.clearcoatMap,
          tt = q && !!a.clearcoatNormalMap,
          et = q && !!a.clearcoatRoughnessMap,
          nt = Z && !!a.iridescenceMap,
          it = Z && !!a.iridescenceThicknessMap,
          rt = K && !!a.sheenColorMap,
          at = K && !!a.sheenRoughnessMap,
          ot = !!a.specularMap,
          lt = !!a.specularColorMap,
          ct = !!a.specularIntensityMap,
          ht = $ && !!a.transmissionMap,
          ut = $ && !!a.thicknessMap,
          dt = !!a.gradientMap,
          pt = !!a.alphaMap,
          mt = a.alphaTest > 0,
          ft = !!a.extensions,
          gt = !!M.attributes.uv1,
          _t = !!M.attributes.uv2,
          vt = !!M.attributes.uv3;
        return {
          isWebGL2: h,
          shaderID: w,
          shaderType: a.type,
          shaderName: a.name,
          vertexShader: C,
          fragmentShader: P,
          defines: a.defines,
          customVertexShaderID: L,
          customFragmentShaderID: U,
          isRawShaderMaterial: !0 === a.isRawShaderMaterial,
          glslVersion: a.glslVersion,
          precision: m,
          instancing: N,
          instancingColor: N && null !== x.instanceColor,
          supportsVertexTextures: p,
          outputColorSpace:
            null === I
              ? t.outputColorSpace
              : !0 === I.isXRRenderTarget
              ? I.texture.colorSpace
              : st,
          map: O,
          matcap: F,
          envMap: z,
          envMapMode: z && E.mapping,
          envMapCubeUVHeight: b,
          aoMap: B,
          lightMap: k,
          bumpMap: H,
          normalMap: V,
          displacementMap: p && G,
          emissiveMap: W,
          normalMapObjectSpace: V && 1 === a.normalMapType,
          normalMapTangentSpace: V && 0 === a.normalMapType,
          metalnessMap: X,
          roughnessMap: j,
          anisotropy: Y,
          anisotropyMap: J,
          clearcoat: q,
          clearcoatMap: Q,
          clearcoatNormalMap: tt,
          clearcoatRoughnessMap: et,
          iridescence: Z,
          iridescenceMap: nt,
          iridescenceThicknessMap: it,
          sheen: K,
          sheenColorMap: rt,
          sheenRoughnessMap: at,
          specularMap: ot,
          specularColorMap: lt,
          specularIntensityMap: ct,
          transmission: $,
          transmissionMap: ht,
          thicknessMap: ut,
          gradientMap: dt,
          opaque: !1 === a.transparent && 1 === a.blending,
          alphaMap: pt,
          alphaTest: mt,
          combine: a.combine,
          mapUv: O && g(a.map.channel),
          aoMapUv: B && g(a.aoMap.channel),
          lightMapUv: k && g(a.lightMap.channel),
          bumpMapUv: H && g(a.bumpMap.channel),
          normalMapUv: V && g(a.normalMap.channel),
          displacementMapUv: G && g(a.displacementMap.channel),
          emissiveMapUv: W && g(a.emissiveMap.channel),
          metalnessMapUv: X && g(a.metalnessMap.channel),
          roughnessMapUv: j && g(a.roughnessMap.channel),
          anisotropyMapUv: J && g(a.anisotropyMap.channel),
          clearcoatMapUv: Q && g(a.clearcoatMap.channel),
          clearcoatNormalMapUv: tt && g(a.clearcoatNormalMap.channel),
          clearcoatRoughnessMapUv: et && g(a.clearcoatRoughnessMap.channel),
          iridescenceMapUv: nt && g(a.iridescenceMap.channel),
          iridescenceThicknessMapUv: it && g(a.iridescenceThicknessMap.channel),
          sheenColorMapUv: rt && g(a.sheenColorMap.channel),
          sheenRoughnessMapUv: at && g(a.sheenRoughnessMap.channel),
          specularMapUv: ot && g(a.specularMap.channel),
          specularColorMapUv: lt && g(a.specularColorMap.channel),
          specularIntensityMapUv: ct && g(a.specularIntensityMap.channel),
          transmissionMapUv: ht && g(a.transmissionMap.channel),
          thicknessMapUv: ut && g(a.thicknessMap.channel),
          alphaMapUv: pt && g(a.alphaMap.channel),
          vertexTangents: !!M.attributes.tangent && (V || Y),
          vertexColors: a.vertexColors,
          vertexAlphas:
            !0 === a.vertexColors &&
            !!M.attributes.color &&
            4 === M.attributes.color.itemSize,
          vertexUv1s: gt,
          vertexUv2s: _t,
          vertexUv3s: vt,
          pointsUvs: !0 === x.isPoints && !!M.attributes.uv && (O || pt),
          fog: !!y,
          useFog: !0 === a.fog,
          fogExp2: y && y.isFogExp2,
          flatShading: !0 === a.flatShading,
          sizeAttenuation: !0 === a.sizeAttenuation,
          logarithmicDepthBuffer: u,
          skinning: !0 === x.isSkinnedMesh,
          morphTargets: void 0 !== M.morphAttributes.position,
          morphNormals: void 0 !== M.morphAttributes.normal,
          morphColors: void 0 !== M.morphAttributes.color,
          morphTargetsCount: R,
          morphTextureStride: D,
          numDirLights: o.directional.length,
          numPointLights: o.point.length,
          numSpotLights: o.spot.length,
          numSpotLightMaps: o.spotLightMap.length,
          numRectAreaLights: o.rectArea.length,
          numHemiLights: o.hemi.length,
          numDirLightShadows: o.directionalShadowMap.length,
          numPointLightShadows: o.pointShadowMap.length,
          numSpotLightShadows: o.spotShadowMap.length,
          numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
          numClippingPlanes: s.numPlanes,
          numClipIntersection: s.numIntersection,
          dithering: a.dithering,
          shadowMapEnabled: t.shadowMap.enabled && c.length > 0,
          shadowMapType: t.shadowMap.type,
          toneMapping: a.toneMapped ? t.toneMapping : _,
          useLegacyLights: t.useLegacyLights,
          premultipliedAlpha: a.premultipliedAlpha,
          doubleSided: 2 === a.side,
          flipSided: a.side === d,
          useDepthPacking: a.depthPacking >= 0,
          depthPacking: a.depthPacking || 0,
          index0AttributeName: a.index0AttributeName,
          extensionDerivatives: ft && !0 === a.extensions.derivatives,
          extensionFragDepth: ft && !0 === a.extensions.fragDepth,
          extensionDrawBuffers: ft && !0 === a.extensions.drawBuffers,
          extensionShaderTextureLOD: ft && !0 === a.extensions.shaderTextureLOD,
          rendererExtensionFragDepth: h || i.has("EXT_frag_depth"),
          rendererExtensionDrawBuffers: h || i.has("WEBGL_draw_buffers"),
          rendererExtensionShaderTextureLod:
            h || i.has("EXT_shader_texture_lod"),
          customProgramCacheKey: a.customProgramCacheKey(),
        };
      },
      getProgramCacheKey: function (e) {
        const n = [];
        if (
          (e.shaderID
            ? n.push(e.shaderID)
            : (n.push(e.customVertexShaderID),
              n.push(e.customFragmentShaderID)),
          void 0 !== e.defines)
        )
          for (const t in e.defines) n.push(t), n.push(e.defines[t]);
        return (
          !1 === e.isRawShaderMaterial &&
            (!(function (t, e) {
              t.push(e.precision),
                t.push(e.outputColorSpace),
                t.push(e.envMapMode),
                t.push(e.envMapCubeUVHeight),
                t.push(e.mapUv),
                t.push(e.alphaMapUv),
                t.push(e.lightMapUv),
                t.push(e.aoMapUv),
                t.push(e.bumpMapUv),
                t.push(e.normalMapUv),
                t.push(e.displacementMapUv),
                t.push(e.emissiveMapUv),
                t.push(e.metalnessMapUv),
                t.push(e.roughnessMapUv),
                t.push(e.anisotropyMapUv),
                t.push(e.clearcoatMapUv),
                t.push(e.clearcoatNormalMapUv),
                t.push(e.clearcoatRoughnessMapUv),
                t.push(e.iridescenceMapUv),
                t.push(e.iridescenceThicknessMapUv),
                t.push(e.sheenColorMapUv),
                t.push(e.sheenRoughnessMapUv),
                t.push(e.specularMapUv),
                t.push(e.specularColorMapUv),
                t.push(e.specularIntensityMapUv),
                t.push(e.transmissionMapUv),
                t.push(e.thicknessMapUv),
                t.push(e.combine),
                t.push(e.fogExp2),
                t.push(e.sizeAttenuation),
                t.push(e.morphTargetsCount),
                t.push(e.morphAttributeCount),
                t.push(e.numDirLights),
                t.push(e.numPointLights),
                t.push(e.numSpotLights),
                t.push(e.numSpotLightMaps),
                t.push(e.numHemiLights),
                t.push(e.numRectAreaLights),
                t.push(e.numDirLightShadows),
                t.push(e.numPointLightShadows),
                t.push(e.numSpotLightShadows),
                t.push(e.numSpotLightShadowsWithMaps),
                t.push(e.shadowMapType),
                t.push(e.toneMapping),
                t.push(e.numClippingPlanes),
                t.push(e.numClipIntersection),
                t.push(e.depthPacking);
            })(n, e),
            (function (t, e) {
              o.disableAll(), e.isWebGL2 && o.enable(0);
              e.supportsVertexTextures && o.enable(1);
              e.instancing && o.enable(2);
              e.instancingColor && o.enable(3);
              e.matcap && o.enable(4);
              e.envMap && o.enable(5);
              e.normalMapObjectSpace && o.enable(6);
              e.normalMapTangentSpace && o.enable(7);
              e.clearcoat && o.enable(8);
              e.iridescence && o.enable(9);
              e.alphaTest && o.enable(10);
              e.vertexColors && o.enable(11);
              e.vertexAlphas && o.enable(12);
              e.vertexUv1s && o.enable(13);
              e.vertexUv2s && o.enable(14);
              e.vertexUv3s && o.enable(15);
              e.vertexTangents && o.enable(16);
              e.anisotropy && o.enable(17);
              t.push(o.mask), o.disableAll(), e.fog && o.enable(0);
              e.useFog && o.enable(1);
              e.flatShading && o.enable(2);
              e.logarithmicDepthBuffer && o.enable(3);
              e.skinning && o.enable(4);
              e.morphTargets && o.enable(5);
              e.morphNormals && o.enable(6);
              e.morphColors && o.enable(7);
              e.premultipliedAlpha && o.enable(8);
              e.shadowMapEnabled && o.enable(9);
              e.useLegacyLights && o.enable(10);
              e.doubleSided && o.enable(11);
              e.flipSided && o.enable(12);
              e.useDepthPacking && o.enable(13);
              e.dithering && o.enable(14);
              e.transmission && o.enable(15);
              e.sheen && o.enable(16);
              e.opaque && o.enable(17);
              e.pointsUvs && o.enable(18);
              t.push(o.mask);
            })(n, e),
            n.push(t.outputColorSpace)),
          n.push(e.customProgramCacheKey),
          n.join()
        );
      },
      getUniforms: function (t) {
        const e = f[t.type];
        let n;
        if (e) {
          const t = Ri[e];
          n = li.clone(t.uniforms);
        } else n = t.uniforms;
        return n;
      },
      acquireProgram: function (e, n) {
        let i;
        for (let t = 0, e = c.length; t < e; t++) {
          const e = c[t];
          if (e.cacheKey === n) {
            (i = e), ++i.usedTimes;
            break;
          }
        }
        return void 0 === i && ((i = new wa(t, n, e, a)), c.push(i)), i;
      },
      releaseProgram: function (t) {
        if (0 == --t.usedTimes) {
          const e = c.indexOf(t);
          (c[e] = c[c.length - 1]), c.pop(), t.destroy();
        }
      },
      releaseShaderCache: function (t) {
        l.remove(t);
      },
      programs: c,
      dispose: function () {
        l.dispose();
      },
    };
  }
  function Pa() {
    let t = new WeakMap();
    return {
      get: function (e) {
        let n = t.get(e);
        return void 0 === n && ((n = {}), t.set(e, n)), n;
      },
      remove: function (e) {
        t.delete(e);
      },
      update: function (e, n, i) {
        t.get(e)[n] = i;
      },
      dispose: function () {
        t = new WeakMap();
      },
    };
  }
  function La(t, e) {
    return t.groupOrder !== e.groupOrder
      ? t.groupOrder - e.groupOrder
      : t.renderOrder !== e.renderOrder
      ? t.renderOrder - e.renderOrder
      : t.material.id !== e.material.id
      ? t.material.id - e.material.id
      : t.z !== e.z
      ? t.z - e.z
      : t.id - e.id;
  }
  function Ua(t, e) {
    return t.groupOrder !== e.groupOrder
      ? t.groupOrder - e.groupOrder
      : t.renderOrder !== e.renderOrder
      ? t.renderOrder - e.renderOrder
      : t.z !== e.z
      ? e.z - t.z
      : t.id - e.id;
  }
  function Da() {
    const t = [];
    let e = 0;
    const n = [],
      i = [],
      r = [];
    function a(n, i, r, a, s, o) {
      let l = t[e];
      return (
        void 0 === l
          ? ((l = {
              id: n.id,
              object: n,
              geometry: i,
              material: r,
              groupOrder: a,
              renderOrder: n.renderOrder,
              z: s,
              group: o,
            }),
            (t[e] = l))
          : ((l.id = n.id),
            (l.object = n),
            (l.geometry = i),
            (l.material = r),
            (l.groupOrder = a),
            (l.renderOrder = n.renderOrder),
            (l.z = s),
            (l.group = o)),
        e++,
        l
      );
    }
    return {
      opaque: n,
      transmissive: i,
      transparent: r,
      init: function () {
        (e = 0), (n.length = 0), (i.length = 0), (r.length = 0);
      },
      push: function (t, e, s, o, l, c) {
        const h = a(t, e, s, o, l, c);
        s.transmission > 0
          ? i.push(h)
          : !0 === s.transparent
          ? r.push(h)
          : n.push(h);
      },
      unshift: function (t, e, s, o, l, c) {
        const h = a(t, e, s, o, l, c);
        s.transmission > 0
          ? i.unshift(h)
          : !0 === s.transparent
          ? r.unshift(h)
          : n.unshift(h);
      },
      finish: function () {
        for (let n = e, i = t.length; n < i; n++) {
          const e = t[n];
          if (null === e.id) break;
          (e.id = null),
            (e.object = null),
            (e.geometry = null),
            (e.material = null),
            (e.group = null);
        }
      },
      sort: function (t, e) {
        n.length > 1 && n.sort(t || La),
          i.length > 1 && i.sort(e || Ua),
          r.length > 1 && r.sort(e || Ua);
      },
    };
  }
  function Ia() {
    let t = new WeakMap();
    return {
      get: function (e, n) {
        const i = t.get(e);
        let r;
        return (
          void 0 === i
            ? ((r = new Da()), t.set(e, [r]))
            : n >= i.length
            ? ((r = new Da()), i.push(r))
            : (r = i[n]),
          r
        );
      },
      dispose: function () {
        t = new WeakMap();
      },
    };
  }
  function Na() {
    const t = {};
    return {
      get: function (e) {
        if (void 0 !== t[e.id]) return t[e.id];
        let n;
        switch (e.type) {
          case "DirectionalLight":
            n = { direction: new ee(), color: new Sn() };
            break;
          case "SpotLight":
            n = {
              position: new ee(),
              direction: new ee(),
              color: new Sn(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
            };
            break;
          case "PointLight":
            n = { position: new ee(), color: new Sn(), distance: 0, decay: 0 };
            break;
          case "HemisphereLight":
            n = {
              direction: new ee(),
              skyColor: new Sn(),
              groundColor: new Sn(),
            };
            break;
          case "RectAreaLight":
            n = {
              color: new Sn(),
              position: new ee(),
              halfWidth: new ee(),
              halfHeight: new ee(),
            };
        }
        return (t[e.id] = n), n;
      },
    };
  }
  let Oa = 0;
  function Fa(t, e) {
    return (
      (e.castShadow ? 2 : 0) -
      (t.castShadow ? 2 : 0) +
      (e.map ? 1 : 0) -
      (t.map ? 1 : 0)
    );
  }
  function za(t, e) {
    const n = new Na(),
      i = (function () {
        const t = {};
        return {
          get: function (e) {
            if (void 0 !== t[e.id]) return t[e.id];
            let n;
            switch (e.type) {
              case "DirectionalLight":
              case "SpotLight":
                n = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new Ct(),
                };
                break;
              case "PointLight":
                n = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new Ct(),
                  shadowCameraNear: 1,
                  shadowCameraFar: 1e3,
                };
            }
            return (t[e.id] = n), n;
          },
        };
      })(),
      r = {
        version: 0,
        hash: {
          directionalLength: -1,
          pointLength: -1,
          spotLength: -1,
          rectAreaLength: -1,
          hemiLength: -1,
          numDirectionalShadows: -1,
          numPointShadows: -1,
          numSpotShadows: -1,
          numSpotMaps: -1,
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
      };
    for (let t = 0; t < 9; t++) r.probe.push(new ee());
    const a = new ee(),
      s = new Le(),
      o = new Le();
    return {
      setup: function (a, s) {
        let o = 0,
          l = 0,
          c = 0;
        for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
        let h = 0,
          u = 0,
          d = 0,
          p = 0,
          m = 0,
          f = 0,
          g = 0,
          _ = 0,
          v = 0,
          x = 0;
        a.sort(Fa);
        const y = !0 === s ? Math.PI : 1;
        for (let t = 0, e = a.length; t < e; t++) {
          const e = a[t],
            s = e.color,
            M = e.intensity,
            S = e.distance,
            E = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
          if (e.isAmbientLight)
            (o += s.r * M * y), (l += s.g * M * y), (c += s.b * M * y);
          else if (e.isLightProbe)
            for (let t = 0; t < 9; t++)
              r.probe[t].addScaledVector(e.sh.coefficients[t], M);
          else if (e.isDirectionalLight) {
            const t = n.get(e);
            if (
              (t.color.copy(e.color).multiplyScalar(e.intensity * y),
              e.castShadow)
            ) {
              const t = e.shadow,
                n = i.get(e);
              (n.shadowBias = t.bias),
                (n.shadowNormalBias = t.normalBias),
                (n.shadowRadius = t.radius),
                (n.shadowMapSize = t.mapSize),
                (r.directionalShadow[h] = n),
                (r.directionalShadowMap[h] = E),
                (r.directionalShadowMatrix[h] = e.shadow.matrix),
                f++;
            }
            (r.directional[h] = t), h++;
          } else if (e.isSpotLight) {
            const t = n.get(e);
            t.position.setFromMatrixPosition(e.matrixWorld),
              t.color.copy(s).multiplyScalar(M * y),
              (t.distance = S),
              (t.coneCos = Math.cos(e.angle)),
              (t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra))),
              (t.decay = e.decay),
              (r.spot[d] = t);
            const a = e.shadow;
            if (
              (e.map &&
                ((r.spotLightMap[v] = e.map),
                v++,
                a.updateMatrices(e),
                e.castShadow && x++),
              (r.spotLightMatrix[d] = a.matrix),
              e.castShadow)
            ) {
              const t = i.get(e);
              (t.shadowBias = a.bias),
                (t.shadowNormalBias = a.normalBias),
                (t.shadowRadius = a.radius),
                (t.shadowMapSize = a.mapSize),
                (r.spotShadow[d] = t),
                (r.spotShadowMap[d] = E),
                _++;
            }
            d++;
          } else if (e.isRectAreaLight) {
            const t = n.get(e);
            t.color.copy(s).multiplyScalar(M),
              t.halfWidth.set(0.5 * e.width, 0, 0),
              t.halfHeight.set(0, 0.5 * e.height, 0),
              (r.rectArea[p] = t),
              p++;
          } else if (e.isPointLight) {
            const t = n.get(e);
            if (
              (t.color.copy(e.color).multiplyScalar(e.intensity * y),
              (t.distance = e.distance),
              (t.decay = e.decay),
              e.castShadow)
            ) {
              const t = e.shadow,
                n = i.get(e);
              (n.shadowBias = t.bias),
                (n.shadowNormalBias = t.normalBias),
                (n.shadowRadius = t.radius),
                (n.shadowMapSize = t.mapSize),
                (n.shadowCameraNear = t.camera.near),
                (n.shadowCameraFar = t.camera.far),
                (r.pointShadow[u] = n),
                (r.pointShadowMap[u] = E),
                (r.pointShadowMatrix[u] = e.shadow.matrix),
                g++;
            }
            (r.point[u] = t), u++;
          } else if (e.isHemisphereLight) {
            const t = n.get(e);
            t.skyColor.copy(e.color).multiplyScalar(M * y),
              t.groundColor.copy(e.groundColor).multiplyScalar(M * y),
              (r.hemi[m] = t),
              m++;
          }
        }
        p > 0 &&
          (e.isWebGL2 || !0 === t.has("OES_texture_float_linear")
            ? ((r.rectAreaLTC1 = Ai.LTC_FLOAT_1),
              (r.rectAreaLTC2 = Ai.LTC_FLOAT_2))
            : !0 === t.has("OES_texture_half_float_linear")
            ? ((r.rectAreaLTC1 = Ai.LTC_HALF_1),
              (r.rectAreaLTC2 = Ai.LTC_HALF_2))
            : console.error(
                "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
              )),
          (r.ambient[0] = o),
          (r.ambient[1] = l),
          (r.ambient[2] = c);
        const M = r.hash;
        (M.directionalLength === h &&
          M.pointLength === u &&
          M.spotLength === d &&
          M.rectAreaLength === p &&
          M.hemiLength === m &&
          M.numDirectionalShadows === f &&
          M.numPointShadows === g &&
          M.numSpotShadows === _ &&
          M.numSpotMaps === v) ||
          ((r.directional.length = h),
          (r.spot.length = d),
          (r.rectArea.length = p),
          (r.point.length = u),
          (r.hemi.length = m),
          (r.directionalShadow.length = f),
          (r.directionalShadowMap.length = f),
          (r.pointShadow.length = g),
          (r.pointShadowMap.length = g),
          (r.spotShadow.length = _),
          (r.spotShadowMap.length = _),
          (r.directionalShadowMatrix.length = f),
          (r.pointShadowMatrix.length = g),
          (r.spotLightMatrix.length = _ + v - x),
          (r.spotLightMap.length = v),
          (r.numSpotLightShadowsWithMaps = x),
          (M.directionalLength = h),
          (M.pointLength = u),
          (M.spotLength = d),
          (M.rectAreaLength = p),
          (M.hemiLength = m),
          (M.numDirectionalShadows = f),
          (M.numPointShadows = g),
          (M.numSpotShadows = _),
          (M.numSpotMaps = v),
          (r.version = Oa++));
      },
      setupView: function (t, e) {
        let n = 0,
          i = 0,
          l = 0,
          c = 0,
          h = 0;
        const u = e.matrixWorldInverse;
        for (let e = 0, d = t.length; e < d; e++) {
          const d = t[e];
          if (d.isDirectionalLight) {
            const t = r.directional[n];
            t.direction.setFromMatrixPosition(d.matrixWorld),
              a.setFromMatrixPosition(d.target.matrixWorld),
              t.direction.sub(a),
              t.direction.transformDirection(u),
              n++;
          } else if (d.isSpotLight) {
            const t = r.spot[l];
            t.position.setFromMatrixPosition(d.matrixWorld),
              t.position.applyMatrix4(u),
              t.direction.setFromMatrixPosition(d.matrixWorld),
              a.setFromMatrixPosition(d.target.matrixWorld),
              t.direction.sub(a),
              t.direction.transformDirection(u),
              l++;
          } else if (d.isRectAreaLight) {
            const t = r.rectArea[c];
            t.position.setFromMatrixPosition(d.matrixWorld),
              t.position.applyMatrix4(u),
              o.identity(),
              s.copy(d.matrixWorld),
              s.premultiply(u),
              o.extractRotation(s),
              t.halfWidth.set(0.5 * d.width, 0, 0),
              t.halfHeight.set(0, 0.5 * d.height, 0),
              t.halfWidth.applyMatrix4(o),
              t.halfHeight.applyMatrix4(o),
              c++;
          } else if (d.isPointLight) {
            const t = r.point[i];
            t.position.setFromMatrixPosition(d.matrixWorld),
              t.position.applyMatrix4(u),
              i++;
          } else if (d.isHemisphereLight) {
            const t = r.hemi[h];
            t.direction.setFromMatrixPosition(d.matrixWorld),
              t.direction.transformDirection(u),
              h++;
          }
        }
      },
      state: r,
    };
  }
  function Ba(t, e) {
    const n = new za(t, e),
      i = [],
      r = [];
    return {
      init: function () {
        (i.length = 0), (r.length = 0);
      },
      state: { lightsArray: i, shadowsArray: r, lights: n },
      setupLights: function (t) {
        n.setup(i, t);
      },
      setupLightsView: function (t) {
        n.setupView(i, t);
      },
      pushLight: function (t) {
        i.push(t);
      },
      pushShadow: function (t) {
        r.push(t);
      },
    };
  }
  function ka(t, e) {
    let n = new WeakMap();
    return {
      get: function (i, r = 0) {
        const a = n.get(i);
        let s;
        return (
          void 0 === a
            ? ((s = new Ba(t, e)), n.set(i, [s]))
            : r >= a.length
            ? ((s = new Ba(t, e)), a.push(s))
            : (s = a[r]),
          s
        );
      },
      dispose: function () {
        n = new WeakMap();
      },
    };
  }
  class Ha extends _n {
    constructor(t) {
      super(),
        (this.isMeshDepthMaterial = !0),
        (this.type = "MeshDepthMaterial"),
        (this.depthPacking = 3200),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.depthPacking = t.depthPacking),
        (this.map = t.map),
        (this.alphaMap = t.alphaMap),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        this
      );
    }
  }
  class Va extends _n {
    constructor(t) {
      super(),
        (this.isMeshDistanceMaterial = !0),
        (this.type = "MeshDistanceMaterial"),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.map = t.map),
        (this.alphaMap = t.alphaMap),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        this
      );
    }
  }
  function Ga(t, e, n) {
    let i = new Si();
    const r = new Ct(),
      a = new Ct(),
      s = new Kt(),
      o = new Ha({ depthPacking: 3201 }),
      c = new Va(),
      p = {},
      m = n.maxTextureSize,
      f = { [u]: d, [d]: u, 2: 2 },
      g = new ci({
        defines: { VSM_SAMPLES: 8 },
        uniforms: {
          shadow_pass: { value: null },
          resolution: { value: new Ct() },
          radius: { value: 4 },
        },
        vertexShader:
          "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
        fragmentShader:
          "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
      }),
      _ = g.clone();
    _.defines.HORIZONTAL_PASS = 1;
    const v = new zn();
    v.setAttribute(
      "position",
      new An(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
    );
    const x = new ni(v, g),
      y = this;
    (this.enabled = !1),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this.type = l);
    let M = this.type;
    function S(n, i) {
      const a = e.update(x);
      g.defines.VSM_SAMPLES !== n.blurSamples &&
        ((g.defines.VSM_SAMPLES = n.blurSamples),
        (_.defines.VSM_SAMPLES = n.blurSamples),
        (g.needsUpdate = !0),
        (_.needsUpdate = !0)),
        null === n.mapPass && (n.mapPass = new $t(r.x, r.y)),
        (g.uniforms.shadow_pass.value = n.map.texture),
        (g.uniforms.resolution.value = n.mapSize),
        (g.uniforms.radius.value = n.radius),
        t.setRenderTarget(n.mapPass),
        t.clear(),
        t.renderBufferDirect(i, null, a, g, x, null),
        (_.uniforms.shadow_pass.value = n.mapPass.texture),
        (_.uniforms.resolution.value = n.mapSize),
        (_.uniforms.radius.value = n.radius),
        t.setRenderTarget(n.map),
        t.clear(),
        t.renderBufferDirect(i, null, a, _, x, null);
    }
    function E(e, n, i, r) {
      let a = null;
      const s =
        !0 === i.isPointLight
          ? e.customDistanceMaterial
          : e.customDepthMaterial;
      if (void 0 !== s) a = s;
      else if (
        ((a = !0 === i.isPointLight ? c : o),
        (t.localClippingEnabled &&
          !0 === n.clipShadows &&
          Array.isArray(n.clippingPlanes) &&
          0 !== n.clippingPlanes.length) ||
          (n.displacementMap && 0 !== n.displacementScale) ||
          (n.alphaMap && n.alphaTest > 0) ||
          (n.map && n.alphaTest > 0))
      ) {
        const t = a.uuid,
          e = n.uuid;
        let i = p[t];
        void 0 === i && ((i = {}), (p[t] = i));
        let r = i[e];
        void 0 === r && ((r = a.clone()), (i[e] = r)), (a = r);
      }
      if (
        ((a.visible = n.visible),
        (a.wireframe = n.wireframe),
        (a.side =
          r === h
            ? null !== n.shadowSide
              ? n.shadowSide
              : n.side
            : null !== n.shadowSide
            ? n.shadowSide
            : f[n.side]),
        (a.alphaMap = n.alphaMap),
        (a.alphaTest = n.alphaTest),
        (a.map = n.map),
        (a.clipShadows = n.clipShadows),
        (a.clippingPlanes = n.clippingPlanes),
        (a.clipIntersection = n.clipIntersection),
        (a.displacementMap = n.displacementMap),
        (a.displacementScale = n.displacementScale),
        (a.displacementBias = n.displacementBias),
        (a.wireframeLinewidth = n.wireframeLinewidth),
        (a.linewidth = n.linewidth),
        !0 === i.isPointLight && !0 === a.isMeshDistanceMaterial)
      ) {
        t.properties.get(a).light = i;
      }
      return a;
    }
    function b(n, r, a, s, o) {
      if (!1 === n.visible) return;
      if (
        n.layers.test(r.layers) &&
        (n.isMesh || n.isLine || n.isPoints) &&
        (n.castShadow || (n.receiveShadow && o === h)) &&
        (!n.frustumCulled || i.intersectsObject(n))
      ) {
        n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
        const i = e.update(n),
          r = n.material;
        if (Array.isArray(r)) {
          const e = i.groups;
          for (let l = 0, c = e.length; l < c; l++) {
            const c = e[l],
              h = r[c.materialIndex];
            if (h && h.visible) {
              const e = E(n, h, s, o);
              t.renderBufferDirect(a, null, i, e, n, c);
            }
          }
        } else if (r.visible) {
          const e = E(n, r, s, o);
          t.renderBufferDirect(a, null, i, e, n, null);
        }
      }
      const l = n.children;
      for (let t = 0, e = l.length; t < e; t++) b(l[t], r, a, s, o);
    }
    this.render = function (e, n, o) {
      if (!1 === y.enabled) return;
      if (!1 === y.autoUpdate && !1 === y.needsUpdate) return;
      if (0 === e.length) return;
      const l = t.getRenderTarget(),
        c = t.getActiveCubeFace(),
        u = t.getActiveMipmapLevel(),
        d = t.state;
      d.setBlending(0),
        d.buffers.color.setClear(1, 1, 1, 1),
        d.buffers.depth.setTest(!0),
        d.setScissorTest(!1);
      const p = M !== h && this.type === h,
        f = M === h && this.type !== h;
      for (let l = 0, c = e.length; l < c; l++) {
        const c = e[l],
          u = c.shadow;
        if (void 0 === u) {
          console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
          continue;
        }
        if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
        r.copy(u.mapSize);
        const g = u.getFrameExtents();
        if (
          (r.multiply(g),
          a.copy(u.mapSize),
          (r.x > m || r.y > m) &&
            (r.x > m &&
              ((a.x = Math.floor(m / g.x)),
              (r.x = a.x * g.x),
              (u.mapSize.x = a.x)),
            r.y > m &&
              ((a.y = Math.floor(m / g.y)),
              (r.y = a.y * g.y),
              (u.mapSize.y = a.y))),
          null === u.map || !0 === p || !0 === f)
        ) {
          const t = this.type !== h ? { minFilter: L, magFilter: L } : {};
          null !== u.map && u.map.dispose(),
            (u.map = new $t(r.x, r.y, t)),
            (u.map.texture.name = c.name + ".shadowMap"),
            u.camera.updateProjectionMatrix();
        }
        t.setRenderTarget(u.map), t.clear();
        const _ = u.getViewportCount();
        for (let t = 0; t < _; t++) {
          const e = u.getViewport(t);
          s.set(a.x * e.x, a.y * e.y, a.x * e.z, a.y * e.w),
            d.viewport(s),
            u.updateMatrices(c, t),
            (i = u.getFrustum()),
            b(n, o, u.camera, c, this.type);
        }
        !0 !== u.isPointLightShadow && this.type === h && S(u, o),
          (u.needsUpdate = !1);
      }
      (M = this.type), (y.needsUpdate = !1), t.setRenderTarget(l, c, u);
    };
  }
  function Wa(t, e, n) {
    const i = n.isWebGL2;
    const r = new (function () {
        let e = !1;
        const n = new Kt();
        let i = null;
        const r = new Kt(0, 0, 0, 0);
        return {
          setMask: function (n) {
            i === n || e || (t.colorMask(n, n, n, n), (i = n));
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e, i, a, s, o) {
            !0 === o && ((e *= s), (i *= s), (a *= s)),
              n.set(e, i, a, s),
              !1 === r.equals(n) && (t.clearColor(e, i, a, s), r.copy(n));
          },
          reset: function () {
            (e = !1), (i = null), r.set(-1, 0, 0, 0);
          },
        };
      })(),
      a = new (function () {
        let e = !1,
          n = null,
          i = null,
          r = null;
        return {
          setTest: function (e) {
            e ? V(t.DEPTH_TEST) : G(t.DEPTH_TEST);
          },
          setMask: function (i) {
            n === i || e || (t.depthMask(i), (n = i));
          },
          setFunc: function (e) {
            if (i !== e) {
              switch (e) {
                case 0:
                  t.depthFunc(t.NEVER);
                  break;
                case 1:
                  t.depthFunc(t.ALWAYS);
                  break;
                case 2:
                  t.depthFunc(t.LESS);
                  break;
                case 3:
                default:
                  t.depthFunc(t.LEQUAL);
                  break;
                case 4:
                  t.depthFunc(t.EQUAL);
                  break;
                case 5:
                  t.depthFunc(t.GEQUAL);
                  break;
                case 6:
                  t.depthFunc(t.GREATER);
                  break;
                case 7:
                  t.depthFunc(t.NOTEQUAL);
              }
              i = e;
            }
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e) {
            r !== e && (t.clearDepth(e), (r = e));
          },
          reset: function () {
            (e = !1), (n = null), (i = null), (r = null);
          },
        };
      })(),
      s = new (function () {
        let e = !1,
          n = null,
          i = null,
          r = null,
          a = null,
          s = null,
          o = null,
          l = null,
          c = null;
        return {
          setTest: function (n) {
            e || (n ? V(t.STENCIL_TEST) : G(t.STENCIL_TEST));
          },
          setMask: function (i) {
            n === i || e || (t.stencilMask(i), (n = i));
          },
          setFunc: function (e, n, s) {
            (i === e && r === n && a === s) ||
              (t.stencilFunc(e, n, s), (i = e), (r = n), (a = s));
          },
          setOp: function (e, n, i) {
            (s === e && o === n && l === i) ||
              (t.stencilOp(e, n, i), (s = e), (o = n), (l = i));
          },
          setLocked: function (t) {
            e = t;
          },
          setClear: function (e) {
            c !== e && (t.clearStencil(e), (c = e));
          },
          reset: function () {
            (e = !1),
              (n = null),
              (i = null),
              (r = null),
              (a = null),
              (s = null),
              (o = null),
              (l = null),
              (c = null);
          },
        };
      })(),
      o = new WeakMap(),
      l = new WeakMap();
    let c = {},
      h = {},
      u = new WeakMap(),
      m = [],
      f = null,
      g = !1,
      _ = null,
      v = null,
      x = null,
      y = null,
      M = null,
      S = null,
      E = null,
      b = !1,
      w = null,
      T = null,
      A = null,
      R = null,
      C = null;
    const P = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let L = !1,
      U = 0;
    const D = t.getParameter(t.VERSION);
    -1 !== D.indexOf("WebGL")
      ? ((U = parseFloat(/^WebGL (\d)/.exec(D)[1])), (L = U >= 1))
      : -1 !== D.indexOf("OpenGL ES") &&
        ((U = parseFloat(/^OpenGL ES (\d)/.exec(D)[1])), (L = U >= 2));
    let I = null,
      N = {};
    const O = t.getParameter(t.SCISSOR_BOX),
      F = t.getParameter(t.VIEWPORT),
      z = new Kt().fromArray(O),
      B = new Kt().fromArray(F);
    function k(e, n, r, a) {
      const s = new Uint8Array(4),
        o = t.createTexture();
      t.bindTexture(e, o),
        t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST),
        t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
      for (let o = 0; o < r; o++)
        !i || (e !== t.TEXTURE_3D && e !== t.TEXTURE_2D_ARRAY)
          ? t.texImage2D(n + o, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, s)
          : t.texImage3D(n, 0, t.RGBA, 1, 1, a, 0, t.RGBA, t.UNSIGNED_BYTE, s);
      return o;
    }
    const H = {};
    function V(e) {
      !0 !== c[e] && (t.enable(e), (c[e] = !0));
    }
    function G(e) {
      !1 !== c[e] && (t.disable(e), (c[e] = !1));
    }
    (H[t.TEXTURE_2D] = k(t.TEXTURE_2D, t.TEXTURE_2D, 1)),
      (H[t.TEXTURE_CUBE_MAP] = k(
        t.TEXTURE_CUBE_MAP,
        t.TEXTURE_CUBE_MAP_POSITIVE_X,
        6
      )),
      i &&
        ((H[t.TEXTURE_2D_ARRAY] = k(
          t.TEXTURE_2D_ARRAY,
          t.TEXTURE_2D_ARRAY,
          1,
          1
        )),
        (H[t.TEXTURE_3D] = k(t.TEXTURE_3D, t.TEXTURE_3D, 1, 1))),
      r.setClear(0, 0, 0, 1),
      a.setClear(1),
      s.setClear(0),
      V(t.DEPTH_TEST),
      a.setFunc(3),
      Y(!1),
      q(1),
      V(t.CULL_FACE),
      j(0);
    const W = {
      [p]: t.FUNC_ADD,
      101: t.FUNC_SUBTRACT,
      102: t.FUNC_REVERSE_SUBTRACT,
    };
    if (i) (W[103] = t.MIN), (W[104] = t.MAX);
    else {
      const t = e.get("EXT_blend_minmax");
      null !== t && ((W[103] = t.MIN_EXT), (W[104] = t.MAX_EXT));
    }
    const X = {
      200: t.ZERO,
      201: t.ONE,
      202: t.SRC_COLOR,
      204: t.SRC_ALPHA,
      210: t.SRC_ALPHA_SATURATE,
      208: t.DST_COLOR,
      206: t.DST_ALPHA,
      203: t.ONE_MINUS_SRC_COLOR,
      205: t.ONE_MINUS_SRC_ALPHA,
      209: t.ONE_MINUS_DST_COLOR,
      207: t.ONE_MINUS_DST_ALPHA,
    };
    function j(e, n, i, r, a, s, o, l) {
      if (0 !== e) {
        if ((!1 === g && (V(t.BLEND), (g = !0)), 5 === e))
          (a = a || n),
            (s = s || i),
            (o = o || r),
            (n === v && a === M) ||
              (t.blendEquationSeparate(W[n], W[a]), (v = n), (M = a)),
            (i === x && r === y && s === S && o === E) ||
              (t.blendFuncSeparate(X[i], X[r], X[s], X[o]),
              (x = i),
              (y = r),
              (S = s),
              (E = o)),
            (_ = e),
            (b = !1);
        else if (e !== _ || l !== b) {
          if (
            ((v === p && M === p) ||
              (t.blendEquation(t.FUNC_ADD), (v = p), (M = p)),
            l)
          )
            switch (e) {
              case 1:
                t.blendFuncSeparate(
                  t.ONE,
                  t.ONE_MINUS_SRC_ALPHA,
                  t.ONE,
                  t.ONE_MINUS_SRC_ALPHA
                );
                break;
              case 2:
                t.blendFunc(t.ONE, t.ONE);
                break;
              case 3:
                t.blendFuncSeparate(
                  t.ZERO,
                  t.ONE_MINUS_SRC_COLOR,
                  t.ZERO,
                  t.ONE
                );
                break;
              case 4:
                t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", e);
            }
          else
            switch (e) {
              case 1:
                t.blendFuncSeparate(
                  t.SRC_ALPHA,
                  t.ONE_MINUS_SRC_ALPHA,
                  t.ONE,
                  t.ONE_MINUS_SRC_ALPHA
                );
                break;
              case 2:
                t.blendFunc(t.SRC_ALPHA, t.ONE);
                break;
              case 3:
                t.blendFuncSeparate(
                  t.ZERO,
                  t.ONE_MINUS_SRC_COLOR,
                  t.ZERO,
                  t.ONE
                );
                break;
              case 4:
                t.blendFunc(t.ZERO, t.SRC_COLOR);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", e);
            }
          (x = null), (y = null), (S = null), (E = null), (_ = e), (b = l);
        }
      } else !0 === g && (G(t.BLEND), (g = !1));
    }
    function Y(e) {
      w !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), (w = e));
    }
    function q(e) {
      0 !== e
        ? (V(t.CULL_FACE),
          e !== T &&
            (1 === e
              ? t.cullFace(t.BACK)
              : 2 === e
              ? t.cullFace(t.FRONT)
              : t.cullFace(t.FRONT_AND_BACK)))
        : G(t.CULL_FACE),
        (T = e);
    }
    function Z(e, n, i) {
      e
        ? (V(t.POLYGON_OFFSET_FILL),
          (R === n && C === i) || (t.polygonOffset(n, i), (R = n), (C = i)))
        : G(t.POLYGON_OFFSET_FILL);
    }
    return {
      buffers: { color: r, depth: a, stencil: s },
      enable: V,
      disable: G,
      bindFramebuffer: function (e, n) {
        return (
          h[e] !== n &&
          (t.bindFramebuffer(e, n),
          (h[e] = n),
          i &&
            (e === t.DRAW_FRAMEBUFFER && (h[t.FRAMEBUFFER] = n),
            e === t.FRAMEBUFFER && (h[t.DRAW_FRAMEBUFFER] = n)),
          !0)
        );
      },
      drawBuffers: function (i, r) {
        let a = m,
          s = !1;
        if (i)
          if (
            ((a = u.get(r)),
            void 0 === a && ((a = []), u.set(r, a)),
            i.isWebGLMultipleRenderTargets)
          ) {
            const e = i.texture;
            if (a.length !== e.length || a[0] !== t.COLOR_ATTACHMENT0) {
              for (let n = 0, i = e.length; n < i; n++)
                a[n] = t.COLOR_ATTACHMENT0 + n;
              (a.length = e.length), (s = !0);
            }
          } else
            a[0] !== t.COLOR_ATTACHMENT0 &&
              ((a[0] = t.COLOR_ATTACHMENT0), (s = !0));
        else a[0] !== t.BACK && ((a[0] = t.BACK), (s = !0));
        s &&
          (n.isWebGL2
            ? t.drawBuffers(a)
            : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(a));
      },
      useProgram: function (e) {
        return f !== e && (t.useProgram(e), (f = e), !0);
      },
      setBlending: j,
      setMaterial: function (e, n) {
        2 === e.side ? G(t.CULL_FACE) : V(t.CULL_FACE);
        let i = e.side === d;
        n && (i = !i),
          Y(i),
          1 === e.blending && !1 === e.transparent
            ? j(0)
            : j(
                e.blending,
                e.blendEquation,
                e.blendSrc,
                e.blendDst,
                e.blendEquationAlpha,
                e.blendSrcAlpha,
                e.blendDstAlpha,
                e.premultipliedAlpha
              ),
          a.setFunc(e.depthFunc),
          a.setTest(e.depthTest),
          a.setMask(e.depthWrite),
          r.setMask(e.colorWrite);
        const o = e.stencilWrite;
        s.setTest(o),
          o &&
            (s.setMask(e.stencilWriteMask),
            s.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
            s.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
          Z(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
          !0 === e.alphaToCoverage
            ? V(t.SAMPLE_ALPHA_TO_COVERAGE)
            : G(t.SAMPLE_ALPHA_TO_COVERAGE);
      },
      setFlipSided: Y,
      setCullFace: q,
      setLineWidth: function (e) {
        e !== A && (L && t.lineWidth(e), (A = e));
      },
      setPolygonOffset: Z,
      setScissorTest: function (e) {
        e ? V(t.SCISSOR_TEST) : G(t.SCISSOR_TEST);
      },
      activeTexture: function (e) {
        void 0 === e && (e = t.TEXTURE0 + P - 1),
          I !== e && (t.activeTexture(e), (I = e));
      },
      bindTexture: function (e, n, i) {
        void 0 === i && (i = null === I ? t.TEXTURE0 + P - 1 : I);
        let r = N[i];
        void 0 === r && ((r = { type: void 0, texture: void 0 }), (N[i] = r)),
          (r.type === e && r.texture === n) ||
            (I !== i && (t.activeTexture(i), (I = i)),
            t.bindTexture(e, n || H[e]),
            (r.type = e),
            (r.texture = n));
      },
      unbindTexture: function () {
        const e = N[I];
        void 0 !== e &&
          void 0 !== e.type &&
          (t.bindTexture(e.type, null),
          (e.type = void 0),
          (e.texture = void 0));
      },
      compressedTexImage2D: function () {
        try {
          t.compressedTexImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      compressedTexImage3D: function () {
        try {
          t.compressedTexImage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage2D: function () {
        try {
          t.texImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage3D: function () {
        try {
          t.texImage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      updateUBOMapping: function (e, n) {
        let i = l.get(n);
        void 0 === i && ((i = new WeakMap()), l.set(n, i));
        let r = i.get(e);
        void 0 === r && ((r = t.getUniformBlockIndex(n, e.name)), i.set(e, r));
      },
      uniformBlockBinding: function (e, n) {
        const i = l.get(n).get(e);
        o.get(n) !== i &&
          (t.uniformBlockBinding(n, i, e.__bindingPointIndex), o.set(n, i));
      },
      texStorage2D: function () {
        try {
          t.texStorage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texStorage3D: function () {
        try {
          t.texStorage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texSubImage2D: function () {
        try {
          t.texSubImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texSubImage3D: function () {
        try {
          t.texSubImage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      compressedTexSubImage2D: function () {
        try {
          t.compressedTexSubImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      compressedTexSubImage3D: function () {
        try {
          t.compressedTexSubImage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      scissor: function (e) {
        !1 === z.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), z.copy(e));
      },
      viewport: function (e) {
        !1 === B.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), B.copy(e));
      },
      reset: function () {
        t.disable(t.BLEND),
          t.disable(t.CULL_FACE),
          t.disable(t.DEPTH_TEST),
          t.disable(t.POLYGON_OFFSET_FILL),
          t.disable(t.SCISSOR_TEST),
          t.disable(t.STENCIL_TEST),
          t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),
          t.blendEquation(t.FUNC_ADD),
          t.blendFunc(t.ONE, t.ZERO),
          t.blendFuncSeparate(t.ONE, t.ZERO, t.ONE, t.ZERO),
          t.colorMask(!0, !0, !0, !0),
          t.clearColor(0, 0, 0, 0),
          t.depthMask(!0),
          t.depthFunc(t.LESS),
          t.clearDepth(1),
          t.stencilMask(4294967295),
          t.stencilFunc(t.ALWAYS, 0, 4294967295),
          t.stencilOp(t.KEEP, t.KEEP, t.KEEP),
          t.clearStencil(0),
          t.cullFace(t.BACK),
          t.frontFace(t.CCW),
          t.polygonOffset(0, 0),
          t.activeTexture(t.TEXTURE0),
          t.bindFramebuffer(t.FRAMEBUFFER, null),
          !0 === i &&
            (t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
            t.bindFramebuffer(t.READ_FRAMEBUFFER, null)),
          t.useProgram(null),
          t.lineWidth(1),
          t.scissor(0, 0, t.canvas.width, t.canvas.height),
          t.viewport(0, 0, t.canvas.width, t.canvas.height),
          (c = {}),
          (I = null),
          (N = {}),
          (h = {}),
          (u = new WeakMap()),
          (m = []),
          (f = null),
          (g = !1),
          (_ = null),
          (v = null),
          (x = null),
          (y = null),
          (M = null),
          (S = null),
          (E = null),
          (b = !1),
          (w = null),
          (T = null),
          (A = null),
          (R = null),
          (C = null),
          z.set(0, 0, t.canvas.width, t.canvas.height),
          B.set(0, 0, t.canvas.width, t.canvas.height),
          r.reset(),
          a.reset(),
          s.reset();
      },
    };
  }
  function Xa(t, e, n, i, r, a, s) {
    const o = r.isWebGL2,
      l = r.maxTextures,
      c = r.maxCubemapSize,
      h = r.maxTextureSize,
      u = r.maxSamples,
      d = e.has("WEBGL_multisampled_render_to_texture")
        ? e.get("WEBGL_multisampled_render_to_texture")
        : null,
      p =
        "undefined" != typeof navigator &&
        /OculusBrowser/g.test(navigator.userAgent),
      m = new WeakMap();
    let f;
    const g = new WeakMap();
    let _ = !1;
    try {
      _ =
        "undefined" != typeof OffscreenCanvas &&
        null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (t) {}
    function v(t, e) {
      return _ ? new OffscreenCanvas(t, e) : Dt("canvas");
    }
    function x(t, e, n, i) {
      let r = 1;
      if (
        ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)),
        r < 1 || !0 === e)
      ) {
        if (
          ("undefined" != typeof HTMLImageElement &&
            t instanceof HTMLImageElement) ||
          ("undefined" != typeof HTMLCanvasElement &&
            t instanceof HTMLCanvasElement) ||
          ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
        ) {
          const i = e ? wt : Math.floor,
            a = i(r * t.width),
            s = i(r * t.height);
          void 0 === f && (f = v(a, s));
          const o = n ? v(a, s) : f;
          (o.width = a), (o.height = s);
          return (
            o.getContext("2d").drawImage(t, 0, 0, a, s),
            console.warn(
              "THREE.WebGLRenderer: Texture has been resized from (" +
                t.width +
                "x" +
                t.height +
                ") to (" +
                a +
                "x" +
                s +
                ")."
            ),
            o
          );
        }
        return (
          "data" in t &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                t.width +
                "x" +
                t.height +
                ")."
            ),
          t
        );
      }
      return t;
    }
    function y(t) {
      return Et(t.width) && Et(t.height);
    }
    function M(t, e) {
      return t.generateMipmaps && e && t.minFilter !== L && t.minFilter !== I;
    }
    function S(e) {
      t.generateMipmap(e);
    }
    function E(n, i, r, a, s = !1) {
      if (!1 === o) return i;
      if (null !== n) {
        if (void 0 !== t[n]) return t[n];
        console.warn(
          "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
            n +
            "'"
        );
      }
      let l = i;
      return (
        i === t.RED &&
          (r === t.FLOAT && (l = t.R32F),
          r === t.HALF_FLOAT && (l = t.R16F),
          r === t.UNSIGNED_BYTE && (l = t.R8)),
        i === t.RG &&
          (r === t.FLOAT && (l = t.RG32F),
          r === t.HALF_FLOAT && (l = t.RG16F),
          r === t.UNSIGNED_BYTE && (l = t.RG8)),
        i === t.RGBA &&
          (r === t.FLOAT && (l = t.RGBA32F),
          r === t.HALF_FLOAT && (l = t.RGBA16F),
          r === t.UNSIGNED_BYTE &&
            (l = a === at && !1 === s ? t.SRGB8_ALPHA8 : t.RGBA8),
          r === t.UNSIGNED_SHORT_4_4_4_4 && (l = t.RGBA4),
          r === t.UNSIGNED_SHORT_5_5_5_1 && (l = t.RGB5_A1)),
        (l !== t.R16F &&
          l !== t.R32F &&
          l !== t.RG16F &&
          l !== t.RG32F &&
          l !== t.RGBA16F &&
          l !== t.RGBA32F) ||
          e.get("EXT_color_buffer_float"),
        l
      );
    }
    function b(t, e, n) {
      return !0 === M(t, n) ||
        (t.isFramebufferTexture && t.minFilter !== L && t.minFilter !== I)
        ? Math.log2(Math.max(e.width, e.height)) + 1
        : void 0 !== t.mipmaps && t.mipmaps.length > 0
        ? t.mipmaps.length
        : t.isCompressedTexture && Array.isArray(t.image)
        ? e.mipmaps.length
        : 1;
    }
    function w(e) {
      return e === L || e === U || e === D ? t.NEAREST : t.LINEAR;
    }
    function T(t) {
      const e = t.target;
      e.removeEventListener("dispose", T),
        (function (t) {
          const e = i.get(t);
          if (void 0 === e.__webglInit) return;
          const n = t.source,
            r = g.get(n);
          if (r) {
            const i = r[e.__cacheKey];
            i.usedTimes--,
              0 === i.usedTimes && z(t),
              0 === Object.keys(r).length && g.delete(n);
          }
          i.remove(t);
        })(e),
        e.isVideoTexture && m.delete(e);
    }
    function A(e) {
      const n = e.target;
      n.removeEventListener("dispose", A),
        (function (e) {
          const n = e.texture,
            r = i.get(e),
            a = i.get(n);
          void 0 !== a.__webglTexture &&
            (t.deleteTexture(a.__webglTexture), s.memory.textures--);
          e.depthTexture && e.depthTexture.dispose();
          if (e.isWebGLCubeRenderTarget)
            for (let e = 0; e < 6; e++)
              t.deleteFramebuffer(r.__webglFramebuffer[e]),
                r.__webglDepthbuffer &&
                  t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
          else {
            if (
              (t.deleteFramebuffer(r.__webglFramebuffer),
              r.__webglDepthbuffer &&
                t.deleteRenderbuffer(r.__webglDepthbuffer),
              r.__webglMultisampledFramebuffer &&
                t.deleteFramebuffer(r.__webglMultisampledFramebuffer),
              r.__webglColorRenderbuffer)
            )
              for (let e = 0; e < r.__webglColorRenderbuffer.length; e++)
                r.__webglColorRenderbuffer[e] &&
                  t.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);
            r.__webglDepthRenderbuffer &&
              t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
          }
          if (e.isWebGLMultipleRenderTargets)
            for (let e = 0, r = n.length; e < r; e++) {
              const r = i.get(n[e]);
              r.__webglTexture &&
                (t.deleteTexture(r.__webglTexture), s.memory.textures--),
                i.remove(n[e]);
            }
          i.remove(n), i.remove(e);
        })(n);
    }
    function z(e) {
      const n = i.get(e);
      t.deleteTexture(n.__webglTexture);
      const r = e.source;
      delete g.get(r)[n.__cacheKey], s.memory.textures--;
    }
    let j = 0;
    function Y(e, r) {
      const a = i.get(e);
      if (
        (e.isVideoTexture &&
          (function (t) {
            const e = s.render.frame;
            m.get(t) !== e && (m.set(t, e), t.update());
          })(e),
        !1 === e.isRenderTargetTexture &&
          e.version > 0 &&
          a.__version !== e.version)
      ) {
        const t = e.image;
        if (null === t)
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but no image data found."
          );
        else {
          if (!1 !== t.complete) return void Q(a, e, r);
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
          );
        }
      }
      n.bindTexture(t.TEXTURE_2D, a.__webglTexture, t.TEXTURE0 + r);
    }
    const q = { [R]: t.REPEAT, [C]: t.CLAMP_TO_EDGE, [P]: t.MIRRORED_REPEAT },
      Z = {
        [L]: t.NEAREST,
        [U]: t.NEAREST_MIPMAP_NEAREST,
        [D]: t.NEAREST_MIPMAP_LINEAR,
        [I]: t.LINEAR,
        1007: t.LINEAR_MIPMAP_NEAREST,
        [N]: t.LINEAR_MIPMAP_LINEAR,
      },
      K = {
        512: t.NEVER,
        519: t.ALWAYS,
        513: t.LESS,
        515: t.LEQUAL,
        514: t.EQUAL,
        518: t.GEQUAL,
        516: t.GREATER,
        517: t.NOTEQUAL,
      };
    function $(n, a, s) {
      if (
        (s
          ? (t.texParameteri(n, t.TEXTURE_WRAP_S, q[a.wrapS]),
            t.texParameteri(n, t.TEXTURE_WRAP_T, q[a.wrapT]),
            (n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY) ||
              t.texParameteri(n, t.TEXTURE_WRAP_R, q[a.wrapR]),
            t.texParameteri(n, t.TEXTURE_MAG_FILTER, Z[a.magFilter]),
            t.texParameteri(n, t.TEXTURE_MIN_FILTER, Z[a.minFilter]))
          : (t.texParameteri(n, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
            t.texParameteri(n, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
            (n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY) ||
              t.texParameteri(n, t.TEXTURE_WRAP_R, t.CLAMP_TO_EDGE),
            (a.wrapS === C && a.wrapT === C) ||
              console.warn(
                "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
              ),
            t.texParameteri(n, t.TEXTURE_MAG_FILTER, w(a.magFilter)),
            t.texParameteri(n, t.TEXTURE_MIN_FILTER, w(a.minFilter)),
            a.minFilter !== L &&
              a.minFilter !== I &&
              console.warn(
                "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
              )),
        a.compareFunction &&
          (t.texParameteri(n, t.TEXTURE_COMPARE_MODE, t.COMPARE_REF_TO_TEXTURE),
          t.texParameteri(n, t.TEXTURE_COMPARE_FUNC, K[a.compareFunction])),
        !0 === e.has("EXT_texture_filter_anisotropic"))
      ) {
        const s = e.get("EXT_texture_filter_anisotropic");
        if (a.magFilter === L) return;
        if (a.minFilter !== D && a.minFilter !== N) return;
        if (a.type === k && !1 === e.has("OES_texture_float_linear")) return;
        if (
          !1 === o &&
          a.type === H &&
          !1 === e.has("OES_texture_half_float_linear")
        )
          return;
        (a.anisotropy > 1 || i.get(a).__currentAnisotropy) &&
          (t.texParameterf(
            n,
            s.TEXTURE_MAX_ANISOTROPY_EXT,
            Math.min(a.anisotropy, r.getMaxAnisotropy())
          ),
          (i.get(a).__currentAnisotropy = a.anisotropy));
      }
    }
    function J(e, n) {
      let i = !1;
      void 0 === e.__webglInit &&
        ((e.__webglInit = !0), n.addEventListener("dispose", T));
      const r = n.source;
      let a = g.get(r);
      void 0 === a && ((a = {}), g.set(r, a));
      const o = (function (t) {
        const e = [];
        return (
          e.push(t.wrapS),
          e.push(t.wrapT),
          e.push(t.wrapR || 0),
          e.push(t.magFilter),
          e.push(t.minFilter),
          e.push(t.anisotropy),
          e.push(t.internalFormat),
          e.push(t.format),
          e.push(t.type),
          e.push(t.generateMipmaps),
          e.push(t.premultiplyAlpha),
          e.push(t.flipY),
          e.push(t.unpackAlignment),
          e.push(t.colorSpace),
          e.join()
        );
      })(n);
      if (o !== e.__cacheKey) {
        void 0 === a[o] &&
          ((a[o] = { texture: t.createTexture(), usedTimes: 0 }),
          s.memory.textures++,
          (i = !0)),
          a[o].usedTimes++;
        const r = a[e.__cacheKey];
        void 0 !== r &&
          (a[e.__cacheKey].usedTimes--, 0 === r.usedTimes && z(n)),
          (e.__cacheKey = o),
          (e.__webglTexture = a[o].texture);
      }
      return i;
    }
    function Q(e, r, s) {
      let l = t.TEXTURE_2D;
      (r.isDataArrayTexture || r.isCompressedArrayTexture) &&
        (l = t.TEXTURE_2D_ARRAY),
        r.isData3DTexture && (l = t.TEXTURE_3D);
      const c = J(e, r),
        u = r.source;
      n.bindTexture(l, e.__webglTexture, t.TEXTURE0 + s);
      const d = i.get(u);
      if (u.version !== d.__version || !0 === c) {
        n.activeTexture(t.TEXTURE0 + s),
          t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY),
          t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha),
          t.pixelStorei(t.UNPACK_ALIGNMENT, r.unpackAlignment),
          t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE);
        const e =
          (function (t) {
            return (
              !o &&
              (t.wrapS !== C ||
                t.wrapT !== C ||
                (t.minFilter !== L && t.minFilter !== I))
            );
          })(r) && !1 === y(r.image);
        let i = x(r.image, e, !1, h);
        i = lt(r, i);
        const p = y(i) || o,
          m = a.convert(r.format, r.colorSpace);
        let f,
          g = a.convert(r.type),
          _ = E(r.internalFormat, m, g, r.colorSpace);
        $(l, r, p);
        const v = r.mipmaps,
          w = o && !0 !== r.isVideoTexture,
          T = void 0 === d.__version || !0 === c,
          A = b(r, i, p);
        if (r.isDepthTexture)
          (_ = t.DEPTH_COMPONENT),
            o
              ? (_ =
                  r.type === k
                    ? t.DEPTH_COMPONENT32F
                    : r.type === B
                    ? t.DEPTH_COMPONENT24
                    : r.type === V
                    ? t.DEPTH24_STENCIL8
                    : t.DEPTH_COMPONENT16)
              : r.type === k &&
                console.error(
                  "WebGLRenderer: Floating point depth texture requires WebGL2."
                ),
            r.format === W &&
              _ === t.DEPTH_COMPONENT &&
              r.type !== F &&
              r.type !== B &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
              ),
              (r.type = B),
              (g = a.convert(r.type))),
            r.format === X &&
              _ === t.DEPTH_COMPONENT &&
              ((_ = t.DEPTH_STENCIL),
              r.type !== V &&
                (console.warn(
                  "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
                ),
                (r.type = V),
                (g = a.convert(r.type)))),
            T &&
              (w
                ? n.texStorage2D(t.TEXTURE_2D, 1, _, i.width, i.height)
                : n.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    _,
                    i.width,
                    i.height,
                    0,
                    m,
                    g,
                    null
                  ));
        else if (r.isDataTexture)
          if (v.length > 0 && p) {
            w &&
              T &&
              n.texStorage2D(t.TEXTURE_2D, A, _, v[0].width, v[0].height);
            for (let e = 0, i = v.length; e < i; e++)
              (f = v[e]),
                w
                  ? n.texSubImage2D(
                      t.TEXTURE_2D,
                      e,
                      0,
                      0,
                      f.width,
                      f.height,
                      m,
                      g,
                      f.data
                    )
                  : n.texImage2D(
                      t.TEXTURE_2D,
                      e,
                      _,
                      f.width,
                      f.height,
                      0,
                      m,
                      g,
                      f.data
                    );
            r.generateMipmaps = !1;
          } else
            w
              ? (T && n.texStorage2D(t.TEXTURE_2D, A, _, i.width, i.height),
                n.texSubImage2D(
                  t.TEXTURE_2D,
                  0,
                  0,
                  0,
                  i.width,
                  i.height,
                  m,
                  g,
                  i.data
                ))
              : n.texImage2D(
                  t.TEXTURE_2D,
                  0,
                  _,
                  i.width,
                  i.height,
                  0,
                  m,
                  g,
                  i.data
                );
        else if (r.isCompressedTexture)
          if (r.isCompressedArrayTexture) {
            w &&
              T &&
              n.texStorage3D(
                t.TEXTURE_2D_ARRAY,
                A,
                _,
                v[0].width,
                v[0].height,
                i.depth
              );
            for (let e = 0, a = v.length; e < a; e++)
              (f = v[e]),
                r.format !== G
                  ? null !== m
                    ? w
                      ? n.compressedTexSubImage3D(
                          t.TEXTURE_2D_ARRAY,
                          e,
                          0,
                          0,
                          0,
                          f.width,
                          f.height,
                          i.depth,
                          m,
                          f.data,
                          0,
                          0
                        )
                      : n.compressedTexImage3D(
                          t.TEXTURE_2D_ARRAY,
                          e,
                          _,
                          f.width,
                          f.height,
                          i.depth,
                          0,
                          f.data,
                          0,
                          0
                        )
                    : console.warn(
                        "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                      )
                  : w
                  ? n.texSubImage3D(
                      t.TEXTURE_2D_ARRAY,
                      e,
                      0,
                      0,
                      0,
                      f.width,
                      f.height,
                      i.depth,
                      m,
                      g,
                      f.data
                    )
                  : n.texImage3D(
                      t.TEXTURE_2D_ARRAY,
                      e,
                      _,
                      f.width,
                      f.height,
                      i.depth,
                      0,
                      m,
                      g,
                      f.data
                    );
          } else {
            w &&
              T &&
              n.texStorage2D(t.TEXTURE_2D, A, _, v[0].width, v[0].height);
            for (let e = 0, i = v.length; e < i; e++)
              (f = v[e]),
                r.format !== G
                  ? null !== m
                    ? w
                      ? n.compressedTexSubImage2D(
                          t.TEXTURE_2D,
                          e,
                          0,
                          0,
                          f.width,
                          f.height,
                          m,
                          f.data
                        )
                      : n.compressedTexImage2D(
                          t.TEXTURE_2D,
                          e,
                          _,
                          f.width,
                          f.height,
                          0,
                          f.data
                        )
                    : console.warn(
                        "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                      )
                  : w
                  ? n.texSubImage2D(
                      t.TEXTURE_2D,
                      e,
                      0,
                      0,
                      f.width,
                      f.height,
                      m,
                      g,
                      f.data
                    )
                  : n.texImage2D(
                      t.TEXTURE_2D,
                      e,
                      _,
                      f.width,
                      f.height,
                      0,
                      m,
                      g,
                      f.data
                    );
          }
        else if (r.isDataArrayTexture)
          w
            ? (T &&
                n.texStorage3D(
                  t.TEXTURE_2D_ARRAY,
                  A,
                  _,
                  i.width,
                  i.height,
                  i.depth
                ),
              n.texSubImage3D(
                t.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                i.width,
                i.height,
                i.depth,
                m,
                g,
                i.data
              ))
            : n.texImage3D(
                t.TEXTURE_2D_ARRAY,
                0,
                _,
                i.width,
                i.height,
                i.depth,
                0,
                m,
                g,
                i.data
              );
        else if (r.isData3DTexture)
          w
            ? (T &&
                n.texStorage3D(t.TEXTURE_3D, A, _, i.width, i.height, i.depth),
              n.texSubImage3D(
                t.TEXTURE_3D,
                0,
                0,
                0,
                0,
                i.width,
                i.height,
                i.depth,
                m,
                g,
                i.data
              ))
            : n.texImage3D(
                t.TEXTURE_3D,
                0,
                _,
                i.width,
                i.height,
                i.depth,
                0,
                m,
                g,
                i.data
              );
        else if (r.isFramebufferTexture) {
          if (T)
            if (w) n.texStorage2D(t.TEXTURE_2D, A, _, i.width, i.height);
            else {
              let e = i.width,
                r = i.height;
              for (let i = 0; i < A; i++)
                n.texImage2D(t.TEXTURE_2D, i, _, e, r, 0, m, g, null),
                  (e >>= 1),
                  (r >>= 1);
            }
        } else if (v.length > 0 && p) {
          w && T && n.texStorage2D(t.TEXTURE_2D, A, _, v[0].width, v[0].height);
          for (let e = 0, i = v.length; e < i; e++)
            (f = v[e]),
              w
                ? n.texSubImage2D(t.TEXTURE_2D, e, 0, 0, m, g, f)
                : n.texImage2D(t.TEXTURE_2D, e, _, m, g, f);
          r.generateMipmaps = !1;
        } else
          w
            ? (T && n.texStorage2D(t.TEXTURE_2D, A, _, i.width, i.height),
              n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, m, g, i))
            : n.texImage2D(t.TEXTURE_2D, 0, _, m, g, i);
        M(r, p) && S(l), (d.__version = u.version), r.onUpdate && r.onUpdate(r);
      }
      e.__version = r.version;
    }
    function tt(e, r, s, o, l) {
      const c = a.convert(s.format, s.colorSpace),
        h = a.convert(s.type),
        u = E(s.internalFormat, c, h, s.colorSpace);
      i.get(r).__hasExternalTextures ||
        (l === t.TEXTURE_3D || l === t.TEXTURE_2D_ARRAY
          ? n.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null)
          : n.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null)),
        n.bindFramebuffer(t.FRAMEBUFFER, e),
        ot(r)
          ? d.framebufferTexture2DMultisampleEXT(
              t.FRAMEBUFFER,
              o,
              l,
              i.get(s).__webglTexture,
              0,
              it(r)
            )
          : (l === t.TEXTURE_2D ||
              (l >= t.TEXTURE_CUBE_MAP_POSITIVE_X &&
                l <= t.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
            t.framebufferTexture2D(
              t.FRAMEBUFFER,
              o,
              l,
              i.get(s).__webglTexture,
              0
            ),
        n.bindFramebuffer(t.FRAMEBUFFER, null);
    }
    function et(e, n, i) {
      if (
        (t.bindRenderbuffer(t.RENDERBUFFER, e),
        n.depthBuffer && !n.stencilBuffer)
      ) {
        let r = t.DEPTH_COMPONENT16;
        if (i || ot(n)) {
          const e = n.depthTexture;
          e &&
            e.isDepthTexture &&
            (e.type === k
              ? (r = t.DEPTH_COMPONENT32F)
              : e.type === B && (r = t.DEPTH_COMPONENT24));
          const i = it(n);
          ot(n)
            ? d.renderbufferStorageMultisampleEXT(
                t.RENDERBUFFER,
                i,
                r,
                n.width,
                n.height
              )
            : t.renderbufferStorageMultisample(
                t.RENDERBUFFER,
                i,
                r,
                n.width,
                n.height
              );
        } else t.renderbufferStorage(t.RENDERBUFFER, r, n.width, n.height);
        t.framebufferRenderbuffer(
          t.FRAMEBUFFER,
          t.DEPTH_ATTACHMENT,
          t.RENDERBUFFER,
          e
        );
      } else if (n.depthBuffer && n.stencilBuffer) {
        const r = it(n);
        i && !1 === ot(n)
          ? t.renderbufferStorageMultisample(
              t.RENDERBUFFER,
              r,
              t.DEPTH24_STENCIL8,
              n.width,
              n.height
            )
          : ot(n)
          ? d.renderbufferStorageMultisampleEXT(
              t.RENDERBUFFER,
              r,
              t.DEPTH24_STENCIL8,
              n.width,
              n.height
            )
          : t.renderbufferStorage(
              t.RENDERBUFFER,
              t.DEPTH_STENCIL,
              n.width,
              n.height
            ),
          t.framebufferRenderbuffer(
            t.FRAMEBUFFER,
            t.DEPTH_STENCIL_ATTACHMENT,
            t.RENDERBUFFER,
            e
          );
      } else {
        const e =
          !0 === n.isWebGLMultipleRenderTargets ? n.texture : [n.texture];
        for (let r = 0; r < e.length; r++) {
          const s = e[r],
            o = a.convert(s.format, s.colorSpace),
            l = a.convert(s.type),
            c = E(s.internalFormat, o, l, s.colorSpace),
            h = it(n);
          i && !1 === ot(n)
            ? t.renderbufferStorageMultisample(
                t.RENDERBUFFER,
                h,
                c,
                n.width,
                n.height
              )
            : ot(n)
            ? d.renderbufferStorageMultisampleEXT(
                t.RENDERBUFFER,
                h,
                c,
                n.width,
                n.height
              )
            : t.renderbufferStorage(t.RENDERBUFFER, c, n.width, n.height);
        }
      }
      t.bindRenderbuffer(t.RENDERBUFFER, null);
    }
    function nt(e) {
      const r = i.get(e),
        a = !0 === e.isWebGLCubeRenderTarget;
      if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
        if (a)
          throw new Error(
            "target.depthTexture not supported in Cube render targets"
          );
        !(function (e, r) {
          if (r && r.isWebGLCubeRenderTarget)
            throw new Error(
              "Depth Texture with cube render targets is not supported"
            );
          if (
            (n.bindFramebuffer(t.FRAMEBUFFER, e),
            !r.depthTexture || !r.depthTexture.isDepthTexture)
          )
            throw new Error(
              "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
            );
          (i.get(r.depthTexture).__webglTexture &&
            r.depthTexture.image.width === r.width &&
            r.depthTexture.image.height === r.height) ||
            ((r.depthTexture.image.width = r.width),
            (r.depthTexture.image.height = r.height),
            (r.depthTexture.needsUpdate = !0)),
            Y(r.depthTexture, 0);
          const a = i.get(r.depthTexture).__webglTexture,
            s = it(r);
          if (r.depthTexture.format === W)
            ot(r)
              ? d.framebufferTexture2DMultisampleEXT(
                  t.FRAMEBUFFER,
                  t.DEPTH_ATTACHMENT,
                  t.TEXTURE_2D,
                  a,
                  0,
                  s
                )
              : t.framebufferTexture2D(
                  t.FRAMEBUFFER,
                  t.DEPTH_ATTACHMENT,
                  t.TEXTURE_2D,
                  a,
                  0
                );
          else {
            if (r.depthTexture.format !== X)
              throw new Error("Unknown depthTexture format");
            ot(r)
              ? d.framebufferTexture2DMultisampleEXT(
                  t.FRAMEBUFFER,
                  t.DEPTH_STENCIL_ATTACHMENT,
                  t.TEXTURE_2D,
                  a,
                  0,
                  s
                )
              : t.framebufferTexture2D(
                  t.FRAMEBUFFER,
                  t.DEPTH_STENCIL_ATTACHMENT,
                  t.TEXTURE_2D,
                  a,
                  0
                );
          }
        })(r.__webglFramebuffer, e);
      } else if (a) {
        r.__webglDepthbuffer = [];
        for (let i = 0; i < 6; i++)
          n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer[i]),
            (r.__webglDepthbuffer[i] = t.createRenderbuffer()),
            et(r.__webglDepthbuffer[i], e, !1);
      } else
        n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer),
          (r.__webglDepthbuffer = t.createRenderbuffer()),
          et(r.__webglDepthbuffer, e, !1);
      n.bindFramebuffer(t.FRAMEBUFFER, null);
    }
    function it(t) {
      return Math.min(u, t.samples);
    }
    function ot(t) {
      const n = i.get(t);
      return (
        o &&
        t.samples > 0 &&
        !0 === e.has("WEBGL_multisampled_render_to_texture") &&
        !1 !== n.__useRenderToTexture
      );
    }
    function lt(t, n) {
      const i = t.colorSpace,
        r = t.format,
        a = t.type;
      return (
        !0 === t.isCompressedTexture ||
          t.format === ut ||
          (i !== st &&
            i !== rt &&
            (i === at
              ? !1 === o
                ? !0 === e.has("EXT_sRGB") && r === G
                  ? ((t.format = ut),
                    (t.minFilter = I),
                    (t.generateMipmaps = !1))
                  : (n = Wt.sRGBToLinear(n))
                : (r === G && a === O) ||
                  console.warn(
                    "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                  )
              : console.error(
                  "THREE.WebGLTextures: Unsupported texture color space:",
                  i
                ))),
        n
      );
    }
    (this.allocateTextureUnit = function () {
      const t = j;
      return (
        t >= l &&
          console.warn(
            "THREE.WebGLTextures: Trying to use " +
              t +
              " texture units while this GPU supports only " +
              l
          ),
        (j += 1),
        t
      );
    }),
      (this.resetTextureUnits = function () {
        j = 0;
      }),
      (this.setTexture2D = Y),
      (this.setTexture2DArray = function (e, r) {
        const a = i.get(e);
        e.version > 0 && a.__version !== e.version
          ? Q(a, e, r)
          : n.bindTexture(t.TEXTURE_2D_ARRAY, a.__webglTexture, t.TEXTURE0 + r);
      }),
      (this.setTexture3D = function (e, r) {
        const a = i.get(e);
        e.version > 0 && a.__version !== e.version
          ? Q(a, e, r)
          : n.bindTexture(t.TEXTURE_3D, a.__webglTexture, t.TEXTURE0 + r);
      }),
      (this.setTextureCube = function (e, r) {
        const s = i.get(e);
        e.version > 0 && s.__version !== e.version
          ? (function (e, r, s) {
              if (6 !== r.image.length) return;
              const l = J(e, r),
                h = r.source;
              n.bindTexture(
                t.TEXTURE_CUBE_MAP,
                e.__webglTexture,
                t.TEXTURE0 + s
              );
              const u = i.get(h);
              if (h.version !== u.__version || !0 === l) {
                n.activeTexture(t.TEXTURE0 + s),
                  t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY),
                  t.pixelStorei(
                    t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                    r.premultiplyAlpha
                  ),
                  t.pixelStorei(t.UNPACK_ALIGNMENT, r.unpackAlignment),
                  t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE);
                const e =
                    r.isCompressedTexture || r.image[0].isCompressedTexture,
                  i = r.image[0] && r.image[0].isDataTexture,
                  d = [];
                for (let t = 0; t < 6; t++)
                  (d[t] =
                    e || i
                      ? i
                        ? r.image[t].image
                        : r.image[t]
                      : x(r.image[t], !1, !0, c)),
                    (d[t] = lt(r, d[t]));
                const p = d[0],
                  m = y(p) || o,
                  f = a.convert(r.format, r.colorSpace),
                  g = a.convert(r.type),
                  _ = E(r.internalFormat, f, g, r.colorSpace),
                  v = o && !0 !== r.isVideoTexture,
                  w = void 0 === u.__version || !0 === l;
                let T,
                  A = b(r, p, m);
                if (($(t.TEXTURE_CUBE_MAP, r, m), e)) {
                  v &&
                    w &&
                    n.texStorage2D(t.TEXTURE_CUBE_MAP, A, _, p.width, p.height);
                  for (let e = 0; e < 6; e++) {
                    T = d[e].mipmaps;
                    for (let i = 0; i < T.length; i++) {
                      const a = T[i];
                      r.format !== G
                        ? null !== f
                          ? v
                            ? n.compressedTexSubImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                i,
                                0,
                                0,
                                a.width,
                                a.height,
                                f,
                                a.data
                              )
                            : n.compressedTexImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                i,
                                _,
                                a.width,
                                a.height,
                                0,
                                a.data
                              )
                          : console.warn(
                              "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                            )
                        : v
                        ? n.texSubImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            i,
                            0,
                            0,
                            a.width,
                            a.height,
                            f,
                            g,
                            a.data
                          )
                        : n.texImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            i,
                            _,
                            a.width,
                            a.height,
                            0,
                            f,
                            g,
                            a.data
                          );
                    }
                  }
                } else {
                  (T = r.mipmaps),
                    v &&
                      w &&
                      (T.length > 0 && A++,
                      n.texStorage2D(
                        t.TEXTURE_CUBE_MAP,
                        A,
                        _,
                        d[0].width,
                        d[0].height
                      ));
                  for (let e = 0; e < 6; e++)
                    if (i) {
                      v
                        ? n.texSubImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            0,
                            0,
                            0,
                            d[e].width,
                            d[e].height,
                            f,
                            g,
                            d[e].data
                          )
                        : n.texImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            0,
                            _,
                            d[e].width,
                            d[e].height,
                            0,
                            f,
                            g,
                            d[e].data
                          );
                      for (let i = 0; i < T.length; i++) {
                        const r = T[i].image[e].image;
                        v
                          ? n.texSubImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i + 1,
                              0,
                              0,
                              r.width,
                              r.height,
                              f,
                              g,
                              r.data
                            )
                          : n.texImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i + 1,
                              _,
                              r.width,
                              r.height,
                              0,
                              f,
                              g,
                              r.data
                            );
                      }
                    } else {
                      v
                        ? n.texSubImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            0,
                            0,
                            0,
                            f,
                            g,
                            d[e]
                          )
                        : n.texImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            0,
                            _,
                            f,
                            g,
                            d[e]
                          );
                      for (let i = 0; i < T.length; i++) {
                        const r = T[i];
                        v
                          ? n.texSubImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i + 1,
                              0,
                              0,
                              f,
                              g,
                              r.image[e]
                            )
                          : n.texImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i + 1,
                              _,
                              f,
                              g,
                              r.image[e]
                            );
                      }
                    }
                }
                M(r, m) && S(t.TEXTURE_CUBE_MAP),
                  (u.__version = h.version),
                  r.onUpdate && r.onUpdate(r);
              }
              e.__version = r.version;
            })(s, e, r)
          : n.bindTexture(t.TEXTURE_CUBE_MAP, s.__webglTexture, t.TEXTURE0 + r);
      }),
      (this.rebindTextures = function (e, n, r) {
        const a = i.get(e);
        void 0 !== n &&
          tt(
            a.__webglFramebuffer,
            e,
            e.texture,
            t.COLOR_ATTACHMENT0,
            t.TEXTURE_2D
          ),
          void 0 !== r && nt(e);
      }),
      (this.setupRenderTarget = function (e) {
        const l = e.texture,
          c = i.get(e),
          h = i.get(l);
        e.addEventListener("dispose", A),
          !0 !== e.isWebGLMultipleRenderTargets &&
            (void 0 === h.__webglTexture &&
              (h.__webglTexture = t.createTexture()),
            (h.__version = l.version),
            s.memory.textures++);
        const u = !0 === e.isWebGLCubeRenderTarget,
          d = !0 === e.isWebGLMultipleRenderTargets,
          p = y(e) || o;
        if (u) {
          c.__webglFramebuffer = [];
          for (let e = 0; e < 6; e++)
            c.__webglFramebuffer[e] = t.createFramebuffer();
        } else {
          if (((c.__webglFramebuffer = t.createFramebuffer()), d))
            if (r.drawBuffers) {
              const n = e.texture;
              for (let e = 0, r = n.length; e < r; e++) {
                const r = i.get(n[e]);
                void 0 === r.__webglTexture &&
                  ((r.__webglTexture = t.createTexture()), s.memory.textures++);
              }
            } else
              console.warn(
                "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
              );
          if (o && e.samples > 0 && !1 === ot(e)) {
            const i = d ? l : [l];
            (c.__webglMultisampledFramebuffer = t.createFramebuffer()),
              (c.__webglColorRenderbuffer = []),
              n.bindFramebuffer(
                t.FRAMEBUFFER,
                c.__webglMultisampledFramebuffer
              );
            for (let n = 0; n < i.length; n++) {
              const r = i[n];
              (c.__webglColorRenderbuffer[n] = t.createRenderbuffer()),
                t.bindRenderbuffer(
                  t.RENDERBUFFER,
                  c.__webglColorRenderbuffer[n]
                );
              const s = a.convert(r.format, r.colorSpace),
                o = a.convert(r.type),
                l = E(
                  r.internalFormat,
                  s,
                  o,
                  r.colorSpace,
                  !0 === e.isXRRenderTarget
                ),
                h = it(e);
              t.renderbufferStorageMultisample(
                t.RENDERBUFFER,
                h,
                l,
                e.width,
                e.height
              ),
                t.framebufferRenderbuffer(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + n,
                  t.RENDERBUFFER,
                  c.__webglColorRenderbuffer[n]
                );
            }
            t.bindRenderbuffer(t.RENDERBUFFER, null),
              e.depthBuffer &&
                ((c.__webglDepthRenderbuffer = t.createRenderbuffer()),
                et(c.__webglDepthRenderbuffer, e, !0)),
              n.bindFramebuffer(t.FRAMEBUFFER, null);
          }
        }
        if (u) {
          n.bindTexture(t.TEXTURE_CUBE_MAP, h.__webglTexture),
            $(t.TEXTURE_CUBE_MAP, l, p);
          for (let n = 0; n < 6; n++)
            tt(
              c.__webglFramebuffer[n],
              e,
              l,
              t.COLOR_ATTACHMENT0,
              t.TEXTURE_CUBE_MAP_POSITIVE_X + n
            );
          M(l, p) && S(t.TEXTURE_CUBE_MAP), n.unbindTexture();
        } else if (d) {
          const r = e.texture;
          for (let a = 0, s = r.length; a < s; a++) {
            const s = r[a],
              o = i.get(s);
            n.bindTexture(t.TEXTURE_2D, o.__webglTexture),
              $(t.TEXTURE_2D, s, p),
              tt(
                c.__webglFramebuffer,
                e,
                s,
                t.COLOR_ATTACHMENT0 + a,
                t.TEXTURE_2D
              ),
              M(s, p) && S(t.TEXTURE_2D);
          }
          n.unbindTexture();
        } else {
          let i = t.TEXTURE_2D;
          (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) &&
            (o
              ? (i = e.isWebGL3DRenderTarget
                  ? t.TEXTURE_3D
                  : t.TEXTURE_2D_ARRAY)
              : console.error(
                  "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
                )),
            n.bindTexture(i, h.__webglTexture),
            $(i, l, p),
            tt(c.__webglFramebuffer, e, l, t.COLOR_ATTACHMENT0, i),
            M(l, p) && S(i),
            n.unbindTexture();
        }
        e.depthBuffer && nt(e);
      }),
      (this.updateRenderTargetMipmap = function (e) {
        const r = y(e) || o,
          a = !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture];
        for (let s = 0, o = a.length; s < o; s++) {
          const o = a[s];
          if (M(o, r)) {
            const r = e.isWebGLCubeRenderTarget
                ? t.TEXTURE_CUBE_MAP
                : t.TEXTURE_2D,
              a = i.get(o).__webglTexture;
            n.bindTexture(r, a), S(r), n.unbindTexture();
          }
        }
      }),
      (this.updateMultisampleRenderTarget = function (e) {
        if (o && e.samples > 0 && !1 === ot(e)) {
          const r = e.isWebGLMultipleRenderTargets ? e.texture : [e.texture],
            a = e.width,
            s = e.height;
          let o = t.COLOR_BUFFER_BIT;
          const l = [],
            c = e.stencilBuffer
              ? t.DEPTH_STENCIL_ATTACHMENT
              : t.DEPTH_ATTACHMENT,
            h = i.get(e),
            u = !0 === e.isWebGLMultipleRenderTargets;
          if (u)
            for (let e = 0; e < r.length; e++)
              n.bindFramebuffer(
                t.FRAMEBUFFER,
                h.__webglMultisampledFramebuffer
              ),
                t.framebufferRenderbuffer(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.RENDERBUFFER,
                  null
                ),
                n.bindFramebuffer(t.FRAMEBUFFER, h.__webglFramebuffer),
                t.framebufferTexture2D(
                  t.DRAW_FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.TEXTURE_2D,
                  null,
                  0
                );
          n.bindFramebuffer(
            t.READ_FRAMEBUFFER,
            h.__webglMultisampledFramebuffer
          ),
            n.bindFramebuffer(t.DRAW_FRAMEBUFFER, h.__webglFramebuffer);
          for (let n = 0; n < r.length; n++) {
            l.push(t.COLOR_ATTACHMENT0 + n), e.depthBuffer && l.push(c);
            const d = void 0 !== h.__ignoreDepthValues && h.__ignoreDepthValues;
            if (
              (!1 === d &&
                (e.depthBuffer && (o |= t.DEPTH_BUFFER_BIT),
                e.stencilBuffer && (o |= t.STENCIL_BUFFER_BIT)),
              u &&
                t.framebufferRenderbuffer(
                  t.READ_FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0,
                  t.RENDERBUFFER,
                  h.__webglColorRenderbuffer[n]
                ),
              !0 === d &&
                (t.invalidateFramebuffer(t.READ_FRAMEBUFFER, [c]),
                t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, [c])),
              u)
            ) {
              const e = i.get(r[n]).__webglTexture;
              t.framebufferTexture2D(
                t.DRAW_FRAMEBUFFER,
                t.COLOR_ATTACHMENT0,
                t.TEXTURE_2D,
                e,
                0
              );
            }
            t.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, t.NEAREST),
              p && t.invalidateFramebuffer(t.READ_FRAMEBUFFER, l);
          }
          if (
            (n.bindFramebuffer(t.READ_FRAMEBUFFER, null),
            n.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
            u)
          )
            for (let e = 0; e < r.length; e++) {
              n.bindFramebuffer(
                t.FRAMEBUFFER,
                h.__webglMultisampledFramebuffer
              ),
                t.framebufferRenderbuffer(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.RENDERBUFFER,
                  h.__webglColorRenderbuffer[e]
                );
              const a = i.get(r[e]).__webglTexture;
              n.bindFramebuffer(t.FRAMEBUFFER, h.__webglFramebuffer),
                t.framebufferTexture2D(
                  t.DRAW_FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.TEXTURE_2D,
                  a,
                  0
                );
            }
          n.bindFramebuffer(
            t.DRAW_FRAMEBUFFER,
            h.__webglMultisampledFramebuffer
          );
        }
      }),
      (this.setupDepthRenderbuffer = nt),
      (this.setupFrameBufferTexture = tt),
      (this.useMultisampledRTT = ot);
  }
  function ja(t, e, n) {
    const i = n.isWebGL2;
    return {
      convert: function (n, r = "") {
        let a;
        if (n === O) return t.UNSIGNED_BYTE;
        if (1017 === n) return t.UNSIGNED_SHORT_4_4_4_4;
        if (1018 === n) return t.UNSIGNED_SHORT_5_5_5_1;
        if (1010 === n) return t.BYTE;
        if (1011 === n) return t.SHORT;
        if (n === F) return t.UNSIGNED_SHORT;
        if (n === z) return t.INT;
        if (n === B) return t.UNSIGNED_INT;
        if (n === k) return t.FLOAT;
        if (n === H)
          return i
            ? t.HALF_FLOAT
            : ((a = e.get("OES_texture_half_float")),
              null !== a ? a.HALF_FLOAT_OES : null);
        if (1021 === n) return t.ALPHA;
        if (n === G) return t.RGBA;
        if (1024 === n) return t.LUMINANCE;
        if (1025 === n) return t.LUMINANCE_ALPHA;
        if (n === W) return t.DEPTH_COMPONENT;
        if (n === X) return t.DEPTH_STENCIL;
        if (n === ut)
          return (a = e.get("EXT_sRGB")), null !== a ? a.SRGB_ALPHA_EXT : null;
        if (1028 === n) return t.RED;
        if (1029 === n) return t.RED_INTEGER;
        if (1030 === n) return t.RG;
        if (1031 === n) return t.RG_INTEGER;
        if (1033 === n) return t.RGBA_INTEGER;
        if (n === j || n === Y || n === q || n === Z)
          if (r === at) {
            if (((a = e.get("WEBGL_compressed_texture_s3tc_srgb")), null === a))
              return null;
            if (n === j) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
            if (n === Y) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
            if (n === q) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
            if (n === Z) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
          } else {
            if (((a = e.get("WEBGL_compressed_texture_s3tc")), null === a))
              return null;
            if (n === j) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (n === Y) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (n === q) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (n === Z) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
          }
        if (35840 === n || 35841 === n || 35842 === n || 35843 === n) {
          if (((a = e.get("WEBGL_compressed_texture_pvrtc")), null === a))
            return null;
          if (35840 === n) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (35841 === n) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (35842 === n) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (35843 === n) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
        if (36196 === n)
          return (
            (a = e.get("WEBGL_compressed_texture_etc1")),
            null !== a ? a.COMPRESSED_RGB_ETC1_WEBGL : null
          );
        if (37492 === n || 37496 === n) {
          if (((a = e.get("WEBGL_compressed_texture_etc")), null === a))
            return null;
          if (37492 === n)
            return r === at ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
          if (37496 === n)
            return r === at
              ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
              : a.COMPRESSED_RGBA8_ETC2_EAC;
        }
        if (
          37808 === n ||
          37809 === n ||
          37810 === n ||
          37811 === n ||
          37812 === n ||
          37813 === n ||
          37814 === n ||
          37815 === n ||
          37816 === n ||
          37817 === n ||
          37818 === n ||
          37819 === n ||
          37820 === n ||
          37821 === n
        ) {
          if (((a = e.get("WEBGL_compressed_texture_astc")), null === a))
            return null;
          if (37808 === n)
            return r === at
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
              : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
          if (37809 === n)
            return r === at
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
              : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
          if (37810 === n)
            return r === at
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
              : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
          if (37811 === n)
            return r === at
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
              : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
          if (37812 === n)
            return r === at
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
              : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
          if (37813 === n)
            return r === at
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
              : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
          if (37814 === n)
            return r === at
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
              : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
          if (37815 === n)
            return r === at
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
              : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
          if (37816 === n)
            return r === at
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
              : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
          if (37817 === n)
            return r === at
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
              : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
          if (37818 === n)
            return r === at
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
              : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
          if (37819 === n)
            return r === at
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
              : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
          if (37820 === n)
            return r === at
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
              : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
          if (37821 === n)
            return r === at
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
              : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
        }
        if (n === K) {
          if (((a = e.get("EXT_texture_compression_bptc")), null === a))
            return null;
          if (n === K)
            return r === at
              ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
              : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        }
        if (36283 === n || 36284 === n || 36285 === n || 36286 === n) {
          if (((a = e.get("EXT_texture_compression_rgtc")), null === a))
            return null;
          if (n === K) return a.COMPRESSED_RED_RGTC1_EXT;
          if (36284 === n) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
          if (36285 === n) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
          if (36286 === n) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
        }
        return n === V
          ? i
            ? t.UNSIGNED_INT_24_8
            : ((a = e.get("WEBGL_depth_texture")),
              null !== a ? a.UNSIGNED_INT_24_8_WEBGL : null)
          : void 0 !== t[n]
          ? t[n]
          : null;
      },
    };
  }
  class Ya extends ui {
    constructor(t = []) {
      super(), (this.isArrayCamera = !0), (this.cameras = t);
    }
  }
  class qa extends nn {
    constructor() {
      super(), (this.isGroup = !0), (this.type = "Group");
    }
  }
  const Za = { type: "move" };
  class Ka {
    constructor() {
      (this._targetRay = null), (this._grip = null), (this._hand = null);
    }
    getHandSpace() {
      return (
        null === this._hand &&
          ((this._hand = new qa()),
          (this._hand.matrixAutoUpdate = !1),
          (this._hand.visible = !1),
          (this._hand.joints = {}),
          (this._hand.inputState = { pinching: !1 })),
        this._hand
      );
    }
    getTargetRaySpace() {
      return (
        null === this._targetRay &&
          ((this._targetRay = new qa()),
          (this._targetRay.matrixAutoUpdate = !1),
          (this._targetRay.visible = !1),
          (this._targetRay.hasLinearVelocity = !1),
          (this._targetRay.linearVelocity = new ee()),
          (this._targetRay.hasAngularVelocity = !1),
          (this._targetRay.angularVelocity = new ee())),
        this._targetRay
      );
    }
    getGripSpace() {
      return (
        null === this._grip &&
          ((this._grip = new qa()),
          (this._grip.matrixAutoUpdate = !1),
          (this._grip.visible = !1),
          (this._grip.hasLinearVelocity = !1),
          (this._grip.linearVelocity = new ee()),
          (this._grip.hasAngularVelocity = !1),
          (this._grip.angularVelocity = new ee())),
        this._grip
      );
    }
    dispatchEvent(t) {
      return (
        null !== this._targetRay && this._targetRay.dispatchEvent(t),
        null !== this._grip && this._grip.dispatchEvent(t),
        null !== this._hand && this._hand.dispatchEvent(t),
        this
      );
    }
    connect(t) {
      if (t && t.hand) {
        const e = this._hand;
        if (e) for (const n of t.hand.values()) this._getHandJoint(e, n);
      }
      return this.dispatchEvent({ type: "connected", data: t }), this;
    }
    disconnect(t) {
      return (
        this.dispatchEvent({ type: "disconnected", data: t }),
        null !== this._targetRay && (this._targetRay.visible = !1),
        null !== this._grip && (this._grip.visible = !1),
        null !== this._hand && (this._hand.visible = !1),
        this
      );
    }
    update(t, e, n) {
      let i = null,
        r = null,
        a = null;
      const s = this._targetRay,
        o = this._grip,
        l = this._hand;
      if (t && "visible-blurred" !== e.session.visibilityState) {
        if (l && t.hand) {
          a = !0;
          for (const i of t.hand.values()) {
            const t = e.getJointPose(i, n),
              r = this._getHandJoint(l, i);
            null !== t &&
              (r.matrix.fromArray(t.transform.matrix),
              r.matrix.decompose(r.position, r.rotation, r.scale),
              (r.matrixWorldNeedsUpdate = !0),
              (r.jointRadius = t.radius)),
              (r.visible = null !== t);
          }
          const i = l.joints["index-finger-tip"],
            r = l.joints["thumb-tip"],
            s = i.position.distanceTo(r.position),
            o = 0.02,
            c = 0.005;
          l.inputState.pinching && s > o + c
            ? ((l.inputState.pinching = !1),
              this.dispatchEvent({
                type: "pinchend",
                handedness: t.handedness,
                target: this,
              }))
            : !l.inputState.pinching &&
              s <= o - c &&
              ((l.inputState.pinching = !0),
              this.dispatchEvent({
                type: "pinchstart",
                handedness: t.handedness,
                target: this,
              }));
        } else
          null !== o &&
            t.gripSpace &&
            ((r = e.getPose(t.gripSpace, n)),
            null !== r &&
              (o.matrix.fromArray(r.transform.matrix),
              o.matrix.decompose(o.position, o.rotation, o.scale),
              (o.matrixWorldNeedsUpdate = !0),
              r.linearVelocity
                ? ((o.hasLinearVelocity = !0),
                  o.linearVelocity.copy(r.linearVelocity))
                : (o.hasLinearVelocity = !1),
              r.angularVelocity
                ? ((o.hasAngularVelocity = !0),
                  o.angularVelocity.copy(r.angularVelocity))
                : (o.hasAngularVelocity = !1)));
        null !== s &&
          ((i = e.getPose(t.targetRaySpace, n)),
          null === i && null !== r && (i = r),
          null !== i &&
            (s.matrix.fromArray(i.transform.matrix),
            s.matrix.decompose(s.position, s.rotation, s.scale),
            (s.matrixWorldNeedsUpdate = !0),
            i.linearVelocity
              ? ((s.hasLinearVelocity = !0),
                s.linearVelocity.copy(i.linearVelocity))
              : (s.hasLinearVelocity = !1),
            i.angularVelocity
              ? ((s.hasAngularVelocity = !0),
                s.angularVelocity.copy(i.angularVelocity))
              : (s.hasAngularVelocity = !1),
            this.dispatchEvent(Za)));
      }
      return (
        null !== s && (s.visible = null !== i),
        null !== o && (o.visible = null !== r),
        null !== l && (l.visible = null !== a),
        this
      );
    }
    _getHandJoint(t, e) {
      if (void 0 === t.joints[e.jointName]) {
        const n = new qa();
        (n.matrixAutoUpdate = !1),
          (n.visible = !1),
          (t.joints[e.jointName] = n),
          t.add(n);
      }
      return t.joints[e.jointName];
    }
  }
  class $a extends Zt {
    constructor(t, e, n, i, r, a, s, o, l, c) {
      if ((c = void 0 !== c ? c : W) !== W && c !== X)
        throw new Error(
          "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
        );
      void 0 === n && c === W && (n = B),
        void 0 === n && c === X && (n = V),
        super(null, i, r, a, s, o, c, n, l),
        (this.isDepthTexture = !0),
        (this.image = { width: t, height: e }),
        (this.magFilter = void 0 !== s ? s : L),
        (this.minFilter = void 0 !== o ? o : L),
        (this.flipY = !1),
        (this.generateMipmaps = !1),
        (this.compareFunction = null);
    }
    copy(t) {
      return super.copy(t), (this.compareFunction = t.compareFunction), this;
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        null !== this.compareFunction &&
          (e.compareFunction = this.compareFunction),
        e
      );
    }
  }
  class Ja extends mt {
    constructor(t, e) {
      super();
      const n = this;
      let i = null,
        r = 1,
        a = null,
        s = "local-floor",
        o = 1,
        l = null,
        c = null,
        h = null,
        u = null,
        d = null,
        p = null;
      const m = e.getContextAttributes();
      let f = null,
        g = null;
      const _ = [],
        v = [];
      let x = null;
      const y = new ui();
      y.layers.enable(1), (y.viewport = new Kt());
      const M = new ui();
      M.layers.enable(2), (M.viewport = new Kt());
      const S = [y, M],
        E = new Ya();
      E.layers.enable(1), E.layers.enable(2);
      let b = null,
        w = null;
      function T(t) {
        const e = v.indexOf(t.inputSource);
        if (-1 === e) return;
        const n = _[e];
        void 0 !== n &&
          (n.update(t.inputSource, t.frame, l || a),
          n.dispatchEvent({ type: t.type, data: t.inputSource }));
      }
      function A() {
        i.removeEventListener("select", T),
          i.removeEventListener("selectstart", T),
          i.removeEventListener("selectend", T),
          i.removeEventListener("squeeze", T),
          i.removeEventListener("squeezestart", T),
          i.removeEventListener("squeezeend", T),
          i.removeEventListener("end", A),
          i.removeEventListener("inputsourceschange", R);
        for (let t = 0; t < _.length; t++) {
          const e = v[t];
          null !== e && ((v[t] = null), _[t].disconnect(e));
        }
        (b = null),
          (w = null),
          t.setRenderTarget(f),
          (d = null),
          (u = null),
          (h = null),
          (i = null),
          (g = null),
          D.stop(),
          (n.isPresenting = !1),
          n.dispatchEvent({ type: "sessionend" });
      }
      function R(t) {
        for (let e = 0; e < t.removed.length; e++) {
          const n = t.removed[e],
            i = v.indexOf(n);
          i >= 0 && ((v[i] = null), _[i].disconnect(n));
        }
        for (let e = 0; e < t.added.length; e++) {
          const n = t.added[e];
          let i = v.indexOf(n);
          if (-1 === i) {
            for (let t = 0; t < _.length; t++) {
              if (t >= v.length) {
                v.push(n), (i = t);
                break;
              }
              if (null === v[t]) {
                (v[t] = n), (i = t);
                break;
              }
            }
            if (-1 === i) break;
          }
          const r = _[i];
          r && r.connect(n);
        }
      }
      (this.cameraAutoUpdate = !0),
        (this.enabled = !1),
        (this.isPresenting = !1),
        (this.getCamera = function () {}),
        (this.setUserCamera = function (t) {
          x = t;
        }),
        (this.getController = function (t) {
          let e = _[t];
          return (
            void 0 === e && ((e = new Ka()), (_[t] = e)), e.getTargetRaySpace()
          );
        }),
        (this.getControllerGrip = function (t) {
          let e = _[t];
          return void 0 === e && ((e = new Ka()), (_[t] = e)), e.getGripSpace();
        }),
        (this.getHand = function (t) {
          let e = _[t];
          return void 0 === e && ((e = new Ka()), (_[t] = e)), e.getHandSpace();
        }),
        (this.setFramebufferScaleFactor = function (t) {
          (r = t),
            !0 === n.isPresenting &&
              console.warn(
                "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
              );
        }),
        (this.setReferenceSpaceType = function (t) {
          (s = t),
            !0 === n.isPresenting &&
              console.warn(
                "THREE.WebXRManager: Cannot change reference space type while presenting."
              );
        }),
        (this.getReferenceSpace = function () {
          return l || a;
        }),
        (this.setReferenceSpace = function (t) {
          l = t;
        }),
        (this.getBaseLayer = function () {
          return null !== u ? u : d;
        }),
        (this.getBinding = function () {
          return h;
        }),
        (this.getFrame = function () {
          return p;
        }),
        (this.getSession = function () {
          return i;
        }),
        (this.setSession = async function (c) {
          if (((i = c), null !== i)) {
            if (
              ((f = t.getRenderTarget()),
              i.addEventListener("select", T),
              i.addEventListener("selectstart", T),
              i.addEventListener("selectend", T),
              i.addEventListener("squeeze", T),
              i.addEventListener("squeezestart", T),
              i.addEventListener("squeezeend", T),
              i.addEventListener("end", A),
              i.addEventListener("inputsourceschange", R),
              !0 !== m.xrCompatible && (await e.makeXRCompatible()),
              void 0 === i.renderState.layers || !1 === t.capabilities.isWebGL2)
            ) {
              const n = {
                antialias: void 0 !== i.renderState.layers || m.antialias,
                alpha: !0,
                depth: m.depth,
                stencil: m.stencil,
                framebufferScaleFactor: r,
              };
              (d = new XRWebGLLayer(i, e, n)),
                i.updateRenderState({ baseLayer: d }),
                (g = new $t(d.framebufferWidth, d.framebufferHeight, {
                  format: G,
                  type: O,
                  colorSpace: t.outputColorSpace,
                  stencilBuffer: m.stencil,
                }));
            } else {
              let n = null,
                a = null,
                s = null;
              m.depth &&
                ((s = m.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24),
                (n = m.stencil ? X : W),
                (a = m.stencil ? V : B));
              const o = {
                colorFormat: e.RGBA8,
                depthFormat: s,
                scaleFactor: r,
              };
              (h = new XRWebGLBinding(i, e)),
                (u = h.createProjectionLayer(o)),
                i.updateRenderState({ layers: [u] }),
                (g = new $t(u.textureWidth, u.textureHeight, {
                  format: G,
                  type: O,
                  depthTexture: new $a(
                    u.textureWidth,
                    u.textureHeight,
                    a,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    n
                  ),
                  stencilBuffer: m.stencil,
                  colorSpace: t.outputColorSpace,
                  samples: m.antialias ? 4 : 0,
                }));
              t.properties.get(g).__ignoreDepthValues = u.ignoreDepthValues;
            }
            (g.isXRRenderTarget = !0),
              this.setFoveation(o),
              (l = null),
              (a = await i.requestReferenceSpace(s)),
              D.setContext(i),
              D.start(),
              (n.isPresenting = !0),
              n.dispatchEvent({ type: "sessionstart" });
          }
        }),
        (this.getEnvironmentBlendMode = function () {
          if (null !== i) return i.environmentBlendMode;
        });
      const C = new ee(),
        P = new ee();
      function L(t, e) {
        null === e
          ? t.matrixWorld.copy(t.matrix)
          : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
          t.matrixWorldInverse.copy(t.matrixWorld).invert();
      }
      (this.updateCameraXR = function (t) {
        if (null === i) return t;
        x && (t = x),
          (E.near = M.near = y.near = t.near),
          (E.far = M.far = y.far = t.far),
          (b === E.near && w === E.far) ||
            (i.updateRenderState({ depthNear: E.near, depthFar: E.far }),
            (b = E.near),
            (w = E.far));
        const e = t.parent,
          n = E.cameras;
        L(E, e);
        for (let t = 0; t < n.length; t++) L(n[t], e);
        return (
          2 === n.length
            ? (function (t, e, n) {
                C.setFromMatrixPosition(e.matrixWorld),
                  P.setFromMatrixPosition(n.matrixWorld);
                const i = C.distanceTo(P),
                  r = e.projectionMatrix.elements,
                  a = n.projectionMatrix.elements,
                  s = r[14] / (r[10] - 1),
                  o = r[14] / (r[10] + 1),
                  l = (r[9] + 1) / r[5],
                  c = (r[9] - 1) / r[5],
                  h = (r[8] - 1) / r[0],
                  u = (a[8] + 1) / a[0],
                  d = s * h,
                  p = s * u,
                  m = i / (-h + u),
                  f = m * -h;
                e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
                  t.translateX(f),
                  t.translateZ(m),
                  t.matrixWorld.compose(t.position, t.quaternion, t.scale),
                  t.matrixWorldInverse.copy(t.matrixWorld).invert();
                const g = s + m,
                  _ = o + m,
                  v = d - f,
                  x = p + (i - f),
                  y = ((l * o) / _) * g,
                  M = ((c * o) / _) * g;
                t.projectionMatrix.makePerspective(v, x, y, M, g, _),
                  t.projectionMatrixInverse.copy(t.projectionMatrix).invert();
              })(E, y, M)
            : E.projectionMatrix.copy(y.projectionMatrix),
          x &&
            (function (t, e) {
              const n = x;
              null === e
                ? n.matrix.copy(t.matrixWorld)
                : (n.matrix.copy(e.matrixWorld),
                  n.matrix.invert(),
                  n.matrix.multiply(t.matrixWorld));
              n.matrix.decompose(n.position, n.quaternion, n.scale),
                n.updateMatrixWorld(!0);
              const i = n.children;
              for (let t = 0, e = i.length; t < e; t++)
                i[t].updateMatrixWorld(!0);
              n.projectionMatrix.copy(t.projectionMatrix),
                n.projectionMatrixInverse.copy(t.projectionMatrixInverse),
                n.isPerspectiveCamera &&
                  ((n.fov =
                    2 * vt * Math.atan(1 / n.projectionMatrix.elements[5])),
                  (n.zoom = 1));
            })(E, e),
          E
        );
      }),
        (this.getFoveation = function () {
          if (null !== u || null !== d) return o;
        }),
        (this.setFoveation = function (t) {
          (o = t),
            null !== u && (u.fixedFoveation = t),
            null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = t);
        });
      let U = null;
      const D = new Ei();
      D.setAnimationLoop(function (e, i) {
        if (((c = i.getViewerPose(l || a)), (p = i), null !== c)) {
          const e = c.views;
          null !== d &&
            (t.setRenderTargetFramebuffer(g, d.framebuffer),
            t.setRenderTarget(g));
          let n = !1;
          e.length !== E.cameras.length && ((E.cameras.length = 0), (n = !0));
          for (let i = 0; i < e.length; i++) {
            const r = e[i];
            let a = null;
            if (null !== d) a = d.getViewport(r);
            else {
              const e = h.getViewSubImage(u, r);
              (a = e.viewport),
                0 === i &&
                  (t.setRenderTargetTextures(
                    g,
                    e.colorTexture,
                    u.ignoreDepthValues ? void 0 : e.depthStencilTexture
                  ),
                  t.setRenderTarget(g));
            }
            let s = S[i];
            void 0 === s &&
              ((s = new ui()),
              s.layers.enable(i),
              (s.viewport = new Kt()),
              (S[i] = s)),
              s.matrix.fromArray(r.transform.matrix),
              s.matrix.decompose(s.position, s.quaternion, s.scale),
              s.projectionMatrix.fromArray(r.projectionMatrix),
              s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),
              s.viewport.set(a.x, a.y, a.width, a.height),
              0 === i &&
                (E.matrix.copy(s.matrix),
                E.matrix.decompose(E.position, E.quaternion, E.scale)),
              !0 === n && E.cameras.push(s);
          }
        }
        for (let t = 0; t < _.length; t++) {
          const e = v[t],
            n = _[t];
          null !== e && void 0 !== n && n.update(e, i, l || a);
        }
        U && U(e, i),
          i.detectedPlanes &&
            n.dispatchEvent({ type: "planesdetected", data: i }),
          (p = null);
      }),
        (this.setAnimationLoop = function (t) {
          U = t;
        }),
        (this.dispose = function () {});
    }
  }
  function Qa(t, e) {
    function n(t, e) {
      !0 === t.matrixAutoUpdate && t.updateMatrix(), e.value.copy(t.matrix);
    }
    function i(i, r) {
      (i.opacity.value = r.opacity),
        r.color && i.diffuse.value.copy(r.color),
        r.emissive &&
          i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),
        r.map && ((i.map.value = r.map), n(r.map, i.mapTransform)),
        r.alphaMap &&
          ((i.alphaMap.value = r.alphaMap), n(r.alphaMap, i.alphaMapTransform)),
        r.bumpMap &&
          ((i.bumpMap.value = r.bumpMap),
          n(r.bumpMap, i.bumpMapTransform),
          (i.bumpScale.value = r.bumpScale),
          r.side === d && (i.bumpScale.value *= -1)),
        r.normalMap &&
          ((i.normalMap.value = r.normalMap),
          n(r.normalMap, i.normalMapTransform),
          i.normalScale.value.copy(r.normalScale),
          r.side === d && i.normalScale.value.negate()),
        r.displacementMap &&
          ((i.displacementMap.value = r.displacementMap),
          n(r.displacementMap, i.displacementMapTransform),
          (i.displacementScale.value = r.displacementScale),
          (i.displacementBias.value = r.displacementBias)),
        r.emissiveMap &&
          ((i.emissiveMap.value = r.emissiveMap),
          n(r.emissiveMap, i.emissiveMapTransform)),
        r.specularMap &&
          ((i.specularMap.value = r.specularMap),
          n(r.specularMap, i.specularMapTransform)),
        r.alphaTest > 0 && (i.alphaTest.value = r.alphaTest);
      const a = e.get(r).envMap;
      if (
        (a &&
          ((i.envMap.value = a),
          (i.flipEnvMap.value =
            a.isCubeTexture && !1 === a.isRenderTargetTexture ? -1 : 1),
          (i.reflectivity.value = r.reflectivity),
          (i.ior.value = r.ior),
          (i.refractionRatio.value = r.refractionRatio)),
        r.lightMap)
      ) {
        i.lightMap.value = r.lightMap;
        const e = !0 === t.useLegacyLights ? Math.PI : 1;
        (i.lightMapIntensity.value = r.lightMapIntensity * e),
          n(r.lightMap, i.lightMapTransform);
      }
      r.aoMap &&
        ((i.aoMap.value = r.aoMap),
        (i.aoMapIntensity.value = r.aoMapIntensity),
        n(r.aoMap, i.aoMapTransform));
    }
    return {
      refreshFogUniforms: function (e, n) {
        n.color.getRGB(e.fogColor.value, oi(t)),
          n.isFog
            ? ((e.fogNear.value = n.near), (e.fogFar.value = n.far))
            : n.isFogExp2 && (e.fogDensity.value = n.density);
      },
      refreshMaterialUniforms: function (t, r, a, s, o) {
        r.isMeshBasicMaterial || r.isMeshLambertMaterial
          ? i(t, r)
          : r.isMeshToonMaterial
          ? (i(t, r),
            (function (t, e) {
              e.gradientMap && (t.gradientMap.value = e.gradientMap);
            })(t, r))
          : r.isMeshPhongMaterial
          ? (i(t, r),
            (function (t, e) {
              t.specular.value.copy(e.specular),
                (t.shininess.value = Math.max(e.shininess, 1e-4));
            })(t, r))
          : r.isMeshStandardMaterial
          ? (i(t, r),
            (function (t, i) {
              (t.metalness.value = i.metalness),
                i.metalnessMap &&
                  ((t.metalnessMap.value = i.metalnessMap),
                  n(i.metalnessMap, t.metalnessMapTransform));
              (t.roughness.value = i.roughness),
                i.roughnessMap &&
                  ((t.roughnessMap.value = i.roughnessMap),
                  n(i.roughnessMap, t.roughnessMapTransform));
              const r = e.get(i).envMap;
              r && (t.envMapIntensity.value = i.envMapIntensity);
            })(t, r),
            r.isMeshPhysicalMaterial &&
              (function (t, e, i) {
                (t.ior.value = e.ior),
                  e.sheen > 0 &&
                    (t.sheenColor.value
                      .copy(e.sheenColor)
                      .multiplyScalar(e.sheen),
                    (t.sheenRoughness.value = e.sheenRoughness),
                    e.sheenColorMap &&
                      ((t.sheenColorMap.value = e.sheenColorMap),
                      n(e.sheenColorMap, t.sheenColorMapTransform)),
                    e.sheenRoughnessMap &&
                      ((t.sheenRoughnessMap.value = e.sheenRoughnessMap),
                      n(e.sheenRoughnessMap, t.sheenRoughnessMapTransform)));
                e.clearcoat > 0 &&
                  ((t.clearcoat.value = e.clearcoat),
                  (t.clearcoatRoughness.value = e.clearcoatRoughness),
                  e.clearcoatMap &&
                    ((t.clearcoatMap.value = e.clearcoatMap),
                    n(e.clearcoatMap, t.clearcoatMapTransform)),
                  e.clearcoatRoughnessMap &&
                    ((t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap),
                    n(
                      e.clearcoatRoughnessMap,
                      t.clearcoatRoughnessMapTransform
                    )),
                  e.clearcoatNormalMap &&
                    ((t.clearcoatNormalMap.value = e.clearcoatNormalMap),
                    n(e.clearcoatNormalMap, t.clearcoatNormalMapTransform),
                    t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),
                    e.side === d && t.clearcoatNormalScale.value.negate()));
                e.iridescence > 0 &&
                  ((t.iridescence.value = e.iridescence),
                  (t.iridescenceIOR.value = e.iridescenceIOR),
                  (t.iridescenceThicknessMinimum.value =
                    e.iridescenceThicknessRange[0]),
                  (t.iridescenceThicknessMaximum.value =
                    e.iridescenceThicknessRange[1]),
                  e.iridescenceMap &&
                    ((t.iridescenceMap.value = e.iridescenceMap),
                    n(e.iridescenceMap, t.iridescenceMapTransform)),
                  e.iridescenceThicknessMap &&
                    ((t.iridescenceThicknessMap.value =
                      e.iridescenceThicknessMap),
                    n(
                      e.iridescenceThicknessMap,
                      t.iridescenceThicknessMapTransform
                    )));
                e.transmission > 0 &&
                  ((t.transmission.value = e.transmission),
                  (t.transmissionSamplerMap.value = i.texture),
                  t.transmissionSamplerSize.value.set(i.width, i.height),
                  e.transmissionMap &&
                    ((t.transmissionMap.value = e.transmissionMap),
                    n(e.transmissionMap, t.transmissionMapTransform)),
                  (t.thickness.value = e.thickness),
                  e.thicknessMap &&
                    ((t.thicknessMap.value = e.thicknessMap),
                    n(e.thicknessMap, t.thicknessMapTransform)),
                  (t.attenuationDistance.value = e.attenuationDistance),
                  t.attenuationColor.value.copy(e.attenuationColor));
                e.anisotropy > 0 &&
                  (t.anisotropyVector.value.set(
                    e.anisotropy * Math.cos(e.anisotropyRotation),
                    e.anisotropy * Math.sin(e.anisotropyRotation)
                  ),
                  e.anisotropyMap &&
                    ((t.anisotropyMap.value = e.anisotropyMap),
                    n(e.anisotropyMap, t.anisotropyMapTransform)));
                (t.specularIntensity.value = e.specularIntensity),
                  t.specularColor.value.copy(e.specularColor),
                  e.specularColorMap &&
                    ((t.specularColorMap.value = e.specularColorMap),
                    n(e.specularColorMap, t.specularColorMapTransform));
                e.specularIntensityMap &&
                  ((t.specularIntensityMap.value = e.specularIntensityMap),
                  n(e.specularIntensityMap, t.specularIntensityMapTransform));
              })(t, r, o))
          : r.isMeshMatcapMaterial
          ? (i(t, r),
            (function (t, e) {
              e.matcap && (t.matcap.value = e.matcap);
            })(t, r))
          : r.isMeshDepthMaterial
          ? i(t, r)
          : r.isMeshDistanceMaterial
          ? (i(t, r),
            (function (t, n) {
              const i = e.get(n).light;
              t.referencePosition.value.setFromMatrixPosition(i.matrixWorld),
                (t.nearDistance.value = i.shadow.camera.near),
                (t.farDistance.value = i.shadow.camera.far);
            })(t, r))
          : r.isMeshNormalMaterial
          ? i(t, r)
          : r.isLineBasicMaterial
          ? ((function (t, e) {
              t.diffuse.value.copy(e.color),
                (t.opacity.value = e.opacity),
                e.map && ((t.map.value = e.map), n(e.map, t.mapTransform));
            })(t, r),
            r.isLineDashedMaterial &&
              (function (t, e) {
                (t.dashSize.value = e.dashSize),
                  (t.totalSize.value = e.dashSize + e.gapSize),
                  (t.scale.value = e.scale);
              })(t, r))
          : r.isPointsMaterial
          ? (function (t, e, i, r) {
              t.diffuse.value.copy(e.color),
                (t.opacity.value = e.opacity),
                (t.size.value = e.size * i),
                (t.scale.value = 0.5 * r),
                e.map && ((t.map.value = e.map), n(e.map, t.uvTransform));
              e.alphaMap &&
                ((t.alphaMap.value = e.alphaMap),
                n(e.alphaMap, t.alphaMapTransform));
              e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
            })(t, r, a, s)
          : r.isSpriteMaterial
          ? (function (t, e) {
              t.diffuse.value.copy(e.color),
                (t.opacity.value = e.opacity),
                (t.rotation.value = e.rotation),
                e.map && ((t.map.value = e.map), n(e.map, t.mapTransform));
              e.alphaMap &&
                ((t.alphaMap.value = e.alphaMap),
                n(e.alphaMap, t.alphaMapTransform));
              e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
            })(t, r)
          : r.isShadowMaterial
          ? (t.color.value.copy(r.color), (t.opacity.value = r.opacity))
          : r.isShaderMaterial && (r.uniformsNeedUpdate = !1);
      },
    };
  }
  function ts(t, e, n, i) {
    let r = {},
      a = {},
      s = [];
    const o = n.isWebGL2 ? t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
    function l(t, e, n) {
      const i = t.value;
      if (void 0 === n[e]) {
        if ("number" == typeof i) n[e] = i;
        else {
          const t = Array.isArray(i) ? i : [i],
            r = [];
          for (let e = 0; e < t.length; e++) r.push(t[e].clone());
          n[e] = r;
        }
        return !0;
      }
      if ("number" == typeof i) {
        if (n[e] !== i) return (n[e] = i), !0;
      } else {
        const t = Array.isArray(n[e]) ? n[e] : [n[e]],
          r = Array.isArray(i) ? i : [i];
        for (let e = 0; e < t.length; e++) {
          const n = t[e];
          if (!1 === n.equals(r[e])) return n.copy(r[e]), !0;
        }
      }
      return !1;
    }
    function c(t) {
      const e = { boundary: 0, storage: 0 };
      return (
        "number" == typeof t
          ? ((e.boundary = 4), (e.storage = 4))
          : t.isVector2
          ? ((e.boundary = 8), (e.storage = 8))
          : t.isVector3 || t.isColor
          ? ((e.boundary = 16), (e.storage = 12))
          : t.isVector4
          ? ((e.boundary = 16), (e.storage = 16))
          : t.isMatrix3
          ? ((e.boundary = 48), (e.storage = 48))
          : t.isMatrix4
          ? ((e.boundary = 64), (e.storage = 64))
          : t.isTexture
          ? console.warn(
              "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
            )
          : console.warn(
              "THREE.WebGLRenderer: Unsupported uniform value type.",
              t
            ),
        e
      );
    }
    function h(e) {
      const n = e.target;
      n.removeEventListener("dispose", h);
      const i = s.indexOf(n.__bindingPointIndex);
      s.splice(i, 1), t.deleteBuffer(r[n.id]), delete r[n.id], delete a[n.id];
    }
    return {
      bind: function (t, e) {
        const n = e.program;
        i.uniformBlockBinding(t, n);
      },
      update: function (n, u) {
        let d = r[n.id];
        void 0 === d &&
          (!(function (t) {
            const e = t.uniforms;
            let n = 0;
            const i = 16;
            let r = 0;
            for (let t = 0, a = e.length; t < a; t++) {
              const a = e[t],
                s = { boundary: 0, storage: 0 },
                o = Array.isArray(a.value) ? a.value : [a.value];
              for (let t = 0, e = o.length; t < e; t++) {
                const e = c(o[t]);
                (s.boundary += e.boundary), (s.storage += e.storage);
              }
              if (
                ((a.__data = new Float32Array(
                  s.storage / Float32Array.BYTES_PER_ELEMENT
                )),
                (a.__offset = n),
                t > 0)
              ) {
                r = n % i;
                0 !== r &&
                  i - r - s.boundary < 0 &&
                  ((n += i - r), (a.__offset = n));
              }
              n += s.storage;
            }
            (r = n % i), r > 0 && (n += i - r);
            (t.__size = n), (t.__cache = {});
          })(n),
          (d = (function (e) {
            const n = (function () {
              for (let t = 0; t < o; t++)
                if (-1 === s.indexOf(t)) return s.push(t), t;
              return (
                console.error(
                  "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
                ),
                0
              );
            })();
            e.__bindingPointIndex = n;
            const i = t.createBuffer(),
              r = e.__size,
              a = e.usage;
            return (
              t.bindBuffer(t.UNIFORM_BUFFER, i),
              t.bufferData(t.UNIFORM_BUFFER, r, a),
              t.bindBuffer(t.UNIFORM_BUFFER, null),
              t.bindBufferBase(t.UNIFORM_BUFFER, n, i),
              i
            );
          })(n)),
          (r[n.id] = d),
          n.addEventListener("dispose", h));
        const p = u.program;
        i.updateUBOMapping(n, p);
        const m = e.render.frame;
        a[n.id] !== m &&
          (!(function (e) {
            const n = r[e.id],
              i = e.uniforms,
              a = e.__cache;
            t.bindBuffer(t.UNIFORM_BUFFER, n);
            for (let e = 0, n = i.length; e < n; e++) {
              const n = i[e];
              if (!0 === l(n, e, a)) {
                const e = n.__offset,
                  i = Array.isArray(n.value) ? n.value : [n.value];
                let r = 0;
                for (let a = 0; a < i.length; a++) {
                  const s = i[a],
                    o = c(s);
                  "number" == typeof s
                    ? ((n.__data[0] = s),
                      t.bufferSubData(t.UNIFORM_BUFFER, e + r, n.__data))
                    : s.isMatrix3
                    ? ((n.__data[0] = s.elements[0]),
                      (n.__data[1] = s.elements[1]),
                      (n.__data[2] = s.elements[2]),
                      (n.__data[3] = s.elements[0]),
                      (n.__data[4] = s.elements[3]),
                      (n.__data[5] = s.elements[4]),
                      (n.__data[6] = s.elements[5]),
                      (n.__data[7] = s.elements[0]),
                      (n.__data[8] = s.elements[6]),
                      (n.__data[9] = s.elements[7]),
                      (n.__data[10] = s.elements[8]),
                      (n.__data[11] = s.elements[0]))
                    : (s.toArray(n.__data, r),
                      (r += o.storage / Float32Array.BYTES_PER_ELEMENT));
                }
                t.bufferSubData(t.UNIFORM_BUFFER, e, n.__data);
              }
            }
            t.bindBuffer(t.UNIFORM_BUFFER, null);
          })(n),
          (a[n.id] = m));
      },
      dispose: function () {
        for (const e in r) t.deleteBuffer(r[e]);
        (s = []), (r = {}), (a = {});
      },
    };
  }
  function es() {
    const t = Dt("canvas");
    return (t.style.display = "block"), t;
  }
  class ns {
    constructor(e = {}) {
      const {
        canvas: n = es(),
        context: i = null,
        depth: r = !0,
        stencil: a = !0,
        alpha: s = !1,
        antialias: o = !1,
        premultipliedAlpha: l = !0,
        preserveDrawingBuffer: c = !1,
        powerPreference: h = "default",
        failIfMajorPerformanceCaveat: p = !1,
      } = e;
      let m;
      (this.isWebGLRenderer = !0),
        (m = null !== i ? i.getContextAttributes().alpha : s);
      const f = new Uint32Array(4),
        g = new Int32Array(4);
      let v = null,
        x = null;
      const y = [],
        M = [];
      (this.domElement = n),
        (this.debug = { checkShaderErrors: !0, onShaderError: null }),
        (this.autoClear = !0),
        (this.autoClearColor = !0),
        (this.autoClearDepth = !0),
        (this.autoClearStencil = !0),
        (this.sortObjects = !0),
        (this.clippingPlanes = []),
        (this.localClippingEnabled = !1),
        (this.outputColorSpace = at),
        (this.useLegacyLights = !0),
        (this.toneMapping = _),
        (this.toneMappingExposure = 1);
      const S = this;
      let E = !1,
        b = 0,
        w = 0,
        T = null,
        A = -1,
        R = null;
      const C = new Kt(),
        P = new Kt();
      let L = null;
      const U = new Sn(0);
      let D = 0,
        I = n.width,
        z = n.height,
        W = 1,
        X = null,
        j = null;
      const Y = new Kt(0, 0, I, z),
        q = new Kt(0, 0, I, z);
      let Z = !1;
      const K = new Si();
      let $ = !1,
        J = !1,
        Q = null;
      const tt = new Le(),
        et = new Ct(),
        nt = new ee(),
        it = {
          background: null,
          fog: null,
          environment: null,
          overrideMaterial: null,
          isScene: !0,
        };
      function rt() {
        return null === T ? W : 1;
      }
      let ot,
        lt,
        ct,
        ht,
        ut,
        dt,
        pt,
        mt,
        ft,
        gt,
        _t,
        vt,
        xt,
        yt,
        Mt,
        St,
        Et,
        bt,
        Tt,
        At,
        Rt,
        Pt,
        Lt,
        Ut,
        Dt = i;
      function It(t, e) {
        for (let i = 0; i < t.length; i++) {
          const r = t[i],
            a = n.getContext(r, e);
          if (null !== a) return a;
        }
        return null;
      }
      try {
        const e = {
          alpha: !0,
          depth: r,
          stencil: a,
          antialias: o,
          premultipliedAlpha: l,
          preserveDrawingBuffer: c,
          powerPreference: h,
          failIfMajorPerformanceCaveat: p,
        };
        if (
          ("setAttribute" in n &&
            n.setAttribute("data-engine", `three.js r${t}`),
          n.addEventListener("webglcontextlost", Ft, !1),
          n.addEventListener("webglcontextrestored", zt, !1),
          n.addEventListener("webglcontextcreationerror", Bt, !1),
          null === Dt)
        ) {
          const t = ["webgl2", "webgl", "experimental-webgl"];
          if (
            (!0 === S.isWebGL1Renderer && t.shift(),
            (Dt = It(t, e)),
            null === Dt)
          )
            throw It(t)
              ? new Error(
                  "Error creating WebGL context with your selected attributes."
                )
              : new Error("Error creating WebGL context.");
        }
        Dt instanceof WebGLRenderingContext &&
          console.warn(
            "THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."
          ),
          void 0 === Dt.getShaderPrecisionFormat &&
            (Dt.getShaderPrecisionFormat = function () {
              return { rangeMin: 1, rangeMax: 1, precision: 1 };
            });
      } catch (t) {
        throw (console.error("THREE.WebGLRenderer: " + t.message), t);
      }
      function Nt() {
        (ot = new Ji(Dt)),
          (lt = new Di(Dt, ot, e)),
          ot.init(lt),
          (Pt = new ja(Dt, ot, lt)),
          (ct = new Wa(Dt, ot, lt)),
          (ht = new er(Dt)),
          (ut = new Pa()),
          (dt = new Xa(Dt, ot, ct, ut, lt, Pt, ht)),
          (pt = new Ni(S)),
          (mt = new $i(S)),
          (ft = new bi(Dt, lt)),
          (Lt = new Li(Dt, ot, ft, lt)),
          (gt = new Qi(Dt, ft, ht, Lt)),
          (_t = new ar(Dt, gt, ft, ht)),
          (Tt = new rr(Dt, lt, dt)),
          (St = new Ii(ut)),
          (vt = new Ca(S, pt, mt, ot, lt, Lt, St)),
          (xt = new Qa(S, ut)),
          (yt = new Ia()),
          (Mt = new ka(ot, lt)),
          (bt = new Pi(S, pt, mt, ct, _t, m, l)),
          (Et = new Ga(S, _t, lt)),
          (Ut = new ts(Dt, ht, lt, ct)),
          (At = new Ui(Dt, ot, ht, lt)),
          (Rt = new tr(Dt, ot, ht, lt)),
          (ht.programs = vt.programs),
          (S.capabilities = lt),
          (S.extensions = ot),
          (S.properties = ut),
          (S.renderLists = yt),
          (S.shadowMap = Et),
          (S.state = ct),
          (S.info = ht);
      }
      Nt();
      const Ot = new Ja(S, Dt);
      function Ft(t) {
        t.preventDefault(),
          console.log("THREE.WebGLRenderer: Context Lost."),
          (E = !0);
      }
      function zt() {
        console.log("THREE.WebGLRenderer: Context Restored."), (E = !1);
        const t = ht.autoReset,
          e = Et.enabled,
          n = Et.autoUpdate,
          i = Et.needsUpdate,
          r = Et.type;
        Nt(),
          (ht.autoReset = t),
          (Et.enabled = e),
          (Et.autoUpdate = n),
          (Et.needsUpdate = i),
          (Et.type = r);
      }
      function Bt(t) {
        console.error(
          "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
          t.statusMessage
        );
      }
      function kt(t) {
        const e = t.target;
        e.removeEventListener("dispose", kt),
          (function (t) {
            (function (t) {
              const e = ut.get(t).programs;
              void 0 !== e &&
                (e.forEach(function (t) {
                  vt.releaseProgram(t);
                }),
                t.isShaderMaterial && vt.releaseShaderCache(t));
            })(t),
              ut.remove(t);
          })(e);
      }
      (this.xr = Ot),
        (this.getContext = function () {
          return Dt;
        }),
        (this.getContextAttributes = function () {
          return Dt.getContextAttributes();
        }),
        (this.forceContextLoss = function () {
          const t = ot.get("WEBGL_lose_context");
          t && t.loseContext();
        }),
        (this.forceContextRestore = function () {
          const t = ot.get("WEBGL_lose_context");
          t && t.restoreContext();
        }),
        (this.getPixelRatio = function () {
          return W;
        }),
        (this.setPixelRatio = function (t) {
          void 0 !== t && ((W = t), this.setSize(I, z, !1));
        }),
        (this.getSize = function (t) {
          return t.set(I, z);
        }),
        (this.setSize = function (t, e, i = !0) {
          Ot.isPresenting
            ? console.warn(
                "THREE.WebGLRenderer: Can't change size while VR device is presenting."
              )
            : ((I = t),
              (z = e),
              (n.width = Math.floor(t * W)),
              (n.height = Math.floor(e * W)),
              !0 === i &&
                ((n.style.width = t + "px"), (n.style.height = e + "px")),
              this.setViewport(0, 0, t, e));
        }),
        (this.getDrawingBufferSize = function (t) {
          return t.set(I * W, z * W).floor();
        }),
        (this.setDrawingBufferSize = function (t, e, i) {
          (I = t),
            (z = e),
            (W = i),
            (n.width = Math.floor(t * i)),
            (n.height = Math.floor(e * i)),
            this.setViewport(0, 0, t, e);
        }),
        (this.getCurrentViewport = function (t) {
          return t.copy(C);
        }),
        (this.getViewport = function (t) {
          return t.copy(Y);
        }),
        (this.setViewport = function (t, e, n, i) {
          t.isVector4 ? Y.set(t.x, t.y, t.z, t.w) : Y.set(t, e, n, i),
            ct.viewport(C.copy(Y).multiplyScalar(W).floor());
        }),
        (this.getScissor = function (t) {
          return t.copy(q);
        }),
        (this.setScissor = function (t, e, n, i) {
          t.isVector4 ? q.set(t.x, t.y, t.z, t.w) : q.set(t, e, n, i),
            ct.scissor(P.copy(q).multiplyScalar(W).floor());
        }),
        (this.getScissorTest = function () {
          return Z;
        }),
        (this.setScissorTest = function (t) {
          ct.setScissorTest((Z = t));
        }),
        (this.setOpaqueSort = function (t) {
          X = t;
        }),
        (this.setTransparentSort = function (t) {
          j = t;
        }),
        (this.getClearColor = function (t) {
          return t.copy(bt.getClearColor());
        }),
        (this.setClearColor = function () {
          bt.setClearColor.apply(bt, arguments);
        }),
        (this.getClearAlpha = function () {
          return bt.getClearAlpha();
        }),
        (this.setClearAlpha = function () {
          bt.setClearAlpha.apply(bt, arguments);
        }),
        (this.clear = function (t = !0, e = !0, n = !0) {
          let i = 0;
          if (t) {
            let t = !1;
            if (null !== T) {
              const e = T.texture.format;
              t = 1033 === e || 1031 === e || 1029 === e;
            }
            if (t) {
              const t = T.texture.type,
                e =
                  t === O ||
                  t === B ||
                  t === F ||
                  t === V ||
                  1017 === t ||
                  1018 === t,
                n = bt.getClearColor(),
                i = bt.getClearAlpha(),
                r = n.r,
                a = n.g,
                s = n.b,
                o = ut.get(T).__webglFramebuffer;
              e
                ? ((f[0] = r),
                  (f[1] = a),
                  (f[2] = s),
                  (f[3] = i),
                  Dt.clearBufferuiv(Dt.COLOR, o, f))
                : ((g[0] = r),
                  (g[1] = a),
                  (g[2] = s),
                  (g[3] = i),
                  Dt.clearBufferiv(Dt.COLOR, o, g));
            } else i |= Dt.COLOR_BUFFER_BIT;
          }
          e && (i |= Dt.DEPTH_BUFFER_BIT),
            n && (i |= Dt.STENCIL_BUFFER_BIT),
            Dt.clear(i);
        }),
        (this.clearColor = function () {
          this.clear(!0, !1, !1);
        }),
        (this.clearDepth = function () {
          this.clear(!1, !0, !1);
        }),
        (this.clearStencil = function () {
          this.clear(!1, !1, !0);
        }),
        (this.dispose = function () {
          n.removeEventListener("webglcontextlost", Ft, !1),
            n.removeEventListener("webglcontextrestored", zt, !1),
            n.removeEventListener("webglcontextcreationerror", Bt, !1),
            yt.dispose(),
            Mt.dispose(),
            ut.dispose(),
            pt.dispose(),
            mt.dispose(),
            _t.dispose(),
            Lt.dispose(),
            Ut.dispose(),
            vt.dispose(),
            Ot.dispose(),
            Ot.removeEventListener("sessionstart", Vt),
            Ot.removeEventListener("sessionend", Gt),
            Q && (Q.dispose(), (Q = null)),
            Wt.stop();
        }),
        (this.renderBufferDirect = function (t, e, n, i, r, a) {
          null === e && (e = it);
          const s = r.isMesh && r.matrixWorld.determinant() < 0,
            o = (function (t, e, n, i, r) {
              !0 !== e.isScene && (e = it);
              dt.resetTextureUnits();
              const a = e.fog,
                s = i.isMeshStandardMaterial ? e.environment : null,
                o =
                  null === T
                    ? S.outputColorSpace
                    : !0 === T.isXRRenderTarget
                    ? T.texture.colorSpace
                    : st,
                l = (i.isMeshStandardMaterial ? mt : pt).get(i.envMap || s),
                c =
                  !0 === i.vertexColors &&
                  !!n.attributes.color &&
                  4 === n.attributes.color.itemSize,
                h =
                  !!n.attributes.tangent && (!!i.normalMap || i.anisotropy > 0),
                u = !!n.morphAttributes.position,
                d = !!n.morphAttributes.normal,
                p = !!n.morphAttributes.color,
                m = i.toneMapped ? S.toneMapping : _,
                f =
                  n.morphAttributes.position ||
                  n.morphAttributes.normal ||
                  n.morphAttributes.color,
                g = void 0 !== f ? f.length : 0,
                v = ut.get(i),
                y = x.state.lights;
              if (!0 === $ && (!0 === J || t !== R)) {
                const e = t === R && i.id === A;
                St.setState(i, t, e);
              }
              let M = !1;
              i.version === v.__version
                ? (v.needsLights && v.lightsStateVersion !== y.state.version) ||
                  v.outputColorSpace !== o ||
                  (r.isInstancedMesh && !1 === v.instancing)
                  ? (M = !0)
                  : r.isInstancedMesh || !0 !== v.instancing
                  ? r.isSkinnedMesh && !1 === v.skinning
                    ? (M = !0)
                    : r.isSkinnedMesh || !0 !== v.skinning
                    ? v.envMap !== l || (!0 === i.fog && v.fog !== a)
                      ? (M = !0)
                      : void 0 === v.numClippingPlanes ||
                        (v.numClippingPlanes === St.numPlanes &&
                          v.numIntersection === St.numIntersection)
                      ? (v.vertexAlphas !== c ||
                          v.vertexTangents !== h ||
                          v.morphTargets !== u ||
                          v.morphNormals !== d ||
                          v.morphColors !== p ||
                          v.toneMapping !== m ||
                          (!0 === lt.isWebGL2 && v.morphTargetsCount !== g)) &&
                        (M = !0)
                      : (M = !0)
                    : (M = !0)
                  : (M = !0)
                : ((M = !0), (v.__version = i.version));
              let E = v.currentProgram;
              !0 === M && (E = Zt(i, e, r));
              let b = !1,
                w = !1,
                C = !1;
              const P = E.getUniforms(),
                L = v.uniforms;
              ct.useProgram(E.program) && ((b = !0), (w = !0), (C = !0));
              i.id !== A && ((A = i.id), (w = !0));
              if (b || R !== t) {
                if (
                  (P.setValue(Dt, "projectionMatrix", t.projectionMatrix),
                  lt.logarithmicDepthBuffer &&
                    P.setValue(
                      Dt,
                      "logDepthBufFC",
                      2 / (Math.log(t.far + 1) / Math.LN2)
                    ),
                  R !== t && ((R = t), (w = !0), (C = !0)),
                  i.isShaderMaterial ||
                    i.isMeshPhongMaterial ||
                    i.isMeshToonMaterial ||
                    i.isMeshStandardMaterial ||
                    i.envMap)
                ) {
                  const e = P.map.cameraPosition;
                  void 0 !== e &&
                    e.setValue(Dt, nt.setFromMatrixPosition(t.matrixWorld));
                }
                (i.isMeshPhongMaterial ||
                  i.isMeshToonMaterial ||
                  i.isMeshLambertMaterial ||
                  i.isMeshBasicMaterial ||
                  i.isMeshStandardMaterial ||
                  i.isShaderMaterial) &&
                  P.setValue(
                    Dt,
                    "isOrthographic",
                    !0 === t.isOrthographicCamera
                  ),
                  (i.isMeshPhongMaterial ||
                    i.isMeshToonMaterial ||
                    i.isMeshLambertMaterial ||
                    i.isMeshBasicMaterial ||
                    i.isMeshStandardMaterial ||
                    i.isShaderMaterial ||
                    i.isShadowMaterial ||
                    r.isSkinnedMesh) &&
                    P.setValue(Dt, "viewMatrix", t.matrixWorldInverse);
              }
              if (r.isSkinnedMesh) {
                P.setOptional(Dt, r, "bindMatrix"),
                  P.setOptional(Dt, r, "bindMatrixInverse");
                const t = r.skeleton;
                t &&
                  (lt.floatVertexTextures
                    ? (null === t.boneTexture && t.computeBoneTexture(),
                      P.setValue(Dt, "boneTexture", t.boneTexture, dt),
                      P.setValue(Dt, "boneTextureSize", t.boneTextureSize))
                    : console.warn(
                        "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
                      ));
              }
              const U = n.morphAttributes;
              (void 0 !== U.position ||
                void 0 !== U.normal ||
                (void 0 !== U.color && !0 === lt.isWebGL2)) &&
                Tt.update(r, n, E);
              (w || v.receiveShadow !== r.receiveShadow) &&
                ((v.receiveShadow = r.receiveShadow),
                P.setValue(Dt, "receiveShadow", r.receiveShadow));
              i.isMeshGouraudMaterial &&
                null !== i.envMap &&
                ((L.envMap.value = l),
                (L.flipEnvMap.value =
                  l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1));
              w &&
                (P.setValue(Dt, "toneMappingExposure", S.toneMappingExposure),
                v.needsLights &&
                  (function (t, e) {
                    (t.ambientLightColor.needsUpdate = e),
                      (t.lightProbe.needsUpdate = e),
                      (t.directionalLights.needsUpdate = e),
                      (t.directionalLightShadows.needsUpdate = e),
                      (t.pointLights.needsUpdate = e),
                      (t.pointLightShadows.needsUpdate = e),
                      (t.spotLights.needsUpdate = e),
                      (t.spotLightShadows.needsUpdate = e),
                      (t.rectAreaLights.needsUpdate = e),
                      (t.hemisphereLights.needsUpdate = e);
                  })(L, C),
                a && !0 === i.fog && xt.refreshFogUniforms(L, a),
                xt.refreshMaterialUniforms(L, i, W, z, Q),
                ca.upload(Dt, v.uniformsList, L, dt));
              i.isShaderMaterial &&
                !0 === i.uniformsNeedUpdate &&
                (ca.upload(Dt, v.uniformsList, L, dt),
                (i.uniformsNeedUpdate = !1));
              i.isSpriteMaterial && P.setValue(Dt, "center", r.center);
              if (
                (P.setValue(Dt, "modelViewMatrix", r.modelViewMatrix),
                P.setValue(Dt, "normalMatrix", r.normalMatrix),
                P.setValue(Dt, "modelMatrix", r.matrixWorld),
                i.isShaderMaterial || i.isRawShaderMaterial)
              ) {
                const t = i.uniformsGroups;
                for (let e = 0, n = t.length; e < n; e++)
                  if (lt.isWebGL2) {
                    const n = t[e];
                    Ut.update(n, E), Ut.bind(n, E);
                  } else
                    console.warn(
                      "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
                    );
              }
              return E;
            })(t, e, n, i, r);
          ct.setMaterial(i, s);
          let l = n.index,
            c = 1;
          !0 === i.wireframe && ((l = gt.getWireframeAttribute(n)), (c = 2));
          const h = n.drawRange,
            u = n.attributes.position;
          let d = h.start * c,
            p = (h.start + h.count) * c;
          null !== a &&
            ((d = Math.max(d, a.start * c)),
            (p = Math.min(p, (a.start + a.count) * c))),
            null !== l
              ? ((d = Math.max(d, 0)), (p = Math.min(p, l.count)))
              : null != u && ((d = Math.max(d, 0)), (p = Math.min(p, u.count)));
          const m = p - d;
          if (m < 0 || m === 1 / 0) return;
          let f;
          Lt.setup(r, i, o, n, l);
          let g = At;
          if (
            (null !== l && ((f = ft.get(l)), (g = Rt), g.setIndex(f)), r.isMesh)
          )
            !0 === i.wireframe
              ? (ct.setLineWidth(i.wireframeLinewidth * rt()),
                g.setMode(Dt.LINES))
              : g.setMode(Dt.TRIANGLES);
          else if (r.isLine) {
            let t = i.linewidth;
            void 0 === t && (t = 1),
              ct.setLineWidth(t * rt()),
              r.isLineSegments
                ? g.setMode(Dt.LINES)
                : r.isLineLoop
                ? g.setMode(Dt.LINE_LOOP)
                : g.setMode(Dt.LINE_STRIP);
          } else
            r.isPoints
              ? g.setMode(Dt.POINTS)
              : r.isSprite && g.setMode(Dt.TRIANGLES);
          if (r.isInstancedMesh) g.renderInstances(d, m, r.count);
          else if (n.isInstancedBufferGeometry) {
            const t =
                void 0 !== n._maxInstanceCount ? n._maxInstanceCount : 1 / 0,
              e = Math.min(n.instanceCount, t);
            g.renderInstances(d, m, e);
          } else g.render(d, m);
        }),
        (this.compile = function (t, e) {
          function n(t, e, n) {
            !0 === t.transparent && 2 === t.side && !1 === t.forceSinglePass
              ? ((t.side = d),
                (t.needsUpdate = !0),
                Zt(t, e, n),
                (t.side = u),
                (t.needsUpdate = !0),
                Zt(t, e, n),
                (t.side = 2))
              : Zt(t, e, n);
          }
          (x = Mt.get(t)),
            x.init(),
            M.push(x),
            t.traverseVisible(function (t) {
              t.isLight &&
                t.layers.test(e.layers) &&
                (x.pushLight(t), t.castShadow && x.pushShadow(t));
            }),
            x.setupLights(S.useLegacyLights),
            t.traverse(function (e) {
              const i = e.material;
              if (i)
                if (Array.isArray(i))
                  for (let r = 0; r < i.length; r++) {
                    n(i[r], t, e);
                  }
                else n(i, t, e);
            }),
            M.pop(),
            (x = null);
        });
      let Ht = null;
      function Vt() {
        Wt.stop();
      }
      function Gt() {
        Wt.start();
      }
      const Wt = new Ei();
      function Xt(t, e, n, i) {
        if (!1 === t.visible) return;
        if (t.layers.test(e.layers))
          if (t.isGroup) n = t.renderOrder;
          else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
          else if (t.isLight) x.pushLight(t), t.castShadow && x.pushShadow(t);
          else if (t.isSprite) {
            if (!t.frustumCulled || K.intersectsSprite(t)) {
              i && nt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(tt);
              const e = _t.update(t),
                r = t.material;
              r.visible && v.push(t, e, r, n, nt.z, null);
            }
          } else if (
            (t.isMesh || t.isLine || t.isPoints) &&
            (!t.frustumCulled || K.intersectsObject(t))
          ) {
            t.isSkinnedMesh &&
              t.skeleton.frame !== ht.render.frame &&
              (t.skeleton.update(), (t.skeleton.frame = ht.render.frame));
            const e = _t.update(t),
              r = t.material;
            if (
              (i &&
                (void 0 !== t.boundingSphere
                  ? (null === t.boundingSphere && t.computeBoundingSphere(),
                    nt.copy(t.boundingSphere.center))
                  : (null === e.boundingSphere && e.computeBoundingSphere(),
                    nt.copy(e.boundingSphere.center)),
                nt.applyMatrix4(t.matrixWorld).applyMatrix4(tt)),
              Array.isArray(r))
            ) {
              const i = e.groups;
              for (let a = 0, s = i.length; a < s; a++) {
                const s = i[a],
                  o = r[s.materialIndex];
                o && o.visible && v.push(t, e, o, n, nt.z, s);
              }
            } else r.visible && v.push(t, e, r, n, nt.z, null);
          }
        const r = t.children;
        for (let t = 0, a = r.length; t < a; t++) Xt(r[t], e, n, i);
      }
      function jt(t, e, n, i) {
        const r = t.opaque,
          a = t.transmissive,
          s = t.transparent;
        x.setupLightsView(n),
          !0 === $ && St.setGlobalState(S.clippingPlanes, n),
          a.length > 0 &&
            (function (t, e, n, i) {
              const r = lt.isWebGL2;
              null === Q &&
                (Q = new $t(1, 1, {
                  generateMipmaps: !0,
                  type: ot.has("EXT_color_buffer_half_float") ? H : O,
                  minFilter: N,
                  samples: r && !0 === o ? 4 : 0,
                }));
              S.getDrawingBufferSize(et),
                r ? Q.setSize(et.x, et.y) : Q.setSize(wt(et.x), wt(et.y));
              const a = S.getRenderTarget();
              S.setRenderTarget(Q),
                S.getClearColor(U),
                (D = S.getClearAlpha()),
                D < 1 && S.setClearColor(16777215, 0.5);
              S.clear();
              const s = S.toneMapping;
              (S.toneMapping = _),
                Yt(t, n, i),
                dt.updateMultisampleRenderTarget(Q),
                dt.updateRenderTargetMipmap(Q);
              let l = !1;
              for (let t = 0, r = e.length; t < r; t++) {
                const r = e[t],
                  a = r.object,
                  s = r.geometry,
                  o = r.material,
                  c = r.group;
                if (2 === o.side && a.layers.test(i.layers)) {
                  const t = o.side;
                  (o.side = d),
                    (o.needsUpdate = !0),
                    qt(a, n, i, s, o, c),
                    (o.side = t),
                    (o.needsUpdate = !0),
                    (l = !0);
                }
              }
              !0 === l &&
                (dt.updateMultisampleRenderTarget(Q),
                dt.updateRenderTargetMipmap(Q));
              S.setRenderTarget(a), S.setClearColor(U, D), (S.toneMapping = s);
            })(r, a, e, n),
          i && ct.viewport(C.copy(i)),
          r.length > 0 && Yt(r, e, n),
          a.length > 0 && Yt(a, e, n),
          s.length > 0 && Yt(s, e, n),
          ct.buffers.depth.setTest(!0),
          ct.buffers.depth.setMask(!0),
          ct.buffers.color.setMask(!0),
          ct.setPolygonOffset(!1);
      }
      function Yt(t, e, n) {
        const i = !0 === e.isScene ? e.overrideMaterial : null;
        for (let r = 0, a = t.length; r < a; r++) {
          const a = t[r],
            s = a.object,
            o = a.geometry,
            l = null === i ? a.material : i,
            c = a.group;
          s.layers.test(n.layers) && qt(s, e, n, o, l, c);
        }
      }
      function qt(t, e, n, i, r, a) {
        t.onBeforeRender(S, e, n, i, r, a),
          t.modelViewMatrix.multiplyMatrices(
            n.matrixWorldInverse,
            t.matrixWorld
          ),
          t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
          r.onBeforeRender(S, e, n, i, t, a),
          !0 === r.transparent && 2 === r.side && !1 === r.forceSinglePass
            ? ((r.side = d),
              (r.needsUpdate = !0),
              S.renderBufferDirect(n, e, i, r, t, a),
              (r.side = u),
              (r.needsUpdate = !0),
              S.renderBufferDirect(n, e, i, r, t, a),
              (r.side = 2))
            : S.renderBufferDirect(n, e, i, r, t, a),
          t.onAfterRender(S, e, n, i, r, a);
      }
      function Zt(t, e, n) {
        !0 !== e.isScene && (e = it);
        const i = ut.get(t),
          r = x.state.lights,
          a = x.state.shadowsArray,
          s = r.state.version,
          o = vt.getParameters(t, r.state, a, e, n),
          l = vt.getProgramCacheKey(o);
        let c = i.programs;
        (i.environment = t.isMeshStandardMaterial ? e.environment : null),
          (i.fog = e.fog),
          (i.envMap = (t.isMeshStandardMaterial ? mt : pt).get(
            t.envMap || i.environment
          )),
          void 0 === c &&
            (t.addEventListener("dispose", kt),
            (c = new Map()),
            (i.programs = c));
        let h = c.get(l);
        if (void 0 !== h) {
          if (i.currentProgram === h && i.lightsStateVersion === s)
            return Jt(t, o), h;
        } else
          (o.uniforms = vt.getUniforms(t)),
            t.onBuild(n, o, S),
            t.onBeforeCompile(o, S),
            (h = vt.acquireProgram(o, l)),
            c.set(l, h),
            (i.uniforms = o.uniforms);
        const u = i.uniforms;
        ((t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping) ||
          (u.clippingPlanes = St.uniform),
          Jt(t, o),
          (i.needsLights = (function (t) {
            return (
              t.isMeshLambertMaterial ||
              t.isMeshToonMaterial ||
              t.isMeshPhongMaterial ||
              t.isMeshStandardMaterial ||
              t.isShadowMaterial ||
              (t.isShaderMaterial && !0 === t.lights)
            );
          })(t)),
          (i.lightsStateVersion = s),
          i.needsLights &&
            ((u.ambientLightColor.value = r.state.ambient),
            (u.lightProbe.value = r.state.probe),
            (u.directionalLights.value = r.state.directional),
            (u.directionalLightShadows.value = r.state.directionalShadow),
            (u.spotLights.value = r.state.spot),
            (u.spotLightShadows.value = r.state.spotShadow),
            (u.rectAreaLights.value = r.state.rectArea),
            (u.ltc_1.value = r.state.rectAreaLTC1),
            (u.ltc_2.value = r.state.rectAreaLTC2),
            (u.pointLights.value = r.state.point),
            (u.pointLightShadows.value = r.state.pointShadow),
            (u.hemisphereLights.value = r.state.hemi),
            (u.directionalShadowMap.value = r.state.directionalShadowMap),
            (u.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
            (u.spotShadowMap.value = r.state.spotShadowMap),
            (u.spotLightMatrix.value = r.state.spotLightMatrix),
            (u.spotLightMap.value = r.state.spotLightMap),
            (u.pointShadowMap.value = r.state.pointShadowMap),
            (u.pointShadowMatrix.value = r.state.pointShadowMatrix));
        const d = h.getUniforms(),
          p = ca.seqWithValue(d.seq, u);
        return (i.currentProgram = h), (i.uniformsList = p), h;
      }
      function Jt(t, e) {
        const n = ut.get(t);
        (n.outputColorSpace = e.outputColorSpace),
          (n.instancing = e.instancing),
          (n.skinning = e.skinning),
          (n.morphTargets = e.morphTargets),
          (n.morphNormals = e.morphNormals),
          (n.morphColors = e.morphColors),
          (n.morphTargetsCount = e.morphTargetsCount),
          (n.numClippingPlanes = e.numClippingPlanes),
          (n.numIntersection = e.numClipIntersection),
          (n.vertexAlphas = e.vertexAlphas),
          (n.vertexTangents = e.vertexTangents),
          (n.toneMapping = e.toneMapping);
      }
      Wt.setAnimationLoop(function (t) {
        Ht && Ht(t);
      }),
        "undefined" != typeof self && Wt.setContext(self),
        (this.setAnimationLoop = function (t) {
          (Ht = t), Ot.setAnimationLoop(t), null === t ? Wt.stop() : Wt.start();
        }),
        Ot.addEventListener("sessionstart", Vt),
        Ot.addEventListener("sessionend", Gt),
        (this.render = function (t, e) {
          if (void 0 !== e && !0 !== e.isCamera)
            return void console.error(
              "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
            );
          if (!0 === E) return;
          !0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(),
            null === e.parent &&
              !0 === e.matrixWorldAutoUpdate &&
              e.updateMatrixWorld(),
            !0 === Ot.enabled &&
              !0 === Ot.isPresenting &&
              (e = Ot.updateCameraXR(e)),
            !0 === t.isScene && t.onBeforeRender(S, t, e, T),
            (x = Mt.get(t, M.length)),
            x.init(),
            M.push(x),
            tt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
            K.setFromProjectionMatrix(tt),
            (J = this.localClippingEnabled),
            ($ = St.init(this.clippingPlanes, J)),
            (v = yt.get(t, y.length)),
            v.init(),
            y.push(v),
            Xt(t, e, 0, S.sortObjects),
            v.finish(),
            !0 === S.sortObjects && v.sort(X, j),
            !0 === $ && St.beginShadows();
          const n = x.state.shadowsArray;
          if (
            (Et.render(n, t, e),
            !0 === $ && St.endShadows(),
            !0 === this.info.autoReset && this.info.reset(),
            this.info.render.frame++,
            bt.render(v, t),
            x.setupLights(S.useLegacyLights),
            e.isArrayCamera)
          ) {
            const n = e.cameras;
            for (let e = 0, i = n.length; e < i; e++) {
              const i = n[e];
              jt(v, t, i, i.viewport);
            }
          } else jt(v, t, e);
          null !== T &&
            (dt.updateMultisampleRenderTarget(T),
            dt.updateRenderTargetMipmap(T)),
            !0 === t.isScene && t.onAfterRender(S, t, e),
            Lt.resetDefaultState(),
            (A = -1),
            (R = null),
            M.pop(),
            (x = M.length > 0 ? M[M.length - 1] : null),
            y.pop(),
            (v = y.length > 0 ? y[y.length - 1] : null);
        }),
        (this.getActiveCubeFace = function () {
          return b;
        }),
        (this.getActiveMipmapLevel = function () {
          return w;
        }),
        (this.getRenderTarget = function () {
          return T;
        }),
        (this.setRenderTargetTextures = function (t, e, n) {
          (ut.get(t.texture).__webglTexture = e),
            (ut.get(t.depthTexture).__webglTexture = n);
          const i = ut.get(t);
          (i.__hasExternalTextures = !0),
            i.__hasExternalTextures &&
              ((i.__autoAllocateDepthBuffer = void 0 === n),
              i.__autoAllocateDepthBuffer ||
                (!0 === ot.has("WEBGL_multisampled_render_to_texture") &&
                  (console.warn(
                    "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
                  ),
                  (i.__useRenderToTexture = !1))));
        }),
        (this.setRenderTargetFramebuffer = function (t, e) {
          const n = ut.get(t);
          (n.__webglFramebuffer = e),
            (n.__useDefaultFramebuffer = void 0 === e);
        }),
        (this.setRenderTarget = function (t, e = 0, n = 0) {
          (T = t), (b = e), (w = n);
          let i = !0,
            r = null,
            a = !1,
            s = !1;
          if (t) {
            const n = ut.get(t);
            void 0 !== n.__useDefaultFramebuffer
              ? (ct.bindFramebuffer(Dt.FRAMEBUFFER, null), (i = !1))
              : void 0 === n.__webglFramebuffer
              ? dt.setupRenderTarget(t)
              : n.__hasExternalTextures &&
                dt.rebindTextures(
                  t,
                  ut.get(t.texture).__webglTexture,
                  ut.get(t.depthTexture).__webglTexture
                );
            const o = t.texture;
            (o.isData3DTexture ||
              o.isDataArrayTexture ||
              o.isCompressedArrayTexture) &&
              (s = !0);
            const l = ut.get(t).__webglFramebuffer;
            t.isWebGLCubeRenderTarget
              ? ((r = l[e]), (a = !0))
              : (r =
                  lt.isWebGL2 &&
                  t.samples > 0 &&
                  !1 === dt.useMultisampledRTT(t)
                    ? ut.get(t).__webglMultisampledFramebuffer
                    : l),
              C.copy(t.viewport),
              P.copy(t.scissor),
              (L = t.scissorTest);
          } else
            C.copy(Y).multiplyScalar(W).floor(),
              P.copy(q).multiplyScalar(W).floor(),
              (L = Z);
          if (
            (ct.bindFramebuffer(Dt.FRAMEBUFFER, r) &&
              lt.drawBuffers &&
              i &&
              ct.drawBuffers(t, r),
            ct.viewport(C),
            ct.scissor(P),
            ct.setScissorTest(L),
            a)
          ) {
            const i = ut.get(t.texture);
            Dt.framebufferTexture2D(
              Dt.FRAMEBUFFER,
              Dt.COLOR_ATTACHMENT0,
              Dt.TEXTURE_CUBE_MAP_POSITIVE_X + e,
              i.__webglTexture,
              n
            );
          } else if (s) {
            const i = ut.get(t.texture),
              r = e || 0;
            Dt.framebufferTextureLayer(
              Dt.FRAMEBUFFER,
              Dt.COLOR_ATTACHMENT0,
              i.__webglTexture,
              n || 0,
              r
            );
          }
          A = -1;
        }),
        (this.readRenderTargetPixels = function (t, e, n, i, r, a, s) {
          if (!t || !t.isWebGLRenderTarget)
            return void console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
            );
          let o = ut.get(t).__webglFramebuffer;
          if ((t.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o)) {
            ct.bindFramebuffer(Dt.FRAMEBUFFER, o);
            try {
              const s = t.texture,
                o = s.format,
                l = s.type;
              if (
                o !== G &&
                Pt.convert(o) !==
                  Dt.getParameter(Dt.IMPLEMENTATION_COLOR_READ_FORMAT)
              )
                return void console.error(
                  "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
                );
              const c =
                l === H &&
                (ot.has("EXT_color_buffer_half_float") ||
                  (lt.isWebGL2 && ot.has("EXT_color_buffer_float")));
              if (
                !(
                  l === O ||
                  Pt.convert(l) ===
                    Dt.getParameter(Dt.IMPLEMENTATION_COLOR_READ_TYPE) ||
                  (l === k &&
                    (lt.isWebGL2 ||
                      ot.has("OES_texture_float") ||
                      ot.has("WEBGL_color_buffer_float"))) ||
                  c
                )
              )
                return void console.error(
                  "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
                );
              e >= 0 &&
                e <= t.width - i &&
                n >= 0 &&
                n <= t.height - r &&
                Dt.readPixels(e, n, i, r, Pt.convert(o), Pt.convert(l), a);
            } finally {
              const t = null !== T ? ut.get(T).__webglFramebuffer : null;
              ct.bindFramebuffer(Dt.FRAMEBUFFER, t);
            }
          }
        }),
        (this.copyFramebufferToTexture = function (t, e, n = 0) {
          const i = Math.pow(2, -n),
            r = Math.floor(e.image.width * i),
            a = Math.floor(e.image.height * i);
          dt.setTexture2D(e, 0),
            Dt.copyTexSubImage2D(Dt.TEXTURE_2D, n, 0, 0, t.x, t.y, r, a),
            ct.unbindTexture();
        }),
        (this.copyTextureToTexture = function (t, e, n, i = 0) {
          const r = e.image.width,
            a = e.image.height,
            s = Pt.convert(n.format),
            o = Pt.convert(n.type);
          dt.setTexture2D(n, 0),
            Dt.pixelStorei(Dt.UNPACK_FLIP_Y_WEBGL, n.flipY),
            Dt.pixelStorei(
              Dt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
              n.premultiplyAlpha
            ),
            Dt.pixelStorei(Dt.UNPACK_ALIGNMENT, n.unpackAlignment),
            e.isDataTexture
              ? Dt.texSubImage2D(
                  Dt.TEXTURE_2D,
                  i,
                  t.x,
                  t.y,
                  r,
                  a,
                  s,
                  o,
                  e.image.data
                )
              : e.isCompressedTexture
              ? Dt.compressedTexSubImage2D(
                  Dt.TEXTURE_2D,
                  i,
                  t.x,
                  t.y,
                  e.mipmaps[0].width,
                  e.mipmaps[0].height,
                  s,
                  e.mipmaps[0].data
                )
              : Dt.texSubImage2D(Dt.TEXTURE_2D, i, t.x, t.y, s, o, e.image),
            0 === i && n.generateMipmaps && Dt.generateMipmap(Dt.TEXTURE_2D),
            ct.unbindTexture();
        }),
        (this.copyTextureToTexture3D = function (t, e, n, i, r = 0) {
          if (S.isWebGL1Renderer)
            return void console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
            );
          const a = t.max.x - t.min.x + 1,
            s = t.max.y - t.min.y + 1,
            o = t.max.z - t.min.z + 1,
            l = Pt.convert(i.format),
            c = Pt.convert(i.type);
          let h;
          if (i.isData3DTexture) dt.setTexture3D(i, 0), (h = Dt.TEXTURE_3D);
          else {
            if (!i.isDataArrayTexture)
              return void console.warn(
                "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
              );
            dt.setTexture2DArray(i, 0), (h = Dt.TEXTURE_2D_ARRAY);
          }
          Dt.pixelStorei(Dt.UNPACK_FLIP_Y_WEBGL, i.flipY),
            Dt.pixelStorei(
              Dt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
              i.premultiplyAlpha
            ),
            Dt.pixelStorei(Dt.UNPACK_ALIGNMENT, i.unpackAlignment);
          const u = Dt.getParameter(Dt.UNPACK_ROW_LENGTH),
            d = Dt.getParameter(Dt.UNPACK_IMAGE_HEIGHT),
            p = Dt.getParameter(Dt.UNPACK_SKIP_PIXELS),
            m = Dt.getParameter(Dt.UNPACK_SKIP_ROWS),
            f = Dt.getParameter(Dt.UNPACK_SKIP_IMAGES),
            g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
          Dt.pixelStorei(Dt.UNPACK_ROW_LENGTH, g.width),
            Dt.pixelStorei(Dt.UNPACK_IMAGE_HEIGHT, g.height),
            Dt.pixelStorei(Dt.UNPACK_SKIP_PIXELS, t.min.x),
            Dt.pixelStorei(Dt.UNPACK_SKIP_ROWS, t.min.y),
            Dt.pixelStorei(Dt.UNPACK_SKIP_IMAGES, t.min.z),
            n.isDataTexture || n.isData3DTexture
              ? Dt.texSubImage3D(h, r, e.x, e.y, e.z, a, s, o, l, c, g.data)
              : n.isCompressedArrayTexture
              ? (console.warn(
                  "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
                ),
                Dt.compressedTexSubImage3D(
                  h,
                  r,
                  e.x,
                  e.y,
                  e.z,
                  a,
                  s,
                  o,
                  l,
                  g.data
                ))
              : Dt.texSubImage3D(h, r, e.x, e.y, e.z, a, s, o, l, c, g),
            Dt.pixelStorei(Dt.UNPACK_ROW_LENGTH, u),
            Dt.pixelStorei(Dt.UNPACK_IMAGE_HEIGHT, d),
            Dt.pixelStorei(Dt.UNPACK_SKIP_PIXELS, p),
            Dt.pixelStorei(Dt.UNPACK_SKIP_ROWS, m),
            Dt.pixelStorei(Dt.UNPACK_SKIP_IMAGES, f),
            0 === r && i.generateMipmaps && Dt.generateMipmap(h),
            ct.unbindTexture();
        }),
        (this.initTexture = function (t) {
          t.isCubeTexture
            ? dt.setTextureCube(t, 0)
            : t.isData3DTexture
            ? dt.setTexture3D(t, 0)
            : t.isDataArrayTexture || t.isCompressedArrayTexture
            ? dt.setTexture2DArray(t, 0)
            : dt.setTexture2D(t, 0),
            ct.unbindTexture();
        }),
        (this.resetState = function () {
          (b = 0), (w = 0), (T = null), ct.reset(), Lt.reset();
        }),
        "undefined" != typeof __THREE_DEVTOOLS__ &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent("observe", { detail: this })
          );
    }
    get coordinateSystem() {
      return dt;
    }
    get physicallyCorrectLights() {
      return (
        console.warn(
          "THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
        ),
        !this.useLegacyLights
      );
    }
    set physicallyCorrectLights(t) {
      console.warn(
        "THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
      ),
        (this.useLegacyLights = !t);
    }
    get outputEncoding() {
      return (
        console.warn(
          "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."
        ),
        this.outputColorSpace === at ? it : 3e3
      );
    }
    set outputEncoding(t) {
      console.warn(
        "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."
      ),
        (this.outputColorSpace = t === it ? at : st);
    }
  }
  (class extends ns {}).prototype.isWebGL1Renderer = !0;
  class is extends nn {
    constructor() {
      super(),
        (this.isScene = !0),
        (this.type = "Scene"),
        (this.background = null),
        (this.environment = null),
        (this.fog = null),
        (this.backgroundBlurriness = 0),
        (this.backgroundIntensity = 1),
        (this.overrideMaterial = null),
        "undefined" != typeof __THREE_DEVTOOLS__ &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent("observe", { detail: this })
          );
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        null !== t.background && (this.background = t.background.clone()),
        null !== t.environment && (this.environment = t.environment.clone()),
        null !== t.fog && (this.fog = t.fog.clone()),
        (this.backgroundBlurriness = t.backgroundBlurriness),
        (this.backgroundIntensity = t.backgroundIntensity),
        null !== t.overrideMaterial &&
          (this.overrideMaterial = t.overrideMaterial.clone()),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        this
      );
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        null !== this.fog && (e.object.fog = this.fog.toJSON()),
        this.backgroundBlurriness > 0 &&
          (e.object.backgroundBlurriness = this.backgroundBlurriness),
        1 !== this.backgroundIntensity &&
          (e.object.backgroundIntensity = this.backgroundIntensity),
        e
      );
    }
    get autoUpdate() {
      return (
        console.warn(
          "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
        ),
        this.matrixWorldAutoUpdate
      );
    }
    set autoUpdate(t) {
      console.warn(
        "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
      ),
        (this.matrixWorldAutoUpdate = t);
    }
  }
  class rs extends _n {
    constructor(t) {
      super(),
        (this.isLineBasicMaterial = !0),
        (this.type = "LineBasicMaterial"),
        (this.color = new Sn(16777215)),
        (this.map = null),
        (this.linewidth = 1),
        (this.linecap = "round"),
        (this.linejoin = "round"),
        (this.fog = !0),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.linewidth = t.linewidth),
        (this.linecap = t.linecap),
        (this.linejoin = t.linejoin),
        (this.fog = t.fog),
        this
      );
    }
  }
  const as = new ee(),
    ss = new ee(),
    os = new Le(),
    ls = new Pe(),
    cs = new Se();
  class hs extends nn {
    constructor(t = new zn(), e = new rs()) {
      super(),
        (this.isLine = !0),
        (this.type = "Line"),
        (this.geometry = t),
        (this.material = e),
        this.updateMorphTargets();
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.material = t.material),
        (this.geometry = t.geometry),
        this
      );
    }
    computeLineDistances() {
      const t = this.geometry;
      if (null === t.index) {
        const e = t.attributes.position,
          n = [0];
        for (let t = 1, i = e.count; t < i; t++)
          as.fromBufferAttribute(e, t - 1),
            ss.fromBufferAttribute(e, t),
            (n[t] = n[t - 1]),
            (n[t] += as.distanceTo(ss));
        t.setAttribute("lineDistance", new Pn(n, 1));
      } else
        console.warn(
          "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
        );
      return this;
    }
    raycast(t, e) {
      const n = this.geometry,
        i = this.matrixWorld,
        r = t.params.Line.threshold,
        a = n.drawRange;
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        cs.copy(n.boundingSphere),
        cs.applyMatrix4(i),
        (cs.radius += r),
        !1 === t.ray.intersectsSphere(cs))
      )
        return;
      os.copy(i).invert(), ls.copy(t.ray).applyMatrix4(os);
      const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        o = s * s,
        l = new ee(),
        c = new ee(),
        h = new ee(),
        u = new ee(),
        d = this.isLineSegments ? 2 : 1,
        p = n.index,
        m = n.attributes.position;
      if (null !== p) {
        for (
          let n = Math.max(0, a.start),
            i = Math.min(p.count, a.start + a.count) - 1;
          n < i;
          n += d
        ) {
          const i = p.getX(n),
            r = p.getX(n + 1);
          l.fromBufferAttribute(m, i), c.fromBufferAttribute(m, r);
          if (ls.distanceSqToSegment(l, c, u, h) > o) continue;
          u.applyMatrix4(this.matrixWorld);
          const a = t.ray.origin.distanceTo(u);
          a < t.near ||
            a > t.far ||
            e.push({
              distance: a,
              point: h.clone().applyMatrix4(this.matrixWorld),
              index: n,
              face: null,
              faceIndex: null,
              object: this,
            });
        }
      } else {
        for (
          let n = Math.max(0, a.start),
            i = Math.min(m.count, a.start + a.count) - 1;
          n < i;
          n += d
        ) {
          l.fromBufferAttribute(m, n), c.fromBufferAttribute(m, n + 1);
          if (ls.distanceSqToSegment(l, c, u, h) > o) continue;
          u.applyMatrix4(this.matrixWorld);
          const i = t.ray.origin.distanceTo(u);
          i < t.near ||
            i > t.far ||
            e.push({
              distance: i,
              point: h.clone().applyMatrix4(this.matrixWorld),
              index: n,
              face: null,
              faceIndex: null,
              object: this,
            });
        }
      }
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes,
        e = Object.keys(t);
      if (e.length > 0) {
        const n = t[e[0]];
        if (void 0 !== n) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let t = 0, e = n.length; t < e; t++) {
            const e = n[t].name || String(t);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[e] = t);
          }
        }
      }
    }
  }
  class us extends zn {
    constructor(
      t = 1,
      e = 1,
      n = 1,
      i = 32,
      r = 1,
      a = !1,
      s = 0,
      o = 2 * Math.PI
    ) {
      super(),
        (this.type = "CylinderGeometry"),
        (this.parameters = {
          radiusTop: t,
          radiusBottom: e,
          height: n,
          radialSegments: i,
          heightSegments: r,
          openEnded: a,
          thetaStart: s,
          thetaLength: o,
        });
      const l = this;
      (i = Math.floor(i)), (r = Math.floor(r));
      const c = [],
        h = [],
        u = [],
        d = [];
      let p = 0;
      const m = [],
        f = n / 2;
      let g = 0;
      function _(n) {
        const r = p,
          a = new Ct(),
          m = new ee();
        let _ = 0;
        const v = !0 === n ? t : e,
          x = !0 === n ? 1 : -1;
        for (let t = 1; t <= i; t++)
          h.push(0, f * x, 0), u.push(0, x, 0), d.push(0.5, 0.5), p++;
        const y = p;
        for (let t = 0; t <= i; t++) {
          const e = (t / i) * o + s,
            n = Math.cos(e),
            r = Math.sin(e);
          (m.x = v * r),
            (m.y = f * x),
            (m.z = v * n),
            h.push(m.x, m.y, m.z),
            u.push(0, x, 0),
            (a.x = 0.5 * n + 0.5),
            (a.y = 0.5 * r * x + 0.5),
            d.push(a.x, a.y),
            p++;
        }
        for (let t = 0; t < i; t++) {
          const e = r + t,
            i = y + t;
          !0 === n ? c.push(i, i + 1, e) : c.push(i + 1, i, e), (_ += 3);
        }
        l.addGroup(g, _, !0 === n ? 1 : 2), (g += _);
      }
      !(function () {
        const a = new ee(),
          _ = new ee();
        let v = 0;
        const x = (e - t) / n;
        for (let l = 0; l <= r; l++) {
          const c = [],
            g = l / r,
            v = g * (e - t) + t;
          for (let t = 0; t <= i; t++) {
            const e = t / i,
              r = e * o + s,
              l = Math.sin(r),
              m = Math.cos(r);
            (_.x = v * l),
              (_.y = -g * n + f),
              (_.z = v * m),
              h.push(_.x, _.y, _.z),
              a.set(l, x, m).normalize(),
              u.push(a.x, a.y, a.z),
              d.push(e, 1 - g),
              c.push(p++);
          }
          m.push(c);
        }
        for (let t = 0; t < i; t++)
          for (let e = 0; e < r; e++) {
            const n = m[e][t],
              i = m[e + 1][t],
              r = m[e + 1][t + 1],
              a = m[e][t + 1];
            c.push(n, i, a), c.push(i, r, a), (v += 6);
          }
        l.addGroup(g, v, 0), (g += v);
      })(),
        !1 === a && (t > 0 && _(!0), e > 0 && _(!1)),
        this.setIndex(c),
        this.setAttribute("position", new Pn(h, 3)),
        this.setAttribute("normal", new Pn(u, 3)),
        this.setAttribute("uv", new Pn(d, 2));
    }
    copy(t) {
      return (
        super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
      );
    }
    static fromJSON(t) {
      return new us(
        t.radiusTop,
        t.radiusBottom,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength
      );
    }
  }
  class ds extends us {
    constructor(t = 1, e = 1, n = 32, i = 1, r = !1, a = 0, s = 2 * Math.PI) {
      super(0, t, e, n, i, r, a, s),
        (this.type = "ConeGeometry"),
        (this.parameters = {
          radius: t,
          height: e,
          radialSegments: n,
          heightSegments: i,
          openEnded: r,
          thetaStart: a,
          thetaLength: s,
        });
    }
    static fromJSON(t) {
      return new ds(
        t.radius,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength
      );
    }
  }
  class ps extends zn {
    constructor(t = [], e = [], n = 1, i = 0) {
      super(),
        (this.type = "PolyhedronGeometry"),
        (this.parameters = { vertices: t, indices: e, radius: n, detail: i });
      const r = [],
        a = [];
      function s(t, e, n, i) {
        const r = i + 1,
          a = [];
        for (let i = 0; i <= r; i++) {
          a[i] = [];
          const s = t.clone().lerp(n, i / r),
            o = e.clone().lerp(n, i / r),
            l = r - i;
          for (let t = 0; t <= l; t++)
            a[i][t] = 0 === t && i === r ? s : s.clone().lerp(o, t / l);
        }
        for (let t = 0; t < r; t++)
          for (let e = 0; e < 2 * (r - t) - 1; e++) {
            const n = Math.floor(e / 2);
            e % 2 == 0
              ? (o(a[t][n + 1]), o(a[t + 1][n]), o(a[t][n]))
              : (o(a[t][n + 1]), o(a[t + 1][n + 1]), o(a[t + 1][n]));
          }
      }
      function o(t) {
        r.push(t.x, t.y, t.z);
      }
      function l(e, n) {
        const i = 3 * e;
        (n.x = t[i + 0]), (n.y = t[i + 1]), (n.z = t[i + 2]);
      }
      function c(t, e, n, i) {
        i < 0 && 1 === t.x && (a[e] = t.x - 1),
          0 === n.x && 0 === n.z && (a[e] = i / 2 / Math.PI + 0.5);
      }
      function h(t) {
        return Math.atan2(t.z, -t.x);
      }
      !(function (t) {
        const n = new ee(),
          i = new ee(),
          r = new ee();
        for (let a = 0; a < e.length; a += 3)
          l(e[a + 0], n), l(e[a + 1], i), l(e[a + 2], r), s(n, i, r, t);
      })(i),
        (function (t) {
          const e = new ee();
          for (let n = 0; n < r.length; n += 3)
            (e.x = r[n + 0]),
              (e.y = r[n + 1]),
              (e.z = r[n + 2]),
              e.normalize().multiplyScalar(t),
              (r[n + 0] = e.x),
              (r[n + 1] = e.y),
              (r[n + 2] = e.z);
        })(n),
        (function () {
          const t = new ee();
          for (let n = 0; n < r.length; n += 3) {
            (t.x = r[n + 0]), (t.y = r[n + 1]), (t.z = r[n + 2]);
            const i = h(t) / 2 / Math.PI + 0.5,
              s =
                ((e = t),
                Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI +
                  0.5);
            a.push(i, 1 - s);
          }
          var e;
          (function () {
            const t = new ee(),
              e = new ee(),
              n = new ee(),
              i = new ee(),
              s = new Ct(),
              o = new Ct(),
              l = new Ct();
            for (let u = 0, d = 0; u < r.length; u += 9, d += 6) {
              t.set(r[u + 0], r[u + 1], r[u + 2]),
                e.set(r[u + 3], r[u + 4], r[u + 5]),
                n.set(r[u + 6], r[u + 7], r[u + 8]),
                s.set(a[d + 0], a[d + 1]),
                o.set(a[d + 2], a[d + 3]),
                l.set(a[d + 4], a[d + 5]),
                i.copy(t).add(e).add(n).divideScalar(3);
              const p = h(i);
              c(s, d + 0, t, p), c(o, d + 2, e, p), c(l, d + 4, n, p);
            }
          })(),
            (function () {
              for (let t = 0; t < a.length; t += 6) {
                const e = a[t + 0],
                  n = a[t + 2],
                  i = a[t + 4],
                  r = Math.max(e, n, i),
                  s = Math.min(e, n, i);
                r > 0.9 &&
                  s < 0.1 &&
                  (e < 0.2 && (a[t + 0] += 1),
                  n < 0.2 && (a[t + 2] += 1),
                  i < 0.2 && (a[t + 4] += 1));
              }
            })();
        })(),
        this.setAttribute("position", new Pn(r, 3)),
        this.setAttribute("normal", new Pn(r.slice(), 3)),
        this.setAttribute("uv", new Pn(a, 2)),
        0 === i ? this.computeVertexNormals() : this.normalizeNormals();
    }
    copy(t) {
      return (
        super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
      );
    }
    static fromJSON(t) {
      return new ps(t.vertices, t.indices, t.radius, t.details);
    }
  }
  class ms extends ps {
    constructor(t = 1, e = 0) {
      super(
        [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
        [
          0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4,
          2,
        ],
        t,
        e
      ),
        (this.type = "OctahedronGeometry"),
        (this.parameters = { radius: t, detail: e });
    }
    static fromJSON(t) {
      return new ms(t.radius, t.detail);
    }
  }
  class fs extends zn {
    constructor(
      t = 1,
      e = 32,
      n = 16,
      i = 0,
      r = 2 * Math.PI,
      a = 0,
      s = Math.PI
    ) {
      super(),
        (this.type = "SphereGeometry"),
        (this.parameters = {
          radius: t,
          widthSegments: e,
          heightSegments: n,
          phiStart: i,
          phiLength: r,
          thetaStart: a,
          thetaLength: s,
        }),
        (e = Math.max(3, Math.floor(e))),
        (n = Math.max(2, Math.floor(n)));
      const o = Math.min(a + s, Math.PI);
      let l = 0;
      const c = [],
        h = new ee(),
        u = new ee(),
        d = [],
        p = [],
        m = [],
        f = [];
      for (let d = 0; d <= n; d++) {
        const g = [],
          _ = d / n;
        let v = 0;
        0 === d && 0 === a
          ? (v = 0.5 / e)
          : d === n && o === Math.PI && (v = -0.5 / e);
        for (let n = 0; n <= e; n++) {
          const o = n / e;
          (h.x = -t * Math.cos(i + o * r) * Math.sin(a + _ * s)),
            (h.y = t * Math.cos(a + _ * s)),
            (h.z = t * Math.sin(i + o * r) * Math.sin(a + _ * s)),
            p.push(h.x, h.y, h.z),
            u.copy(h).normalize(),
            m.push(u.x, u.y, u.z),
            f.push(o + v, 1 - _),
            g.push(l++);
        }
        c.push(g);
      }
      for (let t = 0; t < n; t++)
        for (let i = 0; i < e; i++) {
          const e = c[t][i + 1],
            r = c[t][i],
            s = c[t + 1][i],
            l = c[t + 1][i + 1];
          (0 !== t || a > 0) && d.push(e, r, l),
            (t !== n - 1 || o < Math.PI) && d.push(r, s, l);
        }
      this.setIndex(d),
        this.setAttribute("position", new Pn(p, 3)),
        this.setAttribute("normal", new Pn(m, 3)),
        this.setAttribute("uv", new Pn(f, 2));
    }
    copy(t) {
      return (
        super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
      );
    }
    static fromJSON(t) {
      return new fs(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength
      );
    }
  }
  class gs extends zn {
    constructor(t = 1, e = 0.4, n = 12, i = 48, r = 2 * Math.PI) {
      super(),
        (this.type = "TorusGeometry"),
        (this.parameters = {
          radius: t,
          tube: e,
          radialSegments: n,
          tubularSegments: i,
          arc: r,
        }),
        (n = Math.floor(n)),
        (i = Math.floor(i));
      const a = [],
        s = [],
        o = [],
        l = [],
        c = new ee(),
        h = new ee(),
        u = new ee();
      for (let a = 0; a <= n; a++)
        for (let d = 0; d <= i; d++) {
          const p = (d / i) * r,
            m = (a / n) * Math.PI * 2;
          (h.x = (t + e * Math.cos(m)) * Math.cos(p)),
            (h.y = (t + e * Math.cos(m)) * Math.sin(p)),
            (h.z = e * Math.sin(m)),
            s.push(h.x, h.y, h.z),
            (c.x = t * Math.cos(p)),
            (c.y = t * Math.sin(p)),
            u.subVectors(h, c).normalize(),
            o.push(u.x, u.y, u.z),
            l.push(d / i),
            l.push(a / n);
        }
      for (let t = 1; t <= n; t++)
        for (let e = 1; e <= i; e++) {
          const n = (i + 1) * t + e - 1,
            r = (i + 1) * (t - 1) + e - 1,
            s = (i + 1) * (t - 1) + e,
            o = (i + 1) * t + e;
          a.push(n, r, o), a.push(r, s, o);
        }
      this.setIndex(a),
        this.setAttribute("position", new Pn(s, 3)),
        this.setAttribute("normal", new Pn(o, 3)),
        this.setAttribute("uv", new Pn(l, 2));
    }
    copy(t) {
      return (
        super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
      );
    }
    static fromJSON(t) {
      return new gs(
        t.radius,
        t.tube,
        t.radialSegments,
        t.tubularSegments,
        t.arc
      );
    }
  }
  class _s extends _n {
    constructor(t) {
      super(),
        (this.isMeshStandardMaterial = !0),
        (this.defines = { STANDARD: "" }),
        (this.type = "MeshStandardMaterial"),
        (this.color = new Sn(16777215)),
        (this.roughness = 1),
        (this.metalness = 0),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new Sn(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = 0),
        (this.normalScale = new Ct(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.roughnessMap = null),
        (this.metalnessMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapIntensity = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.flatShading = !1),
        (this.fog = !0),
        this.setValues(t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.defines = { STANDARD: "" }),
        this.color.copy(t.color),
        (this.roughness = t.roughness),
        (this.metalness = t.metalness),
        (this.map = t.map),
        (this.lightMap = t.lightMap),
        (this.lightMapIntensity = t.lightMapIntensity),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        this.emissive.copy(t.emissive),
        (this.emissiveMap = t.emissiveMap),
        (this.emissiveIntensity = t.emissiveIntensity),
        (this.bumpMap = t.bumpMap),
        (this.bumpScale = t.bumpScale),
        (this.normalMap = t.normalMap),
        (this.normalMapType = t.normalMapType),
        this.normalScale.copy(t.normalScale),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        (this.roughnessMap = t.roughnessMap),
        (this.metalnessMap = t.metalnessMap),
        (this.alphaMap = t.alphaMap),
        (this.envMap = t.envMap),
        (this.envMapIntensity = t.envMapIntensity),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.flatShading = t.flatShading),
        (this.fog = t.fog),
        this
      );
    }
  }
  class vs extends _s {
    constructor(t) {
      super(),
        (this.isMeshPhysicalMaterial = !0),
        (this.defines = { STANDARD: "", PHYSICAL: "" }),
        (this.type = "MeshPhysicalMaterial"),
        (this.anisotropyRotation = 0),
        (this.anisotropyMap = null),
        (this.clearcoatMap = null),
        (this.clearcoatRoughness = 0),
        (this.clearcoatRoughnessMap = null),
        (this.clearcoatNormalScale = new Ct(1, 1)),
        (this.clearcoatNormalMap = null),
        (this.ior = 1.5),
        Object.defineProperty(this, "reflectivity", {
          get: function () {
            return yt((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
          },
          set: function (t) {
            this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
          },
        }),
        (this.iridescenceMap = null),
        (this.iridescenceIOR = 1.3),
        (this.iridescenceThicknessRange = [100, 400]),
        (this.iridescenceThicknessMap = null),
        (this.sheenColor = new Sn(0)),
        (this.sheenColorMap = null),
        (this.sheenRoughness = 1),
        (this.sheenRoughnessMap = null),
        (this.transmissionMap = null),
        (this.thickness = 0),
        (this.thicknessMap = null),
        (this.attenuationDistance = 1 / 0),
        (this.attenuationColor = new Sn(1, 1, 1)),
        (this.specularIntensity = 1),
        (this.specularIntensityMap = null),
        (this.specularColor = new Sn(1, 1, 1)),
        (this.specularColorMap = null),
        (this._anisotropy = 0),
        (this._clearcoat = 0),
        (this._iridescence = 0),
        (this._sheen = 0),
        (this._transmission = 0),
        this.setValues(t);
    }
    get anisotropy() {
      return this._anisotropy;
    }
    set anisotropy(t) {
      this._anisotropy > 0 != t > 0 && this.version++, (this._anisotropy = t);
    }
    get clearcoat() {
      return this._clearcoat;
    }
    set clearcoat(t) {
      this._clearcoat > 0 != t > 0 && this.version++, (this._clearcoat = t);
    }
    get iridescence() {
      return this._iridescence;
    }
    set iridescence(t) {
      this._iridescence > 0 != t > 0 && this.version++, (this._iridescence = t);
    }
    get sheen() {
      return this._sheen;
    }
    set sheen(t) {
      this._sheen > 0 != t > 0 && this.version++, (this._sheen = t);
    }
    get transmission() {
      return this._transmission;
    }
    set transmission(t) {
      this._transmission > 0 != t > 0 && this.version++,
        (this._transmission = t);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.defines = { STANDARD: "", PHYSICAL: "" }),
        (this.anisotropy = t.anisotropy),
        (this.anisotropyRotation = t.anisotropyRotation),
        (this.anisotropyMap = t.anisotropyMap),
        (this.clearcoat = t.clearcoat),
        (this.clearcoatMap = t.clearcoatMap),
        (this.clearcoatRoughness = t.clearcoatRoughness),
        (this.clearcoatRoughnessMap = t.clearcoatRoughnessMap),
        (this.clearcoatNormalMap = t.clearcoatNormalMap),
        this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
        (this.ior = t.ior),
        (this.iridescence = t.iridescence),
        (this.iridescenceMap = t.iridescenceMap),
        (this.iridescenceIOR = t.iridescenceIOR),
        (this.iridescenceThicknessRange = [...t.iridescenceThicknessRange]),
        (this.iridescenceThicknessMap = t.iridescenceThicknessMap),
        (this.sheen = t.sheen),
        this.sheenColor.copy(t.sheenColor),
        (this.sheenColorMap = t.sheenColorMap),
        (this.sheenRoughness = t.sheenRoughness),
        (this.sheenRoughnessMap = t.sheenRoughnessMap),
        (this.transmission = t.transmission),
        (this.transmissionMap = t.transmissionMap),
        (this.thickness = t.thickness),
        (this.thicknessMap = t.thicknessMap),
        (this.attenuationDistance = t.attenuationDistance),
        this.attenuationColor.copy(t.attenuationColor),
        (this.specularIntensity = t.specularIntensity),
        (this.specularIntensityMap = t.specularIntensityMap),
        this.specularColor.copy(t.specularColor),
        (this.specularColorMap = t.specularColorMap),
        this
      );
    }
  }
  function xs(t, e, n) {
    return Ms(t)
      ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length))
      : t.slice(e, n);
  }
  function ys(t, e, n) {
    return !t || (!n && t.constructor === e)
      ? t
      : "number" == typeof e.BYTES_PER_ELEMENT
      ? new e(t)
      : Array.prototype.slice.call(t);
  }
  function Ms(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
  }
  class Ss {
    constructor(t, e, n, i) {
      (this.parameterPositions = t),
        (this._cachedIndex = 0),
        (this.resultBuffer = void 0 !== i ? i : new e.constructor(n)),
        (this.sampleValues = e),
        (this.valueSize = n),
        (this.settings = null),
        (this.DefaultSettings_ = {});
    }
    evaluate(t) {
      const e = this.parameterPositions;
      let n = this._cachedIndex,
        i = e[n],
        r = e[n - 1];
      t: {
        e: {
          let a;
          n: {
            i: if (!(t < i)) {
              for (let a = n + 2; ; ) {
                if (void 0 === i) {
                  if (t < r) break i;
                  return (
                    (n = e.length),
                    (this._cachedIndex = n),
                    this.copySampleValue_(n - 1)
                  );
                }
                if (n === a) break;
                if (((r = i), (i = e[++n]), t < i)) break e;
              }
              a = e.length;
              break n;
            }
            if (t >= r) break t;
            {
              const s = e[1];
              t < s && ((n = 2), (r = s));
              for (let a = n - 2; ; ) {
                if (void 0 === r)
                  return (this._cachedIndex = 0), this.copySampleValue_(0);
                if (n === a) break;
                if (((i = r), (r = e[--n - 1]), t >= r)) break e;
              }
              (a = n), (n = 0);
            }
          }
          for (; n < a; ) {
            const i = (n + a) >>> 1;
            t < e[i] ? (a = i) : (n = i + 1);
          }
          if (((i = e[n]), (r = e[n - 1]), void 0 === r))
            return (this._cachedIndex = 0), this.copySampleValue_(0);
          if (void 0 === i)
            return (
              (n = e.length),
              (this._cachedIndex = n),
              this.copySampleValue_(n - 1)
            );
        }
        (this._cachedIndex = n), this.intervalChanged_(n, r, i);
      }
      return this.interpolate_(n, r, t, i);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(t) {
      const e = this.resultBuffer,
        n = this.sampleValues,
        i = this.valueSize,
        r = t * i;
      for (let t = 0; t !== i; ++t) e[t] = n[r + t];
      return e;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {}
  }
  class Es extends Ss {
    constructor(t, e, n, i) {
      super(t, e, n, i),
        (this._weightPrev = -0),
        (this._offsetPrev = -0),
        (this._weightNext = -0),
        (this._offsetNext = -0),
        (this.DefaultSettings_ = { endingStart: tt, endingEnd: tt });
    }
    intervalChanged_(t, e, n) {
      const i = this.parameterPositions;
      let r = t - 2,
        a = t + 1,
        s = i[r],
        o = i[a];
      if (void 0 === s)
        switch (this.getSettings_().endingStart) {
          case et:
            (r = t), (s = 2 * e - n);
            break;
          case nt:
            (r = i.length - 2), (s = e + i[r] - i[r + 1]);
            break;
          default:
            (r = t), (s = n);
        }
      if (void 0 === o)
        switch (this.getSettings_().endingEnd) {
          case et:
            (a = t), (o = 2 * n - e);
            break;
          case nt:
            (a = 1), (o = n + i[1] - i[0]);
            break;
          default:
            (a = t - 1), (o = e);
        }
      const l = 0.5 * (n - e),
        c = this.valueSize;
      (this._weightPrev = l / (e - s)),
        (this._weightNext = l / (o - n)),
        (this._offsetPrev = r * c),
        (this._offsetNext = a * c);
    }
    interpolate_(t, e, n, i) {
      const r = this.resultBuffer,
        a = this.sampleValues,
        s = this.valueSize,
        o = t * s,
        l = o - s,
        c = this._offsetPrev,
        h = this._offsetNext,
        u = this._weightPrev,
        d = this._weightNext,
        p = (n - e) / (i - e),
        m = p * p,
        f = m * p,
        g = -u * f + 2 * u * m - u * p,
        _ = (1 + u) * f + (-1.5 - 2 * u) * m + (-0.5 + u) * p + 1,
        v = (-1 - d) * f + (1.5 + d) * m + 0.5 * p,
        x = d * f - d * m;
      for (let t = 0; t !== s; ++t)
        r[t] = g * a[c + t] + _ * a[l + t] + v * a[o + t] + x * a[h + t];
      return r;
    }
  }
  class bs extends Ss {
    constructor(t, e, n, i) {
      super(t, e, n, i);
    }
    interpolate_(t, e, n, i) {
      const r = this.resultBuffer,
        a = this.sampleValues,
        s = this.valueSize,
        o = t * s,
        l = o - s,
        c = (n - e) / (i - e),
        h = 1 - c;
      for (let t = 0; t !== s; ++t) r[t] = a[l + t] * h + a[o + t] * c;
      return r;
    }
  }
  class ws extends Ss {
    constructor(t, e, n, i) {
      super(t, e, n, i);
    }
    interpolate_(t) {
      return this.copySampleValue_(t - 1);
    }
  }
  class Ts {
    constructor(t, e, n, i) {
      if (void 0 === t)
        throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === e || 0 === e.length)
        throw new Error(
          "THREE.KeyframeTrack: no keyframes in track named " + t
        );
      (this.name = t),
        (this.times = ys(e, this.TimeBufferType)),
        (this.values = ys(n, this.ValueBufferType)),
        this.setInterpolation(i || this.DefaultInterpolation);
    }
    static toJSON(t) {
      const e = t.constructor;
      let n;
      if (e.toJSON !== this.toJSON) n = e.toJSON(t);
      else {
        n = {
          name: t.name,
          times: ys(t.times, Array),
          values: ys(t.values, Array),
        };
        const e = t.getInterpolation();
        e !== t.DefaultInterpolation && (n.interpolation = e);
      }
      return (n.type = t.ValueTypeName), n;
    }
    InterpolantFactoryMethodDiscrete(t) {
      return new ws(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodLinear(t) {
      return new bs(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodSmooth(t) {
      return new Es(this.times, this.values, this.getValueSize(), t);
    }
    setInterpolation(t) {
      let e;
      switch (t) {
        case $:
          e = this.InterpolantFactoryMethodDiscrete;
          break;
        case J:
          e = this.InterpolantFactoryMethodLinear;
          break;
        case Q:
          e = this.InterpolantFactoryMethodSmooth;
      }
      if (void 0 === e) {
        const e =
          "unsupported interpolation for " +
          this.ValueTypeName +
          " keyframe track named " +
          this.name;
        if (void 0 === this.createInterpolant) {
          if (t === this.DefaultInterpolation) throw new Error(e);
          this.setInterpolation(this.DefaultInterpolation);
        }
        return console.warn("THREE.KeyframeTrack:", e), this;
      }
      return (this.createInterpolant = e), this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return $;
        case this.InterpolantFactoryMethodLinear:
          return J;
        case this.InterpolantFactoryMethodSmooth:
          return Q;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(t) {
      if (0 !== t) {
        const e = this.times;
        for (let n = 0, i = e.length; n !== i; ++n) e[n] += t;
      }
      return this;
    }
    scale(t) {
      if (1 !== t) {
        const e = this.times;
        for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t;
      }
      return this;
    }
    trim(t, e) {
      const n = this.times,
        i = n.length;
      let r = 0,
        a = i - 1;
      for (; r !== i && n[r] < t; ) ++r;
      for (; -1 !== a && n[a] > e; ) --a;
      if ((++a, 0 !== r || a !== i)) {
        r >= a && ((a = Math.max(a, 1)), (r = a - 1));
        const t = this.getValueSize();
        (this.times = xs(n, r, a)),
          (this.values = xs(this.values, r * t, a * t));
      }
      return this;
    }
    validate() {
      let t = !0;
      const e = this.getValueSize();
      e - Math.floor(e) != 0 &&
        (console.error(
          "THREE.KeyframeTrack: Invalid value size in track.",
          this
        ),
        (t = !1));
      const n = this.times,
        i = this.values,
        r = n.length;
      0 === r &&
        (console.error("THREE.KeyframeTrack: Track is empty.", this), (t = !1));
      let a = null;
      for (let e = 0; e !== r; e++) {
        const i = n[e];
        if ("number" == typeof i && isNaN(i)) {
          console.error(
            "THREE.KeyframeTrack: Time is not a valid number.",
            this,
            e,
            i
          ),
            (t = !1);
          break;
        }
        if (null !== a && a > i) {
          console.error(
            "THREE.KeyframeTrack: Out of order keys.",
            this,
            e,
            i,
            a
          ),
            (t = !1);
          break;
        }
        a = i;
      }
      if (void 0 !== i && Ms(i))
        for (let e = 0, n = i.length; e !== n; ++e) {
          const n = i[e];
          if (isNaN(n)) {
            console.error(
              "THREE.KeyframeTrack: Value is not a valid number.",
              this,
              e,
              n
            ),
              (t = !1);
            break;
          }
        }
      return t;
    }
    optimize() {
      const t = xs(this.times),
        e = xs(this.values),
        n = this.getValueSize(),
        i = this.getInterpolation() === Q,
        r = t.length - 1;
      let a = 1;
      for (let s = 1; s < r; ++s) {
        let r = !1;
        const o = t[s];
        if (o !== t[s + 1] && (1 !== s || o !== t[0]))
          if (i) r = !0;
          else {
            const t = s * n,
              i = t - n,
              a = t + n;
            for (let s = 0; s !== n; ++s) {
              const n = e[t + s];
              if (n !== e[i + s] || n !== e[a + s]) {
                r = !0;
                break;
              }
            }
          }
        if (r) {
          if (s !== a) {
            t[a] = t[s];
            const i = s * n,
              r = a * n;
            for (let t = 0; t !== n; ++t) e[r + t] = e[i + t];
          }
          ++a;
        }
      }
      if (r > 0) {
        t[a] = t[r];
        for (let t = r * n, i = a * n, s = 0; s !== n; ++s) e[i + s] = e[t + s];
        ++a;
      }
      return (
        a !== t.length
          ? ((this.times = xs(t, 0, a)), (this.values = xs(e, 0, a * n)))
          : ((this.times = t), (this.values = e)),
        this
      );
    }
    clone() {
      const t = xs(this.times, 0),
        e = xs(this.values, 0),
        n = new (0, this.constructor)(this.name, t, e);
      return (n.createInterpolant = this.createInterpolant), n;
    }
  }
  (Ts.prototype.TimeBufferType = Float32Array),
    (Ts.prototype.ValueBufferType = Float32Array),
    (Ts.prototype.DefaultInterpolation = J);
  class As extends Ts {}
  (As.prototype.ValueTypeName = "bool"),
    (As.prototype.ValueBufferType = Array),
    (As.prototype.DefaultInterpolation = $),
    (As.prototype.InterpolantFactoryMethodLinear = void 0),
    (As.prototype.InterpolantFactoryMethodSmooth = void 0);
  class Rs extends Ts {}
  Rs.prototype.ValueTypeName = "color";
  class Cs extends Ts {}
  Cs.prototype.ValueTypeName = "number";
  class Ps extends Ss {
    constructor(t, e, n, i) {
      super(t, e, n, i);
    }
    interpolate_(t, e, n, i) {
      const r = this.resultBuffer,
        a = this.sampleValues,
        s = this.valueSize,
        o = (n - e) / (i - e);
      let l = t * s;
      for (let t = l + s; l !== t; l += 4)
        te.slerpFlat(r, 0, a, l - s, a, l, o);
      return r;
    }
  }
  class Ls extends Ts {
    InterpolantFactoryMethodLinear(t) {
      return new Ps(this.times, this.values, this.getValueSize(), t);
    }
  }
  (Ls.prototype.ValueTypeName = "quaternion"),
    (Ls.prototype.DefaultInterpolation = J),
    (Ls.prototype.InterpolantFactoryMethodSmooth = void 0);
  class Us extends Ts {}
  (Us.prototype.ValueTypeName = "string"),
    (Us.prototype.ValueBufferType = Array),
    (Us.prototype.DefaultInterpolation = $),
    (Us.prototype.InterpolantFactoryMethodLinear = void 0),
    (Us.prototype.InterpolantFactoryMethodSmooth = void 0);
  class Ds extends Ts {}
  Ds.prototype.ValueTypeName = "vector";
  const Is = {
    enabled: !1,
    files: {},
    add: function (t, e) {
      !1 !== this.enabled && (this.files[t] = e);
    },
    get: function (t) {
      if (!1 !== this.enabled) return this.files[t];
    },
    remove: function (t) {
      delete this.files[t];
    },
    clear: function () {
      this.files = {};
    },
  };
  class Ns {
    constructor(t, e, n) {
      const i = this;
      let r,
        a = !1,
        s = 0,
        o = 0;
      const l = [];
      (this.onStart = void 0),
        (this.onLoad = t),
        (this.onProgress = e),
        (this.onError = n),
        (this.itemStart = function (t) {
          o++, !1 === a && void 0 !== i.onStart && i.onStart(t, s, o), (a = !0);
        }),
        (this.itemEnd = function (t) {
          s++,
            void 0 !== i.onProgress && i.onProgress(t, s, o),
            s === o && ((a = !1), void 0 !== i.onLoad && i.onLoad());
        }),
        (this.itemError = function (t) {
          void 0 !== i.onError && i.onError(t);
        }),
        (this.resolveURL = function (t) {
          return r ? r(t) : t;
        }),
        (this.setURLModifier = function (t) {
          return (r = t), this;
        }),
        (this.addHandler = function (t, e) {
          return l.push(t, e), this;
        }),
        (this.removeHandler = function (t) {
          const e = l.indexOf(t);
          return -1 !== e && l.splice(e, 2), this;
        }),
        (this.getHandler = function (t) {
          for (let e = 0, n = l.length; e < n; e += 2) {
            const n = l[e],
              i = l[e + 1];
            if ((n.global && (n.lastIndex = 0), n.test(t))) return i;
          }
          return null;
        });
    }
  }
  const Os = new Ns();
  class Fs {
    constructor(t) {
      (this.manager = void 0 !== t ? t : Os),
        (this.crossOrigin = "anonymous"),
        (this.withCredentials = !1),
        (this.path = ""),
        (this.resourcePath = ""),
        (this.requestHeader = {});
    }
    load() {}
    loadAsync(t, e) {
      const n = this;
      return new Promise(function (i, r) {
        n.load(t, i, e, r);
      });
    }
    parse() {}
    setCrossOrigin(t) {
      return (this.crossOrigin = t), this;
    }
    setWithCredentials(t) {
      return (this.withCredentials = t), this;
    }
    setPath(t) {
      return (this.path = t), this;
    }
    setResourcePath(t) {
      return (this.resourcePath = t), this;
    }
    setRequestHeader(t) {
      return (this.requestHeader = t), this;
    }
  }
  const zs = {};
  class Bs extends Error {
    constructor(t, e) {
      super(t), (this.response = e);
    }
  }
  class ks extends Fs {
    constructor(t) {
      super(t);
    }
    load(t, e, n, i) {
      void 0 === t && (t = ""),
        void 0 !== this.path && (t = this.path + t),
        (t = this.manager.resolveURL(t));
      const r = Is.get(t);
      if (void 0 !== r)
        return (
          this.manager.itemStart(t),
          setTimeout(() => {
            e && e(r), this.manager.itemEnd(t);
          }, 0),
          r
        );
      if (void 0 !== zs[t])
        return void zs[t].push({ onLoad: e, onProgress: n, onError: i });
      (zs[t] = []), zs[t].push({ onLoad: e, onProgress: n, onError: i });
      const a = new Request(t, {
          headers: new Headers(this.requestHeader),
          credentials: this.withCredentials ? "include" : "same-origin",
        }),
        s = this.mimeType,
        o = this.responseType;
      fetch(a)
        .then((e) => {
          if (200 === e.status || 0 === e.status) {
            if (
              (0 === e.status &&
                console.warn("THREE.FileLoader: HTTP Status 0 received."),
              "undefined" == typeof ReadableStream ||
                void 0 === e.body ||
                void 0 === e.body.getReader)
            )
              return e;
            const n = zs[t],
              i = e.body.getReader(),
              r =
                e.headers.get("Content-Length") || e.headers.get("X-File-Size"),
              a = r ? parseInt(r) : 0,
              s = 0 !== a;
            let o = 0;
            const l = new ReadableStream({
              start(t) {
                !(function e() {
                  i.read().then(({ done: i, value: r }) => {
                    if (i) t.close();
                    else {
                      o += r.byteLength;
                      const i = new ProgressEvent("progress", {
                        lengthComputable: s,
                        loaded: o,
                        total: a,
                      });
                      for (let t = 0, e = n.length; t < e; t++) {
                        const e = n[t];
                        e.onProgress && e.onProgress(i);
                      }
                      t.enqueue(r), e();
                    }
                  });
                })();
              },
            });
            return new Response(l);
          }
          throw new Bs(
            `fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`,
            e
          );
        })
        .then((t) => {
          switch (o) {
            case "arraybuffer":
              return t.arrayBuffer();
            case "blob":
              return t.blob();
            case "document":
              return t
                .text()
                .then((t) => new DOMParser().parseFromString(t, s));
            case "json":
              return t.json();
            default:
              if (void 0 === s) return t.text();
              {
                const e = /charset="?([^;"\s]*)"?/i.exec(s),
                  n = e && e[1] ? e[1].toLowerCase() : void 0,
                  i = new TextDecoder(n);
                return t.arrayBuffer().then((t) => i.decode(t));
              }
          }
        })
        .then((e) => {
          Is.add(t, e);
          const n = zs[t];
          delete zs[t];
          for (let t = 0, i = n.length; t < i; t++) {
            const i = n[t];
            i.onLoad && i.onLoad(e);
          }
        })
        .catch((e) => {
          const n = zs[t];
          if (void 0 === n) throw (this.manager.itemError(t), e);
          delete zs[t];
          for (let t = 0, i = n.length; t < i; t++) {
            const i = n[t];
            i.onError && i.onError(e);
          }
          this.manager.itemError(t);
        })
        .finally(() => {
          this.manager.itemEnd(t);
        }),
        this.manager.itemStart(t);
    }
    setResponseType(t) {
      return (this.responseType = t), this;
    }
    setMimeType(t) {
      return (this.mimeType = t), this;
    }
  }
  class Hs extends Fs {
    constructor(t) {
      super(t);
    }
    load(t, e, n, i) {
      void 0 !== this.path && (t = this.path + t),
        (t = this.manager.resolveURL(t));
      const r = this,
        a = Is.get(t);
      if (void 0 !== a)
        return (
          r.manager.itemStart(t),
          setTimeout(function () {
            e && e(a), r.manager.itemEnd(t);
          }, 0),
          a
        );
      const s = Dt("img");
      function o() {
        c(), Is.add(t, this), e && e(this), r.manager.itemEnd(t);
      }
      function l(e) {
        c(), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
      }
      function c() {
        s.removeEventListener("load", o, !1),
          s.removeEventListener("error", l, !1);
      }
      return (
        s.addEventListener("load", o, !1),
        s.addEventListener("error", l, !1),
        "data:" !== t.slice(0, 5) &&
          void 0 !== this.crossOrigin &&
          (s.crossOrigin = this.crossOrigin),
        r.manager.itemStart(t),
        (s.src = t),
        s
      );
    }
  }
  class Vs extends nn {
    constructor(t, e = 1) {
      super(),
        (this.isLight = !0),
        (this.type = "Light"),
        (this.color = new Sn(t)),
        (this.intensity = e);
    }
    dispose() {}
    copy(t, e) {
      return (
        super.copy(t, e),
        this.color.copy(t.color),
        (this.intensity = t.intensity),
        this
      );
    }
    toJSON(t) {
      const e = super.toJSON(t);
      return (
        (e.object.color = this.color.getHex()),
        (e.object.intensity = this.intensity),
        void 0 !== this.groundColor &&
          (e.object.groundColor = this.groundColor.getHex()),
        void 0 !== this.distance && (e.object.distance = this.distance),
        void 0 !== this.angle && (e.object.angle = this.angle),
        void 0 !== this.decay && (e.object.decay = this.decay),
        void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
        void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
        e
      );
    }
  }
  const Gs = new Le(),
    Ws = new ee(),
    Xs = new ee();
  class js {
    constructor(t) {
      (this.camera = t),
        (this.bias = 0),
        (this.normalBias = 0),
        (this.radius = 1),
        (this.blurSamples = 8),
        (this.mapSize = new Ct(512, 512)),
        (this.map = null),
        (this.mapPass = null),
        (this.matrix = new Le()),
        (this.autoUpdate = !0),
        (this.needsUpdate = !1),
        (this._frustum = new Si()),
        (this._frameExtents = new Ct(1, 1)),
        (this._viewportCount = 1),
        (this._viewports = [new Kt(0, 0, 1, 1)]);
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(t) {
      const e = this.camera,
        n = this.matrix;
      Ws.setFromMatrixPosition(t.matrixWorld),
        e.position.copy(Ws),
        Xs.setFromMatrixPosition(t.target.matrixWorld),
        e.lookAt(Xs),
        e.updateMatrixWorld(),
        Gs.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Gs),
        n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
        n.multiply(Gs);
    }
    getViewport(t) {
      return this._viewports[t];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(t) {
      return (
        (this.camera = t.camera.clone()),
        (this.bias = t.bias),
        (this.radius = t.radius),
        this.mapSize.copy(t.mapSize),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const t = {};
      return (
        0 !== this.bias && (t.bias = this.bias),
        0 !== this.normalBias && (t.normalBias = this.normalBias),
        1 !== this.radius && (t.radius = this.radius),
        (512 === this.mapSize.x && 512 === this.mapSize.y) ||
          (t.mapSize = this.mapSize.toArray()),
        (t.camera = this.camera.toJSON(!1).object),
        delete t.camera.matrix,
        t
      );
    }
  }
  class Ys extends js {
    constructor() {
      super(new Oi(-5, 5, 5, -5, 0.5, 500)),
        (this.isDirectionalLightShadow = !0);
    }
  }
  class qs extends Vs {
    constructor(t, e) {
      super(t, e),
        (this.isDirectionalLight = !0),
        (this.type = "DirectionalLight"),
        this.position.copy(nn.DEFAULT_UP),
        this.updateMatrix(),
        (this.target = new nn()),
        (this.shadow = new Ys());
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(t) {
      return (
        super.copy(t),
        (this.target = t.target.clone()),
        (this.shadow = t.shadow.clone()),
        this
      );
    }
  }
  class Zs extends Vs {
    constructor(t, e) {
      super(t, e), (this.isAmbientLight = !0), (this.type = "AmbientLight");
    }
  }
  class Ks extends zn {
    constructor() {
      super(),
        (this.isInstancedBufferGeometry = !0),
        (this.type = "InstancedBufferGeometry"),
        (this.instanceCount = 1 / 0);
    }
    copy(t) {
      return super.copy(t), (this.instanceCount = t.instanceCount), this;
    }
    toJSON() {
      const t = super.toJSON();
      return (
        (t.instanceCount = this.instanceCount),
        (t.isInstancedBufferGeometry = !0),
        t
      );
    }
  }
  const $s = "\\[\\]\\.:\\/",
    Js = new RegExp("[" + $s + "]", "g"),
    Qs = "[^" + $s + "]",
    to = "[^" + $s.replace("\\.", "") + "]",
    eo = new RegExp(
      "^" +
        /((?:WC+[\/:])*)/.source.replace("WC", Qs) +
        /(WCOD+)?/.source.replace("WCOD", to) +
        /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Qs) +
        /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Qs) +
        "$"
    ),
    no = ["material", "materials", "bones", "map"];
  class io {
    constructor(t, e, n) {
      (this.path = e),
        (this.parsedPath = n || io.parseTrackName(e)),
        (this.node = io.findNode(t, this.parsedPath.nodeName)),
        (this.rootNode = t),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound);
    }
    static create(t, e, n) {
      return t && t.isAnimationObjectGroup
        ? new io.Composite(t, e, n)
        : new io(t, e, n);
    }
    static sanitizeNodeName(t) {
      return t.replace(/\s/g, "_").replace(Js, "");
    }
    static parseTrackName(t) {
      const e = eo.exec(t);
      if (null === e)
        throw new Error("PropertyBinding: Cannot parse trackName: " + t);
      const n = {
          nodeName: e[2],
          objectName: e[3],
          objectIndex: e[4],
          propertyName: e[5],
          propertyIndex: e[6],
        },
        i = n.nodeName && n.nodeName.lastIndexOf(".");
      if (void 0 !== i && -1 !== i) {
        const t = n.nodeName.substring(i + 1);
        -1 !== no.indexOf(t) &&
          ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = t));
      }
      if (null === n.propertyName || 0 === n.propertyName.length)
        throw new Error(
          "PropertyBinding: can not parse propertyName from trackName: " + t
        );
      return n;
    }
    static findNode(t, e) {
      if (
        void 0 === e ||
        "" === e ||
        "." === e ||
        -1 === e ||
        e === t.name ||
        e === t.uuid
      )
        return t;
      if (t.skeleton) {
        const n = t.skeleton.getBoneByName(e);
        if (void 0 !== n) return n;
      }
      if (t.children) {
        const n = function (t) {
            for (let i = 0; i < t.length; i++) {
              const r = t[i];
              if (r.name === e || r.uuid === e) return r;
              const a = n(r.children);
              if (a) return a;
            }
            return null;
          },
          i = n(t.children);
        if (i) return i;
      }
      return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(t, e) {
      t[e] = this.targetObject[this.propertyName];
    }
    _getValue_array(t, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i];
    }
    _getValue_arrayElement(t, e) {
      t[e] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(t, e) {
      this.resolvedProperty.toArray(t, e);
    }
    _setValue_direct(t, e) {
      this.targetObject[this.propertyName] = t[e];
    }
    _setValue_direct_setNeedsUpdate(t, e) {
      (this.targetObject[this.propertyName] = t[e]),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
      (this.targetObject[this.propertyName] = t[e]),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _setValue_array(t, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
    }
    _setValue_array_setNeedsUpdate(t, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
      this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e];
    }
    _setValue_arrayElement_setNeedsUpdate(t, e) {
      (this.resolvedProperty[this.propertyIndex] = t[e]),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
      (this.resolvedProperty[this.propertyIndex] = t[e]),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _setValue_fromArray(t, e) {
      this.resolvedProperty.fromArray(t, e);
    }
    _setValue_fromArray_setNeedsUpdate(t, e) {
      this.resolvedProperty.fromArray(t, e),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
      this.resolvedProperty.fromArray(t, e),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _getValue_unbound(t, e) {
      this.bind(), this.getValue(t, e);
    }
    _setValue_unbound(t, e) {
      this.bind(), this.setValue(t, e);
    }
    bind() {
      let t = this.node;
      const e = this.parsedPath,
        n = e.objectName,
        i = e.propertyName;
      let r = e.propertyIndex;
      if (
        (t || ((t = io.findNode(this.rootNode, e.nodeName)), (this.node = t)),
        (this.getValue = this._getValue_unavailable),
        (this.setValue = this._setValue_unavailable),
        !t)
      )
        return void console.error(
          "THREE.PropertyBinding: Trying to update node for track: " +
            this.path +
            " but it wasn't found."
        );
      if (n) {
        let i = e.objectIndex;
        switch (n) {
          case "materials":
            if (!t.material)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                this
              );
            if (!t.material.materials)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
                this
              );
            t = t.material.materials;
            break;
          case "bones":
            if (!t.skeleton)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
                this
              );
            t = t.skeleton.bones;
            for (let e = 0; e < t.length; e++)
              if (t[e].name === i) {
                i = e;
                break;
              }
            break;
          case "map":
            if ("map" in t) {
              t = t.map;
              break;
            }
            if (!t.material)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                this
              );
            if (!t.material.map)
              return void console.error(
                "THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",
                this
              );
            t = t.material.map;
            break;
          default:
            if (void 0 === t[n])
              return void console.error(
                "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
                this
              );
            t = t[n];
        }
        if (void 0 !== i) {
          if (void 0 === t[i])
            return void console.error(
              "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
              this,
              t
            );
          t = t[i];
        }
      }
      const a = t[i];
      if (void 0 === a) {
        const n = e.nodeName;
        return void console.error(
          "THREE.PropertyBinding: Trying to update property for track: " +
            n +
            "." +
            i +
            " but it wasn't found.",
          t
        );
      }
      let s = this.Versioning.None;
      (this.targetObject = t),
        void 0 !== t.needsUpdate
          ? (s = this.Versioning.NeedsUpdate)
          : void 0 !== t.matrixWorldNeedsUpdate &&
            (s = this.Versioning.MatrixWorldNeedsUpdate);
      let o = this.BindingType.Direct;
      if (void 0 !== r) {
        if ("morphTargetInfluences" === i) {
          if (!t.geometry)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
              this
            );
          if (!t.geometry.morphAttributes)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
              this
            );
          void 0 !== t.morphTargetDictionary[r] &&
            (r = t.morphTargetDictionary[r]);
        }
        (o = this.BindingType.ArrayElement),
          (this.resolvedProperty = a),
          (this.propertyIndex = r);
      } else
        void 0 !== a.fromArray && void 0 !== a.toArray
          ? ((o = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
          : Array.isArray(a)
          ? ((o = this.BindingType.EntireArray), (this.resolvedProperty = a))
          : (this.propertyName = i);
      (this.getValue = this.GetterByBindingType[o]),
        (this.setValue = this.SetterByBindingTypeAndVersioning[o][s]);
    }
    unbind() {
      (this.node = null),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound);
    }
  }
  (io.Composite = class {
    constructor(t, e, n) {
      const i = n || io.parseTrackName(e);
      (this._targetGroup = t), (this._bindings = t.subscribe_(e, i));
    }
    getValue(t, e) {
      this.bind();
      const n = this._targetGroup.nCachedObjects_,
        i = this._bindings[n];
      void 0 !== i && i.getValue(t, e);
    }
    setValue(t, e) {
      const n = this._bindings;
      for (
        let i = this._targetGroup.nCachedObjects_, r = n.length;
        i !== r;
        ++i
      )
        n[i].setValue(t, e);
    }
    bind() {
      const t = this._bindings;
      for (
        let e = this._targetGroup.nCachedObjects_, n = t.length;
        e !== n;
        ++e
      )
        t[e].bind();
    }
    unbind() {
      const t = this._bindings;
      for (
        let e = this._targetGroup.nCachedObjects_, n = t.length;
        e !== n;
        ++e
      )
        t[e].unbind();
    }
  }),
    (io.prototype.BindingType = {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3,
    }),
    (io.prototype.Versioning = {
      None: 0,
      NeedsUpdate: 1,
      MatrixWorldNeedsUpdate: 2,
    }),
    (io.prototype.GetterByBindingType = [
      io.prototype._getValue_direct,
      io.prototype._getValue_array,
      io.prototype._getValue_arrayElement,
      io.prototype._getValue_toArray,
    ]),
    (io.prototype.SetterByBindingTypeAndVersioning = [
      [
        io.prototype._setValue_direct,
        io.prototype._setValue_direct_setNeedsUpdate,
        io.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
      ],
      [
        io.prototype._setValue_array,
        io.prototype._setValue_array_setNeedsUpdate,
        io.prototype._setValue_array_setMatrixWorldNeedsUpdate,
      ],
      [
        io.prototype._setValue_arrayElement,
        io.prototype._setValue_arrayElement_setNeedsUpdate,
        io.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
      ],
      [
        io.prototype._setValue_fromArray,
        io.prototype._setValue_fromArray_setNeedsUpdate,
        io.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
      ],
    ]);
  new Float32Array(1);
  class ro {
    constructor(t, e, n = 0, i = 1 / 0) {
      (this.ray = new Pe(t, e)),
        (this.near = n),
        (this.far = i),
        (this.camera = null),
        (this.layers = new Ve()),
        (this.params = {
          Mesh: {},
          Line: { threshold: 1 },
          LOD: {},
          Points: { threshold: 1 },
          Sprite: {},
        });
    }
    set(t, e) {
      this.ray.set(t, e);
    }
    setFromCamera(t, e) {
      e.isPerspectiveCamera
        ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
          this.ray.direction
            .set(t.x, t.y, 0.5)
            .unproject(e)
            .sub(this.ray.origin)
            .normalize(),
          (this.camera = e))
        : e.isOrthographicCamera
        ? (this.ray.origin
            .set(t.x, t.y, (e.near + e.far) / (e.near - e.far))
            .unproject(e),
          this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld),
          (this.camera = e))
        : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
    }
    intersectObject(t, e = !0, n = []) {
      return so(t, this, n, e), n.sort(ao), n;
    }
    intersectObjects(t, e = !0, n = []) {
      for (let i = 0, r = t.length; i < r; i++) so(t[i], this, n, e);
      return n.sort(ao), n;
    }
  }
  function ao(t, e) {
    return t.distance - e.distance;
  }
  function so(t, e, n, i) {
    if ((t.layers.test(e.layers) && t.raycast(e, n), !0 === i)) {
      const i = t.children;
      for (let t = 0, r = i.length; t < r; t++) so(i[t], e, n, !0);
    }
  }
  class oo {
    constructor(t = 1, e = 0, n = 0) {
      return (this.radius = t), (this.phi = e), (this.theta = n), this;
    }
    set(t, e, n) {
      return (this.radius = t), (this.phi = e), (this.theta = n), this;
    }
    copy(t) {
      return (
        (this.radius = t.radius),
        (this.phi = t.phi),
        (this.theta = t.theta),
        this
      );
    }
    makeSafe() {
      const t = 1e-6;
      return (this.phi = Math.max(t, Math.min(Math.PI - t, this.phi))), this;
    }
    setFromVector3(t) {
      return this.setFromCartesianCoords(t.x, t.y, t.z);
    }
    setFromCartesianCoords(t, e, n) {
      return (
        (this.radius = Math.sqrt(t * t + e * e + n * n)),
        0 === this.radius
          ? ((this.theta = 0), (this.phi = 0))
          : ((this.theta = Math.atan2(t, n)),
            (this.phi = Math.acos(yt(e / this.radius, -1, 1)))),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  "undefined" != typeof __THREE_DEVTOOLS__ &&
    __THREE_DEVTOOLS__.dispatchEvent(
      new CustomEvent("register", { detail: { revision: t } })
    ),
    "undefined" != typeof window &&
      (window.__THREE__
        ? console.warn(
            "WARNING: Multiple instances of Three.js being imported."
          )
        : (window.__THREE__ = t));
  const lo = { type: "change" },
    co = { type: "start" },
    ho = { type: "end" };
  const uo = new ro(),
    po = new ee(),
    mo = new ee(),
    fo = new te(),
    go = { X: new ee(1, 0, 0), Y: new ee(0, 1, 0), Z: new ee(0, 0, 1) },
    _o = { type: "change" },
    vo = { type: "mouseDown" },
    xo = { type: "mouseUp", mode: null },
    yo = { type: "objectChange" };
  function Mo(t) {
    if (this.domElement.ownerDocument.pointerLockElement)
      return { x: 0, y: 0, button: t.button };
    {
      const e = this.domElement.getBoundingClientRect();
      return {
        x: ((t.clientX - e.left) / e.width) * 2 - 1,
        y: (-(t.clientY - e.top) / e.height) * 2 + 1,
        button: t.button,
      };
    }
  }
  function So(t) {
    if (this.enabled)
      switch (t.pointerType) {
        case "mouse":
        case "pen":
          this.pointerHover(this._getPointer(t));
      }
  }
  function Eo(t) {
    this.enabled &&
      (document.pointerLockElement ||
        this.domElement.setPointerCapture(t.pointerId),
      this.domElement.addEventListener("pointermove", this._onPointerMove),
      this.pointerHover(this._getPointer(t)),
      this.pointerDown(this._getPointer(t)));
  }
  function bo(t) {
    this.enabled && this.pointerMove(this._getPointer(t));
  }
  function wo(t) {
    this.enabled &&
      (this.domElement.releasePointerCapture(t.pointerId),
      this.domElement.removeEventListener("pointermove", this._onPointerMove),
      this.pointerUp(this._getPointer(t)));
  }
  function To(t, e, n) {
    const i = e.intersectObject(t, !0);
    for (let t = 0; t < i.length; t++)
      if (i[t].object.visible || n) return i[t];
    return !1;
  }
  const Ao = new He(),
    Ro = new ee(0, 1, 0),
    Co = new ee(0, 0, 0),
    Po = new Le(),
    Lo = new te(),
    Uo = new te(),
    Do = new ee(),
    Io = new Le(),
    No = new ee(1, 0, 0),
    Oo = new ee(0, 1, 0),
    Fo = new ee(0, 0, 1),
    zo = new ee(),
    Bo = new ee(),
    ko = new ee();
  class Ho extends nn {
    constructor() {
      super(),
        (this.isTransformControlsGizmo = !0),
        (this.type = "TransformControlsGizmo");
      const t = new bn({
          depthTest: !1,
          depthWrite: !1,
          fog: !1,
          toneMapped: !1,
          transparent: !0,
        }),
        e = new rs({
          depthTest: !1,
          depthWrite: !1,
          fog: !1,
          toneMapped: !1,
          transparent: !0,
        }),
        n = t.clone();
      n.opacity = 0.15;
      const i = e.clone();
      i.opacity = 0.5;
      const r = t.clone();
      r.color.setHex(16711680);
      const a = t.clone();
      a.color.setHex(65280);
      const s = t.clone();
      s.color.setHex(255);
      const o = t.clone();
      o.color.setHex(16711680), (o.opacity = 0.5);
      const l = t.clone();
      l.color.setHex(65280), (l.opacity = 0.5);
      const c = t.clone();
      c.color.setHex(255), (c.opacity = 0.5);
      const h = t.clone();
      h.opacity = 0.25;
      const u = t.clone();
      u.color.setHex(16776960), (u.opacity = 0.25);
      t.clone().color.setHex(16776960);
      const d = t.clone();
      d.color.setHex(7895160);
      const p = new us(0, 0.04, 0.1, 12);
      p.translate(0, 0.05, 0);
      const m = new ri(0.08, 0.08, 0.08);
      m.translate(0, 0.04, 0);
      const f = new zn();
      f.setAttribute("position", new Pn([0, 0, 0, 1, 0, 0], 3));
      const g = new us(0.0075, 0.0075, 0.5, 3);
      function _(t, e) {
        const n = new gs(t, 0.0075, 3, 64, e * Math.PI * 2);
        return n.rotateY(Math.PI / 2), n.rotateX(Math.PI / 2), n;
      }
      g.translate(0, 0.25, 0);
      const v = {
          X: [
            [new ni(p, r), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
            [new ni(p, r), [-0.5, 0, 0], [0, 0, Math.PI / 2]],
            [new ni(g, r), [0, 0, 0], [0, 0, -Math.PI / 2]],
          ],
          Y: [
            [new ni(p, a), [0, 0.5, 0]],
            [new ni(p, a), [0, -0.5, 0], [Math.PI, 0, 0]],
            [new ni(g, a)],
          ],
          Z: [
            [new ni(p, s), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
            [new ni(p, s), [0, 0, -0.5], [-Math.PI / 2, 0, 0]],
            [new ni(g, s), null, [Math.PI / 2, 0, 0]],
          ],
          XYZ: [[new ni(new ms(0.1, 0), h.clone()), [0, 0, 0]]],
          XY: [[new ni(new ri(0.15, 0.15, 0.01), c.clone()), [0.15, 0.15, 0]]],
          YZ: [
            [
              new ni(new ri(0.15, 0.15, 0.01), o.clone()),
              [0, 0.15, 0.15],
              [0, Math.PI / 2, 0],
            ],
          ],
          XZ: [
            [
              new ni(new ri(0.15, 0.15, 0.01), l.clone()),
              [0.15, 0, 0.15],
              [-Math.PI / 2, 0, 0],
            ],
          ],
        },
        x = {
          X: [
            [
              new ni(new us(0.2, 0, 0.6, 4), n),
              [0.3, 0, 0],
              [0, 0, -Math.PI / 2],
            ],
            [
              new ni(new us(0.2, 0, 0.6, 4), n),
              [-0.3, 0, 0],
              [0, 0, Math.PI / 2],
            ],
          ],
          Y: [
            [new ni(new us(0.2, 0, 0.6, 4), n), [0, 0.3, 0]],
            [new ni(new us(0.2, 0, 0.6, 4), n), [0, -0.3, 0], [0, 0, Math.PI]],
          ],
          Z: [
            [
              new ni(new us(0.2, 0, 0.6, 4), n),
              [0, 0, 0.3],
              [Math.PI / 2, 0, 0],
            ],
            [
              new ni(new us(0.2, 0, 0.6, 4), n),
              [0, 0, -0.3],
              [-Math.PI / 2, 0, 0],
            ],
          ],
          XYZ: [[new ni(new ms(0.2, 0), n)]],
          XY: [[new ni(new ri(0.2, 0.2, 0.01), n), [0.15, 0.15, 0]]],
          YZ: [
            [
              new ni(new ri(0.2, 0.2, 0.01), n),
              [0, 0.15, 0.15],
              [0, Math.PI / 2, 0],
            ],
          ],
          XZ: [
            [
              new ni(new ri(0.2, 0.2, 0.01), n),
              [0.15, 0, 0.15],
              [-Math.PI / 2, 0, 0],
            ],
          ],
        },
        y = {
          START: [[new ni(new ms(0.01, 2), i), null, null, null, "helper"]],
          END: [[new ni(new ms(0.01, 2), i), null, null, null, "helper"]],
          DELTA: [
            [
              new hs(
                (function () {
                  const t = new zn();
                  return (
                    t.setAttribute("position", new Pn([0, 0, 0, 1, 1, 1], 3)), t
                  );
                })(),
                i
              ),
              null,
              null,
              null,
              "helper",
            ],
          ],
          X: [
            [new hs(f, i.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"],
          ],
          Y: [
            [
              new hs(f, i.clone()),
              [0, -1e3, 0],
              [0, 0, Math.PI / 2],
              [1e6, 1, 1],
              "helper",
            ],
          ],
          Z: [
            [
              new hs(f, i.clone()),
              [0, 0, -1e3],
              [0, -Math.PI / 2, 0],
              [1e6, 1, 1],
              "helper",
            ],
          ],
        },
        M = {
          XYZE: [[new ni(_(0.5, 1), d), null, [0, Math.PI / 2, 0]]],
          X: [[new ni(_(0.5, 0.5), r)]],
          Y: [[new ni(_(0.5, 0.5), a), null, [0, 0, -Math.PI / 2]]],
          Z: [[new ni(_(0.5, 0.5), s), null, [0, Math.PI / 2, 0]]],
          E: [[new ni(_(0.75, 1), u), null, [0, Math.PI / 2, 0]]],
        },
        S = {
          AXIS: [
            [new hs(f, i.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"],
          ],
        },
        E = {
          XYZE: [[new ni(new fs(0.25, 10, 8), n)]],
          X: [
            [
              new ni(new gs(0.5, 0.1, 4, 24), n),
              [0, 0, 0],
              [0, -Math.PI / 2, -Math.PI / 2],
            ],
          ],
          Y: [
            [
              new ni(new gs(0.5, 0.1, 4, 24), n),
              [0, 0, 0],
              [Math.PI / 2, 0, 0],
            ],
          ],
          Z: [
            [
              new ni(new gs(0.5, 0.1, 4, 24), n),
              [0, 0, 0],
              [0, 0, -Math.PI / 2],
            ],
          ],
          E: [[new ni(new gs(0.75, 0.1, 2, 24), n)]],
        },
        b = {
          X: [
            [new ni(m, r), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
            [new ni(g, r), [0, 0, 0], [0, 0, -Math.PI / 2]],
            [new ni(m, r), [-0.5, 0, 0], [0, 0, Math.PI / 2]],
          ],
          Y: [
            [new ni(m, a), [0, 0.5, 0]],
            [new ni(g, a)],
            [new ni(m, a), [0, -0.5, 0], [0, 0, Math.PI]],
          ],
          Z: [
            [new ni(m, s), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
            [new ni(g, s), [0, 0, 0], [Math.PI / 2, 0, 0]],
            [new ni(m, s), [0, 0, -0.5], [-Math.PI / 2, 0, 0]],
          ],
          XY: [[new ni(new ri(0.15, 0.15, 0.01), c), [0.15, 0.15, 0]]],
          YZ: [
            [
              new ni(new ri(0.15, 0.15, 0.01), o),
              [0, 0.15, 0.15],
              [0, Math.PI / 2, 0],
            ],
          ],
          XZ: [
            [
              new ni(new ri(0.15, 0.15, 0.01), l),
              [0.15, 0, 0.15],
              [-Math.PI / 2, 0, 0],
            ],
          ],
          XYZ: [[new ni(new ri(0.1, 0.1, 0.1), h.clone())]],
        },
        w = {
          X: [
            [
              new ni(new us(0.2, 0, 0.6, 4), n),
              [0.3, 0, 0],
              [0, 0, -Math.PI / 2],
            ],
            [
              new ni(new us(0.2, 0, 0.6, 4), n),
              [-0.3, 0, 0],
              [0, 0, Math.PI / 2],
            ],
          ],
          Y: [
            [new ni(new us(0.2, 0, 0.6, 4), n), [0, 0.3, 0]],
            [new ni(new us(0.2, 0, 0.6, 4), n), [0, -0.3, 0], [0, 0, Math.PI]],
          ],
          Z: [
            [
              new ni(new us(0.2, 0, 0.6, 4), n),
              [0, 0, 0.3],
              [Math.PI / 2, 0, 0],
            ],
            [
              new ni(new us(0.2, 0, 0.6, 4), n),
              [0, 0, -0.3],
              [-Math.PI / 2, 0, 0],
            ],
          ],
          XY: [[new ni(new ri(0.2, 0.2, 0.01), n), [0.15, 0.15, 0]]],
          YZ: [
            [
              new ni(new ri(0.2, 0.2, 0.01), n),
              [0, 0.15, 0.15],
              [0, Math.PI / 2, 0],
            ],
          ],
          XZ: [
            [
              new ni(new ri(0.2, 0.2, 0.01), n),
              [0.15, 0, 0.15],
              [-Math.PI / 2, 0, 0],
            ],
          ],
          XYZ: [[new ni(new ri(0.2, 0.2, 0.2), n), [0, 0, 0]]],
        },
        T = {
          X: [
            [new hs(f, i.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"],
          ],
          Y: [
            [
              new hs(f, i.clone()),
              [0, -1e3, 0],
              [0, 0, Math.PI / 2],
              [1e6, 1, 1],
              "helper",
            ],
          ],
          Z: [
            [
              new hs(f, i.clone()),
              [0, 0, -1e3],
              [0, -Math.PI / 2, 0],
              [1e6, 1, 1],
              "helper",
            ],
          ],
        };
      function A(t) {
        const e = new nn();
        for (const n in t)
          for (let i = t[n].length; i--; ) {
            const r = t[n][i][0].clone(),
              a = t[n][i][1],
              s = t[n][i][2],
              o = t[n][i][3],
              l = t[n][i][4];
            (r.name = n),
              (r.tag = l),
              a && r.position.set(a[0], a[1], a[2]),
              s && r.rotation.set(s[0], s[1], s[2]),
              o && r.scale.set(o[0], o[1], o[2]),
              r.updateMatrix();
            const c = r.geometry.clone();
            c.applyMatrix4(r.matrix),
              (r.geometry = c),
              (r.renderOrder = 1 / 0),
              r.position.set(0, 0, 0),
              r.rotation.set(0, 0, 0),
              r.scale.set(1, 1, 1),
              e.add(r);
          }
        return e;
      }
      (this.gizmo = {}),
        (this.picker = {}),
        (this.helper = {}),
        this.add((this.gizmo.translate = A(v))),
        this.add((this.gizmo.rotate = A(M))),
        this.add((this.gizmo.scale = A(b))),
        this.add((this.picker.translate = A(x))),
        this.add((this.picker.rotate = A(E))),
        this.add((this.picker.scale = A(w))),
        this.add((this.helper.translate = A(y))),
        this.add((this.helper.rotate = A(S))),
        this.add((this.helper.scale = A(T))),
        (this.picker.translate.visible = !1),
        (this.picker.rotate.visible = !1),
        (this.picker.scale.visible = !1);
    }
    updateMatrixWorld(t) {
      const e =
        "local" === ("scale" === this.mode ? "local" : this.space)
          ? this.worldQuaternion
          : Uo;
      (this.gizmo.translate.visible = "translate" === this.mode),
        (this.gizmo.rotate.visible = "rotate" === this.mode),
        (this.gizmo.scale.visible = "scale" === this.mode),
        (this.helper.translate.visible = "translate" === this.mode),
        (this.helper.rotate.visible = "rotate" === this.mode),
        (this.helper.scale.visible = "scale" === this.mode);
      let n = [];
      (n = n.concat(this.picker[this.mode].children)),
        (n = n.concat(this.gizmo[this.mode].children)),
        (n = n.concat(this.helper[this.mode].children));
      for (let t = 0; t < n.length; t++) {
        const i = n[t];
        let r;
        if (
          ((i.visible = !0),
          i.rotation.set(0, 0, 0),
          i.position.copy(this.worldPosition),
          (r = this.camera.isOrthographicCamera
            ? (this.camera.top - this.camera.bottom) / this.camera.zoom
            : this.worldPosition.distanceTo(this.cameraPosition) *
              Math.min(
                (1.9 * Math.tan((Math.PI * this.camera.fov) / 360)) /
                  this.camera.zoom,
                7
              )),
          i.scale.set(1, 1, 1).multiplyScalar((r * this.size) / 4),
          "helper" !== i.tag)
        ) {
          if (
            (i.quaternion.copy(e),
            "translate" === this.mode || "scale" === this.mode)
          ) {
            const t = 0.99,
              n = 0.2;
            "X" === i.name &&
              Math.abs(Ro.copy(No).applyQuaternion(e).dot(this.eye)) > t &&
              (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1)),
              "Y" === i.name &&
                Math.abs(Ro.copy(Oo).applyQuaternion(e).dot(this.eye)) > t &&
                (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1)),
              "Z" === i.name &&
                Math.abs(Ro.copy(Fo).applyQuaternion(e).dot(this.eye)) > t &&
                (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1)),
              "XY" === i.name &&
                Math.abs(Ro.copy(Fo).applyQuaternion(e).dot(this.eye)) < n &&
                (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1)),
              "YZ" === i.name &&
                Math.abs(Ro.copy(No).applyQuaternion(e).dot(this.eye)) < n &&
                (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1)),
              "XZ" === i.name &&
                Math.abs(Ro.copy(Oo).applyQuaternion(e).dot(this.eye)) < n &&
                (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1));
          } else
            "rotate" === this.mode &&
              (Lo.copy(e),
              Ro.copy(this.eye).applyQuaternion(fo.copy(e).invert()),
              -1 !== i.name.search("E") &&
                i.quaternion.setFromRotationMatrix(Po.lookAt(this.eye, Co, Oo)),
              "X" === i.name &&
                (fo.setFromAxisAngle(No, Math.atan2(-Ro.y, Ro.z)),
                fo.multiplyQuaternions(Lo, fo),
                i.quaternion.copy(fo)),
              "Y" === i.name &&
                (fo.setFromAxisAngle(Oo, Math.atan2(Ro.x, Ro.z)),
                fo.multiplyQuaternions(Lo, fo),
                i.quaternion.copy(fo)),
              "Z" === i.name &&
                (fo.setFromAxisAngle(Fo, Math.atan2(Ro.y, Ro.x)),
                fo.multiplyQuaternions(Lo, fo),
                i.quaternion.copy(fo)));
          (i.visible = i.visible && (-1 === i.name.indexOf("X") || this.showX)),
            (i.visible =
              i.visible && (-1 === i.name.indexOf("Y") || this.showY)),
            (i.visible =
              i.visible && (-1 === i.name.indexOf("Z") || this.showZ)),
            (i.visible =
              i.visible &&
              (-1 === i.name.indexOf("E") ||
                (this.showX && this.showY && this.showZ))),
            (i.material._color = i.material._color || i.material.color.clone()),
            (i.material._opacity = i.material._opacity || i.material.opacity),
            i.material.color.copy(i.material._color),
            (i.material.opacity = i.material._opacity),
            this.enabled &&
              this.axis &&
              (i.name === this.axis ||
                this.axis.split("").some(function (t) {
                  return i.name === t;
                })) &&
              (i.material.color.setHex(16776960), (i.material.opacity = 1));
        } else
          (i.visible = !1),
            "AXIS" === i.name
              ? ((i.visible = !!this.axis),
                "X" === this.axis &&
                  (fo.setFromEuler(Ao.set(0, 0, 0)),
                  i.quaternion.copy(e).multiply(fo),
                  Math.abs(Ro.copy(No).applyQuaternion(e).dot(this.eye)) >
                    0.9 && (i.visible = !1)),
                "Y" === this.axis &&
                  (fo.setFromEuler(Ao.set(0, 0, Math.PI / 2)),
                  i.quaternion.copy(e).multiply(fo),
                  Math.abs(Ro.copy(Oo).applyQuaternion(e).dot(this.eye)) >
                    0.9 && (i.visible = !1)),
                "Z" === this.axis &&
                  (fo.setFromEuler(Ao.set(0, Math.PI / 2, 0)),
                  i.quaternion.copy(e).multiply(fo),
                  Math.abs(Ro.copy(Fo).applyQuaternion(e).dot(this.eye)) >
                    0.9 && (i.visible = !1)),
                "XYZE" === this.axis &&
                  (fo.setFromEuler(Ao.set(0, Math.PI / 2, 0)),
                  Ro.copy(this.rotationAxis),
                  i.quaternion.setFromRotationMatrix(Po.lookAt(Co, Ro, Oo)),
                  i.quaternion.multiply(fo),
                  (i.visible = this.dragging)),
                "E" === this.axis && (i.visible = !1))
              : "START" === i.name
              ? (i.position.copy(this.worldPositionStart),
                (i.visible = this.dragging))
              : "END" === i.name
              ? (i.position.copy(this.worldPosition),
                (i.visible = this.dragging))
              : "DELTA" === i.name
              ? (i.position.copy(this.worldPositionStart),
                i.quaternion.copy(this.worldQuaternionStart),
                po
                  .set(1e-10, 1e-10, 1e-10)
                  .add(this.worldPositionStart)
                  .sub(this.worldPosition)
                  .multiplyScalar(-1),
                po.applyQuaternion(this.worldQuaternionStart.clone().invert()),
                i.scale.copy(po),
                (i.visible = this.dragging))
              : (i.quaternion.copy(e),
                this.dragging
                  ? i.position.copy(this.worldPositionStart)
                  : i.position.copy(this.worldPosition),
                this.axis && (i.visible = -1 !== this.axis.search(i.name)));
      }
      super.updateMatrixWorld(t);
    }
  }
  class Vo extends ni {
    constructor() {
      super(
        new wi(1e5, 1e5, 2, 2),
        new bn({
          visible: !1,
          wireframe: !0,
          side: 2,
          transparent: !0,
          opacity: 0.1,
          toneMapped: !1,
        })
      ),
        (this.isTransformControlsPlane = !0),
        (this.type = "TransformControlsPlane");
    }
    updateMatrixWorld(t) {
      let e = this.space;
      switch (
        (this.position.copy(this.worldPosition),
        "scale" === this.mode && (e = "local"),
        zo.copy(No).applyQuaternion("local" === e ? this.worldQuaternion : Uo),
        Bo.copy(Oo).applyQuaternion("local" === e ? this.worldQuaternion : Uo),
        ko.copy(Fo).applyQuaternion("local" === e ? this.worldQuaternion : Uo),
        Ro.copy(Bo),
        this.mode)
      ) {
        case "translate":
        case "scale":
          switch (this.axis) {
            case "X":
              Ro.copy(this.eye).cross(zo), Do.copy(zo).cross(Ro);
              break;
            case "Y":
              Ro.copy(this.eye).cross(Bo), Do.copy(Bo).cross(Ro);
              break;
            case "Z":
              Ro.copy(this.eye).cross(ko), Do.copy(ko).cross(Ro);
              break;
            case "XY":
              Do.copy(ko);
              break;
            case "YZ":
              Do.copy(zo);
              break;
            case "XZ":
              Ro.copy(ko), Do.copy(Bo);
              break;
            case "XYZ":
            case "E":
              Do.set(0, 0, 0);
          }
          break;
        default:
          Do.set(0, 0, 0);
      }
      0 === Do.length()
        ? this.quaternion.copy(this.cameraQuaternion)
        : (Io.lookAt(po.set(0, 0, 0), Do, Ro),
          this.quaternion.setFromRotationMatrix(Io)),
        super.updateMatrixWorld(t);
    }
  }
  function Go(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        var n =
          null == t
            ? null
            : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
        if (null != n) {
          var i,
            r,
            a,
            s,
            o = [],
            l = !0,
            c = !1;
          try {
            if (((a = (n = n.call(t)).next), 0 === e)) {
              if (Object(n) !== n) return;
              l = !1;
            } else
              for (
                ;
                !(l = (i = a.call(n)).done) &&
                (o.push(i.value), o.length !== e);
                l = !0
              );
          } catch (t) {
            (c = !0), (r = t);
          } finally {
            try {
              if (!l && null != n.return && ((s = n.return()), Object(s) !== s))
                return;
            } finally {
              if (c) throw r;
            }
          }
          return o;
        }
      })(t, e) ||
      (function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return Wo(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if (
          "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return Wo(t, e);
      })(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Wo(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
    return i;
  }
  function Xo(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e && jo(t, e);
  }
  function jo(t, e) {
    return (
      (jo = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      jo(t, e)
    );
  }
  function Yo(t) {
    var e = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var n,
        i = qo(t);
      if (e) {
        var r = qo(this).constructor;
        n = Reflect.construct(i, arguments, r);
      } else n = i.apply(this, arguments);
      return (function (t, e) {
        if (e && ("object" === Zo(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        })(t);
      })(this, n);
    };
  }
  function qo(t) {
    return (
      (qo = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      qo(t)
    );
  }
  function Zo(t) {
    return (
      (Zo =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      Zo(t)
    );
  }
  function Ko(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function $o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(
          t,
          ((r = i.key),
          (a = void 0),
          (a = (function (t, e) {
            if ("object" !== Zo(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(t, e || "default");
              if ("object" !== Zo(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === e ? String : Number)(t);
          })(r, "string")),
          "symbol" === Zo(a) ? a : String(a)),
          i
        );
    }
    var r, a;
  }
  function Jo(t, e, n) {
    return (
      e && $o(t.prototype, e),
      n && $o(t, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  var Qo = (function () {
      function t(e, n, i, r) {
        var a =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : "div";
        Ko(this, t),
          (this.parent = e),
          (this.object = n),
          (this.property = i),
          (this._disabled = !1),
          (this._hidden = !1),
          (this.initialValue = this.getValue()),
          (this.domElement = document.createElement("div")),
          this.domElement.classList.add("controller"),
          this.domElement.classList.add(r),
          (this.$name = document.createElement("div")),
          this.$name.classList.add("name"),
          (t.nextNameID = t.nextNameID || 0),
          (this.$name.id = "lil-gui-name-" + ++t.nextNameID),
          (this.$widget = document.createElement(a)),
          this.$widget.classList.add("widget"),
          (this.$disable = this.$widget),
          this.domElement.appendChild(this.$name),
          this.domElement.appendChild(this.$widget),
          this.parent.children.push(this),
          this.parent.controllers.push(this),
          this.parent.$children.appendChild(this.domElement),
          (this._listenCallback = this._listenCallback.bind(this)),
          this.name(i);
      }
      return (
        Jo(t, [
          {
            key: "name",
            value: function (t) {
              return (this._name = t), (this.$name.innerHTML = t), this;
            },
          },
          {
            key: "onChange",
            value: function (t) {
              return (this._onChange = t), this;
            },
          },
          {
            key: "_callOnChange",
            value: function () {
              this.parent._callOnChange(this),
                void 0 !== this._onChange &&
                  this._onChange.call(this, this.getValue()),
                (this._changed = !0);
            },
          },
          {
            key: "onFinishChange",
            value: function (t) {
              return (this._onFinishChange = t), this;
            },
          },
          {
            key: "_callOnFinishChange",
            value: function () {
              this._changed &&
                (this.parent._callOnFinishChange(this),
                void 0 !== this._onFinishChange &&
                  this._onFinishChange.call(this, this.getValue())),
                (this._changed = !1);
            },
          },
          {
            key: "reset",
            value: function () {
              return (
                this.setValue(this.initialValue),
                this._callOnFinishChange(),
                this
              );
            },
          },
          {
            key: "enable",
            value: function () {
              var t =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return this.disable(!t);
            },
          },
          {
            key: "disable",
            value: function () {
              var t =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return (
                t === this._disabled ||
                  ((this._disabled = t),
                  this.domElement.classList.toggle("disabled", t),
                  this.$disable.toggleAttribute("disabled", t)),
                this
              );
            },
          },
          {
            key: "show",
            value: function () {
              var t =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return (
                (this._hidden = !t),
                (this.domElement.style.display = this._hidden ? "none" : ""),
                this
              );
            },
          },
          {
            key: "hide",
            value: function () {
              return this.show(!1);
            },
          },
          {
            key: "options",
            value: function (t) {
              var e = this.parent.add(this.object, this.property, t);
              return e.name(this._name), this.destroy(), e;
            },
          },
          {
            key: "min",
            value: function (t) {
              return this;
            },
          },
          {
            key: "max",
            value: function (t) {
              return this;
            },
          },
          {
            key: "step",
            value: function (t) {
              return this;
            },
          },
          {
            key: "decimals",
            value: function (t) {
              return this;
            },
          },
          {
            key: "listen",
            value: function () {
              var t =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return (
                (this._listening = t),
                void 0 !== this._listenCallbackID &&
                  (cancelAnimationFrame(this._listenCallbackID),
                  (this._listenCallbackID = void 0)),
                this._listening && this._listenCallback(),
                this
              );
            },
          },
          {
            key: "_listenCallback",
            value: function () {
              this._listenCallbackID = requestAnimationFrame(
                this._listenCallback
              );
              var t = this.save();
              t !== this._listenPrevValue && this.updateDisplay(),
                (this._listenPrevValue = t);
            },
          },
          {
            key: "getValue",
            value: function () {
              return this.object[this.property];
            },
          },
          {
            key: "setValue",
            value: function (t) {
              return (
                (this.object[this.property] = t),
                this._callOnChange(),
                this.updateDisplay(),
                this
              );
            },
          },
          {
            key: "updateDisplay",
            value: function () {
              return this;
            },
          },
          {
            key: "load",
            value: function (t) {
              return this.setValue(t), this._callOnFinishChange(), this;
            },
          },
          {
            key: "save",
            value: function () {
              return this.getValue();
            },
          },
          {
            key: "destroy",
            value: function () {
              this.listen(!1),
                this.parent.children.splice(
                  this.parent.children.indexOf(this),
                  1
                ),
                this.parent.controllers.splice(
                  this.parent.controllers.indexOf(this),
                  1
                ),
                this.parent.$children.removeChild(this.domElement);
            },
          },
        ]),
        t
      );
    })(),
    tl = (function (t) {
      Xo(n, t);
      var e = Yo(n);
      function n(t, i, r) {
        var a;
        return (
          Ko(this, n),
          ((a = e.call(this, t, i, r, "boolean", "label")).$input =
            document.createElement("input")),
          a.$input.setAttribute("type", "checkbox"),
          a.$input.setAttribute("aria-labelledby", a.$name.id),
          a.$widget.appendChild(a.$input),
          a.$input.addEventListener("change", function () {
            a.setValue(a.$input.checked), a._callOnFinishChange();
          }),
          (a.$disable = a.$input),
          a.updateDisplay(),
          a
        );
      }
      return (
        Jo(n, [
          {
            key: "updateDisplay",
            value: function () {
              return (this.$input.checked = this.getValue()), this;
            },
          },
        ]),
        n
      );
    })(Qo);
  function el(t) {
    var e, n;
    return (
      (e = t.match(/(#|0x)?([a-f0-9]{6})/i))
        ? (n = e[2])
        : (e = t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))
        ? (n =
            parseInt(e[1]).toString(16).padStart(2, 0) +
            parseInt(e[2]).toString(16).padStart(2, 0) +
            parseInt(e[3]).toString(16).padStart(2, 0))
        : (e = t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) &&
          (n = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]),
      !!n && "#" + n
    );
  }
  var nl = {
      isPrimitive: !0,
      match: function (t) {
        return "number" == typeof t;
      },
      fromHexString: function (t) {
        return parseInt(t.substring(1), 16);
      },
      toHexString: function (t) {
        return "#" + t.toString(16).padStart(6, 0);
      },
    },
    il = {
      isPrimitive: !1,
      match: function (t) {
        return Array.isArray(t);
      },
      fromHexString: function (t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          i = nl.fromHexString(t);
        (e[0] = (((i >> 16) & 255) / 255) * n),
          (e[1] = (((i >> 8) & 255) / 255) * n),
          (e[2] = ((255 & i) / 255) * n);
      },
      toHexString: function (t) {
        var e = Go(t, 3),
          n = e[0],
          i = e[1],
          r = e[2],
          a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return nl.toHexString(
          ((n * (a = 255 / a)) << 16) ^ ((i * a) << 8) ^ ((r * a) << 0)
        );
      },
    },
    rl = {
      isPrimitive: !1,
      match: function (t) {
        return Object(t) === t;
      },
      fromHexString: function (t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          i = nl.fromHexString(t);
        (e.r = (((i >> 16) & 255) / 255) * n),
          (e.g = (((i >> 8) & 255) / 255) * n),
          (e.b = ((255 & i) / 255) * n);
      },
      toHexString: function (t) {
        var e = t.r,
          n = t.g,
          i = t.b,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return nl.toHexString(
          ((e * (r = 255 / r)) << 16) ^ ((n * r) << 8) ^ ((i * r) << 0)
        );
      },
    },
    al = [
      {
        isPrimitive: !0,
        match: function (t) {
          return "string" == typeof t;
        },
        fromHexString: el,
        toHexString: el,
      },
      nl,
      il,
      rl,
    ],
    sl = (function (t) {
      Xo(n, t);
      var e = Yo(n);
      function n(t, i, r, a) {
        var s, o;
        return (
          Ko(this, n),
          ((s = e.call(this, t, i, r, "color")).$input =
            document.createElement("input")),
          s.$input.setAttribute("type", "color"),
          s.$input.setAttribute("tabindex", -1),
          s.$input.setAttribute("aria-labelledby", s.$name.id),
          (s.$text = document.createElement("input")),
          s.$text.setAttribute("type", "text"),
          s.$text.setAttribute("spellcheck", "false"),
          s.$text.setAttribute("aria-labelledby", s.$name.id),
          (s.$display = document.createElement("div")),
          s.$display.classList.add("display"),
          s.$display.appendChild(s.$input),
          s.$widget.appendChild(s.$display),
          s.$widget.appendChild(s.$text),
          (s._format =
            ((o = s.initialValue),
            al.find(function (t) {
              return t.match(o);
            }))),
          (s._rgbScale = a),
          (s._initialValueHexString = s.save()),
          (s._textFocused = !1),
          s.$input.addEventListener("input", function () {
            s._setValueFromHexString(s.$input.value);
          }),
          s.$input.addEventListener("blur", function () {
            s._callOnFinishChange();
          }),
          s.$text.addEventListener("input", function () {
            var t = el(s.$text.value);
            t && s._setValueFromHexString(t);
          }),
          s.$text.addEventListener("focus", function () {
            (s._textFocused = !0), s.$text.select();
          }),
          s.$text.addEventListener("blur", function () {
            (s._textFocused = !1), s.updateDisplay(), s._callOnFinishChange();
          }),
          (s.$disable = s.$text),
          s.updateDisplay(),
          s
        );
      }
      return (
        Jo(n, [
          {
            key: "reset",
            value: function () {
              return (
                this._setValueFromHexString(this._initialValueHexString), this
              );
            },
          },
          {
            key: "_setValueFromHexString",
            value: function (t) {
              if (this._format.isPrimitive) {
                var e = this._format.fromHexString(t);
                this.setValue(e);
              } else
                this._format.fromHexString(t, this.getValue(), this._rgbScale),
                  this._callOnChange(),
                  this.updateDisplay();
            },
          },
          {
            key: "save",
            value: function () {
              return this._format.toHexString(this.getValue(), this._rgbScale);
            },
          },
          {
            key: "load",
            value: function (t) {
              return (
                this._setValueFromHexString(t), this._callOnFinishChange(), this
              );
            },
          },
          {
            key: "updateDisplay",
            value: function () {
              return (
                (this.$input.value = this._format.toHexString(
                  this.getValue(),
                  this._rgbScale
                )),
                this._textFocused ||
                  (this.$text.value = this.$input.value.substring(1)),
                (this.$display.style.backgroundColor = this.$input.value),
                this
              );
            },
          },
        ]),
        n
      );
    })(Qo),
    ol = (function (t) {
      Xo(n, t);
      var e = Yo(n);
      function n(t, i, r) {
        var a;
        return (
          Ko(this, n),
          ((a = e.call(this, t, i, r, "function")).$button =
            document.createElement("button")),
          a.$button.appendChild(a.$name),
          a.$widget.appendChild(a.$button),
          a.$button.addEventListener("click", function (t) {
            t.preventDefault(), a.getValue().call(a.object), a._callOnChange();
          }),
          a.$button.addEventListener("touchstart", function () {}, {
            passive: !0,
          }),
          (a.$disable = a.$button),
          a
        );
      }
      return Jo(n);
    })(Qo),
    ll = (function (t) {
      Xo(n, t);
      var e = Yo(n);
      function n(t, i, r, a, s, o) {
        var l;
        Ko(this, n),
          (l = e.call(this, t, i, r, "number"))._initInput(),
          l.min(a),
          l.max(s);
        var c = void 0 !== o;
        return l.step(c ? o : l._getImplicitStep(), c), l.updateDisplay(), l;
      }
      return (
        Jo(n, [
          {
            key: "decimals",
            value: function (t) {
              return (this._decimals = t), this.updateDisplay(), this;
            },
          },
          {
            key: "min",
            value: function (t) {
              return (this._min = t), this._onUpdateMinMax(), this;
            },
          },
          {
            key: "max",
            value: function (t) {
              return (this._max = t), this._onUpdateMinMax(), this;
            },
          },
          {
            key: "step",
            value: function (t) {
              var e =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              return (this._step = t), (this._stepExplicit = e), this;
            },
          },
          {
            key: "updateDisplay",
            value: function () {
              var t = this.getValue();
              if (this._hasSlider) {
                var e = (t - this._min) / (this._max - this._min);
                (e = Math.max(0, Math.min(e, 1))),
                  (this.$fill.style.width = 100 * e + "%");
              }
              return (
                this._inputFocused ||
                  (this.$input.value =
                    void 0 === this._decimals ? t : t.toFixed(this._decimals)),
                this
              );
            },
          },
          {
            key: "_initInput",
            value: function () {
              var t = this;
              (this.$input = document.createElement("input")),
                this.$input.setAttribute("type", "number"),
                this.$input.setAttribute("step", "any"),
                this.$input.setAttribute("aria-labelledby", this.$name.id),
                this.$widget.appendChild(this.$input),
                (this.$disable = this.$input);
              var e,
                n,
                i,
                r,
                a,
                s = function (e) {
                  var n = parseFloat(t.$input.value);
                  isNaN(n) ||
                    (t._snapClampSetValue(n + e),
                    (t.$input.value = t.getValue()));
                },
                o = !1,
                l = function (s) {
                  if (o) {
                    var l = s.clientX - e,
                      h = s.clientY - n;
                    Math.abs(h) > 5
                      ? (s.preventDefault(),
                        t.$input.blur(),
                        (o = !1),
                        t._setDraggingStyle(!0, "vertical"))
                      : Math.abs(l) > 5 && c();
                  }
                  if (!o) {
                    var u = s.clientY - i;
                    (a -= u * t._step * t._arrowKeyMultiplier(s)),
                      r + a > t._max
                        ? (a = t._max - r)
                        : r + a < t._min && (a = t._min - r),
                      t._snapClampSetValue(r + a);
                  }
                  i = s.clientY;
                },
                c = function e() {
                  t._setDraggingStyle(!1, "vertical"),
                    t._callOnFinishChange(),
                    window.removeEventListener("mousemove", l),
                    window.removeEventListener("mouseup", e);
                };
              this.$input.addEventListener("input", function () {
                var e = parseFloat(t.$input.value);
                isNaN(e) ||
                  (t._stepExplicit && (e = t._snap(e)),
                  t.setValue(t._clamp(e)));
              }),
                this.$input.addEventListener("keydown", function (e) {
                  "Enter" === e.code && t.$input.blur(),
                    "ArrowUp" === e.code &&
                      (e.preventDefault(),
                      s(t._step * t._arrowKeyMultiplier(e))),
                    "ArrowDown" === e.code &&
                      (e.preventDefault(),
                      s(t._step * t._arrowKeyMultiplier(e) * -1));
                }),
                this.$input.addEventListener(
                  "wheel",
                  function (e) {
                    t._inputFocused &&
                      (e.preventDefault(),
                      s(t._step * t._normalizeMouseWheel(e)));
                  },
                  { passive: !1 }
                ),
                this.$input.addEventListener("mousedown", function (s) {
                  (e = s.clientX),
                    (n = i = s.clientY),
                    (o = !0),
                    (r = t.getValue()),
                    (a = 0),
                    window.addEventListener("mousemove", l),
                    window.addEventListener("mouseup", c);
                }),
                this.$input.addEventListener("focus", function () {
                  t._inputFocused = !0;
                }),
                this.$input.addEventListener("blur", function () {
                  (t._inputFocused = !1),
                    t.updateDisplay(),
                    t._callOnFinishChange();
                });
            },
          },
          {
            key: "_initSlider",
            value: function () {
              var t = this;
              (this._hasSlider = !0),
                (this.$slider = document.createElement("div")),
                this.$slider.classList.add("slider"),
                (this.$fill = document.createElement("div")),
                this.$fill.classList.add("fill"),
                this.$slider.appendChild(this.$fill),
                this.$widget.insertBefore(this.$slider, this.$input),
                this.domElement.classList.add("hasSlider");
              var e,
                n,
                i,
                r = function (e) {
                  var n,
                    i,
                    r,
                    a,
                    s = t.$slider.getBoundingClientRect(),
                    o =
                      ((n = e),
                      (i = s.left),
                      (r = s.right),
                      (a = t._min),
                      ((n - i) / (r - i)) * (t._max - a) + a);
                  t._snapClampSetValue(o);
                },
                a = function (t) {
                  r(t.clientX);
                },
                s = function e() {
                  t._callOnFinishChange(),
                    t._setDraggingStyle(!1),
                    window.removeEventListener("mousemove", a),
                    window.removeEventListener("mouseup", e);
                },
                o = !1,
                l = function (e) {
                  e.preventDefault(),
                    t._setDraggingStyle(!0),
                    r(e.touches[0].clientX),
                    (o = !1);
                },
                c = function t(i) {
                  if (o) {
                    var a = i.touches[0].clientX - e,
                      s = i.touches[0].clientY - n;
                    Math.abs(a) > Math.abs(s)
                      ? l(i)
                      : (window.removeEventListener("touchmove", t),
                        window.removeEventListener("touchend", h));
                  } else i.preventDefault(), r(i.touches[0].clientX);
                },
                h = function e() {
                  t._callOnFinishChange(),
                    t._setDraggingStyle(!1),
                    window.removeEventListener("touchmove", c),
                    window.removeEventListener("touchend", e);
                },
                u = this._callOnFinishChange.bind(this);
              this.$slider.addEventListener("mousedown", function (e) {
                t._setDraggingStyle(!0),
                  r(e.clientX),
                  window.addEventListener("mousemove", a),
                  window.addEventListener("mouseup", s);
              }),
                this.$slider.addEventListener(
                  "touchstart",
                  function (i) {
                    i.touches.length > 1 ||
                      (t._hasScrollBar
                        ? ((e = i.touches[0].clientX),
                          (n = i.touches[0].clientY),
                          (o = !0))
                        : l(i),
                      window.addEventListener("touchmove", c, { passive: !1 }),
                      window.addEventListener("touchend", h));
                  },
                  { passive: !1 }
                ),
                this.$slider.addEventListener(
                  "wheel",
                  function (e) {
                    if (
                      !(
                        Math.abs(e.deltaX) < Math.abs(e.deltaY) &&
                        t._hasScrollBar
                      )
                    ) {
                      e.preventDefault();
                      var n = t._normalizeMouseWheel(e) * t._step;
                      t._snapClampSetValue(t.getValue() + n),
                        (t.$input.value = t.getValue()),
                        clearTimeout(i),
                        (i = setTimeout(u, 400));
                    }
                  },
                  { passive: !1 }
                );
            },
          },
          {
            key: "_setDraggingStyle",
            value: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "horizontal";
              this.$slider && this.$slider.classList.toggle("active", t),
                document.body.classList.toggle("lil-gui-dragging", t),
                document.body.classList.toggle("lil-gui-" + e, t);
            },
          },
          {
            key: "_getImplicitStep",
            value: function () {
              return this._hasMin && this._hasMax
                ? (this._max - this._min) / 1e3
                : 0.1;
            },
          },
          {
            key: "_onUpdateMinMax",
            value: function () {
              !this._hasSlider &&
                this._hasMin &&
                this._hasMax &&
                (this._stepExplicit || this.step(this._getImplicitStep(), !1),
                this._initSlider(),
                this.updateDisplay());
            },
          },
          {
            key: "_normalizeMouseWheel",
            value: function (t) {
              var e = t.deltaX,
                n = t.deltaY;
              return (
                Math.floor(t.deltaY) !== t.deltaY &&
                  t.wheelDelta &&
                  ((e = 0),
                  (n = -t.wheelDelta / 120),
                  (n *= this._stepExplicit ? 1 : 10)),
                e + -n
              );
            },
          },
          {
            key: "_arrowKeyMultiplier",
            value: function (t) {
              var e = this._stepExplicit ? 1 : 10;
              return t.shiftKey ? (e *= 10) : t.altKey && (e /= 10), e;
            },
          },
          {
            key: "_snap",
            value: function (t) {
              var e = Math.round(t / this._step) * this._step;
              return parseFloat(e.toPrecision(15));
            },
          },
          {
            key: "_clamp",
            value: function (t) {
              return (
                t < this._min && (t = this._min),
                t > this._max && (t = this._max),
                t
              );
            },
          },
          {
            key: "_snapClampSetValue",
            value: function (t) {
              this.setValue(this._clamp(this._snap(t)));
            },
          },
          {
            key: "_hasScrollBar",
            get: function () {
              var t = this.parent.root.$children;
              return t.scrollHeight > t.clientHeight;
            },
          },
          {
            key: "_hasMin",
            get: function () {
              return void 0 !== this._min;
            },
          },
          {
            key: "_hasMax",
            get: function () {
              return void 0 !== this._max;
            },
          },
        ]),
        n
      );
    })(Qo),
    cl = (function (t) {
      Xo(n, t);
      var e = Yo(n);
      function n(t, i, r, a) {
        var s;
        return (
          Ko(this, n),
          ((s = e.call(this, t, i, r, "option")).$select =
            document.createElement("select")),
          s.$select.setAttribute("aria-labelledby", s.$name.id),
          (s.$display = document.createElement("div")),
          s.$display.classList.add("display"),
          (s._values = Array.isArray(a) ? a : Object.values(a)),
          (s._names = Array.isArray(a) ? a : Object.keys(a)),
          s._names.forEach(function (t) {
            var e = document.createElement("option");
            (e.innerHTML = t), s.$select.appendChild(e);
          }),
          s.$select.addEventListener("change", function () {
            s.setValue(s._values[s.$select.selectedIndex]),
              s._callOnFinishChange();
          }),
          s.$select.addEventListener("focus", function () {
            s.$display.classList.add("focus");
          }),
          s.$select.addEventListener("blur", function () {
            s.$display.classList.remove("focus");
          }),
          s.$widget.appendChild(s.$select),
          s.$widget.appendChild(s.$display),
          (s.$disable = s.$select),
          s.updateDisplay(),
          s
        );
      }
      return (
        Jo(n, [
          {
            key: "updateDisplay",
            value: function () {
              var t = this.getValue(),
                e = this._values.indexOf(t);
              return (
                (this.$select.selectedIndex = e),
                (this.$display.innerHTML = -1 === e ? t : this._names[e]),
                this
              );
            },
          },
        ]),
        n
      );
    })(Qo),
    hl = (function (t) {
      Xo(n, t);
      var e = Yo(n);
      function n(t, i, r) {
        var a;
        return (
          Ko(this, n),
          ((a = e.call(this, t, i, r, "string")).$input =
            document.createElement("input")),
          a.$input.setAttribute("type", "text"),
          a.$input.setAttribute("aria-labelledby", a.$name.id),
          a.$input.addEventListener("input", function () {
            a.setValue(a.$input.value);
          }),
          a.$input.addEventListener("keydown", function (t) {
            "Enter" === t.code && a.$input.blur();
          }),
          a.$input.addEventListener("blur", function () {
            a._callOnFinishChange();
          }),
          a.$widget.appendChild(a.$input),
          (a.$disable = a.$input),
          a.updateDisplay(),
          a
        );
      }
      return (
        Jo(n, [
          {
            key: "updateDisplay",
            value: function () {
              return (this.$input.value = this.getValue()), this;
            },
          },
        ]),
        n
      );
    })(Qo),
    ul = !1,
    dl = (function () {
      function t() {
        var e = this,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = n.parent,
          r = n.autoPlace,
          a = void 0 === r ? void 0 === i : r,
          s = n.container,
          o = n.width,
          l = n.title,
          c = void 0 === l ? "Controls" : l,
          h = n.closeFolders,
          u = void 0 !== h && h,
          d = n.injectStyles,
          p = void 0 === d || d,
          m = n.touchStyles,
          f = void 0 === m || m;
        if (
          (Ko(this, t),
          (this.parent = i),
          (this.root = i ? i.root : this),
          (this.children = []),
          (this.controllers = []),
          (this.folders = []),
          (this._closed = !1),
          (this._hidden = !1),
          (this.domElement = document.createElement("div")),
          this.domElement.classList.add("lil-gui"),
          (this.$title = document.createElement("div")),
          this.$title.classList.add("title"),
          this.$title.setAttribute("role", "button"),
          this.$title.setAttribute("aria-expanded", !0),
          this.$title.setAttribute("tabindex", 0),
          this.$title.addEventListener("click", function () {
            return e.openAnimated(e._closed);
          }),
          this.$title.addEventListener("keydown", function (t) {
            ("Enter" !== t.code && "Space" !== t.code) ||
              (t.preventDefault(), e.$title.click());
          }),
          this.$title.addEventListener("touchstart", function () {}, {
            passive: !0,
          }),
          (this.$children = document.createElement("div")),
          this.$children.classList.add("children"),
          this.domElement.appendChild(this.$title),
          this.domElement.appendChild(this.$children),
          this.title(c),
          f && this.domElement.classList.add("allow-touch-styles"),
          this.parent)
        )
          return (
            this.parent.children.push(this),
            this.parent.folders.push(this),
            void this.parent.$children.appendChild(this.domElement)
          );
        this.domElement.classList.add("root"),
          !ul &&
            p &&
            ((function (t) {
              var e = document.createElement("style");
              e.innerHTML =
                '.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--title-height:calc(var(--widget-height) + var(--spacing)*1.25);--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}';
              var n = document.querySelector(
                "head link[rel=stylesheet], head style"
              );
              n
                ? document.head.insertBefore(e, n)
                : document.head.appendChild(e);
            })(),
            (ul = !0)),
          s
            ? s.appendChild(this.domElement)
            : a &&
              (this.domElement.classList.add("autoPlace"),
              document.body.appendChild(this.domElement)),
          o && this.domElement.style.setProperty("--width", o + "px"),
          (this._closeFolders = u),
          this.domElement.addEventListener("keydown", function (t) {
            return t.stopPropagation();
          }),
          this.domElement.addEventListener("keyup", function (t) {
            return t.stopPropagation();
          });
      }
      return (
        Jo(t, [
          {
            key: "add",
            value: function (t, e, n, i, r) {
              if (Object(n) === n) return new cl(this, t, e, n);
              var a = t[e];
              switch (Zo(a)) {
                case "number":
                  return new ll(this, t, e, n, i, r);
                case "boolean":
                  return new tl(this, t, e);
                case "string":
                  return new hl(this, t, e);
                case "function":
                  return new ol(this, t, e);
              }
              console.error(
                "gui.add failed\n\tproperty:",
                e,
                "\n\tobject:",
                t,
                "\n\tvalue:",
                a
              );
            },
          },
          {
            key: "addColor",
            value: function (t, e) {
              return new sl(
                this,
                t,
                e,
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1
              );
            },
          },
          {
            key: "addFolder",
            value: function (e) {
              var n = new t({ parent: this, title: e });
              return this.root._closeFolders && n.close(), n;
            },
          },
          {
            key: "load",
            value: function (t) {
              var e =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              return (
                t.controllers &&
                  this.controllers.forEach(function (e) {
                    e instanceof ol ||
                      (e._name in t.controllers &&
                        e.load(t.controllers[e._name]));
                  }),
                e &&
                  t.folders &&
                  this.folders.forEach(function (e) {
                    e._title in t.folders && e.load(t.folders[e._title]);
                  }),
                this
              );
            },
          },
          {
            key: "save",
            value: function () {
              var t =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                e = { controllers: {}, folders: {} };
              return (
                this.controllers.forEach(function (t) {
                  if (!(t instanceof ol)) {
                    if (t._name in e.controllers)
                      throw new Error(
                        'Cannot save GUI with duplicate property "'.concat(
                          t._name,
                          '"'
                        )
                      );
                    e.controllers[t._name] = t.save();
                  }
                }),
                t &&
                  this.folders.forEach(function (t) {
                    if (t._title in e.folders)
                      throw new Error(
                        'Cannot save GUI with duplicate folder "'.concat(
                          t._title,
                          '"'
                        )
                      );
                    e.folders[t._title] = t.save();
                  }),
                e
              );
            },
          },
          {
            key: "open",
            value: function () {
              var t =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return (
                this._setClosed(!t),
                this.$title.setAttribute("aria-expanded", !this._closed),
                this.domElement.classList.toggle("closed", this._closed),
                this
              );
            },
          },
          {
            key: "close",
            value: function () {
              return this.open(!1);
            },
          },
          {
            key: "_setClosed",
            value: function (t) {
              this._closed !== t &&
                ((this._closed = t), this._callOnOpenClose(this));
            },
          },
          {
            key: "show",
            value: function () {
              var t =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return (
                (this._hidden = !t),
                (this.domElement.style.display = this._hidden ? "none" : ""),
                this
              );
            },
          },
          {
            key: "hide",
            value: function () {
              return this.show(!1);
            },
          },
          {
            key: "openAnimated",
            value: function () {
              var t = this,
                e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0];
              return (
                this._setClosed(!e),
                this.$title.setAttribute("aria-expanded", !this._closed),
                requestAnimationFrame(function () {
                  var n = t.$children.clientHeight;
                  (t.$children.style.height = n + "px"),
                    t.domElement.classList.add("transition");
                  t.$children.addEventListener("transitionend", function e(n) {
                    n.target === t.$children &&
                      ((t.$children.style.height = ""),
                      t.domElement.classList.remove("transition"),
                      t.$children.removeEventListener("transitionend", e));
                  });
                  var i = e ? t.$children.scrollHeight : 0;
                  t.domElement.classList.toggle("closed", !e),
                    requestAnimationFrame(function () {
                      t.$children.style.height = i + "px";
                    });
                }),
                this
              );
            },
          },
          {
            key: "title",
            value: function (t) {
              return (this._title = t), (this.$title.innerHTML = t), this;
            },
          },
          {
            key: "reset",
            value: function () {
              return (
                (!(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0]
                  ? this.controllersRecursive()
                  : this.controllers
                ).forEach(function (t) {
                  return t.reset();
                }),
                this
              );
            },
          },
          {
            key: "onChange",
            value: function (t) {
              return (this._onChange = t), this;
            },
          },
          {
            key: "_callOnChange",
            value: function (t) {
              this.parent && this.parent._callOnChange(t),
                void 0 !== this._onChange &&
                  this._onChange.call(this, {
                    object: t.object,
                    property: t.property,
                    value: t.getValue(),
                    controller: t,
                  });
            },
          },
          {
            key: "onFinishChange",
            value: function (t) {
              return (this._onFinishChange = t), this;
            },
          },
          {
            key: "_callOnFinishChange",
            value: function (t) {
              this.parent && this.parent._callOnFinishChange(t),
                void 0 !== this._onFinishChange &&
                  this._onFinishChange.call(this, {
                    object: t.object,
                    property: t.property,
                    value: t.getValue(),
                    controller: t,
                  });
            },
          },
          {
            key: "onOpenClose",
            value: function (t) {
              return (this._onOpenClose = t), this;
            },
          },
          {
            key: "_callOnOpenClose",
            value: function (t) {
              this.parent && this.parent._callOnOpenClose(t),
                void 0 !== this._onOpenClose && this._onOpenClose.call(this, t);
            },
          },
          {
            key: "destroy",
            value: function () {
              this.parent &&
                (this.parent.children.splice(
                  this.parent.children.indexOf(this),
                  1
                ),
                this.parent.folders.splice(
                  this.parent.folders.indexOf(this),
                  1
                )),
                this.domElement.parentElement &&
                  this.domElement.parentElement.removeChild(this.domElement),
                Array.from(this.children).forEach(function (t) {
                  return t.destroy();
                });
            },
          },
          {
            key: "controllersRecursive",
            value: function () {
              var t = Array.from(this.controllers);
              return (
                this.folders.forEach(function (e) {
                  t = t.concat(e.controllersRecursive());
                }),
                t
              );
            },
          },
          {
            key: "foldersRecursive",
            value: function () {
              var t = Array.from(this.folders);
              return (
                this.folders.forEach(function (e) {
                  t = t.concat(e.foldersRecursive());
                }),
                t
              );
            },
          },
        ]),
        t
      );
    })();
  function pl(t) {
    return (
      (pl =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      pl(t)
    );
  }
  function ml(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function fl(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? ml(Object(n), !0).forEach(function (e) {
            gl(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : ml(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  function gl(t, e, n) {
    return (
      (e = xl(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function _l(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, xl(i.key), i);
    }
  }
  function vl(t, e, n) {
    return (
      e && _l(t.prototype, e),
      n && _l(t, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function xl(t) {
    var e = (function (t, e) {
      if ("object" !== pl(t) || null === t) return t;
      var n = t[Symbol.toPrimitive];
      if (void 0 !== n) {
        var i = n.call(t, e || "default");
        if ("object" !== pl(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e ? String : Number)(t);
    })(t, "string");
    return "symbol" === pl(e) ? e : String(e);
  }
  var yl,
    Ml = vl(function t() {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t);
      var e = new dl(),
        n = {
          mainParam: {
            drawColor: { r: 0.4, g: 0.5, b: 0.2 },
            clearColor: { r: 0.5, g: 0.5, b: 0.5 },
            radius: 0.25,
          },
          carpetV: { randSize: 0.5, randSizeY: 1.3, sizeNoise: 1 },
          carpetF: {
            showNormal: !1,
            p1: !0,
            p2: !0,
            p3: !0,
            p4: !0,
            p5: !0,
            p6: !0,
            p7: !0,
            p8: !0,
            p9: !0,
          },
          light: { color: 16759665, intensity: 6, axis: { x: 0.336, y: 4.1 } },
          timeline: { isActive: !1, speed: 1, timeout: 1, isShowAll: !0 },
        };
      e.title("RUG v0.1");
      var i = e.addFolder("Main"),
        r = e.addFolder("Vertex"),
        a = e.addFolder("Fragment"),
        s = e.addFolder("TimeLine"),
        o = e.addFolder("Light");
      a.close(), s.close();
      var l = n.mainParam;
      i.addColor(l, "drawColor"),
        i.addColor(l, "clearColor"),
        i.add(l, "radius", 0.05, 0.5).name("radius");
      var c = n.carpetV;
      r.add(c, "randSize", 0, 5).name("randSize"),
        r.add(c, "randSizeY", 0, 5).name("randSizeY"),
        r.add(c, "sizeNoise", 0.5, 5).name("sizeNoise");
      var h = n.carpetF;
      Object.keys(h).forEach(function (t) {
        a.add(h, t).name(t);
      });
      var u = n.timeline;
      s.add(u, "speed", 0, 3, 1).name("speed"),
        s.add(u, "timeout", 0, 10, 1).name("timeout"),
        s.onOpenClose(function (t) {
          (u.isActive = !t._closed), console.log(u.isActive);
        });
      var d = n.light;
      o.addColor(d, "color"),
        o.add(d, "intensity", 0, 20).name("intensity"),
        o.add(d.axis, "x", 0, 1, 0.001).name("x"),
        o.add(d.axis, "y", 0, 10).name("y");
      var p = {
          carpetV: fl({}, n.carpetV),
          carpetF: fl({}, n.carpetF),
          light: fl({}, n.light),
        },
        m = {
          resetVertex: function () {
            (n.carpetV = fl({}, p.carpetV)), r.reset(!0);
          },
          resetFragment: function () {
            (n.carpetF = fl({}, p.carpetF)), a.reset(!0);
          },
          resetLight: function () {
            (n.light = fl({}, p.light)), o.reset(!0);
          },
        };
      return (
        e.add(m, "resetVertex").name("reset Vertex"),
        e.add(m, "resetFragment").name("reset Fragment"),
        e.add(m, "resetLight").name("reset Light"),
        {
          mainParam: n.mainParam,
          carpetV: n.carpetV,
          carpetF: n.carpetF,
          timeline: n.timeline,
          light: n.light,
        }
      );
    });
  function Sl(t) {
    return (
      (Sl =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      Sl(t)
    );
  }
  function El(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, Al(i.key), i);
    }
  }
  function bl(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function wl(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? bl(Object(n), !0).forEach(function (e) {
            Tl(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : bl(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  function Tl(t, e, n) {
    return (
      (e = Al(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function Al(t) {
    var e = (function (t, e) {
      if ("object" !== Sl(t) || null === t) return t;
      var n = t[Symbol.toPrimitive];
      if (void 0 !== n) {
        var i = n.call(t, e || "default");
        if ("object" !== Sl(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e ? String : Number)(t);
    })(t, "string");
    return "symbol" === Sl(e) ? e : String(e);
  }
  var Rl = Math.PI,
    Cl = (Math.PI2, Math.sin),
    Pl = Math.cos,
    Ll = new Ml(),
    Ul = 0,
    Dl = "assets/textures/",
    Il = "assets/shaders/vert/",
    Nl = "assets/shaders/frag/",
    Ol = !1,
    Fl = {},
    zl = {},
    Bl = {},
    kl = (new Map(), []),
    Hl = !0,
    Vl = document.querySelector("#canvas"),
    Gl = new ns({ antialias: !0, canvas: Vl });
  console.info(
    "ThreeJS",
    t,
    Gl.getContext().getParameter(Gl.getContext().VERSION)
  ),
    Gl.setClearColor(16777215);
  var Wl = new is(),
    Xl = new is(),
    jl = new is(),
    Yl = new Zs(16777215, 1),
    ql = Yl.clone();
  (ql.intensity = 10 * Yl.intensity), Wl.add(Yl), jl.add(ql);
  var Zl = new qs(16746496, 4);
  Wl.add(Zl), Zl.position.set(-8, 8, -8);
  (Gl.physicallyCorrectLights = !0),
    (Gl.toneMapping = M),
    (Gl.shadowMap.enabled = !0),
    (Gl.shadowMap.type = c),
    (Zl.castShadow = !0),
    (Zl.shadow.camera.near = 0.01),
    (Zl.shadow.camera.far = 40),
    (Zl.shadow.camera.left = -10),
    (Zl.shadow.camera.right = 10),
    (Zl.shadow.camera.top = 10),
    (Zl.shadow.camera.bottom = -10),
    (Zl.shadow.mapSize.width = 4096),
    (Zl.shadow.mapSize.height = 4096),
    (Zl.shadow.bias = 6e-4);
  var Kl =
      (Tl(
        (yl = {
          uTime: { value: 0 },
          uFrameCount: { value: 0 },
          uResolution: { value: { x: Vl.clientWidth, y: Vl.clientHeight } },
          uMousePos: { value: { x: 0, y: 0 } },
          uMouseButtons: { value: [!1, !1, !1] },
          uViewPos: { value: new ee() },
          uPlaneSize: { value: { x: 4, y: 4 } },
          uNormalAngle: { value: 0 },
        }),
        "uNormalAngle",
        { value: 0 }
      ),
      Tl(yl, "uLightSpaceMatrix", { value: new Le() }),
      Tl(yl, "uLightPos", { value: new ee() }),
      Tl(yl, "uLightBias", { value: Zl.shadow.bias }),
      Tl(yl, "uLightIntensity", { value: Zl.intensity }),
      Tl(yl, "uLightColor", { value: new ee(0, 0, 0) }),
      Tl(yl, "uLightAmbient", { value: Yl.color }),
      Tl(yl, "mainParam", { value: wl({}, Ll.mainParam) }),
      Tl(yl, "carpetV", { value: wl({}, Ll.carpetV) }),
      Tl(yl, "carpetF", { value: wl({}, Ll.carpetF) }),
      Tl(yl, "timeline", { value: wl({}, Ll.timeline) }),
      Tl(yl, "tDraw", { value: null }),
      Tl(yl, "tMask", { value: null }),
      Tl(yl, "tDepthDown", { value: null }),
      Tl(yl, "tShadow", { value: null }),
      yl),
    $l = new Ns(),
    Jl = new (class extends Fs {
      constructor(t) {
        super(t);
      }
      load(t, e, n, i) {
        const r = new Zt(),
          a = new Hs(this.manager);
        return (
          a.setCrossOrigin(this.crossOrigin),
          a.setPath(this.path),
          a.load(
            t,
            function (t) {
              (r.image = t), (r.needsUpdate = !0), void 0 !== e && e(r);
            },
            n,
            i
          ),
          r
        );
      }
    })($l),
    Ql = new ks($l),
    tc = document.querySelector("#loading");
  (tc.style.display = "none"),
    ($l.onProgress = function (t, e, n) {
      console.log(t, e, n);
    }),
    ($l.onLoad = function () {
      (tc.style.display = "none"),
        (Ol = !0),
        (function () {
          (Fl.drawPlane = new ni(new wi(1, 1), zl.draw)),
            Xl.add(Fl.drawPlane),
            (zl.plane.side = 2),
            (Fl.plane = new ni(
              new wi(Kl.uPlaneSize.value.x, Kl.uPlaneSize.value.y),
              zl.plane
            )),
            Fl.plane.rotateX(Rt.degToRad(-90)),
            Wl.add(Fl.plane);
          var t = new zn();
          t.setAttribute(
            "position",
            new An(new Float32Array([0, 0, 0, 1, 1, 1]), 3)
          );
          var e = new Ks().copy(t);
          (e.instanceCount = 9e4),
            (Fl.carptet = new hs(e, zl.carpet)),
            (Fl.box = new ni(new ri(1, 1, 1), new vs({ color: 6717235 }))),
            Fl.box.position.set(0, 0.5, -2),
            (Fl.box2 = new ni(new ri(1, 1, 1), new vs({ color: 13401907 }))),
            Fl.box2.position.set(-2, 0.5, 0),
            (Fl.box3 = new ni(
              new ri(0.5, 0.5, 0.5),
              new vs({ color: 16733440 })
            )),
            (Fl.box3.rotation.x = Rt.degToRad(45)),
            Fl.box3.position.set(-1.5, 0.35, -1.5),
            (Fl.box4 = new ni(
              new ri(1.5, 0.5, 0.1),
              new vs({ color: 8388863 })
            )),
            Fl.box4.position.set(0, 0.25, -0.5),
            (Fl.cone = new ni(
              new ds(0.25, 0.25, 20),
              new vs({ color: 16733440 })
            )),
            (Fl.cone.rotation.x = Rt.degToRad(180)),
            Fl.cone.position.set(-1.5, 0.2, 1.5),
            (Fl.torus = new ni(
              new gs(1, 0.25, 8, 50),
              new vs({ color: 16733440 })
            )),
            (Fl.torus.rotation.x = Rt.degToRad(180)),
            (Fl.torus.rotation.x = Rt.degToRad(90)),
            Fl.torus.position.set(1.25, 0.1, -1),
            Fl.torus.scale.set(0.4, 0.4, 0.4),
            (Fl.arc = new ni(
              new gs(10, 3, 16, 100),
              new bn({ color: 16711680 })
            )),
            (Fl.floor = new ni(
              new wi(10, 10),
              new vs({ color: 15658734, side: 2 })
            )),
            Fl.floor.rotateX(Rt.degToRad(-90)),
            (Fl.floor.position.y = -0.01),
            [Fl.floor].forEach(function (t) {
              t.receiveShadow = !0;
            }),
            [
              Fl.box,
              Fl.box2,
              Fl.box3,
              Fl.box4,
              Fl.cone,
              Fl.torus,
              Fl.arc,
            ].forEach(function (t) {
              t.castShadow = !0;
            }),
            [
              Fl.box,
              Fl.box2,
              Fl.box3,
              Fl.box4,
              Fl.cone,
              Fl.torus,
              Fl.arc,
              Fl.floor,
              Fl.carptet,
            ].forEach(function (t) {
              Wl.add(t);
            }),
            [Fl.box, Fl.box2, Fl.box3, Fl.box4, Fl.cone, Fl.torus].forEach(
              function (t) {
                var e = t.clone();
                (e.material = t.material),
                  (e.cloneID = t.id),
                  (e.cloneUUID = t.uuid),
                  jl.add(e);
              }
            ),
            [Fl.box, Fl.box2, Fl.box3, Fl.box4, Fl.cone, Fl.torus].forEach(
              function (t) {
                kl.push(t);
              }
            ),
            Wl.add(ac),
            pc(Gl);
        })();
    }),
    ($l.onError = function (t) {
      console.error("Load error:", t.split("undefined").join(""));
    });
  var ec = new ui(75, 2, 0.01, 100);
  ec.position.set(2.25, 1, 2);
  var nc = new Oi(-0.5, 0.5, 0.5, -0.5, 0, 1),
    ic = new Oi(-2, 2, 2, -2, 0, 0.15);
  ic.position.set(0, -0.001, 0), ic.lookAt(new ee(0, 1, 0));
  var rc = new (class extends mt {
    constructor(t, l) {
      super(),
        (this.object = t),
        (this.domElement = l),
        (this.domElement.style.touchAction = "none"),
        (this.enabled = !0),
        (this.target = new ee()),
        (this.minDistance = 0),
        (this.maxDistance = 1 / 0),
        (this.minZoom = 0),
        (this.maxZoom = 1 / 0),
        (this.minPolarAngle = 0),
        (this.maxPolarAngle = Math.PI),
        (this.minAzimuthAngle = -1 / 0),
        (this.maxAzimuthAngle = 1 / 0),
        (this.enableDamping = !1),
        (this.dampingFactor = 0.05),
        (this.enableZoom = !0),
        (this.zoomSpeed = 1),
        (this.enableRotate = !0),
        (this.rotateSpeed = 1),
        (this.enablePan = !0),
        (this.panSpeed = 1),
        (this.screenSpacePanning = !0),
        (this.keyPanSpeed = 7),
        (this.autoRotate = !1),
        (this.autoRotateSpeed = 2),
        (this.keys = {
          LEFT: "ArrowLeft",
          UP: "ArrowUp",
          RIGHT: "ArrowRight",
          BOTTOM: "ArrowDown",
        }),
        (this.mouseButtons = { LEFT: e, MIDDLE: n, RIGHT: i }),
        (this.touches = { ONE: r, TWO: s }),
        (this.target0 = this.target.clone()),
        (this.position0 = this.object.position.clone()),
        (this.zoom0 = this.object.zoom),
        (this._domElementKeyEvents = null),
        (this.getPolarAngle = function () {
          return p.phi;
        }),
        (this.getAzimuthalAngle = function () {
          return p.theta;
        }),
        (this.getDistance = function () {
          return this.object.position.distanceTo(this.target);
        }),
        (this.listenToKeyEvents = function (t) {
          t.addEventListener("keydown", Z), (this._domElementKeyEvents = t);
        }),
        (this.stopListenToKeyEvents = function () {
          this._domElementKeyEvents.removeEventListener("keydown", Z),
            (this._domElementKeyEvents = null);
        }),
        (this.saveState = function () {
          c.target0.copy(c.target),
            c.position0.copy(c.object.position),
            (c.zoom0 = c.object.zoom);
        }),
        (this.reset = function () {
          c.target.copy(c.target0),
            c.object.position.copy(c.position0),
            (c.object.zoom = c.zoom0),
            c.object.updateProjectionMatrix(),
            c.dispatchEvent(lo),
            c.update(),
            (u = h.NONE);
        }),
        (this.update = (function () {
          const e = new ee(),
            n = new te().setFromUnitVectors(t.up, new ee(0, 1, 0)),
            i = n.clone().invert(),
            r = new ee(),
            a = new te(),
            s = new ee(),
            o = 2 * Math.PI;
          return function () {
            const t = c.object.position;
            e.copy(t).sub(c.target),
              e.applyQuaternion(n),
              p.setFromVector3(e),
              c.autoRotate &&
                u === h.NONE &&
                P(((2 * Math.PI) / 60 / 60) * c.autoRotateSpeed),
              c.enableDamping
                ? ((p.theta += m.theta * c.dampingFactor),
                  (p.phi += m.phi * c.dampingFactor))
                : ((p.theta += m.theta), (p.phi += m.phi));
            let l = c.minAzimuthAngle,
              v = c.maxAzimuthAngle;
            return (
              isFinite(l) &&
                isFinite(v) &&
                (l < -Math.PI ? (l += o) : l > Math.PI && (l -= o),
                v < -Math.PI ? (v += o) : v > Math.PI && (v -= o),
                (p.theta =
                  l <= v
                    ? Math.max(l, Math.min(v, p.theta))
                    : p.theta > (l + v) / 2
                    ? Math.max(l, p.theta)
                    : Math.min(v, p.theta))),
              (p.phi = Math.max(
                c.minPolarAngle,
                Math.min(c.maxPolarAngle, p.phi)
              )),
              p.makeSafe(),
              (p.radius *= f),
              (p.radius = Math.max(
                c.minDistance,
                Math.min(c.maxDistance, p.radius)
              )),
              !0 === c.enableDamping
                ? c.target.addScaledVector(g, c.dampingFactor)
                : c.target.add(g),
              e.setFromSpherical(p),
              e.applyQuaternion(i),
              t.copy(c.target).add(e),
              c.object.lookAt(c.target),
              !0 === c.enableDamping
                ? ((m.theta *= 1 - c.dampingFactor),
                  (m.phi *= 1 - c.dampingFactor),
                  g.multiplyScalar(1 - c.dampingFactor))
                : (m.set(0, 0, 0), g.set(0, 0, 0)),
              (f = 1),
              !!(
                _ ||
                r.distanceToSquared(c.object.position) > d ||
                8 * (1 - a.dot(c.object.quaternion)) > d ||
                s.distanceToSquared(c.target) > 0
              ) &&
                (c.dispatchEvent(lo),
                r.copy(c.object.position),
                a.copy(c.object.quaternion),
                s.copy(c.target),
                (_ = !1),
                !0)
            );
          };
        })()),
        (this.dispose = function () {
          c.domElement.removeEventListener("contextmenu", K),
            c.domElement.removeEventListener("pointerdown", X),
            c.domElement.removeEventListener("pointercancel", Y),
            c.domElement.removeEventListener("wheel", q),
            c.domElement.removeEventListener("pointermove", j),
            c.domElement.removeEventListener("pointerup", Y),
            null !== c._domElementKeyEvents &&
              (c._domElementKeyEvents.removeEventListener("keydown", Z),
              (c._domElementKeyEvents = null));
        });
      const c = this,
        h = {
          NONE: -1,
          ROTATE: 0,
          DOLLY: 1,
          PAN: 2,
          TOUCH_ROTATE: 3,
          TOUCH_PAN: 4,
          TOUCH_DOLLY_PAN: 5,
          TOUCH_DOLLY_ROTATE: 6,
        };
      let u = h.NONE;
      const d = 1e-6,
        p = new oo(),
        m = new oo();
      let f = 1;
      const g = new ee();
      let _ = !1;
      const v = new Ct(),
        x = new Ct(),
        y = new Ct(),
        M = new Ct(),
        S = new Ct(),
        E = new Ct(),
        b = new Ct(),
        w = new Ct(),
        T = new Ct(),
        A = [],
        R = {};
      function C() {
        return Math.pow(0.95, c.zoomSpeed);
      }
      function P(t) {
        m.theta -= t;
      }
      function L(t) {
        m.phi -= t;
      }
      const U = (function () {
          const t = new ee();
          return function (e, n) {
            t.setFromMatrixColumn(n, 0), t.multiplyScalar(-e), g.add(t);
          };
        })(),
        D = (function () {
          const t = new ee();
          return function (e, n) {
            !0 === c.screenSpacePanning
              ? t.setFromMatrixColumn(n, 1)
              : (t.setFromMatrixColumn(n, 0), t.crossVectors(c.object.up, t)),
              t.multiplyScalar(e),
              g.add(t);
          };
        })(),
        I = (function () {
          const t = new ee();
          return function (e, n) {
            const i = c.domElement;
            if (c.object.isPerspectiveCamera) {
              const r = c.object.position;
              t.copy(r).sub(c.target);
              let a = t.length();
              (a *= Math.tan(((c.object.fov / 2) * Math.PI) / 180)),
                U((2 * e * a) / i.clientHeight, c.object.matrix),
                D((2 * n * a) / i.clientHeight, c.object.matrix);
            } else
              c.object.isOrthographicCamera
                ? (U(
                    (e * (c.object.right - c.object.left)) /
                      c.object.zoom /
                      i.clientWidth,
                    c.object.matrix
                  ),
                  D(
                    (n * (c.object.top - c.object.bottom)) /
                      c.object.zoom /
                      i.clientHeight,
                    c.object.matrix
                  ))
                : (console.warn(
                    "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                  ),
                  (c.enablePan = !1));
          };
        })();
      function N(t) {
        c.object.isPerspectiveCamera
          ? (f /= t)
          : c.object.isOrthographicCamera
          ? ((c.object.zoom = Math.max(
              c.minZoom,
              Math.min(c.maxZoom, c.object.zoom * t)
            )),
            c.object.updateProjectionMatrix(),
            (_ = !0))
          : (console.warn(
              "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
            ),
            (c.enableZoom = !1));
      }
      function O(t) {
        c.object.isPerspectiveCamera
          ? (f *= t)
          : c.object.isOrthographicCamera
          ? ((c.object.zoom = Math.max(
              c.minZoom,
              Math.min(c.maxZoom, c.object.zoom / t)
            )),
            c.object.updateProjectionMatrix(),
            (_ = !0))
          : (console.warn(
              "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
            ),
            (c.enableZoom = !1));
      }
      function F(t) {
        v.set(t.clientX, t.clientY);
      }
      function z(t) {
        M.set(t.clientX, t.clientY);
      }
      function B() {
        if (1 === A.length) v.set(A[0].pageX, A[0].pageY);
        else {
          const t = 0.5 * (A[0].pageX + A[1].pageX),
            e = 0.5 * (A[0].pageY + A[1].pageY);
          v.set(t, e);
        }
      }
      function k() {
        if (1 === A.length) M.set(A[0].pageX, A[0].pageY);
        else {
          const t = 0.5 * (A[0].pageX + A[1].pageX),
            e = 0.5 * (A[0].pageY + A[1].pageY);
          M.set(t, e);
        }
      }
      function H() {
        const t = A[0].pageX - A[1].pageX,
          e = A[0].pageY - A[1].pageY,
          n = Math.sqrt(t * t + e * e);
        b.set(0, n);
      }
      function V(t) {
        if (1 == A.length) x.set(t.pageX, t.pageY);
        else {
          const e = J(t),
            n = 0.5 * (t.pageX + e.x),
            i = 0.5 * (t.pageY + e.y);
          x.set(n, i);
        }
        y.subVectors(x, v).multiplyScalar(c.rotateSpeed);
        const e = c.domElement;
        P((2 * Math.PI * y.x) / e.clientHeight),
          L((2 * Math.PI * y.y) / e.clientHeight),
          v.copy(x);
      }
      function G(t) {
        if (1 === A.length) S.set(t.pageX, t.pageY);
        else {
          const e = J(t),
            n = 0.5 * (t.pageX + e.x),
            i = 0.5 * (t.pageY + e.y);
          S.set(n, i);
        }
        E.subVectors(S, M).multiplyScalar(c.panSpeed), I(E.x, E.y), M.copy(S);
      }
      function W(t) {
        const e = J(t),
          n = t.pageX - e.x,
          i = t.pageY - e.y,
          r = Math.sqrt(n * n + i * i);
        w.set(0, r),
          T.set(0, Math.pow(w.y / b.y, c.zoomSpeed)),
          N(T.y),
          b.copy(w);
      }
      function X(t) {
        !1 !== c.enabled &&
          (0 === A.length &&
            (c.domElement.setPointerCapture(t.pointerId),
            c.domElement.addEventListener("pointermove", j),
            c.domElement.addEventListener("pointerup", Y)),
          (function (t) {
            A.push(t);
          })(t),
          "touch" === t.pointerType
            ? (function (t) {
                switch (($(t), A.length)) {
                  case 1:
                    switch (c.touches.ONE) {
                      case r:
                        if (!1 === c.enableRotate) return;
                        B(), (u = h.TOUCH_ROTATE);
                        break;
                      case a:
                        if (!1 === c.enablePan) return;
                        k(), (u = h.TOUCH_PAN);
                        break;
                      default:
                        u = h.NONE;
                    }
                    break;
                  case 2:
                    switch (c.touches.TWO) {
                      case s:
                        if (!1 === c.enableZoom && !1 === c.enablePan) return;
                        c.enableZoom && H(),
                          c.enablePan && k(),
                          (u = h.TOUCH_DOLLY_PAN);
                        break;
                      case o:
                        if (!1 === c.enableZoom && !1 === c.enableRotate)
                          return;
                        c.enableZoom && H(),
                          c.enableRotate && B(),
                          (u = h.TOUCH_DOLLY_ROTATE);
                        break;
                      default:
                        u = h.NONE;
                    }
                    break;
                  default:
                    u = h.NONE;
                }
                u !== h.NONE && c.dispatchEvent(co);
              })(t)
            : (function (t) {
                let r;
                switch (t.button) {
                  case 0:
                    r = c.mouseButtons.LEFT;
                    break;
                  case 1:
                    r = c.mouseButtons.MIDDLE;
                    break;
                  case 2:
                    r = c.mouseButtons.RIGHT;
                    break;
                  default:
                    r = -1;
                }
                switch (r) {
                  case n:
                    if (!1 === c.enableZoom) return;
                    !(function (t) {
                      b.set(t.clientX, t.clientY);
                    })(t),
                      (u = h.DOLLY);
                    break;
                  case e:
                    if (t.ctrlKey || t.metaKey || t.shiftKey) {
                      if (!1 === c.enablePan) return;
                      z(t), (u = h.PAN);
                    } else {
                      if (!1 === c.enableRotate) return;
                      F(t), (u = h.ROTATE);
                    }
                    break;
                  case i:
                    if (t.ctrlKey || t.metaKey || t.shiftKey) {
                      if (!1 === c.enableRotate) return;
                      F(t), (u = h.ROTATE);
                    } else {
                      if (!1 === c.enablePan) return;
                      z(t), (u = h.PAN);
                    }
                    break;
                  default:
                    u = h.NONE;
                }
                u !== h.NONE && c.dispatchEvent(co);
              })(t));
      }
      function j(t) {
        !1 !== c.enabled &&
          ("touch" === t.pointerType
            ? (function (t) {
                switch (($(t), u)) {
                  case h.TOUCH_ROTATE:
                    if (!1 === c.enableRotate) return;
                    V(t), c.update();
                    break;
                  case h.TOUCH_PAN:
                    if (!1 === c.enablePan) return;
                    G(t), c.update();
                    break;
                  case h.TOUCH_DOLLY_PAN:
                    if (!1 === c.enableZoom && !1 === c.enablePan) return;
                    !(function (t) {
                      c.enableZoom && W(t), c.enablePan && G(t);
                    })(t),
                      c.update();
                    break;
                  case h.TOUCH_DOLLY_ROTATE:
                    if (!1 === c.enableZoom && !1 === c.enableRotate) return;
                    !(function (t) {
                      c.enableZoom && W(t), c.enableRotate && V(t);
                    })(t),
                      c.update();
                    break;
                  default:
                    u = h.NONE;
                }
              })(t)
            : (function (t) {
                switch (u) {
                  case h.ROTATE:
                    if (!1 === c.enableRotate) return;
                    !(function (t) {
                      x.set(t.clientX, t.clientY),
                        y.subVectors(x, v).multiplyScalar(c.rotateSpeed);
                      const e = c.domElement;
                      P((2 * Math.PI * y.x) / e.clientHeight),
                        L((2 * Math.PI * y.y) / e.clientHeight),
                        v.copy(x),
                        c.update();
                    })(t);
                    break;
                  case h.DOLLY:
                    if (!1 === c.enableZoom) return;
                    !(function (t) {
                      w.set(t.clientX, t.clientY),
                        T.subVectors(w, b),
                        T.y > 0 ? N(C()) : T.y < 0 && O(C()),
                        b.copy(w),
                        c.update();
                    })(t);
                    break;
                  case h.PAN:
                    if (!1 === c.enablePan) return;
                    !(function (t) {
                      S.set(t.clientX, t.clientY),
                        E.subVectors(S, M).multiplyScalar(c.panSpeed),
                        I(E.x, E.y),
                        M.copy(S),
                        c.update();
                    })(t);
                }
              })(t));
      }
      function Y(t) {
        !(function (t) {
          delete R[t.pointerId];
          for (let e = 0; e < A.length; e++)
            if (A[e].pointerId == t.pointerId) return void A.splice(e, 1);
        })(t),
          0 === A.length &&
            (c.domElement.releasePointerCapture(t.pointerId),
            c.domElement.removeEventListener("pointermove", j),
            c.domElement.removeEventListener("pointerup", Y)),
          c.dispatchEvent(ho),
          (u = h.NONE);
      }
      function q(t) {
        !1 !== c.enabled &&
          !1 !== c.enableZoom &&
          u === h.NONE &&
          (t.preventDefault(),
          c.dispatchEvent(co),
          (function (t) {
            t.deltaY < 0 ? O(C()) : t.deltaY > 0 && N(C()), c.update();
          })(t),
          c.dispatchEvent(ho));
      }
      function Z(t) {
        !1 !== c.enabled &&
          !1 !== c.enablePan &&
          (function (t) {
            let e = !1;
            switch (t.code) {
              case c.keys.UP:
                t.ctrlKey || t.metaKey || t.shiftKey
                  ? L((2 * Math.PI * c.rotateSpeed) / c.domElement.clientHeight)
                  : I(0, c.keyPanSpeed),
                  (e = !0);
                break;
              case c.keys.BOTTOM:
                t.ctrlKey || t.metaKey || t.shiftKey
                  ? L(
                      (-2 * Math.PI * c.rotateSpeed) / c.domElement.clientHeight
                    )
                  : I(0, -c.keyPanSpeed),
                  (e = !0);
                break;
              case c.keys.LEFT:
                t.ctrlKey || t.metaKey || t.shiftKey
                  ? P((2 * Math.PI * c.rotateSpeed) / c.domElement.clientHeight)
                  : I(c.keyPanSpeed, 0),
                  (e = !0);
                break;
              case c.keys.RIGHT:
                t.ctrlKey || t.metaKey || t.shiftKey
                  ? P(
                      (-2 * Math.PI * c.rotateSpeed) / c.domElement.clientHeight
                    )
                  : I(-c.keyPanSpeed, 0),
                  (e = !0);
            }
            e && (t.preventDefault(), c.update());
          })(t);
      }
      function K(t) {
        !1 !== c.enabled && t.preventDefault();
      }
      function $(t) {
        let e = R[t.pointerId];
        void 0 === e && ((e = new Ct()), (R[t.pointerId] = e)),
          e.set(t.pageX, t.pageY);
      }
      function J(t) {
        const e = t.pointerId === A[0].pointerId ? A[1] : A[0];
        return R[e.pointerId];
      }
      c.domElement.addEventListener("contextmenu", K),
        c.domElement.addEventListener("pointerdown", X),
        c.domElement.addEventListener("pointercancel", Y),
        c.domElement.addEventListener("wheel", q, { passive: !1 }),
        this.update();
    }
  })(ec, Gl.domElement);
  (rc.enablePan = !1), (rc.minDistance = 3), (rc.maxDistance = 6);
  var ac = new (class extends nn {
    constructor(t, e) {
      super(),
        void 0 === e &&
          (console.warn(
            'THREE.TransformControls: The second parameter "domElement" is now mandatory.'
          ),
          (e = document)),
        (this.isTransformControls = !0),
        (this.visible = !1),
        (this.domElement = e),
        (this.domElement.style.touchAction = "none");
      const n = new Ho();
      (this._gizmo = n), this.add(n);
      const i = new Vo();
      (this._plane = i), this.add(i);
      const r = this;
      function a(t, e) {
        let a = e;
        Object.defineProperty(r, t, {
          get: function () {
            return void 0 !== a ? a : e;
          },
          set: function (e) {
            a !== e &&
              ((a = e),
              (i[t] = e),
              (n[t] = e),
              r.dispatchEvent({ type: t + "-changed", value: e }),
              r.dispatchEvent(_o));
          },
        }),
          (r[t] = e),
          (i[t] = e),
          (n[t] = e);
      }
      a("camera", t),
        a("object", void 0),
        a("enabled", !0),
        a("axis", null),
        a("mode", "translate"),
        a("translationSnap", null),
        a("rotationSnap", null),
        a("scaleSnap", null),
        a("space", "world"),
        a("size", 1),
        a("dragging", !1),
        a("showX", !0),
        a("showY", !0),
        a("showZ", !0);
      const s = new ee(),
        o = new ee(),
        l = new te(),
        c = new te(),
        h = new ee(),
        u = new te(),
        d = new ee(),
        p = new ee(),
        m = new ee(),
        f = new ee();
      a("worldPosition", s),
        a("worldPositionStart", o),
        a("worldQuaternion", l),
        a("worldQuaternionStart", c),
        a("cameraPosition", h),
        a("cameraQuaternion", u),
        a("pointStart", d),
        a("pointEnd", p),
        a("rotationAxis", m),
        a("rotationAngle", 0),
        a("eye", f),
        (this._offset = new ee()),
        (this._startNorm = new ee()),
        (this._endNorm = new ee()),
        (this._cameraScale = new ee()),
        (this._parentPosition = new ee()),
        (this._parentQuaternion = new te()),
        (this._parentQuaternionInv = new te()),
        (this._parentScale = new ee()),
        (this._worldScaleStart = new ee()),
        (this._worldQuaternionInv = new te()),
        (this._worldScale = new ee()),
        (this._positionStart = new ee()),
        (this._quaternionStart = new te()),
        (this._scaleStart = new ee()),
        (this._getPointer = Mo.bind(this)),
        (this._onPointerDown = Eo.bind(this)),
        (this._onPointerHover = So.bind(this)),
        (this._onPointerMove = bo.bind(this)),
        (this._onPointerUp = wo.bind(this)),
        this.domElement.addEventListener("pointerdown", this._onPointerDown),
        this.domElement.addEventListener("pointermove", this._onPointerHover),
        this.domElement.addEventListener("pointerup", this._onPointerUp);
    }
    updateMatrixWorld() {
      void 0 !== this.object &&
        (this.object.updateMatrixWorld(),
        null === this.object.parent
          ? console.error(
              "TransformControls: The attached 3D object must be a part of the scene graph."
            )
          : this.object.parent.matrixWorld.decompose(
              this._parentPosition,
              this._parentQuaternion,
              this._parentScale
            ),
        this.object.matrixWorld.decompose(
          this.worldPosition,
          this.worldQuaternion,
          this._worldScale
        ),
        this._parentQuaternionInv.copy(this._parentQuaternion).invert(),
        this._worldQuaternionInv.copy(this.worldQuaternion).invert()),
        this.camera.updateMatrixWorld(),
        this.camera.matrixWorld.decompose(
          this.cameraPosition,
          this.cameraQuaternion,
          this._cameraScale
        ),
        this.camera.isOrthographicCamera
          ? this.camera.getWorldDirection(this.eye).negate()
          : this.eye
              .copy(this.cameraPosition)
              .sub(this.worldPosition)
              .normalize(),
        super.updateMatrixWorld(this);
    }
    pointerHover(t) {
      if (void 0 === this.object || !0 === this.dragging) return;
      uo.setFromCamera(t, this.camera);
      const e = To(this._gizmo.picker[this.mode], uo);
      this.axis = e ? e.object.name : null;
    }
    pointerDown(t) {
      if (
        void 0 !== this.object &&
        !0 !== this.dragging &&
        0 === t.button &&
        null !== this.axis
      ) {
        uo.setFromCamera(t, this.camera);
        const e = To(this._plane, uo, !0);
        e &&
          (this.object.updateMatrixWorld(),
          this.object.parent.updateMatrixWorld(),
          this._positionStart.copy(this.object.position),
          this._quaternionStart.copy(this.object.quaternion),
          this._scaleStart.copy(this.object.scale),
          this.object.matrixWorld.decompose(
            this.worldPositionStart,
            this.worldQuaternionStart,
            this._worldScaleStart
          ),
          this.pointStart.copy(e.point).sub(this.worldPositionStart)),
          (this.dragging = !0),
          (vo.mode = this.mode),
          this.dispatchEvent(vo);
      }
    }
    pointerMove(t) {
      const e = this.axis,
        n = this.mode,
        i = this.object;
      let r = this.space;
      if (
        ("scale" === n
          ? (r = "local")
          : ("E" !== e && "XYZE" !== e && "XYZ" !== e) || (r = "world"),
        void 0 === i || null === e || !1 === this.dragging || -1 !== t.button)
      )
        return;
      uo.setFromCamera(t, this.camera);
      const a = To(this._plane, uo, !0);
      if (a) {
        if (
          (this.pointEnd.copy(a.point).sub(this.worldPositionStart),
          "translate" === n)
        )
          this._offset.copy(this.pointEnd).sub(this.pointStart),
            "local" === r &&
              "XYZ" !== e &&
              this._offset.applyQuaternion(this._worldQuaternionInv),
            -1 === e.indexOf("X") && (this._offset.x = 0),
            -1 === e.indexOf("Y") && (this._offset.y = 0),
            -1 === e.indexOf("Z") && (this._offset.z = 0),
            "local" === r && "XYZ" !== e
              ? this._offset
                  .applyQuaternion(this._quaternionStart)
                  .divide(this._parentScale)
              : this._offset
                  .applyQuaternion(this._parentQuaternionInv)
                  .divide(this._parentScale),
            i.position.copy(this._offset).add(this._positionStart),
            this.translationSnap &&
              ("local" === r &&
                (i.position.applyQuaternion(
                  fo.copy(this._quaternionStart).invert()
                ),
                -1 !== e.search("X") &&
                  (i.position.x =
                    Math.round(i.position.x / this.translationSnap) *
                    this.translationSnap),
                -1 !== e.search("Y") &&
                  (i.position.y =
                    Math.round(i.position.y / this.translationSnap) *
                    this.translationSnap),
                -1 !== e.search("Z") &&
                  (i.position.z =
                    Math.round(i.position.z / this.translationSnap) *
                    this.translationSnap),
                i.position.applyQuaternion(this._quaternionStart)),
              "world" === r &&
                (i.parent &&
                  i.position.add(
                    po.setFromMatrixPosition(i.parent.matrixWorld)
                  ),
                -1 !== e.search("X") &&
                  (i.position.x =
                    Math.round(i.position.x / this.translationSnap) *
                    this.translationSnap),
                -1 !== e.search("Y") &&
                  (i.position.y =
                    Math.round(i.position.y / this.translationSnap) *
                    this.translationSnap),
                -1 !== e.search("Z") &&
                  (i.position.z =
                    Math.round(i.position.z / this.translationSnap) *
                    this.translationSnap),
                i.parent &&
                  i.position.sub(
                    po.setFromMatrixPosition(i.parent.matrixWorld)
                  )));
        else if ("scale" === n) {
          if (-1 !== e.search("XYZ")) {
            let t = this.pointEnd.length() / this.pointStart.length();
            this.pointEnd.dot(this.pointStart) < 0 && (t *= -1),
              mo.set(t, t, t);
          } else
            po.copy(this.pointStart),
              mo.copy(this.pointEnd),
              po.applyQuaternion(this._worldQuaternionInv),
              mo.applyQuaternion(this._worldQuaternionInv),
              mo.divide(po),
              -1 === e.search("X") && (mo.x = 1),
              -1 === e.search("Y") && (mo.y = 1),
              -1 === e.search("Z") && (mo.z = 1);
          i.scale.copy(this._scaleStart).multiply(mo),
            this.scaleSnap &&
              (-1 !== e.search("X") &&
                (i.scale.x =
                  Math.round(i.scale.x / this.scaleSnap) * this.scaleSnap ||
                  this.scaleSnap),
              -1 !== e.search("Y") &&
                (i.scale.y =
                  Math.round(i.scale.y / this.scaleSnap) * this.scaleSnap ||
                  this.scaleSnap),
              -1 !== e.search("Z") &&
                (i.scale.z =
                  Math.round(i.scale.z / this.scaleSnap) * this.scaleSnap ||
                  this.scaleSnap));
        } else if ("rotate" === n) {
          this._offset.copy(this.pointEnd).sub(this.pointStart);
          const t =
            20 /
            this.worldPosition.distanceTo(
              po.setFromMatrixPosition(this.camera.matrixWorld)
            );
          "E" === e
            ? (this.rotationAxis.copy(this.eye),
              (this.rotationAngle = this.pointEnd.angleTo(this.pointStart)),
              this._startNorm.copy(this.pointStart).normalize(),
              this._endNorm.copy(this.pointEnd).normalize(),
              (this.rotationAngle *=
                this._endNorm.cross(this._startNorm).dot(this.eye) < 0
                  ? 1
                  : -1))
            : "XYZE" === e
            ? (this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),
              (this.rotationAngle =
                this._offset.dot(po.copy(this.rotationAxis).cross(this.eye)) *
                t))
            : ("X" !== e && "Y" !== e && "Z" !== e) ||
              (this.rotationAxis.copy(go[e]),
              po.copy(go[e]),
              "local" === r && po.applyQuaternion(this.worldQuaternion),
              (this.rotationAngle =
                this._offset.dot(po.cross(this.eye).normalize()) * t)),
            this.rotationSnap &&
              (this.rotationAngle =
                Math.round(this.rotationAngle / this.rotationSnap) *
                this.rotationSnap),
            "local" === r && "E" !== e && "XYZE" !== e
              ? (i.quaternion.copy(this._quaternionStart),
                i.quaternion
                  .multiply(
                    fo.setFromAxisAngle(this.rotationAxis, this.rotationAngle)
                  )
                  .normalize())
              : (this.rotationAxis.applyQuaternion(this._parentQuaternionInv),
                i.quaternion.copy(
                  fo.setFromAxisAngle(this.rotationAxis, this.rotationAngle)
                ),
                i.quaternion.multiply(this._quaternionStart).normalize());
        }
        this.dispatchEvent(_o), this.dispatchEvent(yo);
      }
    }
    pointerUp(t) {
      0 === t.button &&
        (this.dragging &&
          null !== this.axis &&
          ((xo.mode = this.mode), this.dispatchEvent(xo)),
        (this.dragging = !1),
        (this.axis = null));
    }
    dispose() {
      this.domElement.removeEventListener("pointerdown", this._onPointerDown),
        this.domElement.removeEventListener(
          "pointermove",
          this._onPointerHover
        ),
        this.domElement.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.removeEventListener("pointerup", this._onPointerUp),
        this.traverse(function (t) {
          t.geometry && t.geometry.dispose(),
            t.material && t.material.dispose();
        });
    }
    attach(t) {
      return (this.object = t), (this.visible = !0), this;
    }
    detach() {
      return (
        (this.object = void 0), (this.visible = !1), (this.axis = null), this
      );
    }
    reset() {
      this.enabled &&
        this.dragging &&
        (this.object.position.copy(this._positionStart),
        this.object.quaternion.copy(this._quaternionStart),
        this.object.scale.copy(this._scaleStart),
        this.dispatchEvent(_o),
        this.dispatchEvent(yo),
        this.pointStart.copy(this.pointEnd));
    }
    getRaycaster() {
      return uo;
    }
    getMode() {
      return this.mode;
    }
    setMode(t) {
      this.mode = t;
    }
    setTranslationSnap(t) {
      this.translationSnap = t;
    }
    setRotationSnap(t) {
      this.rotationSnap = t;
    }
    setScaleSnap(t) {
      this.scaleSnap = t;
    }
    setSize(t) {
      this.size = t;
    }
    setSpace(t) {
      this.space = t;
    }
  })(ec, Gl.domElement);
  ac.addEventListener("dragging-changed", function (t) {
    (rc.enabled = !t.value), (ac.dragState = 1), (Hl = !1);
  });
  var sc = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
      }
      var e, n, i;
      return (
        (e = t),
        (n = [
          {
            key: "create",
            value: function (t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                i = n.isDepth || !1,
                r = n.isSave || !1;
              if (i) {
                var a = [new $t(t, e)],
                  s = a[0];
                return (
                  (s.depthTexture = new $a()),
                  (s.depthTexture.generateMipmaps = !1),
                  (s.depthTexture.format = W),
                  (s.depthTexture.type = F),
                  (s.depthTexture.minFilter = L),
                  (s.depthTexture.magFilter = L),
                  (a.width = t),
                  (a.height = e),
                  (a.isDepth = !0),
                  a
                );
              }
              for (var o = [], l = r ? 2 : 1, c = 0; c < l; c++)
                (o[c] = new $t(t, e, { format: G, type: O })),
                  (o[c].texture.generateMipmaps = !1),
                  (o[c].texture.minFilter = I),
                  (o[c].texture.magFilter = I);
              return (o.width = t), (o.height = e), (o.isSave = r), o;
            },
          },
          {
            key: "getTargetNum",
            value: function (t, e) {
              var n = t.isSave ? (e % 2 == 0 ? 0 : 1) : 0;
              return {
                renderNum: n,
                textureNum: t.isSave ? Math.abs(n - 1) : 0,
              };
            },
          },
        ]),
        n && El(e.prototype, n),
        i && El(e, i),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })(),
    oc = new sc();
  (Bl.draw = oc.create(128, 256, { isSave: !0 })),
    (Bl.depthDown = oc.create(256, 256, { isDepth: !0 })),
    Jl.load(Dl + "mask_0.png", function (t) {
      (t.magFilter = L),
        (t.minFilter = 1005),
        (t.wrapS = R),
        (t.wrapT = R),
        (t.repeat.x = 1),
        (t.repeat.y = 1),
        (Kl.tMask.value = t);
    }),
    [
      { name: "draw", vert: "default.vert", frag: "drawMap.frag" },
      { name: "carpet", vert: "carpet.vert", frag: "carpet.frag" },
      { name: "plane", vert: "plane.vert", frag: "plane.frag" },
    ].forEach(function (t) {
      var e = t.name,
        n = t.vert,
        i = t.frag,
        r = Il + n,
        a = Nl + i;
      (zl[e] = new ci({ uniforms: Kl })),
        n &&
          Ql.load(r, function (t) {
            zl[e].vertexShader =
              t ||
              "\n    void main() {\n      vec4 modelViewPosition = viewMatrix * modelMatrix * vec4(position, 1.0);\n      gl_Position = projectionMatrix * modelViewPosition;\n    }\n";
          }),
        i &&
          Ql.load(a, function (t) {
            zl[e].fragmentShader =
              t ||
              "\n    void main() {\n      gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);\n    }\n";
          });
    });
  var lc,
    cc = new Ct(),
    hc = new ro(),
    uc = 0,
    dc = new ee();
  function pc(t) {
    var e = t.domElement,
      n = mc(window.devicePixelRatio, 1, 3);
    t.setPixelRatio(n);
    var i = e.clientWidth,
      r = e.clientHeight;
    t.setSize(i, r, !1),
      t.setViewport(0, 0, e.clientWidth, e.clientHeight),
      t.render(Wl, ec),
      (ec.aspect = e.clientWidth / e.clientHeight),
      ec.updateProjectionMatrix(),
      (Kl.uResolution.value.x = e.clientWidth),
      (Kl.uResolution.value.y = e.clientHeight),
      console.log("pixel ratio: [curent, device]", n, window.devicePixelRatio),
      console.log("resize", e.clientWidth, e.clientHeight);
  }
  function mc(t, e, n) {
    return Math.min(Math.max(t, e), n);
  }
  window.addEventListener("mousemove", function (t) {
    if (
      ((cc.x = (t.clientX / Vl.clientWidth) * 2 - 1),
      (cc.y = (-t.clientY / Vl.clientHeight) * 2 + 1),
      hc.setFromCamera(cc, ec),
      Fl.plane)
    )
      if ((uc = hc.intersectObject(Fl.plane)).length > 0 && Hl) {
        var e = uc[0].point;
        (Kl.uMousePos.value.x = e.x / 2), (Kl.uMousePos.value.y = -e.z / 2);
      } else (Kl.uMousePos.value.x = -1e3), (Kl.uMousePos.value.y = -1e3);
    ec.getWorldDirection(dc);
    var n = mc(Math.abs(dc.normalize().z), 0, 1);
    Kl.uNormalAngle.value = 1 - n.toFixed(5);
  }),
    window.addEventListener("mousedown", function (t) {
      if (1 === uc.length && Hl) {
        var e = t.button;
        (Kl.uMouseButtons.value[e] = !0), (rc.enableRotate = !1);
      }
      ec.position.y < 0.5 && (rc.enableRotate = !0);
    }),
    window.addEventListener("mouseup", function (t) {
      var e = t.button;
      (Kl.uMouseButtons.value[e] = !1), (rc.enableRotate = !0);
    }),
    window.addEventListener("click", function () {
      var t = hc.intersectObjects(kl, !1);
      if (t.length > 0) {
        var e = t[0].object;
        lc != e &&
          (ac.attach(e),
          lc && lc.material.emissive.setHex(lc.currentHex),
          ((lc = e).currentHex = lc.material.emissive.getHex()),
          lc.material.emissive.setHex(16711680));
      } else 2 === ac.dragState && (lc && lc.material.emissive.setHex(lc.currentHex), (lc = null), ac.detach(), (Hl = !0), (ac.dragState = 0)), (ac.dragState = 2);
    }),
    window.addEventListener("keydown", function (t) {
      switch (t.code) {
        case "KeyQ":
          ac.setSpace("local" === ac.space ? "world" : "local");
          break;
        case "ShiftLeft":
          ac.setTranslationSnap(0.25),
            ac.setRotationSnap(Rt.degToRad(15)),
            ac.setScaleSnap(0.25);
          break;
        case "KeyT":
          ac.setMode("translate");
          break;
        case "KeyR":
          ac.setMode("rotate");
          break;
        case "KeyS":
          ac.setMode("scale");
      }
    }),
    window.addEventListener("keyup", function (t) {
      if ("ShiftLeft" === t.code)
        ac.setTranslationSnap(null),
          ac.setRotationSnap(null),
          ac.setScaleSnap(null);
    }),
    pc(Gl),
    (window.onresize = function () {
      return pc(Gl);
    }),
    (window.onload = function () {
      return pc(Gl);
    });
  var fc = 0,
    gc = 0;
  window.requestAnimationFrame(function t() {
    (fc = gc / 1e3),
      (gc = 1 / (performance.now() - gc)),
      (function (t, e) {
        jl.children.forEach(function (t) {
          if (t.cloneID) {
            var e = Wl.getObjectById(t.cloneID).matrix;
            (t.matrixAutoUpdate = !1), t.matrix.copy(e);
          }
        }),
          Zl.position.set(
            10 * Cl(Ll.light.axis.x * Rl * 2),
            Ll.light.axis.y,
            10 * Pl(Ll.light.axis.x * Rl * 2)
          ),
          Zl.color.set(new Sn(Ll.light.color)),
          (Zl.intensity = Ll.light.intensity),
          (Kl.uTime.value = t),
          (Kl.uFrameCount.value = Ul),
          (Kl.uViewPos.value = ec.position),
          (Kl.uLightColor.value = Zl.color),
          (Kl.uLightIntensity.value = Zl.intensity),
          (Kl.mainParam.value = Ll.mainParam),
          (Kl.carpetV.value = Ll.carpetV),
          (Kl.carpetF.value = Ll.carpetF),
          (Kl.timeline.value = Ll.timeline);
        var n = Zl.shadow.camera;
        (Kl.uLightSpaceMatrix.value = n.projectionMatrix
          .clone()
          .multiply(n.matrixWorldInverse)),
          (Kl.uLightPos.value = n.position.clone());
        var i = Bl.draw,
          r = oc.getTargetNum(i, Ul),
          a = r.renderNum,
          s = r.textureNum;
        (Kl.tDraw.value = i[a].texture),
          Gl.setViewport(0, 0, i.width, i.height),
          Gl.setRenderTarget(i[s]),
          Gl.render(Xl, nc),
          Gl.setRenderTarget(null);
        var o = Bl.depthDown,
          l = oc.getTargetNum(o, Ul),
          c = l.renderNum,
          h = l.textureNum;
        (Kl.tDepthDown.value = o[c].depthTexture),
          Gl.setViewport(0, 0, o.width, o.height),
          Gl.setRenderTarget(o[h]),
          Gl.render(jl, ic),
          Gl.setRenderTarget(null),
          Fl.box4 && (Fl.box4.rotation.y += 0.005),
          Gl.setViewport(0, 0, Vl.clientWidth, Vl.clientHeight),
          Gl.render(Wl, ec),
          (Kl.tShadow.value = Zl.shadow.map.texture),
          Ol && Ul++;
      })(fc),
      window.requestAnimationFrame(t),
      (gc = performance.now());
  });
})();
