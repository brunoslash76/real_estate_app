"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUpdateMostVisitedHouses = void 0;
class DbUpdateMostVisitedHouses {
    constructor(updateMostVisitedHouseRepository) {
        this.updateMostVisitedHouseRepository = updateMostVisitedHouseRepository;
    }
    async update(id) {
        return await this.updateMostVisitedHouseRepository.update(id);
    }
}
exports.DbUpdateMostVisitedHouses = DbUpdateMostVisitedHouses;
//# sourceMappingURL=db-update-most-visited-houses.js.map