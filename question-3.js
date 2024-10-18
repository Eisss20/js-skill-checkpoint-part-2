const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return data 
  };

async function displayGetUser() {
 try {
        let users = await getUser();
        let findtheUser = users
        .map(users => users.name)  //map = ดึงค่ามาเป็นค่าใหม่ 
        .filter(name => name.length > 17) // map เปลี่ยนค่าเป็น name 
        console.log(findtheUser);
     } catch (error) {
    console.log(error)
    }   
}

displayGetUser()