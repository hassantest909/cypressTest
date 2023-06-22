export class headers {

    constructor() {
        this.headers = {};
      }
    
      set(headerName, headerValue) {
        this.headers[headerName] = headerValue;
        return this;
      }
    
      get() {
        return this.headers;
      }

}