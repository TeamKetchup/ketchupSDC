import "./App.css";
import axios from "axios";
import SubmitFile from "./components/SubmitFile";

function App() {
  const fetchSubmit = (file) => {
    console.log(file)
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    fetch("http://localhost:3025/api/postimage", {
      body: formData,
      method: "post",
    });
  }
    return (
      <>
        <SubmitFile fetchSubmit={fetchSubmit} />
      </>
    );
}

export default App;
