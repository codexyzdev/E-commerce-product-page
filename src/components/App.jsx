import Container from "./Container";
import {StoreProvider} from './StoreContext'

export default function App() {
  return (
    <StoreProvider>
      <Container />
    </StoreProvider>
  );
}
