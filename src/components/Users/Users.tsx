import React from 'react';
import s from "./users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/user.jpg"
import {UsersPropsType} from "./UsersContainer";


export  class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (
            <div>

                {this.props.usersPage.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>follow</button>
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
    }
}



