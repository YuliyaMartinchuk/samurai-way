import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import profileIcon from '../../../assets/images/profileIcon.svg';
import messageIcon from '../../../assets/images/messageIcon.svg';
import usersIcon from '../../../assets/images/usersIcon.svg';
import newsIcon from '../../../assets/images/newsIcon.svg';
import musicIcon from '../../../assets/images/musicIcon.svg';
import settingsIcon from '../../../assets/images/settingsIcon.svg';


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>
                    <div className={s.item__image}>
                        <img src={profileIcon} alt="profileIcon"/>
                    </div>
                    <span>Profile</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs"
                         activeClassName={s.active}>
                    <div className={s.item__image}>
                        <img src={messageIcon} alt="messageIcon"/>
                    </div>
                    <span>Message</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}>
                    <div className={s.item__image}>
                        <img src={usersIcon} alt="usersIcon"/>
                    </div>
                    <span>Users</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>
                    <div className={s.item__image}>
                        <img src={newsIcon} alt="newsIcon"/>
                    </div>
                    <span>News</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>
                    <div className={s.item__image}>
                        <img src={musicIcon} alt="musicIcon"/>
                    </div>
                    <span>Music</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings"
                         activeClassName={s.active}>
                    <div className={s.item__image}>
                        <img src={settingsIcon} alt="settingsIcon"/>
                    </div>
                    <span>Settings</span>
                </NavLink>
            </div>
        </nav>
    )

}
export default Navbar