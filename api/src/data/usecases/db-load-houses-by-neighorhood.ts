import { LoadHousesByZipcode } from '@/domain/usecases'
import { LoadHousesByNeighborhoodRepository } from '@/data/protocols'
import { LoadHousesByNeighborhood } from '@/domain/usecases'

export class DbLoadHousesByNeighorhood implements LoadHousesByNeighborhood {
    
    constructor(private readonly loadHousesByNeighborhoodRepository: LoadHousesByNeighborhoodRepository) {}

    async loadByNeighborhood(neighborhood: string): Promise<LoadHousesByZipcode.Result> {
        return await this.loadHousesByNeighborhoodRepository.loadByNeighborhood(neighborhood)
    }
}
