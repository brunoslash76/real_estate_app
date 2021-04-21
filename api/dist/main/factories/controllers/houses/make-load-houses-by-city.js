"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadHousesByZipcodeController = void 0;
const factories_1 = require("@/main/factories");
const controllers_1 = require("@/presentation/controllers");
const makeLoadHousesByZipcodeController = () => {
    return new controllers_1.LoadHousesByZipcodeController(factories_1.makeDbLoadHouseByZipcodeFactory());
};
exports.makeLoadHousesByZipcodeController = makeLoadHousesByZipcodeController;
//# sourceMappingURL=make-load-houses-by-city.js.map