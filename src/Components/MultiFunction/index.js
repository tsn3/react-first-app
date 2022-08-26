import {fetchCustomers} from "../../asyncActions/customers";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useCount} from "../../hooks/useCount";
import {useCustomer} from "../../hooks/useCustomer";

export const MultiFunction = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count.count)
  const customers = useSelector(state => state.customers.customers)
  // useEffect(() => {
  //   dispatch({type: 'money', title: 'USA'})
  // }, [])

  const {increment, decrement} = useCount();
  const {addCustomer, removeCustomer} = useCustomer();

  const createCustomer = () => {
    const name = prompt()
    const id = new Date()
    return {name, id}
  }
  const removeCustomers = (customer) => {
    dispatch(removeCustomer(customer.id))
  }

  return (
    <>
      <div style={{fontSize:"3rem", marginBottom: 10}}>{count}</div>
      <div style={{display:"flex"}}>
        <button onClick={increment}>Увеличить</button>
        <button onClick={decrement}>Уменьшить</button>
        <button onClick={() => addCustomer(createCustomer())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div key={customer.id} style={{fontSize:"3rem", border: "1px solid black", padding: "10px", marginTop: 5}}>
              {customer.name}
              <button onClick={() => removeCustomers(customer)}>Удалить клиента</button>
            </div>
          )}
        </div>
        :
        <div style={{fontSize:"2rem", marginTop:20}}>
          No customers!
        </div>
      }
    </>
  )
}