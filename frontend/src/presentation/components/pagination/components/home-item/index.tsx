import React from 'react'
import { HouseListModel } from '@/domain/models'
import mockImage from '@/presentation/pages/home/components/most-visited/images/property-1.jpg'
import * as Styles from './home-item-styles.scss'

type Props = {
    home: HouseListModel
    handleItemClick?: any
}

const HomeItem: React.FC<Props> = ({home, handleItemClick}: Props) => {
    return (
        <section className={Styles.itemWrapper} onClick={() => handleItemClick(home.id)}>
            <div className={Styles.mobileWrapper}>
                <div className={Styles.mainPhoto}>
                    <img src={mockImage}/>
                    <p>Price: ${home.price}</p>
                </div>
                <div className={Styles.info}>
                    <p>Neighborhood: {home.neighborhood}</p>
                    <p><span>Beds: {home.beds}</span><span>Baths: {home.baths}</span></p>
                    <p>Address: {home.address}</p>
                    <p>City: {home.city}</p>
                    <p>ZIP code: {home.zipcode}</p>
                    <p>Available: {home.available}</p>
                </div>
            </div>
            <div className={Styles.morePhotos}>
                <img src={mockImage} />
                <img src={mockImage} />
                <img src={mockImage} />
                <img src={mockImage} />
            </div>
        </section>
    )
}

export default HomeItem
