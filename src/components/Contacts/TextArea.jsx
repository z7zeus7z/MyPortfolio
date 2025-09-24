import classes from '../../Styles/Contacts.module.css' 
 const TextArea = (props) => {
    const {handleChange,label,name,value} = props
   return (
     <>
        <div className={classes.textArea}>
            <label htmlFor={name}>{label}</label>
            <textarea value={value} onChange={handleChange} name={name} rows="4"></textarea>
        </div>
     </>
   )
 }
 
 export default TextArea