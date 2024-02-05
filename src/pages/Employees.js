import "../index.css";
import Employee from "../components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "../components/AddEmployee";
import EditEmployee from "../components/EditEmployee";
import Header from "../components/Header";

function Employees() {
  const [role, setRole] = useState("dev"); // hooks

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg",
    },
    {
      id: 2,
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/5717512/pexels-photo-5717512.jpeg",
    },
    {
      id: 3,
      name: "John",
      role: "Director of Eng.",
      img: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg",
    },
    {
      id: 4,
      name: "Maelanie",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg",
    },
    {
      id: 5,
      name: "Corey",
      role: "The Devops guy",
      img: "https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg",
    },
    {
      id: 6,
      name: "Jake",
      role: "Senior Intern",
      img: "https://images.pexels.com/photos/5483063/pexels-photo-5483063.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <div className="">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                  id={employee.id}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default Employees;
