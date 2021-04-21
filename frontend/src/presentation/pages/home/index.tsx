import React, { useEffect, useState } from 'react'
import {
    LoadLastVisitedHouse,
    LoadMostVisitedHouses,
    UpdateMostVisitedHouses
} from '@/domain/usecases'
import { HouseSearch, LastVisited, MostVisited } from './components'
import * as Styles from './home-styles.scss'

type Props = {
    loadMostVisited: LoadMostVisitedHouses
    updateMostVisited: UpdateMostVisitedHouses
    loadLastVisited: LoadLastVisitedHouse
}

export const Home: React.FC<Props> = ({ loadMostVisited, updateMostVisited, loadLastVisited }: Props) => {
    const [mostVisited, setMostVisited] = useState(null)
    const [lastVisited, setLastVisited] = useState(null)

    useEffect(() => {
        async function callLoadMostVisited() {
            const result = await loadMostVisited.loadMostVisited()
            setMostVisited(result)
        }
        callLoadMostVisited()
    }, [])

    useEffect(() => {
        async function callLoadLastVisited() {
            const result = await loadLastVisited.loadLastVisited()
            console.log('load from localstorage', result)
            setLastVisited(result)
        }
        callLoadLastVisited()
    }, [])

    return (
        <div className={Styles.wrapper}>
            <HouseSearch />
            <MostVisited 
                houses={mostVisited}
                updateMostVisitedHouses={updateMostVisited}
            />
            <LastVisited 
                houses={lastVisited}
                updateMostVisitedHouses={updateMostVisited}
            />
        </div>
    )
}