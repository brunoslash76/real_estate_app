import { HouseResultMySQLRepository } from '@/infra/db'
import { LoadHousesByCity } from '@/domain/usecases'
import { DbLoadHousesByCity } from '@/data/usecases'

export const makeDbLoadHousesByCityFactory = (): LoadHousesByCity => {
  const houseMySQLRepository = new HouseResultMySQLRepository()
  return new DbLoadHousesByCity(houseMySQLRepository)
}
