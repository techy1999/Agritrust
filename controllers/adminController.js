const Farmer = require("../models/farmers");
const Farm= require("../models/farms");
const User = require('../models/users');
const adminService = require('../services/admin')

// Route to      => api/v1/admin/validate-data
// Validate the Json data in table
exports.validateData = async (req, res, next) => {
    adminService.validate(req)
    .then(response=>{
        res.json(response)
    })
    .catch(error=>{
        res.status(400).json({
            error:"failed operation",
            message: null,
            httpStatus:400,
            data:null
        })
    })
};

// Route to     => POST: api/v1/admin/farmer
// Create farmer 
exports.createFarmer = async (
    req,
    res,
    next
) => {

    adminService.createFarmer(req)
    .then(response=>{
        res.json(response)
    })
    .catch(error=>{
        res.status(400).json({
            error:"failed operation",
            message: null,
            httpStatus:400,
            data:null
        })
    })
};

// Route to      => POST: api/v1/admin/farm
// Create farm
exports.createFarm =  async (
    req,
    res,
    next
) => {
    adminService.createFarm(req)
    .then(response=>{
        res.json(response)
    })
    .catch(error=>{
        res.status(400).json({
            error:"failed operation",
            message: null,
            httpStatus:400,
            data:null
        })
    })
};

exports.getFarms= async (req, res, next) => {

    adminService.getFarms(req)
        .then(response=>{
            res.json(response)
        })
        .catch(error=>{
            res.status(400).json({
                error:"failed operation",
                message: null,
                httpStatus:400,
                data:null
            })
        })
}

// Route to     => GET: api/v1/admin/farmers
// Get the List of farmers
exports.getFarmers = async (req, res, next) => {

    adminService.getFarmers(req)
        .then(response=>{
            res.json(response)
        })
        .catch(error=>{
            res.status(400).json({
                error:"failed operation",
                message: null,
                httpStatus:400,
                data:null
            })
        })
}

// Route to     => api/v1/admin/company
// Create company
exports.createCustomer = async (
    req,
    res,
    next
) => {
    adminService.createCustomer(req)
    .then(response=>{
        res.json(response)
    })
    .catch(error=>{
        res.status(400).json({
            error:"failed operation",
            message: null,
            httpStatus:400,
            data:null
        })
    })
    
};

