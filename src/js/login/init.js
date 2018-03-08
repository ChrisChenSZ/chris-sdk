import '../common/polyfill.js'
import bindEvent from './event.js'
import render from './render.js'

const login = (opts = {}) => {
    const defaultOpts = {
        loginBtnText: '登录',
        accountPlaceHolder: '手机号/邮箱/账号',
        passwordPlaceHolder: '请填写密码',
        accountLabel: '',
        passwordLabel: '',
        showRemember: true
    }
    const options = Object.assign(defaultOpts,opts)
    render(options)
    bindEvent(options)
}
export {login}