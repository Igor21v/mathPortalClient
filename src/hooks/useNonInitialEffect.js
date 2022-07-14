import { useEffect, useRef } from "react";

export const useNonInitialEffect = (effect, deps) => {
    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            console.log('Отработал пользовательский useEffect')
            return effect();
        }
    }, deps);
}