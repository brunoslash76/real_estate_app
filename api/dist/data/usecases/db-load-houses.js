"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadHouses = void 0;
class DbLoadHouses {
    constructor(loadHousesRepository) {
        this.loadHousesRepository = loadHousesRepository;
    }
    async load() {
        return await this.loadHousesRepository.loadAll();
    }
}
exports.DbLoadHouses = DbLoadHouses;
//# sourceMappingURL=db-load-houses.js.map