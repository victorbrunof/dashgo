import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
}

export function PaginationItem({ isCurrent = false, number }) {
    if (isCurrent) {
        return (
            <Button size="sm" fontSize="xs" w="4" colorScheme="pink" disabled _disabled={{ bg: 'pink', cursor: 'default' }}>
                {number}
            </Button>
        )
    }

    return (
        <Button size="sm" fontSize="xs" w="4" bg="gray.700" _hover={{ bg: 'gray.500' }} >
            {number}
        </Button>
    )
}