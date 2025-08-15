import { useState, useEffect } from "react";

/**
 *      監控瀏覽器長寬:
 * addEventListener(事件,函式)
 * removeEventListener(事件,函式)
 * 視窗(window)「改變長寬」所觸發的event是'resize'
 */
const useRWD = () => {
    const [device, setDevice] = useState("mobile");

    const handleRWD = () => {
        if (window.innerWidth > 768)
            setDevice("PC");
        else if (window.innerWidth > 576)
            setDevice("tablet");
        else
            setDevice("mobile");
    }

    useEffect(()=>{
        window.addEventListener('resize',handleRWD);
        handleRWD();
        return(()=>{
            window.removeEventListener('resize',handleRWD);
        })
    },[])

    return device;
}

export default useRWD;