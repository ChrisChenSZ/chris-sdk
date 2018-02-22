import '../common/polyfill.js'
import bindEvent from './event.js'
import render from './render.js'

const login = (opts = {}) => {
    const defaultOpts = {
        loginBtnText: '登录'
    }
    const options = Object.assign(defaultOpts,opts)
    render(options)
    bindEvent(options)
}
export {login}