const {Router} = require('express');
const router = Router();
const List = require('../models/todolist');

router.get('/', async (req, res) => {
    let myList = await List.find({ }) // search database for all lists
    let listArray = myList.map((list) => list.toObject());
    // console.log(listArray);

    res.render('delete', {listArray});
});

router.post('/', async(req,res)=>{
    console.log(req.body);
    let objectID = req.body.delete; // 
    console.log(objectID);
    let deleteItem = await List.findByIdAndDelete({_id: objectID});
    res.redirect('todolist');
    })

module.exports = router;