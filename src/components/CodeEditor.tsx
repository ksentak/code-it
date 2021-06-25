import MonacoEditor from '@monaco-editor/react';

const CodeEditor = () => {
  return (
    <MonacoEditor
      options={{
        wordWrap: 'on',
        minimap: { enabled: false },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 3,
        fontSize: 16,
        scrollBeyondLastLine: false,
        automaticLayout: true
      }}
      language='javascript'
      theme='dark'
      height='500px'
    />
  );
};

export default CodeEditor;
