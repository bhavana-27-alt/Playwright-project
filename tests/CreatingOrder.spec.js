const{test,expect}=require('@playwright/test');

const { POManager } = require('../pageobjects/POManager');
const dataset=JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));

for (const data of dataset)
{
test(`practice-work for  ${data.productName}`, async({page})=>
    
{
    
    const products=page.locator(".card-body");
    const pomanager=new POManager(page);
    const loginpage=await pomanager.getLoginpage();
    
    
   
    
    await loginpage.goTo();
    await loginpage.validLogin(data.username,data.password);


    const dashboardpage=await pomanager.getdashboardpage();
    await dashboardpage.productSearch(data.productName);
    await dashboardpage.navigatetoCart();



    const cartpage=await pomanager.getcartpage();
    await cartpage.searchOrderIdIsDisplayed(data.productName);
    await cartpage.ccheckout();







    const orderreviewpage=await pomanager.getOrderReviewpage();
    await orderreviewpage.searchCountryAndSelect("ind","India");
   const orderId=await orderreviewpage.submitandgetorderid();
   console.log(orderId);


   await dashboardpage.navigateToOrders();
   const orderhistorypage=await pomanager.getOrdersHistorypage();
    
    await orderhistorypage.searchOrderAndSelect(orderId);
    expect(orderId.includes(await orderhistorypage.getOrderId())).toBeTruthy();





   
   
  

});

}
   