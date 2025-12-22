import SunEditor from 'suneditor-react';

import { Container, Content } from './style';
import { Title } from '../style';
import { CoverSuneditor } from '../CoverSuneditor';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

type EditAreaProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

function EditArea({ value, setValue }: EditAreaProps) {
  return (
    <>
      <Container>
        <Title>內容編輯區</Title>
        <Content>
          {/* 轉換樣式 style component */}
          <CoverSuneditor>
            <SunEditor
              setContents={value}
              onChange={setValue}
              setOptions={{
                buttonList: [
                  ['undo', 'redo'],
                  ['fontSize', 'formatBlock'],
                  ['bold', 'underline', 'italic', 'strike'],
                  ['fontColor', 'hiliteColor'],
                  ['align', 'list', 'lineHeight'],
                  ['outdent', 'indent'],
                  ['table', 'horizontalRule', 'link'],
                  ['removeFormat', 'preview'],
                ],
                formats: ['p', 'h1', 'h2', 'h3', 'h4'],
                defaultTag: 'div',
                minHeight: '300px',
                maxHeight: '500px',
                showPathLabel: false,
              }}
            />
          </CoverSuneditor>
        </Content>
      </Container>
    </>
  );
}

export default EditArea;
