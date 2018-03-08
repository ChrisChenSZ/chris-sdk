import utils from '../common/utils.js'
import {fetchPost} from "../common/fetch"
// 引入校验
import {formCheck} from "../common/form-check";
const {getDom: $} = utils
export default () => {
    const  $loginFrom = $('#login-form')
    const $loginBtn = $('#login-btn')
    const $clearAccount = $('#clear-account')
    const $remember = $('#login-remember')
    const $account = $('#login-account')
    const $password = $('#login-password')
    const $error = $('#login-error')
    $loginFrom.onsubmit = async (e) => {
        e.preventDefault(e)
        let remember = '0'
        if ($remember.getAttribute('checked')) {
            remember = '1'
        }
        //校验
        const checkData = formCheck('login-form')

        if (checkData.length){
            $error.innerText = `${checkData[0].name} ${checkData[0].err}`
            console.log(checkData)
        }else {
            const data = await fetchPost('/login',{
                account: $account.value,
                password: $password.value,
                remember:remember
            })
            isLogin(data)
        }
        function isLogin (data) {
            if(data.code === 200) {
                alert(333)
            }else {
                $error.innerText = `${data.message}`
            }
        }
    }
    $account.oninput = (e) => {
        console.log(e.target.value)
        if(e.target.value.length){
            $clearAccount.style.display = 'block'
        }else {
            $clearAccount.style.display = 'none'
        }
    }
    $clearAccount.onclick = () => {
        $account.value = ''
        $clearAccount.style.display = 'none'
    }
    $password.oninput = (e) => {

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