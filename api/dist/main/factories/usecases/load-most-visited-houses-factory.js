"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadMostVisitedHouses = void 0;
const db_1 = require("@/infra/db");
const usecases_1 = require("@/data/usecases");
const makeDbLoadMostVisitedHouses = () => {
    const housesMySQLRepository = new db_1.HouseResultMySQLRepository();
    return new usecases_1.DbLoadMostVisitedHouses(housesMySQLRepository);
};
exports.makeDbLoadMostVisitedHouses = makeDbLoadMostVisitedHouses;
//# sourceMappingURL=load-most-visited-houses-factory.js.map