import express from "express";
import bodyParser from "body-parser";
import orders from "./Routes/orders.js";

const app = express();
app.use(bodyParser.json());

app.use("/api", orders);
app.use("/", (req, res) => {
	res.send("Server is Running");
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
