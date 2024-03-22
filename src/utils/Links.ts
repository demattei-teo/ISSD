interface categoriesProps {
  archivo: Array<{

    role: string
    name: string
    link?: string
    subMenu?: Array<{
      name: string
      link?: string
    }>
    inputs?: string[]
  }>
  carreras: Array<{

    role: string
    name: string
    link?: string
    subMenu?: Array<{
      name: string
      link?: string
    }>
    inputs?: string[]
  }>

  alumnos: Array<{

    role: string
    name: string
    link?: string
    subMenu?: Array<{
      name: string
      link?: string
    }>
    inputs?: string[]
  }>

  docentes: Array<{

    role: string
    name: string
    link?: string
    subMenu?: Array<{
      name: string
      link?: string
    }>
    inputs?: string[]
  }>

  cursado: Array<{

    role: string
    name: string
    link?: string
    subMenu?: Array<{
      name: string
      link?: string
    }>
    inputs?: string[]
  }>

  campañas: Array<{

    role: string
    name: string
    link?: string
    subMenu?: Array<{
      name: string
      link?: string
    }>
    inputs?: string[]
  }>

  administración: Array<{

    role: string
    name: string
    link?: string
    subMenu?: Array<{
      name: string
      link?: string
    }>
    inputs?: string[]
  }>
}

const categories: categoriesProps = {
  archivo: [
    { role: 'dialog', name: 'Sede', link: '/', subMenu: [{ name: 'ABM Sede' }, { name: 'Consultar Sede' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Campaña', link: '/', subMenu: [{ name: 'ABM Campaña' }, { link: '/', name: 'Consultar Campaña' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Cohorte', link: '/', subMenu: [{ name: 'ABM Cohorte' }, { link: '/', name: 'Consultar Cohorte' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Modalidad', link: '/', subMenu: [{ name: 'ABM Modalidad' }, { link: '/', name: 'Consultar Modalidad' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Nivel Estudio', link: '/', subMenu: [{ name: 'ABM Nivel Estudio' }, { link: '/', name: 'Consultar Nivel Estudio' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Elección ISSD', link: '/', subMenu: [{ name: 'ABM Elección' }, { link: '/', name: 'Consultar Elección ISSD' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Elección Carrera', link: '/', subMenu: [{ name: 'ABM Eelección Carrera' }, { link: '/', name: 'Consultar Elección Carrera' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Carga Semanal', link: '/', subMenu: [{ name: 'ABM Carga Semanal' }, { link: '/', name: 'Consultar Carga Semanal' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Tipo DNI', link: '/', subMenu: [{ name: 'ABM Tipo DNI' }, { link: '/', name: 'Consultar Tipo DNI' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Sexo', link: '/', subMenu: [{ name: 'ABM Sexo' }, { link: '/', name: 'Consultar Sexo' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Estado Civil', link: '/', subMenu: [{ name: 'ABM Estado Civil' }, { link: '/', name: 'Consultar Estado Civil' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Tipo Vivienda', link: '/', subMenu: [{ name: 'ABM Tipo Vivienda' }, { link: '/', name: 'Consultar Tipo Vivienda' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Parentesco', link: '/', subMenu: [{ name: 'ABM Parentesco' }, { link: '/', name: 'Consultar Parentesco' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Ocupación', link: '/', subMenu: [{ name: 'ABM Ocupación' }, { link: '/', name: 'Consultar Ocupación' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Vive Con', link: '/', subMenu: [{ name: 'ABM Vive Con' }, { link: '/', name: 'Consultar Vive Con' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Pais', link: '/', subMenu: [{ name: 'ABM Pais' }, { link: '/', name: 'Consultar Pais' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Provincia', link: '/', subMenu: [{ name: 'ABM Provincia' }, { link: '/', name: 'Consultar Provincia' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Localidad', link: '/', subMenu: [{ name: 'ABM Localidad' }, { link: '/', name: 'Consultar Localidad' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Barrio', link: '/', subMenu: [{ name: 'ABM Barrio' }, { link: '/', name: 'Consultar Barrio' }], inputs: ['code', 'name'] }
  ],

  carreras: [
    { role: 'dialog', name: 'Carreras', link: '/', subMenu: [{ name: 'ABM Carreras' }, { link: '/', name: 'Consultar Carreras' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Materias', link: '/', subMenu: [{ name: 'ABM Materias' }, { link: '/', name: 'Consultar Materias' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Planes Estudio', link: '/', subMenu: [{ name: 'ABM Planes Estudio' }, { link: '/', name: 'Consultar Planes Estudio' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Correlativas', link: '/', subMenu: [{ name: 'ABM Correlativas' }, { link: '/', name: 'Consultar Correlativas' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Material Didáctico', link: '/', subMenu: [{ name: 'ABM Material Didáctico' }, { link: '/', name: 'Consultar Material Didáctico' }], inputs: ['code', 'name'] }
  ],

  alumnos: [
    { role: 'dialog', name: 'Alumnos', link: '/', subMenu: [{ name: 'ABM Alumnos' }, { link: '/', name: 'Consultar Alumnos' }], inputs: ['code', 'name'] },

    { role: 'link', name: 'Historico Alumnos', link: '/' },

    { role: 'dialog', name: 'Equivalencias', link: '/', subMenu: [{ name: 'ABM Equivalencias' }, { link: '/', name: 'Consultar Equivalencias' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Asistencias', link: '/', subMenu: [{ name: 'ABM Asistencias' }, { link: '/', name: 'Consultar Asistencias' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Pases', link: '/', subMenu: [{ name: 'ABM Pases' }, { link: '/', name: 'Consultar Pases' }], inputs: ['code', 'name'] }
  ],

  docentes: [
    { role: 'dialog', name: 'Docentes', link: '/', subMenu: [{ name: 'ABM Docentes' }, { link: '/', name: 'Consultar Docentes' }], inputs: ['code', 'name'] },

    { role: 'link', name: 'Histórico Docentes', link: '/' },

    { role: 'link', name: 'Emitir Certificado', link: '/' },

    { role: 'dialog', name: 'Tardanzas', link: '/', subMenu: [{ name: 'ABM Tardanzas' }, { link: '/', name: 'Consultar Tardanzas' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Inasistencias', link: '/', subMenu: [{ name: 'ABM Inasistencias' }, { link: '/', name: 'Consultar Inasistencias' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Marcas', link: '/', subMenu: [{ name: 'ABM Marcas' }, { link: '/', name: 'Consultar Marcas' }], inputs: ['code', 'name'] }
  ],

  cursado: [
    { role: 'dialog', name: 'Inscripciónes Cursado', link: '/', subMenu: [{ name: 'ABM Inscripciónes Cursado' }, { link: '/', name: 'Consultar Cursado' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Inscripción Examen', link: '/', subMenu: [{ name: 'ABM Inscripción Examen' }, { link: '/', name: 'Consultar Examen' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Turno Examen', link: '/', subMenu: [{ name: 'ABM Turno Examen' }, { link: '/', name: 'Consultar Turno' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Programación Horarios', link: '/', subMenu: [{ name: 'ABM Programación Horarios' }, { link: '/', name: 'Consultar Programación Horarios' }], inputs: ['code', 'name'] }
  ],

  campañas: [
    { role: 'dialog', name: 'Asesores', link: '/', subMenu: [{ name: 'ABM Asesores' }, { link: '/', name: 'Consultar Asesores' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Liquidación Asesores', link: '/', subMenu: [{ name: 'ABM Liquidación Asesores' }, { link: '/', name: 'Consultar Liquidación Asesores' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Convocatorias', link: '/', subMenu: [{ name: 'ABM Convocatorias' }, { link: '/', name: 'Consultar Convocatorias' }], inputs: ['code', 'name'] }
  ],

  administración: [
    { role: 'dialog', name: 'Pagos', link: '/', subMenu: [{ name: 'ABM Pagos' }, { link: '/', name: 'Consultar Pagos' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Recibos', link: '/', subMenu: [{ name: 'ABM Recibos' }, { link: '/', name: 'Consultar Recibos' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Compromisos Pago', link: '/', subMenu: [{ name: 'ABM Compromisos Pago' }, { link: '/', name: 'Consultar Compromisos' }], inputs: ['code', 'name'] },

    { role: 'dialog', name: 'Plan de Cuotas', link: '/', subMenu: [{ name: 'ABM Plan de Cuotas' }, { link: '/', name: 'Consultar Plan de Cuotas' }], inputs: ['code', 'name'] }
  ]
}



export { categories }

