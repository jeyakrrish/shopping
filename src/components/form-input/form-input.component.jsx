import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {     //new concept !!!
  // console.log({...otherProps});
  return (
    <div className='group'>
    <input {...otherProps} className='form-input' />
      {label && (
        <label className={`${otherProps.value.length > 0 ? 'shrink' : ''} form-input-label`} >
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInput;
