const express = require('express')
const studentModel = require('./Students')

const getAllStudentData = async (req, res) => {
    try {
        const data = await studentModel.find({});
        if (data.length === 0) {
            res.status(400).json({totalCount: data.length, message: "no data found" });
        } else {
            res.status(200).json({totalCount:data.length, data: data });
        }
    } catch (e) {
        res.status(500).json({ message: "internal server error" });
    }
};

const getStudentsMarksgtDSBDA = async(req,res)=>{
    try {
        const students = await studentModel.find({ DSBDA_Marks: { $gt: 25 } });
        const studentNames = students.map(student => student.Name);
        res.status(200).json({ studentsWithMoreThan25MarksInDSBDA: studentNames });
    } catch (e) {
        res.status(500).json({ message: "Internal server error" });
    }
}

const addData = async (req,res)=>{
    try{
        const data = await studentModel.create({...req.body})
        res.status(200).send({message:"entry added successfully",data})
    }
    catch(e){
        res.status(404).json({message: "internal server error"});
    }
}

const updateMarks = async (req, res) => {
    try {
        // Specify the criteria to identify the students whose marks need to be updated
        const criteria = { Roll_No: { $in: req.body.rollNumbers } };

        // Update the marks by 10 for the specified students
        const result = await studentModel.updateMany(criteria, { $inc: { DSBDA_Marks: 10 } });

        res.status(200).json({ message: "Marks updated successfully", result: result });
    } catch (e) {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {getAllStudentData,addData,getStudentsMarksgtDSBDA,updateMarks}