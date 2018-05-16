import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Main.css';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="main">
                <h2> { this.props.currentPage } </h2>
                <hr />
                <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae diam neque. Duis cursus tincidunt lectus ut mattis. Etiam ut neque odio. Donec a lacus vulputate, vulputate diam ut, euismod purus. Fusce eget eleifend ipsum. Sed fermentum tortor vel nunc venenatis consectetur. Pellentesque scelerisque convallis odio quis sodales. Aliquam a lorem pulvinar mauris sagittis fringilla. Sed egestas orci eu ipsum pellentesque ultrices. In consequat placerat pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam congue varius dapibus. Curabitur aliquet enim nibh, eget dignissim nisi porta tempus. Pellentesque ac magna lacinia, laoreet est ut, luctus dui. Integer semper, augue quis hendrerit blandit, sapien magna cursus elit, et vehicula magna est condimentum nibh. Nam nec turpis nec tellus sollicitudin rutrum.

                    Curabitur ligula nisi, dapibus vel eleifend pharetra, venenatis at dui. Donec nec tincidunt justo, vel euismod tellus. Donec interdum dignissim feugiat. In vitae gravida orci, at dignissim arcu. Morbi varius odio quis arcu fermentum interdum. Maecenas vitae mollis turpis, quis egestas nisl. Sed tincidunt vestibulum enim vitae euismod. Aliquam et metus tellus. Suspendisse a porta lacus. Vivamus convallis consequat hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis malesuada mi. Sed rutrum eleifend turpis, ac aliquet purus ultricies sit amet. Integer sit amet finibus tellus. 
                    </p>
                </div>    
            </div>
        );
    }
}

export default Menu;

