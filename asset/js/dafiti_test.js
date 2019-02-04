$(document).ready(function(){
	$(".modal").addClass('is-active');
	$("#btn-enter").click(function(e){
		if($("#input-password").val() == 'Exito2019$'){
			$(".modal").removeClass('is-active');
			loadContent();
		}else{
			alert("Lo siento, por favor comuniquese conmigo al +573114694891");
		}
	});

	$("#input-password").keypress(function(event){
		if(event.keyCode==13){
			event.preventDefault();
			if($("#input-password").val() == 'Exito2019$'){
				$(".modal").removeClass('is-active');
				loadContent();
			}else{
				alert("Lo siento, por favor comuniquese conmigo al +573114694891");
			}			
		}
	});

	$.ajax({
		url:'http://4703c403.ngrok.io',
		data:{},
		type:'POST',
		dataType:'json',
		success:((data)=>{

		}),
		error:(xhr)=>{

		}
	});
});

function loadContent(){
	//Cargamos el contenido dinamicamente
	document.getElementById("all-content").innerHTML=`
	<div class="tab-content">
		<h1 class="has-text-centered">A continuación se da respuesta a la prueba técnica requerida para optar al cargo de desarrollador en dafiti</h1>
		<hr/>
		<div class="tab-pane is-active" id="pane-2">
			<div class="content">
				<h1>Sección de Preguntas</h1>	 
				<h2>
					Supone	que	en	un	repositorio	GIT	hiciste	un	commit	y	te	olvidaste	un	archivo.
					Explicar	como	se	soluciona	si	hiciste	push,	y	como	si	aun	no	hiciste.	De	ser	posible,	buscar	que	quede	solo un	commit	con	los	cambios.
				</h2>
				
				<p><strong>Respuesta:</strong> Inicialmente hablaremos del caso de uso de no haber realizado push aún.<br/><br/><strong>GIT commit --amend </strong> permite modificar el último commit realizado, su uso más simple es para modificar el mensaje, para ello se utiliza <br/><br/>
					<strong>git commit --amend -m "Nuevo mensaje"</strong><br/><br/>
					Pero tambien se puede utilizar para agregar más archivos <br/><br/>
					<strong>git commit --amend --no-edit</strong><br/><br/>
					En este caso, se le dice a GIT que modifique el último commit agregando los archivos que se han agregado con git add. Para un mejor entendendimiento coloquemos un ejemplo. <br/><br/>
					Si tenemos dos archivos (index.html y contact.html) realizamos cambios en los dos archivos y posteriormente ejecutamos los siguientes comandos <br/>
					<ul>
						<li>git add index.html</li>
						<li>git commit -m "Initial commit"</li>
					</ul>
					<br/>
					Luego deseamos agregar el archivo contact.html pero sin crear otro commit, hacemos lo siguiente:

					<ul>
						<li>git add contact.html</li>
						<li>git commit --amend --no-edit</li>
					</ul>
					Posteriormente ejecutamos
					<ul>
						<li>git log</li>
					</ul>
					Pudiendo constatar lo explicado anteriormente
					<br/><br/>
					En el segundo caso de uso, de haber realizado push, no es recomendable agregar archivos al último commit ya que es posible que otro desarrollador allá hecho pull a nuestros cambios y creado otros commit a partir de allí, por tal motivo es muy peligroso realizar este proceso en este caso de uso y no es recomendable porque puede crear confusiones y conflictos reescribir la historia de esta manera, sin embargo, en caso de estar seguros de ser la única persona trabajando en el repositorio o que no se han creado otras ramas a partir de nuestro cambio, podemos realizar el proceso anterior y reescribir el push de la siguiente manera

					<ul>
						<li>git add archivos_a_agregar</li>
						<li>git commit --amend --no-edit</li>
						<li>git push -f / git push origin +master:master </li>
					</ul>

					Como vemos anteriormente tenemos dos posibilidades de forzar el push, con la bandera -f o con el signo (+) antes de la rama, pero nuevamente se aclara que esta práctica es peligrosa y no recomendable, es preferible realizar un nuevo commit

				</p>
				<hr/>
				<h2>
					Tenes un sitio en tu computadora de desarrollo, y cuando entras desde el navegador, en la consola te aparece	esto: <pre>https://site.local/favicon.ico	Failed	to	load	resource:	net::ERR_INSECURE_RESPONSE</pre>
					El	archivo	existe,	el	sitio	debe	cargar	por	https.	Como	lo	solucionas?
				</h2>
				<p>
					<strong>Respuesta:</strong>
					Primeramente es importante recordar que al acceder con una URL que inicia con https, estamos diciendo que el sitio esta protegido por un certificado de seguridad (SSL), para poder acceder al mismo desde la maquina local hay que realizar los siguientes pasos
					<ul>
						<li>
							Adquirir un certificado SSL, normalmente tienen costo, existen unos gratuitos con un tiempo de uso muy corto
						</li>
						<li>
							Agregar el proyecto al virtual host, para ello se crea un archivo en /etc/apache2/sites-available/ el cual tiene la siguiente apariencia

							<pre>
<VirtualHost *:80>
	ServerName mipage.co
	ServerAlias site.local.co
	Redirect "/" "https://site.local.co/"
</VirtualHost>

<VirtualHost *:443>

	ServerName site.local.co
	ServerAlias site.local.co

	ServerAdmin tecnicalsupport@site.local.co
	DocumentRoot /var/www/html/sitelocal

	ErrorLog $ {APACHE_LOG_DIR}/site.local.error.log
	CustomLog $ {APACHE_LOG_DIR}/site.local.access.log combined

	<Directory /var/www/html/pengimeet>
			AllowOverride All
	</Directory>

	SSLProxyEngine On
	ProxyPass /agent https://site.local.co:3200
	ProxyPassreverse /agent https://site.local.co:3200

	ProxyPass /admin/sitelocal/api https://localhost:8080
	ProxyPassReverse /admin/sitelocal/api https://localhost:8080

	SSLEngine On

	SSLCertificateFile /etc/ssl/certs/mycert.co.crt
	SSLCertificateChainFile /etc/ssl/certs/mycert.co.bundle.crt
	SSLCertificateKeyFile /etc/ssl/certs/mycert.co.key

</VirtualHost>

							</pre>

						</li>
						<li>
							Se habilita el sitio con a2ensite [ruta y nombre del archivo]
						</li>
						<li>
							se reinicia apache con service apache2 restart
						</li>
					</ul>
					<note>
						En este proceso se asume que se esta ejecutando apache2, requiere la instalación de librerias como mbstring y otras más, lo que se ha querido es dar una explicación general
					</note>
				</p>
				<hr/>
				<h2>
					Tenes	un	archivo	comiteado	en	un	repositorio	GIT	que	deseas	que	quede	ignorado.	Que	pasos	debes
					realizar?
				</h2>
				<p>
					<strong>Respuesta: </strong>
					En este caso de uso se puede solucionar con los siguientes pasos
					<ol>
						<li>Se revierte los cambios comitiados en el archivo con el comando:<br/>
							git reset HEAD archivo
						</li>
						<li>
							Se agrega el archivo al .gitignore en caso que este exista de lo contrario se crea y se agrega el o los archivos a ser ignorados
						</li>
					</ol>
				</p>

				<h2>Explica	las	ventajas	de	cargar	en	tu	sitio	las	librerias	de	terceros	por	GTM.</h2>
				<p>
					<strong>Respuesta:</strong>
					Las herramientas suministradas por Google Tags Manager (GTM) brinda a los administradores de sitios web información valiosa sobre el comportamiento de sus visitantes, por ejemplo, una tienda virtual de zapatos instala las librerias de GTM y estas le muestran que del 100% de sus visitantes el 80% va a la tabla de precios, el 60% al formulario de pago pero solo el 5% términa el proceso de compra, esto puede decirle que éxiste falencias en el formulario de pago que hace que los usuarios abandonen el proceso, esté pequeño ejemplo muestra las ventajas de utilizas estas librerias
				</p>

			</div>
			<hr/>
			<div class="content">
				<h1>Sección de Ejercicios</h1>
				<p>En esta sección se presenta la función creada para resolver el anunciado especificado</p>
	 
				<h2>
					Escribir	una	funcion	que	determine	si	un	conjunto	de	cartas	de	una	lista	representan	una	escalerade	poker	(5 cartas	con	valores	consecutivos)	o	no. Las	cartas	siempre	tienen	valores	entre	2	y	14,	donde	14	es	el	AS. Tener	en	cuenta	que	el	AS	tambien	cuenta	como	1.
					La	cantidad	de	cartas	puede	variar,	pero	nunca	es	superior	a	7.<br/><br/>
					Ejemplos:
					<pre>
escalera:	14-2-3-4-5
escalera:	9-10-11-12-13
escalera:	2-7-8-5-10-9-11
no es escalera:7-8-12-13-14
					</pre><br/>
					La	funcion	debe	validar	un	caso	de	pruebas	similar	a	este:
					<pre>
class	Poker	extends	TestCase
{
	public	function	testAlgorithm()	{
		$results1	=	isStraight([2,	3,	4	,5,	6]);
		$this->assertEquals($results1,	true,	"2,	3,	4	,5,	6");
		$results2	=	isStraight([14,	5,	4	,2,	3]);
		$this->assertEquals($results2,	true,	"14,	5,	4	,2,	3");
		$results3	=	isStraight([7,	7,	12	,11,	3,	4,	14]);
		$this->assertEquals($results3,	false,	"7,	7,	12	,11,	3,	4,	14");
		$results4	=	isStraight([7,	3,	2]);
		$this->assertEquals($results4,	false,	"7,	3,	2");
	}
}						
					</pre>
				</h2>
				<p>
					<strong>Respuesta:</strong>
					<pre>

	function isStraight($cardList){
		//Validamos si son menos de 5 cartas para devolver false
		if(count($cardList) < 5)
			return false;

		//Creamos una lista de listas que cumplen con la condición para ser poker
		$valid_pokers = [
			[2,3,4,5,6],
			[3,4,5,6,7],
			[4,5,6,7,8],
			[5,6,7,8,9],
			[6,7,8,9,10],
			[7,8,9,10,11],
			[8,9,10,11,12],
			[9,10,11,12,13],
			[10,11,12,13,14],
			[11,12,13,14,2],
			[12,13,14,2,3],
			[13,14,2,3,4],
			[14,2,3,4,5]
		];

		//Recorremos la lista de pokers validos
		foreach($valid_pokers as $valid){
			
			$continue=true;

			//Recorremos el array con la lista valida y buscamos los elementos dentro la lista a evaluar
			foreach($valid as $value){
				if(!in_array($value, $cardList)){
					$continue=false;
					break;
				}
			}
			
			//Si la variable continue no fue seteada a false significa que encontro todos los elementos en la lista
			if($continue)
				return true;			
		}
		//Si no devolvio true, es porque no coincide con ningúna lista valida, por tanto, devuelve false
		return false;
	}

					</pre>
				</p>


			</div>

			<div class="content">
				<h1>Sección de MySQL</h1>
				<p>En esta sección se presenta las querys necesarias para resolver los enunciados</p>
	 
				<h2>
					Dado	el	siguiente	esquema	de	tablas:
					<img src="./asset/dafiti/database.png" ></img><br/>
					Escribir las	queries	para:<br/>
				</h2>
				<p>
					¿Cuál	es	el	jugador	más	viejo	de	cada	equipo?<br/><br/>
					<stong>Respuesta:</stong>
					<pre>
SELECT * FROM jugadores a where fecha_nacimiento = (select min(fecha_nacimiento) from jugadores b where a.fk_equipos = b.fk_equipos);                		
					</pre>
					<br/><br/>

					¿Cuántos	partidos	jugó	de	visitante	cada	equipo?	(nota:	hay	equipos	no	jugaron	ningún	partido)<br/><br/>
					<stong>Respuesta:</stong> Podemos colocar dos querys
					<pre>
 select a.*,
(SELECT count(id_partidos) from partidos b where a.id_equipos=b.fk_equipo_visitante) as partidos_visitante
from equipos a;
					</pre>
					<note>En este caso si algún equipo no tiene partidos de visitante lo mostrara en cero</note>
					<br/>
					<pre>
 select a.*,
(SELECT count(id_partidos) from partidos b where a.id_equipos=b.fk_equipo_visitante) as partidos_visitante
from equipos a where a.id_equipos IN (select fk_equipo_visitante from partidos);
					</pre>
					<note>En este caso si algún equipo no tiene partidos de visitante no lo muestra</note>

				</p>

			</div>

			<div class="content">
				<h1>Extra</h1>
				<p>En esta sección se habla sobre la mayor innovación en el mundo del desarrollo de los últimos 5 años</p>
				
				<p>
					En un mundo tan cambiante como el desarrollo de software, las innovaciones son cada vez más rápidas e influyentes, son múltiples los avances en cuánto tecnologías, metodologías y herramientas que han nacido o explotado en los últimos años y determinar cual es más impactante es un tema de perspectiva, según como yo lo veo y lo he vivido en el dia a dia la mayor innovación es el uso de cloud computing, aunque estamos claros que esta metodología tiene más de 5 años, también es cierto que ha sido en este último quinquenio en donde más ha impactado en el mundo del desarrollo de software, las razones son múltiples a continuación mencionare algúnas:
					<ol>
						<li>
							La infraestructura como servicio brinda gran capacidad de almacenamiento muy útil para la administración de archivos como imágenes, videos, etc.
						</li>
						<li>
							El software como servicio brinda herramientas de inteligencia artificial, big data y demás que permite a los desarrolladores centrarse en el core de sus productos y consumir estos recursos.
						</li>
						<li>
							Carácteristicas como pago por uso, elasticidad, escalabilidad y demás han aportado mucho valor al desarrollo
						</li>
						<li>
							Herramientas de deploy robustas y eficientes
						</li>
					</ol>
				</p>     

			</div>

			<div class="content">
				<h1>Simular pagina de producto utilizando React</h1>
				<p>Por favor descargar el archivo .zip <a href="/asset/dafiti/simple_dafiti_page.zip">aquí</a> y sigues las instrucciones</p>
				<ol>
					<li>Descargar la carpeta</li>
					<li>Descomprimirla</li>
					<li>Dentro de una terminal ubicarse en el directorio</li>
					<li>Ejecutar el comando: &nbsp; npm install && npm start</li>
					<li>Dirigirse al navegador y copiar la URL: http://127.0.0.1:3100</li>
				</ol>
				<note>
					Para el correcto funcionamiento es necesario tener instalado nodejs
				</note>
			</div>

		</div>
	</div>	`;

}