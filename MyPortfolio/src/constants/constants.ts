export interface Developer {
    nombre: string;
    apellido: string;
    edad: number;
    tecnologias: string[];
    dataBases: string[];
    frameworks: string[];
    universidad: string;
    carrera: string;
  }
  
  export const misDatos: Developer = {
    nombre: 'Lucas ',
    apellido: 'Romero',
    edad: 23,
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'C#'],
    dataBases: ['MySql'],
    frameworks: ['Bootstrap'],
    universidad: 'Universidad Tecnológica Nacional - Facultad Regional Tucumán',
    carrera: 'Tecnicatura Universitaria en Programación'
  };


  export const introduccion: string = `Estudiante de ${misDatos.carrera} en la ${misDatos.universidad}.`

  export const footer: string = `${misDatos.apellido} ${misDatos.nombre}, alumno ${misDatos.universidad}, 2024 Derechos Reservados.`


  export const sobreMi: string = '¡Hola! Soy Lucas Matías Romero, un estudiante de programación en la Universidad Tecnológica Nacional - Facultad Regional Tucumán. Tengo 23 años y estoy en constante aprendizaje de nuevas tecnologías y metodologías de desarrollo.'

  export const sobreMi2: string = 'Poseo conocimiento en desarrollo web, con habilidades en HTML, CSS, JavaScript, React, TypeScript. Tambien en desarrollo de aplicaciones de escritorio en C#, además en el cursado trabajamos con bases de datos MySQL y frameworks como Bootstrap. Mi objetivo es crear aplicaciones eficientes y fáciles de usar que brinden una excelente experiencia al usuario.'