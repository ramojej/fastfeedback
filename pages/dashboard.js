import React from 'react'
import { useAuth } from '@/lib/auth'
import EmptyState from '@/components/EmptyState'
import { Flex, Spinner } from '@chakra-ui/react'

const Dashboard = () => {
  const auth = useAuth()
  if (!auth.user) {
    return (
      <Flex alignItems='center' justifyContent='center' minHeight='100vh'>
        <Spinner />
      </Flex>
    )
  }
  return <EmptyState />
}

export default Dashboard
