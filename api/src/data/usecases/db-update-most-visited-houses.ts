import { UpdateMostVisitedHouses } from '@/domain/usecases'
import { UpdateMostVisitedHouseRepository } from '@/data/protocols'

export class DbUpdateMostVisitedHouses implements UpdateMostVisitedHouses {
    
    constructor(private readonly updateMostVisitedHouseRepository: UpdateMostVisitedHouseRepository) {}

    async update(id: number): Promise<UpdateMostVisitedHouses.Result> {
        return await this.updateMostVisitedHouseRepository.update(id)
    }
}
