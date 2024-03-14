import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";
import logoutIcon from "../../assets/images/logoutIcon.svg"


const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.container}>
            <div className={s.content}>
                <div className={s.headerIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width='30px' height='30px'
                    fill="none">
                    <path
                        d="m23.2 16.35-5.52 4.96a10.5 10.5 0 0 1-7.01 2.7H.5a.5.5 0 0 1 0-1h10.17c2.35 0 4.6-.87 6.35-2.44l5.5-4.94c.54-.54.64-1.4.22-1.98a1.5 1.5 0 0 0-2.28-.2l-4.18 3.8a2.5 2.5 0 0 1-1.78.75h-5a.5.5 0 0 1 0-1h5a1.5 1.5 0 0 0 1.08-.46l.01-.01A1.5 1.5 0 0 0 14.5 14H8.6c-2.54 0-4.92.99-6.72 2.78l-1 1.07a.5.5 0 0 1-.71.01.5.5 0 0 1-.02-.7l1.01-1.07c2-2 4.63-3.09 7.44-3.09h5.91c1.3 0 2.37 1 2.49 2.26l2.78-2.53a2.5 2.5 0 0 1 3.79.33c.7.98.55 2.4-.35 3.3ZM5 1.63A1.52 1.52 0 0 1 6.63 0c3.17.23 5.04 1.42 5.87 3.86.83-2.44 2.7-3.63 5.87-3.86.44-.02.87.13 1.18.45.32.3.48.74.45 1.18-.3 4.31-2.4 6.24-7 6.36V9.5a.5.5 0 0 1-1 0V8c-4.6-.13-6.7-2.06-7-6.37Zm8 5.36c4.04-.11 5.73-1.67 6-5.43a.52.52 0 0 0-.15-.4.52.52 0 0 0-.37-.16h-.04c-3.76.27-5.32 1.96-5.43 6ZM6 1.56c.27 3.76 1.96 5.32 6 5.43-.12-4.03-1.68-5.72-5.44-5.99h-.04a.52.52 0 0 0-.37.16c-.1.1-.16.25-.15.4Z"
                        fill="black"/>
                </svg>

                </div>
                <div >
                    {props.isAuth
                        ? <div className={s.loginBlock}>
                            <div className={s.loginName}>{props.login}</div>
                            <button className={s.button}
                                    onClick={props.logout}>
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

