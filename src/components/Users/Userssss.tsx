import React from 'react';
import {UserPropsType} from "../../redux/users-redusers";
import s from "./users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/user.jpg"

type PropsType = {
    users: UserPropsType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserPropsType[]) => void
}


export const Userssss = (props: PropsType) => {
  const  GetUsers = () => {
      const settings = {
          withCredentials: true
      }

      if (props.users.length === 0) {
          axios.get("https://social-network.samuraijs.com/api/1.0/users", settings)
              .then((res) => {
                  props.setUsers(res.data.items)
              })
      }
    }
    return (
        <div>
            <button onClick={GetUsers} >Get Users</button>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                    </span>
                    </span>
                </div>)}
        </div>
    );
};

