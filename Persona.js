/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU2.A";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Anastasia",
				Photo: "anastasia.jpg",
				Quote: "Súbeme la radio que esta es mi canción",
				Age: 24,
				Occupation: "Camarera en un restaurante del centro de Granada",
				Family: "Soltera",
				Location: "Granada",
				Character: "Extrovertida y enérgica",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Cambiar de profesión", "Encontrar el amor de su vida"],
				Frustrations: ["Siente que no avanza en la vida", "El trabajo no le hace sentirse realizada"],
				Bio: "Anastasia es una chica de 24 años, nacida en Las Gabias, un pueblo de Granada, donde vivió con sus padres hasta los 18 años. Estudió, hasta terminar el bachiller, en Las Gabias, luego se mudó al centro de Granada, donde actualmente reside, para estar algo mas cerca de la facultad donde estudió ADE. Se sacó la carrera en esos 4 años, en los que a la vez trabajaba de camarera en un restaurante muy popular del centro de Granada, ya que tenía que pagarse el piso y no quería darle ese cargo a sus padres. Aún continúa trabajando a pesar de haber acabado la carrera hace 2 años, ya que no encuentra trabajo de lo que estudió y ese trabajo es el que por ahora la mantiene económicamente. Convivió durante los 4 años de carrera con 2 chicas mas, pero acabaron la carrera y se mudaron a otras ciudades, por lo que ahora ella vive sola y se le hace complicado llevar los pagos al día y tener una vida social acorde con su edad. Anastasia es una chica muy sana y desde los 16 años es aficionada a salir a correr todos los días, hace 1 año que se apuntó a un grupo donde salen a correr todos juntos, eso sí, los domingos al mediodia, después de correr unas horas, se va con el grupo de tapas y cañas",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Vive sola, con un sueldo medio, lo que le permite ahorrar muy poco dinero",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "José Pérez",
				Photo: "jose.jpg",
				Quote: "Lo que uno hace con el don de la vida es lo que nos dice quienes somos",
				Age: 18,
				Occupation: "Estudiante",
				Family: "Soltero",
				Location: "Dúrcal, Granada",
				Character: "Tímido",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2  }
				], 
				Goals: ["Acabar la carrera", "Disfrutar de los videojuegos sin perder tiempo de estudio"],
				Frustrations: ["Le cuesta socializar con la gente", "Quiere dejar de vivir con sus padres"],
				Bio: "José es un chico de 18 años que está empezando la carrera de electrónica. Extremadamente tímido, prefiere pasar el tiempo en su habitación jugando a videojuegos y haciendo proyectos con Arduino. De vez en cuando va con sus amigos a salones del Manga. Tuvo una novia  durante 2 años de adolescente, pero lo dejaron debido a que sus personalidades eran muy diferentes. Quiere irse de casa de sus padres para que no le echen en cara que no sale de su cuarto.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 5 }
					
				], 
                Contextos:   "Espera acabar pronto la carrera para encontrar un trabajo pronto que le permita independizarse" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])