import { makeDbLoadHouses } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { LoadHousesController } from '@/presentation/controllers'

export const makeLoadHouseController = (): Controller => {
  return new LoadHousesController(makeDbLoadHouses())
}
