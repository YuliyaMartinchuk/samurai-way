import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to="/dialogs/1">Ann</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Maks</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Nick</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Tim</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Thank you</div>

            </div>

        </div>

    )
}
export default Dialogs
