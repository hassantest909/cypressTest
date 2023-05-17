export class ModelsDemo {

    constructor(name, salary, age) {
        this.Name = name;
        this.Salary = salary;
        this.Age = age;
    }
}

export class RequestPayload {
    constructor(security, account, channel, terminal, retrievalReferenceNumber, payload, additionalInformation, checkSum) {
      this.security = security;
      this.account = account;
      this.channel = channel;
      this.terminal = terminal;
      this.retrievalReferenceNumber = retrievalReferenceNumber;
      this.payload = payload;
      this.additionalInformation = additionalInformation;
      this.checkSum = checkSum;
    }
  }
  
  export class Payload {
    constructor(cnic, mobileNo) {
      this.cnic = cnic;
      this.mobileNo = mobileNo;
    }
  }
  
  export class AdditionalInformation {
    constructor(infoKey, infoValue) {
      this.infoKey = infoKey;
      this.infoValue = infoValue;
    }
  }