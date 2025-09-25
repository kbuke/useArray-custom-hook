import { useCallback, useState } from "react";

export function useArray(initialArray){
    const [array, setArray] = useState(initialArray)

    // const push = (addition) => {
    //     setArray(origArray => setArray(...origArray, addition))
    // }
    const push = useCallback(addition => {
        setArray(origArray => [...origArray, addition])
    }, [])

    const replace = useCallback((index, newValue) => {
        setArray(origArray => {
            return [...origArray.slice(0, index), newValue, ...origArray.slice(index + 1)]
        })
    }, [])

    const filter = useCallback(callback => {
        setArray(origArray => {
            return origArray.filter(callback)
        })
    }, [])

    const remove = useCallback(index => {
        setArray(origArray => {
            return [...origArray.slice(0, index), ...origArray.slice(index + 1)]
        })
    }, [])

    const clear = useCallback(() => {
        setArray([])
    }, [])

    const reset = useCallback(() => {
        setArray(initialArray)
    }, [initialArray])

    return {array, set: setArray, push, replace, filter, remove, clear, reset}
}