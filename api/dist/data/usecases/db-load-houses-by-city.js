"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadHousesByCity = void 0;
class DbLoadHousesByCity {
    constructor(loadHousesByCityRepository) {
        this.loadHousesByCityRepository = loadHousesByCityRepository;
    }
    async loadByCity(city) {
        return await this.loadHousesByCityRepository.loadByCity(city);
    }
}
exports.DbLoadHousesByCity = DbLoadHousesByCity;
//# sourceMappingURL=db-load-houses-by-city.js.map