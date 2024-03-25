interface Category {
  table?: string
  name: string
  link?: string
  subMenu?: Array<{
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
      table: 'sede',
      name: 'Sede',
      link: '/',
      subMenu: [{ role: 'dialog ABM', name: 'ABM Sede', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { role: 'dialog consult', name: 'Consultar Sede' }]
    },

    {
      table: 'campaña',
      name: 'Campaña',
      link: '/',
      subMenu: [{ name: 'ABM Campaña', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Campaña', role: 'dialog consult' }]
    },

    {
      table: 'cohorte',
      name: 'Cohorte',
      link: '/',
      subMenu: [{ name: 'ABM Cohorte', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Cohorte', role: 'dialog consult' }]
    },

    {
      table: 'modalidad',
      name: 'Modalidad',
      link: '/',
      subMenu: [{ name: 'ABM Modalidad', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Modalidad', role: 'dialog consult' }]
    },

    {
      table: 'nivel_estudio',
      name: 'Nivel Estudio',
      link: '/',
      subMenu: [{ name: 'ABM Nivel Estudio', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Nivel Estudio', role: 'dialog consult' }]
    },

    {
      table: 'eleccion',
      name: 'Elección ISSD',
      link: '/',
      subMenu: [{ name: 'ABM Elección', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Elección ISSD', role: 'dialog consult' }]
    },

    {
      table: 'eleccion_carrera',
      name: 'Elección Carrera',
      link: '/',
      subMenu: [{ name: 'ABM Eelección Carrera', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Elección Carrera', role: 'dialog consult' }]
    },

    {
      table: 'carga_semanal',
      name: 'Carga Semanal',
      link: '/',
      subMenu: [{ name: 'ABM Carga Semanal', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Carga Semanal', role: 'dialog consult' }]
    },

    {
      table: 'tipo_dni',
      name: 'Tipo DNI',
      link: '/',
      subMenu: [{ name: 'ABM Tipo DNI', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Tipo DNI', role: 'dialog consult' }]
    },

    {
      table: 'sexo',
      name: 'Sexo',
      link: '/',
      subMenu: [{ name: 'ABM Sexo', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Sexo', role: 'dialog consult' }]
    },

    {
      table: 'estado_civil',
      name: 'Estado Civil',
      link: '/',
      subMenu: [{ name: 'ABM Estado Civil', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Estado Civil', role: 'dialog consult' }]
    },

    {
      table: 'tipo_vivienda',
      name: 'Tipo Vivienda',
      link: '/',
      subMenu: [{ name: 'ABM Tipo Vivienda', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Tipo Vivienda', role: 'dialog consult' }]
    },

    {
      table: 'parentesco',
      name: 'Parentesco',
      link: '/',
      subMenu: [{ name: 'ABM Parentesco', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Parentesco', role: 'dialog consult' }]
    },

    {
      table: 'ocupacion',
      name: 'Ocupación',
      link: '/',
      subMenu: [{ name: 'ABM Ocupación', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Ocupación', role: 'dialog consult' }]
    },

    {
      table: 'vive_con',
      name: 'Vive Con',
      link: '/',
      subMenu: [{ name: 'ABM Vive Con', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Vive Con', role: 'dialog consult' }]
    },

    {
      table: 'pais',
      name: 'Pais',
      link: '/',
      subMenu: [{ name: 'ABM Pais', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Pais', role: 'dialog consult' }]
    },

    {
      table: 'provincia',
      name: 'Provincia',
      link: '/',
      subMenu: [{ name: 'ABM Provincia', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Provincia', role: 'dialog consult' }]
    },

    {
      table: 'localidad',
      name: 'Localidad',
      link: '/',
      subMenu: [{ name: 'ABM Localidad', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Localidad', role: 'dialog consult' }]
    },

    {
      table: 'barrio',
      name: 'Barrio',
      link: '/',
      subMenu: [{ name: 'ABM Barrio', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Barrio', role: 'dialog consult' }]
    }
  ],

  carreras: [
    {
      table: 'carreras',
      name: 'Carreras',
      link: '/',
      subMenu: [{ name: 'ABM Carreras', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Carreras', role: 'dialog consult' }]
    },

    {
      table: 'materias',
      name: 'Materias',
      link: '/',
      subMenu: [{ name: 'ABM Materias', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Materias', role: 'dialog consult' }]
    },

    {
      table: 'planes',
      name: 'Planes Estudio',
      link: '/',
      subMenu: [{ name: 'ABM Planes Estudio', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Planes Estudio', role: 'dialog consult' }]
    },

    {
      table: 'correlativas',
      name: 'Correlativas',
      link: '/',
      subMenu: [{ name: 'ABM Correlativas', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Correlativas', role: 'dialog consult' }]
    },

    {
      table: 'material_didactico',
      name: 'Material Didáctico',
      link: '/',
      subMenu: [{ name: 'ABM Material Didáctico', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Material Didáctico', role: 'dialog consult' }]
    }
  ],

  alumnos: [
    {
      table: 'alumnos',
      name: 'Alumnos',
      link: '/',
      subMenu: [{ name: 'ABM Alumnos', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Alumnos', role: 'dialog consult' }]
    },

    { table: 'historico_alumnos', name: 'Historico Alumnos', link: '/' },

    {
      table: 'equivalencias',
      name: 'Equivalencias',
      link: '/',
      subMenu: [{ name: 'ABM Equivalencias', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Equivalencias', role: 'dialog consult' }]
    },

    {
      table: 'asistencias',
      name: 'Asistencias',
      link: '/',
      subMenu: [{ name: 'ABM Asistencias', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Asistencias', role: 'dialog consult' }]
    },

    {
      table: 'pases',
      name: 'Pases',
      link: '/',
      subMenu: [{ name: 'ABM Pases', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Pases', role: 'dialog consult' }]
    }
  ],

  docentes: [
    {
      table: 'docentes',
      name: 'Docentes',
      link: '/',
      subMenu: [{ name: 'ABM Docentes', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }]
    },
    {
      table: 'docentes',
      name: 'Consultar Docentes',
      link: '/',
      subMenu: [{ name: 'ABM Docentes', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { name: 'Consultar Docentes', role: 'dialog consult' }]
    },

    { name: 'Histórico Docentes', link: '/' },

    { name: 'Emitir Certificado', link: '/' },

    {
      table: 'tardanzas',
      name: 'Tardanzas',
      link: '/',
      subMenu: [{ name: 'ABM Tardanzas', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Tardanzas', role: 'dialog consult' }]
    },

    {
      table: 'inasistencias',
      name: 'Inasistencias',
      link: '/',
      subMenu: [{ name: 'ABM Inasistencias', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Inasistencias', role: 'dialog consult' }]
    },

    {
      table: 'marcas',
      name: 'Marcas',
      link: '/',
      subMenu: [{ name: 'ABM Marcas', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Marcas', role: 'dialog consult' }]
    }
  ],

  cursado: [
    {
      table: 'Inscripciónes_cursado',
      name: 'Inscripciónes Cursado',
      link: '/',
      subMenu: [{ name: 'ABM Inscripciónes Cursado', role: 'dialog ABM' }, { link: '/', name: 'Consultar Cursado', role: 'dialog consult' }]
    },

    {
      table: 'Inscripción_Examen',
      name: 'Inscripción Examen',
      link: '/',
      subMenu: [{ name: 'ABM Inscripción Examen', role: 'dialog ABM' }, { link: '/', name: 'Consultar Examen', role: 'dialog consult' }]
    },

    {
      table: 'Turno_Examen',
      name: 'Turno Examen',
      link: '/',
      subMenu: [{ name: 'ABM Turno Examen', role: 'dialog ABM' }, { link: '/', name: 'Consultar Turno', role: 'dialog consult' }]
    },

    {
      table: 'Programación_Horarios',
      name: 'Programación Horarios',
      link: '/',
      subMenu: [{ name: 'ABM Programación Horarios', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Programación Horarios', role: 'dialog consult' }]
    }
  ],

  campañas: [
    {
      table: 'Asesores',
      name: 'Asesores',
      link: '/',
      subMenu: [{ name: 'ABM Asesores', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Asesores', role: 'dialog consult' }]
    },

    {
      table: 'Liquidación_Asesores',
      name: 'Liquidación Asesores',
      link: '/',
      subMenu: [{ name: 'ABM Liquidación Asesores', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Liquidación Asesores', role: 'dialog consult' }]
    },

    {
      table: 'Convocatorias',
      name: 'Convocatorias',
      link: '/',
      subMenu: [{ name: 'ABM Convocatorias', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Convocatorias', role: 'dialog consult' }]
    }
  ],

  administración: [
    {
      table: 'Pagos',
      name: 'Pagos',
      link: '/',
      subMenu: [{ name: 'ABM Pagos', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Pagos', role: 'dialog consult' }]
    },

    {
      table: 'Recibos',
      name: 'Recibos',
      link: '/',
      subMenu: [{ name: 'ABM Recibos', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Recibos', role: 'dialog consult' }]
    },

    {
      table: 'Compromisos_Pago',
      name: 'Compromisos Pago',
      link: '/',
      subMenu: [{ name: 'ABM Compromisos Pago', role: 'dialog ABM', inputs: [{ type: 'number', name: 'code', label: 'Código' }, { type: 'text', name: 'name', label: 'Nombre' }] }, { link: '/', name: 'Consultar Compromisos', role: 'dialog consult' }]
    },

    {
      table: 'Plan_Cuotas',
      name: 'Plan de Cuotas',
      link: '/',
      subMenu: [{ name: 'ABM Plan de Cuotas', role: 'dialog ABM' }, { link: '/', name: 'Consultar Plan de Cuotas', role: 'dialog consult' }]
    }
  ]
}



export { categories }

