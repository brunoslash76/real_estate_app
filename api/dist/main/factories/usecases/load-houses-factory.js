"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadHouses = void 0;
const db_1 = require("@/infra/db");
const usecases_1 = require("@/data/usecases");
const makeDbLoadHouses = () => {
    const housesMySQLRepository = new db_1.HouseResultMySQLRepository();
    return new usecases_1.DbLoadHouses(housesMySQLRepository);
};
exports.makeDbLoadHouses = makeDbLoadHouses;
//# sourceMappingURL=load-houses-factory.js.map