import React from 'react';

import {
  OuterWrapper,
  GlobalStyle,
  Container,
  Wrapper,
  Block,
  Form,
  InputsRow,
  CycleInput,
  StaticSpan,
  OffsetInput,
  Submit,
} from './styles';

import { GRID_SIZE } from './styles';

const INITIAL_CYCLE_SIZE = 3;
const INITIAL_OFFSET = 0;

class App extends React.Component {
  state = {
    cycleSize: INITIAL_CYCLE_SIZE,
    offsetCount: INITIAL_OFFSET,
    animationCount: 0,
  };

  // needed to provide unique keys to the blocks
  updateAnimationCount = () => {
    this.setState(prevState => ({
      animationCount: prevState.animationCount + 1,
    }));
  };

  updateSelector = event => {
    event.preventDefault();
    const { value: cycleSize } = event.target[0];
    const { value: offsetCount } = event.target[1];

    this.setState(
      () => ({
        cycleSize,
        offsetCount,
      }),
      this.updateAnimationCount,
    );
  };

  render() {
    const { animationCount, cycleSize, offsetCount } = this.state;

    const array = Array(GRID_SIZE).fill(1);

    return (
      <OuterWrapper>
        <GlobalStyle />
        <Container>
          <h1>nth-degree</h1>
          <Wrapper cycleSize={cycleSize} offsetCount={offsetCount}>
            {array.map((item, index) => (
              <Block key={`${animationCount}-${index}`} />
            ))}
          </Wrapper>
          <Form onSubmit={this.updateSelector}>
            <InputsRow>
              <CycleInput
                type="number"
                defaultValue={INITIAL_CYCLE_SIZE}
                required
              />
              <StaticSpan>n +</StaticSpan>
              <OffsetInput
                type="number"
                defaultValue={INITIAL_OFFSET}
                required
              />
              <Submit type="submit" value="Update selector" />
            </InputsRow>
          </Form>
        </Container>
      </OuterWrapper>
    );
  }
}

export default App;
