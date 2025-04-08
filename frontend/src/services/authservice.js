export const userlogin= async (userdetails)=>{
    const result = await fetch("http://localhost:1500/api/user/login",{
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
    const result = await fetch("http://localhost:1500/api/user/register",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(userdetails)
      })
    return result

}