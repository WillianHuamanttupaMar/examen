/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// JavaScript Document
function validar(){
	var nombre, apellidos, correo, usuario, contraseña, telefono, genero, expresion;
	
	nombre= document.getElementById("nombre").value;
	apellidos= document.getElementById("apellidos").value;
	correo= document.getElementById("correo").value;
	usuario=document.getElementById("usuario").value;
	contraseñae= document.getElementById("contraseña").value;
	telefono= document.getElementById("telefono").value;
	genero= document.getElementById("genero").value;
	expresion = /\w+@\w+\.+[a-z]/;
	texto123@hgmail.com
	
	if (nombre ==""|| apellidos==""|| correo==""|| usuario==""|| contraseña==""|| telefono==""|| genero==""||){
	alert("todos los campos son obligatorios");
	return false;
	}
	
    else if (nombre.length>30){
	alert("El campo nombre es muy largo");
	return false;
	}
	
	else if (napellidos.length>100){
	alert("El campo nombre es muy largo");
	return false;
	}
	else if (correo.length>100){
	alert("El campo nombre es muy largo");
	return false;
	}
	else if(expresion.test(correo)){
		alert("el correo no es valido");
		return false;
	}
	else if (usuario.length>20){
	alert("El campo nombre es muy largo");
	return false;
	}
	else if (contraseña.length>20){
	alert("El campo nombre es muy largo");
	return false;