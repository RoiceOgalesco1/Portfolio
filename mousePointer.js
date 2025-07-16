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