import { type NextRequest, NextResponse } from "next/server";
import { mailOptions, transporter } from "../../../../config/nodemailer";
interface PropsEmail {
  name: string;
  message: string;
  email: string;
}

const generateEmailContent = ({ name, message, email }: PropsEmail) => {
  return {
    text: "Contact website",
    html: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" lang="en">
       <head><link rel="stylesheet" type="text/css" hs-webfonts="true" href="https://fonts.googleapis.com/css?family=Lato|Lato:i,b,bi">
       <title>Email template</title>
       <meta property="og:title" content="Email template">
       <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <style type="text/css">
  
  h1 {
    font-size: 56px;
  }
    h2{
    font-size: 28px;
    font-weight: 900; 
  }
  
  p {
    font-weight: 100;
  }
  
  td {
vertical-align: top;
  }
  
  #email {
    margin: auto;
    width: 600px;
    background-color: white;
  }
</style>
</head>
<body bgcolor="#F5F8FA" style="width: 100%; margin: auto 0; padding:0; font-family:Lato, sans-serif; font-size:18px; color:#33475B; word-break:break-word">      
<div id="email">
  <table role="presentation" width="100%">
    <tr>
    <td bgcolor="#0A1629" align="center" style="color: white;">
      <h3 style="font-size:28px"> WEBSITE FORM </h3>
    </td>
  </table>
  <table role="presentation" bgcolor="#EAF0F6" width="100%" >
   <tr>
      <td style="padding: 30px 30px;">
        <p style="font-weight:bold"> Nom & prénom: <span style="font-weight:normal">${name}</span></p>
        <p style="font-weight:bold"> Email: <span style="font-weight:normal"> ${email} </span></p>
        <p style="font-weight:bold"> Messages: <span style="font-weight:normal"> ${message} </span></p>
      </td>
    </tr>
   </table>
  </div>
  </body>
</html>`,
  };
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const data = JSON.parse(body);
  if (!data || !data.name || !data.email || !data.subject || !data.message) {
    NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(
        {
          ...mailOptions,
          ...generateEmailContent({
            email: data["email"],
            message: data["message"],
            name: data["name"],
          }),
          subject: data["subject"],
        },
        function (err) {
          if (!err) {
            resolve("Email sent");
          } else {
            reject(err.message);
          }
        }
      );
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err: any) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
