import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";


const App = () => {
    return (
        <div className="app-wrapper">
           <Header />
            <Navbar />

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
