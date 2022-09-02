import { Telegraf } from 'telegraf';
import config from 'config';

if(!config.has('bot_token'))
    throw new Error(''
    + 'Bot token is undefined!\n'
    + 'Probably you need to create a default.json config file\n'
    );

const token:string = config.get('bot_token');
const bot = new Telegraf(token);

export { bot }