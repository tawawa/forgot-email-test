var chai = require('chai');
var expect = require('chai').expect

const api = require('./../auth0-api/api');
require('dotenv').config()

describe('Auth0 API calls', function () {

  it.only('should send forgot password email', function (done) {

    // uncomment if using reverse proxy etc

    // if (process.env.NODE_ENV === "testing") {
    //   process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    //   process.env.AUTH0_DOMAIN = 'localhost:9001';
    // }

    this.timeout(5000);

    async function runTest() {
      try {
        const email = process.env.EMAIL_TO_TEST;
        const response = await api.sendForgotPasswordEmail(email);
        expect(response).to.eq("We've just sent you an email to reset your password.");
      } catch (e) {
        console.log(e);
        expect(true).to.be.false;
      } finally {
        done();
      }
    };

    runTest();

  });



});