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
                _0: Ligature.$$Element.element(match.value)
              };
    case "slot" :
        return {
                TAG: "Slot",
                _0: Ligature.Slot.slot(match.value)
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
                _0: Ligature.$$Element.element(match.value)
              };
    case "literal" :
        return {
                TAG: "VLiteral",
                _0: Ligature.Literal.literal(match.value)
              };
    case "slot" :
        return {
                TAG: "VSlot",
                _0: Ligature.Slot.slot(match.value)
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
          return Ligature.Network.network(triples);
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
          triples.push(Ligature.Triple.triple({
                    TAG: "Element",
                    _0: Ligature.$$Element.element(match.value)
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
          triples.push(Ligature.Triple.triple({
                    TAG: "Slot",
                    _0: Ligature.Slot.slot(match.value)
                  }, match$3, match$4));
          continue ;
      default:
        throw {
              RE_EXN_ID: "Match_failure",
              _1: [
                "WanderParser.res",
                50,
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
    var unexpected = token;
    if (unexpected === null || unexpected === undefined) {
      if (unexpected === null) {
        cont = false;
      } else {
        throw {
              RE_EXN_ID: "Match_failure",
              _1: [
                "WanderParser.res",
                90,
                4
              ],
              Error: new Error()
            };
      }
    } else {
      switch (unexpected.type) {
        case "comma" :
            cont = false;
            break;
        case "element" :
            args.push({
                  TAG: "Element",
                  _0: Ligature.$$Element.element(unexpected.value)
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
                  _0: Ligature.Slot.slot(unexpected.value)
                });
            token = readIgnoreWS();
            break;
        case "variable" :
            args.push({
                  TAG: "Variable",
                  _0: Model.Variable.variable(unexpected.value)
                });
            token = readIgnoreWS();
            break;
        default:
          console.log("Unexpected value");
          console.log(unexpected);
      }
    }
  };
  return args;
}

function readQuote() {
  var token = readIgnoreWS();
  var args = [];
  var cont = true;
  while(cont) {
    var unexpected = token;
    if (unexpected === null || unexpected === undefined) {
      if (unexpected === null) {
        cont = false;
      } else {
        throw {
              RE_EXN_ID: "Match_failure",
              _1: [
                "WanderParser.res",
                126,
                4
              ],
              Error: new Error()
            };
      }
    } else {
      switch (unexpected.type) {
        case "cparen" :
            cont = false;
            break;
        case "element" :
            args.push({
                  TAG: "Element",
                  _0: Ligature.$$Element.element(unexpected.value)
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
                  _0: Ligature.Slot.slot(unexpected.value)
                });
            token = readIgnoreWS();
            break;
        case "variable" :
            args.push({
                  TAG: "Variable",
                  _0: Model.Variable.variable(unexpected.value)
                });
            token = readIgnoreWS();
            break;
        default:
          console.log("Unexpected value");
          console.log(unexpected);
      }
    }
  };
  return args;
}

function readAssignment(name) {
  var equals = readIgnoreWS();
  if (equals === null || equals === undefined) {
    if (equals === null) {
      return null;
    }
    throw {
          RE_EXN_ID: "Match_failure",
          _1: [
            "WanderParser.res",
            159,
            2
          ],
          Error: new Error()
        };
  } else {
    if (equals.type === "equalSign") {
      var contents = readArguments();
      if (contents.length !== 0) {
        return {
                type: "assignment",
                variableName: name,
                contents: contents
              };
      }
      throw {
            RE_EXN_ID: "Failure",
            _1: "Invalid expression.",
            Error: new Error()
          };
    }
    throw {
          RE_EXN_ID: "Match_failure",
          _1: [
            "WanderParser.res",
            159,
            2
          ],
          Error: new Error()
        };
  }
}

function readAtoms() {
  var atoms = [];
  var cont = true;
  while(cont) {
    var match = readIgnoreWS();
    if (match === null || match === undefined) {
      cont = false;
    } else {
      switch (match.type) {
        case "comma" :
            atoms.push("Comma");
            break;
        case "comment" :
            break;
        case "element" :
            atoms.push({
                  TAG: "Element",
                  _0: {
                    value: match.value,
                    type: "element"
                  }
                });
            break;
        case "equalSign" :
            atoms.push("EqualSign");
            break;
        case "literal" :
            atoms.push({
                  TAG: "Literal",
                  _0: {
                    value: match.value,
                    type: "literal"
                  }
                });
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
              atoms.push({
                    TAG: "Network",
                    _0: value
                  });
            }
            break;
        case "oparen" :
            var quote = readQuote();
            atoms.push({
                  TAG: "Quote",
                  _0: quote
                });
            break;
        case "slot" :
            atoms.push({
                  TAG: "Slot",
                  _0: {
                    value: match.value,
                    type: "slot"
                  }
                });
            break;
        case "variable" :
            atoms.push({
                  TAG: "Variable",
                  _0: {
                    value: match.value,
                    type: "variable"
                  }
                });
            break;
        default:
          throw {
                RE_EXN_ID: "Match_failure",
                _1: [
                  "WanderParser.res",
                  174,
                  4
                ],
                Error: new Error()
              };
      }
    }
  };
  return atoms;
}

function parseScript(atoms) {
  var res = [];
  var cont = true;
  var offset = 0;
  while(cont) {
    var exit = 0;
    var match = atoms[offset];
    if (match !== undefined) {
      if (typeof match !== "object") {
        exit = 1;
      } else {
        switch (match.TAG) {
          case "Element" :
              var match$1 = match._0;
              if (match$1.type === "element") {
                offset = offset + 1 | 0;
                var results = [{
                    TAG: "Element",
                    _0: {
                      value: match$1.value,
                      type: "element"
                    }
                  }];
                var innerCont = true;
                while(innerCont) {
                  var value = atoms[offset];
                  if (value !== undefined) {
                    var exit$1 = 0;
                    if (typeof value !== "object" && value === "Comma") {
                      offset = offset + 1 | 0;
                      innerCont = false;
                    } else {
                      exit$1 = 2;
                    }
                    if (exit$1 === 2) {
                      results.push(value);
                      offset = offset + 1 | 0;
                    }
                    
                  } else {
                    offset = offset + 1 | 0;
                    innerCont = false;
                  }
                };
                res.push({
                      type: "expression",
                      variableName: "",
                      contents: results
                    });
              } else {
                exit = 1;
              }
              break;
          case "Variable" :
              var match$2 = match._0;
              if (match$2.type === "variable") {
                offset = offset + 1 | 0;
                var match$3 = atoms[offset];
                if (match$3 !== undefined) {
                  if (typeof match$3 !== "object") {
                    if (match$3 === "EqualSign") {
                      offset = offset + 1 | 0;
                      var results$1 = [];
                      var innerCont$1 = true;
                      while(innerCont$1) {
                        var value$1 = atoms[offset];
                        if (value$1 !== undefined) {
                          var exit$2 = 0;
                          if (typeof value$1 !== "object" && value$1 === "Comma") {
                            offset = offset + 1 | 0;
                            innerCont$1 = false;
                          } else {
                            exit$2 = 2;
                          }
                          if (exit$2 === 2) {
                            results$1.push(value$1);
                            offset = offset + 1 | 0;
                          }
                          
                        } else {
                          offset = offset + 1 | 0;
                          innerCont$1 = false;
                        }
                      };
                      res.push({
                            type: "expression",
                            variableName: match$2.value,
                            contents: results$1
                          });
                    } else {
                      throw {
                            RE_EXN_ID: "Failure",
                            _1: "Invalid assignment.",
                            Error: new Error()
                          };
                    }
                  } else {
                    throw {
                          RE_EXN_ID: "Failure",
                          _1: "Invalid assignment.",
                          Error: new Error()
                        };
                  }
                } else {
                  throw {
                        RE_EXN_ID: "Failure",
                        _1: "Invalid assignment.",
                        Error: new Error()
                      };
                }
              } else {
                exit = 1;
              }
              break;
          default:
            exit = 1;
        }
      }
    } else {
      cont = false;
    }
    if (exit === 1) {
      throw {
            RE_EXN_ID: "Match_failure",
            _1: [
              "WanderParser.res",
              205,
              4
            ],
            Error: new Error()
          };
    }
    
  };
  return res;
}

function parse(script) {
  WanderTokenizerJs.reset(script);
  var atoms = readAtoms();
  return parseScript(atoms);
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
  readQuote ,
  readAssignment ,
  readAtoms ,
  parseScript ,
  parse ,
  readTriple ,
  readToken ,
}
/* ./WanderTokenizer.js Not a pure module */
