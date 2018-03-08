const getIdAsRandom = (id) => {
    let el = document.getElementById(id)
    el && el.setAttribute('id',`${id}-${Math.floor(Math.random() * 1000)}`)
    return el
}
export {getIdAsRandom as $}
const utils = {
    getDom: (v) => {
        return document.querySelector(v)
    }
}
export default utils