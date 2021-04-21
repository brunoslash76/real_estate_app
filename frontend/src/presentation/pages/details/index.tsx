import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { 
    LoadFavoriteHouse,
    LoadHouseById,
    SaveFavoriteHouse,
    SaveLastVisitedHouse
} from '@/domain/usecases'
import { HouseDetailsModel } from '@/domain/models'
import { Loading } from '@/presentation/components'
import { PhotoSection, SideInfo } from './components'
import * as Styles from './details-styles.scss'

type Props = {
    loadHouseDetails: LoadHouseById
    saveLastVisitedHouses: SaveLastVisitedHouse
    saveFavoriteHouse: SaveFavoriteHouse
    loadFavoriteHouse: LoadFavoriteHouse
}
type Params = {
    houseId: number
}

export const Details: React.FC<Props> = ({ 
    loadHouseDetails, 
    saveLastVisitedHouses, 
    saveFavoriteHouse, 
    loadFavoriteHouse 
}: Props) => {
    const [house, setHouse] = useState<HouseDetailsModel>(null)
    const [liked, setLiked] = useState(false)
    const history = useHistory()
    const { houseId } = history.location.state as Params

    useEffect(() => {
        async function callLoadHouseById() {
            const result = await loadHouseDetails.loadById(houseId)
            setHouse(result[0])
            return result
        }
        callLoadHouseById()
    }, [houseId])

    useEffect(() => {
        if(house) {
            const lastVisited = {
                id: house.id,
                image: house.homeImage,
                price: house.price
            }
            saveLastVisitedHouses.save(lastVisited)
        }
    },[house])

    useEffect(() => {
        async function callLoadFavoriteHouses() {
            if (!house) return
            let likeHouse
            likeHouse = await loadFavoriteHouse.load()
            if (!likeHouse) {
                likeHouse = []
            }
            likeHouse.find(h => {
                if(houseId === h.id) {
                    setLiked(h.likedHouse)
                }
            })
        }
        callLoadFavoriteHouses()
    }, [house])

    const handleSetLike = () => {
        setLiked(() => {
            const like = !liked
            saveFavoriteHouse.save({
                id: house.id,
                image: house.homeImage,
                price: house.price,
                likedHouse: like
            })
            return like
        })
    }

    return (
        <section className={Styles.wrapper}>
            {   house 
                ? (
                    <>
                        <PhotoSection house={house} />
                        <SideInfo house={house} liked={liked} setLiked={handleSetLike}/>
                    </>
                )
                : <Loading />
            }
        </section>
    )
}

export default Details
