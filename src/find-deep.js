

    function findDeep(object, fn, found = {
        break: false,
        value: undefined
    }) {
        if (typeof object != 'object' ||
            object == null
        )
            return undefined
        ;
        for(let i in object) {

            if (found.break) break;

            let el = object[i];

            if(!fn(el, i, object))

                findDeep(el, fn, found)
            ;
            else if(found.break = true)

                return found.value = el
            ;
        }
        return found.value
    }


    export default findDeep;

    