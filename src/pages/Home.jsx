import { Heading  } from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <Heading  as='h1' size='3xl' textAlign='center' pt={60} bg="gray.100" color="#2a363b" h='100vh' noOfLines={[1, 2, 3]}>
        Contacts book welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          😸
        </span>
      </Heading>
    </main>
  );
}
