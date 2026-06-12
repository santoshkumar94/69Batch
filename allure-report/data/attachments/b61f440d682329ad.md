# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC003_DeleteEmp.spec.ts >> TC003_DeleteEmp
- Location: tests\TC003_DeleteEmp.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@name=\'txtUserName\']')

```

# Test source

```ts
  1  | //To Provide all Reusable methods / functions releated to whole application
  2  | 
  3  | import {global} from "./Global";
  4  | 
  5  | export class general extends global{
  6  | 
  7  | //User-define methods
  8  | //Open Application
  9  | public async openApplication() {
  10 |     await this.page.goto(this.url);
  11 |     console.log("Appliaction Opened");
  12 | }
  13 | //login to Application
  14 | public async login(){
> 15 |     await this.page.locator(this.textbox_loginname).fill(this.username);
     |                                                     ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  16 |     await this.page.locator(this.textbox_password).fill(this.password);
  17 |     await this.page.locator(this.button_login).click();
  18 |     console.log("Login Completd");
  19 | }
  20 | //logout from application
  21 | public async logout(){
  22 |     await this.page.locator(this.link_logout).click();
  23 |     console.log("Logout Completed");
  24 | }
  25 | //Add empolyee
  26 | public async addNewEmployee() {
  27 |    const frame = this.page.frameLocator(this.frame_empinfo);
  28 |    await frame.locator(this.button_add).click();
  29 |    await frame.locator(this.textbox_empfirstname).fill(this.emp_firstname);
  30 |    await frame.locator(this.textbox_emplastname).fill(this.emp_lastname);
  31 |    await frame.locator(this.button_save).click();
  32 |    console.log("New Employee Added");
  33 | }
  34 | 
  35 | //Delete empolyee
  36 | public async deleteempid() {
  37 |    const frame =this.page.frameLocator(this.frame_empinfo);
  38 |    await frame.locator(this.checkbox_selectempid).click();
  39 |    await frame.locator(this.button_delete).check();
  40 |    console.log("Employee Deleted Successfully");
  41 | }
  42 | 
  43 | //Wait For Timeout
  44 | public async waitTime(){
  45 |     await this.page.waitForTimeout(3000);
  46 | }
  47 | }
  48 | 
  49 | 
```