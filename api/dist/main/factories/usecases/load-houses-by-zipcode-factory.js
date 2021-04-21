"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadHouseByZipcodeFactory = void 0;
const db_1 = require("@/infra/db");
const usecases_1 = require("@/data/usecases");
const makeDbLoadHouseByZipcodeFactory = () => {
    const housesMySQLRepository = new db_1.HouseResultMySQLRepository();
    return new usecases_1.DbLoadHousesByZipcode(housesMySQLRepository);
};
exports.makeDbLoadHouseByZipcodeFactory = makeDbLoadHouseByZipcodeFactory;
//# sourceMappingURL=load-houses-by-zipcode-factory.js.map