import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from '@firebase/auth'
import { auth, provider } from '../firebase';
import Head from 'next/Head';


const login = () => {
    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])

    return (
        <Wrapper>
            <Head>
                <title>Login</title>
                {/* <link rel="icon" href="./uber.png" /> */}
            </Head>
            <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
            <Title>Log in to access your account</Title>
            <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />

            <SignInButton onClick={() => signInWithPopup(auth, provider)}>Sign in with google</SignInButton>
        </Wrapper>
    )
}

export default login

const Wrapper = tw.div`
    flex flex-col h-screen w-screen p-4 bg-gray-200
`

const SignInButton = tw.button`
    bg-black text-white text-center py-2 mt-8 self-center w-full shadow-lg rounded-full
`

const UberLogo = tw.img`
    h-7 w-auto object-contain self-start
`
const Title = tw.div`
     text-5xl pt-4 text-gray-500 text-center 
`

const HeadImage = tw.img`
     object-contain self-center   w-full h-auto lg:h-3/6 lg:w-3/6
`