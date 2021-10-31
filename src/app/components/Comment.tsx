import React, { useState } from "react";
import { Stack, Text, Icon, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react"
import{ GrTopCorner } from "react-icons/gr"

function Comment(){


    return (
        <Stack spacing={3} paddingTop={5}>
            <Skeleton height="20px" startColor="blackAlpha.700" endColor="blackAlpha.700" />
            <Stack direction="row">
                <Icon as={GrTopCorner} />
                <Stack spacing={1}>
                    <Skeleton height="10px" width="600px" startColor="blackAlpha.300" endColor="blackAlpha.300" />
                    <Skeleton height="10px" width="500px" startColor="blackAlpha.300" endColor="blackAlpha.300"/>
                    <Skeleton height="10px" width="200px" startColor="blackAlpha.300" endColor="blackAlpha.300"/>
                </Stack>
                
            </Stack>
        </Stack>

    )
}

export default Comment