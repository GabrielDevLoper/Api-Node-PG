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
    }
}

module.exports = User;