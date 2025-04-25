class Loginpage{
    constructor(page){
        this.page=page;
        this.userName= page.locator("#userEmail");
        this.signInbutton=page.locator("[type='submit']");
        this.password= page.locator("#userPassword");

    }
    async goTo(){
        await this.page.goto("https://rahulshettyacademy.com/client");
    }
   async validLogin(username,password)
   {
       await this.userName.type(username);
       await this.password.type(password);
       await this.signInbutton.click();
       await this.page.waitForLoadState('networkidle');

}
}
module.exports={Loginpage};