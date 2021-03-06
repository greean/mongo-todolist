const {Router} = require('express');
const router = Router();
const List = require('../models/todolist');

router.get('/', async (req, res) => {
    let myList = await List.find({ }) // search database for all lists
    let listArray = myList.map((list) => list.toObject());
    // console.log(listArray);

    res.render('update', {listArray});
});

router.post('/', async (req, res) => {
    let { item, complete } = req.body;

    // DELETING ITEMS
    let itemExists = await List.findOneAndUpdate({ item });

    if (!itemExists){
        let err = new Error(
            `${item}: That item does not exist`
        )
        err.status = 400;
        console.log(err)

        res.render('update', {
            errorMessage: `${item}: That item does not exist`
        });
        return;
    }

    const list = new List({ // key pairs in the Schema
        item,
        complete: false
    })

    await list.update(); // .save() to add an item || .remove to delete an item
    res.redirect('update');
})

module.exports = router;