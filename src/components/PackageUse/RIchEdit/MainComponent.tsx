import { useState, useEffect, useRef } from 'react';
import Ribbon from './Ribbon/Ribbon';
import EditArea from './EditArea/EditArea';
import ContentArea from './ContentArea/ContentArea';
import NoteArea from './NoteArea/NoteArea';

import { Container, Content } from './style';

function MainComponent() {
  const [value, setValue] = useState<string>('');
  const firstLoading = useRef<boolean>(true);

  // 本地儲存
  useEffect(() => {
    if (firstLoading.current) {
      const localValue = localStorage.getItem('EditContent');
      if (localValue) {
        setValue(localValue);
      }
      firstLoading.current = false;
      return;
    }
    localStorage.setItem('EditContent', value);
  }, [value]);

  return (
    <>
      <Ribbon value={value} setValue={setValue} />
      <Container>
        <Content>
          <EditArea value={value} setValue={setValue} />
          <ContentArea value={value} />
          <NoteArea />
        </Content>
      </Container>
    </>
  );
}

export default MainComponent;
