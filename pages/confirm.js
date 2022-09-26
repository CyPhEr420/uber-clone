/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";
import Link from "next/link";
import Head from "next/head";
const confirm = () => {
    const router = useRouter();

    const { pickup, dropoff } = router.query;

    const [pickupCoord, setPickupCoord] = useState([0, 0]);
    const [dropoffCoord, setDropoffCoord] = useState(0, 0);


    const getPickupCoordinates = (location) => {
        const pickup = location;
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiY3lwaGVydmsiLCJhIjoiY2t3a281Y3ZpMWkwcTJvbWx5bjd3ZWFmeiJ9.dNgWHqCrkHnDbNubm0EzRw",
                limit: 1
            })
        )
            .then(res => res.json())
            .then(data => {
                setPickupCoord(data.features[0].center);
            })
            .catch(err => console.log(err));
    }

    const GetDropofCoordinates = (location) => {
        const dropoff = location;
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiY3lwaGVydmsiLCJhIjoiY2t3a281Y3ZpMWkwcTJvbWx5bjd3ZWFmeiJ9.dNgWHqCrkHnDbNubm0EzRw",
                limit: 1
            })
        )
            .then(res => res.json())
            .then(data => {
                setDropoffCoord(data.features[0].center);
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getPickupCoordinates(pickup);
        GetDropofCoordinates(dropoff);
    }, [pickup, dropoff]);



    return (
        <Wrapper>
            <Head>
                <title>Confirm</title>
                {/* <link rel="icon" href="./uber.png" /> */}
            </Head>
            <ButtonContainer>
                <Link href="/search">
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtonContainer>
            <Map pickupCoord={pickupCoord} dropoffCoord={dropoffCoord} />
            <RideContainer>

                <RideSelector pickupCoord={pickupCoord} dropoffCoord={dropoffCoord} />

                <ConfirmButtonContainer>
                    <ConfirmButton>Confirm UberX</ConfirmButton>
                </ConfirmButtonContainer>


            </RideContainer>


        </Wrapper >
    )
}

export default confirm

const Wrapper = tw.div`
    flex flex-col h-screen 
`
const ButtonContainer = tw.div`
   px-4 absolute top-0 left-0 z-20  h-16 mt-4 
`

const BackButton = tw.img`
    h-12 cursor-pointer  rounded-full shadow-lg p-2 bg-white 
`

const RideContainer = tw.div`
   flex flex-1 flex-col h-1/2 
`

const ConfirmButtonContainer = tw.div`
    border-t-2 border-gray-300
`
const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center cursor-pointer text-xl
`