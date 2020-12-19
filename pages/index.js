import { useAuth } from '@/lib/auth'
import { Logo } from '@/styles/theme'
import { Button, Flex } from '@chakra-ui/react'

const Home = () => {
  const auth = useAuth()
  return (
    <Flex
      as='main'
      direction='column'
      align='center'
      justify='center'
      h='100vh'
    >
      <Logo boxSize={12} />

      {auth.user ? (
        <Button onClick={(e) => auth.signout()} color='blue.50'>
          Sign Out
        </Button>
      ) : (
        <Button onClick={(e) => auth.signinWithGithub()} mt={4}>
          Sign In
        </Button>
      )}
    </Flex>
  )
}

export default Home
