let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let saveBtn = document.getElementById("saveBtn")

function generatePassword(len){
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const symbol = "!@#$%^&*()_=+-[]{}';:/?.>,<~`"

    const data = lowerAlphabet+upperAlphabet+numeric+symbol
    let generator = ''
    for(let i=0; i < len; i++){
        generator += data[~~(Math.random() * data.length)]
    }

    return generator

}

function getPassword() {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    setTimeout(() =>{
        alert('password dah jadi')
    },500)
}

function savePassword(){
    document.title = password.value
    saveBtn.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
    saveBtn.setAttribute('download', 'MyPasswordGenerator.txt')
    setTimeout(() => {
        alert('password berhasil disimpan')
    }, 500)
}