import './App.css';
import { Container } from '@material-ui/core';
import React from 'react';
import WishList from './components/WishList';
import AddWish from './components/AddWish'
import Button from './components/Button'

export default class App extends React.Component
{  
  constructor(props) {
    super(props)
    this.state = {
      wishes:null
    }
  }

  componentDidMount(){
    console.log('jjj')

    fetch("http://127.0.0.1:8000/api/wishes")
          .then((response) =>{
            if(response.ok){
              return response.json()
            }            
          })  
          .then ((data) => {
            this.setState({wishes:data.data}
             )
          })        
          .then((data1) => console.log('dddddd',data1));

  }



onAddWish =() =>{
alert('hh')
  }
  render(){
    return (
      <Container maxWidth='lg'  style={{ backgroundColor: '#cfe8fc' }} >
        <Button text='Add' color='green' onClick={this.onAddWish}/>
        <AddWish />
        <WishList title='hh' wishes={this.state.wishes}/>
        
      </Container>
    )
    
  }
}





