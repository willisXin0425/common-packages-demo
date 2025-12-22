// components
import CircularDemo from './CircularDemo';
import CircularWithLabelDemo from './CircularWithLabelDemo';
import LinearDemo from './LinearDemo';
import LinearWithLabelDemo from './LinearWithLabelDemo';

// style
import { Container } from '../style';

function ProgressDemo() {
  return (
    <Container>
      <CircularDemo />
      <CircularWithLabelDemo />
      <LinearDemo />
      <LinearWithLabelDemo />
    </Container>
  );
}

export default ProgressDemo;
