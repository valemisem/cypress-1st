export class SigninPage {
    elements = {
        usernameField: () => cy.get("input#username"),
        passwordField: () =>  cy.get("input#password"),
        signinButton: () => cy.get("button.btn.btn-primary")
    }

    signin(signin, password) {  // инкапсулировали логику логина, как мыслит пользователь
        this.elements.usernameField().type(signin)
        this.elements.passwordField().type(password)
        this.elements.signinButton().click()
    }
}

