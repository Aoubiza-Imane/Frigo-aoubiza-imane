const input = document.querySelector('input[type="range"]');
const handle = document.querySelector('.handle');

function handleUpdate() {
    var suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    checkFlipAngle(this.value);
}

input.addEventListener('mousemove', handleUpdate);

function init() {
    document.documentElement.style.setProperty('--rotation-angle', '180deg');
    checkFlipAngle(parseInt(document.documentElement.style.getPropertyValue('--rotation-angle')));
}

function checkFlipAngle(value) {
    if (value > 90) {
        handle.classList.add('hidden');
    } else {
        handle.classList.remove('hidden');
    }
}
init();