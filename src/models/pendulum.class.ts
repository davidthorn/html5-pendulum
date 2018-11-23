export class PendulumObject implements Pendulum {

    container: HTMLElement
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
    frame: DOMRect

    constructor(container: HTMLElement) {
        this.container = container
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D
        container.appendChild(this.canvas)
        this.frame = this.container.getBoundingClientRect() as DOMRect
    }

    draw():  void {
        this.canvas.width =  this.frame.width
        this.canvas.height = this.frame.height

        let c = this.context
        c.beginPath()
        c.fillStyle = 'red'
        c.fillRect(0,0,this.frame.width, this.frame.height)
        c.closePath()
    }

    redraw(): void {
        this.frame = this.container.getBoundingClientRect() as DOMRect
        this.draw()
    }

}