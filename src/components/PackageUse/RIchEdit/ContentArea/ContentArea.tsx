import parse from 'html-react-parser';

import { CoverSuneditor } from '../CoverSuneditor';
import { Container, Content, Article } from './style';
import { Title } from '../style';

type ContentAreaProps = {
  value: string;
};
function ContentArea({ value }: ContentAreaProps) {
  return (
    <>
      <Container>
        <Title>內容預覽區</Title>
        <Content>
          {/* 覆蓋樣式 style component */}
          <CoverSuneditor>
            <Article className="article-content">{parse(value)}</Article>
          </CoverSuneditor>
        </Content>
      </Container>
    </>
  );
}

export default ContentArea;
