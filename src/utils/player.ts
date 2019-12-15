import { COLORS } from "../global/colors";

const INITIAL = {
    bars: 150,
    bar_width: 5,
    canvasWidth: 300,
    canvasHeight: 280,
    lineColor: COLORS.main,
}

export const initAudioPlayer = (musicSrc: any, ref: React.RefObject<HTMLCanvasElement>, setColor: any) => {

    const audio = new Audio();
    const context = new (window.AudioContext)();
    const source = context.createMediaElementSource(audio);
    const analyser = context.createAnalyser();
    const frequency_array = new Uint8Array(analyser.frequencyBinCount);

    audio.src = musicSrc;
    audio.play();

    source.connect(analyser);
    analyser.connect(context.destination);

    animationLooper(ref, analyser, frequency_array, setColor);
}

function animationLooper(canvas: React.RefObject<HTMLCanvasElement>, analyser: AnalyserNode, frequency_array: Uint8Array, setColor: any) {
    let ctx = canvas.current!.getContext("2d");
    let center_x = INITIAL.canvasWidth / 2;
    let center_y = INITIAL.canvasHeight / 2;

    canvas.current!.width = INITIAL.canvasWidth;
    canvas.current!.height = INITIAL.canvasHeight;

    // style the background
    ctx!.fillRect(0, 0, INITIAL.canvasWidth, INITIAL.canvasHeight);
    ctx!.fillStyle = COLORS.main;

    //draw a circle
    ctx!.beginPath();
    ctx!.stroke();

    analyser.getByteFrequencyData(frequency_array);
    for (let i: number = 0; i < INITIAL.bars; i++) {

        //divide a circle into equal parts
        const rads = Math.PI * 2 / INITIAL.bars;

        const bar_height = frequency_array[i] * 0.3;
        const randomRadius = frequency_array[20] * 0.3;

        // if(frequency_array[])
        if (randomRadius < 55) {
            INITIAL.bar_width = 1
            INITIAL.lineColor = COLORS.main
            setColor(COLORS.main);
            
        } else if (randomRadius > 55 && randomRadius < 65) {
            INITIAL.bar_width = 3
            INITIAL.lineColor = 'blue'
            setColor('blue');
        } else {
            INITIAL.bar_width = 5
            INITIAL.lineColor = 'green'
            setColor('green');
        }

        const _center_x = center_x;
        const _center_y = center_y;

        // set coordinates
        const x = _center_x + Math.cos(rads * i) * (randomRadius);
        const y = _center_y + Math.sin(rads * i) * (randomRadius);
        const x_end = _center_x + Math.cos(rads * i) * (randomRadius + bar_height);
        const y_end = _center_y + Math.sin(rads * i) * (randomRadius + bar_height);

        //draw a bar
        drawBar(x, y, x_end, y_end, ctx!);

    }
    window.requestAnimationFrame(() => animationLooper(canvas, analyser, frequency_array, setColor));

}

function drawBar(x1: number, y1: number, x2: number, y2: number, ctx: CanvasRenderingContext2D) {


    ctx.strokeStyle = INITIAL.lineColor;
    ctx.lineWidth = INITIAL.bar_width;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}