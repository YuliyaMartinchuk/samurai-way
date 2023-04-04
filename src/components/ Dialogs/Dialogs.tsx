import React from 'react';
import s from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    Yuliya
                </div>
                <div className={s.dialog}>
                    Yuliya
                </div>
                <div className={s.dialog}>
                    Yuliya
                </div>
                <div className={s.dialog}>
                    Yuliya
                </div>
                <div className={s.dialog}>
                    Yuliya
                </div>
                <div className={s.dialog}>
                    Yuliya
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>llll</div>
                <div className={s.message}>llll</div>
                <div className={s.message}>llll</div>

            </div>

        </div>

    )
}
export default Dialogs
