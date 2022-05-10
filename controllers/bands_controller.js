// DEPENDENCIES
const router = require('express').Router()
const db = require('../models')
const { Band } = db 
const { Op } = require('sequelize')



// FIND ALL BANDS
router.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`  }
            }
        })
        res.status(200).json(foundBands)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})


// UPDATE A BAND 
router.put('/:id', async (req, res) => {
    try {
        const updatedBands = await Band.update(req.body, {
            where: { band_id: req.params.id }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedBands} band(s)`
        })
    } catch(err) {
        console.log(error)
        res.status(500).json(err)
    }
})


// DELETE A BAND
router.delete('/:id', async (req, res) => {
    try {
        const deletedBands = await Band.destroy({
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedBands} band(s)`
        })
    } catch(err) {
        console.log(error)
        res.status(500).json(err)
    }
})





// EXPORT
module.exports = router
