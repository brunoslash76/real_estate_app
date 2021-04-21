"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadHousesByNeighborhoodController = void 0;
const helpers_1 = require("@/presentation/helpers");
class LoadHousesByNeighborhoodController {
    constructor(loadHousesByNeighborhood) {
        this.loadHousesByNeighborhood = loadHousesByNeighborhood;
    }
    async handle(request) {
        const { neighborhood } = request;
        try {
            const houses = await this.loadHousesByNeighborhood.loadByNeighborhood(neighborhood);
            return houses ? helpers_1.ok(houses) : helpers_1.noContent();
        }
        catch (error) {
            return helpers_1.serverError(error);
        }
    }
}
exports.LoadHousesByNeighborhoodController = LoadHousesByNeighborhoodController;
//# sourceMappingURL=load-houses-by-neighborhood-controller.js.map