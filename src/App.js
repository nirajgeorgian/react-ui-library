import { GloablStyle } from './utils';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Button'

function App() {
  return (
    <div className="App">
      <PrimaryButton modifiers={["small"]}>PrimaryButton</PrimaryButton>
      <SecondaryButton>SecondaryButton</SecondaryButton>
      <TertiaryButton modifiers={["large"]}>TertiaryButton</TertiaryButton>
      <GloablStyle />
    </div>
  );
}

export default App;
