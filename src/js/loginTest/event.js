import formCheck from '../common/formCheck.js'
export default () => {
    let btn = document.getElementById('submit')
    let input = document.getElementById('input')
    const check = formCheck(document.getElementById('form'))
    btn.onclick = function () {
        alert(1111)
        check()
    }
    input.oninput = () => {
        check()
    }
}