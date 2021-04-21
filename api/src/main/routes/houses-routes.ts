import { adaptRoute } from '@/main/adapters'
import { 
  makeLoadHouseController, 
  makeLoadHousesByIdController,
  makeLoadHousesByZipcodeController,
  makeLoadMostVisitedHouseController,
  makeUpdateHouseController,
  makeLoadHousesByCityController,
  makeLoadHousesByNeighborhoodController
} from '@/main/factories'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/house-details/:id', adaptRoute(makeLoadHousesByIdController()))
  router.get('/houses', adaptRoute(makeLoadHouseController()))
  router.get('/most-visited', adaptRoute(makeLoadMostVisitedHouseController()))
  router.put('/update-most-visited', adaptRoute(makeUpdateHouseController()))
  router.post('/houses-by-zipcode', adaptRoute(makeLoadHousesByZipcodeController()))
  router.post('/houses-by-city', adaptRoute(makeLoadHousesByCityController()))
  router.post('/houses-by-neighborhood', adaptRoute(makeLoadHousesByNeighborhoodController()))
}
