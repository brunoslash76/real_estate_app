import { HouseDetailsModel } from '@/domain/models'

export interface LoadHouseById {
    loadById: (id: number) => Promise<LoadHouseById.Model>
}

export namespace LoadHouseById {
    export type Model = HouseDetailsModel
}
