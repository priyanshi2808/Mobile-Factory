export const partData = [
	{ code: "A", price: 10.28, part: "LED Screen", type: "Screen" },
	{ code: "B", price: 24.07, part: "OLED Screen", type: "Screen" },
	{ code: "C", price: 33.3, part: "AMOLED Screen", type: "Screen" },
	{ code: "D", price: 25.94, part: "Wide-Angle Camera", type: "Camera" },
	{
		code: "E",
		price: 32.39,
		part: "Ultra-Wide-Angle Camera",
		type: "Camera",
	},
	{ code: "F", price: 18.77, part: "USB-C Port", type: "Port" },
	{ code: "G", price: 15.13, part: "Micro-USB Port", type: "Port" },
	{ code: "H", price: 20.0, part: "Lightning Port", type: "Port" },
	{ code: "I", price: 42.31, part: "Android OS", type: "OS" },
	{ code: "J", price: 45.0, part: "iOS OS", type: "OS" },
	{ code: "K", price: 45.0, part: "Metallic Body", type: "Body" },
	{ code: "L", price: 30.0, part: "Plastic Body", type: "Body" },
];

export const partCategories = {
	Screen: ["A", "B", "C"],
	Camera: ["D", "E"],
	Port: ["F", "G", "H"],
	OS: ["I", "J"],
	Body: ["K", "L"],
};
