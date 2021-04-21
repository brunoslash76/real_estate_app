import { makeDbLoadMostVisitedHouses } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { LoadMostVisitedHousesController } from '@/presentation/controllers'

export const makeLoadMostVisitedHouseController = (): Controller => {
  console.log('entrou aqui')
  return new LoadMostVisitedHousesController(makeDbLoadMostVisitedHouses())
}
