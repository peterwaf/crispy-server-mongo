const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subscriberToChannel: { type: String, required: true },
    subscribedDate: { type: Date, requred: true, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscriber", subscriberSchema);
