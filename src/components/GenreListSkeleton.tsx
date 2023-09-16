import { ListItem, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

import React from 'react'

const GenreListSkeleton = () => {
  return (
    <ListItem py="5px">
      <HStack>
        <Skeleton borderRadius="8px" boxSize="46px" />
        <SkeletonText noOfLines={1} skeletonHeight="20px" w="100px" />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
