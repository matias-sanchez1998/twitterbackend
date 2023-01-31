import { TwitterApi } from "twitter-api-v2";
// import { Client } from "twitter-api-sdk";
import {
  BEARER,
  appKey,
  appSecret,
  accessToken,
  accessSecret,
} from "./config.js";

const client = new TwitterApi({
  appKey: appKey,
  appSecret: appSecret,
  accessToken: accessToken,
  accessSecret: accessSecret,
});

// const client = new Client(BEARER);

export const getMovements = async (req, res) => {
  try {
    const username = req.params.username;
    // const tweet = await client.users.findUserByUsername(username,{
    //     'user.fields': ["created_at","description","location","name","username","url","profile_image_url","public_metrics"]
    // });
    const tweet = await client.v2.userByUsername(username, {
      "user.fields": [
        "created_at",
        "description",
        "location",
        "name",
        "username",
        "url",
        "profile_image_url",
        "public_metrics",
      ],
    });
    console.log(tweet);
    res.json(tweet);
  } catch (error) {
    return res.status(500).json({
      message: "algo fallo",
    });
  }
};
