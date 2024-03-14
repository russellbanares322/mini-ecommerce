const Footer = () => {
  const currentDate = new Date(Date.now()).getFullYear();
  return (
    <footer className="bg-dark-green mt-7 py-2">
      <p className="text-center text-white">
        All Rights Reserved © {currentDate}
      </p>
    </footer>
  );
};

export default Footer;
