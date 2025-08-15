import { Link } from "react-router-dom";


export default function Layout(props) {

    return(
        <>
        {props.children}
        <nav className="Layout">
            <Link to='/films/nowplaying'>電影</Link>
            <Link to='/cinemas'>影院</Link>
            <Link to='/'>我的</Link>
        </nav>
        </>
    )
}