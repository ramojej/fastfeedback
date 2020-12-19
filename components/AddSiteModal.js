import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react'
import { createSite } from '@/lib/db'

const AddSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef()

  const { handleSubmit, register } = useForm()
  const onSubmit = (values) => createSite(values)

  return (
    <>
      <Button fontWeight='medium' maxW='200px' onClick={onOpen}>
        Add your first site
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as='form' onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Site</FormLabel>
              <Input
                ref={initialRef}
                placeholder='Site'
                name='site'
                ref={register({
                  required: 'Required',
                })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder='https://website.com'
                name='url'
                ref={register({
                  required: 'Required',
                })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='teal' mr={3} type='submit'>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddSiteModal
