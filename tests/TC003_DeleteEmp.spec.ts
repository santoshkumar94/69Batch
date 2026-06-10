import {test} from '@playwright/test';
import {general} from '../lib/General';

test ('TC003_DeleteEmp', async({page}) =>{
const gen = new general(page);
await gen.openApplication();
await gen.login();
await gen.waitTime();
await gen.deleteempid();
await gen.waitTime();
await gen.logout();



})