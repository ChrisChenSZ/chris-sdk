import formCheck from '../common/formCheck.js'
import {$} from '../common/utils.js'
import {fetchPost} from "../common/fetch"

export default () => {
    const  $loginFrom = $('login-form')
    const $loginBtn = $('login-btn')
    const $clearAccount = $('clear-account')
    const $remember = $('login-remember')
    const $account = $('login-account')
    const $password = $('login-password')
    $loginFrom.onsubmit = async (e) => {
        e.preventDefault(e)
        let remember = '0'
        if ($remember.getAttribute('checked')) {
            remember = '1'
        }
        const data = await fetchPost('/login',{
            account: $account.value,
            password: $password.value,
            remember:remember
        })
        console.log(data)
    }
    // let btn = document.getElementById('submit')
    // let input = document.getElementById('input')
    // const check = formCheck(document.getElementById('form'))
    // btn.onclick = function () {
    //     alert(1111)
    //     check()
    // }
    // input.oninput = () => {
    //     check()
    // }
}