import React from "react";
import './hotDogsInfo.css';
import {Link} from "react-router-dom";
// import EditHotDog from "../../EditHotDog/EditHotDog";


class HotDogsInfo extends React.Component{

    state = {
        name: this.props.name,
        price: this.props.price,
        description: this.props.description,
        image: this.props.image,
    };

    render(){
        console.log(this.props)
        const { name, price, description, image} = this.state;
        return(
                //  <div className='col-3 hot_info'>
                //     <img src="https://thumbs.dreamstime.com/b/%D1%85%D0%BE%D1%82-%D0%BE%D0%B3-%D1%81-%D0%BC%D1%83%D1%81%D1%82%D0%B0%D1%80-%D0%BE%D0%BC-%D0%B8-%D0%B8%D0%B7%D0%BE-%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B5%D1%82%D1%87%D1%83%D0%BF-29951930.jpg" alt="hot-dog" />
                //     <h4>New Work City</h4>
                //     <p className="price">1<span>$</span></p>
                //     <p className="description">New Yorkers eat more hot-dogs than any other group in the country. From downtown Manhattan to Coney Island, when you buy your hot dog in the Big Apple, deli-style yellow mustard.</p>
                //     <Link to='/edit'
                //         title="Edit">
                //         <button className='edit' onClick={this.props.onEditHotDog}>Edit</button>
                //         </Link>
                // </div>
                // <div className='col-3 hot_info'>
                //     <img src="https://olegiya.com.ua/image/cache/data/statiyi/fast-fyd/shutterstock_301707353-280x210.jpg" alt='hot-dog' />
                //     <h4>Chicago</h4>
                //     <p className="price">2<span>$</span></p>
                //     <p className="description">The possible antithesis to New York dogs, Chicago dogs are layered with yellow mustard, dark green relish, topped with a dash of clety salt and served in a poppy seed bun.</p>
                //     <Link to='/edit'
                //         title="Edit">
                //         <button className='edit' onClick={this.props.onEditHotDog}>Edit</button>
                //         </Link>
                // </div>
                // <div className='col-3 hot_info'>
                //      <img src="https://odessa.eda.ua/images/512337-405-336-amerikanskij.jpg" alt='hot-dog' />
                //      <h4>Atlanta and the South</h4>
                //      <p className="price">2.5<span>$</span></p>
                //      <p className="description">Buying a hot dog at Turner Field, home of the Atlanta Braves, or elsewhere in Atlanta and the south, you'll find your topped with coleslaw and perhaps some delicious Vidalia onions.</p>
                //      <Link to='/edit'
                //         title="Edit">
                //         <button className='edit' onClick={this.props.onEditHotDog}>Edit</button>
                //         </Link>
                // </div>
                // <div className='col-3 hot_info'>
                //     <img src="https://images.ua.prom.st/1821196847_1821196847.jpg?PIMAGE_ID=1821196847" alt='hot-dog' />
                //     <h4>Kansas City</h4>
                //     <p className="price">1.2<span>$</span></p>
                //     <p className="description">Get the mints out - you'll need them when you order up a hot dog in KC as it is served with sauerkraut and meited Swiss cheese on a sesame seed bun.</p>
                //     <div className="div">
                //     <Link to='/edit'
                //         title="Edit">
                //         <button className='edit' onClick={this.props.onEditHotDog}>Edit</button>
                //         </Link>
                //     </div>
                // </div> 
                <div className='col-3 hot_info'>
                <li>
                    <img src={image} alt='{name}' />
                    <h4>{name}</h4>
                    <p className="price">{price}<span>$</span></p>
                    <p className="description">{description}</p>
                    <div className="div">
                    <Link to='/edit'
                        title="Edit">
                        <button className='edit' onClick={this.props.onEditHotDog}>Edit</button>
                        </Link>
                        <button className="edit" title='delete' onClick={this.props.onDeleteHotDog}>Delete</button>
                    </div>
                </li>
                </div>
        )
    }
}
export default HotDogsInfo;
