"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadHousesByIdController = void 0;
const helpers_1 = require("@/presentation/helpers");
class LoadHousesByIdController {
    constructor(loadHousesById) {
        this.loadHousesById = loadHousesById;
    }
    async handle(request) {
        const { id } = request;
        try {
            const houses = await this.loadHousesById.loadById(id);
            return houses ? helpers_1.ok(houses) : helpers_1.noContent();
        }
        catch (error) {
            return helpers_1.serverError(error);
        }
    }
}
exports.LoadHousesByIdController = LoadHousesByIdController;
//# sourceMappingURL=load-houses-by-id-controller.js.map