const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
app.use('/assets', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    const userAgent = req.headers['user-agent']
    switch(userAgent){
        /*Send the correct content according User-Agent */
        case 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)':
        case 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)':
        case 'LinkedInBot/1.0 (compatible; Mozilla/5.0; Jakarta Commons-HttpClient/3.1 +http://www.linkedin.com)':
        case 'Twitterbot':
            return res.render('headers-for-bots')
        default:
            return res.render('index')
    }
})

app.listen(port, ()=>console.log(`The website is running on port ${port}`))