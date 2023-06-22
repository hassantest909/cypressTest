export class RequestBaseClass{

    requestOAuth(url) {
        return cy.request({
            method: 'POST',
            form:true,
            url: url,
            body: {
                "client_id":"cy.test",
                "client_secret":"8785559410621d932f6c0d4cc60f36dd",
                "grant_type":"client_credentials"
            }
        }).then((response) => {
            return response
        });
    }

    GetAPICall(header,url) {
        cy.log(JSON.stringify(header))
        return cy.request({
            method: 'GET',
            url: url,
            headers:header
        }).then((response) => {
            return response
        });
    }

    postAPICall(header,url) {
        cy.log(JSON.stringify(header))
        return cy.request({
            method: 'POST',
            url: url,
            headers:header
        }).then((response) => {
            return response
        });
    }

     
}