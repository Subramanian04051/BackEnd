var http = require('http');
var nodemailer = require('nodemailer');
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form method="POST">');
  res.write('<label for="email">Enter the email address of the recipient:</label>');
  res.write('<input type="email" id="email" name="email" placeholder="eg:abc@example.com" required><br>');
  res.write('<label for="message">Enter the message content:</label>');
  res.write('<textarea id="message" name="message" required></textarea><br>');
  res.write('<button type="submit">Send</button>');
  res.write('</form>');

  if (req.method === '/') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const formData = new URLSearchParams(body);
      const email = formData.get('email');
      const message = formData.get('message');
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${email}`,
          pass: `krishpraveen1150`
        }
      });
      
      var mailOptions = {
        from: `${email}`,
        to: `${email}`,
        subject: 'Sending Email using Node.js',
        text: `${message}` 
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log(`Email: ${email}, Message: ${message}`);
      res.end('<h1>Message sent successfully!</h1>');
          //console.log('Email sent: ' + info.response);
        }
      });
      
      
    });
  }
}).listen(4200);
