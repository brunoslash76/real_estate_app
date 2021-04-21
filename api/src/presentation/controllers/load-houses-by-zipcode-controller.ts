import { Controller, HttpResponse } from '@/presentation/protocols'
import { noContent, ok, serverError } from '@/presentation/helpers'
import { LoadHousesByZipcode } from '@/domain/usecases'

export class LoadHousesByZipcodeController implements Controller {
    constructor(private readonly loadHousesByZipcode: LoadHousesByZipcode) {}
    async handle(request: any): Promise<HttpResponse> {
        const { zipcode } = request
        try {
            const houses = await this.loadHousesByZipcode.loadByZipcode(zipcode)
            return houses.length ? ok(houses) : noContent()
        } catch(error) {
            return serverError(error)
        }
    }
}
