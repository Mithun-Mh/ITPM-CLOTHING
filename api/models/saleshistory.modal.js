import mongoose from "mongoose";

const salesHistorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true },
    sales: [
      {
        month: {
          type: String,
          required: true,
        },
        sale: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

const SalesHistory = mongoose.model("SalesHistory", salesHistorySchema);

export default SalesHistory;
