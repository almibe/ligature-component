// Generated by ReScript, PLEASE EDIT WITH CARE

import Ava from "ava";
import * as Ligature from "../src/Ligature.res.mjs";
import * as WanderParser from "../src/WanderParser.res.mjs";

Ava("parse empty string", (function (t) {
        t.deepEqual(WanderParser.parse(""), []);
      }));

Ava("parse single element", (function (t) {
        t.deepEqual(WanderParser.parse("test"), [{
                type: "expression",
                variableName: "",
                contents: [{
                    TAG: "Element",
                    _0: Ligature.$$Element.element("test")
                  }]
              }]);
      }));

Ava("parse single call with single arg", (function (t) {
        t.deepEqual(WanderParser.parse("test 1"), [{
                type: "expression",
                variableName: "",
                contents: [
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("test")
                  },
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("1")
                  }
                ]
              }]);
      }));

Ava("parse single call with multiple args", (function (t) {
        t.deepEqual(WanderParser.parse("test 1 2 3"), [{
                type: "expression",
                variableName: "",
                contents: [
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("test")
                  },
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("1")
                  },
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("2")
                  },
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("3")
                  }
                ]
              }]);
      }));

Ava("parse single call with slot arg", (function (t) {
        t.deepEqual(WanderParser.parse("test ?var"), [{
                type: "expression",
                variableName: "",
                contents: [
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("test")
                  },
                  {
                    TAG: "Slot",
                    _0: Ligature.Slot.slot("?var")
                  }
                ]
              }]);
      }));

Ava("parse single call with emppy network arg", (function (t) {
        t.deepEqual(WanderParser.parse("test {}"), [{
                type: "expression",
                variableName: "",
                contents: [
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("test")
                  },
                  {
                    TAG: "Network",
                    _0: Ligature.Network.network([])
                  }
                ]
              }]);
      }));

Ava("parse single call with network arg", (function (t) {
        t.deepEqual(WanderParser.parse("test {a b c}"), [{
                type: "expression",
                variableName: "",
                contents: [
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("test")
                  },
                  {
                    TAG: "Network",
                    _0: Ligature.Network.network([Ligature.Triple.triple({
                                TAG: "Element",
                                _0: Ligature.$$Element.element("a")
                              }, {
                                TAG: "Element",
                                _0: Ligature.$$Element.element("b")
                              }, {
                                TAG: "VElement",
                                _0: Ligature.$$Element.element("c")
                              })])
                  }
                ]
              }]);
      }));

Ava("parse network with two triples", (function (t) {
        t.deepEqual(WanderParser.parse("test {a b c, d e f}"), [{
                type: "expression",
                variableName: "",
                contents: [
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("test")
                  },
                  {
                    TAG: "Network",
                    _0: Ligature.Network.network([
                          Ligature.Triple.triple({
                                TAG: "Element",
                                _0: Ligature.$$Element.element("a")
                              }, {
                                TAG: "Element",
                                _0: Ligature.$$Element.element("b")
                              }, {
                                TAG: "VElement",
                                _0: Ligature.$$Element.element("c")
                              }),
                          Ligature.Triple.triple({
                                TAG: "Element",
                                _0: Ligature.$$Element.element("d")
                              }, {
                                TAG: "Element",
                                _0: Ligature.$$Element.element("e")
                              }, {
                                TAG: "VElement",
                                _0: Ligature.$$Element.element("f")
                              })
                        ])
                  }
                ]
              }]);
      }));

Ava("parse network with slots", (function (t) {
        t.deepEqual(WanderParser.parse("test {?a b ?c, d ?e f}"), [{
                type: "expression",
                variableName: "",
                contents: [
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("test")
                  },
                  {
                    TAG: "Network",
                    _0: Ligature.Network.network([
                          Ligature.Triple.triple({
                                TAG: "Slot",
                                _0: Ligature.Slot.slot("?a")
                              }, {
                                TAG: "Element",
                                _0: Ligature.$$Element.element("b")
                              }, {
                                TAG: "VSlot",
                                _0: Ligature.Slot.slot("?c")
                              }),
                          Ligature.Triple.triple({
                                TAG: "Element",
                                _0: Ligature.$$Element.element("d")
                              }, {
                                TAG: "Slot",
                                _0: Ligature.Slot.slot("?e")
                              }, {
                                TAG: "VElement",
                                _0: Ligature.$$Element.element("f")
                              })
                        ])
                  }
                ]
              }]);
      }));

Ava("parse script with multiple calls", (function (t) {
        t.deepEqual(WanderParser.parse("test 1, test 2"), [
              {
                type: "expression",
                variableName: "",
                contents: [
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("test")
                  },
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("1")
                  }
                ]
              },
              {
                type: "expression",
                variableName: "",
                contents: [
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("test")
                  },
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("2")
                  }
                ]
              }
            ]);
      }));

Ava("parse assignment", (function (t) {
        t.deepEqual(WanderParser.parse("$var = test 1"), [{
                type: "expression",
                variableName: "$var",
                contents: [
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("test")
                  },
                  {
                    TAG: "Element",
                    _0: Ligature.$$Element.element("1")
                  }
                ]
              }]);
      }));

export {
  
}
/*  Not a pure module */
