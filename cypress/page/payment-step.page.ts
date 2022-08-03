/* eslint-disable require-jsdoc */
class Payment {
    payWirePayment() {
        return cy.get(".bankwire");
    };
    confirmOrder() {
        return cy.get(
            ".cart_navigation [type='submit']",
        );
    };
    completeOrder() {
        return cy.get(
            "#center_column > div > p > strong",
            ).should(
            "have.text",
            "Your order on My Store is complete.",
        );
    }
}

export const payment = new Payment();
