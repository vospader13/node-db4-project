const express = require('express');

const db = require('./recipes-model');

const router = express.Router();

router.get("/", (req, res) => {
    db.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get recipes" });
    })
})

router.get("/:id/shoppingList", (req, res) => {
    db.getShoppingList(req.params.id)
    .then(shoppingList => {
        res.json(shoppingList)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get recipes" });
    })
})

router.get("/:id/instructions", (req, res) => {
    db.getInstructions(req.params.id)
    .then(instructions => {
        res.json(instructions)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get recipes" });
    })
})



module.exports = router;