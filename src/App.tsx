import React from 'react';
import './App.css';
import Header from "./components/Header";


const App = () => {
    return (
        <div className="app-wrapper">
           <Header />
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Message</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>

            </nav>
            <div className="content">
                <div>
                <img src="https://i.pinimg.com/564x/61/1f/56/611f56fa4ed62d08428296604b568624.jpg"/>
                </div>

            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 3
                    </div>
                </div>
            </div>
            </div>

</div>
)
    ;
}

export default App;
