interface Window {
    pendulum: Pendulum
    animate(): void
}

interface Pendulum {

    container: HTMLElement
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D

    draw(): void
    redraw(): void
}

type PendulumFrameCenter = {
    x: number
    y: number
}