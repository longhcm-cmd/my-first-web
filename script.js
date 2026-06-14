// Add dynamic hover shine effect to cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});

// Interactive Button Logic
const btn = document.getElementById('interactive-btn');
const msg = document.getElementById('interactive-msg');

btn.addEventListener('click', () => {
    // Show/hide message with a nice fade transition
    if (msg.classList.contains('hidden')) {
        msg.classList.remove('hidden');
        btn.textContent = 'Tuyệt vời! Click tiếp đi! ⚡';
        
        // Add a temporary animation to the button
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 100);
    } else {
        msg.classList.add('hidden');
        btn.textContent = 'Nhấn vào đây thử xem! ✨';
    }
});
