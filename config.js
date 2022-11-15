import {config} from 'dotenv';

config()

export const PORT = process.env.PORT
export const APYKEY = process.env.APIKEY
console.log(process.env.PORT);