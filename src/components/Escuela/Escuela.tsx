import React, { useState } from 'react';

interface Alumno {
  id: number;
  nombre: string;
}

interface Curso {
  id: number;
  nombre: string;
  alumnos: Alumno[];
}

const Escuela: React.FC = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [nombreCurso, setNombreCurso] = useState('');
  const [nombreAlumno, setNombreAlumno] = useState('');

  const agregarCurso = () => {
    const nuevoCurso: Curso = {
      id: Date.now(),
      nombre: nombreCurso,
      alumnos: [],
    };

    setCursos([...cursos, nuevoCurso]);
    setNombreCurso('');
  };

  const agregarAlumno = (cursoId: number) => {
    const nuevoAlumno: Alumno = {
      id: Date.now(),
      nombre: nombreAlumno,
    };

    const cursosActualizados = cursos.map((curso) => {
      if (curso.id === cursoId) {
        return {
          ...curso,
          alumnos: [...curso.alumnos, nuevoAlumno],
        };
      }
      return curso;
    });

    setCursos(cursosActualizados);
    setNombreAlumno('');
  };

  return (
    <div className='container'>
      <h1 className='titulo'>Escuela</h1>

      <div>
        <h2>Agregar Curso</h2>
        <input
          type="text"
          value={nombreCurso}
          onChange={(e) => setNombreCurso(e.target.value)}
          placeholder="Nombre del curso"
        />
        <button onClick={agregarCurso}>Agregar Curso</button>
      </div>

      {cursos.map((curso) => (
        <div key={curso.id}>
          <h2>{curso.nombre}</h2>

          <div>
            <h3>Agregar Alumno</h3>
            <input
              type="text"
              value={nombreAlumno}
              onChange={(e) => setNombreAlumno(e.target.value)}
              placeholder="Nombre del alumno"
            />
            <button onClick={() => agregarAlumno(curso.id)}>Agregar Alumno</button>
          </div>

          <ul>
            {curso.alumnos.map((alumno) => (
              <li key={alumno.id}>{alumno.nombre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Escuela;
