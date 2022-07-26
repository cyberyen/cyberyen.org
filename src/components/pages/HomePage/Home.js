import React from 'react'
import SectionZero from '../../SectionZero'
import SectionAbout from '../../SectionAbout'
import SectionOne from '../../SectionOne'
import SectionWallet from '../../SectionWallet'


import {homeObjZero, homeObjAbout, homeObjOne, homeObjWallet} from './Data'

function Home() {
  return (
    <>
    <SectionZero {...homeObjZero} />
    <SectionAbout {...homeObjAbout} />
    <SectionOne {...homeObjOne} />
    <SectionWallet {...homeObjWallet} />
    </>
  )
}

export default Home
