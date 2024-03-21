import './parent.css'
import Child from "./child"
function parent(){
    const status=[
       
        {
            id:1,name:"SHARIFA SHAIKH",age:21,gender:"female",Fcom:"Cognizant",mail:"shaikhsharifa762@gmail.com",bdate:"14-01-2003",avtar:"https://avatars.githubusercontent.com/u/145984673?v=4"
        },
        {
            id:2,name:"FARZANA SHAIKH",age:21,gender:"female",Fcom:" Telentica software",mail:"farshaikh564@gmail.com",bdate:"14-01-2003",avtar:"https://avatars.githubusercontent.com/u/145984007?v=4"
        },
        {
            id:3,name:"ASHWINI YADAV",age:21,gender:"female",Fcom:" Tech Mahindra",mail:"ashwiniyadav3703@gmail.com",bdate:"29-01-2003",avtar:"https://avatars.githubusercontent.com/u/147252354?v=4"
        },
        {
            id:4,name:"MOSIN BALSING",age:19,gender:"male",Fcom:" Wipro India",mail:"mosinbalsing@gmail.com",bdate:"13-03-2004",avtar:"https://avatars.githubusercontent.com/u/119176708?v=4"
        },
        {
            id:5,name:"PRAJWAL JAGTAP",age:19,gender:"male",Fcom:" Wipro India",mail:"rohiyjagtap5000@gmail.com",bdate:"22-05-2004",avtar:"https://avatars.githubusercontent.com/u/147252354?v=4"
        },
        {
            id:6,name:"SANJANA HODBE",age:19,gender:"female",Fcom:"persistent system ltd",mail:"hodbesanjana@gmail.com",bdate:"06-03-200",avtar:"https://avatars.githubusercontent.com/u/147395950?v=4"
        },

    ]
    return(
        <div>
            {status.map((ele,ind)=>{
                return<Child id={ele.id} name={ele.name} age={ele.age} gender={ele.gender} Fcom={ele.Fcom} mail={ele.mail} bdate={ele.bdate} avtar={ele.avtar}/>
            })}
        </div>
    )
}
export default parent