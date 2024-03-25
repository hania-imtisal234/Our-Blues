/* eslint-disable camelcase */
const axios = require("axios");

const account_Id = "6ExqyNZ9SauUkdMpFXln9g";
const clientId = "wFEeFgHPSVCwH9kc6ofC2A";
const clientSecret = "vGhGjk1f1YB1Eo03EapCnnzVj6zgP5XW";
const auth_token_url = "https://zoom.us/oauth/token";
const api_base_url = "https://api.zoom.us/v2";

async function createMeeting(topic, duration, start_time) {
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

    const payload = {
      topic: topic,
      duration: duration,
      start_time: start_time,
      type: 2,
    };

    const meetingResponse = await axios.post(
      `${api_base_url}/users/me/meetings`,
      payload,
      { headers }
    );

    if (meetingResponse.status !== 201) {
      console.log("Unable to generate meeting link");
      return null;
    }

    const response_data = meetingResponse.data;

    const content = {
      meetLink: response_data.join_url,
      password: response_data.password,
      meetingTime: response_data.start_time,
      purpose: response_data.topic,
      duration: response_data.duration,
      meetingId: response_data.id,
      message: "Success",
      status: 1,
    };

    console.log(content);
    return content;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = { createMeeting };
