const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('message-one');
const messageTwo = document.getElementById('message-two');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch('http://localhost:3000/weather?address=' + search.value).then(response => {
        response.json().then(data => {
            if (data.error) {
                return messageOne.textContent = data.error;
            }
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
        });
    })
    .catch(err => {
        console.log(err);
    });
});