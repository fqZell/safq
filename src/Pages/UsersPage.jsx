import React, { useEffect, useState } from 'react'

const UsersPage = () => {

    const [items, setItems] = useState([]);

    useEffect(() => { 
        fetch("https://jsonplaceholder.typicode.com/users") 
          .then((response) => response.json()) // преобразование в json формат для чтения 
          .then((data) => { 
            setItems(data) // запись в основной массив 
          }); // запись в массив всех предметов 
      }, []);

  return (
    <>
    
        <div className="container users">
                
            <h2>Пользователи</h2>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.email}</p>
                        <hr />
                    </li>
                ))}
            </ul>

        </div>
    
    </>
  )
}

export default UsersPage