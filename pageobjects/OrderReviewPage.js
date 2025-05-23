class OrderReviewPage{
    constructor(page)
    {
        this.page=page;
        this.country=page.locator("[placeholder*='Country']");
this.dropdown=page.locator(".ta-results");
this.emailId=page.locator(".user__name [type='text']").first();
this.submit= page.locator(".action__submit");
this.orderConfirmationText=page.locator(".hero-primary");
this.orderId= page.locator(".em-spacer-1 .ng-star-inserted");

    }
    
    async searchCountryAndSelect(countrycode,countryName)
    {
        await this.country.type(countrycode,{delay:100});
        await this.dropdown.waitFor();
        const optionsCount = await this.dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await this.dropdown.locator("button").nth(i).textContent();
      if (text.trim() === countryName) {
         await this.dropdown.locator("button").nth(i).click();
         break;
      }
   }


    }
    async submitandgetorderid() {
        await this.submit.click();
        await this.orderConfirmationText.waitFor();
        const orderId = await this.orderId.textContent();
        return orderId.trim();
    }
}
module.exports={OrderReviewPage};