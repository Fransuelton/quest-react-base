import './App.css';
import Paragraph from './components/StyledText/index';
import Button from './components/AlertButtton/index';

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
