const { App } = require("@slack/bolt")
const moment = require("moment")
require('dotenv').config()

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.APP_TOKEN
})
app.command("/datenow", async ({ command, ack, say }) => {
    try {
        await ack()
        // let txt = command.text
        // if (txt === "now") {
        //     date = moment().format()
        //     console.log(date)
        //     say(date)
        // } else {
        //     say("ok")
        // }
        date = moment().format()
        say(date)
    } catch (error) {
        console.log("err")
        console.error(error)
    }
})
app.command("/square", async ({ command, ack, say }) => {
    try {
        await ack()
        let txt = command.text
        if (isNaN(txt)) {
            say(txt + " is not a number")
        } else {
            say(txt + " squared = " + (parseFloat(txt) * parseFloat(txt)))
        }
    } catch (error) {
        console.log("err")
        console.error(error)
    }
})

app.start(process.env.PORT || 3000, () => {
    console.log('⚡️ Bolt app is running!')
});
