import { makeDbLoadHouseByNeighborhood } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { LoadHousesByNeighborhoodController } from '@/presentation/controllers'

export const makeLoadHousesByNeighborhoodController = (): Controller => {
  return new LoadHousesByNeighborhoodController(makeDbLoadHouseByNeighborhood())
}
