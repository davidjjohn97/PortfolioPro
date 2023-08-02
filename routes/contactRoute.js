const router = require('express').Router()
const nodemailer = require('nodemailer')

router.post('/contact',(req,res)=>{
    let data = req.body
    if(data.name.length ===0 || data.email.length === 0 || data.message.length === 0) {
        return res.json({msg: "Please Fill All the Fields"})
    }

        let smtpTransporter = nodemailer.createTransport({
            service: 'Gmail',
            port:465,
            auth: {
                user: 'davidjjohn97@gmail.com',
                pass: 'gbxyjbmeimeagtsl'
            }
        })

        let mailOptions = {
            from: data.email,
            to: 'davidjjohn97@gmail.com',
            subject: `Message from Portfolio ${data.name}`,
            html: `
            <h3>Information<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message<h3/>
            <p>${data.message}<p/>
            `
        }

        smtpTransporter.sendMail(mailOptions, (error) => {
            try {
                if(error) return res.status(400).json({msg:"Please Fill all fields"})
                res.status(200).json({msg:"Thank you for reaching out !!! - David Johnson"})
            } catch (error) {
                console.log(error);
                if(error) return res.status(500).json({msg:"Ongoing Server Maintainence"})
            }
        })

})

module.exports=router