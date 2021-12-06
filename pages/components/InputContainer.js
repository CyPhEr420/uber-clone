import React, { useEffect, useState, useRef } from 'react'
import tw from "tailwind-styled-components";

const InputBox = ({ handlePickup, handleDropoff, pickup, dropoff }) => {

    // useEffect(() => {
    //         const places = [];
    //         const = new Arra
    // }, [])


    return (
        <InputContainer>
            <FromToIcons>
                <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />

            </FromToIcons>

            <InputBoxes>
                <Input value={pickup} placeholder="Enter pickup location"
                    onChange={handlePickup} />

                <Input value={dropoff} placeholder="Where to?"

                    onChange={handleDropoff} />


            </InputBoxes>

            <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />


        </InputContainer>


    )
}

export default InputBox


const FromToIcons = tw.div`
    w-10 flex flex-col mr-2 items-center
`



const Circle = tw.img`
    h-2.5 
`

const Line = tw.img`
    h-10
`

const Square = tw.img`
    h-3
`

const InputContainer = tw.div`
    bg-white flex items-center px-4 mb-2
`

const InputBoxes = tw.div`
    flex flex-col flex-1 
`

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-5 p-2 outline-none border-none
`


const PlusIcon = tw.img`
    w-10 h-10 bg-gray-200 rounded-full ml-3 p-1.5
`