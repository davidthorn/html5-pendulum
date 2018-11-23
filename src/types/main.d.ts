interface Window {
    pendulum: Pendulum
}

interface Pendulum {

    container: HTMLElement
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D

    draw(): void
    redraw(): void
}