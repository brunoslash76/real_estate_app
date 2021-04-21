"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadHousesById = void 0;
class DbLoadHousesById {
    constructor(loadHousesByIdRepository) {
        this.loadHousesByIdRepository = loadHousesByIdRepository;
    }
    async loadById(id) {
        return await this.loadHousesByIdRepository.loadById(id);
    }
}
exports.DbLoadHousesById = DbLoadHousesById;
//# sourceMappingURL=db-load-houses-by-id.js.map