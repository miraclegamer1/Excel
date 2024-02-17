const scriptURL = 'https://script.google.com/macros/s/AKfycby8FmWZKIP1ulrCLyvxOaw0Z1roQTRd7vxkiDlZH6vocPLRATrg6RrkvaoXqf_ygw0tww/exec';
let submit = document.getElementById('submit');
const form = document.forms['contact-form'];



form.addEventListener('submit', e => {
    submit.disabled = true;
        e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! Your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message));
    setTimeout(() => {
            submit.disabled = false;
    }, 3000);
});

