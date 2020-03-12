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
		$scope.Grupo_ID ="DIU2.A";
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
                goal1: "Quiere preparar un viaje a un festival de música con sus amigos",
                touch1: "Movil(Whatsapp)",
                feel1: "5",
                con1: "Encontrar lugar donde alojarse",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca alojamientos en internet",
                touch2: "Portatil",
                feel2: "2",
                con2: "Cuesta encontrar sitio porque está todo a tope",
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
                feel5: "4",
                con5: "Le preocupa la calidad del sitio",
                ima5: "cartoon-PChappy.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "¡Llega a la habitación y le encanta!",
                touch6: "Realidad",
                feel6: "5",
                con6: "Terminaron pisando poco la habitación, así que podía haber buscado una algo más barata",
                ima6: "cartoon-resting.png",
                
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
                goal1: "Quiere preparar un viaje con sus amigos a la feria de videojuegos E3, en Los Ángeles",
                touch1: "Movil(Telegram)",
                feel1: "5",
                con1: "Va a ser carísimo y habrá poco alojamiento disponible",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Hay que ponerse de acuerdo sobre los detalles",
                touch2: "Movil(Telegram)",
                feel2: "4",
                con2: "Cada persona quiere una cosa",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Busca sitio, pero hay demasiadas opciones y se angustia",
                touch3: "Sobremesa",
                feel3: "2",
                con3: "No sabe qué hacer",
                ima3: "cartoon-deciding.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca una habitación moderadamente económica",
                touch4: "Sobremesa",
                feel4: "4",
                con4: "Está algo lejos del evento",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a traves de la web",
                touch5: "Sobremesa",
                feel5: "4",
                con5: "Le da miedo llegar y encontrarse con algo que no le guste",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Llega a la habitación con sus amigos y al final resulta que no estaba tan mal conectada",
                touch6: "Realidad",
                feel6: "5",
                con6: "Las camas resultaron ser algo incómodas",
                ima6: "cartoon-happy.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



