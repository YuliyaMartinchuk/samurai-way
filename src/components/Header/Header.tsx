import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";
import logoutIcon from "../../assets/images/logoutIcon.svg"
import headerIcon from "../../assets/images/headerIcon.svg"


const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.container}>
            <div className={s.content}>
                <img className={s.headerIcon}
                     src="https://i.pinimg.com/564x/9f/ed/b6/9fedb6684c3b442d9583724d08e1a14d.jpg"/>
                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div>
                            <div className={s.loginName}>{props.login}</div>
                            <button className={s.button}
                                    onClick={props.logout}>Log out
                                <img className={s.logoutIcon} src={logoutIcon}
                                     alt="logout"/>
                            </button>
                        </div>
                        : <NavLink className={s.navlink}
                                   to={'/login'}>Login</NavLink>}
                </div>
            </div>

        </header>)
}
export default Header