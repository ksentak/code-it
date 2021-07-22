import ReactDOM from 'react-dom';
// import CodeCell from './components/CodeCell';
import TextEditor from './components/TextEditor';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

const App = () => {
  return (
    <div>
      <TextEditor />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
