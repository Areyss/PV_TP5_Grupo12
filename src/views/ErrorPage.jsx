import { useAppColors } from "@/theme/colors"
import { EmptyState, List, VStack, Text, Heading, Button } from "@chakra-ui/react"
import { HiColorSwatch } from "react-icons/hi"
import { Link } from "react-router-dom";
const ErrorPage = () =>{
    const colors = useAppColors();
    return(
        <EmptyState.Root size="lg" >
            <EmptyState.Content>
                <EmptyState.Indicator>
                    <HiColorSwatch />
                </EmptyState.Indicator>
                <VStack textAlign="center">
                    <EmptyState.Title><Heading as="h1" size="4xl" mb="10" color={colors.danger}>
                        Error 404
                    </Heading></EmptyState.Title>
                    <EmptyState.Description>
                        <Text fontSize="xl" >
                            La página que buscas no existe o fue removida.
                        </Text>
                    </EmptyState.Description>
                </VStack>
                <List.Root variant="marker">
                    <List.Item><Text fontSize="lg" >
                        Verifica la URL.
                    </Text></List.Item>
                    <List.Item><Text fontSize="lg" >
                        Regresa al inicio.
                    </Text></List.Item>
                    <Link to="/">
                        <Button bg={colors.primary} color="white" _hover={{ bg: colors.primaryHover }} mt="5">
                            Volver al inicio
                        </Button>
                    </Link>
                </List.Root>
            </EmptyState.Content>
        </EmptyState.Root>
    )
}

export default ErrorPage;