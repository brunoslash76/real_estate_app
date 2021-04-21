"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadHousesByCityController = void 0;
const factories_1 = require("@/main/factories");
const controllers_1 = require("@/presentation/controllers");
const makeLoadHousesByCityController = () => {
    return new controllers_1.LoadHousesByCityController(factories_1.makeDbLoadHousesByCityFactory());
};
exports.makeLoadHousesByCityController = makeLoadHousesByCityController;
//# sourceMappingURL=make-load-houses-by-zipcode.js.map