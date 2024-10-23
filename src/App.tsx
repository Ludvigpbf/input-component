import InputField from "./input/InputField";
import "./styles/App.css";

function App() {
  return (
    <>
      <InputField
        label="Custom Input"
        name="input"
        placeholder="Test"
        type="text"
        floatingLabel={true}
        required={true}
        requiredPosition="top-right"
        data-id="124"
        containerClassName="124"
        requiredColor="red"
        backgroundColor="blue"
        fontColor="red"
      />
    </>
  );
}

export default App;
