import React from "react";
import {Link, Redirect} from 'react-router-dom';
import "./AddHotDog.css";


class AddHotDog extends React.Component{
    state = {
        name: null,
        price: null,
        description: null,
        image: null,
        isRedirect: false
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

    onSendData = (event) => {
        event.preventDefault();
        const {name, price, description, image} = this.state;
        this.props.onAddHotDog(name, price, description, image);
        this.setState({
            isRedirect: true
        })
    }


    render(){
        if(this.state.isRedirect){
            return <Redirect to='/' />
        }
        return(
            <div className='col-4'>
                <h3 style={{textAlign: 'center'}}>Add new hot-dog</h3>
                <form onSubmit={this.onSendData}>
                    <input
                     type='text'
                     placeholder='Name'
                     className='form-control'
                     onChange={this.getName} />

                    <input 
                    type='number' 
                    placeholder='Price' 
                    className='form-control' 
                    onChange={this.getPrice}/>
                    
                    <input 
                    type='text' 
                    placeholder='Description' 
                    className='form-control' 
                    onChange={this.getDescription}/>

                    <input 
                    type='url' 
                    placeholder='Image' 
                    className='form-control' 
                    onChange={this.getImage}/>
                   <button className="edit" type='submit'>Add new hot-dog</button>
                   <Link
                        to="/">
                    <button className="edit" type='reset'> No, thanks</button>
                </Link>
                   
                </form>
            </div>
        )
    }
}

export default AddHotDog;