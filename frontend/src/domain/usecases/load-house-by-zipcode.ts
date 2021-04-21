import { HouseListModel } from '@/domain/models'

export interface LoadHouseByZipcode {
    loadByZipcode: (zipcode: string) => Promise<LoadHouseByZipcode.Model>
}

export namespace LoadHouseByZipcode {
    export type Model = HouseListModel[]
}
