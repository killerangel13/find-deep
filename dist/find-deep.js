/*
 * # find-deep - 0.0.1
 *
 * Copyright 2017 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
(function(global) {
    "use strict";

    typeof exports === "object" && typeof module !== "undefined" ? module.exports = findDeep:
    typeof define === "function" && define.amd ? define(findDeep) :
    global.findDeep = findDeep;

    function findDeep(object, fn, found) {
        var found = found === undefined? {
                break: false,
                value: undefined
            }:
            found
        ;
        if (typeof object != 'object' ||
            object == null
        )
            return undefined
        ;
        for(var i in object) {

            if (found.break) break;

            var el = object[i];

            if(!fn(el, i, object))

                findDeep(el, fn, found)
            ;
            else if((found.break = true))

                return (found.value = el)
            ;
        }
        return found.value
    }
})(typeof window !== "undefined" ? window : undefined);