import { Controller, HttpResponse } from '@/presentation/protocols'
import { noContent, ok, serverError } from '@/presentation/helpers'
import { LoadHousesByNeighborhood } from '@/domain/usecases'

export class LoadHousesByNeighborhoodController implements Controller {
    constructor(private readonly loadHousesByNeighborhood: LoadHousesByNeighborhood) {}
    async handle(request: any): Promise<HttpResponse> {
        const { neighborhood } = request
        try {
            const houses = await this.loadHousesByNeighborhood.loadByNeighborhood(neighborhood)
            return houses ? ok(houses) : noContent()
        } catch(error) {
            return serverError(error)
        }
    }
}
