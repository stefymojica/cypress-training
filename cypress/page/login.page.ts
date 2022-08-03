/* eslint-disable require-jsdoc */
class LoginPage {
    signInEmail() {
        return cy.get(
            "#email").type("aperdomobo@gmail.com",
        );
    };
    signInPassword() {
        return cy.get(
            "#passwd").type("WorkshopProtractor",
        );
    };
    signInSubmit() {
        return cy.get("#SubmitLogin");
    };
}

export const loginPage = new LoginPage();
