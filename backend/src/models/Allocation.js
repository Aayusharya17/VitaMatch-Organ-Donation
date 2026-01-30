const mongoose = require("mongoose");

const allocationSchema = new mongoose.Schema({
  organId: { type: mongoose.Schema.Types.ObjectId, ref: "DonatedOrgan" },
  requestId: { type: mongoose.Schema.Types.ObjectId, ref: "RequestedOrgan" },
  hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },

  status: {
    type: String,
    enum: [
      "PENDING_CONFIRMATION",
      "MATCHED",
      "REJECTED",
      "IN_TRANSIT",
      "TRANSPLANTED"
    ],
    default: "PENDING_CONFIRMATION"
  },

  matchScore: Number,
  hashSignature: String

}, { timestamps: true });

module.exports = mongoose.model("Allocation", allocationSchema);
