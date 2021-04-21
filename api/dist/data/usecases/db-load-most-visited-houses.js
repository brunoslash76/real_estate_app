"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadMostVisitedHouses = void 0;
class DbLoadMostVisitedHouses {
    constructor(loadMostVisitedHouseRepository) {
        this.loadMostVisitedHouseRepository = loadMostVisitedHouseRepository;
    }
    async loadMostVisited() {
        return await this.loadMostVisitedHouseRepository.loadMostVisited();
    }
}
exports.DbLoadMostVisitedHouses = DbLoadMostVisitedHouses;
//# sourceMappingURL=db-load-most-visited-houses.js.map