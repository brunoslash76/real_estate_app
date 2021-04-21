import { LastVisitedHouseModel } from '@/domain/models'

export interface SaveFavoriteHouse {
    save:(house: LastVisitedHouseModel) => Promise<void>
}

export namespace SaveFavoriteHouse {
    export type Model = LastVisitedHouseModel
}