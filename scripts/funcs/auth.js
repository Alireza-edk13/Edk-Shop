const register = () => {

    const nameInput = document.querySelector('#name')
    const phoneInput = document.querySelector('#phone')
    const emailInput = document.querySelector('#email')
    const passwordInput = document.querySelector('#password')
    const users = []
    const newUserInfo = {
        name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
    }

    users.push(newUserInfo)

    localStorage.setItem('users', JSON.stringify(users))

}

export { register }