import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './EditHotDog.css';

class EditHotDog extends React.Component{
    state = {
        id: this.props.currentHotDog.id,
        name: this.props.currentHotDog.name,
        price: this.props.currentHotDog.price,
        description: this.props.currentHotDog.description,
        image: this.props.currentHotDog.image,
        isRedirect: false,
    };
    getName = event => {
        this.setState({
            name: event.target.value
        })
    }
    getPrice = event => {
        this.setState({
            price: event.target.value
        })
    }
    getDescription = event => {
        this.setState({
            description: event.target.value
        })
    }

    getImage = event => {
        this.setState({
            image: event.target.value
        })
    }

    onSendData = event => {
        event.preventDefault();
        const {id, name, price, description, image} = this.state;
        this.props.onEditCurrentHotDog(
            id, 
            name, 
            price, 
            description, 
            image, 
            );
        
        this.setState({
            isRedirect: true
        });
    };

    render(){
        const {
            name, 
            price , 
            description , 
            image} = this.state;
        if(this.state.isRedirect){
            return <Redirect to='/' />;
        }
        return(
            <div className='row'>
                <div className='col-md-4'>
                <h3 style={{textAlign: 'center'}}>Edit hot-dog</h3>
                <form onSubmit={this.onSendData}>
                    <input 
                    type='text' 
                    placeholder='Name'
                    value={name}
                    className='form-control' 
                    onChange={this.getName}
                    required/>

                    <input 
                    type='number' 
                    placeholder='price'
                    value={price}
                    className='form-control'
                    onChange={this.getPrice}
                    required/>

                  <input 
                    type='text' 
                    placeholder='description'
                    value={description}
                    className='form-control' 
                    onChange={this.getDescription}
                    required/>
                    
                    <input 
                    type='url' 
                    placeholder='image URL-address'
                    value={image}
                    className='form-control' 
                    onChange={this.getImage}
                    required/>
                   <button className="edit" title="upgrate">Upgrate</button>
                   <Link
                        to="/">
                    <button className="edit" type='reset'> Cancel</button>
                </Link>
                </form>
            </div>
            {/* <div className='col-md-2'>
                {({image}.length !== 0) ? <img src={image} alt={name}/> : <h3>No photo</h3>}
                
            </div> */}
            </div>
        )
    }
}
export default EditHotDog;