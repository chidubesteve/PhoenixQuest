import React, { useState } from "react";

// import ExpenseInputs from "./components/ExpenseTracker/components/ExpenseInputs";
// import AllCategoriesFilter from "./components/ExpenseTracker/components/AllCategoriesFilter";
// import ExpenseTable from "./components/ExpenseTracker/components/ExpenseTable";


const App = () => {


  // // Define state to hold form data
  // const [expenseInputs, setExpenseInputs] = useState([
  //   { id: 1, description: "Milk", amount: 10, category: "Groceries" },
  //   { id: 2, description: "Electricity", amount: 100, category: "Utilities" },
  //   { id: 3, description: "Movies", amount: 10, category: "Entertainment" },
  //   { id: 4, description: "Fruits", amount: 50, category: "Groceries" },
  //   { id: 5, description: "Airtime", amount: 500, category: "Utilities" },
  //   { id: 6, description: "Chocolate", amount: 10, category: "Groceries" }
  // ]);

  // const [selectedCategory, setSelectedCategory] = useState("");

  // const filteredCategory = selectedCategory
  //   ? expenseInputs.filter((e) => e.category === selectedCategory)
  //   : expenseInputs;
  return (
    <>
   
    {/* <ExpenseInputs onSubmit={expense => setExpenseInputs([...expenseInputs, {...expense, id: expenseInputs.length + 1}])} />
      <AllCategoriesFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseTable
        expenses={filteredCategory}
        onDelete={(id) =>
          setExpenseInputs(expenseInputs.filter((e) => e.id !== id))
        }
      /> */}
    
    </>
  );
};

export default App;
