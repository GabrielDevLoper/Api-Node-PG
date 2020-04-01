const { Model, DataTypes } = require('sequelize');

class Address extends Model{
    static init(sequelize) {
        super.init({
            zipcode: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }

    static associate(models) {
        //relacionamento de 1:N, um para muitos
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
    }
}

module.exports = Address;