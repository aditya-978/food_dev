const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://adiityajha651:Aditya18@cluster0.a27rwdc.mongodb.net/FoodDev?retryWrites=true&w=majority";

const mongoDb = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to the database');
        
        try {
            const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();
            global.food_items = fetchedData;
            // console.log(global.food_items);
            // console.log('Retrieved data:', fetchedData);
            const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
            global.foodCategory = foodCategory;
        } catch (error) {
            console.error('Error retrieving data:', error);
        }  
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};

module.exports = mongoDb;