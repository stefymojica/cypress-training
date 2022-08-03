/* eslint-disable require-jsdoc */
class ShoppingCartPage {
    summaryCheckout() {
        return cy.get(
            ".cart_navigation span",
        );
    }
}

export const shoppingCartPage = new ShoppingCartPage();
