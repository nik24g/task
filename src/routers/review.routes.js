const express = require('express');
const router = express.Router();
const {getAllReviews, createReview, getReview, updateReview, deleteReview} = require("../controllers/review.controller")

router.get("/", async (req, res) => {
    try {
        const response = await getAllReviews(req)
        return res.status(response.code).json(response)
    } catch (error) {
        console.log(error);
        return res.status(500).json({})
    }
})

router.post("/new", async (req, res) => {
    try {
        const response = await createReview(req)
        return res.status(response.code).json(response)
    } catch (error) {
        console.log(error);
        return res.status(500).json({})
    }
})

router.get("/:id", async (req, res)=> {
    try {
        const response = await getReview(req)
        return res.status(response.code).json(response)
    } catch (error) {
        console.log(error);
        return res.status(500).json({})
    }
})

router.put("/update", async (req, res)=> {
    try {
        const response = await updateReview(req)
        return res.status(response.code).json(response)
    } catch (error) {
        console.log(error);
        return res.status(500).json({})
    }
})

router.delete("/:id", async (req, res)=> {
    try {
        const response = await deleteReview(req)
        return res.status(response.code).json(response)
    } catch (error) {
        console.log(error);
        return res.status(500).json({})
    }
})
module.exports = router;