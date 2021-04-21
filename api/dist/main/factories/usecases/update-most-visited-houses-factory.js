"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbUpdateMostVisitedHouses = void 0;
const db_1 = require("@/infra/db");
const usecases_1 = require("@/data/usecases");
const makeDbUpdateMostVisitedHouses = () => {
    const housesMySQLRepository = new db_1.HouseResultMySQLRepository();
    return new usecases_1.DbUpdateMostVisitedHouses(housesMySQLRepository);
};
exports.makeDbUpdateMostVisitedHouses = makeDbUpdateMostVisitedHouses;
//# sourceMappingURL=update-most-visited-houses-factory.js.map