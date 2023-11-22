
import {followTC} from "../thunks/usersThunks";
import {usersAPI} from "../../api/usersApi";
import {follow, toggleFollowingProgress} from "../actions/usersAction";

jest.mock("../../api/usersApi")

const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const result = {
    resultCode: 0,
    messages: [],
    data: {}

}

usersAPIMock.follow.mockReturnValue(Promise.resolve(result))
test("success follow thunk", async () => {

    const thunk = followTC(1)
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()

    await thunk(dispatchMock, getStateMock,{})

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenCalledWith(1, toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenCalledWith(2, follow( 1))
    expect(dispatchMock).toHaveBeenCalledWith(3, toggleFollowingProgress(false, 1))
})

