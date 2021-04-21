"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@/main/adapters");
const factories_1 = require("@/main/factories");
exports.default = (router) => {
    router.get('/house-details/:id', adapters_1.adaptRoute(factories_1.makeLoadHousesByIdController()));
    router.get('/houses', adapters_1.adaptRoute(factories_1.makeLoadHouseController()));
    router.get('/most-visited', adapters_1.adaptRoute(factories_1.makeLoadMostVisitedHouseController()));
    router.put('/update-most-visited', adapters_1.adaptRoute(factories_1.makeUpdateHouseController()));
    router.post('/houses-by-zipcode', adapters_1.adaptRoute(factories_1.makeLoadHousesByZipcodeController()));
    router.post('/houses-by-city', adapters_1.adaptRoute(factories_1.makeLoadHousesByCityController()));
    router.post('/houses-by-neighborhood', adapters_1.adaptRoute(factories_1.makeLoadHousesByNeighborhoodController()));
};
//# sourceMappingURL=houses-routes.js.map