import { urls } from "../support/urls"
import { register } from "../support/commands"
import { RegisterCredentials } from "../support/fixtures"

describe('Login', () => {

    context('when user write valid email adress and it not exists in database', () => {
        it('should create user account', () => {
            register(RegisterCredentials())
            cy.url().should("eq", urls.accountCreationPage)
        })
    })

    context('when user write invalid email adress to registration', () => {
        it('should display error message', () => {
            register(RegisterCredentials({ email: "invalidadress.com" }))
            cy.contains("Invalid email address.")
        })
    })
})
