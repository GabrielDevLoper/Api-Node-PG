const User = require('../models/User');
const { Op } = require('sequelize');

module.exports = {
    async show(req, res) {
        //Encontrar todos os usuários que tem email que termina com @rocketseat.com.br
        //Desses usuários quero buscar todos que moram na rua "Rua Santa Maria"
        //Desses usuários quero buscar as tecnologias que começam com React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    //buscar por todos os emails q terminam com @rocketseat.com.br
                    [Op.iLike]: '%@rocketseat.com.br'
                }, 
            },
            //Relacionamentos
            include: [
                { association: 'addresses', where: { street: 'Rua Santa Maria'} }, //endereçoes
                { 
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    }
                } //tecnologias
            ]   
        });

        return res.json(users);
    }
}