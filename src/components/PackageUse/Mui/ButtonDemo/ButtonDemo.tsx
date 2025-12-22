// components
import BasicButtonDemo from './BasicButtonDemo';
import IconButtonDemo from './IconButtonDemo';
import ButtonGroupDemo from './ButtonGroupDemo';
import SplitButtonDemo from './SplitButtonDemo';

// style
import { Container } from '../style';

function ButtonDemo() {
  return (
    <Container>
      <BasicButtonDemo />
      <IconButtonDemo />
      <ButtonGroupDemo />
      <SplitButtonDemo />
    </Container>
  );
}

export default ButtonDemo;
