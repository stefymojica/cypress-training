/* eslint-disable require-jsdoc */
class AddressStep {
    addressCheckout() {
        return cy.get(
            ".cart_navigation [type='submit']",
        );
    };
}

export const addressStep = new AddressStep();
