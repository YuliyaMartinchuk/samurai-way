import {
    InitialStateType, usersReducer,
} from "./usersReducer";
import {follow, unFollow} from "../actions/usersAction";

let state: InitialStateType
beforeEach(() => {
    state = {
        users: [
            {
                id: 0, name: 'Person 0', followed: false,
                photos: {small: null, large: null}, status: 'status 0'
            },
            {
                id: 1, name: 'Person 1', followed: false,
                photos: {small: null, large: null}, status: 'status 1'
            },
            {
                id: 2, name: 'Person 2', followed: true,
                photos: {small: null, large: null}, status: 'status 2'
            },
            {
                id: 3, name: 'Person 3', followed: true,
                photos: {small: null, large: null}, status: 'status 3'
            },
        ],
        pageSize: 20,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
        usersFriends: [] ,
        filter: {
            term: '',
            friend: null
        }
    }

})
test("follow success", () => {

    const newState = usersReducer(state, follow(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test("unfollow success", () => {

    const newState = usersReducer(state, unFollow(3))

    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})