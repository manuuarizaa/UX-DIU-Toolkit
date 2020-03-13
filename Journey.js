/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU2.A Título: Compañeros Reguleros ";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Anastasia",
                Photo: "anastasia.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje a un festival de música ella sola",
                touch1: "Anuncio en una web",
                feel1: "5",
                con1: "Encontrar lugar donde alojarse",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca hoteles cercanos",
                touch2: "Portatil",
                feel2: "2",
                con2: "Es demasiado caro",
                ima2: "cartoon-writting2.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Investiga varias páginas de alquileres",
                touch3: "Portatil",
                feel3: "3",
                con3: "Se satura de información",
                ima3: "cartoon-PChard.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Una amiga le recomienda una página",
                touch4: "Movil(Whatsapp)",
                feel4: "3",
                con4: "Todavía tiene que encontrar un sitio en la página",
                ima4: "cartoon-phone.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
               	goal5: "Encuentra una habitación cerca del festival",
                touch5: "Portatil",
                feel5: "3",
                con5: "Le preocupa como serán el resto de compañeros, ya que la web no lo especificaba",
                ima5: "cartoon-PChappy.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Llega a la habitación y los compañeros son muy irrespetuosos",
                touch6: "Realidad",
                feel6: "2",
                con6: "Aunque estuvo poco tiempo en la habitación, sus compañeros eran muy ruidosos e irrespetuosos, y le fastidiaron bastante la experiencia",
                ima6: "cartoon-awaking.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "José",
                Photo: "jose.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Su amigo Paco ha vendido su piso y ha sacado un dinerillo, y le ha dado la idea",
                touch1: "Realidad",
                feel1: "3",
                con1: "No le gusta la idea de dehacerse por completo del piso",
                ima1: "cartoon-talking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide alquilar uno de sus pisos porque no le da mucho uso",
                touch2: "Sobremesa",
                feel2: "4",
                con2: "Le preocupa lo bien que lo vayan a tratar",
                ima2: "cartoon-thinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Busca sitio donde vender",
                touch3: "Sobremesa",
                feel3: "2",
                con3: "Hay demasiadas opciones",
                ima3: "cartoon-deciding.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Encuentra una página con la interfaz muy clara y le gusta",
                touch4: "Sobremesa",
                feel4: "4",
                con4: "Parece que no la usa mucha gente en Granada y no le da buena espina",
                ima4: "cartoon-PChappy.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Entra a la sección para colgar su piso y le piden demasiados datos",
                touch5: "Sobremesa",
                feel5: "2",
                con5: "No da abasto a rellenar tanta información, por lo que termina abrumado",
                ima5: "cartoon-PCangry.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Termina quemándose y decide no alquilar el piso",
                touch6: "Sobremesa",
                feel6: "2",
                con6: "Ha perdido un posible negocio",
                ima6: "cartoon-PCcrying.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



