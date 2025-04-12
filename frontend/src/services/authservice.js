const URL = "https://bookfind-backend.onrender.com"
export const userlogin= async (userdetails)=>{
    const result = await fetch(`${URL}/api/user/login`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(userdetails)
      })
    return result
}
// registration
export const registration = async (userdetails)=>{
    const result = await fetch(`${URL}/api/user/register`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(userdetails)
      })
    return result

}
