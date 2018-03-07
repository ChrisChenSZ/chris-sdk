import {$} from '../common/utils.js'
const template = (opts = {}) => {
    const autoCompleteTpl = `
          <div id="autocompletebox">
                 <input type="text">
                  <input type="password">
          </div>`
    const showRemember = opts.showRemember ? 'block' : 'none';
    const autocompleteAdapter = opts.autoComplete ? '' : autoCompleteTpl
    const autocompleteValue = opts.autocomplete ? 'on' : 'off';
    const tpl = `
    <div id="login-wrapper">
            <p id="login-error" class="login-error"></p>
                   <form id="login-form" onsubmit="return false">
                ${ autocompleteAdapter }
                <label class="login-accound-wrapper">
                    <span class="account-label">${ opts.accountLabel }</span>
                    <input id="login-account" valid="present" name="account" type="text" placeholder="${ opts.accountPlaceHolder }" maxlength="${opts.accountMax}" autocomplete="${ opts.autocompleteValue }">
                    <span id="clear-account" class="del"></span>
                </label>

                <label class="login-password-wrapper">
                    <span class="password-label">${ opts.passwordLabel }</span>
                    <input id="login-password" valid="present" name="password" type="password" placeholder="${ opts.passwordPlaceHolder }" maxlength="${opts.passwordMax}" autocomplete="${ autocompleteValue }">
                </label>

                <label style="display: none" class="login-verify-wrapper">
                    <span class="verify-label">验证码：</span>
                    <input id="login-verify" name="verifyCode" type="text" placeholder="${ opts.verifyPlaceHolder }">
                    <!--<img src="/verifycode">-->
                </label>

                <label class="login-remember-wrapper" style="display: ${ showRemember }">
                    <span>记住密码：</span>
                    <input id="login-remember" name="remember" type="checkbox">
                </label>

                <input id="login-btn" class="login-btn" type="submit" value="${ opts.loginBtnText }">
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