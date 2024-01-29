const { Schema, model, default: message } = require("mongoose");

const contactSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = new model("Contact", contactSchema);
module.exports = Contact;
