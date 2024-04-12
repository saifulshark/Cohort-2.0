function App() {
  return (
    <React.Fragment>
      <Header tittle="Hashir"/>
      <Header tittle="Sameena"/>
    </React.Fragment>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
  }


export default App
