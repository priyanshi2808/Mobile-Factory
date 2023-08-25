# Mobile-Factory
# Mobile Factory Pvt Ltd. - Order Configuration Backend System

This project implements an order configuration system for Mobile Factory Pvt Ltd., where customers can configure mobile phones based on available components. The system validates the selected components and calculates the total price of the order.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Testing](#testing)

## Description

At Mobile Factory Pvt Ltd., customers can configure mobile phones by selecting various components, such as the screen type, camera type, port type, operating system, and body type. An order is considered valid only if it contains one and only one part from each category (Screen, Camera, Port, OS, and Body). The system calculates the total price of the order and provides error handling for invalid configurations.

## Features

- Configurable mobile order creation and calculation of total price
- Validation of valid order configurations
- Error handling for invalid component codes and order configurations

## Getting Started

1. Clone the repository by running the following command:
```
git clone https://github.com/your-username/OpenSource-Beginners.git
```
(Replace your-username with your GitHub username)

2. Navigate to the project directory : cd Mobile-Facory

3. Install the required dependencies : npm install
4. Run ```npm start``` to connect to the server 


## Usage

To create an order, make a POST request to the `api/orders` endpoint with the selected components in the request body. Example:

```json
POST api/orders
{
"components": ["A", "I", "D", "F", "K"]
}
Output
201
{
"order_id": "some-id",
"total": 142.3,
"parts": [
"LED Screen",
"Wide-Angle Camera",
"USB-C Port",
"Android OS",
"Metallic Body"
]
}
```
### Testing 
Run :
```npm test```
The testing of the API is done with the help of jest for the following cases :
- Valid input generating desired output
- Error for Invalid component code (e.g.: using code that is not described in the data)
- Error for Invalid order configuration (e.g. : using more than one item from the same category)




