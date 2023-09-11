import { useForm } from "react-hook-form";
import categories from "../categories";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const schema = z.object({
  description: z.string().min(3, { message: "Description is required*" }).max(50),
  amount: z.number({ invalid_type_error: "The amount field is required*" }).min(0.01).max(100_000),
  category: z.enum(categories, {
  errorMap: () => ({ message: "Category is required*" }),
  })

});



type ExpenseFormData = z.infer<typeof schema>;

const ExpenseInputs= ({onSubmit}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({resolver: zodResolver(schema)});

 

  return (
    <>
      <h3>ExpenseInputs</h3>
      <form onSubmit={handleSubmit(data  => {
        onSubmit(data)
        reset()
      })}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true, required: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="categories">Category</label>
          <select
            className="form-select form-select-lg"
            {...register("category", { required: true })}
            // className={`form-select ${errors.category ? "is-invalid" : ""}`} // Add 'is-invalid' class if there's an error
            id="categories"
          >
            <option value="" selected>
            </option>
            {categories.map(category => <option key={category} value={category}>{category}</option>)}
            </select>
            {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>

        <button className="btn btn-primary mb-4" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default ExpenseInputs;
