import { urls } from "../API Agorz/url";
import { ModelsDemo,Payload,RequestPayload,AdditionalInformation } from "./Models";
import { BaseDemo } from "./baseDemo";

const basedemo = new BaseDemo()
const modeldemo = new ModelsDemo('hassan','100','24');

describe('Only for demo',()=>{

    it.only('https://dummy.restapiexample.com/api/v1/create',()=>{

        basedemo.callApi(modeldemo,urls.demoUrl).then((response)=>{
            expect(response.body).to.have.property('status','success')
            expect(response.body.data).to.have.property('Name',modeldemo.Name).to.have.length('6');
            cy.url('contains','api')
        });
    });

    it.only('Git TEst',()=>{

        basedemo.callApi(modeldemo,urls.demoUrl).then((response)=>{
            expect(response.body).to.have.property('status','success')
            expect(response.body.data).to.have.property('Name',modeldemo.Name).to.have.length('6');
            cy.url('contains','api')
        });
    });

    it.only('console log',()=>{
        const json = {
            "security": {
              "userName": "string",
              "password": "string",
              "securityToken": "string"
            },
            "account": {
              "msidn": "string",
              "iban": "string",
              "bban": "string",
              "pan": "string",
              "currency": "string"
            },
            "channel": "string",
            "terminal": "string",
            "reterivalReferenceNumber": "string",
            "payLoad": {
              "cnic": "3240245976765",
              "mobileNo": "03467199809"
            },
            "additionalInformation": [
              {
                "infoKey": "string",
                "infoValue": "string"
              }
            ],
            "checkSum": "string"
          };
          
          const payload = new Payload(json.payLoad.cnic, json.payLoad.mobileNo);
          const additionalInformation = json.additionalInformation.map(item => new AdditionalInformation(item.infoKey, item.infoValue));
          const requestPayload = new RequestPayload(json.security, json.account, json.channel, json.terminal, json.reterivalReferenceNumber, payload, additionalInformation, json.checkSum);
          
          console.log(JSON.stringify(requestPayload));
    })

    it('fix true',()=>{
      console.log('test')
    })

    it('fixtures',()=>{

        cy.fixture('example2.json').as('useme')
        cy.get('useme').then((response)=>{
          console.log(JSON.stringify(response))
        })
        let fix
        cy.fixture('example2.json').then((fixture) => {
           
            fix = fixture
            expect(fixture).to.have.property('security')

            //fixture.security.userName = 'test';
            // Use the data sets in your test
            //console.log(JSON.stringify(fixture));
            //cy.log(dataSet1.age.toString());
          
            //console.log(JSON.stringify(fixture));
            //cy.log(dataSet2.content);
          });
          console.log(JSON.stringify(fix))
    })


});