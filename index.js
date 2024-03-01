const express = require('express');

const {connectToMongoDB} = require('./connections');

const urlRoute = require('./routes/url');

const URL = require('./models/url');

const app = express();

app.use(express.json());

const PORT = 3000;

connectToMongoDB('mongodb+srv://jnuiteashutosh:9119%40Ias@cluster0.cydm6fw.mongodb.net/short-url').then(()=> console.log('MongoDB connection established'));

app.use("/url" , urlRoute);

app.get('/:shortId' , async(req, res) => {

    const shortId = req.params.shortId;

  const entry =  await URL.findOneAndUpdate({
        shortId
    } , { 
          $push : 
          {
             visitHistory :
                 {
                    timestamp : Date.now(),
                 }
        }
});

if(!entry) return res.status(400).json({error : "Invalid Short ID"});

res.redirect(entry.redirectUrl);

})

app.listen(PORT , ()=> console.log(`Server listening on PORT: ${PORT}`));



