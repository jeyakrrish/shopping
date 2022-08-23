import {Input, FormInputLabel, Group} from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {     //new concept !!!
  // console.log(otherProps);
  return (
    <Group className='group'>
    <Input {...otherProps} className='form-input' />
      {label && (
        <FormInputLabel shrink={otherProps.value.length} >
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}

export default FormInput;
