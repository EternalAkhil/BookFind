
const URL = "https://bookfind-backend.onrender.com"
const addfav = async(favdetails)=>{
  const email = localStorage.getItem("user")
  const data = {email:email,...favdetails}
  const result = await fetch(`${URL}/api/user/fav/addfav`,{
    method:'POST',
    headers:{
      
      'Content-Type':'application/json',
    },
    body:JSON.stringify(data)
  })
  return result;
}
// DISPLAY FAVOURITES 
const displayfav = async()=>{
  const data = {email:localStorage.getItem("user")}
  const result = await fetch(`${URL}/api/user/fav/displayfav`,{
    method:'POST',
    headers:{
      
      'Content-Type':'application/json',
    },
    body:JSON.stringify(data)
  })
  return result;
}
// DELETE FAVOURITES

const deleteFav = async(id)=>{
  const result = await fetch(`${URL}/api/user/fav/deletefav/${id}`,{
    method:'DELETE',
  })
  return result;
}
export {addfav,displayfav,deleteFav};
