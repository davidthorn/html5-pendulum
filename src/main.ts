import { PendulumObject } from './models'

window.onload = () => {

    let container = document.createElement('div')
    container.setAttribute('id' , "container")
    container.setAttribute('class' , 'container')
    document.body.appendChild(container)
    
    window.pendulum = new PendulumObject(container)
    window.pendulum.draw()
}

/// on resize
window.onresize = () => {
    window.pendulum.redraw()
    console.log('redrawing');
}