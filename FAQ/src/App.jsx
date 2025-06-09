import { useState } from 'react'
import './App.css'

const FaqItem=({question,answer})=>{
  const [show,setShow]=useState(true)
  const toggleShow=()=>
  {
    setShow(!show)
  }

  return(
    <div className={`faq-item ${show? "active":""}`}>
      <div className="faq-item-header" onClick={toggleShow}>{question}</div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">{answer}</div>
      </div>
    </div>
  )
}

const data = [
  { id: 1, question: "What is React?", answer: "React is a front-end JavaScript library for building user interfaces or UI components." },
  { id: 2, question: "What are the benefits of React?", answer: "Some of the benefits of React are: it is fast, scalable, modular, easy to debug, and supports server-side rendering." },
  { id: 3, question: "What are the main concepts of React?", answer: "Some of the main concepts of React are: components, props, state, hooks, lifecycle methods, and JSX." },
  { id: 4, question: "What is JSX in React?", answer: "JSX stands for JavaScript XML. It allows us to write HTML in React and makes it easier to create and render UI components." },
  { id: 5, question: "What is the virtual DOM in React?", answer: "The virtual DOM is a lightweight copy of the real DOM. React updates the virtual DOM first, then compares it with the previous state and updates only the changed parts in the real DOM for better performance." }
];

const FaqAccordian =({data})=>{
  return(
    <div className="faq-accordian">
      <h2>FAQs</h2>
      {data.map((item)=>(<FaqItem key={item.id} question={item.question} answer={item.answer}/>))}
    </div>
  )

}
function App() {
  return (
    <>
    <div className="App"><FaqAccordian data={data}/></div>
    </>
  )
}

export default App
