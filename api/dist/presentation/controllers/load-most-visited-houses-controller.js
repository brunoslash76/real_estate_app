"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadMostVisitedHousesController = void 0;
const helpers_1 = require("@/presentation/helpers");
class LoadMostVisitedHousesController {
    constructor(updateMostVisited) {
        this.updateMostVisited = updateMostVisited;
    }
    async handle(request) {
        try {
            const houses = await this.updateMostVisited.loadMostVisited();
            return houses.length ? helpers_1.ok(houses) : helpers_1.noContent();
        }
        catch (error) {
            return helpers_1.serverError(error);
        }
    }
}
exports.LoadMostVisitedHousesController = LoadMostVisitedHousesController;
//# sourceMappingURL=load-most-visited-houses-controller.js.map