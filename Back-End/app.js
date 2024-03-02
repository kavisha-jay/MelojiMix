const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Product = require('./models/productModel')
const Calm = require('./models/Calm')


app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.get('/blog', (req, res) =>{
    res.send('Hello blog my name is Kaveesha')
})

app.get('/product', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.get('/product/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
app.get('/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id, 'name'); // Only select the 'name' field
        res.status(200).json({ name: product.name }); // Send only the 'name' attribute in the response
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/product', async(req, res) =>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.post('/Calm', async(req, res) =>{
   try {
      const calm = await Calm.create(req.body);
      res.status(200).json(calm);
   } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
   }
})
//update a record in database
// app.put('/product/:id', async(req, res) =>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         //we cannot find any product in database
//         if(!product){
//             return res.status(404).json({message: `cannot find any product with ID ${id}`})
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

//Delete a product
app.delete('/product/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})




mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://admin:admin@melo.yh9pz2n.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Melo')
.then(() =>{
    console.log('connected to MongoDB');
    app.listen(5000, () => {
        console.log(`Node API app is running on port 5000`)
    });
   
}).catch(() => {
    console.log(error);
})