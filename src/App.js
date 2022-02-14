import variables from './index.scss'

function App() {
  const {from,to} = variables
  const range = (start,stop) =>((start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step)))(start,stop,1)
  const elements = range(1,parseInt(to)-parseInt(from)+1)
  return <>
    <div style={{marginBottom: '2rem'}}>{elements.map(e=><div key={e} className={`w-${e}`} style={{background: "tomato", height: '2rem'}}>{e}</div>)}</div>
    <div style={{marginBottom: '2rem'}}>{elements.map(e=><span key={e} className={`m-${e}`} style={{background: "rebeccapurple",padding:'.5rem'}}>{e}</span>)}</div>
    <div style={{marginBottom: '2rem'}}>{elements.map(e=><span key={e} className={`px-${e}`} style={{background: "dodgerblue",margin:'.5rem',paddingBottom: '.5rem',paddingTop: '.5rem'}}>{e}</span>)}</div>
  </>
}

export default App;
/*
1
2
4
8
16
 */