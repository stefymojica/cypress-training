import {MenuContentPage, productPage, shoppingCartPage, loginPage, addressStep, shipping, payment} from "../page/index";

const menuContentPage = new MenuContentPage();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productPage.addToCart().click();
    productPage.proceedToCheckout().click();
    shoppingCartPage.summaryCheckout().click();
    loginPage.signInEmail();
    loginPage.signInPassword();
    loginPage.signInSubmit().click();
    addressStep.addressCheckout().click();
    shipping.termsServiceShipping().click();
    shipping.shippingCheckout().click();
    payment.payWirePayment().click();
    payment.confirmOrder().click();
    payment.completeOrder();
  });
});
