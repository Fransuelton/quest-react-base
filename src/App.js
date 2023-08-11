import './App.css';
import Paragraph from './components/paragraph/paragraph';
import Button from './components/buttton/button';

function App() {
  return (
    <>
      <Paragraph
        content='Este é o desafio de React Básico do curso DevQuest.'
        style={{ color: 'red', textTransform: 'upperCase' }}
      />

      <Button label='Baixar CV' />
    </>
  );
}

export default App;
