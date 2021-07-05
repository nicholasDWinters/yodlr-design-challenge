
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let submit = document.getElementById('submit');
let contain = document.getElementById('contain');



submit.addEventListener('click', (e) => {
    e.preventDefault();
    let newUser = {
        'firstName': firstName.value,
        'lastName': lastName.value,
        'email': email.value
    };

    addUser(newUser);
});

async function addUser(newUser) {
    try {
        let res = await axios.post('http://localhost:3000/users', newUser);
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        createAlert(contain, newUser);
        setTimeout(function () {
            window.location.href = 'http://localhost:3000/';
        }, 3000);
    } catch (e) {
        console.log(e);
    }

}

function createAlert(el, newUser) {
    let alert = document.createElement('div');
    alert.innerHTML = `<div class="mt-4 alert alert-success alert-dismissible fade show" role="alert">
    <strong>Created new user ${newUser.firstName}</strong> Redirecting to home page...
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
    el.prepend(alert);
}