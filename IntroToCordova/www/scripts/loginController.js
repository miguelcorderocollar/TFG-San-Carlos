﻿(function () {

    var app = angular.module("tfgSanCarlos");

    var loginController = function ($scope) {

        //Comprueba si un string contiene numeros
        $scope.hasNumber = function (myString) {
            return /\d/.test(myString);
        }

        //Funcion para  comprobar credenciales y guardar en memoria
        $scope.logInSend = function () {
            var Area = $("#Area").val();
            var Perfil = $("#Perfil").val();
            var Apellido = $("#Apellido").val();
            var Hab = $("#Hab").val();
            var Genero = $("#Genero").val();
            //Hacer la parte de preguntar a la base de datos
            localStorage.setItem('signedIn', 'Yes');
            localStorage.setItem('Perfil', Perfil);
            localStorage.setItem('Area', Area);
            localStorage.setItem('Apellido', Apellido);
            localStorage.setItem('Hab', Hab);
            localStorage.setItem('Genero', Genero);
            window.location.href = "index.html#!/main";
        }
            
        //Si ya esta logeado lo manda a Main
        $(document).ready(function () {
            if (localStorage.getItem('signedIn') == 'Yes') { window.location.href = "index.html#!/main";}
        });


        //Cuando cambia alguna "select" comprueba si puede activar el boton de enviar
        $(document).ready(function () {
            $("select").change(function () {
                console.log("menterao")
                if ($scope.validateForm()) {
                    document.getElementById("#boton-enviar").disabled = false;
                    document.getElementById("textTermina").style.display = "none";
                }

            });
        });

        //Cuando cambia alguna "input" comprueba si puede activar el boton de enviar
        $(document).ready(function () {
            $( "input").change(function () {
               
                if ($scope.validateForm()) {
                    document.getElementById("#boton-enviar").disabled = false;
                    document.getElementById("textTermina").style.display = "none";
                }
                if (!$scope.validateForm()) {
                    document.getElementById("#boton-enviar").disabled = true;
                    document.getElementById("textTermina").style.display = "block";
                }
            });
        });

        //Valida el formulario
        $scope.validateForm = function () {
           
            console.log($("#Genero").val());
            console.log($("#Hab").val());

            var Area = $("#Area").val();
            var Perfil = $("#Perfil").val();
            var Apellido = $("#Apellido").val();
            var Hab = $("#Hab").val();
            var Genero = $("#Genero").val();
            var FechaNac = $("#FechaNac").val();
            if (Area == "Area") { return false }
            if (Perfil == "Perfil") { return false }
            if (Apellido == "") { return false }
            if (FechaNac == "") { return false }
            if (Genero == "" && Hab == undefined) { console.log("yo"); return false; }
            if (Genero == undefined && Hab == "") { console.log("ye"); return false; }
            if ($scope.hasNumber(Apellido)) { return false }
            if ($("#PoliticaPrivacidad").prop("checked") == false) { return false}
            else return true
        }

        
        
        
    };

    app.controller("loginController", loginController);

}());