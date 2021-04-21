import { HouseResultMySQLRepository } from '@/infra/db'
import { LoadHousesByNeighborhood } from '@/domain/usecases'
import { DbLoadHousesByNeighorhood } from '@/data/usecases'

export const makeDbLoadHouseByNeighborhood = (): LoadHousesByNeighborhood => {
  const housesMySQLRepository = new HouseResultMySQLRepository()
  return new DbLoadHousesByNeighorhood(housesMySQLRepository)
}
