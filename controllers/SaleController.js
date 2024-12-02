import { registerSale } from "../services/SaleService.js";

export const createSale = async (req, res) => {
  try {
    const sale = await registerSale(req.body);
    return res.status(201).json(sale);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
