import * as Sequelize from 'sequelize'
import { sequelize } from '../dbSequelize'

export const Product = sequelize.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    price: Sequelize.DECIMAL(10, 0)
}, {
    timestamps: false
})