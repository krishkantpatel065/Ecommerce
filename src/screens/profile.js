import React from 'react'
function Profile() {
    const user = JSON.parse(localStorage.getItem("user"))?.[0];
    
  return (
    <div>
        <h2>User Details</h2>
        <div style={{border:"1px solid gray",borderRadius:'10px',padding:"10px",width:"300px",margin:"auto",boxShadow:" rgba(185, 168, 35, 0.34) 1px 10px 18px 6px"}}>
         <div style={{margin:"auto",textAlign:"center"}}>
         <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Login" class="_1XmrCc _2zJ7Pb" width="24" height="24"/>
          </div>
        {user ? (
            <div >
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>
        ) : (
            <div  >
            <p>No user information available</p>
            </div>
        )}
        </div>
    </div>
  )
}

export default Profile;


