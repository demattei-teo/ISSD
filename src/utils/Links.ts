interface Category {
  table?: string
  role?: string
  name: string
  link?: string
  subMenu?: Array<{
    name: string
    link?: string
  }>
  inputs?: Array<{
    type: string
    name: string
    label: string
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
    { table: 'sede', role: 'dialog ABM', name: 'Sede', link: '/', subMenu: [{ name: 'ABM Sede' }, { name: 'Consultar Sede' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'campaña', role: 'dialog ABM', name: 'Campaña', link: '/', subMenu: [{ name: 'ABM Campaña' }, { link: '/', name: 'Consultar Campaña' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'cohorte', role: 'dialog ABM', name: 'Cohorte', link: '/', subMenu: [{ name: 'ABM Cohorte' }, { link: '/', name: 'Consultar Cohorte' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'modalidad', role: 'dialog ABM', name: 'Modalidad', link: '/', subMenu: [{ name: 'ABM Modalidad' }, { link: '/', name: 'Consultar Modalidad' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'nivel_estudio', role: 'dialog ABM', name: 'Nivel Estudio', link: '/', subMenu: [{ name: 'ABM Nivel Estudio' }, { link: '/', name: 'Consultar Nivel Estudio' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'eleccion', role: 'dialog ABM', name: 'Elección ISSD', link: '/', subMenu: [{ name: 'ABM Elección' }, { link: '/', name: 'Consultar Elección ISSD' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'eleccion_carrera', role: 'dialog ABM', name: 'Elección Carrera', link: '/', subMenu: [{ name: 'ABM Eelección Carrera' }, { link: '/', name: 'Consultar Elección Carrera' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'carga_semanal', role: 'dialog ABM', name: 'Carga Semanal', link: '/', subMenu: [{ name: 'ABM Carga Semanal' }, { link: '/', name: 'Consultar Carga Semanal' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'tipo_dni', role: 'dialog ABM', name: 'Tipo DNI', link: '/', subMenu: [{ name: 'ABM Tipo DNI' }, { link: '/', name: 'Consultar Tipo DNI' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'sexo', role: 'dialog ABM', name: 'Sexo', link: '/', subMenu: [{ name: 'ABM Sexo' }, { link: '/', name: 'Consultar Sexo' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'estado_civil', role: 'dialog ABM', name: 'Estado Civil', link: '/', subMenu: [{ name: 'ABM Estado Civil' }, { link: '/', name: 'Consultar Estado Civil' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'tipo_vivienda', role: 'dialog ABM', name: 'Tipo Vivienda', link: '/', subMenu: [{ name: 'ABM Tipo Vivienda' }, { link: '/', name: 'Consultar Tipo Vivienda' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'parentesco', role: 'dialog ABM', name: 'Parentesco', link: '/', subMenu: [{ name: 'ABM Parentesco' }, { link: '/', name: 'Consultar Parentesco' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'ocupacion', role: 'dialog ABM', name: 'Ocupación', link: '/', subMenu: [{ name: 'ABM Ocupación' }, { link: '/', name: 'Consultar Ocupación' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'vive_con', role: 'dialog ABM', name: 'Vive Con', link: '/', subMenu: [{ name: 'ABM Vive Con' }, { link: '/', name: 'Consultar Vive Con' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'pais', role: 'dialog ABM', name: 'Pais', link: '/', subMenu: [{ name: 'ABM Pais' }, { link: '/', name: 'Consultar Pais' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'provincia', role: 'dialog ABM', name: 'Provincia', link: '/', subMenu: [{ name: 'ABM Provincia' }, { link: '/', name: 'Consultar Provincia' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'localidad', role: 'dialog ABM', name: 'Localidad', link: '/', subMenu: [{ name: 'ABM Localidad' }, { link: '/', name: 'Consultar Localidad' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'barrio', role: 'dialog ABM', name: 'Barrio', link: '/', subMenu: [{ name: 'ABM Barrio' }, { link: '/', name: 'Consultar Barrio' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] }
  ],

  carreras: [
    { table: 'carreras', role: 'dialog ABM', name: 'Carreras', link: '/', subMenu: [{ name: 'ABM Carreras' }, { link: '/', name: 'Consultar Carreras' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'materias', role: 'dialog ABM', name: 'Materias', link: '/', subMenu: [{ name: 'ABM Materias' }, { link: '/', name: 'Consultar Materias' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'planes', role: 'dialog ABM', name: 'Planes Estudio', link: '/', subMenu: [{ name: 'ABM Planes Estudio' }, { link: '/', name: 'Consultar Planes Estudio' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'correlativas', role: 'dialog ABM', name: 'Correlativas', link: '/', subMenu: [{ name: 'ABM Correlativas' }, { link: '/', name: 'Consultar Correlativas' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'material_didactico', role: 'dialog ABM', name: 'Material Didáctico', link: '/', subMenu: [{ name: 'ABM Material Didáctico' }, { link: '/', name: 'Consultar Material Didáctico' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] }
  ],

  alumnos: [
    { table: 'alumnos', role: 'dialog ABM', name: 'Alumnos', link: '/', subMenu: [{ name: 'ABM Alumnos' }, { link: '/', name: 'Consultar Alumnos' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'historico_alumnos', role: 'link', name: 'Historico Alumnos', link: '/' },

    { table: 'equivalencias', role: 'dialog ABM', name: 'Equivalencias', link: '/', subMenu: [{ name: 'ABM Equivalencias' }, { link: '/', name: 'Consultar Equivalencias' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'asistencias', role: 'dialog ABM', name: 'Asistencias', link: '/', subMenu: [{ name: 'ABM Asistencias' }, { link: '/', name: 'Consultar Asistencias' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'pases', role: 'dialog ABM', name: 'Pases', link: '/', subMenu: [{ name: 'ABM Pases' }, { link: '/', name: 'Consultar Pases' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] }
  ],

  docentes: [
    {
      table: 'docentes',
      role: 'dialog ABM',
      name: 'Docentes',
      link: '/',
      subMenu: [{ name: 'ABM Docentes' }],
      inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }]
    },
    {
      table: 'docentes',
      role: 'dialog ABM',
      name: 'Consultar Docentes',
      link: '/',
      subMenu: [{ name: 'ABM Docentes' }, { name: 'Consultar Docentes' }],
      inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }]
    },

    { role: 'link', name: 'Histórico Docentes', link: '/' },

    { role: 'link', name: 'Emitir Certificado', link: '/' },

    { table: 'tardanzas', role: 'dialog ABM', name: 'Tardanzas', link: '/', subMenu: [{ name: 'ABM Tardanzas' }, { link: '/', name: 'Consultar Tardanzas' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'inasistencias', role: 'dialog ABM', name: 'Inasistencias', link: '/', subMenu: [{ name: 'ABM Inasistencias' }, { link: '/', name: 'Consultar Inasistencias' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'marcas', role: 'dialog ABM', name: 'Marcas', link: '/', subMenu: [{ name: 'ABM Marcas' }, { link: '/', name: 'Consultar Marcas' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] }
  ],

  cursado: [
    { table: 'Inscripciónes_cursado', role: 'dialog ABM', name: 'Inscripciónes Cursado', link: '/', subMenu: [{ name: 'ABM Inscripciónes Cursado' }, { link: '/', name: 'Consultar Cursado' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'Inscripción_Examen', role: 'dialog ABM', name: 'Inscripción Examen', link: '/', subMenu: [{ name: 'ABM Inscripción Examen' }, { link: '/', name: 'Consultar Examen' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'Turno_Examen', role: 'dialog ABM', name: 'Turno Examen', link: '/', subMenu: [{ name: 'ABM Turno Examen' }, { link: '/', name: 'Consultar Turno' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'Programación_Horarios', role: 'dialog ABM', name: 'Programación Horarios', link: '/', subMenu: [{ name: 'ABM Programación Horarios' }, { link: '/', name: 'Consultar Programación Horarios' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] }
  ],

  campañas: [
    { table: 'Asesores', role: 'dialog ABM', name: 'Asesores', link: '/', subMenu: [{ name: 'ABM Asesores' }, { link: '/', name: 'Consultar Asesores' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'Liquidación_Asesores', role: 'dialog ABM', name: 'Liquidación Asesores', link: '/', subMenu: [{ name: 'ABM Liquidación Asesores' }, { link: '/', name: 'Consultar Liquidación Asesores' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'Convocatorias', role: 'dialog ABM', name: 'Convocatorias', link: '/', subMenu: [{ name: 'ABM Convocatorias' }, { link: '/', name: 'Consultar Convocatorias' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] }
  ],

  administración: [
    { table: 'Pagos', role: 'dialog ABM', name: 'Pagos', link: '/', subMenu: [{ name: 'ABM Pagos' }, { link: '/', name: 'Consultar Pagos' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'Recibos', role: 'dialog ABM', name: 'Recibos', link: '/', subMenu: [{ name: 'ABM Recibos' }, { link: '/', name: 'Consultar Recibos' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'Compromisos_Pago', role: 'dialog ABM', name: 'Compromisos Pago', link: '/', subMenu: [{ name: 'ABM Compromisos Pago' }, { link: '/', name: 'Consultar Compromisos' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] },

    { table: 'Plan_Cuotas', role: 'dialog ABM', name: 'Plan de Cuotas', link: '/', subMenu: [{ name: 'ABM Plan de Cuotas' }, { link: '/', name: 'Consultar Plan de Cuotas' }], inputs: [{ type: 'number', name: 'code', label: 'codigo' }, { type: 'text', name: 'name', label: 'nombre' }] }
  ]
}



export { categories }

