import {test} from "@playwright/test";
import {general} from "../lib/General";

test('TC002_Addempolyee', async({page}) =>{
//Test Steps
const gen = new general(page);
await gen.openApplication();
await gen.login();
await gen.waitTime();
await gen.addNewEmployee();
await gen.waitTime();
await gen.logout();
//await waitForTimeout(3000);

}
);