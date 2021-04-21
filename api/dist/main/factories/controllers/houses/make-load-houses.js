"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadHouseController = void 0;
const factories_1 = require("@/main/factories");
const controllers_1 = require("@/presentation/controllers");
const makeLoadHouseController = () => {
    return new controllers_1.LoadHousesController(factories_1.makeDbLoadHouses());
};
exports.makeLoadHouseController = makeLoadHouseController;
//# sourceMappingURL=make-load-houses.js.map