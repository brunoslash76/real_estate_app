import React from 'react'
import loadingGif from './loading1.gif'
import * as Styles from './loading-styles.scss'

const Loading: React.FC = () => {
    return (
        <div className={Styles.wrapper}>
            <img src={loadingGif} alt="loading page"/>
        </div>
    )
}

export default Loading
