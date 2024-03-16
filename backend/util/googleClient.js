const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const getClient = () => {
  const oAuth2Client = new OAuth2("CLIENT_ID", "CLIENT_SECRET", "REDIRECT_URI");

  return oAuth2Client;
};

module.exports = { getClient };
