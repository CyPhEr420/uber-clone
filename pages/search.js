import React, { useState } from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link';
import InputBox from './components/InputContainer'
import Head from 'next/head'
const Search = () => {
    const [pickup, setPickup] = useState('')
    const [dropoff, setDropoff] = useState('')

    const handlPickup = (e) => {
        setPickup(e.target.value)
    }

    const handleDropoff = (e) => {
        setDropoff(e.target.value)
    }

    return (
        <Wrapper>
            <Head>
                <title>Search</title>
                {/* <link rel="icon" href="./uber.png" /> */}
            </Head>

            <ButtonContainer>
                <Link href="/" passHref={true}>
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" passHref={true} />
                </Link>
            </ButtonContainer>

            <InputBox handlePickup={handlPickup} handleDropoff={handleDropoff} pickup={pickup} dropoff={dropoff} />

            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" passHref={true} />
                Saved Places
            </SavedPlaces>

            <Link href={{
                pathname: '/confirm',
                query: {
                    pickup: pickup,
                    dropoff: dropoff,
                }


            }} passHref={true}>
                <ConfirmButton>
                    Confirm Locations
                </ConfirmButton>
            </Link>

        </Wrapper>
    )
}

export default Search


const Wrapper = tw.div`
    bg-gray-200 h-screen

`

const ButtonContainer = tw.div`
   bg-white px-4 
`

const BackButton = tw.img`
    h-12 cursor-pointer 
`






const SavedPlaces = tw.div`
    flex items-center bg-white px-4 py-2
`

const StarIcon = tw.img`
    bg-gray-400 w-10 h-10 rounded-full p-2 mr-2
`
const ConfirmButton = tw.div`
    bg-black text-white m-4 px-4 py-2 flex items-center justify-center rounded-full cursor-pointer
`

// text-lg lg:w-1/2 lg:ml-auto lg:mr-auto rounded-full 