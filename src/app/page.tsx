import Image from "next/image";

export default function Home() {
  return (
    
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-7xl font-bold underline mb-8">Rainbow Engineering!</h1>
        <div> {/* div for about us (koko) */}

        </div>
        <h2 className="text-5xl font-bold mb-3">Meet the Exec Team!</h2>
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
      </div>
    </div>
  );
}
