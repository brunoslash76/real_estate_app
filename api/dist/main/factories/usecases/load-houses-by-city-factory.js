"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadHousesByCityFactory = void 0;
const db_1 = require("@/infra/db");
const usecases_1 = require("@/data/usecases");
const makeDbLoadHousesByCityFactory = () => {
    const houseMySQLRepository = new db_1.HouseResultMySQLRepository();
    return new usecases_1.DbLoadHousesByCity(houseMySQLRepository);
};
exports.makeDbLoadHousesByCityFactory = makeDbLoadHousesByCityFactory;
//# sourceMappingURL=load-houses-by-city-factory.js.map