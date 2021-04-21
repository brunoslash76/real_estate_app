import { HouseDetailsModel } from '@/domain/models'

export interface LoadHouseByCity {
    loadByCity: (city: string) => Promise<LoadHouseByCity.Model>
}

export namespace LoadHouseByCity {
    export type Model = HouseDetailsModel[]
}
