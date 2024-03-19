import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { categories } from '@/utils/Links'
import Link from 'next/link'

function Header() {
  return (
    <header className=''>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Archivo</MenubarTrigger>
          <MenubarContent>
            {categories.archivo.map(category => (
              <MenubarItem key={category}>
                <Link href={category}>{category}</Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Carreras</MenubarTrigger>
          <MenubarContent>
            {categories.carreras.map(category => (
              <MenubarItem key={category}>
                <Link href={category}>{category}</Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Alumnos</MenubarTrigger>
          <MenubarContent>
            {categories.alumnos.map(category => (
              <MenubarItem key={category}>
                <Link href={category}>{category}</Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Docentes</MenubarTrigger>
          <MenubarContent>
            {categories.docentes.map(category => (
              <MenubarItem key={category}>
                <Link href={category}>{category}</Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Cursado</MenubarTrigger>
          <MenubarContent>
            {categories.cursado.map(category => (
              <MenubarItem key={category}>
                <Link href={category}>{category}</Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Campañas</MenubarTrigger>
          <MenubarContent>
            {categories.campañas.map(category => (
              <MenubarItem key={category}>
                <Link href={category}>{category}</Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Administación</MenubarTrigger>
          <MenubarContent>
            {categories.administración.map(category => (
              <MenubarItem key={category}>
                <Link href={category}>{category}</Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </header>
  )
}

export default Header
