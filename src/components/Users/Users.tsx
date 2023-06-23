import React from 'react';
import {UserPropsType} from "../../redux/users-redusers";
import s from "./users.module.css"

type PropsType = {
    users: UserPropsType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserPropsType[]) => void
}


export const Users = (props: PropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                fullName: "Alina",
                location: {city: "Minsk", country: "Belarus"},
                status: "so-so",
                photo: 'https://i.pinimg.com/564x/1e/9e/ea/1e9eeab0299b7368be0aac0609e311f1.jpg',
            },
            {
                id: 2,
                followed: true,
                fullName: "Dasha",
                location: {city: "Vitebsk", country: "Belarus"},
                status: "I am a veterinarian",
                photo: 'https://i.pinimg.com/564x/19/1c/d3/191cd36777a79c967a8f05bd1b230d29.jpg',
            },
            {
                id: 3,
                followed: false,
                fullName: "Valeria",
                location: {city: "Saint Petersburg", country: "Russia"},
                status: "hello, i am web-designer",
                photo: 'https://i.pinimg.com/564x/09/5d/1d/095d1d507f240bc5fd605fd4ba9bc7ba.jpg',
            },
            {
                id: 4,
                followed: true,
                fullName: "Mariya",
                location: {city: "Ostrovets", country: "Belarus"},
                status: "Сreative person",
                photo: 'https://i.pinimg.com/564x/9a/33/01/9a3301a9c4ae0f2769d737b5b440cdcc.jpg',
            },
            {
                id: 5,
                followed: false,
                fullName: "Kate",
                location: {city: "Moscow", country: "Russia"},
                status: "Life, love, laugh",
                photo: 'https://i.pinimg.com/564x/36/4c/24/364c24252ef54bf8c2836816ba55953c.jpg',
            },
            {
                id: 6,
                followed: true,
                fullName: "Victoria",
                location: {city: "Minsk", country: "Belarus"},
                status: "Don’t worry, be happy! ",
                photo: 'https://i.pinimg.com/564x/c5/b7/a6/c5b7a6ec9250a4f34fb8b5a5b39807bc.jpg',
            }
        ])
    }

    return (
        <div>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photo} className={s.userPhoto}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                    </span>
                    </span>
                </div>)}
        </div>
    );
};

