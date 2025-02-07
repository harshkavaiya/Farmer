import React from 'react'
import { useForm } from 'react-hook-form'
import useAuthStore from '../store/useAuthStore'



const UserReg = () => {

  const {
    register,
    handleSubmit,
  formState:{errors}, 
  }=useForm()

  const {UserSignUp} = useAuthStore.getState()
  
  const onsubmit = (data) => {
    console.log(data)
    UserSignUp(data)

 
  }
  return (
    <div>
    <form action="" onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name"  {...register("name")}/>
      </div>

      <div>
        <label htmlFor="email">email</label>
        <input type="text" id="email" {...register("email")} />
      </div>

      <div>
        <label htmlFor="mono">mono</label>
        <input type="number" id="mono" {...register("mono")} />
      </div>

      <div>
        <label htmlFor="pass">password</label>
        <input type="password" id="pass" {...register("password")} />
      </div>

      <div>
        <label htmlFor="country">country</label>
        <input type="text" id="country" {...register("country")} />
      </div>

      <div>
        <label htmlFor="state">state</label>
        <input type="text" id="state" {...register("state")} />
      </div>

      <div>
        <label htmlFor="city">city</label>
        <input type="text" id="city" {...register("city")} />
      </div>

      <div>
        <label htmlFor="pincode">pincode</label>
        <input type="number" id="pincode" {...register("pincode")} />
      </div>

      <div>
        <label htmlFor="address">address</label>
      <textarea name="" id="address" placeholder='enter your address' {...register("address")}></textarea>
      </div>
      <button>Submit</button>
    </form>
    </div>
  )
}

export default UserReg
