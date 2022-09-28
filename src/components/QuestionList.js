import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([])
console.log(questions)
useEffect (()=>{
  fetch("http://localhost:4000/questions")
  .then(resp=>resp.json())
  .then(data=>setQuestions(data))
},[])

function handleDelete(id) {
  const options ={
    method:"DELETE"
  }
  fetch(`http://localhost:4000/questions/${id}`, options)
  .then(resp=>resp.json())
  .then(data=>setQuestions(prevQuestions => prevQuestions.filter(question=>question.id!=id)))
}
  return (
    <section >
      <h1>Quiz Questions</h1>
      {questions.map(question=>(<ul key={`${question.id}`}><QuestionItem handleDelete={handleDelete} question={question}/></ul>))}
     
    </section>)
}

export default QuestionList;
