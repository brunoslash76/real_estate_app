"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadHousesController = void 0;
const helpers_1 = require("@/presentation/helpers");
class LoadHousesController {
    constructor(loadHouses) {
        this.loadHouses = loadHouses;
    }
    async handle(request) {
        try {
            const houses = await this.loadHouses.load();
            return houses.length ? helpers_1.ok(houses) : helpers_1.noContent();
        }
        catch (error) {
            return helpers_1.serverError(error);
        }
    }
}
exports.LoadHousesController = LoadHousesController;
//# sourceMappingURL=load-houses-controller.js.map