
import { Client } from "twitter-api-sdk";
import {APYKEY} from './config.js'

const client = new Client(APYKEY);



export const getMovements = async (req, res) => {
    try {
        const username = req.params.username;
        const tweet = await client.users.findUserByUsername(username,{
            'user.fields': ["created_at","description","location","name","username","url","profile_image_url","public_metrics"]
        });
        console.log(tweet);
      res.json(tweet);
    } catch (error) {
      return res.status(500).json({
        message: "algo fallo",
      });
    }
  };