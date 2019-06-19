import React from 'react'
import axios from 'axios'
import {Card , ListGroup , ListGroupItem } from 'react-bootstrap'
import InlineBlock from  'react-inline-block'


const style3={
    display:'block',
    margin:'25px 50px 75px 100px',
    paddingLeft: '5px',
    boxShadow: '0 4px 50px 0 rgba(173, 9, 138, 0.2)',
    transition: '0.3s',
    borderRadius:'20px',
    background:'linear-gradient(to right bottom,#24c6dc, #514a9d)',
    color:'#4B0082'

}

class Home extends React.Component{

    state = {
        object : [],
        articles : []
    }

    componentDidMount(){
        axios
          .get("https://newsapi.org/v2/top-headlines?country=in&apiKey=3ef98a973fef4453bed36dcca14fb34a")
          .then(res =>  res.data)
          .then(object => this.setState({object , articles:object.articles}))
          .catch(err => console.error(err+"in error block"));
    }
    render(){
        return (
            <div align = "center">
                {console.log(this.state.articles)}
                {this.state.articles.map(item =>(
                    <InlineBlock style = {style3}>
                         <Card style={{ width: '18rem'  , height :'40rem'}}>
                            <Card.Img variant="top" style ={{height:'150px' , width:'18rem'}} src={item.urlToImage}/>
                            <Card.Body>
                                <Card.Title>Headlines</Card.Title>
                                <Card.Text>
                                    <h6>{item.title}</h6>
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{item.description}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href={item.url}>Compleate Story</Card.Link>
                            </Card.Body>
                        </Card> 
                    </InlineBlock>
                ))}
            </div>
        )
    }
}

export default Home;






//  <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//                     <Card.Body>
//                         <Card.Title>Card Title</Card.Title>
//                         <Card.Text>
//                             Some quick example text to build on the card title and make up the bulk of
//                             the card's content.
//                         </Card.Text>
//                     </Card.Body>
//                     <ListGroup className="list-group-flush">
//                         <ListGroupItem>Cras justo odio</ListGroupItem>
//                         <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
//                         <ListGroupItem>Vestibulum at eros</ListGroupItem>
//                     </ListGroup>
//                     <Card.Body>
//                         <Card.Link href="#">Card Link</Card.Link>
//                         <Card.Link href="#">Another Link</Card.Link>
//                     </Card.Body>
//                 </Card> 