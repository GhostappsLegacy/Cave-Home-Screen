document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    let startY = 0;
    let isTouching = false;

    content.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        isTouching = true;
        content.style.transition = ''; // Clear any transitions to allow for immediate response
    }, { passive: true });

    content.addEventListener('touchmove', (e) => {
        if (!isTouching) return;
        const moveY = e.touches[0].clientY;
        const diffY = moveY - startY;
        if (diffY > 0) { // only when pulling down
            const resistance = diffY / 4; // Increasing the divisor will increase resistance
            content.style.transform = `translateY(${resistance}px)`;
        }
    }, { passive: true });

    content.addEventListener('touchend', () => {
        isTouching = false;
        content.style.transition = 'transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)'; // Smoother transition on release
        content.style.transform = 'translateY(0px)';
    });
});