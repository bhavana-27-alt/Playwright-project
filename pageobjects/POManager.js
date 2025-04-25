const { Loginpage } = require('./Loginpage');
const { Dashboardpage } = require('./Dashboardpage');
const {Cartpage } = require('./Cartpage');
const{OrderReviewPage}=require('./OrderReviewPage');
const{OrderHistoryPage}=require('./OrderHistoryPage');
class POManager{
    constructor(page)
    {
        this.page=page;
        this.loginpage=new Loginpage(this.page);
        this.dashboardpage=new Dashboardpage(this.page);
        this.cartpage=new Cartpage(this.page);
        this.orderReviewpage=new OrderReviewPage(this.page);
        this.orderhistorypage=new OrderHistoryPage(this.page);

    }
    async getLoginpage(){
        return this.loginpage;
    }
    async getdashboardpage()
    {
        return this.dashboardpage;
    }
    async getcartpage()
    {
        return this.cartpage;
    }
   
    async getOrderReviewpage()
    {
         return this.orderReviewpage;
    }
    async getOrdersHistorypage(){
       return this.orderhistorypage;

    }
    
}
module.exports={POManager};