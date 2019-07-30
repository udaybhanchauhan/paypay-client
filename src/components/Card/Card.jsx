import React,{Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import './index.css';
export default class CardEx extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Card">
                <Card>
                    <CardImg                        
                        width="100%"
                        src="https://udemy-images.udemy.com/course/480x270/1482198_f741.jpg" 
                        alt="Card image cap" 
                    />
                    <CardBody>
                        <CardTitle>This is Card Title</CardTitle>
                        <CardSubtitle>This is Card Sub Title</CardSubtitle>
                        <CardText>THis is text</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}