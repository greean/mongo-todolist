const {Router} = require('express');
const router = Router();
const List = require('../models/todolist');

router.get('/', async (req, res) => {
    let myList = await List.find({ }) // search database for all lists
    let listArray = myList.map((list) => list.toObject());
    // console.log(listArray);

    res.render('todolist', {listArray});
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