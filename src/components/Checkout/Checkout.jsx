import { useForm } from "react-hook-form";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { Navbar } from "../Navbar/Navbar";

export const Checkout = () => {
  
    const { cart, total } = useContext(CartContext)
    const {register, formState: { errors }, watch, handleSubmit} = useForm()

    const onSubmit = (data) => {
    const order = {
      buyer: {
        buyer: data,
      },
      items: cart.map((productos) => ({
        id: productos.id,
        nombre: productos.name,
        precio: productos.price,
        quantity: productos.quantity,
        image: productos.img,
      })),
      total: total(),
    }
    
    const db = getFirestore()
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, order, alert("Su checkout fue correcto")).then(
      ({ id }) => console.log(id)
    )
    console.log(data)
    }
  
    return (
        <div>
            <Navbar></Navbar>
            <h2>Registro</h2>
            <h4>Nombre: {watch("nombre")}</h4>
            <div class='container d-flex justify-content-center align-items-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label class="form-label">Nombre</label>
                    <input type="text" class="form-control" {...register("nombre", { required: true, maxLength: 10 })} />
                    {errors.nombre?.type === "required" && <p>El campo es requerido</p>}
                    {errors.nombre?.type === "maxLength" && (
                    <p>El campo debe tener menos de 6 caracteres</p>
                    )}
                </div>
                <div>
                    <label class="form-label">Email</label>
                    <input type="text" class="form-control" {...register("email", { pattern: /\w+@+[gmail]\w+\.+[a-z]/ })} />
                    {errors.nombre?.type === "required" && <p>El campo es requerido</p>}
                    {errors.email?.type === "pattern" && (
                    <p>El formato del email es incorrecto</p>
                    )}
                </div>
                <div>
                    <label class="form-label">Direccion</label>
                    <input type="text" class="form-control" {...register("direccion", { required: true })} />
                    {errors.direccion?.type === "required" && (
                    <p>El campo es requerido</p>
                    )}
                </div>
                <div>
                    <input type="submit" value="Enviar" className="boton-azul"></input>
                </div>
            </form>
            </div>
        </div>
    )
}