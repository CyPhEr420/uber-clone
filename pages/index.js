import tw from "tailwind-styled-components"
import { useEffect, useState } from "react";
import Map from "./components/Map";
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { useRouter } from "next/router";
import Head from 'next/head'

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({});


  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL
        });
      } else {
        setUser(null);
        router.push('/login');
      }
    })
  }, []);

  return (

    <Wrapper>
      <Head>
        <title>Uber Clone</title>
        {/* <link rel="icon" href="./uber.png" /> */}
      </Head>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage src={user && user.photoUrl} />
            <LogOut onClick={() => signOut(auth)}>Logout</LogOut>
          </Profile>
        </Header>

        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>

        <InputButton>
          Where to?
        </InputButton>

      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col  h-screen
`

const ActionItems = tw.div`
 flex-1 p-2
`
const Header = tw.div`
  flex flex-row justify-between items-center
`

const UberLogo = tw.img`
  w-28 
`

const Profile = tw.div`
  flex flex-row items-center
`
const Name = tw.div`
  mr-4 w-20 text-sm
`

const UserImage = tw.img`
  w-12 h-12 rounded-full border border-gray-200 p-px 
`
const LogOut = tw.button`
   text-sm rounded-full px-3 py-2 ml-3 bg-gray-400 text-white align-middle transform hover:bg-red-500 shadow-lg
`

const ActionButtons = tw.div`
    flex 
`

const ActionButton = tw.div`
 flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg shadow-md transform hover:scale-105 transition duration-400 hover:shadow-lg text-xl cursor-pointer
`

const ActionButtonImage = tw.img`
 h-3/5
`

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`