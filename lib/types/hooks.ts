import { useMediaQuery } from '@chakra-ui/react'

export function useMediumScreen() {
  const [isMediumScreen] = useMediaQuery('(min-width: 992px)')
  return isMediumScreen
}
