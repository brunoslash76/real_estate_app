import { LoadMostVisitedHouses } from '@/domain/usecases'
import { LoadMostVisitedHousesRepository } from '@/data/protocols'

export class DbLoadMostVisitedHouses implements LoadMostVisitedHouses {
    
    constructor(private readonly loadMostVisitedHouseRepository: LoadMostVisitedHousesRepository) {}

    async loadMostVisited(): Promise<LoadMostVisitedHouses.Result> {
        return await this.loadMostVisitedHouseRepository.loadMostVisited()
    }
}
