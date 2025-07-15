import React from "react";

function UserItem({user}){
    console.log('user', user);
    return (
        <div style={{border:'1px solid black', margin:'10px', padding:'10px'}}>
            👤 {user.name}
        </div>
    )
}
export default React.memo(UserItem);