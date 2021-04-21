import { HouseResultMySQLRepository } from '@/infra/db'
import { LoadHousesByZipcode } from '@/domain/usecases'
import { DbLoadHousesByZipcode } from '@/data/usecases'

export const makeDbLoadHouseByZipcodeFactory = (): LoadHousesByZipcode => {
  const housesMySQLRepository = new HouseResultMySQLRepository()
  return new DbLoadHousesByZipcode(housesMySQLRepository)
}
