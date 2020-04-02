const { Model, DataTypes } = require('sequelize');

class Tech extends Model{
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize,
            tableName:'techs'
        })
    }

    static associate(models) {
        /**
         * sempre que tiver relacionamentos de muitos para muitos (N:N)
         * nós iremos utilizar o 'belongsToMany'
         * que no caso se encaixa com o relacionamento de 'usuarios podem saber
         * mais de uma tecnologia e uma tecnologia pode ter varios usuarios'
         * 
         * o paramentro 'through' é o nome da tabela que nos iremos guardar os 
         * dados do nosso relacionamento.
         * 
         * o paramentro 'as' significa quais usuarios sabem esta tencnologia.
         */
        this.belongsToMany(models.User, {foreignKey:'tech_id', through: 'user_techs', as:'users'})
    }
}

module.exports = Tech;