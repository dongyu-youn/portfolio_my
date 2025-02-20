import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import { useEffect, useRef, useState } from 'react';
import { MyCustomUploadAdapterPlugin } from './CKEditorPlugins';

const CKEditorComponent = ({ content, setContent }) => {
  const editorRef = useRef(null);
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if (!editor) {
      ClassicEditor.create(editorRef.current, {
        plugins: [
          Essentials,
          Paragraph,
          Bold,
          Italic,
          Underline,
          Strikethrough,
          Link,
          Image,
          ImageUpload,
          ImageToolbar,
          ImageStyle,
        ],
        toolbar: {
          items: [
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            '|',
            'link',
            'uploadImage',
            '|',
            'undo',
            'redo',
          ],
        },
        language: 'ko',
        image: {
          toolbar: [
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            '|',
            'toggleImageCaption',
            'imageTextAlternative',
          ],
        },
        extraPlugins: [MyCustomUploadAdapterPlugin],
      })
        .then((newEditor) => {
          setEditor(newEditor);
          if (content) {
            newEditor.setData(content);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    return () => {
      if (editor) {
        editor.destroy().then(() => {
          setEditor(null);
        });
      }
    };
  }, []);

  useEffect(() => {
    if (editor) {
      editor.model.document.on('change:data', () => {
        const data = editor.getData();
        setContent(data);
      });
    }
  }, [editor, setContent]);

  return (
    <div className="w-full">
      <div ref={editorRef} className="min-h-[400px]"></div>
    </div>
  );
};

export default CKEditorComponent;
