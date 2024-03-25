const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Product = require('./models/productModel')
const Emotion = require('./models/Emotion')
const cors = require('cors')
const User = require('./models/User')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

//routes
app.post('/register', (req, res) =>{
    User.create(req.body)
    .then(Users => res.json(Users))
    .catch(err => res.json(err))
})

app.post("/login",(req, res) => {
    const {email, password} = req.body;
    User.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password == password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})



// app.get('/Emotion', async(req, res) =>{
//     try {
//         const emotion = await Emotion.find({});
//         res.status(200).json(emotion)
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })



// app.get('/Emotion', async (req, res) => {
//     try {
//         const emotion = await Emotion.aggregate([
//             { $match: { Emotion: '💪' } }, // Filter records with Emotion type 'calm'
//             { $sample: { size: 10 } } // Retrieve 10 random records
//         ]);
//         res.status(200).json(emotion);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


app.get('/Emotion', async (req, res) => {
    try {

      const { emotion } = req.query;
      console.log("Received Emotion:", emotion);
      if (!emotion) {
        return res.status(400).json({ message: 'Successfully pass the 10 song names.' });
      }
  
      const emotionSongs = await Emotion.aggregate([
        { $match: { Emotion: emotion } },
        { $sample: { size: 10 } }
      ]);
  
      res.status(200).json(emotionSongs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

  });
  
  
  
// Rest of your code...

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });



app.post('/Emotion', async(req, res) =>{
   try {
      const emotion = await Emotion.create(req.body);
      res.status(200).json(emotion);
   } catch (error) {
    console.log(error.message);
    res.status(200).json({message: error.message})
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