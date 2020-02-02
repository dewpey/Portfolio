import React from "react";
import { Card, Grid, Link, Text, Box, Flex, Heading, Image } from "rebass";

export default class Project extends React.Component {
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
            <Text
              p={2}
              fontWeight="bold"
              fontFamily="Libre Caslon Text"
              fontSize="60px"
              textAlign="left"
              fontWeight="400"
            >
              My name is Drew,
            </Text>
          </Card>
        </Flex>
      </div>
    );
  }
}
