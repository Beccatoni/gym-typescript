import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            aspernatur nam minima voluptas natus dolore dicta hic laborum.
            Quisquam blanditiis in magnam suscipit at, possimus quidem magni aut
            necessitatibus qui.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
