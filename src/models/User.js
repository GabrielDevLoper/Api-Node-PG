const { Model, DataTypes } = require('sequelize');

class User extends Model{
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            
        }, {
            sequelize
        })
    }

    static associate(models) {
        //um usuario tem muitos endereços = hasMany
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses'});
        /**
         * sempre que tiver relacionamentos de muitos para muitos (N:N)
         * nós iremos utilizar o 'belongsToMany'
         * que no caso se encaixa com o relacionamento de 'usuarios podem saber
         * mais de uma tecnologia e uma tecnologia pode ter varios usuarios'
         * 
         * o paramentro 'through' é o nome da tabela que nos iremos guardar os 
         * dados do nosso relacionamento.
         * 
         * paramentro 'as' significa quais as tecnologias do usuario.
         */
        this.belongsToMany(models.Tech, {foreignKey:'user_id', through: 'user_techs', as:'techs'})
    }
}

module.exports = User;