
import {followTC} from "../thunks/usersThunks";
import {usersAPI} from "../../api/usersApi";

jest.mock("../../api/usersApi")

const usersAPIMock = usersAPI

const result = {
    resultCode: 0,
    messages: [],
    data: {}

}
// @ts-ignore
usersAPIMock.follow.mockReturnValue(Promise.resolve(result))
test("test follow thunk", async () => {

    const thunk = followTC(1)
    const dispatchMock = jest.fn()

    // @ts-ignore
    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(3)
})

