export default (container) => {
    let tpl = `<form id="form">
    <input type="text" name="name" id="input">
    <input type="text" name="password">
    <input type="submit" id="submit" name="submit" value="登陆">
</form>`
    container.innerHTML = tpl
}