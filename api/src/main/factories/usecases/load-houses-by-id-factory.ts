import { HouseResultMySQLRepository } from '@/infra/db'
import { LoadHousesById } from '@/domain/usecases'
import { DbLoadHousesById } from '@/data/usecases'

export const makeDbLoadHousesByIdFactory = (): LoadHousesById => {
  const houseMySQLRepository = new HouseResultMySQLRepository()
  return new DbLoadHousesById(houseMySQLRepository)
}
