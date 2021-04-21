"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadHousesByNeighorhood = void 0;
class DbLoadHousesByNeighorhood {
    constructor(loadHousesByNeighborhoodRepository) {
        this.loadHousesByNeighborhoodRepository = loadHousesByNeighborhoodRepository;
    }
    async loadByNeighborhood(neighborhood) {
        return await this.loadHousesByNeighborhoodRepository.loadByNeighborhood(neighborhood);
    }
}
exports.DbLoadHousesByNeighorhood = DbLoadHousesByNeighorhood;
//# sourceMappingURL=db-load-houses-by-neighorhood.js.map