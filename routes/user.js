const express = require("express");

const router = new express.Router;

//Routes

router.get("/", async(req,res) => {
    const allDbUsers = await User.find({}); 
    return res.json(allDbUsers);
});

router.route("/:id")

.get(async(req,res)=>{
    const user = await User.findById(req.params.id); 
    return res.json(user);
})
.patch(async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id, { lastName: "Kaushik"});
    return res.json({status : "Success"});
    
})
.delete(async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
        return res.json({status : "Success"});
    
});

router.post("/", async(req,res)=>{
    const body = req.body;
    if(
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.jobTitle 
    ) { return res.status(400).json({ msg: "All fields are req..." }); }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle,
    });

    return res.status(201).json({msg: "Success"});
    
});

module.exports = router;