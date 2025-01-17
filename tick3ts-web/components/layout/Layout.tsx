import { Container, Flex, Link, SimpleGrid, Text } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import NextLink from 'next/link'
import React from 'react'
import { Head, MetaProps } from './Head'
import PhantomButton from '../phantomButton'
import App2 from '../ConnectPhantomWalletButton'
import ConnectPhantomWalletButton from '../ConnectPhantomWalletButton'

interface LayoutProps {
  children: React.ReactNode
  customMeta?: MetaProps
}

export const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
      <>
      <Head customMeta={customMeta} />
      <header>
        <Container maxWidth="container.xl">
          <SimpleGrid
          columns={[1, 1, 1, 2]}
          alignItems="center"
          justifyContent="space-between"
          py="8"
          >
          <Flex py={[4, null, null, 0]}>
            <NextLink href="/" passHref legacyBehavior>
              <Link px="4" py="1">
                Home
              </Link>
            </NextLink>
            <NextLink href="/create-event" passHref legacyBehavior>
              <Link px="4" py="1">
                Create event
              </Link>
            </NextLink>
            <NextLink href="/my-tickets" passHref legacyBehavior>
              <Link px="4" py="1">
                My tickets
              </Link>
            </NextLink>
          </Flex>
          <Flex
          order={[-1, null, null, 2]}
          alignItems={'center'}
          justifyContent={['flex-start', null, null, 'flex-end']}
          >
          <ConnectPhantomWalletButton/>
        </Flex>
      </SimpleGrid>
    </Container>
    </header>
    <main>
      <Container centerContent={true} maxWidth="container.xl">
        {children}
      </Container>
    </main>
    </>
    )
  }
