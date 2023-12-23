import React, { useState } from "react";

const generateLorem = (numParagraphs) => {
  const words = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
  ];

  const sentence = [];

  for (let i = 0; i < numParagraphs; i++) {
    const paragraph = [];

    for (let j = 0; j < 40; j++) {
      if (i === 0) {
        paragraph.push(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        );
        break;
      }

      paragraph.push(words[Math.floor(Math.random() * words.length)] + " ");
    }

    sentence.push(paragraph.join("") + "<br><br>");
  }

  return sentence.join("");
};

const App = () => {
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [generatedText, setGeneratedText] = useState("");

  const handleNumParagraphsChange = (e) => {
    setNumParagraphs(e.target.value);
  };

  const generateLoremText = () => {
    const loremText = generateLorem(numParagraphs);
    setGeneratedText(loremText);
  };

  const copyToClipboard = () => {
    const textarea = document.createElement("textarea");
    textarea.value = generatedText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  return (
    <div className="App">
      <h1 className="text-center my-6 text-2xl font-bold">Lorem Generator</h1>
      <label className="text-center mx-auto w-fit block">
        Number of Paragraphs:
        <input
          type="number"
          value={numParagraphs}
          onChange={handleNumParagraphsChange}
          className="input input-primary input-sm w-16 ml-2"
        />
      </label>
      <div className="w-fit mx-auto flex gap-3 mt-3">
        <button onClick={generateLoremText} className="btn btn-success btn-sm">
          Generate
        </button>
        <button onClick={copyToClipboard} className="btn btn-accent btn-sm">
          Copy to Clipboard
        </button>
      </div>
      <div
        className="output mt-4 w-full md:w-1/2 mx-auto"
        dangerouslySetInnerHTML={{ __html: generatedText }}
      ></div>
    </div>
  );
};

export default App;
