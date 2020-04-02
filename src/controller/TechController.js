const Tech = require('../models/Tech');3
const User = require('../models/User');


module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { 
                association: 'techs',
                through: {
                    attributes: []
                }
            }
        });

        if(!user) {
            return res.status(400).json({error: "User not found"})
        }
        
       

        return res.json(user.techs);

    },
    async show(req, res) {

    },
    async store(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({error: "User not found"})
        }

        const [ tech ] = await Tech.findOrCreate({
            where: { name }
        });

        /**
         * Metodo addTech adiciona automaticamente dados na nossa tabela 
         * do relacionamento de usuarios com as tecnologias chamada de
         * tabela pivô
         */
        await user.addTech(tech);

        return res.json(tech);
    },
    async update(req, res) {

    },
    async delete(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({error: "User not found"})
        }

        const tech = await Tech.findOne({
            where: { name }
        });

        /**
         * este metodo não exclui a tecnologia e sim o relaciomento
         * do usuario com a tecnologia na table user_techs(tabela pivô),
         * mas a tecnologia continua criada na tabela techs.
         */
        await user.removeTech(tech);

        return res.json();
    },

}