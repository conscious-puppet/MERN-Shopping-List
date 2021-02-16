const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

const jwtSecret = process.env.jwtSecret;

// Item Model
const User = require('../../models/User');

// @route  POST api/users
// @desc   Register new user
// @access Public
router.post('/', (req, res) => {
  const { name, email, password } = req.body;


  // Simple Validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if (user) return res.status(400).json({ msg: 'User already exists' });

      const newUser = new User({
        name,
        email,
        password
      });

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {


              jwt.sign(
                {
                  id: user.id,
                },
                jwtSecret,
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) throw err;

                  res.json({
                    token,
                    user: {
                      id: user.id,
                      name: user.name,
                      email: user.email
                    }
                  });


                }
              );


            });
        });
      });

    });


});

// // @route  POST api/items
// // @desc   Create an Item
// // @access Public
// router.post('/', (req, res) => {
//   const newItem = new Item({
//     name: req.body.name
//   });

//   newItem.save()
//     .then(item => res.json(item))
//     .catch(err => res.status(400).json(err));
// });

// // @route PATCH api/items/:id
// // @desc Update an item
// // @access Public
// router.patch('/:id', (req, res) => {
//   id = req.params.id;
//   Item.updateOne({ _id: id }, {
//     $set: req.body
//   })
//     .then(item => res.json(item))
//     .catch(err => res.status(400).json(err));
// });


// // @route  DELETE api/items/:id
// // @desc   Delete an Item
// // @access Public
// router.delete('/:id', (req, res) => {
//   Item.findById(req.params.id)
//     .then(item => item.remove())
//     .then(() => res.json({ success: true }))
//     .catch(err => res.status(404).json({ err: 'Item not found' }));
// });


module.exports = router;