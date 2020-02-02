import React from "react";
import { Card, Grid, Link, Text, Box, Flex, Heading, Image } from "rebass";
import Project from "./Project";
export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Flex mx={-2} flexWrap="wrap">
          <Card width={256} backgroundColor="white" padding="10px">
            <Heading>Card</Heading>
          </Card>
          <Box width={1 / 2} px={2}>
            <Text p={1} color="background" bg="primary">
              Half
            </Text>
          </Box>
        </Flex>
      </div>
    );
  }
}
