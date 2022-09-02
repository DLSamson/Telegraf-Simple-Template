import { bot } from './bot';

bot.command('/start', (ctx) => {
    ctx.reply('Hello World') 
});