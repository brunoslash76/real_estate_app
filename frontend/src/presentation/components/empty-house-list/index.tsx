import React from 'react'

type Props = {
    title?: string
}

const EmptyHouseList: React.FC<Props> = ({ title }: Props) => {
    return (
        <div>{title ? title : `Sorry, we couldn't find properties`}</div>
    )
}

export default EmptyHouseList
