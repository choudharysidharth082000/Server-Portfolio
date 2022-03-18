const mongoose = require('mongoose');

const {Schema} = mongoose;

const FormData = new Schema(
    {
       name:
       {
           type: String,
           required: true
       },
       email: 
       {
           type: String,
           required: true
       },  
       message:
       {
           type: String,
           required: true
       }
    

    },{timestamps: true}
)

const formData = mongoose.model("message", FormData);

exports.formData = formData;
