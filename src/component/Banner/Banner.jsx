import img from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mx-auto ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
         <div className="lg:w-1/2">
         <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
         </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> <span className='text-indigo-600'>Dream Job</span></h1>
            <p className="py-6">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
            <button className="btn btn-primary bg-[#7c3aed]">Get Started </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;