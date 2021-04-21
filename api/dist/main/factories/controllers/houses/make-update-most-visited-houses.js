"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateHouseController = void 0;
const factories_1 = require("@/main/factories");
const controllers_1 = require("@/presentation/controllers");
const makeUpdateHouseController = () => {
    return new controllers_1.UpdateMostVisitedHousesController(factories_1.makeDbUpdateMostVisitedHouses());
};
exports.makeUpdateHouseController = makeUpdateHouseController;
//# sourceMappingURL=make-update-most-visited-houses.js.map