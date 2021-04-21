import { Sequelize, QueryTypes } from 'sequelize'

export const loadAllHousesQuery = async (sequelize: Sequelize): Promise<any[]> => {
    const partialResult = await sequelize.query(
        `
        select houses.id, homeImage, type, yearBuilt, heating, parking, lot, stories, price, beds, baths, neighborhood, address, city, zipcode, available, anualTax, hasGarage, pool, virtualTourLink, parcelNumber, lastSold, total, lastVisited from houses 
        join facts on facts.houseId = houses.id
        join overviews on overviews.houseId = houses.id
        join others on others.houseId = houses.id
        join visits on visits.houseId = houses.id;
        `,
        {
            type: QueryTypes.SELECT
        }
    )

    return composeLoadImages(sequelize, partialResult, 4)
}

export const mostVisitedQuery = async (sequelize: Sequelize) => {
    return await sequelize.query(
        `
        select id, homeImage,
        (select total from visits where houseId = houses.id) as total_visits,
        (select price from overviews where houseId = houses.id) as price 
        from houses order by total_visits desc limit 5;
        `,
        {
            type: QueryTypes.SELECT
        }
    )
}

export const updateMostVisitedQuery = async (sequelize: Sequelize, id: number) => {
    await sequelize.query(
        `
            update visits set total = total + 1 where houseId = ?;
        `, 
        {
            type: QueryTypes.UPDATE,
            replacements: [id]
        }
    )
    return await mostVisitedQuery(sequelize)
}

export const loadHousesByCity = async (sequelize: Sequelize,  value: string) => {
    const query = `
        select houseId as id, price, beds, baths, neighborhood, address, city, zipcode, available, 
        (select homeImage from houses where id = overviews.houseId) as homeImage
        from overviews where overviews.city like ?;
    `

    const parcialResult = await sequelize.query(
        query,
        {
            type: QueryTypes.SELECT,
            replacements: [`%${value}%`]
        }
    )
    return composeLoadImages(sequelize, parcialResult, 4)
}

export const loadHousesByNeighborhood = async (sequelize: Sequelize, value: string) => {
    const query = `
        select houseId as id, price, beds, baths, neighborhood, address, city, zipcode, available, 
        (select homeImage from houses where id = overviews.houseId) as homeImage
        from overviews where overviews.neighborhood like ?;
    `

    const parcialResult = await sequelize.query(
        query,
        {
            type: QueryTypes.SELECT,
            replacements: [`%${value}%`]
        }
    )
    return composeLoadImages(sequelize, parcialResult, 4)
}

export const loadHousesByZipcode = async (sequelize: Sequelize, value: string) => {
    const query = `
        select houseId as id, price, beds, baths, neighborhood, address, city, zipcode, available, 
        (select homeImage from houses where id = overviews.houseId) as homeImage
        from overviews where overviews.zipcode = ?;
    `

    const parcialResult = await sequelize.query(
        query,
        {
            type: QueryTypes.SELECT,
            replacements: [value]
        }
    )
    return composeLoadImages(sequelize, parcialResult, 4)
}

export const loadHousById = async (sequelize: Sequelize, id: number) => {
    const parcialResult = await sequelize.query(
        `
            select houses.id, homeImage, type, yearBuilt, heating, parking, lot, stories, price, beds, baths, neighborhood, address, city, zipcode, available, anualTax, hasGarage, pool, virtualTourLink, parcelNumber, lastSold, total, lastVisited 
            from houses
            join facts on facts.houseId = houses.id
            join overviews on overviews.houseId = houses.id
            join others on others.houseId = houses.id
            join visits on visits.houseId = houses.id
            where houses.id = ?;
        `,
        {
            type: QueryTypes.SELECT,
            replacements: [id]
        }
    )
    return composeLoadImages(sequelize, parcialResult, 6)
}

const loadImagesQuery = async (sequelize: Sequelize, houseId: number, limit: number) => {
    return await sequelize.query(
        `
            select image from images where houseId = ? limit ? 
        `,
        {
            type: QueryTypes.SELECT,
            replacements: [houseId, limit]
        }
    )
}

const composeLoadImages = async (sequelize: Sequelize, array: Array<any>, limit: number) => {
    const result = await Promise.all(
        array.map(
            async (res) => {
                const houseImages = await loadImagesQuery(sequelize, res.id, limit)
                return Object.assign(res, { images: houseImages} )
            }
        )
    )

    return result
}
