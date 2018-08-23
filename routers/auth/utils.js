const { SENDGRID_API_KEY } = require("../../constants");
const { generateEmailTemplate } = require("./email-template");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(SENDGRID_API_KEY);

exports.sendEmail = async (email, name) => {
  const msg = {
    from: "phongduong@num10.space",
    to: email,
    subject: "Đăng nhập Num10 thành công",
    html: generateEmailTemplate(name)
  };

  return await sgMail.send(msg);
};
