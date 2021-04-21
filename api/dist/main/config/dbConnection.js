"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const mysql_config_1 = __importDefault(require("@/main/config/mysql-config"));
const sequelize = new sequelize_1.Sequelize(mysql_config_1.default.DB, mysql_config_1.default.USER, mysql_config_1.default.PASSWORD, {
    host: mysql_config_1.default.HOST,
    dialect: 'mysql',
    pool: {
        max: mysql_config_1.default.pool.max,
        min: mysql_config_1.default.pool.min,
        acquire: mysql_config_1.default.pool.acquire,
        idle: mysql_config_1.default.pool.idle
    }
});
exports.sequelize = sequelize;
async function connectDB() {
    try {
        await sequelize.authenticate();
        sequelize.sync();
        console.log('Connection stablished sucessfuly');
    }
    catch (error) {
        console.error('Connection failed: ', error);
        throw new Error(error);
    }
}
connectDB();
//# sourceMappingURL=dbConnection.js.map