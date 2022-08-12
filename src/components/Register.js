import { useEffect, useState } from "react";

const Register = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [state, setState] = useState ({
        nombre : '',
        email : '',
        password : '',
        error : null,
        
    })

    const registrarse = async () => {
        let item = {name,password,email}
        let data = await fetch(`http://localhost:5000/register`,{
            'method':'POST',
            headers : {
            'Content-Type':'application/json',
            "Accept" :'application/json' 
            },
        body:JSON.stringify(item)
        })
        if(data.ok){
            let datos = await data.json();
            //console.log(datos)
            localStorage.clear();
            window.location.href = '/';
            alert("Usuario registrado satisfactoriamente")
        }
    }

    const onSubmit = (e) => {
        e.preventDefault ();
        console.log("Enviando formulario");
        let hasError = false
        if(e.target.nombre.value === "") { 
            setState(prevState => {
                return {
                    ...prevState,
                    error: {
                        ...prevState.error,
                        nombre:{
                            msg : "Por favor, introduzca su username",
                        } 
                    }
                }    
            })
            hasError = true;
        } else {
            setState(prevState => {
                delete prevState.error?.nombre;
                return {
                    ...prevState, 
                }
            })
        } 
        if(e.target.email.value === "") { 
            setState(prevState => {
                return {
                    ...prevState,
                    error: {
                        ...prevState.error,
                        email:{
                            msg : 'Por favor, introduzca su email',
                        } 
                    }
                }    
            })
            hasError = true;
        } else {
            setState(prevState => {
                delete prevState.error?.nombre;
                return {
                    ...prevState, 
                }
            })
        } 
        if (e.target.password.value === "") {
            setState(prevState => {
                return {
                    ...prevState,
                    error: {
                        ...prevState.error,
                        password:{
                            msg : 'Por favor, introduzca su password',
                        } 
                    }
                }    
            })
            hasError = true;
        } else {
            setState(prevState => {
                delete prevState.error?.password;
                return {
                    ...prevState, 
                }
            })
        } 
        
        /*if (!hasError == false){ 
            console.log("tengo error")

            return;
        }*/
        if (hasError) return;
    }   

    return (  
        <>
            <div className="modal fade bs-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        >
                        <span aria-hidden="true">
                            <i className="fa fa-close" />
                        </span>
                        </button>
                        <h4 className="modal-title" id="myLargeModalLabel">
                        Registrarse
                        </h4>
                        <form className="lg-frm" style={{ padding: 25 }} onSubmit={onSubmit}>
                        <label>Nombre :</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Introduzca su nombre"
                            name="nombre"
                            //value={state.nombre}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {!!state.error && state.error.nombre ? state.error.nombre.msg : ""}
                        <br/>

                        <label>Email :</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Introduzca su email"
                            name="email"
                            //value={state.email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {!!state.error && state.error.email ? state.error.email.msg : ""}
                        <br/>

                        <label>Password :</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Introduzca su password"
                            name="password"
                            ///value={state.password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {!!state.error && state.error.password ? state.error.password.msg : ""}
                        <br/>
                        
                        <button
                            type="button"
                            className="btn btn-default pull-right"
                            type="submit"
                            value="Submit"
                            onClick={registrarse}
                        >
                            Enviar
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>

    );
   
}

export default Register;