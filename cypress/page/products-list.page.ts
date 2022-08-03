/* eslint-disable require-jsdoc */
class ProductPage {
    addToCart() {
        return cy.get(
            "#center_column a.button.ajax_add_to_cart_button.btn.btn-default",
        );
    }
    proceedToCheckout() {
        return cy.get(
            "[style*=' display: block;'] .button-container > a",
        );
    }
}

export const productPage = new ProductPage();
