import { PendulumObject } from './models'

window.onload = () => {

    let container = document.createElement('div')
    container.setAttribute('id' , "container")
    container.setAttribute('class' , 'container')
    document.body.appendChild(container)
    
    window.pendulum = new PendulumObject(container)
    window.animate()
}



/// on resize
window.onresize = () => {
    window.animate()
    console.log('redrawing');
}

Window.prototype.animate = () => {

    setInterval(() => {
        window.pendulum.draw()
    }, 60)
    
}