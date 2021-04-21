import { HouseResultMySQLRepository } from '@/infra/db'
import { LoadHouses } from '@/domain/usecases'
import { DbLoadHouses } from '@/data/usecases'

export const makeDbLoadHouses = (): LoadHouses => {
  const housesMySQLRepository = new HouseResultMySQLRepository()
  return new DbLoadHouses(housesMySQLRepository)
}
