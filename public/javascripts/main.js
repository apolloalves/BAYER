const $ = document.querySelector.bind(document)
const bayerFeedbackPattern = $('.bayer-feedback-pattern')
const btnConfirmPassword = $('#btn-confirmPassword')
const btnNewPassword = $('#btn-newPassword')

const confirmInput = $('#confirmpassword')
const iconConfirm = $('#eyeIcon-confirm')
const passwordInput = $('#newpassword')
const icon = $('#eyeIcon')

// btn new password - hide/show pass
btnNewPassword.onclick = () => {
    passwordInput.type === 'password'
        ? (passwordInput.type = 'text', icon.classList.add("fa-eye-slash"))
        : (passwordInput.type = 'password', icon.classList.remove("fa-eye-slash"))
}

// btn confimr password - hide/show pass
btnConfirmPassword.onclick = () => {
    confirmInput.type === 'password'
        ? (confirmInput.type = 'text', iconConfirm.classList.add("fa-eye-slash"))
        : (confirmInput.type = 'password', iconConfirm.classList.remove("fa-eye-slash"))
}

const verifyPass = () => {
    bayerFeedback = $('.bayer-feedback')

    passwordInput.value != confirmInput.value
        ? (bayerFeedback.style.display = 'block', console.log('Senhas nao coincidem!'))
        : bayerFeedback.style.display = 'none'

}

const RegexPassTest = () => {
    let regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_])(?=.{8,20}$)");
    let testResult = regex.test(passwordInput.value)
    let confirm = regex.test(confirmInput.value)

    testResult || confirm
        ? bayerFeedbackPattern.style.display = 'none'
        : bayerFeedbackPattern.style.display = 'block'

}


passwordInput.addEventListener('change', RegexPassTest, false)
confirmInput.addEventListener('change', RegexPassTest, false)



const Pessoa = (name) => {
let idade; 

return{
    setName: (newName) =>{
        name = newName
    }, 
    getName: () => {
        return name
    }, 

    setIdade: (newIdade) => {
        idade = newIdade

    },
    getIdade: () => {
        return idade
    }

    }
}
var aluno = Pessoa('Eduardo');


document.write("<br>Nome do aluno: " + aluno.getName());         // retorna Eduardo
           aluno.setName('João');   // alterado o nome para João
           aluno.setIdade(20);      
           document.write("<br>Idade: " + aluno.getIdade());        // retorna 20
           document.write("<br>Nome Atualizado: " + aluno.getName());       



const loadFile = () => {
    let ajax = new XMLHttpRequest()

    ajax.onreadystatechange = () => {
        if( this.readyState === 4 && this.readyStatus === 200) {
            console.log( this.responseText )
        }
    }
}

loadFile()


