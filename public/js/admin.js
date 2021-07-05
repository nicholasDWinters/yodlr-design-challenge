let users = document.getElementById('userInfo');

axios.get('http://localhost:3000/users')
    .then(res => {
        for (let user of res.data) {
            let newUser = document.createElement('div');
            let html = `<p>${user.firstName} ${user.lastName} - <b>${user.email}</b></p>`;
            newUser.innerHTML = html;
            users.appendChild(newUser);
        }

    })
    .catch(err => {
        console.log(err);
    })