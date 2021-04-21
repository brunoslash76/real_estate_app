import { makeDbLoadHousesByIdFactory } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { LoadHousesByIdController } from '@/presentation/controllers'

export const makeLoadHousesByIdController = (): Controller => {
  return new LoadHousesByIdController(makeDbLoadHousesByIdFactory())
}
