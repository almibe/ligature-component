// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Model from "./Model.res.mjs";
import * as Commands from "./Commands.res.mjs";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as WanderParser from "./WanderParser.res.mjs";
import * as Belt_MapString from "rescript/lib/es6/belt_MapString.js";

function run(script, modulesOpt) {
  var modules = modulesOpt !== undefined ? Caml_option.valFromOption(modulesOpt) : Commands.stdModules();
  var script$1 = WanderParser.parse(script);
  var result = {
    contents: {
      TAG: "Ok",
      _0: undefined
    }
  };
  console.log(modules);
  console.log(Commands.stdModules());
  script$1.forEach(function (call) {
        var parts = call.commandName.split(".");
        if (parts.length !== 2) {
          return ;
        }
        var moduleName = parts[0];
        var commandName = parts[1];
        var mod = Belt_MapString.get(modules, moduleName);
        if (mod !== undefined) {
          var command = Belt_MapString.get(Caml_option.valFromOption(mod), commandName);
          if (command !== undefined) {
            result.contents = command(call.arguments);
            return ;
          } else {
            return ;
          }
        }
        throw {
              RE_EXN_ID: "Failure",
              _1: "Could not find command: " + call.commandName,
              Error: new Error()
            };
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

export {
  run ,
  printResult ,
}
/* WanderParser Not a pure module */
