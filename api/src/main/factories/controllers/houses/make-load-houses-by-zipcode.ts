import { makeDbLoadHousesByCityFactory } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { LoadHousesByCityController } from '@/presentation/controllers'

export const makeLoadHousesByCityController = (): Controller => {
  return new LoadHousesByCityController(makeDbLoadHousesByCityFactory())
}
