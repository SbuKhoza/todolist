import './Home.css';
import {GoogleFont} from 'react-google-fonts';

function Home() {
    return (
        <GoogleFont />
        <div className="maincont">

            <div className="dash">


            </div>

            <div className='content'>

                <h1> Add a task</h1>
                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='tag'>
                    <h2>Yesterday you said Today. Just do it!</h2>
                </div>
            </div>

        </div>
    );
}

export default Home;