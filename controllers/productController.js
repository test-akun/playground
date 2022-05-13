import Product from "../models/Product.js";

console.log(typeof Product)

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        console.log(typeof products)
        res.json(products)
    } catch (error) {
        // res.json({mesagge: error.mesagge})
        res.status(500).json({ message: error.message });
    }
}

// // function get single Product
// export const getProductById = async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         res.json(product);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }

// }

export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id)
    // if (!product) return res.status(404).json({ mesagge: 'Product Not Found'})
    try {
        // const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// function Create Product
export const saveProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}