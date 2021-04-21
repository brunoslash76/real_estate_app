import { HouseResultMySQLRepository } from '@/infra/db'
import { UpdateMostVisitedHouses } from '@/domain/usecases'
import { DbUpdateMostVisitedHouses } from '@/data/usecases'

export const makeDbUpdateMostVisitedHouses = (): UpdateMostVisitedHouses => {
  const housesMySQLRepository = new HouseResultMySQLRepository()
  return new DbUpdateMostVisitedHouses(housesMySQLRepository)
}
