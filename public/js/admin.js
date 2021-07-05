let users = document.getElementById('userInfo');

async function loadUsers() {
    try {
        let res = await axios.get('http://localhost:3000/users');
        for (let user of res.data) {
            let newUser = document.createElement('div');
            let html = `<p>${user.firstName} ${user.lastName} - <b>${user.email}</b></p>`;
            newUser.innerHTML = html;
            users.appendChild(newUser);
        }
    } catch (e) {
        console.log(e);
    }
}


loadUsers();