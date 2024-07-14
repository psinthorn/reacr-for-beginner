import { forwardRef } from "react";

const Input = forwardRef(({title, type, id, name, className, autoComplete, onChange}, ref) => {
    return (
      <div className='mb-3'>
          <label className='form-label' htmlFor={name}>{title}</label>
          <input 
              type={type}
              id={name}
              ref={ref}
              className={className}
              autoComplete={autoComplete}
              onChange={onChange}
          >
          </input>
      </div>
    )
  })
  
  export default Input