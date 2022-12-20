// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";

const Editor = (props) => {
  return (
    <div className="mt-3 pt-2 pb-2 w-75 mr-0" style={{ marginLeft : "12.5%" }}>
        <CKEditor
          editor={CustomEditor}
          data={props.value}
          onChange = {(event, editor) => {
            const data = editor.getData();
            props.onChange(data);
          }}
          onReady = {(editor) => {
              editor.editing.view.change((writer) => {
              writer.setStyle(
                  "min-height",
                  "200px",
                  editor.editing.view.document.getRoot()
              );
              });
          }}
        />
    </div>
  );
};

export default Editor;