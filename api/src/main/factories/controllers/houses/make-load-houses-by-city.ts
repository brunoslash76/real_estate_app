import { makeDbLoadHouseByZipcodeFactory } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { LoadHousesByZipcodeController } from '@/presentation/controllers'

export const makeLoadHousesByZipcodeController = (): Controller => {
  return new LoadHousesByZipcodeController(makeDbLoadHouseByZipcodeFactory())
}
