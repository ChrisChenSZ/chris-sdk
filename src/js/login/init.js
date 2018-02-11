import event from './event.js'
import render from './render.js'

window.login = (opts) => {
    const container = opts.container
    render(container)
    event()
}