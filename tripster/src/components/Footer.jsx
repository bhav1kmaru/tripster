import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const Logo = (props: any) => {
    return (
        <img src="https://i.ibb.co/NZ3HC4G/Tripster-icon.png" alt="Tripster-icon" border="0" />
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        bgColor="#faf1ed"
        >
        <Container as={Stack} maxWidth={{base:"60%",sm:"100%",md:"70%",lg:"60%"}} py={10} m="auto">
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>About Tripster</ListHeader>
              <Link href={'#'}>About Us</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Press</Link>
              </Stack>
              <Link href={'#'}>Resources and Policies</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Trust & Safety</Link>
              <Link href={'#'}>Contact us</Link>
              <Link href={'#'}>Accessibility Statement</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Explore</ListHeader>
              <Link href={'#'}>Write a review</Link>
              <Link href={'#'}>Add a Place</Link>
              <Link href={'#'}>Join</Link>
              <Link href={'#'}>Travellers' Choice</Link>
              <Link href={'#'}>GreenLeaders</Link>
              <Link href={'#'}>Help Centre</Link>
              <Link href={'#'}>Travel Articles</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Do Business With Us</ListHeader>
              <Link href={'#'}>Owners & DMO/CVB</Link>
              <Link href={'#'}>Business Advantage</Link>
              <Link href={'#'}>Sponsored Placements</Link>
              <Link href={'#'}>Access our Content API</Link>
              <ListHeader>Get The App</ListHeader>
              <Link href={'#'}>iPhone App</Link>
              <Link href={'#'}>Android App</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            <Logo />
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2022 Tripster LLC All rights reserved.
          </Text>
        </Box>
      </Box>
    );
  }