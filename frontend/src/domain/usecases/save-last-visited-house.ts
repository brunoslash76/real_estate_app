import { LastVisitedHouseModel } from '@/domain/models'

export interface SaveLastVisitedHouse {
    save:(house: LastVisitedHouseModel) => Promise<void>
}

export namespace SaveLastVisitedHouse {
    export type Model = LastVisitedHouseModel
}
