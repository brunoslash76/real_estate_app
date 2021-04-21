"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMostVisitedHousesController = void 0;
const helpers_1 = require("@/presentation/helpers");
class UpdateMostVisitedHousesController {
    constructor(updateMostVisited) {
        this.updateMostVisited = updateMostVisited;
    }
    async handle(request) {
        const { id } = request;
        try {
            const houses = await this.updateMostVisited.update(id);
            return houses.length ? helpers_1.ok(houses) : helpers_1.noContent();
        }
        catch (error) {
            return helpers_1.serverError(error);
        }
    }
}
exports.UpdateMostVisitedHousesController = UpdateMostVisitedHousesController;
//# sourceMappingURL=update-most-visited-houses-controller.js.map