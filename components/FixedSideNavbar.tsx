export type FixedSideNavbarProps = {
  menus: string[]
}

export default function FixedSideNavbar({ menus }: FixedSideNavbarProps) {
  return (
    <div className='fixed-side-navbar'>
      <ul className='nav flex-column'>
        {menus.map(menu => {
          const cleanedMenu = menu.replaceAll(' ', '-').toLocaleLowerCase()

          return (
            <li className='nav-item' key={cleanedMenu}>
              <a className='nav-link' href={`#${cleanedMenu}`}>
                <span>{menu}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
