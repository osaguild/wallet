import { FunctionComponent, useState, useEffect } from 'react'
import { providers } from 'ethers'
import { useWeb3React } from '@web3-react/core'
import { Menu, MenuButton, MenuList, MenuItem, Image, Button, Box, Text, Tooltip } from '@chakra-ui/react'
import { ChevronDownIcon, WarningTwoIcon } from '@chakra-ui/icons'
import { switchNetwork } from '../../lib/metamask'
import { Network, EventType } from '../../types'

interface NetworkButtonProps {
  networks: Network[]
  callback?: (eventType: EventType, message: string) => void
}

const NetworkButton: FunctionComponent<NetworkButtonProps> = ({ networks, callback }) => {
  const { chainId } = useWeb3React<providers.Web3Provider>()
  const [currentNetwork, setCurrentNetwork] = useState<Network | undefined>()

  useEffect(() => {
    if (chainId && networks) setCurrentNetwork(networks.filter((network) => network.chainId === chainId)[0])
    else setCurrentNetwork(undefined)
  }, [chainId, networks])

  return (
    <Menu>
      {currentNetwork ? (
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w={160} mx={1} my={2}>
          <Box>
            <Image boxSize="1.5rem" borderRadius="full" src={currentNetwork.icon} alt="chain logo" />
            <Text textAlign="left" mt={-5} ml={9}>
              {currentNetwork.name}
            </Text>
          </Box>
        </MenuButton>
      ) : (
        <Tooltip label="selected network is not supported">
          <MenuButton as={Button} leftIcon={<WarningTwoIcon />} rightIcon={<ChevronDownIcon />} w={160} mx={1} my={2}>
            <Box>Network</Box>
          </MenuButton>
        </Tooltip>
      )}
      <MenuList w={10}>
        {networks.map((network) => (
          <MenuItem key={network.chainId} onClick={() => switchNetwork(network.chainId, callback)}>
            <Image boxSize="1.5rem" borderRadius="full" src={network.icon} alt="chain logo" ml={0.5} mr={3} />
            <span>{network.name}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export { NetworkButton }
