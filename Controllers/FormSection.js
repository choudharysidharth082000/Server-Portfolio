const {formData} = require('../Models/FormData');
const getFormData = async (req,res) =>
{
    const {name , message , email} = req.body;
    try {
        const postData = await new formData(
            {
                name: name,
                message: message,
                email: email
            }
        )
        if(!postData)
        {
            res.status(400).json(
                {
                    status: false,
                    message: "Message Not Posted"
                    
                }
            )
        }
        else{
            await postData.save();
            res.status(200).json(
                {
                    status: true,
                    message: 'Message Posted SuccessFully'
                }
            )
        }
        
    } catch (error) {
        res.send(error);
        
    }

}
module.exports = 
{
    getFormData
}