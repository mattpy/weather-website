const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('message-one');
const messageTwo = document.getElementById('message-two');
const messageThree = document.getElementById('message-three');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    messageThree.textContent = '';

    fetch('/weather?address=' + search.value).then(response => {
        response.json().then(data => {
            if (data.error) {
                return messageOne.textContent = data.error;
            }

            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
            messageThree.textContent = data.weekly;
        });
    })
    .catch(err => {
        console.log(err);
    });
});