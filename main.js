document.querySelectorAll('.projects ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.fontSize = '1.3em';
        link.style.textDecoration = 'underline';
    });
    link.addEventListener('mouseout', () => {
        link.style.fontSize = '1.2em';
        link.style.textDecoration = 'none';
    });
});
