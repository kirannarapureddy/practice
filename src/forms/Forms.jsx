import {useState} from "react"
function Forms(){
    const [formdata, setFormdata]=useState({
        email:"",
        full_name:""
    })

    function handleChange(e){
        const {name,value} = e.target;
        setFormdata({
            ...formdata,
            [name]:value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formdata)
    }

    return(
        <div>
            <form>
                <label>email</label>
                <input type="email" name="email" value={formdata.email} onChange={handleChange}/><br/>
                <label>full name</label>
                <input type="text" name="full_name" value={formdata.full_name} onChange={handleChange}/><br/>
                <label>password</label>
                <input type="password" name="password" value={formdata.password} onChange={handleChange}/><br/>
                <label>gender:</label><br/>
                <input type="radio" name="gender" value={formdata.male} onChange={handleChange}/>male
                 <input type="radio" name="gender" value={formdata.female} onChange={handleChange}/>female<br/>
                <label>hobbies:</label>
                 <input type="checkbox" name="hobbies" value={formdata.playing} onchange={handleChange}/>playing
                  <input type="checkbox" name="hobbies" value={formdata.browsingnet} onchange={handleChange}/>browsing net
                   <input type="checkbox" name="hobbies" value={formdata.reading} onchange={handleChange}/>reading<br/>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default Forms