function switchTheme(theme) {
    var navbar = document.querySelector('.navbar');
    var button = document.getElementById('readMoreButton');
    var footer = document.getElementById('ftrdiv');
    var navbutton = document.querySelectorAll('.nav-item-link'); 

    if (theme === 'dark') {
        navbar.style.backgroundColor = '#000000';
        button.style.backgroundColor = '#000000';
        footer.style.backgroundColor = '#000000';
        navbutton.forEach(element => {
            element.classList.remove('text-dark');
            element.classList.add('text-white');
        });
        button.classList.remove('text-dark');
        button.classList.add('text-white');
        footer.classList.remove('text-dark');
        footer.classList.add('text-white');

    } else if (theme === 'light') {
        navbar.style.fontcolor = '#000000';
        navbar.style.backgroundColor = '#f2f2f2';
        button.style.backgroundColor = '#f2f2f2';
        footer.style.backgroundColor = '#f2f2f2';
        navbutton.forEach(element => {
            element.classList.add('text-dark');
            element.classList.remove('text-white');
        });
        button.classList.add('text-dark');
        button.classList.remove('text-white');
        footer.classList.add('text-dark');
        footer.classList.remove('text-white');
        
    } else {
        navbar.style.backgroundColor = '#293040';
        button.style.backgroundColor = '#293040';
        footer.style.backgroundColor = '#293040';
        navbutton.forEach(element => {
            element.classList.remove('text-dark');
            element.classList.add('text-white');
        });

        button.classList.remove('text-dark');
        button.classList.add('text-white');
        footer.classList.remove('text-dark');
        footer.classList.add('text-white');
    }
}