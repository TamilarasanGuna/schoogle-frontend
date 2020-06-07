import React from 'react'
import "./teacherdetails.css"
export default function teacherdetails() {
    return (
        <div class = "container">
            <form>
                <div>
                    <h3>Teacher Details</h3>
                </div>

                
                    <label>Teacher FirstName</label><br/>
                    <input type="text" id="fname" placeholder = "First name"/><br/><br/>


                    <label>Teacher LastName</label><br/>  
                    <input type="text" id="fname" placeholder = "Last name"/><br/><br/>
    

              
                    <label> Teacher ID</label><br/>
                    <input type="text" id="fname" placeholder = "Your ID"/><br/><br/> 

                    <input type="checkbox" name = "make admin"/>
                    <label>Make admin</label><br/>
 
                    <input type="save" value ="save"/>

            </form>
        </div>
    )
}
