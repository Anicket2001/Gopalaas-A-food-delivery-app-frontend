import heroImg from "../assets/Your paragraph text (1).png";

const Hero = () => {
  return (
    <div>
      <img src={heroImg} className="w-full max-h-[600px] object-cover" />
    </div>
  );
};

export default Hero;