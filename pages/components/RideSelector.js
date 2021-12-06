import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'


const RideSelector = ({ pickupCoord, dropoffCoord }) => {
    const [rideDuration, setRideDuration] = useState(0)


    useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoord[0]},${pickupCoord[1]};${dropoffCoord[0]},${dropoffCoord[1]}?access_token=pk.eyJ1IjoiY3lwaGVydmsiLCJhIjoiY2t3a281Y3ZpMWkwcTJvbWx5bjd3ZWFmeiJ9.dNgWHqCrkHnDbNubm0EzRw`)
            .then(res => res.json())
            .then(data => {
                setRideDuration(data.routes[0].duration / 100)
            })
            .catch(err => console.log(err))
    }, [pickupCoord, dropoffCoord])

    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>

                {carList.map((car, index) => {
                    return (
                        <Car key={index}>
                            <CarImage src={car.imgUrl} alt={car.service} />
                            <CarDetails>
                                <Service>{car.service}</Service>
                                <Time>5 min away</Time>
                            </CarDetails>
                            <Price>{`${(rideDuration * car.multiplier).toFixed(2)}/rs`}</Price>
                        </Car>

                    )
                })

                }

            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
    flex flex-1 scrollbar flex-col 
`
const Title = tw.div`
    text-center border-b border-gray-400 py-2 text-gray-700 text-xs tracking-wider
`

const CarList = tw.div`
scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 
`

const Car = tw.div`
    flex items-center p-4
`

const CarImage = tw.img`
    h-14 w-14 rounded-full mr-3
`

const CarDetails = tw.div`
    flex-1
`

const Service = tw.div`
    font-medium 
`

const Price = tw.div`
    text-sm 
`

const Time = tw.div`
    text-xs text-blue-500
`