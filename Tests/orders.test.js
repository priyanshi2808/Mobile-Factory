import createOrder from "../Services/createOrder.js";

describe("Mobile Factory Order", () => {
	test("should validate a valid order", () => {
		const components = ["A", "I", "D", "F", "K"];
		const result = {
			order_id: expect.any(Number),
			total: "142.30",
			parts: [
				"LED Screen",
				"Android OS",
				"Wide-Angle Camera",
				"USB-C Port",
				"Metallic Body",
			],
		};
		expect(createOrder(components)).toStrictEqual(result);
	});

	test("should throw an error for invalid component code", () => {
		const components = ["A", "I", "D", "X", "K"];
		const expectedError = { error: "Invalid component code" };
		expect(createOrder(components)).toStrictEqual(expectedError);
	});

	test("should throw an error for invalid order configuration", () => {
		const components = ["A", "I", "D", "K", "K"];
		const expectedError = { error: "Invalid order configuration" };
		expect(createOrder(components)).toStrictEqual(expectedError);
	});
});
