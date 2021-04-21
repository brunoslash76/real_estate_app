export type LoadHousesEndPointParams = {
    type: 'city' | 'zipcode' | 'neighborhood'
}

export type LoadHouseParams = {
    type: string
    value: string
}