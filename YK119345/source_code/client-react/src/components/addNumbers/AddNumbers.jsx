import React from 'react';
import { useState } from 'react';

function AddNumbers() {
    
    const [firstNumber,setFirstNum] = useState(null);
    const [secondNumber,setSecondNum] = useState(null);
    const [result,setRes] = useState(null);
    // To be called after user clicks on submit.
    const mySubmitHandler = (event) => {

        event.preventDefault(); // prevent default behaviour
        //Constructing URL to send to the server.
        const url = `http://ec2-3-209-222-182.compute-1.amazonaws.com:3000/add/${firstNumber}/and/${secondNumber}`
        fetch(url)
            .then((result) => result.json())
            .then(result => {
                debugger;
                event.setRes(result.Addition)
            });
    };
    
    return(
        <div>
                <div className="container">
                    <div className="col">
                    <form onSubmit={mySubmitHandler}>
                    
                        <div className="form-group">
                        <div className="row">
                        <div className="col-3"><label htmlFor="firstNumber">Enter First Number:</label></div>
                        <div className="col-3"><input
                                type="number"
                                name="firstNumber"
                                id="firstNumber"
                                value={firstNumber}
                                className="form-control"
                                onChange={e=>setFirstNum(e.target.value)} /></div>
                        </div>
                        </div>
                        <br></br>
                        <div className="form-group">
                        <div className="row">
                        <div className="col-3"><label htmlFor="secondNumber">Enter Second Number:</label></div>
                            <div className="col-3"><input
                                type="number"
                                name="secondNumber"
                                id="secondNumber"
                                value={secondNumber}
                                className="form-control"
                                onChange={e=>setSecondNum(e.target.value)} /></div>
                        </div>
                        </div>


                        <br></br>
                        <div className='col-6'><button type="submit"  className="btn btn-primary">Submit</button></div>
                    </form>
                </div>
                </div>

                <div className="row">
                    <div className="col"><h4>Your Addition Result (from server) is: {result} </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {/*Not the best way to do it, but works for small compute operations*/}
                        <h4>Your Addition Result (from ReactJS) is: {Number(firstNumber) + Number(secondNumber)} </h4>
                    </div>
                </div>
            </div>
    );
}

export default AddNumbers;