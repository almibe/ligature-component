// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Actions from "@ligature/ligature/src/Actions.res.mjs";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Core__List from "@rescript/core/src/Core__List.res.mjs";
import * as Belt_MapString from "rescript/lib/es6/belt_MapString.js";

function textAction(textCb) {
  return function (networks, stack) {
    textCb(Core__List.head(stack));
    return {
            TAG: "Ok",
            _0: [
              networks,
              Core__List.tail(stack)
            ]
          };
  };
}

function tableAction(textCb) {
  return function (networks, stack) {
    textCb(Core__List.head(stack));
    return {
            TAG: "Ok",
            _0: [
              networks,
              Core__List.tail(stack)
            ]
          };
  };
}

function graphAction(textCb) {
  return function (networks, stack) {
    textCb(Core__List.head(stack));
    return {
            TAG: "Ok",
            _0: [
              networks,
              Core__List.tail(stack)
            ]
          };
  };
}

function displayStackAction(textCb) {
  return function (networks, stack) {
    textCb(stack);
    return {
            TAG: "Ok",
            _0: [
              networks,
              stack
            ]
          };
  };
}

function componentActions(stackCb, textCb, tableCb, graphCb) {
  return Belt_MapString.fromArray(Belt_Array.concatMany([
                  [
                    [
                      "display-stack",
                      displayStackAction(stackCb)
                    ],
                    [
                      "display-text",
                      textAction(textCb)
                    ],
                    [
                      "display-table",
                      tableAction(tableCb)
                    ],
                    [
                      "display-graph",
                      graphAction(graphCb)
                    ]
                  ],
                  Belt_MapString.toArray(Actions.stdActions)
                ]));
}

export {
  textAction ,
  tableAction ,
  graphAction ,
  displayStackAction ,
  componentActions ,
}
/* Actions Not a pure module */
