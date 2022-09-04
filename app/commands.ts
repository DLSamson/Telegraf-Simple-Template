import { bot } from './bot';

bot.command('/start', (ctx) => {
    ctx.reply('This is simple-telegraf-template bot!') 
});