import React,{useState} from "react";
import {Container, Box, Stack, Text, Icon, Image, Button, StackDivider} from "@chakra-ui/react";
import Routes from "./routes";
import Navbar from "./Navbar";
import mock from "../product/mock";
import{ RiArrowRightSLine } from "react-icons/ri"
import{ BsHeart, BsStarFill } from "react-icons/bs"
import{ FiTruck } from "react-icons/fi"
import{ IoReturnDownBack } from "react-icons/io5"




const App: React.FC = () => {
  const [image,setImage]=useState(mock.product.pictures[0].url);

  return (
    <React.Fragment>
      <Navbar />
      <Container alignSelf="center" paddingX={0} maxWidth="container.xl" >
        <Stack spacing={0} >
          <Stack paddingY={4} direction="row" spacing={1} fontSize="sm" _selection={{color:"gray"}}>
            <Text fontWeight="bold">También puede interesarte: </Text>
            <Text>rompecabezas ravensburger - baby yoda- triciclos infantiles - playmobil- pizarra blanca marcador</Text>
          </Stack>
          <Stack justifyContent="space-between" direction="row" fontSize="sm">
            <Stack divider={<StackDivider alignSelf="center" height={3} borderColor="blackAlpha.400" />} direction="row" paddingY={2} spacing={3}>
              <Text>Volver al listado </Text>
              <Stack alignItems="center" direction="row" spacing="2px" color="secondary.600">
                <Text>Juegos y Juguetes</Text>
                <Icon as={RiArrowRightSLine} color="blackAlpha.400" />
                <Text>Peluches</Text>
                <Icon as={RiArrowRightSLine} color="blackAlpha.400" />
                <Text>Stitch</Text>
              </Stack>
            </Stack>
            <Stack divider={<StackDivider alignSelf="center" height={3} borderColor="blackAlpha.400" />} direction="row" spacing={4} paddingY={2}  alignItems="center" color="secondary.600">
              <Text>Compartir</Text>
              <Text>Vender uno igual</Text>
            </Stack>
          </Stack>
        </Stack>
        <Box bg="white" borderRadius="md" boxShadow="md">
          <Stack direction="row" padding={5} spacing={20}>
            <Stack divider={<StackDivider />}>
              <Stack direction="row" >
                <Stack userSelect="none">
                  <Image padding="2px" objectFit="contain" cursor="pointer" onClick={()=>{setImage(mock.product.pictures[0].url)}} _hover={{ border:"1px", borderColor:"secondary.400" }} src={mock.product.pictures[0].url} boxSize="50px" borderRadius="md" border="1px" borderColor="blackAlpha.400" />
                  <Image padding="2px" objectFit="contain" cursor="pointer" onClick={()=>{setImage(mock.product.pictures[1].url)}} _hover={{ border:"1px", borderColor:"secondary.400" }} src={mock.product.pictures[1].url} boxSize="50px" borderRadius="md" border="1px" borderColor="blackAlpha.400" />
                  <Image padding="2px" objectFit="contain" cursor="pointer" onClick={()=>{setImage(mock.product.pictures[2].url)}} _hover={{ border:"1px", borderColor:"secondary.400" }} src={mock.product.pictures[2].url} boxSize="50px" borderRadius="md" border="1px" borderColor="blackAlpha.400" />
                  <Image padding="2px" objectFit="contain" cursor="pointer" onClick={()=>{setImage(mock.product.pictures[3].url)}} _hover={{ border:"1px", borderColor:"secondary.400" }} src={mock.product.pictures[3].url} boxSize="50px" borderRadius="md" border="1px" borderColor="blackAlpha.400" />
                </Stack>
                <Stack alignItems="center" width="700px" height="500px">
                  <Image src={image}  height="100%" />
                </Stack>
              </Stack>
            </Stack>
            <Stack border="1px" borderRadius="md" borderColor="blackAlpha.300" paddingX={4} spacing={1}>
              <Stack fontSize="sm" color="blackAlpha.600" divider={<StackDivider alignSelf="center" height={3} />} direction="row" paddingTop={6} >
                <Text>Nuevo</Text>
                <Text>679 vendidos</Text>
              </Stack>
              <Stack direction="row" paddingTop={1}>
                <Text fontSize={22} fontWeight="bold" lineHeight="28px">{mock.product.title}</Text>
                <Icon as={BsHeart} color="secondary.700" width={6} height={6} />
              </Stack>
              <Stack direction="row" fontSize="sm" spacing={1} alignItems="center" paddingTop={2}>
                <Icon as={BsStarFill} color="secondary.500" />
                <Icon as={BsStarFill} color="secondary.500"/>
                <Icon as={BsStarFill} color="secondary.500"/>
                <Icon as={BsStarFill} color="secondary.500"/>
                <Icon as={BsStarFill} color="secondary.500"/>
                <Text color="blackAlpha.600" paddingX={1} lineHeight="none">55 opiniones</Text>
              </Stack>
              <Stack direction="row" paddingTop={3} fontSize="xs">
                <Text paddingX={1}  bg="orange.400" borderRadius="sm" color="white">MÁS VENDIDO</Text>
                <Text color="secondary.500" fontWeight="bold"> 9° en Peluches</Text>
              </Stack>
              <Text fontSize={40} lineHeight={0} fontWeight="light" paddingTop={7}>$ {mock.product.price}</Text>
              <Text fontSize="19.6px" paddingTop={7} lineHeight={1}>en 12x de $ {Math.trunc(mock.product.base_price / 12)} pagando con Mecado Crédito</Text>
              <Text color="secondary.400" fontSize="sm" fontWeight="bold" lineHeight={0} paddingTop={3}>Ver los medios de pago</Text>
              <Stack direction="row" paddingTop={6} >
                <Icon as={FiTruck} width={5} height={5} />
                <Stack spacing={1}>
                  <Text fontSize="md" lineHeight="none">Llega el martes por $689</Text>
                  <Text fontSize="sm"  color="secondary.400" fontWeight="bold">Ver más formas de entrega</Text>
                </Stack>
              </Stack>
              <Stack direction="row" paddingTop={4} >
                <Icon as={IoReturnDownBack} width={5} height={5} color="#2fb670" />
                <Stack spacing={2}>
                  <Text fontSize="md" lineHeight="none" color="#2fb670">Devolución gratis</Text>
                  <Text fontSize="sm" lineHeight="none">Tenés 30 días desde que lo recibís</Text>
                  <Text fontSize="sm" lineHeight="none" color="secondary.400" fontWeight="bold">Conocer más</Text>
                </Stack>
              </Stack>
              <Text fontWeight="bold" fontSize="md" paddingY={3}>¡Última disponible!</Text>
              <Button bg="secondary.500" color="white" paddingY={6}>Comprar ahora</Button>
              <Button >Agregar al carrito</Button>
            </Stack>
          </Stack>
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
