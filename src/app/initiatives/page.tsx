"use client";
import ImageCard from "../components/ImageCard";
import Banner from "../components/Banner";

export default function Initiatives() {
  return (
    <>
      <Banner />
      <div id="content" className="bg-F1EAFB">
        {/*================================HEADER================================*/}
        <div id="banner" className="p-12 relative">
          <h1 className="text-4xl text-purple-800 font-bold font-[Montserrat] z-10">
            Community & Initiatives
          </h1>
        </div>
        <ImageCard
          title="Rainbow Room"
          content="A safe space to relax and study for queer students at UoA. It is located ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus lectus sit amet mi condimentum venenatis. Aliquam sed eros nec nibh euismod vestibulum. Maecenas eros purus, pellentesque a congue nec, aliquet in nibh. Nullam erat est, viverra sit amet lobortis sit amet, molestie elementum dolor. Nam scelerisque accumsan risus fringilla iaculis. Quisque vehicula facilisis ligula, non placerat purus ultricies ac. Morbi tempus metus vel ullamcorper tempor. Etiam vitae tincidunt sem. Etiam id odio sit amet nunc lacinia efficitur sit amet id leo. Curabitur condimentum lacus sed ipsum mollis dignissim. Cras vel malesuada elit. Nullam ut pulvinar elit. Quisque at rhoncus erat. Proin placerat imperdiet dictum. "
          imageSrc="/about_us_temp.png"
        />
        <ImageCard
          title="Sweat With Pride"
          content="Body text for sweat with pride...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus lectus sit amet mi condimentum venenatis. Aliquam sed eros nec nibh euismod vestibulum. Maecenas eros purus, pellentesque a congue nec, aliquet in nibh. Nullam erat est, viverra sit amet lobortis sit amet, molestie elementum dolor. Nam scelerisque accumsan risus fringilla iaculis. Quisque vehicula facilisis ligula, non placerat purus ultricies ac. Morbi tempus metus vel ullamcorper tempor. Etiam vitae tincidunt sem. Etiam id odio sit amet nunc lacinia efficitur sit amet id leo. Curabitur condimentum lacus sed ipsum mollis dignissim. Cras vel malesuada elit. Nullam ut pulvinar elit. Quisque at rhoncus erat. Proin placerat imperdiet dictum. "
          imageSrc="/sweatwithprideplaceholder.jpg"
          buttonText="Sign Up!"
          buttonHref="https://www.sweatwithpride.com/register/swp/start"
        />
        <ImageCard
          title="Sausage Sizzle"
          content="The sausages? Sizzling. The money? Going to a good cause. Come to location on ...
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus lectus sit amet mi condimentum venenatis. Aliquam sed eros nec nibh euismod vestibulum. Maecenas eros purus, pellentesque a congue nec, aliquet in nibh. Nullam erat est, viverra sit amet lobortis sit amet, molestie elementum dolor. Nam scelerisque accumsan risus fringilla iaculis. Quisque vehicula facilisis ligula, non placerat purus ultricies ac. Morbi tempus metus vel ullamcorper tempor. Etiam vitae tincidunt sem. Etiam id odio sit amet nunc lacinia efficitur sit amet id leo. Curabitur condimentum lacus sed ipsum mollis dignissim. Cras vel malesuada elit. Nullam ut pulvinar elit. Quisque at rhoncus erat. Proin placerat imperdiet dictum. "
        />
      </div>
      {
        // {/*================================RAINBOW ROOM================================*/}
        // <div>
        //   {/*header for rainbow room safe space        */}
        //   <div className="max-w-7xl mx-auto px-4 text-purple-700">
        //     <h2 className="text-4xl font-bold mb-3 p-6">RAINBOW ROOM</h2>
        //   </div>
        //   {/*purple box for rainbow room safe space     */}
        //   <div className="flex flex-col  text-purple-700 mx-8 bg-violet-200 h-80 p-4 rounded-4xl">
        //     <h2 className="text-4xl font-semibold">safe space</h2>
        //     <p className="text-lg text-slate-700 p=3">information:</p>
        //   </div>
        //   {/*purple box for rainbow room Happy Hour     */}
        //   <div className="flex flex-col  text-purple-700 mx-8 my-2.5 bg-violet-200 h-80 p-4 rounded-4xl">
        //     <h2 className="text-4xl font-semibold">Happy Hour</h2>
        //     <p className="text-lg text-slate-700 p=7">information:</p>
        //   </div>
        // </div>
        // {/*================================SWEAT WITH PRIDE================================*/}
        // <div>
        //   {/*header for sweat with pride safe space     */}
        //   <div className="max-w-7xl mx-auto px-4 text-purple-700">
        //     <h2 className="text-4xl font-bold mb-3 p-6">SWEAT WITH PRIDE</h2>
        //   </div>
        //   {/*purple box for rainbow room Happy Hour     */}
        //   <div className="flex flex-col  text-purple-700 mx-8 my-2.5 bg-violet-200 h-80 p-4 rounded-4xl">
        //     <p className="text-lg text-slate-700 p=7">information:</p>
        //   </div>
        // </div>
        // {/*================================SAUSAGE SIZZLE================================*/}
        // <div className="pb-8">
        //   {/*header for sausage sizzle safe space     */}
        //   <div className="max-w-7xl mx-auto px-4 text-purple-700">
        //     <h2 className="text-4xl font-bold mb-3 p-6">SAUSAGE SIZZLE</h2>
        //   </div>
        //   {/*purple box for rainbow room Happy Hour     */}
        //   <div className="flex flex-col  text-purple-700 mx-8 my-2.5 bg-violet-200 h-80 p-4 pb-8 rounded-4xl">
        //     <p className="text-lg text-slate-700 p=7">information:</p>
        //   </div>
        // </div>
      }{" "}
    </>
  );
}
