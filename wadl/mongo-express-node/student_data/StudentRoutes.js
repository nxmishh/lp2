const express = require('express')
const router = express.Router()
const {getAllStudentData,addData,getStudentsMarksgtDSBDA,updateMarks} = require('./StudentController')

router.get('/',getAllStudentData)
router.get('/dsbdagreaterthan25/',getStudentsMarksgtDSBDA)
router.post('/',addData)
router.post('/updatemarks',updateMarks)

module.exports = router