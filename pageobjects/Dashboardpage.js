class Dashboardpage{
    constructor(page)
    {
        this.page=page;
        this.products=page.locator(".card-body");
        this.productsText=page.locator(".card-body b");
        this.cart=page.locator("[routerlink*='cart']");
        this.myorderspage= page.locator("button[routerlink*='myorders']");
    }
    async productSearch(productName)
    {
        await this.productsText.first().waitFor();
        const titles = await this.productsText.allTextContents();
         console.log(titles); 
        const count = await this.products.count();
   for (let i = 0; i < count; ++i) {
      if (await this.products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await this.products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
    }
    async navigatetoCart()
    {
        await this.cart.click();
    }
    
    
    async navigateToOrders()
    {
        await this.myorderspage.click();
    }
}
module.exports={Dashboardpage};