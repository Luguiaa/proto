import Commerce from '@chec/commerce.js';

const commerce = new Commerce('{public_api_key}');

export const fetchProducts = _ => {
    commerce.products.list().then((product) => return product);
};