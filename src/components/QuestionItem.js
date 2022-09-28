import React from "react";

function QuestionItem({ question, handleDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

 function handleChange(answer) {
   console.log(answer.target.value)
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({correctIndex:Number(answer.target.value)}),
    method: "PATCH"
  }
  fetch(`http://localhost:4000/questions/${id}`, options)
  .then(resp=>resp.json())
  .then(data=>console.log(data))

 }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={(option)=>handleChange(option)} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={()=>handleDelete(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
