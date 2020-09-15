import React,{useState} from "react"

const Contact = () => {
    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    });
    const InputEvent=(event)=>{
        const {name,value}=event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`Your Information: ${data.fullname}. Phone: ${data.phone} Email: ${data.email} Message: ${data.msg}`)
    }
    return (<>
        <div className="my-5">
            <h1 className="text-center">Contact US</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <form>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1">
                                    FullName
    </label>
                                <input type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1">Phone </label>
                                <input type="number" class="form-control" id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Enter Mobile Number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="Enter Email " />
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                    rows="3"></textarea>
                            </div>
                            <br />
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </form>
                </div>

            </div>
        </div>
    </>)
}
export default Contact;