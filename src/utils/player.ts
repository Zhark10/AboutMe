
let center_x, center_y, radius = 40, bars: any,
    x_end, y_end, bar_height, randomValue, bar_width: any,
    frequency_array: Uint8Array, audio, context, source, analyser: any, rads, x, y;

bars = 50;
bar_width = 5;

export function initPage(musicSrc: any, ref: React.RefObject<any>) {

    audio = new Audio();
    context = new (window.AudioContext)();
    analyser = context.createAnalyser();

    audio.src = musicSrc;
    source = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);


    frequency_array = new Uint8Array(analyser.frequencyBinCount);

    audio.play();

    animationLooper(ref);
}

function animationLooper(canvas: React.RefObject<HTMLCanvasElement>) {


    canvas.current!.width = window.innerWidth;

    let ctx = canvas.current!.getContext("2d");
    // set to the size of device
    canvas.current!.width = 250;
    canvas.current!.height = 250;

    // set to the size of device
    center_x = canvas.current!.width / 2;
    center_y = canvas.current!.height / 2;

    // style the background
    ctx!.fillRect(0, 0, canvas.current!.width, canvas.current!.height);

    //draw a circle
    ctx!.beginPath();
    ctx!.stroke();

    analyser.getByteFrequencyData(frequency_array);
    for (let i: any = 0; i < bars; i++) {

        //divide a circle into equal parts
        rads = Math.PI * 2 / bars;

        bar_height = frequency_array[i] * 0.4;
        randomValue = frequency_array[i] * 0.1;

        // set coordinates
        x = center_x + Math.cos(rads * i) * (radius);
        y = center_y + Math.sin(rads * i) * (radius);
        x_end = center_x + Math.cos(rads * i) * (radius + bar_height);
        y_end = center_y + Math.sin(rads * i) * (radius + bar_height);

        //draw a bar
        drawBar(x, y, x_end, y_end, bar_width, ctx!);

    }
    window.requestAnimationFrame(() => animationLooper(canvas));
}

// for drawing a bar
function drawBar(x1: any, y1: any, x2: any, y2: any, width: any, ctx: CanvasRenderingContext2D) {

    const lineColor = "rgba(245, 215, 110, 1)";

    ctx.strokeStyle = lineColor;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.fillStyle = "#fff"
}