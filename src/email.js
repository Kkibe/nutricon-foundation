import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
	user: 'user',
	password: 'password',
	host: 'smtp.your-email.com',
	ssl: true,
});


export const handleSend = (text, ) => {
    const message = {
        text: text,
        from: 'kkibetkkoir@gmail.com',
        to: 'coongames8@gmail.com, byronechacha@gmail.com',
        cc: 'kkibetkkorir@gmail.com',
        subject: 'testing emailjs',
        attachment: [
            { data: '<html>i <i>hope</i> this works!</html>', alternative: true },
            { path: 'src/assets/logo.png', type: 'image/png', name: 'renamed.png' },
        ],
    };
    
    // send the message and get a callback with an error or details of the message that was sent
    client.send(message, function (err, message) {
        console.log(err || message);
    });
}

// you can continue to send more messages with successive calls to 'client.send',
// they will be queued on the same smtp connection

