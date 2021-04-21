"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadHouseByNeighborhood = void 0;
const db_1 = require("@/infra/db");
const usecases_1 = require("@/data/usecases");
const makeDbLoadHouseByNeighborhood = () => {
    const housesMySQLRepository = new db_1.HouseResultMySQLRepository();
    return new usecases_1.DbLoadHousesByNeighorhood(housesMySQLRepository);
};
exports.makeDbLoadHouseByNeighborhood = makeDbLoadHouseByNeighborhood;
//# sourceMappingURL=load-houses-by-neighborhood-factory.js.map