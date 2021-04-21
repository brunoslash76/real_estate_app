"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadHousById = exports.loadHousesByZipcode = exports.loadHousesByNeighborhood = exports.loadHousesByCity = exports.updateMostVisitedQuery = exports.mostVisitedQuery = exports.loadAllHousesQuery = void 0;
const sequelize_1 = require("sequelize");
const loadAllHousesQuery = async (sequelize) => {
    const partialResult = await sequelize.query(`
        select houses.id, homeImage, type, yearBuilt, heating, parking, lot, stories, price, beds, baths, neighborhood, address, city, zipcode, available, anualTax, hasGarage, pool, virtualTourLink, parcelNumber, lastSold, total, lastVisited from houses 
        join facts on facts.houseId = houses.id
        join overviews on overviews.houseId = houses.id
        join others on others.houseId = houses.id
        join visits on visits.houseId = houses.id;
        `, {
        type: sequelize_1.QueryTypes.SELECT
    });
    return composeLoadImages(sequelize, partialResult, 4);
};
exports.loadAllHousesQuery = loadAllHousesQuery;
const mostVisitedQuery = async (sequelize) => {
    return await sequelize.query(`
        select id, homeImage,
        (select total from visits where houseId = houses.id) as total_visits,
        (select price from overviews where houseId = houses.id) as price 
        from houses order by total_visits desc limit 5;
        `, {
        type: sequelize_1.QueryTypes.SELECT
    });
};
exports.mostVisitedQuery = mostVisitedQuery;
const updateMostVisitedQuery = async (sequelize, id) => {
    await sequelize.query(`
            update visits set total = total + 1 where houseId = ?;
        `, {
        type: sequelize_1.QueryTypes.UPDATE,
        replacements: [id]
    });
    return await exports.mostVisitedQuery(sequelize);
};
exports.updateMostVisitedQuery = updateMostVisitedQuery;
const loadHousesByCity = async (sequelize, value) => {
    const query = `
        select houseId as id, price, beds, baths, neighborhood, address, city, zipcode, available, 
        (select homeImage from houses where id = overviews.houseId) as homeImage
        from overviews where overviews.city like ?;
    `;
    const parcialResult = await sequelize.query(query, {
        type: sequelize_1.QueryTypes.SELECT,
        replacements: [`%${value}%`]
    });
    return composeLoadImages(sequelize, parcialResult, 4);
};
exports.loadHousesByCity = loadHousesByCity;
const loadHousesByNeighborhood = async (sequelize, value) => {
    const query = `
        select houseId as id, price, beds, baths, neighborhood, address, city, zipcode, available, 
        (select homeImage from houses where id = overviews.houseId) as homeImage
        from overviews where overviews.neighborhood like ?;
    `;
    const parcialResult = await sequelize.query(query, {
        type: sequelize_1.QueryTypes.SELECT,
        replacements: [`%${value}%`]
    });
    return composeLoadImages(sequelize, parcialResult, 4);
};
exports.loadHousesByNeighborhood = loadHousesByNeighborhood;
const loadHousesByZipcode = async (sequelize, value) => {
    const query = `
        select houseId as id, price, beds, baths, neighborhood, address, city, zipcode, available, 
        (select homeImage from houses where id = overviews.houseId) as homeImage
        from overviews where overviews.zipcode = ?;
    `;
    const parcialResult = await sequelize.query(query, {
        type: sequelize_1.QueryTypes.SELECT,
        replacements: [value]
    });
    return composeLoadImages(sequelize, parcialResult, 4);
};
exports.loadHousesByZipcode = loadHousesByZipcode;
const loadHousById = async (sequelize, id) => {
    const parcialResult = await sequelize.query(`
            select houses.id, homeImage, type, yearBuilt, heating, parking, lot, stories, price, beds, baths, neighborhood, address, city, zipcode, available, anualTax, hasGarage, pool, virtualTourLink, parcelNumber, lastSold, total, lastVisited 
            from houses
            join facts on facts.houseId = houses.id
            join overviews on overviews.houseId = houses.id
            join others on others.houseId = houses.id
            join visits on visits.houseId = houses.id
            where houses.id = ?;
        `, {
        type: sequelize_1.QueryTypes.SELECT,
        replacements: [id]
    });
    return composeLoadImages(sequelize, parcialResult, 6);
};
exports.loadHousById = loadHousById;
const loadImagesQuery = async (sequelize, houseId, limit) => {
    return await sequelize.query(`
            select image from images where houseId = ? limit ? 
        `, {
        type: sequelize_1.QueryTypes.SELECT,
        replacements: [houseId, limit]
    });
};
const composeLoadImages = async (sequelize, array, limit) => {
    const result = await Promise.all(array.map(async (res) => {
        const houseImages = await loadImagesQuery(sequelize, res.id, limit);
        return Object.assign(res, { images: houseImages });
    }));
    return result;
};
//# sourceMappingURL=query-helper.js.map