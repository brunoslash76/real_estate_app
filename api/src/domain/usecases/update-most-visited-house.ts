import { HouseModel } from '@/domain/models'

export interface UpdateMostVisitedHouses {
  update: (id: number) => Promise<UpdateMostVisitedHouses.Result>
}

export namespace UpdateMostVisitedHouses {
  export type Result = HouseModel[]
}