import classes from '../../Styles/Contacts.module.css'

const InputField = (props) => {
    const {handleChange,label,name,type,value} = props
  return (
    <>
        <div className={classes.inputField}>
            <label className={classes.label} htmlFor={name}>{label}</label>
            <div>
                <input onChange={handleChange} value={value} name={name} required className={classes.input} type={type} />
            </div>
            
        </div>
    </>
  )
}

export default InputField