const express = require("express")
const noteModel = require("./models/notes.mdel")

const app = express()
app.use(express.json())
const notes = [ ]


app.post("/notes" , async (req,res) =>{
   
      const { title , description } = req.body

      const note = await noteModel.create({
        title , description
      })

    res.status(201).json({
        message:"note created successfully",
        note
    })  
   
})

 /* app.get("/notes" , async ( req,res) => {
    const notes = await noteModel.find()

    res.status(200).json({
     message : "notes fetched succesfully",
     notes
    }
        
    )
}) */

app.put("/notes/description/:description" , async ( req,res) => {
    const notes = await noteModel.updateOne({
        description:req.params.description
    },{
      title : req.body.title
});

    res.status(200).json({
        message:"note updated successfully",
        notes
    });
})

app.delete("/notes/:id" , async ( req,res)=>{
      await noteModel.findByIdAndDelete(req.params.id);

     res.json({
        message:"deleted"
     })
})

app.get("/notes/title/:title" , async ( req, res) => {
    const notes = await noteModel.findOne({
        title: req.params.title
    })
    res.json(notes)
})




module.exports = app 