"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadHousesByZipcodeController = void 0;
const helpers_1 = require("@/presentation/helpers");
class LoadHousesByZipcodeController {
    constructor(loadHousesByZipcode) {
        this.loadHousesByZipcode = loadHousesByZipcode;
    }
    async handle(request) {
        const { zipcode } = request;
        try {
            const houses = await this.loadHousesByZipcode.loadByZipcode(zipcode);
            return houses.length ? helpers_1.ok(houses) : helpers_1.noContent();
        }
        catch (error) {
            return helpers_1.serverError(error);
        }
    }
}
exports.LoadHousesByZipcodeController = LoadHousesByZipcodeController;
//# sourceMappingURL=load-houses-by-zipcode-controller.js.map