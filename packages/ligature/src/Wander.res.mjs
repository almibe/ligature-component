// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Model from "./Model.res.mjs";
import * as Commands from "./Commands.res.mjs";
import * as Core__List from "@rescript/core/src/Core__List.res.mjs";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as WanderParser from "./WanderParser.res.mjs";
import * as Belt_MapString from "rescript/lib/es6/belt_MapString.js";

function runExpression(expression, variables, modules) {
  var match = Core__List.fromArray(expression);
  if (match) {
    var value = match.hd;
    if (!match.tl) {
      return {
              TAG: "Ok",
              _0: value
            };
    }
    if (typeof value === "object" && value.TAG === "Element") {
      var parts = value._0.value.split(".");
      var len = parts.length;
      if (len >= 3) {
        throw {
              RE_EXN_ID: "Match_failure",
              _1: [
                "Wander.res",
                8,
                4
              ],
              Error: new Error()
            };
      }
      switch (len) {
        case 0 :
            throw {
                  RE_EXN_ID: "Match_failure",
                  _1: [
                    "Wander.res",
                    8,
                    4
                  ],
                  Error: new Error()
                };
        case 1 :
            throw {
                  RE_EXN_ID: "Failure",
                  _1: "Local commands not supported yet.",
                  Error: new Error()
                };
        case 2 :
            var moduleName = parts[0];
            var commandName = parts[1];
            var mod = Belt_MapString.get(modules, moduleName);
            if (mod !== undefined) {
              var command = Belt_MapString.get(Caml_option.valFromOption(mod), commandName);
              if (command !== undefined) {
                return command(expression.slice(1));
              }
              throw {
                    RE_EXN_ID: "Failure",
                    _1: "Could not find command: " + commandName,
                    Error: new Error()
                  };
            }
            throw {
                  RE_EXN_ID: "Failure",
                  _1: "Could not find command: " + commandName,
                  Error: new Error()
                };
        
      }
    }
    
  }
  throw {
        RE_EXN_ID: "Match_failure",
        _1: [
          "Wander.res",
          4,
          2
        ],
        Error: new Error()
      };
}

function run(script, modulesOpt) {
  var modules = modulesOpt !== undefined ? Caml_option.valFromOption(modulesOpt) : Commands.stdModules();
  var variables = {
    contents: undefined
  };
  var script$1 = WanderParser.parse(script);
  var result = {
    contents: {
      TAG: "Ok",
      _0: undefined
    }
  };
  script$1.forEach(function (expression) {
        var err = runExpression(expression.contents, variables.contents, modules);
        var tmp;
        if (err.TAG === "Ok") {
          var value = err._0;
          if (value !== undefined) {
            if (expression.variableName !== "") {
              variables.contents = Belt_MapString.set(variables.contents, expression.variableName, value);
            }
            tmp = {
              TAG: "Ok",
              _0: value
            };
          } else {
            tmp = {
              TAG: "Ok",
              _0: undefined
            };
          }
        } else {
          throw {
                RE_EXN_ID: "Failure",
                _1: err._0,
                Error: new Error()
              };
        }
        result.contents = tmp;
      });
  return result.contents;
}

function printResult(value) {
  if (value.TAG !== "Ok") {
    return value._0;
  }
  var value$1 = value._0;
  if (value$1 !== undefined) {
    return Model.printValue(value$1);
  } else {
    return "--nothing--";
  }
}

function toJs(result) {
  if (result.TAG !== "Ok") {
    return {
            NAME: "Error",
            VAL: result._0
          };
  }
  var match = result._0;
  if (match !== undefined) {
    if (typeof match !== "object") {
      throw {
            RE_EXN_ID: "Failure",
            _1: "Unexpected value, toJs only supports Networks.",
            Error: new Error()
          };
    }
    if (match.TAG === "Network") {
      var result$1 = [];
      match._0.value.forEach(function (triple) {
            var e = triple.element;
            var element;
            element = e.TAG === "Element" ? ({
                  type: "element",
                  value: e._0.value
                }) : ({
                  type: "slot",
                  value: e._0.value
                });
            var e$1 = triple.role;
            var role;
            role = e$1.TAG === "Element" ? ({
                  type: "element",
                  value: e$1._0.value
                }) : ({
                  type: "slot",
                  value: e$1._0.value
                });
            var e$2 = triple.value;
            var value;
            switch (e$2.TAG) {
              case "VElement" :
                  value = {
                    type: "element",
                    value: e$2._0.value
                  };
                  break;
              case "VSlot" :
                  value = {
                    type: "slot",
                    value: e$2._0.value
                  };
                  break;
              case "VLiteral" :
                  value = {
                    type: "literal",
                    value: e$2._0.value
                  };
                  break;
              
            }
            result$1.push({
                  type: "triple",
                  element: element,
                  role: role,
                  value: value
                });
          });
      return {
              NAME: "Network",
              VAL: result$1
            };
    }
    throw {
          RE_EXN_ID: "Failure",
          _1: "Unexpected value, toJs only supports Networks.",
          Error: new Error()
        };
  } else {
    throw {
          RE_EXN_ID: "Failure",
          _1: "Unexpected value, toJs only supports Networks.",
          Error: new Error()
        };
  }
}

export {
  runExpression ,
  run ,
  printResult ,
  toJs ,
}
/* WanderParser Not a pure module */
