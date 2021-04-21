import { LoadHouses } from '@/domain/usecases'
import { LoadHousesRepository } from '@/data/protocols'

export class DbLoadHouses implements LoadHouses {
    
    constructor(private readonly loadHousesRepository: LoadHousesRepository) {}

    async load(): Promise<LoadHouses.Result> {
        return await this.loadHousesRepository.loadAll()
    }
}
