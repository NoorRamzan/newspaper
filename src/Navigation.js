// import Login from "./Login"
function Navigation(){
    // js
    let Name ='noor'
    console.log(Name)
    function clickMe(){
        alert('click me')
    }
    const data = [
        {
            "Name":"noor",
             "Id" : 1,
             "password":123,
             "imageUrl": 'https://i.imgur.com/yXOvdOSs.jpg',

        },
        {
            "Name":"fatima",
             "Id" : 2,
             "password":1234,
             "imageUrl": 'https://i.imgur.com/yXOvdOSs.jpg',

        },

    ]

    return (
     
        <>
         {data.map((data)=>{
            
         })}
        <button onClick={clickMe}>button</button>
        <h1>{Name}</h1>
      
          <ol className="heading">
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
               
             </ul>
          </ol>
          {/* <Login/> */}
        </>
    )
}
export default Navigation