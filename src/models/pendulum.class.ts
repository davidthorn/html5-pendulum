export class PendulumObject implements Pendulum {

    container: HTMLElement
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
    frame: DOMRect

    center: PendulumFrameCenter 
    length: number
    angle: number
    acceleration: number
    velocity: number
    damper: number
    force: number

    constructor(container: HTMLElement) {
        this.container = container
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D
        container.appendChild(this.canvas)
        this.frame = this.container.getBoundingClientRect() as DOMRect
        this.center = {
            x: this.frame.width / 2,
            y: this.frame.height / 2
        }

        this.length = this.frame.height * 0.7
        this.angle = 0
        this.velocity = 0.1
        this.acceleration = 0
        this.damper = 0.9999
        this.force  = 0.99
    }

    draw():  void {
        console.log(this.velocity , this.force)
        this.canvas.width =  this.frame.width
        this.canvas.height = this.frame.height

        let c = this.context
        
        c.beginPath()
        c.clearRect(0, 0, this.frame.width , this.frame.height)
        c.fillStyle = 'white'
        c.fillRect(0,0,this.frame.width, this.frame.height)
        c.closePath()

        this.drawStick()
        this.drawBob()

        this.acceleration = (-0.015 * this.force) * Math.sin(this.angle)

        this.angle += this.velocity
        this.velocity += this.acceleration
        
        this.velocity *= this.force 
        this.force *= this.damper
        
    }

    redraw(): void {
        this.frame = this.container.getBoundingClientRect() as DOMRect
        this.draw()
    }

    drawStick() {
        let c = this.context
        c.beginPath()

        let x = this.center.x + this.length * Math.sin(this.angle)
        let y = this.frame.y + this.length * Math.cos(this.angle)

        c.strokeStyle = 'black'
        c.moveTo(this.center.x , 0)
        c.lineTo(x, y)
        c.stroke()
        c.closePath()
    }

    drawBob() {
        let c = this.context
        c.beginPath()

        let x = this.center.x + this.length * Math.sin(this.angle)
        let y = this.frame.y + this.length * Math.cos(this.angle)

        c.fillStyle = 'black'
        c.arc(x, y, 30 , 0, Math.PI * 2)
        c.fill()
        c.closePath()
    }

}