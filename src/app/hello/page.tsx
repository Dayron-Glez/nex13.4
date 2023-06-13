
export default async function Hello () {
    await new Promise((resolve)=>setTimeout(resolve,2000))
    // throw  Error("Bazinga");
    return (
        <div>
            Hello Next 13.4 🙂 !
        </div>
        
    )
}