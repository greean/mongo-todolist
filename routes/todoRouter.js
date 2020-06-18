const {Router} = require('express');
const router = Router();
const List = require('../models/todolist');

router.get('/', async (req, res) => {
// Array for incomplete tasks 
    const myList = await List.find({ complete: false, }) 
    const listArray = myList.map((list) => list.toObject());

// Array for complete tasks
    const completeList = await List.find({ complete: true, }) 
    const completedArray = completeList.map((list) => list.toObject());

    res.render('todolist', {listArray, completedArray});
});

router.post('/', async (req, res) => {
    let { item, complete } = req.body;

    // CREATING ITEMS
    let existingItem = await List.findOne({ item });

    if (existingItem){
        let err = new Error(
            `${item}: That item is already on the list`
        )
        err.status = 400;
        console.log(err)

        res.render('todolist', {
            errorMessage: `${item}: That item is already on the list`
        });
        return;
    }

    const list = new List({ // key pairs in the Schema
        item,
        complete: false
    })

    await list.save(); // .save() to add an item || .remove to delete an item
    res.redirect('todolist');
})

module.exports = router;