import axios from 'axios';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { CoverSuneditor } from './style';

type SchemaViewerProps = {
  /** 要請求的檔名（位於 /json/ 下），例如 "notice.json"。 */
  fileName: string;
};
/**
 * 以 HTML 格式顯示 schema 的元件：從 `/json/<fileName>` 取得 `{ content }`，
 * 將 HTML 字串以 `html-react-parser` 轉為 React 節點後渲染。
 *
 * @param props - 元件屬性。
 * @returns JSX.Element
 */
function SchemaViewer({ fileName }: SchemaViewerProps) {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    axios
      .get(`json/${fileName}`)
      .then((res) => {
        if (!res.data.content) {
          return Promise.reject(new Error('No content in response'));
        }
        setHtmlContent(res.data.content);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [fileName]);

  return (
    <>
      <CoverSuneditor>
        <div className="article-content">{parse(htmlContent)}</div>
      </CoverSuneditor>
    </>
  );
}

export default SchemaViewer;
