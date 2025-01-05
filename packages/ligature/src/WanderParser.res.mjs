// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Model from "./Model.res.mjs";
import * as Ligature from "./Ligature.res.mjs";
import * as WanderTokenizerJs from "./WanderTokenizer.js";

function reset(prim) {
  WanderTokenizerJs.reset(prim);
}

function next(prim) {
  return WanderTokenizerJs.next();
}

function readIgnoreWS() {
  while(true) {
    var value = WanderTokenizerJs.next();
    if (value === null || value === undefined) {
      return null;
    }
    if (value.type !== "ws") {
      return value;
    }
    continue ;
  };
}

function readElementPattern() {
  var match = readIgnoreWS();
  if (match === null || match === undefined) {
    return null;
  }
  switch (match.type) {
    case "element" :
        return {
                TAG: "Element",
                _0: Ligature.element(match.value)
              };
    case "slot" :
        return {
                TAG: "Slot",
                _0: Ligature.slot(match.value)
              };
    default:
      return null;
  }
}

function readValue() {
  var match = readIgnoreWS();
  if (match === null || match === undefined) {
    return null;
  }
  switch (match.type) {
    case "element" :
        return {
                TAG: "VElement",
                _0: Ligature.element(match.value)
              };
    case "literal" :
        return {
                TAG: "VLiteral",
                _0: Ligature.literal(match.value)
              };
    case "slot" :
        return {
                TAG: "VSlot",
                _0: Ligature.slot(match.value)
              };
    default:
      return null;
  }
}

function readNetwork(triples) {
  while(true) {
    var match = readIgnoreWS();
    if (match === null || match === undefined) {
      return null;
    }
    switch (match.type) {
      case "cbrace" :
          return Ligature.network(triples);
      case "comma" :
          continue ;
      case "element" :
          var match$1 = readElementPattern();
          var match$2 = readValue();
          if (match$1 === null || match$1 === undefined) {
            return null;
          }
          if (match$2 === null || match$2 === undefined) {
            return null;
          }
          triples.push(Ligature.triple({
                    TAG: "Element",
                    _0: Ligature.element(match.value)
                  }, match$1, match$2));
          continue ;
      case "slot" :
          var match$3 = readElementPattern();
          var match$4 = readValue();
          if (match$3 === null || match$3 === undefined) {
            return null;
          }
          if (match$4 === null || match$4 === undefined) {
            return null;
          }
          triples.push(Ligature.triple({
                    TAG: "Slot",
                    _0: Ligature.slot(match.value)
                  }, match$3, match$4));
          continue ;
      default:
        throw {
              RE_EXN_ID: "Match_failure",
              _1: [
                "WanderParser.res",
                44,
                2
              ],
              Error: new Error()
            };
    }
  };
}

function readArguments() {
  var token = readIgnoreWS();
  var args = [];
  var cont = true;
  while(cont) {
    var match = token;
    if (match === null || match === undefined) {
      if (match === null) {
        cont = false;
      } else {
        throw {
              RE_EXN_ID: "Match_failure",
              _1: [
                "WanderParser.res",
                76,
                4
              ],
              Error: new Error()
            };
      }
    } else {
      switch (match.type) {
        case "comma" :
            cont = false;
            break;
        case "element" :
            args.push({
                  TAG: "Element",
                  _0: Ligature.element(match.value)
                });
            token = readIgnoreWS();
            break;
        case "obrace" :
            var value = readNetwork([]);
            if (value === null || value === undefined) {
              if (value === null) {
                throw {
                      RE_EXN_ID: "Failure",
                      _1: "Unexpected value while reading network.",
                      Error: new Error()
                    };
              }
              throw {
                    RE_EXN_ID: "Failure",
                    _1: "Unexpected value while reading network.",
                    Error: new Error()
                  };
            } else {
              args.push({
                    TAG: "Network",
                    _0: value
                  });
            }
            token = readIgnoreWS();
            break;
        case "slot" :
            args.push({
                  TAG: "Slot",
                  _0: Ligature.slot(match.value)
                });
            token = readIgnoreWS();
            break;
        default:
          throw {
                RE_EXN_ID: "Match_failure",
                _1: [
                  "WanderParser.res",
                  76,
                  4
                ],
                Error: new Error()
              };
      }
    }
  };
  return args;
}

function readCall(name) {
  var args = readArguments();
  return Model.call(name, args);
}

function parseScript() {
  var res = [];
  var cont = true;
  while(cont) {
    var x = readIgnoreWS();
    if (x === null || x === undefined) {
      cont = false;
    } else {
      switch (x.type) {
        case "comma" :
            break;
        case "element" :
            var c = readCall(x.value);
            if (c === null || c === undefined) {
              if (c === null) {
                throw {
                      RE_EXN_ID: "Failure",
                      _1: "Unexpected problem reading call.",
                      Error: new Error()
                    };
              }
              throw {
                    RE_EXN_ID: "Match_failure",
                    _1: [
                      "WanderParser.res",
                      111,
                      8
                    ],
                    Error: new Error()
                  };
            } else {
              res.push(c);
            }
            break;
        default:
          console.log("Error");
          console.log(x);
      }
    }
  };
  return res;
}

function parse(script) {
  WanderTokenizerJs.reset(script);
  return parseScript();
}

function readTriple() {
  return null;
}

function readToken() {
  
}

export {
  reset ,
  next ,
  readIgnoreWS ,
  readElementPattern ,
  readValue ,
  readNetwork ,
  readArguments ,
  readCall ,
  parseScript ,
  parse ,
  readTriple ,
  readToken ,
}
/* Ligature Not a pure module */
