"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.Visits = exports.Others = exports.Facts = exports.Overview = exports.House = void 0;
const sequelize_1 = require("sequelize");
const dbConnection_1 = require("@/main/config/dbConnection");
class House extends sequelize_1.Model {
}
exports.House = House;
class Overview extends sequelize_1.Model {
}
exports.Overview = Overview;
class Facts extends sequelize_1.Model {
}
exports.Facts = Facts;
class Others extends sequelize_1.Model {
}
exports.Others = Others;
class Visits extends sequelize_1.Model {
}
exports.Visits = Visits;
class Image extends sequelize_1.Model {
}
exports.Image = Image;
House.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    homeImage: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    }
}, {
    tableName: 'houses',
    sequelize: dbConnection_1.sequelize
});
Overview.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    houseId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    beds: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    baths: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    neighborhood: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    address: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    city: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    zipcode: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    available: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
}, {
    tableName: 'overviews',
    sequelize: dbConnection_1.sequelize
});
Facts.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    houseId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    yearBuilt: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    heating: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    parking: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    lot: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    stories: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'facts',
    sequelize: dbConnection_1.sequelize
});
Others.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    houseId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    anualTax: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    hasGarage: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    pool: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    virtualTourLink: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    parcelNumber: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    lastSold: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    }
}, {
    tableName: 'others',
    sequelize: dbConnection_1.sequelize
});
Visits.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    houseId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    lastVisited: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
}, {
    tableName: 'visits',
    sequelize: dbConnection_1.sequelize
});
Image.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    houseId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    image: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
}, {
    tableName: 'images',
    sequelize: dbConnection_1.sequelize
});
Overview.belongsTo(House, { targetKey: 'id' });
House.hasOne(Overview, {
    sourceKey: 'id',
    foreignKey: 'houseId',
});
Facts.belongsTo(House, { targetKey: 'id' });
House.hasOne(Facts, {
    sourceKey: 'id',
    foreignKey: 'houseId',
});
Others.belongsTo(House, { targetKey: 'id' });
House.hasOne(Others, {
    sourceKey: 'id',
    foreignKey: 'houseId',
});
Visits.belongsTo(House, { targetKey: 'id' });
House.hasOne(Visits, {
    sourceKey: 'id',
    foreignKey: 'houseId',
});
Image.belongsTo(House, { targetKey: 'id' });
House.hasMany(Image, {
    sourceKey: 'id',
    foreignKey: 'houseId',
});
//# sourceMappingURL=house-db-model.js.map