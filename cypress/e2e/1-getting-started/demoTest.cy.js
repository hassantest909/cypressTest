import { urls } from "../API Agorz/url";
import { ModelsDemo } from "./Models";
import { BaseDemo } from "./baseDemo";

const basedemo = new BaseDemo()
const modeldemo = new ModelsDemo('hassan','100','24');

describe('Only for demo',()=>{

    it('https://dummy.restapiexample.com/api/v1/create',()=>{

        basedemo.callApi(modeldemo,urls.demoUrl).then((response)=>{
            expect(response.body).to.have.property('status','success')
            expect(response.body.data).to.have.property('Name',modeldemo.Name).to.have.length('6');
            cy.url('contains','api')
        });
    });

});