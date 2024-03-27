export interface Category {
  name: string
  link?: string
  subMenu?: Array<{
    abm?: {
      header: {
        linkAdd: string
        linkEdit: string
        linkSave: string
      }
    }
    role: string
    name: string
    link?: string
    inputs?: Array<{
      type: string
      name: string
      label: string
    }>
  }>
}

interface categoriesProps {
  archivo: Category[]
  carreras: Category[]

  alumnos: Category[]

  docentes: Category[]

  cursado: Category[]

  campañas: Category[]

  administración: Category[]
}

const categories: categoriesProps = {
  archivo: [

    {

      name: 'Sede',
      link: '/',
      subMenu: [
        { role: 'dialog ABM', abm: { header: { linkAdd: 'Nueva Sede', linkEdit: 'Modificar Sede', linkSave: 'Guardar Sede' } }, name: 'ABM Sede', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { role: 'dialog consult', name: 'Consultar Sede' }]
    },

    {

      name: 'Campaña',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Campaña', linkEdit: 'Modificar Campaña', linkSave: 'Guardar Campaña' } }, name: 'ABM Campaña', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Campaña', role: 'dialog consult' }]
    },

    {

      name: 'Cohorte',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Cohorte', linkEdit: 'Modificar Cohorte', linkSave: 'Guardar Cohorte' } }, name: 'ABM Cohorte', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Cohorte', role: 'dialog consult' }]
    },

    {

      name: 'Modalidad',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Modalidad', linkEdit: 'Modificar Modalidad', linkSave: 'Guardar Modalidad' } }, name: 'ABM Modalidad', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Modalidad', role: 'dialog consult' }]
    },

    {

      name: 'Nivel Estudio',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Estudio', linkEdit: 'Modificar Estudio', linkSave: 'Guardar Estudio' } }, name: 'ABM Nivel Estudio', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Nivel Estudio', role: 'dialog consult' }]
    },

    {

      name: 'Elección ISSD',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Elección ISSD', linkEdit: 'Modificar Elección ISSD', linkSave: 'Guardar Elección ISSD' } }, name: 'ABM Elección', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Elección ISSD', role: 'dialog consult' }]
    },

    {

      name: 'Elección Carrera',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Elección Carrera', linkEdit: 'Modificar Elección Carrera', linkSave: 'Guardar Elección Carrera' } }, name: 'ABM Eelección Carrera', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Elección Carrera', role: 'dialog consult' }]
    },

    {

      name: 'Carga Semanal',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Carga Semanal', linkEdit: 'Modificar Carga Semanal', linkSave: 'Guardar Carga Semanal' } }, name: 'ABM Carga Semanal', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Carga Semanal', role: 'dialog consult' }]
    },

    {

      name: 'Tipo DNI',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Tipo DNI', linkEdit: 'Modificar Tipo DNI', linkSave: 'Guardar Tipo DNI' } }, name: 'ABM Tipo DNI', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Tipo DNI', role: 'dialog consult' }]
    },

    {

      name: 'Sexo',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Sexo', linkEdit: 'Modificar Sexo', linkSave: 'Guardar Sexo' } }, name: 'ABM Sexo', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Sexo', role: 'dialog consult' }]
    },

    {

      name: 'Estado Civil',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Sede', linkEdit: 'Modificar Sede', linkSave: 'Guardar Sede' } }, name: 'ABM Estado Civil', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Estado Civil', role: 'dialog consult' }]
    },

    {

      name: 'Tipo Vivienda',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Tipo Vivienda', linkEdit: 'Modificar Tipo Vivienda', linkSave: 'Guardar Tipo Vivienda' } }, name: 'ABM Tipo Vivienda', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Tipo Vivienda', role: 'dialog consult' }]
    },

    {

      name: 'Parentesco',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Parentesco', linkEdit: 'Modificar Parentesco', linkSave: 'Guardar Parentesco' } }, name: 'ABM Parentesco', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Parentesco', role: 'dialog consult' }]
    },

    {

      name: 'Ocupación',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Ocupación', linkEdit: 'Modificar Ocupación', linkSave: 'Guardar Ocupación' } }, name: 'ABM Ocupación', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Ocupación', role: 'dialog consult' }]
    },

    {

      name: 'Vive Con',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Vive Con', linkEdit: 'Modificar Vive Con', linkSave: 'Guardar Vive Con' } }, name: 'ABM Vive Con', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Vive Con', role: 'dialog consult' }]
    },

    {

      name: 'Pais',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Pais', linkEdit: 'Modificar Pais', linkSave: 'Guardar Pais' } }, name: 'ABM Pais', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Pais', role: 'dialog consult' }]
    },

    {

      name: 'Provincia',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva provincia', linkEdit: 'Modificar provincia', linkSave: 'Guardar provincia' } }, name: 'ABM Provincia', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Provincia', role: 'dialog consult' }]
    },

    {

      name: 'Localidad',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Localidad', linkEdit: 'Modificar Localidad', linkSave: 'Guardar Localidad' } }, name: 'ABM Localidad', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Localidad', role: 'dialog consult' }]
    },

    {

      name: 'Barrio',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Barrio', linkEdit: 'Modificar Barrio', linkSave: 'Guardar Barrio' } }, name: 'ABM Barrio', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Barrio', role: 'dialog consult' }]
    }
  ],

  carreras: [
    {

      name: 'Carreras',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Carrera', linkEdit: 'Modificar Carrera', linkSave: 'Guardar Carrera' } }, name: 'ABM Carreras', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Carreras', role: 'dialog consult' }]
    },

    {

      name: 'Materias',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Materia', linkEdit: 'Modificar Materia', linkSave: 'Guardar Materia' } }, name: 'ABM Materias', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Materias', role: 'dialog consult' }]
    },

    {

      name: 'Planes Estudio',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Plan de Estudio', linkEdit: 'Modificar Plan de Estudio', linkSave: 'Guardar Plan de Estudio' } }, name: 'ABM Planes Estudio', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Planes Estudio', role: 'dialog consult' }]
    },

    {

      name: 'Correlativas',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Correlativas', linkEdit: 'Modificar Correlativas', linkSave: 'Guardar Correlativas' } }, name: 'ABM Correlativas', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Correlativas', role: 'dialog consult' }]
    },

    {

      name: 'Material Didáctico',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Material Didáctico', linkEdit: 'Modificar Material Didáctico', linkSave: 'Guardar Material Didáctico' } }, name: 'ABM Material Didáctico', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Material Didáctico', role: 'dialog consult' }]
    }
  ],

  alumnos: [
    {

      name: 'Alumnos',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Alumno', linkEdit: 'Modificar Alumno', linkSave: 'Guardar Alumno' } }, name: 'ABM Alumnos', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Alumnos', role: 'dialog consult' }]
    },

    { name: 'Historico Alumnos', link: '/' },

    {

      name: 'Equivalencias',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Equivalencia', linkEdit: 'Modificar Equivalencia', linkSave: 'Guardar Equivalencia' } }, name: 'ABM Equivalencias', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Equivalencias', role: 'dialog consult' }]
    },

    {

      name: 'Asistencias',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Asistencia', linkEdit: 'Modificar Asistencia', linkSave: 'Guardar Asistencia' } }, name: 'ABM Asistencias', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },

        { link: '/', name: 'Consultar Asistencias', role: 'dialog consult' }]
    },

    {

      name: 'Pases',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Pases', linkEdit: 'Modificar Pases', linkSave: 'Guardar Pases' } }, name: 'ABM Pases', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Pases', role: 'dialog consult' }]
    }
  ],

  docentes: [
    {

      name: 'Docentes',
      link: '/',
      subMenu: [
        {
          abm: { header: { linkAdd: 'Nuevo Docentes', linkEdit: 'Modificar Docentes', linkSave: 'Guardar Docentes' } },
          name: 'ABM Docentes',
          role: 'dialog ABM',
          inputs: [{ type: 'number', name: 'code', label: 'Código' },
            { type: 'text', name: 'name', label: 'Nombre' }]
        }]
    },
    {

      name: 'Consultar Docentes',
      link: '/',
      subMenu: [
        {
          abm: { header: { linkAdd: 'Nuevo Consultar Docente', linkEdit: 'Modificar Consultar Docente', linkSave: 'Guardar Consultar Docente' } },
          name: 'ABM Docentes',
          role: 'dialog ABM',
          inputs: [{ type: 'number', name: 'code', label: 'Código' },
            { type: 'text', name: 'name', label: 'Nombre' }]
        }, { name: 'Consultar Docentes', role: 'dialog consult' }]
    },

    { name: 'Histórico Docentes', link: '/' },

    { name: 'Emitir Certificado', link: '/' },

    {

      name: 'Tardanzas',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Tardanza', linkEdit: 'Modificar Tardanza', linkSave: 'Guardar Tardanza' } }, name: 'ABM Tardanzas', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Tardanzas', role: 'dialog consult' }]
    },

    {

      name: 'Inasistencias',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Inasistencia', linkEdit: 'Modificar Inasistencia', linkSave: 'Guardar Inasistencia' } }, name: 'ABM Inasistencias', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Inasistencias', role: 'dialog consult' }]
    },

    {

      name: 'Marcas',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Marca', linkEdit: 'Modificar Marca', linkSave: 'Guardar Marca' } }, name: 'ABM Marcas', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Marcas', role: 'dialog consult' }]
    }
  ],

  cursado: [
    {

      name: 'Inscripciónes Cursado',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Inscripción de Cursado', linkEdit: 'Modificar Inscripción de Cursado', linkSave: 'Guardar Inscripción de Cursado' } }, name: 'ABM Inscripciónes Cursado', role: 'dialog ABM' },
        { link: '/', name: 'Consultar Cursado', role: 'dialog consult' }]
    },

    {

      name: 'Inscripción Examen',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Inscripción de Examen', linkEdit: 'Modificar Inscripción de Examen', linkSave: 'Guardar Inscripción de Examen' } }, name: 'ABM Inscripción Examen', role: 'dialog ABM' },
        { link: '/', name: 'Consultar Examen', role: 'dialog consult' }]
    },

    {

      name: 'Turno Examen',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Turno Examen', linkEdit: 'Modificar Turno Examen', linkSave: 'Guardar Turno Examen' } }, name: 'ABM Turno Examen', role: 'dialog ABM' },
        { link: '/', name: 'Consultar Turno', role: 'dialog consult' }]
    },

    {

      name: 'Programación Horarios',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nueva Programación de Horarios', linkEdit: 'Modificar Programación de Horarios', linkSave: 'Guardar Programación de Horarios' } }, name: 'ABM Programación Horarios', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Programación Horarios', role: 'dialog consult' }]
    }
  ],

  campañas: [
    {

      name: 'Asesores',
      link: '/',
      subMenu: [
        {
          abm: { header: { linkAdd: 'Nuevo Asesor', linkEdit: 'Modificar Asesor ', linkSave: 'Guardar Asesor' } },
          name: 'ABM Asesores',
          role: 'dialog ABM',
          inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }]
        },
        { link: '/', name: 'Consultar Asesores', role: 'dialog consult' }]
    },

    {

      name: 'Liquidación Asesores',
      link: '/',
      subMenu: [
        {
          abm: { header: { linkAdd: 'Nueva Liquidación de Asesores', linkEdit: 'Modificar Liquidación de Asesores', linkSave: 'Guardar Liquidación de Asesores' } },
          name: 'ABM Liquidación Asesores',
          role: 'dialog ABM',
          inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }]
        }, { link: '/', name: 'Consultar Liquidación Asesores', role: 'dialog consult' }]
    },

    {

      name: 'Convocatorias',
      link: '/',
      subMenu: [
        {
          abm: { header: { linkAdd: 'Nueva Convocatoria', linkEdit: 'Modificar Convocatoria', linkSave: 'Guardar Convocatoria' } },
          name: 'ABM Convocatorias',
          role: 'dialog ABM',
          inputs: [{ type: 'number', name: 'code', label: 'Código' },
            { type: 'text', name: 'name', label: 'Nombre' }]
        }, { link: '/', name: 'Consultar Convocatorias', role: 'dialog consult' }]
    }
  ],

  administración: [
    {

      name: 'Pagos',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Pago', linkEdit: 'Modificar Pago', linkSave: 'Guardar Pago' } }, name: 'ABM Pagos', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Pagos', role: 'dialog consult' }]
    },

    {

      name: 'Recibos',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Recibo', linkEdit: 'Modificar Recibo', linkSave: 'Guardar Recibo' } }, name: 'ABM Recibos', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Recibos', role: 'dialog consult' }]
    },

    {

      name: 'Compromisos Pago',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Compromiso Pago', linkEdit: 'Modificar Compromiso Pago', linkSave: 'Guardar Compromiso Pago' } }, name: 'ABM Compromisos Pago', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] },
        { link: '/', name: 'Consultar Compromisos', role: 'dialog consult' }]
    },

    {

      name: 'Plan de Cuotas',
      link: '/',
      subMenu: [
        { abm: { header: { linkAdd: 'Nuevo Plan de Cuota', linkEdit: 'Modificar Plan de Cuota', linkSave: 'Guardar Plan de Cuota' } }, name: 'ABM Plan de Cuotas', role: 'dialog ABM' },
        { link: '/', name: 'Consultar Plan de Cuotas', role: 'dialog consult' }]
    }
  ]
}



export { categories }

