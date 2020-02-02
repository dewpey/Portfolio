import React from "react";
import { Box, Flex, Link, Text } from "rebass";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Flex px={2} color="#051B2B" alignItems="center" height="50px">
        <Text
          p={2}
          fontWeight="bold"
          fontFamily="Libre Caslon Text"
          fontSize="20px"
        >
          {this.props.name}
        </Text>
        <Box mx="auto" />
        <Link variant="nav" href="#!">
          Projects
        </Link>
        <Link variant="nav" href={this.props.github}>
          Github
        </Link>
      </Flex>
    );
  }
}
