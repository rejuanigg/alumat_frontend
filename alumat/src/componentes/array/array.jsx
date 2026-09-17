import './array.css'

const mainArray = [
    {
        id:1,
        name:'Ventana',
        type:'ventana',
        price:0,
        status:true
    },
    {
        id:2,
        name:'Puerta',
        type:'puerta',
        price:23333,
        status:true
    },
    {
        id:3,
        name:'Ventana',
        type:'ventana',
        price:23333,
        status:true
    },
    {
        id:4,
        name:'Puerta media',
        type:'puerta',
        price:23333,
        status:true
    },
        {
        id:5,
        name:'Ventana alta',
        type:'ventana',
        price:23333,
        status:true
    },
    {
        id:6,
        name:'Puerta alta',
        type:'puerta',
        price:23333,
        status:false
    },
]

const filterByStatus = mainArray.filter((p)=> p.status === true)

filterByStatus.map((p)=>{
        <div>
            <h3>{p.name}</h3>
            <p>{p.type}</p>
            <span>{p.price}</span>
        </div>
        }
    )
function Arrayfunction(){
    return (
        <div className='product-list'>
            {filterByStatus.map((p) => (
                <div className='product-list--item'>
                    <h3 className='title'>{p.name}</h3>
                    <p className='paragraph'>{p.type}</p>
                    <span className='price'>$ {p.price}</span>
                </div>
            ))}
        </div>
    )
}

export default Arrayfunction