import React from 'react'
import NextLink from 'next/link'
import {
  Box,
  Flex,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from '@chakra-ui/react'

import { useAuth } from '@/lib/auth'
import { Logo } from '@/styles/theme'

const DashboardShell = ({ children }) => {
  const { user } = useAuth()
  console.log(user)

  return (
    <Box backgroundColor='gray.100' h='100vh'>
      <Flex
        backgroundColor='white'
        mb={[8, 16]}
        w='full'
        borderTop='5px solid #0AF5F4'
      >
        <Flex
          alignItems='center'
          justifyContent='space-between'
          pt={4}
          pb={4}
          maxW='1250px'
          margin='0 auto'
          w='full'
          px={8}
          h='60px'
        >
          <Flex align='center'>
            <NextLink href='/' passHref>
              <Link mr={4}>
                <Logo boxSize={6} />
              </Link>
            </NextLink>
            <NextLink href='/sites' passHref>
              <Link mr={4}>Sites</Link>
            </NextLink>
            <NextLink href='/feedback' passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Flex>
          <Flex justifyContent='center' alignItems='center'>
            <NextLink href='/account' passHref>
              <Link>
                <Avatar size='sm' src={user?.photoURL} />
              </Link>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
      <Flex margin='0 auto' direction='column' maxW='1250px' px={[0, 8, 8]}>
        <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color='gray.700'>Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading color='black' mb={4}>
          Sites
        </Heading>
        {children}
      </Flex>
    </Box>
  )
}

export default DashboardShell
