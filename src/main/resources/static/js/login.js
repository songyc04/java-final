document.addEventListener('DOMContentLoaded', () => {
    console.log("⚡ BIDLIFE Login: Initialized.");

    initFormValidation();
    initInputAnimations();
});

function initFormValidation() {
    const form = document.querySelector('.login-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        const username = document.querySelector('#username');
        const password = document.querySelector('#password');

        if (!username.value.trim()) {
            e.preventDefault();
            shakeInput(username);
            username.focus();
            return;
        }

        if (!password.value.trim()) {
            e.preventDefault();
            shakeInput(password);
            password.focus();
            return;
        }

        console.log("🔐 Login attempt:", username.value);
    });
}

function initInputAnimations() {
    const inputs = document.querySelectorAll('.input-group input');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            const label = input.parentElement.querySelector('label');
            if (label) {
                label.style.color = '#ff5a00';
            }
        });

        input.addEventListener('blur', () => {
            const label = input.parentElement.querySelector('label');
            if (label) {
                label.style.color = '#aaaaaa';
            }
        });
    });
}

function shakeInput(input) {
    input.style.animation = 'shake 0.4s';
    input.style.borderColor = '#ff3333';

    setTimeout(() => {
        input.style.animation = '';
        input.style.borderColor = '';
    }, 400);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-8px); }
        75% { transform: translateX(8px); }
    }
`;
document.head.appendChild(style);
