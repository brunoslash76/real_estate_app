"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadHousesByCityController = void 0;
const helpers_1 = require("@/presentation/helpers");
class LoadHousesByCityController {
    constructor(loadHousesByCity) {
        this.loadHousesByCity = loadHousesByCity;
    }
    async handle(request) {
        const { city } = request;
        try {
            const houses = await this.loadHousesByCity.loadByCity(city);
            return houses ? helpers_1.ok(houses) : helpers_1.noContent();
        }
        catch (error) {
            return helpers_1.serverError(error);
        }
    }
}
exports.LoadHousesByCityController = LoadHousesByCityController;
//# sourceMappingURL=load-houses-by-city-controller.js.map