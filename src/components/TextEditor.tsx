import { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';

const TextEditor: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const listener = () => {
      setIsEditing(false);
    };
    document.addEventListener('click', listener, { capture: true });

    return () => document.removeEventListener('click', listener, { capture: true });
  }, []);

  if (isEditing) {
    return (
      <div>
        <MDEditor />
      </div>
    );
  }

  return (
    <div onClick={() => setIsEditing(true)}>
      <MDEditor.Markdown source={'# Header'} />
    </div>
  );
};

export default TextEditor;
