"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseResultMySQLRepository = void 0;
const dbConnection_1 = require("@/main/config/dbConnection");
const query_helper_1 = require("@/infra/db/mysql/house-repository/query-helper");
class HouseResultMySQLRepository {
    async loadMostVisited() {
        return await query_helper_1.mostVisitedQuery(dbConnection_1.sequelize);
    }
    async update(id) {
        return await query_helper_1.updateMostVisitedQuery(dbConnection_1.sequelize, id);
    }
    async loadAll() {
        return await query_helper_1.loadAllHousesQuery(dbConnection_1.sequelize);
    }
    async loadByZipcode(zipcode) {
        return await query_helper_1.loadHousesByZipcode(dbConnection_1.sequelize, zipcode);
    }
    async loadByNeighborhood(neighborhood) {
        return await query_helper_1.loadHousesByNeighborhood(dbConnection_1.sequelize, neighborhood);
    }
    async loadById(id) {
        return await query_helper_1.loadHousById(dbConnection_1.sequelize, id);
    }
    async loadByCity(city) {
        return await query_helper_1.loadHousesByCity(dbConnection_1.sequelize, city);
    }
}
exports.HouseResultMySQLRepository = HouseResultMySQLRepository;
//# sourceMappingURL=house-repository.js.map