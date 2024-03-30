function Counter() {
  let number = 0;
  function handleClickButton() {
    number++;
  }
  return(
  <>
    <h1>{number}</h1>
    <button onClick={handleClickButton}></button>
  </>)
}
export default Counter;
