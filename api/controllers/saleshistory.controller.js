import SalesHistory from "../models/saleshistory.modal.js";

// Create a new sales history record
export const createSalesHistory = async (req, res) => {
  try {
    const { categoryName, sales } = req.body;

    if (!categoryName || !Array.isArray(sales)) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const newSalesHistory = new SalesHistory({
      categoryName,
      sales,
    });

    const savedRecord = await newSalesHistory.save();
    return res.status(201).json(savedRecord);
  } catch (error) {
    console.error("Error creating sales history:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Get all sales history records
export const getSalesHistories = async (req, res) => {
  try {
    const histories = await SalesHistory.find().sort({ createdAt: -1 }); // optional: sort by latest
    return res.status(200).json(histories);
  } catch (error) {
    console.error("Error fetching sales histories:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
