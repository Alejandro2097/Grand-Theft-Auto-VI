const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav>
        <img
          src="images/nav-logo.svg"
          className='scale-90'
          onClick={scrollToTop}
          style={{ cursor: 'pointer' }}
          alt="Logo"
        />
        <img src="images/menu.svg" className='w-10' alt="Menu"/>
    </nav>
  )
}

export default Navbar
