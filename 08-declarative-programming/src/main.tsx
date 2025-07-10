import "@/styles/main.css"
// import "@/programming/imperative-step1"
// import "@/programming/declarative-step1"
import { createRoot } from "react-dom/client"
import Form from "./programming/declarative";
import "@/programming/imperative";



const root = document.getElementById('root');

if(root){
    createRoot(root).render(
        <Form></Form>
    )
}