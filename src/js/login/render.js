const template = (opts = {}) => {
    const tpl = `
    <div class="aaa">
        <p>你和在一起 ? </p>
    </div>`
    return tpl
}

export default (conf = {}) => {
    conf.container.innerHTML = template(conf)
}