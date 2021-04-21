import { HouseModel } from '@/domain/models'

export interface UpdateMostVisitedHouseRepository {
    update: (id: number) => Promise<UpdateMostVisitedHouseRepository.Result>
}

export namespace UpdateMostVisitedHouseRepository {
    export type Result = HouseModel[]
}
