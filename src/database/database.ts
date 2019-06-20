import { Sequelize } from "sequelize";


// Coneccao com bando do heroku
const URI = "postgres://aqbumuordtkrdp:6407a66a52a83abcd2fce84dfa64f162fcbe7f9e4e19ca917881688be2f6d513@ec2-54-83-36-37.compute-1.amazonaws.com:5432/dajbhe6ba7p44d"

const sequelize = new Sequelize(URI);
/*
// coneccao local 
const DATA = "db_mensages_assinantes";
const USERNAME = 'postgres';
const PASSWORD = "root";

const sequelize = new Sequelize(DATA, USERNAME, PASSWORD, {
    host: "localhost",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    },
    logging: false
});
*/


sequelize.sync({force:true});

export default sequelize;