import React from 'react'

function Edit() {
  return (
    <div>
          <h1> Edit Form</h1>
         <form>
         <div>
             <label>First Name : </label>
             <div>
             <input type='text' placeholder='FirstName' name='fname'></input>
             </div>
         </div>
         <div>
             <label>Last Name : </label>
             <div>
             <input type='text' placeholder='LastName' name='lname'></input>
             </div>
         </div>
         <div>
             <label>Email  : </label>
             <div>
             <input type='email' placeholder='E-mail' name='email'></input>
             </div>
         </div>
         <input type='submit' value='Save'></input>
            
         </form>

        
    </div>
  )
}

export default Edit