import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("dev"); // hooks

  const [employees, setEmployees] = useState([
    {
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg",
    },
    {
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/5717512/pexels-photo-5717512.jpeg",
    },
    {
      name: "John",
      role: "Director of Eng.",
      img: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg",
    },
    {
      name: "Maelanie",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg",
    },
    {
      name: "Corey",
      role: "The Devops guy",
      img: "https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg",
    },
    {
      name: "Jake",
      role: "Senior Intern",
      img: "https://images.pexels.com/photos/5483063/pexels-photo-5483063.jpeg",
    },
  ]);

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
