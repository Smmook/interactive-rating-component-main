const list = document.getElementById('list');
const card = document.getElementById('card');
const submit = document.getElementById('submit');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();

list.addEventListener('click', e => {
    if (list.querySelector('.selected')) {
        list.querySelector('.selected').classList.remove('selected');
    }

    e.target.classList.add('selected');
    e.stopPropagation();
});

submit.addEventListener('click', e => {
    if (list.querySelector('.selected')) {
        card.innerHTML = '';
        card.style.alignItems = 'center';
        const span = template.content.querySelector('#valoration');
        span.textContent = list.querySelector('.selected').id;
        fragment.appendChild(template.content);
        card.appendChild(fragment);
    }
})