import React, { FormEvent, useRef } from "react";
import {useForm, FieldValues} from 'react-hook-form';
import { z } from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(3, {message: "The name must be at least 3 characters"}), //to display friendly error message than that auto-gen by zod
  age: z.number({invalid_type_error: 'The age field is required*'}).min(18, {message: 'Age must be at least 18.'})
});

type FormData = z.infer<typeof schema>;
// the interface is used to ensurer type safety and auto completion since typescript compiler don't know the filed in our input
// interface FormData {
//     name: string;
//     age: number;
// }

const Form = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);

  const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>({resolver: zodResolver(schema)});


    const onSubmit = (data: FieldValues) => console.log(data)

//   const [person, setPerson] = useState({
//     name: "",
//     age: '',
//   });

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     // if (nameRef.current !== null)
//     //     person.name = nameRef.current.value;
//     // if (ageRef.current !== null)
//     //     person.age = parseInt(ageRef.current.value);
//     console.log(person);
//   };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label"
        >
          Name
        </label>
        <input
      {...register('name')}
          id="name"
          type="text"
          className="form-control"
        />
        { errors.name &&  <p className="text-danger">{errors.name.message}
       </p>} 
        {/*The zodlibrary generates the error message based on the type, so we don't need to check for the type and hardcoding the error message  */ }
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
     {...register('age', {valueAsNumber: true})}
          type="number"
          id="age"
          className="form-control"
        />
         { errors.age &&  <p className="text-danger">{errors.age.message}
       </p>} 
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
