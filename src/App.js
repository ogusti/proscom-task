import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";

import "./App.css";

injectGlobal`
body {
  font-family: Helvetica, sans-serif;
  background-color: lightblue;
};
`;

const Wrapper = styled.section`
  display: flex;
`;

const Container = styled.section`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  overflow-x: scroll;
  box-sizing: border-box;
`;

const Card = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: space-between;
  min-width: 170px;
  margin: 0 20px;
  padding: 10px;
  border: 2px solid lightslategrey;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  min-height: 50px;
  border: 1px solid #000;
  border-radius: 50%;
`;

const Text = styled.p`
  text-overflow: ellipsis;
  max-height: 40%;
  overflow: hidden;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Container>
            <Card>
              <Image src="" alt="" />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Card>
            <Card>
              <Image src="" alt="" />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Card>
            <Card>
              <Image src="" alt="" />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Card>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default App;
