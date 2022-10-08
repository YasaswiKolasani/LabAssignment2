import React, { useState } from 'react';
import img1 from "./yasaswi-photo.jpg";
import Form from 'react-bootstrap/Form';
const Profile =(props)=> {
    const [name, setName] = useState("Yasaswi Kolasani");
    const [description, setDesc] = useState("Pursuing Masters in computer science. Enrolled in the software engineering course.");
    const submit = (event) =>{
            event.preventDefault();
    };
        return(
            <div className="container">
                <div className='row'><br></br></div>
                <div className="row">
                    <div className='col-3'>
                        <img src={img1} width="250" height="300" alt="Yasaswi Kolasani"/>
                    </div>
                    <div className='col'>
                        <div>
                            <Form onSubmit={submit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control value={name} onChange={e=>setName(e.target.value)} size="lg" type="text" placeholder="" />
                                <br></br>
                                <Form.Control value={description} onChange={e=>setDesc(e.target.value)} size="sm" as='textarea' placeholder="" rows={10} />
                            </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default Profile;