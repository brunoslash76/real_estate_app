import { LoadHousesByCity } from '@/domain/usecases'
import { LoadHousesByCityRepository } from '@/data/protocols'

export class DbLoadHousesByCity implements LoadHousesByCity {
    
    constructor(private readonly loadHousesByCityRepository: LoadHousesByCityRepository) {}

    async loadByCity(city: string): Promise<LoadHousesByCity.Result> {
        return await this.loadHousesByCityRepository.loadByCity(city)
    }
}
