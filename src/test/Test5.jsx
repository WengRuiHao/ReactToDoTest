import React, { Component } from 'react';

{/*fetch( request的url, {//設定request內容} )
       .then(res => res.json()) //把request json化
       .then(data => {
            //接到request data後要做的事情
        })
       .catch(e => {
            //發生錯誤時要做的事情
        }) */}

// 加上header token用法
const token = "Bearer " + "存好的token";
const req = () => {
    fetch("url", {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': token,
        })
    })
        .then(res => res.json())
        .then(data => {
            /* 接到request data後要做的事情 */
        })
        .catch(e => {
            /* 發生錯誤時要做的事情 */
        })
}

//加上body - 使用JSON type傳送資料
const data = { A: "資料A", B: "資料B" }
const req1 = () => {
    fetch("url", {
        method: "GET",
        body: JSON.stringify(data),
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": token,
        })
    })
        .then(res => res.json())
        .then(data => {
            /* 接到request data後要做的事情 */
        })
        .then(e => {
            /* 發生錯誤時要做的事情 */
        })
}

//加上body - 使用x-www-form-urlencoded type傳送資料
const formData = Object.keys(data).map(
    function (keyName) {
        return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
    }
).join('&');
const req2 = () => {
    fetch("url", {
        method: "GET",
        body: formData,
        headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": token,
        })
    })
        .then(res => res.json())
        .then(data => {
            /* 接到request data後要做的事情 */
        })
        .then(e => {
            /* 發生錯誤時要做的事情 */
        })
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repoName: null
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        fetch('https://api.github.com/users/jserv/repos', {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ repoName: data[5]['name'] });
            })
            .then(e => {
                console.log(e);
            })
    }

    render() {
        return (
            <div className='App'>
                <div className='data-display'>
                    {(this.state.repoName === null) ? "目前還沒有資料" : this.state.repoName}
                </div>
                <button onClick={this.handleClick}>取得jserv以英文字母排序的第一個repo</button>
            </div>
        )
    }
}

export default App;