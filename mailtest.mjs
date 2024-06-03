import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: 'athena.it53.nl',
  port: 587
})

transport.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take our messages')
  }
})

async function main () {
  const info = await transport.sendMail({
    from: 'website@hengeloserevue.nl',
    to: 'remco@remcohendriksen.nl',
    text: '<b>Helle world!</b>',
    subject: 'Test subject'
  })

  console.log('Message sent: %s', info.messageId)
}

main().catch(console.error)
