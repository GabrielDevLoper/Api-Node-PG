const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },
    async store(req, res){
        const { name, email } = req.body;

        const user = await User.create({
            name,
            email
        });

        return res.json(user);
    },
    async destroy(req, res) {
        const { id } = req.params;
        const user = await User.destroy({
            where: {
                id,
            }
        });

        if(!user){
            return res.json({message: "User Not found!"})
        }

        return res.json();

    },
}