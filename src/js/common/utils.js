const getId = (id) => {
    let el = document.getElementById(id)
    el && el.setAttribute('id',`${id}-${Math.floor(Math.random() * 1000)}`)
    return el
}
export {getId as $}