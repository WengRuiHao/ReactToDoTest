import { Link } from "react-router-dom";

const Id=0;
const contents = ['誤殺2','愛情神話','雄獅少年','穿過寒冬擁抱你','反貪風暴5:最終張','李茂扮太子','以年為單位的戀愛',
        '古董局終局','揚名立萬','跨過鴨綠江'
    ]

export default function Films() {
    console.log(contents);
    return (
        <>
            <div className="film-content">大輪番</div>
            <div className="film-list">
                <Link to='/'>正在熱映</Link>
                <Link to='/'>即將上線</Link>
                <ul>
                    {contents.map((content) => (
                        <li key={Math.random()}>{content}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}