import { useEffect, useMemo, useRef, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

const CKTableEditor = ({ content, setContent }) => {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    setIsLayoutReady(true);
    return () => setIsLayoutReady(false);
  }, []);

  const { editorConfig } = useMemo(() => {
    if (!isLayoutReady) {
      return {};
    }

    return {
      editorConfig: {
        toolbar: {
          items: [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            '|',
            'insertTable',
          ],
          shouldNotGroupWhenFull: false,
        },
        language: 'ko',
        placeholder: '내용을 입력하세요',
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableProperties',
            'tableCellProperties',
          ],
        },
      },
    };
  }, [isLayoutReady]);

  return (
    <div className="w-full">
      <div className="" ref={editorContainerRef}>
        <div ref={editorRef}>
          {editorConfig && (
            <CKEditor
              editor={BalloonEditor}
              data={content}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
              config={editorConfig}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CKTableEditor;
