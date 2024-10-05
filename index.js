import express from 'express';
const app = express();

const port = 3000;


app.use(express.json());


let shoppingData = [];
let nextId = 1;

// on separate postman tab do the post request
// POST / ADD AN ITEM 
app.post('/shopping-list', (req, res) => { 
    // req.body.name

    // destructuring from req.body object 
    const { name, category, price, quantity, expiryDate } = req.body;

    // create an object in the database
    const newItem = { id: nextId++, name, category, price, quantity, expiryDate };
    // in postman
    // {
    //     "name": "basil",
    //     "category": "herb",
    //     "price": "1.00",
    //     "quantity": "1",
    //     "expiryDate": "2024-10-17"
    // }
    shoppingData.push(newItem);
    res.status(201).json(newItem);

})

// on separate postman tab do get request
// get all the items in the shopping list
app.get('/shopping-list', (req, res) => {
    res.status(200).send(shoppingData);
   
})


// get one item with an id
app.get('/shopping-list/:id', (req, res) => {

    const id = Number(req.params.id);
    // .find - first element in the array

    const item = shoppingData.find(item => item.id === id);
    if (item) {
        res.status(200).json(item);
    } else {
        res.status(404).send(`Item with id ${id} not found`);
    }
})


// UPDATE an item

app.put('/shopping-list/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = shoppingData.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).send(`Item with id ${id} not found`);
    }

    const updatedItem = {...req.body, id };
    shoppingData[index] = updatedItem;

    res.status(200).json(updatedItem);
})



// DELETE

app.delete('/shopping-list/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = shoppingData.findIndex(item => item.id === id);
    
    if (index === -1) {
        return res.status(404).send(`Item with id ${id} not found`);
    } else {
        shoppingData.splice(index, 1);
        res.status(204).send(`Item with id ${id} deleted`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});