var request = require("request");
require('dotenv').config()

  const sendForgotPasswordEmail = (email) => {

    console.log(`sending password reset for: ${email}`);

    return new Promise((resolve, reject) => {

      var options = {
        method: 'POST',
        url: `https://${process.env.AUTH0_DOMAIN}/dbconnections/change_password`,
        headers: {
          'content-type': 'application/json'
        },
        body: {
          client_id: process.env.AUTH0_CLIENT_ID,
          email: email,
          connection: process.env.AUTH0_CONNECTION
        },
        json: true
      };

      request(options, function (error, response, body) {
        if (error || !(response.statusCode + '').startsWith("2")) {
          console.log("Failed to send forgot password email.");
          return reject(error);
        }
        console.log(body);
        return resolve(body);
      });

    });

  }


module.exports = {
  sendForgotPasswordEmail
}

