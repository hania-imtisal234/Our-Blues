/* eslint-disable camelcase */
const axios = require("axios");

const account_Id = "6ExqyNZ9SauUkdMpFXln9g";
const clientId = "wFEeFgHPSVCwH9kc6ofC2A";
const clientSecret = "vGhGjk1f1YB1Eo03EapCnnzVj6zgP5XW";
const auth_token_url = "https://zoom.us/oauth/token";
const api_base_url = "https://api.zoom.us/v2";

async function updateMeetingHost(meetingId, newHostEmail) {
  try {
    const authResponse = await axios.post(auth_token_url, null, {
      params: {
        grant_type: "account_credentials",
        account_id: account_Id,
      },
      auth: {
        username: clientId,
        password: clientSecret,
      },
    });

    if (authResponse.status !== 200) {
      console.log("Unable to get access token");
      return null;
    }

    const access_token = authResponse.data.access_token;

    const headers = {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    };

    const response = await axios.patch(
      `${api_base_url}/meetings/${meetingId}`,
      {
        schedule_for: newHostEmail,
      },
      {
        headers,
      }
    );

    console.log("Meeting updated successfully", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating the meeting", error.response.data);
    return null;
  }
}
module.exports = { updateMeetingHost };
