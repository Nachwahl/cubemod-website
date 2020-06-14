const configuration = {
  paymentMethodsResponse: JSON.parse('{"groups":[{"name":"Credit Card","types":["visa","mc","amex"]}],"paymentMethods":[{"name":"PayPal","supportsRecurring":true,"type":"paypal"},{"brands":["visa","mc","amex"],"details":[{"key":"encryptedCardNumber","type":"cardToken"},{"key":"encryptedSecurityCode","type":"cardToken"},{"key":"encryptedExpiryMonth","type":"cardToken"},{"key":"encryptedExpiryYear","type":"cardToken"},{"key":"holderName","optional":true,"type":"text"}],"name":"Kreditkarte","type":"scheme"},{"name":"Sofort.","supportsRecurring":true,"type":"directEbanking"},{"name":"Rechnung mit Klarna.","supportsRecurring":true,"type":"klarna"},{"name":"Paysafecard","supportsRecurring":true,"type":"paysafecard"},{"details":[{"key":"bic","optional":true,"type":"text"}],"name":"GiroPay","supportsRecurring":true,"type":"giropay"}]}'), // The `/paymentMethods` response from the server.
  originKey: "pub.v2.8015893939251760.aHR0cDovL2xvY2FsaG9zdDo0MjAw.hd-g_Ew5H4UbVFayD6N9v-wIG5IUP8ZkjIVIObiert0",
  locale: "de-DE",
  environment: "test",
  onSubmit: (state, component) => {
    handleSubmission(state, component, "http://localhost:8080/api/initiatePayment")
  },
  onAdditionalDetails: (state, component) => {
    handleSubmission(state, component, "http://localhost:8080/api/submitAdditionalDetails")
  },
  paymentMethodsConfiguration: {
    card: {
      showPayButton: true,
      hasHolderName: true,
      holderNameRequired: true,
      name: "Kredit- oder Debitkarte",
      amount: {
        value: 1000,
        currency: "EUR"
      }
    }
  }
};

const checkout = new AdyenCheckout(configuration);
const dropin = checkout.create('dropin').mount('#dropin-container');

function callServer(url, data) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

function handleServerResponse(res, dropin) {
  if (res.action) {
    dropin.handleAction(res.action);
  } else {
    switch (res.resultCode) {
      case "Authorised":
        window.location.assign = "/success";
        break;
      case "Pending":
        window.location.assign = "/pending";
        break;
      case "Refused":
        window.location.assign = "/failed";
        break;
      default:
        window.location.assign = "/error";
        break;
    }
  }
}

function handleSubmission(state, component, url) {
  callServer(url, state.data)
    .then(res => handleServerResponse(res, component))
    .catch(error => {
      throw Error(error);
    });
}



