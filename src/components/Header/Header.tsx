import React, {ReactNode} from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";



const Header = (props:HeaderPropsType) => {
    return (<header className={s.header}>
        <img src="https://i.pinimg.com/564x/9f/ed/b6/9fedb6684c3b442d9583724d08e1a14d.jpg"/>
        <div className={s.loginBlock}>
            { props.isAuth? props.login: <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>)
}
export default Header