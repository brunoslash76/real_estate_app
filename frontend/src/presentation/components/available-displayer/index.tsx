import React from 'react'
import * as Styles from './available-displayer-styles.scss'

type Props = {
    isAvailable: number
}

const AvailableDisplayer: React.FC<Props> = ({ isAvailable = false }) => {
    return (
        isAvailable 
        ? <span className={[Styles.available, Styles.container].join(' ')} /> 
        : <span className={[Styles.notAvailable, Styles.container].join(' ')} /> 
    )
}

export default AvailableDisplayer
