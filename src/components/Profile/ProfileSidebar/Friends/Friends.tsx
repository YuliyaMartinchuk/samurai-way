import React from "react";
import {
    UserType
} from "../../../../redux/reducers/usersReducer";
import s from "../../ProfileInfo/Profileinfo.module.css";

type PropsType = {
    users: UserType[]
}


const Friends: React.FC<PropsType> = ({users}) => {
    return <div className={s.profileUserCard}>
     <h3>Friends</h3>
    </div>
}

export default Friends