import {$} from '../common/utils.js'
const template = (opts = {}) => {
    const autoCompleteTpl = `
          <div id="autocompletebox">
                 <input type="text">
                  <input type="password">
          </div>`
    const autoCompleteAdapter = opts.autoComplete ? '' : autoCompleteTpl
    const tpl = `
    <div id="login-wrapper">
            <form id="login-form" onsubmit="return false">
                ${autoCompleteAdapter}
                <label class="login-accout-wrapper">
                    <span class="account-label">${opts.accountLabel}</span>
                    <input id="login-account" name="account" type="text" placeholder="${opts.accountPlaceHolder}" autocomplete="off">
                    <span id="clear-account" class="del"></span>
                </label>    
                <label class="login-accout-wrapper">
                    <span class="password-label">${opts.passwordLabel}</span>
                    <input id="login-password" name="password" type="password" autocomplete="off" placeholder="${opts.passwordPlaceHolder}">
                </label>
                <input id="login-btn" class="login-btn" type="submit" value="${opts.loginBtnText}">         
            </form>
    </div>`
    return tpl
}

export default (conf = {}) => {
    conf.container.innerHTML = template(conf)
    const autocompleteBox = $('autocompletebox')
    if(autocompleteBox){
        autocompleteBox.style.height = '0'
        autocompleteBox.style.opacity = '0'
    }
}