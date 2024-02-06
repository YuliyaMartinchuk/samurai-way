import React, {useState} from "react";
import {
    UserType
} from "../../../../redux/reducers/usersReducer";
import s from "./Friends.module.css";
import {Friend} from "./Friend";

type PropsType = {
    users: UserType[]
}


export const Friends = ({users}:PropsType) => {
    const [showAllFriends, setShowAllFriends] = useState(false)
    const onClickShowHandler = () => setShowAllFriends(!showAllFriends)
    const displayedFriends = showAllFriends ? users : users.slice(0, 6)
    return (
        <div className={s.container}>
            <div>
                <h3>Friends</h3>
                <div className={s.friendsHeader}>
                    <div className={s.friendsCount}>{users.length} Friends</div>
                    <div className={s.seeAll}>
                        {
                            !showAllFriends
                                ? <a onClick={onClickShowHandler}>See all</a>
                                :
                                <a onClick={onClickShowHandler}>Hide friends</a>
                        }
                    </div>
                </div>
            </div>
            <div className={s.items}>
                {displayedFriends.map(friend =>
                    <Friend key={friend.id} friend={friend}/>
                )}
            </div>
            {
                !showAllFriends
                    ? <button onClick={onClickShowHandler}
                              className={s.friendsButton}>See all</button>
                    : <button onClick={onClickShowHandler}
                              className={s.friendsButton}>Hide friends</button>
            }
        </div>
    )
}

