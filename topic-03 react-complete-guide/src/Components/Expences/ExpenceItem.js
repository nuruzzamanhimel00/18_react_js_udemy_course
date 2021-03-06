import ExpenceDate from './ExpenceDate.js'
import Card from '../UI/Card.js'
import './ExpenceItem.css'

const ExpenceItem = (props) =>{

    return (
       <Card className='experience-item'>
           <ExpenceDate datetime={props.datetime} />
           
           <div className='experience-item-price'>
               <h2> {props.title} </h2>
               <div>${props.amount}</div>
           </div>
       </Card>
    );
}

export default ExpenceItem;