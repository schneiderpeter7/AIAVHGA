// Google-szerű animációk a login oldalhoz
// Animáció: input mező fókusz, gomb hullám effekt, logó belépés

document.addEventListener('DOMContentLoaded', function() {
    // Input mező animáció
    const inputs = document.querySelectorAll('.login-container input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 0 2px #4285f4';
        });
        input.addEventListener('blur', function() {
            this.style.boxShadow = '';
        });
    });

    // Gomb hullám effekt
    const button = document.querySelector('.login-container button');
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = e.offsetX + 'px';
        ripple.style.top = e.offsetY + 'px';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });

    // Logó belépő animáció
    const logo = document.querySelector('.google-logo');
    if (logo) {
        logo.style.opacity = 0;
        logo.style.transform = 'translateY(-30px) scale(0.8)';
        setTimeout(() => {
            logo.style.transition = 'all 0.7s cubic-bezier(.4,0,.2,1)';
            logo.style.opacity = 1;
            logo.style.transform = 'translateY(0) scale(1)';
        }, 200);
    }
});

// Hullám effekt stílus hozzáadása
const style = document.createElement('style');
style.textContent = `
.ripple {
    position: absolute;
    background: rgba(66,133,244,0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple-effect 0.6s linear;
    pointer-events: none;
    width: 80px;
    height: 80px;
    margin-left: -40px;
    margin-top: -40px;
    z-index: 2;
}
@keyframes ripple-effect {
    to {
        transform: scale(2.5);
        opacity: 0;
    }
}
.login-container { position: relative; }
.login-container button { overflow: hidden; position: relative; }
`;
document.head.appendChild(style);
