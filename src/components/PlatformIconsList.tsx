import { Platform } from '../hooks/useGames'
import {FaWindows, FaLinux, FaXbox, FaPlaystation, FaApple, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiAtari, SiNintendo, SiSega} from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { HStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'
import {GiGameConsole}  from  'react-icons/gi'

interface Props {
    platforms : Platform[]
}

const PlatformIconsList = ({platforms}: Props) => {
    const IconMap: {[key:string]: IconType} = {
        pc : FaWindows,
        mac: FaApple,
        linux: FaLinux,
        xbox: FaXbox,
        playstation: FaPlaystation,
        nintendo: SiNintendo,
        android: FaAndroid,
        web: BsGlobe,
        ios: MdPhoneIphone,
        atari: SiAtari,
        sega: SiSega,
        'commodore-amiga' : GiGameConsole
        
      }
  return (
    <>
    <HStack marginY={1}>
    {platforms.map((platform) => <Icon as={IconMap[platform.slug]} color='gray.500' key={platform.id} />)}

    </HStack>
    
    </>

  )
}

export default PlatformIconsList