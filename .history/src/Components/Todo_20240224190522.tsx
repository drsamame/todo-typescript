export const Todo = ({ title }) => {
  return (
    <div className="view">
     <input className='toggle' type='checkbox />
      <label>{title}</label> 
      <button className='destroy'></button> 
      </div>)
}
