import React, { useState} from "react";

function Crud(){
    const [user,setUser] = useState([
        {name:'zain',email:'zain@gmial.com'}
    ])

    const [data,setData] = useState(
        {name:'',email:''}
    )

    const inputHandler = (e)=>{
        if(e.target.id === 'name'){
            setData({...data,name:e.target.value})
        }
        if(e.target.id === 'email'){
            setData({...data,email:e.target.value})
        }
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(data);
        setUser([...user,data]);
      setData({ name: "", email: ""});

    }
    const UpdateHandler = (index)=>{
        let arr = user[index];
        // console.log(arr)
        setData({
            name:arr.name,
            email:arr.email
        })
    }

    const DeleteHandler = (index)=>{
        console.log(index);
        let arr = user;
        arr.splice(index,1);
        setUser([...arr])
    }
    return(
        <>

<div>
    <form onSubmit={onSubmitHandler}>
        <input type='text' placeholder="Name" id='name' onChange={inputHandler} value={data.name} />
        <input type='email' placeholder="email" id='email' onChange={inputHandler} value={data.email} />
        <input type='submit' name='Submit' />
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Update</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                {user.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td><input type='button' value="update" onClick={()=>UpdateHandler(index)}/></td>
                            <td><input type='button' value="delete" onClick={()=>DeleteHandler(index)}/></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </form>
</div>
        </>
    )
}

export default Crud