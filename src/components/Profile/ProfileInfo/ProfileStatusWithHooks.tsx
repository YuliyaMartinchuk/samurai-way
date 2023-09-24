import React, {ChangeEvent, useEffect, useState} from "react";
import s from "./Profileinfo.module.css"



type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
    const {status, updateStatus} = props
    const [editMode, setEditMode] = useState<boolean>(false)
    const [localStatus, setLocalStatus] = useState<string>(status)


    useEffect(() => {
        setLocalStatus(status)
    }, [status])

    const onStatusChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        updateStatus(localStatus)
    }

    return (
        <div>
            {!editMode &&
                <div>
                <span
                    className={s.status}
                    onDoubleClick={activateEditMode}
                >{props.status || 'No status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        className={s.status}
                        autoFocus={true}
                        onBlur={deActivateEditMode}
                        onChange={onStatusChanged}
                        value={localStatus}
                    />
                </div>
            }
        </div>
    )
}
