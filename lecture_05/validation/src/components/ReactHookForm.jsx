import { useForm } from 'react-hook-form'

function ReactHookForm() {
  const { register, handleSubmit, watch, formState } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log('is this formState-->', formState)
  console.log(watch('example')) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue='test' {...register('example')} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('exampleRequired', { required: true })} />
      {/* errors will return when field validation fails  */}
      {formState.errors.exampleRequired && <span>This field is required</span>}

      <input type='submit' />
    </form>
  )
}

export default ReactHookForm
