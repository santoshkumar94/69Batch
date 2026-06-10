//To Provide Test Data & objects / elements releated to whole application

import {Page, test} from '@playwright/test';
export class global{
    constructor(public page:Page){
        this.page=page;
    }

//Test Data
public url:string = "https://ctcorphyd.com/SureshIT/login.php";
public username: string ="sureshit";
public password: string ="sureshit";
public emp_firstname: string = "Santosh";
public emp_lastname: string = "Kumar";
public empid_searchfor: string = "5699";


//Objects / Elements
public textbox_loginname = "//input[@name='txtUserName']";
public textbox_password = "//input[@name='txtPassword']";
public button_login = "//input[@type='Submit']";
public link_logout = "//a[text()='Logout']";
public frame_empinfo = "//iframe[@id='rightMenu']";
public button_add = "//input[@value='Add']";
public textbox_empfirstname = "//input[@name='txtEmpFirstName']";
public textbox_emplastname = "//input[@name='txtEmpLastName']";
public button_save = "//input[@value='Save']";
public dropdown_searchby = "//select[@name='loc_code']"
public textbox_searchfor ="//input[@name='loc_name']";
public button_search = "//input[@value='Search']";
public checkbox_select ="//input[@name='allCheck']";
public button_delete ="//input[@value='Delete']";
}
