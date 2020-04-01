const Address = require('../models/Address');
const User = require('../models/User');


module.exports = {
    async store(req, res) {
        const { user_id } = req.params
        const { zipcode, number } = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({error: "User Not Found !"});
        }

        const address = await Address.create({ 
            zipcode, 
            number,
            user_id,
        });

        return res.json(address);
    },


}