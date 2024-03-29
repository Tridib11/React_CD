 import './PlayButton.css'
export default function PlayButton({message,children}){

  function handleClick(){
    console.log(message)
  }
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

