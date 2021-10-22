import React from "react";
import {Container, Box, Stack, Text, Icon, StackDivider} from "@chakra-ui/react";
import Routes from "./routes";
import Navbar from "./Navbar";
import{ RiArrowRightSLine } from "react-icons/ri"

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container alignSelf="center" paddingX={0} maxWidth="container.xl" >
        <Stack spacing={0} >
          <Stack paddingY={5} direction="row" spacing={1} fontSize="sm" >
            <Text fontWeight="bold">También puede interesarte: </Text>
            <Text>rompecabezas ravensburger - baby yoda- triciclos infantiles - playmobil- pizarra blanca marcador</Text>
          </Stack>
          <Stack divider={<StackDivider />} direction="row" fontSize="sm" >
            <Text>Volver al listado </Text>
            <Stack alignItems="center" direction="row">
              <Text color="secondary.500">Juegos y Juguetes</Text>
              <Icon as={RiArrowRightSLine} color="blackAlpha.400" />
              <Text color="secondary.500">Peluches</Text>
            </Stack>
          </Stack>
        </Stack>
        <Box bg="white">
          
        </Box>
      </Container>
      <Container alignSelf="center" paddingX={0} maxWidth="container.xl">
        <Box>
          <Routes />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
