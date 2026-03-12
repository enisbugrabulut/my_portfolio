document.addEventListener('DOMContentLoaded', () => {
    const lightBtn = document.getElementById('light-mode-btn');
    const darkBtn = document.getElementById('dark-mode-btn');

    const setTheme = (theme) => {
        if (theme === 'light') {
            document.body.classList.remove('dark-mode');
            lightBtn.classList.add('active');
            darkBtn.classList.remove('active');
        } else {
            document.body.classList.add('dark-mode');
            darkBtn.classList.add('active');
            lightBtn.classList.remove('active');
        }
        localStorage.setItem('theme', theme);
    };

    setTheme(localStorage.getItem('theme') || 'dark');

    lightBtn.addEventListener('click', () => setTheme('light'));
    darkBtn.addEventListener('click', () => setTheme('dark'));

    const typewriterEl = document.querySelector('.typewriter');
    if (typewriterEl) {
        document.querySelector('header').classList.add('fade-in');
        document.querySelector('footer').classList.add('fade-in');
        document.body.style.pointerEvents = 'none';
        const text = document.getElementById('typewriter-source').innerText;
        let i = 0;

        function showRest() {
            document.body.style.pointerEvents = '';
            document.querySelectorAll('.fade-in').forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('visible');
                }, index * 500);
            });
        }

        function type() {
            if (i < text.length) {
                typewriterEl.textContent += text[i];
                i++;
                setTimeout(type, 100);
            } else {
                showRest();
            }
        }

    type();

    }
});