import { HouseModel } from '@/domain/models'

export interface LoadHousesByZipcodeRepository {
    loadByZipcode: (zipcode: string) => Promise<LoadHousesByZipcodeRepository.Result>
}

export namespace LoadHousesByZipcodeRepository {
    export type Result = HouseModel[]
}
