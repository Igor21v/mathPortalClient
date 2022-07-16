import { useEffect, useRef } from "react";

export const useObserver = (ref, isFetching, canFetching, callback) => {
    const observer = useRef()

    useEffect(() => {
        
        if (isFetching) return;
        if (observer.current) observer.current.disconnect();
        var options = {
            rootMargin: '0px 0px 200px 0px',
            threshold: [0]
        }
        var cb = function (entries, observer) {
            if (entries[0].isIntersecting && canFetching) {
                callback()
                console.log('Вызов колбэка из useObserver' + ' isFetching ' + isFetching)
            }
        };
        observer.current = new IntersectionObserver(cb, options);
        observer.current.observe(ref.current);
    }, [isFetching, canFetching])
}