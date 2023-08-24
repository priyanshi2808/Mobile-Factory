import { partData, partCategories } from "./../Data/partDetails.js";
export const createOrder = (components) => {
	const selectedParts = [];
	let totalPrice = 0;

	for (const component of components) {
		const part = getPartByCode(component);
		if (!part) {
			return { error: "Invalid component code" };
		}

		selectedParts.push(part);
		totalPrice += part.price;
	}

	const isValid = isValidOrder(selectedParts);
	if (!isValid) {
		return { error: "Invalid order configuration" };
	}

	const partNames = selectedParts.map((part) => part.part);

	return {
		order_id: generateOrderId(),
		total: totalPrice.toFixed(2),
		parts: partNames,
	};
};

const getPartByCode = (code) => {
	return partData.find((part) => part.code === code);
};

const isValidOrder = (selectedParts) => {
	const selectedCategories = {};

	for (const part of selectedParts) {
		const category = part.type;
		if (selectedCategories[category]) {
			return false;
		}
		selectedCategories[category] = true;
	}

	return Object.keys(partCategories).every(
		(category) => selectedCategories[category]
	);
};

let orderIdCounter = 0;
const generateOrderId = () => {
	return ++orderIdCounter;
};
