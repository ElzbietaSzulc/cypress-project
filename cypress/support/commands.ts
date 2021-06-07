import { urls } from "../support/urls"
import { registerPage } from "../support/directories"

export function register(p: RegisterCredentials) {
    return cy
        .visit(urls.mainPage)
        .contains("Sign in")
        .click()
        .get(registerPage.email)
        .type(p.email)
        .get(registerPage.createAccountButton)
        .click()
        .wait(500)
}