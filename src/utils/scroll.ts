export const handleScroll = (e: any, to?: string) => {
    const targetId = to ? to : e.target.dataset.targetId;
    if (targetId) {
        const targetElement = document.getElementById(targetId);
        const scrollDistance = targetElement!.getBoundingClientRect().top;
        processScroll(scrollDistance);
    }
}

const processScroll = (dimenY: any) => {
    __processScroll(dimenY, 0, 1);
}

const __processScroll = (distanceLeft: any, distanceCovered: any, stepSize: any) => {
    setTimeout(() => {
        if (distanceLeft > distanceCovered) {
            stepSize = 1.1 * stepSize;
        } else {
            stepSize = Math.ceil(0.91 * stepSize);
        }
        window.scrollTo(0, distanceCovered);
        if (distanceLeft > 0) {
            __processScroll(distanceLeft - stepSize, distanceCovered + stepSize, stepSize);
        }
    }, 10);
}