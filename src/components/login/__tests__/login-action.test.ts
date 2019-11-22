import { login, userNameActionCreateAction } from '../login-action'
import { type } from 'os'

describe("Login Action", () => {
    it("should get type and payload", () => {
        const payLoad = { userName: 'rajan', pass: 'pass' }
        expect(login(payLoad).type).toBe("LOGIN")
        expect(login(payLoad).payload).toEqual(payLoad)
    })

    it("should get right action creator", () => {
        const payLoad = { userName: 'rajan', pass: 'pass' }
        expect(userNameActionCreateAction("rajan").type).toBe("USERNAME")
        expect(userNameActionCreateAction("rajan").payload).toEqual("rajan")
    })
})
