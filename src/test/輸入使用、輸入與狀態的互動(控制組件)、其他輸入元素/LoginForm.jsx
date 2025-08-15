import { useEffect, useState } from "react";

const LoginForm = () => {
    const [account, setAccount] = useState("快來輸入我");
    const [nowSelect, setNowSelect] = useState('789');
    const [isCheck, setIsCheck] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setAccount("用fetch拿到的資料")
        }, 2000);
    },[])

    return(
        <div>
            <input type="text" defaultValue={account} onChange={(e) => { setAccount(e.target.value)}} />
            {/* <textarea value={account} onChange={(e)=>{setAccount(e.target.value)}}></textarea> */}
            <div>
                目前account:{account}
            </div>
            <button onClick={() => {setAccount('')}}>用按鍵取得新的account</button>
            <br />
            <select value={nowSelect} onChange={(e) => {setNowSelect(e.target.value)}}>
                <option value="123">123</option>
                <option value="456" selected={true}>456</option>
            </select>
            <div>
                目前select:{nowSelect}
            </div>
            <button onClick={(e) => {setNowSelect("789")}}>改變為789</button>
            <br />
            <input type="radio" value="123" checked={nowSelect==='123'} onClick={(e) => {setIsCheck(true)}} />123
            <br />
            <input type="radio" value="456" checked={nowSelect==='456'} onClick={(e) => {setIsCheck(false)}} />456
            <form >
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default LoginForm;