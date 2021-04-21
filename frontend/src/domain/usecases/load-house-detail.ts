import { HouseDetailsModel } from '@/domain/models'

export interface LoadHouseDetail {
    loadDetail: () => Promise<LoadHouseDetail.Model>
}

export namespace LoadHouseDetail {
    export type Model = HouseDetailsModel
}
