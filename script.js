document.getElementById('colorChangeBtn').addEventListener('click', function() {
    // Перевіряємо, чи є клас "dark-mode" у body
    document.body.classList.toggle('dark-mode');
    // Перевіряємо, чи є клас "dark-mode" у header і footer
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('aside').classList.toggle('dark-mode');
    document.querySelector(' button').classList.toggle('dark-mode');
    document.querySelector('button:hover').classList.toggle('dark-mode');
    document.querySelector('.info').classList.toggle('dark-mode');

});


