import {ActionsTypes, SidebarType} from "./store";

let initialState = {
    friends: [
        {id: 1, name: "Alina", avatar: 'https://i.pinimg.com/564x/1e/9e/ea/1e9eeab0299b7368be0aac0609e311f1.jpg'},
        {id: 2, name: "Dasha", avatar: 'https://i.pinimg.com/564x/19/1c/d3/191cd36777a79c967a8f05bd1b230d29.jpg'},
        {id: 3, name: "Valeria", avatar: 'https://i.pinimg.com/564x/09/5d/1d/095d1d507f240bc5fd605fd4ba9bc7ba.jpg'},
        {id: 4, name: "Mariya", avatar: 'https://i.pinimg.com/564x/9a/33/01/9a3301a9c4ae0f2769d737b5b440cdcc.jpg'},
        {id: 5, name: "Kate", avatar: 'https://i.pinimg.com/564x/36/4c/24/364c24252ef54bf8c2836816ba55953c.jpg'},
        {id: 6, name: "Victoria", avatar: 'https://i.pinimg.com/564x/c5/b7/a6/c5b7a6ec9250a4f34fb8b5a5b39807bc.jpg'}
    ]
}

const sidebarReducer = (state=initialState, action:ActionsTypes):SidebarType=> {

    return state
}

export default sidebarReducer