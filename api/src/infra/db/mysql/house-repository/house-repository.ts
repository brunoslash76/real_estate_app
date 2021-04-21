
import {
    UpdateMostVisitedHouseRepository,
    LoadHousesByCityRepository,
    LoadHousesByIdRepository,
    LoadHousesByNeighborhoodRepository,
    LoadHousesByZipcodeRepository,
    LoadHousesRepository,
    LoadMostVisitedHousesRepository
} from '@/data/protocols/db'
import { sequelize } from '@/main/config/dbConnection'
import { 
    loadAllHousesQuery,
    mostVisitedQuery,
    updateMostVisitedQuery,
    loadHousesByCity,
    loadHousesByNeighborhood,
    loadHousesByZipcode,
    loadHousById
} from '@/infra/db/mysql/house-repository/query-helper'

export class HouseResultMySQLRepository implements
    UpdateMostVisitedHouseRepository,
    LoadHousesByCityRepository,
    LoadHousesByIdRepository,
    LoadHousesByNeighborhoodRepository,
    LoadHousesByZipcodeRepository,
    LoadHousesRepository,
    LoadMostVisitedHousesRepository {
    async loadMostVisited (): Promise<LoadMostVisitedHousesRepository.Result> {
        return await mostVisitedQuery(sequelize)
    }

    async update (id: number): Promise<UpdateMostVisitedHouseRepository.Result> {
        return await updateMostVisitedQuery(sequelize, id)
    }

    async loadAll(): Promise<LoadHousesRepository.Result> {
        return await loadAllHousesQuery(sequelize)
    }

    async loadByZipcode(zipcode: string): Promise<LoadHousesByZipcodeRepository.Result> {
        return await loadHousesByZipcode(sequelize, zipcode)
    }

    async loadByNeighborhood(neighborhood: string): Promise<LoadHousesByNeighborhoodRepository.Result> {
        return await loadHousesByNeighborhood(sequelize, neighborhood)
    }

    async loadById(id: number): Promise<any> {
        return await loadHousById(sequelize, id)
    }

    async loadByCity(city: string): Promise<LoadHousesByCityRepository.Result> {
        return await loadHousesByCity(sequelize, city)
    }
}