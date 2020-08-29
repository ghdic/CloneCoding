import React from "react";
import { Box, Link, Flex, Button } from "@chakra-ui/core";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    const [{ data, fetching }] = useMeQuery();
    let body = null;

    // 데이터 로딩
    if(fetching){
        // 유저가 로그인 x
    } else if (!data?.me){
        body = (
            <>
                <NextLink href="/login">
                    <Link mr={2}>login</Link>
                </NextLink>
                <NextLink href="/register">
                    <Link>register</Link>
                </NextLink>
            </>
        );
    } else {
        // 유저 로그인
        body = (
            <Flex>
                <Box mr={2}>{data.me.username}</Box>
                <Button variant="link">logout</Button>
            </Flex>
        );
    }

    return (
        <Flex bg="tomato" p={4}>
            <Box ml={"auto"}>{body}</Box>
        </Flex>
    );
};