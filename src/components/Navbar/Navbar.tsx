import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {SidebarType} from "../../redux/state";

type PropsType = {
    sidebar: SidebarType
}

const Navbar = (props:PropsType) => {
    const friendsList = props.sidebar.friends.map(el=>{
        return (
            <div key={el.id} >
                <img className={s.avatar} src={el.avatar}/>
                <div className= {s.name}>{el.name}</div>
            </div>
        )
    })
    return (
        <nav className={s.nav}>
            <div className={s.item} >
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.friendsText}>
                Friends
            </div>
            <div className={s.friends}>
                {friendsList}
            </div>

        </nav>)
}
export default Navbar