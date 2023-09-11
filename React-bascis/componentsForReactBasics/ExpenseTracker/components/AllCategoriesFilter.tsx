import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const AllCategoriesFilter = ({ onSelectCategory }: Props) => {
  return (
    <>
      <select
        className="form-select mb-5 form-select-lg"
        id="allCategories"
        onChange={(event) => onSelectCategory(event.target.value)}
        value="" // Set the initial value to an empty string
      >
        <option value="" aria-label="Default select example">
          All categories
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default AllCategoriesFilter;
