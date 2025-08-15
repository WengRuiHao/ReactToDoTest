import { Component, useEffect, useState } from "react";

// 生命週期
// 掛載時|                     |----->componentDidMount
// 更新時|constructor -> render|----->componentDidUpdate
// 卸載時|                     |----->componentWillUnmount
// 生命週期 最常被用到的函數: componentDidMount、componentDidUpdate、componentWillUnmount
// useEffect()是這三個函數的整合
// useEffect(/* 定義componentDidMount 或 componentDidUpdate 要做什麼事 */,/* 是一個array */);

// React hook兩大守則:
//  1.只能在最外層scope宣告
//  2.只能在function component或custom hook中使用
function Baby(props) {

    // const mounted = useRef();
    // useEffect(() => {
    //     if (mounted.current === false) {
    //         mounted.current = true;
    //         /* 下面是 componentDidMount*/


    //         /* 上面是 componentDidMount */
    //     }
    //     else {
    //         /* 下面是componentDidUpdate */


    //         /* 上面是componentDidUpdate */

    //     }
    //     return (() => {
    //         /* 下面是 componentWillUnmount */


    //         /* 上面是 componentWillUnmount */
    //     });

    // }, []);
    // /* 第二個參數是用來限定當哪些變數被改變時useEffect要觸發 */

    /* 把state 變成 useState */
    const [isGetData, setGetData] = useState(false);
    const [Mom, setMom] = useState("");
    const [isRightDad, setRightDad] = useState(false);

    /* 把class 的 member function 改成 function 中的 function */
    const ajaxSimulator = () => {
        setTimeout(() => {
            setGetData(true);
            setMom("小美");
        }, 3000);
    }

    const checkDad = () => {
        if (props.dad === "Chang")
            setRightDad(true);
        else
            setRightDad(false);
    }

    useEffect(() => {
        ajaxSimulator();
        document.getElementById('talk').append('爸!')

        return(() => {
            document.getElementById('talk').innerHTML = '';
        })
    }, [])

    useEffect(() => {
        checkDad();
    },[props.dad])

    if (isRightDad === false)
        return(
            <div>他的媽媽，是誰，甘你*事</div>
        );
    else if (isGetData === false)
        return(
            <div id="msg">讀取中</div>
        );
    else
        return(
            <div id="msg">他的媽媽是{Mom}</div>
        )
}

export default Baby;