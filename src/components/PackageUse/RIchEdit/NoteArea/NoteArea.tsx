import { Container, Content } from './style';

import { Title } from '../style';

function NoteArea() {
  return (
    <>
      <Container>
        <Title>編輯器使用注意事項</Title>
        <Content>
          <h2 className="mb-4 text-xl font-bold">超連結</h2>
          <p>
            要替同一段文字添加<span className="font-bold text-red-500">超連結、底線、顏色</span>功能時，請依照 超連結
            &gt; 底線 &gt; 顏色 順序進行，避免文字互相蓋過樣式。
          </p>
        </Content>
      </Container>
    </>
  );
}

export default NoteArea;
