"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadHousesByIdController = void 0;
const factories_1 = require("@/main/factories");
const controllers_1 = require("@/presentation/controllers");
const makeLoadHousesByIdController = () => {
    return new controllers_1.LoadHousesByIdController(factories_1.makeDbLoadHousesByIdFactory());
};
exports.makeLoadHousesByIdController = makeLoadHousesByIdController;
//# sourceMappingURL=make-load-houses-by-id.js.map