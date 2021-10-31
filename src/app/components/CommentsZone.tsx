import React, { useState } from "react";
import { Input, Stack, Text, Button } from "@chakra-ui/react";
import Comment from "./Comment";

const CommentsZone: React.FC = () => {
    const [comments, setComments] = useState(['Algo']);

    return (
        <Stack paddingX={5} spacing={3}>
            <Text fontWeight="medium" fontSize="25px">Preguntas y respuestas</Text>
            <Text fontWeight="medium" fontSize="lg">Preguntale al vendedor</Text>
            <Stack direction="row" spacing={5} >
                <Input paddingY={6} _placeholder={{ color: 'blackAlpha.400' }} placeholder="Escribí tu pregunta..." />
                <Button paddingX="40px" fontSize="lg" paddingY={6} color="white" bg="secondary.500"
                    _hover={{
                        backgroundColor: "secondary.600",
                    }}
                    onClick={() => setComments([...comments, 'Algo'])}
                >Preguntar</Button>
            </Stack>
            {comments.map(comment => <Comment />)}
        </Stack>
    );
};

export default CommentsZone;