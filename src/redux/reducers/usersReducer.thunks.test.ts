
import {followTC, unFollowTC} from "../thunks/usersThunks";
import {usersAPI} from "../../api/usersApi";
import {
    follow,
    toggleFollowingProgress,
    unFollow
} from "../actions/usersAction";

jest.mock("../../api/usersApi")

const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>


const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
})

const result = {
    resultCode: 0,
    messages: [],
    data: {}

}

usersAPIMock.follow.mockReturnValue(Promise.resolve(result))
usersAPIMock.unFollow.mockReturnValue(Promise.resolve(result))
test("success follow thunk", async () => {

    const thunk = followTC(1)

    await thunk(dispatchMock, getStateMock,{})

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenCalledWith(1, toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenCalledWith(2, follow( 1))
    expect(dispatchMock).toHaveBeenCalledWith(3, toggleFollowingProgress(false, 1))
})

test("success unfollow thunk", async () => {

    const thunk = unFollowTC(1)

    await thunk(dispatchMock, getStateMock,{})

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenCalledWith(1, toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenCalledWith(2, unFollow( 1))
    expect(dispatchMock).toHaveBeenCalledWith(3, toggleFollowingProgress(false, 1))
})


