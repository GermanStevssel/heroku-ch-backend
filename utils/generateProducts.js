import faker from "faker";

faker.locale = "es";

const generateFakeProduct = () => {
	return {
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		thumbnail: faker.image.image(),
	};
};

const getFakeProducts = (quantity) => {
	const products = [];
	for (let i = 0; i < quantity; i++) {
		products.push(generateFakeProduct());
	}
	return products;
};

export default getFakeProducts;
