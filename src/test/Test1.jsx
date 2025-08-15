
function Test1 () {

    const getValue = (event) =>{
        console.log(event.target.value);
    }

    return (
        <div>
            <button value={true} onClick={getValue} >按下以取得數值</button>
        </div>
    )
}

export default Test1;