import tw, { styled } from 'twin.macro';

export const CoverSuneditor = styled.div`
  .sun-editor-editable,
  .article-content {
    font-size: 13px;
  }

  :is(.sun-editor-editable, .article-content) :is(h1, h2, h3, h4, h5, h6) {
    margin: 16px 0;
    font-weight: bold;
  }

  .sun-editor-editable h1,
  .article-content h1 {
    font-size: 24px;
  }

  .sun-editor-editable h2,
  .article-content h2 {
    font-size: 18px;
  }

  .sun-editor-editable h3,
  .article-content h3 {
    font-size: 14px;
  }

  .sun-editor-editable h4,
  .article-content h4 {
    font-size: 12px;
  }

  .sun-editor-editable h5,
  .article-content h5 {
    font-size: 10px;
  }

  .sun-editor-editable h6,
  .article-content h6 {
    font-size: 8px;
  }

  .sun-editor-editable hr,
  .article-content hr {
    display: flex;
    border-width: 1px 0 0;
    border-color: #000;
    -o-border-image: initial;
    border-image: initial;
    height: 1px;
  }

  .sun-editor-editable hr.__se__dashed,
  .article-content hr.__se__dashed {
    border-style: dashed none none;
  }

  .sun-editor-editable hr.__se__dotted,
  .article-content hr.__se__dotted {
    border-style: dotted none none;
  }

  .sun-editor-editable p,
  .article-content p {
    margin-bottom: 10px;
  }

  .sun-editor-editable ol,
  .article-content ol,
  .sun-editor-editable ul,
  .article-content ul {
    padding-left: 20px;
  }

  .sun-editor-editable ol,
  .article-content ol {
    list-style-type: decimal;
  }

  .sun-editor-editable ol ol,
  .article-content ol ol {
    padding: 0;
    margin-top: 6px;
    list-style-type: none;
    counter-reset: my-counter; /* 初始化 */
  }

  .sun-editor-editable ol ol li,
  .article-content ol ol li {
    padding: 0;
    counter-increment: my-counter; /* 每個 li 增加一次 */
  }

  .sun-editor-editable ol ol li::before,
  .article-content ol ol li::before {
    content: '(' counter(my-counter) ')'; /* 顯示數字 */
  }

  .sun-editor-editable ul,
  .article-content ul {
    list-style-type: disc;
  }

  .sun-editor-editable ul li::before,
  .article-content ul li::before {
    content: '';
  }

  .sun-editor-editable ol li,
  .article-content ol li,
  .sun-editor-editable ul li,
  .article-content ul li {
    padding-left: 12px;
    font-size: 14px;
    margin-bottom: 6px;
  }

  .sun-editor-editable a,
  .article-content a {
    color: #004cff;
    text-decoration: none;
  }

  .sun-editor-editable span[style~='color:'] a,
  .article-content span[style~='color:'] a {
    color: inherit;
  }

  .sun-editor-editable table,
  .article-content table {
    display: table;
    table-layout: auto !important;
    border: 1px solid #ccc;
    width: 100%;
    max-width: 100%;
    margin: 0 0 10px;
    background-color: transparent;
    border-spacing: 0;
    border-collapse: collapse;
  }

  .sun-editor-editable table tr,
  .article-content table tr {
    border: 1px solid #efefef;
  }

  .sun-editor-editable table td,
  .article-content table td {
    border: 1px solid #e1e1e1;
    padding: 0.4em;
    background-clip: padding-box;
  }

  .sun-editor-editable table th,
  .article-content table th {
    border: 1px solid #e1e1e1;
    padding: 0.4em;
    background-clip: padding-box;
    background-color: #f3f3f3;
  }

  .sun-editor-editable table thead,
  .article-content table thead {
    border-bottom: 2px solid #333;
  }

  .sun-editor-editable table.se-table-size-auto,
  .article-content table.se-table-size-auto {
    width: auto !important;
  }
`;
