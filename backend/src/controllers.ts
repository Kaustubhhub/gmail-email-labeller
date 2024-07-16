import axios from 'axios'
import createConfig from './utils'
// import nodemailer from 'nodemailer'
import * as constants from './constant'
import { google } from 'googleapis'
import * as dotenv from 'dotenv';
import { Request, Response } from 'express';
dotenv.config();

const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
)

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

export const getUser = async (req: Request, res: Response) => {
    try {
        const url = `https://gmail.googleapis.com/gmail/v1/users/${req.params.email}/profile`;
        const { token } = await oAuth2Client.getAccessToken();
        const config = createConfig(url, token!)
        const response = await axios(config);
        res.json(response.data)
    } catch (error) {
        res.send({ error })
    }
}

export const getUserDrafts = async (req: Request, res: Response) => {
    try {
        const url = `https://gmail.googleapis.com/gmail/v1/users/${req.params.email}/drafts`;
        const { token } = await oAuth2Client.getAccessToken();
        const config = createConfig(url, token!)
        const response = await axios(config);
        res.json(response.data)
    } catch (error) {
        console.log('error', error);
        res.send({ error })
    }
}

export const readMail = async (req: Request, res: Response) => {
    try {
        console.log('req.params.email', req.params.email);
        console.log('req.params.messageId', req.params.messageId);
        const url = `https://gmail.googleapis.com/gmail/v1/users/${req.params.email}/messages?${req.params.messageId}`;
        const { token } = await oAuth2Client.getAccessToken();
        const config = createConfig(url, token!)
        const response = await axios(config);
        let data =  await response.data;
        res.json(data)
    } catch (error) {
        res.send({ error })
    }
}

export const getMails = async (req: Request, res: Response) => {
    try {
        const url = `https://gmail.googleapis.com/gmail/v1/users/${req.params.email}/threads?maxResults=100`;
        const { token } = await oAuth2Client.getAccessToken();
        const config = createConfig(url, token!)
        const response = await axios(config);
        res.json(response.data)
    } catch (error) {
        console.log('error', error);
        res.send({ error })
    }
}

export const getLabels = async (req: Request, res: Response) => {
    try {
        const url = `https://gmail.googleapis.com/gmail/v1/users/${req.params.email}/labels`;
        const { token } = await oAuth2Client.getAccessToken();
        const config = createConfig(url, token!)
        const response = await axios(config);
        res.json(response.data)
    } catch (error) {
        console.log('error', error);
        res.send({ error })
    }
}
