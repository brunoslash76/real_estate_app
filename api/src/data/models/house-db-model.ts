import { Association, DataTypes, Model } from 'sequelize'
import { sequelize } from '@/main/config/dbConnection'

export class House extends Model {
    public id!: number
    public homeImage!: string

    public readonly createdAt!: Date
    public readonly updatedAt!: Date

    public readonly overview?: Overview
    public readonly facts?: Facts
    public readonly others?: Others
    public readonly visits?: Visits
    public readonly images?: Image[]

    public static associtations: {
        overview: Association<House, Overview>,
        facts: Association<House, Facts>,
        others: Association<House, Others>,
        visits: Association<House, Visits>,
        image: Association<House, Image>
    }
}

export class Overview extends Model {
    public id!: number
    public houseId!: number
    public price!: string
    public beds!: number
    public baths!: number
    public neighborhood!: string
    public address!: string
    public city!: string
    public zipcode!: number
    public available!: boolean

    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

export class Facts extends Model {
    public id!: number
    public houseId!: number
    public type!: string
    public yearBuilt!: number
    public heating!: string
    public parking!: string
    public lot!: string
    public stories!: number

    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

export class Others extends Model {
    public id!: number
    public houseId!: number
    public anualTax!: number
    public hasGarage!: boolean
    public pool!: boolean
    public virtualTourLink!: string
    public parcelNumber!: number
    public lastSold!: string

    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

export class Visits extends Model {
    public id!: number
    public houseId!: number
    public total!: number
    public lastVisited!: string

    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

export class Image extends Model {
    public id!: number
    public houseId!: number
    public image!: string
}

House.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        homeImage: {
            type: DataTypes.STRING(128),
            allowNull: false
        }
    },
    {
        tableName: 'houses',
        sequelize
    }
)

Overview.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        houseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        beds: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        baths: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        neighborhood: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        address: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        city: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        zipcode: {
            type: DataTypes.INTEGER,
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    },
    {
        tableName: 'overviews',
        sequelize
    }
)

Facts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        houseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        yearBuilt: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        heating: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        parking: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        lot: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        stories: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'facts',
        sequelize
    }
)

Others.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        houseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        anualTax: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hasGarage: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        pool: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        virtualTourLink: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        parcelNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        lastSold: {
            type: DataTypes.STRING(128),
            allowNull: false,
        }
    },
    {
        tableName: 'others',
        sequelize
    }
)
Visits.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        houseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        lastVisited: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
    },
    {
        tableName: 'visits',
        sequelize
    }
)

Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        houseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
    },
    {
        tableName: 'images',
        sequelize
    }
)

Overview.belongsTo(House, { targetKey: 'id' })
House.hasOne(Overview, {
    sourceKey: 'id',
    foreignKey: 'houseId',
})

Facts.belongsTo(House, { targetKey: 'id' })
House.hasOne(Facts, {
    sourceKey: 'id',
    foreignKey: 'houseId',
})

Others.belongsTo(House, { targetKey: 'id' })
House.hasOne(Others, {
    sourceKey: 'id',
    foreignKey: 'houseId',
})

Visits.belongsTo(House, { targetKey: 'id' })
House.hasOne(Visits, {
    sourceKey: 'id',
    foreignKey: 'houseId',
})

Image.belongsTo(House, { targetKey: 'id' })
House.hasMany(Image, {
    sourceKey: 'id',
    foreignKey: 'houseId',
})

