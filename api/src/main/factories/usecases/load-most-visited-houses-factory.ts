import { HouseResultMySQLRepository } from '@/infra/db'
import { LoadMostVisitedHouses } from '@/domain/usecases'
import { DbLoadMostVisitedHouses } from '@/data/usecases'

export const makeDbLoadMostVisitedHouses = (): LoadMostVisitedHouses => {
  const housesMySQLRepository = new HouseResultMySQLRepository()
  return new DbLoadMostVisitedHouses(housesMySQLRepository)
}
