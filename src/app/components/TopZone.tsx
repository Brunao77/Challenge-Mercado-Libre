import React from "react";
import { Stack, Icon, Text, StackDivider } from "@chakra-ui/react"
import{ RiArrowRightSLine } from "react-icons/ri"

const TopZone: React.FC = () => {

    return (
        <Stack spacing={0} >
            <Stack paddingY={4} direction="row" spacing={1} fontSize="sm" _selection={{ color: "gray" }}>
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
                <Stack divider={<StackDivider alignSelf="center" height={3} borderColor="blackAlpha.400" />} direction="row" spacing={4} paddingY={2} alignItems="center" color="secondary.600">
                    <Text>Compartir</Text>
                    <Text>Vender uno igual</Text>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default TopZone;