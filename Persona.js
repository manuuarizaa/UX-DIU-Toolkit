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
				Bio: "Anastasia es una chica de 24 años nacida en Las Gabias, un pueblo de Granada, donde vivió con sus padres hasta los 18 años. Estudió, hasta terminar el bachiller en Las Gabias, luego se mudó al centro de Granada, donde actualmente reside para estar algo mas cerca de la facultad, donde estudió ADE. Se sacó la carrera en esos 4 años, en los que a la vez trabajaba de camarera en un restaurante muy popular del centro de Granada, ya que tenía que pagarse el piso y no quería darle ese cargo a sus padres. Aún continúa trabajando a pesar de haber acabado la carrera hace 2 años, ya que no encuentra trabajo de lo que estudió, y ese trabajo es el que por ahora la mantiene económicamente. Convivió durante los 4 años de carrera con 2 chicas mas, pero acabaron la carrera y se mudaron a otras ciudades, por lo que ahora ella vive sola y se le hace complicado llevar los pagos al día y tener una vida social acorde con su edad. Anastasia es una chica muy sana y desde los 16 años es aficionada a salir a correr todos los días, hace 1 año que se apuntó a un grupo donde salen a correr todos juntos. Eso sí, los domingos al mediodia después de correr unas horas siempre se va con el grupo de tapas y cañas.",
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
				Age: 55,
				Occupation: "Autónomo, tiene una empresa de repartir bebida a bares",
				Family: "Divorciado con 2 hijos",
				Location: "Dúrcal, Granada",
				Character: "Serio",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2  }
				], 
				Goals: ["Poder prejubilarse antes de los 65", "Poder ahorrar para comprar el local de al lado, para aumentar el almacén de bebidas"],
				Frustrations: ["Tiene poco tiempo para sus hijos y amigos", "Quiere encontrar una pareja nueva, pero no tiene tiempo para salir por el trabajo"],
				Bio: "José es un hombre de 55 años de conflexión fuerte que mide 1,81m. Nació en Polopos, Granada, donde vivió hasta los 18 años. Estudió hasta que tuvo que empezar a ayudar a su padre en el campo, a los 14 años. Cuando conoció a su novia, se fue a vivir con ella a Dúrcal a una casa de la abuela de ésta, que le dejo en herencia. 1 mes después de mudarse ambos comenzaron un negocio de reparto de bebidas a bares y discotecas de la zona y de los alrededores de Granada. El negocio fue durante años muy bien, ganó mucho dinero con él y pudo comprar 2 pisos en Armilla, de los cuales solo uno aún le queda que pagar un poco de hipoteca. Con 26 años tuvo a su primer hijo y con 32 a su segundo hijo. En 2008 el negocio empezó a no ir bien debido a la crisis, su frustración la trasladaba a casa y le llevó a divorciarse 2 años más tarde, aunque mantiene una gran relación de amistad con su ex-mujer. Es una persona deportista, no fumadora, y cuando tiene un hueco en el trabajo sale a andar por el pueblo. Los fines de semana juega en una peña de fútbol en el campo municipal con sus amigos de la infancia y, aunque es una persona seria, es muy bromista con sus amigos de toda la vida, por eso desde que tiene 30 años le conocen en su círculo más cercano como ''el bromas''.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 2 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos:   "Espera obtener pronto nuevas formas de conseguir ingresos" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 4 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])