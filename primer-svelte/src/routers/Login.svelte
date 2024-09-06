<script lang="ts">
    import { Link, navigate } from  'svelte-routing';
    import { showDashboar } from '../stores/store';
    import { axiosTools } from "../stores/store";
    import { onMount } from 'svelte';
    let username:String="";
    let email:string="";
    let token:any="";
   async function toggDashboard(){
if ( username =="" && email ==""){
    alert("Ingresar usuario y contraseña")
}else if (username =="")
{
    alert("ingresar usuario")
}else if (email ==""){
    alert("inresar contraseña")
}else{
    alert("ok")
   try {
                const response = await fetch("http://localhost:8080/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, email }),
                });
                if (!response.ok) {
                    const errorData = await response.json();
                    console.error("Error:", errorData.message);
                    return;
                }
                const data = await response.json();
                if (data.token) {
                    token = data.token;
                    localStorage.setItem("token", token); 
                    console.log("JWT Token:", token);
                    navigate("/Dashboard"); 
                } else {
                    console.error("Token no encontrado en la respuesta");
                }
            } catch (error) {
                console.error("Error en la solicitud:", error);
            }
    }
}
onMount(() => {
        token = localStorage.getItem("token") || "";
    });


    
</script>

<div>
    <input bind:value={username} placeholder="usuario" required>
    <input bind:value={email} placeholder="Contraseña" required>
    <p on:click={toggDashboard}>Entrar</p> 
</div>

