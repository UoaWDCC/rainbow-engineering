
"use client";


export default function Initiatives() {
    return (
        <>
        {/*================================HEADER================================*/}

        <div id="banner" className="bg-purple-200 p-12 relative -z-10">
            <h1 className="text-4xl text-purple-900 font-bold font-[Montserrat] z-10">
                Community & Initiatives
            </h1>
        </div>

        

        {/*================================RAINBOW ROOM================================*/}
        <div>
            {        /*header for rainbow room safe space        */}
            <div className="max-w-7xl mx-auto px-4 text-purple-700">
                <h2 className="text-4xl font-bold mb-3 p-6">RAINBOW ROOM</h2>
            </div>
            
            {       /*purple box for rainbow room safe space     */}
            <div className="flex flex-col  text-purple-700 mx-8 bg-violet-200 h-80 p-4 rounded-4xl">
            <h2 className="text-4xl font-semibold">safe space</h2>
            
            <p className="text-lg text-slate-700 p=3">
                information:
            </p>
            
            </div>
            

            {       /*purple box for rainbow room Happy Hour     */}
            <div className="flex flex-col  text-purple-700 mx-8 my-2.5 bg-violet-200 h-80 p-4 rounded-4xl">
            <h2 className="text-4xl font-semibold">Happy Hour</h2>
            
            <p className="text-lg text-slate-700 p=7">
                information:
            </p>
            </div>
        </div>

        {/*================================SWEAT WITH PRIDE================================*/}
        
        <div>
            {        /*header for sweat with pride safe space     */}
            <div className="max-w-7xl mx-auto px-4 text-purple-700">
                <h2 className="text-4xl font-bold mb-3 p-6">SWEAT WITH PRIDE</h2>
            </div>
            {       /*purple box for rainbow room Happy Hour     */}
            <div className="flex flex-col  text-purple-700 mx-8 my-2.5 bg-violet-200 h-80 p-4 rounded-4xl">
            
            
            <p className="text-lg text-slate-700 p=7">
                information:
            </p>
            </div>
        </div>

        {/*================================SAUSAGE SIZZLE================================*/}
        <div className="pb-8">

            {        /*header for sausage sizzle safe space     */}
            <div className="max-w-7xl mx-auto px-4 text-purple-700">
                <h2 className="text-4xl font-bold mb-3 p-6">SAUSAGE SIZZLE</h2>
            </div>
            
            {       /*purple box for rainbow room Happy Hour     */}
            <div className="flex flex-col  text-purple-700 mx-8 my-2.5 bg-violet-200 h-80 p-4 pb-8 rounded-4xl">
            
            
            <p className="text-lg text-slate-700 p=7">
                information:
            </p>
            </div>
        
        </div>
        
        </>
        
    );
}