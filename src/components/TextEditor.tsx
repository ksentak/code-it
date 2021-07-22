import { useState, useEffect, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import './TextEditor.css';

const TextEditor: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState('# Markdown');

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (ref.current && event.target && ref.current.contains(event.target as Node)) {
        return;
      }
      setIsEditing(false);
    };
    document.addEventListener('click', listener, { capture: true });

    return () => document.removeEventListener('click', listener, { capture: true });
  }, []);

  if (isEditing) {
    return (
      <div className='text-editor' ref={ref}>
        <MDEditor value={value} onChange={(text) => setValue(text || '')} />
      </div>
    );
  }

  return (
    <div className='text-editor' onClick={() => setIsEditing(true)}>
      <MDEditor.Markdown source={value} />
    </div>
  );
};

export default TextEditor;
