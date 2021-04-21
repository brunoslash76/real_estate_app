import { LoadHousesByZipcode } from '@/domain/usecases'
import { LoadHousesByZipcodeRepository } from '@/data/protocols'

export class DbLoadHousesByZipcode implements LoadHousesByZipcode {
    
    constructor(private readonly loadHousesByZipcodeRepository: LoadHousesByZipcodeRepository) {}

    async loadByZipcode(zipcode: string): Promise<LoadHousesByZipcode.Result> {
        return await this.loadHousesByZipcodeRepository.loadByZipcode(zipcode)
    }
}
