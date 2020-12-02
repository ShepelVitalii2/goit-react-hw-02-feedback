import react from 'react';
import Section from './components/Feedback/Section';
import Feedback from './components/Feedback/Feedback';

export default function App() {
  return (
    <Section>
      <Feedback initialValue={0} />;
    </Section>
  );
}

// const App = () =>

// export default App;
