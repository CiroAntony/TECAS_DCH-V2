// Editable descriptive content for the catalogue, services and applications.
const productDescriptions={
tecas:[
['Componentes para el mantenimiento de sistemas de control remoto industrial. Una selección de partes para conservar la respuesta de los mandos y la comunicación con el equipo.','Partes de control','Transmisores, receptores y componentes asociados al sistema de mando.','Uso','Mantenimiento y reposición de componentes en maquinaria industrial.'],
['Insumos y repuestos para las tareas de mantenimiento de equipos de minería, energía y construcción. La selección se realiza de acuerdo con la referencia y las necesidades de cada máquina.','Familia','Insumos y repuestos para maquinaria.','Uso','Reposición de piezas y mantenimiento de los equipos.'],
['Componentes electrónicos para los sistemas de control y operación de maquinaria. Permiten atender las necesidades de reposición e integración de los equipos.','Familia','Electrónica y componentes de control.','Uso','Tableros, mandos y sistemas electrónicos de maquinaria.']],
dch:[
['Transmisor de mano para el mando remoto de maquinaria industrial. Su formato permite reunir las funciones de operación en una botonera de uso directo.','Tipo de mando','Transmisor de mano.','Operación','Funciones de mando configuradas según la aplicación.'],
['Transmisor con correa para el hombro para tareas de control remoto industrial. Su formato permite llevar el equipo durante la operación y disponer los mandos de acuerdo con la maquinaria.','Tipo de mando','Transmisor con correa para el hombro.','Operación','Distribución de controles según los movimientos y funciones del equipo.'],
['Transmisor con pantalla y correa para el hombro que reúne el mando del equipo y la visualización de información de operación en un mismo dispositivo.','Tipo de mando','Transmisor con pantalla.','Visualización','Información disponible según la configuración del sistema.'],
['Receptor que vincula las órdenes del transmisor con el sistema eléctrico de la maquinaria mediante salidas de relé. Se integra al circuito de control de acuerdo con las funciones del equipo.','Tipo de interfaz','Salidas de relé.','Integración','Conexión al sistema eléctrico de mando de la maquinaria.'],
['Receptor para integrar el radiocontrol con el sistema de comunicación de la maquinaria. La interfaz se selecciona según el protocolo y la arquitectura de control del equipo.','Tipo de interfaz','Comunicación mediante protocolo de bus.','Integración','Intercambio de órdenes con el sistema de control de la maquinaria.'],
['Piezas de repuesto y accesorios para el mantenimiento de los sistemas de radiocontrol. La selección considera el modelo del transmisor o receptor y la referencia del componente.','Familia','Repuestos y accesorios de radiocontrol.','Uso','Reposición y mantenimiento del sistema de mando.']]
};
const applicationDescriptions={
'Robot Shotcrete Alpha 20':'Soluciones de control, electrónica y repuestos para equipos de proyección de concreto. Orientadas al mantenimiento de los sistemas que intervienen en la operación de la máquina.',
'Grúas pórtico':'Soluciones para el mando de equipos de elevación y traslado de cargas en patios, almacenes y áreas industriales.',
'Camión grúa':'Control y componentes para los movimientos de elevación y posicionamiento de la grúa instalada sobre el vehículo.',
'Radiocontroles Hetronic':'Componentes y soporte para sistemas de radiocontrol Hetronic utilizados en el mando de maquinaria industrial.',
'Grúa monorraíl':'Radiocontrol para operaciones de elevación y desplazamiento de cargas sobre una trayectoria de monorraíl.',
'Grúa polipasto CD':'Control remoto para las funciones de elevación y traslado de equipos con polipasto CD.',
'Grúa de polipasto MD':'Sistemas de mando para la elevación y el posicionamiento de cargas en equipos con polipasto MD.',
'Grúa de doble viga':'Mando remoto para coordinar las funciones de elevación y desplazamiento en grúas de doble viga.',
'Grúa de gran tonelaje':'Soluciones de radiocontrol para el mando de equipos destinados a la manipulación de cargas de gran tonelaje.',
'Grúa inteligente':'Integración del mando remoto con los sistemas de control de grúas y sus funciones de operación.',
'Vehículos especiales':'Sistemas de control para las funciones de trabajo de vehículos especiales, adaptados a la tarea y al equipo instalado.',
'Equipos eléctricos':'Soluciones de radiocontrol para accionar funciones de maquinaria y equipos con sistemas eléctricos de mando.',
'Maquinaria para túneles':'Control remoto para las funciones de equipos que trabajan en túneles y operaciones subterráneas.',
'Bomba de hormigón':'Mando remoto para las funciones de bombeo y posicionamiento de equipos utilizados en la colocación de hormigón.',
'Bomba de remolque':'Soluciones de mando para las funciones de trabajo de bombas montadas sobre remolque.',
'Carro de pulverización húmeda':'Sistemas de radiocontrol para equipos de pulverización húmeda y proyección de concreto.',
'Maquinaria agrícola':'Control remoto para las funciones de trabajo de equipos agrícolas, según el implemento y la operación.',
'Vehículos de ingeniería':'Sistemas de mando para vehículos y equipos utilizados en trabajos de construcción e ingeniería.',
'Extinción de incendios municipal':'Soluciones de control para las funciones de equipos de intervención y extinción de incendios.',
'Maquinaria portuaria':'Mando remoto para equipos de manipulación y movimiento de cargas en operaciones portuarias.',
'Otros equipos':'Integración de radiocontrol en maquinaria que requiere accionar funciones a distancia, de acuerdo con su sistema de mando.'
};
function detailContent(section,brand,index,title){
if(section==='productos'){
 const p=productDescriptions[brand][index];
 return {description:p[0],rows:[[p[1],p[2]],[p[3],p[4]],['Selección del componente','Se considera la marca, el modelo, la referencia y las funciones requeridas por la maquinaria.'],['Compatibilidad','La configuración se define según el sistema de control y las conexiones del equipo.'],['Soporte','Orientación para identificar el componente y su integración en la aplicación.']]};
}
if(section==='servicios'){
 const target=title.replace(/^(Reparación de |Mantenimiento y reparación de |Mantenimiento de )/i,'');
 return {description:`Servicio de ${title.toLowerCase()} orientado a recuperar y conservar la operatividad del equipo. La atención parte de la revisión del sistema y de las condiciones de funcionamiento reportadas.`,rows:[['Equipo atendido',target.charAt(0).toUpperCase()+target.slice(1)],['Diagnóstico','Revisión de componentes, conexiones y funcionamiento para identificar el origen de la incidencia.'],['Intervención','Definición de los trabajos de reparación o mantenimiento y de los repuestos necesarios según el diagnóstico.'],['Verificación','Comprobación de las funciones intervenidas y revisión de la respuesta del sistema.'],['Para solicitar atención','Indica la marca, el modelo y la falla observada. Las fotografías del equipo y de su placa ayudan a identificarlo.']]};
}
return {description:applicationDescriptions[title],rows:[['Aplicación',title],['Solución de control',brand==='dch'?'Radiocontrol para accionar las funciones de trabajo de la maquinaria.':'Componentes, electrónica y sistemas de mando para la operación del equipo.'],['Configuración','Selección de mandos y conexiones según los movimientos, señales y funciones requeridos.'],['Integración','Revisión del sistema eléctrico y de control para definir los componentes adecuados.'],['Mantenimiento y soporte','Diagnóstico, reparación y selección de repuestos de acuerdo con las necesidades del equipo.']]};
}
