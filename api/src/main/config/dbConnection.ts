import { Sequelize } from 'sequelize'
import dbConfig from '@/main/config/mysql-config'

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: 'mysql',
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
} )
async function connectDB() {
    try {
        await sequelize.authenticate()
        sequelize.sync()
        console.log('Connection stablished sucessfuly')
    } catch (error) {
        console.error('Connection failed: ', error)
        throw new Error(error)
    }
}

connectDB()

export { sequelize }