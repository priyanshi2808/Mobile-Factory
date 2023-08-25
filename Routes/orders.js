import { Router } from "express";
import createOrder from "../Services/createOrder.js";
const router = Router();

router.post("/orders", (req, res) => {
	const { components } = req.body;

	if (!components || !Array.isArray(components)) {
		return res.status(400).json({ error: "Invalid input format" });
	}

	const order = createOrder(components);

	res.status(201).json(order);
});

export default router;
