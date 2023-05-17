export class BaseDemo {
    callApi(requestModel, url) {
        return cy.request({
            method: 'POST',
            url: url,
            body: requestModel
        }).then((response) => {
            return response
        });
    }
}