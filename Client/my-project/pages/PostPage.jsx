import React, { useState, useRef } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { Avatar, Flex, Image, Text, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

export const PostPage = () => {
    const [liked, setLiked] = useState(false);
    const [copied, setCopied] = useState(false);
    const textAreaRef = useRef(null);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
    };

    return (
        <>
            <Flex>
                <Flex w={"full"} alignItems={"center"} gap={3}>
                    <Avatar src='/zuck-avatar.png' size={"md"} name='Mark Zuckerberg' />
                    <Flex>
                        <Text fontSize={"sm"} fontWeight={"bold"}>
                            markzuckerberg
                        </Text>
                        <Image src='/verified.png' w='4' h={4} ml={4} />
                    </Flex>
                </Flex>
                <Flex gap={4} alignItems={"center"}>
                    <Text fontSize={"sm"} color={"gray.light"}>
                        1d
                    </Text>
                    <BsThreeDots />
                </Flex>
            </Flex>

            <Text my={3}>Let&apos;s talk about Threads.</Text>

            <Menu>
                <MenuButton as={Button} rightIcon={''}>
                    Click to copy URL
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={copyToClipboard}>{copied ? 'Copied!' : 'Copy URL'}</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};
