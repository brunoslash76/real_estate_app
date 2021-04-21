"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadHousesByNeighborhoodController = void 0;
const factories_1 = require("@/main/factories");
const controllers_1 = require("@/presentation/controllers");
const makeLoadHousesByNeighborhoodController = () => {
    return new controllers_1.LoadHousesByNeighborhoodController(factories_1.makeDbLoadHouseByNeighborhood());
};
exports.makeLoadHousesByNeighborhoodController = makeLoadHousesByNeighborhoodController;
//# sourceMappingURL=make-load-houses-by-neighborhood.js.map