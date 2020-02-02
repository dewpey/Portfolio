import React from "react";
import { Box, Flex, Link, Text } from "rebass";

export default class Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      current: "hack global issues.",
      options: [
        "hack global issues.",
        "code innovative solutions.",
        "design around real users.",
        "iterate with methodology and data.",
        "fundraise to solve real problems."
      ]
    };
  }

  componentDidMount() {
    setInterval(() => {
      console.log("tick");
      this.setState(({ index }) => ({
        index: (index % 4) + 1,
        current: this.state.options[index]
      }));
    }, 3000);
  }

  render() {
    return (
      <div>
        <Text
          p={2}
          fontWeight="bold"
          fontFamily="Libre Caslon Text"
          fontSize="60px"
          textAlign="left"
          fontWeight="400"
        >
          My name is Drew,
          <br />
          <u>I {this.state.current}</u>
        </Text>
      </div>
    );
  }
}
