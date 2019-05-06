const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

// Body Parser //
router.use(bodyParser.json());

// Nodemailer //
const nodeMailer = require("nodemailer");
const transport = nodeMailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ea8df2375fce62",
    pass: "0dab1d1915d7b2"
  }
});

router.get("/", (req, res) => {
  res.render("main");
});

router.post("/send", (req, res) => {
  const message = {
    from: req.body.contactEmail,
    to: "gustavoilhamorais@gmail.com",
    subject: req.body.messageSubject,
    text: req.body.message
  };

  transport.sendMail(message, (error, info) => {
    if (error) {
      return res
        .status(400)
        .send(`Was not possible to deliver the message. ${error}`);
    }
    return res.status(200).send("Message was succefully sent.");
  });

  res.redirect("/");
});

module.exports = router;
