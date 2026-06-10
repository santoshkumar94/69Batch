//To Provide all Reusable methods / functions releated to whole application

import {global} from "./Global";

export class general extends global{

//User-define methods
//Open Application
public async openApplication() {
    await this.page.goto(this.url);
    console.log("Appliaction Opened");
}
//login to Application
public async login(){
    await this.page.locator(this.textbox_loginname).fill(this.username);
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.locator(this.button_login).click();
    console.log("Login Completd");
}
//logout from application
public async logout(){
    await this.page.locator(this.link_logout).click();
    console.log("Logout Completed");
}
//Add empolyee
public async addNewEmployee() {
   const frame = this.page.frameLocator(this.frame_empinfo);
   await frame.locator(this.button_add).click();
   await frame.locator(this.textbox_empfirstname).fill(this.emp_firstname);
   await frame.locator(this.textbox_emplastname).fill(this.emp_lastname);
   await frame.locator(this.button_save).click();
   console.log("New Employee Added");
}

//Delete empolyee
public async deleteempid() {
   const frame = this.page.frameLocator(this.frame_empinfo);
   await frame.locator(this.dropdown_searchby).selectOption("Emp. ID");
   await frame.locator(this.textbox_searchfor).fill(this.empid_searchfor);
   await frame.locator(this.button_search).click();
   await frame.locator(this.checkbox_select).check();
   await frame.locator(this.button_delete).click();
   console.log("Delete Empolyee Id");
   
}

//Wait For Timeout
public async waitTime(){
    await this.page.waitForTimeout(3000);
}
}

