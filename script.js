const listItems = document.querySelectorAll('.list-group-item');

listItems.forEach(listItem => {
    listItem.addEventListener('mouseenter', () => {
        listItem.classList.add('animated', 'bounce');
    });

    listItem.addEventListener('mouseleave', () => {
        listItem.classList.add('animated', 'fadeOut');
        listItem.addEventListener('animationend', () => {
            listItem.classList.remove('animated', 'fadeOut', 'bounce');
        });
    });
});