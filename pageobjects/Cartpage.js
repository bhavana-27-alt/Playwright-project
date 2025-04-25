const { expect } = require('@playwright/test');

class Cartpage{
    constructor(page)
    {
        this.page=page;
        this.cartProducts=page.locator("div li").first();
        this.productsText=page.locator(".card-body b");
        this.cart=page.locator("[routerlink*='cart']");
        this.orders= page.locator("button[routerlink*='myorders']");
        this.checkout=page.locator("text=checkout");
        
    }
    async searchOrderIdIsDisplayed(productName)
    { 
        await this.cartProducts.waitFor();
       
          
        const productLocator = await this.getProductLocator(productName); // now it's the actual locator
        const bool = await productLocator.isVisible();  
       expect(bool).toBeTruthy();
      

    }
    async getProductLocator(productName)
    {
        return this.page.locator("h3:has-text('"+productName+"')");
    }
    async ccheckout()
    {
         await this.checkout.click();
    }
}
module.exports={Cartpage};