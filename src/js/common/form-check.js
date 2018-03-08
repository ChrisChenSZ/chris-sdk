import {$} from './utils.js'
const rule = {
    present: (val) => {
        if(!val) {
            return {
                type: 'present',
                message: '不能为空'
            }
        }
    }
}
const formCheck = (form) => {
    if(!form) return
    console.log(document.getElementById('login-form'),document.getElementById(form))
    const els = document.getElementById(form) && document.getElementById(form).elements
    let checkArr = []
    console.log(els)
    Array.from(els).filter(item => {
        return item.hasAttribute('valid')
    }).map(item => {
       const aValue = item.getAttribute('valid')
       const eValue = item.value
       if(aValue) {
           // 如果有返回错误的信息
          const $error = rule[aValue](eValue)
          $error && checkArr.push({
              name: item.name,
              err: $error.message
          })
       }
    })

    return checkArr

}
export {formCheck}