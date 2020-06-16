const {Router} = require('express');
const router = Router();
const User = require('../models/users');

router.get('/', async (req, res) => {
    res.render('index');
});

router.post('/', async (req, res) => {
    let { name, email, password } = req.body;
    // let existingEmail = await User.findOne({ email })
    // let existingUsername = await User.findOne({ name })

    // if (existingEmail || existingUsername){
    //     console.log('That already exists')
    //     let err = new Error(
    //         `${email} / ${name}: A user with that email or username already exists`
    //     )
    //     err.status = 400;
    //     console.log(err)

    //     res.render('index', {
    //         errorMessage: `${email} / ${name}: A user with that email or username already exists`
    //     });
    //     return;

    if (User.validateSignup(name, email)) {
        res.render('index', {
            errorMessage: 'A user with that email or username already exists'})
        return;
    }

    const user = new User({
        name, // name in the Schema
        email, // email in the Schema
        password // password in the Schema
    })

    await user.save();
    res.redirect('/');
})

module.exports = router;