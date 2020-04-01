module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '',
    database: 'sqlnode',
    define: {
        timestamps: true,
        //define que os nomes das tabelas sejam convertido para snake case
        underscored: true,
    }
};