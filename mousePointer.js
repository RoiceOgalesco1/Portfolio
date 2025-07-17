const mouseEffect = document.getElementById('mouse-effect');

document.addEventListener('mousemove', (e) => {
  mouseEffect.style.top = e.clientY + 'px';
  mouseEffect.style.left = e.clientX + 'px';
});

document.addEventListener('mousedown', () => {
  mouseEffect.style.transform = 'translate(-50%,-50%) scale(0.8)';
});

document.addEventListener('mouseup', () => {
  mouseEffect.style.transform = 'translate(-50%,-50%) scale(1)';
}); 

// Typing effect for 'AN ASPIRING SOFTWARE DEVELOPER'
document.addEventListener('DOMContentLoaded', function() {
  const el = document.getElementById('typing-effect');
  if (!el) return;
  const text = 'AN ASPIRING SOFTWARE DEVELOPER';
  const typingSpeed = 70;
  const delayBetweenLoops = 5000;

  function typeText(i = 0) {
    if (i <= text.length) {
      el.textContent = text.substring(0, i);
      setTimeout(() => typeText(i + 1), typingSpeed);
    } else {
      setTimeout(() => eraseText(text.length), delayBetweenLoops);
    }
  }

  function eraseText(i) {
    if (i >= 0) {
      el.textContent = text.substring(0, i);
      setTimeout(() => eraseText(i - 1), 30);
    } else {
      setTimeout(() => typeText(0), 500);
    }
  }

  typeText();
}); 