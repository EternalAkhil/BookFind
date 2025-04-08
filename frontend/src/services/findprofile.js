

const findprofile = async ()=>{
    const token = localStorage.getItem("token")
    const result = await fetch(`http://localhost:1500/api/user/profile/displayprofile/${token}`,{
        method:'GET'
    })
    return result;
}

const updateprofile = async(profileinfo)=>{
    const result = await fetch('http://localhost:1500/api/user/profile/update',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(profileinfo)
    })
    return result
}

export {findprofile,updateprofile}