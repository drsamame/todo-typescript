export const Todo: React.FC<Props> = ({ title }) => {
  return (
    <div className="view">
     <input className='toggle' type='checkbox />
      <label>{title}</label> 
      <button className='destroy'></button> 
      </div>)
}
