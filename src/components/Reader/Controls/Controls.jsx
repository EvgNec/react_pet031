import React from 'react'

function Controls({onChange,currentNews, totalNews}) {
  return (
        <section>
          <button 
          type="button" 
          disabled={currentNews === 1}
          onClick={() => onChange(-1)}>
            Next
          </button>
          <button 
          type="button" 
          disabled={currentNews === totalNews}
          onClick={() => onChange(1)}>
            Preview
          </button>          
        </section>
  )
}

export default Controls
