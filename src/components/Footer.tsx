const Footer = () => {
    return (
      <>
      <div className="bg-yellow-500 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <span className="text-3xl text-white font-bold tracking-tight">
            Gopalaas.com
          </span>
          <span className="text-white font-bold tracking-tight flex gap-4">
            <aside>
              <span>Privacy Policy</span><br />
              <span>Terms of Service</span>
              <p>Copyright © {new Date().getFullYear()} - All right reserved by Gopalaas Pvt Ltd</p>
            </aside>
          </span>
        </div>
      </div> 
      </>
    );
  };
  
  export default Footer;