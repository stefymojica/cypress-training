/* eslint-disable require-jsdoc */
class Shipping {
    termsServiceShipping() {
        return cy.get("#cgv");
    };
    shippingCheckout() {
        return cy.get(
            ".cart_navigation [type='submit']",
        );
    };
}

export const shipping = new Shipping();
