/// <reference types="cypress" />

import { NodeForgeCrypto } from "../../utils/nodeForge";
import { urlsTest } from "./ApiEndPoints";
import { RequestBaseClass } from "./BaseAuth2";
import { headers } from "./Models/headerModel";


const requestBaseClass = new RequestBaseClass();
let token = '';
let userId = '';
let header;

describe('OAuth2.o Testcases', () => {
    before(() => {
        requestBaseClass.requestOAuth(urlsTest.token).then((response) => {
            console.log(response.body.access_token)
            token = response.body.access_token;

            header = new headers().set('Authorization', 'Bearer ' + token);
            requestBaseClass.GetAPICall(header.get(), urlsTest.myProfile).then((response) => {
                expect(response).to.have.property('status', 200)
                expect(response.body).to.have.property('id', "4532")
                userId = response.body.id
            })
        })
    })

    it('Unlock the Barn	', () => {
        requestBaseClass.postAPICall(header.get(), urlsTest.baseUrlSec+userId+urlsTest.unlockTheBarn).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.have.property('action', "barn-unlock")
            expect(response.body).to.have.property('success', true)
            cy.log(JSON.stringify(response))

        })
    })

    it('Verify that toilet seat is down', () => {
        requestBaseClass.postAPICall(header.get(), urlsTest.baseUrlSec+userId+urlsTest.putToiletSeatDown).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.have.property('action', "toiletseat-down")
            expect(response.body).to.have.property('success', true)
            cy.log(JSON.stringify(response))

        })
    })

    it('Verity that the chickens are fead', () => {
        requestBaseClass.postAPICall(header.get(), urlsTest.baseUrlSec+userId+urlsTest.feedYourChickens).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.have.property('message', 'Your chickens are now full and happy')
            expect(response.body).to.have.property('success', true)
            cy.log(JSON.stringify(response))
        })
    })

    
    it.only('encrypt and decrypt response',()=>{
        const dataToEncrypt = 'Hello, World!';
        const secretKey = '30e40938634e494591a22cd35cb8195f';
        const crypto = new NodeForgeCrypto()
        const encData = crypto.encryptData(dataToEncrypt,secretKey)
        console.log(encData)
    })

})