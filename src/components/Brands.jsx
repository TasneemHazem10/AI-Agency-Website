export default function Brands() { 
  const brands = ["twitter_icon","linkedin_icon", "instagram_icon", "email_icon", "content_icon","google_logo", "facebook_icon"]; 
  return ( 
    <section className="py-16 text-center"> 
      <p className="mb-8 text-gray-500">Trusted by Leading Companies</p>
      <div className="flex flex-wrap justify-center gap-10">
        {brands.map(b => (
          <img key={b} src={`/assets/${b}.svg`} className="h-8" />
        ))}
      </div> 
    </section> 
  ); 
}