
import { Client } from "twitter-api-sdk";
import { bearer } from "./secrets.js";

const client = new Client(bearer);



export const getMovements = async (req, res) => {
    try {
        const username = req.params.username;
        const tweet = await client.users.findUserByUsername(username,{
            'user.fields': ["created_at","description","location","name","username","url","profile_image_url","public_metrics"]
        });

      res.json(tweet);
    } catch (error) {
      return res.status(500).json({
        message: "algo fallo",
      });
    }
  };