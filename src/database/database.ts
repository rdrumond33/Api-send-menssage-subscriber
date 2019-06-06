import { Sequelize } from "sequelize";

const DATA = "db_mensages_assinantes";
const USERNAME = 'root';
const PASSWORD = "";


const sequelize = new Sequelize(DATA, USERNAME, PASSWORD, {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    },
    logging: false
});

sequelize.sync({logging:true});

export default sequelize;