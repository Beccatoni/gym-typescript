import { SelectedPage } from '@/shared/types'
import Logo from '../../assets/Logo.png'
import Link from './Link'
import useMediaQuery from '@/hooks/useMediaQuery'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import ActionButton from '@/shared/ActionButton'

type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value:SelectedPage)=> void
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetweem = "flex items-center justify-between"
    const [isMenuToggled, setIsMenueToggled] = useState(false)
    const isAboveMediumScreens =useMediaQuery ("(min-width: 1060px)")
  return (
    <nav>
        <div
        className={`${flexBetweem} fixed top-0 z-30 w-full py-6`}
        >
          <div className={`${flexBetweem} mx-auto w-5/6`}>

            
              <div className={`${flexBetweem} w-full gap-16` }>
                {/* Left side */}
                <img src={Logo} alt="logo" />

                {/* Right side */}
                {isAboveMediumScreens ?
                (<div className={`${flexBetweem} w-full`}>
                  <div className={`${flexBetweem} gap-8 text-sm`}>
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  <Link page="Benefits"  selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Our Classes"  selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Contact Us"  selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  </div>
                  <div className={`${flexBetweem} gap-8`}>
                    <p>Sign In</p>
                    <ActionButton setSelectedPage ={setSelectedPage} >Become a Member</ActionButton>
                  </div>
                </div>): (
                  <div>
                    <button className='rounded-full bg-secondary-500 p-2' onClick={()=> setIsMenueToggled(!isMenuToggled)}>
                       <Bars3Icon className='h-6 w-6 text-white'/>
                    </button>
                  </div>
                )
                 }
                
              </div>
           
          </div>

        </div>

        {/* Mobile menu modal */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
            {/* Close icon */}
            <div className='flex justify-end p12'>
              <button onClick={()=> setIsMenueToggled(!isMenuToggled)}>
                <XMarkIcon className='h-6 w-6 text-gray-400'/>
              </button>
            </div>
          </div>
        )}
    </nav>
  )
}

export default Navbar