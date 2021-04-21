"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadHousesByIdFactory = void 0;
const db_1 = require("@/infra/db");
const usecases_1 = require("@/data/usecases");
const makeDbLoadHousesByIdFactory = () => {
    const houseMySQLRepository = new db_1.HouseResultMySQLRepository();
    return new usecases_1.DbLoadHousesById(houseMySQLRepository);
};
exports.makeDbLoadHousesByIdFactory = makeDbLoadHousesByIdFactory;
//# sourceMappingURL=load-houses-by-id-factory.js.map