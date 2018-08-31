import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import './Blog.css';
import Posts from './Posts/Posts';

class Blog extends Component {

    render() {

        console.log('[Blog] inside render');
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts />
            </div>
        );
    }
}

export default Blog;
