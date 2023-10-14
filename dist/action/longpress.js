export function longpress(node, time = 200) {
    let timeoutPtr;
    let _time = time;
    function handleMouseDown(e) {
        window.addEventListener('mousemove', handleMoveBeforeLong);
        timeoutPtr = window.setTimeout(() => {
            window.removeEventListener('mousemove', handleMoveBeforeLong);
            node.dispatchEvent(new CustomEvent('long'));
            // TODO - ideally make this not trigger long press again
            window.setTimeout(() => node.dispatchEvent(e), 0);
        }, _time);
    }
    function handleMoveBeforeLong() {
        window.clearTimeout(timeoutPtr);
        window.removeEventListener('mousemove', handleMoveBeforeLong);
    }
    function handleMouseUp() {
        window.clearTimeout(timeoutPtr);
        window.removeEventListener('mousemove', handleMoveBeforeLong);
    }
    node.addEventListener('mousedown', handleMouseDown);
    node.addEventListener('mouseup', handleMouseUp);
    node.addEventListener('touchstart', handleMouseDown);
    node.addEventListener('touchend', handleMouseUp);
    return {
        destroy: () => {
            node.removeEventListener('mousedown', handleMouseDown);
            node.removeEventListener('mouseup', handleMouseUp);
            node.removeEventListener('touchstart', handleMouseDown);
            node.removeEventListener('touchend', handleMouseUp);
        },
        update: (newTime) => {
            _time = newTime;
            node.removeEventListener('mousedown', handleMouseDown);
            node.removeEventListener('mouseup', handleMouseUp);
            node.removeEventListener('touchstart', handleMouseDown);
            node.removeEventListener('touchend', handleMouseUp);
            node.addEventListener('mousedown', handleMouseDown);
            node.addEventListener('mouseup', handleMouseUp);
            node.addEventListener('touchstart', handleMouseDown);
            node.addEventListener('touchend', handleMouseUp);
        }
    };
}
