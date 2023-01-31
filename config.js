import {config} from 'dotenv';

config()

export const PORT = process.env.PORT
export const BEARER = process.env.BEARER
export const appKey = process.env.appKey
export const appSecret = process.env.appSecret
export const accessToken = process.env.accessToken
export const accessSecret = process.env.accessSecret
