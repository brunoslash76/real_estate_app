import { makeDbUpdateMostVisitedHouses } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { UpdateMostVisitedHousesController } from '@/presentation/controllers'

export const makeUpdateHouseController = (): Controller => {
  return new UpdateMostVisitedHousesController(makeDbUpdateMostVisitedHouses())
}
