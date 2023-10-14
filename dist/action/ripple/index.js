import { RippleStart, RippleStop } from './ripple';
function createRippleContainer() {
    const rippleContainer = document.createElement('span');
    rippleContainer.style.position = 'absolute';
    rippleContainer.style.overflow = 'hidden';
    rippleContainer.style.top = '0';
    rippleContainer.style.right = '0';
    rippleContainer.style.bottom = '0';
    rippleContainer.style.left = '0';
    rippleContainer.style.borderRadius = 'inherit';
    rippleContainer.ariaHidden = 'true';
    rippleContainer.dataset.ripple = 'ripple';
    return rippleContainer;
}
/**
 * @param node {Element}
 */
export function ripple(node, _options = {}) {
    let options = _options;
    let destroyed = false;
    let ripple;
    let keyboardActive = false;
    const handleStart = (e) => {
        ripple = RippleStart(e, options);
    };
    const handleStop = () => RippleStop(ripple);
    const handleKeyboardStart = (e) => {
        if (e instanceof KeyboardEvent) {
            if (!keyboardActive && (e.code === 'Enter' || e.code === 'Space')) {
                ripple = RippleStart(e, { ...options, centered: true });
                keyboardActive = true;
            }
        }
    };
    const handleKeyboardStop = () => {
        keyboardActive = false;
        handleStop();
    };
    const rippleContainer = createRippleContainer();
    node.style.position = 'relative';
    node.appendChild(rippleContainer);
    function setup() {
        node.addEventListener('pointerdown', handleStart);
        node.addEventListener('pointerup', handleStop);
        node.addEventListener('pointerleave', handleStop);
        node.addEventListener('keydown', handleKeyboardStart);
        node.addEventListener('keyup', handleKeyboardStop);
        destroyed = false;
    }
    function destroy() {
        node.removeEventListener('pointerdown', handleStart);
        node.removeEventListener('pointerup', handleStop);
        node.removeEventListener('pointerleave', handleStop);
        node.removeEventListener('keydown', handleKeyboardStart);
        node.removeEventListener('keyup', handleKeyboardStop);
        destroyed = true;
    }
    if (options)
        setup();
    return {
        update(newOptions) {
            options = newOptions;
            if (options && destroyed)
                setup();
            else if (!(options || destroyed))
                destroy();
        },
        destroy
    };
}
export default ripple;
