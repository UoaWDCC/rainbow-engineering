import Image from "next/image";
export default function Home() {
  return (
    <div>

      
      <div className="max-w-7xl mx-auto px-4">


        {/*================================HEADER SECTION================================*/}
        <h1 className="text-7xl font-bold underline mb-8 text-center">Rainbow Engineering!</h1>
        
        
        
        {/*================================ABOUT US SECTION================================*/}
        <h2 className="text-5xl font-bold mb-3 text-center p-6">About us!</h2>
        <div className="flex items-center gap-8 mb-8">

          {/* code for about us image */}
          <div className="flex flex-col items-center text-center bg-violet-200 rounded">
            <img
            src="/about_us_temp.png"
            alt="About Us"
            className="w-500 h-120 rounded-t"
          />
          </div>
          {/* code for about us text */}
          <div className="flex flex-col justify-center items-center text-center bg-violet-200 w-500 h-120 p-4 rounded">
          <h2 className="text-4xl font-semibold mb-4">About Us</h2>
          <p className="text-lg text-slate-700 p=7">
            Rainbow Engineering is a vibrant community of tech enthusiasts dedicated to fostering innovation and collaboration. Our mission is to create an inclusive environment where everyone can learn, grow, and contribute to exciting projects.
          </p>
          </div>
        </div>
        
        
        {/*================================MEET THE EXECS================================*/}
        <h2 className="text-5xl font-bold mb-3 text-center p-6">Meet the Exec Team!</h2>
        <div className="grid grid-cols-5 gap-5"> {/* div for meet the execs */}

          <div className="flex flex-col items-center text-center bg-violet-200 p-4 rounded">
            <img
              src="/exec_placeholder_image.png"
              alt="Exec Name"
              className="w-30 h-30 mb-2"
            />
            <h3 className="font-semibold">Abhijot Malhi</h3>
            <p className="text-sm text-black-600 mb-1">Tech Lead</p>
            <br></br>
            <p className="text-sm text-slate-700">Abhijot leads technical projects with a passion for scalable solutions and mentoring developers.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-violet-200 p-4 rounded">
            <img
              src="/exec_placeholder_image.png"
              alt="Exec Name"
              className="w-30 h-30 mb-2"
            />
            <h3 className="font-semibold">Abhijot Malhi</h3>
            <p className="text-sm text-black-600 mb-1">Tech Lead</p>
            <br></br>
            <p className="text-sm text-slate-700">Abhijot leads technical projects with a passion for scalable solutions and mentoring developers.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-violet-200 p-4 rounded">
            <img
              src="/exec_placeholder_image.png"
              alt="Exec Name"
              className="w-30 h-30 mb-2"
            />
            <h3 className="font-semibold">Abhijot Malhi</h3>
            <p className="text-sm text-black-600 mb-1">Tech Lead</p>
            <br></br>
            <p className="text-sm text-slate-700">Abhijot leads technical projects with a passion for scalable solutions and mentoring developers.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-violet-200 p-4 rounded">
            <img
              src="/exec_placeholder_image.png"
              alt="Exec Name"
              className="w-30 h-30 mb-2"
            />
            <h3 className="font-semibold">Abhijot Malhi</h3>
            <p className="text-sm text-black-600 mb-1">Tech Lead</p>
            <br></br>
            <p className="text-sm text-slate-700">Abhijot leads technical projects with a passion for scalable solutions and mentoring developers.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-violet-200 p-4 rounded">
            <img
              src="/exec_placeholder_image.png"
              alt="Exec Name"
              className="w-30 h-30 mb-2"
            />
            <h3 className="font-semibold">Abhijot Malhi</h3>
            <p className="text-sm text-black-600 mb-1">Tech Lead</p>
            <br></br>
            <p className="text-sm text-slate-700">Abhijot leads technical projects with a passion for scalable solutions and mentoring developers.</p>
          </div>
          
        </div>
        

        {/*================================SCROLLING GALLERY================================*/}
        <h2 className="text-5xl font-bold mb-3 text-center p-6">Scrolling Gallery (Not Scrolling Yet)</h2>
        {/* placeholder images till we figure out how to do this */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {/* Gallery Image 1 */}
          <div className="bg-violet-200 p-4 rounded">
            <img
              src="/about_us_temp.png"
              alt="Gallery Image 1"
              className="w-full h-auto rounded"
            />
          </div>
          {/* Gallery Image 2 */}
          <div className="bg-violet-200 p-4 rounded">
            <img
              src="/about_us_temp.png"
              alt="Gallery Image 2"
              className="w-full h-auto rounded"
            />
          </div>
          {/* Gallery Image 3 */}
          <div className="bg-violet-200 p-4 rounded">
            <img
              src="/about_us_temp.png"
              alt="Gallery Image 3"
              className="w-full h-auto rounded"
            />
          </div>
          {/* Gallery Image 4 */}
          <div className="bg-violet-200 p-4 rounded">
            <img
              src="/about_us_temp.png"
              alt="Gallery Image 4"
              className="w-full h-auto rounded"
            />

          </div>

        
        
        </div>


      </div>
    </div>
  );
}
