#!groovy

node {
	//------------------------------------------------------------
	// Etapa - Compilar
	//------------------------------------------------------------
	stage 'Compilar'

  	echo 'Ejecutando compilacion'
	docker build -t jctg1/dgm:latest .
	docker login --username=jctg1 --email=juan.tovar@vun.mx

	//------------------------------------------------------------
	// -- ETAPA: Test
	//------------------------------------------------------------
	stage 'Test'
	echo 'Ejecutando tests'

	//------------------------------------------------------------
	// -- ETAPA: subir imagen
	//------------------------------------------------------------
	stage 'cargar imagen creada'
	echo ' hacer push en repositorio docker'
	docker push jctg1/dgm:latest
	
	//------------------------------------------------------------
	// -- ETAPA: Envio de mensaje a los involucrados
        //------------------------------------------------------------
	stage 'Envio de mensajes'
	echo  'Envio de mensajes por slack'


      }












