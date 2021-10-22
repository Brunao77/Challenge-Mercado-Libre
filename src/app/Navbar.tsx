import React from "react";
import {Container, Stack, Box,Text,Image,Icon, Input, StackDivider} from "@chakra-ui/react";
import Routes from "./routes";
import logo from "../assets/logo.png"
import { IoLocationOutline } from "react-icons/io5"
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import{ GiStarSwirl } from "react-icons/gi"
import{ RiArrowDropDownLine, RiArrowDownSLine } from "react-icons/ri"
import{ BiUserCircle } from "react-icons/bi"
import{ VscBell } from "react-icons/vsc"


const Navbar: React.FC = () => {
  return (
      <Stack>
        <Box bg="primary.500" boxShadow="sm" paddingY={3}>
          <Container alignSelf="center" paddingX={0} maxWidth="container.xl">
            <Stack spacing={4} >
              <Stack direction="row" spacing={12} justifyContent="space-between" >
                <Image src={logo} objectFit="contain"/>
                <Stack maxWidth={600} width="100%" padding={2} alignItems="center" height={9} boxShadow="md" borderRadius="sm" backgroundColor="white" direction="row" divider={<StackDivider />}>
                    <Input variant="unstyled" _placeholder={{ color: 'blackAlpha.400' }} placeholder="Buscar productos, marcas y más..." padding={2}  />
                    <Icon as={AiOutlineSearch} width={5} height={5} color="blackAlpha.600" />  
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Icon as={GiStarSwirl} width={7} height={7} />
                  <Text>Suscribite al nivel 6: beneficios exclusivos</Text>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="space-between" alignItems="center">     
                <Stack direction="row" alignItems="baseline" spacing="100px">
                <Stack direction="row" alignItems="center" spacing={0}>
                  <Icon as={IoLocationOutline} width={6} height={6} color="blackAlpha.600"/>
                  <Stack spacing={0}>
                    <Text lineHeight="none" fontSize="xs" color="blackAlpha.700">Enviar a Bruno</Text>
                    <Text lineHeight="none" fontSize="sm">Francia 4380</Text>
                  </Stack>
                </Stack>
                <Stack color="blackAlpha.600" direction="row" lineHeight="none" fontSize="sm" spacing={4}>
                  <Stack direction="row" spacing={0} alignItems="center" >
                    <Text>Categorías</Text>
                    <Icon as={RiArrowDownSLine} width={3} height={3}/>
                  </Stack>
                  <Text>Ofertas</Text>
                  <Text>Historial</Text>
                  <Text>Supermercado</Text>
                  <Text>Moda</Text>
                  <Text>Vender</Text>
                  <Text>Ayuda</Text>
                </Stack>
                </Stack>
                <Stack direction="row" fontSize="15px" alignItems="baseline" color="blackAlpha.800" spacing={3}>
                  <Stack direction="row" alignItems="baseline" spacing={1} >
                    <Icon as={BiUserCircle} alignSelf="center" width={6} height={6} />
                    <Stack direction="row" spacing={0} alignItems="center">
                      <Text>Bruno</Text>
                      <Icon as={RiArrowDownSLine} height={5} width={5} fontSize="lg" color="blackAlpha.400" />
                    </Stack>
                  </Stack>
                  <Text>Mis Compras</Text> 
                  <Stack direction="row" alignItems="center" spacing={0} >
                    <Text>Favoritos</Text>
                    <Icon as={RiArrowDownSLine} height={5} width={5} fontSize="lg" color="blackAlpha.400" />
                  </Stack>
                  <Icon as={VscBell} fontSize="lg" alignSelf="center" />
                  <Icon as={AiOutlineShoppingCart} fontSize="lg" alignSelf="center" />
                </Stack> 
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Stack>
  );
};

export default Navbar;