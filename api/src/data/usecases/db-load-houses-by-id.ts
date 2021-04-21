import { LoadHousesById } from '@/domain/usecases'
import { LoadHousesByIdRepository } from '@/data/protocols'

export class DbLoadHousesById implements LoadHousesById {
    
    constructor(private readonly loadHousesByIdRepository: LoadHousesByIdRepository) {}

    async loadById(id: number): Promise<LoadHousesByIdRepository.Result> {
        return await this.loadHousesByIdRepository.loadById(id)
    }
}
