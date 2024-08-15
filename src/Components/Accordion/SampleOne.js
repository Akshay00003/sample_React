import React,{useState} from 'react'
import './Accordion.css'
import data from './Data'

function SampleOne() {
  const [selected, setSelected] = useState(null);
  function handleSingleSelection(getCurrentid){
    setSelected(getCurrentid === selected ? null : getCurrentid)
  }
  return (
    <div className='wrapper'>
    <button>Enable Multi Selection</button>
    <div className='accordion'>
      {
        data.map((datItem)=>(
          <div className='item'>
            <div className='title' onClick={()=>handleSingleSelection(datItem.id)}>
              <h3>{datItem.question}</h3>
              <span>+</span>
            </div>
            {selected ===datItem.id ? (<div className='content'>{datItem.answer}</div>) :
            null}
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default SampleOne
