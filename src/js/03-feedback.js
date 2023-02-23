import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

const objectToSave = { email: email.value, message: message.value };

form.addEventListener('input', throttle(e => {
    
localStorage.setItem(STORAGE_KEY, JSON.stringify(objectToSave));
}, 500));

form.addEventListener('submit', e => {
    e.preventDefault();
    
    if (email.value === '' || message.value === '') {
        return alert('Заповни всі поля!');
    }

    console.log({ email: email.value, message: message.value });

    form.reset();
    localStorage.removeItem(STORAGE_KEY);
});

function fillInForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
        objectToSave = savedData;
    }
}
    

     

 