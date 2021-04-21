"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadHousesByZipcode = void 0;
class DbLoadHousesByZipcode {
    constructor(loadHousesByZipcodeRepository) {
        this.loadHousesByZipcodeRepository = loadHousesByZipcodeRepository;
    }
    async loadByZipcode(zipcode) {
        return await this.loadHousesByZipcodeRepository.loadByZipcode(zipcode);
    }
}
exports.DbLoadHousesByZipcode = DbLoadHousesByZipcode;
//# sourceMappingURL=db-load-houses-by-zipcode.js.map