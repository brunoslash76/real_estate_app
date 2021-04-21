"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadMostVisitedHouseController = void 0;
const factories_1 = require("@/main/factories");
const controllers_1 = require("@/presentation/controllers");
const makeLoadMostVisitedHouseController = () => {
    console.log('entrou aqui');
    return new controllers_1.LoadMostVisitedHousesController(factories_1.makeDbLoadMostVisitedHouses());
};
exports.makeLoadMostVisitedHouseController = makeLoadMostVisitedHouseController;
//# sourceMappingURL=make-load-most-visited-houses.js.map